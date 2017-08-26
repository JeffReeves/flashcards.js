// GLOBAL FUNCTIONS

var fn = {

    // https://stackoverflow.com/questions/247483/http-get-request-in-javascript
    HttpClient: function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() { 
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }
    
            anHttpRequest.open( "GET", aUrl, true );            
            anHttpRequest.send( null );
        }
    },

    escapeJSONSpecialChars(jsonString) {
        
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
        
        // append class if not already present
        if(_element.className.indexOf(_class) === -1){
            _element.className += ' ' + _class;

            // trim any whitespace in case of no existing classes
            _element.className = _element.className.trim();
        }
    },

    removeClass: function(_element, _class){
        
        // remove the class and trim any whitespace
        _element.className = _element.className.replace(_class, '').trim();
    },

    toggleClass: function(_element, _class){
        
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