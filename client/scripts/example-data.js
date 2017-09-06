export let exampleUsers = [
    { id: 1, username: "jeff" },
    { id: 2, username: "test" }
];

export let exampleDecks = [
    { id: 1, userId: 1, title: "CH1 - Command Line", stack: "Linux+"},
    { id: 2, userId: 1, title: "CH2 - Package Managers", stack: "Linux+"},
    { id: 3, userId: 1, title: "CH2 - Libraries", stack: "Linux+"},
    { id: 4, userId: 1, title: "CH2 - Processes", stack: "Linux+"},
    { id: 5, userId: 1, title: "Excel Basics", stack: "Excel"}
];

// get all cards by userId? 
// get all cards by deckId?

export let exampleCards = [
    { id: 1, deckId: 0, front: "Where is the file that stores bash history?", back: "~/.bash_history","status":null},
    { id: 2, deckId: 0, front: "Which command can concatenate files together and send the resulting combination to STDOUT (1)?", back: "cat \n\nEx. cat first.txt second.txt > combined.txt","status":null},
    { id: 3, deckId: 0, front: "Which command directly modifies a file's content and sends the changes to STDOUT (0)?", back: "sed","status":null},
    { id: 13, deckId: 0, front: "What character does xargs delimits its input by default? and how can this be changed?", back: "The -d \"<characters>\" option","status":null},
    { id: 14, deckId: 0, front: "When an interactive shell is invoked for bash, what files does it attempt to read commands from automatically?", back: "[etc/profile, ~/.bash_profile, ~/.bash_login, and ~/.profile (in that order)","status":null},
    { id: 15, deckId: 0, front: "Where does a shell look for commands?", back: "It first checks for internal commands, and if none are found, it checks for external commands within any of the directories listed on the SPATH environment variable. ","status":null},
    { id: 16, deckId: 0, front: "What wc option displays the length of the longest line?", back: "-L \n\n--max-line-length","status":null},
    { id: 17, deckId: 0, front: "When a login shell exits, which files does it attempt to process commands from?", back: "~/.bash_logout and /etc/bash.bash_logout (in that order).","status":null},
    { id: 18, deckId: 0, front: "When an interactive shell is invoked for bash, what files does it attempt to read commands from automatically?", back: "/etc/profile, ~/.bash_profile, ~/.bash_login, and ~/.profile (in that order)","status":null},
    { id: 19, deckId: 0, front: "What wc option displays a character count?", back: "-m \n\n--chars","status":null},
    { id: 20, deckId: 0, front: "What wc option displays a newline count?", back: "-l \n\n--lines","status":null},
    { id: 21, deckId: 0, front: "What wc option displays a word count?", back: "-W \n\n--words","status":null},
    { id: 22, deckId: 0, front: "What tr option deletes characters from SET1?", back: "-d","status":null},
    { id: 23, deckId: 0, front: "What two methods are similar to using the xargs command?", back: "1. Enclosing a command within backticks (`): \n$ rm `find ./ -user jeff` \n\n2. Enclosing commands within a $( ):\n$ rm $(find ./ -user jeff)","status":null},
    { id: 24, deckId: 0, front: "What wc option displays a byte count?", back: "-c \n\n--bytes","status":null},
    { id: 25, deckId: 0, front: "What we option displays a character count?", back: "-m \n\n--chars","status":null},
    { id: 26, deckId: 0, front: "What tail option keeps the file open to watch for new lines as they are added?", back: "-f \n\n--follow","status":null},
    { id: 27, deckId: 0, front: "What tail option specifies the number of lines to output?", back: "-n <num> \n\n--lines=<num>","status":null},
    { id: 28, deckId: 0, front: "What tail option terminates tracking once the process ID (PID) of a particular pid terminates?", back: "--pid=<pid>","status":null},
    { id: 29, deckId: 0, front: "What split option breaks input files into pieces by byte sizes?", back: "-b \n\n--bytes=<size>","status":null},
    { id: 30, deckId: 0, front: "What split option specifies the number of lines that split files can contain?", back: "-l\n\n--lines=<num> \n\nEx. split -l 1 myfile.txt","status":null},
    { id: 31, deckId: 0, front: "What tail option displays the output in bytes rather than lines?", back: "-c <num> \n\n--bytes=<num>","status":null},
    { id: 32, deckId: 0, front: "What sort option reverses the sort order?", back: "-r \n\n--reverse","status":null},
    { id: 33, deckId: 0, front: "What sort option sorts by a 3-letter month abbreviation?", back: "-M \n\n--month-sort","status":null},
    { id: 34, deckId: 0, front: "What sort option sorts by number?", back: "-n \n\n--numeric-sort","status":null},
    { id: 35, deckId: 0, front: "What split option breaks input files into pieces by byte sizes?", back: "-b \n\n--bytes=<size>","status":null},
    { id: 36, deckId: 0, front: "What sed command writes the matched pattern to a specific file?", back: "w <filename>","status":null},
    { id: 37, deckId: 0, front: "What sort option allows the user to specify which field to sort on?", back: "-k \n\n--key= <value>","status":null},
    { id: 38, deckId: 0, front: "What sort option ignores case?", back: "-f- \n\n--ignore-case","status":null},
    { id: 39, deckId: 0, front: "What sed command quits the script without any output?", back: "Q","status":null},
    { id: 40, deckId: 0, front: "What sed command replaces text that matches a REGEXP with specific text?", back: "s/<regexp>/<text>","status":null},
    { id: 41, deckId: 0, front: "What sed command replaces the selected range of lines with specific text?", back: "c<text>","status":null},
    { id: 42, deckId: 0, front: "What sed command displays the current line number?", back: "n<text>","status":null},
    { id: 43, deckId: 0, front: "What sed command quits but prints the current pattern match?", back: "q","status":null},
    { id: 44, deckId: 0, front: "What represents any character except newlines in REGEXP?", back: ".*","status":null},
    { id: 45, deckId: 0, front: "What sed command appends specific text to a file?", back: "a<text>","status":null},
    { id: 46, deckId: 0, front: "What sed command appends text from a specific file into another file?", back: "r <filename>","status":null},
    { id: 47, deckId: 0, front: "What sed command inserts specific text into a file?", back: "i<text>","status":null},
    { id: 48, deckId: 0, front: "What sed command quits but prints the current pattern match?", back: "(need to look up)","status":null},
    { id: 49, deckId: 0, front: "What pr option sets the number of characters for the page width? and what is the default?", back: "-W <num> \n\n--width <num> \n\nDefault = 72","status":null},
    { id: 50, deckId: 0, front: "What pr option sets the text to display in the header?", back: "-h <text> \n\n--header= <text>","status":null},
    { id: 51, deckId: 0, front: "What pr option specifies the number of columns to output text in?", back: "-<numcols> \n\n--columns=<numcols>","status":null},
    { id: 52, deckId: 0, front: "What pr option removes the header entirely?", back: "-t \n\n--omit-header","status":null},
    { id: 53, deckId: 0, front: "What pr option sets the indent character length?", back: "-i <num> \n\n--indent=<num>","status":null},
    { id: 54, deckId: 0, front: "What pr option sets the length of lines per page?", back: "-I <lines> \n\n--length=<lines>","status":null},
    { id: 55, deckId: 0, front: "What pr option creates a form-feed character between pages, rather than just using a fixed number of blank lines?", back: "-F \n\n-f \n\n--form-feed","status":null},
    { id: 56, deckId: 0, front: "What pr option double-spaces the output from a single-spaced file?", back: "-d \n\n--double-space","status":null},
    { id: 57, deckId: 0, front: "What option type uses double hyphens (--) followed by multi-character strings, which cannot be grouped together?", back: "GNU Long Options \n\nEx. firewall-cmd --zone=public --add-port=22652/tcp --permanent","status":null},
    { id: 58, deckId: 0, front: "What option type uses single characters which can be grouped together (with no preceeding hyphens)?", back: "BSD Options \n\nEx. ps aux <username>","status":null},
    { id: 59, deckId: 0, front: "What other command can be used in place of grep -E / grep --extended-regexp?", back: "egrep","status":null},
    { id: 60, deckId: 0, front: "What other command can be used in place of using grep -F / grep --fixed-strings?", back: "fgrep","status":null},
    { id: 61, deckId: 0, front: "What option for the type command can be used to check for both internal and external versions of the same command?", back: "- \n\nEx. type -a pw \n\npwd is a shell builtin \n\npwd is /bin/pwd","status":null},
    { id: 62, deckId: 0, front: "What option specifies the number of spaces per tab for both the expand and unexpand commands?", back: "-t \n\n--tabs=<num>","status":null},
    { id: 63, deckId: 0, front: "What option type uses a single hyphen (-) followed by single characters which can be grouped together?", back: "Unix98 Options \n\nEx. ls -al","status":null},
    { id: 64, deckId: 0, front: "What option can be used to view a particular man page for a command?", back: "man <section_number> <command>","status":null},
    { id: 65, deckId: 0, front: "What option can be used with the man command to search by keyword?", back: "-k \n\nex. man -k \"server\"","status":null},
    { id: 66, deckId: 0, front: "What option for cat displays line numbers on each line?", back: "-n \n\n--number","status":null},
    { id: 67, deckId: 0, front: "What operator creates a new file containing STDOUT (1)?", back: "> \n\n1>","status":null},
    { id: 68, deckId: 0, front: "What operator sends the contents of a file to STDIN (0)?", back: "<","status":null},
    { id: 69, deckId: 0, front: "What option can be used to specify the field delimiter on the join command?", back: "-t \n\nex. join -t file1.txt file2.txt","status":null},
    { id: 70, deckId: 0, front: "What operator can be used to open a file for both reading and writing over STDIN (0)?", back: "<>","status":null},
    { id: 71, deckId: 0, front: "What operator creates a new file containing both STDOUT (1) and STDERR (2)?", back: "&> (bash) \n\n> [file] 2>8t1 (dash) \n\n2>&1 (ksh, csh)","status":null},
    { id: 72, deckId: 0, front: "What operator creates a new file containing STDERR (2)?", back: "2>","status":null},
    { id: 73, deckId: 0, front: "What nl options can adjust the header, body, and footer styling?", back: "-h <style_code> \n\n-b <style_code> \n\n-f <style_code> \n\n--header-numbering=<style_code> \n\n--body-numbering=<style_code> \n\n--footer-numbering=<style_code>","status":null},
    { id: 74, deckId: 0, front: "What operator and syntax is used to pass a here-document via STDIN (0)?", back: "<< [EOF_character(s)] \n\n[line_1] \n\n[line_2] \n\n[---] \n\n[line_n] \n\n[EOF_character(s)]","status":null},
    { id: 75, deckId: 0, front: "What operator appends STDOUT (1) to a file?", back: ">>","status":null},
    { id: 76, deckId: 0, front: "What legacy command can be used to update the whatis database with short descriptions and keywords for entries within man pages?", back: "makewhatis","status":null},
    { id: 77, deckId: 0, front: "What nl option can set the page delimiter?", back: "-d= \n\n--section-delimiter=","status":null},
    { id: 78, deckId: 0, front: "What nl option changes the numbering format? and what are the formats?", back: "-n <format> \n\n--number-format= <format> \n\nFormats: \n\nIn - left justified \n\nrn - right justified \n\nrz - rightjustified (with leading zeros)","status":null},
    { id: 79, deckId: 0, front: "What keys go to the first or last line within the less pager?", back: "9 / Left (first line) \n\nG / Right (last line)","status":null},
    { id: 80, deckId: 0, front: "What keys move backwards and forwards in the less pager?", back: "b (backwards) \n\nSpace (forwards) \n\nOR \n\nPgUp (backwards) \n\nPgDown (forwards)","status":null},
    { id: 81, deckId: 0, front: "What keys move up or down one line at a time within the less pager?", back: "i / Up (up) \n\nk / Down (down)","status":null},
    { id: 82, deckId: 0, front: "What key can be used for command completion?", back: "tab","status":null},
    { id: 83, deckId: 0, front: "What key quits the less pager?", back: "q","status":null},
    { id: 84, deckId: 0, front: "What keys cycle through less pager search results?", back: "N (backward) \n\nn (forward)","status":null},
    { id: 85, deckId: 0, front: "What keys go to the first or last line within the less pager?", back: "g / Left (first line) \n\nG / Right (last line)","status":null},
    { id: 86, deckId: 0, front: "What is the Unix/Linux style end of line character?", back: "ASCII 0x08 \n\n\\n","status":null},
    { id: 87, deckId: 0, front: "What is used to start a forward search in less?", back: "/<text>","status":null},
    { id: 88, deckId: 0, front: "What is used to start a reverse search in less?", back: "?<text>","status":null},
    { id: 89, deckId: 0, front: "What is the proper syntax for a value held by the PATH environment variable?", back: "A list of colon-separated directories. \n\nEx. /usr/local/bin:/usr/binz/usr/local/sbin:/usr/sbin","status":null},
    { id: 90, deckId: 0, front: "What is the syntax of the sed command?", back: "$ sed [options] '<commands>' [input_file] \n\n0R \n\n$ sed [options] -f <fiIe_containing_commands> [input_file]","status":null},
    { id: 91, deckId: 0, front: "What is the tr option for truncating the size of SET1 to the length of SET2?", back: "-t \n\n--truncate-set1","status":null},
    { id: 92, deckId: 0, front: "What is the Unix/Linux style end of line character?", back: "ASCII 0x0a \n\n\\n","status":null},
    { id: 93, deckId: 0, front: "What is the default pager for man pages? and what option can be used to change it?", back: "less pager \n\nman -P <path_to_pager> <command>","status":null},
    { id: 94, deckId: 0, front: "What is the default return value of grep?", back: "The name of the file and a line of context for the match (if the file is a text file). ","status":null},
    { id: 95, deckId: 0, front: "What is the output syntax of the wc command?", back: "<lines/newlines> <word_count> <byte_count> <filename> \n\nEx wc file.txt \n\n308 2343 15534 file.txt","status":null},
    { id: 96, deckId: 0, front: "What is the default delimiter for the join command?", back: "space","status":null},
    { id: 97, deckId: 0, front: "What is the default output of the pr command?", back: "It outputs the original text with headers (including the current date, time, filename, and page number) with an 80-character line length with a monospaced font. ","status":null},
    { id: 98, deckId: 0, front: "What is the default output of the wc command without any additional arguments?", back: "line count, word count, byte count, and filename \n\nEx wc file.txt \n\n308 2343 15534 file.txt","status":null},
    { id: 99, deckId: 0, front: "What is a shell?", back: "A program that accepts and interprets text-mode commands and provides an interface to the system.","status":null},
    { id: 100, deckId: 0, front: "What is an example of a range expression in REGEXP?", back: "[A-Z] \n\n[0-9]","status":null},
    { id: 101, deckId: 0, front: "What is an example of bracket expression in REGEXP?", back: "b[aoeui]g \n\nmatches bag, beg, big, bog, bug","status":null},
    { id: 102, deckId: 0, front: "What is the default delimiter for thejoin command?", back: "space","status":null},
    { id: 103, deckId: 0, front: "What hotkeys can be used to start a reverse search or a forward search through history?", back: "^R (reverse search) \n\n^S (forward search)","status":null},
    { id: 104, deckId: 0, front: "What hotkeys delete a character to the left and under the cursor in bash?", back: "Backspace (left) \n\n^D / Del (under)","status":null},
    { id: 105, deckId: 0, front: "What hotkeys delete words in front of and behind the cursor in bash?", back: "^W / Esc -> ^H (backwards) \n\nEsc -> D (forward)","status":null},
    { id: 106, deckId: 0, front: "What hotkeys can be used to move to the first and last items in history?", back: "Esc -> < (first) \n\nEsc -> > (last)","status":null},
    { id: 107, deckId: 0, front: "What hotkeys can be used to navigate up and down the history?", back: "^P / UP (UP) \n\n^N / Down (down)","status":null},
    { id: 108, deckId: 0, front: "What hotkeys can be used to quit or terminate a history search?", back: "^q (quit) \n\n^G (terminate)","status":null},
    { id: 109, deckId: 0, front: "What hotkey is used to move to the start or end of a line in bash?", back: "^A or ^E","status":null},
    { id: 110, deckId: 0, front: "What hotkey moves the cursor forward or backwards in bash?", back: "^B and ^F \n\nLeft and Right","status":null},
    { id: 111, deckId: 0, front: "What hotkeys can be used to Capitalize Case, UPPERCASE, and/or lowercase words in bash?", back: "Esc -> C \n\nEsc -> U \n\nEsc -> L \n\n(respectively)","status":null},
    { id: 112, deckId: 0, front: "What hotkey deletes everything from the cursor to the beginning of the line in bash?", back: "^U / ^X -> Backspace","status":null},
    { id: 113, deckId: 0, front: "What hotkey deletes everything from the cursor to the end of line in bash?", back: "^K","status":null},
    { id: 114, deckId: 0, front: "What hotkey can be used to paste the last thing deleted in bash?", back: "^Y","status":null},
    { id: 115, deckId: 0, front: "What hotkey can be used to transpose the characters before and under the cursor in bash?", back: "^T","status":null},
    { id: 116, deckId: 0, front: "What hotkey can be used to transpose the word before a cursor with the one under the cursor in bash?", back: "Esc -> T","status":null},
    { id: 117, deckId: 0, front: "What hotkey combination moves the cursor backwards or forward one word at a time?", back: "ESC -> B / F","status":null},
    { id: 118, deckId: 0, front: "What grep option recursively searches a directory and all of its subdirectories?", back: "-r \n\n--recursive","status":null},
    { id: 119, deckId: 0, front: "What head option allows the user to specify how many lines are output?", back: "-n <num> \n\n--lines=<num>","status":null},
    { id: 120, deckId: 0, front: "What head option changes the output to disply a specific number of bytes instead of lines?", back: "-C <num> \n\n--bytes=<num>","status":null},
    { id: 121, deckId: 0, front: "What grep option displays the number of lines that match the pattern, instead of displaying context lines?", back: "-C \n\n--count","status":null},
    { id: 122, deckId: 0, front: "What grep option gets the pattern from a file rather than as an argument?", back: "-f <file> \n\n--file=<file>","status":null},
    { id: 123, deckId: 0, front: "What grep option ignores the case of the pattern?", back: "-i \n\n--ignore-case","status":null},
    { id: 124, deckId: 0, front: "What fmt option changes the character width of paragraphs?", back: "w<width> \n\n-w <width> \n\n--width=<width>","status":null},
    { id: 125, deckId: 0, front: "What grep option allows the use of extended regular expressions?", back: "-E \n\n--extended-regexp","status":null},
    { id: 126, deckId: 0, front: "What grep option disables REGEXP and uses basic pattern matching instead?", back: "-F \n\n--fixed-strings","status":null},
    { id: 127, deckId: 0, front: "What file descriptor numbers are given to each of the three file descriptors?", back: "0 = STDIN \n\n1 = STDOUT \n\n2 = STDERR","status":null},
    { id: 128, deckId: 0, front: "What file points to the system's default system shell?", back: "/bin/sh","status":null},
    { id: 129, deckId: 0, front: "What filename syntax does a file generated using split have?", back: "x plus a generated alphabetic suffix (i.e. aa, ab, ac, ad, etc.) \n\nEx xaa, xab, etc.","status":null},
    { id: 130, deckId: 0, front: "What cut option cuts specific characters from an input file?", back: "-c <list> \n\n--characters=<list> \n\n<list> can be a single character (ex. E), a closed range of characters (ex. A-F), or an open range of characters (ex. -6 or 8-).","status":null},
    { id: 131, deckId: 0, front: "What cut option prevents cut from echoing lines without delimited characters?", back: "-S \n\n--only-delimited","status":null},
    { id: 132, deckId: 0, front: "What does bash stand for?", back: "GNU Boume Again Shell","status":null},
    { id: 133, deckId: 0, front: "What cut option changes the delimiter for fields to a specific character? and what is the default delimiter?", back: "-d <char> \n\n--delim=<char> \n\n--delimiter=<char> \n\nDefault = tab character","status":null},
    { id: 134, deckId: 0, front: "What cut option cuts a specific field from the input file?", back: "-f <list> \n\n--fields=<list> \n\n<list> can be a single number (ex. 4), a closed range of numbers (ex. 2-4), or an open range of numbers (ex. -4 or 4-).","status":null},
    { id: 135, deckId: 0, front: "What cut option cuts a specific number of bytes from an input file?", back: "-b <list> \n\n--bytes=<list> \n\n<list> can be a single number (ex. 4), a closed range of numbers (ex. 2-4), or an open range of numbers (ex. -4 or 4-).","status":null},
    { id: 136, deckId: 0, front: "What command separates a single file into two or more files?", back: "split","status":null},
    { id: 137, deckId: 0, front: "What commands can be used to acquire additional information about a particular command?", back: "man \n\ninfo \n\nhelp (for built-in commands)","status":null},
    { id: 138, deckId: 0, front: "What commands can be used to create/assign environment variables?", back: "<name>=\"<value>\" \nexport <name> \n\nOR \n\nexport <name>=\"<value>\"","status":null},
    { id: 139, deckId: 0, front: "What command produces a word count, line count, or byte count for a file?", back: "WC","status":null},
    { id: 140, deckId: 0, front: "What command removes duplicate lines within a file?", back: "uniq","status":null},
    { id: 141, deckId: 0, front: "What command searches files for a specific string?", back: "grep","status":null},
    { id: 142, deckId: 0, front: "What command is similar to cat but reverses the order of lines in the output?", back: "tac","status":null},
    { id: 143, deckId: 0, front: "What command merges files line-by-line, seperating the lines from each file with tabs?", back: "paste \n\nex. paste file1.txt file2.txt","status":null},
    { id: 144, deckId: 0, front: "What command organizes files using case-sensitive ASCII values?", back: "sort","status":null},
    { id: 145, deckId: 0, front: "What command echos out the first 10 lines of a file to STDOUT (0)?", back: "head","status":null},
    { id: 146, deckId: 0, front: "What command echos the last 10 lines of a file to STDOUT (1)?", back: "tail","status":null},
    { id: 147, deckId: 0, front: "What command extracts portions of input lines and displays them on STDOUT (1)?", back: "cut","status":null},
    { id: 148, deckId: 0, front: "What command converts between Windows and Unix/Linux line ending characters?", back: "dos2unix \n\nunix2dos","status":null},
    { id: 149, deckId: 0, front: "What command converts multiple spaces into a tab characters?", back: "unexpand","status":null},
    { id: 150, deckId: 0, front: "What command converts tab characters into spaces?", back: "expand","status":null},
    { id: 151, deckId: 0, front: "What command can be used to split STDOUT (1) so that it's displayed on screen and sent to a file?", back: "tee \n\nEx. $ echo $PATH | tee path.txt","status":null},
    { id: 152, deckId: 0, front: "What command can be used to view the value a particular environment variable holds?", back: "echo $<env_name>","status":null},
    { id: 153, deckId: 0, front: "What command combines two files by matching their content via a common delimiter?", back: "join \n\nex. join file1.txt file2.txt","status":null},
    { id: 154, deckId: 0, front: "What command can be used to prepare a plain-text file for printing?", back: "pr","status":null},
    { id: 155, deckId: 0, front: "What command can be used to quickly display the contents of a file out to screen?", back: "cat \n\nEx. cat hello_world.txt","status":null},
    { id: 156, deckId: 0, front: "What command can be used to retrieve environment variables?", back: "env","status":null},
    { id: 157, deckId: 0, front: "What command can be used to display a file in an unambiguous byte data format, such as octal, hexadecimal, decimal, etc.?", back: "od","status":null},
    { id: 158, deckId: 0, front: "What command can be used to execute a particular item number from history?", back: "!<number>","status":null},
    { id: 159, deckId: 0, front: "What command can be used to generate other commands programmatically?", back: "xargs [options] [command [inital-arguments]]","status":null},
    { id: 160, deckId: 0, front: "What command can be used to clean up files with long line lengths, irregular line lengths, or other problems?", back: "fmt","status":null},
    { id: 161, deckId: 0, front: "What command can be used to delete an environment variable?", back: "unset <name>","status":null},
    { id: 162, deckId: 0, front: "What command can be used to determine if a command is internal or external?", back: "$ type <command>","status":null},
    { id: 163, deckId: 0, front: "What command can be used as a shortcut to retrieve and execute the last command in history?", back: "!!","status":null},
    { id: 164, deckId: 0, front: "What command can be used to change a file's permissions?", back: "$ chmod <option> <file>","status":null},
    { id: 165, deckId: 0, front: "What command can be used to change characters from STDIN (1)? and what is its syntax?", back: "tr [options] SET1 [SET2] \n\nEx. tr d D < file1.txt","status":null},
    { id: 166, deckId: 0, front: "What command and options can be used as an alternative to dos2unix?", back: "$ tr -d [[backslash backslash]] < dosfile.txt > unixfile.txt","status":null},
    { id: 167, deckId: 0, front: "What command and options can be used as an alternative to unix2dos?", back: "$ sed s/S/\"\r\" / unixfile.txt > dosfile.txt","status":null},
    { id: 168, deckId: 0, front: "What command appends STDERR (2) to a file?", back: "2>>","status":null},
    { id: 169, deckId: 0, front: "What characters represent the start and end of a line in REGEXP?", back: "^ (start) \n\n$ (end)","status":null},
    { id: 170, deckId: 0, front: "What combination of hotkeys can be used to launch a full text editor from bash?", back: "^X -> ^E \n\n(launches Emacs by default)","status":null},
    { id: 171, deckId: 0, front: "What command adds number lines to a file?", back: "nl \n\n(cat -n / cat -b also works)","status":null},
    { id: 172, deckId: 0, front: "What character groups are supported by the tr command?", back: "[:alnum:] - all letters and numbers. \n\n[:upper:] - all UPPERCASE letters. \n\n[:lower:] - all lowercase letters. \n\n[:digit:] - all numbers. \n\n[A-Z] / [a-z] / [0-9] - ranges between characters.","status":null},
    { id: 173, deckId: 0, front: "What character represents an OR in REGEXP?", back: "| \n\nEx. car | truck or a|b","status":null},
    { id: 174, deckId: 0, front: "What characters capture a subexpression in REGEXP?", back: "Parenthesis () \n\nEx. bat(man) = man is the substring","status":null},
    { id: 175, deckId: 0, front: "What cat option shows a dollar sign ($) at the end of each line?", back: "-E \n\n--show-ends","status":null},
    { id: 176, deckId: 0, front: "What cat option shows all tab characters as ^T?", back: "-T \n\n--show-tabs","status":null},
    { id: 177, deckId: 0, front: "What cat option shows most control and other special characters using ^ (carat) and M- notations?", back: "-V \n\n--show-nonprinting","status":null},
    { id: 178, deckId: 0, front: "What are the Windows/DOS end of line characters?", back: "ASCII 0x0d and 0x0a \n\n\\r\\n","status":null},
    { id: 179, deckId: 0, front: "What cat option adds numbers to each non-empty line?", back: "-b \n\n--number-nonblank","status":null},
    { id: 180, deckId: 0, front: "What cat option compresses blank lines into a single blank line?", back: "-s \n\n--squeeze-blank","status":null},
    { id: 181, deckId: 0, front: "What are the three repetition operators in REGEXP? and what do they represent?", back: "* = zero or more times \n\n+ = one or more times \n\n? = zero or one time","status":null},
    { id: 182, deckId: 0, front: "What are the two forms of REGEXP?", back: "Basic and extended","status":null},
    { id: 183, deckId: 0, front: "What are the two types of default shells?", back: "Interactive shell and system shell","status":null},
    { id: 184, deckId: 0, front: "What are the middle three man page sections?", back: "4 = Device files (usually stored in /dev) \n\n5 = File formats \n\n6 = Games","status":null},
    { id: 185, deckId: 0, front: "What are the three file descriptors used to identify a particular file object?", back: "Standard Input, Standard Output, and Standard Error","status":null},
    { id: 186, deckId: 0, front: "What are the three option types that can be used as arguments on various commands?", back: "Unix98 options (Ex. Is -al) \n\n BSD options (Ex. ps axu <username>) \n\nGNU Long options (Ex. firewall-cmd --zone=public --add-port=22652/tcp --permanent)","status":null},
    { id: 187, deckId: 0, front: "What are the abbreviations for the three file descriptors used by Linux?", back: "STDIN (Standard Input) \n\nSTDOUT (Standard Output) \n\nSTDERR (Standard Error)","status":null},
    { id: 188, deckId: 0, front: "What are the first three man sections?", back: "1 = Executable programs and shell commands \n\n2 = System calls provided by the kernel \n\n3 = Library calls provided by program libraries","status":null},
    { id: 189, deckId: 0, front: "What are the last three man page sections?", back: "7 = Miscellaneous (macro packages, conventions, etc.) \n\n8 = System administrator commands (programs run as root) \n\n9 = Kernel routines","status":null},
    { id: 190, deckId: 0, front: "What option changes the delimited field Join uses for matching? and what is the default?", back: "The -1, -2, -99 option to specify the file, followed by a number indicating the field in that file. \n\nEx.join -1 3 -2 2 file1.txt file2.txt \n\n(this would look for matches on field 3 of the first file and field 2 of the second file) \n\nDefault = first field","status":null},
    { id: 191, deckId: 0, front: "What command must output be piped to for actually printing after the pr command formats it?", back: "lpr","status":null},
    { id: 192, deckId: 0, front: "What directory path does the tilde (~) represent?", back: "The user's home directory \n\n(ex. /home/jeff for the jeff user).","status":null},
    { id: 193, deckId: 0, front: "What number of man page sections exists?", back: "9","status":null},
    { id: 194, deckId: 0, front: "What is the way to use an external command if an internal command is already available?", back: "Use a complete command path (ex. \"$ /usr/bin/time\" rather than just \"$ time\").","status":null},
    { id: 195, deckId: 0, front: "What does the split command work on if no input file is specified?", back: "STDIN (1)","status":null},
    { id: 196, deckId: 0, front: "What combination of the head and tail commands be used to display lines 11-15 of a file named sampletxt?", back: "head -n 15 sample.txt | tail -n 5","status":null},
    { id: 197, deckId: 0, front: "What does Linux handle all objects (including a program's input and output stream) as?", back: "files","status":null},
    { id: 198, deckId: 0, front: "Which way does the fmt command attempt to format the content of a file?", back: "It breaks paragraphs into no more than 75 characters in width; and assumes paragraphs to be delimeted by at least two blank lines or changes in indentation.","status":null},
    { id: 199, deckId: 0, front: "What number of characters can filename lengths be up to?", back: "255 on most filesystems","status":null},
    { id: 200, deckId: 0, front: "What special character can be used to escape other special characters in REGEXP?", back: " (backslash) \n\nEx. . ( ) ? + |","status":null},
    { id: 201, deckId: 0, front: "What method can be used to send the STDOUT (1) from one program be sent to the STDIN (0) of another program?", back: "Data pipes (aka pipelines) \n\nEx $ first _program | second _program","status":null},
    { id: 202, deckId: 0, front: "What syntax does the output of a file is run through the od command have?", back: "The first field of each line represents the byte offset; and each field afterwards represents a 2-byte octal unit. Up to 16 bytes of data is displayed per line.","status":null},
    { id: 203, deckId: 0, front: "What option prevents the nl command from restarts the numbering of lines on each new page. What option prevents this?", back: "(need to look up) \n\n--no-renumber","status":null},
    { id: 204, deckId: 0, front: "What are commands built into the shell called?", back: "Internal commands","status":null},
    { id: 205, deckId: 0, front: "What are the style codes used with the nl command?", back: "t - non-empty lines (default value) \n\na - all lines \n\nn - no lines \n\npREGEXP - only lines matching REGEXP","status":null}
];