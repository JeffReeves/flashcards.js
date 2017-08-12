
var decks = [
    { 
        id: 0,
        title: 'CH1 - Command Line',
        numberCorrect: 0,
        numberIncorrect: 0
    },
    { 
        id: 1, 
        title: 'CH2 - Package Managers',
        numberCorrect: 0,
        numberIncorrect: 0
    },
    { 
        id: 2, 
        title: 'CH2 - Libraries',
        numberCorrect: 0,
        numberIncorrect: 0
    },
    { 
        id: 3, 
        title: 'CH2 - Processes',
        numberCorrect: 0,
        numberIncorrect: 0
    }
];

// CH1 - Command Line
decks[0].cards = [
    {
		id: 0,
		front: 'Where is the file that stores bash history?',
		back: '~/.bash_history',
		status: null
	},
	{
		id: 1,
		front: 'Which command can concatenate files together and send the resulting combination to STDOUT (1)?',
		back: 'cat \n\nEx. cat first.txt second.txt > combined.txt',
		status: null
	},
	{
		id: 2,
		front: 'Which command directly modifies a file\'s content and sends the changes to STDOUT (0)?',
		back: 'sed',
		status: null
	},
	{
		id: 3,
		front: 'What character does xargs delimits its input by default? and how can this be changed?',
		back: 'The -d "<characters>" option',
		status: null
	},
	{
		id: 4,
		front: 'When an interactive shell is invoked for bash, what files does it attempt to read commands from automatically?',
		back: '[etc/profile, ~/.bash_profile, ~/.bash_login, and ~/.profile (in that order)',
		status: null
	},
	{
		id: 5,
		front: 'Where does a shell look for commands?',
		back: 'It first checks for internal commands, and if none are found, it checks for external commands within any of the directories listed on the SPATH environment variable. ',
		status: null
	},
	{
		id: 6,
		front: 'What wc option displays the length of the longest line?',
		back: '-L \n\n--max-line-length',
		status: null
	},
	{
		id: 7,
		front: 'When a login shell exits, which files does it attempt to process commands from?',
		back: '~/.bash_logout and /etc/bash.bash_logout (in that order).',
		status: null
	},
	{
		id: 8,
		front: 'When an interactive shell is invoked for bash, what files does it attempt to read commands from automatically?',
		back: '/etc/profile, ~/.bash_profile, ~/.bash_login, and ~/.profile (in that order)',
		status: null
	},
	{
		id: 9,
		front: 'What wc option displays a character count?',
		back: '-m \n\n--chars',
		status: null
	},
	{
		id: 10,
		front: 'What wc option displays a newline count?',
		back: '-l \n\n--lines',
		status: null
	},
	{
		id: 11,
		front: 'What wc option displays a word count?',
		back: '-W \n\n--words',
		status: null
	},
	{
		id: 12,
		front: 'What tr option deletes characters from SET1?',
		back: '-d',
		status: null
	},
	{
		id: 13,
		front: 'What two methods are similar to using the xargs command?',
		back: '1. Enclosing a command within backticks (`): \n$ rm `find ./ -user jeff` \n\n2. Enclosing commands within a $( ):\n$ rm $(find ./ -user jeff)',
		status: null
	},
	{
		id: 14,
		front: 'What wc option displays a byte count?',
		back: '-c \n\n--bytes',
		status: null
	},
	{
		id: 15,
		front: 'What we option displays a character count?',
		back: '-m \n\n--chars',
		status: null
	},
	{
		id: 16,
		front: 'What tail option keeps the file open to watch for new lines as they are added?',
		back: '-f \n\n--follow',
		status: null
	},
	{
		id: 17,
		front: 'What tail option specifies the number of lines to output?',
		back: '-n <num> \n\n--lines=<num>',
		status: null
	},
	{
		id: 18,
		front: 'What tail option terminates tracking once the process ID (PID) of a particular pid terminates?',
		back: '--pid=<pid>',
		status: null
	},
	{
		id: 19,
		front: 'What split option breaks input files into pieces by byte sizes?',
		back: '-b \n\n--bytes=<size>',
		status: null
	},
	{
		id: 20,
		front: 'What split option specifies the number of lines that split files can contain?',
		back: '-l\n\n--lines=<num> \n\nEx. split -l 1 myfile.txt',
		status: null
	},
	{
		id: 21,
		front: 'What tail option displays the output in bytes rather than lines?',
		back: '-c <num> \n\n--bytes=<num>',
		status: null
	},
	{
		id: 22,
		front: 'What sort option reverses the sort order?',
		back: '-r \n\n--reverse',
		status: null
	},
	{
		id: 23,
		front: 'What sort option sorts by a 3-letter month abbreviation?',
		back: '-M \n\n--month-sort',
		status: null
	},
	{
		id: 24,
		front: 'What sort option sorts by number?',
		back: '-n \n\n--numeric-sort',
		status: null
	},
	{
		id: 25,
		front: 'What split option breaks input files into pieces by byte sizes?',
		back: '-b \n\n--bytes=<size>',
		status: null
	},
	{
		id: 26,
		front: 'What sed command writes the matched pattern to a specific file?',
		back: 'w <filename>',
		status: null
	},
	{
		id: 27,
		front: 'What sort option allows the user to specify which field to sort on?',
		back: '-k \n\n--key= <value>',
		status: null
	},
	{
		id: 28,
		front: 'What sort option ignores case?',
		back: '-f- \n\n--ignore-case',
		status: null
	},
	{
		id: 29,
		front: 'What sed command quits the script without any output?',
		back: 'Q',
		status: null
	},
	{
		id: 30,
		front: 'What sed command replaces text that matches a REGEXP with specific text?',
		back: 's/<regexp>/<text>',
		status: null
	},
	{
		id: 31,
		front: 'What sed command replaces the selected range of lines with specific text?',
		back: 'c\<text>',
		status: null
	},
	{
		id: 32,
		front: 'What sed command displays the current line number?',
		back: 'n<text>',
		status: null
	},
	{
		id: 33,
		front: 'What sed command quits but prints the current pattern match?',
		back: 'q',
		status: null
	},
	{
		id: 34,
		front: 'What represents any character except newlines in REGEXP?',
		back: '.*',
		status: null
	},
	{
		id: 35,
		front: 'What sed command appends specific text to a file?',
		back: 'a\<text>',
		status: null
	},
	{
		id: 36,
		front: 'What sed command appends text from a specific file into another file?',
		back: 'r <filename>',
		status: null
	},
	{
		id: 37,
		front: 'What sed command inserts specific text into a file?',
		back: 'i<text>',
		status: null
	},
	{
		id: 38,
		front: 'What sed command quits but prints the current pattern match?',
		back: '(need to look up)',
		status: null
	},
	{
		id: 39,
		front: 'What pr option sets the number of characters for the page width? and what is the default?',
		back: '-W <num> \n\n--width <num> \n\nDefault = 72',
		status: null
	},
	{
		id: 40,
		front: 'What pr option sets the text to display in the header?',
		back: '-h <text> \n\n--header= <text>',
		status: null
	},
	{
		id: 41,
		front: 'What pr option specifies the number of columns to output text in?',
		back: '-<numcols> \n\n--columns=<numcols>',
		status: null
	},
	{
		id: 42,
		front: 'What pr option removes the header entirely?',
		back: '-t \n\n--omit-header',
		status: null
	},
	{
		id: 43,
		front: 'What pr option sets the indent character length?',
		back: '-i <num> \n\n--indent=<num>',
		status: null
	},
	{
		id: 44,
		front: 'What pr option sets the length of lines per page?',
		back: '-I <lines> \n\n--length=<lines>',
		status: null
	},
	{
		id: 45,
		front: 'What pr option creates a form-feed character between pages, rather than just using a fixed number of blank lines?',
		back: '-F \n\n-f \n\n--form-feed',
		status: null
	},
	{
		id: 46,
		front: 'What pr option double-spaces the output from a single-spaced file?',
		back: '-d \n\n--double-space',
		status: null
	},
	{
		id: 47,
		front: 'What option type uses double hyphens (--) followed by multi-character strings, which cannot be grouped together?',
		back: 'GNU Long Options \n\nEx. firewall-cmd --zone=public --add-port=22652/tcp --permanent',
		status: null
	},
	{
		id: 48,
		front: 'What option type uses single characters which can be grouped together (with no preceeding hyphens)?',
		back: 'BSD Options \n\nEx. ps aux <username>',
		status: null
	},
	{
		id: 49,
		front: 'What other command can be used in place of grep -E / grep --extended-regexp?',
		back: 'egrep',
		status: null
	},
	{
		id: 50,
		front: 'What other command can be used in place of using grep -F / grep --fixed-strings?',
		back: 'fgrep',
		status: null
	},
	{
		id: 51,
		front: 'What option for the type command can be used to check for both internal and external versions of the same command?',
		back: '- \n\nEx. type -a pw \n\npwd is a shell builtin \n\npwd is /bin/pwd',
		status: null
	},
	{
		id: 52,
		front: 'What option specifies the number of spaces per tab for both the expand and unexpand commands?',
		back: '-t \n\n--tabs=<num>',
		status: null
	},
	{
		id: 53,
		front: 'What option type uses a single hyphen (-) followed by single characters which can be grouped together?',
		back: 'Unix98 Options \n\nEx. ls -al',
		status: null
	},
	{
		id: 54,
		front: 'What option can be used to view a particular man page for a command?',
		back: 'man <section_number> <command>',
		status: null
	},
	{
		id: 55,
		front: 'What option can be used with the man command to search by keyword?',
		back: '-k \n\nex. man -k "server"',
		status: null
	},
	{
		id: 56,
		front: 'What option for cat displays line numbers on each line?',
		back: '-n \n\n--number',
		status: null
	},
	{
		id: 57,
		front: 'What operator creates a new file containing STDOUT (1)?',
		back: '> \n\n1>',
		status: null
	},
	{
		id: 58,
		front: 'What operator sends the contents of a file to STDIN (0)?',
		back: '<',
		status: null
	},
	{
		id: 59,
		front: 'What option can be used to specify the field delimiter on the join command?',
		back: '-t \n\nex. join -t file1.txt file2.txt',
		status: null
	},
	{
		id: 60,
		front: 'What operator can be used to open a file for both reading and writing over STDIN (0)?',
		back: '<>',
		status: null
	},
	{
		id: 61,
		front: 'What operator creates a new file containing both STDOUT (1) and STDERR (2)?',
		back: '&> (bash) \n\n> [file] 2>8t1 (dash) \n\n2>&1 (ksh, csh)',
		status: null
	},
	{
		id: 62,
		front: 'What operator creates a new file containing STDERR (2)?',
		back: '2>',
		status: null
	},
	{
		id: 63,
		front: 'What nl options can adjust the header, body, and footer styling?',
		back: '-h <style_code> \n\n-b <style_code> \n\n-f <style_code> \n\n--header-numbering=<style_code> \n\n--body-numbering=<style_code> \n\n--footer-numbering=<style_code>',
		status: null
	},
	{
		id: 64,
		front: 'What operator and syntax is used to pass a here-document via STDIN (0)?',
		back: '<< [EOF_character(s)] \n\n[line_1] \n\n[line_2] \n\n[---] \n\n[line_n] \n\n[EOF_character(s)]',
		status: null
	},
	{
		id: 65,
		front: 'What operator appends STDOUT (1) to a file?',
		back: '>>',
		status: null
	},
	{
		id: 66,
		front: 'What legacy command can be used to update the whatis database with short descriptions and keywords for entries within man pages?',
		back: 'makewhatis',
		status: null
	},
	{
		id: 67,
		front: 'What nl option can set the page delimiter?',
		back: '-d= \n\n--section-delimiter=',
		status: null
	},
	{
		id: 68,
		front: 'What nl option changes the numbering format? and what are the formats?',
		back: '-n <format> \n\n--number-format= <format> \n\nFormats: \n\nIn - left justified \n\nrn - right justified \n\nrz - rightjustified (with leading zeros)',
		status: null
	},
	{
		id: 69,
		front: 'What keys go to the first or last line within the less pager?',
		back: '9 / Left (first line) \n\nG / Right (last line)',
		status: null
	},
	{
		id: 70,
		front: 'What keys move backwards and forwards in the less pager?',
		back: 'b (backwards) \n\nSpace (forwards) \n\nOR \n\nPgUp (backwards) \n\nPgDown (forwards)',
		status: null
	},
	{
		id: 71,
		front: 'What keys move up or down one line at a time within the less pager?',
		back: 'i / Up (up) \n\nk / Down (down)',
		status: null
	},
	{
		id: 72,
		front: 'What key can be used for command completion?',
		back: 'tab',
		status: null
	},
	{
		id: 73,
		front: 'What key quits the less pager?',
		back: 'q',
		status: null
	},
	{
		id: 74,
		front: 'What keys cycle through less pager search results?',
		back: 'N (backward) \n\nn (forward)',
		status: null
	},
	{
		id: 75,
		front: 'What keys go to the first or last line within the less pager?',
		back: 'g / Left (first line) \n\nG / Right (last line)',
		status: null
	},
	{
		id: 76,
		front: 'What is the Unix/Linux style end of line character?',
		back: 'ASCII 0x08 \n\n\\n',
		status: null
	},
	{
		id: 77,
		front: 'What is used to start a forward search in less?',
		back: '\/<text>',
		status: null
	},
	{
		id: 78,
		front: 'What is used to start a reverse search in less?',
		back: '?<text>',
		status: null
	},
	{
		id: 79,
		front: 'What is the proper syntax for a value held by the PATH environment variable?',
		back: 'A list of colon-separated directories. \n\nEx. /usr/local/bin:/usr/binz/usr/local/sbin:/usr/sbin',
		status: null
	},
	{
		id: 80,
		front: 'What is the syntax of the sed command?',
		back: '$ sed [options] \'<commands>\' [input_file] \n\n0R \n\n$ sed [options] -f <fiIe_containing_commands> [input_file]',
		status: null
	},
	{
		id: 81,
		front: 'What is the tr option for truncating the size of SET1 to the length of SET2?',
		back: '-t \n\n--truncate-set1',
		status: null
	},
	{
		id: 82,
		front: 'What is the Unix/Linux style end of line character?',
		back: 'ASCII 0x0a \n\n\\n',
		status: null
	},
	{
		id: 83,
		front: 'What is the default pager for man pages? and what option can be used to change it?',
		back: 'less pager \n\nman -P <path_to_pager> <command>',
		status: null
	},
	{
		id: 84,
		front: 'What is the default return value of grep?',
		back: 'The name of the file and a line of context for the match (if the file is a text file). ',
		status: null
	},
	{
		id: 85,
		front: 'What is the output syntax of the wc command?',
		back: '<lines/newlines> <word_count> <byte_count> <filename> \n\nEx wc file.txt \n\n308 2343 15534 file.txt',
		status: null
	},
	{
		id: 86,
		front: 'What is the default delimiter for the join command?',
		back: 'space',
		status: null
	},
	{
		id: 87,
		front: 'What is the default output of the pr command?',
		back: 'It outputs the original text with headers (including the current date, time, filename, and page number) with an 80-character line length with a monospaced font. ',
		status: null
	},
	{
		id: 88,
		front: 'What is the default output of the wc command without any additional arguments?',
		back: 'line count, word count, byte count, and filename \n\nEx wc file.txt \n\n308 2343 15534 file.txt',
		status: null
	},
	{
		id: 89,
		front: 'What is a shell?',
		back: 'A program that accepts and interprets text-mode commands and provides an interface to the system.',
		status: null
	},
	{
		id: 90,
		front: 'What is an example of a range expression in REGEXP?',
		back: '[A-Z] \n\n[0-9]',
		status: null
	},
	{
		id: 91,
		front: 'What is an example of bracket expression in REGEXP?',
		back: 'b[aoeui]g \n\nmatches bag, beg, big, bog, bug',
		status: null
	},
	{
		id: 92,
		front: 'What is the default delimiter for thejoin command?',
		back: 'space',
		status: null
	},
	{
		id: 93,
		front: 'What hotkeys can be used to start a reverse search or a forward search through history?',
		back: '^R (reverse search) \n\n^S (forward search)',
		status: null
	},
	{
		id: 94,
		front: 'What hotkeys delete a character to the left and under the cursor in bash?',
		back: 'Backspace (left) \n\n^D / Del (under)',
		status: null
	},
	{
		id: 95,
		front: 'What hotkeys delete words in front of and behind the cursor in bash?',
		back: '^W / Esc -> ^H (backwards) \n\nEsc -> D (forward)',
		status: null
	},
	{
		id: 96,
		front: 'What hotkeys can be used to move to the first and last items in history?',
		back: 'Esc -> < (first) \n\nEsc -> > (last)',
		status: null
	},
	{
		id: 97,
		front: 'What hotkeys can be used to navigate up and down the history?',
		back: '^P / UP (UP) \n\n^N / Down (down)',
		status: null
	},
	{
		id: 98,
		front: 'What hotkeys can be used to quit or terminate a history search?',
		back: '^q (quit) \n\n^G (terminate)',
		status: null
	},
	{
		id: 99,
		front: 'What hotkey is used to move to the start or end of a line in bash?',
		back: '^A or ^E',
		status: null
	},
	{
		id: 100,
		front: 'What hotkey moves the cursor forward or backwards in bash?',
		back: '^B and ^F \n\nLeft and Right',
		status: null
	},
	{
		id: 101,
		front: 'What hotkeys can be used to Capitalize Case, UPPERCASE, and/or lowercase words in bash?',
		back: 'Esc -> C \n\nEsc -> U \n\nEsc -> L \n\n(respectively)',
		status: null
	},
	{
		id: 102,
		front: 'What hotkey deletes everything from the cursor to the beginning of the line in bash?',
		back: '^U / ^X -> Backspace',
		status: null
	},
	{
		id: 103,
		front: 'What hotkey deletes everything from the cursor to the end of line in bash?',
		back: '^K',
		status: null
	},
	{
		id: 104,
		front: 'What hotkey can be used to paste the last thing deleted in bash?',
		back: '^Y',
		status: null
	},
	{
		id: 105,
		front: 'What hotkey can be used to transpose the characters before and under the cursor in bash?',
		back: '^T',
		status: null
	},
	{
		id: 106,
		front: 'What hotkey can be used to transpose the word before a cursor with the one under the cursor in bash?',
		back: 'Esc -> T',
		status: null
	},
	{
		id: 107,
		front: 'What hotkey combination moves the cursor backwards or forward one word at a time?',
		back: 'ESC -> B / F',
		status: null
	},
	{
		id: 108,
		front: 'What grep option recursively searches a directory and all of its subdirectories?',
		back: '-r \n\n--recursive',
		status: null
	},
	{
		id: 109,
		front: 'What head option allows the user to specify how many lines are output?',
		back: '-n <num> \n\n--lines=<num>',
		status: null
	},
	{
		id: 110,
		front: 'What head option changes the output to disply a specific number of bytes instead of lines?',
		back: '-C <num> \n\n--bytes=<num>',
		status: null
	},
	{
		id: 111,
		front: 'What grep option displays the number of lines that match the pattern, instead of displaying context lines?',
		back: '-C \n\n--count',
		status: null
	},
	{
		id: 112,
		front: 'What grep option gets the pattern from a file rather than as an argument?',
		back: '-f <file> \n\n--file=<file>',
		status: null
	},
	{
		id: 113,
		front: 'What grep option ignores the case of the pattern?',
		back: '-i \n\n--ignore-case',
		status: null
	},
	{
		id: 114,
		front: 'What fmt option changes the character width of paragraphs?',
		back: 'w<width> \n\n-w <width> \n\n--width=<width>',
		status: null
	},
	{
		id: 115,
		front: 'What grep option allows the use of extended regular expressions?',
		back: '-E \n\n--extended-regexp',
		status: null
	},
	{
		id: 116,
		front: 'What grep option disables REGEXP and uses basic pattern matching instead?',
		back: '-F \n\n--fixed-strings',
		status: null
	},
	{
		id: 117,
		front: 'What file descriptor numbers are given to each of the three file descriptors?',
		back: '0 = STDIN \n\n1 = STDOUT \n\n2 = STDERR',
		status: null
	},
	{
		id: 118,
		front: 'What file points to the system\'s default system shell?',
		back: '/bin/sh',
		status: null
	},
	{
		id: 119,
		front: 'What filename syntax does a file generated using split have?',
		back: 'x plus a generated alphabetic suffix (i.e. aa, ab, ac, ad, etc.) \n\nEx xaa, xab, etc.',
		status: null
	},
	{
		id: 120,
		front: 'What cut option cuts specific characters from an input file?',
		back: '-c <list> \n\n--characters=<list> \n\n<list> can be a single character (ex. E), a closed range of characters (ex. A-F), or an open range of characters (ex. -6 or 8-).',
		status: null
	},
	{
		id: 121,
		front: 'What cut option prevents cut from echoing lines without delimited characters?',
		back: '-S \n\n--only-delimited',
		status: null
	},
	{
		id: 122,
		front: 'What does bash stand for?',
		back: 'GNU Boume Again Shell',
		status: null
	},
	{
		id: 123,
		front: 'What cut option changes the delimiter for fields to a specific character? and what is the default delimiter?',
		back: '-d <char> \n\n--delim=<char> \n\n--delimiter=<char> \n\nDefault = tab character',
		status: null
	},
	{
		id: 124,
		front: 'What cut option cuts a specific field from the input file?',
		back: '-f <list> \n\n--fields=<list> \n\n<list> can be a single number (ex. 4), a closed range of numbers (ex. 2-4), or an open range of numbers (ex. -4 or 4-).',
		status: null
	},
	{
		id: 125,
		front: 'What cut option cuts a specific number of bytes from an input file?',
		back: '-b <list> \n\n--bytes=<list> \n\n<list> can be a single number (ex. 4), a closed range of numbers (ex. 2-4), or an open range of numbers (ex. -4 or 4-).',
		status: null
	},
	{
		id: 126,
		front: 'What command separates a single file into two or more files?',
		back: 'split',
		status: null
	},
	{
		id: 127,
		front: 'What commands can be used to acquire additional information about a particular command?',
		back: 'man \n\ninfo \n\nhelp (for built-in commands)',
		status: null
	},
	{
		id: 128,
		front: 'What commands can be used to create/assign environment variables?',
		back: '<name>="<value>" \nexport <name> \n\nOR \n\nexport <name>="<value>"',
		status: null
	},
	{
		id: 129,
		front: 'What command produces a word count, line count, or byte count for a file?',
		back: 'WC',
		status: null
	},
	{
		id: 130,
		front: 'What command removes duplicate lines within a file?',
		back: 'uniq',
		status: null
	},
	{
		id: 131,
		front: 'What command searches files for a specific string?',
		back: 'grep',
		status: null
	},
	{
		id: 132,
		front: 'What command is similar to cat but reverses the order of lines in the output?',
		back: 'tac',
		status: null
	},
	{
		id: 133,
		front: 'What command merges files line-by-line, seperating the lines from each file with tabs?',
		back: 'paste \n\nex. paste file1.txt file2.txt',
		status: null
	},
	{
		id: 134,
		front: 'What command organizes files using case-sensitive ASCII values?',
		back: 'sort',
		status: null
	},
	{
		id: 135,
		front: 'What command echos out the first 10 lines of a file to STDOUT (0)?',
		back: 'head',
		status: null
	},
	{
		id: 136,
		front: 'What command echos the last 10 lines of a file to STDOUT (1)?',
		back: 'tail',
		status: null
	},
	{
		id: 137,
		front: 'What command extracts portions of input lines and displays them on STDOUT (1)?',
		back: 'cut',
		status: null
	},
	{
		id: 138,
		front: 'What command converts between Windows and Unix/Linux line ending characters?',
		back: 'dos2unix \n\nunix2dos',
		status: null
	},
	{
		id: 139,
		front: 'What command converts multiple spaces into a tab characters?',
		back: 'unexpand',
		status: null
	},
	{
		id: 140,
		front: 'What command converts tab characters into spaces?',
		back: 'expand',
		status: null
	},
	{
		id: 141,
		front: 'What command can be used to split STDOUT (1) so that it\'s displayed on screen and sent to a file?',
		back: 'tee \n\nEx. $ echo $PATH | tee path.txt',
		status: null
	},
	{
		id: 142,
		front: 'What command can be used to view the value a particular environment variable holds?',
		back: 'echo $<env_name>',
		status: null
	},
	{
		id: 143,
		front: 'What command combines two files by matching their content via a common delimiter?',
		back: 'join \n\nex. join file1.txt file2.txt',
		status: null
	},
	{
		id: 144,
		front: 'What command can be used to prepare a plain-text file for printing?',
		back: 'pr',
		status: null
	},
	{
		id: 145,
		front: 'What command can be used to quickly display the contents of a file out to screen?',
		back: 'cat \n\nEx. cat hello_world.txt',
		status: null
	},
	{
		id: 146,
		front: 'What command can be used to retrieve environment variables?',
		back: 'env',
		status: null
	},
	{
		id: 147,
		front: 'What command can be used to display a file in an unambiguous byte data format, such as octal, hexadecimal, decimal, etc.?',
		back: 'od',
		status: null
	},
	{
		id: 148,
		front: 'What command can be used to execute a particular item number from history?',
		back: '!<number>',
		status: null
	},
	{
		id: 149,
		front: 'What command can be used to generate other commands programmatically?',
		back: 'xargs [options] [command [inital-arguments]]',
		status: null
	},
	{
		id: 150,
		front: 'What command can be used to clean up files with long line lengths, irregular line lengths, or other problems?',
		back: 'fmt',
		status: null
	},
	{
		id: 151,
		front: 'What command can be used to delete an environment variable?',
		back: 'unset <name>',
		status: null
	},
	{
		id: 152,
		front: 'What command can be used to determine if a command is internal or external?',
		back: '$ type <command>',
		status: null
	},
	{
		id: 153,
		front: 'What command can be used as a shortcut to retrieve and execute the last command in history?',
		back: '!!',
		status: null
	},
	{
		id: 154,
		front: 'What command can be used to change a file\'s permissions?',
		back: '$ chmod <option> <file>',
		status: null
	},
	{
		id: 155,
		front: 'What command can be used to change characters from STDIN (1)? and what is its syntax?',
		back: 'tr [options] SET1 [SET2] \n\nEx. tr d D < file1.txt',
		status: null
	},
	{
		id: 156,
		front: 'What command and options can be used as an alternative to dos2unix?',
		back: '$ tr -d [[backslash backslash]] < dosfile.txt > unixfile.txt',
		status: null
	},
	{
		id: 157,
		front: 'What command and options can be used as an alternative to unix2dos?',
		back: '$ sed s/S/"\r" / unixfile.txt > dosfile.txt',
		status: null
	},
	{
		id: 158,
		front: 'What command appends STDERR (2) to a file?',
		back: '2>>',
		status: null
	},
	{
		id: 159,
		front: 'What characters represent the start and end of a line in REGEXP?',
		back: '^ (start) \n\n$ (end)',
		status: null
	},
	{
		id: 160,
		front: 'What combination of hotkeys can be used to launch a full text editor from bash?',
		back: '^X -> ^E \n\n(launches Emacs by default)',
		status: null
	},
	{
		id: 161,
		front: 'What command adds number lines to a file?',
		back: 'nl \n\n(cat -n / cat -b also works)',
		status: null
	},
	{
		id: 162,
		front: 'What character groups are supported by the tr command?',
		back: '[:alnum:] - all letters and numbers. \n\n[:upper:] - all UPPERCASE letters. \n\n[:lower:] - all lowercase letters. \n\n[:digit:] - all numbers. \n\n[A-Z] / [a-z] / [0-9] - ranges between characters.',
		status: null
	},
	{
		id: 163,
		front: 'What character represents an OR in REGEXP?',
		back: '| \n\nEx. car | truck or a|b',
		status: null
	},
	{
		id: 164,
		front: 'What characters capture a subexpression in REGEXP?',
		back: 'Parenthesis () \n\nEx. bat(man) = man is the substring',
		status: null
	},
	{
		id: 165,
		front: 'What cat option shows a dollar sign ($) at the end of each line?',
		back: '-E \n\n--show-ends',
		status: null
	},
	{
		id: 166,
		front: 'What cat option shows all tab characters as ^T?',
		back: '-T \n\n--show-tabs',
		status: null
	},
	{
		id: 167,
		front: 'What cat option shows most control and other special characters using ^ (carat) and M- notations?',
		back: '-V \n\n--show-nonprinting',
		status: null
	},
	{
		id: 168,
		front: 'What are the Windows/DOS end of line characters?',
		back: 'ASCII 0x0d and 0x0a \n\n\\r\\n',
		status: null
	},
	{
		id: 169,
		front: 'What cat option adds numbers to each non-empty line?',
		back: '-b \n\n--number-nonblank',
		status: null
	},
	{
		id: 170,
		front: 'What cat option compresses blank lines into a single blank line?',
		back: '-s \n\n--squeeze-blank',
		status: null
	},
	{
		id: 171,
		front: 'What are the three repetition operators in REGEXP? and what do they represent?',
		back: '* = zero or more times \n\n+ = one or more times \n\n? = zero or one time',
		status: null
	},
	{
		id: 172,
		front: 'What are the two forms of REGEXP?',
		back: 'Basic and extended',
		status: null
	},
	{
		id: 173,
		front: 'What are the two types of default shells?',
		back: 'Interactive shell and system shell',
		status: null
	},
	{
		id: 174,
		front: 'What are the middle three man page sections?',
		back: '4 = Device files (usually stored in /dev) \n\n5 = File formats \n\n6 = Games',
		status: null
	},
	{
		id: 175,
		front: 'What are the three file descriptors used to identify a particular file object?',
		back: 'Standard Input, Standard Output, and Standard Error',
		status: null
	},
	{
		id: 176,
		front: 'What are the three option types that can be used as arguments on various commands?',
		back: 'Unix98 options (Ex. Is -al) \n\n BSD options (Ex. ps axu <username>) \n\nGNU Long options (Ex. firewall-cmd --zone=public --add-port=22652/tcp --permanent)',
		status: null
	},
	{
		id: 177,
		front: 'What are the abbreviations for the three file descriptors used by Linux?',
		back: 'STDIN (Standard Input) \n\nSTDOUT (Standard Output) \n\nSTDERR (Standard Error)',
		status: null
	},
	{
		id: 178,
		front: 'What are the first three man sections?',
		back: '1 = Executable programs and shell commands \n\n2 = System calls provided by the kernel \n\n3 = Library calls provided by program libraries',
		status: null
	},
	{
		id: 179,
		front: 'What are the last three man page sections?',
		back: '7 = Miscellaneous (macro packages, conventions, etc.) \n\n8 = System administrator commands (programs run as root) \n\n9 = Kernel routines',
		status: null
	},
	{
		id: 180,
		front: 'What option changes the delimited field Join uses for matching? and what is the default?',
		back: 'The -1, -2, -99 option to specify the file, followed by a number indicating the field in that file. \n\nEx.join -1 3 -2 2 file1.txt file2.txt \n\n(this would look for matches on field 3 of the first file and field 2 of the second file) \n\nDefault = first field',
		status: null
	},
	{
		id: 181,
		front: 'What command must output be piped to for actually printing after the pr command formats it?',
		back: 'lpr',
		status: null
	},
	{
		id: 182,
		front: 'What directory path does the tilde (~) represent?',
		back: 'The user\'s home directory \n\n(ex. /home/jeff for the jeff user).',
		status: null
	},
	{
		id: 183,
		front: 'What number of man page sections exists?',
		back: '9',
		status: null
	},
	{
		id: 184,
		front: 'What is the way to use an external command if an internal command is already available?',
		back: 'Use a complete command path (ex. "$ /usr/bin/time" rather than just "$ time").',
		status: null
	},
	{
		id: 185,
		front: 'What does the split command work on if no input file is specified?',
		back: 'STDIN (1)',
		status: null
	},
	{
		id: 186,
		front: 'What combination of the head and tail commands be used to display lines 11-15 of a file named sampletxt?',
		back: 'head -n 15 sample.txt | tail -n 5',
		status: null
	},
	{
		id: 187,
		front: 'What does Linux handle all objects (including a program\'s input and output stream) as?',
		back: 'files',
		status: null
	},
	{
		id: 188,
		front: 'Which way does the fmt command attempt to format the content of a file?',
		back: 'It breaks paragraphs into no more than 75 characters in width; and assumes paragraphs to be delimeted by at least two blank lines or changes in indentation.',
		status: null
	},
	{
		id: 189,
		front: 'What number of characters can filename lengths be up to?',
		back: '255 on most filesystems',
		status: null
	},
	{
		id: 190,
		front: 'What special character can be used to escape other special characters in REGEXP?',
		back: '\ (backslash) \n\nEx. \. \( \) \? \+ \|',
		status: null
	},
	{
		id: 191,
		front: 'What method can be used to send the STDOUT (1) from one program be sent to the STDIN (0) of another program?',
		back: 'Data pipes (aka pipelines) \n\nEx $ first _program | second _program',
		status: null
	},
	{
		id: 192,
		front: 'What syntax does the output of a file is run through the od command have?',
		back: 'The first field of each line represents the byte offset; and each field afterwards represents a 2-byte octal unit. Up to 16 bytes of data is displayed per line.',
		status: null
	},
	{
		id: 193,
		front: 'What option prevents the nl command from restarts the numbering of lines on each new page. What option prevents this?',
		back: '(need to look up) \n\n--no-renumber',
		status: null
	},
	{
		id: 194,
		front: 'What are commands built into the shell called?',
        back: 'Internal commands',
        status: null
    },
    {
        id: 195,
        front: 'What are the style codes used with the nl command?',
        back: 't - non-empty lines (default value) \n\na - all lines \n\nn - no lines \n\npREGEXP - only lines matching REGEXP',
        status: null
    }
];

