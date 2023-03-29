/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"osweb": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~osweb"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_osweb_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/osweb.scss */ "./src/scss/osweb.scss");
/* harmony import */ var _scss_osweb_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_osweb_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_osweb_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/osweb/index.js */ "./src/js/osweb/index.js");
/* This is the entry script for the webpack builder
This script ties all needed modules or files together and provides the
correct setting for the webpack-devserver
*/



if (typeof window !== 'undefined') {
  window.alertify = __webpack_require__(/*! alertifyjs */ "./node_modules/alertifyjs/build/alertify.js");

  __webpack_require__(/*! alertifyjs/build/css/alertify.css */ "./node_modules/alertifyjs/build/css/alertify.css");

  __webpack_require__(/*! alertifyjs/build/css/themes/default.css */ "./node_modules/alertifyjs/build/css/themes/default.css");

  window.osweb = _js_osweb_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  window.osweb.printVersionInfo();
}

if (false) {}

/***/ }),

/***/ "./src/js/osweb/backends/canvas.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/backends/canvas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./styles.js */ "./src/js/osweb/backends/styles.js");























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/** Class representing a drawing canvas. */

var Canvas = /*#__PURE__*/function () {
  /**
   * Create a canvas object which is used to show all visual stimuli.
   * @param {Object} experiment - The experiment to which the canvas belongs.
   * @param {Boolean} auto_prepare - If true the canvas is prepared after drawing.
   * @param {Object} style_args - Optional styling argument for the canvas.
   */
  function Canvas(experiment, auto_prepare) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default()(this, Canvas);

    // Create and set public properties.
    this.auto_prepare = typeof auto_prepare === 'undefined' ? true : auto_prepare; // Set autoprepare toggle (not supported yet).

    this.experiment = experiment; // Anchor to the experiment object.
    // Create and set private properties.

    this._container = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Container"](); // Create the container which represents the canvas.

    this._font_string = 'bold 18px Courier New'; // Default font definition string.

    this._height = this.experiment._runner._renderer.height; // Height of the HTML canvas used for drawing.

    this._styles = new _styles_js__WEBPACK_IMPORTED_MODULE_23__["default"](); // The style container.

    this._width = this.experiment._runner._renderer.width; // Width of the HTML canvas used for drawing.

    this._textures = [];
  }
  /**
   * Calculate the coordinates for the arraw shape.
   * @param {Number} sx - The starting x coordinate of the element.
   * @param {Number} sy - The starting y coordinate of the element.
   * @param {Number} ex - The ending x coordinate of the element.
   * @param {Number} ey - The ending y coordinate of the element.
   * @param {Number} bodyWidth - The width of the element body.
   * @param {Number} bodyLength - The height of the element body.
   * @param {Number} headWidth - The width of the element head.
   * @return {Array} - The coordinates defining the arrow element.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default()(Canvas, [{
    key: "_arrow_shape",
    value: function _arrow_shape(sx, sy, ex, ey, bodyWidth, bodyLength, headWidth) {
      // Length
      var d = Math.sqrt(Math.pow(ey - sy, 2) + Math.pow(sx - ex, 2));
      var angle = Math.atan2(ey - sy, ex - sx);

      var _headWidth = (1 - bodyWidth) / 2.0;

      bodyWidth = bodyWidth / 2.0; // calculate coordinates

      var p4 = [ex, ey];
      var p1 = [sx + bodyWidth * headWidth * Math.cos(angle - Math.PI / 2), sy + bodyWidth * headWidth * Math.sin(angle - Math.PI / 2)];
      var p2 = [p1[0] + bodyLength * Math.cos(angle) * d, p1[1] + bodyLength * Math.sin(angle) * d];
      var p3 = [p2[0] + _headWidth * headWidth * Math.cos(angle - Math.PI / 2), p2[1] + _headWidth * headWidth * Math.sin(angle - Math.PI / 2)];
      var p7 = [sx + bodyWidth * headWidth * Math.cos(angle + Math.PI / 2), sy + bodyWidth * headWidth * Math.sin(angle + Math.PI / 2)];
      var p6 = [p7[0] + bodyLength * Math.cos(angle) * d, p7[1] + bodyLength * Math.sin(angle) * d];
      var p5 = [p6[0] + _headWidth * headWidth * Math.cos(angle + Math.PI / 2), p6[1] + _headWidth * headWidth * Math.sin(angle + Math.PI / 2)];
      return [p1, p2, p3, p4, p5, p6, p7];
    }
    /**
     * Checks if the supplied string contains HTML markup.
     * @param {String} str - The string to check.
     * @return {Boolean} - True if HTML markup was found, false if not.
     */

  }, {
    key: "_containsHTML",
    value: function _containsHTML(str) {
      var doc;

      try {
        doc = new DOMParser().parseFromString(str, 'text/html');
        return Array.from(doc.childNodes).some(function (node) {
          return node.nodeType === 1;
        });
      } catch (e) {
        console.error('Could not parse DOM: ' + e.message);
      }
    }
    /** Exit the display and return to default settings. */

  }, {
    key: "_exitDisplay",
    value: function _exitDisplay() {
      // Clear container.
      this.clear(); // Set the cursor visibility to default (visible).

      this.experiment._runner._renderer.view.style.cursor = 'default'; //  Set the renderer dimensions.

      this.experiment._runner._renderer.resize(800, 600); // Clear the renderer.


      this.experiment._runner._renderer.backgroundColor = 0x000000;

      this.experiment._runner._renderer.clear();

      this.experiment._runner._renderer.render(this._container);

      try {
        document.body.style.backgroundColor = '#FFFFFF';
      } catch (e) {
        console.log('Could not reset body color to white', e);
      }
    }
    /**
     * Checks if addiotional style is defined otherwise use default.
     * @param {Object} styleArgs - The additional style.
     * @return {Object} - returns a style object.
     */

  }, {
    key: "_getStyle",
    value: function _getStyle(styleArgs) {
      // Check if the supplied style does exist.
      if (typeof styleArgs === 'undefined') {
        return this._styles;
      } else {
        var styles = new _styles_js__WEBPACK_IMPORTED_MODULE_23__["default"]();
        Object.assign(styles, styleArgs);
        return styles;
      }
    }
    /**
     * Calculates the height, ascent en descent in pixels for the given font.
     * @param {String} textLine The line of text.
     * @param {String} fontFamily The font family to use.
     * @param {Number} fontSize The size of the font.
     * @return {Object} object containing the height, ascent en descent of the text.
     */

  }, {
    key: "_getTextBaseline",
    value: function _getTextBaseline(textLine, fontFamily, fontSize, fontBold) {
      // Create the text element.
      var text = document.createElement('span');
      text.style.fontFamily = fontFamily || 'Arial';
      text.style.fontWeight = fontBold === true ? 'bold' : 'normal';
      text.style.fontSize = String(fontSize) + 'px';
      text.innerHTML = textLine; // Create the calculation div.

      var block = document.createElement('div');
      block.style.display = 'inline-block';
      block.style.lineHeight = 'normal'; // block.style.width = '1px'
      // block.style.height = '0px'
      // Create the container div.

      var div = document.createElement('div');
      div.append(text, block);
      document.body.appendChild(div); // Set the variables.

      var result = {};
      var rect;
      var top1;
      var top2; // Calculate the ascent

      block.style.verticalAlign = 'baseline';
      rect = block.getBoundingClientRect();
      top1 = rect.top + document.body.scrollTop;
      rect = text.getBoundingClientRect();
      top2 = rect.top + document.body.scrollTop;
      result.ascent = Math.round(top1 - top2); // Calculate the descent and the heigt.

      block.style.verticalAlign = 'bottom';
      rect = block.getBoundingClientRect();
      top1 = rect.top + document.body.scrollTop;
      rect = text.getBoundingClientRect();
      top2 = rect.top + document.body.scrollTop;
      result.height = Math.round(top1 - top2);
      result.descent = result.height - result.ascent;
      document.body.removeChild(div); // Return the result.

      return result;
    }
    /**
     * Returns the correct envelop setting to use.
     * @param {String} env - Envelop parameter.
     * @return {String} - The envelop type to use.
     */

  }, {
    key: "_match_env",
    value: function _match_env(env) {
      if (['c', 'circular', 'round'].includes(env)) {
        return 'c';
      } else if (['g', 'gaussian', 'gauss', 'normal', 'rect', 'square'].includes(env)) {
        return 'g';
      } else if (['rectangular', 'rectangle'].includes(env)) {
        return 'r';
      } else if (['l', 'linear', 'lin', 'ln'].includes(env)) {
        return 'l';
      } else {
        return 'g';
      }
    }
    /**
     * Parse recursively a HTML based text area and returns a set of text elements.
     * @param {Object} htmlNode - The html node to process.
     * @param {Object} textBlock - Object containing the translated text block.
     * @param {Object} currentStyle - Object containing the current style to use.
     */

  }, {
    key: "_parseHtmlNode",
    value: function _parseHtmlNode(htmlNode, textBlock, currentStyle) {
      // Create a style for the current leven
      var elementStyle = this._getStyle(currentStyle); // Process the node content itself.


      switch (htmlNode.nodeType) {
        case 1:
          // Select the proper html tag
          switch (htmlNode.nodeName) {
            case 'B':
              // Process bold tag.
              elementStyle.font_bold = true;
              break;

            case 'BR':
              // Process break tag, get the total width of the line.
              textBlock.row.height = textBlock.row.height > 0 ? textBlock.row.height : textBlock.prev_height;
              textBlock.row.width = textBlock.x_pos > textBlock.row.width ? textBlock.x_pos : textBlock.row.width;
              textBlock.width = textBlock.width > textBlock.row.width ? textBlock.width : textBlock.row.width;
              textBlock.y_pos = textBlock.y_pos + textBlock.row.height;
              textBlock.x_pos = 4;
              textBlock.height = textBlock.height + textBlock.row.height; // new row with elements.

              textBlock.rows.push(textBlock.row);
              textBlock.row = {
                ascent: 0,
                width: 0,
                height: 0,
                text_elements: [],
                text_dimensions: [],
                text_underline: []
              };
              break;

            case 'I':
              // Process italic tag.
              elementStyle.font_italic = true;
              break;

            case 'SPAN':
              // Get the style tokens.
              if (htmlNode.attributes.length > 0) {
                var tokens = htmlNode.attributes[0].value.split(';'); // parse through the style tokens.

                for (var j = 0; j < tokens.length; j++) {
                  var property = tokens[j].slice(0, tokens[j].indexOf(':'));
                  var value = tokens[j].slice(tokens[j].indexOf(':') + 1, tokens[j].length); // Set the supported properties.

                  switch (property) {
                    case 'color':
                      elementStyle.color = value;
                      break;

                    case 'font-size':
                      elementStyle.font_size = value;
                      break;

                    case 'font-family':
                      elementStyle.font_family = value;
                      break;
                  }
                }
              }

              break;

            case 'U':
              // Process underline tag.
              elementStyle.font_underline = true;
              break;
          }

          break;

        case 3:
          // Create the text style element.
          var textStyle = {
            fontFamily: elementStyle.font_family,
            fontStyle: elementStyle.font_italic === true ? 'italic' : 'normal',
            fontWeight: elementStyle.font_bold === true ? 'bold' : 'normal',
            fontSize: elementStyle.font_size,
            fill: elementStyle.color
          }; // Create the text element and get the dimension.

          var bounds = {};
          var textElement = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Text"](htmlNode.textContent, textStyle);

          this._textures.push(textElement);

          textElement.getBounds(false, bounds); // Get the height and descent (for vertical positioning);

          var dimension = this._getTextBaseline(htmlNode.textContent, elementStyle.font_family, elementStyle.font_size, elementStyle.font_bold); // Position the text element and update the width.


          textElement.x = textBlock.x_pos;
          textElement.y = textBlock.y_pos;
          textBlock.x_pos = textBlock.x_pos + bounds.width;
          textBlock.row.width = textBlock.x_pos > textBlock.row.width ? textBlock.x_pos : textBlock.row.width;
          textBlock.width = textBlock.width > textBlock.row.width ? textBlock.width : textBlock.row.width;
          textBlock.row.height = bounds.height + 1 > textBlock.row.height ? bounds.height + 1 : textBlock.row.height;
          textBlock.row.ascent = dimension.ascent > textBlock.row.ascent ? dimension.ascent : textBlock.row.ascent;
          textBlock.prev_height = textBlock.row.height;
          textBlock.row.text_elements.push(textElement);
          textBlock.row.text_dimensions.push(dimension);
          textBlock.row.text_underline.push(elementStyle.font_underline);
          break;
      } // Process the child nodes recursive (if any).


      for (var i = 0; i < htmlNode.childNodes.length; i++) {
        this._parseHtmlNode(htmlNode.childNodes[i], textBlock, elementStyle, i === htmlNode.childNodes.length - 1);
      }
    }
    /**
     * Resizes the container div (osweb_div), which contains all elements on display
     * @param {Number} width - Width to set.
     * @param {Number} height -Hheight to set.
     */

  }, {
    key: "_resizeContainer",
    value: function _resizeContainer(width, height) {
      // Set the parent container dimensions.
      this.experiment._runner._container.style.width = width + 'px';
      this.experiment._runner._container.style.height = height + 'px';
    }
    /**
     * Draws an arrow element on the canvas.
     * @param {Number} sx - The starting x coordinate of the element.
     * @param {Number} sy - The starting y coordinate of the element.
     * @param {Number} ex - The ending x coordinate of the element.
     * @param {Number} ey - The ending y coordinate of the element.
     * @param {Number} bodyWidth - The width of the element body.
     * @param {Number} bodyLength - The height of the element body.
     * @param {Number} headWidth - The width of the element head.
     * @param {Object} styleArgs - Optional styling arguments for the element.
     */

  }, {
    key: "arrow",
    value: function arrow(sx, sy, ex, ey, bodyWidth, bodyLength, headWidth, styleArgs) {
      // Calculate coordinate points for the arrow.
      var points = this._arrow_shape(sx, sy, ex, ey, bodyWidth, bodyLength, headWidth); // Draw the arrow as a polygon.


      this.polygon(points, styleArgs);
    }
    /**
     * Draws an arrow element on the canvas.
     * @param {Number} sx - The x coordinate of the element.
     * @param {Number} sy - The y coordinate of the element.
     * @param {Number} ex - The radius the element.
     * @param {Object} styleArgs - Optional styling argument for the element.
     */

  }, {
    key: "circle",
    value: function circle(x, y, r, styleArgs) {
      // Get the style
      var elementStyle = this._getStyle(styleArgs); // Create a circle element.


      var circle = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Graphics"]();
      circle.lineStyle(elementStyle.penwidth, elementStyle.color, 1);

      if (elementStyle.fill === true) {
        circle.beginFill(elementStyle.color);
        circle.drawCircle(0, 0, r);
        circle.endFill();
      } else {
        circle.drawCircle(0, 0, r);
      }

      circle.x = x;
      circle.y = y; // Add the circle element to container.

      this._container.addChild(circle);
    }
    /**
     * Clear the current canvas.
     * @param {Number} background_color - The color to draw (optional).
     * @param {Object} style_args - JSON object containing style arguments (optional).
     */

  }, {
    key: "clear",
    value: function clear(backgroundColor, styleArgs) {
      // Clear the stage by temoving al the child elements.
      for (var i = this._container.children.length - 1; i >= 0; i--) {
        this._container.removeChild(this._container.children[i]);
      }

      var texture;

      while (this._textures.length > 0) {
        texture = this._textures.pop();
        texture.destroy(true);
      }
    }
    /**
     * Copies the contents of the passed canvas onto current one.
     * @param  {osweb.canvas} canvas The source canvas to copy
     * @return {void}
     */

  }, {
    key: "copy",
    value: function copy(canvas) {
      this.clear(); // Loop over the shapes on the passed canvas and copy them onto the current one

      var _iterator = _createForOfIteratorHelper(canvas._container.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var shape = _step.value;

          this._container.addChild(shape.clone());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Draws an ellipse element on the canvas.
     * @param {Number} x - The x coordinate of the element.
     * @param {Number} y - The y coordinate of the element.
     * @param {Number} w - The width the element.
     * @param {Number} h - The height the element.
     * @param {Object} styleArgs - Optional styling argument for the element.
     */

  }, {
    key: "ellipse",
    value: function ellipse(x, y, w, h, styleArgs) {
      // Get the style
      var elementStyle = this._getStyle(styleArgs); // Create an ellipse element.


      var ellipse = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Graphics"]();
      ellipse.lineStyle(elementStyle.penwidth, elementStyle.color, 1);

      if (elementStyle.fill === true) {
        ellipse.beginFill(elementStyle.color);
        ellipse.drawEllipse(0, 0, w / 2, h / 2);
        ellipse.endFill();
      } else {
        ellipse.drawEllipse(0, 0, w / 2, h / 2);
      }

      ellipse.x = x + w / 2;
      ellipse.y = y + h / 2; // Add the ellipse element to container.

      this._container.addChild(ellipse);
    }
    /**
     * Draws a fixdot element on the canvas.
     * @param {int} x - The x coordinate of the element.
     * @param {int} y - The y coordinate of the element.
     * @param {String} - The style of the fixation dot.
     * @param {Object} styleArgs - Optional styling argument for the element.
     */

  }, {
    key: "fixdot",
    value: function fixdot() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
      var styleArgs = arguments.length > 3 ? arguments[3] : undefined;

      var elementStyle = this._getStyle(styleArgs);

      var s = 4;
      var h = 2;

      if (style.indexOf('large') !== -1) {
        s = 16;
      } else if (style.indexOf('medium') !== -1 || style === 'default') {
        s = 8;
      } else if (style.indexOf('small') !== -1) {
        s = 4;
      } else {
        this.experiment._runner._debugger.addError('Unknown style: ' + style);
      }

      var styles = new _styles_js__WEBPACK_IMPORTED_MODULE_23__["default"]();

      if (style.indexOf('open') !== -1 || style === 'default') {
        styles._fill = true;
        styles._background_color = elementStyle.color;
        styles._color = elementStyle.color;
        this.ellipse(x - s, y - s, 2 * s, 2 * s, styles);
        styles._background_color = elementStyle.background_color;
        styles._color = elementStyle.background_color;
        this.ellipse(x - h, y - h, 2 * h, 2 * h, styles);
      } else if (style.indexOf('filled') !== -1) {
        styles._fill = true;
        styles._background_color = elementStyle.color;
        styles._color = elementStyle.color;
        this.ellipse(x - s, y - s, 2 * s, 2 * s, styles);
      } else if (style.indexOf('cross') !== -1) {
        styles._penwidth = 1;
        styles._color = elementStyle.color;
        this.line(x, y - s, x, y + s, styles);
        this.line(x - s, y, x + s, y, styles);
      } else {
        this.experiment._runner._debugger.addError('Unknown style: ' + style);
      }
    }
    /**
     * Draws a gabor element on the canvas.
     *
     * @param {Number} x The x coordinate of the element
     * @param {Number} y The y coordinate of the element
     * @param {float} orient The rotation of the element (range between 0 and 1)
     * @param {float} freq The frequency of the bands
     * @param {String} env The type of envelope used for the element
     * @param {*} size The size of the gabor
     * @param {*} stdev The standard deviation of the guass fade
     * @param {*} phase The phase of the element (start offset)
     * @param {*} color1 The first color for the element
     * @param {*} color2 The second color for the element
     * @param {*} bgmode The background mode of the element
     * @memberof Canvas
     */

  }, {
    key: "gabor",
    value: function gabor(x, y, orient, freq, env, size, stdev, phase, color1, color2, bgmode) {
      // Returns a surface containing a Gabor patch.
      env = this._match_env(env); // Create a temporary canvas to make an image data array.

      var canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      var ctx = canvas.getContext('2d');
      var px = ctx.getImageData(0, 0, size, size); // Conver the orientation to radians.

      orient = Math.PI * orient / -180;
      color1 = this._styles._convertColorValueToRGB(color1);
      color2 = this._styles._convertColorValueToRGB(color2); // rx and ry reflect the real coordinates in the target image

      for (var rx = 0; rx < size; rx++) {
        for (var ry = 0; ry < size; ry++) {
          // Distance from the center
          var dx = rx - 0.5 * size;
          var dy = ry - 0.5 * size; // Get the coordinates (x, y) in the unrotated Gabor patch.

          var t = Math.atan2(dy, dx) + orient;
          var r = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
          var ux = r * Math.cos(t);
          var uy = r * Math.sin(t);
          var f = void 0; // Get the amplitude without the envelope (0 .. 1).

          var amp = 0.5 + 0.5 * Math.cos(2.0 * Math.PI * (ux * freq + phase)); // The envelope adjustment

          if (env === 'g') {
            // $f = exp(-0.5 * pow($x / $std, 2) - 0.5 * pow($y / $std, 2));
            f = Math.exp(-0.5 * Math.pow(ux / stdev, 2) - 0.5 * Math.pow(uy / stdev, 2));
          } else if (env === 'l') {
            f = Math.max(0, (0.5 * size - r) / (0.5 * size));
          } else if (env === 'c') {
            if (r > 0.5 * size) {
              f = 0.0;
            } else {
              f = 1.0;
            }
          } else {
            f = 1.0;
          } // Apply the envelope


          if (bgmode === 'avg') {
            amp = amp * f + 0.5 * (1.0 - f);
          } else {
            amp = amp * f;
          } // Recalculate the color values.


          var color = {
            r: color1[0] * amp + color2[0] * (1.0 - amp),
            g: color1[1] * amp + color2[1] * (1.0 - amp),
            b: color1[2] * amp + color2[2] * (1.0 - amp)
          }; // Set the color values at pixel level.

          var position = rx * 4 + ry * size * 4;
          px.data[position] = color.r;
          px.data[position + 1] = color.g;
          px.data[position + 2] = color.b;
          px.data[position + 3] = 255;
        }
      } // Put the calculated data back on the canvas and create an image of it.


      ctx.putImageData(px, 0, 0); // Retrieve the image from the recourses

      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_22__["Texture"].from(canvas);

      this._textures.push(texture);

      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Sprite"](texture); // Position the image.

      sprite.x = x - size / 2;
      sprite.y = y - size / 2; // Add the image to the stage.

      this._container.addChild(sprite);
    }
    /**
     * Returns the canvas height
     * @return {Number} - The height of the canvas in pixels.
     */

  }, {
    key: "image",

    /**
     * Draws an image element on the canvas.
     * @param {String} fname - The name of the element to draw.
     * @param {Boolean|Number|String} center - If true the image is centered.
     * @param {Number} x - The x coordinate of the element.
     * @param {Number} y - The y coordinate of the element.
     * @param {Number} scale - The scaling factor of the element.
     * @param {Number} rotation - Clockwise rotation in degrees.
     */
    value: function image(fname, center, x, y, scale, rotation) {
      var name = this.experiment._runner._syntax.remove_quotes(fname);

      var path = this.experiment._runner._pool[name];
      if (typeof path === 'undefined') this.experiment._runner._debugger.addError("\"".concat(fname, "\" does not exist in the file pool"));
      var img = path.data; // Create a temporary canvas to make an image data array.

      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_22__["Texture"].from(canvas);

      this._textures.push(texture);

      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Sprite"](texture); // sprite.anchor.set(.5)

      if (typeof scale !== 'undefined') {
        sprite.scale.x = scale;
        sprite.scale.y = scale;
      }

      if (typeof rotation !== 'undefined') sprite.angle = rotation; // Position the image

      if ([1, '1', true, 'yes'].indexOf(center) !== -1) {
        sprite.x = Math.floor(x - sprite.width / 2);
        sprite.y = Math.floor(y - sprite.height / 2);
      } else {
        sprite.x = x;
        sprite.y = y;
      }

      console.log(sprite.x);

      this._container.addChild(sprite);
    }
    /**
     * Initializes the  display container on which the canvas is displayed.
     * @param {Object} experiment - The experiment to which the canvas belongs.
     */

  }, {
    key: "init_display",
    value: function init_display(experiment) {
      // Set the dimension properties.
      this._height = experiment.vars.get('height');
      this._width = experiment.vars.get('width'); // Set the renderer dimensions.

      experiment._runner._renderer.resize(this._width, this._height); // Set the renderer background color.


      var background = experiment.vars.get('background');

      experiment._runner._renderer.clear(this._styles._convertColorValue(background, 'number'));

      experiment._runner._renderer.backgroundColor = this._styles._convertColorValue(background, 'number'); // PIXU: Set the cursor visibility to none (default).

      experiment._runner._renderer.view.style.cursor = 'none'; // Start the fullscreen mode (if enabled).

      experiment._runner._screen._fullScreenInit(); // Set focus to the experiment canvas.


      experiment._runner._renderer.view.focus();
    }
    /**
     * Draws a line element on the canvas.
     * @param {Number} sx - The starting x coordinate of the element.
     * @param {Number} sy - The starting y coordinate of the element.
     * @param {Number} ex - The ending x coordinate of the element.
     * @param {Number} ey - The ending y coordinate of the element.
     * @param {Object} styleArgs - Optional styling argument for the element.
     */

  }, {
    key: "line",
    value: function line(sx, sy, ex, ey, styleArgs) {
      // Get the style
      var elementStyle = this._getStyle(styleArgs); // Create a line element.


      var line = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Graphics"]();
      line.lineStyle(elementStyle.penwidth, elementStyle.color, 1);
      line.moveTo(0, 0);
      line.lineTo(ex - sx, ey - sy);
      line.x = sx;
      line.y = sy; // Add the line element to container.

      this._container.addChild(line);
    }
    /**
     * Draws a gabor element on the canvas.
     * @param {Number} x - The x coordinate of the element.
     * @param {Number} y - The y coordinate of the element.
     * @param {String} env - The type of envelop used  for the element.
     * @param {Object} size - Optional styling argument for the element.
     * @param {Number} stdev - The standard deviation  for the element.
     * @param {Number|String} color1 - The first color for the element.
     * @param {Number|String} color2 - Teh second color for the element.
     * @param {String} bgmode - The type of background mode for the element.
     */

  }, {
    key: "noise",
    value: function noise(x, y, env, size, stdev, color1, color2, bgmode) {
      // Returns a surface containing a noise patch.
      env = this._match_env(env); // Create a temporary canvas to make an image data array.

      var canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      var ctx = canvas.getContext('2d');
      var px = ctx.getImageData(0, 0, size, size); // Create a surface

      color1 = this._styles._convertColorValueToRGB(color1);
      color2 = this._styles._convertColorValueToRGB(color2); // rx and ry reflect the real coordinates in the target image

      for (var rx = 0; rx < size; rx++) {
        for (var ry = 0; ry < size; ry++) {
          // Distance from the center
          var ux = rx - 0.5 * size;
          var uy = ry - 0.5 * size;
          var r = Math.sqrt(Math.pow(ux, 2) + Math.pow(uy, 2));
          var f = void 0; // Get the amplitude without the envelope (0 .. 1)

          var amp = Math.random(); // The envelope adjustment

          if (env === 'g') {
            f = Math.exp(-0.5 * Math.pow(ux / stdev, 2) - 0.5 * Math.pow(uy / stdev, 2));
          } else if (env === 'l') {
            f = Math.max(0, (0.5 * size - r) / (0.5 * size));
          } else if (env === 'c') {
            if (r > 0.5 * size) {
              f = 0.0;
            } else {
              f = 1.0;
            }
          } else {
            f = 1.0;
          } // Apply the envelope


          if (bgmode === 'avg') {
            amp = amp * f + 0.5 * (1.0 - f);
          } else {
            amp = amp * f;
          } // Recalculate the collor values.


          var color = {
            r: color1[0] * amp + color2[0] * (1.0 - amp),
            g: color1[1] * amp + color2[1] * (1.0 - amp),
            b: color1[2] * amp + color2[2] * (1.0 - amp)
          }; // Set the color values at pixel level.

          var position = rx * 4 + ry * size * 4;
          px.data[position] = color.r;
          px.data[position + 1] = color.g;
          px.data[position + 2] = color.b;
          px.data[position + 3] = 255;
        }
      } // Put the calculated data back on the canvas and create an image of it.


      ctx.putImageData(px, 0, 0); // Retrieve the image from the recourses

      var texture = pixi_js__WEBPACK_IMPORTED_MODULE_22__["Texture"].from(canvas);

      this._textures.push(texture);

      var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Sprite"](texture); // Position the image.

      sprite.x = x - size / 2;
      sprite.y = y - size / 2; // Add the image to the stage.

      this._container.addChild(sprite);
    }
    /**
     * Draws a polygon element on the canvas.
     * @param {Array} verticles - The coordinates of the element.
     * @param {Object} styleArgs - Optional styling argument for the element.
     */

  }, {
    key: "polygon",
    value: function polygon(verticles, styleArgs) {
      // Get the style
      var elementStyle = this._getStyle(styleArgs); // Adjust the points.


      var path = [];

      for (var i = 0; i < verticles.length; i++) {
        path.push(verticles[i][0]);
        path.push(verticles[i][1]);
      }

      path.push(verticles[0][0]);
      path.push(verticles[0][1]); // Create a polygon element.

      var polygon = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Graphics"]();
      polygon.lineStyle(elementStyle.penwidth, elementStyle.color, 1);
      if (elementStyle.fill === true) polygon.beginFill(elementStyle.color);
      polygon.drawPolygon(path);
      if (elementStyle.fill === true) polygon.endFill(); // Add the polygon item to container.

      this._container.addChild(polygon);
    }
    /** Implements the prepare phase of a canvas. */

  }, {
    key: "prepare",
    value: function prepare() {}
    /**
     * Draws a rectangle element on the canvas.
     * @param {Number} x - The x coordinate of the element.
     * @param {Number} y - The y coordinate of the element.
     * @param {Number} w - The width of the element.
     * @param {Number} h - The height of the element.
     * @param {Object} styleArgs - Optional styling argument for the element.
     */

  }, {
    key: "rect",
    value: function rect(x, y, w, h, styleArgs) {
      // Get the style
      var elementStyle = this._getStyle(styleArgs); // Create a rectangle element.


      var rectangle = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Graphics"]();
      rectangle.lineStyle(elementStyle.penwidth, elementStyle.color, 1);

      if (elementStyle.fill === true) {
        rectangle.beginFill(elementStyle.color);
        rectangle.drawRect(0, 0, w, h);
        rectangle.endFill();
      } else {
        rectangle.drawRect(0, 0, w, h);
      }

      rectangle.x = x;
      rectangle.y = y; // Add the rectangle element to container.

      this._container.addChild(rectangle);
    }
    /**
     * Returns the size ion pixels of the canvas.
     * @return {Array} - The widht an height as an array tupple.
     */

  }, {
    key: "size",
    value: function size() {
      // Create object tuple.
      var size = {
        width: this._width,
        height: this._height
      };
      return size;
    }
    /**
     * Show a canvas on the ptimary canvas.
     * @param {Object} experiment - The experiment to which the canvas belongs.
     * @return {Number} - The current time stamp.
     */

  }, {
    key: "show",
    value: function show(experiment) {
      // Check parameter.
      experiment = typeof experiment !== 'undefined' ? experiment : this.experiment; // Add the container to the stage object and update the stage.

      this.experiment._currentCanvas = this; // Set the scaling.

      this._container.scale.x = this.experiment._scale_x;
      this._container.scale.y = this.experiment._scale_y; // Set renderer background and render the content.

      this.experiment._runner._renderer.backgroundColor = this._styles._background_color;

      try {
        var c = this._styles.rgb;
        document.body.style.backgroundColor = "rgb(".concat(c.r, ",").concat(c.g, ",").concat(c.b, ")");
      } catch (e) {
        console.error(e);
      }

      this.experiment._runner._renderer.render(this._container);

      return experiment != null ? experiment.clock.time() : null;
    }
    /**
     * Draws a text element on the canvas.
     * @param {String} txt - The x coordinate of the element.
     * @param {Boolean} center - If true the text must be centered.
     * @param {Number} x - The x coordinate of the element.
     * @param {Number} y - The y coordinate of the element.
     * @param {Boolean} html - If true the text parameter contains HTML tags.
     * @param {Object} styleArgs - Optional styling argument for the element.
     */

  }, {
    key: "text",
    value: function text(txt, center, x, y, html, styleArgs) {
      // Newlines are not dealt with correctly, so we convert them to <br />
      // tags, which results in the same behavior as the desktop.
      txt = txt.toString().replace('\n', '<br />'); // Get the style

      var elementStyle = this._getStyle(styleArgs); // Only jump through the HTML rendering hoops if the html == 'yes' and
      // text actually contains HTML markup.


      if (html === 'yes' && this._containsHTML(txt)) {
        //  Define the text block object.
        var textBlock = {
          element_style: elementStyle,
          height: 0,
          prev_height: 0,
          row: {
            ascent: 0,
            height: 0,
            text_elements: [],
            text_dimensions: [],
            text_underline: [],
            width: 0
          },
          rows: [],
          styles: [],
          width: 0,
          x_pos: 4,
          y_pos: 0
        }; // First create a div container for parsing the html text.

        var div = document.createElement('div');
        document.body.appendChild(div);
        div.style.fontFamily = elementStyle.font_family;
        div.style.fontSize = String(elementStyle.font_size) + 'px';
        div.style.fontWeight = elementStyle.font_bold === true ? 'bold' : 'normal';
        div.style.lineHeight = 'normal';
        div.style.display = 'inline-block';
        div.style.visibility = 'hidden';
        div.innerHTML = txt; // Parse the html recursive.

        this._parseHtmlNode(div, textBlock, elementStyle); // Remove the html div.


        document.body.removeChild(div); // Add the last row (if any).

        if (textBlock.row.text_elements.length !== 0) {
          textBlock.height = textBlock.height + textBlock.row.height;
          textBlock.rows.push(textBlock.row);
        } // Recalculate the x and y positions depending on height, width and centering.


        textBlock.y_pos = 0;

        for (var i = 0; i < textBlock.rows.length; i++) {
          // Parse a textline.
          for (var j = 0; j < textBlock.rows[i].text_elements.length; j++) {
            // Check for vertical correction.
            var adjust = textBlock.rows[i].ascent - textBlock.rows[i].text_dimensions[j].ascent;
            textBlock.rows[i].text_elements[j].y = textBlock.y_pos + adjust; // Check for horizontal centering.

            if ([1, '1', true, 'yes'].indexOf(center) !== -1) {
              textBlock.rows[i].text_elements[j].x = textBlock.rows[i].text_elements[j].x + x - Math.floor(textBlock.rows[i].width / 2);
              textBlock.rows[i].text_elements[j].y = textBlock.rows[i].text_elements[j].y + y - Math.floor(textBlock.height / 2);
            } else {
              textBlock.rows[i].text_elements[j].x = textBlock.rows[i].text_elements[j].x + x;
              textBlock.rows[i].text_elements[j].y = textBlock.rows[i].text_elements[j].y + y + 6;
            } // if underlined add additional styling.


            if (textBlock.rows[i].text_underline[j] === true) {
              this.line(textBlock.rows[i].text_elements[j].x, textBlock.rows[i].text_elements[j].y + textBlock.rows[i].text_dimensions[j].ascent + 7, textBlock.rows[i].text_elements[j].x + textBlock.rows[i].text_elements[j].width, textBlock.rows[i].text_elements[j].y + textBlock.rows[i].text_dimensions[j].ascent + 7, elementStyle);
            } //  Add text element to the stage.


            this._container.addChild(textBlock.rows[i].text_elements[j]);
          }

          textBlock.y_pos = textBlock.y_pos + textBlock.rows[i].height;
        }
      } else {
        //  Create the text element
        var textStyle = {
          fontFamily: elementStyle.font_family,
          fontSize: elementStyle.font_size,
          fontWeight: elementStyle.font_bold === true ? 'bold' : 'normal',
          fill: elementStyle.color
        };
        var textElement = new pixi_js__WEBPACK_IMPORTED_MODULE_22__["Text"](txt, textStyle);

        this._textures.push(textElement);

        if ([1, '1', true, 'yes'].indexOf(center) !== -1) {
          textElement.x = Math.floor(x - textElement.width / 2);
          textElement.y = Math.floor(y - textElement.height / 2);
        } else {
          textElement.x = x;
          textElement.y = y;
        }

        console.log(textElement.x); //  Add text element to the stage.

        this._container.addChild(textElement);
      }
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
    /**
     * Returns the canvas width
     * @return {Number} - The width of the canvas in pixels.
     */

  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }]);

  return Canvas;
}();



/***/ }),

/***/ "./src/js/osweb/backends/clock.js":
/*!****************************************!*\
  !*** ./src/js/osweb/backends/clock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clock; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");



/** Class representing the clock system. */

var Clock = /*#__PURE__*/function () {
  /**
   * Create a clock object which controls a pseudo real-time clock.
   * @param {Object} experiment - The experiment  to which the clock belongs.
   */
  function Clock(experiment) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Clock);

    // Create and set private properties.
    this._experiment = experiment; // Parent experiment item.

    this._startTime = -1; // Start time anchor of the experiment.
  }
  /** Initialize the clock. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Clock, [{
    key: "_initialize",
    value: function _initialize() {
      // Set the absolute start time of the expeirment.
      this._startTime = this._now();
    }
    /** Get an absolute time stamp from the system in ms.
     * @return {Number} - The current absolute time in ms.
     */

  }, {
    key: "_now",
    value: function _now() {
      // Get the current time stamp using the best available timing method.
      if (window.performance.now) {
        return Math.round(window.performance.now());
      } else if (window.performance.webkitNow) {
        return Math.round(window.performance.webkitNow());
      } else {
        return new Date().getTime();
      }
    }
    /**
     * Sleeps (pauses) for a duration (in milliseconds).
     * @param {Number} ms - The duration to wait in ms.
     */

  }, {
    key: "sleep",
    value: function sleep(ms) {
      // Sleeps (pauses) for a duration (in milliseconds).
      if (this._experiment !== null) {
        // Set the event processor.
        this._experiment._runner._events._run(ms, _system_constants_js__WEBPACK_IMPORTED_MODULE_2__["constants"].RESPONSE_DURATION, null);
      }
    }
    /** Get the relative time from the start of an experiment.
     * @return {Number} - The current relative time in ms.
     */

  }, {
    key: "time",
    value: function time() {
      // Gives the current timestamp in milliseconds.
      if (this._startTime !== -1) {
        return this._now() - this._startTime;
      } else {
        return 0;
      }
    }
  }]);

  return Clock;
}();



/***/ }),

/***/ "./src/js/osweb/backends/keyboard.js":
/*!*******************************************!*\
  !*** ./src/js/osweb/backends/keyboard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _response_device_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./response_device.js */ "./src/js/osweb/backends/response_device.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/** Class representing a keyboard device. */

var Keyboard = /*#__PURE__*/function (_ResponseDevice) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Keyboard, _ResponseDevice);

  var _super = _createSuper(Keyboard);

  /**
   * Create an object which represents a keyboard device.
   * @param {Object} experiment - The experiment to which the logger belongs.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} keyList - List of acceptable response keys.
   * @extends ResponseDevice   
   */
  function Keyboard(experiment, timeOut, keyList) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Keyboard);

    // Create and set private properties.
    _this = _super.call(this);
    _this._experiment = experiment; // Anchor to the experiment object.

    _this._keyList = typeof keyList === 'undefined' ? [] : keyList; // List of acceptable response keys.

    _this._timeOut = typeof timeOut === 'undefined' ? null : timeOut; // Duration in millisecond for time-out.
    // Set constant properties.

    _this._SYNONYM_MAP = [['None', 'none'], // timeout
    ['space', ' ', 'SPACE'], ['"', 'quotedbl', 'QUOTEDBL'], ['!', 'exclaim', 'EXCLAIM'], ['#', 'hash', 'HASH'], ['$', 'dollar', 'DOLLAR'], ['&', 'ampersand', 'AMPERSAND'], ["'", 'quote', 'QUOTE'], ['(', 'leftbracket', 'leftparen', 'LEFTBRACKET', 'LEFTPAREN'], [')', 'rightbracket', 'rightparen', 'RIGHTBRACKET', 'RIGHTPAREN'], ['*', 'asteriks', 'ASTERISK'], ['+', 'plus', 'PLUS'], [',', 'comma', 'COMMA'], ['-', 'minus', 'MINUS'], ['.', 'period', 'PERIOD'], ['/', 'slash', 'SLASH'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['0'], ['=', 'equals', 'EQUALS'], [':', 'colon', 'COLON'], [';', 'semicolon', 'SEMICOLON'], ['<', 'less', 'LESS'], ['>', 'greater', 'GREATER'], ['?', 'question', 'QUESTION'], ['@', 'at', 'AT'], ['a', 'A'], ['b', 'B'], ['c', 'C'], ['d', 'D'], ['e', 'E'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['i', 'I'], ['j', 'J'], ['k', 'K'], ['l', 'L'], ['m', 'M'], ['n', 'N'], ['o', 'O'], ['p', 'P'], ['q', 'Q'], ['r', 'R'], ['s', 'S'], ['t', 'T'], ['u', 'U'], ['v', 'V'], ['w', 'W'], ['x', 'X'], ['y', 'Y'], ['z', 'Z'], ['kp0', 'KP0'], ['kp1', 'KP1'], ['kp2', 'KP2'], ['kp3', 'KP3'], ['kp4', 'KP4'], ['kp5', 'KP5'], ['kp6', 'KP6'], ['kp7', 'KP7'], ['kp8', 'KP8'], ['kp9', 'KP9'], ['kp_divide', 'KP_DIVIDE'], ['kp_enter', 'KP_ENTER'], ['kp_equals', 'KP_EQUALS'], ['kp_minus', 'KP_MINUS'], ['kp_multiply', 'KP_MULTIPLY'], ['kp_period', 'KP_PERIOD'], ['kp_plus', 'KP_PLUS'], ['\\', 'backslash', 'BACKSLASH'], ['^', 'power', 'caret', 'POWER', 'CARET'], ['_', 'underscore', 'UNDERSCORE'], ['`', 'backquote', 'BACKQUOTE'], ['f1', 'F1', 'help', 'HELP'], ['f2', 'F2'], ['f3', 'F3'], ['f4', 'F4'], ['f5', 'F5'], ['f6', 'F6'], ['f7', 'F7'], ['f8', 'F8'], ['f9', 'F9'], ['f10', 'F10'], ['f11', 'F11'], ['f12', 'F12'], ['f13', 'F13'], ['f14', 'F14'], ['f15', 'F15'], ['up', 'UP'], ['down', 'DOWN'], ['left', 'LEFT'], ['right', 'RIGHT'], ['menu', 'MENU'], ['lshift', 'left shift', 'LSHIFT', 'LEFT SHIFT'], ['lctrl', 'left ctrl', 'LCTRL', 'LEFT CTRL'], ['lalt', 'left alt', 'LALT', 'LEFT ALT'], ['rshift', 'right shift', 'RSHIFT', 'RIGHT SHIFT'], ['rctrl', 'right ctrl', 'RCTRL', 'RIGHT CTRL'], ['ralt', 'right alt', 'alt gr', 'RALT', 'RIGHT ALT', 'ALT GR'], ['page up', 'pageup', 'PAGE UP', 'PAGEUP'], ['page down', 'pagedown', 'PAGE DOWN', 'PAGEDOWN'], ['pause', 'PAUSE'], ['scroll lock', 'scrollock', 'SCROLL LOCK', 'SCROLLOCK'], ['caps lock', 'capslock', 'CAPS LOCK', 'CAPSLOCK'], ['nummlock', 'NUMMLOCK'], ['clear', 'CLEAR'], ['enter', 'ENTER', 'return', 'RETURN'], ['tab', 'TAB'], ['backspace', 'BACKSPACE'], ['end', 'END'], ['home', 'HOME'], ['insert', 'INSERT'], ['delete', 'DELETE'], ['sysreq', 'sys req', 'SYSREQ', 'SYS REQ'], ['break', 'BREAK'], ['escape', 'ESCAPE'], ['print', 'PRINT'], ['print screen', 'PRINT SCREEN'], ['lmeta', 'left meta', 'LMETA', 'LEFT META', 'lsuper', 'LSUPER', 'left super', 'LEFT SUPER'], ['rmeta', 'right meta', 'RMETA', 'RIGHT META', 'rsuper', 'right super', 'RSUPER', 'RIGHT SUPER'], // key defined below are not supported yet.
    ['euro', 'EURO'], ['first', 'FIRST'], ['last', 'LAST'], ['kp enter', 'KP ENTER'], ['kp equals', 'KP EQUALS'], ['mode', 'MODE'], ['unknown', 'UNKNOWN'], ['unknown key', 'UNKNOWN KEY']];
    return _this;
  }
  /**
   * Set the configuration for the keyboard backend.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} keyList - List of acceptable response keys.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Keyboard, [{
    key: "_set_config",
    value: function _set_config(timeOut, keyList) {
      // Set the properties.
      this._keyList = keyList;
      this._timeOut = timeOut;
    }
    /**
     * Collects a single key press.
     * @param {Number} timeOut - Duration in ms for time out.
     * @param {Array} keyList - List of acceptable response keys.
     */

  }, {
    key: "get_key",
    value: function get_key(timeOut, keyList) {
      this._keyList = typeof keyList === 'undefined' ? this._keyList : keyList;
      this._timeOut = typeof timeOut === 'undefined' ? this._timeOut : timeOut;
      if (this._experiment !== null) this._experiment._runner._events._run(this._timeOut, _system_constants_js__WEBPACK_IMPORTED_MODULE_8__["constants"].RESPONSE_KEYBOARD, this._keyList);
    }
    /**
     * Retrieve the moderator keys (LIST, CTRL, ALT) pressed during a response.
     * @return {Array} - List of pressed moderator keys.
     */

  }, {
    key: "get_mods",
    value: function get_mods() {
      var moderators = [];

      if (this._experiment._runner._events.keyDownEvent !== null) {
        if (this._experiment._runner._events.keyDownEvent.event.shiftKey === true) {
          moderators.push('shift');
        }

        if (this._experiment._runner._events.keyDownEvent.event.ctrlKey === true) {
          moderators.push('ctrl');
        }

        if (this._experiment._runner._events.keyDownEvent.event.altKey === true) {
          moderators.push('alt');
        }
      }

      return moderators;
    }
    /**
     * Shows or hides a virtual keyboard.
     * @param {Boolean} visible - If true the virtual keyboard is shown.
     */

  }, {
    key: "show_virtual_keyboard",
    value: function show_virtual_keyboard(visible) {
      // Shows or hides a virtual keyboard.
      if (visible === true) {
        // Hack to show the virutal keyboard. ## Must be tested!
        this._experiment._runner._renderer.view.focus();
      } else {
        // Hack to hide the virtual keyboard. ## Must be tested!
        var tmp = document.createElement('input');
        document.body.appendChild(tmp);
        tmp.focus();
        document.body.removeChild(tmp);
      }
    }
  }]);

  return Keyboard;
}(_response_device_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/backends/log.js":
/*!**************************************!*\
  !*** ./src/js/osweb/backends/log.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Log; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_13__);














function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/** Class representing a data logger. */

var Log = /*#__PURE__*/function () {
  /**
   * Create a log object which stores all the response data.
   * @param {Object} experiment - The experiment to which the logger belongs.
   */
  function Log(experiment) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_11___default()(this, Log);

    this._experiment = experiment; // Anchor to the experiment object.
  }
  /**
   * Write one signle line to the message log.
   * @param {Array} varList - Array with variables to write to the log.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_12___default()(Log, [{
    key: "write_vars",
    value: function write_vars(varList) {
      var entry = {};

      var _iterator = _createForOfIteratorHelper(varList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var varName = _step.value;

          var value = this._experiment.vars.get(varName, 'NA', false);

          if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_13___default()(value)) continue;
          entry[varName] = value;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_13___default()(this._experiment.onLog)) {
        this._experiment.onLog(entry);
      }

      this._experiment._runner._data.push(entry);
    }
  }]);

  return Log;
}();



/***/ }),

/***/ "./src/js/osweb/backends/mouse.js":
/*!****************************************!*\
  !*** ./src/js/osweb/backends/mouse.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mouse; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _response_device_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./response_device.js */ "./src/js/osweb/backends/response_device.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/** Class representing a mouse device. */

var Mouse = /*#__PURE__*/function (_ResponseDevice) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Mouse, _ResponseDevice);

  var _super = _createSuper(Mouse);

  /**
   * Create an object which represents a mouse device.
   * @param {Object} experiment - The experiment to which the logger belongs.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} buttonList - List of acceptable response buttons.
   * @param {Boolean} visible - Toggle for showing the mouse cursor.
   * @extends ResponseDevice
   */
  function Mouse(experiment, timeOut, buttonList, visible) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Mouse);

    // Create and set public properties.
    _this = _super.call(this);
    _this._experiment = experiment;
    _this._timeOut = typeof timeOut === 'undefined' ? null : timeOut;
    _this._buttonList = typeof buttonList === 'undefined' ? null : buttonList;
    _this._visible = typeof visible === 'undefined' ? false : visible; // Set constant properties.

    _this._SYNONYM_MAP = [['None', 'none'], // timeout
    ['1', 'left_button', 'left'], ['2', 'middle_button', 'middle'], ['3', 'right_button', 'right'], ['4', 'scroll_up'], ['5', 'scroll_down']];
    return _this;
  }
  /**
   * Set the configuration for the mouse backend.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} buttonList - List of acceptable response buttons.
   * @param {Boolean} visible - Toggle for showing the mouse cursor.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Mouse, [{
    key: "_set_config",
    value: function _set_config(timeOut, buttonList, visible) {
      // Set mouse properties.
      this._timeOut = timeOut;
      this._buttonList = buttonList;
      this._visible = visible;
    }
    /**
     * Collects a single mouse click.
     * @param {Number} timeOut - Duration in ms for time out.
     * @param {Array} buttonList - List of acceptable response buttons.
     * @param {Boolean} visible - Toggle for showing the mouse cursor.
     */

  }, {
    key: "get_click",
    value: function get_click(timeOut, buttonList, visible) {
      // Collects a single mouse click.
      this._timeOut = typeof timeOut === 'undefined' ? this._timeOut : timeOut;
      this._buttonList = typeof buttonList === 'undefined' ? this._buttonList : buttonList;
      this._visible = typeof visible === 'undefined' ? this._visible : visible;

      if (this._experiment !== null) {
        // Hide or show the mouse.
        this.show_cursor(this._visible); // Set the event processor.

        this._experiment._runner._events._run(this._timeOut, _system_constants_js__WEBPACK_IMPORTED_MODULE_8__["constants"].RESPONSE_MOUSE, this._buttonList);
      }
    }
    /**
     *  Returns the current mouse position. !Warning: this methods uses the state in
     *  the last known mouse move, not the current state.
     *  @param {Object} - Object with time, x and y coordinate of the mouse cursor.
     */

  }, {
    key: "get_pos",
    value: function get_pos() {
      // Returns the current mouse position. !Warning: this methods uses the state in the last known mouse respone, not the current state.
      if (this._experiment._runner._events._mouseMoveEvent !== null) {
        return {
          rtTime: this._experiment._runner._events._mouseMoveEvent.rtTime,
          x: this._experiment._runner._events._mouseMoveEvent.event.clientX,
          y: this._experiment._runner._events._mouseMoveEvent.event.clientY
        };
      } else {
        return {
          rtTime: -1,
          x: -1,
          y: -1
        };
      }
    }
    /**
     *  Returns the current mouse position. !Warning: this methods uses the state in
     *  the last known mouse press, not the current state.
     *  @param {Object} - Object with the state of the mouse buttons.
     */

  }, {
    key: "get_pressed",
    value: function get_pressed() {
      // Returns the current button state of the mouse buttons. !Warning: this methods uses the state in the last known mouse respone, not the current state.
      if (this._experiment._runner.events._mouse_press !== null) {
        return {
          buttons: [this._experiment._runner._events._mouseDownEvent.event.button === 0, this._experiment._runner._events._mouseDownEvent.event.button === 1, this._experiment._runner._events._mouseDownEvent.event.button === 2]
        };
      } else {
        return {
          buttons: [null, null, null]
        };
      }
    }
    /** Sets the current position of the cursor. */

  }, {
    key: "set_pos",
    value: function set_pos(pos) {}
    /**
     * Shows or hides the mouse cursor.
     * @param {Boolean} show - If true the mouse cursor is shown.
     */

  }, {
    key: "show_cursor",
    value: function show_cursor(show) {
      // Set the property
      this._visible = show; // Immediately changes the visibility of the mouse cursor.

      if (show === true) {
        // Show the mouse cursor.
        this._experiment._runner._renderer.view.style.cursor = 'default';
      } else {
        // Set the cursor visibility to none.
        this._experiment._runner._renderer.view.style.cursor = 'none';
      }
    }
  }]);

  return Mouse;
}(_response_device_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/backends/response_device.js":
/*!**************************************************!*\
  !*** ./src/js/osweb/backends/response_device.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponseDevice; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__);
















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Base class for Mouse and Keyboard
 */
var ResponseDevice = /*#__PURE__*/function () {
  function ResponseDevice() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default()(this, ResponseDevice);

    this._SYNONYM_MAP = [];
  }
  /**
   * Convert all response values to their default values (remove synonyms).
   * @param {Array} responses - A list of response values.
   * @return {Array} - List of default values for the given responses.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default()(ResponseDevice, [{
    key: "_get_default_from_synonym",
    value: function _get_default_from_synonym(responses) {
      var defaults = [];
      var synonyms;

      var _iterator = _createForOfIteratorHelper(responses),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var response = _step.value;
          synonyms = this._synonyms(response);

          if (synonyms === null) {
            throw new ReferenceError("Unknown key '".concat(response, "'"));
          }

          defaults.push(synonyms[0]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return defaults;
    }
    /**
     * Get all synonyms for a response value
     * @param {String} button - A response.
     * @return {Array|Null} - All synonyms or null if the response is unknown
     */

  }, {
    key: "_synonyms",
    value: function _synonyms(response) {
      if (typeof response === 'undefined') return null;

      var _iterator2 = _createForOfIteratorHelper(this._SYNONYM_MAP),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var synonyms = _step2.value;
          if (synonyms.includes(response) || synonyms.includes(response.toLowerCase())) return synonyms;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return [response];
    }
    /** Clear all pending keyboard input. */

  }, {
    key: "flush",
    value: function flush() {
      // Always returns false because flusihing is not possible.
      return false;
    }
  }]);

  return ResponseDevice;
}();



/***/ }),

/***/ "./src/js/osweb/backends/sampler.js":
/*!******************************************!*\
  !*** ./src/js/osweb/backends/sampler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SamplerBackend; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");



var audioCtx = null;

try {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
  console.warn('Web Audio API is not supported in this browser');
}
/** Class representing a sampler. */


var SamplerBackend = /*#__PURE__*/function () {
  /**
   * Create a sampler object which controls the sampler device.
   * @param {Object} experiment - The experiment to which the sampler belongs.
   * @param {Object} source - A file pool object.
   * @param {Number} volume - The volume to use when playing the sound.
   * @param {Number} pitch - The pitch to use when playing the sound.
   * @param {Number} pan - The pan to use when playing the sound.
   * @param {String} duration - The duration of the sound.
   * @param {Number} fade - The fade to use when playing the sound.
   * @param {Boolean} block - If true use the sound ad a block wave.
   */
  function SamplerBackend(experiment, source, volume, pitch, pan, duration, fade, block) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SamplerBackend);

    // Create and set public properties.
    this.block = typeof block === 'undefined' ? false : block;
    this.duration = typeof duration === 'undefined' ? 'sound' : duration;
    this.experiment = experiment;
    this.volume = typeof volume === 'undefined' ? 1 : volume;
    this.fade = typeof fade === 'undefined' ? 0 : fade;
    this.pan = typeof pan === 'undefined' ? 0 : pan;
    this.pitch = typeof pitch === 'undefined' ? 1 : pitch;

    try {
      this.sample = source.data;
    } catch (e) {
      console.error('Could not play sound:', source);
      throw e;
    }

    this.sample.onended = function () {
      return _this.experiment._runner._events._audioEnded(_this);
    };

    if (audioCtx) {
      // We can only connect a sample to an audio context once
      if (typeof source.mediaElementSource === 'undefined') source.mediaElementSource = audioCtx.createMediaElementSource(this.sample);
      this.source = source.mediaElementSource;
    } else {
      this.source = this.sample;
    }
  }
  /**
   * Play a sound file.
   * @param {Number} volume - The volume to use when playing the sound.
   * @param {Number} pitch - The pitch to use when playing the sound.
   * @param {Number} pan - The pan to use when playing the sound.
   * @param {String} duration - The duration of the sound.
   * @param {Number} fade - The fade to use when playing the sound.
   * @param {Boolean} block - If true use the sound ad a block wave.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SamplerBackend, [{
    key: "play",
    value: function play(volume, pitch, pan, duration, fade, block) {
      // Check if optional parameters are defined.
      this.block = block || this.block;
      this.duration = typeof duration === 'undefined' ? this.duration : duration;
      this.volume = typeof volume === 'undefined' ? this.volume : volume;
      this.pitch = typeof pitch === 'undefined' ? this.pitch : pitch;
      this.pan = typeof pan === 'undefined' ? this.pan : pan;
      this.fade = typeof fade === 'undefined' ? this.fade : fade;

      if (audioCtx) {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        this.source.connect(this.applyFilters());
      } else {
        this.source.volume = this.volume;
      }

      this.sample.preservesPitch = false;
      this.sample.playbackRate = this.pitch;
      this.sample.play();
    }
    /** Set the blocking of the sound (wait period). */

  }, {
    key: "wait",
    value: function wait() {
      // Set the blocking of the sound.
      this.experiment._runner._events._run(this, -1, _system_constants_js__WEBPACK_IMPORTED_MODULE_2__["constants"].RESPONSE_SOUND, []);
    }
  }, {
    key: "applyFilters",
    value: function applyFilters() {
      var nodes = [audioCtx.destination]; // Set volume

      var gainNode = new GainNode(audioCtx);
      gainNode.gain.setValueAtTime(this.volume, audioCtx.currentTime);

      if (this.fade) {
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume, audioCtx.currentTime + this.fade / 1000);
      }

      nodes.unshift(gainNode); // Set panning

      if (this.pan) {
        var pan;
        if (this.pan === 'left') pan = -1;else if (this.pan === 'right') pan = 1;else pan = this.pan;

        try {
          nodes.unshift(new StereoPannerNode(audioCtx, {
            pan: pan
          }));
        } catch (e) {
          console.warn('Unable to apply panning', e);
        }
      } // Connect the filters creating a chain


      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] !== audioCtx.destination) {
          nodes[i].connect(nodes[i + 1]);
        }
      }

      return nodes.shift(0);
    }
  }]);

  return SamplerBackend;
}();



/***/ }),

/***/ "./src/js/osweb/backends/styles.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/backends/styles.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Styles; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/isInteger */ "./node_modules/lodash/isInteger.js");
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isInteger__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_13__);














var colorHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
var colorRGB255 = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i;
var colorRGBPerc = /rgb\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*\)/i;
var colorHSV = /hsv\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*\)/i;
var colorHSL = /hsl\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*\)/i;
var colorLAB = /lab\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*\)/i;
/** Class representing a style container. */

var Styles = /*#__PURE__*/function () {
  /** Styles is a simple class that holds information about the style. */
  function Styles(item) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9___default()(this, Styles);

    this._initConstants(); // Set class private properties.


    if (typeof item === 'undefined') {
      this._background_color = 0x000000;
      this._color = 'white';
      this._fill = false;
      this._font_bold = false;
      this._font_family = 'Arial';
      this._font_italic = false;
      this._font_size = 24;
      this._font_underline = false;
      this._html = false;
      this._penwidth = 1;
    } else {
      this.background_color = item.vars.get('background', true, 0x000000);
      this.color = item.vars.get('foreground', true, 'white');
      this.fill = item.vars.get('fill', true, 'no') === 'yes';
      this.font_bold = item.vars.get('font_bold', true, 'no');
      this.font_family = item.vars.get('font_family', true, 'Arial');
      this.font_italic = item.vars.get('font_italic', true, 'no');
      this.font_size = item.vars.get('font_size', true, 24);
      this.font_underline = item.vars.get('font_underline', true, 'no');
      this.html = item.vars.get('html', true, 'no');
      this.penwidth = item.vars.get('penwidth', true, 1);
    }
  }
  /**
   * Converts a color value to a numeric value for use in PIXI. This should
   * accept all color specifications as described here:
   * - https://osdoc.cogsci.nl/3.3/manual/python/canvas/#colors
   * @param {String|Number|Object} color - The color to convert.
   * @return {Number} - The color value.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10___default()(Styles, [{
    key: "_convertColorValue",
    value: function _convertColorValue(color) {
      var _this$_convertColorVa = this._convertColorValueToRGB(color).map(Math.round),
          _this$_convertColorVa2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_this$_convertColorVa, 3),
          r = _this$_convertColorVa2[0],
          g = _this$_convertColorVa2[1],
          b = _this$_convertColorVa2[2];

      return 65536 * r + 256 * g + b;
    }
    /**
     * Extracts three float numbers from a color based on a regular expression
     * that matches three float numbers.
     * @param {String} color
     * @return {Array<Number>}
     **/

  }, {
    key: "_matchFloats",
    value: function _matchFloats(color, re) {
      var m = color.match(re);
      return [m[1], m[4], m[7]].map(Number);
    }
  }, {
    key: "_convertColorValueToRGB",
    value: function _convertColorValueToRGB(color) {
      if (typeof color === 'string') {
        color = color.toLowerCase();
        var rgb = color_convert__WEBPACK_IMPORTED_MODULE_13___default.a.keyword.rgb(color);
        if (typeof rgb !== 'undefined') return rgb;
        if (colorHex.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_13___default.a.hex.rgb(color);
        if (colorRGB255.test(color) === true) return color.match(colorRGB255).slice(1, 4).map(Number);
        if (colorRGBPerc.test(color) === true) return this._matchFloats(color, colorRGBPerc).map(function (perc) {
          return perc * 2.55;
        });
        if (colorHSV.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_13___default.a.hsv.rgb(this._matchFloats(color, colorHSV));
        if (colorHSL.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_13___default.a.hsl.rgb(this._matchFloats(color, colorHSL));
        if (colorLAB.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_13___default.a.lab.rgb(this._matchFloats(color, colorLAB));
        if (!isNaN(Number(color))) // For single numbers a strings
          color = Number(color);
      }

      if (lodash_isInteger__WEBPACK_IMPORTED_MODULE_11___default()(color)) return [color, color, color];
      if (lodash_isArray__WEBPACK_IMPORTED_MODULE_12___default()(color) && color.length == 3) return color.map(Number);
      throw 'Invalid color specification: ' + color + ' (' + _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_7___default()(color) + ')';
    }
  }, {
    key: "_isInt",

    /**
     * Checks if the passed value is an integer.
     * @param {Number} value -  The value to check.
     * @return {Boolean} - True if passed value is an integer.
     */
    value: function _isInt(value) {
      return lodash_isInteger__WEBPACK_IMPORTED_MODULE_11___default()(value);
    }
    /**
     * Checks if value is possibly specified as 'yes'/'no' or 1/0 instead of
     * true or false (as is done in OS script). Convert 'yes' and 'no' values
     * to booleans
     * @param {Number|String} value - The value to check.
     * @return {Boolean} - The original boolean, or true if value was 'yes'.
     */

  }, {
    key: "_checkVal",
    value: function _checkVal(value) {
      return [true, 'yes', 1, '1'].indexOf(value) !== -1;
    }
    /**
     * Get the background_color value.
     * @return {String} The background_color value.
     */

  }, {
    key: "_initConstants",
    value: function _initConstants() {
      this._DEFAULT_FONTS = {
        sans: 'Droid Sans',
        serif: 'Droid Serif',
        mono: 'Droid Sans Mono',
        'chinese-japanese-korean': 'WenQuanYi Micro Hei',
        arabic: 'Droid Arabic Naskh',
        hebrew: 'Droid Sans Hebrew',
        hindi: 'Lohit Hindi'
      };
    }
  }, {
    key: "rgb",
    get: function get() {
      return this._convertColorValue(this._background_color);
    },
    set: function set(val) {}
  }, {
    key: "background_color",
    get: function get() {
      return this._background_color;
    }
    /**
     * Set the background_color value.
     * @param {Number|String} val - The background_color value to set.
     */
    ,
    set: function set(val) {
      this._background_color = this._convertColorValue(val, 'number');
    }
    /**
     * Get the color value.
     * @return {String} The color value.
     */

  }, {
    key: "color",
    get: function get() {
      return this._color;
    }
    /**
     * Set the color value.
     * @param {Number|String} val - The color value to set.
     */
    ,
    set: function set(val) {
      this._color = this._convertColorValue(val, 'number');
    }
    /**
     * Get the fill value.
     * @return {Boolean} The fill value.
     */

  }, {
    key: "fill",
    get: function get() {
      return this._fill;
    }
    /**
     * Set the fill value.
     * @param {Boolean} val - The fill value to set.
     */
    ,
    set: function set(val) {
      this._fill = [1, '1', true, 'yes'].indexOf(val) !== -1;
    }
    /**
     * Get the font_bold value.
     * @return {Boolean} The font_bold value.
     */

  }, {
    key: "font_bold",
    get: function get() {
      return this._font_bold;
    }
    /**
     * Set the font_bold value.
     * @param {Boolean} val - The font_bold value to set.
     */
    ,
    set: function set(val) {
      this._font_bold = this._checkVal(val);
    }
    /**
     * Get the font_family value.
     * @return {String} The font_family value.
     */

  }, {
    key: "font_family",
    get: function get() {
      return this._font_family;
    }
    /**
     * Set the font_family value.
     * @param {String} val - The font_family value to set.
     */
    ,
    set: function set(val) {
      if (val in this._DEFAULT_FONTS) {
        this._font_family = this._DEFAULT_FONTS[val];
      } else {
        this._font_family = val;
      }
    }
    /**
     * Get the font_italic value.
     * @return {Boolean} The font_italic value.
     */

  }, {
    key: "font_italic",
    get: function get() {
      return this._font_italic;
    }
    /**
     * Set the font_italic value.
     * @param {Boolean} val - The font_bold value to set.
     */
    ,
    set: function set(val) {
      this._font_italic = this._checkVal(val);
    }
    /**
     * Get the font_size value.
     * @return {Number} The font_size value.
     */

  }, {
    key: "font_size",
    get: function get() {
      return this._font_size;
    }
    /**
     * Set the font_size value.
     * @param {Number} val - The font_size value to set.
     */
    ,
    set: function set(val) {
      if (!this._isInt(val)) {
        // remove px part
        this._font_size = Number(val.slice(0, -2));
      } else {
        this._font_size = val;
      }
    }
    /**
     * Get the font_underline value.
     * @return {Boolean} The font_underline value.
     */

  }, {
    key: "font_underline",
    get: function get() {
      return this._font_underline;
    }
    /**
     * Set the font_underline value.
     * @param {Boolean} val - The font_underline value to set.
     */
    ,
    set: function set(val) {
      this._font_underline = this._checkVal(val);
    }
    /**
     * Get the html value.
     * @return {Boolean} The html value.
     */

  }, {
    key: "html",
    get: function get() {
      return this._html;
    }
    /**
     * Set the html value.
     * @param {Boolean} val - The html value to set.
     */
    ,
    set: function set(val) {
      this._html = this._checkVal(val);
    }
    /**
     * Get the penwidth value.
     * @return {Boolean} The penwidth value.
     */

  }, {
    key: "penwidth",
    get: function get() {
      return this._penwidth;
    }
    /**
     * Set the penwidth value.
     * @param {Boolean} val - The penwidth value to set.
     */
    ,
    set: function set(val) {
      if (!this._isInt(val)) {
        this._penwidth = 1;
      }

      this._penwidth = val;
    }
  }]);

  return Styles;
}();



/***/ }),

/***/ "./src/js/osweb/backends/video.js":
/*!****************************************!*\
  !*** ./src/js/osweb/backends/video.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Video; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");




/** Class representing a video. */

var Video = /*#__PURE__*/function () {
  /**
   * Create a video object which controls the video device.
   * @param {Object} experiment - The experiment to which the video belongs.
   * @param {String} src - The video source name.
   */
  function Video(experiment, source) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Video);

    // Set class parameter properties.
    this._experiment = experiment; // Set the class public properties.

    this.audio = true;
    this.duration = 'keypress';
    this.full_screen = false; // Set the class pivate properties.

    this._playing = false;
    this._script = null; // Create the video instance

    if (source !== null) {
      // Set the video object.
      this._video = source.data; // create a video texture from the video.

      this._texture = pixi_js__WEBPACK_IMPORTED_MODULE_2__["Texture"].from(source.data); // create a new Sprite using the video texture (yes it's that easy)

      this._videoSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](this._texture);

      this._video.pause(); // Set the event anchors.


      this._video.onended = this._experiment._runner._events._videoEnded.bind(this);
      this._video.onplay = this._experiment._runner._events._videoPlay.bind(this);
    }
  }
  /** Update the video rendering. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Video, [{
    key: "_update",
    value: function _update() {
      if (this._playing === true) {
        // Update the renderer.
        this._experiment._runner._renderer.render(this._videoSprite); // execute script.


        if (this._script !== null && this._event_handler_always === true) {
          // Start the parser
          this._experiment._runner._pythonParser._run(null, this._script);
        }
      }
    }
    /** Play the actual video. */

  }, {
    key: "play",
    value: function play() {
      // Enable the video playing.
      this._video.play(); // Set the volume


      this._video.volume = this.audio === true ? 1 : 0; // Check if the video must be scaled.

      if (this.full_screen === true) {
        this._videoSprite.width = this._experiment._runner._renderer.width;
        this._videoSprite.height = this._experiment._runner._renderer.height;
      } // Render the first frame.


      this._experiment._runner._renderer.render(this._videoSprite); // Set the play toggle.


      this._playing = true;
    }
    /** Stop playing the video. */

  }, {
    key: "stop",
    value: function stop() {
      // Pause the actual sound.
      this._video.pause();

      this._playing = false;
    }
    /** Set the blocking of the sound. */

  }, {
    key: "wait",
    value: function wait() {
      this._experiment._runner._events._run(-1, _system_constants_js__WEBPACK_IMPORTED_MODULE_3__["constants"].RESPONSE_VIDEO, []);
    }
  }]);

  return Video;
}();



/***/ }),

/***/ "./src/js/osweb/classes/canvas_handler.js":
/*!************************************************!*\
  !*** ./src/js/osweb/classes/canvas_handler.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CanvasHandler; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");


















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * The `Canvas` class is used to present visual stimuli. You generally
 * create a `Canvas` object with the `Canvas()` factory function. Because
 * `Canvas()` is a function, you do *not* need to use `new` when calling it.
 * The JavaScript `Canvas` class mimicks the corresponding Python `Canvas`
 * class.
 * 
 * __Style keywords__ can be passed to all functions that accept `styleArgs`.
 * Style keywords can also be set as properties of the `Canvas` object. For an
 * overview of style keywords, see the
 * [Python `Canvas` documentation](%url:manual/python/canvas%).
 * 
 * __Important:__ JavaScript doesn't support named parameters (or: keywords).
 * Therefore, parameters are passed an `Object` with named properties and
 * default values. Like so:
 *
 * ```js
 * var myCanvas = Canvas()
 * // (correct) pass parameters as an Object ...
 * myCanvas.fixdot({color: 'red'})
 * // (incorrect) ... and *not* as named parameters
 * // myCanvas.fixdot(color='red')
 * myCanvas.show()
 * ```
 *
 * [TOC]
 *
 * @class
 * @name Canvas
 **/

var CanvasHandler = /*#__PURE__*/function () {
  function CanvasHandler(experiment) {
    var styleArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15___default()(this, CanvasHandler);

    this._style = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_17__["default"](experiment);
    this._canvas = new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_18__["default"](experiment);
    this._canvas._styles = this._style;
    Object.assign(this._style, styleArgs);
    this._xc = this._canvas.width / (2 * experiment._scale_x);
    this._yc = this._canvas.height / (2 * experiment._scale_y);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16___default()(CanvasHandler, [{
    key: "_element_style",
    value: function _element_style(styleArgs) {
      if (typeof styleArgs === "undefined") {
        return this._style;
      }

      var style = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_17__["default"]();
      Object.assign(style, this._style);
      Object.assign(style, styleArgs);
      return style;
    }
    /**
     * Draws an arrow. An arrow is a polygon consisting of 7 vertices, with an
     * arrowhead pointing at (ex, ey).
     *
     * @example
     * var myCanvas = Canvas()
     * var w = width / 2
     * var h = height / 2
     * // Important: parameters are passed as an Object
     * myCanvas.arrow({sx: 0, sy: 0, w: w, h: h, head_width:100, body_length:0.5})
     *
     * @param {Object} obj
     * @param {Number} obj.sx=0
     * @param {Number} obj.sy=0
     * @param {Number} obj.ex=50
     * @param {Number} obj.ey=0
     * @param {Number} obj.body_length=0.8
     * @param {Number} obj.body_width=0.5
     * @param {Number} obj.head_width=30
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.arrow
     * @function
     **/

  }, {
    key: "arrow",
    value: function arrow() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$sx = _ref.sx,
          sx = _ref$sx === void 0 ? 0 : _ref$sx,
          _ref$sy = _ref.sy,
          sy = _ref$sy === void 0 ? 0 : _ref$sy,
          _ref$ex = _ref.ex,
          ex = _ref$ex === void 0 ? 50 : _ref$ex,
          _ref$ey = _ref.ey,
          ey = _ref$ey === void 0 ? 0 : _ref$ey,
          _ref$body_length = _ref.body_length,
          body_length = _ref$body_length === void 0 ? 0.8 : _ref$body_length,
          _ref$body_width = _ref.body_width,
          body_width = _ref$body_width === void 0 ? 0.5 : _ref$body_width,
          _ref$head_width = _ref.head_width,
          head_width = _ref$head_width === void 0 ? 30 : _ref$head_width,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref, ["sx", "sy", "ex", "ey", "body_length", "body_width", "head_width"]);

      this._canvas.arrow(sx + this._xc, sy + this._yc, ex + this._xc, ey + this._yc, body_width, body_length, head_width, this._element_style(styleArgs));
    }
    /**
     *	 Clears the canvas with the current background color. Note that it is
     *	 generally faster to use a different canvas for each experimental
     *	 display than to use a single canvas and repeatedly clear and redraw
     *	 it.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.fixdot({color: 'green'})
     * myCanvas.show()
     * // do something
     * myCanvas.clear()
     * myCanvas.fixdot({color: 'red'})
     * myCanvas.show()
     *
     * @param {Object} [styleArgs={}]
     * @name Canvas.clear
     * @function
     **/

  }, {
    key: "clear",
    value: function clear() {
      var styleArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      this._canvas.clear(this._element_style(styleArgs).background_color);
    }
    /**
     * Draws a circle.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.circle({x: 100, y: 100, r: 50, fill: true, color:'red'})
     *
     * @param {Object} obj
     * @param {Number} obj.x=0
     * @param {Number} obj.y=0
     * @param {Number} obj.r=50
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.circle
     * @function
     **/

  }, {
    key: "circle",
    value: function circle() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$x = _ref2.x,
          x = _ref2$x === void 0 ? 0 : _ref2$x,
          _ref2$y = _ref2.y,
          y = _ref2$y === void 0 ? 0 : _ref2$y,
          _ref2$r = _ref2.r,
          r = _ref2$r === void 0 ? 50 : _ref2$r,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref2, ["x", "y", "r"]);

      this._canvas.circle(x + this._xc, y + this._yc, r, this._element_style(styleArgs));
    }
    /**
     * Draws an ellipse.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.ellipse({x: -10, y: -10, w: 20, h: 20, fill:true})
     *
     * @param {Object} obj
     * @param {Number} obj.x=-50
     * @param {Number} obj.y=-25
     * @param {Number} obj.w=100
     * @param {Number} obj.h=50
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.ellipse
     * @function
     **/

  }, {
    key: "ellipse",
    value: function ellipse() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$x = _ref3.x,
          x = _ref3$x === void 0 ? -50 : _ref3$x,
          _ref3$y = _ref3.y,
          y = _ref3$y === void 0 ? -25 : _ref3$y,
          _ref3$w = _ref3.w,
          w = _ref3$w === void 0 ? 100 : _ref3$w,
          _ref3$h = _ref3.h,
          h = _ref3$h === void 0 ? 50 : _ref3$h,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref3, ["x", "y", "w", "h"]);

      this._canvas.ellipse(x + this._xc, y + this._yc, w, h, this._element_style(styleArgs));
    }
    /**
     * Draws a fixation dot. The default style is medium-open.
     * 
     * - 'large-filled' is a filled circle with a 16px radius.
     * - 'medium-filled' is a filled circle with an 8px radius.
     * - 'small-filled' is a filled circle with a 4px radius.
     * - 'large-open' is a filled circle with a 16px radius and a 2px hole.
     * - 'medium-open' is a filled circle with an 8px radius and a 2px hole.
     * - 'small-open' is a filled circle with a 4px radius and a 2px hole.
     * - 'large-cross' is 16px cross.
     * - 'medium-cross' is an 8px cross.
     * - 'small-cross' is a 4px cross.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.fixdot()
     *
     * @param {Object} obj
     * @param {Number} obj.x=0
     * @param {Number} obj.y=0
     * @param {String} obj.style='default'
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.fixdot
     * @function
     **/

  }, {
    key: "fixdot",
    value: function fixdot() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$x = _ref4.x,
          x = _ref4$x === void 0 ? 0 : _ref4$x,
          _ref4$y = _ref4.y,
          y = _ref4$y === void 0 ? 0 : _ref4$y,
          _ref4$style = _ref4.style,
          style = _ref4$style === void 0 ? 'default' : _ref4$style,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref4, ["x", "y", "style"]);

      this._canvas.fixdot(x + this._xc, y + this._yc, style, this._element_style(styleArgs));
    }
    /**
     * Draws a gabor patch.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.gabor({x: 100, y: 100, orient: 45, freq: .05})
     *
     * @param {Object} obj
     * @param {Number} obj.x=0
     * @param {Number} obj.y=0
     * @param {Number} obj.orient=0
     * @param {Number} obj.freq=.1
     * @param {String} obj.env='gaussian'
     * @param {Number} obj.size=96
     * @param {Number} obj.stdev=12
     * @param {Number} obj.phase=0
     * @param {String} obj.col1='white'
     * @param {String} obj.col2='black'
     * @param {String} obj.bgmode='avg'
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.gabor
     * @function
     **/

  }, {
    key: "gabor",
    value: function gabor() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$x = _ref5.x,
          x = _ref5$x === void 0 ? 0 : _ref5$x,
          _ref5$y = _ref5.y,
          y = _ref5$y === void 0 ? 0 : _ref5$y,
          _ref5$orient = _ref5.orient,
          orient = _ref5$orient === void 0 ? 0 : _ref5$orient,
          _ref5$freq = _ref5.freq,
          freq = _ref5$freq === void 0 ? .1 : _ref5$freq,
          _ref5$env = _ref5.env,
          env = _ref5$env === void 0 ? 'gaussian' : _ref5$env,
          _ref5$size = _ref5.size,
          size = _ref5$size === void 0 ? 96 : _ref5$size,
          _ref5$stdev = _ref5.stdev,
          stdev = _ref5$stdev === void 0 ? 12 : _ref5$stdev,
          _ref5$phase = _ref5.phase,
          phase = _ref5$phase === void 0 ? 0 : _ref5$phase,
          _ref5$col = _ref5.col1,
          col1 = _ref5$col === void 0 ? 'white' : _ref5$col,
          _ref5$col2 = _ref5.col2,
          col2 = _ref5$col2 === void 0 ? 'black' : _ref5$col2,
          _ref5$bgmode = _ref5.bgmode,
          bgmode = _ref5$bgmode === void 0 ? 'avg' : _ref5$bgmode;

      this._canvas.gabor(x + this._xc, y + this._yc, orient, freq, env, size, stdev, phase, col1, col2, bgmode);
    }
    /**
     * Draws an image from a file in the file pool.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.image({fname: 'image_in_pool.png'})
     *
     * @param {Object} obj
     * @param {String} obj.fname
     * @param {Boolean} obj.center=true
     * @param {Number} obj.x=0
     * @param {Number} obj.y=0
     * @param {Number} obj.scale=1
     * @param {Number} obj.rotation=0
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.image
     * @function
     **/

  }, {
    key: "image",
    value: function image() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          fname = _ref6.fname,
          _ref6$center = _ref6.center,
          center = _ref6$center === void 0 ? true : _ref6$center,
          _ref6$x = _ref6.x,
          x = _ref6$x === void 0 ? 0 : _ref6$x,
          _ref6$y = _ref6.y,
          y = _ref6$y === void 0 ? 0 : _ref6$y,
          _ref6$scale = _ref6.scale,
          scale = _ref6$scale === void 0 ? 1 : _ref6$scale,
          _ref6$rotation = _ref6.rotation,
          rotation = _ref6$rotation === void 0 ? 0 : _ref6$rotation;

      if (typeof fname === "undefined") {
        throw "fname is a required parameter for Canvas.image()";
      }

      this._canvas.image(fname, center, x + this._xc, y + this._yc, scale, rotation);
    }
    /**
     * Draws a line.
     *
     * @example
     * var myCanvas = Canvas()
     * var ex = width / 2
     * var ey = height / 2
     * myCanvas.line({sx: 0, sy: 0, ex: ex, ey: ey})
     * 
     * @param {Object} obj
     * @param {Number} obj.sx=0
     * @param {Number} obj.sy=0
     * @param {Number} obj.ex=50
     * @param {Number} obj.ey=0
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.line
     * @function
     **/

  }, {
    key: "line",
    value: function line() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$sx = _ref7.sx,
          sx = _ref7$sx === void 0 ? 0 : _ref7$sx,
          _ref7$sy = _ref7.sy,
          sy = _ref7$sy === void 0 ? 0 : _ref7$sy,
          _ref7$ex = _ref7.ex,
          ex = _ref7$ex === void 0 ? 50 : _ref7$ex,
          _ref7$ey = _ref7.ey,
          ey = _ref7$ey === void 0 ? 0 : _ref7$ey,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref7, ["sx", "sy", "ex", "ey"]);

      this._canvas.line(sx + this._xc, sy + this._yc, ex + this._xc, ey + this._yc, this._element_style(styleArgs));
    }
    /**
     * Draws a patch of noise, with an envelope.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.noise_patch({x: 100, y: 100, env: 'circular'})
     *
     * @param {Object} obj
     * @param {Number} obj.x=0
     * @param {Number} obj.y=0
     * @param {String} obj.env='gaussian'
     * @param {Number} obj.size=96
     * @param {Number} obj.stdev=12
     * @param {String} obj.col1='white'
     * @param {String} obj.col2='black'
     * @param {String} obj.bgmode='avg'
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.noise_patch
     * @function
     **/

  }, {
    key: "noise_patch",
    value: function noise_patch() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref8$x = _ref8.x,
          x = _ref8$x === void 0 ? 0 : _ref8$x,
          _ref8$y = _ref8.y,
          y = _ref8$y === void 0 ? 0 : _ref8$y,
          _ref8$env = _ref8.env,
          env = _ref8$env === void 0 ? 'gaussian' : _ref8$env,
          _ref8$size = _ref8.size,
          size = _ref8$size === void 0 ? 96 : _ref8$size,
          _ref8$stdev = _ref8.stdev,
          stdev = _ref8$stdev === void 0 ? 12 : _ref8$stdev,
          _ref8$col = _ref8.col1,
          col1 = _ref8$col === void 0 ? 'white' : _ref8$col,
          _ref8$col2 = _ref8.col2,
          col2 = _ref8$col2 === void 0 ? 'black' : _ref8$col2,
          _ref8$bgmode = _ref8.bgmode,
          bgmode = _ref8$bgmode === void 0 ? 'avg' : _ref8$bgmode;

      this._canvas.noise(x + this._xc, y + this._yc, env, size, stdev, col1, col2, bgmode);
    }
    /**
     * Draws a polygon that defined by a list of vertices. I.e. a shape of
     * points connected by lines.
     *
     * @example
     * var myCanvas = Canvas()
     * var n1 = [0,0]
     * var n2 = [100, 100]
     * var n3 = [0, 100]
     * myCanvas.polygon({vertices: [n1, n2, n3]})
     *
     * @param {Object} obj
     * @param {Array<Array<Number>>} obj.vertices
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.polygon
     * @function
     **/

  }, {
    key: "polygon",
    value: function polygon() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          vertices = _ref9.vertices,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref9, ["vertices"]);

      if (typeof vertices === "undefined") {
        throw "vertices is a required parameter for Canvas.polygon()";
      } // Adjust the coordinates of all vertices


      var v = [];

      var _iterator = _createForOfIteratorHelper(vertices),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_13___default()(_step.value, 2),
              x = _step$value[0],
              y = _step$value[1];

          v.push([x + this._xc, y + this._yc]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._canvas.polygon(v, this._element_style(styleArgs));
    }
    /**
     * Draws a rectangle.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.rect({x: -10, y: -10, w: 20, h: 20, fill:true})
     *
     * @param {Object} obj
     * @param {Number} obj.x=-50
     * @param {Number} obj.y=-25
     * @param {Number} obj.w=100
     * @param {Number} obj.h=50
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.rect
     * @function
     **/

  }, {
    key: "rect",
    value: function rect() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref10$x = _ref10.x,
          x = _ref10$x === void 0 ? -50 : _ref10$x,
          _ref10$y = _ref10.y,
          y = _ref10$y === void 0 ? -25 : _ref10$y,
          _ref10$w = _ref10.w,
          w = _ref10$w === void 0 ? 100 : _ref10$w,
          _ref10$h = _ref10.h,
          h = _ref10$h === void 0 ? 50 : _ref10$h,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref10, ["x", "y", "w", "h"]);

      this._canvas.rect(x + this._xc, y + this._yc, w, h, this._element_style(styleArgs));
    }
    /**
     * Shows, or 'flips', the canvas on the screen.
     *
     * @return {Number} A timestamp of the time at which the canvas appeared on
     *     the screen.
     *
     * @name Canvas.show
     * @function
     **/

  }, {
    key: "show",
    value: function show() {
      return this._canvas.show();
    }
    /**
     * Draws text.
     *
     * @example
     * var myCanvas = Canvas()
     * myCanvas.text({text: 'Some text'})
     *
     * @param {Object} obj
     * @param {String} obj.text
     * @param {Boolean} obj.center=true
     * @param {Number} obj.x=0
     * @param {Number} obj.y=0
     * @param {Object} ..obj.styleArgs={}
     *
     * @name Canvas.text
     * @function
     **/

  }, {
    key: "text",
    value: function text() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _text = _ref11.text,
          _ref11$center = _ref11.center,
          center = _ref11$center === void 0 ? true : _ref11$center,
          _ref11$x = _ref11.x,
          x = _ref11$x === void 0 ? 0 : _ref11$x,
          _ref11$y = _ref11.y,
          y = _ref11$y === void 0 ? 0 : _ref11$y,
          styleArgs = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_14___default()(_ref11, ["text", "center", "x", "y"]);

      if (typeof _text === "undefined") {
        throw "text is a required parameter for Canvas.text()";
      }

      var style = this._element_style(styleArgs);

      this._canvas.text(_text, center, x + this._xc, y + this._yc, style.html, style);
    }
  }, {
    key: "color",
    get: function get() {
      return this._style.color;
    },
    set: function set(val) {
      this._style.color = val;
    }
  }, {
    key: "background_color",
    get: function get() {
      return this._style.background_color;
    },
    set: function set(val) {
      this._style.background_color = val;
    }
  }, {
    key: "fill",
    get: function get() {
      return this._style.fill;
    },
    set: function set(val) {
      this._style.fill = val;
    }
  }, {
    key: "html",
    get: function get() {
      return this._style.html;
    },
    set: function set(val) {
      this._style.html = val;
    }
  }, {
    key: "font_family",
    get: function get() {
      return this._style.font_family;
    },
    set: function set(val) {
      this._style.font_family = val;
    }
  }, {
    key: "font_size",
    get: function get() {
      return this._style.font_size;
    },
    set: function set(val) {
      this._style.font_size = val;
    }
  }, {
    key: "font_italic",
    get: function get() {
      return this._style.font_italic;
    },
    set: function set(val) {
      this._style.font_italic = val;
    }
  }, {
    key: "font_bold",
    get: function get() {
      return this._style.font_bold;
    },
    set: function set(val) {
      this._style.font_bold = val;
    }
  }, {
    key: "font_underline",
    get: function get() {
      return this._style.font_underline;
    },
    set: function set(val) {
      this._style.font_underline = val;
    }
  }]);

  return CanvasHandler;
}();



/***/ }),

/***/ "./src/js/osweb/classes/file_pool_store.js":
/*!*************************************************!*\
  !*** ./src/js/osweb/classes/file_pool_store.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilePoolStore; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




/** Class representing a file pool. */
var FilePoolStore = /*#__PURE__*/function () {
  /**
   * Create a file store object for all stimuli files.
   * @param {Object} runner - The runner to which the file store belongs.
   */
  function FilePoolStore(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FilePoolStore);

    // Create and set private properties.
    this._items = []; // Container for all pool items.

    this._runner = runner; // Parent runner attached to the file pool.
  }
  /** Clear all the items in the store. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FilePoolStore, [{
    key: "_clean_up",
    value: function _clean_up() {
      // Clear the items.
      this._items = [];
    }
    /**
     * General function for adding an item to the pool.
     * @param {Object} item - The item which is added to the pool.
     */

  }, {
    key: "add",
    value: function add(item, new_name) {
      // Check parameter new_name.
      new_name = typeof new_name === 'undefined' ? null : new_name; // Set the new name of the item.

      if (new_name !== null) {
        item.name = new_name;
      } // Add the item to the pool.


      this._items.push(item); // Link the item as property


      this[item.name] = item;
    }
    /**
     * Should return the fallback folder bunt osweb this is not functional.
     * @return {null} - always null due to the nature of osweb.
     */

  }, {
    key: "fallback_folder",
    value: function fallback_folder() {
      // Always returns null because this function is not possible.
      return null;
    }
    /**
     * Create an array with all the files in the store.
     * @return {Array} - An array containing all the files.
     */

  }, {
    key: "files",
    value: function files() {
      // Create a list o keys.
      var files = [];

      for (var i = 0; i < this._items.length; i++) {
        files.push(this._items[i]);
      } // Returns a list of item names.


      return files;
    }
    /**
     * Renames a file in the pool folder.
     * @param {String} old_path - The olod file name.
     * @param {String} new_path - The new file name.
     */

  }, {
    key: "rename",
    value: function rename(old_path, new_path) {
      for (var i = 0; i < this._items.length; i++) {
        // Check for the old_name.
        if (this._items[i].name === old_path) {
          // Set the new property name.
          this[new_path] = this._items[i]; // Remove the old property name.

          delete this[old_path]; // Set the new name.

          this._items[i].name = new_path;
        }
      }
    }
    /**
     * Calculates and returns the total size in bytes of all thje fioles.
     * @return {Number} - The size of all files in bytes.
     */

  }, {
    key: "size",
    value: function size() {
      // Create a list of keys.
      var size = 0;

      for (var i = 0; i < this._items.length; i++) {
        size = size + this._items[i].size;
      } // Returns a list of item names.


      return size;
    }
  }]);

  return FilePoolStore;
}();



/***/ }),

/***/ "./src/js/osweb/classes/item_stack.js":
/*!********************************************!*\
  !*** ./src/js/osweb/classes/item_stack.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemStack; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/** Class representing an item stack. */
var ItemStack = /*#__PURE__*/function () {
  /**
   * Create an stack array for running items.
   * @param {Object} runner - The runner to which the item stack belongs.
   */
  function ItemStack(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ItemStack);

    // Create and set private properties.
    this._items = []; // Container for all items.

    this._runner = runner; // Parent runner attached to the item stack class.
  }
  /** Clear the entire item stack. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ItemStack, [{
    key: "clear",
    value: function clear() {
      // Clears the stack.
      this._items = [];
    }
    /**
     * Push a new item onto the item stack.
     * @param {Object} item - The item to add to the item stack.
     * @param {String} phase - The phase in which the stack exists.
     */

  }, {
    key: "push",
    value: function push(item, phase) {
      // Create the stack item.
      var stackItem = {
        item: item,
        phase: phase
      }; // Push the item onto the stack.

      this._items.push(stackItem);
    }
    /**
     * Pops the last item from the stack.
     * @return {Object} - The last added item from the stack.
     */

  }, {
    key: "pop",
    value: function pop() {
      // Pops the last item from the stack.
      return this._items.pop();
    }
  }]);

  return ItemStack;
}();



/***/ }),

/***/ "./src/js/osweb/classes/item_store.js":
/*!********************************************!*\
  !*** ./src/js/osweb/classes/item_store.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemStore; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");


// This itemClasses variable is a temporary solution. We should think of a simpler
// method of converting string names (e.g. keyboard_response) to the associated
// class names (e.g. KeyboardResponse), without relying on eval.

/** Class representing an item store. */

var ItemStore = /*#__PURE__*/function () {
  /**
   * Create an item store for all OpenSesame items.
   * @param {Object} runner - The runner to which the item store belongs.
   */
  function ItemStore(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ItemStore);

    // Set the class private properties.
    this._items = {}; // All the unique items in the item store.

    this._runner = runner; // Parent runner attached to the item store.
  }
  /** Clear all the items in the store. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ItemStore, [{
    key: "_clean_up",
    value: function _clean_up() {
      // Clear the items.
      this._items = {};
    }
    /**
     * Checks of the classname is defined within the osweb namespace.
     * @param {String} className - name of the class to check.
     * @return {Boolean} - True if the class is valid within the opsweb context.
     */

  }, {
    key: "_isClass",
    value: function _isClass(className) {
      // Return true if the classname is found in the item classes.
      return className in _system_constants_js__WEBPACK_IMPORTED_MODULE_2__["itemClasses"];
    }
    /**
     * Add a new OpenSesame element to a sketchpad item.
     * @param {String} type -type of the element to be created.
     * @param {Object} sketchpad - sketchpad item to which the item belongs.
     * @param {String} script - string definition of the ites.
     * @return {Object} - The item which wass created.
     */

  }, {
    key: "_newElementClass",
    value: function _newElementClass(type, sketchpad, string) {
      // Create the element.
      var element = new _system_constants_js__WEBPACK_IMPORTED_MODULE_2__["itemClasses"][type](sketchpad, string); // Return the element

      return element;
    }
    /**
     * Add a new OpenSesame item to the experiment.
     * @param {String} type -type of the item to be created.
     * @param {Object} experiment - experiment item to which the item belongs.
     * @param {String} name - name of the item to be created.
     * @param {String} script - string definition of the ites.
     * @return {Object} - The item which was created.
     */

  }, {
    key: "_newItemClass",
    value: function _newItemClass(type, experiment, name, script) {
      // Create the element.
      var element = new _system_constants_js__WEBPACK_IMPORTED_MODULE_2__["itemClasses"][type](experiment, name, script); // Set the type of the item.

      element.type = type; // Return the element

      return element;
    }
    /**
     * Add a new OpenSesame widget to the experiment.
     * @param {String} type -type of the widget to be created.
     * @param {Object} form - form to which the widget belongs.
     * @param {String} variables - variabled belonging to the widget.
     * @return {Object} - The widget which was created.
     */

  }, {
    key: "_newWidgetClass",
    value: function _newWidgetClass(type, form, variables) {
      // Create the widget.
      var widget = new _system_constants_js__WEBPACK_IMPORTED_MODULE_2__["itemClasses"][type + '_widget'](form, variables); // Return the element

      return widget;
    }
    /**
     * Executes the prepare and the run phase of an item.
     * @param {String} name - name of the item to prepare and run
     * @param {String} parent - parent of the item.
     */

  }, {
    key: "execute",
    value: function execute(name, parent) {
      // Prepare the item.
      this.prepare(name, parent); // Remove the prepare phase call of the item from the stack

      this._runner._itemStack.pop(); // Run the item.


      this.run(name, parent);
    }
    /**
     * Create an array with all the items in the store.
     * @return {Array} - An array containing all the items.
     */

  }, {
    key: "items",
    value: function items() {
      // Create a list o keys.
      var items = [];

      for (var key in this._items) {
        items.push([key, this._items[key]]);
      } // Returns a list of item names.


      return items;
    }
    /**
     * Create an array with all the names of the items in the store.
     * @return {Array} - An array containing all the names.
     */

  }, {
    key: "keys",
    value: function keys() {
      // Create a list o keys.
      var keys = [];

      for (var key in this._items) {
        keys.push(key);
      } // Returns a list of item names.


      return keys;
    }
    /**
     * Create a new OpenSesame item and add it to the item store.
     * @param {String} type - type of item to add.
     * @param {String} name - unique name of the item to add.
     * @param {String} script - script containing definitions of the item.
     */

  }, {
    key: "newItem",
    value: function newItem(type, name, script) {
      // Check if the element is part of the osweb name space
      if (this._isClass(type) === true) {
        // Add the new item as property of items.
        this._items[name] = this._newItemClass(type, this._runner._experiment, name, script);
        return this._items[name];
      } else {
        // Unknown class definition, show error message.
        this._runner._debugger.addError('The item "' + type + '" is not yet supported by osweb', {
          notify: true,
          url: 'https://osdoc.cogsci.nl/manual/osweb/osweb/#supported-functionality'
        });

        this._runner.exit();
      }
    }
    /**
     * Executes the prepare phase of an item, and updates the item stack.
     * @param {String} name - name of the item to prepare.
     * @param {String} parent - parent of the item.
     */

  }, {
    key: "prepare",
    value: function prepare(name, parent) {
      // Add item to the stack.
      this._runner._itemStack.push(name, 'prepare'); // Prepare the item.


      this._items[name]._parent = parent;

      this._items[name].prepare();
    }
    /**
     * Executes the run phase of an item, and updates the item stack.
     * @param {String} name - name of the item to run.
     * @param {String} pParent - parent of the item.
     */

  }, {
    key: "run",
    value: function run(name, parent) {
      // Set the current and its parent item.
      this._runner._events._currentItem = this._items[name];
      this._runner._events._currentItem._parent = parent; // Executes the run phase of an item, and updates the item stack.

      this._runner._itemStack.push(name, 'run');

      this._items[name].run();
    }
    /**
     * Create a valid name for an item within the OpenSesame context.
     * @param {String} itemType - type of the item for which a name must be build.
     * @param {String} suggestion - An suggestion how to build up the name.
     * @return {String} - A valid string name for the given item.
     */

  }, {
    key: "valid_name",
    value: function valid_name(itemType, suggestion) {
      // Check the optional parameters.
      suggestion = typeof suggestion === 'undefined' ? null : suggestion;
      var name;

      if (suggestion === null) {
        name = 'new_' + itemType;
      } else {
        name = this._runner._experiment.syntax.sanitize(suggestion, true, false);
      } // Create a unique name.


      var i = 1;
      var uniqueName = name;

      while (Object.prototype.hasOwnProperty.call(this._items, uniqueName) === true) {
        uniqueName = name + '_' + String(i);
        i++;
      } // Return function result


      return uniqueName;
    }
    /**
     * Create an array with all the values (items) in the store.
     * @return {Array} - An array containing all the items.
     */

  }, {
    key: "values",
    value: function values() {
      // Create a list o keys.
      var values = [];

      for (var key in this._items) {
        values.push(this._items[key]);
      } // Returns a list of item names.


      return values;
    }
  }]);

  return ItemStore;
}();



/***/ }),

/***/ "./src/js/osweb/classes/javascript_workspace.js":
/*!******************************************************!*\
  !*** ./src/js/osweb/classes/javascript_workspace.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JavaScriptWorkspace; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_javascript_workspace_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/javascript_workspace_api */ "./src/js/osweb/classes/javascript_workspace_api.js");
/* harmony import */ var _classes_canvas_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../classes/canvas_handler */ "./src/js/osweb/classes/canvas_handler.js");
/* harmony import */ var _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../classes/var_store_handler */ "./src/js/osweb/classes/var_store_handler.js");
/* harmony import */ var random_ext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! random-ext */ "./node_modules/random-ext/index.js");
/* harmony import */ var random_ext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(random_ext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! csv-parse/lib/sync */ "./node_modules/csv-parse/lib/sync.js");
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pythonic */ "./node_modules/pythonic/index.js");
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pythonic__WEBPACK_IMPORTED_MODULE_9__);










/**
 * A workspace for executing inline JavaScript code. For now, the workspace is
 * not persistent, and only exposes the vars object.
 */

var JavaScriptWorkspace = /*#__PURE__*/function () {
  /**
   * Create a JavaScript workspace.
   * @param {Object} experiment - The experiment item to which the item belongs.
   */
  function JavaScriptWorkspace(experiment) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, JavaScriptWorkspace);

    this.experiment = experiment;
    this._script_container = document.createElement('script');
    this._script_element = null;
    this._initialized = false;
    document.body.appendChild(this._script_container);
  }
  /**
   * Initiales the workspace by making a number of functions, objects, and
   * classes available. The window object serves as the scope for the 
   * workspace.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(JavaScriptWorkspace, [{
    key: "_init",
    value: function _init() {
      this._initialized = true;
      window.vars = new Proxy(this.experiment.vars, new _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_5__["default"]());
      window.range = pythonic__WEBPACK_IMPORTED_MODULE_9__["range"];
      window.enumerate = pythonic__WEBPACK_IMPORTED_MODULE_9__["enumerate"];
      window.items = pythonic__WEBPACK_IMPORTED_MODULE_9__["items"];
      window.zip = pythonic__WEBPACK_IMPORTED_MODULE_9__["zip"];
      window.zipLongest = pythonic__WEBPACK_IMPORTED_MODULE_9__["zipLongest"];
      window.random = random_ext__WEBPACK_IMPORTED_MODULE_6___default.a;
      window.convert = color_convert__WEBPACK_IMPORTED_MODULE_7___default.a;
      window.csvParse = csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8___default.a;

      window.Canvas = function () {
        var styleArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return new _classes_canvas_handler__WEBPACK_IMPORTED_MODULE_4__["default"](runner._experiment, styleArgs);
      };

      window.exp = runner._experiment;
      window.pool = runner._pool;
      window.persistent = {};
      var api = new _classes_javascript_workspace_api__WEBPACK_IMPORTED_MODULE_3__["default"](runner._experiment);
      window.reset_feedback = api.reset_feedback.bind(api);
      window.set_subject_nr = api.set_subject_nr.bind(api);
      window.sometimes = api.sometimes.bind(api);
      window.xy_from_polar = api.xy_from_polar.bind(api);
      window.xy_to_polar = api.xy_to_polar.bind(api);
      window.xy_distance = api.xy_distance.bind(api);
      window.xy_circle = api.xy_circle.bind(api);
      window.xy_grid = api.xy_grid.bind(api);
      window.xy_random = api.xy_random.bind(api);
      window._workspace = this;
    }
    /**
     * Evaluates JavaScript code in the workspace and returns the result. This is
     * for evaluating single-line expressions such as in run-if statements.
     * @param {String} js - JavaScript code to execute
     * @returns {Object} - Return value
     */

  }, {
    key: "_eval",
    value: function _eval(js) {
      if (!this._initialized) {
        this._init();

        return this._eval(js);
      }

      if (this._script_element !== null) this._script_container.removeChild(this._script_element);
      this.current_script = js;
      this._script_element = document.createElement('script');
      this._script_element.innerHTML = "_workspace._result = ".concat(js);

      this._script_container.appendChild(this._script_element);

      this.current_script = null;
      return this._result;
    }
    /**
     * Executes JavaScript code in the workspace. This is for executing longer
     * chunks of code that do not evaluate to a single value, such as 
     * inline_javascript.
     * @param {String} js - JavaScript code to execute
     */

  }, {
    key: "exec",
    value: function exec(js) {
      if (!this._initialized) {
        this._init();

        return this.exec(js);
      }

      if (this._script_element !== null) this._script_container.removeChild(this._script_element);
      this.current_script = js;
      this._script_element = document.createElement('script');
      this._script_element.innerHTML = js;

      this._script_container.appendChild(this._script_element);

      this.current_script = null;
    }
  }]);

  return JavaScriptWorkspace;
}();



/***/ }),

/***/ "./src/js/osweb/classes/javascript_workspace_api.js":
/*!**********************************************************!*\
  !*** ./src/js/osweb/classes/javascript_workspace_api.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JavaScriptWorkspaceAPI; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pythonic */ "./node_modules/pythonic/index.js");
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(pythonic__WEBPACK_IMPORTED_MODULE_15__);
















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Provides common functions based on the Python API.
 **/

var JavaScriptWorkspaceAPI = /*#__PURE__*/function () {
  function JavaScriptWorkspaceAPI(experiment) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default()(this, JavaScriptWorkspaceAPI);

    this._experiment = experiment;
  }
  /**
   * Resets all feedback variables to their initial state.
   *
   * @example
   * reset_feedback()
   **/


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default()(JavaScriptWorkspaceAPI, [{
    key: "reset_feedback",
    value: function reset_feedback() {
      this._experiment.reset_feedback();
    }
    /**
     * Sets the subject number and parity (even/ odd). This function is called
     * automatically when an experiment is started, so you only need to call it
     * yourself if you overwrite the subject number that was specified when the
     * experiment was launched.
     *
     * @param {Number} nr The subject number
     *
     * @example
     * set_subject_nr(1)
     * console.log('Subject nr = ' + subject_nr)
     * console.log('Subject parity = ' + subject_parity)
     **/

  }, {
    key: "set_subject_nr",
    value: function set_subject_nr(nr) {
      this._experiment.set_subject(nr);
    }
    /**
     * Returns true with a certain probability. (For more advanced randomization,
     * use the `random-ext` package, which is available as `random`.)
     * 
     * @param {Number} [p=.5] The probability of returning true
     *
     * @example
     * if (sometimes()) {
     *   console.log('Sometimes you win')
     * } else {
     *   console.log('Sometimes you lose')
     * }
     **/

  }, {
    key: "sometimes",
    value: function sometimes() {
      var p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .5;
      if (typeof p !== "number" || p < 0 || p > 1) throw "p should be a numeric value between 0 and 1";
      return Math.random() < p;
    }
    /**
     * Converts polar coordinates (distance, angle) to Cartesian coordinates
     * (x, y).
     *
     * @param {Number} rho The radial coordinate, also distance or eccentricity.
     * @param {Number} phi The angular coordinate. This reflects a clockwise
     *     rotation in degrees (i.e. not radians), where 0 is straight right.
     * @param {Array<Number>} [pole=[0, 0]] The reference point.
     * @return {Array<Number>} An [x, y] array.
     *
     * @example
     * // ECMA 5.1
     * var xy1 = xy_from_polar(100, 45)
     * var xy2 = xy_from_polar(100, -45)
     * var c = Canvas()
     * c.line({sx: xy1[0], sy: xy1[1], ex: -xy1[0], ey: -xy1[1]})
     * c.line({sx: xy2[0], sy: xy2[1], ex: -xy2[0], ey: -xy2[1]})
     * c.show()
     * // ECMA 6
     * let [x1, y1] = xy_from_polar(100, 45)
     * let [x2, y2] = xy_from_polar(100, -45)
     * let c = Canvas()
     * c.line({sx: x1, sy: y1, ex: -x1, ey: -y1})
     * c.line({sx: x2, sy: y2, ex: -x2, ey: -y2})
     * c.show()
     **/

  }, {
    key: "xy_from_polar",
    value: function xy_from_polar(rho, phi) {
      var pole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
      if (typeof rho !== "number") throw "rho should be numeric in xy_from_polar()";
      if (typeof phi !== "number") throw "phi should be numeric in xy_from_polar()";
      phi = this._radians(phi);

      var _this$_parse_pole = this._parse_pole(pole),
          _this$_parse_pole2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(_this$_parse_pole, 2),
          ox = _this$_parse_pole2[0],
          oy = _this$_parse_pole2[1];

      var x = rho * Math.cos(phi) + ox;
      var y = rho * Math.sin(phi) + oy;
      return [x, y];
    }
    /**
     * Converts Cartesian coordinates (x, y) to polar coordinates (distance,
     * angle).
     *
     * @param {Number} x The X coordinate.
     * @param {Number} y The Y coordinate
     * @param {Array<Number>} [pole=[0, 0]] The reference point.
     * @return {Array<Number>} An [rho, phi] array. Here, `rho` is the radial
     *     coordinate, also distance or eccentricity. `phi` is the angular
     *     coordinate in degrees (i.e. not radians), and reflects a
     *     counterclockwise rotation, where 0 is straight right.
     *
     * @example
     * // ECMA 5.1 (browser + desktop)
     * var rho_phi = xy_to_polar(100, 100)
     * var rho = rho_phi[0]
     * var phi = rho_phi[1]
     * // ECMA 6 (browser only)
     * let [rho, phi] = xy_to_polar(100, 100)
     **/

  }, {
    key: "xy_to_polar",
    value: function xy_to_polar(x, y) {
      var pole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
      if (typeof x !== "number") throw "x should be numeric in xy_to_polar()";
      if (typeof y !== "number") throw "y should be numeric in xy_to_polar()";

      var _this$_parse_pole3 = this._parse_pole(pole),
          _this$_parse_pole4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(_this$_parse_pole3, 2),
          ox = _this$_parse_pole4[0],
          oy = _this$_parse_pole4[1];

      var dx = x - ox;
      var dy = y - oy;
      var rho = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

      var phi = this._degrees(Math.atan2(dy, dx));

      return [rho, phi];
    }
    /**
     * Gives the distance between two points.
     *
     * @param {Number} x1 The x coordinate of the first point.
     * @param {Number} y1 The y coordinate of the first point.
     * @param {Number} x2 The x coordinate of the second point.
     * @param {Number} y2 The y coordinate of the second point.
     * @return {Number} The distance between the two points.
     **/

  }, {
    key: "xy_distance",
    value: function xy_distance(x1, y1, x2, y2) {
      if (typeof x1 !== "number" || typeof y1 !== "number" || typeof x2 !== "number" || typeof y2 !== "number") throw "Coordinates should be numeric in xy_distance()";
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    /**
     * Generates a list of points (x,y coordinates) in a circle. This can be
     * used to draw stimuli in a circular arrangement.
     *
     * @param {Number} n The number of x,y coordinates to generate.
     * @param {Number} rho The radial coordinate, also distance or eccentricity,
     *     of the first point.
     * @param {Number} [phi0=0] The angular coordinate for the first coordinate.
     *     This is a counterclockwise rotation in degrees (i.e. not radians),
     *     where 0 is straight right.
     * @param {Array<Number>} [pole=[0, 0]] The reference point.
     * @return {Array<Array<Number>>} An array of [x,y] coordinate arrays.
     *
     * @example
     * // Draw 8 rectangles around a central fixation dot
     * // ECMA 5.1 (browser + desktop)
     * var c = Canvas()
     * c.fixdot()
     * var points = xy_circle(8, 100)
     * for (var i in points) {
     *   var x = points[i][0]
     *   var y = points[i][1]
     *   c.rect({x: x - 10, y: y - 10, w: 20, h: 20})
     * }
     * c.show()
     * // ECMA 6 (browser only)
     * let c = Canvas()
     * c.fixdot()
     * for (let [x, y] of xy_circle(8, 100)) {
     *   c.rect({x: x - 10, y: y - 10, w: 20, h: 20})
     * }
     * c.show()
     **/

  }, {
    key: "xy_circle",
    value: function xy_circle(n, rho) {
      var phi0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var pole = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0];
      if (typeof n !== "number" || n < 0) throw "n should be a non-negative integer in xy_circle()";
      if (typeof rho !== "number" || typeof phi0 !== "number") throw "rho and phi0 should be numeric in xy_circle()";
      var a = [];

      var _iterator = _createForOfIteratorHelper(Object(pythonic__WEBPACK_IMPORTED_MODULE_15__["range"])(n)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var i = _step.value;
          a.push(this.xy_from_polar(rho, phi0, pole));
          phi0 += 360 / n;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return a;
    }
    /**
     * Generates a list of points (x,y coordinates) in a grid. This can be used
     * to draw stimuli in a grid arrangement.
     *
     * @param {Number|Array<Number>} n A number that indicates the number of
     *     columns and rows, so that `n=2` indicates a 2x2 grid, or a [n_col,
     *     n_row] array, so that `n=[2,3]` indicates a 2x3 grid.
     * @param {Number|Array<Number>} spacing A numeric value that indicates the
     *     spacing between cells, or a [col_spacing, row_spacing] array.
     * @param {Array<Number>} [pole=[0, 0]] The reference point.
     * @return {Array<Array<Number>>} An array of [x,y] coordinate arrays.
     *
     * @example
     * // Draw a 4x4 grid of rectangles
     * // ECMA 5 (desktop + browser)
     * var c = Canvas()
     * c.fixdot()
     * var points = xy_grid(4, 100)
     * for (var i in points) {
     *   var x = points[i][0]
     *   var y = points[i][1]
     *   c.rect({x: x - 10, y: y - 10, w: 20, h: 20})
     * }
     * c.show()
     * // ECMA 6 (browser only)
     * let c = Canvas()
     * c.fixdot()
     * for (let [x, y] of xy_grid(4, 100)) {
     *   c.rect({x: x-10, y: y-10, w: 20, h: 20})
     * }
     * c.show()
     **/

  }, {
    key: "xy_grid",
    value: function xy_grid(n, spacing) {
      var pole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
      // Parse and validate the n
      var n_err_msg = "n should be a single non-negative number, or an array of two non-negative numbers in xy_grid()";
      var n_col;
      var n_row;

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11___default()(n) === "object") {
        if (n.length !== 2) throw n_err_msg[(n_col, n_row)] = n;
      } else {
        n_col = n;
        n_row = n;
      }

      if (typeof n_col !== "number" || typeof n_row !== "number") throw n_err_msg; // Parse and validate the spacing

      var spacing_err_msg = "spacing should be a single non-negative number, or an array of two non-negative numbers xy_grid()";
      var s_col;
      var s_row;

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_11___default()(spacing) === "object") {
        if (spacing.length !== 2) throw spacing_err_msg[(s_col, s_row)] = spacing;
      } else {
        s_col = spacing;
        s_row = spacing;
      }

      if (typeof s_col !== "number" || typeof s_row !== "number") throw spacing_err_msg; // Generate the grid

      var _this$_parse_pole5 = this._parse_pole(pole),
          _this$_parse_pole6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(_this$_parse_pole5, 2),
          ox = _this$_parse_pole6[0],
          oy = _this$_parse_pole6[1];

      var a = [];
      var x;
      var y;

      var _iterator2 = _createForOfIteratorHelper(Object(pythonic__WEBPACK_IMPORTED_MODULE_15__["range"])(n_row)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;
          y = (row - (n_row - 1) / 2) * s_row + oy;

          var _iterator3 = _createForOfIteratorHelper(Object(pythonic__WEBPACK_IMPORTED_MODULE_15__["range"])(n_col)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var col = _step3.value;
              x = (col - (n_col - 1) / 2) * s_col + ox;
              a.push([x, y]);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return a;
    }
    /**
     * Generates a list of random points (x,y coordinates) with a minimum
     * spacing between each pair of points. This function will throw an error
     * when the coordinate list cannot be generated, typically because there are
     * too many points, the min_dist is set too high, or the width or height are
     * set too low.
     *
     * @param {Number} n The number of points to generate.
     * @param {Number} width The width of the field with random points.
     * @param {Number} height The height of the field with random points.
     * @param {Number} [min_dist=0] The minimum distance between each point.
     * @param {Array<Number>} [pole=[0, 0]] The reference point.
     * @return {Array<Array<Number>>} An array of [x,y] coordinate arrays.
     *
     * @example
     * // Draw a 50 rectangles in a random grid
     * // ECMA 5 (desktop + browser)
     * var c = Canvas()
     * c.fixdot()
     * var points = xy_random(50, 500, 500, 40)
     * for (var i in points) {
     *   var x = points[i][0]
     *   var y = points[i][1]
     *   c.rect({x: x - 10, y: y - 10, w: 20, h: 20})
     * }
     * c.show()   
     * // ECMA 6 (browser only)
     * let c = Canvas()
     * c.fixdot()
     * for (let [x, y] of xy_random(50, 500, 500, 40)) {
     *   c.rect({x: x-10, y: y-10, w: 20, h: 20})
     * }
     * c.show()
     **/

  }, {
    key: "xy_random",
    value: function xy_random(n, width, height) {
      var min_dist = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var pole = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0, 0];
      if (typeof n !== "number" || n < 0) throw "n should be a non-negative number in xy_circle()";
      if (typeof min_dist !== "number" || n < 0) throw "min_dist should be a non-negative number in xy_circle()";
      if (typeof width !== "number" || typeof height !== "number") throw "width and height should be numeric in xy_circle()";

      var _this$_parse_pole7 = this._parse_pole(pole),
          _this$_parse_pole8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(_this$_parse_pole7, 2),
          ox = _this$_parse_pole8[0],
          oy = _this$_parse_pole8[1];

      var max_try = 1000;
      var a, i, t2, x1, y1, x2, y2, too_close;

      var _iterator4 = _createForOfIteratorHelper(Object(pythonic__WEBPACK_IMPORTED_MODULE_15__["range"])(max_try)),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var t1 = _step4.value;
          a = [];

          var _iterator5 = _createForOfIteratorHelper(Object(pythonic__WEBPACK_IMPORTED_MODULE_15__["range"])(n)),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              i = _step5.value;

              // A loop for trying to find a single new point
              var _iterator6 = _createForOfIteratorHelper(Object(pythonic__WEBPACK_IMPORTED_MODULE_15__["range"])(max_try)),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  t2 = _step6.value;
                  // Generate a point and check if it's not too close to the other
                  // points so far
                  x1 = (Math.random() - .5) * width + ox;
                  y1 = (Math.random() - .5) * height + oy;
                  too_close = false;

                  var _iterator7 = _createForOfIteratorHelper(a),
                      _step7;

                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      var _step7$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(_step7.value, 2);

                      x2 = _step7$value[0];
                      y2 = _step7$value[1];

                      if (this.xy_distance(x1, y1, x2, y2) < min_dist) {
                        too_close = true;
                        break;
                      }
                    } // Add the point and the break the loop for finding a single point

                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }

                  if (!too_close) {
                    a.push([x1, y1]);
                    break;
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            } // If the array is complete, return it. If not, the outer for loop will
            // try again until max_try is reached

          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (a.length === n) return a;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      throw "Failed to generate random coordinates in xy_random()";
    }
  }, {
    key: "_radians",
    value: function _radians(a) {
      return a / 360 * 2 * Math.PI;
    }
  }, {
    key: "_degrees",
    value: function _degrees(a) {
      return a / (2 * Math.PI) * 360;
    }
  }, {
    key: "_parse_pole",
    value: function _parse_pole(pole) {
      if (pole.length !== 2) throw "pole should be an array of two numeric values";

      var _pole = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_12___default()(pole, 2),
          x = _pole[0],
          y = _pole[1];

      if (typeof x !== "number" || typeof y !== "number") throw "pole should be an array of two numeric values";
      return [x, y];
    }
  }]);

  return JavaScriptWorkspaceAPI;
}();



/***/ }),

/***/ "./src/js/osweb/classes/python_workspace.js":
/*!**************************************************!*\
  !*** ./src/js/osweb/classes/python_workspace.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PythonWorkspace; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isBoolean */ "./node_modules/lodash/isBoolean.js");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2__);




/** Class representing a python workspace. */
var PythonWorkspace = /*#__PURE__*/function () {
  /**
   * Create a python workspace object.
   * @param {Object} runner - The runner to which the python workspace belongs.
   */
  function PythonWorkspace(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PythonWorkspace);

    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the python workspace class.
  }
  /**
   * Evaluate an expression within osweb.
   * @param {Boolean|Object|String} bytecode - The expression to evaluate.
   * @return {Boolean|Number|Object|String} - The result of the evaluated expression.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PythonWorkspace, [{
    key: "_eval",
    value: function _eval(bytecode) {
      // Check wich type of expression must be evaled.
      if (lodash_isBoolean__WEBPACK_IMPORTED_MODULE_2___default()(bytecode)) {
        return bytecode;
      } else if (typeof bytecode === 'string') {
        // Open sesame script, first check for parameter values.
        bytecode = this._runner._syntax.eval_text(bytecode, null, true); // Evaluate the expression.

        var evalString = this._runner._syntax.remove_quotes(bytecode);

        if (evalString === 'always') {
          return true;
        } else if (evalString === 'never') {
          return false;
        } else {
          // eslint-disable-next-line no-eval
          return eval(evalString);
        }
      } else {
        // Python script, run the internal Python interpreter.
        return this._runner._pythonParser._run_statement(bytecode);
      }
    }
  }]);

  return PythonWorkspace;
}();



/***/ }),

/***/ "./src/js/osweb/classes/syntax.js":
/*!****************************************!*\
  !*** ./src/js/osweb/classes/syntax.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Syntax; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.is-nan */ "./node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_31__);

































function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/** Class representing a syntax checker. */
var Syntax = /*#__PURE__*/function () {
  /**
   * Create a syntax checker within OpenSesame.
   * @param {Object} runner - The runner to which the syntax checker belongs.
   */
  function Syntax(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_26___default()(this, Syntax);

    // Create and set private properties.
    this._runner = runner; // Parent runner attached to the syntax class.

    this.isNumber = lodash_isNumber__WEBPACK_IMPORTED_MODULE_31___default.a; // attach lodash function to class;
  }
  /**
   * Converts a string to a float or integer if possible.
   * @param {String|Number} value -The variable to convert to a number.
   * @return {String|Number} - An number or float if variable could be converted, original value otherwise.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_27___default()(Syntax, [{
    key: "convert_if_numeric",
    value: function convert_if_numeric(value) {
      if (value === '') return value;
      var result = Number(value);
      return Number.isNaN(result) ? value : result;
    }
    /**
     * Counts the quotes occuring inside the provided string.
     * @param {String} line - The string line to count the quotes in.
     * @return {Number} - The number of quotes counted.
     */

  }, {
    key: "count_quotes",
    value: function count_quotes(line) {
      var res = 0;
      var in_entity = false;

      for (var i = 0; i < line.length; i++) {
        if (line[i] === '\\' && !in_entity || in_entity) {
          // reverse the flag
          in_entity = !in_entity;
        } else if (line[i] === '"' && !in_entity) {
          // an unescaped "
          res += 1;
        }
      }

      return res;
    }
    /**
     * Evaluate a given text with optional variable definitions.
     * @param {Boolean|Number|Object|String} txt - The text to evaluate.
     * @param {Object} vars - The variables used for evaluation.
     * @param {Boolean} addQuotes - The add quotes toggle.
     * @return {Boolean|Number|Object|String} - The result of the evaluated text.
     */

  }, {
    key: "eval_text",
    value: function eval_text(text, vars) {
      var _this = this;

      var addQuotes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // if pTxt is an object then it is a parsed python expression.
      if (lodash_isObject__WEBPACK_IMPORTED_MODULE_29___default()(text)) return this._runner._pythonParser._run_statement(text); // if pTxt is already a number simply return it

      if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_31___default()(text)) return text; // Try to convert text to a number. If this succeeds return it.

      if (text !== '' && !isNaN(lodash_toNumber__WEBPACK_IMPORTED_MODULE_30___default()(text))) return lodash_toNumber__WEBPACK_IMPORTED_MODULE_30___default()(text); // Check if the text contains template literals. If so, we evaluate these.
      // This is the preferred syntax.

      if (text.includes('${')) return this._runner._experiment._javascriptWorkspace._eval("`".concat(text, "`"));
      text = this.escapeBrackets(text); // First, parse the regular variables. These should be parsed recursively
      // to allow for [[nested]variables].

      var reNormal = /\[(?!=)(\w+?)\]/g;

      while (text.search(reNormal) >= 0) {
        text = text.replace(reNormal, function (match, content, offset, string) {
          content = _this.unescapeBrackets(content);
          var value;

          try {
            if (typeof vars === 'undefined' || vars === null || typeof vars[content] === 'undefined') {
              value = _this._runner._experiment.vars.get(content, null, false);
            } else {
              value = vars.get(content, null, false);
            } // Value could still be an expression, so evaluate again


            if (typeof value === 'undefined') {
              throw new ReferenceError("Variable '".concat(content, "' not present in var store"));
            }

            if (lodash_isString__WEBPACK_IMPORTED_MODULE_28___default()(value)) {
              if (value !== '') {
                value = _this.eval_text(value, vars, addQuotes);
              }
            }
          } catch (err) {
            _this._runner._debugger.addError("Could not resolve variable '".concat(content, "': ").concat(err.message));

            throw err;
          }

          if (addQuotes === true) {
            // Temporary hack for string types.
            return lodash_isString__WEBPACK_IMPORTED_MODULE_28___default()(value) ? "\"".concat(value, "\"") : value;
          }

          return value;
        });
      } // Next, parse the inline-Python defintions. Those should only be parsed
      // once, not recursively, because they may contain literal [brackets]


      var rePython = /\[=(.+?)\]/g;
      text = text.replace(rePython, function (match, content, offset, string) {
        // Check if contents of [] start with an =. In this case they should be
        // evaluated as a Python statement
        content = _this.unescapeBrackets(content);

        var ast = _this._runner._pythonParser._parse(content);

        return _this._runner._pythonParser._run_statement(ast);
      }); // Try to convert the result to a number again. If this succeeds return it.

      if (text !== '') {
        var nr = lodash_toNumber__WEBPACK_IMPORTED_MODULE_30___default()(text);

        if (!isNaN(nr)) return nr;
      } // Check if content has additional quotes


      return this.strip_slashes(this.unescapeBrackets(text));
    }
    /**
     * Wraps and escapes a text so that it can safely be embedded in a
          command string. For example:
          He said: "hi"
          would become:
          "He said: \"hi\""
     * @param  {string} s The string to wrap
     * @return {string}   The wrapped string
     */

  }, {
    key: "safe_wrap",
    value: function safe_wrap(s) {
      // If s is a number, return untouched.
      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_31___default()(s)) {
        // see if there are any non-alphanumeric characters.
        // Wrap the value in quotes if so.
        if (/[^a-z0-9_]/i.test(s)) {
          s = '"' + this.add_slashes(s) + '"';
        }
      } else {
        s = Number(s);
      }

      return s;
    }
    /**
     * Add escape slashes to the given string
     * @param  {string} str The string to escape.
     * @return {string}     The escaped string.
     */

  }, {
    key: "add_slashes",
    value: function add_slashes(str) {
      return str.replace(/\\/g, '\\\\') // eslint-disable-next-line no-control-regex
      .replace(/\u0008/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/'/g, '\\\'').replace(/"/g, '\\"');
    }
    /**
     * Strip escape slashes from the given string.
     * @param {String} line - The string to strip from escape backslashes
     * @return {String} - The stripped string.
     */

  }, {
    key: "strip_slashes",
    value: function strip_slashes(line) {
      // Negative lookbehinds require ECMA2018, therefore we fall
      // back to a more clunky technique
      // return line.replace(/(?<!\\)\\(?=['"\\])/mg, '')
      return line.replace(/\\(?=['"])/mg, '').replace(/\\\\/mg, '\\');
    }
    /**
     * Removes tab indentation from a script, if all lines are indented by a
     * single tab.
     * @param {String} script - A script
     * @return {String} - A dedented script
     */

  }, {
    key: "dedent",
    value: function dedent(script) {
      var lines = script.split('\n');
      var dedented = [];

      var _iterator = _createForOfIteratorHelper(lines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var line = _step.value;

          if (line[0] !== '\t') {
            return script;
          }

          dedented.push(line.slice(1));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return dedented.join('\n');
    }
    /**
     * Extracts all multineline variable definitions from an OpenSesame script
     * @param {String} script - The OpenSesame script of an item
     * @return {Array} - An array of key, value mappings
     */

  }, {
    key: "parse_multiline_vars",
    value: function parse_multiline_vars(script) {
      var pattern = /__([0-9A-Z_a-z]+)__\n([\s\S]*?)\n__end__/gm;
      var match;
      var vars = [];

      while ((match = pattern.exec(script)) !== null) {
        vars[match[1]] = match[2];
      }

      return vars;
    }
    /**
     * Parses an instruction line of OpenSesame script
     * @param {String} line - The line to parse
     * @return {Array} - An array with command, list of arguments and an object with keyword arguments.
     */

  }, {
    key: "parse_cmd",
    value: function parse_cmd(line) {
      // Check if quoted strings are properly closed.
      if (this.count_quotes(line) % 2 !== 0) {
        // Unequal number of quotes detected. Can't be right.
        this._runner._debugger.addError('Invalid script definition, parsing error: ' + " '" + line + "'");
      } // Split the string line.


      var tokens = this.split(line);
      var cmd = tokens.shift();
      var args = [];
      var kwargs = {};

      for (var i = 0; i < tokens.length; i++) {
        var value = tokens[i]; // Monster regex, splits into key/value pair.

        var parsed = value.split(/(?:("[^"\\]*(?:\\.[^"\\]*)*"))|(?:(\w+)=(?:(?:(-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)|(\w+))|("[^"\\]*(?:\\.[^"\\]*)*")))/gm).filter(Boolean); // This is a horrifying hack to deal with the fact that the regular
        // expression above is not unicode-safe. This means that a single
        // unquoted word is not seen as a word when it doesn't consist of ascii
        // characters (e.g. text=λάθος). See also:
        // - https://github.com/open-cogsci/osweb/issues/49

        if (parsed.length === 1 && parsed[0].startsWith('text=')) {
          parsed = ['text', parsed[0].slice(5)];
        } // parsed will have length 1 if the variable has no keyword, and will be
        // of length 2 (split over the = symbol) if the variable had a keyword


        if (parsed.length < 2) {
          args.push(this.convert_if_numeric(this.sanitize(parsed[0])));
        } else {
          kwargs[parsed[0]] = this.convert_if_numeric(this.sanitize(parsed[1]));
        }
      }

      return [cmd, args, kwargs];
    }
  }, {
    key: "create_cmd",
    value: function create_cmd(cmd, args, kwargs) {
      var result = cmd;

      if (typeof args !== 'undefined' && args instanceof Array && args.length > 0) {
        for (var i = 0; i < args.length; i++) {
          result += ' ' + this.safe_wrap(args[i]);
        }
      }

      if (typeof kwargs !== 'undefined' && args instanceof Object) {
        for (var key in kwargs) {
          result += ' ' + key + '=' + this.safe_wrap(kwargs[key]);
        }
      }

      return result;
    }
    /**
     * Remove additional quotes from a string line.
     * @param {String} line - The string width additional quotes.
     * @return {String} - Updated string.
     */

  }, {
    key: "remove_quotes",
    value: function remove_quotes(line) {
      if (line === '""') {
        return '';
      } else if (line[0] === '"' && line[line.length - 1] === '"') {
        return line.slice(1, line.length - 1);
      } else if (line[0] === "'" && line[line.length - 1] === "'") {
        return line.slice(1, line.length - 1);
      } else {
        return line;
      }
    }
    /**
     * Remove invalid characters (notably quotes) from the string.
     * @param {String} line - The string to restrecut.
     * @param {Boolean} strict - If true use strict conversion (not implemented yet).
     * @param {Boolean} allowVars -If true allow variable definitions in the string (not implemented yet).
     * @return {String} - The restructured string.
     */

  }, {
    key: "sanitize",
    value: function sanitize(line, strict, allowVars) {
      // Replace quotes.
      line = line.replace(/^"(.*(?="$))"$/, '$1'); // Replace slashes and return result.

      return this.strip_slashes(line);
    }
    /**
     * Return an array with tokens ignoring whitespaces within.
     * @param {String} line - line the line to split in tokens
     * @return {Array} - The list of tokens
     */

  }, {
    key: "split",
    value: function split(line) {
      var result = line.match(/(?:[^\s"]+|"[^"]*")+/g);
      return result !== null ? result : [];
    }
    /**
     * Replaces all escaped brackets by a placeholder string of the format
     * `%%OPEN:1:%%`
     * @param {String} text - The text to escape.
     * @return {String} - The escaped text.
     */

  }, {
    key: "escapeBrackets",
    value: function escapeBrackets(text) {
      var result = text.replace(/\\+[[\]]/g, function (match, content, offset, str) {
        var NBrackets = match.length - 1;

        if (NBrackets % 2 === 1) {
          var chartype = match[match.length - 1] === '[' ? 'OPEN' : 'CLOSE';
          return "%%".concat(chartype, ":").concat(NBrackets, ":%%");
        }

        return match;
      });
      return result;
    }
    /**
     * Replaces all placeholder strings by escaped brackets.
     * `%%OPEN:1:%%`
     * @param {String} text - The text to unescape.
     * @return {String} - The unescaped text.
     */

  }, {
    key: "unescapeBrackets",
    value: function unescapeBrackets(text) {
      var result = text.replace(/%%(OPEN|CLOSE):\d+:%%/g, function (match, content, offset, str) {
        var chartype = match.substr(2, 4) === 'OPEN' ? '[' : ']';
        var i1 = match.indexOf(':') + 1;
        var i2 = match.lastIndexOf(':');
        var nBrackets = parseInt(match.substr(i1, i2 - i1));
        return Array(nBrackets).join('\\') + chartype;
      });
      return result;
    }
  }]);

  return Syntax;
}();



/***/ }),

/***/ "./src/js/osweb/classes/var_store.js":
/*!*******************************************!*\
  !*** ./src/js/osweb/classes/var_store.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VarStore; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__);


















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/** Class representing a variable store. */
var VarStore = /*#__PURE__*/function () {
  /**
   * Create a variable store object for all variables.
   * @param {Object} item - The item to which the var_store belongs.
   * @param {Object} parent - The parent global var_store.
   */
  function VarStore(item) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15___default()(this, VarStore);

    // Create and set private properties.
    this._item = item;
    this._parent = parent;
    this._scope = this;
    this._registered = [];
    this._ignored_properties = ['_item', '_parent', '_bypass_proxy', '_ignored_properties'];
  }
  /**
   * Get the value of a variable from the store (or thje parent store).
   * @param {String} variable - The name of the variable.
   * @param {Object} evaluate - The parent global var_store.
   * @param {object} defaultValue - A default value for if the variable is not
   *   found. If no default is specified, an error is thrown if the variable
   *   is not found.
   * @return {Boolean|Number|String} - The value of the given variable.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16___default()(VarStore, [{
    key: "get",
    value: function get(variable) {
      var evaluate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var value = null; // Gets an experimental variable.

      if (variable in this._scope) {
        this._bypass_proxy = true; // Avoid Proxy feedback loop

        if (typeof this._scope[variable] === 'string' && evaluate === true) {
          value = this._item.syntax.eval_text(this._scope[variable]);
        } else {
          value = this._scope[variable];
        }

        this._bypass_proxy = false;
      } // If value is not found locally, look in experiment object.


      if (value == null && this._parent && variable in this._parent._scope) {
        this._parent._bypass_proxy = true; // Avoid Proxy feedback loop

        if (typeof this._parent._scope[variable] === 'string' && evaluate === true) {
          value = this._item.syntax.eval_text(this._parent._scope[variable]);
        } else {
          value = this._parent._scope[variable];
        }

        this._parent._bypass_proxy = false;
      }

      if (value === null) {
        if (defaultValue !== null) return defaultValue;
        throw "VariableDoesNotExist: Variable ".concat(variable, " does not exist");
      }

      return value;
    }
    /**
     * Check if the variable is part of the variable store.
     * @param {String} variable - The name of the variable.
     * @return {Boolean} - True if the variable is part of the store.
     */

  }, {
    key: "has",
    value: function has(variable) {
      return this.inspect().includes(variable);
    }
    /** Create a list of all avariables available.
     * @return {Array} - Array containing names of all variables.
     */

  }, {
    key: "inspect",
    value: function inspect() {
      var variables = [];

      for (var variable in this._scope) {
        // If a variable hasn't been explicitly registered using vars.set, then
        // it is only returned under particular conditions.
        if (!this._registered.includes(variable)) {
          if (this._ignored_properties.includes(variable)) continue; // Don't return hidden variables prefixed with _

          if (variable.startsWith('_')) continue; // Only return variables of standard types to keep the log file clean

          if (!['number', 'string', 'boolean'].includes(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14___default()(this._scope[variable]))) continue;
        }

        variables.push(variable);
      }

      return variables;
    }
    /** Create a list of value/name pairs.
     * @return {Array} - Array containing name and values of all variables.
     */

  }, {
    key: "items",
    value: function items() {
      var pairs = {};

      var _iterator = _createForOfIteratorHelper(this.inspect()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var variable = _step.value;
          pairs[variable] = this._scope[variable];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return pairs;
    }
    /**
     * Set the value of a variable in the store.
     * @param {String} variable - The name of the variable.
     * @value {Boolean|Number|String} - Value of the variable to set.
     */

  }, {
    key: "set",
    value: function set(variable, value) {
      if (!this._registered.includes(variable)) this._registered.push(variable);
      this._scope[variable] = value;
    }
    /**
     * Unset (remove) a variable from the store.
     * @param {String} variable - The name of the variable.
     */

  }, {
    key: "unset",
    value: function unset(variable) {
      if (this.has(variable) === true) {
        delete this._scope[variable];
      }
    }
    /** Create a list of variable names.
     * @return {Array} - Array containing namesof all variables.
     */

  }, {
    key: "vars",
    value: function vars() {
      return this.inspect();
    }
    /**
     * Clears all experimental variables, except those that are explicitly
     * preserved.
     * @param {Array} preserve - An array of variable names to preserve.
     */

  }, {
    key: "clear",
    value: function clear() {
      var preserve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _iterator2 = _createForOfIteratorHelper(this.inspect()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var variable = _step2.value;
          if (preserve.includes(variable)) continue;
          this.unset(variable);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }]);

  return VarStore;
}();



/***/ }),

/***/ "./src/js/osweb/classes/var_store_handler.js":
/*!***************************************************!*\
  !*** ./src/js/osweb/classes/var_store_handler.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VarStoreHandler; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/**
 * A proxy handler for the VarStore that maps properties onto calls to
 * VarStore.get() and VarStore.set().
 */
var VarStoreHandler = /*#__PURE__*/function () {
  function VarStoreHandler() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VarStoreHandler);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VarStoreHandler, [{
    key: "get",
    value: function get(target, prop) {
      return target.get(prop, false, null);
    }
  }, {
    key: "set",
    value: function set(target, key, value) {
      target.set(key, value);
    }
  }]);

  return VarStoreHandler;
}();



/***/ }),

/***/ "./src/js/osweb/classes/workspace_var_store.js":
/*!*****************************************************!*\
  !*** ./src/js/osweb/classes/workspace_var_store.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkspaceVarStore; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_var_store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/var_store.js */ "./src/js/osweb/classes/var_store.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/** Class representing a the var store of the main experiment item, which maps
 *  onto the JavaScript workspace.
 **/

var WorkspaceVarStore = /*#__PURE__*/function (_VarStore) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(WorkspaceVarStore, _VarStore);

  var _super = _createSuper(WorkspaceVarStore);

  function WorkspaceVarStore(item) {
    var _this;

    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, WorkspaceVarStore);

    _this = _super.call(this, item, parent);
    _this._scope = window;
    return _this;
  }

  return WorkspaceVarStore;
}(_classes_var_store_js__WEBPACK_IMPORTED_MODULE_7__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/arrow.js":
/*!****************************************!*\
  !*** ./src/js/osweb/elements/arrow.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arrow; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */

var Arrow = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Arrow, _BaseElement);

  var _super = _createSuper(Arrow);

  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  function Arrow(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Arrow);

    // Create a default property container.
    var defaults = {};
    defaults.arrow_body_length = 0.8;
    defaults.arrow_body_width = 0.5;
    defaults.arrow_head_width = 30;
    defaults.fill = 1;
    defaults.color = sketchpad.vars.get('foreground');
    defaults.penwidth = 1;
    defaults.x1 = null;
    defaults.y1 = null;
    defaults.x2 = null;
    defaults.y2 = null; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Arrow, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Arrow.prototype), "draw", this).call(this); // Create a styles object containing style information


      var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
      styles.background_color = this._properties.color;
      styles.color = this._properties.color;
      styles.fill = this._properties.fill;
      styles.penwidth = this._properties.penwidth; // Draw the arrow element to the canvas of the sketchpad.

      this.sketchpad.canvas.arrow(this._properties.x1, this._properties.y1, this._properties.x2, this._properties.y2, this._properties.arrow_body_width, this._properties.arrow_body_length, this._properties.arrow_head_width, styles);
    }
  }]);

  return Arrow;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/base_element.js":
/*!***********************************************!*\
  !*** ./src/js/osweb/elements/base_element.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseElement; });
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);









/** Class representing a general visual element. */
var BaseElement = /*#__PURE__*/function () {
  /**
   * Create a log object which stores all the response data.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   * @param {Object} defaults - The default property values of the visual element.
   */
  function BaseElement(sketchpad, script, defaults) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, BaseElement);

    // Set class parameter properties.
    this.canvas = sketchpad.canvas;
    this.defaults = defaults;
    this.defaults.show_if = 'always';
    this.defaults.z_index = 0;
    this.experiment = sketchpad.experiment;
    this.name = sketchpad.name;
    this.only_keywords = false;
    this.pool = sketchpad.experiment.pool;
    this.properties = {};
    this.sketchpad = sketchpad;
    this.syntax = sketchpad.syntax;
    this.vars = sketchpad.vars; // Set the private properties.

    this._properties = null; // Read the definition string.

    this.from_string(script);
  }
  /**
   * Parses the element from a definition string.
   *
   * @param {String} script The definition script line to be parsed.
   * @memberof BaseElement
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(BaseElement, [{
    key: "from_string",
    value: function from_string(script) {
      this.properties = this.sketchpad.syntax.parse_cmd(script)[2];
    }
    /**
     * Determines the drawing order of the elements.
     *
     * @returns {Number}
     * @memberof BaseElement
     */

  }, {
    key: "z_index",
    value: function z_index() {
      return this.properties.z_index;
    }
    /**
     * Calculate the dynamic elements within properties.
     *
     * @memberof BaseElement
     */

  }, {
    key: "eval_properties",
    value: function eval_properties() {
      var _this = this;

      // Evaluates all properties and return them.
      var xc = this.experiment.vars.get('width') / 2;
      var yc = this.experiment.vars.get('height') / 2;
      this._properties = Object.entries(this.properties).reduce(function (result, _ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_ref, 2),
            prop = _ref2[0],
            val = _ref2[1];

        var value = _this.syntax.eval_text(val, _this.vars, false);

        if (['x', 'x1', 'x2'].includes(prop)) {
          value = Math.round(Number(value) + xc);
        }

        if (['y', 'y1', 'y2'].includes(prop)) {
          value = Math.round(Number(value) + yc);
        }

        result[prop] = value;
        return result;
      }, {});
    }
    /**
     * Determines whether the element should be shown, based on the show-if statement.
     *
     * @returns {Boolean} Returns true if the element must be shown.
     * @memberof BaseElement
     */

  }, {
    key: "is_shown",
    value: function is_shown() {
      // Set the self of the current workspace.
      this.experiment.python_workspace.self = this.sketchpad; // Determines whether the element should be shown, based on the show-if statement.

      return this.experiment._javascriptWorkspace._eval(this.properties.show_if);
    }
    /**
     * Draws the element
     *
     * @memberof BaseElement
     */

  }, {
    key: "draw",
    value: function draw() {
      // Calculate the dynamic properties.
      this.eval_properties();
    }
  }]);

  return BaseElement;
}();



/***/ }),

/***/ "./src/js/osweb/elements/circle.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/elements/circle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */

var Circle = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Circle, _BaseElement);

  var _super = _createSuper(Circle);

  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  function Circle(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Circle);

    // Create a default property container.
    var defaults = {};
    defaults.color = sketchpad.vars.get('foreground');
    defaults.fill = 0;
    defaults.penwidth = 1;
    defaults.x = null;
    defaults.y = null;
    defaults.r = null; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Circle, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Circle.prototype), "draw", this).call(this); // Create a styles object containing style information


      var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
      styles.color = this._properties.color;
      styles.fill = this._properties.fill;
      styles.penwidth = this._properties.penwidth; // Draw the circle element to the canvas of the sketchpad.

      this.sketchpad.canvas.circle(this._properties.x, this._properties.y, this._properties.r, styles);
    }
  }]);

  return Circle;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/ellipse.js":
/*!******************************************!*\
  !*** ./src/js/osweb/elements/ellipse.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ellipse; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */

var Ellipse = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Ellipse, _BaseElement);

  var _super = _createSuper(Ellipse);

  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  function Ellipse(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Ellipse);

    // Create a default property container.
    var defaults = {
      fill: 1,
      color: sketchpad.vars.get('foreground'),
      penwidth: 1,
      x: null,
      y: null,
      w: null,
      h: null
    }; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Ellipse, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Ellipse.prototype), "draw", this).call(this); // Create a styles object containing style information


      var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
      styles.background_color = this._properties.color;
      styles.color = this._properties.color;
      styles.fill = this._properties.fill;
      styles.penwidth = this._properties.penwidth; // Draw the ellipse element to the canvas of the sketchpad.

      this.sketchpad.canvas.ellipse(Number(this._properties.x), Number(this._properties.y), Number(this._properties.w), Number(this._properties.h), styles);
    }
  }]);

  return Ellipse;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/fixdot.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/elements/fixdot.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fixdot; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */

var Fixdot = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Fixdot, _BaseElement);

  var _super = _createSuper(Fixdot);

  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  function Fixdot(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Fixdot);

    // Create a default property container.
    var defaults = {};
    defaults.color = sketchpad.vars.get('foreground');
    defaults.style = 'default';
    defaults.x = null;
    defaults.y = null; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Fixdot, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Fixdot.prototype), "draw", this).call(this); // Create a styles object containing style information


      var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_10__["default"](this.sketchpad);
      styles.color = this._properties.color; // Draw the fixdot element to the canvas of the sketchpad.

      this.sketchpad.canvas.fixdot(this._properties.x, this._properties.y, this._properties.style, styles);
    }
  }]);

  return Fixdot;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/gabor.js":
/*!****************************************!*\
  !*** ./src/js/osweb/elements/gabor.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gabor; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing an arrow element.
 * @extends BaseElement
 */

var Gabor = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Gabor, _BaseElement);

  var _super = _createSuper(Gabor);

  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  function Gabor(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Gabor);

    // Create a default property container.
    var defaults = {};
    defaults.bgmode = 'avg';
    defaults.color1 = 'white';
    defaults.color2 = 'black';
    defaults.env = 'gaussian';
    defaults.freq = 1;
    defaults.orient = 0;
    defaults.phase = 0;
    defaults.size = 96;
    defaults.stdev = 12;
    defaults.x = null;
    defaults.y = null; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Gabor, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Gabor.prototype), "draw", this).call(this); // Draw the gabor element to the canvas of the sketchpad.


      this.sketchpad.canvas.gabor(this._properties.x, this._properties.y, this._properties.orient, this._properties.freq, this._properties.env, this._properties.size, this._properties.stdev, this._properties.phase, this._properties.color1, this._properties.color2, this._properties.bgmode);
    }
  }]);

  return Gabor;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/image.js":
/*!****************************************!*\
  !*** ./src/js/osweb/elements/image.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageElement; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing an image element.
 * @extends BaseElement
 */

var ImageElement = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ImageElement, _BaseElement);

  var _super = _createSuper(ImageElement);

  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  function ImageElement(sketchpad, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, ImageElement);

    // Create a default property container.
    var defaults = {};
    defaults.center = 1;
    defaults.file = null;
    defaults.scale = 1;
    defaults.rotation = 0;
    defaults.x = null;
    defaults.y = null; // Inherited.

    _this = _super.call(this, sketchpad, script, defaults); // Set the class private properties.

    _this._file = null;
    return _this;
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(ImageElement, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(ImageElement.prototype), "draw", this).call(this); // Draw the image element to the canvas of the sketchpad.


      this.sketchpad.canvas.image(this._properties.file, this._properties.center, this._properties.x, this._properties.y, this._properties.scale, this._properties.rotation);
    }
  }]);

  return ImageElement;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/line.js":
/*!***************************************!*\
  !*** ./src/js/osweb/elements/line.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Class representing an arrow element.
 * @extends BaseElement
 */



var Line = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Line, _BaseElement);

  var _super = _createSuper(Line);

  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  function Line(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Line);

    // Create a default property container.
    var defaults = {};
    defaults.color = sketchpad.vars.get('foreground');
    defaults.penwidth = 1;
    defaults.x1 = null;
    defaults.y1 = null;
    defaults.x2 = null;
    defaults.y2 = null; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Line, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Line.prototype), "draw", this).call(this); // Create a styles object containing style information


      var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
      styles.color = this._properties.color;
      styles.penwidth = this._properties.penwidth; // Draw the line element to the canvas of the sketchpad.

      this.sketchpad.canvas.line(this._properties.x1, this._properties.y1, this._properties.x2, this._properties.y2, styles);
    }
  }]);

  return Line;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/noise.js":
/*!****************************************!*\
  !*** ./src/js/osweb/elements/noise.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Noise; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing an arrow element.
 * @extends BaseElement
 */

var Noise = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Noise, _BaseElement);

  var _super = _createSuper(Noise);

  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  function Noise(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Noise);

    // Create a default property container.
    var defaults = {};
    defaults.color1 = 'white';
    defaults.color2 = 'black';
    defaults.env = 'gaussian';
    defaults.size = 96;
    defaults.stdev = 12;
    defaults.x = null;
    defaults.y = null;
    defaults.bgmode = 'avg'; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Noise, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Noise.prototype), "draw", this).call(this); // Draw the noise element to the canvas of the sketchpad.


      this.sketchpad.canvas.noise(this._properties.x, this._properties.y, this._properties.env, this._properties.size, this._properties.stdev, this._properties.color1, this._properties.color2, this._properties.bgmode);
    }
  }]);

  return Noise;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/rect.js":
/*!***************************************!*\
  !*** ./src/js/osweb/elements/rect.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */

var Rect = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Rect, _BaseElement);

  var _super = _createSuper(Rect);

  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  function Rect(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Rect);

    // Create a default property container.
    var defaults = {};
    defaults.fill = 1;
    defaults.color = sketchpad.vars.get('foreground');
    defaults.penwidth = 1;
    defaults.x = null;
    defaults.y = null;
    defaults.w = null;
    defaults.h = null; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Rect, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Rect.prototype), "draw", this).call(this); // Create a styles object containing style information


      var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
      styles.fill = this._properties.fill;
      styles.color = this._properties.color;
      styles.background_color = this._properties.color;
      styles.penwidth = this._properties.penwidth; // Draw the rectangle element to the canvas of the sketchpad.

      this.sketchpad.canvas.rect(this._properties.x, this._properties.y, this._properties.w, this._properties.h, styles);
    }
  }]);

  return Rect;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./src/js/osweb/elements/textline.js":
/*!*******************************************!*\
  !*** ./src/js/osweb/elements/textline.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Textline; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");











function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a textline element.
 * @extends BaseElement
 */

var Textline = /*#__PURE__*/function (_BaseElement) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Textline, _BaseElement);

  var _super = _createSuper(Textline);

  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  function Textline(sketchpad, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Textline);

    // Create a default property container.
    var defaults = {};
    defaults.center = 1;
    defaults.color = sketchpad.vars.get('foreground');
    defaults.font_family = sketchpad.vars.get('font_family');
    defaults.font_size = sketchpad.vars.get('font_size');
    defaults.font_bold = sketchpad.vars.get('font_bold');
    defaults.font_italic = sketchpad.vars.get('font_italic');
    defaults.html = 'yes';
    defaults.text = null;
    defaults.x = null;
    defaults.y = null; // Inherited.

    return _super.call(this, sketchpad, script, defaults);
  }
  /** Implements the draw phase of an element. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Textline, [{
    key: "draw",
    value: function draw() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Textline.prototype), "draw", this).call(this);

      var text = this._properties.text; // Create a styles object containing style information

      var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
      styles.color = this._properties.color;
      styles.font_family = this._properties.font_family;
      styles.font_size = Number(this._properties.font_size);
      styles.font_italic = this._properties.font_italic === 'yes';
      styles.font_bold = this._properties.font_bold === 'yes';
      styles.font_underline = this._properties.font_underline === 'yes';
      this.sketchpad.canvas.text(text, this._properties.center, this._properties.x, this._properties.y, this._properties.html, styles);
    }
  }]);

  return Textline;
}(_base_element_js__WEBPACK_IMPORTED_MODULE_10__["default"]);



/***/ }),

/***/ "./src/js/osweb/index.js":
/*!*******************************!*\
  !*** ./src/js/osweb/index.js ***!
  \*******************************/
/*! exports provided: VERSION_NAME, VERSION_NUMBER, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION_NAME", function() { return VERSION_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION_NUMBER", function() { return VERSION_NUMBER; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _system_runner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system/runner.js */ "./src/js/osweb/system/runner.js");



/* eslint-disable no-undef */

/* eslint-disable no-extend-native */

/*
 * OsWeb
 *
 * An experiment research tool written in Javascript (ES2016) and HTML to be
 * used in Qualtrics or other web-based tools. Based upon OpenSesame.
 *
 * Author: drs. J. Bos, D. Schreij & S. Mathot
 *
 * Copyright (c) University of Groningen
 * Faculty of Behavioural and Social Sciences
 * Technical Support Service
 *
 */

var VERSION_NAME = "osweb";
var VERSION_NUMBER = "2.0.0"; // Add _pySlide function to string prototype (HACK for the filbert interpreter).

String.prototype._pySlice = function (start, end, step) {
  if (end !== null) {
    return this.slice(start, end);
  } else {
    return this.slice(start);
  }
}; // Create the osweb library container.


var osweb = {
  printVersionInfo: function printVersionInfo() {
    // Show library name and library version number in the console.
    console.log("".concat(VERSION_NAME, " v").concat(VERSION_NUMBER));
  },
  getRunner: function getRunner(target) {
    return new _system_runner_js__WEBPACK_IMPORTED_MODULE_2__["default"](target);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (osweb);

/***/ }),

/***/ "./src/js/osweb/items/advanced_delay.js":
/*!**********************************************!*\
  !*** ./src/js/osweb/items/advanced_delay.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdvancedDelay; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a advanced delay item.
 * @extends Item
 */
var AdvancedDelay = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(AdvancedDelay, _Item);

  var _super = _createSuper(AdvancedDelay);

  /**
   * Create an advanced delay plugin item which delays for e specific duration the experiment.
   * @param {Object} experiment - The experiment item to which the item belongs.
   * @param {String} name - The unique name of the item.
   * @param {String} script - The script containing the properties of the item.
   */
  function AdvancedDelay(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, AdvancedDelay);

    _this = _super.call(this, experiment, name, script);
    _this.description = 'Waits for a specified duration';
    _this._duration = -1;

    _this.from_string(script);

    return _this;
  }
  /**
   * Gaussian distribution function.
   * @param {Number} mean - The mean value.
   * @param {Number} std - The standard deviation value.
   * @return {Number} - result value
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(AdvancedDelay, [{
    key: "_random_gauss",
    value: function _random_gauss(mean, std) {
      var u = 0;
      var v = 0;

      while (u === 0) {
        u = Math.random();
      }

      while (v === 0) {
        v = Math.random();
      }

      return Math.max(0, mean + Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * std);
    }
    /**
     * Uniform distribution function.
     * @param {Number} mean - The mean value.
     * @param {Number} stdev - The standard deviation value.
     * @return {Number} - result value
     */

  }, {
    key: "_random_uniform",
    value: function _random_uniform(mean, jitter) {
      return Math.max(0, Math.floor(mean + Math.random() * jitter - jitter / 2));
    }
    /** Resets all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      this.vars.set("duration", 1000);
      this.vars.set("jitter", 0);
      this.vars.set('jitter_mode', 'Uniform');
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      var duration = this.vars.get('duration');
      var jitter = this.vars.get('jitter');
      var jitter_mode = this.vars.get('jitter_mode');

      if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_13___default()(duration) || duration < 0) {
        this._runner._debugger.addError('Duration should be a positive numeric value in advanced_delay ' + this.name);
      }

      if (jitter_mode === 'Uniform') {
        this._duration = this._random_uniform(duration, jitter);
      } else if (jitter_mode === 'Std. Dev.') {
        this._duration = this._random_gauss(duration, jitter);
      } else {
        this._runner._debugger.addError('Unknown jitter mode in advanced_delay ' + this.name);
      }

      if (this._duration < 0) {
        this._duration = 0;
      }

      this._duration = Number(this._duration);
      this.experiment.vars.set('delay_' + this.name, this._duration);

      this._runner._debugger.addMessage('delay for ' + this._duration + ' ms.');

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(AdvancedDelay.prototype), "prepare", this).call(this);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(AdvancedDelay.prototype), "run", this).call(this);

      this.set_item_onset(this.time());

      if (this._duration > 0) {
        this.sleep(this._duration);
      } else {
        this._complete();
      }
    }
  }]);

  return AdvancedDelay;
}(_items_item_js__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/coroutines.js":
/*!******************************************!*\
  !*** ./src/js/osweb/items/coroutines.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coroutines; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");



























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_24___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/**
 * Class representing coroutines
 * @extends Item
 */

var Coroutines = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_23___default()(Coroutines, _Item);

  var _super = _createSuper(Coroutines);

  function Coroutines(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default()(this, Coroutines);

    // Inherited create.
    _this = _super.call(this, experiment, name, script); // Definition of public properties.

    _this.description = 'Repeatedly runs another item'; // The tasks to perform

    _this.tasks = []; // The tasks to perform this iteration

    _this.schedule = []; // Process the script.

    _this.from_string(script);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default()(Coroutines, [{
    key: "from_string",
    value: function from_string(script) {
      if (script === null) return;

      var _iterator = _createForOfIteratorHelper(script.split('\n')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var s = _step.value;

          var _this$experiment$synt = this.experiment.syntax.parse_cmd(s),
              _this$experiment$synt2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_19___default()(_this$experiment$synt, 3),
              cmd = _this$experiment$synt2[0],
              arglist = _this$experiment$synt2[1],
              kwdict = _this$experiment$synt2[2];

          if (cmd === 'set') {
            var _arglist = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_19___default()(arglist, 2),
                variable = _arglist[0],
                value = _arglist[1];

            this.vars.set(variable, value);
          }

          if (cmd === 'run' && arglist.length) {
            var task = {
              item_name: arglist.shift(),
              start_time: kwdict.start || 0,
              end_time: kwdict.end || 0,
              run_if: kwdict.runif || 'always'
            };
            this.tasks.push(task);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "prepare",
    value: function prepare() {
      var _this2 = this;

      this._runner._debugger.addMessage("Preparing coroutines item '".concat(this.name, "'"));

      this.schedule = this.tasks.reduce(function (result, taskParams) {
        var item_name = _this2._runner._syntax.eval_text(taskParams.item_name, _this2.vars);

        var item = _this2._runner._itemStore._items[item_name];

        if (!item) {
          var msg = "Coroutines '".concat(_this2.name, "' - could not find item: ").concat(item_name);

          _this2._runner._debugger.addError(msg);

          throw new Error(msg);
        }

        _this2._runner._pythonWorkspace.self = _this2;
        var cond = taskParams.run_if;

        if (_this2._runner._pythonWorkspace._eval(cond) === true) {
          var start_time = _this2._runner._syntax.eval_text(taskParams.start_time, _this2.vars);

          var end_time = _this2._runner._syntax.eval_text(taskParams.end_time, _this2.vars);

          result.push(new Task(item, item_name, start_time, end_time, taskParams.item_name === _this2.vars.get('end_after_item')));
        }

        return result;
      }, []);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_22___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default()(Coroutines.prototype), "prepare", this).call(this);
    }
  }, {
    key: "run",
    value: function run() {
      this._runner._debugger.addMessage("Running coroutines item '".concat(this.name, "'"));

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_22___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_25___default()(Coroutines.prototype), "run", this).call(this); // Prepare all tasks


      var _iterator2 = _createForOfIteratorHelper(this.schedule),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var task = _step2.value;

          this._runner._itemStore.prepare(task.item_name, this);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.schedule = lodash_sortBy__WEBPACK_IMPORTED_MODULE_26___default()(this.schedule, 'start_time'); // Launch all tasks and wrap them in the coroutine helper

      var _iterator3 = _createForOfIteratorHelper(this.schedule),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _task = _step3.value;

          this._runner._debugger.addMessage("Launching task '".concat(_task.item_name, "'"));

          _task.launch();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.active = [];
      this.dt = 0;
      this.t0 = performance.now();
      this.running = true;

      this._loop();
    }
  }, {
    key: "_loop",
    value: function _loop() {
      while (this.schedule.length > 0 && this.schedule[0].started(this.dt)) {
        this.active.push(this.schedule.shift());
      }

      this.active = lodash_sortBy__WEBPACK_IMPORTED_MODULE_26___default()(this.active, 'end_time');
      var _active = [];

      var _iterator4 = _createForOfIteratorHelper(this.active),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _task2 = _step4.value;

          var status = _task2.step();

          if (status === _task2.RUNNING) {
            _active.push(_task2);

            continue;
          }

          if (status === _task2.ABORTED) {
            this.running = false;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      this.active = _active;

      while (this.active.length > 0 && this.active[0].stopped(this.dt)) {
        this.active.shift();
      }

      this.dt = performance.now() - this.t0;

      if (this.running && this.dt < this.vars.get('duration') && ![_system_constants_js__WEBPACK_IMPORTED_MODULE_29__["constants"].TIMER_BREAK, _system_constants_js__WEBPACK_IMPORTED_MODULE_29__["constants"].TIMER_EXIT, _system_constants_js__WEBPACK_IMPORTED_MODULE_29__["constants"].TIMER_ERROR].includes(this._runner._events._state)) {
        setTimeout(this._loop.bind(this), 0); // The well-known trick to deal with JS async nature...
      } else {
        // Kill all remaining tasks
        var _iterator5 = _createForOfIteratorHelper(this.active),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var task = _step5.value;

            this._runner._debugger.addMessage("Killing task '".concat(task.item_name, "'"));

            task.kill();
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        this._complete();
      }
    }
  }]);

  return Coroutines;
}(_item_js__WEBPACK_IMPORTED_MODULE_28__["default"]);



var Task = /*#__PURE__*/function () {
  function Task(item, item_name, start_time, end_time, abort_on_end) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_20___default()(this, Task);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "UNINITIALISED", 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "RUNNING", 1);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "FINISHED", 2);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_18___default()(this, "ABORTED", -1);

    this.item = item;
    this.item_name = item_name;
    this.start_time = start_time;
    this.end_time = end_time;
    this.abort_on_end = abort_on_end;
    this.state = this.UNINITIALISED;
    this._coroutine = null;

    this.step = function () {
      throw new Error('Task has not been initialized');
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_21___default()(Task, [{
    key: "launch",
    value: function launch() {
      var _this3 = this;

      if (!lodash_isFunction__WEBPACK_IMPORTED_MODULE_27___default()(this.item.coroutine)) {
        throw new Error("Item ".concat(this.item_name, " does not have correct coroutine implementation"));
      }

      this._coroutine = this.item.coroutine();

      this._coroutine.next();

      this.step = function () {
        // console.log(`Stepping ${this.item_name}`)
        var _this3$_coroutine$nex = _this3._coroutine.next(true),
            value = _this3$_coroutine$nex.value,
            done = _this3$_coroutine$nex.done;

        if (value === false) {
          _this3.state = _this3.ABORTED;
          return _this3.ABORTED;
        }

        if (done === true) {
          var newState;

          if (_this3.abort_on_end) {
            newState = _this3.ABORTED;
          } else {
            newState = _this3.FINISHED;
          }

          _this3.state = newState;
          return _this3.state;
        }

        return _this3.state; // Should be this.RUNNING
      };

      this.state = this.RUNNING;
    }
  }, {
    key: "started",
    value: function started(dt) {
      return dt >= this.start_time;
    }
  }, {
    key: "stopped",
    value: function stopped(dt) {
      if (dt < this.end_time) {
        return false;
      }

      return this.kill();
    }
  }, {
    key: "kill",
    value: function kill() {
      var response = this._coroutine.next(false);

      if (response.done === true) {
        this.state = this.FINISHED;
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Task;
}();

/***/ }),

/***/ "./src/js/osweb/items/experiment.js":
/*!******************************************!*\
  !*** ./src/js/osweb/items/experiment.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Experiment; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _classes_javascript_workspace_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../classes/javascript_workspace.js */ "./src/js/osweb/classes/javascript_workspace.js");
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");
/* harmony import */ var _backends_log__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../backends/log */ "./src/js/osweb/backends/log.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../index.js */ "./src/js/osweb/index.js");















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







/**
 * Class representing an Experiment item.
 * @extends Item
 */

var Experiment = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(Experiment, _Item);

  var _super = _createSuper(Experiment);

  /** The experiment class defines the starting point for an experiment. */
  function Experiment(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, Experiment);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Create and set private properties.

    _this._canvas = new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_16__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(_this));
    _this._currentCanvas = _this._canvas;
    _this._log = new _backends_log__WEBPACK_IMPORTED_MODULE_17__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(_this));
    _this._scale_x = 1; // Scaling of the canvas for fullscreen mode.

    _this._scale_y = 1; // Scaling of the canvas for fullscreen mode.

    _this._javascriptWorkspace = new _classes_javascript_workspace_js__WEBPACK_IMPORTED_MODULE_15__["default"](_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9___default()(_this)); // Create and set public properties.

    _this.debug = _this._runner._debugger.enabled;
    _this.items = _this._runner._itemStore;
    _this.pool = _this._runner._pool; // Set default variables

    _this.vars.set('start', 'experiment');

    _this.vars.set('round_decimals', 2);

    _this.vars.set('form_clicks', 'no');

    _this.vars.set('sessionid', new Date().valueOf() + Math.floor(Math.random() * 100000)); // Display parameters.


    _this.vars.set('width', 1024);

    _this.vars.set('height', 768);

    _this.vars.set('background', 0x000000);

    _this.vars.set('foreground', 0xFFFFFF);

    _this.vars.set('penwidth', 1); // Font parameters.


    _this.vars.set('font_size', 18);

    _this.vars.set('font_family', 'mono');

    _this.vars.set('font_italic', 'no');

    _this.vars.set('font_bold', 'no');

    _this.vars.set('font_underline', 'no');

    return _this;
  }
  /** Resets the feedback variables (acc, avg_rt, etc.). */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(Experiment, [{
    key: "reset_feedback",
    value: function reset_feedback() {
      this.vars.set('total_responses', 0);
      this.vars.set('total_correct', 0);
      this.vars.set('total_response_time', 0);
      this.vars.set('avg_rt', 'undefined');
      this.vars.set('average_response_time', 'undefined');
      this.vars.set('accuracy', 'undefined');
      this.vars.set('acc', 'undefined');
    }
    /**
      * Sets the subject number and parity (even/ odd).
      * @param  {Number} pNr - The subject number to be used.
      */

  }, {
    key: "set_subject",
    value: function set_subject(pNr) {
      // Sets the subject number and parity (even/ odd).
      this.vars.set('subject_nr', pNr);

      if (pNr % 2 === 0) {
        this.vars.set('subject_parity', 'even');
      } else {
        this.vars.set('subject_parity', 'odd');
      }
    }
    /**
      * Extracts a the definition of a single item from the string.
      * @param {String} script - The script to read the definition form.
      * @return {String} - The definition found from the script.
      */

  }, {
    key: "read_definition",
    value: function read_definition(script) {
      // Extracts a the definition of a single item from the string.
      var line = script.shift();
      var def_str = '';

      while (line !== null && line.length > 0 && line.charAt(0) === '\t') {
        def_str = def_str + line.substring(1) + '\n';
        line = script.shift();
      }

      return def_str;
    }
    /**
     * Construct the experiment object from OpenSesame script.
     * @param {String} script - The opensesame script contents
     */

  }, {
    key: "from_string",
    value: function from_string(script) {
      // Split the string into an array of lines.
      if (script !== null) {
        script = script.replace(/\r\n|\r|\n/g, '\n'); // convert line endings

        this._source = script.split('\n');

        var l = this._source.shift();

        while (l != null) {
          // Set the processing of the next line.
          var get_next = true; // eslint-disable-next-line no-unused-vars

          var cmd = void 0,
              args = void 0,
              kwargs = void 0;

          try {
            // Split the single line into a set of tokens.
            var _this$_runner$_syntax = this._runner._syntax.parse_cmd(l);

            var _this$_runner$_syntax2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_6___default()(_this$_runner$_syntax, 3);

            cmd = _this$_runner$_syntax2[0];
            args = _this$_runner$_syntax2[1];
            kwargs = _this$_runner$_syntax2[2];
          } catch (e) {
            this._runner._debugger.addError('Failed to parse script. Maybe it contains illegal characters or unclosed quotes: ' + e.message);
          }

          if (cmd !== null && args.length > 0) {
            // Try to parse the line as variable (or comment)
            if (this.parse_variable(l) === false) {
              if (cmd === 'define') {
                if (args.length === 2) {
                  // Get the type, name and definition string of an item.
                  var item_type = args[0];

                  var item_name = this._runner._syntax.sanitize(args[1]);

                  var def_str = this.read_definition(this._source);

                  this._runner._itemStore.newItem(item_type, item_name, def_str);
                } else {
                  this._runner._debugger.addError('Failed to parse definition: ' + l);
                }
              }
            }
          } // Get the next line.


          if (get_next === true) {
            l = this._source.shift();
          }
        }
      }
    }
    /** Initializes the clock backend. */

  }, {
    key: "init_clock",
    value: function init_clock() {
      // Initializes the clock backend.
      this.clock._initialize();
    }
    /** Initializes the canvas backend. */

  }, {
    key: "init_display",
    value: function init_display() {
      // Initializes the canvas backend.
      this._canvas.init_display(this);
    }
    /** Event handler for external data retrieval. */

  }, {
    key: "onLog",
    value: function onLog(data) {} // Function to be overwritten by external handler

    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Experiment.prototype), "run", this).call(this); // Runs the experiment.


      switch (this._status) {
        case _system_constants_js__WEBPACK_IMPORTED_MODULE_18__["constants"].STATUS_INITIALIZE:
          // Adjust the status of the item.
          this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_18__["constants"].STATUS_FINALIZE; // Save the date and time, and the version of OpenSesame

          this.vars.set('datetime', new Date().toString());
          this.vars.set('opensesame_version', _index_js__WEBPACK_IMPORTED_MODULE_19__["VERSION_NUMBER"]);
          this.vars.set('opensesame_codename', _index_js__WEBPACK_IMPORTED_MODULE_19__["VERSION_NAME"]);
          this.init_clock();
          this.init_display();
          this.reset_feedback(); // Add closing message to debug system.

          this._runner._debugger.addMessage('experiment.run(): experiment started at ' + new Date().toUTCString());

          var start = this.vars.get('start');

          if (this._runner._itemStore._items[start] !== null) {
            this._runner._itemStack.clear();

            this._runner._itemStore.prepare(start, this);
          } else {
            this._runner._debugger.addError('Could not find the item that is the entry point of the experiment: ' + this.vars.start);
          }

          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_18__["constants"].STATUS_FINALIZE:
          // Add closing message to debug system.
          this._runner._debugger.addMessage('experiment.run(): experiment finished at ' + new Date().toUTCString()); // Complete the run process.


          this.end();
          break;
      }
    }
    /** Ends an experiment. */

  }, {
    key: "end",
    value: function end() {
      this._runner._finalize();
    }
  }]);

  return Experiment;
}(_item_js__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/feedback.js":
/*!****************************************!*\
  !*** ./src/js/osweb/items/feedback.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Feedback; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sketchpad_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sketchpad.js */ "./src/js/osweb/items/sketchpad.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing a feedback item.
 * @extends Sketchpad
 */

var Feedback = /*#__PURE__*/function (_Sketchpad) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Feedback, _Sketchpad);

  var _super = _createSuper(Feedback);

  /**
   * Create a feedback which show feedback info to the subhect.
   * @param {Object} experiment - The experiment item to which the item belongs.
   * @param {String} name - The unique name of the item.
   * @param {String} script - The script containing the properties of the item.
   */
  function Feedback(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Feedback);

    // Inherited create.
    _this = _super.call(this, experiment, name, script); // Definition of public properties.

    _this.description = 'Provides feedback to the participant';
    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Feedback, [{
    key: "_complete",
    value: function _complete() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Feedback.prototype), "_complete", this).call(this); // Reset feedback variables.


      if (this.vars.get('reset_variables') === 'yes') {
        this.experiment.reset_feedback();
      }
    }
    /** Resets all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Feedback.prototype), "reset", this).call(this); // Reset the variables.


      this.vars.set('reset_variables', 'yes');
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      this._parent._prepare_complete();
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Feedback.prototype), "prepare", this).call(this);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Feedback.prototype), "run", this).call(this);
    }
  }]);

  return Feedback;
}(_sketchpad_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/form_consent.js":
/*!********************************************!*\
  !*** ./src/js/osweb/items/form_consent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormConsent; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing a form consent item.
 * @extends FormHTML
 */

var FormConsent = /*#__PURE__*/function (_FormHTML) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FormConsent, _FormHTML);

  var _super = _createSuper(FormConsent);

  function FormConsent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, FormConsent);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(FormConsent, [{
    key: "onDecline",
    value: function onDecline() {
      alertify.error(this.vars.get('decline_message'));
    }
  }, {
    key: "onAccept",
    value: function onAccept() {
      if (this._checkbox.checked) {
        this.resumeOSWeb();
        return;
      }

      this.onDecline();
    }
  }, {
    key: "formElements",
    value: function formElements() {
      var title = this.element('h1', this.vars.get('form_title'), 1 / 7);
      var text = this.element('p', this.vars.get('form_text'), 4 / 7);
      text.style.textAlign = 'left';

      var _this$checkbox = this.checkbox('checkbox', this.vars.get('checkbox_text'), 1 / 7),
          _this$checkbox2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_this$checkbox, 2),
          checkboxContainer = _this$checkbox2[0],
          checkbox = _this$checkbox2[1];

      this._checkbox = checkbox;
      var buttonContainer = this.element('div', null, 1 / 7);
      var acceptButton = this.element('input', null, null, 1 / 3);
      acceptButton.value = this.vars.get('accept_text');
      acceptButton.type = 'button';
      acceptButton.onclick = this.onAccept.bind(this);
      var declineButton = this.element('input', null, null, 1 / 3);
      declineButton.value = this.vars.get('decline_text');
      declineButton.type = 'button';
      declineButton.onclick = this.onDecline.bind(this);
      buttonContainer.append(acceptButton);
      buttonContainer.append(declineButton);
      this.applyTheme(acceptButton, true);
      this.applyTheme(declineButton, true);
      return [title, text, checkboxContainer, buttonContainer];
    }
  }]);

  return FormConsent;
}(_form_html_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/form_html.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/items/form_html.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormHTML; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");


























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Base class for implementing HTML forms. These forms briefly hide the OSWeb
 * canvas and replace it by an HTML div. When the form is finished, OSWeb is
 * re-activated.
 * @extends Item
 */

var FormHTML = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22___default()(FormHTML, _Item);

  var _super = _createSuper(FormHTML);

  function FormHTML(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19___default()(this, FormHTML);

    _this = _super.call(this, experiment, name, script);
    _this._widgets = []; // avoid crashes when parsing widgets command

    _this.from_string(script);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20___default()(FormHTML, [{
    key: "reset",
    value: function reset() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default()(FormHTML.prototype), "reset", this).call(this);

      this.vars.set('margins', '50;50;50;50');
    }
    /**
     * Generates an array of HTML elements that are appended to the form. Should
     * be overridden in the actual form classes.
     * @return {!Array<Object>} - an array of HTML elements
     **/

  }, {
    key: "formElements",
    value: function formElements() {
      return [];
    }
    /**
     * Gives HTML code to be used for the form. Should be overridden in the
     * actual form classes.
     * @return {string}
     **/

  }, {
    key: "formHTML",
    value: function formHTML() {
      return null;
    }
    /**
     * Hides the form container and re-enables OSWeb. Also re-enablees the event
     * listeners.
     **/

  }, {
    key: "resumeOSWeb",
    value: function resumeOSWeb() {
      this._formContainer.remove();

      this._osweb.style.display = 'flex';
      window.addEventListener('keydown', runner._events._keyDownHandler);
      window.addEventListener('keyup', runner._events._keyUpHandler);

      this._complete();
    }
    /**
     * Executes script elements that are embedded in the form
     **/

  }, {
    key: "_runScripts",
    value: function _runScripts() {
      var _iterator = _createForOfIteratorHelper(this._customForm.getElementsByTagName('script')),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var script = _step.value;

          this.experiment._javascriptWorkspace.exec(script.textContent);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Emulates the 'gray' which is applied to buttons.
     **/

  }, {
    key: "applyTheme",
    value: function applyTheme(element) {
      var setBackground = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.vars.get('_theme') !== 'gray') return;
      if (setBackground) element.style.backgroundColor = '#888a85';
      element.style.borderTop = 'solid 1px #babdb6';
      element.style.borderLeft = 'solid 1px #555753';
      element.style.borderRight = 'solid 1px #555753';
      element.style.borderBottom = 'solid 1px #555753';
    }
    /**
     * Returns an HTML element. If inherit is specified
     * @param {string} type - an HTML element type, such as 'div'
     * @param {string} html - the inner HTML content
     * @param {number} height - proportion of full height
     * @param {number} width - proportion of full height
     * @param {boolean} inherit - Indicates whether font style should be
     *     inherited from the container element.
     * @return {Object} - an HTML element
     **/

  }, {
    key: "element",
    value: function element(type, html, height) {
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var inherit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var element = document.createElement(type); // Replace all newlines by <br> tags

      if (typeof html !== "undefined" && html !== null) element.innerHTML = html.replace(/\n/g, '<br>');
      if (typeof height !== "undefined") element.style.height = this._paddedHeight * height - 40 + 'px';
      if (typeof width !== "undefined") element.style.width = this._paddedWidth * width - 40 + 'px';
      element.style.padding = '10px';
      element.style.margin = '10px';

      if (inherit) {
        element.style.fontFamily = 'inherit';
        element.style.fontSize = 'inherit';
        element.style.fontWeight = 'inherit';
        element.style.textDecoration = 'inherit';
        element.style.color = 'inherit';
        element.style.backgroundColor = 'inherit';
      }

      return element;
    }
    /**
     * Builds a container div with a checkbox/ radio button and a label next to
     * it. See element() for explanation of parameters.
     * @param {string} boxtype - radio/ checkbox
     * @param {string} label - a text label
     * @param {number} height
     * @param {number} width
     * @param {boolean} inherit
     * @return {!Array<Object>}
     **/

  }, {
    key: "checkbox",
    value: function checkbox(boxType, label, height) {
      var width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var inherit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var box = this.element('input', null, null, null);
      box.type = boxType;
      box.value = label;
      var labelElement = this.element('label', label, null, null);
      var container = this.element('div', null, height, width, inherit);
      container.style.textAlign = 'left';
      container.append(box);
      container.append(labelElement);
      return [container, box];
    }
    /**
     * Maps the font family onto names that browsers understand.
     * @returns {string}
     **/

  }, {
    key: "run",
    value: function run() {
      // The main container that contains the form elements
      this._customForm = document.createElement('div');
      this._customForm.style.color = this.vars.get('foreground');
      this._customForm.style.backgroundColor = this.vars.get('background');
      this._customForm.style.fontSize = this.vars.get('font_size') + 'px';
      this._customForm.style.fontFamily = this._fontFamily;
      if (this.vars.get('font_bold') === 'yes') this._customForm.style.fontWeight = 'bold';
      if (this.vars.get('font_italic') === 'yes') this._customForm.style.fontStyle = 'italic';
      if (this.vars.get('font_underline') === 'yes') this._customForm.style.textDecoration = 'underline'; // Convert margins from '50;50;50;50' to '50px 50px 50px 50px'

      this._customForm.style.padding = this._padding.join('px ') + 'px';
      this._customForm.style.width = this._paddedWidth + 'px';
      this._customForm.style.height = this._paddedHeight + 'px';
      this._customForm.style.textAlign = 'center';

      var _iterator2 = _createForOfIteratorHelper(this.formElements()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var element = _step2.value;

          this._customForm.append(element);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var html = this.formHTML();
      if (html !== null) this._customForm.innerHTML = html; // A container that centers the form

      this._formContainer = document.createElement('div');
      this._formContainer.style.justifyContent = 'center';
      this._formContainer.style.alignItems = 'center';
      this._formContainer.style.display = 'flex';
      this._formContainer.style.height = '100%';

      this._formContainer.append(this._customForm);

      this._osweb = document.getElementsByClassName('justify-content-center')[0];
      document.body.append(this._formContainer);
      this._osweb.style.display = 'none';
      window.removeEventListener('keydown', runner._events._keyDownHandler);
      window.removeEventListener('keyup', runner._events._keyUpHandler);

      this._runScripts();
    }
  }, {
    key: "_fontFamily",
    get: function get() {
      var fontFamily = this.vars.get('font_family');
      if (fontFamily === 'sans') return 'sans-serif';
      if (fontFamily === 'mono') return 'monospace';
      return fontFamily;
    }
    /**
     * Gets the padding for all four sides based on the margins variable.
     * @returns {!Array<number>}
     **/

  }, {
    key: "_padding",
    get: function get() {
      if (typeof this._cached_padding === "undefined") this._cached_padding = String(this.vars.get('margins')).split(';').map(Number);
      return this._cached_padding;
    }
    /**
     * Gets the width that takes into account the padding
     * @returns {number}
     **/

  }, {
    key: "_paddedWidth",
    get: function get() {
      if (typeof this._width === "undefined") {
        var _this$_padding = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18___default()(this._padding, 4),
            top = _this$_padding[0],
            right = _this$_padding[1],
            bottom = _this$_padding[2],
            left = _this$_padding[3];

        this._width = this.experiment._runner._renderer.view.clientWidth - right - left;
      }

      return this._width;
    }
    /**
     * Gets the height that takes into account the padding
     * @returns {number}
     **/

  }, {
    key: "_paddedHeight",
    get: function get() {
      if (typeof this._height === "undefined") {
        var _this$_padding2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18___default()(this._padding, 4),
            top = _this$_padding2[0],
            right = _this$_padding2[1],
            bottom = _this$_padding2[2],
            left = _this$_padding2[3];

        this._height = this.experiment._runner._renderer.view.clientHeight - top - bottom;
      }

      return this._height;
    }
  }]);

  return FormHTML;
}(_items_item_js__WEBPACK_IMPORTED_MODULE_25__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/form_multiple_choice.js":
/*!****************************************************!*\
  !*** ./src/js/osweb/items/form_multiple_choice.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormMultipleChoice; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");

























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_22___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing a form-mulitple-choice item.
 * @extends FormHTML
 */

var FormMultipleChoice = /*#__PURE__*/function (_FormHTML) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_21___default()(FormMultipleChoice, _FormHTML);

  var _super = _createSuper(FormMultipleChoice);

  function FormMultipleChoice() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_18___default()(this, FormMultipleChoice);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_19___default()(FormMultipleChoice, [{
    key: "resumeOSWeb",
    value: function resumeOSWeb() {
      var values = [];

      var _iterator = _createForOfIteratorHelper(this._boxes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var box = _step.value;
          if (box.checked) values.push(box.value);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.experiment.vars.set(this.vars.get('form_var'), values.length > 0 ? values.join(';') : 'no');

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_20___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_23___default()(FormMultipleChoice.prototype), "resumeOSWeb", this).call(this);
    }
  }, {
    key: "_boxClicked",
    value: function _boxClicked() {
      if (!this._hasOkButton) setTimeout(this.resumeOSWeb.bind(this), 100);
    }
  }, {
    key: "formElements",
    value: function formElements() {
      this._hasOkButton = this.vars.get('advance_immediately') === 'no' || boxType === 'checkbox';
      var elements = [];
      this._boxes = []; // Create an array of non-empty options

      var options = String(this.vars.get('options')).split('\n').filter(function (option) {
        return option.trim().length > 0;
      });
      var boxType = this.vars.get('allow_multiple') === 'no' ? 'radio' : 'checkbox';
      var elementHeight = 1 / (options.length + (this._hasOkButton ? 3 : 2));
      var title = this.element('h1', this.vars.get('form_title'), elementHeight, 1);
      elements.push(title);
      var question = this.element('p', this.vars.get('question'), elementHeight, 1);
      elements.push(question);

      var _iterator2 = _createForOfIteratorHelper(options),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var option = _step2.value;

          var _this$checkbox = this.checkbox(boxType, option, elementHeight),
              _this$checkbox2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_17___default()(_this$checkbox, 2),
              container = _this$checkbox2[0],
              box = _this$checkbox2[1];

          box.name = 'options';
          box.onclick = this._boxClicked.bind(this);

          this._boxes.push(box);

          elements.push(container);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (this._hasOkButton) {
        var okButton = this.element('input', null, elementHeight, 1 / 3);
        okButton.style.width = '100%';
        this.applyTheme(okButton, true);
        okButton.type = 'button';
        okButton.value = this.vars.get('button_text');
        okButton.onclick = this.resumeOSWeb.bind(this);
        elements.push(okButton);
      }

      return elements;
    }
  }]);

  return FormMultipleChoice;
}(_form_html_js__WEBPACK_IMPORTED_MODULE_24__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/form_text_display.js":
/*!*************************************************!*\
  !*** ./src/js/osweb/items/form_text_display.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormTextDisplay; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing a form text display item.
 * @extends FormHTML
 */

var FormTextDisplay = /*#__PURE__*/function (_FormHTML) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(FormTextDisplay, _FormHTML);

  var _super = _createSuper(FormTextDisplay);

  function FormTextDisplay() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FormTextDisplay);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FormTextDisplay, [{
    key: "formElements",
    value: function formElements() {
      var title = this.element('h1', this.vars.get('form_title'), 1 / 6);
      var text = this.element('p', this.vars.get('form_text'), 4 / 6);
      text.style.textAlign = 'left';
      var okButton = this.element('input', null, 1 / 6, 1 / 3);
      okButton.type = 'button';
      okButton.value = this.vars.get('ok_text');
      okButton.onclick = this.resumeOSWeb.bind(this);
      this.applyTheme(okButton, true);
      return [title, text, okButton];
    }
  }]);

  return FormTextDisplay;
}(_form_html_js__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/form_text_input.js":
/*!***********************************************!*\
  !*** ./src/js/osweb/items/form_text_input.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormTextInput; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing a form text input item.
 * @extends FormHTML
 */

var FormTextInput = /*#__PURE__*/function (_FormHTML) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(FormTextInput, _FormHTML);

  var _super = _createSuper(FormTextInput);

  function FormTextInput() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, FormTextInput);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(FormTextInput, [{
    key: "checkReturnPress",

    /**
     * Is called when a key is pressed in the textarea, and accepts the form
     * input when return is pressed by setting the response variable to the
     * value of the textarea.
     **/
    value: function checkReturnPress(event) {
      if (event.keyCode !== 13) return;
      this.experiment.vars.set(this.vars.get('form_var'), this._textArea.value);
      this.resumeOSWeb();
    }
  }, {
    key: "formElements",
    value: function formElements() {
      var title = this.element('h1', this.vars.get('form_title'), 1 / 8);
      var question = this.element('p', this.vars.get('form_question'), 1 / 8);
      question.style.textAlign = 'left';
      this._textArea = this.element('textarea', null, 6 / 8);
      this.applyTheme(this._textArea, false);
      return [title, question, this._textArea];
    }
  }, {
    key: "_activateTextArea",
    value: function _activateTextArea() {
      this._textArea.focus();

      this._textArea.onkeypress = this.checkReturnPress.bind(this);
    }
  }, {
    key: "run",
    value: function run() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(FormTextInput.prototype), "run", this).call(this); // The textarea is activate after a very short timeout. This avoid previous
      // keypress from being entered as text immediately.


      setTimeout(this._activateTextArea.bind(this), 10);
    }
  }]);

  return FormTextInput;
}(_form_html_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/generic_response.js":
/*!************************************************!*\
  !*** ./src/js/osweb/items/generic_response.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericResponse; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../backends/keyboard.js */ "./src/js/osweb/backends/keyboard.js");
/* harmony import */ var _backends_mouse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../backends/mouse.js */ "./src/js/osweb/backends/mouse.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");




























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_26___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_26___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_25___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/**
 * Class representing a GeneralResponse item.
 * @extends Item
 */

var GenericResponse = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_24___default()(GenericResponse, _Item);

  var _super = _createSuper(GenericResponse);

  /** The sequence class controls the running of a serie of items. */
  function GenericResponse(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21___default()(this, GenericResponse);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Create and set private properties.

    _this._allowed_responses = null;
    _this._duration = 0;
    _this._duration_func = null;
    _this._keyboard = null;
    _this._mouse = null;
    _this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_NONE;
    _this._timeout = -1; // Create and set public properties.

    _this.process_feedback = false;
    _this.synonyms = null;
    return _this;
  }
  /** Implements the complete phase of the general response item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22___default()(GenericResponse, [{
    key: "_complete",
    value: function _complete() {
      // Check if a timeout has occured which must be treaded as a response.
      var timeout = this.vars.get('timeout', true, -1);

      if (timeout !== -1 && this.experiment._runner._events._timeStamp - this.experiment.vars.get('time_' + this.name) > timeout) {
        // Process the timeout none response.
        this.process_response_timeout();
      } // Inherited.


      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_23___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_26___default()(GenericResponse.prototype), "_complete", this).call(this);
    }
    /**
       * Implements the update response phase of the general response item.
       * @param {Object} response - The response object which is evaluated.
       */

  }, {
    key: "_update",
    value: function _update(response) {
      if (response !== null) {
        // Implements the update response phase of the item.
        if (this._responsetype === _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_KEYBOARD && response.type === _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_KEYBOARD) {
          this.process_response_keypress(response);
        } else if (this._responsetype === _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_MOUSE && response.type === _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_MOUSE) {
          this.process_response_mouseclick(response);
        }
      }
    }
    /**
     * Converts a string of semi-colon separated responses to an array of
     * responses.
     **/

  }, {
    key: "_prepare_responses",
    value: function _prepare_responses(responses) {
      if (responses === -1) return null;
      var response_array = String(responses).split(';').map(function (item) {
        return typeof item === 'string' ? item.replace(/^"(.*)"$/g, '$1').trim() : item;
      }).filter(Boolean);
      if (response_array.length === 0) return null;
      var duration = this.vars.get('duration', true, -1);

      if (duration === 'keypress') {
        response_array = this._keyboard._get_default_from_synonym(response_array);
      } else if (duration === 'mouseclick') {
        response_array = this._mouse._get_default_from_synonym(response_array);
      }

      return response_array;
    }
    /** Prepare the list with allowed responses */

  }, {
    key: "prepare_allowed_responses",
    value: function prepare_allowed_responses() {
      this._allowed_responses = this._prepare_responses(this.vars.get('allowed_responses', true, -1));

      if (this._allowed_responses !== null && this._allowed_responses.length === 0) {
        this.experiment._runner._debugger.addError('Defined responses are not valid in keyboard_response: ' + this.name + ' (' + this.vars.get('allowed_responses') + ')');
      }
    }
    /** Prepare the list with correct responses */

  }, {
    key: "prepare_correct_responses",
    value: function prepare_correct_responses() {
      this._correct_responses = this._prepare_responses(this.vars.get('correct_response', true, -1));

      if (this._correct_responses !== null && this._correct_responses.length === 0) {
        this.experiment._runner._debugger.addError('Correct response is not valid in keyboard_response: ' + this.name + ' (' + this.vars.get('correct_response') + ')');
      }
    } // Prepare the duration of the stimulus interaction. */

  }, {
    key: "prepare_duration",
    value: function prepare_duration() {
      this._duration = this.vars.get('duration', true, -1);

      if (this._duration === -1) {
        this._duration = 0;
        return;
      }

      if (this._duration === 'keypress' || this._duration === 'mouseclick' || this._duration === 'sound' || this._duration === 'video') {
        this._final_duration = this._timeout !== null ? this._timeout : -1;

        if (this._duration === 'keypress') {
          this.prepare_duration_keypress();
          this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_KEYBOARD;
        } else if (this._duration === 'mouseclick') {
          this.prepare_duration_mouseclick();
          this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_MOUSE;
        } else if (this._duration === 'sound') {
          this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_SOUND;
        } else if (this._duration === 'video') {
          this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_VIDEO;
        }

        return;
      } // Prepare a duration in milliseconds


      this._duration = Number(this._duration);

      if (this._duration === 0) {
        this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_NONE;
      } else {
        this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_DURATION;
      }
    }
    /** Prepare the system for a keyboard duration interval. */

  }, {
    key: "prepare_duration_keypress",
    value: function prepare_duration_keypress() {
      this._keyboard = new _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_28__["default"](this.experiment);
    }
    /** Prepare the system for a mouseclick duration interval. */

  }, {
    key: "prepare_duration_mouseclick",
    value: function prepare_duration_mouseclick() {
      this._mouse = new _backends_mouse_js__WEBPACK_IMPORTED_MODULE_29__["default"](this.experiment);
    }
    /** Prepare the system for a timeout. */

  }, {
    key: "prepare_timeout",
    value: function prepare_timeout() {
      var timeout = this.vars.get('timeout', true, -1);
      this._timeout = typeof timeout === 'number' && timeout !== -1 ? timeout : null;
    }
    /** Sets duration and allowed responses on the response object. **/

  }, {
    key: "configure_response_objects",
    value: function configure_response_objects() {
      // We get duration again, because this._duration can be set to -1
      var duration = this.vars.get('duration', true, -1);

      if (duration === 'keypress') {
        this._keyboard._set_config(this._final_duration, this._allowed_responses);
      } else if (duration === 'mouseclick') {
        this._mouse._set_config(this._final_duration, this._allowed_responses, false);
      }
    }
    /** Select the type of stimulus response processing. */

  }, {
    key: "process_response",
    value: function process_response() {
      // Start stimulus response cycle.
      switch (this._responsetype) {
        case _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_NONE:
          // Duration is 0, so complete the stimulus/response cycle.
          this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].STATUS_FINALIZE;

          this._complete();

          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_DURATION:
          this.sleep_for_duration();
          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_KEYBOARD:
          this._keyboard.get_key();

          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_MOUSE:
          this._mouse.get_click();

          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_SOUND:
          this._sampler.wait();

          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_30__["constants"].RESPONSE_VIDEO:
          this._video_player.wait();

          break;
      }
    }
    /** Sets the mouse coordinates based **/

  }, {
    key: "set_mouse_coordinates",
    value: function set_mouse_coordinates(clientX, clientY) {
      // We need the top-left and scaling of the viewport to set the mouse
      // coordinates so that 0,0 corresponds to the display center. The scaling
      // needs to be taken into account also such that the viewport always has
      // the same size in cursor coordinates, even if it's scaled down.
      var rect = this._runner._renderer.view.getBoundingClientRect();

      var width = this.experiment.vars.get('width');
      var height = this.experiment.vars.get('height');
      var scale = Math.min((rect.right - rect.left) / width, (rect.bottom - rect.top) / height);
      var center_x = scale * width / 2;
      var center_y = scale * height / 2;
      this.experiment.vars.set('cursor_x', (clientX - center_x - rect.left) / scale);
      this.experiment.vars.set('cursor_y', (clientY - center_y - rect.top) / scale);
    }
    /** Process a keyboard response. */

  }, {
    key: "process_response_keypress",
    value: function process_response_keypress(retval) {
      this.experiment._start_response_interval = this.sri;
      this.experiment._end_response_interval = retval.rtTime;
      var response = this.syntax.sanitize(retval.resp);
      this.experiment.vars.set('response', response);
      this.synonyms = this._keyboard._synonyms(response);
      this.response_bookkeeping();
    }
    /** Process a mouse click response. */

  }, {
    key: "process_response_mouseclick",
    value: function process_response_mouseclick(retval) {
      this.experiment._start_response_interval = this.sri;
      this.experiment._end_response_interval = retval.rtTime;
      this.experiment.vars.response = retval.resp;
      this.synonyms = this._mouse._synonyms(this.experiment.vars.response);
      this.set_mouse_coordinates(retval.event.clientX, retval.event.clientY);
      this.response_bookkeeping();
    }
    /** Process a time out response. */

  }, {
    key: "process_response_timeout",
    value: function process_response_timeout() {
      this.experiment._start_response_interval = this.sri;
      this.experiment._end_response_interval = this.experiment._runner._events._timeStamp;
      this.experiment.vars.set('response', 'None');
      this.synonyms = ['None', 'none'];
      this.response_bookkeeping();
    }
    /** General response logging after a stimulus/response. */

  }, {
    key: "response_bookkeeping",
    value: function response_bookkeeping() {
      // The respone and response_time variables are always set, for every response item
      this.experiment.vars.set('response_time', this.experiment._end_response_interval - this.experiment._start_response_interval);
      this.experiment.vars.set('response_' + this.name, this.experiment.vars.get('response'));
      this.experiment.vars.set('response_time_' + this.name, this.experiment.vars.get('response_time'));
      this.experiment._start_response_interval = null; // But correctness information is only set for dedicated response items,
      // such as keyboard_response items, because otherwise we might confound the
      // feedback

      if (this.process_feedback !== true) return;

      if (this._correct_responses === null) {
        this.experiment.vars.set('correct', 'undefined');
      } else {
        this.experiment.vars.set('correct', 0);

        var _iterator = _createForOfIteratorHelper(this._correct_responses),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cr = _step.value;

            if (this.synonyms.includes(cr)) {
              this.experiment.vars.set('correct', 1);
              this.experiment.vars.set('total_correct', this.experiment.vars.get('total_correct') + 1);
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      this.experiment.vars.set('total_response_time', this.experiment.vars.get('total_response_time') + this.experiment.vars.get('response_time'));
      this.experiment.vars.set('total_responses', this.experiment.vars.get('total_responses') + 1);
      this.experiment.vars.set('accuracy', Math.round(100.0 * this.experiment.vars.get('total_correct') / this.experiment.vars.get('total_responses')));
      this.experiment.vars.set('acc', this.experiment.vars.get('accuracy'));
      this.experiment.vars.set('average_response_time', Math.round(this.experiment.vars.get('total_response_time') / this.experiment.vars.get('total_responses')));
      this.experiment.vars.set('avg_rt', this.experiment.vars.get('average_response_time'));
      this.experiment.vars.set('correct_' + this.name, this.experiment.vars.get('correct'));
    }
    /**
     * Sets or resets the start of the stimulus response interval.
     * @param {Boolean} reset - If true reset the sri value.
     **/

  }, {
    key: "set_sri",
    value: function set_sri(reset) {
      // Sets the start of the response interval.
      if (reset === true) {
        this.sri = self.vars.get('time_' + this.name);
        this.experiment._start_response_interval = this.vars.get('time_' + this.name);
      }

      if (!this.experiment._start_response_interval) {
        this.sri = this.experiment.vars.get('time_' + this.name);
      } else {
        this.sri = this.experiment._start_response_interval;
      }
    }
    /** Sleep for a specified time. */

  }, {
    key: "sleep_for_duration",
    value: function sleep_for_duration() {
      this.sleep(this._duration);
    }
    /** Implements the prepare phase of the general response item. */

  }, {
    key: "prepare",
    value: function prepare() {
      this.prepare_timeout();
      this.prepare_duration();
      this.prepare_allowed_responses();
      this.prepare_correct_responses();
      this.configure_response_objects();

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_23___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_26___default()(GenericResponse.prototype), "prepare", this).call(this);
    }
  }]);

  return GenericResponse;
}(_item_js__WEBPACK_IMPORTED_MODULE_27__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/inline_html.js":
/*!*******************************************!*\
  !*** ./src/js/osweb/items/inline_html.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineHTML; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.reverse */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_20___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing custom HTML code
 * @extends FormHTML
 */

var InlineHTML = /*#__PURE__*/function (_FormHTML) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_19___default()(InlineHTML, _FormHTML);

  var _super = _createSuper(InlineHTML);

  function InlineHTML() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_16___default()(this, InlineHTML);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_17___default()(InlineHTML, [{
    key: "reset",
    value: function reset() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_18___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21___default()(InlineHTML.prototype), "reset", this).call(this);

      this.vars.set('htm', '');
    }
    /**
     * @return {string} - the HTML content
     **/

  }, {
    key: "formHTML",
    value: function formHTML() {
      // The goal is to evaluate only the non-script parts of the HTML. To
      // accomplish this, we first get all script blocks and determine the
      // to-be-evaluated parts based on whatever is in-between. Finally, we
      // reverse the indices and evaluate the to-be-evaluated HTML parts from the
      // end to the beginning.
      var html = this.vars.get('html', false);
      var start_pos = 0;
      var to_eval = [];

      var _iterator = _createForOfIteratorHelper(html.matchAll(/<script>[\s\S]*?<\/script>/ig)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var match = _step.value;
          to_eval.push([start_pos, match.index]);
          start_pos = match.index + match[0].length;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      to_eval.reverse();

      for (var _i = 0, _to_eval = to_eval; _i < _to_eval.length; _i++) {
        var _to_eval$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_15___default()(_to_eval[_i], 2),
            start = _to_eval$_i[0],
            end = _to_eval$_i[1];

        html = html.slice(0, start) + this.syntax.eval_text(html.slice(start, end)) + html.slice(end);
      }

      return html;
    }
    /**
     * Returns an array of all form input elements, including select and textarea
     * elements.
     **/

  }, {
    key: "_inputElements",
    value: function _inputElements() {
      return Array.from(document.getElementsByTagName('input')).concat(Array.from(document.getElementsByTagName('select'))).concat(Array.from(document.getElementsByTagName('textarea')));
    }
    /**
     * Sets experimental variables based on the name properties of input elements
     * and then resumes OSWeb.
     **/

  }, {
    key: "_submitForm",
    value: function _submitForm() {
      var _iterator2 = _createForOfIteratorHelper(this._inputElements()),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          if (!input.required) continue;

          if (['checkbox', 'radio'].includes(input.type) && !this._groupChecked(input) || !['checkbox', 'radio'].includes(input.type) && input.value === '') {
            alert('One or more required input fields are empty or have not been checked');
            return;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(this._inputElements()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _input = _step3.value;

          if (['checkbox', 'radio'].includes(_input.type)) {
            // If a checkbox or radio button is checked, set the value to the `id`
            // attribute if an `id` attribute has been defined. This is especially
            // important for radio-group buttons, which all share the same `name`
            // attribute. If no `id` has been defined, fall back to the `value`
            // attribute, which is 'on' for checked elements.
            if (_input.checked) {
              this.experiment.vars.set(_input.name, _input.id !== '' ? _input.id : _input.value);
            }
          } else {
            this.experiment.vars.set(_input.name, _input.value);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.resumeOSWeb();
    }
    /**
     * Checks where any element from a group of input elements is checked. This
     * allows for the required attribute to serve as expected for radio-button
     * groups.
     **/

  }, {
    key: "_groupChecked",
    value: function _groupChecked(input) {
      if (input.name === "") return input.checked;

      var _iterator4 = _createForOfIteratorHelper(document.getElementsByName(input.name)),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          input = _step4.value;
          if (input.checked) return true;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return false;
    }
  }, {
    key: "run",
    value: function run() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_18___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_21___default()(InlineHTML.prototype), "run", this).call(this); // Disable the submit action of form elements, in case the user has added
      // (unnecessary) form tags


      var _iterator5 = _createForOfIteratorHelper(document.getElementsByTagName('form')),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var form = _step5.value;

          form.onsubmit = function () {
            return false;
          };
        } // Bind input elements of type submit to the custom submit action

      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      var _iterator6 = _createForOfIteratorHelper(document.getElementsByTagName('input')),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var input = _step6.value;
          if (input.type === 'submit') input.onclick = this._submitForm.bind(this);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
    }
  }]);

  return InlineHTML;
}(_form_html_js__WEBPACK_IMPORTED_MODULE_22__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/inline_javascript.js":
/*!*************************************************!*\
  !*** ./src/js/osweb/items/inline_javascript.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineJavaScript; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");














function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing an inline item.
 * @extends Item
 */

var InlineJavaScript = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(InlineJavaScript, _Item);

  var _super = _createSuper(InlineJavaScript);

  /**
     * Create an inline item which executes inline python code.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function InlineJavaScript(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, InlineJavaScript);

    // Inherited create.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'Executes JavaScript code (ECMA 5.1)';
    _this.workspace = experiment._javascriptWorkspace; // Process the script

    _this.from_string(script);

    return _this;
  }
  /** Reset all item variables to their default value. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(InlineJavaScript, [{
    key: "reset",
    value: function reset() {
      this.vars.set('_prepare', '');
      this.vars.set('_run', '');
    }
    /**
       * Parse a definition string and retrieve all properties of the item.
       * @param {String} script - The script containing the properties of the item.
       */

  }, {
    key: "from_string",
    value: function from_string(script) {
      // Parses a definition string.
      this.reset(); // Split the string into an array of lines.

      if (script !== null) {
        var read_run_lines = false;
        var read_prepare_lines = false;
        var lines = script.split('\n');

        for (var i = 0; i < lines.length; i++) {
          var tokens = this.syntax.split(lines[i]);

          if (tokens !== null && tokens.length > 0) {
            switch (tokens[0]) {
              case 'set':
                this.parse_variable(lines[i]);
                break;

              case '__end__':
                read_run_lines = false;
                read_prepare_lines = false;
                break;

              case '___prepare__':
                read_prepare_lines = true;
                break;

              case '___run__':
                read_run_lines = true;
                break;

              default:
                if (read_run_lines === true) {
                  this.vars.set('_run', this.vars.get('_run', false) + lines[i] + '\n');
                } else if (read_prepare_lines === true) {
                  this.vars.set('_prepare', this.vars.get('_prepare', false) + lines[i] + '\n');
                }

            }
          } else {
            if (read_run_lines === true) {
              this.vars.set('_run', this.vars.get('_run', false) + lines[i] + '\n');
            } else if (read_prepare_lines === true) {
              this.vars.set('_prepare', this.vars.get('_prepare', false) + lines[i] + '\n');
            }
          }
        }
      }
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      this.workspace.exec(this.vars.get('_prepare', false));

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(InlineJavaScript.prototype), "prepare", this).call(this);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(InlineJavaScript.prototype), "run", this).call(this);

      this.set_item_onset();
      this.workspace.exec(this.vars.get('_run', false));

      this._complete();
    }
  }]);

  return InlineJavaScript;
}(_item_js__WEBPACK_IMPORTED_MODULE_13__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/inline_script.js":
/*!*********************************************!*\
  !*** ./src/js/osweb/items/inline_script.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineScript; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing an inline item.
 * @extends Item
 */

var InlineScript = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(InlineScript, _Item);

  var _super = _createSuper(InlineScript);

  /**
     * Create an inline item which executes inline python code.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function InlineScript(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, InlineScript);

    // Inherited create.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'Executes Python code'; // Define and set the public properties.

    _this._prepare_run = false;
    _this._prepare_tree = null;
    _this._run_tree = null; // Process the script.

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(InlineScript, [{
    key: "_complete",
    value: function _complete() {
      // Check if the parser is in pause mode and must be restarted.
      if (this.experiment._runner._pythonParser._status === 1) {
        // Process the current active node.
        this.experiment._runner._pythonParser._process_nodes();
      } else {
        if (this._prepare_run === true) {
          // Inherited prepare.
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(InlineScript.prototype), "prepare", this).call(this);
        } else {
          // Inherited.
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(InlineScript.prototype), "_complete", this).call(this);
        }
      }
    }
    /** Implements the complete script phase of an item. */

  }, {
    key: "_complete_script",
    value: function _complete_script() {
      // Added for video script functionaliry.
      this._complete();
    }
    /** Reset all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      this.vars.set('_prepare', '');
      this.vars.set('_run', '');
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Compile the script code to ast trees.
      this._prepare_tree = this.experiment._runner._pythonParser._parse(this.vars.get('_prepare'));
      this._run_tree = this.experiment._runner._pythonParser._parse(this.vars.get('_run')); // Execute the run code.

      if (this._prepare_tree !== null) {
        // Set the current item.
        this.experiment._runner._events._currentItem = this; // Set the prepare run toggle.

        this._prepare_run = true; // Record the onset of the current item.

        this.set_item_onset(); // Start the parser

        this.experiment._runner._pythonParser._run(this, this._prepare_tree);
      } else {
        // Inherited.
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(InlineScript.prototype), "prepare", this).call(this);
      }
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(InlineScript.prototype), "run", this).call(this); // Set the prepare run toggle.


      this._prepare_run = false; // Record the onset of the current item.

      this.set_item_onset(); // Execute the run code.

      if (this._run_tree !== null) {
        // Start the parser
        this.experiment._runner._pythonParser._run(this, this._run_tree);
      } else {
        // To prevent prepeare script from running twice.
        this.experiment._runner._pythonParser._status = 0; // No script, so jump to compelte.

        this._complete();
      }
    }
  }]);

  return InlineScript;
}(_item_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/item.js":
/*!************************************!*\
  !*** ./src/js/osweb/items/item.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _classes_var_store_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../classes/var_store.js */ "./src/js/osweb/classes/var_store.js");
/* harmony import */ var _classes_workspace_var_store_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../classes/workspace_var_store.js */ "./src/js/osweb/classes/workspace_var_store.js");
/* harmony import */ var _backends_clock_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../backends/clock.js */ "./src/js/osweb/backends/clock.js");


















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





/** Class representing an OpenSesame item. */

var Item = /*#__PURE__*/function () {
  function Item(experiment, name, script) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_15___default()(this, Item);

    // Create and set private properties.
    this._parent = null;
    this._runner = experiment.constructor.name === 'Runner' ? experiment : experiment._runner;
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_17__["constants"].STATUS_NONE; // Create and set public properties.

    this.clock = experiment.constructor.name === 'Runner' ? new _backends_clock_js__WEBPACK_IMPORTED_MODULE_20__["default"](this) : experiment.clock;
    this.count = 0;
    this.experiment = experiment.constructor.name === 'Runner' ? this : experiment;
    this.name = name;
    this.python_workspace = this._runner._pythonWorkspace;
    this.response_store = this._runner._responseStore;
    this.syntax = this._runner._syntax; // The experiment object has a special VarStore that maps onto the 
    // JavaScript worskpace.

    if (experiment.constructor.name === 'Runner') this.vars = new _classes_workspace_var_store_js__WEBPACK_IMPORTED_MODULE_19__["default"](this);else this.vars = new _classes_var_store_js__WEBPACK_IMPORTED_MODULE_18__["default"](this, this.experiment.vars);
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_16___default()(Item, [{
    key: "_complete",
    value: function _complete() {
      // Adjust the status of the item.
      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_17__["constants"].STATUS_FINALIZE; // Implements the complete phase of the item.

      if (this._parent !== null && this._runner._events._currentItem) {
        // Return the process control to the parent of the element.
        this._runner._events._currentItem = this._parent;

        this._runner._events._currentItem.run();
      }
    }
    /** Implements the prepare complete phase of an item. */

  }, {
    key: "_prepare_complete",
    value: function _prepare_complete() {}
    /** Implements the update phase of an item. */

  }, {
    key: "_update",
    value: function _update(response) {}
    /**
       * Pauses the object execution. !WARNING This function can not be implemented due the script blocking of javascript.
       * @param {Number} pMs - The sleep time in milliseconds.
       */

  }, {
    key: "sleep",
    value: function sleep(pMs) {
      this.clock.sleep(pMs);
    }
    /**
       * Returns the current time.
       * @returns {Number} - The current time in ms from the start of the experiment.
       */

  }, {
    key: "time",
    value: function time() {
      // Returns the current time.
      return this.clock.time();
    }
    /**
       * Parses comments from a single definition line, indicated by # // or '.
    .    * @param {String} line - The definition line to be parsed.
       * @returns {Boolean} - Return true if the commennt is succesfully parsed.
       */

  }, {
    key: "parse_comment",
    value: function parse_comment(line) {
      // Parses comments from a single definition line, indicated by # // or '.
      line = line.trim();

      if (line.length > 0 && line.charAt(0) === '#') {
        // Add comments to the array removing the first character.
        this.comments.push(line.slice(1));
        return true;
      } else if (line.length > 1 && line.charAt(0) === '/') {
        // Add comments to the array removing the first two characters.
        this.comments.push(line.slice(2));
        return true;
      } else {
        return false;
      }
    }
    /**
       * Parses keywords  from a single definition line.
       * @param {String} line - The definition line to be parsed.
       * @param {Boolean} fromAscii - If true the source is ascii.
       * @param {Boolean} evaluate - If true the keyword is evaluated.
       * @returns {Object} - Returns the keywords found in the line.
       */

  }, {
    key: "parse_keyword",
    value: function parse_keyword(line, fromAscii, evaluate) {}
    /**
       * Implements arbitrary line parsing, for item-specific requirements.
       * @param {String} line - The definition line to be parsed.
       */

  }, {
    key: "parse_line",
    value: function parse_line(line) {}
    /**
      * Reads a single variable from a single definition line.
      * @param {String} line - The definition line to be parsed.
      * @return {Boolean} - Return true if the variabel is succesfully parsed.
      */

  }, {
    key: "parse_variable",
    value: function parse_variable(line) {
      // Reads a single variable from a single definition line.
      if (this.parse_comment(line)) {
        return true;
      } else {
        // Split the single line into a set of tokens.
        var _this$_runner$_syntax = this._runner._syntax.parse_cmd(line),
            _this$_runner$_syntax2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14___default()(_this$_runner$_syntax, 3),
            cmd = _this$_runner$_syntax2[0],
            args = _this$_runner$_syntax2[1],
            _kwargs = _this$_runner$_syntax2[2];

        if (cmd === 'set') {
          if (args.length !== 2) {
            this._runner._debugger.addError('Failed to parse definition: ' + line);
          } else {
            this.vars.set(args[0], args[1]);
            return true;
          }
        } else {
          return false;
        }
      }
    }
    /**
     * Parses multiline variables from a script
     * @param {String} script - The definition script line to be parsed.
     */

  }, {
    key: "parse_multiline_vars",
    value: function parse_multiline_vars(script) {
      var vars = this.syntax.parse_multiline_vars(script);

      for (var key in vars) {
        this.vars.set(key, vars[key]);
      }
    }
    /**
     * Parses the item from a definition string.
     * @param {String} script - The definition script line to be parsed.
     */

  }, {
    key: "from_string",
    value: function from_string(script) {
      // Parses the item from a definition string.
      this.variables = {};
      this.comments = [];
      this.reset(); // Split the string into an array of lines. We keep track of whether we're
      // inside a multiline variable definition, because those contain lines that
      // are not syntactically valid.

      if (script !== null) {
        this.parse_multiline_vars(script);
        var lines = script.split('\n');
        var in_multi = false;

        var _iterator = _createForOfIteratorHelper(lines),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var line = _step.value;

            if (in_multi) {
              if (line === '__end__') in_multi = false;
              continue;
            }

            if (/__([0-9A-Z_a-z]+)__/gm.test(line)) {
              in_multi = true;
              continue;
            }

            if (line !== '' && this.parse_variable(line) === false) {
              this.parse_line(line);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /** Implements the reset item variables method. */

  }, {
    key: "reset",
    value: function reset() {}
    /** Implements the prepeare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Set the internal counter.
      this.experiment.vars.set('count_' + this.name, this.count);
      this.count++; // Set the status to initialize.

      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_17__["constants"].STATUS_INITIALIZE; // For debugging.

      this._runner._debugger.addMessage('prepare ' + this.name); // Implements the complete phase of the item (to support blocking script in the prepare phase).


      if (!(this.type === 'sequence' && this._parent.type === 'sequence')) {
        if (this._parent !== null && this.type !== 'feedback') {
          // Prepare cycle of parent.
          this._parent._prepare_complete();
        }
      }
    }
    /**
       * Set a onset time stamp before running an item.
       * @param {Number} time - The time to store as onset time.
       */

  }, {
    key: "set_item_onset",
    value: function set_item_onset(time) {
      // Set a timestamp for the item's executions
      time = typeof time === 'undefined' ? this.clock.time() : time; // Add the time stamp to the variable list.

      this.experiment.vars.set('time_' + this.name, time);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      this._runner._debugger.addMessage('run ' + this.name);
    }
  }]);

  return Item;
}();



/***/ }),

/***/ "./src/js/osweb/items/keyboard_response.js":
/*!*************************************************!*\
  !*** ./src/js/osweb/items/keyboard_response.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyboardResponse; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../backends/keyboard.js */ "./src/js/osweb/backends/keyboard.js");




















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_18___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_18___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_17___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a keyboard response item.
 * @extends GenericResponse
 */

var KeyboardResponse = /*#__PURE__*/function (_GenericResponse) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_16___default()(KeyboardResponse, _GenericResponse);

  var _super = _createSuper(KeyboardResponse);

  /**
     * Create a keyboard response item which waits for a keyboard response.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function KeyboardResponse(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default()(this, KeyboardResponse);

    _this = _super.call(this, experiment, name, script);
    _this.description = 'Collects keyboard responses';
    _this._flush = 'yes';
    _this._keyboard = new _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_20__["default"](_this.experiment);

    _this.from_string(script);

    return _this;
  }
  /** Resets all item variables to their default value. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default()(KeyboardResponse, [{
    key: "reset",
    value: function reset() {
      this.process_feedback = true;
      this.vars.set("allowed_responses", null);
      this.vars.set("correct_response", null);
      this.vars.set('duration', 'keypress');
      this.vars.set('flush', 'yes');
      this.vars.set('timeout', 'infinite');
    }
    /** Implements the prepare phase of the KeyboardResponse. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_15___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_18___default()(KeyboardResponse.prototype), "prepare", this).call(this);
    }
    /** Implements the run phase of the KeyboardResponse. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_15___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_18___default()(KeyboardResponse.prototype), "run", this).call(this); // Record the onset of the current item.


      this.set_item_onset(); // Flush responses, to make sure that earlier responses are not carried over.

      if (this.vars.get('flush') === 'yes') {
        this._keyboard.flush();
      }

      this.set_sri();
      this.process_response();
    }
  }, {
    key: "coroutine",
    value: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.mark(function coroutine() {
      var _this2 = this;

      var keyDownHandler, proceed;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_11___default.a.wrap(function coroutine$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              keyDownHandler = function keyDownHandler(event) {
                var keypress = _this2.experiment._runner._events._processKeyboardEvent(event, 1);

                var allowed_responses = 'all';

                if (_this2.vars.get('allowed_responses')) {
                  allowed_responses = _this2._keyboard._get_default_from_synonym(_this2.vars.get('allowed_responses').split(';').map(function (key) {
                    return key.trim();
                  }));
                }

                if (allowed_responses === 'all' || allowed_responses.includes(keypress.resp)) {
                  _this2.response = keypress;
                }
              };

              window.addEventListener('keydown', keyDownHandler);
              _context.next = 4;
              return;

            case 4:
              // Record the onset of the current item.
              this.set_item_onset();
              this.set_sri();
              proceed = true;
              this.response = null;

            case 8:
              if (!(!this.response && proceed)) {
                _context.next = 14;
                break;
              }

              _context.next = 11;
              return true;

            case 11:
              proceed = _context.sent;
              _context.next = 8;
              break;

            case 14:
              window.removeEventListener('keydown', keyDownHandler);
              if (this.response) this.process_response_keypress(this.response);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, coroutine, this);
    })
  }]);

  return KeyboardResponse;
}(_generic_response_js__WEBPACK_IMPORTED_MODULE_19__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/logger.js":
/*!**************************************!*\
  !*** ./src/js/osweb/items/logger.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logger; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");


























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_23___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a logger item.
 * @extends Item
 */

var Logger = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_22___default()(Logger, _Item);

  var _super = _createSuper(Logger);

  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} pExperiment - The experiment item to which the item belongs.
     * @param {String} pName - The unique name of the item.
     * @param {String} pScript - The script containing the properties of the item.
     */
  function Logger(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_19___default()(this, Logger);

    _this = _super.call(this, experiment, name, script);
    _this.description = 'Logs experimental data';

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_20___default()(Logger, [{
    key: "_complete",
    value: function _complete() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default()(Logger.prototype), "_complete", this).call(this);
    }
    /** Reset all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      this.logvars = [];
      this.exclude_patterns = [];
      this.vars.set('auto_log', 'yes');
    }
    /**
       * Parse a definition string and retrieve all properties of the item.
       * @param {String} script - The script containing the properties of the item.
       */

  }, {
    key: "from_string",
    value: function from_string(script) {
      this.reset();
      var key;
      var val;

      if (script !== null) {
        var lines = script.split('\n');

        for (var i = 0; i < lines.length; i++) {
          if (lines[i] !== '' && this.parse_variable(lines[i]) === false) {
            var tokens = this.syntax.split(lines[i]);

            if (tokens.length > 1) {
              key = tokens[0];
              val = this.syntax.remove_quotes(tokens[1]);

              if (key === 'log') {
                this.logvars.push(val);
              } else if (key === 'exclude') {
                // Convert the unix-style filename pattern matching to regular
                // expressions.
                this.exclude_patterns.push(new RegExp(val.replaceAll('\*', '.*').replaceAll('\?', '.')));
              }
            }
          }
        }
      }

      this.logvars.sort();
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_21___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_24___default()(Logger.prototype), "run", this).call(this);

      if (this._status !== _system_constants_js__WEBPACK_IMPORTED_MODULE_26__["constants"].STATUS_FINALIZE) {
        this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_26__["constants"].STATUS_FINALIZE;
        this.set_item_onset();
        var logvars = this.logvars;
        if (this.vars.get('auto_log') === 'yes') logvars = logvars.concat(this.experiment.vars.inspect());

        var _iterator = _createForOfIteratorHelper(this.exclude_patterns),
            _step;

        try {
          var _loop = function _loop() {
            var exclude_pattern = _step.value;
            logvars = logvars.filter(function (key) {
              return !key.match(exclude_pattern);
            });
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.experiment._log.write_vars(logvars.sort());

        this._complete();
      }
    }
  }]);

  return Logger;
}(_item_js__WEBPACK_IMPORTED_MODULE_25__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/loop.js":
/*!************************************!*\
  !*** ./src/js/osweb/items/loop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loop; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "./node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js");
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _util_matrix__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../util/matrix */ "./src/js/osweb/util/matrix.js");
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! csv-parse/lib/sync */ "./node_modules/csv-parse/lib/sync.js");
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_35__);

































function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_26___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/**
 * Class representing a sequence item.
 * @extends Item
 */

var Loop = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_25___default()(Loop, _Item);

  var _super = _createSuper(Loop);

  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} experiment - The experiment item to which the item belongs.
   * @param {String} name - The unique name of the item.
   * @param {String} script - The script containing the properties of the item.
   */
  function Loop(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_22___default()(this, Loop);

    // Inherited create.
    _this = _super.call(this, experiment, name, script); // Definition of public properties.

    _this.description = 'Repeatedly runs another item';
    _this.matrix = null; // Definition of private properties.

    _this._break_if = '';
    _this._cycles = [];
    _this._index = 0;
    _this._keyboard = null;
    _this._operations = [];
    _this._initialized = false; // Process the script.

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_23___default()(Loop, [{
    key: "_complete",
    value: function _complete() {
      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_32__["constants"].STATUS_FINALIZE;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_24___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27___default()(Loop.prototype), "_complete", this).call(this);
    }
    /**
     * Scans the provided list of argument for variables and retrieves them if found.
     * The function works recursively and thus also parses elements inside arrays that are part of
     * args.
     *
     * @param {array} args The list of arguments to parse.
     * @returns {array} The parsed arguments list
     */

  }, {
    key: "_eval_args",
    value: function _eval_args(args) {
      var _this2 = this;

      if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_30___default()(args)) return args;
      return args.map(function (el) {
        if (lodash_isArray__WEBPACK_IMPORTED_MODULE_30___default()(el)) {
          return _this2._eval_args(el);
        } else {
          return _this2._runner._syntax.remove_quotes(_this2._runner._syntax.eval_text(el));
        }
      });
    }
    /** Reset all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      this.orig_matrix = [];
      this.vars.set("cycles", 1);
      this.vars.set("repeat", 1);
      this.vars.set("skip", 0);
      this.vars.set('offset', 'no');
      this.vars.set('order', 'random');
      this.vars.set('item', '');
      this.vars.set('break_if', 'never');
      this.vars.set('source', 'table');
      this.vars.set('source_file', '');
      this._index = 0;
      this._operations = [];
      this._initialized = false;
    }
    /**
     * Parse a definition string and retrieve all properties of the item.
     * @param {String} script - The script containing the properties of the item.
     */

  }, {
    key: "from_string",
    value: function from_string(script) {
      // Creates a loop from a definition in a string.
      this.comments = [];
      this.variables = {};
      this.reset(); // Split the string into an array of lines.

      if (script != null) {
        var lines = script.split('\n');

        for (var i = 0; i < lines.length; i++) {
          if (lines[i] !== '' && this.parse_variable(lines[i]) === false) {
            var _this$syntax$split = this.syntax.split(lines[i]),
                _this$syntax$split2 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_21___default()(_this$syntax$split),
                instruction = _this$syntax$split2[0],
                params = _this$syntax$split2.slice(1);

            var cycle = void 0,
                name = void 0,
                value = void 0;

            switch (instruction) {
              case 'run':
                if (params.length > 0) this.vars.set('item', params[0]);
                break;

              case 'setcycle':
                if (params.length <= 2) {
                  this._runner._debugger.addError("Incorrect setcycle command in item ".concat(this.name));

                  break;
                }

                cycle = params[0];
                name = params[1];
                value = this.syntax.remove_quotes(params[2]); // Check if the value is numeric

                value = lodash_isNumber__WEBPACK_IMPORTED_MODULE_31___default()(value) ? Number(value) : value; // If a python expression, convert to javascript.

                if (value[0] === '=') {
                  // Parse the python statement.
                  value = this._runner._pythonParser._prepare(value.slice(1));

                  if (value !== null) {
                    value = value.body[0];
                  }
                }

                if (this.orig_matrix[cycle] === undefined) {
                  this.orig_matrix[cycle] = {};
                }

                this.orig_matrix[cycle][name] = value;
                break;

              case 'fullfactorial':
                this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_34__["fullfactorial"], []]);

                break;

              case 'shuffle':
                this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_34__["shuffleVert"], [params]]);

                break;

              case 'shuffle_horiz':
                this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_34__["shuffleHoriz"], [params]]);

                break;

              case 'slice':
                this._operations.push([function (matrix, args) {
                  return matrix.slice.apply(matrix, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(args));
                }, [params]]);

                break;

              case 'sort':
                this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_34__["sortCol"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(params)]);

                break;

              case 'sortby':
                this._operations.push([lodash_sortBy__WEBPACK_IMPORTED_MODULE_28___default.a, [params]]);

                break;

              case 'reverse':
                this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_34__["reverseRows"], [params]]);

                break;

              case 'roll':
                this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_34__["roll"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(params)]);

                break;

              case 'weight':
                this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_34__["weight"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(params)]);

                break;
            }
          }
        }
      }
    }
    /**
     * Prepares the variables for one single cycle within the loop.
     * @param {Number} cycle -The cycle to apply.
     */

  }, {
    key: "apply_cycle",
    value: function apply_cycle(cycle) {
      // Sets all the loop variables according to the cycle.
      if (cycle in this.matrix) {
        for (var variable in this.matrix[cycle]) {
          // Get the value of the variable.
          var value = this.matrix[cycle][variable]; // Check for python expression.

          if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_19___default()(value) === 'object') {
            // value contains ast tree, run the parser.
            try {
              // Evaluate the expression
              value = this._runner._pythonParser._runstatement(value);
            } catch (e) {
              // Error during evaluation.
              this._runner._debugger.addError('Failed to evaluate expression in in loop item: ' + this.name + ' (' + value + ')');
            }
          } else {
            // Evaluate variabels potentially available in value.
            value = this._runner._syntax.eval_text(value);
          } // Set the variable.


          this.experiment.vars.set(variable, value);
        }
      }
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Make sure the item to run exists.
      var item = this.vars.get('item');

      if (this.experiment.items._items[item] === 'undefined') {
        this._runner._debugger.addError('Could not find an item which is called by loop item: ' + this.name + ' (' + item + ')');
      }

      if (this.vars.get('source') === 'file') this.parseFileSource();
      this._initialized = false;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_24___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27___default()(Loop.prototype), "prepare", this).call(this);

      this.set_item_onset();
    }
    /** Reads the loop table from a csv file in the file pool **/

  }, {
    key: "parseFileSource",
    value: function parseFileSource() {
      var src = this.vars.get('source_file');

      if (!src.toLowerCase().endsWith('.csv')) {
        throw 'Only csv files are supported as source files by loop items';
      }

      if (typeof this._runner._pool[src] === 'undefined') {
        throw 'Loop item refers to non-existing source file: ' + src;
      }

      this.orig_matrix = csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_35___default()(this._runner._pool[src].data, {
        columns: true,
        skip_empty_lines: true
      });
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      var _this3 = this;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_24___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_27___default()(Loop.prototype), "run", this).call(this);

      if (!this._initialized) {
        // The first step is to create an array of cycle indices (`cycles`). We
        // first add the integer part of the repeats to this array, which results
        // in a `cycles` array with a length that is a multiple of the original
        // matrix length.
        var cycles = [];
        var wholeRepeats = Math.floor(this.vars.get('repeat'));

        for (var j = 0; j < wholeRepeats; j++) {
          for (var i in this.orig_matrix) {
            cycles.push(i);
          }
        } // Next, we add the non-integer part of the repeats to the cycles array.


        var partialRepeats = this.vars.get('repeat') - wholeRepeats;
        var order = this.vars.get('order');

        if (partialRepeats > 0) {
          // Get an array of all cycles indices. (This syntax is like a range().)
          // For randomly ordered loops, shuffle the order of the indices.
          // This makes sure that the next step of determining the repeatcycles
          // is a 'random selection without replacement'
          var allCycles = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(Array(this.orig_matrix.length).keys());

          if (order === 'random') {
            allCycles = lodash_shuffle__WEBPACK_IMPORTED_MODULE_29___default()(allCycles);
          } // Add the remaining cycles to the cycles array


          var remainder = Math.floor(this.orig_matrix.length * partialRepeats);
          cycles = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(cycles), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(allCycles.splice(0, remainder)));
        }

        if (order === 'random') {
          cycles = lodash_shuffle__WEBPACK_IMPORTED_MODULE_29___default()(cycles);
        } // Create a live matrix that takes into account the repeats and the
        // shuffles.


        this.matrix = [];

        for (var k in cycles) {
          this.matrix.push(this.orig_matrix[cycles[k]]);
        } // Perform the operations. This may change the number of cycles, which
        // is why this._cycles is only determined afterwards.


        this.matrix = this._operations.reduce(function (mtrx, _ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_18___default()(_ref, 2),
              func = _ref2[0],
              args = _ref2[1];

          return func.apply(void 0, [mtrx].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(_this3._eval_args(args))));
        }, this.matrix);
        this._cycles = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_20___default()(this.matrix.keys());
        this._initialized = true;
        this._index = null;
      } // end init
      // Check if if the cycle must be repeated.


      if (this.experiment.vars.get('repeat_cycle', true, -1) === 1 && this._index !== null) {
        this._runner._debugger.msg('Repeating cycle: ' + this._index);

        this._cycles.push(this._index);

        if (this.vars.get('order') === 'random') {
          this._cycles = lodash_shuffle__WEBPACK_IMPORTED_MODULE_29___default()(this._cycles);
        }
      } // When the loop is finished


      if (this._cycles.length == 0) {
        this._complete();

        return;
      } // Prepare for the current cycle


      this._index = this._cycles.shift();
      this.apply_cycle(this._index);
      this.experiment.vars.set('repeat_cycle', 0); // Process the break-if statement

      var break_if_val = this.vars.get('break_if', false);
      this._break_if = ['never', ''].includes(break_if_val) ? null : break_if_val;

      if (this._break_if !== null) {
        this.python_workspace['this'] = this;

        if (this.experiment._javascriptWorkspace._eval(this._break_if)) {
          this._complete();

          this._initialized = false;
          return;
        }
      } // Execute the item to run


      var item = this.vars.get('item');

      if (this._runner._itemStore._items[item].type === 'sequence') {
        this._runner._itemStore.prepare(item, this);
      } else {
        this._runner._itemStore.execute(item, this);
      }
    }
  }]);

  return Loop;
}(_item_js__WEBPACK_IMPORTED_MODULE_33__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/media_player.js":
/*!********************************************!*\
  !*** ./src/js/osweb/items/media_player.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _backends_video_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../backends/video.js */ "./src/js/osweb/backends/video.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a video player item.
 * @extends Item
 */

var MediaPlayer = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(MediaPlayer, _Item);

  var _super = _createSuper(MediaPlayer);

  /**
     * Create a video player plugin item which plays videos.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function MediaPlayer(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, MediaPlayer);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'A video player'; // Define and set the private properties.

    _this._script_executed = false; // Process the script.

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(MediaPlayer, [{
    key: "_complete",
    value: function _complete() {
      if (this._script_executed === false) {
        // Stop the video playing.
        this._video_player.stop(); // execute script.


        if (this._video_player._script !== null && this.vars.get('event_handler_trigger') === 'on keypress') {
          // Set the execute toggle.
          this._script_executed = true; // Execute the script code.

          this._runner._pythonParser._run(this, this._video_player._script);
        } else {
          // Inherited.
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(MediaPlayer.prototype), "_complete", this).call(this);
        }
      } else {
        // Inherited.
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(MediaPlayer.prototype), "_complete", this).call(this);
      }
    }
    /** Implements the update phase of an item. */

  }, {
    key: "_update",
    value: function _update(response) {
      // Update the video canvas.
      this._video_player._update();
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      var event_handler = this.vars.get('event_handler');
      var event_handler_trigger = this.vars.get('event_handler_trigger');
      var duration = this.vars.get('duration'); // Opens the video file for playback.

      this._video = this.experiment.pool[this.vars.get('video_src')];
      this._video_player = new _backends_video_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.experiment, this._video); // Set the inline code options.

      if (event_handler !== '') this._video_player._script = this._runner._pythonParser._parse(event_handler);
      this._video_player._event_handler_always = event_handler_trigger === 'after every frame'; // Set the audio option.

      this._video_player.audio = this.vars.get('playaudio') === 'yes'; // Set the full screen option (if enabled).

      this._video_player.full_screen = this.vars.get('resizeVideo') === 'yes'; // Adjust the duration parameter from sound to video if defined.

      if (duration === 'sound') this._video_player.duration = 'video';else this._video_player.duration = duration; // Inherited.

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(MediaPlayer.prototype), "prepare", this).call(this);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Set the onset time.
      this.set_item_onset();
      this.set_sri(); // Start the video player.

      this._video_player.play(); // Start response processing.


      this.process_response();
    }
  }]);

  return MediaPlayer;
}(_items_item_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/mouse_response.js":
/*!**********************************************!*\
  !*** ./src/js/osweb/items/mouse_response.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseResponse; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_mouse_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../backends/mouse.js */ "./src/js/osweb/backends/mouse.js");














function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_11___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a mouse response item.
 * @extends GenericResponse
 */

var MouseResponse = /*#__PURE__*/function (_GenericResponse) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_10___default()(MouseResponse, _GenericResponse);

  var _super = _createSuper(MouseResponse);

  /**
     * Create an mouse response item which waits for a mouse response.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function MouseResponse(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7___default()(this, MouseResponse);

    _this = _super.call(this, experiment, name, script);
    _this.description = 'Collects mouse responses';
    _this.resp_codes = {};
    _this._flush = 'yes';

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of the Sketschpad. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8___default()(MouseResponse, [{
    key: "_complete",
    value: function _complete() {
      // Hide the mouse cursor.
      this._mouse.show_cursor(false); // Inherited.


      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(MouseResponse.prototype), "_complete", this).call(this);
    }
    /** Resets all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      this.process_feedback = true;
      this.resp_codes = {};
      this.resp_codes['0'] = 'timeout';
      this.resp_codes['1'] = 'left_button';
      this.resp_codes['2'] = 'middle_button';
      this.resp_codes['3'] = 'right_button';
      this.resp_codes['4'] = 'scroll_up';
      this.resp_codes['5'] = 'scroll_down';
      this.vars.set("allowed_responses", null);
      this.vars.set("correct_response", null);
      this.vars.set('duration', 'mouseclick');
      this.vars.set('flush', 'yes');
      this.vars.set('show_cursor', 'yes');
      this.vars.set('timeout', 'infinite');
    }
  }, {
    key: "prepare",
    value: function prepare() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(MouseResponse.prototype), "prepare", this).call(this);
    }
  }, {
    key: "run",
    value: function run() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_12___default()(MouseResponse.prototype), "run", this).call(this);

      this.set_item_onset();

      if (this.vars.get('show_cursor') === 'yes') {
        this._mouse.show_cursor(true);
      } // Flush responses, to make sure that earlier responses are not carried over.


      if (this.vars.get("flush") === 'yes') {
        this._mouse.flush();
      }

      this.set_sri();
      this.process_response();
    }
  }, {
    key: "coroutine",
    value: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function coroutine() {
      var _this2 = this;

      var mouseDownHandler, touchHandler, proceed;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function coroutine$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              mouseDownHandler = function mouseDownHandler(event) {
                _this2.response = _this2.experiment._runner._events._processMouseEvent(event, 1);
              };

              touchHandler = function touchHandler(event) {
                event.button = 0;
                event.clientX = event.changedTouches[0].clientX;
                event.clientY = event.changedTouches[0].clientY;
                _this2.response = _this2.experiment._runner._events._processMouseEvent(event, 1);
              };

              window.addEventListener('mousedown', mouseDownHandler);
              window.addEventListener('touchstart', touchHandler);
              _context.next = 6;
              return;

            case 6:
              // Show the cursor if defined.
              if (this.vars.get('show_cursor') === 'yes') {
                this._mouse.show_cursor(true);
              } // Record the onset of the current item.


              this.set_item_onset();
              this.set_sri();
              proceed = true;
              this.response = null;

            case 11:
              if (!(!this.response && proceed)) {
                _context.next = 17;
                break;
              }

              _context.next = 14;
              return true;

            case 14:
              proceed = _context.sent;
              _context.next = 11;
              break;

            case 17:
              window.removeEventListener('mousedown', mouseDownHandler);
              window.removeEventListener('touchstart', touchHandler);
              if (this.response) this.process_response_mouseclick(this.response);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, coroutine, this);
    })
  }]);

  return MouseResponse;
}(_generic_response_js__WEBPACK_IMPORTED_MODULE_13__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/notepad.js":
/*!***************************************!*\
  !*** ./src/js/osweb/items/notepad.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Notepad; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a notepad item.
 * @extends Item
 */

var Notepad = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Notepad, _Item);

  var _super = _createSuper(Notepad);

  /**
     * Create a notepad plugin item which only shows some text in the console.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function Notepad(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Notepad);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'A simple notepad to document your experiment. This plug-in does nothing.'; // Read the item definition string.

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Notepad, [{
    key: "_complete",
    value: function _complete() {
      // sequence is finalized.
      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_12__["constants"].STATUS_FINALIZE; // Inherited.

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Notepad.prototype), "_complete", this).call(this);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Notepad.prototype), "run", this).call(this); // Complete the current cycle.


      this._complete();
    }
  }]);

  return Notepad;
}(_items_item_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/repeat_cycle.js":
/*!********************************************!*\
  !*** ./src/js/osweb/items/repeat_cycle.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RepeatCycle; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a repeat cycle item.
 * @extends Item
 */

var RepeatCycle = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(RepeatCycle, _Item);

  var _super = _createSuper(RepeatCycle);

  /**
     * Create a repeat cycle item which repeat a cycle within a loop.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function RepeatCycle(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, RepeatCycle);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'Optionally repeat a cycle from a loop'; // Process the script.

    _this.from_string(script);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(RepeatCycle, [{
    key: "_complete",
    value: function _complete() {
      // sequence is finalized.
      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_12__["constants"].STATUS_FINALIZE; // Inherited.

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(RepeatCycle.prototype), "_complete", this).call(this);
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(RepeatCycle.prototype), "prepare", this).call(this);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(RepeatCycle.prototype), "run", this).call(this); // Prepare the condtion for which the repeat_cycle must fire.


      var condition = this.vars.get('condition', false); // Run item only one time.

      if (this._status !== _system_constants_js__WEBPACK_IMPORTED_MODULE_12__["constants"].STATUS_FINALIZE) {
        if (this.experiment._runner._javascriptWorkspace._eval(condition)) {
          this.experiment.vars.set('repeat_cycle', 1);
        } // Complete the current cycle.


        this._complete();
      }
    }
  }]);

  return RepeatCycle;
}(_items_item_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/reset_feedback.js":
/*!**********************************************!*\
  !*** ./src/js/osweb/items/reset_feedback.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResetFeedback; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a reset feedback item.
 * @extends Item
 */

var ResetFeedback = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(ResetFeedback, _Item);

  var _super = _createSuper(ResetFeedback);

  /**
     * Create a reset feedback  item which resets the feedback values.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function ResetFeedback(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, ResetFeedback);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'Resets the feedback variables, such as "avg_rt" and "acc"'; // Read the item definition string.

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(ResetFeedback, [{
    key: "_complete",
    value: function _complete() {
      // sequence is finalized.
      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_12__["constants"].STATUS_FINALIZE; // Inherited.

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(ResetFeedback.prototype), "_complete", this).call(this);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(ResetFeedback.prototype), "run", this).call(this); // Run item only one time.


      if (this._status !== _system_constants_js__WEBPACK_IMPORTED_MODULE_12__["constants"].STATUS_FINALIZE) {
        // Run the item.
        this.experiment.reset_feedback(); // Complete the current cycle.

        this._complete();
      }
    }
  }]);

  return ResetFeedback;
}(_items_item_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/sampler.js":
/*!***************************************!*\
  !*** ./src/js/osweb/items/sampler.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sampler; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_sampler_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../backends/sampler.js */ "./src/js/osweb/backends/sampler.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a sampler item.
 * @extends GenericResponse
 */

var Sampler = /*#__PURE__*/function (_GenericResponse) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Sampler, _GenericResponse);

  var _super = _createSuper(Sampler);

  /**
     * Create a sampler  item which plays a sound.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function Sampler(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Sampler);

    // Inherited create.
    _this = _super.call(this, experiment, name, script); // Definition of public properties.

    _this.block = false;
    _this.description = 'Plays a sound file in .wav or .ogg format'; // Definition of private properties.

    _this._sample = null;
    _this._sampler = null; // Process the script.

    _this.from_string(script);

    return _this;
  }
  /** Reset all item variables to their default value. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Sampler, [{
    key: "reset",
    value: function reset() {
      this.block = false;
      this.vars.set('sample', '');
      this.vars.set('pan', 0);
      this.vars.set('pitch', 1);
      this.vars.set('fade_in', 0);
      this.vars.set('stop_after', 0);
      this.vars.set('volume', 1);
      this.vars.set('duration', 'sound');
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Create the sample
      var sample = this.vars.get('sample');

      if (sample !== '') {
        // Retrieve the content from the file pool.
        this._sample = this._runner._pool[sample];
        if (typeof this._sample === 'undefined') this.experiment._runner._debugger.addError("\"".concat(sample, "\" does not exist in the file pool"));
        this._sampler = new _backends_sampler_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.experiment, this._sample);
        this._sampler.volume = this.vars.get("volume");
        this._sampler.duration = this.vars.get("duration");
        this._sampler.fade = this.vars.get("fade_in");
        this._sampler.pan = this.vars.get("pan");
        this._sampler.pitch = this.vars.get("pitch");
      } else {
        // Show error message.
        this._runner._debugger.addError("No sample has been specified in sampler: ".concat(sample));
      } // Inherited.


      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Sampler.prototype), "prepare", this).call(this);
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      this.set_item_onset();
      this.set_sri();

      this._sampler.play();

      this.process_response();
    }
  }]);

  return Sampler;
}(_generic_response_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/sequence.js":
/*!****************************************!*\
  !*** ./src/js/osweb/items/sequence.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sequence; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../backends/keyboard.js */ "./src/js/osweb/backends/keyboard.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");















function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_12___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/**
 * Class representing a Sequence item.
 * @extends Item
 */

var Sequence = /*#__PURE__*/function (_Item) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11___default()(Sequence, _Item);

  var _super = _createSuper(Sequence);

  /** The sequence class controls the running of a series of items. */
  function Sequence(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_8___default()(this, Sequence);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Create and set private properties.

    _this._index = -1;
    _this._items = null;
    _this._keyboard = null; // Create and set public properties.

    _this.description = 'Runs a number of items in sequence';
    _this.flush_keyboard = 'yes';
    _this.items = null; // Process the script.

    _this.from_string(script);

    return _this;
  }
  /** Implements the complete phase of an item. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_9___default()(Sequence, [{
    key: "_complete",
    value: function _complete() {
      // sequence is finalized.
      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_16__["constants"].STATUS_FINALIZE; // Inherited.

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Sequence.prototype), "_complete", this).call(this);
    }
    /** Implements the prepare complete phase of an item. */

  }, {
    key: "_prepare_complete",
    value: function _prepare_complete() {
      // Generate the items list for the run cycle.
      if (this._index < this.items.length) {
        if (this.items[this._index].item in this._runner._itemStore._items === false) {
          this._runner._debugger.addError('Could not find a child item which is called by sequence item: ' + this.name + ' (' + this.items[this._index].item.name + ')');
        } else {
          // Increase the current index.
          this._index++; // Add the item to the internal list.

          this._items.push({
            item: this.items[this._index - 1].item,
            cond: this.items[this._index - 1].cond
          }); // Prepare the item.


          this._runner._itemStore.prepare(this.items[this._index - 1].item, this);
        }
      } else {
        // Prepare process is done, start execution.
        this._index = 0; // Remove the prepare phase form the stack.

        this._runner._itemStack.pop(); // Check if this sequence is part of a parent sequence and must jump back in the prepare phase.


        if (this._parent.type === 'sequence') {
          this._parent._prepare_complete();
        } else {
          // Execute the next cycle of the sequence itself.
          this._runner._itemStore.run(this.name, this._parent);
        }
      }
    }
    /** Reset all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      this.items = [];
      this.vars.set('flush_keyboard', 'yes');
    }
    /**
       * Parse a definition string and retrieve all properties of the item.
       * @param {String} script - The script containing the properties of the item.
       */

  }, {
    key: "from_string",
    value: function from_string(script) {
      // Parses a definition string.
      this.variables = {};
      this.comments = [];
      this.reset(); // Split the string into an array of lines.

      if (script !== null) {
        var lines = script.split('\n');

        for (var i = 0; i < lines.length; i++) {
          if (lines[i] !== '' && this.parse_variable(lines[i]) === false) {
            var tokens = this.syntax.split(lines[i]);

            if (tokens.length > 0 && tokens[0] === 'run') {
              var item = tokens[1];
              var cond = 'always';

              if (tokens.length > 2) {
                cond = this.syntax.strip_slashes(this.syntax.remove_quotes(tokens[2]));
              } // Push the item and condition definition to the items list.


              this.items.push({
                item: item,
                cond: cond
              });
            }
          }
        }
      }
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Sequence.prototype), "prepare", this).call(this); // Create a keyboard to flush responses at the start of the run phase


      if (this.vars.get('flush_keyboard') === 'yes') {
        this._keyboard = new _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_15__["default"](this.experiment);
      } else {
        this._keyboard = null;
      } // Generate the items list for the run cycle.


      this._index = 0;
      this._items = []; // Prepare the items.

      this._prepare_complete();
    }
    /** Implements the run phase of an item. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_10___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_13___default()(Sequence.prototype), "run", this).call(this); // Check if all items have been processed.


      if (this._index < this._items.length) {
        // Flush the keyboard at the beginning of the sequence.
        if (this._index === 0 && this.vars.get('flush_keyboard') === 'yes') {
          this._keyboard.flush();
        } // Increase the current index.


        this._index++;
        var currentItem = this._items[this._index - 1]; // Set the workspace.

        this._runner._experiment._javascriptWorkspace.self = this; // Check if the item may run.

        if (this._runner._experiment._javascriptWorkspace._eval(currentItem.cond)) {
          // run the current item of the sequence object.
          this._runner._itemStore.run(currentItem.item, this);
        } else {
          // Execute the next cycle of the sequence itself.
          this.run();
        }
      } else {
        // sequence is finalized.
        this._complete();
      }
    }
  }]);

  return Sequence;
}(_item_js__WEBPACK_IMPORTED_MODULE_14__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/sketchpad.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/items/sketchpad.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sketchpad; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");
























function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_21___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



/**
 * Class representing a Sketchpad item.
 * @extends GeneralResponse
 */

var Sketchpad = /*#__PURE__*/function (_GenericResponse) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_20___default()(Sketchpad, _GenericResponse);

  var _super = _createSuper(Sketchpad);

  function Sketchpad(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_17___default()(this, Sketchpad);

    _this = _super.call(this, experiment, name, script); // Create and set public properties.

    _this.canvas = new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_24__["default"](experiment, false);
    _this.elements = []; // Process the script.

    _this.from_string(script);

    return _this;
  }
  /**
     * Sort function used for determining the draw index (z-index) of alle elemente.
     * @param {Object} a - The first object to compare.
     * @param {Object} b - The second object to compare.
     * @return {Number} - The result of the comparison.
     */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_18___default()(Sketchpad, [{
    key: "_compare",
    value: function _compare(a, b) {
      // Sort function used for determining the draw index (z-index) of alle elemente.
      if (a.z_index() < b.z_index()) {
        return 1;
      } else if (a.z_index() > b.z_index()) {
        return -1;
      } else {
        return 0;
      }
    }
    /** Implements the complete phase of the Sketchpad item. */

  }, {
    key: "_complete",
    value: function _complete() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_19___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22___default()(Sketchpad.prototype), "_complete", this).call(this);
    }
    /** Resets all item variables to their default value. */

  }, {
    key: "reset",
    value: function reset() {
      // Resets all item variables to their default value.
      this.elements = [];
      this.vars.set('duration', 'keypress');
    }
    /** Process a time out response. */

  }, {
    key: "process_response_timeout",
    value: function process_response_timeout() {} // Nothing happens

    /**
       * Parse a definition string and retrieve all properties of the item.
       * @param {String} script - The script containing the properties of the item.
       */

  }, {
    key: "from_string",
    value: function from_string(script) {
      // Define and reset variables to their defaults.
      this.variables = {};
      this.comments = [];
      this.reset();
      if (script === null) return;
      var lines = script.split('\n');

      var _iterator = _createForOfIteratorHelper(lines),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var line = _step.value;
          if (line === '' || this.parse_variable(line) !== false) continue;
          var tokens = this.syntax.split(line);

          if (tokens.length > 0 && tokens[0] === 'draw') {
            if (this.experiment.items._isClass(tokens[1]) === true) {
              var element = this.experiment.items._newElementClass(tokens[1], this, line);

              this.elements.push(element);
            } else {
              this.experiment._runner._debugger.addError('Failed to parse definition: ' + tokens[1]);
            }
          }
        } // Sort the elements usin the z-index.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.elements.sort(this._compare);
    }
    /**
     * Set the background color of the canvas if it is defined in the var store
     *
     * @memberof Sketchpad
     */

  }, {
    key: "_set_bg_color",
    value: function _set_bg_color() {
      var backgroundColor = this.vars.get('background');

      if (backgroundColor) {
        this.canvas._styles.background_color = backgroundColor;
      }
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Clear the canvas.
      this.canvas.clear(); // Draw the elements.

      for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].is_shown() === true) {
          this.elements[i].draw();
        }
      } // Inherited.


      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_19___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22___default()(Sketchpad.prototype), "prepare", this).call(this);
    }
    /** Implements the run phase of the Sketschpad. */

  }, {
    key: "run",
    value: function run() {
      // Inherited.
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_19___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_22___default()(Sketchpad.prototype), "run", this).call(this);

      this._set_bg_color(); // Set the onset and start the stimulus response process.


      this.set_item_onset(this.canvas.show());
      this.set_sri(false);
      this.process_response();
    }
  }, {
    key: "coroutine",
    value: /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_15___default.a.mark(function coroutine() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_15___default.a.wrap(function coroutine$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return;

            case 2:
              this._set_bg_color();

              this.set_item_onset(this.canvas.show());

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, coroutine, this);
    })
  }]);

  return Sketchpad;
}(_generic_response_js__WEBPACK_IMPORTED_MODULE_23__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/synth.js":
/*!*************************************!*\
  !*** ./src/js/osweb/items/synth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Synth; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _sampler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sampler.js */ "./src/js/osweb/items/sampler.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing a synth item.
 * @extends Sampler
 */

var Synth = /*#__PURE__*/function (_Sampler) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Synth, _Sampler);

  var _super = _createSuper(Synth);

  /**
     * Create a synth item which create a synthessised sound wave.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} Ssript - The script containing the properties of the item.
     */
  function Synth(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Synth);

    // Inherited create.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'A basic sound synthesizer';
    return _this;
  }

  return Synth;
}(_sampler_js__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),

/***/ "./src/js/osweb/items/touch_response.js":
/*!**********************************************!*\
  !*** ./src/js/osweb/items/touch_response.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouchResponse; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _items_mouse_response_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items/mouse_response.js */ "./src/js/osweb/items/mouse_response.js");












function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_9___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


/**
 * Class representing a reset feedback item.
 * @extends Item
 */

var TouchResponse = /*#__PURE__*/function (_MouseResponse) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(TouchResponse, _MouseResponse);

  var _super = _createSuper(TouchResponse);

  /**
     * Create a reset feedback  item which resets the feedback values.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  function TouchResponse(experiment, name, script) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, TouchResponse);

    // Inherited.
    _this = _super.call(this, experiment, name, script); // Define and set the public properties.

    _this.description = 'A grid-based response item, convenient for touch screens';
    return _this;
  }
  /** Resets all item variables to their default value. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(TouchResponse, [{
    key: "reset",
    value: function reset() {
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(TouchResponse.prototype), "reset", this).call(this);

      this.vars.set('allowed_responses', null);
      this.vars.set("_ncol", 2);
      this.vars.set("_nrow", 1);
    }
    /** Implements the prepare phase of an item. */

  }, {
    key: "prepare",
    value: function prepare() {
      // Temp hack
      this.experiment.vars.set('correct', -1); // Inherited.

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_10___default()(TouchResponse.prototype), "prepare", this).call(this);
    }
    /**
       * Process a mouse click response.
       * @param {Object} pRetval - The mouse response to process.
       */

  }, {
    key: "process_response_mouseclick",
    value: function process_response_mouseclick(retval) {
      this.experiment._start_response_interval = this.sri;
      this.experiment._end_response_interval = retval.rtTime;
      this.set_mouse_coordinates(retval.event.clientX, retval.event.clientY); // Calulate the row, column and cell.

      var cursor_x = this.experiment.vars.get('cursor_x');
      var cursor_y = this.experiment.vars.get('cursor_y');
      var width = this.experiment.vars.get('width');
      var height = this.experiment.vars.get('height');
      var ncol = this.vars.get('_ncol');
      var nrow = this.vars.get('_nrow');
      this.col = Math.floor((cursor_x + width / 2) / (width / ncol));
      this.row = Math.floor((cursor_y + height / 2) / (height / nrow));
      this.cell = this.row * ncol + this.col + 1;
      this.experiment.vars.set('response', this.cell);
      this.synonyms = [this.experiment.vars.get('response').toString()];
      this.response_bookkeeping();
    }
  }]);

  return TouchResponse;
}(_items_mouse_response_js__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),

/***/ "./src/js/osweb/python/python.js":
/*!***************************************!*\
  !*** ./src/js/osweb/python/python.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PythonParser; });
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../classes/var_store_handler */ "./src/js/osweb/classes/var_store_handler.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _python_math_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./python_math.js */ "./src/js/osweb/python/python_math.js");
/* harmony import */ var _python_opensesame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./python_opensesame.js */ "./src/js/osweb/python/python_opensesame.js");
/* harmony import */ var _python_random_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./python_random.js */ "./src/js/osweb/python/python_random.js");
/* harmony import */ var _python_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./python_string.js */ "./src/js/osweb/python/python_string.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_13__);














/** Class implementing a python AST interpreter. */

var PythonParser = /*#__PURE__*/function () {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the AST object belongs.
     */
  function PythonParser(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, PythonParser);

    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the AST object.
    // Set class properties.

    this.python_math = new _python_math_js__WEBPACK_IMPORTED_MODULE_9__["default"](this._runner);
    this.python_opensesame = new _python_opensesame_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._runner);
    this.python_random = new _python_random_js__WEBPACK_IMPORTED_MODULE_11__["default"](this._runner);
    this.python_string = new _python_string_js__WEBPACK_IMPORTED_MODULE_12__["default"](this._runner); // Definition of private properties.

    this._classes = {}; // Accessible classes within the script code.

    this._function_stack = []; // Function call stack.

    this._global_return_value = null; // Global return value for blocking calls.

    this._inline_script = null; // Parent inline_script item.

    this._node = null; // Current active node.

    this._onConsole = null;
    this._stack = 0; // Stack counter (hack to precent stack overflow).

    this._statement = null; // process one statement or an script.

    this._status = 0; // Status of the walker.

    this._variables = {}; // Object containing all global objects and variables.
  }
  /** Initialization phase of the python class. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(PythonParser, [{
    key: "_initialize",
    value: function _initialize() {
      // Set the python variable connections with opensesame.
      this._variables.clock = this._runner._experiment.clock;
      this._variables.exp = this._runner._experiment;
      this._variables.items = this._runner._itemStore;
      this._variables.pool = this._runner._pool;
      this._variables.var = new Proxy(this._runner._experiment.vars, new _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_7__["default"]()); // Set the console handler.

      if (this._runner._onConsole !== null) {
        this._onConsole = this._runner._onConsole;
      } // Initialize internal libraries to the interpreter.


      this.python_math._initialize();

      this.python_opensesame._initialize();

      this.python_random._initialize();

      this.python_string._initialize();
    }
    /**
       * Create a python AST runner.
       * @param {String} script - Parse a python script using the filbert library.
       */

  }, {
    key: "_parse",
    value: function _parse(script) {
      // Check if the script exists.
      if (script !== '""') {
        var locations = false;
        var parseFn = filbert__WEBPACK_IMPORTED_MODULE_8___default.a.parse;
        var ranges = false; // Try to parse the script.

        try {
          var code = script;
          var ast = parseFn(code, {
            locations: locations,
            ranges: ranges
          });
          return ast;
        } catch (e) {
          this._runner._debugger.addError('Script parsing error: ' + e.message);

          return null;
        }
      } else {
        return null;
      }
    }
    /**
       * Get the context part of a identifier (before the dot '.').
       * @param {String} identifier - Full name of the identifier.
       */

  }, {
    key: "_get_context",
    value: function _get_context(identifier) {
      // Split the identifer
      var items = identifier.value.split('.');

      if (items[0] === '__pythonRuntime' && items[1] === 'imports') {
        return this._variables[items[2]];
      } else {
        // Return the object context
        if (this._variables[items[0]] !== undefined) {
          return this._variables[items[0]];
        } else {
          return window[items[0]];
        }
      }
    }
    /**
       * Get an element form a library of the variable container.
       * @param {String} element - Full name of the element to retrieve.
       * @return {Object} - The given element found in the context.
       */

  }, {
    key: "_get_element",
    value: function _get_element(element) {
      // Split the identifier name space.
      var items = element.value.split('.'); // Check if the identifier is part of the internal scope.

      if (items[0] === '__pythonRuntime') {
        // Check if the identifier is part of the import scope.
        if (items[1] === 'imports') {
          var import_lib = filbert__WEBPACK_IMPORTED_MODULE_8___default.a.pythonRuntime.imports[items[2]];
          var value = import_lib[items[3]]; // Attempt to convert the value to a number,
          // if this fails return the original value

          return isNaN(lodash_toNumber__WEBPACK_IMPORTED_MODULE_13___default()(value)) ? value : lodash_toNumber__WEBPACK_IMPORTED_MODULE_13___default()(value);
        } else {
          var default_lib = filbert__WEBPACK_IMPORTED_MODULE_8___default.a.pythonRuntime[items[1]];
          return default_lib[items[2]];
        }
      } else {
        // No internal scope, check if it is defined in the global scope
        if (this._variables[items[0]] !== undefined) {
          if (items.length === 1) {
            return this._variables[items[0]];
          } else {
            return this._variables[items[0]][items[1]];
          }
        } else {
          if (window[items[0]] !== undefined) {
            if (items.length === 1) {
              return window[items[0]];
            } else {
              return window[items[0]][items[1]];
            }
          }
        }
      }
    }
    /**
       * Get the value of an element form a library of the variable container.
       * @param {String} element - Full name of the element to retrieve.
       * @return {Boolean|Number|Object|String} - The value of the given element.
       */

  }, {
    key: "_get_element_value",
    value: function _get_element_value(element) {
      switch (element.type) {
        case 'identifier':
          // Split the identifier name space.
          var items = element.value.split('.'); // Set the element value in the global scope.

          if (items.length === 1) {
            if (this._variables[items[0]] !== undefined) {
              return this._variables[items[0]];
            } else {
              return window[items[0]];
            }
          } else {
            if (items[0].indexOf('__filbertRight') !== -1) {
              if (items[1].indexOf('__filbertIndex') !== -1) {
                var container = this._variables[items[0]];
                var index = this._variables[items[1]];
                return container[index];
              } else {
                if (this._variables[items[0]] !== undefined) {
                  return this._variables[items[0]][items[1]];
                } else {
                  return window[items[0]][items[1]];
                }
              }
            } else if (items[0] === '__pythonRuntime') {
              if (items[1] === 'imports') {
                var import_lib = filbert__WEBPACK_IMPORTED_MODULE_8___default.a.pythonRuntime.imports[items[2]];
                var value = import_lib[items[3]]; // Attempt to convert the value to a number,
                // if this fails return the original value

                return isNaN(lodash_toNumber__WEBPACK_IMPORTED_MODULE_13___default()(value)) ? value : lodash_toNumber__WEBPACK_IMPORTED_MODULE_13___default()(value);
              } else {
                var default_lib = filbert__WEBPACK_IMPORTED_MODULE_8___default.a.pythonRuntime[items[1]];
                return default_lib[items[2]];
              }
            } else {
              if (this._variables[items[0]] !== undefined) {
                return this._variables[items[0]][items[1]];
              } else {
                return window[items[0]][items[1]];
              }
            }
          }

        case 'literal':
          // return the value of the literal.
          return element.value;
      }
    }
    /**
       * Set the value of an element.
       * @param {String} element - Full name of the element to set.
       * @param {Boolean|Number|Object|String} value - The value for the given element.
       */

  }, {
    key: "_set_element_value",
    value: function _set_element_value(element, value) {
      // Split the identifier name space.
      var items = element.value.split('.'); // Set the element value in the global scope.

      if (items.length === 1) {
        if (window[items[0]] !== undefined) {
          window[items[0]] = value;
        } else {
          this._variables[items[0]] = value;
        }
      } else {
        if (window[items[0]] !== undefined) {
          window[items[0]][items[1]] = value;
        } else {
          this._variables[items[0]][items[1]] = value;
        }
      }
    }
    /**
       * Set the given node to the current node.
       * @param {Object} node - The node to set as current node.
       */

  }, {
    key: "_set_node",
    value: function _set_node(node) {
      // Set the current node as the parent node
      node.parent = this._node; // Set the new node as the current node.

      this._node = node;
    }
    /**
       * Set the return value of a node.
       * @param {Boolean|Number|Object|String} value - The return value for the processed node.
       */

  }, {
    key: "_set_return_value",
    value: function _set_return_value(value) {
      // Create or acces the return_values array.
      this._node.parent.return_values = typeof this._node.parent.return_values === 'undefined' ? [] : this._node.parent.return_values; // Push the value.

      this._node.parent.return_values.push(value);
    }
    /** Process an AST array expression. */

  }, {
    key: "_array_expression",
    value: function _array_expression() {
      // Initialize node specific properties.
      this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index; // Check if all nodes in script have been processed.

      if (this._node.index < this._node.elements.length) {
        // Set current node to node in body.
        this._node.index++;

        this._set_node(this._node.elements[this._node.index - 1]); // Return to the processor.


        this._process_nodes();
      } else {
        // Redefine the return values.
        for (var i = 0; i < this._node.return_values.length; i++) {
          this._node.return_values[i] = this._get_element_value(this._node.return_values[i]);
        }

        var return_value = {
          type: 'literal',
          value: this._node.return_values
        }; // Set the return value.

        this._set_return_value(return_value); // Reset node index and return to the parent node.


        this._node.index = 0;
        this._node.return_values = [];
        this._node = this._node.parent;

        this._process_nodes();
      }
    }
    /** Process an AST assignment expression. */

  }, {
    key: "_assignment_expression",
    value: function _assignment_expression() {
      // Initialize node specific properties.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // process id.
          this._node.status = 1;

          this._set_node(this._node.left); // Return to the processor.


          this._process_nodes();

          break;

        case 1:
          // Process init.
          this._node.status = 2;

          this._set_node(this._node.right); // Return to the processor.


          this._process_nodes();

          break;

        case 2:
          // define variables
          var tmp_value; // Select binary operator.

          switch (this._node.operator) {
            case '=':
              // Process the init value.
              this._set_element_value(this._node.return_values[0], this._get_element_value(this._node.return_values[1]));

              break;

            case '-=':
              tmp_value = this._get_element_value(this._node.return_values[0]);

              this._set_element_value(this._node.return_values[0], tmp_value - this._get_element_value(this._node.return_values[1]));

              break;

            case '/=':
              tmp_value = this._get_element_value(this._node.return_values[0]);

              this._set_element_value(this._node.return_values[0], tmp_value / this._get_element_value(this._node.return_values[1]));

              break;

            case '%=':
              tmp_value = this._get_element_value(this._node.return_values[0]);

              this._set_element_value(this._node.return_values[0], tmp_value % this._get_element_value(this._node.return_values[1]));

              break;
          } // Reset node index and return to the parent node.


          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST binary expression. */

  }, {
    key: "_binary_expression",
    value: function _binary_expression() {
      // Initialize status property.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.left); // Return to the node processor.


          this._process_nodes();

          break;

        case 1:
          // Process property
          this._node.status = 2;

          this._set_node(this._node.right); // Return to the node processor.


          this._process_nodes();

          break;

        case 2:
          // define variables.
          var left = this._get_element_value(this._node.return_values[0]);

          var right = this._get_element_value(this._node.return_values[1]);

          var return_value = {
            type: 'literal'
          }; // Select binary operator.

          switch (this._node.operator) {
            case '-':
              return_value.value = left - right;
              break;

            case '/':
              return_value.value = left / right;
              break;

            case '==':
              return_value.value = left === right;
              break;

            case '!=':
              return_value.value = left !== right;
              break;

            case '>':
              return_value.value = left > right;
              break;

            case '<':
              return_value.value = left < right;
              break;

            case '>=':
              return_value.value = left >= right;
              break;

            case '<=':
              return_value.value = left <= right;
              break;

            case '%':
              if (typeof left === 'number' && typeof right === 'number') {
                return_value.value = left % right;
              } else {
                return_value.value = left.replace(/%s/g, right);
              }

              break;

            case 'instanceof':
              return_value.value = left instanceof right;
              break;
          } // Set the return value.


          this._set_return_value(return_value); // Reset node index and return to the parent node.


          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST block statement. */

  }, {
    key: "_block_statement",
    value: function _block_statement() {
      // Initialize node specific properties.
      this._node.break = typeof this._node.break === 'undefined' ? false : this._node.break;
      this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index; // Check if all nodes in script have been processed.

      if (this._node.index < this._node.body.length && this._node.break === false) {
        // Set current node to node in body.
        this._node.index++;

        this._set_node(this._node.body[this._node.index - 1]); // Return to the processor.


        this._process_nodes();
      } else {
        // Reset node index and return to the parent node.
        if (this._node.break === true) {
          this._node.break = false;
          this._node.parent.break = true;
        }

        this._node.index = 0;
        this._node = this._node.parent;

        this._process_nodes();
      }
    }
    /** Process an AST break statement. */

  }, {
    key: "_break_statement",
    value: function _break_statement() {
      // Set break flag for parent element.
      this._node.parent.break = true; // Return to the parent node.

      this._node = this._node.parent;

      this._process_nodes();
    }
    /** Process an AST call expression. */

  }, {
    key: "_call_expression",
    value: function _call_expression() {
      // Initialize status properties.
      this._node.arguments = typeof this._node.arguments === 'undefined' ? [] : this._node.arguments;
      this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process arguments and caller.
          if (this._node.index < this._node.arguments.length) {
            // Set current node to next node in list.
            this._node.index++;

            this._set_node(this._node.arguments[this._node.index - 1]); // Return to the node processessor.


            this._process_nodes();
          } else {
            // Set parent node.
            this._node.status = 1;

            this._set_node(this._node.callee); // Return to the node processor.


            this._process_nodes();
          }

          break;

        case 1:
          // Get the first return value, which is the name of the caller element.
          var return_value = this._node.return_values.pop(); // Get the arguments used on the caller element.


          var tmp_arguments = [];

          for (var i = 0; i < this._node.return_values.length; i++) {
            tmp_arguments.push(this._get_element_value(this._node.return_values[i]));
          }

          var caller = this._get_element(return_value);

          var context = this._get_context(return_value);

          if (return_value.value === 'sleep' || return_value.value === '__pythonRuntime.imports.clock.sleep') {
            // Adjust the status to special.
            this._node.status = 2; // Check the context.

            if (typeof context === 'undefined') {
              context = this;
            } // Execute the blocking call.


            caller.apply(context, tmp_arguments);
          } else {
            // Check the context.
            if (typeof context === 'undefined') {
              context = this;
            } // Execute the call, check first for internal function call.


            if (this._node.callee.type === 'FunctionExpression') {
              return_value = {
                type: 'literal',
                value: caller
              };
            } else {
              return_value = {
                type: 'literal',
                value: caller.apply(context, tmp_arguments)
              };
            } // Set the return value.


            this._set_return_value(return_value); // Reset node index and return to the parent node.


            this._node.index = 0;
            this._node.status = 0;
            this._node.return_values = [];
            this._node = this._node.parent;

            this._process_nodes();
          }

          break;

        case 2:
          // Special state used when calling a blocking method (sleep, clock.sleep, keyboard.get_key(), mouse.get_click).
          this._set_return_value(this.global_return_value); // Reset node index and return to the parent node.


          this._node.index = 0;
          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST empty statment. */

  }, {
    key: "_empty_statement",
    value: function _empty_statement() {
      // Set parent node.
      this._node = this._node.parent; // Return to the node processessor.

      this._process_nodes();
    }
    /** Process an AST expression statement. */

  }, {
    key: "_expression_statement",
    value: function _expression_statement() {
      // Initialize status property.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      if (this._node.status === 0) {
        // Set parent node.
        this._node.status = 1;

        this._set_node(this._node.expression); // Return to the node processor.


        this._process_nodes();
      } else {
        // Set parent node.
        this._node.status = 0;
        this._node = this._node.parent; // Return to the node processessor.

        this._process_nodes();
      }
    }
    /** Process an AST for statement. */

  }, {
    key: "_for_statement",
    value: function _for_statement() {
      // Initialize status property.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.init); // Return to the node processessor.


          this._process_nodes();

          break;

        case 1:
          // Process object.
          this._node.status = 2;

          this._set_node(this._node.test); // Return to the node processessor.


          this._process_nodes();

          break;

        case 2:
          // Check if the test node has returned true.
          if (this._node.return_values[0].value === true) {
            // Process object.
            this._node.status = 3;
            this._node.return_values = [];

            this._set_node(this._node.body); // Return to the node processessor.


            this._process_nodes();
          } else {
            // Range has ended.
            this._node.status = 0;
            this._node.return_values = [];
            this._node = this._node.parent; // Return to the node processessor.

            this._process_nodes();
          }

          break;

        case 3:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.update); // Return to the node processessor.


          this._process_nodes();

          break;
      }
    }
    /** Process an AST for in statement. */

  }, {
    key: "_for_in_statement",
    value: function _for_in_statement() {
      // Initialize status property.
      this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.left); // Return to the node processessor.


          this._process_nodes();

          break;

        case 1:
          // Process object.
          this._node.status = 2;

          this._set_node(this._node.right); // Return to the node processessor.


          this._process_nodes();

          break;

        case 2:
          // Retrieve the range on which the loop travels.
          var tmp_range = this._get_element_value(this._node.return_values[1]); // Execute the range.


          if (this._node.index < tmp_range.length) {
            // Set the value of the range.
            this._set_element_value(this._node.return_values[0], tmp_range[this._node.index]); // Increase the index.


            this._node.index++; // Execute the body.

            this._set_node(this._node.body);

            this._process_nodes();
          } else {
            this._node.index = 0;
            this._node.status = 0;
            this._node.return_values = [];
            this._node = this._node.parent;

            this._process_nodes();
          }

          break;
      }
    }
    /** Process an AST function expression. */

  }, {
    key: "_function_expression",
    value: function _function_expression() {
      // Initialize status property.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process defaults.
          this._node.status = 1;

          this._set_node(this._node.body); // Return to the node processor.


          this._process_nodes();

          break;

        case 1:
          // Remove the last return value from the global function stack.
          var return_value = this._function_stack.pop(); // Set the return value


          this._set_return_value(return_value); // Set parent node.


          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST identifier. */

  }, {
    key: "_identifier",
    value: function _identifier() {
      // Retrieve the identifier information.
      var return_value = {
        type: 'identifier',
        value: this._node.name
      }; // Set the return value.

      this._set_return_value(return_value); // Set parent node.


      this._node = this._node.parent;

      this._process_nodes();
    }
    /** Process an AST if statement. */

  }, {
    key: "_if_statement",
    value: function _if_statement() {
      // Initialize status property.
      this._node.break = typeof this._node.break === 'undefined' ? false : this._node.break;
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.test); // Return to the node processor.


          this._process_nodes();

          break;

        case 1:
          // Check if expression is true.
          if (this._node.return_values[0].value === true) {
            this._node.status = 2;

            this._set_node(this._node.consequent); // Return to the node processor.


            this._process_nodes();
          } else if (this._node.alternate !== null) {
            this._node.status = 2;

            this._set_node(this._node.alternate); // Return to the node processor.


            this._process_nodes();
          } else {
            this._node.status = 2;

            this._process_nodes();
          }

          break;

        case 2:
          // Set parent node.
          if (this._node.break === true) {
            this._node.break = false;
            this._node.parent.break = true;
          }

          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST literal. */

  }, {
    key: "_literal",
    value: function _literal() {
      // Retrieve the identifier information.
      var return_value = {
        type: 'literal',
        value: this._node.value
      }; // Set the return value.

      this._set_return_value(return_value); // Set parent node.


      this._node = this._node.parent;

      this._process_nodes();
    }
    /** Process an AST logical expression. */

  }, {
    key: "_logical_expression",
    value: function _logical_expression() {
      // Initialize status property.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.left); // Return to the node processor.


          this._process_nodes();

          break;

        case 1:
          // Process property
          this._node.status = 2;

          this._set_node(this._node.right); // Return to the node processor.


          this._process_nodes();

          break;

        case 2:
          // define variables.
          var left = this._get_element_value(this._node.return_values[0]);

          var right = this._get_element_value(this._node.return_values[1]);

          var return_value = {
            type: 'literal'
          }; // Select binary operator.

          switch (this._node.operator) {
            case '&&':
              return_value.value = left && right;
              break;

            case '||':
              return_value.value = left || right;
              break;
          } // Set the return value.


          this._set_return_value(return_value); // Reset node index and return to the parent node.


          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST member expression */

  }, {
    key: "_member_expression",
    value: function _member_expression() {
      // Initialize status property.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.object); // Return to the node processessor.


          this._process_nodes();

          break;

        case 1:
          // Process property
          this._node.status = 2;

          this._set_node(this._node.property); // Return to the node processessor.


          this._process_nodes();

          break;

        case 2:
          // Build the combing return value.
          var return_value = {
            type: 'identifier',
            value: this._node.return_values[0].value + '.' + this._node.return_values[1].value
          }; // Set the return value

          this._set_return_value(return_value); // Reset node index and return to the parent node.


          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST new expression. */

  }, {
    key: "_new_expression",
    value: function _new_expression() {
      // Initialize status properties.
      this._node.arguments = typeof this._node.arguments === 'undefined' ? [] : this._node.arguments;
      this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      if (this._node.status === 0) {
        // Process arguments and caller.
        if (this._node.index < this._node.arguments.length) {
          // Set current node to next node in list.
          this._node.index++;

          this._set_node(this._node.arguments[this._node.index - 1]); // Return to the node processessor.


          this._process_nodes();
        } else {
          // Set parent node.
          this._node.status = 1;

          this._set_node(this._node.callee); // Return to the node processor.


          this._process_nodes();
        }
      } else {
        // Get the caller and context element.
        var returnValue = this._node.return_values.pop();

        var caller = this._get_element(returnValue);

        var context = this._get_context(returnValue); // Create the aruments array.


        var tmp_arguments = [];

        for (var i = 0; i < this._node.return_values.length; i++) {
          tmp_arguments.push(this._get_element_value(this._node.return_values[i]));
        } // Execute the call.


        returnValue = {
          type: 'literal',
          value: caller.apply(context, tmp_arguments)
        }; // Set the return value

        this._set_return_value(returnValue); // Reset node index and return to the parent node.


        this._node.index = 0;
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;

        this._process_nodes();
      }
    }
    /** Process an AST program. */

  }, {
    key: "_program",
    value: function _program() {
      // Initialize node specific properties.
      this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index; // Check if all nodes in script have been processed.

      if (this._node.index < this._node.body.length) {
        // Set current node to node in body.
        this._node.index++;

        this._set_node(this._node.body[this._node.index - 1]); // Return to the processor.


        this._process_nodes();
      } else {
        // Change status and end the running process.
        this._node.index = 0;
        this._status = 2; // Complete the inline item.

        if (this._inline_script !== null) {
          this._inline_script._complete();
        }
      }
    }
    /** Process an AST return statement. */

  }, {
    key: "_return_statement",
    value: function _return_statement() {
      // Initialize status property.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;
      var returnValue; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Process object.
          this._node.status = 1;

          this._set_node(this._node.argument); // Return to the node processessor.


          this._process_nodes();

          break;

        case 1:
          // Set return value.
          returnValue = {
            type: 'identifier',
            value: this._node.return_values[0].value
          }; // Set the return value

          this._function_stack.push(returnValue); // Reset node index and return to the parent node.


          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST unary expression. */

  }, {
    key: "_unary_expression",
    value: function _unary_expression() {
      // Initialize node specific properties.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      if (this._node.status === 0) {
        // Set parent node.
        this._node.status = 1;

        this._set_node(this._node.argument); // Return to the node processor.


        this._process_nodes();
      } else {
        var return_value = {
          type: 'literal'
        }; // process the operator.

        switch (this._node.operator) {
          case '!':
            return_value.value = !this._node.return_values[0].value;
            break;

          case '-':
            return_value.value = -this._node.return_values[0].value;
            break;
        } // Set the return value


        this._set_return_value(return_value); // Return to the node processessor.


        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;

        this._process_nodes();
      }
    }
    /** Process an AST update expression. */

  }, {
    key: "_update_expression",
    value: function _update_expression() {
      // Initialize node specific properties.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      if (this._node.status === 0) {
        // Set parent node.
        this._node.status = 1;

        this._set_node(this._node.argument); // Return to the node processor.


        this._process_nodes();
      } else {
        // Process the init value.
        switch (this._node.operator) {
          case '++':
            this._set_element_value(this._node.return_values[0], this._get_element_value(this._node.return_values[0]) + 1);

            break;
        } // Return to the node processessor.


        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;

        this._process_nodes();
      }
    }
    /** Process an AST variable declaration. */

  }, {
    key: "_variable_declaration",
    value: function _variable_declaration() {
      // Initialize node specific properties.
      this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index; // Check if all nodes in script have been processed.

      if (this._node.index < this._node.declarations.length) {
        // Set current node to next node in list.
        this._node.index++;

        this._set_node(this._node.declarations[this._node.index - 1]); // Return to the processor.


        this._process_nodes();
      } else {
        // Reset node index and return to the parent node.
        this._node.index = 0;
        this._node = this._node.parent;

        this._process_nodes();
      }
    }
    /** Process an AST variable declarator. */

  }, {
    key: "_variable_declarator",
    value: function _variable_declarator() {
      // Initialize node specific properties.
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // process id.
          this._node.status = 1;

          this._set_node(this._node.id); // Return to the processor.


          this._process_nodes();

          break;

        case 1:
          // Process init.
          this._node.status = 2;

          this._set_node(this._node.init); // Return to the processor.


          this._process_nodes();

          break;

        case 2:
          // Process the init value.
          this._set_element_value(this._node.return_values[0], this._get_element_value(this._node.return_values[1])); // Reset node index and return to the parent node.


          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          this._process_nodes();

          break;
      }
    }
    /** Process an AST while statement. */

  }, {
    key: "_while_statement",
    value: function _while_statement() {
      // Initialize status property.
      this._node.break = typeof this._node.break === 'undefined' ? false : this._node.break;
      this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status; // Process the current status.

      switch (this._node.status) {
        case 0:
          // Check for the break flag.
          if (this._node.break === true) {
            this._node.break = false; // Set parent node.

            this._node.status = 0;
            this._node.return_values = [];
            this._node = this._node.parent;

            this._process_nodes();
          } else {
            // Process object.
            this._node.status = 1;

            this._set_node(this._node.test); // Return to the node processeor.


            this._process_nodes();
          }

          break;

        case 1:
          // Check if expression is true.
          if (this._node.return_values[0].value === true) {
            // Reset the test
            this._node.status = 0;
            this._node.return_values = []; // execute the body.

            this._set_node(this._node.body); // Return to the node processor.


            this._process_nodes();
          } else {
            // Set parent node.
            this._node.status = 0;
            this._node.return_values = [];
            this._node = this._node.parent;

            this._process_nodes();
          }

          break;
      }
    }
    /** Process all AST nodes. */

  }, {
    key: "_process_nodes",
    value: function _process_nodes() {
      // Select type of processing.
      if (this._statement === null) {
        // Script processing.
        this._process_nodes_jump();
      } else {
        if (this._node === this._statement) {
          // Return the result value of the expression.
          return this._node.body[0].return_values[0].value;
        } else {
          // Statement processing.
          this._process_nodes_timeout();
        }
      }
    }
    /** Process a single AST nodes (timeout is for non-blocking) */

  }, {
    key: "_process_nodes_jump",
    value: function _process_nodes_jump() {
      // Increase the stack counter.
      this._stack++;

      if (this._stack > 500) {
        // Clear the stack.
        this._stack = 0; // Process nodes with a timeout (this is a hack for clearing the browser cache.

        setTimeout(function () {
          this._process_nodes_timeout();
        }.bind(this), 1);
      } else {
        // Process the nodes without a timeout.
        this._process_nodes_timeout();
      }
    }
    /** Process a single AST nodes (timeout is for non-blocking) */

  }, {
    key: "_process_nodes_timeout",
    value: function _process_nodes_timeout() {
      // Select the type of node to process
      switch (this._node.type) {
        case 'ArrayExpression':
          this._array_expression();

          break;

        case 'AssignmentExpression':
          this._assignment_expression();

          break;

        case 'BinaryExpression':
          this._binary_expression();

          break;

        case 'BlockStatement':
          this._block_statement();

          break;

        case 'BreakStatement':
          this._break_statement();

          break;

        case 'CallExpression':
          this._call_expression();

          break;

        case 'EmptyStatement':
          this._empty_statement();

          break;

        case 'ExpressionStatement':
          this._expression_statement();

          break;

        case 'ForStatement':
          this._for_statement();

          break;

        case 'ForInStatement':
          this._for_in_statement();

          break;

        case 'FunctionExpression':
          this._function_expression();

          break;

        case 'Identifier':
          this._identifier();

          break;

        case 'IfStatement':
          this._if_statement();

          break;

        case 'Literal':
          this._literal();

          break;

        case 'LogicalExpression':
          this._logical_expression();

          break;

        case 'MemberExpression':
          this._member_expression();

          break;

        case 'NewExpression':
          this._new_expression();

          break;

        case 'Program':
          this._program();

          break;

        case 'ReturnStatement':
          this._return_statement();

          break;

        case 'UnaryExpression':
          this._unary_expression();

          break;

        case 'UpdateExpression':
          this._update_expression();

          break;

        case 'VariableDeclaration':
          this._variable_declaration();

          break;

        case 'VariableDeclarator':
          this._variable_declarator();

          break;

        case 'WhileStatement':
          this._while_statement();

          break;

        default:
          this._runner._debugger.addError('Invalid node type to process: ' + this._node.type);

      }
    }
    /**
       * Run a single line python AST statement.
       * @param {Object} ast_tree - The AST tree to run.
       * @return {Boolean|Number|Object|String} - The result value of the AST evaluation.
       */

  }, {
    key: "_run_statement",
    value: function _run_statement(ast_tree) {
      this._node = ast_tree.body[0];
      this._node.parent = ast_tree;
      this._statement = ast_tree; // Adjust status of partser to running and start the process.

      this._status = 1; // Process the nodes.

      this._process_nodes(); // Return the result value of the expression.


      var returnValue;

      if (ast_tree.body[0].return_values[0].type === 'identifier') {
        returnValue = this._get_element_value(ast_tree.body[0].return_values[0]);
      } else {
        returnValue = ast_tree.body[0].return_values[0].value;
      } // Clear the return value container for next cycle.


      ast_tree.body[0].return_values = []; // Retur value of the statement.

      return returnValue;
    }
    /**
       * Run an AST python script.
       * @param {Object} inline_script - The Inline Script item to which the AST tree belongs.
       * @param {Object} ast_tree - The AST tree to run.
       */

  }, {
    key: "_run",
    value: function _run(inline_script, ast_tree) {
      // Set the inline item.
      this._inline_script = inline_script; // set the self parameter.

      this._variables.self = inline_script; // Set the first node and its parent.

      this._node = ast_tree;
      this._node.parent = null;
      this._statement = null; // Adjust status of partser to running and start the process.

      this._status = 1;

      this._process_nodes();
    }
  }]);

  return PythonParser;
}();



/***/ }),

/***/ "./src/js/osweb/python/python_math.js":
/*!********************************************!*\
  !*** ./src/js/osweb/python/python_math.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PythonMath; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_2__);



/** Class implementing a python math library. */

var PythonMath = /*#__PURE__*/function () {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  function PythonMath(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PythonMath);

    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.
    // Set class properties.

    this.e = Math.E;
    this.pi = Math.PI;
  }
  /** Initialization phase of the python_math class. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PythonMath, [{
    key: "_initialize",
    value: function _initialize() {
      // Insert math library methods into the python interpreter.
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math = {};
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.ceil = this.ceil;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.copysign = this.copysign;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.fabs = this.fabs;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.factorial = this.factorial;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.floor = this.floor;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.fmod = this.fmod;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.frexp = this.frexp;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.fsum = this.fsum;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.acos = this.acos;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.asin = this.asin;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.atan = this.atan;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.atan2 = this.atan2;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.cos = this.cos;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.hypot = this.hypot;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.sin = this.sin;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.tan = this.tan;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.e = this.e;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.math.pi = this.pi;
    }
    /** Import 'ceil' function for osweb script. */

  }, {
    key: "ceil",
    value: function ceil(x) {}
    /** Import 'copysign' function for osweb script. */

  }, {
    key: "copysign",
    value: function copysign(x, y) {}
    /** Import 'fabs' function for osweb script. */

  }, {
    key: "fabs",
    value: function fabs(x) {}
    /** Import 'factorial' function for osweb script. */

  }, {
    key: "factorial",
    value: function factorial(x) {}
    /** Import 'floor' function for osweb script. */

  }, {
    key: "floor",
    value: function floor(x) {
      return Math.floor(x);
    }
    /** Import 'fmod' function for osweb script. */

  }, {
    key: "fmod",
    value: function fmod(x, y) {}
    /** Import 'frexp' function for osweb script. */

  }, {
    key: "frexp",
    value: function frexp(x) {}
    /** Import 'fsum' function for osweb script. */

  }, {
    key: "fsum",
    value: function fsum(iterable) {}
    /** Import 'acos' function for osweb script. */

  }, {
    key: "acos",
    value: function acos(x) {
      return Math.acos(x);
    }
    /** Import 'asin' function for osweb script. */

  }, {
    key: "asin",
    value: function asin(x) {
      return Math.asin(x);
    }
    /** Import 'atan' function for osweb script. */

  }, {
    key: "atan",
    value: function atan(x) {
      return Math.atan(x);
    }
    /** Import 'atan2' function for osweb script. */

  }, {
    key: "atan2",
    value: function atan2(y, x) {
      return Math.atan2(y, x);
    }
    /** Import 'cos' function for osweb script. */

  }, {
    key: "cos",
    value: function cos(x) {
      return Math.cos(x);
    }
    /** Import 'hypot' function for osweb script. */

  }, {
    key: "hypot",
    value: function hypot(x, y) {}
    /** Import 'sin' function for osweb script. */

  }, {
    key: "sin",
    value: function sin(x) {
      return Math.sin(x);
    }
    /** Import 'tan' function for osweb script. */

  }, {
    key: "tan",
    value: function tan(x) {
      return Math.tan(x);
    }
  }]);

  return PythonMath;
}();



/***/ }),

/***/ "./src/js/osweb/python/python_opensesame.js":
/*!**************************************************!*\
  !*** ./src/js/osweb/python/python_opensesame.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PythonOpenSesame; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");




/** Class implementing a python opensesame library. */

var PythonOpenSesame = /*#__PURE__*/function () {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  function PythonOpenSesame(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PythonOpenSesame);

    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.
  }
  /** Initialization phase of the python_library class. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PythonOpenSesame, [{
    key: "_initialize",
    value: function _initialize() {
      this._objects = {}; // Insert clock class into the python interpreter.

      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.clock = {};
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.clock.sleep = this._runner._experiment.clock.sleep;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.clock.time = this._runner._experiment.clock.time; // Insert log class into the python interpreter.

      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.log = {};
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.log.close = this._runner._experiment._log.close;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.log.open = this._runner._experiment._log.open;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.log.write = this._runner._experiment._log.write;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.log.write_vars = this._runner._experiment._log.write_vars; // Insert var class into the python interpreter.

      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.var = this._runner._experiment.vars;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.var.get = this._runner._experiment.vars.get;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.var.has = this._runner._experiment.vars.has;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.var.set = this._runner._experiment.vars.set;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.var.unset = this._runner._experiment.vars.unset; // Insert general opensesame methods into the python interpreter.

      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.reset_feedback = this._runner._experiment.reset_feedback;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.set_subject_nr = this._runner._experiment.set_subject;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.canvas = this.canvas;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.copy_sketchpad = this.copy_sketchpad;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.keyboard = this.keyboard;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.mouse = this.mouse;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.pause = this.pause;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.set_subject_nr = this.set_subject_nr;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.sometimes = this.sometimes;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.synth = this.synth;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.xy_circle = this.xy_circle;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.xy_distance = this.xy_distance;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.xy_from_polar = this.xy_from_polar;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.xy_grid = this.xy_grid;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.xy_random = this.xy_random;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.functions.xy_to_polar = this.xy_to_polar;
    }
    /** Import 'canvas' function for osweb script. */

  }, {
    key: "canvas",
    value: function canvas(auto_prepare, style_args) {
      return new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_3__["default"](this._runner._experiment, auto_prepare, style_args);
    }
    /** Import 'copy_sketchpad' function for osweb script. */

  }, {
    key: "copy_sketchpad",
    value: function copy_sketchpad(name) {}
    /** Import 'keyboard' function for osweb script. */

  }, {
    key: "keyboard",
    value: function keyboard(resp_args) {}
    /** Import 'mouse' function for osweb script. */

  }, {
    key: "mouse",
    value: function mouse(resp_args) {}
    /** Import 'pause' function for osweb script. */

  }, {
    key: "pause",
    value: function pause(test) {}
    /** Import 'sampler' function for osweb script. */

  }, {
    key: "sampler",
    value: function sampler(src, playback_args) {}
    /** Import 'set_response' function for osweb script. */

  }, {
    key: "set_response",
    value: function set_response(response, response_time, correct) {}
    /** Import 'sometimes' function for osweb script. */

  }, {
    key: "sometimes",
    value: function sometimes(p) {}
    /** Import 'synth' function for osweb script. */

  }, {
    key: "synth",
    value: function synth(osc, freq, length, attack, decay) {}
    /** Import 'xy_circle' function for osweb script. */

  }, {
    key: "xy_circle",
    value: function xy_circle(n, rho, phi0, pole) {}
    /** Import 'xy_distance' function for osweb script. */

  }, {
    key: "xy_distance",
    value: function xy_distance(x1, y1, x2, y2) {}
    /** Import 'xy_from_polar' function for osweb script. */

  }, {
    key: "xy_from_polar",
    value: function xy_from_polar(rho, phi, pole) {}
    /** Import 'xy_grid' function for osweb script. */

  }, {
    key: "xy_grid",
    value: function xy_grid(n, spacing, pole) {}
    /** Import 'xy_random' function for osweb script. */

  }, {
    key: "xy_random",
    value: function xy_random(n, width, height, min_dist, pole) {}
    /** Import 'xy_to_polar' function for osweb script. */

  }, {
    key: "xy_to_polar",
    value: function xy_to_polar(x, y, pole) {}
  }]);

  return PythonOpenSesame;
}();



/***/ }),

/***/ "./src/js/osweb/python/python_random.js":
/*!**********************************************!*\
  !*** ./src/js/osweb/python/python_random.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PythonRandom; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_2__);



/** Class implementing a python random library. */

var PythonRandom = /*#__PURE__*/function () {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  function PythonRandom(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PythonRandom);

    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.
  }
  /** Initialization phase of the python_library class. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PythonRandom, [{
    key: "_initialize",
    value: function _initialize() {
      // Insert math library methods into the python interpreter.
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.random = {};
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.random.random = this.random;
      filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports.random.shuffle = this.shuffle;
    }
    /** Import 'Random' function for osweb script. */

  }, {
    key: "random",
    value: function random() {
      return Math.random();
    }
    /** Import 'Shuffle' function for osweb script. */

  }, {
    key: "shuffle",
    value: function shuffle(x, random) {
      // Fisher-Yates (aka Knuth) Shuffle.
      var currentIndex = x.length;
      var temporaryValue;
      var randomIndex; // While there remain elements to shuffle...

      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = x[currentIndex];
        x[currentIndex] = x[randomIndex];
        x[randomIndex] = temporaryValue;
      }

      return x;
    }
  }]);

  return PythonRandom;
}();



/***/ }),

/***/ "./src/js/osweb/python/python_string.js":
/*!**********************************************!*\
  !*** ./src/js/osweb/python/python_string.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PythonString; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



/** Class implementing a python string library. */
var PythonString = /*#__PURE__*/function () {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  function PythonString(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PythonString);

    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.
  }
  /** Initialization phase of the python_library class. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PythonString, [{
    key: "_initialize",
    value: function _initialize() {}
    /** Import 'capitalize' function for osweb script. */

  }, {
    key: "capitalize",
    value: function capitalize() {}
    /** Import 'center' function for osweb script. */

  }, {
    key: "center",
    value: function center(width, fillchar) {}
    /** Import 'upper' function for osweb script. */

  }, {
    key: "upper",
    value: function upper() {}
  }]);

  return PythonString;
}();



/***/ }),

/***/ "./src/js/osweb/system/constants.js":
/*!******************************************!*\
  !*** ./src/js/osweb/system/constants.js ***!
  \******************************************/
/*! exports provided: itemClasses, constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemClasses", function() { return itemClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constants", function() { return constants; });
/* harmony import */ var _items_loop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/loop.js */ "./src/js/osweb/items/loop.js");
/* harmony import */ var _items_sequence_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/sequence.js */ "./src/js/osweb/items/sequence.js");
/* harmony import */ var _items_coroutines_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/coroutines.js */ "./src/js/osweb/items/coroutines.js");
/* harmony import */ var _items_sketchpad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../items/sketchpad.js */ "./src/js/osweb/items/sketchpad.js");
/* harmony import */ var _items_feedback_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/feedback.js */ "./src/js/osweb/items/feedback.js");
/* harmony import */ var _items_inline_script_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../items/inline_script.js */ "./src/js/osweb/items/inline_script.js");
/* harmony import */ var _items_inline_javascript_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../items/inline_javascript.js */ "./src/js/osweb/items/inline_javascript.js");
/* harmony import */ var _items_keyboard_response_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../items/keyboard_response.js */ "./src/js/osweb/items/keyboard_response.js");
/* harmony import */ var _items_mouse_response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../items/mouse_response */ "./src/js/osweb/items/mouse_response.js");
/* harmony import */ var _items_logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../items/logger.js */ "./src/js/osweb/items/logger.js");
/* harmony import */ var _items_sampler_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../items/sampler.js */ "./src/js/osweb/items/sampler.js");
/* harmony import */ var _items_synth_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../items/synth.js */ "./src/js/osweb/items/synth.js");
/* harmony import */ var _items_advanced_delay_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../items/advanced_delay.js */ "./src/js/osweb/items/advanced_delay.js");
/* harmony import */ var _items_form_consent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../items/form_consent.js */ "./src/js/osweb/items/form_consent.js");
/* harmony import */ var _items_inline_html_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../items/inline_html.js */ "./src/js/osweb/items/inline_html.js");
/* harmony import */ var _items_form_multiple_choice_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../items/form_multiple_choice.js */ "./src/js/osweb/items/form_multiple_choice.js");
/* harmony import */ var _items_form_text_display_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../items/form_text_display.js */ "./src/js/osweb/items/form_text_display.js");
/* harmony import */ var _items_form_text_input_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../items/form_text_input.js */ "./src/js/osweb/items/form_text_input.js");
/* harmony import */ var _items_media_player_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../items/media_player.js */ "./src/js/osweb/items/media_player.js");
/* harmony import */ var _items_notepad_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../items/notepad.js */ "./src/js/osweb/items/notepad.js");
/* harmony import */ var _items_repeat_cycle_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../items/repeat_cycle.js */ "./src/js/osweb/items/repeat_cycle.js");
/* harmony import */ var _items_reset_feedback_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../items/reset_feedback.js */ "./src/js/osweb/items/reset_feedback.js");
/* harmony import */ var _items_touch_response_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../items/touch_response.js */ "./src/js/osweb/items/touch_response.js");
/* harmony import */ var _elements_arrow_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../elements/arrow.js */ "./src/js/osweb/elements/arrow.js");
/* harmony import */ var _elements_circle_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../elements/circle.js */ "./src/js/osweb/elements/circle.js");
/* harmony import */ var _elements_ellipse_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../elements/ellipse.js */ "./src/js/osweb/elements/ellipse.js");
/* harmony import */ var _elements_fixdot_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../elements/fixdot.js */ "./src/js/osweb/elements/fixdot.js");
/* harmony import */ var _elements_gabor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../elements/gabor.js */ "./src/js/osweb/elements/gabor.js");
/* harmony import */ var _elements_image_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../elements/image.js */ "./src/js/osweb/elements/image.js");
/* harmony import */ var _elements_line_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../elements/line.js */ "./src/js/osweb/elements/line.js");
/* harmony import */ var _elements_noise_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../elements/noise.js */ "./src/js/osweb/elements/noise.js");
/* harmony import */ var _elements_rect_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../elements/rect.js */ "./src/js/osweb/elements/rect.js");
/* harmony import */ var _elements_textline_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../elements/textline.js */ "./src/js/osweb/elements/textline.js");
// Control elements


 // Slides


 // Scripts


 // Responses



 // Audio


 // Plugins











 // Elements






 // Image is a reserved JS class





/**
 * this variable maps the string representation of each element to the corresponding
 * class names.
 * @type {Object}
 */

var itemClasses = {
  // Items
  loop: _items_loop_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  sequence: _items_sequence_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  sketchpad: _items_sketchpad_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  feedback: _items_feedback_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  inline_script: _items_inline_script_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  inline_javascript: _items_inline_javascript_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  inline_html: _items_inline_html_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  keyboard_response: _items_keyboard_response_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  mouse_response: _items_mouse_response__WEBPACK_IMPORTED_MODULE_8__["default"],
  logger: _items_logger_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  sampler: _items_sampler_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  synth: _items_synth_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  coroutines: _items_coroutines_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  advanced_delay: _items_advanced_delay_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  form_consent: _items_form_consent_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  form_multiple_choice: _items_form_multiple_choice_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  form_text_display: _items_form_text_display_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  form_text_input: _items_form_text_input_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  media_player_mpy: _items_media_player_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  notepad: _items_notepad_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  repeat_cycle: _items_repeat_cycle_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  reset_feedback: _items_reset_feedback_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  touch_response: _items_touch_response_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  // Elements
  arrow: _elements_arrow_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  circle: _elements_circle_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  ellipse: _elements_ellipse_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  fixdot: _elements_fixdot_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  gabor: _elements_gabor_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  image: _elements_image_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  line: _elements_line_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  noise: _elements_noise_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  rect: _elements_rect_js__WEBPACK_IMPORTED_MODULE_31__["default"],
  textline: _elements_textline_js__WEBPACK_IMPORTED_MODULE_32__["default"]
};
var constants = {
  // Type of used collection mode.
  PRESSES_ONLY: 1,
  RELEASES_ONLY: 2,
  PRESSES_AND_RELEASES: 3,
  // Type of response used.
  RESPONSE_NONE: 0,
  RESPONSE_DURATION: 1,
  RESPONSE_KEYBOARD: 2,
  RESPONSE_MOUSE: 3,
  RESPONSE_SOUND: 4,
  RESPONSE_AUTOKEYBOARD: 5,
  RESPONSE_AUTOMOUSE: 6,
  // Running status of an item.
  STATUS_NONE: 0,
  STATUS_BUILD: 1,
  STATUS_INITIALIZE: 2,
  STATUS_EXECUTE: 3,
  STATUS_FINALIZE: 4,
  // Definition of the event loop status contstants.
  TIMER_NONE: 0,
  TIMER_WAIT: 1,
  TIMER_EXIT: 2,
  TIMER_PAUSE: 3,
  TIMER_RESUME: 4,
  TIMER_DONE: 5,
  TIMER_BREAK: 6,
  TIMER_ERROR: 7,
  TIMER_FORM: 8
};

/***/ }),

/***/ "./src/js/osweb/system/convertor.js":
/*!******************************************!*\
  !*** ./src/js/osweb/system/convertor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Convertor; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_7__);









/** Class representing a convertor. */
var Convertor = /*#__PURE__*/function () {
  /**
   * Create a convertor which converts an osexp script to a JSON object stucture.
   * @param {Object} runner - The runner class to which the debugger belongs.
   */
  function Convertor(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Convertor);

    // Create and set private properties.
    this.item = null; // Current item to process.

    this.runner = runner; // Parent runner attached to the debugger.

    this.variable = null; // Container for global multiline variable.

    this.variabelName = ''; // Name of a global multiline variable.
  }
  /**
   * Strip additional quotes for value token.
   * @param {String} value - The value to check and (optional) convert.
   * @return {String} - The converted value.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(Convertor, [{
    key: "parseValue",
    value: function parseValue(value) {
      // Strip additional quotes.
      if (value.length >= 4 && value.substr(0, 1) === '"' && value.substr(value.length - 1, 1) === '"') {
        return value.substr(1, value.length - 2);
      } else {
        return value;
      }
    }
    /**
     * Process a single line within the osexp script.
     * @param {String} line - The string line to parse.
     */

  }, {
    key: "parseLine",
    value: function parseLine(line) {
      // Split a line into items and process them.
      var items = line.match(/(".*?"|[^"\s]+)+(?=\s*|\s*$)/g);

      if (this.variable !== null) {
        // If we're currently inside a multiline variable, check whether the
        // variable ends.
        if (items !== null && items[0] === '__end__') {
          this.item.vars.set(this.variableName, this.variable);
          this.variable = null;
        } else {
          this.variable.push(line);
        }

        return;
      } // if defined process a single line.


      if (items !== null) {
        // Select action on first token.
        switch (items[0]) {
          case 'define':
            // Process a define statement.
            this.item = this.runner._itemStore.newItem(items[1], items[2], '');
            break;

          case 'draw':
            // Create the element.
            var element = this.runner._itemStore._newElementClass(items[1], this.item, ''); // Split the properties and process them.


            for (var i = 2; i < items.length; i++) {
              var pair = items[i].split('=', 2);
              element.properties[pair[0]] = pair[1];
            } // Add the element to the item.


            this.item.elements.push(element);
            break;

          case 'run':
            if (this.item.type === 'sequence') {
              // Process a run statement for a sequence item.
              this.item.items.push({
                item: items[1],
                cond: items[2]
              });
            } else {
              // Process a run statement for a loop item.
              this.item.vars.set('item', items[1]);
            }

            break;

          case 'set':
            // Process a set statement.
            this.item.vars.set(items[1], this.parseValue(items[2]));
            break;

          case 'setcycle':
            // Process a setcycle statement.
            var value = this.parseValue(items[3]); // Convert the python expression to javascript.

            if (value[0] === '=') {
              // Parse the python statement.
              value = this.runner._pythonParser._prepare(value.slice(1));

              if (value !== null) {
                value = value.body[0];
              }
            } else {
              // Check if the value is numeric
              value = lodash_isNumber__WEBPACK_IMPORTED_MODULE_7___default()(value) ? Number(value) : value;
            } // Set the matrix with the proper values.


            if (this.item.orig_matrix[items[1]] === undefined) {
              this.item.orig_matrix[items[1]] = {};
            }

            this.item.orig_matrix[items[1]][items[2]] = value;
            break;

          case 'widget':
            // Remove the widget token from the list.
            items.shift(); // Add the element to the item.

            this.item._widgets.push(items);

            break;

          default:
            // check for multiline variables.
            if (items[0].length > 5 && items[0].substr(0, 2) === '__' && items[0].substr(-2) === '__') {
              this.variableName = items[0].substr(2, items[0].length - 4);
              this.variable = [];
            }

        }
      } else {
        // Return to default level.
        this.item = this.runner._experiment;
      }
    }
    /** Initialize the debugger object class. */

  }, {
    key: "parseScript",
    value: function parseScript(script) {
      // Set first item.
      this.item = this.runner._experiment; // Split the script into lines.

      if (script !== null) {
        // Split the script into lines.
        var lines = script.split('\n');

        for (var i = 0; i < lines.length; i++) {
          // Parse a single line
          this.parseLine(lines[i]);
        }
      }
    }
  }]);

  return Convertor;
}();



/***/ }),

/***/ "./src/js/osweb/system/debugger.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/system/debugger.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Debugger; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16__);















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/** Class representing a debugger. */

var Debugger = /*#__PURE__*/function () {
  /**
   * Create a debugger which handles errors and messahes during an session.
   * @param {Object} runner - The runner class to which the debugger belongs.
   */
  function Debugger(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_12___default()(this, Debugger);

    // Create and set private properties.
    this._runner = runner; // Parent runner attached to the debugger.
    // Create and set public properties.

    this.enabled = true; // Enable the debugger.

    this.error = false; // True if an error occured.

    this.messageLog = []; // Arraty with alle log messages.
  }
  /** Initialize the debugger object class. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_13___default()(Debugger, [{
    key: "_initialize",
    value: function _initialize() {
      // Clear the log.
      this.messageLog = [];
    }
    /** Finalize the debugger object class. */

  }, {
    key: "_finalize",
    value: function _finalize() {
      // If enabled push the messages to the javascript console.
      if (this.enabled === true) {
        console.log(this.messageLog);
      } // Clear the log.


      this.messageLog = [];
    }
    /**
     * Show a fatal error to the user and stops the running of the experiment.
     * @param {String} errorText - The error shown to the user.
     */

  }, {
    key: "addError",
    value: function addError(errorText) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.error = true;
      this._runner._events.state = _constants_js__WEBPACK_IMPORTED_MODULE_14__["constants"].TIMER_ERROR;
      console.error('OSWeb has stopped running due to a fatal error.');

      if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_16___default()(context)) {
        if (context.notify === true && lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default()(this._runner._onError)) {
          var url = context.url || null;

          this._runner._onError(errorText, url);
        }
      }

      var itemStack = [];

      var _iterator = _createForOfIteratorHelper(this._runner._itemStack._items),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var itemInfo = _step.value;
          itemStack.push(itemInfo['item'] + '[' + itemInfo['phase'] + ']');
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      console.log('item-stack: ' + itemStack.join('.'));
      throw errorText;
    }
    /**
     * Add a message to the debugger list.
     * @param {String} message - The message to be added to the list.
     */

  }, {
    key: "addMessage",
    value: function addMessage(messageText) {
      // Push the error message to the log.
      this.messageLog.push(messageText);

      if (this.enabled === true) {
        console.log(messageText);
      }
    }
    /**
     * Mirror function for the AddMessage method.
     * @param {String} messageText - The message to be added to the list.
     */

  }, {
    key: "msg",
    value: function msg(messageText) {
      // Push the error message to the log.
      this.addMessage(messageText);
    }
  }]);

  return Debugger;
}();



/***/ }),

/***/ "./src/js/osweb/system/events.js":
/*!***************************************!*\
  !*** ./src/js/osweb/system/events.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Events; });
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.repeat */ "./node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");







/** Class representing the event system. */

var Events = /*#__PURE__*/function () {
  /** The events class controls the running of an experiment. */
  function Events(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Events);

    // Create and set private properties.
    this._currentItem = null; // The current active item.

    this._keyDownEvent = null; // Container for last key event.

    this._keyDownHandler = null; // Key down event handler.

    this._keyPressMode = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_ONLY; // Keyboard press mode.

    this._keyUpHandler = null; // Key up event handler.

    this._mouseDownEvent = null; // Container for last mouse event.

    this._mouseDownHandler = null; // Mouse down event handler.

    this._mouseMoveEvent = null; // Container for last mouse move event.

    this._mouseMoveHandler = null; // Mouse move event handler.

    this._mousePressMode = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_ONLY; // Mouse press mode.

    this._mouseUpHandler = null; // Mouse up event handler.

    this._runner = runner; // Parent runner class.

    this._responseGiven = false; // Valid response toggle

    this._responseList = null; // Items to respond on.

    this._responseType = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_NONE; // Set type of response (0 = none, 1 = keyboard, 2 = mouse, 3 = sound).

    this._soundHasEnded = false; // Sound play is finished.

    this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_NONE; // Current status of the runner.

    this._statePrevious = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_NONE; // Previous state, used when pausing experiment.

    this._timeHandler = null; // Timing event handler.

    this._timeOut = -1; // Duration before timeout occures.

    this._timeStamp = -1; // Moment of update checking.

    this._videoHasEnded = false; // Video play is finished.
    // Definition of the conversion table to convert keycodes to OpenSesame codes.

    this._KEY_CODES = ['', '', '', '', '', '', 'help', '', 'backspace', 'tab', '', '', 'clear', 'enter', 'enter_special', '', 'shift', 'ctrl', 'alt', 'pause', // 00  .. 19
    'caps', '', '', '', '', '', '', 'escape', '', '', '', '', 'space', 'page up', 'page down', 'end', 'home', 'left', 'up', 'right', // 20  .. 39
    'down', 'select', 'print', 'execute', 'print screen', 'insert', 'delete', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', // 40  .. 59
    '<', '=', '>', '?', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', // 60  .. 79
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'left meta', 'right meta', 'menu', '', '', 'kp0', 'kp1', 'kp2', 'kp3', // 80  .. 99
    'kp4', 'kp5', 'kp6', 'kp7', 'kp8', 'kp9', 'kp_multiply', 'kp_plus', '', 'kp_minus', 'kp_period', 'kp_divide', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', // 100 .. 119
    'f9', 'f10', 'f11', 'f12', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 120 .. 139
    '', '', '', '', 'numlock', 'scrollock', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 140 .. 159
    '^', '!', '"', '#', '$', '%', '&', '_', '(', ')', '*', '+', '|', '_', '{', '}', '~', '', '', '', // 160 .. 179
    '', '', '', '', '', '', ';', '=', ',', '-', '.', '/', '`', '', '', '', '', '', '', '', // 180 .. 199
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '[', // 200 .. 219
    '\\', ']', '\'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 220 .. 239
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' // 240 .. 255
    ]; // Definition of the conversion table to convert shift keycodes to OpenSesame codes.

    this._KEY_SHIFTCODES = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'pause', // 00  .. 19
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 20  .. 39
    '', '', '', '', '', '', '', '', ')', '!', '@', '#', '$', '%', '^', '&', '*', '(', '', ':', // 40  .. 59
    '', '+', '', '', '', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', // 60  .. 79
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '', // 80  .. 99
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 100 .. 119
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 120 .. 139
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 140 .. 159
    '', '', '', '', '', '', '', '', '', '', '', '', '', '_', '', '', '', '', '', '', // 160 .. 179
    '', '', '', '', '', '', '', '', '<', '', '>', '?', '~', '', '', '', '', '', '', '', // 180 .. 199
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '{', // 200 .. 219
    '|', '}', '"', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', // 220 .. 239
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' // 240 .. 255
    ];
  }
  /** Initialize the event system. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Events, [{
    key: "_initialize",
    value: function _initialize() {
      // Create and set the keyboard event listeners.
      this._keyDownHandler = this._keyDown.bind(this);
      this._keyUpHandler = this._keyUp.bind(this);
      window.addEventListener('keydown', this._keyDownHandler);
      window.addEventListener('keyup', this._keyUpHandler); // Create and set the mouse event listeners.

      this._mouseDownHandler = this._mouseDown.bind(this);
      this._mouseMoveHandler = this._mouseMove.bind(this);
      this._mouseUpHandler = this._mouseUp.bind(this);
      this._touchStartHandler = this._touchStart.bind(this);

      this._runner._renderer.view.addEventListener('mousedown', this._mouseDownHandler);

      this._runner._renderer.view.addEventListener('mousemove', this._mouseMoveHandler);

      this._runner._renderer.view.addEventListener('mouseup', this._mouseUpHandler);

      this._runner._renderer.view.addEventListener('touchstart', this._touchStartHandler); // Set the current item to the experiment object.


      this._currentItem = this._runner._experiment;
      this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_NONE; // Create the time handler and start the experiment.

      this._timeHandler = new pixi_js__WEBPACK_IMPORTED_MODULE_6__["Ticker"]();

      this._timeHandler.add(this._time.bind(this));

      this._timeHandler.start();
    }
    /** Finalize the event system. */

  }, {
    key: "_finalize",
    value: function _finalize() {
      // Remove the keyboard event listeners.
      window.removeEventListener('keydown', this._keyDownHandler);
      window.removeEventListener('keyup', this._keyUpHandler); // Remove the mouse event listeners.

      this._runner._renderer.view.removeEventListener('mousedown', this._mouseDownHandler);

      this._runner._renderer.view.removeEventListener('mousemove', this._mouseMoveHandler);

      this._runner._renderer.view.removeEventListener('mouseup', this._mouseUpHandler);

      this._runner._renderer.view.removeEventListener('touchstart', this._touchStartHandler); // Stop the timing event listener.


      this._timeHandler.stop();

      this._timeHandler.remove(this._time); // Clear the properties.


      this._currentItem = null;
      this._mouseDownEvent = null;
      this._mouseMoveEvent = null;
      this._responseList = null;
      this._timeHandler = null;
    }
    /**
       * Convert a keyboard code to a OpenSesame code (including special characters ctrl/shift/alt).
       * @param {Object} event - The keyboard event to process.
       * @return {String} - The converted keyboard code.
       */

  }, {
    key: "_convertKeyCode",
    value: function _convertKeyCode(event) {
      // Check for special characters
      var key = '';

      if (event.shiftKey === true && event.keyCode !== 16) {
        // Shift key pressed with other key, so convert shift keys.
        key = this._KEY_SHIFTCODES[event.keyCode];
      } else if (event.shiftKey === true && event.keyCode === 16) {
        // Shift code pressed, check for location (left or right)
        key = event.location === 1 ? 'lshift' : 'rshift';
      } else if (event.ctrlKey === true && event.keyCode === 17) {
        // Ctrl code pressed, check for location (left or right)
        key = event.location === 1 ? 'lctrl' : 'rctrl';
      } else if (event.altKey === true && event.keyCode === 18) {
        // Alt code pressed, check for location (left or right)
        key = event.location === 1 ? 'lalt' : 'ralt';
      } else {
        // Convert standard keycode.
        key = this._KEY_CODES[event.keyCode];
      } // Return function result.


      return key;
    }
    /**
       * Event handler for retrieving key down events.
       * @param {Object} event - system keydown event.
       */

  }, {
    key: "_keyDown",
    value: function _keyDown(event) {
      // Ignore events if the key was already down. This is to avoid keypresses
      if (event.repeat) return; // Store the keyboard event.

      this._keyDownEvent = {
        event: event,
        rtTime: this._runner._experiment.clock.time()
      }; // Check for esc key to pause the experiment.

      if (event.keyCode === 27 && this._state !== _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_PAUSE) {
        // Set system to paused.
        this._statePrevious = this._state;
        this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_PAUSE; // Show the pause screen.

        this._runner._screen._showPauseScreen();
      } else if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_WAIT && (this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_ONLY || this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_AND_RELEASES)) {
        // Process the event.
        return this._processKeyboardEvent(event, 1);
      }
    }
    /**
       * Event handler for retrieving key up events.
       * @param {Object} event - system keyup event.
       */

  }, {
    key: "_keyUp",
    value: function _keyUp(event) {
      if (event.repeat) return; // Only select this event when the collection mode is set for this.

      if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_WAIT && (this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RELEASES_ONLY || this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_AND_RELEASES)) {
        // Process the event.
        return this._processKeyboardEvent(event, 0);
      }
    }
    /**
       * Process and convert keyboard events into response objects.
       * @param {Object} event - system keyboard event.
       * @param {Number} keyboardState - type of keyboard event.
       */

  }, {
    key: "_processKeyboardEvent",
    value: function _processKeyboardEvent(event, keyboardState) {
      // Create a new keyboard response object.
      var keyboardResponse = {
        event: event,
        rtTime: this._runner._experiment.clock.time(),
        state: keyboardState,
        type: _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_KEYBOARD
      }; // Convert response to proper keyboard token.

      keyboardResponse.resp = this._convertKeyCode(event); // Process the response to the current object.

      if (this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_KEYBOARD && (this._responseList === null || this._responseList.indexOf(keyboardResponse.resp) >= 0)) {
        // Process the current item.
        if (this._currentItem !== null) {
          // Process the response.
          this._currentItem._update(keyboardResponse);
        } // Set the valid response given toggle.


        this._responseGiven = true;
      }

      return keyboardResponse;
    }
    /** Prevent the right mouse context menu from showing. */

  }, {
    key: "_mouseContext",
    value: function _mouseContext(event) {
      // Prevent default action.
      event.preventDefault(); // Return false to prevent the context menu from pushing up.

      return false;
    }
    /** Store the last mouse move event for later use. */

  }, {
    key: "_mouseMove",
    value: function _mouseMove(event) {
      // Store the mouse move event and its timestamp for use in the mouse class.
      this._mouseMoveEvent = {
        event: event,
        rtTime: this._runner._experiment.clock.time()
      };
    }
    /**
       * Event handler for touch start events, which for now are translated to
       * moudown events.
       * @param {Object} event - system touchstart event.
       */

  }, {
    key: "_touchStart",
    value: function _touchStart(event) {
      event.button = 0;
      event.clientX = event.changedTouches[0].clientX;
      event.clientY = event.changedTouches[0].clientY;

      this._mouseDown(event);
    }
    /**
       * Event handler for retrieving mouse down events.
       * @param {Object} event - system mousedown event.
       */

  }, {
    key: "_mouseDown",
    value: function _mouseDown(event) {
      // Store the mouse down event and its timestamp for use in the mouse class.
      this._mouseDownEvent = {
        event: event,
        rtTime: this._runner._experiment.clock.time()
      }; // Only select this event when the collection mode is set for this.

      if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_WAIT && (this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_ONLY || this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_AND_RELEASES)) {
        // Process the event.
        return this._processMouseEvent(event, 1);
      }
    }
    /**
       * Event handler for retrieving mouse up events.
       * @param {Object} event - system mouseup event.
       */

  }, {
    key: "_mouseUp",
    value: function _mouseUp(event) {
      // Only select this event when the collection mode is set for this.
      if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_WAIT && (this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RELEASES_ONLY || this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].PRESSES_AND_RELEASES)) {
        // Process the event.
        this._processMouseEvent(event, 0);
      }
    }
    /**
       * Process and convert mouse events into response objects.
       * @param {Object} event - system mouse event.
       * @param {Number} mouseState - type of mouse event.
       */

  }, {
    key: "_processMouseEvent",
    value: function _processMouseEvent(event, mouseState) {
      // Create a mouse response object.
      var mouseResponse = {
        event: event,
        rtTime: this._runner._experiment.clock.time(),
        state: mouseState,
        type: _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_MOUSE
      }; // Adjust mouse response.

      mouseResponse.resp = String(event.button + 1); // Process the response to the current object.

      if (this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_MOUSE && (this._responseList === null || this._responseList.indexOf(mouseResponse.resp) >= 0)) {
        // Process the response to the current object.
        if (this._currentItem !== null) {
          this._currentItem._update(mouseResponse);
        } // Set the valid response given toggle.


        this._responseGiven = true;
      }

      return mouseResponse;
    }
    /**
       * Event handler for sound event processing.
       * @param {Object} event - sound end event.
       */

  }, {
    key: "_audioEnded",
    value: function _audioEnded(sampler) {
      // If duration isequal to sound exit the sound item.
      if (sampler.duration === 'sound') {
        this.proceed();
      }
    }
    /** Definition of methods for video event processing. */

  }, {
    key: "_videoEnded",
    value: function _videoEnded(event) {
      // If duration is set to video end respons to this.
      var video = this;

      if (video.duration === 'video') {
        video._experiment._runner._events._videoHasEnded = true;
      }
    }
    /**
       * Event handler for video play processing.
       * @param {Object} event - sound end event.
       */

  }, {
    key: "_videoPlay",
    value: function _videoPlay(event) {}
    /**
       * Event handler for experiment execution.
       * @param {Object} event - system timer event.
       */

  }, {
    key: "_time",
    value: function _time(event) {
      // Select the proper state.
      switch (this._state) {
        case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_NONE:
          // Do nothing in the loop
          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_WAIT:
          // Set current time stamp
          this._timeStamp = this._currentItem.clock.time(); // Check if a time out occures or a valid response is given.

          if (this._timeOut === -1 && (this._responseGiven === true || this._videoHasEnded === true) || this._timeOut > 0 && (this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_KEYBOARD || this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_MOUSE) && this._responseGiven === true || this._timeOut > 0 && this._timeStamp - this._currentItem.experiment.vars.get('time_' + this._currentItem.name) > this._timeOut) {
            this.proceed();
          } else {
            // Update the current item without response.
            this._currentItem._update(null);
          }

          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_PAUSE:
          // Do nothing in the loop
          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_RESUME:
          // Do nothing in the loop
          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_BREAK:
        case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_EXIT:
          // Adjus the status.
          this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_NONE; // Exit the runner.

          this._runner._finalize();

          break;

        case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_FORM:
          // Update the current item without response.
          this._currentItem._update(null);

          break;
      }
    }
    /**
       * Execute a stimulus/response wait period for a certain item.
       * @param {Number} timeout - maximum time to wait for a response.
       * @param {Number} responseType - type of response to wait for.
       * @param {Array} responseList - list of acceptable respones.
       */

  }, {
    key: "_run",
    value: function _run(timeOut, responseType, responseList) {
      // Set the event run|ning properties.
      this._responseList = responseList;
      this._responseType = responseType;
      this._timeOut = timeOut; // Activate the event running.

      this._responseGiven = false;
      this._soundHasEnded = false;
      this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_WAIT;
      this._videoHasEnded = false;
    }
  }, {
    key: "proceed",
    value: function proceed() {
      // Adjust the status.
      this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_NONE; // Remove the items from the general stack.

      this._runner._itemStack.pop(); // Execute the post-run phase after duration is finished or response is received.


      this._currentItem._complete();
    }
  }]);

  return Events;
}();



/***/ }),

/***/ "./src/js/osweb/system/parameters.js":
/*!*******************************************!*\
  !*** ./src/js/osweb/system/parameters.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parameters; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__);





/** Class representing a parameter processor. */
var Parameters = /*#__PURE__*/function () {
  /**
     * Create an session class which stores information about the client system.
     * @param {Runner} runner - The runner class to which the debugger belongs.
     */
  function Parameters(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Parameters);

    // Create and set private properties.
    this._itemCounter = 0; // Number of active parameter.

    this._parameters = []; // All parameters to process.

    this._runner = runner; // Parent runner attached to the session object.
  }
  /** Initialize the parameters class. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Parameters, [{
    key: "_initialize",
    value: function _initialize() {
      // Check if subject parameter is already defined.
      if (this._runner._subject !== null) {
        // Set the subject number
        this._runner._experiment.set_subject(this._runner._subject); // Parameters are processed, next phase.


        this._runner._screen._setupClickScreen(this._runner._welcomeText);
      } else {
        // Update inroscreen.
        this._runner._screen._updateIntroScreen('Retrieving input parameters.'); // Set properties if defined.


        var parameter = {
          dataType: 'number',
          defaultValue: '0',
          name: 'subject_nr',
          title: 'Starting the experiment',
          prompt: 'Please enter the subject number',
          promptEnabled: true
        }; // Add the subject parameter to the parameters list.

        this._parameters.push(parameter); // Process the Parameters.


        this._processParameters();
      }
    }
    /** Process all parameters within the parameter list. */

  }, {
    key: "_processParameters",
    value: function _processParameters() {
      // Process all items for which a user input is required.
      if (this._itemCounter < this._parameters.length) {
        // Process a  parameter.
        this._processParameter(this._parameters[this._itemCounter]);
      } else {
        // Transfer the startup info to the context.
        this._transferParameters();
      }
    }
    /**
       * Callback function for dialog when aits OK button has been clicked.
       * @param {Object} parameter - The parameter to set.
       * @param {String} value - The value to set.
       */

  }, {
    key: "_onParamConfirm",
    value: function _onParamConfirm(parameter, value) {
      // Get the response information
      parameter.response = value; // Increase the counter.

      this._itemCounter++; // Continue processing.

      this._processParameters();
    }
    /** Callback function for dialog when its cancel button has been clicked. */

  }, {
    key: "_onParamCancel",
    value: function _onParamCancel() {
      // Exit the runner.
      this._runner._exit();
    }
    /**
       * Process a single parameter
       * @param {Object} parameter - The parameter which must be processed.
       */

  }, {
    key: "_processParameter",
    value: function _processParameter(parameter) {
      // Check if a user request is required.
      if (parameter.promptEnabled === true) {
        // Use passed function that displays a prompt. This leaves the display
        // of the prompt to the library or system that implements osweb.
        if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default()(this._runner._prompt)) {
          this._runner._prompt(parameter.title, parameter.prompt, parameter.defaultValue, parameter.dataType, this._onParamConfirm.bind(this, parameter), this._onParamCancel.bind(this));
        } else {
          // Fallback to the window prompt if no function has been passed.
          var result = window.prompt(parameter.prompt, parameter.defaultValue);

          if (result === null) {
            this._onParamCancel();
          } else {
            this._onParamConfirm(parameter, result);
          }
        }
      } else {
        // Assign default value to the Startup item.
        parameter.response = parameter.defaultValue; // Increase the counter.

        this._itemCounter++; // Continue processing.

        this._processParameters();
      }
    }
    /** Transfer the startup info items to the context. */

  }, {
    key: "_transferParameters",
    value: function _transferParameters() {
      // Transfer the startup info items to the context.
      for (var i = 0; i < this._parameters.length; i++) {
        // Additional run for subject_nr
        if (this._parameters[i].name === 'subject_nr') {
          this._runner._experiment.set_subject(this._parameters[i].response);
        } else {
          this._runner._experiment.vars.set(this._parameters[i].name, this._parameters[i].response);
        }
      } // Parameters are processed, next phase.


      this._runner._screen._setupClickScreen(this._runner._welcomeText);
    }
  }]);

  return Parameters;
}();



/***/ }),

/***/ "./src/js/osweb/system/runner.js":
/*!***************************************!*\
  !*** ./src/js/osweb/system/runner.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Runner; });
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _debugger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debugger.js */ "./src/js/osweb/system/debugger.js");
/* harmony import */ var _convertor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./convertor.js */ "./src/js/osweb/system/convertor.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events.js */ "./src/js/osweb/system/events.js");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parameters.js */ "./src/js/osweb/system/parameters.js");
/* harmony import */ var _screen_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screen.js */ "./src/js/osweb/system/screen.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./session.js */ "./src/js/osweb/system/session.js");
/* harmony import */ var _transfer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transfer.js */ "./src/js/osweb/system/transfer.js");
/* harmony import */ var _classes_item_stack_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../classes/item_stack.js */ "./src/js/osweb/classes/item_stack.js");
/* harmony import */ var _classes_item_store_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../classes/item_store.js */ "./src/js/osweb/classes/item_store.js");
/* harmony import */ var _classes_python_workspace_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../classes/python_workspace.js */ "./src/js/osweb/classes/python_workspace.js");
/* harmony import */ var _classes_file_pool_store_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../classes/file_pool_store.js */ "./src/js/osweb/classes/file_pool_store.js");
/* harmony import */ var _classes_syntax_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../classes/syntax.js */ "./src/js/osweb/classes/syntax.js");
/* harmony import */ var _python_python_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../python/python.js */ "./src/js/osweb/python/python.js");
/* harmony import */ var _items_experiment_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../items/experiment.js */ "./src/js/osweb/items/experiment.js");






















/** Class representing the Runner. */

var Runner = /*#__PURE__*/function () {
  /** Create a runner which runs an experiment. */
  function Runner(content) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Runner);

    // Create and set private properties.
    this._confirm = null; // Optionale confirm dialog function.

    this._container = null; // HTML: The container (div) element.

    this._data = []; // Experiment result data.

    this._experiment = null; // The experiment container.

    this._fullScreen = false; // Full screen toggle mode.

    this._mimetype = null; // Distinction between text and binanry files.

    this._name = 'noname.exp'; // Name of the experiment which is run.

    this._onConsole = null; // Event handler for processing print messages.

    this._onFinished = null; // Event handler for finishing the experiment.

    this._onLog = null; // Event handler to call when logger is encountered.

    this._onError = null; // Event handler to call when an error is encountered.

    this._prompt = null; // Optional prompt dialog function.

    this._renderer = null; // PIXI: The visual stimuli renderer.

    this._scaleMode = 'noScale'; // Scale type used for full screen mode.

    this._script = null; // Container for the experiment script.

    this._source = null; // Link to the source experiment file.

    this._subject = null; // If defined containing the subject number.

    this._target = null; // Link to the target location for the data.
    // Create and set private class properties.

    this._debugger = new _debugger_js__WEBPACK_IMPORTED_MODULE_8__["default"](this); // Internal error system.

    this._convertor = new _convertor_js__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    this._events = new _events_js__WEBPACK_IMPORTED_MODULE_10__["default"](this); // The event processor.

    this._itemStack = new _classes_item_stack_js__WEBPACK_IMPORTED_MODULE_15__["default"](this); // The global item stack.

    this._itemStore = new _classes_item_store_js__WEBPACK_IMPORTED_MODULE_16__["default"](this); // The global item store.

    this._parameters = new _parameters_js__WEBPACK_IMPORTED_MODULE_11__["default"](this); // Parameter processor.

    this._pool = new _classes_file_pool_store_js__WEBPACK_IMPORTED_MODULE_18__["default"](this); // The virtual file pool store.

    this._pythonParser = new _python_python_js__WEBPACK_IMPORTED_MODULE_20__["default"](this); // Python parser

    this._pythonWorkspace = new _classes_python_workspace_js__WEBPACK_IMPORTED_MODULE_17__["default"](this); // Python workspace.

    this._screen = new _screen_js__WEBPACK_IMPORTED_MODULE_12__["default"](this); // Introduction screen renderer.

    this._session = new _session_js__WEBPACK_IMPORTED_MODULE_13__["default"](this); // Session information container.

    this._syntax = new _classes_syntax_js__WEBPACK_IMPORTED_MODULE_19__["default"](this); // The script syntax checker.

    this._transfer = new _transfer_js__WEBPACK_IMPORTED_MODULE_14__["default"](this); // File transfer system.
    // Create the content container.

    this._setupContent(content);
  }
  /**
   * Setup the content container which shows all the visual output.
   * @param {String|Object} content - The content (div element) in which the experiment is projected.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(Runner, [{
    key: "_setupContent",
    value: function _setupContent(content) {
      // Check if the experiment container is defined.
      if (typeof content !== 'undefined') {
        // Get the div element from the DOM element tree
        this._container = typeof content === 'string' ? document.getElementById(content) : content; // Create and set the experiment canvas.

        this._renderer = Object(pixi_js__WEBPACK_IMPORTED_MODULE_6__["autoDetectRenderer"])(800, 600, {
          antialias: true,
          transparent: false,
          resolution: 1
        });
        this._renderer.backgroundColor = 0x000000; // Append the canvas to the container.

        this._container.appendChild(this._renderer.view);
      } else {
        // Show error message.
        this._debugger.addError('No content parameter specified.');
      }
    }
    /**
     * Setup the context from which the experiment is created.
     * @param {Object} context - An JSON object containing information about the experiment.
     */

  }, {
    key: "_setupContext",
    value: function () {
      var _setupContext2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(context) {
        var _context$confirm, _context$debug, _context$fullScreen, _context$introClick, _context$introScreen, _context$mimetype, _context$name, _context$onConsole, _context$onFinished, _context$onLog, _context$onError, _context$prompt, _context$scaleMode, _context$source, _context$subject, _context$target, _context$welcomeText;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(typeof context !== 'undefined')) {
                  _context.next = 54;
                  break;
                }

                // Initialize the context parameters.
                // Use ES6 destructuring to determine values and set default ones if
                // required.
                _context$confirm = context.confirm;
                this._confirm = _context$confirm === void 0 ? null : _context$confirm;
                _context$debug = context.debug;
                this._debugger.enabled = _context$debug === void 0 ? false : _context$debug;
                _context$fullScreen = context.fullScreen;
                this._fullScreen = _context$fullScreen === void 0 ? false : _context$fullScreen;
                _context$introClick = context.introClick;
                this._screen._click = _context$introClick === void 0 ? true : _context$introClick;
                _context$introScreen = context.introScreen;
                this._screen._active = _context$introScreen === void 0 ? true : _context$introScreen;
                _context$mimetype = context.mimetype;
                this._mimetype = _context$mimetype === void 0 ? null : _context$mimetype;
                _context$name = context.name;
                this._name = _context$name === void 0 ? 'noname.exp' : _context$name;
                _context$onConsole = context.onConsole;
                this._onConsole = _context$onConsole === void 0 ? null : _context$onConsole;
                _context$onFinished = context.onFinished;
                this._onFinished = _context$onFinished === void 0 ? null : _context$onFinished;
                _context$onLog = context.onLog;
                this._onLog = _context$onLog === void 0 ? null : _context$onLog;
                _context$onError = context.onError;
                this._onError = _context$onError === void 0 ? null : _context$onError;
                _context$prompt = context.prompt;
                this._prompt = _context$prompt === void 0 ? null : _context$prompt;
                _context$scaleMode = context.scaleMode;
                this._scaleMode = _context$scaleMode === void 0 ? 'noScale' : _context$scaleMode;
                _context$source = context.source;
                this._source = _context$source === void 0 ? null : _context$source;
                _context$subject = context.subject;
                this._subject = _context$subject === void 0 ? null : _context$subject;
                _context$target = context.target;
                this._target = _context$target === void 0 ? null : _context$target;
                _context$welcomeText = context.welcomeText;
                this._welcomeText = _context$welcomeText === void 0 ? null : _context$welcomeText;

                // Set up the introscreen.
                this._screen._setupIntroScreen();

                this._screen._updateIntroScreen('Loading experiment.');

                this._screen._updateProgressBar(-1); // Load the script file, using the source parameter.


                _context.prev = 38;
                _context.next = 41;
                return this._transfer._readSource(this._source);

              case 41:
                this._script = _context.sent;
                _context.next = 49;
                break;

              case 44:
                _context.prev = 44;
                _context.t0 = _context["catch"](38);

                this._debugger.addError("Error reading osexp: ".concat(_context.t0));

                this._exit();

                return _context.abrupt("return");

              case 49:
                // Update the introscreen
                this._screen._updateIntroScreen('Building experiment structure.'); // Continue the experiment build.


                this._build(); // Initialize the parameters class and request user input.


                this._parameters._initialize();

                _context.next = 55;
                break;

              case 54:
                // Show error message.
                this.debugger.addError('No context parameter specified.');

              case 55:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[38, 44]]);
      }));

      function _setupContext(_x) {
        return _setupContext2.apply(this, arguments);
      }

      return _setupContext;
    }()
    /** Build the experiment system. */

  }, {
    key: "_build",
    value: function _build() {
      // Create the experiment item.
      this._experiment = new _items_experiment_js__WEBPACK_IMPORTED_MODULE_21__["default"](this, this._name, this._script);

      this._convertor.parseScript(this._script);

      this._experiment.from_string(this._script); // Set the onlog event handler (if defined).


      if (this._onLog) {
        this._experiment.onLog = this._onLog;
      }
    }
    /** initialize the runner. */

  }, {
    key: "_initialize",
    value: function _initialize() {
      // Initialize the helper classes.
      this._debugger._initialize();

      this._events._initialize();

      this._pythonParser._initialize();

      this._session._initialize(); // Prepare and run the experiment item.


      this._experiment.prepare();

      this._experiment.run();
    }
    /** finalize the runner. */

  }, {
    key: "_finalize",
    value: function _finalize() {
      // Finalize the event system.
      this._events._finalize(); // Finalize the debugger.


      this._debugger._finalize(); // Clear the item store and file pool.


      this._itemStore._clean_up();

      this._pool._clean_up(); // Exit the runner.


      this._exit();
    }
    /** Exit the experiment environment and execute the optional callback. */

  }, {
    key: "_exit",
    value: function _exit() {
      // Leave the full screen mode
      this._screen._fullScreenExit(); // Reset te size of the container and the canvas.


      this._experiment._canvas._exitDisplay(); // Clear the experiment item.


      this._experiment = null; // Check if a callback function is defined.

      if (this._onFinished) {
        // Execute callback function.
        this._onFinished(this._data, this._session._session);
      }
    }
    /** Exit a running experiment. */

  }, {
    key: "exit",
    value: function exit() {
      // Set state of the event system to break.
      this._events._state = _constants_js__WEBPACK_IMPORTED_MODULE_7__["constants"].TIMER_BREAK;
    }
    /** Run an experiment */

  }, {
    key: "run",
    value: function run(context) {
      // Build the experiment.
      this._setupContext(context);
    }
  }]);

  return Runner;
}();



/***/ }),

/***/ "./src/js/osweb/system/screen.js":
/*!***************************************!*\
  !*** ./src/js/osweb/system/screen.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Screen; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../index.js */ "./src/js/osweb/index.js");

















function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/** Class representing a Screen. */

var Screen = /*#__PURE__*/function () {
  /**
   * Create an introduction screen which handles the start of the experiment.
   * @param {Object} runner - The runner class to which the screen belongs.
   */
  function Screen(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_13___default()(this, Screen);

    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the screen object.
    // Set class properties.

    this._active = true; // If true the introduction screen is shown.

    this._click = true; // If true all is started with a mouse click.

    this._container = null; //  Container which holds the screen info.

    this._exit = false; // Exit toggle to prevent dialog when closing experiment.
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_14___default()(Screen, [{
    key: "screenCenter",
    value: function screenCenter() {
      return {
        x: this._runner._renderer.width / 2,
        y: this._runner._renderer.height / 2
      };
    }
    /** Initialize the fullscreen mode if enabled. */

  }, {
    key: "_fullScreenInit",
    value: function _fullScreenInit() {
      var _this = this;

      // Check if fullscreen must be enabled.
      if (this._runner._fullScreen === true) {
        // Get the container element.
        var element = this._runner._container; // Go full-screen

        if (element.requestFullscreen) {
          document.addEventListener('fullscreenchange', function (e) {
            _this._fullScreenChanged(e);
          });
          document.addEventListener('fullscreenerror', function (e) {
            _this._fullScreenError(e);
          });
          element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
          document.addEventListener('webkitfullscreenchange', function (e) {
            _this._fullScreenChanged(e);
          });
          document.addEventListener('webkitfullscreenerror', function (e) {
            _this._fullScreenError(e);
          });
          element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
          document.addEventListener('mozfullscreenchange', function (e) {
            _this._fullScreenChanged(e);
          });
          document.addEventListener('mozfullscreenerror', function (e) {
            _this._fullScreenError(e);
          });
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          document.addEventListener('MSFullscreenChange', function (e) {
            _this._fullScreenChanged(e);
          });
          document.addEventListener('MSFullscreenError', function (e) {
            _this._fullScreenError(e);
          });
          element.msRequestFullscreen();
        }
      }
    }
    /** Finalize the fullscreen mode if if was enabled. */

  }, {
    key: "_fullScreenExit",
    value: function _fullScreenExit() {
      // Check if fullscreen must be enabled.
      if (this._runner._fullScreen === true) {
        // Set the exit toggle.
        this._exit = true; // Exit the full screen mode.

        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
    /** Event handler which responds to full-screen change. */

  }, {
    key: "_fullScreenChanged",
    value: function _fullScreenChanged() {
      var width = this._runner._experiment.vars.get('width');

      var height = this._runner._experiment.vars.get('height'); // Check if we are dropping out of full-screen.


      if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
        // Scale the canvas
        switch (this._runner._scaleMode) {
          case 'noScale':
            // Default mode, no scaling, canbas is centered on the screen.
            this._runner._renderer.view.style.top = '0px';
            this._runner._renderer.view.style.bottom = '0px';
            this._runner._renderer.view.style.left = '0px';
            this._runner._renderer.view.style.right = '0px';
            this._runner._renderer.view.style.right = '0px';
            this._runner._renderer.view.style.margin = 'auto';
            this._runner._renderer.view.style.display = 'block';
            this._runner._renderer.view.style.position = 'absolute';

            this._runner._renderer.render(this._runner._experiment._currentCanvas._container);

            break;

          case 'showAll':
            // Default mode, no scaling, canbas is centered on the screen.
            this._runner._renderer.view.style.top = '0px';
            this._runner._renderer.view.style.bottom = '0px';
            this._runner._renderer.view.style.left = '0px';
            this._runner._renderer.view.style.right = '0px';
            this._runner._renderer.view.style.right = '0px';
            this._runner._renderer.view.style.margin = 'auto';
            this._runner._renderer.view.style.display = 'block';
            this._runner._renderer.view.style.position = 'absolute';

            if (this._runner._container.clientWidth - width > this._runner._container.clientHeight - height) {
              var ar = this._runner._container.clientHeight / height;

              this._runner._renderer.resize(Math.round(width * ar), this._runner._container.clientHeight);

              this._runner._experiment._scale_x = Math.round(width * ar) / this._runner._experiment.vars.width;
              this._runner._experiment._scale_y = this._runner._container.clientHeight / height;
            } else {
              var _ar = this._runner._container.clientWidth / width;

              this._runner._renderer.resize(this._runner._container.clientWidth, Math.round(height * _ar));

              this._runner._experiment._scale_x = this._runner._container.clientWidth / width;
              this._runner._experiment._scale_y = Math.round(height * _ar) / height;
            }

            this._runner._experiment._currentCanvas._container.scale.x = this._runner._experiment._scale_x;
            this._runner._experiment._currentCanvas._container.scale.y = this._runner._experiment._scale_y;

            this._runner._renderer.render(this._runner._experiment._currentCanvas._container);

            break;

          case 'exactFit':
            // Fit to the exact window size (cropping).
            this._runner._experiment._scale_x = this._runner._container.clientWidth / width;
            this._runner._experiment._scale_y = this._runner._container.clientHeight / height; // Reize the current canvas.

            this._runner._renderer.resize(this._runner._container.clientWidth, this._runner._container.clientHeight);

            this._runner._experiment._currentCanvas._container.scale.x = this._runner._experiment._scale_x;
            this._runner._experiment._currentCanvas._container.scale.y = this._runner._experiment._scale_y;

            this._runner._renderer.render(this._runner._experiment._currentCanvas._container);

            break;
        }
      } else {
        // Check for exiting experiment.
        if (this._exit === false) {
          // Resclae to 1Fit to the exact window size (cropping).
          this._runner._experiment._scale_x = 1;
          this._runner._experiment._scale_y = 1; // Fit to the exact window size (cropping).

          this._runner._renderer.resize(width, height);

          this._runner._experiment._currentCanvas._container.scale.x = 1;
          this._runner._experiment._currentCanvas._container.scale.y = 1;

          this._runner._renderer.render(this._runner._experiment._currentCanvas._container); // Open Sesame is running, request subject to continue of to stop.


          if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default()(this._runner._confirm)) {
            this._runner._confirm('Leaving full-screen mode, pausing experiment.', 'Please press ok the resume the experiment otherwise cancel to stop.', this._onFullScreenConfirm.bind(this), this._onFullScreenCancel.bind(this));
          }
        }
      }
    }
    /** Event handler which responds to full-screen change errors. */

  }, {
    key: "_fullScreenError",
    value: function _fullScreenError() {
      // Show error message.
      this._runner.debugger.addError('Could not start full-screen mode, experiment stopped.');
    }
    /** Event handler to respond to dialog ok conmfirmation. */

  }, {
    key: "_onFullScreenConfirm",
    value: function _onFullScreenConfirm() {
      // Get the container element.
      var element = this._runner._container; // Go full-screen

      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    /** Event handler to respond to dialog cancel confirmation. */

  }, {
    key: "_onFullScreenCancel",
    value: function _onFullScreenCancel() {
      // Exit the experiment.
      this._runner._finalize();
    }
    /** Set the introscreen elements. */

  }, {
    key: "_setupIntroScreen",
    value: function _setupIntroScreen(logoSrc) {
      // Check if introscreen is used.
      if (this._active === true) {
        // Define introscreen elements.
        this._introScreen = new pixi_js__WEBPACK_IMPORTED_MODULE_16__["Container"]();
        var center = this.screenCenter();
        var logoPath = typeof logoSrc === 'undefined' ? 'img/opensesame.png' : logoSrc;
        var oswebLogo = pixi_js__WEBPACK_IMPORTED_MODULE_16__["Sprite"].from(logoPath);
        var oswebTitle = new pixi_js__WEBPACK_IMPORTED_MODULE_16__["Text"]('OSWeb', {
          fontFamily: 'Arial',
          fontSize: 26,
          fill: '#FFFFFF'
        });
        var versionInfo = new pixi_js__WEBPACK_IMPORTED_MODULE_16__["Text"](_index_js__WEBPACK_IMPORTED_MODULE_17__["VERSION_NUMBER"], {
          fontFamily: 'Arial',
          fontSize: 16,
          fill: '#FFFFFF'
        });
        var copyrightText = new pixi_js__WEBPACK_IMPORTED_MODULE_16__["Text"]("Copyright Jaap Bos, Daniel Schreij & Sebastiaan Mathot, 2016 - ".concat(new Date().getFullYear()), {
          fontFamily: 'Arial',
          fontSize: 12,
          fill: '#FFFFFF'
        });
        oswebLogo.width = oswebLogo.height = 150;
        oswebLogo.position.set(center.x - oswebLogo.width / 2, 50);
        oswebTitle.position.set(center.x - oswebTitle.width / 2, 215);
        versionInfo.position.set(center.x - versionInfo.width / 2, 250);
        copyrightText.position.set(center.x - copyrightText.width / 2, center.y * 2 - copyrightText.height * 2);
        this._statusText = new pixi_js__WEBPACK_IMPORTED_MODULE_16__["Text"]('', {
          fontFamily: 'Arial',
          fontSize: 18,
          fill: '#FFFFFF'
        });

        this._statusText.position.set(center.x - this._statusText.width / 2, center.y);

        this._introScreen.addChild(oswebLogo, oswebTitle, versionInfo, copyrightText, this._statusText); // Show the introduction screen.


        this._runner._renderer.render(this._introScreen);
      }
    }
    /** Check if the experiment must be clicked to start. */

  }, {
    key: "_setupClickScreen",
    value: function _setupClickScreen(text) {
      // Check if the experiment must be clicked to start.
      if (this._click === true) {
        // Update inroscreen.
        if (typeof text === "undefined" || text.length === 0) {
          text = "\n    Your participation in this experiment should be anonymous.\n        Never provide any personal or sensitive information\n            (e.g. credit card or social security numbers).\n\n                    Click here with the mouse to begin.";
        }

        this._updateIntroScreen(text); // Setup the mouse click response handler.


        var clickHandler = function (event) {
          // Briefly play each of the samples from the file pool. This is
          // necessary in Safari so that the first happens as a direct 
          // consequence of a user interaction.
          var _iterator = _createForOfIteratorHelper(this._runner._experiment.pool._items),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;

              if (item.type === 'audio') {
                item.data.volume = 0;
                item.data.play();
                item.data.pause();
                item.data.currentTime = 0;
                item.data.volume = 1;
              }
            } // Remove the handler.

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this._runner._renderer.view.removeEventListener('click', clickHandler);

          this._runner._renderer.view.removeEventListener('touchstart', clickHandler); // Finalize the introscreen elements.


          this._clearIntroScreen(); // Start the task.


          this._runner._initialize();
        }.bind(this); // Set the temporary mouse click.


        this._runner._renderer.view.addEventListener('click', clickHandler, false);

        this._runner._renderer.view.addEventListener('touchstart', clickHandler, false);
      } else {
        // Finalize the introscreen elements.
        this._clearIntroScreen(); // Start the runner.


        this._runner._initialize();
      }
    }
    /** Clear the introscreen elements. */

  }, {
    key: "_clearIntroScreen",
    value: function _clearIntroScreen() {
      // Update the introscreen elements.
      if (this._active === true) {
        // Clear the stage by temoving al the child elements.
        for (var i = this._introScreen.children.length - 1; i >= 0; i--) {
          this._introScreen.removeChild(this._introScreen.children[i]);
        }

        this._runner._renderer.render(this._introScreen);
      }
    }
    /**
     * Updates the progress bar used when loading the file pool.
     * @param {Number} percentage - The percentage (0-100) of the progress bar.
     */

  }, {
    key: "_updateProgressBar",
    value: function _updateProgressBar(percentage) {
      var center = this.screenCenter();
      var xOuter = 200;
      var wOuter = 400;
      var hOuter = 20;
      var yOuter = center.y + 2 * hOuter;

      if (this._active === true) {
        // Select the stage.
        switch (percentage) {
          case -1:
            this._progressBarOuter = new pixi_js__WEBPACK_IMPORTED_MODULE_16__["Graphics"]();

            this._progressBarOuter.lineStyle(1, 0xFFFFFF, 1);

            this._progressBarOuter.drawRect(xOuter, yOuter, wOuter, hOuter);

            this._progressBarOuter.x = 0;
            this._progressBarOuter.y = 0;
            this._progressBarInner = new pixi_js__WEBPACK_IMPORTED_MODULE_16__["Graphics"]();

            this._progressBarInner.lineStyle(1, 0xFFFFFF, 1);

            this._progressBarInner.drawRect(xOuter + 2, yOuter + 2, 1, hOuter - 4);

            this._progressBarInner.x = 0;
            this._progressBarInner.y = 0;

            this._introScreen.addChild(this._progressBarInner);

            this._introScreen.addChild(this._progressBarOuter);

            this._runner._renderer.render(this._introScreen);

            break;

          case 100:
            this._introScreen.removeChild(this._progressBarInner);

            this._introScreen.removeChild(this._progressBarOuter);

            this._runner._renderer.render(this._introScreen);

            break;

          default:
            this._progressBarOuter.beginFill(0xFFFFFF);

            this._progressBarOuter.drawRect(xOuter + 2, yOuter + 2, Math.round(percentage * (wOuter - 4)), hOuter - 4);

            this._progressBarOuter.endFill();

            this._runner._renderer.render(this._introScreen);

        }
      }
    }
    /**
     * Update the introscreen elements.
     * @param {String} text - The text which must be updated.
     */

  }, {
    key: "_updateIntroScreen",
    value: function _updateIntroScreen(text) {
      // Update the introscreen elements.
      if (this._active === true) {
        var center = this.screenCenter();
        this._statusText.text = text.replace(/<br \/>/g, '\n').replace(/&#39;/g, "'").replace(/&#34;/g, '"');

        this._statusText.position.set(center.x - this._statusText.width / 2, center.y);

        this._runner._renderer.render(this._introScreen);
      }
    }
    /** Show the pause screen. */

  }, {
    key: "_showPauseScreen",
    value: function _showPauseScreen() {
      // Open Sesame is running, request subject to continue of to stop.
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_15___default()(this._runner._confirm)) {
        this._runner._confirm('Esc key pressed, pausing experiment.', 'Please press ok the resume the experiment otherwise cancel to stop.', this._onPauseScreenConfirm.bind(this), this._onPauseScreenCancel.bind(this));
      }
    }
    /** Event handler to respond to dialog ok conmfirmation. */

  }, {
    key: "_onPauseScreenConfirm",
    value: function _onPauseScreenConfirm() {
      // Restore the old state.
      this._runner._events._state = this._runner._events._statePrevious;
    }
    /** Event handler to respond to dialog cancel confirmation. */

  }, {
    key: "_onPauseScreenCancel",
    value: function _onPauseScreenCancel() {
      // Exit the experiment.
      this._runner._finalize();
    }
  }]);

  return Screen;
}();



/***/ }),

/***/ "./src/js/osweb/system/session.js":
/*!****************************************!*\
  !*** ./src/js/osweb/system/session.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Session; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




/** Class representing a client session information collector. */
var Session = /*#__PURE__*/function () {
  /**
     * Create an session object which stores information about the client system.
     * @param {Object} runner - The runner class to which the session belongs.
     */
  function Session(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Session);

    // Create and set private properties.
    this._date = null; // Date information container.

    this._runner = runner; // Parent runner attached to the session object.

    this._session = null; // Session information container.
  }
  /** Initialize the session. */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Session, [{
    key: "_initialize",
    value: function _initialize() {
      // Update the loader text.
      this._runner._screen._updateIntroScreen('Retrieving session information.'); // Get the session information.


      this._getSessionInformation();
    }
    /** Retrieve session information from the client. */

  }, {
    key: "_getSessionInformation",
    value: function _getSessionInformation() {
      // Get the session information from the client system.
      this._date = new Date();
      this._session = {
        browser: {
          codename: navigator.appCodeName,
          name: navigator.appName,
          version: navigator.appVersion
        },
        date: {
          startdate: ('0' + this._date.getDate()).slice(-2) + '-' + ('0' + this._date.getMonth()).slice(-2) + '-' + ('0' + this._date.getFullYear()).slice(-2),
          starttime: ('0' + this._date.getHours()).slice(-2) + ':' + ('0' + this._date.getMinutes()).slice(-2) + ':' + ('0' + this._date.getSeconds()).slice(-2),
          startdateUTC: ('0' + this._date.getUTCDate()).slice(-2) + '-' + ('0' + this._date.getUTCMonth()).slice(-2) + '-' + ('0' + this._date.getUTCFullYear()).slice(-2)
        },
        experiment: {
          debug: 0,
          parameters: 0,
          pilot: 0,
          taskname: 0,
          taskversion: 0
        },
        screen: {
          availableHeight: screen.availHeight,
          availableWidth: screen.availWidth,
          colorDepth: screen.colorDepth,
          height: screen.height,
          outerheight: window.outerheight,
          outerwidth: window.outerwidth,
          pixelDepth: screen.pixelDepth,
          screenX: window.screenX,
          screenY: window.screenY,
          width: screen.width
        },
        system: {
          os: navigator.platform
        }
      };
    }
  }]);

  return Session;
}();



/***/ }),

/***/ "./src/js/osweb/system/transfer.js":
/*!*****************************************!*\
  !*** ./src/js/osweb/system/transfer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transfer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find-index */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");
/* harmony import */ var core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_last_index_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @babel/runtime/helpers/asyncIterator */ "./node_modules/@babel/runtime/helpers/asyncIterator.js");
/* harmony import */ var _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../util/files */ "./src/js/osweb/util/files.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_28__);





























/** Class representing a information stream processor. */

var Transfer = /*#__PURE__*/function () {
  /**
   * Create a transfer object used for streaming information.
   * @param {Object} runner - The runner class to which the transfer belongs.
   */
  function Transfer(runner) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_21___default()(this, Transfer);

    // Create and set private properties.
    this._runner = runner; // Parent runner attached to the transfer object.
  }
  /**
   * Read an osexp file.
   * @param {Object|String} source - A file object or a String containing the experiment or a download URL.
   */


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_22___default()(Transfer, [{
    key: "_readSource",
    value: function () {
      var _readSource2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee(source) {
        var osScript, uri, remoteFile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!lodash_isString__WEBPACK_IMPORTED_MODULE_26___default()(source) && (!lodash_isObject__WEBPACK_IMPORTED_MODULE_27___default()(source) || source.constructor !== File))) {
                  _context.next = 2;
                  break;
                }

                throw new Error('No osexp source file defined.');

              case 2:
                if (!(source.constructor === File)) {
                  _context.next = 14;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return this._readOsexpFromFile(source);

              case 6:
                osScript = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                throw new Error("Could not read local osexp, ".concat(_context.t0));

              case 12:
                _context.next = 38;
                break;

              case 14:
                if (!lodash_isString__WEBPACK_IMPORTED_MODULE_26___default()(source)) {
                  _context.next = 38;
                  break;
                }

                // Check if the source string is an URL
                uri = Object(_util_files__WEBPACK_IMPORTED_MODULE_25__["parseUrl"])(source);

                if (!(uri !== false)) {
                  _context.next = 31;
                  break;
                }

                _context.prev = 17;
                _context.next = 20;
                return this.fetch(uri.href);

              case 20:
                remoteFile = _context.sent;
                _context.next = 23;
                return this._readOsexpFromFile(remoteFile);

              case 23:
                osScript = _context.sent;
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t1 = _context["catch"](17);
                throw new Error("Could not read remote osexp, ".concat(_context.t1));

              case 29:
                _context.next = 38;
                break;

              case 31:
                _context.prev = 31;
                osScript = this._processScript(source);
                _context.next = 38;
                break;

              case 35:
                _context.prev = 35;
                _context.t2 = _context["catch"](31);
                throw new Error("Could not read source string, ".concat(_context.t2, "\n\n").concat(source));

              case 38:
                _context.next = 40;
                return this._readWebFonts();

              case 40:
                return _context.abrupt("return", osScript);

              case 41:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9], [17, 26], [31, 35]]);
      }));

      function _readSource(_x) {
        return _readSource2.apply(this, arguments);
      }

      return _readSource;
    }()
    /**
     * Reads in an osexp from a string
     *
     * @param {File|String} osexpFile The osexp to parse, can be a string or a File containing a string
     * @returns boolean
     * @memberof Transfer
     */

  }, {
    key: "_readExpFile",
    value: function () {
      var _readExpFile2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee2(osexp) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (![File, Blob].includes(osexp.constructor)) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return Object(_util_files__WEBPACK_IMPORTED_MODULE_25__["readFileAsText"])(osexp);

              case 3:
                osexp = _context2.sent;

              case 4:
                return _context2.abrupt("return", this._processScript(osexp));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _readExpFile(_x2) {
        return _readExpFile2.apply(this, arguments);
      }

      return _readExpFile;
    }()
    /**
     * Reading and extracting an osexp file from a file location.
     * @param {Object} file - A file object containing the experiment.
     */

  }, {
    key: "_readOsexpFromFile",
    value: function () {
      var _readOsexpFromFile2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee3(osexpFile) {
        var _this = this;

        var files, expFileIndex, expFile, script, poolFiles;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this._readExpFile(osexpFile);

              case 3:
                return _context3.abrupt("return", _context3.sent);

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](0);

                this._runner._debugger.addMessage("Could not read osexp file as plain text: ".concat(_context3.t0.message, ".\nFile is probably binary"));

              case 9:
                _context3.next = 11;
                return Object(_util_files__WEBPACK_IMPORTED_MODULE_25__["decompress"])(osexpFile, function (progress) {
                  return _this._runner._screen._updateProgressBar(progress);
                });

              case 11:
                files = _context3.sent;
                // Find the script in the array of extracted files. Throw an error if it isn't found.
                expFileIndex = files.findIndex(function (item) {
                  return item.name === 'script.opensesame';
                });

                if (!(expFileIndex === -1)) {
                  _context3.next = 15;
                  break;
                }

                throw new Error('Could not locate experiment script');

              case 15:
                // Pop the script out of the file array and proccess it
                expFile = files.splice(expFileIndex, 1)[0];
                _context3.next = 18;
                return this._readExpFile(expFile.blob);

              case 18:
                script = _context3.sent;
                // According to the zlib convention followed by the pako library we use to decompress
                // the osexp file, files have a type of 0, so filter these out.
                poolFiles = files.filter(function (item) {
                  return item.type === '0';
                }); // Process the file pool items

                _context3.next = 22;
                return this._processOsexpPoolItems(poolFiles);

              case 22:
                return _context3.abrupt("return", script);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function _readOsexpFromFile(_x3) {
        return _readOsexpFromFile2.apply(this, arguments);
      }

      return _readOsexpFromFile;
    }()
    /**
     * Reads an osexp file from a remote server, if its type is indicated to be
     * 'text/plain' (opposed to being zipped)
     * @param  {string} url The url at which the osexp can be found
     * @return {void}
     */

  }, {
    key: "fetch",
    value: function () {
      var _fetch = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee4(url) {
        var _this2 = this;

        var response, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_28___default.a.get(url, {
                  responseType: 'blob',
                  onDownloadProgress: function onDownloadProgress(event) {
                    if (event.lengthComputable) {
                      _this2._runner._screen._updateProgressBar(event.loaded / event.total);
                    }
                  }
                });

              case 2:
                response = _context4.sent;

                if (/Edge/.test(navigator.userAgent)) {
                  res = new Blob([response.data]);
                  res.name = 'downloaded.osexp';
                } else {
                  res = new File([response.data], 'downloaded.osexp');
                }

                return _context4.abrupt("return", res);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function fetch(_x4) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
    /**
     * Process an osexp script
     * @param  {string} contents - The script contents
     * @return {boolean} - True if script was successfully processed, false otherwise
     */

  }, {
    key: "_processScript",
    value: function _processScript(contents) {
      if (contents.substr(0, 3) !== '---') {
        throw new Error('Specified script file is not valid OpenSesame script');
      } // Disable the progressbar.


      this._runner._screen._updateProgressBar(100); // Set the script paramter.
      // this._runner._script = contents


      return contents;
    }
    /**
     * Asynchronously iterate over file pool files and generate items for them.
     *
     * @param {array} poolFiles The array containing file pool files
     * @returns void
     * @memberof Transfer
     */

  }, {
    key: "_processOsexpPoolItems",
    value: function () {
      var _processOsexpPoolItems2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee5(poolFiles) {
        var asyncIterator, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, item;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // Async iterator that handles each file in the poolFiles array
                asyncIterator = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_17___default()({
                  currentIndex: 0,
                  next: function next() {
                    // All the action happens here
                    var currentFile = poolFiles[this.currentIndex]; // If currentFile is undefined, then the array has been depleted and all
                    // files have been processed. This ends the async iteration properly

                    if (!currentFile) {
                      return {
                        value: undefined,
                        done: true
                      };
                    } // Generate the item.


                    var item = {
                      data: null,
                      folder: currentFile.name.match(/(.*)[/\\]/)[1] || '',
                      name: currentFile.name.replace(/^.*[\\/]/, '').replace(/U\+([0-9A-F]{4})/g, function (whole, group1) {
                        // Parse encoded characters back to their unicode counterparts
                        return String.fromCharCode(parseInt(group1, 16));
                      }),
                      ext: currentFile.name.substr(currentFile.name.lastIndexOf('.') + 1).toLowerCase(),
                      size: currentFile.size,
                      type: 'undefined'
                    };

                    if (['jpg', 'jpeg', 'png', 'bmp'].includes(item.ext)) {
                      // Create a new file pool mage item.
                      var img = new Image();
                      img.src = currentFile.getBlobUrl();
                      item.data = img;
                      item.type = 'image';
                    } else if (['wav', 'ogg', 'mp3'].includes(item.ext)) {
                      item.data = new Audio();
                      item.type = 'audio'; // Safari gives a NotSupportedError when trying to play sound from
                      // a blob URL. As a workaround, here the blob is converted to a
                      // data URI. The data type is explicitly changed to audio, and the
                      // result is assigned to the audio source. See also:
                      // - <https://github.com/open-cogsci/osweb/issues/96>

                      var reader = new FileReader();

                      reader.onload = function (e) {
                        item.data.src = e.target.result.replace('data:application/octet-stream', 'data:audio/' + item.ext);
                      };

                      reader.readAsDataURL(currentFile.blob);
                    } else if (['ogv', 'mp4', 'm4v'].includes(item.ext)) {
                      var ado = document.createElement('VIDEO');
                      ado.src = currentFile.getBlobUrl();
                      item.data = ado;
                      item.type = 'video';
                    } else if (['csv', 'txt', 'md'].includes(item.ext)) {
                      item.type = 'text';
                      currentFile.blob.text().then(function (text) {
                        return item.data = text;
                      });
                    } // Increment the counter.


                    this.currentIndex++;
                    return {
                      value: item,
                      done: false
                    };
                  }
                }, Symbol.asyncIterator, function () {
                  return this;
                }); // Iterate over the file pool items

                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _context5.prev = 3;
                _iterator = _babel_runtime_helpers_asyncIterator__WEBPACK_IMPORTED_MODULE_23___default()(asyncIterator);

              case 5:
                _context5.next = 7;
                return _iterator.next();

              case 7:
                _step = _context5.sent;
                _iteratorNormalCompletion = _step.done;
                _context5.next = 11;
                return _step.value;

              case 11:
                _value = _context5.sent;

                if (_iteratorNormalCompletion) {
                  _context5.next = 19;
                  break;
                }

                item = _value;

                // Add the item to the virtual pool.
                this._runner._pool.add(item); // Update the progress bar.


                this._runner._screen._updateProgressBar(asyncIterator.currentIndex / poolFiles.length);

              case 16:
                _iteratorNormalCompletion = true;
                _context5.next = 5;
                break;

              case 19:
                _context5.next = 25;
                break;

              case 21:
                _context5.prev = 21;
                _context5.t0 = _context5["catch"](3);
                _didIteratorError = true;
                _iteratorError = _context5.t0;

              case 25:
                _context5.prev = 25;
                _context5.prev = 26;

                if (!(!_iteratorNormalCompletion && _iterator.return != null)) {
                  _context5.next = 30;
                  break;
                }

                _context5.next = 30;
                return _iterator.return();

              case 30:
                _context5.prev = 30;

                if (!_didIteratorError) {
                  _context5.next = 33;
                  break;
                }

                throw _iteratorError;

              case 33:
                return _context5.finish(30);

              case 34:
                return _context5.finish(25);

              case 35:
                return _context5.abrupt("return", true);

              case 36:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 21, 25, 35], [26,, 30, 34]]);
      }));

      function _processOsexpPoolItems(_x5) {
        return _processOsexpPoolItems2.apply(this, arguments);
      }

      return _processOsexpPoolItems;
    }()
    /**
     * Read in webfonts
     *
     * @returns Promise
     * @memberof Transfer
     */

  }, {
    key: "_readWebFonts",
    value: function () {
      var _readWebFonts2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_20___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_18___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // Update the introscreen
                this._runner._screen._updateProgressBar(100);

                this._runner._screen._updateIntroScreen('Retrieving required webfonts.');

                return _context6.abrupt("return", new Promise(function (resolve, reject) {
                  // Load the required fonts using webfont.
                  webfontloader__WEBPACK_IMPORTED_MODULE_24___default.a.load({
                    google: {
                      families: ['Droid Sans', 'Droid Serif', 'Droid Sans Mono'],
                      urls: ['//fonts.googleapis.com/css?family=Droid Sans', '//fonts.googleapis.com/css?family=Droid Serif', '//fonts.googleapis.com/css?family=Droid Sans Mono']
                    },
                    active: function active() {
                      return resolve();
                    },
                    inactive: function inactive() {
                      return reject(new Error('Could not load webfonts'));
                    }
                  });
                }));

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function _readWebFonts() {
        return _readWebFonts2.apply(this, arguments);
      }

      return _readWebFonts;
    }()
    /**
     * Writing experiment result data to a location.
     * @param {String} target - An addres to store result data.
     * @param {Object} resultData - The result data itself to store.
     */

  }, {
    key: "_writeDataFile",
    value: function _writeDataFile(target, resultData) {
      // Check if the target and resultData are defined.
      if (target !== null && resultData !== null) {
        // Add the data as a form element.
        var data = new FormData();
        data.append('data', resultData.toString()); // Create the request.

        var xhr = new XMLHttpRequest();
        xhr.open('post', target + '?file=subject-' + this._runner._experiment.vars.get('subject_nr'), true); // Send the actual data.

        return xhr.send(data);
      }
    }
  }]);

  return Transfer;
}();



/***/ }),

/***/ "./src/js/osweb/util/files.js":
/*!************************************!*\
  !*** ./src/js/osweb/util/files.js ***!
  \************************************/
/*! exports provided: decompress, readFileAsText, parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decompress", function() { return decompress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileAsText", function() { return readFileAsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(pako__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_untar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-untar */ "./node_modules/js-untar/build/dist/untar.js");
/* harmony import */ var js_untar__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_untar__WEBPACK_IMPORTED_MODULE_14__);















/**
 * FileStreamer makes it possible to asynchronously stream a file to another reader
 *
 * @class FileStreamer
 */

var FileStreamer = /*#__PURE__*/function () {
  function FileStreamer(file) {
    var chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64 * 1024;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, FileStreamer);

    this.file = file;
    this.offset = 0;
    this.chunkSize = chunkSize; // bytes

    this.rewind();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default()(FileStreamer, [{
    key: "rewind",
    value: function rewind() {
      this.offset = 0;
    }
  }, {
    key: "isEndOfFile",
    value: function isEndOfFile() {
      return this.offset >= this.getFileSize();
    }
  }, {
    key: "readBlock",
    value: function readBlock() {
      var _this = this;

      var fileReader = new FileReader();
      var blob = this.file.slice(this.offset, this.offset + this.chunkSize);
      return new Promise(function (resolve, reject) {
        fileReader.onloadend = function (event) {
          var target = event.target;

          if (target.error) {
            return reject(target.error);
          }

          _this.offset += target.result.byteLength;
          resolve({
            data: target.result,
            progress: Math.min(_this.offset / _this.file.size, 1)
          });
        };

        fileReader.readAsArrayBuffer(blob);
      });
    }
  }, {
    key: "getFileSize",
    value: function getFileSize() {
      return this.file.size;
    }
  }]);

  return FileStreamer;
}();
/**
 * Decompresses a cpmpressed experiment file
 *
 * @export
 * @param {File} zipfile The file to extract
 * @param {function} onProgress Function to be called during extraction progress. Receives proportion complete
 * @returns array of Files
 */


function decompress(_x, _x2) {
  return _decompress.apply(this, arguments);
}
/**
 * Converts a File/Blob to a string representation
 *
 * @export
 * @param {File} inputFile The file to convert
 * @returns string
 */

function _decompress() {
  _decompress = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_9___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(zipfile, onProgress) {
    var fs, inflator, block;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fs = new FileStreamer(zipfile);
            inflator = new pako__WEBPACK_IMPORTED_MODULE_12___default.a.Inflate();

          case 2:
            if (fs.isEndOfFile()) {
              _context.next = 12;
              break;
            }

            _context.next = 5;
            return fs.readBlock();

          case 5:
            block = _context.sent;
            inflator.push(block.data, fs.isEndOfFile());

            if (!inflator.err) {
              _context.next = 9;
              break;
            }

            throw inflator.msg;

          case 9:
            if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_13___default()(onProgress)) onProgress(block.progress);
            _context.next = 2;
            break;

          case 12:
            return _context.abrupt("return", js_untar__WEBPACK_IMPORTED_MODULE_14___default()(inflator.result.buffer));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _decompress.apply(this, arguments);
}

function readFileAsText(inputFile) {
  var temporaryFileReader = new FileReader();
  return new Promise(function (resolve, reject) {
    temporaryFileReader.onerror = function () {
      temporaryFileReader.abort();
      reject(new DOMException('Problem parsing input file.'));
    };

    temporaryFileReader.onload = function () {
      resolve(temporaryFileReader.result);
    };

    temporaryFileReader.readAsText(inputFile);
  });
}
/**
 * Returns current host as detected by browser
 *
 * @returns String
 */

function getHost() {
  return window.location.origin !== 'null' ? window.location.origin : 'http://nodejs.test';
}
/**
 * Checks if the passed string contains a valid URL
 *
 * @export
 * @param {String} str The string to check
 * @returns boolean
 */


function parseUrl(str) {
  try {
    var host = getHost();
    return new URL(str, host);
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./src/js/osweb/util/matrix.js":
/*!*************************************!*\
  !*** ./src/js/osweb/util/matrix.js ***!
  \*************************************/
/*! exports provided: unstack, stack, fullfactorial, shuffleVert, shuffleHoriz, sortCol, reverseRows, roll, weight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstack", function() { return unstack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullfactorial", function() { return fullfactorial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleVert", function() { return shuffleVert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleHoriz", function() { return shuffleHoriz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCol", function() { return sortCol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseRows", function() { return reverseRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roll", function() { return roll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weight", function() { return weight; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.entries */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.values */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash/reverse */ "./node_modules/lodash/reverse.js");
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_reverse__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash/fromPairs */ "./node_modules/lodash/fromPairs.js");
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lodash/zipObject */ "./node_modules/lodash/zipObject.js");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lodash/zip */ "./node_modules/lodash/zip.js");
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(lodash_zip__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash/isInteger */ "./node_modules/lodash/isInteger.js");
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(lodash_isInteger__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var combos__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! combos */ "./node_modules/combos/lib/index.js");
/* harmony import */ var combos__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(combos__WEBPACK_IMPORTED_MODULE_26__);



























function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_12___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Loop utility functions
 */


/**
 * Group matrix values by their variables names
 *
 * @param {Object} srcMatrix The source matrix to transform
 * @returns {Object}
 */
function unstack(srcMatrix) {
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(srcMatrix)) {
    throw new TypeError('srcMatrix should be an array');
  }

  return Object.values(srcMatrix).reduce(function (acc, cycle) {
    for (var _i = 0, _Object$entries = Object.entries(cycle); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14___default()(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          val = _Object$entries$_i[1];

      if (key in acc) {
        acc[key].push(val);
      } else {
        acc[key] = [val];
      }
    }

    return acc;
  }, {});
}
/**
 * Convert grouped by variable matrix back to a normal matrix
 * @param {array} srcMatrix
 * @returns {array}
 */

function stack(srcMatrix) {
  if (!lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_23___default()(srcMatrix)) {
    throw new TypeError('srcMatrix should be an object');
  }

  var columns = Object.keys(srcMatrix);

  var rows = lodash_zip__WEBPACK_IMPORTED_MODULE_19___default.a.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_13___default()(Object.values(srcMatrix)));

  return rows.map(function (row) {
    return lodash_zipObject__WEBPACK_IMPORTED_MODULE_18___default()(columns, row);
  });
}
/**
 * Creates a full factorial design of all the variable values in the matrix
 * @param {array} matrix The array of cycles to fully cross
 * @returns {array}
 */

function fullfactorial(matrix) {
  var result = combos__WEBPACK_IMPORTED_MODULE_26___default()(unstack(matrix));
  return result;
}
/**
 * Shuffles the order of the rows in the matrix. If a column/variable name
 * is specified, only the rows in this column are shuffled.
 *
 * @export
 * @param {array} matrix The matrix to be shuffled
 * @param {array} columns  Array containing the variable/column to be shuffled
 * @returns {array}
 */

function shuffleVert(matrix, columns) {
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }

  if (typeof columns === 'undefined' || lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(columns) && columns.length === 0) {
    return lodash_shuffle__WEBPACK_IMPORTED_MODULE_20___default()(matrix);
  } else if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(columns)) {
    throw new TypeError('Invalid argument for columns passed to shuffleVert. Expects an array containing column names');
  } else {
    var grouped = unstack(matrix);

    var cols = lodash_pick__WEBPACK_IMPORTED_MODULE_16___default()(grouped, columns);

    cols = Object.entries(cols).reduce(function (prev, _ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14___default()(_ref, 2),
          key = _ref2[0],
          values = _ref2[1];

      prev[key] = lodash_shuffle__WEBPACK_IMPORTED_MODULE_20___default()(values);
      return prev;
    }, {});
    return stack(_objectSpread(_objectSpread({}, grouped), cols));
  }
}
/**
 * Shuffles the matrix horizontally; shuffle the values of the columns
 * If column names are specified, only these will be shuffled
 *
 * @export
 * @param {array} matrix
 * @param {array} columns
 * @returns {array}
 */

function shuffleHoriz(matrix, columns) {
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }

  if (typeof columns === 'undefined') columns = [];

  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(columns)) {
    throw new TypeError('Invalid argument specified to shuffleHoriz. Expects an array that optionally contains column names to shuffle');
  }

  return Object.values(matrix).map(function (row) {
    var vars = columns.length === 0 ? row : lodash_pick__WEBPACK_IMPORTED_MODULE_16___default()(row, columns);
    var keys = Object.keys(vars);
    var vals = Object.values(vars);
    vals = lodash_shuffle__WEBPACK_IMPORTED_MODULE_20___default()(vals);

    var res = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_17___default()(lodash_zip__WEBPACK_IMPORTED_MODULE_19___default()(keys, vals));

    return _objectSpread(_objectSpread({}, row), res);
  });
}
/**
 * Sorts only the specified columns of the matrix
 *
 * @export
 * @param {array} matrix
 * @param {string} col
 * @returns array
 */

function sortCol(matrix, col) {
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }

  if (!lodash_isString__WEBPACK_IMPORTED_MODULE_22___default()(col) || col === '') {
    throw new Error('Invalid argument specified to sortCol. Expects a column name');
  }

  var grouped = unstack(matrix);
  grouped[col].sort();
  return stack(grouped);
}
/**
 * Reverses the matrix order
 * If column names are specified, only their orders are reversed
 * @export
 * @param {array} matrix
 * @param {array} columns
 * @returns {array}
 */

function reverseRows(matrix, columns) {
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }

  if (typeof columns === 'undefined') columns = [];

  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(columns)) {
    throw new TypeError('Invalid argument specified to reverseRows. Expects an array containing a column name');
  }

  if (columns.length === 0) {
    return lodash_reverse__WEBPACK_IMPORTED_MODULE_15___default()(matrix);
  } else {
    var grouped = unstack(matrix);

    var cols = lodash_pick__WEBPACK_IMPORTED_MODULE_16___default()(grouped, columns);

    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_21___default()(cols)) {
      throw new ReferenceError("one or more of ".concat(columns, " were not found in the matrix"));
    }

    cols = Object.entries(cols).reduce(function (prev, _ref3) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_14___default()(_ref3, 2),
          key = _ref4[0],
          values = _ref4[1];

      prev[key] = lodash_reverse__WEBPACK_IMPORTED_MODULE_15___default()(values);
      return prev;
    }, {});
    return stack(_objectSpread(_objectSpread({}, grouped), cols));
  }
}
/**
 * Rolls the matrix with the specified distance
 *
 * @export
 * @param {array} matrix
 * @param {number} amount
 * @param {string} column
 * @returns array
 */

function roll(matrix, amount, column) {
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  } // operate on a copy of the array to preserve the original


  matrix = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_13___default()(matrix);
  amount = parseInt(amount);

  if (!lodash_isInteger__WEBPACK_IMPORTED_MODULE_25___default()(amount)) {
    throw new TypeError("amount needs to be an integer, was ".concat(amount));
  }

  if (!column) {
    return rollN(matrix, amount);
  }

  if (!lodash_isString__WEBPACK_IMPORTED_MODULE_22___default()(column)) {
    throw new TypeError("column expects a string, was ".concat(column));
  } else {
    var grouped = unstack(matrix);

    if (!Object.prototype.hasOwnProperty.call(grouped, column)) {
      throw new ReferenceError("Could not find column ".concat(column, " in matrix"));
    }

    grouped[column] = rollN(grouped[column], amount);
    return stack(grouped);
  }
}
/**
 * Roll array contents forward or backward by the specified amount
 *
 * @param {array} list
 * @param {number} amount
 * @returns {array}
 */

function rollN(list, amount) {
  if (amount > 0) {
    for (var i = 0; i < amount; i++) {
      list.unshift(list.pop());
    }
  } else {
    for (var _i2 = 0; _i2 > amount; _i2--) {
      list.push(list.shift());
    }
  }

  return list;
}
/**
 * Duplicate (or remove) rows depending on the specified weight parameter
 *
 * @param {array} matrix The matrix containing the data
 * @param {string} weightCol The colom to use for weight values
 */


function weight(matrix, weightCol) {
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_24___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }

  if (!lodash_isString__WEBPACK_IMPORTED_MODULE_22___default()(weightCol)) {
    throw new TypeError('Invalid argument passed to weight. Expects a column name');
  }

  if (!Object.prototype.hasOwnProperty.call(matrix[0], weightCol)) {
    throw new ReferenceError("Column '".concat(weightCol, "' not found in matrix"));
  }

  return matrix.reduce(function (result, item) {
    var weight = parseInt(item[weightCol]);

    if (!lodash_isInteger__WEBPACK_IMPORTED_MODULE_25___default()(weight)) {
      throw new TypeError('Specified weight value is not an integer');
    }

    for (var i = 0; i < weight; i++) {
      result.push(item);
    }

    return result;
  }, []);
}

/***/ }),

/***/ "./src/scss/osweb.scss":
/*!*****************************!*\
  !*** ./src/scss/osweb.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sebastiaan/git/osweb/src/app.js */"./src/app.js");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=osweb.a806febd2fee54727c2c.bundle.js.map