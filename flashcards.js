
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
		front: 'Where is the file that stores bash history?',
		back: '~/.bash_history',
		correct: false
	},
	{
		id: 1,
		front: 'Which command can concatenate files together and send the resulting combination to STDOUT (1)?',
		back: 'cat \n\nEx. cat first.txt second.txt > combined.txt',
		correct: false
	},
	{
		id: 2,
		front: 'Which command directly modifies a file\'s content and sends the changes to STDOUT (0)?',
		back: 'sed',
		correct: false
	},
	{
		id: 3,
		front: 'What character does xargs delimits its input by default? and how can this be changed?',
		back: 'The -d "<characters>" option',
		correct: false
	},
	{
		id: 4,
		front: 'When an interactive shell is invoked for bash, what files does it attempt to read commands from automatically?',
		back: '[etc/profile, ~/.bash_profile, ~/.bash_login, and ~/.profile (in that order)',
		correct: false
	},
	{
		id: 5,
		front: 'Where does a shell look for commands?',
		back: 'It first checks for internal commands, and if none are found, it checks for external commands within any of the directories listed on the SPATH environment variable. ',
		correct: false
	},
	{
		id: 6,
		front: 'What wc option displays the length of the longest line?',
		back: '-L \n\n--max-line-length',
		correct: false
	},
	{
		id: 7,
		front: 'When a login shell exits, which files does it attempt to process commands from?',
		back: '~/.bash_logout and /etc/bash.bash_logout (in that order).',
		correct: false
	},
	{
		id: 8,
		front: 'When an interactive shell is invoked for bash, what files does it attempt to read commands from automatically?',
		back: '/etc/profile, ~/.bash_profile, ~/.bash_login, and ~/.profile (in that order)',
		correct: false
	},
	{
		id: 9,
		front: 'What wc option displays a character count?',
		back: '-m \n\n--chars',
		correct: false
	},
	{
		id: 10,
		front: 'What wc option displays a newline count?',
		back: '-l \n\n--lines',
		correct: false
	},
	{
		id: 11,
		front: 'What wc option displays a word count?',
		back: '-W \n\n--words',
		correct: false
	},
	{
		id: 12,
		front: 'What tr option deletes characters from SET1?',
		back: '-d',
		correct: false
	},
	{
		id: 13,
		front: 'What two methods are similar to using the xargs command?',
		back: '1. Enclosing a command within backticks (`): \n$ rm `find ./ -user jeff` \n\n2. Enclosing commands within a $( ):\n$ rm $(find ./ -user jeff)',
		correct: false
	},
	{
		id: 14,
		front: 'What wc option displays a byte count?',
		back: '-c \n\n--bytes',
		correct: false
	},
	{
		id: 15,
		front: 'What we option displays a character count?',
		back: '-m \n\n--chars',
		correct: false
	},
	{
		id: 16,
		front: 'What tail option keeps the file open to watch for new lines as they are added?',
		back: '-f \n\n--follow',
		correct: false
	},
	{
		id: 17,
		front: 'What tail option specifies the number of lines to output?',
		back: '-n <num> \n\n--lines=<num>',
		correct: false
	},
	{
		id: 18,
		front: 'What tail option terminates tracking once the process ID (PID) of a particular pid terminates?',
		back: '--pid=<pid>',
		correct: false
	},
	{
		id: 19,
		front: 'What split option breaks input files into pieces by byte sizes?',
		back: '-b \n\n--bytes=<size>',
		correct: false
	},
	{
		id: 20,
		front: 'What split option specifies the number of lines that split files can contain?',
		back: '-l\n\n--|ines=<num> \n\nEx. split -l 1 myfile.txt',
		correct: false
	},
	{
		id: 21,
		front: 'What tail option displays the output in bytes rather than lines?',
		back: '-c <num> \n\n--bytes=<num>',
		correct: false
	},
	{
		id: 22,
		front: 'What sort option reverses the sort order?',
		back: '-r \n\n--reverse',
		correct: false
	},
	{
		id: 23,
		front: 'What sort option sorts by a 3-letter month abbreviation?',
		back: '-M \n\n--month-sort',
		correct: false
	},
	{
		id: 24,
		front: 'What sort option sorts by number?',
		back: '-n \n\n--numeric-sort',
		correct: false
	},
	{
		id: 25,
		front: 'What split option breaks input files into pieces by byte sizes?',
		back: '-b \n\n--bytes=<size>',
		correct: false
	},
	{
		id: 26,
		front: 'What sed command writes the matched pattern to a specific file?',
		back: 'w <filename>',
		correct: false
	},
	{
		id: 27,
		front: 'What sort option allows the user to specify which field to sort on?',
		back: '-k \n\n--key= <value>',
		correct: false
	},
	{
		id: 28,
		front: 'What sort option ignores case?',
		back: '-f- \n\n--ignore-case',
		correct: false
	},
	{
		id: 29,
		front: 'What sed command quits the script without any output?',
		back: 'Q',
		correct: false
	},
	{
		id: 30,
		front: 'What sed command replaces text that matches a REGEXP with specific text?',
		back: 's/<regexp>/<text>',
		correct: false
	},
	{
		id: 31,
		front: 'What sed command replaces the selected range of lines with specific text?',
		back: 'c\<text>',
		correct: false
	},
	{
		id: 32,
		front: 'What sed command displays the current line number?',
		back: 'n<text>',
		correct: false
	},
	{
		id: 33,
		front: 'What sed command quits but prints the current pattern match?',
		back: 'q',
		correct: false
	},
	{
		id: 34,
		front: 'What represents any character except newlines in REGEXP?',
		back: '.*',
		correct: false
	},
	{
		id: 35,
		front: 'What sed command appends specific text to a file?',
		back: 'a\<text>',
		correct: false
	},
	{
		id: 36,
		front: 'What sed command appends text from a specific file into another file?',
		back: 'r <filename>',
		correct: false
	},
	{
		id: 37,
		front: 'What sed command inserts specific text into a file?',
		back: 'i<text>',
		correct: false
	},
	{
		id: 38,
		front: 'What sed command quits but prints the current pattern match?',
		back: '(need to look up)',
		correct: false
	},
	{
		id: 39,
		front: 'What pr option sets the number of characters for the page width? and what is the default?',
		back: '-W <num> \n\n--width <num> \n\nDefault = 72',
		correct: false
	},
	{
		id: 40,
		front: 'What pr option sets the text to display in the header?',
		back: '-h <text> \n\n--header= <text>',
		correct: false
	},
	{
		id: 41,
		front: 'What pr option specifies the number of columns to output text in?',
		back: '-<numcols> \n\n--columns=<numcols>',
		correct: false
	},
	{
		id: 42,
		front: 'What pr option removes the header entirely?',
		back: '-t \n\n--omit-header',
		correct: false
	},
	{
		id: 43,
		front: 'What pr option sets the indent character length?',
		back: '-i <num> \n\n--indent=<num>',
		correct: false
	},
	{
		id: 44,
		front: 'What pr option sets the length of lines per page?',
		back: '-I <lines> \n\n--length=<lines>',
		correct: false
	},
	{
		id: 45,
		front: 'What pr option creates a form-feed character between pages, rather than just using a fixed number of blank lines?',
		back: '-F \n\n-f \n\n--form-feed',
		correct: false
	},
	{
		id: 46,
		front: 'What pr option double-spaces the output from a single-spaced file?',
		back: '-d \n\n--double-space',
		correct: false
	},
	{
		id: 47,
		front: 'What option type uses double hyphens (--) followed by multi-character strings, which cannot be grouped together?',
		back: 'GNU Long Options \n\nEx. firewall-cmd --zone=public --add-port=22652/tcp --permanent',
		correct: false
	},
	{
		id: 48,
		front: 'What option type uses single characters which can be grouped together (with no preceeding hyphens)?',
		back: 'BSD Options \n\nEx. ps aux <username>',
		correct: false
	},
	{
		id: 49,
		front: 'What other command can be used in place of grep -E / grep --extended-regexp?',
		back: 'egrep',
		correct: false
	},
	{
		id: 50,
		front: 'What other command can be used in place of using grep -F / grep --fixed-strings?',
		back: 'fgrep',
		correct: false
	},
	{
		id: 51,
		front: 'What option for the type command can be used to check for both internal and external versions of the same command?',
		back: '- \n\nEx. type -a pw \n\npwd is a shell builtin \n\npwd is /bin/pwd',
		correct: false
	},
	{
		id: 52,
		front: 'What option specifies the number of spaces per tab for both the expand and unexpand commands?',
		back: '-t \n\n--tabs=<num>',
		correct: false
	},
	{
		id: 53,
		front: 'What option type uses a single hyphen (-) followed by single characters which can be grouped together?',
		back: 'Unix98 Options \n\nEx. ls -a|',
		correct: false
	},
	{
		id: 54,
		front: 'What option can be used to view a particular man page for a command?',
		back: 'man <section_number> <command>',
		correct: false
	},
	{
		id: 55,
		front: 'What option can be used with the man command to search by keyword?',
		back: '-k \n\nex. man -k "server"',
		correct: false
	},
	{
		id: 56,
		front: 'What option for cat displays line numbers on each line?',
		back: '-n \n\n--number',
		correct: false
	},
	{
		id: 57,
		front: 'What operator creates a new file containing STDOUT (1)?',
		back: '> \n\n1>',
		correct: false
	},
	{
		id: 58,
		front: 'What operator sends the contents of a file to STDIN (0)?',
		back: '<',
		correct: false
	},
	{
		id: 59,
		front: 'What option can be used to specify the field delimiter on the join command?',
		back: '-t \n\nex. join -t file1.txt file2.txt',
		correct: false
	},
	{
		id: 60,
		front: 'What operator can be used to open a file for both reading and writing over STDIN (0)?',
		back: '<>',
		correct: false
	},
	{
		id: 61,
		front: 'What operator creates a new file containing both STDOUT (1) and STDERR (2)?',
		back: '&> (bash) \n\n> [file] 2>8t1 (dash) \n\n2>&1 (ksh, csh)',
		correct: false
	},
	{
		id: 62,
		front: 'What operator creates a new file containing STDERR (2)?',
		back: '2>',
		correct: false
	},
	{
		id: 63,
		front: 'What nl options can adjust the header, body, and footer styling? and what are the style codes?',
		back: '-h <style_code> \n\n-b <style_code> \n\n-f <style_code> \n\n--header-numbering=<style_code> \n\n--body-numbering=<style_code> \n\n--footer-numbering=<style_code> \n\nStyle codes: \n\nt - non-empty lines (default value) \n\na - all lines \n\nn - no lines \n\npREGEXP - only lines matching REGEXP',
		correct: false
	},
	{
		id: 64,
		front: 'What operator and syntax is used to pass a here-document via STDIN (0)?',
		back: '<< [EOF_character(s)] \n\n[line_1] \n\n[line_2] \n\n[---] \n\n[line_n] \n\n[EOF_character(s)]',
		correct: false
	},
	{
		id: 65,
		front: 'What operator appends STDOUT (1) to a file?',
		back: '>>',
		correct: false
	},
	{
		id: 66,
		front: 'What legacy command can be used to update the whatis database with short descriptions and keywords for entries within man pages?',
		back: 'makewhatis',
		correct: false
	},
	{
		id: 67,
		front: 'What nl option can set the page delimiter?',
		back: '-d= \n\n--section-delimiter=',
		correct: false
	},
	{
		id: 68,
		front: 'What nl option changes the numbering format? and what are the formats?',
		back: '-n <format> \n\n--number-format= <format> \n\nFormats: \n\nIn - left justified \n\nrn - right justified \n\nrz - rightjustified (with leading zeros)',
		correct: false
	},
	{
		id: 69,
		front: 'What keys go to the first or last line within the less pager?',
		back: '9 / Left (first line) \n\nG / Right (last line)',
		correct: false
	},
	{
		id: 70,
		front: 'What keys move backwards and forwards in the less pager?',
		back: 'b (backwards) \n\nSpace (forwards) \n\nOR \n\nPgUp (backwards) \n\nPgDown (forwards)',
		correct: false
	},
	{
		id: 71,
		front: 'What keys move up or down one line at a time within the less pager?',
		back: 'i / Up (up) \n\nk / Down (down)',
		correct: false
	},
	{
		id: 72,
		front: 'What key can be used for command completion?',
		back: 'tab',
		correct: false
	},
	{
		id: 73,
		front: 'What key quits the less pager?',
		back: 'q',
		correct: false
	},
	{
		id: 74,
		front: 'What keys cycle through less pager search results?',
		back: 'N (backward) \n\nn (forward)',
		correct: false
	},
	{
		id: 75,
		front: 'What keys go to the first or last line within the less pager?',
		back: 'g / Left (first line) \n\nG / Right (last line)',
		correct: false
	},
	{
		id: 76,
		front: 'What is the Unix/Linux style end of line character?',
		back: 'ASCII 0x08 \n\n\\n',
		correct: false
	},
	{
		id: 77,
		front: 'What is used to start a forward search in less?',
		back: '\/<text>',
		correct: false
	},
	{
		id: 78,
		front: 'What is used to start a reverse search in less?',
		back: '?<text>',
		correct: false
	},
	{
		id: 79,
		front: 'What is the proper syntax for a value held by the PATH environment variable?',
		back: 'A list of colon-separated directories. \n\nEx. /usr/local/bin:/usr/binz/usr/Ioca|/sbin:/usr/sbin',
		correct: false
	},
	{
		id: 80,
		front: 'What is the syntax of the sed command?',
		back: '5 sed [options] \'<commands>\' [input_file] \n\n0R \n\n5 sed [options] -f <fiIe_containing_commands> [input_file]',
		correct: false
	},
	{
		id: 81,
		front: 'What is the tr option for truncating the size of SET1 to the length of SET2?',
		back: '-t \n\n--truncate-set1',
		correct: false
	},
	{
		id: 82,
		front: 'What is the Unix/Linux style end of line character?',
		back: 'ASCII 0x0a \n\n\\n',
		correct: false
	},
	{
		id: 83,
		front: 'What is the default pager for man pages? and what option can be used to change it?',
		back: 'less pager \n\nman -P <path_to_pager> <command>',
		correct: false
	},
	{
		id: 84,
		front: 'What is the default return value of grep?',
		back: 'The name of the file and a line of context for the match (if the file is a text file). ',
		correct: false
	},
	{
		id: 85,
		front: 'What is the output syntax of the wc command?',
		back: '<lines/newlines> <word_count> <byte_count> <filename> \n\nEx wc file.txt \n\n308 2343 15534 file.txt',
		correct: false
	},
	{
		id: 86,
		front: 'What is the default delimiter for the join command?',
		back: 'space',
		correct: false
	},
	{
		id: 87,
		front: 'What is the default output of the pr command?',
		back: 'It outputs the original text with headers (including the current date, time, filename, and page number) with an 80-character line length with a monospaced font. ',
		correct: false
	},
	{
		id: 88,
		front: 'What is the default output of the wc command without any additional arguments?',
		back: 'line count, word count, byte count, and filename \n\nEx wc file.txt \n\n308 2343 15534 file.txt',
		correct: false
	},
	{
		id: 89,
		front: 'What is a shell?',
		back: 'A program that accepts and interprets text-mode commands and provides an interface to the system.',
		correct: false
	},
	{
		id: 90,
		front: 'What is an example of a range expression in REGEXP?',
		back: '[A-Z] \n\n[0-9]',
		correct: false
	},
	{
		id: 91,
		front: 'What is an example of bracket expression in REGEXP?',
		back: 'b[aoeui]g \n\nmatches bag, beg, big, bog, bug',
		correct: false
	},
	{
		id: 92,
		front: 'What is the default delimiter for thejoin command?',
		back: 'space',
		correct: false
	},
	{
		id: 93,
		front: 'What hotkeys can be used to start a reverse search or a forward search through history?',
		back: '^R (reverse search) \n\n^S (forward search)',
		correct: false
	},
	{
		id: 94,
		front: 'What hotkeys delete a character to the left and under the cursor in bash?',
		back: 'Backspace (left) \n\n^D / Del (under)',
		correct: false
	},
	{
		id: 95,
		front: 'What hotkeys delete words in front of and behind the cursor in bash?',
		back: '^W / Esc -> ^H (backwards) \n\nEsc -> D (forward)',
		correct: false
	},
	{
		id: 96,
		front: 'What hotkeys can be used to move to the first and last items in history?',
		back: 'Esc -> < (first) \n\nEsc -> > (last)',
		correct: false
	},
	{
		id: 97,
		front: 'What hotkeys can be used to navigate up and down the history?',
		back: '^P / UP (UP) \n\n^N / Down (down)',
		correct: false
	},
	{
		id: 98,
		front: 'What hotkeys can be used to quit or terminate a history search?',
		back: '^q (quit) \n\n^G (terminate)',
		correct: false
	},
	{
		id: 99,
		front: 'What hotkey is used to move to the start or end of a line in bash?',
		back: '^A or ^E',
		correct: false
	},
	{
		id: 100,
		front: 'What hotkey moves the cursor forward or backwards in bash?',
		back: '^B and ^F \n\nLeft and Right',
		correct: false
	},
	{
		id: 101,
		front: 'What hotkeys can be used to Capitalize Case, UPPERCASE, and/or lowercase words in bash?',
		back: 'Esc -> C \n\nEsc -> U \n\nEsc -> L \n\n(respectively)',
		correct: false
	},
	{
		id: 102,
		front: 'What hotkey deletes everything from the cursor to the beginning of the line in bash?',
		back: '^U / ^X -> Backspace',
		correct: false
	},
	{
		id: 103,
		front: 'What hotkey deletes everything from the cursor to the end of line in bash?',
		back: '^K',
		correct: false
	},
	{
		id: 104,
		front: 'What hotkey can be used to paste the last thing deleted in bash?',
		back: '^Y',
		correct: false
	},
	{
		id: 105,
		front: 'What hotkey can be used to transpose the characters before and under the cursor in bash?',
		back: '^T',
		correct: false
	},
	{
		id: 106,
		front: 'What hotkey can be used to transpose the word before a cursor with the one under the cursor in bash?',
		back: 'Esc -> T',
		correct: false
	},
	{
		id: 107,
		front: 'What hotkey combination moves the cursor backwards or forward one word at a time?',
		back: 'ESC -> B / F',
		correct: false
	},
	{
		id: 108,
		front: 'What grep option recursively searches a directory and all of its subdirectories?',
		back: '-r \n\n--recursive',
		correct: false
	},
	{
		id: 109,
		front: 'What head option allows the user to specify how many lines are output?',
		back: '-n <num> \n\n--lines=<num>',
		correct: false
	},
	{
		id: 110,
		front: 'What head option changes the output to disply a specific number of bytes instead of lines?',
		back: '-C <num> \n\n--bytes=<num>',
		correct: false
	},
	{
		id: 111,
		front: 'What grep option displays the number of lines that match the pattern, instead of displaying context lines?',
		back: '-C \n\n--count',
		correct: false
	},
	{
		id: 112,
		front: 'What grep option gets the pattern from a file rather than as an argument?',
		back: '-f <file> \n\n--file=<file>',
		correct: false
	},
	{
		id: 113,
		front: 'What grep option ignores the case of the pattern?',
		back: '-i \n\n--ignore-case',
		correct: false
	},
	{
		id: 114,
		front: 'What fmt option changes the character width of paragraphs?',
		back: 'w<width> \n\n-w <width> \n\n--width=<width>',
		correct: false
	},
	{
		id: 115,
		front: 'What grep option allows the use of extended regular expressions?',
		back: '-E \n\n--extended-regexp',
		correct: false
	},
	{
		id: 116,
		front: 'What grep option disables REGEXP and uses basic pattern matching instead?',
		back: '-F \n\n--fixed-strings',
		correct: false
	},
	{
		id: 117,
		front: 'What file descriptor numbers are given to each of the three file descriptors?',
		back: '0 = STDIN \n\n1 = STDOUT \n\n2 = STDERR',
		correct: false
	},
	{
		id: 118,
		front: 'What file points to the system\'s default system shell?',
		back: '/bin/sh',
		correct: false
	},
	{
		id: 119,
		front: 'What filename syntax does a file generated using split have?',
		back: 'x plus a generated alphabetic suffix (i.e. aa, ab, ac, ad, etc.) \n\nEx xaa, xab, etc.',
		correct: false
	},
	{
		id: 120,
		front: 'What cut option cuts specific characters from an input file?',
		back: '-c <list> \n\n--characters=<list> \n\n<list> can be a single character (ex. E), a closed range of characters (ex. A-F), or an open range of characters (ex. -6 or 8-).',
		correct: false
	},
	{
		id: 121,
		front: 'What cut option prevents cut from echoing lines without delimited characters?',
		back: '-S \n\n--only-delimited',
		correct: false
	},
	{
		id: 122,
		front: 'What does bash stand for?',
		back: 'GNU Boume Again Shell',
		correct: false
	},
	{
		id: 123,
		front: 'What cut option changes the delimiter for fields to a specific character? and what is the default delimiter?',
		back: '-d <char> \n\n--delim=<char> \n\n--delimiter=<char> \n\nDefault = tab character',
		correct: false
	},
	{
		id: 124,
		front: 'What cut option cuts a specific field from the input file?',
		back: '-f <list> \n\n--fields=<list> \n\n<list> can be a single number (ex. 4), a closed range of numbers (ex. 2-4), or an open range of numbers (ex. -4 or 4-).',
		correct: false
	},
	{
		id: 125,
		front: 'What cut option cuts a specific number of bytes from an input file?',
		back: '-b <list> \n\n--bytes=<list> \n\n<list> can be a single number (ex. 4), a closed range of numbers (ex. 2-4), or an open range of numbers (ex. -4 or 4-).',
		correct: false
	},
	{
		id: 126,
		front: 'What command separates a single file into two or more files?',
		back: 'split',
		correct: false
	},
	{
		id: 127,
		front: 'What commands can be used to acquire additional information about a particular command?',
		back: 'man \n\ninfo \n\nhelp (for built-in commands)',
		correct: false
	},
	{
		id: 128,
		front: 'What commands can be used to create/assign environment variables?',
		back: '<name>="<value>" \nexport <name> \n\nOR \n\nexport <name>="<value>"',
		correct: false
	},
	{
		id: 129,
		front: 'What command produces a word count, line count, or byte count for a file?',
		back: 'WC',
		correct: false
	},
	{
		id: 130,
		front: 'What command removes duplicate lines within a file?',
		back: 'uniq',
		correct: false
	},
	{
		id: 131,
		front: 'What command searches files for a specific string?',
		back: 'grep',
		correct: false
	},
	{
		id: 132,
		front: 'What command is similar to cat but reverses the order of lines in the output?',
		back: 'tac',
		correct: false
	},
	{
		id: 133,
		front: 'What command merges files line-by-line, seperating the lines from each file with tabs?',
		back: 'paste \n\nex. paste file1.txt file2.txt',
		correct: false
	},
	{
		id: 134,
		front: 'What command organizes files using case-sensitive ASCII values?',
		back: 'sort',
		correct: false
	},
	{
		id: 135,
		front: 'What command echos out the first 10 lines of a file to STDOUT (0)?',
		back: 'head',
		correct: false
	},
	{
		id: 136,
		front: 'What command echos the last 10 lines of a file to STDOUT (1)?',
		back: 'tail',
		correct: false
	},
	{
		id: 137,
		front: 'What command extracts portions of input lines and displays them on STDOUT (1)?',
		back: 'cut',
		correct: false
	},
	{
		id: 138,
		front: 'What command converts between Windows and Unix/Linux line ending characters?',
		back: 'dos2unix \n\nunix2dos',
		correct: false
	},
	{
		id: 139,
		front: 'What command converts multiple spaces into a tab characters?',
		back: 'unexpand',
		correct: false
	},
	{
		id: 140,
		front: 'What command converts tab characters into spaces?',
		back: 'expand',
		correct: false
	},
	{
		id: 141,
		front: 'What command can be used to split STDOUT (1) so that it\'s displayed on screen and sent to a file?',
		back: 'tee \n\nEx. $ echo $PATH | tee path.txt',
		correct: false
	},
	{
		id: 142,
		front: 'What command can be used to view the value a particular environment variable holds?',
		back: 'echo $<env_name>',
		correct: false
	},
	{
		id: 143,
		front: 'What command combines two files by matching their content via a common delimiter?',
		back: 'join \n\nex. join file1.txt file2.txt',
		correct: false
	},
	{
		id: 144,
		front: 'What command can be used to prepare a plain-text file for printing?',
		back: 'pr',
		correct: false
	},
	{
		id: 145,
		front: 'What command can be used to quickly display the contents of a file out to screen?',
		back: 'cat \n\nEx. cat hello_world.txt',
		correct: false
	},
	{
		id: 146,
		front: 'What command can be used to retrieve environment variables?',
		back: 'env',
		correct: false
	},
	{
		id: 147,
		front: 'What command can be used to display a file in an unambiguous byte data format, such as octal, hexadecimal, decimal, etc.?',
		back: 'od',
		correct: false
	},
	{
		id: 148,
		front: 'What command can be used to execute a particular item number from history?',
		back: '!<number>',
		correct: false
	},
	{
		id: 149,
		front: 'What command can be used to generate other commands programmatically?',
		back: 'xargs [options] [command [inital-arguments]]',
		correct: false
	},
	{
		id: 150,
		front: 'What command can be used to clean up files with long line lengths, irregular line lengths, or other problems?',
		back: 'fmt',
		correct: false
	},
	{
		id: 151,
		front: 'What command can be used to delete an environment variable?',
		back: 'unset <name>',
		correct: false
	},
	{
		id: 152,
		front: 'What command can be used to determine if a command is internal or external?',
		back: '$ type <command>',
		correct: false
	},
	{
		id: 153,
		front: 'What command can be used as a shortcut to retrieve and execute the last command in history?',
		back: '!!',
		correct: false
	},
	{
		id: 154,
		front: 'What command can be used to change a file\'s permissions?',
		back: '$ chmod <option> <file>',
		correct: false
	},
	{
		id: 155,
		front: 'What command can be used to change characters from STDIN (1)? and what is its syntax?',
		back: 'tr [options] SET1 [SETZ] \n\nEx. tr d D < file1.txt',
		correct: false
	},
	{
		id: 156,
		front: 'What command and options can be used as an alternative to dos2unix?',
		back: '$ tr -d [[backslash backslash]] < dosfile.txt > unixfile.txt',
		correct: false
	},
	{
		id: 157,
		front: 'What command and options can be used as an alternative to unix2dos?',
		back: '$ sed s/S/"\r" / unixfile.txt > dosfile.txt',
		correct: false
	},
	{
		id: 158,
		front: 'What command appends STDERR (2) to a file?',
		back: '2>>',
		correct: false
	},
	{
		id: 159,
		front: 'What characters represent the start and end of a line in REGEXP?',
		back: '^ (start) \n\n$ (end)',
		correct: false
	},
	{
		id: 160,
		front: 'What combination of hotkeys can be used to launch a full text editor from bash?',
		back: '^X -> ^E \n\n(launches Emacs by default)',
		correct: false
	},
	{
		id: 161,
		front: 'What command adds number lines to a file?',
		back: 'nl \n\n(cat -n / cat -b also works)',
		correct: false
	},
	{
		id: 162,
		front: 'What character groups are supported by the tr command?',
		back: '[:alnum:] - all letters and numbers. \n\n[:upper:] - all UPPERCASE letters. \n\n[:lower:] - all lowercase letters. \n\n[:digit:] - all numbers. \n\n[A-Z] / [a-z] / [0-9] - ranges between characters.',
		correct: false
	},
	{
		id: 163,
		front: 'What character represents an OR in REGEXP?',
		back: '| \n\nEx. car | truck or a|b',
		correct: false
	},
	{
		id: 164,
		front: 'What characters capture a subexpression in REGEXP?',
		back: 'Parenthesis () \n\nEx. bat(man) = man is the substring',
		correct: false
	},
	{
		id: 165,
		front: 'What cat option shows a dollar sign ($) at the end of each line?',
		back: '-E \n\n--show-ends',
		correct: false
	},
	{
		id: 166,
		front: 'What cat option shows all tab characters as ^T?',
		back: '-T \n\n--show-tabs',
		correct: false
	},
	{
		id: 167,
		front: 'What cat option shows most control and other special characters using ^ (carat) and M- notations?',
		back: '-V \n\n--show-nonprinting',
		correct: false
	},
	{
		id: 168,
		front: 'What are the Windows/DOS end of line characters?',
		back: 'ASCII 0x0d and 0x0a \n\n\\r\\n',
		correct: false
	},
	{
		id: 169,
		front: 'What cat option adds numbers to each non-empty line?',
		back: '-b \n\n--number-nonblank',
		correct: false
	},
	{
		id: 170,
		front: 'What cat option compresses blank lines into a single blank line?',
		back: '-s \n\n--squeeze-blank',
		correct: false
	},
	{
		id: 171,
		front: 'What are the three repetition operators in REGEXP? and what do they represent?',
		back: '* = zero or more times \n\n+ = one or more times \n\n? = zero or one time',
		correct: false
	},
	{
		id: 172,
		front: 'What are the two forms of REGEXP?',
		back: 'Basic and extended',
		correct: false
	},
	{
		id: 173,
		front: 'What are the two types of default shells?',
		back: 'Interactive shell and system shell',
		correct: false
	},
	{
		id: 174,
		front: 'What are the middle three man page sections?',
		back: '4 = Device files (usually stored in /dev) \n\n5 = File formats \n\n6 = Games',
		correct: false
	},
	{
		id: 175,
		front: 'What are the three file descriptors used to identify a particular file object?',
		back: 'Standard Input, Standard Output, and Standard Error',
		correct: false
	},
	{
		id: 176,
		front: 'What are the three option types that can be used as arguments on various commands?',
		back: 'Unix98 options (Ex. Is -al) \n\n BSD options (Ex. ps axu <username>) \n\nGNU Long options (Ex. firewall-cmd --zone=public --add-port=22652/tcp --permanent)',
		correct: false
	},
	{
		id: 177,
		front: 'What are the abbreviations for the three file descriptors used by Linux?',
		back: 'STDIN (Standard Input) \n\nSTDOUT (Standard Output) \n\nSTDERR (Standard Error)',
		correct: false
	},
	{
		id: 178,
		front: 'What are the first three man sections?',
		back: '1 = Executable programs and shell commands \n\n2 = System calls provided by the kernel \n\n3 = Library calls provided by program libraries',
		correct: false
	},
	{
		id: 179,
		front: 'What are the last three man page sections?',
		back: '7 = Miscellaneous (macro packages, conventions, etc.) \n\n8 = System administrator commands (programs run as root) \n\n9 = Kernel routines',
		correct: false
	},
	{
		id: 180,
		front: 'What option changes the delimited field Join uses for matching? and what is the default?',
		back: 'The -1, -2, -99 option to specify the file, followed by a number indicating the field in that file. \n\nEx.join -1 3 -2 2 file1.txt file2.txt \n\n(this would look for matches on field 3 of the first file and field 2 of the second file) \n\nDefault = first field',
		correct: false
	},
	{
		id: 181,
		front: 'What command must output be piped to for actually printing after the pr command formats it?',
		back: 'lpr',
		correct: false
	},
	{
		id: 182,
		front: 'What directory path does the tilde (~) represent?',
		back: 'The user\'s home directory \n\n(ex. /home/jeff for the jeff user).',
		correct: false
	},
	{
		id: 183,
		front: 'What number of man page sections exists?',
		back: '9',
		correct: false
	},
	{
		id: 184,
		front: 'What is the way to use an external command if an internal command is already available?',
		back: 'Use a complete command path (ex. "$ /usr/bin/time" rather than just "$ time").',
		correct: false
	},
	{
		id: 185,
		front: 'What does the split command work on if no input file is specified?',
		back: 'STDIN (1)',
		correct: false
	},
	{
		id: 186,
		front: 'What combination of the head and tail commands be used to display lines 11-15 of a file named sampletxt?',
		back: 'head -n 15 sample.txt | tail -n 5',
		correct: false
	},
	{
		id: 187,
		front: 'What does Linux handle all objects (including a program\'s input and output stream) as?',
		back: 'files',
		correct: false
	},
	{
		id: 188,
		front: 'Which way does the fmt command attempt to format the content of a file?',
		back: 'It breaks paragraphs into no more than 75 characters in width; and assumes paragraphs to be delimeted by at least two blank lines or changes in indentation.',
		correct: false
	},
	{
		id: 189,
		front: 'What number of characters can filename lengths be up to?',
		back: '255 on most filesystems',
		correct: false
	},
	{
		id: 190,
		front: 'What special character can be used to escape other special characters in REGEXP?',
		back: '\ (backslash) \n\nEx. \. \( \) \? \+ \|',
		correct: false
	},
	{
		id: 191,
		front: 'What method can be used to send the STDOUT (1) from one program be sent to the STDIN (0) of another program?',
		back: 'Data pipes (aka pipelines) \n\nEx $ first _program | second _program',
		correct: false
	},
	{
		id: 192,
		front: 'What syntax does the output of a file is run through the od command have?',
		back: 'The first field of each line represents the byte offset; and each field afterwards represents a 2-byte octal unit. Up to 16 bytes of data is displayed per line.',
		correct: false
	},
	{
		id: 193,
		front: 'What option prevents the nl command from restarts the numbering of lines on each new page. What option prevents this?',
		back: '(need to look up) \n\n--no-renumber',
		correct: false
	},
	{
		id: 194,
		front: 'What are commands built into the shell called?',
        back: 'Internal commands',
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