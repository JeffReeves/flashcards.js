
var decks = [
    { 
        id: 0,
        title: 'CH1 - Command Line',
        numberCorrect: 0
    },
    { 
        id: 1, 
        title: 'CH2 - Package Managers',
        numberCorrect: 0
    },
    { 
        id: 2, 
        title: 'CH2 - Libraries',
        numberCorrect: 0
    },
    { 
        id: 3, 
        title: 'CH2 - Processes',
        numberCorrect: 0
    }
];

// CH1 - Command Line
decks[0].cards = [
    {
        id: 0,
        front: 'xargs delimits its input using which characters by default? and how can this be changed?',
        back: 'spaces and newlines\n\nThe -d "<characters>" option',
        correct: false
    },
    {
        id: 1,
        front: 'Which command directly modifies a file\'s content and sends the changes to STDOUT (0)?',
        back: 'sed',
        correct: false
    },
    {
        id: 2,
        front: 'Which command can concatenate files together and send the resulting combination to STDOUT (1)?',
        back: 'cat\n\nEx. cat first.txt second.txt > combined.txt',
        correct: false
    },
    {
        id: 3,
        front: 'Where is the file that stores bash history?',
        back: '~/.bash_history',
        correct: false
    },
    {
        id: 4,
        front: 'Where does a shell look for commands?',
        back: 'It first checks for internal commands, and if none are found, it checks for external commands within any of the directories listed on the $PATH environment variable.',
        correct: false
    },
    {
        id: 5,
        front: 'When an interactive shell is invoked for bash, what files does it attempt to read commands from automatically?',
        back: '/etc/profile, ~/.bash_profile, ~/.bash_login, and ~/.profile (in that order)',
        correct: false
    },
    {
        id: 6,
        front: 'When an interactive shell (not a login shell) is started, which file is read and executed by bash?',
        back: '~/.bashrc\n\n(if it exists)',
        correct: false
    },
    {
        id: 7,
        front: 'What wc option displays a newline count?',
        back: '-I\n--lines',
        correct: false
    },
    {
        id: 8,
        front: 'What wc option displays a word count?',
        back: '-w\n--words',
        correct: false
    },
    {
        id: 9,
        front: 'What wc option displays the length of the longest line?',
        back: '-L\n--max-line-Iength',
        correct: false
    },
    {
        id: 10,
        front: 'When a login shell exits, which files does it attempt to process commands from?',
        back: '~/.bash_logout and /etc/bash.bash_logout (in that order).',
        correct: false
    },
    {
        id: 11,
        front: 'What tr option deletes characters from SET1?',
        back: '-d',
        correct: false
    },
    {
        id: 12,
        front: 'What two methods are similar to using the xargs command?',
        back: '1. Enclosing a command within backticks (`):\n$ rm `find ./ -user jeff`\n\n2. Enclosing commands within a $( ):\n$ rm $(find ./ -user jeff)',
        correct: false
    },
    {
        id: 13,
        front: 'What wc option displays a byte count?',
        back: '-c\n--bytes',
        correct: false
    },
    {
        id: 14,
        front: 'What wc option displays a character count?',
        back: '-m\n--chars',
        correct: false
    },
    {
        id: 15,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 16,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 17,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 18,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 19,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 20,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 21,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 22,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 23,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 24,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 25,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 26,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 27,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 28,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 29,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 30,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 31,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 32,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 33,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 34,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 35,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 36,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 37,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 38,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 39,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 40,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 41,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 42,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 43,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 44,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 45,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 46,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 47,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 48,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 49,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 50,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 51,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 52,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 53,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 54,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 55,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 56,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 57,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 58,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 59,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 60,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 61,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 62,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 63,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 64,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 65,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 66,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 67,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 68,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 69,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 70,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 71,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 72,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 73,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 74,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 75,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 76,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 77,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 78,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 79,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 80,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 81,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 82,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 83,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 84,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 85,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 86,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 87,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 88,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 89,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 90,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 91,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 92,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 93,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 94,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 95,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 96,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 97,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 98,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 99,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 100,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 101,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 102,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 103,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 104,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 105,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 106,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 107,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 108,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 109,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 110,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 111,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 112,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 113,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 114,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 115,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 116,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 117,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 118,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 119,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 120,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 121,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 122,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 123,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 124,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 125,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 126,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 127,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 128,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 129,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 130,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 131,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 132,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 133,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 134,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 135,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 136,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 137,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 138,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 139,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 140,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 141,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 142,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 143,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 144,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 145,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 146,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 147,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 148,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 149,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 150,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 151,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 152,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 153,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 154,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 155,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 156,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 157,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 158,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 159,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 160,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 161,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 162,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 163,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 164,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 165,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 166,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 167,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 168,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 169,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 170,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 171,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 172,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 173,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 174,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 175,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 176,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 177,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 178,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 179,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 180,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 181,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 182,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 183,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 184,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 185,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 186,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 187,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 188,
        front: 'text',
        back: 'text',
        correct: false
    }
];


