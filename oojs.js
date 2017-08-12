/*
* This will be a rewrite using OOJS ideas
* Flashcards are made up of decks. 
* Decks contain a stack of cards.
* Each card has a front and a back.
* Each card can be correct, incorrect, or skipped.
* 
*/

var Flashcards = function(){

    var self = this;

    // define an array of decks
    this.decks = [];

    // DOM elements
    this.elements = {
        // flashcards
        flashcardContainer: document.getElementById('flashcard-container'),
        flashcard: document.getElementById('flashcard'),
        front: document.getElementById('front'),
        back: document.getElementById('back'),
        frontText: front.getElementsByTagName('p')[0],
        backText: back.getElementsByTagName('p')[0],

        // progress bar
        progressBar: document.getElementById('progress-bar'),
        correctProgress: document.getElementById('correct-progress'),
        incorrectProgress: document.getElementById('incorrect-progress'),
        skippedProgress: document.getElementById('skipped-progress'),

        // dropdown to select decks
        deckSelect: document.getElementById('deck-select'),

        // buttons
        correctButton: document.getElementById('correct'),
        incorrectButton: document.getElementById('incorrect'),
        skipButton: document.getElementById('skip')
    };

    // copy of currently selected deck/cards
    this.current = {
        deckID: null,
        cards: null,
        card: null,
        totalCards: null,
        correct: 0,
        incorrect: 0,
        skipped: 0
    };

    // Fisher-Yates (aka Knuth) Shuffle
    // Courtesy of https://bost.ocks.org/mike/shuffle/
    var shuffle = function(array){
        var m = array.length, t, i;

        // While there remain elements to shuffle...
        while (m) {

            // Pick a remaining element...
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    // add new decks
    this.addDeck = function(title){

        console.log('self.decks.length: ', self.decks.length);

        self.decks.push({
            title: title,
            id: self.decks.length,
            cards: [],
            statuses: {
                correct: 0,
                incorrect: 0,
                skipped: 0
            }
        });
    };

    // add new cards to a deck 
    this.addCard = function(deckID, front, back){

        console.log('self.decks[' + deckID + '].cards.length: ', self.decks[deckID].cards.length);

        var cards = self.decks[deckID].cards;
        var id = cards.length;

        cards.push({
                id: id,
                front: front, 
                back: back,
                status: null
        });
    };

    // shuffle cards in a deck
    this.shuffleDeck = function(deckID){
        var cards = self.decks[deckID].cards;
        cards = shuffle(cards);
        return cards;
    };

    // load a new deck into the current deck
    this.loadDeck = function(){
        // load first deck into current deck
        self.current.deckID = 0;
        self.current.cards = self.decks[0].cards;
        self.current.totalCards = self.decks[0].cards.length;
    };

    // enable deck selection dropdown
    this.enableDeckSelection = function(){

        var decks = self.decks;

        // iterate through each deck
        for(var i = 0; i < decks.length; i++){

            // create a new option element with necessary values
            var option = document.createElement('option');
            option.setAttribute('value', decks[i].id);
            option.text = decks[i].title;

            // append it to the select dropdown
            self.elements.deckSelect.appendChild(option);
        }  

        // create an onchange event to switch selected deck
        self.elements.deckSelect.addEventListener('change', function(){

            var deckID = this.value;
            console.log('deckID selected: ', deckID);
            
            // shuffle the new deck and load the first card from it
            self.current.cards = self.shuffleDeck(deckID);
            self.loadCard();

            // set the progress back to 0
            self.updateProgress();
        });
    };

    // load text on front and back of cards
    this.loadCard = function(){

        // if there are cards remaining
        if(self.current.cards.length > 0){
            // take the first item from the array of 
            // current cards
            self.current.card = self.current.cards.shift();

            // place the text from the current card and 
            // place it into the front and back
            self.elements.frontText.innerText = self.current.card.front;
            self.elements.backText.innerText = self.current.card.back;
        }
        else {
            self.current.card = {};
            self.current.cards = [];
            self.elements.frontText.innerText = 'Congratulations! You\'ve finished the deck!';
            self.elements.backText.innerText = 'You didn\'t believe me did you? =P';            
        }
    };

    // enables and disables card flipping
    this.enableFlipping = function(){

        self.elements.flashcardContainer.addEventListener("mouseover", function(){

            // add class to flip card
            flashcard.className = 'flipped';
        });

        // add event for mouse exit
        self.elements.flashcardContainer.addEventListener("mouseout", function(){

            // remove class to unflip
            flashcard.removeAttribute('class');
        });
    };

    // enables the correct, incorrect, and skip buttons
    this.enableButtons = function(){

        // add events for button presses
        self.elements.correctButton.addEventListener("click", function(){

            // send button to get id
            var button = this.id;
            
            // update progress
            self.updateProgress(button);
            
            // load the next card
            self.loadCard();            
        });

        self.elements.incorrectButton.addEventListener("click", function(){

            // send button to get id
            var button = this.id;
            
            // update progress
            self.updateProgress(button);
            
            // load the next card
            self.loadCard();            
        });

        self.elements.skipButton.addEventListener("click", function(){

            // send button to get id
            var button = this.id;
            
            // update progress
            self.updateProgress(button);

            console.log('self.current.cards.length: ', self.current.cards.length);
                
            // load the next card
            self.loadCard();            
        });
    };

    // updates the progress bar
    this.updateProgress = function(button){

        if(button){

            // get curront card's status
            var status = self.current.card.status;

            console.log('button selected: ', button);
            console.log('current card status: ', status);

            // make changes based on button
            switch(button){
                case 'correct':
                    if(status === 'incorrect'){
                        self.current.incorrect--;
                    }
                    else if(status === 'skipped'){
                        self.current.skipped--;
                    }
                    self.current.correct++;

                    // update card status
                    self.current.card.status = 'correct';

                    break;
                case 'incorrect':
                    if(status === 'skipped'){
                        self.current.skipped--;
                    }
                    self.current.incorrect++;

                    // update card status
                    self.current.card.status = 'incorrect';
                    
                    // move card to back of deck
                    self.current.cards.push(self.current.card);
                    break;
                case 'skip':
                    if(status === 'incorrect'){
                        self.current.incorrect--;
                    }
                    self.current.skipped++;

                    // update card status
                    self.current.card.status = 'skipped';

                    // move card to back of deck
                    self.current.cards.push(self.current.card);
                    break;
                default:
                    break;
            }

            // prevent overflow of correct + incorrect + skipped > totalcards
            if(self.current.correct + self.current.incorrect + self.current.skipped <= self.current.totalCards){
                self.elements.correctProgress.style.width = (self.current.correct / self.current.totalCards) * 100 + '%';
                self.elements.incorrectProgress.style.width = (self.current.incorrect / self.current.totalCards) * 100 + '%';
                self.elements.skippedProgress.style.width = (self.current.skipped / self.current.totalCards) * 100 + '%';
            }
        }
        else {
                self.elements.correctProgress.style.width = '0%';
                self.elements.incorrectProgress.style.width = '0%';
                self.elements.skippedProgress.style.width = '0%';
                self.current.correct = 0;
                self.current.incorrect = 0;
                self.current.skipped = 0;
        }
    };
};

// MAIN 

var flashcards = new Flashcards;
flashcards.addDeck('CH1 - Command Line');
flashcards.addDeck('CH2 - Package Managers');
flashcards.addDeck('CH2 - Libraries');
flashcards.addDeck('CH2 - Processes');

flashcards.addCard(0, 'Where is the file that stores bash history?', '~/.bash_history');
flashcards.addCard(0, 'Which command can concatenate files together and send the resulting combination to STDOUT (1)?', 'cat \n\nEx. cat first.txt second.txt > combined.txt');
flashcards.addCard(0, 'Which command directly modifies a file\'s content and sends the changes to STDOUT (0)?', 'sed');

flashcards.addCard(1, 'Before upgrading a package with dpkg, what may need to be done first? and what is the command?', 'The old package may need to be removed first.\n\n# dpkg -r <package-name>');
flashcards.addCard(1, 'Binary packages typically contain what type of content?', 'Subdirectories that mimic the layout of the Linux root directory (i.e. /, /etc, /usr, etc.).');
flashcards.addCard(1, 'Debian package tools combine and compile source packages to create what?', 'Debian binary packages');

flashcards.addCard(2, 'How can binary program files locate libraries?', 'Either by name alone (ex. libc.so.6) or by providing a complete path (ex. /lib/libc.so.6).\n\nNote: a library path (containing directories to search through) must be configured to use names alone.');
flashcards.addCard(2, 'How can the LD_LIBRARY_PATH environment variable be set?', 'export LD_LIBRARY_PATH=<path1>:<pathN>');
flashcards.addCard(2, 'If all dependencies are met for a program but it still fails to load due to missing dependencies, what can be done?', 'Use the ldd command on the libraries shown when running ldd on the program. Sometimes these libraries have dependencies that may be missing.');

flashcards.addCard(3, 'Because many shells include their own internal version of the kill command, what must be done to ensure the external kill command is being used?', 'Call it with a full path\n\ni.e. /bin/kill');
flashcards.addCard(3, 'By default, ps displays which processes? and how wide is the output?', 'ps displays only processes that were run from its own terminal (options -A, -e, and x can overwrite this).\n\nThe output is limited to being 80 characters wide and is truncated beyond that length (options -w and w can ovewrite this).');
flashcards.addCard(3, 'By default, top sorts entries by what? and how often does it update?', 'CPU use\n\nEvery five (5) seconds');


//flashcards.shuffleDeck(0);
flashcards.enableDeckSelection();
flashcards.loadDeck();
flashcards.loadCard();
flashcards.enableFlipping();
flashcards.enableButtons();