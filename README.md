#toolbox.js
Toolbox.js is a simple JavaScript library with a collection of useful functions. It is basically written as a coding exercise/project but should be useful none the less.

##Use toolbox
Include the line:

    <script type="text/javascript" src="toolbox.js"></script>
in your HTML document, and then toolbox is ready to go. To use any of the functions, use `tb.` (or `toolbox.`) plus the function name.
____________________
#Functions
###isArray()
_variable_ = any value to get type of
<br/>__returns boolean__

Returns `true` if variable is an array, and `false` if it is not. Aliased with `tb.isArr()`.

    var a = [1,2,3];
    var b = "123";
    
    tb.isArray(a); //Returns true
	tb.isArray(b); //Returns false

###isUndefined()
_variable_ = any value to get type of
<br/>__returns boolean__

Returns `true` if variable is undefined, and `false` if it is not. aliased with `tb.isUndef()`.

    var a;
	var b = "123";
	
	tb.isUndefined(a); //Return true
	tb.isUndefined(b); //Returns false

###isDefined()
_variable_ = any value to get type of
<br/>__returns boolean__

Returns `true` if variable is defined, and `false` if it is not. aliased with `tb.isDef`.

    var a = "123";
	var b;
	
	tb.isDefined(a); //Return true
	tb.isDefined(b); //Returns false


###isObject()
_variable_ = any value to get type of
<br/>__returns boolean__

Returns `true` if variable is an object, and `false` if it is not. aliased with `tb.isObj()`.

    var a = {};
    var b = [1,2,3]; //Arrays count as objects
    var c = "123";
    
	tb.isObject(a); //Return true
	tb.isObject(b); //Returns true
    tb.isObject(c); //Returns false

###isString()
_variable_ = any value to get type of
<br/>__returns boolean__

Returns `true` if variable is a string, and `false` if it is not. aliased with `tb.isStr()`.

    var a = "123";
    var b = new String("123");
    var c = 123;
    
    tb.isString(a); //Return true
    tb.isString(b); //Returns true
    tb.isString(c); //Returns false
    
###isNumber()
_variable_ = any value to get type of
<br/>__returns boolean__

Returns `true` if variable is a number, and `false` if it is not. aliased with `tb.isNum()`.

    var a = 123;
    var b = new Number(123);
    var c = "123";
    
    tb.isNumber(a); //Return true
    tb.isNumber(b); //Returns true
    tb.isNumber(c); //Returns false
    
###isBoolean()
_variable_ = any value to get type of
<br/>__returns boolean__

Returns `true` if variable is a boolean, and `false` if it is not. Aliased with `tb.isBool()`.

    var a = true;
    var b = new Bool(false);
    var c = null;
    
    tb.isBoolean(a); //Return true
    tb.isBoolean(b); //Returns true
    tb.isBoolean(c); //Returns false
    
###each()

_iterator_ = variable to iterate over; number, array, object
<br/>_function(value, key)_ = function to run at each iteration; function
<br/>__returns *iterator*__

Runs over each element of the iterator, executing a function each time. Function takes to values: `value` for the value, and `key` for the index/key.

Note: if _iterator_ is a number, it will simply run the function _n_ times.

    var a = [1,2,3];
    var b = {1: "one", 2: "two", 3: "three"};
    var c = 3;
    
    //Alerts each item of a, b and c
    tb.each(a, alert);
    tb.each(b, alert);
    tb.each(c, alert);
    
###perge()
_arr_ = array to remove empty items from; array
<br/>__returns array__

Removes empty items from an array

    var a = [1,,2,3,,];
    tb.perge(a) //Returns [1,2,3]
    
###flatten()
_arr_ = array to flatten; array
<br/>__returns array__

"Flattens" a multi-dimensional array into a single-dimensional array

    var a = [[1,2],3];
    tb.flatten(a); //Returns [1,2,3]
###shuffle()
_arr_ = array to shuffle; array
<br/>__returns array__

Shuffles an array by randomly (using JavaScript's `Math.random()`) sorting array items.

    var a = [1,2,3];
    tb.shuffle(a); //Returns something like [2,1,3]
    
###reverse()
_arr_ = array to reverse; array
<br/>__returns array__

Reverses an array

    var a = [1,2,3];
    tb.reverse(a); //Returns [3,2,1]
   
###toObject()
_arr_ = array to convert to object; array
<br/>_recursive_ = convert array recursively; boolean
<br/>__returns object__

Converts an array to an object. It can either do this non-recursively (ie only convert the first level arrays) which is the default, or recursively where it converts all arrays including subsequent multi-dimensional arrays. Aliased wit `toObj()`.

    var a = [1,[2,3]];
    tb.toObject(a); //Returns {"0":1,"1":[2,3]}
    tb.toObject(a, true); //Returns {"0":1,"1":{2,3}}
    
###toArray()
_obj_ = object to convert to an array; object
<br/>_recursive_ = convert object recursively; boolean
<br/>__returns array__

Converts an object to an array. It can either do this non-recursively (ie only convert the first level objects) which is the default, or recursively where it converts all objects. Aliased wit `toArr()`.

    var a = {1: "one", 2: {3:"three", 4: "four"}};
    tb.toArray(a); //Returns ["one",{"3":"three","4":"four"}]
    tb.toArray(a, true); //Returns ["one", ["three", "four"]]
    