// CH2 - Package Managers
decks[1].cards = [
    {
        id: 0,
        front: 'Before upgrading a package with dpkg, what may need to be done first? and what is the command?',
        back: 'The old package may need to be removed first.\n\n# dpkg -r <package-name>',
        status: null 
    },
    {
        id: 1,
        front: 'Binary packages typically contain what type of content?',
        back: 'Subdirectories that mimic the layout of the Linux root directory (i.e. /, /etc, /usr, etc.).',
        status: null 
    },
    {
        id: 2,
        front: 'Debian package tools combine and compile source packages to create what?',
        back: 'Debian binary packages',
        status: null 
    },
    {
        id: 3,
        front: 'Debian source packages support how many patch files?',
        back: 'Only a single patch file',
        status: null 
    },
    {
        id: 4,
        front: 'Debian-based distributions use what meta-packager?',
        back: 'Advanced Package Tools (APT)',
        status: null 
    },
    {
        id: 5,
        front: 'How are options grouped together within a apt.conf file?',
        back: 'Using open and closed curly braces ( { } )\n\nEx.\nAPT\n{\n    Get\n    {\n        Download-Only "true";\n    }\n}',
        status: null 
    },
    {
        id: 6,
        front: 'How can a buildarchtranslate line in an rpmrc file be edited so that it optimizes for that specific CPU code, and does not translate it to another CPU code\'s optimization?',
        back: 'buildarchtranslate: athlon: athlon',
        status: null 
    },
    {
        id: 7,
        front: 'How can new Yum repositories be added?',
        back: 'They can be downloaded as RPMs and installed via the rpm command',
        status: null 
    },
    {
        id: 8,
        front: 'How does apt-get work?',
        back: 'It obtains information about available packages from the sources listed in /etc/apt/sources.list, and uses that information to upgrade or install packages.',
        status: null 
    },
    {
        id: 9,
        front: 'If yum update is run without any packages specified, what happens?',
        back: 'Yum updates every installed package',
        status: null 
    },
    {
        id: 10,
        front: 'Most rpmrc files include a series of buildarchtranslate lines. What do they do?',
        back: 'They tell RPM to translate CPU codes to a particular CPU code that RPMs will be optimized for.\n\nEx. buildarchtranslate: athlon: i386 will optimize builds for athlon CPUs to that of i386 optimizations.',
        status: null 
    },
    {
        id: 11,
        front: 'On most RPM-based systems, rpmbuild can be used to rebuild RPM packages if the source RPM package is available. What is the syntax for doing so?',
        back: '# rpmbuild --rebuild <packagename-version>.src.rpm',
        status: null 
    },
    {
        id: 12,
        front: 'Package systems maintain checksums for files. What can they be used for?',
        back: 'Validating against disk errors, accidental overwriting of files, and other non-sinister problems.',
        status: null 
    },
    {
        id: 13,
        front: 'Package systems rely on what to maintain a list of installed files?',
        back: 'A database',
        status: null 
    },
    {
        id: 14,
        front: 'Pressing Ctrl+T in aptitude does what?',
        back: 'Opens menus if in interactive mode',
        status: null 
    },
    {
        id: 15,
        front: 'RPM files are archives of what type?',
        back: 'cpio',
        status: null 
    },
    {
        id: 16,
        front: 'Source packages typically contain what kind of content?',
        back: 'A source code tarball and a .spec file (which holds information that RPM uses to build the package), and possibly some patch files.',
        status: null 
    },
    {
        id: 17,
        front: 'The RPM and Debian package systems both provide tools to help create what from source code?',
        back: 'binary packages',
        status: null 
    },
    {
        id: 18,
        front: 'The yum program does what exactly?',
        back: 'It is a meta-packager, which allows the installation of packages and its dependencies easily using a single command line.',
        status: null 
    },
    {
        id: 19,
        front: 'To compile source packages, what development tools might need to be installed?',
        back: 'GNU Compiler Collection (GCC) and other assorted development libraries ("dev" or "devel" are typically included in their names).',
        status: null 
    },
    {
        id: 20,
        front: 'What alien option converts to Debian packages?',
        back: '--to-deb\n\nNote: this is the default if no other option is explicitly provided.',
        status: null 
    },
    {
        id: 21,
        front: 'What alien option converts to RPM package?',
        back: '--to-rpm',
        status: null 
    },
    {
        id: 22,
        front: 'What alien option converts to Stampede package?',
        back: '--to-slp',
        status: null 
    },
    {
        id: 23,
        front: 'What alien option converts to tarball format?',
        back: '--to-tgz',
        status: null 
    },
    {
        id: 24,
        front: 'What apt-cache subcommand displays dependencies?',
        back: 'depends',
        status: null 
    },
    {
        id: 25,
        front: 'What apt-cache subcommand displays package information?',
        back: 'showpkg',
        status: null 
    },
    {
        id: 26,
        front: 'What apt-cache subcommand displays package statistics?',
        back: 'stats',
        status: null 
    },
    {
        id: 27,
        front: 'What apt-cache subcommand displays the names of all the packages installed on the system that match <pattern>?',
        back: 'pkgnames <pattern>',
        status: null 
    },
    {
        id: 28,
        front: 'What apt-cache subcommand finds reverse dependencies (packages that depend on the package specified)?',
        back: 'rdepends',
        status: null 
    },
    {
        id: 29,
        front: 'What apt-cache subcommand finds unmet dependencies?',
        back: 'unmet',
        status: null 
    },
    {
        id: 30,
        front: 'What apt-get command checks the package database for consistency and broken package installations?',
        back: 'check',
        status: null 
    },
    {
        id: 31,
        front: 'What apt-get command installs a package by package name (not filename)?',
        back: 'install',
        status: null 
    },
    {
        id: 32,
        front: 'What apt-get command is similar to apt-get clean but removes information only about packages that can no longer be downloaded?',
        back: 'autoclean',
        status: null 
    },
    {
        id: 33,
        front: 'What apt-get command is similar to apt-get upgrade but performs "smart" conflict resolution to avoid upgrading a package if doing so would break a dependency?',
        back: 'dist-upgrade',
        status: null 
    },
    {
        id: 34,
        front: 'What apt-get command obtains update information about packages available from the installation sources listed in /etc/apt/sources.list?',
        back: 'update',
        status: null 
    },
    {
        id: 35,
        front: 'What apt-get command performs any changes in package status (installation, removal, etc.) left undone after running dselect?',
        back: 'dselect-upgrade',
        status: null 
    },
    {
        id: 36,
        front: 'What apt-get command performs housekeeping to clear out information about retrieved files from the Debian package database?',
        back: 'clean',
        status: null 
    },
    {
        id: 37,
        front: 'What apt-get command removes a specified package by package name?',
        back: 'remove',
        status: null 
    },
    {
        id: 38,
        front: 'What apt-get command retrieves the newest available source package file by package filename?',
        back: 'source',
        status: null 
    },
    {
        id: 39,
        front: 'What apt-get command upgrades all installed packages to the newest versions available?',
        back: 'upgrade',
        status: null 
    },
    {
        id: 40,
        front: 'What apt-get option attempts to fix a system where dependencies are unsatisfied?',
        back: '-f\n--fix-broken',
        status: null 
    },
    {
        id: 41,
        front: 'What apt-get option compiles a source package after retrieving it?',
        back: '-b\n--compile\n--build',
        status: null 
    },
    {
        id: 42,
        front: 'What apt-get option downloads package files but doesn\'t install them?',
        back: '-d\n--download-only',
        status: null 
    },
    {
        id: 43,
        front: 'What apt-get option ignores all package files that can\'t be retrieved?',
        back: '-m\n--ignore-missing\n--fix-missing',
        status: null 
    },
    {
        id: 44,
        front: 'What apt-get option omits some progress indicator information? and how can even more progress indicator information be omitted?',
        back: '-q\n--quiet\n\n-qq',
        status: null 
    },
    {
        id: 45,
        front: 'What apt-get option performs a simulation of the action without actually modifying, installing, or removing files?',
        back: '-s\n--simulate\n--just-print\n--dry-run\n--recon\n--no-act',
        status: null 
    },
    {
        id: 46,
        front: 'What apt-get option prevents upgrades of a package if an older version is already installed?',
        back: '--no-upgrade',
        status: null 
    },
    {
        id: 47,
        front: 'What apt-get option produces a "yes" response to any yes/no prompt during the installation script?',
        back: '-y\n--yes\n--assume-yes',
        status: null 
    },
    {
        id: 48,
        front: 'What aptitude subcommand can be used to search for packages by name?',
        back: 'search',
        status: null 
    },
    {
        id: 49,
        front: 'What aptitude subcommand displays a list of all options for aptitude?',
        back: 'help',
        status: null 
    },
    {
        id: 50,
        front: 'What aptitude subcommand installs packages matching <package>? and how would you tell aptitude to remove a package instead?',
        back: 'install <package>\n\nTo remove, append a hyphen (-) to the end of the <package>',
        status: null 
    },
    {
        id: 51,
        front: 'What aptitude subcommand removes all downloaded packages?',
        back: 'clean',
        status: null 
    },
    {
        id: 52,
        front: 'What aptitude subcommand removes already-downloaded packages that are no longer available?',
        back: 'autoclean',
        status: null 
    },
    {
        id: 53,
        front: 'What aptitude subcommand updates package lists from the APT respositories?',
        back: 'update',
        status: null 
    },
    {
        id: 54,
        front: 'What aptitude subcommand upgrades all installed packages but is conservative about removing packages or installing new ones?',
        back: 'safe-upgrade',
        status: null 
    },
    {
        id: 55,
        front: 'What aptitude subcommand upgrades all installed packages?',
        back: 'full-upgrade',
        status: null 
    },
    {
        id: 56,
        front: 'What are examples of GUI frontends for Yum?',
        back: 'yumex (Yum Extender)\nKYum',
        status: null 
    },
    {
        id: 57,
        front: 'What are packages?',
        back: 'Collections of files that can be intsalled on a computer, which contains additional information about itself that is useful for package management systems.',
        status: null 
    },
    {
        id: 58,
        front: 'What are some common workarounds for package dependency problems?',
        back: '- Force the installation.\n- Modify the system to meet the dependency.\n- Rebuild the problem package from source code.\n- Find another version of the problem package.',
        status: null 
    },
    {
        id: 59,
        front: 'What are the two major package management tools for Linux?',
        back: 'RPM Package Manager (RPM)\nDebian package manager',
        status: null 
    },
    {
        id: 60,
        front: 'What are the various package types that the alien program can convert between?',
        back: 'Debian packages\nRPM packages\nStampede packages\nTarballs',
        status: null 
    },
    {
        id: 61,
        front: 'What are two RPM-based distributions that do not use Yum?',
        back: 'SUSE and Mandriva',
        status: null 
    },
    {
        id: 62,
        front: 'What can Linux package management tools help with?',
        back: 'Keeping track of installed software, and helping to install, upgrade, or remove software.',
        status: null 
    },
    {
        id: 63,
        front: 'What command can be used to install Debian packages?',
        back: 'dpkg',
        status: null 
    },
    {
        id: 64,
        front: 'What command can be used to revert a package to its initial standard configuration?',
        back: 'dpkg-reconfigure\n\nEx. # dpkg-reconfigure samba',
        status: null 
    },
    {
        id: 65,
        front: 'What commands can be combined to extract a .rpm package without creating an intermediary file?',
        back: 'rpm2cpio <.rpm_package> | cpio -i --make-directories',
        status: null 
    },
    {
        id: 66,
        front: 'What directory does Debian package tools store files that maintain lists of available packages, installed packages, etc.?',
        back: '/var/lib/dpkg/',
        status: null 
    },
    {
        id: 67,
        front: 'What does a typical Debian source package consist of?',
        back: 'The original source tarball, a patch file (used to modify the source code), and an optional .dsc file that contains a digital "signature" to help verify the authenticity of the collection.',
        status: null 
    },
    {
        id: 68,
        front: 'What does the dpkg.cfg file contain?',
        back: 'dpkg options without their leading dashes\n\nEx. no-act',
        status: null 
    },
    {
        id: 69,
        front: 'What does yum rely on in order to search for RPMs?',
        back: 'repositories',
        status: null 
    },
    {
        id: 70,
        front: 'What dpkg action displays currently installed packages?',
        back: '--get-selections',
        status: null 
    },
    {
        id: 71,
        front: 'What dpkg action displays information about an installed package?',
        back: '-p\n--print-avail',
        status: null 
    },
    {
        id: 72,
        front: 'What dpkg action displays information about uninstalled package files?',
        back: '-I\n--info',
        status: null 
    },
    {
        id: 73,
        front: 'What dpkg action installs a package?',
        back: '-i\n--install',
        status: null 
    },
    {
        id: 74,
        front: 'What dpkg action lists all installed packages whose names match <pattern>?',
        back: '-l <pattern>\n--list <pattern>',
        status: null 
    },
    {
        id: 75,
        front: 'What dpkg action lists the files associated with a package?',
        back: '-L\n--listfiles',
        status: null 
    },
    {
        id: 76,
        front: 'What dpkg action locates packages that own the files specified by <pattern>?',
        back: '-S <pattern>\n--search <pattern>',
        status: null 
    },
    {
        id: 77,
        front: 'What dpkg action reconfigures an installed package (i.e. runs the post-install script)?',
        back: '--configure',
        status: null 
    },
    {
        id: 78,
        front: 'What dpkg action removes a package (including configuration files)?',
        back: '-P\n--purge',
        status: null 
    },
    {
        id: 79,
        front: 'What dpkg action removes a package but leaves its configuration files intact?',
        back: '-r\n--remove',
        status: null 
    },
    {
        id: 80,
        front: 'What dpkg action searches for partially installed packages and suggests what to do with them?',
        back: '-C\n--audit',
        status: null 
    },
    {
        id: 81,
        front: 'What dpkg commands require a package filename instead of a package name?',
        back: '--install / -i\n--info / -I',
        status: null 
    },
    {
        id: 82,
        front: 'What dpkg option checks for dependencies, conflicts, and other problems without actually installing/upgrading/removing packages?',
        back: '--no-act',
        status: null 
    },
    {
        id: 83,
        front: 'What dpkg option disables packages that rely on one that is being removed?',
        back: '-B\n--auto-deconfigure',
        status: null 
    },
    {
        id: 84,
        front: 'What dpkg option doesn\'t install the package if a newer version of the same package is already installed?',
        back: '-G',
        status: null 
    },
    {
        id: 85,
        front: 'What dpkg option doesn\'t install the package if the same version of the package is already installed?',
        back: '-E\n--skip-same-version',
        status: null 
    },
    {
        id: 86,
        front: 'What dpkg option ignores dependency information for the specified package?',
        back: '--ignore-depends=<package>',
        status: null 
    },
    {
        id: 87,
        front: 'What dpkg option installs all packages that match the package-name wildcard in the specified directory and all subdirectories?',
        back: '--recursive',
        status: null 
    },
    {
        id: 88,
        front: 'What dpkg option modifies the Linux system at a specific root directory?',
        back: '--root=<dir>',
        status: null 
    },
    {
        id: 89,
        front: 'What dpkg option overrides defaults that would ordinarily cause dpkg to abort?',
        back: '--force-things',
        status: null 
    },
    {
        id: 90,
        front: 'What file on a Debian-based system contains a list of locations where important packages can be obtained?',
        back: '/etc/apt/sources.list',
        status: null 
    },
    {
        id: 91,
        front: 'What files should be edited to make RPM configuration changes globally and on a per-user basis?',
        back: '/etc/rpmrc (global)\n~/.rpmrc (per-user)',
        status: null 
    },
    {
        id: 92,
        front: 'What happens if apt-get update or apt-get dist-upgrade is ran without any additional arguments?',
        back: 'All packages already installed on the system are upgraded to the lastest versions',
        status: null 
    },
    {
        id: 93,
        front: 'What information is displayed if yum check-update has results?',
        back: 'The packages\' names, versions, and repository area (ex. updates, extras, etc.).',
        status: null 
    },
    {
        id: 94,
        front: 'What is aptitude?',
        back: 'A text-based Debian package manager. It combines the features of dselect with the command-line options of apt-get.',
        status: null 
    },
    {
        id: 95,
        front: 'What is Debian\'s equivalent meta-packager to RPM-based systems\' Yum? and what is its command?',
        back: 'APT (Advanced Package Tools)\n\napt-get',
        status: null 
    },
    {
        id: 96,
        front: 'What is dependency information?',
        back: 'A list of requirements that packages have for each other.',
        status: null 
    },
    {
        id: 97,
        front: 'What is dselect?',
        back: 'A high-level text-mode package browser for APT',
        status: null 
    },
    {
        id: 98,
        front: 'What is one of the most common RPM meta-packagers?',
        back: 'YUM (Yellow Dog Updater, Modified)',
        status: null 
    },
    {
        id: 99,
        front: 'What is Synaptic?',
        back: 'A GUI x-based program that is similar to dselect and aptitude.',
        status: null 
    },
    {
        id: 100,
        front: 'What is the Debian package filename convention?',
        back: '<package>_<version>_<architecture>.<package-type>',
        status: null 
    },
    {
        id: 101,
        front: 'What is the foundation that all programs rely on?',
        back: 'The Linux kernel',
        status: null 
    },
    {
        id: 102,
        front: 'What is the naming convention of an RPM package?',
        back: 'packagename-version-release.arch.rpm\n\nversion is generally major.minor.patch\nrelease is the build / release number\narch is the architecture (ex. x86_64, i386, noarch)',
        status: null 
    },
    {
        id: 103,
        front: 'What is the syntax for the alien program?',
        back: 'alien [options] file[...]',
        status: null 
    },
    {
        id: 104,
        front: 'What is the syntax for the apt-get command?',
        back: 'apt-get [options] [command] [package-names]',
        status: null 
    },
    {
        id: 105,
        front: 'What is the syntax of the dpkg command?',
        back: 'dpkg [options] [action] [package-files | package-name]',
        status: null 
    },
    {
        id: 106,
        front: 'What is the syntax of the rpm command?',
        back: 'rpm [operation] [options] [package-files|package-names]',
        status: null 
    },
    {
        id: 107,
        front: 'What Linux distributions use the Debian package manager?',
        back: 'Debian, Ubuntu, Linux Mint, Xandros, etc.',
        status: null 
    },
    {
        id: 108,
        front: 'What Linux OSs use RPM?',
        back: 'Red Hat Enterprise Linux (RHEL), CentOS (Community Enterprise OS), Fedora, SUSE, and Mandriva',
        status: null 
    },
    {
        id: 109,
        front: 'What must be installed on a system before the alien program can be used?',
        back: 'All package management software for each package type must be installed to allow conversion between them (i.e. RPM and Debian package managers must be installed in order to convert between .rpm and .deb)',
        status: null 
    },
    {
        id: 110,
        front: 'What program can be used to convert .rpm files into .cpio files?',
        back: 'rpm2cpio\n\nEx. rpm2cpio samba-4.1.9-4.noarch.src.rpm > samba-4.1.9-4.norach.src.cpio',
        status: null 
    },
    {
        id: 111,
        front: 'What program can be used to convert packages between Debian, RPM, etc.?',
        back: 'alien',
        status: null 
    },
    {
        id: 112,
        front: 'What program can be used to extract .cpio archived files?',
        back: 'cpio\n\nEx. cpio -i --make-directories < samba-4.1.9-4.fc20.src.cpio',
        status: null 
    },
    {
        id: 113,
        front: 'What program provides information about the Debian package database (aka package cache)?',
        back: 'apt-cache',
        status: null 
    },
    {
        id: 114,
        front: 'What rpm operation builds a binary package, given a source RPM file?',
        back: '--rebuild\n\nNote: replaced by rpmbuild command as of RPM version 4.2.',
        status: null 
    },
    {
        id: 115,
        front: 'What rpm operation builds a binary package, given source code and configuration files?',
        back: '-b \n\nNote: replaced by rpmbuild command as of RPM 4.2.',
        status: null 
    },
    {
        id: 116,
        front: 'What rpm operation installs a package?',
        back: '-i',
        status: null 
    },
    {
        id: 117,
        front: 'What rpm operation queries a package to find out what it contains, if it has been installed, etc.?',
        back: '-q',
        status: null 
    },
    {
        id: 118,
        front: 'What rpm operation rebuilds the RPM database to fix errors?',
        back: '--rebuilddb',
        status: null 
    },
    {
        id: 119,
        front: 'What rpm operation uninstalls a package?',
        back: '-e',
        status: null 
    },
    {
        id: 120,
        front: 'What rpm operation upgrades a package only if an earlier version exists?',
        back: '-F\n--freshen',
        status: null 
    },
    {
        id: 121,
        front: 'What rpm operation upgrades an existing package or installs a new package?',
        back: '-U',
        status: null 
    },
    {
        id: 122,
        front: 'What rpm operation verifies if a package has its files present and unmodified since installation?',
        back: '-V\n--verify',
        status: null 
    },
    {
        id: 123,
        front: 'What rpm option checks for dependencies, conflicts, and other problems without installing/upgrading a package?',
        back: '--test',
        status: null 
    },
    {
        id: 124,
        front: 'What rpm option displays hash marks (#) to indicate progress of the operation?',
        back: '-h\n--hash',
        status: null 
    },
    {
        id: 125,
        front: 'What rpm option displays the packages and files on which a package depends?',
        back: '-R\n--requires',
        status: null 
    },
    {
        id: 126,
        front: 'What rpm option forces installation even if it means overwriting existing files or packages?',
        back: '--force',
        status: null 
    },
    {
        id: 127,
        front: 'What rpm option is used in conjunction with -h to produce uniform numbers of hash marks for each package?',
        back: '-v',
        status: null 
    },
    {
        id: 128,
        front: 'What rpm option lists the files contained within a package?',
        back: '-l\n--list',
        status: null 
    },
    {
        id: 129,
        front: 'What rpm option modifies a Linux system at a specified root directory?',
        back: '--root <dir>',
        status: null 
    },
    {
        id: 130,
        front: 'What rpm option prevents dependency checks?',
        back: '--nodeps',
        status: null 
    },
    {
        id: 131,
        front: 'What rpm option queries an uninstalled RPM package file?',
        back: '-p <package-file>',
        status: null 
    },
    {
        id: 132,
        front: 'What rpm option queries or verifies a package that owns a specific file?',
        back: '-f <file>\n--file <file>',
        status: null 
    },
    {
        id: 133,
        front: 'What rpm option queries or verifies all packages?',
        back: '-a\n--all',
        status: null 
    },
    {
        id: 134,
        front: 'What rpm option sets the installation directory to a specific path?',
        back: '--prefix <path>',
        status: null 
    },
    {
        id: 135,
        front: 'What startup scripts came before systemd?',
        back: 'SysV startup scripts',
        status: null 
    },
    {
        id: 136,
        front: 'What yum command acts the same as yum update --obsoletes?',
        back: 'upgrade',
        status: null 
    },
    {
        id: 137,
        front: 'What yum command checks to see if any updates are available?',
        back: 'check-update',
        status: null 
    },
    {
        id: 138,
        front: 'What yum command cleans up the Yum cache directory?',
        back: 'clean',
        status: null 
    },
    {
        id: 139,
        front: 'What yum command displays dependencies of a specified package?',
        back: 'deplist',
        status: null 
    },
    {
        id: 140,
        front: 'What yum command displays information about a package (similar to rpm -qi)?',
        back: 'info',
        status: null 
    },
    {
        id: 141,
        front: 'What yum command displays information about a package that provides a specific program or feature?',
        back: 'provides\nwhatprovides',
        status: null 
    },
    {
        id: 142,
        front: 'What yum command displays information about a package, such as the installed version and whether an update is available?',
        back: 'list',
        status: null 
    },
    {
        id: 143,
        front: 'What yum command displays packages that match a specific dependency?',
        back: 'resolvedep',
        status: null 
    },
    {
        id: 144,
        front: 'What yum command enters the Yum shell mode?',
        back: 'shell',
        status: null 
    },
    {
        id: 145,
        front: 'What yum command installs one or more packages by package name, and also installs dependencies for the specified packages?',
        back: 'install',
        status: null 
    },
    {
        id: 146,
        front: 'What yum command installs specified local RPM files, while using Yum repositories to resolve dependencies?',
        back: 'localinstall',
        status: null 
    },
    {
        id: 147,
        front: 'What yum command searches package names, summaries, packagers, and descriptions for a specified keyword?',
        back: 'search',
        status: null 
    },
    {
        id: 148,
        front: 'What yum command updates the specified packages to the latest version?',
        back: 'update',
        status: null 
    },
    {
        id: 149,
        front: 'What yum command updates the system using specified local RPM files, while using Yum repositories to resolve dependencies?',
        back: 'localupdate',
        status: null 
    },
    {
        id: 150,
        front: 'What yum commands delete a package from the system and any depended-on packages?',
        back: 'remove\nerase',
        status: null 
    },
    {
        id: 151,
        front: 'What Yum repository contains improved KDE RPMs for those that favor KDE over GNOME?',
        back: 'KDE Red Hat (http://kde-redhat.sourceforge.net/)',
        status: null 
    },
    {
        id: 152,
        front: 'What Yum repository hosts multimedia tools, such as additional codecs and video drivers?',
        back: 'Livna (http://rpm.livna.org/)',
        status: null 
    },
    {
        id: 153,
        front: 'What Yum repository provides additional RPMs focused on multimedia applications and drivers?',
        back: 'Fresh RPMs (http://freshrpms.net/)',
        status: null 
    },
    {
        id: 154,
        front: 'What yum-like command can be used to download a package without installing it?',
        back: 'yumdownloader',
        status: null 
    },
    {
        id: 155,
        front: 'When building or rebuilding RPM packages using rpmbuild / rpm, where are the files stored?',
        back: '/usr/src/<distname>/RPMS/<arch>/',
        status: null 
    },
    {
        id: 156,
        front: 'Where is a sample apt.conf file located?',
        back: '/usr/share/doc/apt/examples/apt.conf',
        status: null 
    },
    {
        id: 157,
        front: 'Where is the main configuration file for dpkg located?',
        back: '/etc/dpkg/dpkg.cfg \n\nOR \n\n~/.dpkg.cfg',
        status: null 
    },
    {
        id: 158,
        front: 'Where is the main RPM configuration file located?',
        back: '/usr/lib/rpm/rpmrc',
        status: null 
    },
    {
        id: 159,
        front: 'Where is the secondary APT configuration file that controls APT and dselect options?',
        back: '/etc/apt/apt.conf',
        status: null 
    },
    {
        id: 160,
        front: 'Where is Yum\'s main configuration file? and where are additional Yum configuration files stored?',
        back: '/etc/yum.conf\n\n/etc/yum.repos.d/',
        status: null 
    },
    {
        id: 161,
        front: 'Which rpm operations require a filename rather than a package name?',
        back: '-i\n-U\n-F \nrebuild',
        status: null 
    },
    {
        id: 162,
        front: 'Which rpm operations require a package name rather than a filename?',
        back: '-q\n-V\n-e\n\nNote: -q can use a filename if -p is also used',
        status: null 
    },
    {
        id: 163,
        front: 'Which website can be useful for finding RPMs online?',
        back: 'RPMFind (https://rpmfind.net/)',
        status: null 
    },
    {
        id: 164,
        front: 'Why is it important to run yum clean from time to time?',
        back: 'Downloaded packages can consume too much disk space over time',
        status: null 
    },
    {
        id: 165,
        front: 'Why should you hold off of adding a site to the /etc/apt/sources.list file unless it can be trusted?',
        back: 'Because apt-get performs automatic and semi-automatic upgrades. If unreliable or vulnerable programs exist in a network source added to this list, the system will become vulnerable after upgrading via apt-get.',
        status: null 
    }
];