// CH2 - Package Managers
decks[1].cards = [
    {
        id: 0,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 1,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 2,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 3,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 4,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 5,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 6,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 7,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 8,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 9,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 10,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 11,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 12,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 13,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 14,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 15,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 16,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 17,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 18,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 19,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 20,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 21,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 22,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 23,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 24,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 25,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 26,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 27,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 28,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 29,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 30,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 31,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 32,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 33,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 34,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 35,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 36,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 37,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 38,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 39,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 40,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 41,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 42,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 43,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 44,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 45,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 46,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 47,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 48,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 49,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 50,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 51,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 52,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 53,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 54,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 55,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 56,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 57,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 58,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 59,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 60,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 61,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 62,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 63,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 64,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 65,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 66,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 67,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 68,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 69,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 70,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 71,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 72,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 73,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 74,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 75,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 76,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 77,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 78,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 79,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 80,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 81,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 82,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 83,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 84,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 85,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 86,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 87,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 88,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 89,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 90,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 91,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 92,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 93,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 94,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 95,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 96,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 97,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 98,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 99,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 100,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 101,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 102,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 103,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 104,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 105,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 106,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 107,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 108,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 109,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 110,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 111,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 112,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 113,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 114,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 115,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 116,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 117,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 118,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 119,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 120,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 121,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 122,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 123,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 124,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 125,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 126,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 127,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 128,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 129,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 130,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 131,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 132,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 133,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 134,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 135,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 136,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 137,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 138,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 139,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 140,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 141,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 142,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 143,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 144,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 145,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 146,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 147,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 148,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 149,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 150,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 151,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 152,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 153,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 154,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 155,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 156,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 157,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 158,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 159,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 160,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 161,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 162,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 163,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 164,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 165,
        front: 'text',
        back: 'text',
        correct: false
    }
];


// CH2 - Libraries
decks[2].cards = [
    {
        id: 0,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 1,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 2,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 3,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 4,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 5,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 6,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 7,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 8,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 9,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 10,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 11,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 12,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 13,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 14,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 15,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 16,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 17,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 18,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 19,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 20,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 21,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 22,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 23,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 24,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 25,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 26,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 27,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 28,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 29,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 30,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 31,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 32,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 33,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 34,
        front: 'text',
        back: 'text',
        correct: false
    }
];


// CH2 - Processes
decks[3].cards = [
    {
        id: 0,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 1,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 2,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 3,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 4,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 5,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 6,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 7,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 8,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 9,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 10,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 11,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 12,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 13,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 14,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 15,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 16,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 17,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 18,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 19,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 20,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 21,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 22,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 23,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 24,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 25,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 26,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 27,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 28,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 29,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 30,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 31,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 32,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 33,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 34,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 35,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 36,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 37,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 38,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 39,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 40,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 41,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 42,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 43,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 44,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 45,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 46,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 47,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 48,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 49,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 50,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 51,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 52,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 53,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 54,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 55,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 56,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 57,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 58,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 59,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 60,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 61,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 62,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 63,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 64,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 65,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 66,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 67,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 68,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 69,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 70,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 71,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 72,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 73,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 74,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 75,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 76,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 77,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 78,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 79,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 80,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 81,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 82,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 83,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 84,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 85,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 86,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 87,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 88,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 89,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 90,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 91,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 92,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 93,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 94,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 95,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 96,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 97,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 98,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 99,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 100,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 101,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 102,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 103,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 104,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 105,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 106,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 107,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 108,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 109,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 110,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 111,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 112,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 113,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 114,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 115,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 116,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 117,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 118,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 119,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 120,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 121,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 122,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 123,
        front: 'text',
        back: 'text',
        correct: false
    },
    {
        id: 124,
        front: 'text',
        back: 'text',
        correct: false
    }
];