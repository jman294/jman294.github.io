/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _field = __webpack_require__(1);

	var _field2 = _interopRequireDefault(_field);

	var _indext = __webpack_require__(2);

	var _indext2 = _interopRequireDefault(_indext);

	var _keywatcher = __webpack_require__(3);

	var watcher = _interopRequireWildcard(_keywatcher);

	var _keyapp = __webpack_require__(4);

	var keyapp = _interopRequireWildcard(_keyapp);

	var _TinyAnimate = __webpack_require__(16);

	var _TinyAnimate2 = _interopRequireDefault(_TinyAnimate);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(17);

	var text = 'Notice the order of those properties: the vendor prefixes are listed first and the non-prefixed "spec" version is listed last. This is the correct way to do it. Border radius is a particularly good example of why we do it that way. In slightly more complicated version of using border-radius (where you pass two values instead of one) the older -webkit- vendor prefix would';
	var input = document.querySelector('#untyped');
	var typeAppParent = document.querySelector('#type-app');
	var err = new _field2.default(document.querySelector('#error'));
	var message = new _indext2.default(document.querySelector('#typed'), input, text);
	var timerEl = document.querySelector('#key-timer');

	// typeAppParent.remove()

	// Options for keyapp
	var keyAppOptions = {
	    errorClassName: 'error',
	    fineClassName: 'fine',
	    originalErrorName: 'error'
	};
	input.innerHTML = text;

	keyapp.clock(timerEl);
	keyapp.runApp(document.querySelector('#type-input'), text, message, err, input, keyAppOptions, function onEnd(time) {
	    timerEl.textContent = timerEl.textContent + ' Done!';
	    watcher.stop(input);
	    afterApp();
	});

	function afterApp() {
	    // TinyAnimate.animateCSS(typeAppParent, 'marginLeft', '%', 10, 100, 500, 'easeInOutQuart', function() {
	    //     console.log('done!!!111oneone');
	    // });
	}

	Element.prototype.remove = function () {
	    this.parentElement.removeChild(this);
	};
	NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
	    for (var i = this.length - 1; i >= 0; i--) {
	        if (this[i] && this[i].parentElement) {
	            this[i].parentElement.removeChild(this[i]);
	        }
	    }
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// field.js
	// What
	// A wrapper for elements with ease-of-functions for acting like a FILO structure

	var _class = function () {
	  function _class(el) {
	    var defaultText = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	    _classCallCheck(this, _class);

	    this.el = el;
	    this.defaultText = defaultText;
	  }

	  _createClass(_class, [{
	    key: 'addChar',
	    value: function addChar(char) {
	      if (char === ' ') {
	        char = ' ';
	      }
	      this.el.textContent = this.el.textContent + char;
	    }
	  }, {
	    key: 'removeChar',
	    value: function removeChar(char) {
	      this.el.textContent = this.el.textContent.slice(0, -1);
	      this.safeRemove();
	    }
	  }, {
	    key: 'firstChar',
	    value: function firstChar() {
	      return this.el.textContent.substring(0, 1);
	    }
	  }, {
	    key: 'removeFirstChar',
	    value: function removeFirstChar() {
	      this.el.textContent = this.el.textContent.substr(1);
	      this.safeRemove();
	    }
	  }, {
	    key: 'empty',
	    value: function empty() {
	      return this.el.textContent.length <= 0;
	    }
	  }, {
	    key: 'safeRemove',
	    value: function safeRemove() {
	      if (!this.el.textContent.length) {
	        this.el.textContent = this.defaultText;
	      }
	    }
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _field = __webpack_require__(1);

	var _field2 = _interopRequireDefault(_field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// indext.js
	// What
	// A module for blocks of text with assigned indexes and class schemes for differentiation of what has been moved through and what has not

	var _class = function () {
	  // constructor
	  // Params
	  // done: an element, usually a span, describing what has been moved through or completed
	  // undone: an element, usually a span, describing what is left to move through or complete
	  function _class(done, undone, text) {
	    _classCallCheck(this, _class);

	    this.text = text;
	    this.undone = new _field2.default(undone);
	    this.index = 0;
	    this.done = new _field2.default(done);
	  }
	  // increase
	  // Params
	  // none
	  // What
	  // increases the index in the text by one, moving one character from the undone to the done


	  _createClass(_class, [{
	    key: 'increase',
	    value: function increase() {
	      this.index++;
	      // Move first char from undone to done to increase highlight by one
	      var char = this.undone.firstChar();
	      this.undone.removeFirstChar();
	      this.done.addChar(char);
	    }
	    // decrease
	    // Params
	    // none
	    // What
	    // decreases the index in the text, the opposite of increase

	  }, {
	    key: 'decrease',
	    value: function decrease() {
	      this.index--;
	      // TODO Decrease highlight by one
	    }
	    // currentChar
	    // Params
	    // none
	    // What
	    // returns the currently pending character, found at the index position

	  }, {
	    key: 'currentChar',
	    value: function currentChar() {
	      return this.text.charAt(this.index);
	    }
	  }, {
	    key: 'mark',
	    value: function mark() {}
	  }]);

	  return _class;
	}();

	exports.default = _class;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.watch = watch;
	exports.stop = stop;
	// keywatcher.js
	// What
	// A module for use with input elements to send out the correct events for keys, especially the handling of backspace and delete, which are troublesome

	// watch
	// Params
	// el: the element to watch for keypresses, an input element
	// onKeyEvent: the callback for a keyevent
	// onDeleteEvent: the callback for a deleteevent, like a backspace or delete
	// What
	// Watches an input element and calls callback on keyevents and delete events
	function watch(el, onKeyEvent, onDeleteEvent) {
	  el.addEventListener('keypress', function (e) {
	    keyPress(e, onKeyEvent);
	  });
	  el.addEventListener('keydown', function (e) {
	    keyDown(e, onDeleteEvent);
	  });
	}

	// The keypressed handler
	function keyPress(e, onKeyEvent) {
	  onKeyEvent(e);
	  e.preventDefault();
	}

	// The keydown handler
	function keyDown(e, onDeleteEvent) {
	  console.log('keydown');
	  // Only prevents backspace and delete so the events can fire the keypressed event
	  if (e.keyCode === 8 || e.keyCode === 46) {
	    onDeleteEvent(e);
	    e.preventDefault();
	    console.log('delete');
	  }
	}

	// TODO Fix the stop function
	function stop(el) {
	  el.removeEventListener('keypress', keyPress);
	  el.removeEventListener('keydown', keyDown);
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.runApp = runApp;
	exports.clock = clock;

	var _keywatcher = __webpack_require__(3);

	var watcher = _interopRequireWildcard(_keywatcher);

	var _keycoder = __webpack_require__(5);

	var keycoder = _interopRequireWildcard(_keycoder);

	var _timrjs = __webpack_require__(6);

	var _timrjs2 = _interopRequireDefault(_timrjs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var timer = (0, _timrjs2.default)(0);
	var time = 0;
	var timerEl = void 0;

	// keyapp.js
	// What
	// A module for listening for keyevents on an input field, and alerting wrong keys typed and correct keys typed to an indext variable

	// runapp
	// Params
	// status: the element to have the supplied classNames appended to
	// text: the text to be typed
	// indext: the indext variable to be used. See indext.js
	// err: the error field. See field.js
	// input: the input element to take key events from
	// options: the options object
	// onEnd: callback for when the app has ended
	// What
	// A function for starting the app on the supplied parameters
	function runApp(status, text, indext, err, input, options, onEnd) {
	  timer.start();
	  watcher.watch(input, function onKeyEvent(e) {
	    var char = keycoder.eventToCharacter(e);
	    console.log(char);
	    // If the correct key was typed and there is no pending error, key typed is correct
	    if (char === indext.currentChar() && err.empty()) {
	      console.log('correct');
	      indext.increase();
	      // If we have reached the end
	      if (indext.index === text.length) {
	        // Call the onEnd callBack
	        timer.stop();
	        onEnd(time);
	        return;
	      }
	      // Otherwise, add the key to the error field
	    } else {
	      // Set the status parameter, the encasing element, to the error class name specified in the options parameter
	      status.className = options.errorClassName;
	      err.addChar(char);
	      console.log('incorrect');
	    }
	  }, function onDelete(e) {
	    // Delete char from error only if error has letters in it
	    if (!err.empty()) {
	      err.removeChar();
	      // If error is empty after removing a char from it, the user has no more errors
	      if (err.empty()) {
	        // Set the status parameter, the encasing element, to the fine class name specified in the options parameter
	        status.className = options.fineClassName;
	      }
	    }
	  });
	}

	// clock
	// Params
	// el:element to put the timer on
	// What
	// turn on the clock on the specified element
	function clock(el) {
	  timerEl = el;
	  timer.ticker(function (formattedTime, percentDone) {
	    time = percentDone;
	    timerEl.textContent = formattedTime;
	  });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function () {
	    {
	        function exportModule(name, moduleObj) {
	            if (typeof module === 'object' && typeof module.exports === 'object') {
	                module.exports = moduleObj;
	            } else if (true) {
	                !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	                    return moduleObj;
	                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	            } else {
	                var global = typeof window === 'undefined' ? this : window;
	                global[name] = moduleObj;
	            }
	        }
	        var Util = new function () {
	            this.clone = function (object) {
	                return JSON.parse(JSON.stringify(object));
	            };
	            this.isUndefined = function (value) {
	                return typeof value === 'undefined';
	            };
	            this.whenUndefined = function (value, defaultVal) {
	                return this.isUndefined(value) ? defaultVal : value;
	            };
	        }();
	        var KeyData = [
	            {
	                char: '0',
	                shift: ')',
	                ie: 48,
	                ascii: {
	                    norm: 48,
	                    shift: 41
	                }
	            },
	            {
	                char: '1',
	                shift: '!',
	                ie: 49,
	                ascii: {
	                    norm: 49,
	                    shift: 33
	                }
	            },
	            {
	                char: '2',
	                shift: '@',
	                ie: 50,
	                ascii: {
	                    norm: 50,
	                    shift: 64
	                }
	            },
	            {
	                char: '3',
	                shift: '#',
	                ie: 51,
	                ascii: {
	                    norm: 51,
	                    shift: 35
	                }
	            },
	            {
	                char: '4',
	                shift: '$',
	                ie: 52,
	                ascii: {
	                    norm: 52,
	                    shift: 36
	                }
	            },
	            {
	                char: '5',
	                shift: '%',
	                ie: 53,
	                ascii: {
	                    norm: 53,
	                    shift: 37
	                }
	            },
	            {
	                char: '6',
	                shift: '^',
	                ie: 54,
	                ascii: {
	                    norm: 54,
	                    shift: 94
	                }
	            },
	            {
	                char: '7',
	                shift: '&',
	                ie: 55,
	                ascii: {
	                    norm: 55,
	                    shift: 38
	                }
	            },
	            {
	                char: '8',
	                shift: '*',
	                ie: 56,
	                ascii: {
	                    norm: 56,
	                    shift: 42
	                }
	            },
	            {
	                char: '9',
	                shift: '(',
	                ie: 57,
	                ascii: {
	                    norm: 57,
	                    shift: 40
	                }
	            },
	            {
	                char: 'a',
	                shift: 'A',
	                ie: 65,
	                ascii: {
	                    norm: 97,
	                    shift: 65
	                }
	            },
	            {
	                char: 'b',
	                shift: 'B',
	                ie: 66,
	                ascii: {
	                    norm: 98,
	                    shift: 66
	                }
	            },
	            {
	                char: 'c',
	                shift: 'C',
	                ie: 67,
	                ascii: {
	                    norm: 99,
	                    shift: 67
	                }
	            },
	            {
	                char: 'd',
	                shift: 'D',
	                ie: 68,
	                ascii: {
	                    norm: 100,
	                    shift: 68
	                }
	            },
	            {
	                char: 'e',
	                shift: 'E',
	                ie: 69,
	                ascii: {
	                    norm: 101,
	                    shift: 69
	                }
	            },
	            {
	                char: 'f',
	                shift: 'F',
	                ie: 70,
	                ascii: {
	                    norm: 102,
	                    shift: 70
	                }
	            },
	            {
	                char: 'g',
	                shift: 'G',
	                ie: 71,
	                ascii: {
	                    norm: 103,
	                    shift: 71
	                }
	            },
	            {
	                char: 'h',
	                shift: 'H',
	                ie: 72,
	                ascii: {
	                    norm: 104,
	                    shift: 72
	                }
	            },
	            {
	                char: 'i',
	                shift: 'I',
	                ie: 73,
	                ascii: {
	                    norm: 105,
	                    shift: 73
	                }
	            },
	            {
	                char: 'j',
	                shift: 'J',
	                ie: 74,
	                ascii: {
	                    norm: 106,
	                    shift: 74
	                }
	            },
	            {
	                char: 'k',
	                shift: 'K',
	                ie: 75,
	                ascii: {
	                    norm: 107,
	                    shift: 75
	                }
	            },
	            {
	                char: 'l',
	                shift: 'L',
	                ie: 76,
	                ascii: {
	                    norm: 108,
	                    shift: 76
	                }
	            },
	            {
	                char: 'm',
	                shift: 'M',
	                ie: 77,
	                ascii: {
	                    norm: 109,
	                    shift: 77
	                }
	            },
	            {
	                char: 'n',
	                shift: 'N',
	                ie: 78,
	                ascii: {
	                    norm: 110,
	                    shift: 78
	                }
	            },
	            {
	                char: 'o',
	                shift: 'O',
	                ie: 79,
	                ascii: {
	                    norm: 111,
	                    shift: 79
	                }
	            },
	            {
	                char: 'p',
	                shift: 'P',
	                ie: 80,
	                ascii: {
	                    norm: 112,
	                    shift: 80
	                }
	            },
	            {
	                char: 'q',
	                shift: 'Q',
	                ie: 81,
	                ascii: {
	                    norm: 113,
	                    shift: 81
	                }
	            },
	            {
	                char: 'r',
	                shift: 'R',
	                ie: 82,
	                ascii: {
	                    norm: 114,
	                    shift: 82
	                }
	            },
	            {
	                char: 's',
	                shift: 'S',
	                ie: 83,
	                ascii: {
	                    norm: 115,
	                    shift: 83
	                }
	            },
	            {
	                char: 't',
	                shift: 'T',
	                ie: 84,
	                ascii: {
	                    norm: 116,
	                    shift: 84
	                }
	            },
	            {
	                char: 'u',
	                shift: 'U',
	                ie: 85,
	                ascii: {
	                    norm: 117,
	                    shift: 85
	                }
	            },
	            {
	                char: 'v',
	                shift: 'V',
	                ie: 86,
	                ascii: {
	                    norm: 118,
	                    shift: 86
	                }
	            },
	            {
	                char: 'w',
	                shift: 'W',
	                ie: 87,
	                ascii: {
	                    norm: 119,
	                    shift: 87
	                }
	            },
	            {
	                char: 'x',
	                shift: 'X',
	                ie: 88,
	                ascii: {
	                    norm: 120,
	                    shift: 88
	                }
	            },
	            {
	                char: 'y',
	                shift: 'Y',
	                ie: 89,
	                ascii: {
	                    norm: 121,
	                    shift: 89
	                }
	            },
	            {
	                char: 'z',
	                shift: 'Z',
	                ie: 90,
	                ascii: {
	                    norm: 122,
	                    shift: 90
	                }
	            },
	            {
	                char: ' ',
	                names: ['SPACE_BAR'],
	                ie: 32,
	                ascii: { norm: 32 }
	            },
	            {
	                char: ';',
	                shift: ':',
	                ie: 186,
	                moz: 59,
	                ascii: {
	                    norm: 59,
	                    shift: 58
	                }
	            },
	            {
	                char: '=',
	                shift: '+',
	                ie: 187,
	                moz: 61,
	                ascii: {
	                    norm: 61,
	                    shift: 43
	                }
	            },
	            {
	                char: ',',
	                shift: '<',
	                ie: 188,
	                ascii: {
	                    norm: 44,
	                    shift: 60
	                }
	            },
	            {
	                char: '-',
	                shift: '_',
	                ie: 189,
	                moz: 173,
	                ascii: {
	                    norm: 45,
	                    shift: 95
	                }
	            },
	            {
	                char: '.',
	                shift: '>',
	                ie: 190,
	                ascii: {
	                    norm: 46,
	                    shift: 62
	                }
	            },
	            {
	                char: '/',
	                shift: '?',
	                ie: 191,
	                ascii: {
	                    norm: 47,
	                    shift: 63
	                }
	            },
	            {
	                char: '`',
	                shift: '~',
	                ie: 192,
	                ascii: {
	                    norm: 96,
	                    shift: 126
	                }
	            },
	            {
	                char: '[',
	                shift: '{',
	                ie: 219,
	                ascii: {
	                    norm: 91,
	                    shift: 123
	                }
	            },
	            {
	                char: '\\',
	                shift: '|',
	                ie: 220,
	                ascii: {
	                    norm: 92,
	                    shift: 124
	                }
	            },
	            {
	                char: ']',
	                shift: '}',
	                ie: 221,
	                ascii: {
	                    norm: 93,
	                    shift: 125
	                }
	            },
	            {
	                char: '\'',
	                shift: '"',
	                ie: 222,
	                ascii: {
	                    norm: 39,
	                    shift: 34
	                }
	            },
	            {
	                names: ['F1'],
	                ie: 112
	            },
	            {
	                names: ['F2'],
	                ie: 113
	            },
	            {
	                names: ['F3'],
	                ie: 114
	            },
	            {
	                names: ['F4'],
	                ie: 115
	            },
	            {
	                names: ['F5'],
	                ie: 116
	            },
	            {
	                names: ['F6'],
	                ie: 117
	            },
	            {
	                names: ['F7'],
	                ie: 118
	            },
	            {
	                names: ['F8'],
	                ie: 119
	            },
	            {
	                names: ['F9'],
	                ie: 120
	            },
	            {
	                names: ['F10'],
	                ie: 121
	            },
	            {
	                names: ['F11'],
	                ie: 122
	            },
	            {
	                names: ['F12'],
	                ie: 123
	            },
	            {
	                char: '0',
	                names: ['NUMPAD_0'],
	                ie: 96,
	                ascii: { norm: 48 }
	            },
	            {
	                char: '1',
	                names: ['NUMPAD_1'],
	                ie: 97,
	                ascii: { norm: 49 }
	            },
	            {
	                char: '2',
	                names: ['NUMPAD_2'],
	                ie: 98,
	                ascii: { norm: 50 }
	            },
	            {
	                char: '3',
	                names: ['NUMPAD_3'],
	                ie: 99,
	                ascii: { norm: 51 }
	            },
	            {
	                char: '4',
	                names: ['NUMPAD_4'],
	                ie: 100,
	                ascii: { norm: 52 }
	            },
	            {
	                char: '5',
	                names: ['NUMPAD_5'],
	                ie: 101,
	                ascii: { norm: 53 }
	            },
	            {
	                char: '6',
	                names: ['NUMPAD_6'],
	                ie: 102,
	                ascii: { norm: 54 }
	            },
	            {
	                char: '7',
	                names: ['NUMPAD_7'],
	                ie: 103,
	                ascii: { norm: 55 }
	            },
	            {
	                char: '8',
	                names: ['NUMPAD_8'],
	                ie: 104,
	                ascii: { norm: 56 }
	            },
	            {
	                char: '9',
	                names: ['NUMPAD_9'],
	                ie: 105,
	                ascii: { norm: 57 }
	            },
	            {
	                char: '*',
	                names: ['NUMPAD_MULTIPLY'],
	                ie: 106,
	                ascii: { norm: 42 }
	            },
	            {
	                char: '+',
	                names: ['NUMPAD_PLUS'],
	                ie: 107,
	                ascii: { norm: 43 }
	            },
	            {
	                char: '-',
	                names: ['NUMPAD_MINUS'],
	                ie: 109,
	                ascii: { norm: 45 }
	            },
	            {
	                char: '.',
	                names: ['NUMPAD_DECIMAL'],
	                ie: 110,
	                ascii: { norm: 46 }
	            },
	            {
	                char: '/',
	                names: ['NUMPAD_DIVIDE'],
	                ie: 111,
	                ascii: { norm: 47 }
	            },
	            {
	                names: [
	                    'NUMPAD_MIDDLE',
	                    'MAC_NUM_LOCK'
	                ],
	                ie: 12
	            },
	            {
	                names: ['BACKSPACE'],
	                ie: 8
	            },
	            {
	                names: ['TAB'],
	                ie: 9
	            },
	            {
	                names: ['ENTER'],
	                ie: 13,
	                ascii: { norm: 13 }
	            },
	            {
	                names: ['SHIFT'],
	                ie: 16
	            },
	            {
	                names: ['CONTROL'],
	                ie: 17
	            },
	            {
	                names: ['ALT'],
	                ie: 18
	            },
	            {
	                names: [
	                    'PAUSE',
	                    'BREAK'
	                ],
	                ie: 19
	            },
	            {
	                names: ['CAPS_LOCK'],
	                ie: 20
	            },
	            {
	                names: ['ESCAPE'],
	                ie: 27
	            },
	            {
	                names: [
	                    'WINDOWS',
	                    'COMMAND'
	                ],
	                ie: 91,
	                moz: 224
	            },
	            {
	                names: ['OPTION'],
	                ie: 93,
	                ascii: { norm: 16 }
	            },
	            {
	                names: ['PRINT_SCREEN'],
	                ie: 124,
	                moz: 44
	            },
	            {
	                names: ['NUM_LOCK'],
	                ie: 144
	            },
	            {
	                names: ['SCROLL_LOCK'],
	                ie: 145
	            },
	            {
	                names: ['PAGE_UP'],
	                ie: 33
	            },
	            {
	                names: ['PAGE_DOWN'],
	                ie: 34
	            },
	            {
	                names: ['END'],
	                ie: 35
	            },
	            {
	                names: ['HOME'],
	                ie: 36
	            },
	            {
	                names: ['LEFT_ARROW'],
	                ie: 37
	            },
	            {
	                names: ['UP_ARROW'],
	                ie: 38
	            },
	            {
	                names: ['RIGHT_ARROW'],
	                ie: 39
	            },
	            {
	                names: ['DOWN_ARROW'],
	                ie: 40
	            },
	            {
	                names: ['INSERT'],
	                ie: 45
	            },
	            {
	                names: ['DELETE'],
	                ie: 46
	            }
	        ];
	        var KeyConstructor = function (Util) {
	            /**
	   * A representation of a keyboard key. This class cannot be instantiated manually. All instances are generated by the Keycoder module.
	   * @Class Key
	   * @internal
	   * @property {string[]} names - Names that the key is called. Ex. "BACKSPACE", "INSERT"
	   * @property {number} keyCode.ie - IE key code
	   * @property {number} keyCode.mozilla - Mozillia key code
	   * @property {string|null} character - Key character
	   * @property {number|null} charCode - ASCII character code
	   * @property {string|null} shift.character Key shift character
	   * @property {number|null} shift.charCode Shift ASCII character code
	   */
	            var Key = function (keyData) {
	                this.shift = {};
	                this.names = Util.clone(Util.whenUndefined(keyData.names, []));
	                this.character = Util.whenUndefined(keyData.char, null);
	                this.shift.character = Util.whenUndefined(keyData.shift, Util.whenUndefined(keyData.char, null));
	                this.keyCode = {
	                    ie: keyData.ie,
	                    mozilla: Util.whenUndefined(keyData.moz, keyData.ie)
	                };
	                this.charCode = null;
	                this.shift.charCode = null;
	                if (!Util.isUndefined(keyData.ascii)) {
	                    this.charCode = Util.whenUndefined(keyData.ascii.norm, null);
	                    this.shift.charCode = Util.whenUndefined(keyData.ascii.shift, Util.whenUndefined(keyData.ascii.norm, null));
	                }
	            };
	            /**
	   * @memberof Key
	   * @returns {boolean} If the key is a printable character
	   */
	            Key.prototype.isPrintableCharacter = function () {
	                return this.character !== null;
	            };
	            /**
	   * @memberof Key
	   * @returns {boolean} If the key has a character code
	   */
	            Key.prototype.hasCharCode = function () {
	                return this.charCode !== null;
	            };
	            /**
	   * @memberof Key
	   * @returns {boolean} If the key's character and shift character are different
	   */
	            Key.prototype.hasDistinctShiftCharacter = function () {
	                return this.character !== this.shift.character;
	            };
	            /**
	   * @memberof Key
	   * @param {Key|number} other - A Key object or key code
	   * @returns {boolean} True if the key and the compared key/code are the same key
	   */
	            Key.prototype.equals = function (other) {
	                if (typeof other === 'object') {
	                    return this.keyCode.ie === other.keyCode.ie;
	                } else {
	                    return this.keyCode.ie === other || this.keyCode.mozilla === other;
	                }
	            };
	            return Key;
	        }(Util);
	        /**
	 * @module Keycoder
	 */
	        exportModule('Keycoder', new function (Util, Key, keyData) {
	            var keyCodeToKeyMap = null;
	            var asciiCodeToKeyMap = null;
	            var characterToKeyMap = null;
	            /**
	   * An object containing references to all named keys.
	   *
	   * @type {object}
	   * @property {Key} BACKSPACE
	   * @property {Key} TAB
	   * @property {Key} ENTER
	   * @property {Key} SHIFT
	   * @property {Key} CONTROL
	   * @property {Key} ALT
	   * @property {Key} PAUSE
	   * @property {Key} BREAK
	   * @property {Key} CAPS_LOCK
	   * @property {Key} ESCAPE
	   * @property {Key} WINDOWS
	   * @property {Key} COMMAND
	   * @property {Key} OPTION
	   * @property {Key} PRINT_SCREEN
	   * @property {Key} NUM_LOCK
	   * @property {Key} MAC_NUM_LOCK
	   * @property {Key} SCROLL_LOCK
	   * @property {Key} PAGE_UP
	   * @property {Key} PAGE_DOWN
	   * @property {Key} END
	   * @property {Key} HOME
	   * @property {Key} LEFT_ARROW
	   * @property {Key} UP_ARROW
	   * @property {Key} RIGHT_ARROW
	   * @property {Key} DOWN_ARROW
	   * @property {Key} INSERT
	   * @property {Key} DELETE
	   * @property {Key} NUMPAD_0
	   * @property {Key} NUMPAD_1
	   * @property {Key} NUMPAD_2
	   * @property {Key} NUMPAD_3
	   * @property {Key} NUMPAD_4
	   * @property {Key} NUMPAD_5
	   * @property {Key} NUMPAD_6
	   * @property {Key} NUMPAD_7
	   * @property {Key} NUMPAD_8
	   * @property {Key} NUMPAD_9
	   * @property {Key} NUMPAD_MULTIPLY
	   * @property {Key} NUMPAD_PLUS
	   * @property {Key} NUMPAD_MINUS
	   * @property {Key} NUMPAD_DECIMAL
	   * @property {Key} NUMPAD_DIVIDE
	   * @property {Key} NUMPAD_MIDDLE
	   */
	            this.key = {};
	            var self = this;
	            keyData.forEach(function (key) {
	                if (!Util.isUndefined(key.names)) {
	                    key.names.forEach(function (name) {
	                        self.key[name] = new Key(key);
	                    });
	                }
	            });
	            this._getKeyFromMap = function (code, map) {
	                var keyData = map[code];
	                if (Util.isUndefined(keyData)) {
	                    return null;
	                } else {
	                    return new Key(keyData);
	                }
	            };
	            this._initializeKeyCodeToKeyMap = function () {
	                keyCodeToKeyMap = [];
	                keyData.forEach(function (key) {
	                    // No matching IE and Mozilla key codes refer to different physical keys so a single map approach will not result in
	                    // any codes being overwritten in the map
	                    keyCodeToKeyMap[key.ie] = key;
	                    if (!Util.isUndefined(key.moz)) {
	                        keyCodeToKeyMap[key.moz] = key;
	                    }
	                });
	            };
	            this._initializeAsciiCodeToKeyMap = function () {
	                asciiCodeToKeyMap = [];
	                keyData.forEach(function (key) {
	                    if (!Util.isUndefined(key.ascii)) {
	                        if (Util.isUndefined(asciiCodeToKeyMap[key.ascii.norm])) {
	                            asciiCodeToKeyMap[key.ascii.norm] = key;
	                        }
	                        if (!Util.isUndefined(key.ascii.shift)) {
	                            if (Util.isUndefined(asciiCodeToKeyMap[key.ascii.shift])) {
	                                asciiCodeToKeyMap[key.ascii.shift] = key;
	                            }
	                        }
	                    }
	                });
	            };
	            this._initializeCharacterToKeyMap = function () {
	                characterToKeyMap = {};
	                keyData.forEach(function (key) {
	                    // Order matters when inserting to the character map. Sometime two keys have the same character value.
	                    // The more commonly used keys are put higher in the key list so they are looked up rather than less used keys.
	                    if (!Util.isUndefined(key.char) && Util.isUndefined(characterToKeyMap[key.char])) {
	                        characterToKeyMap[key.char] = key;
	                    }
	                    // Shift values should never override regular value in the map. If this was not the case num pad 1 could overwrite
	                    // the number row 1 in the map. Since keys like numpad 1 are less commonly used we don't want to do this.
	                    if (!Util.isUndefined(key.shift) && Util.isUndefined(characterToKeyMap[key.shift])) {
	                        characterToKeyMap[key.shift] = key;
	                    }
	                });
	            };
	            /**
	   * @param {number} keyCode - An IE or Mozilla key code
	   * @param {boolean} shift - The shift key state. A value of true indicates it is pressed, false that it is not
	   * @returns {string|null} The character for the keycode and shift state. Null if the key is not a printable character.
	   */
	            this.toCharacter = function (keyCode, shift) {
	                var key = this.fromKeyCode(keyCode);
	                if (key === null) {
	                    return null;
	                }
	                return shift ? key.shift.character : key.character;
	            };
	            /**
	   * @param {number} charCode - An ASCII character code
	   * @returns {string|null} Returns the character for the character code. Null if the key is not a printable character.
	   */
	            this.charCodeToCharacter = function (charCode) {
	                var key = this.fromCharCode(charCode);
	                if (key === null) {
	                    return null;
	                }
	                return key.charCode === charCode ? key.character : key.shift.character;
	            };
	            /**
	   * @param {number} event - A keydown, keyup, or keypress event object
	   * @returns {string|null} - The character pressed in the key event. Null if the key pressed is not a printable character, or the event is not a key event.
	   */
	            this.eventToCharacter = function (event) {
	                var key = this.fromEvent(event);
	                if (key === null) {
	                    return null;
	                }
	                return event.shiftKey ? key.shift.character : key.character;
	            };
	            /**
	   * @param {string} character
	   * @returns {Key|null} A Key object. Null if no key is associated with the provided code.
	   */
	            this.fromCharacter = function (character) {
	                if (characterToKeyMap === null) {
	                    this._initializeCharacterToKeyMap();
	                }
	                return this._getKeyFromMap(character, characterToKeyMap);
	            };
	            /**
	   * @param {number} keyCode - A IE or Mozilla key code
	   * @returns {Key|null} A Key object. Null if no key is associated with the provided code.
	   */
	            this.fromKeyCode = function (keyCode) {
	                if (keyCodeToKeyMap === null) {
	                    this._initializeKeyCodeToKeyMap();
	                }
	                return this._getKeyFromMap(keyCode, keyCodeToKeyMap);
	            };
	            /**
	   * Maps an ASCII character code to a Key object
	   * @param {number} charCode - An ASCII character code
	   * @returns {Key|null} A Key object. Null if no key is associated with the provided code.
	   */
	            this.fromCharCode = function (charCode) {
	                if (asciiCodeToKeyMap === null) {
	                    this._initializeAsciiCodeToKeyMap();
	                }
	                return this._getKeyFromMap(charCode, asciiCodeToKeyMap);
	            };
	            /**
	   * Maps a keypress, keydown, or keyup event object to a key
	   * @param {object} event - A keydown, keyup, or keypress event object
	   * @returns {Key|null} A Key object. Null if no key was pressed in the provided event.
	   */
	            this.fromEvent = function (event) {
	                var key = null;
	                if (event.type === 'keydown' || event.type === 'keyup') {
	                    key = this.fromKeyCode(event.keyCode);
	                } else if (event.type === 'keypress') {
	                    key = this.fromCharCode(event.charCode);
	                }
	                return key;
	            };
	            /**
	   * @returns {Key[]} An array of Key objects for all keys
	   */
	            this.allKeys = function () {
	                var keys = [];
	                keyData.forEach(function (key) {
	                    keys.push(new Key(key));
	                });
	                return keys;
	            };
	        }(Util, KeyConstructor, KeyData));
	    }
	}());

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _validate = __webpack_require__(8);

	var _validate2 = _interopRequireDefault(_validate);

	var _formatTime = __webpack_require__(11);

	var _formatTime2 = _interopRequireDefault(_formatTime);

	var _timeToSeconds = __webpack_require__(9);

	var _timeToSeconds2 = _interopRequireDefault(_timeToSeconds);

	var _correctFormat = __webpack_require__(10);

	var _correctFormat2 = _interopRequireDefault(_correctFormat);

	var _createStore = __webpack_require__(13);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _Timr = __webpack_require__(14);

	var _Timr2 = _interopRequireDefault(_Timr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = (0, _objectAssign2.default)(
	/**
	 * @description Creates a new Timr object.
	 *
	 * @param {String|Number} startTime - The starting time for the timr object.
	 * @param {Object} [options] - Options to customise the timer.
	 *
	 * @return {Object} A new Timr object.
	 */
	function (startTime, options) {
	  return new _Timr2.default(startTime, options);
	},

	// Exposed helper methods.
	{
	  validate: _validate2.default,
	  formatTime: _formatTime2.default,
	  timeToSeconds: _timeToSeconds2.default,
	  correctFormat: _correctFormat2.default,
	  createStore: _createStore2.default
	});

	module.exports = init;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = validate;

	var _timeToSeconds = __webpack_require__(9);

	var _timeToSeconds2 = _interopRequireDefault(_timeToSeconds);

	var _correctFormat = __webpack_require__(10);

	var _correctFormat2 = _interopRequireDefault(_correctFormat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Validates the provded time
	 *
	 * Additionally, if a pattern is provided, 25h / 25m, than
	 * it is converted here before being passed to timeToSeconds.
	 *
	 * @param {String|Number} time - The time to be checked
	 *
	 * @throws If the provided time is neither a number nor a string.
	 * @throws If the provided time is a negative number.
	 * @throws If the provided time is not in the correct format.
	 * @throws If the provided time in seconds is over 999:59:59.
	 *
	 * @returns {Number} - The original number or the converted number if
	 * a time string was provided.
	 */
	function validate(time) {
	  var newTime = time;

	  if (/^\d+[mh]$/i.test(newTime)) {
	    newTime = newTime.replace(/^(\d+)m$/i, '$1:00');
	    newTime = newTime.replace(/^(\d+)h$/i, '$1:00:00');
	  }

	  if (!(!isNaN(newTime) && newTime !== Infinity && newTime !== -Infinity && typeof newTime === 'number' || typeof newTime === 'string')) {
	    throw new Error('Expected time to be a string or number, instead got: ' + (
	    // Passes correct type, including null, NaN and Infinity
	    typeof newTime === 'number' || newTime === null ? newTime : typeof newTime === 'undefined' ? 'undefined' : _typeof(newTime)));
	  }

	  if (!(isNaN(Number(newTime)) || Number(newTime) >= 0)) {
	    throw new Error('Time cannot be a negative number, got: ' + newTime);
	  }

	  if (!(0, _correctFormat2.default)(newTime)) {
	    throw new Error('Expected time to be in (hh:mm:ss) format, instead got: ' + newTime);
	  }

	  if ((0, _timeToSeconds2.default)(newTime) > 3599999) {
	    throw new Error('Sorry, we don\'t support any time over 999:59:59.');
	  }

	  return (0, _timeToSeconds2.default)(newTime);
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = timeToSeconds;
	/**
	 * @description Converts time format (HH:MM:SS) into seconds.
	 *
	 * Automatically rounds the returned number to avoid errors
	 * with floating point values.
	 *
	 * @param {String|Number} time - The time to be converted.
	 * If a number is provided it will simply return that number.
	 *
	 * @return {Number} - The time in seconds.
	 */
	function timeToSeconds(time) {
	  if (typeof time === 'number' && !isNaN(time)) {
	    return Math.round(time);
	  }

	  return Math.round(time.split(':').reduce(function (prev, curr, index, arr) {
	    if (arr.length === 3) {
	      if (index === 0) {
	        return prev + Number(curr) * 60 * 60;
	      }
	      if (index === 1) {
	        return prev + Number(curr) * 60;
	      }
	    }

	    if (arr.length === 2) {
	      if (index === 0) {
	        return prev + Number(curr) * 60;
	      }
	    }

	    return prev + Number(curr);
	  }, 0));
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = correctFormat;
	/**
	 * @description Checks the provided time for correct formatting.
	 * See incorrectFormat-test.js for examples of correct and incorrect formatting.
	 *
	 * @param {String} time - The provided time string.
	 *
	 * @returns {Boolean} True if format is correct, false otherwise.
	 */

	function correctFormat(time) {
	  var newTime = time;

	  if (typeof newTime === 'number') {
	    return true;
	  }

	  if (typeof newTime !== 'string') {
	    return false;
	  }

	  newTime = newTime.split(':');

	  // No more than 3 units (hh:mm:ss) and every unit is a number and is not a negative number.
	  return newTime.length <= 3 && newTime.every(function (el) {
	    return !isNaN(Number(el)) && Number(el) >= 0;
	  });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = formatTime;

	var _buildOptions2 = __webpack_require__(12);

	var _buildOptions3 = _interopRequireDefault(_buildOptions2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Converts seconds to time format.
	 *
	 * @param {Number} seconds - The seconds to convert.
	 * @param {Object} [options] - The options to build the string.
	 *
	 * @return {String} The formatted time.
	 */
	function formatTime(seconds, options) {
	  var _buildOptions = (0, _buildOptions3.default)(options);

	  var outputFormat = _buildOptions.outputFormat;
	  var formatType = _buildOptions.formatType;
	  var separator = _buildOptions.separator;

	  /**
	   * @description Creates a timestring.
	   * Created inside formatTime to have access to separator argument,
	   *
	   * @param {Array} [...args] - All arguments to be processed
	   *
	   * @return {String} The compiled time string.
	   */

	  var createTimeString = function createTimeString() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return args.filter(function (value) {
	      return value !== false;
	    }).map(function (value) {
	      return value < 10 ? '0' + value : value;
	    }).join(separator);
	  };

	  if (formatType === 's') {
	    return '' + seconds;
	  }

	  var minutes = seconds / 60;

	  if (minutes >= 1 && /[hm]/i.test(formatType)) {
	    var hours = minutes / 60;
	    minutes = Math.floor(minutes);

	    if (hours >= 1 && /[h]/i.test(formatType)) {
	      hours = Math.floor(hours);

	      return createTimeString(hours, minutes - hours * 60, seconds - minutes * 60);
	    }

	    return createTimeString(/HH:MM:SS/i.test(outputFormat) && 0, minutes, seconds - minutes * 60);
	  }

	  return createTimeString(/HH:MM:SS/i.test(outputFormat) && 0, /MM:SS/i.test(outputFormat) && 0, seconds);
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = buildOptions;

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Builds an options object from default and custom options.
	 *
	 * @param {Object} [newOptions] - Optional custom options.
	 * @param {Object} [oldOptions] - Optional previous options.
	 *
	 * @throws If any option is invalid.
	 *
	 * @return {Object} Compiled options from default and custom.
	 */
	function buildOptions(newOptions, oldOptions) {
	  if (newOptions) {
	    var separator = newOptions.separator;
	    var outputFormat = newOptions.outputFormat;
	    var formatType = newOptions.formatType;

	    // Error checking for separator.

	    if (separator) {
	      if (typeof separator !== 'string') {
	        throw new Error('Expected separator to be a string, instead got: ' + (typeof separator === 'undefined' ? 'undefined' : _typeof(separator)));
	      }
	    }

	    // Error checking for outputFormat.
	    if (outputFormat) {
	      if (!/^(hh:)?(mm:)?ss$/i.test(outputFormat)) {
	        throw new Error('Expected outputFormat to be: hh:mm:ss, mm:ss (default) or ss; instead got: ' + outputFormat);
	      }
	    }

	    // Error checking for formatType.
	    if (formatType) {
	      if (!/^[hms]$/i.test(formatType)) {
	        throw new Error('Expected formatType to be: h, m or s; instead got: ' + formatType);
	      }
	    }
	  }

	  return (0, _objectAssign2.default)(oldOptions || { formatType: 'h', outputFormat: 'mm:ss', separator: ':' }, newOptions);
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createStore;

	var _Timr = __webpack_require__(14);

	var _Timr2 = _interopRequireDefault(_Timr);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Flattens arrays to their base values
	 * Example: [[1], 2, [[[3]]]] - [1, 2, 3]
	 *
	 * @param {Array} The array to flatten
	 *
	 * @return {Array} The flattened array
	 */
	function flattenArray(arr) {
	  return arr.reduce(function (prev, curr) {
	    if (Array.isArray(curr)) {
	      return prev.concat(flattenArray(curr));
	    }

	    return prev.concat(curr);
	  }, []);
	}

	/**
	 * @description Creates a store that can store multiple timr objects
	 * and perform functions on all of them.
	 *
	 * @param {Array} [args] - Optional timers to start the store with.
	 * Can be any type, but will get filtered down to only timr objects.
	 *
	 * @return {Object} Returns a store object with methods.
	 */
	function createStore() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  // Array to store all timrs.
	  // Filters out non timr objects and timrs that exist in another store.
	  var timrs = flattenArray(args).filter(function (item) {
	    return item instanceof _Timr2.default;
	  }).filter(function (timr) {
	    return typeof timr.removeFromStore !== 'function';
	  });

	  var removeFromStore = function removeFromStore(timr) {
	    if (timr instanceof _Timr2.default) {
	      timrs = timrs.filter(function (x) {
	        return x !== timr;
	      });
	      /* eslint-disable no-param-reassign */
	      timr.removeFromStore = null;
	    }
	  };

	  // Provides each Timr with the ability to remove itself from the store.
	  timrs.forEach(function (timr) {
	    timr.removeFromStore = function () {
	      removeFromStore(timr);
	    };
	  });

	  return {
	    /**
	     * @description Adds the provided timr to the store.
	     *
	     * @param {Object} timr - A timr object.
	     *
	     * @throws If the provided timr is not a Timr object.
	     * @throws If the provided timr is already in a store.
	     *
	     * @return {Object} The provided timr object.
	     */
	    add: function add(timr) {
	      if (timr instanceof _Timr2.default && typeof timr.removeFromStore !== 'function') {
	        timrs.push(timr);

	        timr.removeFromStore = function () {
	          removeFromStore(timr);
	        };
	        /* eslint-disable no-param-reassign */
	      } else {
	        throw new Error('Unable to add to store; provided argument is either already in a store ' + 'or not a timr object.');
	      }

	      return timr;
	    },

	    // Methods associated with all Timrs.
	    getAll: function getAll() {
	      return timrs;
	    },
	    startAll: function startAll() {
	      return timrs.forEach(function (timr) {
	        return timr.start();
	      });
	    },
	    pauseAll: function pauseAll() {
	      return timrs.forEach(function (timr) {
	        return timr.pause();
	      });
	    },
	    stopAll: function stopAll() {
	      return timrs.forEach(function (timr) {
	        return timr.stop();
	      });
	    },
	    isRunning: function isRunning() {
	      return timrs.filter(function (timr) {
	        return timr.isRunning();
	      });
	    },
	    removeFromStore: removeFromStore,
	    destroyAll: function destroyAll() {
	      timrs.forEach(function (timr) {
	        return timr.destroy();
	      });
	      timrs = [];
	    }
	  };
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _objectAssign = __webpack_require__(7);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _EventEmitter = __webpack_require__(15);

	var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

	var _buildOptions = __webpack_require__(12);

	var _buildOptions2 = _interopRequireDefault(_buildOptions);

	var _validate = __webpack_require__(8);

	var _validate2 = _interopRequireDefault(_validate);

	var _formatTime2 = __webpack_require__(11);

	var _formatTime3 = _interopRequireDefault(_formatTime2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description Creates a Timr.
	 *
	 * @param {String|Number} startTime - The starting time for the timr object.
	 * @param {Object} [options] - Options to customise the timer.
	 *
	 * @throws If the provided startTime is neither a number or a string,
	 * or, incorrect format.
	 */
	function Timr(startTime, options) {
	  _EventEmitter2.default.call(this);

	  this.timer = null;
	  this.running = false;
	  this.startTime = (0, _validate2.default)(startTime);
	  this.currentTime = this.startTime;
	  this.changeOptions(options);
	}

	/**
	 * @description Countdown function.
	 * Bound to a setInterval when start() is called.
	 */
	Timr.countdown = function countdown() {
	  this.currentTime -= 1;

	  this.emit('ticker', this.formatTime(), this.percentDone(), this.currentTime, this.startTime, this);

	  if (this.currentTime <= 0) {
	    this.stop();
	    this.emit('finish', this);
	  }
	};

	/**
	 * @description Stopwatch function.
	 * Bound to a setInterval when start() is called.
	 */
	Timr.stopwatch = function stopwatch() {
	  this.currentTime += 1;

	  this.emit('ticker', this.formatTime(), this.currentTime, this);

	  if (this.currentTime > 3599999) {
	    this.stop();
	    this.emit('finish', this);
	  }
	};

	Timr.prototype = (0, _objectAssign2.default)(Object.create(_EventEmitter2.default.prototype), {

	  constructor: Timr,

	  /**
	   * @description Starts the timr.
	   *
	   * @param {Number} [delay] - Optional delay in ms to start the timer
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  start: function start(delay) {
	    var _this = this;

	    /* eslint-disable no-console */
	    if (this.running && typeof console !== 'undefined' && typeof console.warn === 'function') {
	      console.warn('Timer already running', this);
	    } else {
	      /* eslint-disable no-console */
	      var startFn = function startFn() {
	        _this.running = true;

	        _this.timer = _this.startTime > 0 ? setInterval(Timr.countdown.bind(_this), 1000) : setInterval(Timr.stopwatch.bind(_this), 1000);
	      };

	      if (delay) {
	        this.delayTimer = setTimeout(startFn, delay);
	      } else {
	        startFn();
	      }
	    }

	    return this;
	  },


	  /**
	   * @description Pauses the timr.
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  pause: function pause() {
	    this.clear();

	    return this;
	  },


	  /**
	   * @description Stops the timr.
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  stop: function stop() {
	    this.clear();

	    this.currentTime = this.startTime;

	    return this;
	  },


	  /**
	   * @description Clears the timr.
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  clear: function clear() {
	    clearInterval(this.timer);
	    clearTimeout(this.delayTimer);

	    this.running = false;

	    return this;
	  },


	  /**
	   * @description Destroys the timr,
	   * clearing the interval, removing all event listeners and removing,
	   * from the store (if it's in one).
	   *
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  destroy: function destroy() {
	    this.clear().removeAllListeners();

	    // removeFromStore is added when the timr is added to a store,
	    // so need to check if it's in a store before removing it.
	    if (typeof this.removeFromStore === 'function') {
	      this.removeFromStore();
	    }

	    return this;
	  },


	  /**
	   * @description The ticker method is called every second
	   * the timer ticks down.
	   *
	   * As Timr inherits from EventEmitter, this can be called
	   * multiple times with different functions and each one will
	   * be called when the event is emitted.
	   *
	   * @throws If the argument is not of type function.
	   *
	   * @param {Function} fn - Function to be called every second.
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  ticker: function ticker(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('Expected ticker to be a function, instead got: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
	    }

	    this.on('ticker', fn);

	    return this;
	  },


	  /**
	   * @description The finish method is called once when the
	   * timer finishes.
	   *
	   * As Timr inherits from EventEmitter, this can be called
	   * multiple times with different functions and each one will
	   * be called when the event is emitted.
	   *
	   * @throws If the argument is not of type function.
	   *
	   * @param {Function} fn - Function to be called when finished.
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  finish: function finish(fn) {
	    if (typeof fn !== 'function') {
	      throw new Error('Expected finish to be a function, instead got: ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)));
	    }

	    this.on('finish', fn);

	    return this;
	  },


	  /**
	   * @description Converts seconds to time format.
	   * This is provided to the ticker method as the first argument.
	   *
	   * @param {String} [time=currentTime] - option do format the startTime
	   *
	   * @return {String} The formatted time.
	   */
	  formatTime: function formatTime() {
	    var time = arguments.length <= 0 || arguments[0] === undefined ? 'currentTime' : arguments[0];

	    return (0, _formatTime3.default)(this[time], this.options);
	  },


	  /**
	   * @description Returns the time elapsed in percent.
	   * This is provided to the ticker method as the second argument.
	   *
	   * @return {Number} Time elapsed in percent.
	   */
	  percentDone: function percentDone() {
	    return 100 - Math.round(this.currentTime / this.startTime * 100);
	  },


	  /**
	   * @description Creates / changes options for a Timr.
	   * Merges with existing or default options.
	   *
	   * @param {Object} options - The options to create / change.
	   * @return {Object} Returns a reference to the Timr so calls can be chained.
	   */
	  changeOptions: function changeOptions(options) {
	    this.options = (0, _buildOptions2.default)(options, this.options);

	    return this;
	  },


	  /**
	   * @description Sets new startTime after Timr has been created.
	   * Will clear currentTime and reset to new startTime.
	   *
	   * @param {String|Number} startTime - The new start time.
	   *
	   * @throws If the starttime is invalid.
	   *
	   * @return {String} Returns the formatted startTime.
	   */
	  setStartTime: function setStartTime(startTime) {
	    this.clear();

	    this.startTime = this.currentTime = (0, _validate2.default)(startTime);

	    return this.formatTime();
	  },


	  /**
	   * @description Gets the Timrs startTime.
	   *
	   * @return {Number} Start time in seconds.
	   */
	  getStartTime: function getStartTime() {
	    return this.startTime;
	  },


	  /**
	   * @description Gets the Timrs currentTime.
	   *
	   * @return {Number} Current time in seconds.
	   */
	  getCurrentTime: function getCurrentTime() {
	    return this.currentTime;
	  },


	  /**
	   * @description Gets the Timrs running value.
	   *
	   * @return {Boolean} True if running, false if not.
	   */
	  isRunning: function isRunning() {
	    return this.running;
	  }
	});

	exports.default = Timr;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @description Creates an EventEmitter.
	 *
	 * This is a super slimmed down version of nodes EventEmitter.
	 *
	 * This is only intended for internal use, as there is
	 * no real error checking.
	 */
	function EventEmitter() {
	  this.events = {};
	}

	EventEmitter.prototype = {

	  constructor: EventEmitter,

	  /**
	   * @description Registers a listener to an event array.
	   *
	   * @param {String} event - The event to attach to.
	   * @param {Function} listener - The event listener.
	   */
	  on: function on(event, listener) {
	    if (!this.events[event]) {
	      this.events[event] = [];
	    }

	    this.events[event].push(listener);
	  },


	  /**
	   * @description Emits an event, calling all listeners store
	   * against the provided event.
	   *
	   * @param {String} event - The event to emit.
	   */
	  emit: function emit(event) {
	    var _this = this;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (this.events[event]) {
	      this.events[event].forEach(function (listener) {
	        listener.apply(_this, args);
	      });
	    }
	  },


	  /**
	   * @description Removes all listeners.
	   */
	  removeAllListeners: function removeAllListeners() {
	    this.events = {};
	  }
	};

	exports.default = EventEmitter;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * TinyAnimate
	 *  version 0.3.0
	 *
	 * Source:  https://github.com/branneman/TinyAnimate
	 * Author:  Bran van der Meer <branmovic@gmail.com> (http://bran.name/)
	 * License: MIT
	 *
	 * Functions:
	 *  TinyAnimate.animate(from, to, duration, update, easing, done)
	 *  TinyAnimate.animateCSS(element, property, unit, from, to, duration, easing, done)
	 *  TinyAnimate.cancel(animation)
	 *
	 * Parameters:
	 *  element   HTMLElement        A dom node
	 *  property  string             Property name, as available in element.style, i.e. 'borderRadius', not 'border-radius'
	 *  unit      string             Property unit, like 'px'
	 *  from      int                Property value to animate from
	 *  to        int                Property value to animate to
	 *  duration  int                Duration in milliseconds
	 *  update    function           Function to implement updating the DOM, get's called with a value between `from` and `to`
	 *  easing    string | function  Optional: A string when the easing function is available in TinyAnimate.easings,
	 *                                or a function with the signature: function(t, b, c, d) {...}
	 *  done      function           Optional: To be executed when the animation has completed.
	 *
	 * Returns:
	 *  animation object             Animation object that can be canceled.
	 */

	/**
	 * Universal Module Dance
	 *  config: CommonJS Strict, exports Global, supports circular dependencies
	 *  https://github.com/umdjs/umd/
	 */
	(function(root, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(exports) {
	            factory((root.TinyAnimate = exports));
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        factory(exports);
	    } else {
	        factory((root.TinyAnimate = {}));
	    }
	}(this, function(exports) {

	    /**
	     * TinyAnimate.animate()
	     */
	    exports.animate = function(from, to, duration, update, easing, done) {

	        // Early bail out if called incorrectly
	        if (typeof from !== 'number' ||
	            typeof to !== 'number' ||
	            typeof duration !== 'number' ||
	            typeof update !== 'function')
	            return;

	        // Determine easing
	        if (typeof easing === 'string' && easings[easing]) {
	            easing = easings[easing];
	        }
	        if (typeof easing !== 'function') {
	            easing = easings.linear;
	        }

	        // Create mock done() function if necessary
	        if (typeof done !== 'function') {
	            done = function() {};
	        }

	        // Pick implementation (requestAnimationFrame | setTimeout)
	        var rAF = window.requestAnimationFrame || function(callback) {
	            window.setTimeout(callback, 1000 / 60);
	        };

	        // Animation loop
	        var canceled = false;
	        var change = to - from;
	        function loop(timestamp) {
	            if (canceled) {
	                return;
	            }
	            var time = (timestamp || +new Date()) - start;
	            if (time >= 0) {
	                update(easing(time, from, change, duration));
	            }
	            if (time >= 0 && time >= duration) {
	                update(to);
	                done();
	            } else {
	                rAF(loop);
	            }
	        }
	        update(from);

	        // Start animation loop
	        var start = window.performance && window.performance.now ? window.performance.now() : +new Date();

	        rAF(loop);

	        return {
	            cancel: function() {
	                canceled = true;
	            }
	        };
	    };

	    /**
	     * TinyAnimate.animateCSS()
	     *  Shortcut method for animating css properties
	     */
	    exports.animateCSS = function(element, property, unit, from, to, duration, easing, done) {

	        var update = function(value) {
	            element.style[property] = value + unit;
	        };
	        return exports.animate(from, to, duration, update, easing, done);
	    };

	    /**
	     * TinyAnimate.cancel()
	     *  Method for canceling animations
	     */
	    exports.cancel = function(animation) {
	        if (!animation) {
	            return;
	        }
	        animation.cancel();
	    };

	    /**
	     * TinyAnimate.easings
	     *  Adapted from jQuery Easing
	     */
	    var easings = exports.easings = {};
	    easings.linear = function(t, b, c, d) {
	        return c * t / d + b;
	    };
	    easings.easeInQuad = function(t, b, c, d) {
	        return c * (t /= d) * t + b;
	    };
	    easings.easeOutQuad = function(t, b, c, d) {
	        return -c * (t /= d) * (t - 2) + b;
	    };
	    easings.easeInOutQuad = function(t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
	        return -c / 2 * ((--t) * (t - 2) - 1) + b;
	    };
	    easings.easeInCubic = function(t, b, c, d) {
	        return c * (t /= d) * t * t + b;
	    };
	    easings.easeOutCubic = function(t, b, c, d) {
	        return c * ((t = t / d - 1) * t * t + 1) + b;
	    };
	    easings.easeInOutCubic = function(t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
	        return c / 2 * ((t -= 2) * t * t + 2) + b;
	    };
	    easings.easeInQuart = function(t, b, c, d) {
	        return c * (t /= d) * t * t * t + b;
	    };
	    easings.easeOutQuart = function(t, b, c, d) {
	        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
	    };
	    easings.easeInOutQuart = function(t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
	        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
	    };
	    easings.easeInQuint = function(t, b, c, d) {
	        return c * (t /= d) * t * t * t * t + b;
	    };
	    easings.easeOutQuint = function(t, b, c, d) {
	        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	    };
	    easings.easeInOutQuint = function(t, b, c, d) {
	        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
	        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
	    };
	    easings.easeInSine = function(t, b, c, d) {
	        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	    };
	    easings.easeOutSine = function(t, b, c, d) {
	        return c * Math.sin(t / d * (Math.PI / 2)) + b;
	    };
	    easings.easeInOutSine = function(t, b, c, d) {
	        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	    };
	    easings.easeInExpo = function(t, b, c, d) {
	        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
	    };
	    easings.easeOutExpo = function(t, b, c, d) {
	        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
	    };
	    easings.easeInOutExpo = function(t, b, c, d) {
	        if (t == 0) return b;
	        if (t == d) return b + c;
	        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
	        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
	    };
	    easings.easeInCirc = function(t, b, c, d) {
	        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
	    };
	    easings.easeOutCirc = function(t, b, c, d) {
	        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
	    };
	    easings.easeInOutCirc = function(t, b, c, d) {
	        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
	        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
	    };
	    easings.easeInElastic = function(t, b, c, d) {
	        var p = 0;
	        var a = c;
	        if (t == 0) return b;
	        if ((t /= d) == 1) return b + c;
	        if (!p) p = d * .3;
	        if (a < Math.abs(c)) {
	            a = c;
	            var s = p / 4;
	        }
	        else var s = p / (2 * Math.PI) * Math.asin(c / a);
	        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	    };
	    easings.easeOutElastic = function(t, b, c, d) {
	        var p = 0;
	        var a = c;
	        if (t == 0) return b;
	        if ((t /= d) == 1) return b + c;
	        if (!p) p = d * .3;
	        if (a < Math.abs(c)) {
	            a = c;
	            var s = p / 4;
	        }
	        else var s = p / (2 * Math.PI) * Math.asin(c / a);
	        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
	    };
	    easings.easeInOutElastic = function(t, b, c, d) {
	        var p = 0;
	        var a = c;
	        if (t == 0) return b;
	        if ((t /= d / 2) == 2) return b + c;
	        if (!p) p = d * (.3 * 1.5);
	        if (a < Math.abs(c)) {
	            a = c;
	            var s = p / 4;
	        }
	        else var s = p / (2 * Math.PI) * Math.asin(c / a);
	        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
	        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
	    };
	    easings.easeInBack = function(t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        return c * (t /= d) * t * ((s + 1) * t - s) + b;
	    };
	    easings.easeOutBack = function(t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
	    };
	    easings.easeInOutBack = function(t, b, c, d, s) {
	        if (s == undefined) s = 1.70158;
	        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
	        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	    };
	    easings.easeInBounce = function(t, b, c, d) {
	        return c - easings.easeOutBounce(d - t, 0, c, d) + b;
	    };
	    easings.easeOutBounce = function(t, b, c, d) {
	        if ((t /= d) < (1 / 2.75)) {
	            return c * (7.5625 * t * t) + b;
	        } else if (t < (2 / 2.75)) {
	            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
	        } else if (t < (2.5 / 2.75)) {
	            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
	        } else {
	            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
	        }
	    };
	    easings.easeInOutBounce = function(t, b, c, d) {
	        if (t < d / 2) return easings.easeInBounce(t * 2, 0, c, d) * .5 + b;
	        return easings.easeOutBounce(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
	    };

	}));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./keyappstyle.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./keyappstyle.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Inconsolata:400,700);", ""]);

	// module
	exports.push([module.id, "body {\n  background-color: #f0f0f0;\n}\n\n#body {\n  position: relative;\n}\n\n/* Large */\naside {\n  width:15%; \n  position:absolute;\n  position: fixed;\n  line-height: 50%;\n  background: #Fff;\n  right: 85%;\n  top: 0;\n\n\n  height: 100%;\n  text-align: center;\n}\n\n.border {\n  border: solid thin;\n  border-bottom: 1px solid #e6e6e6;\n  border-right: 1px solid #e6e6e6;\n  border-left: 1px solid #e6e6e6;\n  border-top: 1px solid #e6e6e6;\n  border-bottom: 1px solid #e6e6e6;\n}\n\n#main {\n  margin:3%;\n  top: 30%;\n  width: 70%;\n  height: 100%;\n}\n\n#page {\n  position: absolute;\n  width: 60%;\n  top: 30%;\n  left: 65%;\n  bottom: 50%;\n  height: 1000px;\n  margin: -100px 0 0 -40%;\n  background-color: #fff;\n  opacity: 1;\n\n  padding: 1%;\n\n  /* Safari 3-4, iOS 1-3.2, Android 1.6- */\n  -webkit-border-radius: 4px; \n\n  /* Firefox 1-3.6 */\n  -moz-border-radius: 4px; \n  \n  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */\n  border-radius: 4px; \n}\n\n\n/* Medium screens */\n@media all and (max-width: 850px) {\n  \n}\n\n/* Small screens */\n@media all and (max-width: 700px) {\n  #page {\n    position: absolute;\n    width: 80%;\n    top: 30%;\n    left: 50%;\n    bottom: 50%;\n    margin: -27% 0 0 -40%;\n  }\n  aside {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    background-color: #fff;\n    border-bottom: 1px solid #e6e6e6;\n    opacity: 1;\n    padding: 1%;\n    z-index: 20;\n  }\n}\n\n#type-app {\n  font-family: 'Inconsolata', monospace;\n  border: inherit;\n  color: black;\n  padding: 1%;\n  display: flex;\n  flex-direction: column;\n  flex: 1 50%;\n\n}\n#type-input {\n  font-family: 'Inconsolata', monospace;\n  flex: 1 100%;\n\n  \n}\n#key-timer {\n  flex: 1 100%;\n}\n#error {\n  font-weight: 700;\n  flex: 1 100%;\n  font-size: 12pt;\n}\n#typed, #untyped {\n  word-wrap: all;\n  word-wrap: break-word;\n}\n#typed {\n  font-weight: 700;\n}\n.fine {\n  background-color: #a0e7a0;\n  border: solid thin;\n  border-bottom: 1px solid #d3d3d3;\n  border-right: 1px solid #d3d3d3;\n  border-left: 1px solid #d3d3d3;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n\n  /* Safari 3-4, iOS 1-3.2, Android 1.6- */\n  -webkit-border-radius: 4px; \n\n  /* Firefox 1-3.6 */\n  -moz-border-radius: 4px; \n  \n  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */\n  border-radius: 4px; \n} \n.error {\n  background-color: #ff9994;\n  border: solid thin;\n  border-bottom: 1px solid #d3d3d3;\n  border-right: 1px solid #d3d3d3;\n  border-left: 1px solid #d3d3d3;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n\n  /* Safari 3-4, iOS 1-3.2, Android 1.6- */\n  -webkit-border-radius: 4px; \n\n  /* Firefox 1-3.6 */\n  -moz-border-radius: 4px; \n  \n  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */\n  border-radius: 4px; \n}\n.hidden {\n  content: &nbsp;\n  min-height: 10px;\n}", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);