// Creating a basic router object with routes array as a way to keep the current routes,
    // mode is used to show the History API in JS
        // URL path of application  only needed is use pushState which is the string root

// Config part of the object is mildly confusing, uses lots of operands
    // pushState is a method used by the History API and the double not operator is confusion, here's a link: https://love2dev.com/blog/javascript-not-operator/ 
        // Description of config "The mode is equal to 'history' only if we want to and of course only if the pushState is supported. 
            // Otherwise we are going to work with the hash in the URL. The root by default is set to a single slash '/'."
                // ? is a ternary operator in which the value before the colon is the if condition, returns true otherwise if false, it runs code after colon 
    var Router = {
  routes: [],
  mode: null,
  root: "/",
  config: function (options) {
      //checks first if options exist, then if options.mode exists and then if options.mode equals a specific value after it checks if it's not just null
        // not onto operand chekcs history.pushState against itself.
    this.mode = options && options.mode && options.mode == "history" && !!(history.pushState) ? "history" : "hash";
    this.root = options && options.root ? "/" + this.clearSlashes(options.root) + "/" : "/";
    return this;
  },

  // Gets Current URL which tracks position in history

  getFragment: function () {
    var fragment = "";
    if (this.mode === "history") {
        // Uses global window location, via history, remove root part of URL via RXJS, this also deltes all GET params via RXJS
      fragment = this.clearSlashes(
        decodeURI(location.pathname + location.search)
      );
      // RXJS implemented
      fragment = fragment.replace(/\\?(.*)$/, "");
      fragment = this.root != "/" ? fragment.replace(this.root, "") : fragment;
    } else {
        // Gets the hash value if history not being used, uses Regex expression to check if matched value
      var match = window.location.href.match(/#(.*)$/);
      fragment = match ? match[1] : "";
    }
    return this.clearSlashes(fragment);
  },
  
};