// CH2 - Libraries
decks[2].cards = [
    {
        id: 0,
        front: 'How can binary program files locate libraries?',
        back: 'Either by name alone (ex. libc.so.6) or by providing a complete path (ex. /lib/libc.so.6).\n\nNote: a library path (containing directories to search through) must be configured to use names alone.',
        status: null 
    },
    {
        id: 1,
        front: 'How can the LD_LIBRARY_PATH environment variable be set?',
        back: 'export LD_LIBRARY_PATH=<path1>:<pathN>',
        status: null 
    },
    {
        id: 2,
        front: 'If all dependencies are met for a program but it still fails to load due to missing dependencies, what can be done?',
        back: 'Use the ldd command on the libraries shown when running ldd on the program. Sometimes these libraries have dependencies that may be missing.',
        status: null 
    },
    {
        id: 3,
        front: 'If an error is displayed that a shared library cannot be found, what can be done about it?',
        back: 'See if the library is installed with the find command. Install the library if it doesn\'t exist. Update the LD_LIBRARY_PATH or /etc/ld.so.conf file to add the library\'s directory to the library path. If it still doesn\'t work, use the ldd command to check if a hard-coded library path exists in the program\'s binary file. If that is the case, make a symbolic link in a directory on the library path.',
        status: null 
    },
    {
        id: 4,
        front: 'ldconfig',
        back: 'Editing the LD_LIBRARY_PATH does not require what command to be run in order to take effect?',
        status: null 
    },
    {
        id: 5,
        front: 'Libraries associated with GUIs are known as?',
        back: 'Widget sets — because they provide onscreen widgets used by programs (buttons, scroll bars, menu bars, etc.)',
        status: null 
    },
    {
        id: 6,
        front: 'Linux uses what verision of the C library? and where is its main file located?',
        back: 'GNU C library (glibc)\n\nAs of glibc 2.15, /lib/libc.so.6 or /lib64/libc.so.6\n\nNote: Occassionally this file is sometimes a symbolic link to another file such as /lib/libc-2.15.so.',
        status: null 
    },
    {
        id: 7,
        front: 'Most Linux software relies heavily on what?',
        back: 'Shared libraries',
        status: null 
    },
    {
        id: 8,
        front: 'What are shared libraries?',
        back: 'Shared libraries are software components that can be used by many different programs',
        status: null 
    },
    {
        id: 9,
        front: 'What are the most popular Linux widget sets?',
        back: 'GIMP Tool Kit (GTK+) and Qt',
        status: null 
    },
    {
        id: 10,
        front: 'What binary file does a Linux system rely on for gathering a cached list of library directories and their contained files?',
        back: '/etc/ld.so.cache',
        status: null 
    },
    {
        id: 11,
        front: 'What directory does the env-update utility read files from? and what is it looking for within these files?',
        back: '/etc/env.d\n\nThe LDPATH variables — which make up the lines in the ld.so.conf file.',
        status: null 
    },
    {
        id: 12,
        front: 'What do both RPM and Debian package managers typically run automatically after installing or removing packages?',
        back: 'ldconfig',
        status: null 
    },
    {
        id: 13,
        front: 'What does the \'so\' in .so stand for?',
        back: 'shared object',
        status: null 
    },
    {
        id: 14,
        front: 'What environment variable can be set to hold a number of directories containing shared libraries?',
        back: 'LD_LIBRARY_PATH',
        status: null 
    },
    {
        id: 15,
        front: 'What extension does a shared library in Linux typically have?',
        back: '.so or .so.<version>',
        status: null 
    },
    {
        id: 16,
        front: 'What extension does static libraries in Linux have?',
        back: '.a',
        status: null 
    },
    {
        id: 17,
        front: 'What file is used to set the library path?',
        back: '/etc/ld.so.conf',
        status: null 
    },
    {
        id: 18,
        front: 'What file is used to update the /etc/ld.so.cache file?',
        back: 'ldconfig',
        status: null 
    },
    {
        id: 19,
        front: 'What is the syntax for the output of the ldd command?',
        back: 'Each line of output begins with a library name. If the library name doesn\'t contain a complete path, ldd attempts to find the true library and displays the complete path following the => symbol.\n\nEx. ldd /bin/sh\n        linux-vdso.so.1 =>  (0x00007ffcf85fc000)\n        libtinfo.so.5 => /lib64/libtinfo.so.5 \n',
        status: null 
    },
    {
        id: 20,
        front: 'What is typically contained in an /etc/ld.so.conf file?',
        back: 'Lines beginning with an include directive — which lists files that are to be included as if they were part of the main file.\n\nEx. include /etc/ld.so.conf.d/*.conf',
        status: null 
    },
    {
        id: 21,
        front: 'What ldconfig option changes the cache file from /etc/ld.so.cache to whatever file is specified?',
        back: '-c <cache-file>',
        status: null 
    },
    {
        id: 22,
        front: 'What ldconfig option changes the configuration file from /etc/ld.so.conf to whatever file is specified?',
        back: '-f <conf-file>',
        status: null 
    },
    {
        id: 23,
        front: 'What ldconfig option displays a summary of directories and files being registered?',
        back: '-v',
        status: null 
    },
    {
        id: 24,
        front: 'What ldconfig option ignores the directories specified in /etc/ld.so.conf and trusted directories (/lib and /usr/lib) but updates specified directories?',
        back: '-n <dirs>',
        status: null 
    },
    {
        id: 25,
        front: 'What ldconfig option prevents a rebuild of the library cache, but updates symbolic links to libraries?',
        back: '-N',
        status: null 
    },
    {
        id: 26,
        front: 'What ldconfig option treats a specific directory as if it were the root (/) directory of the system?',
        back: '-r <dir>',
        status: null 
    },
    {
        id: 27,
        front: 'What ldconfig option updates the library cache but does not update symbolic links to libraries?',
        back: '-x',
        status: null 
    },
    {
        id: 28,
        front: 'What library provides many of the higher-level features associated with the C programming language?',
        back: 'C Library (libc)',
        status: null 
    },
    {
        id: 29,
        front: 'What program displays a program\'s shared library dependencies?',
        back: 'ldd',
        status: null 
    },
    {
        id: 30,
        front: 'What program updates caches and links used by the system for locating libraries?',
        back: 'ldconfig',
        status: null 
    },
    {
        id: 31,
        front: 'Which directories are always on the library path, even if they are not listed in the /etc/ld.so.conf file?',
        back: '/lib \n/usr/lib',
        status: null 
    },
    {
        id: 32,
        front: 'Which programs manage the loading of libraries?',
        back: 'ld.so \nld-linux.so',
        status: null 
    },
    {
        id: 33,
        front: 'After alterering the library path, which command must be run in order for programs to have access to the new paths specified?',
        back: 'ldconfig',
        status: null 
    },
    {
        id: 34,
        front: 'Gentoo and some other distributions use which utility to create the /etc/ld.so.conf file?',
        back: 'env-update',
        status: null 
    }
];


