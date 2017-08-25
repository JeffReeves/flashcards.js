/* SELECT DATABASE */
USE flashcardsjs;

/* CREATE TABLES */
CREATE TABLE decks (
    userid int NOT NULL,
    title varchar(80) NOT NULL,
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE cards (
    deckid int NOT NULL,
    front varchar(255) NOT NULL,
    back varchar(255) NOT NULL,
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    username varchar(20) NOT NULL,
    password varchar(128) NOT NULL,
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
);

/* CREATE FIRST USER */
INSERT INTO users (username, password) VALUES ('jeff', 'aoeui');

/* INSERT DECKS */
INSERT INTO decks (userid, title)
SELECT id, 'CH1 - Command Line' 
FROM users WHERE username = 'jeff';

INSERT INTO decks (userid, title)
SELECT id, 'CH2 - Package Managers' 
FROM users WHERE username = 'jeff';

INSERT INTO decks (userid, title)
SELECT id, 'CH2 - Libraries' 
FROM users WHERE username = 'jeff';

INSERT INTO decks (userid, title)
SELECT id, 'CH2 - Processes' 
FROM users WHERE username = 'jeff';

/* CREATE CARDS */
SET @userid = (SELECT id FROM users WHERE username  = 'jeff');
SET @deckid = (SELECT id FROM decks WHERE userid = @userid AND title = 'CH1 - Command Line');
INSERT INTO cards (deckid, front, back)
VALUES (@deckid, 
'Where is the file that stores bash history?', 
'~/.bash_history'
);

INSERT INTO cards (deckid, front, back)
VALUES (@deckid, 
'Which command can concatenate files together and send the resulting combination to STDOUT (1)?',
'cat \n\nEx. cat first.txt second.txt > combined.txt'
);

INSERT INTO cards (deckid, front, back)
VALUES (@deckid, 
'Which command directly modifies a file\'s content and sends the changes to STDOUT (0)?',
'sed'
);


SET @userid = (SELECT id FROM users WHERE username  = 'jeff');
SET @deckid = (SELECT id FROM decks WHERE userid = @userid AND title = 'CH2 - Package Managers');
INSERT INTO cards (deckid, front, back)
VALUES (@deckid, 
'Before upgrading a package with dpkg, what may need to be done first? and what is the command?',
'The old package may need to be removed first.\n\n# dpkg -r <package-name>'
),
(@deckid, 
'Binary packages typically contain what type of content?',
'Subdirectories that mimic the layout of the Linux root directory (i.e. /, /etc, /usr, etc.).'
),
(@deckid,
'Debian package tools combine and compile source packages to create what?',
'Debian binary packages' 
);


SET @userid = (SELECT id FROM users WHERE username  = 'jeff');
SET @deckid = (SELECT id FROM decks WHERE userid = @userid AND title = 'CH2 - Libraries');
INSERT INTO cards (deckid, front, back)
VALUES (@deckid, 
'How can binary program files locate libraries?',
'Either by name alone (ex. libc.so.6) or by providing a complete path (ex. /lib/libc.so.6).\n\nNote: a library path (containing directories to search through) must be configured to use names alone.' 
),
(@deckid, 
'How can the LD_LIBRARY_PATH environment variable be set?',
'export LD_LIBRARY_PATH=<path1>:<pathN>' 
),
(@deckid,
'If all dependencies are met for a program but it still fails to load due to missing dependencies, what can be done?',
'Use the ldd command on the libraries shown when running ldd on the program. Sometimes these libraries have dependencies that may be missing.' 
);


SET @userid = (SELECT id FROM users WHERE username  = 'jeff');
SET @deckid = (SELECT id FROM decks WHERE userid = @userid AND title = 'CH2 - Processes');
INSERT INTO cards (deckid, front, back)
VALUES (@deckid, 
'Because many shells include their own internal version of the kill command, what must be done to ensure the external kill command is being used?',
'Call it with a full path\n\ni.e. /bin/kill' 
),
(@deckid, 
'By default, ps displays which processes? and how wide is the output?',
'ps displays only processes that were run from its own terminal (options -A, -e, and x can overwrite this).\n\nThe output is limited to being 80 characters wide and is truncated beyond that length (options -w and w can ovewrite this).' 
),
(@deckid,
'By default, top sorts entries by what? and how often does it update?',
'CPU use\n\nEvery five (5) seconds' 
);

/* EXAMPLE SELECT ALL CARDS FROM A PARTICULAR DECK */
SELECT cards.id, cards.deckid 
FROM cards INNER JOIN decks ON cards.deckid=decks.id 
WHERE decks.id = 2;

SELECT cards.id, cards.deckid 
FROM cards INNER JOIN decks ON cards.deckid=decks.id 
WHERE decks.title = 'CH1 - Command Line';