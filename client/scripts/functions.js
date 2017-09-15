// GLOBAL FUNCTIONS

var fn = {

    // Courtesy of https://developers.google.com/web/fundamentals/getting-started/primers/promises
    get: function(url){
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            var req = new XMLHttpRequest();
            req.open('GET', url);
        
            req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
            };
        
            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };
        
            // Make the request
            req.send();
        });
    },

    getJSON: function(url){
        return this.get(url).then(JSON.parse);
    },

    escapeJSONSpecialChars: function(jsonString) {
        
        return jsonString.replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t")
            .replace(/\f/g, "\\f");
    
    },

    // Fisher-Yates (aka Knuth) Shuffle
    // Courtesy of https://bost.ocks.org/mike/shuffle/
    shuffleArray: function(array){

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
    },
        
    addClass: function(_element, _class){

        // get the element by ID if a string was passed
        if(typeof(_element) === 'string'){
            _element = document.getElementById(_element);
        }
        
        // append class if not already present
        if(_element.className.indexOf(_class) === -1){
            _element.className += ' ' + _class;

            // trim any whitespace in case of no existing classes
            _element.className = _element.className.trim();
        }
    },

    removeClass: function(_element, _class){

        // get the element by ID if a string was passed
        if(typeof(_element) === 'string'){
            _element = document.getElementById(_element);
        }
        
        // remove the class and trim any whitespace
        _element.className = _element.className.replace(_class, '').trim();
    },

    toggleClass: function(_element, _class){

        // get the element by ID if a string was passed
        if(typeof(_element) === 'string'){
            _element = document.getElementById(_element);
        }
        
        // append class if not already present
        if(_element.className.indexOf(_class) === -1){
            _element.className += ' ' + _class;
            // trim whitespace in case the element had no class previously
            _element.className = _element.className.trim();
        }
        else {
            // remove the class and trim any whitespace
            _element.className = _element.className.replace(_class, '').trim();
        }
    },

    // adds a class to all items but one
    // useful for views and menu items
    setVisible: function(_sharedClass, _class, _id){ 
    
        // get all elements of the specified class
        var _elements = document.getElementsByClassName(_sharedClass);
    
        // reverse iterate through all elements (fastest method)
        for (i = _elements.length; i--;) {
    
            // if the desired id is found
            if(_elements[i].id === _id){
                this.removeClass(_elements[i], _class);
            }
            else {
                this.addClass(_elements[i], _class);
            }
        }
    }
};