// CH2 - Processes
decks[3].cards = [
    {
        id: 0,
        front: 'Because many shells include their own internal version of the kill command, what must be done to ensure the external kill command is being used?',
        back: 'Call it with a full path\n\ni.e. /bin/kill',
        status: null 
    },
    {
        id: 1,
        front: 'By default, ps displays which processes? and how wide is the output?',
        back: 'ps displays only processes that were run from its own terminal (options -A, -e, and x can overwrite this).\n\nThe output is limited to being 80 characters wide and is truncated beyond that length (options -w and w can ovewrite this).',
        status: null 
    },
    {
        id: 2,
        front: 'By default, top sorts entries by what? and how often does it update?',
        back: 'CPU use\n\nEvery five (5) seconds',
        status: null 
    },
    {
        id: 3,
        front: 'How are job ID numbers given?',
        back: 'Jobs are numbered starting from 1 for each session.',
        status: null 
    },
    {
        id: 4,
        front: 'How can a process be pushed to the background of a terminal?',
        back: 'Press ^z to pause the process, then enter the bg command to unfreeze it in the background',
        status: null 
    },
    {
        id: 5,
        front: 'How can a running process be made to continue running even after logging out of a session?',
        back: '1. ^z to pause the process.\n2. bg to move it to the background.\n3. disown (to prevent SIGHUP / 1 signals from being sent to the process).',
        status: null 
    },
    {
        id: 6,
        front: 'How can the nohup command be used to start a process that will remain running after logging out of a session?',
        back: 'nohup <command> &',
        status: null 
    },
    {
        id: 7,
        front: 'If multiple processes have been paused/suspended, how can a specific process be brought to the foreground of the terminal?',
        back: 'Specify a job number associate with the process.\n\nEx. fg 2',
        status: null 
    },
    {
        id: 8,
        front: 'If no explicit options are provided to the renice command, what is being used for matches?',
        back: 'PIDs',
        status: null 
    },
    {
        id: 9,
        front: 'If no signal value is provided to the kill command, what signal is sent by default?',
        back: '15 / SIGTERM — which exits a process but allows it to close open files',
        status: null 
    },
    {
        id: 10,
        front: 'Processes that aren\'t linked to others had their parent processes killed and adopted by, or were started directly by, what?',
        back: 'init',
        status: null 
    },
    {
        id: 11,
        front: 'Sometimes an alternative version of killall is provided, what does this version do?',
        back: 'It kills all processes started by the user running the command. Check man killall first to see which version is active.',
        status: null 
    },
    {
        id: 12,
        front: 'The kill command can only kill processes owned by whom?',
        back: 'kill can only kill processes owned by the user running the kill command.\n\nNote The root user can kill anyone\'s processes via kill.',
        status: null 
    },
    {
        id: 13,
        front: 'What are job ID numbers?',
        back: 'Numbers that represent processes associated with the current session.',
        status: null 
    },
    {
        id: 14,
        front: 'What are the possible values for priority? and which values represent higher priority or lower priority?',
        back: '-20 to 19\n\nThe more negative, the higher the priority.\nThe more positive, the lower the priority.',
        status: null 
    },
    {
        id: 15,
        front: 'What command brings jobs to the background to keep it running while freeing up the terminal for other work?',
        back: 'bg',
        status: null 
    },
    {
        id: 16,
        front: 'What command can be run to reveal details about the kernel being run?',
        back: 'uname',
        status: null 
    },
    {
        id: 17,
        front: 'What command can be used to alter the priority of a running program?',
        back: 'renice',
        status: null 
    },
    {
        id: 18,
        front: 'What command can be used to display information about processes\' and their statuses?',
        back: 'ps',
        status: null 
    },
    {
        id: 19,
        front: 'What command can be used to get back to a program paused via ^z?',
        back: 'fg',
        status: null 
    },
    {
        id: 20,
        front: 'What command can be used to kill a process by name rather than PID number?',
        back: 'killall',
        status: null 
    },
    {
        id: 21,
        front: 'What command can be used to launch a program with a specific priority?',
        back: 'nice',
        status: null 
    },
    {
        id: 22,
        front: 'What command can be used to look at just memory usage?',
        back: 'free',
        status: null 
    },
    {
        id: 23,
        front: 'What command can be used to run a command that is immune to hangup (SIGHUP / 1) signals?',
        back: 'nohup',
        status: null 
    },
    {
        id: 24,
        front: 'What command can be used to terminate a program?',
        back: 'kill',
        status: null 
    },
    {
        id: 25,
        front: 'What command displays a task manager of sorts?',
        back: 'top',
        status: null 
    },
    {
        id: 26,
        front: 'What command displays CPU load averages, along with information about how long the machine has been running for?',
        back: 'uptime',
        status: null 
    },
    {
        id: 27,
        front: 'What command displays minimal information about the processes associated with the current session?',
        back: 'jobs',
        status: null 
    },
    {
        id: 28,
        front: 'What command is similar to kill but can match usernames, user IDs, group IDs, etc. in addition to PIDs?',
        back: 'pkill',
        status: null 
    },
    {
        id: 29,
        front: 'What command performs a search within the process list (similar to using ps | grep)?',
        back: 'pgrep',
        status: null 
    },
    {
        id: 30,
        front: 'What disown option applies to all jobs on the job list?',
        back: '-a',
        status: null 
    },
    {
        id: 31,
        front: 'What disown option prevents SIGHUP / 1 signals from reaching a job, but does not remove it from the active jobs list?',
        back: '-h <jobID>',
        status: null 
    },
    {
        id: 32,
        front: 'What does the disown command do? and what alternative use does this command have?',
        back: 'It removes jobs from the table of active jobs (i.e. jobs -l).\n\nAn alternative use is to prevent SIGHUP / 1 signals from being able to be sent to the process disown acted upon.\n\nNote: To prevent SIGHUP / 1 signals without removing a job from the table of active jobs, use the -h option.',
        status: null 
    },
    {
        id: 33,
        front: 'What does the fg command do?',
        back: 'Brings paused processes to the foreground of the terminal',
        status: null 
    },
    {
        id: 34,
        front: 'What does the kill command send to a specific process?',
        back: 'a signal',
        status: null 
    },
    {
        id: 35,
        front: 'What environment variable can be edited to change the option types supported by the ps command? and what are some example values?',
        back: 'PS_PERSONALITY\n\nValues:\nposix\nold\nlinux\nbsd\nsun\ndigital',
        status: null 
    },
    {
        id: 36,
        front: 'What GUI variants of top exist?',
        back: 'kpm\n\ngnome-system-monitor',
        status: null 
    },
    {
        id: 37,
        front: 'What hotkey can be pressed to pause a program and give control of the terminal back?',
        back: '^z',
        status: null 
    },
    {
        id: 38,
        front: 'What information is displayed in the output of the ps command?',
        back: 'The first line is typically a header, which displays the value of each column:\n\nUsername\nProcess ID (PID)\nParent Process ID (PPID)\nTTY\nCPU Time\nCPU Priority\nMemory Use\nCommand',
        status: null 
    },
    {
        id: 39,
        front: 'What information is displayed when using uname -v or uname --kernel-version?',
        back: 'Usually a kernel build date and time, not an actual version number.',
        status: null 
    },
    {
        id: 40,
        front: 'What information might get displayed when uname -p or uname --processor is used?',
        back: 'CPU manufacturer, model, and clock speed; but in most cases it returns \'unknown\'.',
        status: null 
    },
    {
        id: 41,
        front: 'What is an alternative to using ^z and bg to start a process and bring it to the background?',
        back: 'Append an ampersand (&) to the command used to launch a program.\n\nEx. $ nedit myfile.txt &',
        status: null 
    },
    {
        id: 42,
        front: 'What is the "load average" output by the top command? and what values can it have?',
        back: 'A measure of the demand for CPU time by applications. \n\n0.0 represents no load, 1.0 represents full load on a CPU core.',
        status: null 
    },
    {
        id: 43,
        front: 'What is the default priority value of processes?',
        back: '0',
        status: null 
    },
    {
        id: 44,
        front: 'What is the default signal sent via killall if no signal value is specified?',
        back: 'SIGTERM / 15',
        status: null 
    },
    {
        id: 45,
        front: 'What is the default sort order for top?',
        back: 'by CPU usage',
        status: null 
    },
    {
        id: 46,
        front: 'What is the signal number and name for the signal that exits a process but allows it to close open files?',
        back: '15 / SIGTERM',
        status: null 
    },
    {
        id: 47,
        front: 'What is the signal number and name for the signal that exits a process without performing routine shutdown tasks?',
        back: '9 / SIGKILL',
        status: null 
    },
    {
        id: 48,
        front: 'What is the signal number and name for the signal that terminates interactive programs and causes most daemons to reread their configuration files?',
        back: '1 / SIGHUP',
        status: null 
    },
    {
        id: 49,
        front: 'What is the syntax for pkill?',
        back: 'pkill [-signal <value-sans-SIG>] <options> <pattern>',
        status: null 
    },
    {
        id: 50,
        front: 'What is the syntax of the kill command?',
        back: 'kill -s <signal> <pid>',
        status: null 
    },
    {
        id: 51,
        front: 'What is the syntax of the killall command?',
        back: 'killall [options] <name>',
        status: null 
    },
    {
        id: 52,
        front: 'What is the syntax of the nice command?',
        back: 'nice [argument] [command [command-arguments]]',
        status: null 
    },
    {
        id: 53,
        front: 'What is the syntax of the nohup command?',
        back: 'nohup <command>',
        status: null 
    },
    {
        id: 54,
        front: 'What is the syntax of the pgrep command?',
        back: 'pgrep <options> <pattern>',
        status: null 
    },
    {
        id: 55,
        front: 'What is the syntax of the renice command?',
        back: 'renice <priority> <options>',
        status: null 
    },
    {
        id: 56,
        front: 'What job option only applies to running jobs?',
        back: '-r',
        status: null 
    },
    {
        id: 57,
        front: 'What kill option can be used as an alternative to the -s <signal> option? and what values does it accept?',
        back: '-signal <name-sans-SIG>\n\nEx. \nkill -signal TERM 5219\nkill -signal KILL 2346',
        status: null 
    },
    {
        id: 58,
        front: 'What kill option lists all available signals?',
        back: 'kill -l',
        status: null 
    },
    {
        id: 59,
        front: 'What kill option specifies the signal to be sent?',
        back: '-s <signal>',
        status: null 
    },
    {
        id: 60,
        front: 'What killall option can be used to prompt for confirmation before sending a signal to each process it matched?',
        back: '-i\n--interactive',
        status: null 
    },
    {
        id: 61,
        front: 'What operating system introduced the pgrep and pkill commands?',
        back: 'Solaris',
        status: null 
    },
    {
        id: 62,
        front: 'What option types does the ps command support?',
        back: 'Unix98 options (Ex. ls -al)\nBSD options (Ex. ps axu <username>)\nGNU Long options (Ex. firewall-cmd --zone=public --add-port=22652/tcp --permanent)',
        status: null 
    },
    {
        id: 63,
        front: 'What pgrep option allows only exact matches of a process name with the search pattern?',
        back: '-x\n--exact',
        status: null 
    },
    {
        id: 64,
        front: 'What pgrep option lists the process name as well as the process ID?',
        back: '-l\n--list-name',
        status: null 
    },
    {
        id: 65,
        front: 'What pgrep option matches the search pattern against the full command line instead of just the process name?',
        back: '-f\n--full',
        status: null 
    },
    {
        id: 66,
        front: 'What pgrep option negates matching?',
        back: '-v\n--inverse',
        status: null 
    },
    {
        id: 67,
        front: 'What pgrep option only matches processes in the process group IDs (PGRP) listed?',
        back: '-g <pgrplist>\n--pgroup <pgrplist>',
        status: null 
    },
    {
        id: 68,
        front: 'What pgrep option only matches processes whose controlling terminal is listed?',
        back: '-t <term>\n--terminal <term>\n\nNote: The terminal name should be specified without the "/dev/" prefix.',
        status: null 
    },
    {
        id: 69,
        front: 'What pgrep option only matches processes whose effective user ID (EUID) is listed?',
        back: '-u <euidlist>\n--euid <euidlist>',
        status: null 
    },
    {
        id: 70,
        front: 'What pgrep option only matches processes whose parent process ID (PPID) is listed?',
        back: '-P <ppidlist>',
        status: null 
    },
    {
        id: 71,
        front: 'What pgrep option only matches processes whose process session ID (SID) is listed?',
        back: '-s <sidlist>\n--session <sidlist>',
        status: null 
    },
    {
        id: 72,
        front: 'What pgrep option only matches processes whose real group ID (GID) is listed?',
        back: '-G <gidlist>\n--group <gidlist>',
        status: null 
    },
    {
        id: 73,
        front: 'What pgrep option only matches whose real user ID (UID) is listed?',
        back: '-U <uidlist>\n--uid <uidlist>',
        status: null 
    },
    {
        id: 74,
        front: 'What pgrep option selects only the newest (most recently started) of the matching processes?',
        back: '-n\n--newest',
        status: null 
    },
    {
        id: 75,
        front: 'What pgrep option selects only the oldest (least recently started) of the matching processes?',
        back: '-o\n--oldest',
        status: null 
    },
    {
        id: 76,
        front: 'What pgrep option sets the string used to delimit each process ID in the output? and what is the default delimiter?',
        back: '-d <delim>\n--delimiter <delim>\n\nDefault: newline (\n)',
        status: null 
    },
    {
        id: 77,
        front: 'What pgrep option supresses normal output, and instead prints a count of matching processes?',
        back: '-c\n--count',
        status: null 
    },
    {
        id: 78,
        front: 'What priority value is set by the nice command if no priority value is supplied? What priority value is the default when nice is not used at all?',
        back: '10\n\n0',
        status: null 
    },
    {
        id: 79,
        front: 'What ps option displays all of the processes on the system?',
        back: '-A\n-e',
        status: null 
    },
    {
        id: 80,
        front: 'What ps option displays processes owned by a particular user?',
        back: '-u <user>\nU <user>\n--user <user>\n\nNote: <user> may be a username or user ID',
        status: null 
    },
    {
        id: 81,
        front: 'What ps option displays the processes owned by the user running ps?',
        back: 'x',
        status: null 
    },
    {
        id: 82,
        front: 'What ps option expands the information provided in the ps output?',
        back: '-f, -l\nj, l, u, v',
        status: null 
    },
    {
        id: 83,
        front: 'What ps option groups processes and uses indentation to show the hierarchical relationships between processes?',
        back: '-H\n-f\n--forest',
        status: null 
    },
    {
        id: 84,
        front: 'What ps option prevents truncating of output beyond 80 characters in width?',
        back: '-w\nw',
        status: null 
    },
    {
        id: 85,
        front: 'What ps option summarizes common ps options?',
        back: '--help',
        status: null 
    },
    {
        id: 86,
        front: 'What renice option can be used to explicity set the priority value paramater?',
        back: '-n <priority>\n--priority <priority>\n\nNote: This option, if used, must be used as the first argument.',
        status: null 
    },
    {
        id: 87,
        front: 'What renice option enables matches by process group ID (pgrp / pgid)?',
        back: '-g <pgid>\n--pgrp <pgid>',
        status: null 
    },
    {
        id: 88,
        front: 'What renice option enables matches by process IDs (PIDs)?',
        back: '-p <pid>\n--pid <pid>',
        status: null 
    },
    {
        id: 89,
        front: 'What renice option enables matches by username or user ID (UID)?',
        back: '-u <name|UID>\n--user <name|UID>',
        status: null 
    },
    {
        id: 90,
        front: 'What search pattern value is supported by pgrep?',
        back: 'An extendend REGEXP',
        status: null 
    },
    {
        id: 91,
        front: 'What three ways are there to specify a priority value in the nice command?',
        back: 'nice -<value>\nnice -n <value>\nnice --adjustment=<value>',
        status: null 
    },
    {
        id: 92,
        front: 'What top command changes a process\'s priority (i.e. renice) after prompting for its PID and a new priority value? What values are supported? What is the default value?',
        back: 'r\n\n-20 to 19\n\n0',
        status: null 
    },
    {
        id: 93,
        front: 'What top command displays help information?',
        back: 'h\n?',
        status: null 
    },
    {
        id: 94,
        front: 'What top command kills a process after prompting for its PID?',
        back: 'k',
        status: null 
    },
    {
        id: 95,
        front: 'What top command prompts for a new update rate in seconds?',
        back: 's',
        status: null 
    },
    {
        id: 96,
        front: 'What top command quits top?',
        back: 'q',
        status: null 
    },
    {
        id: 97,
        front: 'What top command sorts by CPU usage?',
        back: 'P',
        status: null 
    },
    {
        id: 98,
        front: 'What top command sorts by memory usage?',
        back: 'M',
        status: null 
    },
    {
        id: 99,
        front: 'What top option changes the update interval in seconds? and what is the default value?',
        back: '-d <seconds>\n\nDefault: 5 seconds',
        status: null 
    },
    {
        id: 100,
        front: 'What top option displays a specific number of updates before quitting?',
        back: '-n <num>',
        status: null 
    },
    {
        id: 101,
        front: 'What top option enables batch mode? and what does this mode do?',
        back: '-b\n\nPrevents normal screen-update commands. Useful for logging CPU use to a file.',
        status: null 
    },
    {
        id: 102,
        front: 'What top option monitors a specific proccess by PID? and how many processes can be monitored simultaneously?',
        back: '-p <pid>\n\nUp to 20 PIDs can be monitored by applying the same option with a unique PID per -p flag.',
        status: null 
    },
    {
        id: 103,
        front: 'What uname option displays all available information?',
        back: '-a\n--all',
        status: null 
    },
    {
        id: 104,
        front: 'What uname option displays information about the machine?',
        back: '-m\n--machine\n\nNote: the output is generally a CPU code, such as x86_64 or i386, etc.',
        status: null 
    },
    {
        id: 105,
        front: 'What uname option displays the actual kernel version number?',
        back: '-r\n--kernel-release',
        status: null 
    },
    {
        id: 106,
        front: 'What uname option displays the kernel name?',
        back: '-s\n--kernel-name\n\nNote: The value returned is typically \'Linux\' on a Linux system.',
        status: null 
    },
    {
        id: 107,
        front: 'What uname option displays the kernel version?',
        back: '-v\n--kernel-version',
        status: null 
    },
    {
        id: 108,
        front: 'What uname option displays the system\'s node name / network hostname?',
        back: '-n\n--nodename',
        status: null 
    },
    {
        id: 109,
        front: 'What uname option is supposed to display hardware information?',
        back: '-i\n--hardware-platform\n\nNote: Most of the time this just returns \'unknown\'',
        status: null 
    },
    {
        id: 110,
        front: 'What uname option might display information about the CPU?',
        back: '-p\n--processor',
        status: null 
    },
    {
        id: 111,
        front: 'What uname option returns the OS name?',
        back: '-o\n--operating-system\n\nNote: This often returns just \'GNU/Linux\' on a Linux system.',
        status: null 
    },
    {
        id: 112,
        front: 'What value is held by the Command column in the ps output?',
        back: 'The command that was used to launch the process.',
        status: null 
    },
    {
        id: 113,
        front: 'What value is held by the CPU Priority column in the ps output?',
        back: 'The NI column, if present, lists the priority codes. Positive values represent reduced priority, and negative values represent increased priority.\n\nNote: The default value is 0.',
        status: null 
    },
    {
        id: 114,
        front: 'What value is held by the CPU Time column in the ps output?',
        back: 'The TIME and %CPU headings are two measures of CPU time used. The first indicates the total amount of CPU time consumed; the second represents the percentage of CPU time the process is using when ps executes.',
        status: null 
    },
    {
        id: 115,
        front: 'What value is held by the Parent Process ID (PPID) column in the ps output?',
        back: 'The PID for the parent process spawning this process',
        status: null 
    },
    {
        id: 116,
        front: 'What value is held by the Process ID (PID) column in the ps output?',
        back: 'A number that\'s associated with the process',
        status: null 
    },
    {
        id: 117,
        front: 'What value is held by the TTY (teletype) column in the ps output?',
        back: 'A code used to identify a terminal\n\nNote: not all process have a TTY number; only text-mode programs do.',
        status: null 
    },
    {
        id: 118,
        front: 'What value is held by the username column in the ps output?',
        back: 'The name of the user running the program/process',
        status: null 
    },
    {
        id: 119,
        front: 'What values are held by the Memory Use columns in the ps output?',
        back: '%MEM is the percentage of memory the program is using.\n\nVSZ is the virtual memory size.\n\nRSS is the Resident Set Size (the memory used by the program and its data).\n\nSHARE is the memory that\'s shared with other processes (such as shared libraries).',
        status: null 
    },
    {
        id: 120,
        front: 'What values can be used to specify the signal in the kill command?',
        back: 'Either a number or its corresponding name',
        status: null 
    },
    {
        id: 121,
        front: 'When a program is run after entering a command name, what happens?',
        back: 'A process is created for it',
        status: null 
    },
    {
        id: 122,
        front: 'When logging out of a session, the kernel passes which signal to the processes started from it? and why does it do this?',
        back: '1 / SIGHUP\n\nTo terminate any programs that may have been left open',
        status: null 
    },
    {
        id: 123,
        front: 'When using the -signal option on the kill command, what part of the signal name should be left out?',
        back: 'SIG\n\ni.e. \nSIGTERM = TERM\nSIGKILL = KILL\nSIGHUP = HUP',
        status: null 
    },
    {
        id: 124,
        front: 'Why might it be useful to run the jobs command before logging out?',
        back: 'To ensure all programs have terminated',
        status: null 
    }
];