// GLOBAL FUNCTIONS

var fn = {

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