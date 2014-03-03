(function (window, undefined) {
    "use strict";

    function aliases(aliasesObj) {
        tb.each(aliasesObj, function (value, key) {
            tb[key] = tb[value];
        });
    }
    var tb = {
        is: function (variable, type) {
            type = type.toLowerCase();
            var constructor = type[0].toUpperCase() + type.slice(1);
            return typeof variable === type || Object.prototype.toString.call(variable) === "[object " + constructor + "]";
        },
        isArray: function (variable) {
            return tb.is(variable, "Array");
        },
        isUndefined: function (variable) {
            return typeof variable === "undefined";
        },
        isDefined: function (variable) {
            return typeof variable !== "undefined";
        },
        isObject: function (variable, type) {
            if (typeof type === "undefined") {
                return typeof variable === "object";
            }
            type = type.toLowerCase();
            var constructor = type[0].toUpperCase() + type.slice(1);
            return Object.prototype.toString.call(variable) === "[object " + constructor + "]";
        },
        isNumber: function (variable) {
            return tb.is(variable, "number");
        },
        isString: function (variable) {
            return tb.is(variable, "string");
        },
        isBoolean: function (variable) {
            return tb.is(variable, "boolean");
        },
        each: function (item, func) {
            if (tb.isArray(item) || tb.isString(item)) {
                for (var i = 0, j = item.length; i < j; ++i) {
                    func(item[i], i);
                }
            } else if (tb.isObject(item) && !tb.isNumber(item) && !tb.isString(item) && !tb.isBoolean(item) && !tb.isArray(item)) {
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        func(item[key], key);
                    }
                }
            } else if (tb.isNumber(item)) {
                for (var i = 0; i < item; ++i) {
                    func(i);
                }
            }
            return item;
        },
        perge: function (arr) {
            var pergedArr = [];
            tb.each(arr, function (item) {
                if (typeof item !== "undefined") {
                    pergedArr.push(item);
                }
            });
            return pergedArr;
        },
        flatten: function (arr) {
            var flattenedArr = [];
            tb.each(arr, function (item) {
                if (tb.isArr(item)) {
                    var newArr = tb.flatten(item);
                    tb.each(newArr, function (item) {
                        flattenedArr.push(item);
                    });
                } else {
                    flattenedArr.push(item);
                }
            });
            return flattenedArr;
        },
        map: function (arr, func) {
            return arr.map(func);
        },
        shuffle: function (arr) {
            var shuffledArr = [];
            while (shuffledArr.length !== arr.length) {
                var rand = Math.floor(Math.random() * (1 + arr.length));
                if (typeof arr[rand] !== "undefined") {
                    shuffledArr.push(arr[rand]);
                    delete arr[rand];
                }
            }
            return shuffledArr;
        },
        reverse: function (arr) {
            var reversedArr = [];
            tb.each(arr, function (item) {
                reversedArr.unshift(item);
            });
            return reversedArr;
        },
        toObject: function (variable, recursive) {
            var newObject = {};
            if (recursive === true) {
                tb.each(variable, function (item, index) {
                    if (tb.isArray(item)) {
                        newObject[index] = tb.toObject(item, true);
                    } else {
                        newObject[index] = item;
                    }
                });
            } else {
                tb.each(variable, function (item, index) {
                    newObject[index] = item;
                });
            }
            return newObject;
        },
        toArray: function (variable, recursive) {
            var newArray = [];
            if (recursive === true) {
                if (tb.isObj(variable, "Object")) {
                    tb.each(variable, function (value) {
                        if (tb.isObject(value, "Object")) {
                            newArray.push(tb.toArray(value, true));
                        } else {
                            newArray.push(value);
                        }
                    });
                } else {
                    newArray.push(variable);
                }
            } else {
                tb.each(variable, function (item) {
                    newArray.push(item);
                });
            }
            return newArray;
        }
    };

    aliases({
        isObj: "isObject",
        isArr: "isArray",
        isUndef: "isUndefined",
        isNum: "isNumber",
        isStr: "isString",
        isDef: "isDefined",
        isBool: "isBoolean",
        toArr: "toArray",
        toObj: "toObject"
    });

    window.tb = tb;
	window.toolbox = tb;
})(window);