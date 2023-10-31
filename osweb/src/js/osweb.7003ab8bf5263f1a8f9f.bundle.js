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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "./src/js/osweb/backends/styles.js");





/** Class representing a drawing canvas. */
class Canvas {
  /**
   * Create a canvas object which is used to show all visual stimuli.
   * @param {Object} experiment - The experiment to which the canvas belongs.
   * @param {Boolean} auto_prepare - If true the canvas is prepared after drawing.
   * @param {Object} style_args - Optional styling argument for the canvas.
   */
  constructor(experiment, auto_prepare) {
    // Create and set public properties.
    this.auto_prepare = typeof auto_prepare === 'undefined' ? true : auto_prepare; // Set autoprepare toggle (not supported yet).
    this.experiment = experiment; // Anchor to the experiment object.

    // Create and set private properties.
    this._container = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Container"](); // Create the container which represents the canvas.
    this._font_string = 'bold 18px Courier New'; // Default font definition string.
    this._height = this.experiment._runner._renderer.height; // Height of the HTML canvas used for drawing.
    this._styles = new _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"](); // The style container.
    this._width = this.experiment._runner._renderer.width; // Width of the HTML canvas used for drawing.
    this._name_counter = 0; // Used to generate unique names
    this.current_roi = null;
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
  _arrow_shape(sx, sy, ex, ey, bodyWidth, bodyLength, headWidth) {
    // Length
    var d = Math.sqrt(Math.pow(ey - sy, 2) + Math.pow(sx - ex, 2));
    var angle = Math.atan2(ey - sy, ex - sx);
    var _headWidth = (1 - bodyWidth) / 2.0;
    bodyWidth = bodyWidth / 2.0;

    // calculate coordinates
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
  _containsHTML(str) {
    let doc;
    try {
      doc = new DOMParser().parseFromString(str, 'text/html');
      return Array.from(doc.childNodes).some(node => node.nodeType === 1);
    } catch (e) {
      console.error('Could not parse DOM: ' + e.message);
    }
  }

  /** Exit the display and return to default settings. */
  _exitDisplay() {
    // Clear container.
    this.clear();

    // Set the cursor visibility to default (visible).
    this.experiment._runner._renderer.view.style.cursor = 'default';

    //  Set the renderer dimensions.
    this.experiment._runner._renderer.resize(800, 600);

    // Clear the renderer.
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
  _getStyle(styleArgs) {
    // Check if the supplied style does exist.
    if (typeof styleArgs === 'undefined') {
      return this._styles;
    } else {
      const styles = new _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
  _getTextBaseline(textLine, fontFamily, fontSize, fontBold) {
    // Create the text element.
    const text = document.createElement('span');
    text.style.fontFamily = fontFamily || 'Arial';
    text.style.fontWeight = fontBold === true ? 'bold' : 'normal';
    text.style.fontSize = String(fontSize) + 'px';
    text.innerHTML = textLine;
    // Create the calculation div.
    const block = document.createElement('div');
    block.style.display = 'inline-block';
    block.style.lineHeight = 'normal';
    // block.style.width = '1px'
    // block.style.height = '0px'
    // Create the container div.
    const div = document.createElement('div');
    div.append(text, block);
    document.body.appendChild(div);

    // Set the variables.
    const result = {};
    let rect;
    let top1;
    let top2;

    // Calculate the ascent
    block.style.verticalAlign = 'baseline';
    rect = block.getBoundingClientRect();
    top1 = rect.top + document.body.scrollTop;
    rect = text.getBoundingClientRect();
    top2 = rect.top + document.body.scrollTop;
    result.ascent = Math.round(top1 - top2);

    // Calculate the descent and the heigt.
    block.style.verticalAlign = 'bottom';
    rect = block.getBoundingClientRect();
    top1 = rect.top + document.body.scrollTop;
    rect = text.getBoundingClientRect();
    top2 = rect.top + document.body.scrollTop;
    result.height = Math.round(top1 - top2);
    result.descent = result.height - result.ascent;
    document.body.removeChild(div);

    // Return the result.
    return result;
  }

  /**
   * Returns the correct envelop setting to use.
   * @param {String} env - Envelop parameter.
   * @return {String} - The envelop type to use.
   */
  _match_env(env) {
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
  _parseHtmlNode(htmlNode, textBlock, currentStyle) {
    // Create a style for the current leven
    var elementStyle = this._getStyle(currentStyle);

    // Process the node content itself.
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
            textBlock.height = textBlock.height + textBlock.row.height;
            // new row with elements.
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
              var tokens = htmlNode.attributes[0].value.split(';');
              // parse through the style tokens.
              for (var j = 0; j < tokens.length; j++) {
                var property = tokens[j].slice(0, tokens[j].indexOf(':'));
                var value = tokens[j].slice(tokens[j].indexOf(':') + 1, tokens[j].length);
                // Set the supported properties.
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
        };

        // Create the text element and get the dimension.
        var bounds = {};
        var textElement = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Text"](htmlNode.textContent, textStyle);
        textElement.roi = this.current_roi;
        this._textures.push(textElement);
        textElement.getBounds(false, bounds);

        // Get the height and descent (for vertical positioning);
        var dimension = this._getTextBaseline(htmlNode.textContent, elementStyle.font_family, elementStyle.font_size, elementStyle.font_bold);

        // Position the text element and update the width.
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
    }

    // Process the child nodes recursive (if any).
    for (var i = 0; i < htmlNode.childNodes.length; i++) {
      this._parseHtmlNode(htmlNode.childNodes[i], textBlock, elementStyle, i === htmlNode.childNodes.length - 1);
    }
  }

  /**
   * Resizes the container div (osweb_div), which contains all elements on display
   * @param {Number} width - Width to set.
   * @param {Number} height -Hheight to set.
   */
  _resizeContainer(width, height) {
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
  arrow(sx, sy, ex, ey, bodyWidth, bodyLength, headWidth, styleArgs) {
    // Calculate coordinate points for the arrow.
    var points = this._arrow_shape(sx, sy, ex, ey, bodyWidth, bodyLength, headWidth);

    // Draw the arrow as a polygon.
    this.polygon(points, styleArgs);
  }

  /**
   * Draws an arrow element on the canvas.
   * @param {Number} sx - The x coordinate of the element.
   * @param {Number} sy - The y coordinate of the element.
   * @param {Number} ex - The radius the element.
   * @param {Object} styleArgs - Optional styling argument for the element.
   */
  circle(x, y, r, styleArgs) {
    // Get the style
    var elementStyle = this._getStyle(styleArgs);

    // Create a circle element.
    var circle = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Graphics"]();
    circle.roi = this.current_roi;
    circle.lineStyle(elementStyle.penwidth, elementStyle.color, 1);
    if (elementStyle.fill === true) {
      circle.beginFill(elementStyle.color);
      circle.drawCircle(0, 0, r);
      circle.endFill();
    } else {
      circle.drawCircle(0, 0, r);
    }
    circle.x = x;
    circle.y = y;

    // Add the circle element to container.
    this._container.addChild(circle);
  }

  /**
   * Clear the current canvas.
   * @param {Number} background_color - The color to draw (optional).
   * @param {Object} style_args - JSON object containing style arguments (optional).
   */
  clear(backgroundColor, styleArgs) {
    // Clear the stage by temoving al the child elements.
    for (var i = this._container.children.length - 1; i >= 0; i--) {
      this._container.removeChild(this._container.children[i]);
    }
    let texture;
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
  copy(canvas) {
    this.clear();

    // Loop over the shapes on the passed canvas and copy them onto the current one
    for (const shape of canvas._container.children) {
      this._container.addChild(shape.clone());
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
  ellipse(x, y, w, h, styleArgs) {
    // Get the style
    var elementStyle = this._getStyle(styleArgs);

    // Create an ellipse element.
    var ellipse = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Graphics"]();
    ellipse.roi = this.current_roi;
    ellipse.lineStyle(elementStyle.penwidth, elementStyle.color, 1);
    if (elementStyle.fill === true) {
      ellipse.beginFill(elementStyle.color);
      ellipse.drawEllipse(0, 0, w / 2, h / 2);
      ellipse.endFill();
    } else {
      ellipse.drawEllipse(0, 0, w / 2, h / 2);
    }
    ellipse.x = x + w / 2;
    ellipse.y = y + h / 2;

    // Add the ellipse element to container.
    this._container.addChild(ellipse);
  }

  /**
   * Draws a fixdot element on the canvas.
   * @param {int} x - The x coordinate of the element.
   * @param {int} y - The y coordinate of the element.
   * @param {String} - The style of the fixation dot.
   * @param {Object} styleArgs - Optional styling argument for the element.
   */
  fixdot() {
    let x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'default';
    let styleArgs = arguments.length > 3 ? arguments[3] : undefined;
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
    var styles = new _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
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
  gabor(x, y, orient, freq, env, size, stdev, phase, color1, color2, bgmode) {
    // Returns a surface containing a Gabor patch.
    env = this._match_env(env);

    // Create a temporary canvas to make an image data array.
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    const px = ctx.getImageData(0, 0, size, size);

    // Conver the orientation to radians.
    orient = Math.PI * orient / -180;
    color1 = this._styles._convertColorValueToRGB(color1);
    color2 = this._styles._convertColorValueToRGB(color2);

    // rx and ry reflect the real coordinates in the target image
    for (let rx = 0; rx < size; rx++) {
      for (let ry = 0; ry < size; ry++) {
        // Distance from the center
        const dx = rx - 0.5 * size;
        const dy = ry - 0.5 * size;

        // Get the coordinates (x, y) in the unrotated Gabor patch.
        const t = Math.atan2(dy, dx) + orient;
        const r = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        const ux = r * Math.cos(t);
        const uy = r * Math.sin(t);
        let f;

        // Get the amplitude without the envelope (0 .. 1).
        let amp = 0.5 + 0.5 * Math.cos(2.0 * Math.PI * (ux * freq + phase));

        // The envelope adjustment
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
        }

        // Apply the envelope
        if (bgmode === 'avg') {
          amp = amp * f + 0.5 * (1.0 - f);
        } else {
          amp = amp * f;
        }

        // Recalculate the color values.
        const color = {
          r: color1[0] * amp + color2[0] * (1.0 - amp),
          g: color1[1] * amp + color2[1] * (1.0 - amp),
          b: color1[2] * amp + color2[2] * (1.0 - amp)
        };

        // Set the color values at pixel level.
        var position = rx * 4 + ry * size * 4;
        px.data[position] = color.r;
        px.data[position + 1] = color.g;
        px.data[position + 2] = color.b;
        px.data[position + 3] = 255;
      }
    }

    // Put the calculated data back on the canvas and create an image of it.
    ctx.putImageData(px, 0, 0);

    // Retrieve the image from the recourses
    const texture = pixi_js__WEBPACK_IMPORTED_MODULE_2__["Texture"].from(canvas);
    this._textures.push(texture);
    var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](texture);
    sprite.roi = this.current_roi;

    // Position the image.
    sprite.x = x - size / 2;
    sprite.y = y - size / 2;

    // Add the image to the stage.
    this._container.addChild(sprite);
  }

  /**
   * Returns the canvas height
   * @return {Number} - The height of the canvas in pixels.
   */
  get height() {
    return this._height;
  }

  /**
   * Returns the canvas width
   * @return {Number} - The width of the canvas in pixels.
   */
  get width() {
    return this._width;
  }

  /**
   * Draws an image element on the canvas.
   * @param {String} fname - The name of the element to draw.
   * @param {Boolean|Number|String} center - If true the image is centered.
   * @param {Number} x - The x coordinate of the element.
   * @param {Number} y - The y coordinate of the element.
   * @param {Number} scale - The scaling factor of the element.
   * @param {Number} rotation - Clockwise rotation in degrees.
   */
  image(fname, center, x, y, scale, rotation) {
    const name = this.experiment._runner._syntax.remove_quotes(fname);
    const path = this.experiment._runner._pool[name];
    if (typeof path === 'undefined') this.experiment._runner._debugger.addError("\"".concat(fname, "\" does not exist in the file pool"));
    const img = path.data;
    // Create a temporary canvas to make an image data array.
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const texture = pixi_js__WEBPACK_IMPORTED_MODULE_2__["Texture"].from(canvas);
    this._textures.push(texture);
    const sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](texture);
    sprite.roi = this.current_roi;
    sprite.anchor.set(0.5); // Set the anchor point to the center of the sprite.
    if (typeof scale !== 'undefined') {
      sprite.scale.x = scale;
      sprite.scale.y = scale;
    }
    if (typeof rotation !== 'undefined') sprite.angle = rotation;
    // Position the image when it is centered
    if ([1, '1', true, 'yes'].indexOf(center) !== -1) {
      sprite.x = Math.floor(x);
      sprite.y = Math.floor(y);
      // And when it is not centered, i.e. anchored to the top-left
    } else {
      sprite.x = Math.floor(x + sprite.width / 2);
      sprite.y = Math.floor(y + sprite.height / 2);
    }
    console.log(sprite.x);
    this._container.addChild(sprite);
  }

  /**
   * Initializes the  display container on which the canvas is displayed.
   * @param {Object} experiment - The experiment to which the canvas belongs.
   */
  init_display(experiment) {
    // Set the dimension properties.
    this._height = experiment.vars.get('height');
    this._width = experiment.vars.get('width');

    // Set the renderer dimensions.
    experiment._runner._renderer.resize(this._width, this._height);

    // Set the renderer background color.
    const background = experiment.vars.get('background');
    experiment._runner._renderer.clear(this._styles._convertColorValue(background, 'number'));
    experiment._runner._renderer.backgroundColor = this._styles._convertColorValue(background, 'number');

    // PIXU: Set the cursor visibility to none (default).
    experiment._runner._renderer.view.style.cursor = 'none';

    // Start the fullscreen mode (if enabled).
    experiment._runner._screen._fullScreenInit();

    // Set focus to the experiment canvas.
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
  line(sx, sy, ex, ey, styleArgs) {
    // Get the style
    var elementStyle = this._getStyle(styleArgs);

    // Create a line element.
    var line = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Graphics"]();
    line.roi = this.current_roi;
    line.lineStyle(elementStyle.penwidth, elementStyle.color, 1);
    line.moveTo(0, 0);
    line.lineTo(ex - sx, ey - sy);
    line.x = sx;
    line.y = sy;

    // Add the line element to container.
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
  noise(x, y, env, size, stdev, color1, color2, bgmode) {
    // Returns a surface containing a noise patch.
    env = this._match_env(env);

    // Create a temporary canvas to make an image data array.
    var canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    var px = ctx.getImageData(0, 0, size, size);

    // Create a surface
    color1 = this._styles._convertColorValueToRGB(color1);
    color2 = this._styles._convertColorValueToRGB(color2);

    // rx and ry reflect the real coordinates in the target image
    for (let rx = 0; rx < size; rx++) {
      for (let ry = 0; ry < size; ry++) {
        // Distance from the center
        const ux = rx - 0.5 * size;
        const uy = ry - 0.5 * size;
        const r = Math.sqrt(Math.pow(ux, 2) + Math.pow(uy, 2));
        let f;
        // Get the amplitude without the envelope (0 .. 1)
        var amp = Math.random();
        // The envelope adjustment
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
        }

        // Apply the envelope
        if (bgmode === 'avg') {
          amp = amp * f + 0.5 * (1.0 - f);
        } else {
          amp = amp * f;
        }

        // Recalculate the collor values.
        const color = {
          r: color1[0] * amp + color2[0] * (1.0 - amp),
          g: color1[1] * amp + color2[1] * (1.0 - amp),
          b: color1[2] * amp + color2[2] * (1.0 - amp)
        };

        // Set the color values at pixel level.
        var position = rx * 4 + ry * size * 4;
        px.data[position] = color.r;
        px.data[position + 1] = color.g;
        px.data[position + 2] = color.b;
        px.data[position + 3] = 255;
      }
    }

    // Put the calculated data back on the canvas and create an image of it.
    ctx.putImageData(px, 0, 0);

    // Retrieve the image from the recourses
    const texture = pixi_js__WEBPACK_IMPORTED_MODULE_2__["Texture"].from(canvas);
    this._textures.push(texture);
    var sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Sprite"](texture);
    sprite.roi = this.current_roi;
    // Position the image.
    sprite.x = x - size / 2;
    sprite.y = y - size / 2;

    // Add the image to the stage.
    this._container.addChild(sprite);
  }

  /**
   * Draws a polygon element on the canvas.
   * @param {Array} verticles - The coordinates of the element.
   * @param {Object} styleArgs - Optional styling argument for the element.
   */
  polygon(verticles, styleArgs) {
    // Get the style
    var elementStyle = this._getStyle(styleArgs);

    // Adjust the points.
    var path = [];
    for (var i = 0; i < verticles.length; i++) {
      path.push(verticles[i][0]);
      path.push(verticles[i][1]);
    }
    path.push(verticles[0][0]);
    path.push(verticles[0][1]);

    // Create a polygon element.
    var polygon = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Graphics"]();
    polygon.roi = this.current_roi;
    polygon.lineStyle(elementStyle.penwidth, elementStyle.color, 1);
    if (elementStyle.fill === true) polygon.beginFill(elementStyle.color);
    polygon.drawPolygon(path);
    if (elementStyle.fill === true) polygon.endFill();

    // Add the polygon item to container.
    this._container.addChild(polygon);
  }

  /** Implements the prepare phase of a canvas. */
  prepare() {}

  /**
   * Draws a rectangle element on the canvas.
   * @param {Number} x - The x coordinate of the element.
   * @param {Number} y - The y coordinate of the element.
   * @param {Number} w - The width of the element.
   * @param {Number} h - The height of the element.
   * @param {Object} styleArgs - Optional styling argument for the element.
   */
  rect(x, y, w, h, styleArgs) {
    // Get the style
    var elementStyle = this._getStyle(styleArgs);
    // Create a rectangle element.
    var rectangle = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Graphics"]();
    rectangle.roi = this.current_roi;
    rectangle.lineStyle(elementStyle.penwidth, elementStyle.color, 1);
    if (elementStyle.fill === true) {
      rectangle.beginFill(elementStyle.color);
      rectangle.drawRect(0, 0, w, h);
      rectangle.endFill();
    } else {
      rectangle.drawRect(0, 0, w, h);
    }
    rectangle.x = x;
    rectangle.y = y;

    // Add the rectangle element to container.
    this._container.addChild(rectangle);
  }

  /**
   * Returns the size ion pixels of the canvas.
   * @return {Array} - The widht an height as an array tupple.
   */
  size() {
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
  show(experiment) {
    // Check parameter.
    experiment = typeof experiment !== 'undefined' ? experiment : this.experiment;

    // Add the container to the stage object and update the stage.
    this.experiment._currentCanvas = this;

    // Set the scaling.
    this._container.scale.x = this.experiment._scale_x;
    this._container.scale.y = this.experiment._scale_y;

    // Set renderer background and render the content. Because PixiJS users
    // numerical values for colors, whereas the body uses regular CSS colors,
    // we need to assign two different values for each. Color conversion is
    // done inside the style object.
    this.experiment._runner._renderer.backgroundColor = this._styles._background_color;
    if (this.experiment._runner._fullBackgroundColor) document.body.style.backgroundColor = this._styles._background_color_rgb;
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
  text(txt, center, x, y, html, styleArgs) {
    // Newlines are not dealt with correctly, so we convert them to <br />
    // tags, which results in the same behavior as the desktop.
    txt = txt.toString().replace('\n', '<br />');
    // Get the style
    const elementStyle = this._getStyle(styleArgs);

    // Only jump through the HTML rendering hoops if the html == 'yes' and
    // text actually contains HTML markup.
    if (html === 'yes' && this._containsHTML(txt)) {
      //  Define the text block object.
      const textBlock = {
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
      };

      // First create a div container for parsing the html text.
      const div = document.createElement('div');
      document.body.appendChild(div);
      div.style.fontFamily = elementStyle.font_family;
      div.style.fontSize = String(elementStyle.font_size) + 'px';
      div.style.fontWeight = elementStyle.font_bold === true ? 'bold' : 'normal';
      div.style.lineHeight = 'normal';
      div.style.display = 'inline-block';
      div.style.visibility = 'hidden';
      div.innerHTML = txt;

      // Parse the html recursive.
      this._parseHtmlNode(div, textBlock, elementStyle);

      // Remove the html div.
      document.body.removeChild(div);

      // Add the last row (if any).
      if (textBlock.row.text_elements.length !== 0) {
        textBlock.height = textBlock.height + textBlock.row.height;
        textBlock.rows.push(textBlock.row);
      }

      // Recalculate the x and y positions depending on height, width and centering.
      textBlock.y_pos = 0;
      for (let i = 0; i < textBlock.rows.length; i++) {
        // Parse a textline.
        for (let j = 0; j < textBlock.rows[i].text_elements.length; j++) {
          // Check for vertical correction.
          const adjust = textBlock.rows[i].ascent - textBlock.rows[i].text_dimensions[j].ascent;
          textBlock.rows[i].text_elements[j].y = textBlock.y_pos + adjust;

          // Check for horizontal centering.
          if ([1, '1', true, 'yes'].indexOf(center) !== -1) {
            textBlock.rows[i].text_elements[j].x = textBlock.rows[i].text_elements[j].x + x - Math.floor(textBlock.rows[i].width / 2);
            textBlock.rows[i].text_elements[j].y = textBlock.rows[i].text_elements[j].y + y - Math.floor(textBlock.height / 2);
          } else {
            textBlock.rows[i].text_elements[j].x = textBlock.rows[i].text_elements[j].x + x;
            textBlock.rows[i].text_elements[j].y = textBlock.rows[i].text_elements[j].y + y + 6;
          }

          // if underlined add additional styling.
          if (textBlock.rows[i].text_underline[j] === true) {
            this.line(textBlock.rows[i].text_elements[j].x, textBlock.rows[i].text_elements[j].y + textBlock.rows[i].text_dimensions[j].ascent + 7, textBlock.rows[i].text_elements[j].x + textBlock.rows[i].text_elements[j].width, textBlock.rows[i].text_elements[j].y + textBlock.rows[i].text_dimensions[j].ascent + 7, elementStyle);
          }

          //  Add text element to the stage.
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
      var textElement = new pixi_js__WEBPACK_IMPORTED_MODULE_2__["Text"](txt, textStyle);
      textElement.roi = this.current_roi;
      this._textures.push(textElement);
      if ([1, '1', true, 'yes'].indexOf(center) !== -1) {
        textElement.x = Math.floor(x - textElement.width / 2);
        textElement.y = Math.floor(y - textElement.height / 2);
      } else {
        textElement.x = x;
        textElement.y = y;
      }
      console.log(textElement.x);

      //  Add text element to the stage.
      this._container.addChild(textElement);
    }
  }

  /** Used to assign unique names to nameless elements **/
  unique_name() {
    const name = 'stim' + this._name_counter;
    this._name_counter++;
    return name;
  }

  /** Returns a semi-colon separated string of rois that overlap with the
    * specified x and y coordinates.
    **/
  elements_at(x, y) {
    // Convert to top-left anchored coordinates
    x += this.experiment.vars.get('width') / 2;
    y += this.experiment.vars.get('height') / 2;
    const elements = [];
    for (const child of this._container.children) {
      if (typeof child.roi === 'undefined' | child.roi === null) continue;
      if (child.getBounds().contains(x, y)) elements.push(child.roi);
    }
    return elements;
  }
}

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
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");


/** Class representing the clock system. */
class Clock {
  /**
   * Create a clock object which controls a pseudo real-time clock.
   * @param {Object} experiment - The experiment  to which the clock belongs.
   */
  constructor(experiment) {
    // Create and set private properties.
    this._experiment = experiment; // Parent experiment item.
    this._startTime = -1; // Start time anchor of the experiment.
  }

  /** Initialize the clock. */
  _initialize() {
    // Set the absolute start time of the expeirment.
    this._startTime = this._now();
  }

  /** Get an absolute time stamp from the system in ms.
   * @return {Number} - The current absolute time in ms.
   */
  _now() {
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
  sleep(ms) {
    // Sleeps (pauses) for a duration (in milliseconds).
    if (this._experiment !== null) {
      // Set the event processor.
      this._experiment._runner._events._run(ms, _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_DURATION, null);
    }
  }

  /** Get the relative time from the start of an experiment.
   * @return {Number} - The current relative time in ms.
   */
  time() {
    // Gives the current timestamp in milliseconds.
    if (this._startTime !== -1) {
      return this._now() - this._startTime;
    } else {
      return 0;
    }
  }
}

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
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _response_device_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response_device.js */ "./src/js/osweb/backends/response_device.js");



/** Class representing a keyboard device. */
class Keyboard extends _response_device_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Create an object which represents a keyboard device.
   * @param {Object} experiment - The experiment to which the logger belongs.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} keyList - List of acceptable response keys.
   * @extends ResponseDevice   
   */
  constructor(experiment, timeOut, keyList) {
    // Create and set private properties.
    super();
    this._experiment = experiment; // Anchor to the experiment object.
    this._keyList = typeof keyList === 'undefined' ? [] : keyList; // List of acceptable response keys.
    this._timeOut = typeof timeOut === 'undefined' ? null : timeOut; // Duration in millisecond for time-out.

    // Set constant properties.
    this._SYNONYM_MAP = [['None', 'none'],
    // timeout
    ['space', ' ', 'SPACE'], ['"', 'quotedbl', 'QUOTEDBL'], ['!', 'exclaim', 'EXCLAIM'], ['#', 'hash', 'HASH'], ['$', 'dollar', 'DOLLAR'], ['&', 'ampersand', 'AMPERSAND'], ["'", 'quote', 'QUOTE'], ['(', 'leftbracket', 'leftparen', 'LEFTBRACKET', 'LEFTPAREN'], [')', 'rightbracket', 'rightparen', 'RIGHTBRACKET', 'RIGHTPAREN'], ['*', 'asteriks', 'ASTERISK'], ['+', 'plus', 'PLUS'], [',', 'comma', 'COMMA'], ['-', 'minus', 'MINUS'], ['.', 'period', 'PERIOD'], ['/', 'slash', 'SLASH'], ['1'], ['2'], ['3'], ['4'], ['5'], ['6'], ['7'], ['8'], ['9'], ['0'], ['=', 'equals', 'EQUALS'], [':', 'colon', 'COLON'], [';', 'semicolon', 'SEMICOLON'], ['<', 'less', 'LESS'], ['>', 'greater', 'GREATER'], ['?', 'question', 'QUESTION'], ['@', 'at', 'AT'], ['a', 'A'], ['b', 'B'], ['c', 'C'], ['d', 'D'], ['e', 'E'], ['f', 'F'], ['g', 'G'], ['h', 'H'], ['i', 'I'], ['j', 'J'], ['k', 'K'], ['l', 'L'], ['m', 'M'], ['n', 'N'], ['o', 'O'], ['p', 'P'], ['q', 'Q'], ['r', 'R'], ['s', 'S'], ['t', 'T'], ['u', 'U'], ['v', 'V'], ['w', 'W'], ['x', 'X'], ['y', 'Y'], ['z', 'Z'], ['kp0', 'KP0'], ['kp1', 'KP1'], ['kp2', 'KP2'], ['kp3', 'KP3'], ['kp4', 'KP4'], ['kp5', 'KP5'], ['kp6', 'KP6'], ['kp7', 'KP7'], ['kp8', 'KP8'], ['kp9', 'KP9'], ['kp_divide', 'KP_DIVIDE'], ['kp_enter', 'KP_ENTER'], ['kp_equals', 'KP_EQUALS'], ['kp_minus', 'KP_MINUS'], ['kp_multiply', 'KP_MULTIPLY'], ['kp_period', 'KP_PERIOD'], ['kp_plus', 'KP_PLUS'], ['\\', 'backslash', 'BACKSLASH'], ['^', 'power', 'caret', 'POWER', 'CARET'], ['_', 'underscore', 'UNDERSCORE'], ['`', 'backquote', 'BACKQUOTE'], ['f1', 'F1', 'help', 'HELP'], ['f2', 'F2'], ['f3', 'F3'], ['f4', 'F4'], ['f5', 'F5'], ['f6', 'F6'], ['f7', 'F7'], ['f8', 'F8'], ['f9', 'F9'], ['f10', 'F10'], ['f11', 'F11'], ['f12', 'F12'], ['f13', 'F13'], ['f14', 'F14'], ['f15', 'F15'], ['up', 'UP'], ['down', 'DOWN'], ['left', 'LEFT'], ['right', 'RIGHT'], ['menu', 'MENU'], ['lshift', 'left shift', 'LSHIFT', 'LEFT SHIFT'], ['lctrl', 'left ctrl', 'LCTRL', 'LEFT CTRL'], ['lalt', 'left alt', 'LALT', 'LEFT ALT'], ['rshift', 'right shift', 'RSHIFT', 'RIGHT SHIFT'], ['rctrl', 'right ctrl', 'RCTRL', 'RIGHT CTRL'], ['ralt', 'right alt', 'alt gr', 'RALT', 'RIGHT ALT', 'ALT GR'], ['page up', 'pageup', 'PAGE UP', 'PAGEUP'], ['page down', 'pagedown', 'PAGE DOWN', 'PAGEDOWN'], ['pause', 'PAUSE'], ['scroll lock', 'scrollock', 'SCROLL LOCK', 'SCROLLOCK'], ['caps lock', 'capslock', 'CAPS LOCK', 'CAPSLOCK'], ['nummlock', 'NUMMLOCK'], ['clear', 'CLEAR'], ['enter', 'ENTER', 'return', 'RETURN'], ['tab', 'TAB'], ['backspace', 'BACKSPACE'], ['end', 'END'], ['home', 'HOME'], ['insert', 'INSERT'], ['delete', 'DELETE'], ['sysreq', 'sys req', 'SYSREQ', 'SYS REQ'], ['break', 'BREAK'], ['escape', 'ESCAPE'], ['print', 'PRINT'], ['print screen', 'PRINT SCREEN'], ['lmeta', 'left meta', 'LMETA', 'LEFT META', 'lsuper', 'LSUPER', 'left super', 'LEFT SUPER'], ['rmeta', 'right meta', 'RMETA', 'RIGHT META', 'rsuper', 'right super', 'RSUPER', 'RIGHT SUPER'],
    // key defined below are not supported yet.
    ['euro', 'EURO'], ['first', 'FIRST'], ['last', 'LAST'], ['kp enter', 'KP ENTER'], ['kp equals', 'KP EQUALS'], ['mode', 'MODE'], ['unknown', 'UNKNOWN'], ['unknown key', 'UNKNOWN KEY']];
  }

  /**
   * Set the configuration for the keyboard backend.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} keyList - List of acceptable response keys.
   */
  _set_config(timeOut, keyList) {
    // Set the properties.
    this._keyList = keyList;
    this._timeOut = timeOut;
  }

  /**
   * Collects a single key press.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} keyList - List of acceptable response keys.
   */
  get_key(timeOut, keyList) {
    this._keyList = typeof keyList === 'undefined' ? this._keyList : keyList;
    this._timeOut = typeof timeOut === 'undefined' ? this._timeOut : timeOut;
    if (this._experiment !== null) this._experiment._runner._events._run(this._timeOut, _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_KEYBOARD, this._keyList);
  }

  /**
   * Retrieve the moderator keys (LIST, CTRL, ALT) pressed during a response.
   * @return {Array} - List of pressed moderator keys.
   */
  get_mods() {
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
  show_virtual_keyboard(visible) {
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
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_1__);



/** Class representing a data logger. */
class Log {
  /**
   * Create a log object which stores all the response data.
   * @param {Object} experiment - The experiment to which the logger belongs.
   */
  constructor(experiment) {
    this._experiment = experiment; // Anchor to the experiment object.
  }

  /**
   * Write one signle line to the message log.
   * @param {Array} varList - Array with variables to write to the log.
   */
  write_vars(varList) {
    const entry = {};
    for (const varName of varList) {
      const value = this._experiment.vars.get(varName, 'NA', false);
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(value)) continue;
      entry[varName] = value;
    }
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_1___default()(this._experiment.onLog)) {
      this._experiment.onLog(entry);
    }
    this._experiment._runner._data.push(entry);
  }
}

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
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _response_device_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response_device.js */ "./src/js/osweb/backends/response_device.js");



/** Class representing a mouse device. */
class Mouse extends _response_device_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Create an object which represents a mouse device.
   * @param {Object} experiment - The experiment to which the logger belongs.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} buttonList - List of acceptable response buttons.
   * @param {Boolean} visible - Toggle for showing the mouse cursor.
   * @extends ResponseDevice
   */
  constructor(experiment, timeOut, buttonList, visible) {
    // Create and set public properties.
    super();
    this._experiment = experiment;
    this._timeOut = typeof timeOut === 'undefined' ? null : timeOut;
    this._buttonList = typeof buttonList === 'undefined' ? null : buttonList;
    this._visible = typeof visible === 'undefined' ? false : visible;

    // Set constant properties.
    this._SYNONYM_MAP = [['None', 'none'],
    // timeout
    ['1', 'left_button', 'left'], ['2', 'middle_button', 'middle'], ['3', 'right_button', 'right'], ['4', 'scroll_up'], ['5', 'scroll_down']];
  }

  /**
   * Set the configuration for the mouse backend.
   * @param {Number} timeOut - Duration in ms for time out.
   * @param {Array} buttonList - List of acceptable response buttons.
   * @param {Boolean} visible - Toggle for showing the mouse cursor.
   */
  _set_config(timeOut, buttonList, visible) {
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
  get_click(timeOut, buttonList, visible) {
    // Collects a single mouse click.
    this._timeOut = typeof timeOut === 'undefined' ? this._timeOut : timeOut;
    this._buttonList = typeof buttonList === 'undefined' ? this._buttonList : buttonList;
    this._visible = typeof visible === 'undefined' ? this._visible : visible;
    if (this._experiment !== null) {
      // Hide or show the mouse.
      this.show_cursor(this._visible);

      // Set the event processor.
      this._experiment._runner._events._run(this._timeOut, _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_MOUSE, this._buttonList);
    }
  }

  /**
   *  Returns the current mouse position. !Warning: this methods uses the state in
   *  the last known mouse move, not the current state.
   *  @param {Object} - Object with time, x and y coordinate of the mouse cursor.
   */
  get_pos() {
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
  get_pressed() {
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
  set_pos(pos) {}

  /**
   * Shows or hides the mouse cursor.
   * @param {Boolean} show - If true the mouse cursor is shown.
   */
  show_cursor(show) {
    // Set the property
    this._visible = show;

    // Immediately changes the visibility of the mouse cursor.
    if (show === true) {
      // Show the mouse cursor.
      this._experiment._runner._renderer.view.style.cursor = 'default';
    } else {
      // Set the cursor visibility to none.
      this._experiment._runner._renderer.view.style.cursor = 'none';
    }
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Base class for Mouse and Keyboard
 */
class ResponseDevice {
  constructor() {
    this._SYNONYM_MAP = [];
  }
  /**
   * Convert all response values to their default values (remove synonyms).
   * @param {Array} responses - A list of response values.
   * @return {Array} - List of default values for the given responses.
   */
  _get_default_from_synonym(responses) {
    const defaults = [];
    let synonyms;
    for (let response of responses) {
      synonyms = this._synonyms(response);
      if (synonyms === null) {
        throw new ReferenceError("Unknown key '".concat(response, "'"));
      }
      defaults.push(synonyms[0]);
    }
    return defaults;
  }

  /**
   * Get all synonyms for a response value
   * @param {String} button - A response.
   * @return {Array|Null} - All synonyms or null if the response is unknown
   */
  _synonyms(response) {
    if (typeof response === 'undefined') return null;
    for (let synonyms of this._SYNONYM_MAP) {
      if (synonyms.includes(response) || synonyms.includes(response.toLowerCase())) return synonyms;
    }
    return [response];
  }

  /** Clear all pending keyboard input. */
  flush() {
    // Always returns false because flusihing is not possible.
    return false;
  }
}

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
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _system_audio_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/audio_context */ "./src/js/osweb/system/audio_context.js");



/** Class representing a sampler. */
class SamplerBackend {
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
  constructor(experiment, source, volume, pitch, pan, duration, fade, block) {
    this.source = null;
    this.block = typeof block === 'undefined' ? false : block;
    this.duration = typeof duration === 'undefined' ? 'sound' : duration;
    this.experiment = experiment;
    this.volume = typeof volume === 'undefined' ? 1 : volume;
    this.fade = typeof fade === 'undefined' ? 0 : fade;
    this.pan = typeof pan === 'undefined' ? 0 : pan;
    this.pitch = typeof pitch === 'undefined' ? 1 : pitch;
    try {
      this.audioBuffer = source.data;
    } catch (e) {
      console.error('Could not play sound:', source);
      throw e;
    }
    this.audioContext = Object(_system_audio_context__WEBPACK_IMPORTED_MODULE_1__["getAudioContext"])();
    this.initBufferSource();
  }
  initBufferSource() {
    // Initializes the buffer source
    this.source = this.audioContext.createBufferSource();
    this.source.buffer = this.audioBuffer;
    this.source.onended = () => this.experiment._runner._events._audioEnded(this);
    this.source.connect(this.applyFilters());
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
  play(volume, pitch, pan, duration, fade, block) {
    // Check if optional parameters are defined.
    this.block = block || this.block;
    this.duration = typeof duration === 'undefined' ? this.duration : duration;
    this.volume = typeof volume === 'undefined' ? this.volume : volume;
    this.pitch = typeof pitch === 'undefined' ? this.pitch : pitch;
    this.pan = typeof pan === 'undefined' ? this.pan : pan;
    this.fade = typeof fade === 'undefined' ? this.fade : fade;
    if (this.source === null) this.initBufferSource();
    this.source.start(0);
    this.source = null;
  }

  /** Set the blocking of the sound (wait period). */
  wait() {
    // Set the blocking of the sound.
    this.experiment._runner._events._run(this, -1, _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_SOUND, []);
  }
  clearFilters() {
    // Disconnect audio nodes so that they don't accumulate
    this.nodes.forEach(node => node.disconnect());
  }
  applyFilters() {
    this.nodes = [this.audioContext.destination];
    // Set pitch
    if (this.pitch !== undefined && this.pitch !== 1) {
      this.source.playbackRate.setValueAtTime(this.pitch, this.audioContext.currentTime);
    }
    // Set volume
    const gainNode = new GainNode(this.audioContext);
    gainNode.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
    if (this.fade) {
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + this.fade / 1000);
    }
    this.nodes.unshift(gainNode);
    // Set panning
    if (this.pan) {
      let pan;
      if (this.pan === 'left') pan = -1;else if (this.pan === 'right') pan = 1;else pan = this.pan;
      this.nodes.unshift(new StereoPannerNode(this.audioContext, {
        pan: pan
      }));
    }
    // Connect the filters creating a chain
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i] !== this.audioContext.destination) {
        this.nodes[i].connect(this.nodes[i + 1]);
      }
    }
    return this.nodes[0];
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isInteger */ "./node_modules/lodash/isInteger.js");
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isInteger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_3__);




const colorHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
const colorRGB255 = /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i;
const colorRGBPerc = /rgb\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*\)/i;
const colorHSV = /hsv\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*\)/i;
const colorHSL = /hsl\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*%\s*\)/i;
const colorLAB = /lab\(\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*,\s*([+-]?([0-9]+([.][0-9]*)?|[.][0-9]+))\s*\s*\)/i;

/** Class representing a style container. */
class Styles {
  /** Styles is a simple class that holds information about the style. */
  constructor(item) {
    this._initConstants();
    // Set class private properties.
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
  _convertColorValue(color) {
    const [r, g, b] = this._convertColorValueToRGB(color).map(Math.round);
    return 65536 * r + 256 * g + b;
  }

  /**
   * Extracts three float numbers from a color based on a regular expression
   * that matches three float numbers.
   * @param {String} color
   * @return {Array<Number>}
   **/
  _matchFloats(color, re) {
    const m = color.match(re);
    return [m[1], m[4], m[7]].map(Number);
  }
  _convertColorValueToRGB(color) {
    if (typeof color === 'string') {
      color = color.toLowerCase();
      const rgb = color_convert__WEBPACK_IMPORTED_MODULE_3___default.a.keyword.rgb(color);
      if (typeof rgb !== 'undefined') return rgb;
      if (colorHex.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_3___default.a.hex.rgb(color);
      if (colorRGB255.test(color) === true) return color.match(colorRGB255).slice(1, 4).map(Number);
      if (colorRGBPerc.test(color) === true) return this._matchFloats(color, colorRGBPerc).map(perc => perc * 2.55);
      if (colorHSV.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_3___default.a.hsv.rgb(this._matchFloats(color, colorHSV));
      if (colorHSL.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_3___default.a.hsl.rgb(this._matchFloats(color, colorHSL));
      if (colorLAB.test(color) === true) return color_convert__WEBPACK_IMPORTED_MODULE_3___default.a.lab.rgb(this._matchFloats(color, colorLAB));
      if (!isNaN(Number(color)))
        // For single numbers a strings
        color = Number(color);
    }
    if (lodash_isInteger__WEBPACK_IMPORTED_MODULE_1___default()(color)) return [color, color, color];
    if (lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(color) && color.length == 3) return color.map(Number);
    throw 'Invalid color specification: ' + color + ' (' + typeof color + ')';
  }
  get rgb() {
    return this._convertColorValue(this._background_color);
  }
  set rgb(val) {}

  /**
   * Checks if the passed value is an integer.
   * @param {Number} value -  The value to check.
   * @return {Boolean} - True if passed value is an integer.
   */
  _isInt(value) {
    return lodash_isInteger__WEBPACK_IMPORTED_MODULE_1___default()(value);
  }

  /**
   * Checks if value is possibly specified as 'yes'/'no' or 1/0 instead of
   * true or false (as is done in OS script). Convert 'yes' and 'no' values
   * to booleans
   * @param {Number|String} value - The value to check.
   * @return {Boolean} - The original boolean, or true if value was 'yes'.
   */
  _checkVal(value) {
    return [true, 'yes', 1, '1'].indexOf(value) !== -1;
  }

  /**
   * Get the background_color value.
   * @return {String} The background_color value.
   */
  get background_color() {
    return this._background_color;
  }

  /**
   * Set the background_color value.
   * @param {Number|String} val - The background_color value to set.
   */
  set background_color(val) {
    this._background_color = this._convertColorValue(val, 'number');
    this._background_color_rgb = val;
  }

  /**
   * Get the color value.
   * @return {String} The color value.
   */
  get color() {
    return this._color;
  }

  /**
   * Set the color value.
   * @param {Number|String} val - The color value to set.
   */
  set color(val) {
    this._color = this._convertColorValue(val, 'number');
  }

  /**
   * Get the fill value.
   * @return {Boolean} The fill value.
   */
  get fill() {
    return this._fill;
  }

  /**
   * Set the fill value.
   * @param {Boolean} val - The fill value to set.
   */
  set fill(val) {
    this._fill = [1, '1', true, 'yes'].indexOf(val) !== -1;
  }

  /**
   * Get the font_bold value.
   * @return {Boolean} The font_bold value.
   */
  get font_bold() {
    return this._font_bold;
  }

  /**
   * Set the font_bold value.
   * @param {Boolean} val - The font_bold value to set.
   */
  set font_bold(val) {
    this._font_bold = this._checkVal(val);
  }

  /**
   * Get the font_family value.
   * @return {String} The font_family value.
   */
  get font_family() {
    return this._font_family;
  }

  /**
   * Set the font_family value.
   * @param {String} val - The font_family value to set.
   */
  set font_family(val) {
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
  get font_italic() {
    return this._font_italic;
  }

  /**
   * Set the font_italic value.
   * @param {Boolean} val - The font_bold value to set.
   */
  set font_italic(val) {
    this._font_italic = this._checkVal(val);
  }

  /**
   * Get the font_size value.
   * @return {Number} The font_size value.
   */
  get font_size() {
    return this._font_size;
  }

  /**
   * Set the font_size value.
   * @param {Number} val - The font_size value to set.
   */
  set font_size(val) {
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
  get font_underline() {
    return this._font_underline;
  }

  /**
   * Set the font_underline value.
   * @param {Boolean} val - The font_underline value to set.
   */
  set font_underline(val) {
    this._font_underline = this._checkVal(val);
  }

  /**
   * Get the html value.
   * @return {Boolean} The html value.
   */
  get html() {
    return this._html;
  }

  /**
   * Set the html value.
   * @param {Boolean} val - The html value to set.
   */
  set html(val) {
    this._html = this._checkVal(val);
  }

  /**
   * Get the penwidth value.
   * @return {Boolean} The penwidth value.
   */
  get penwidth() {
    return this._penwidth;
  }

  /**
   * Set the penwidth value.
   * @param {Boolean} val - The penwidth value to set.
   */
  set penwidth(val) {
    if (!this._isInt(val)) {
      this._penwidth = 1;
    }
    this._penwidth = val;
  }
  _initConstants() {
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
}

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
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");



/** Class representing a video. */
class Video {
  /**
   * Create a video object which controls the video device.
   * @param {Object} experiment - The experiment to which the video belongs.
   * @param {String} src - The video source name.
   */
  constructor(experiment, source) {
    // Set class parameter properties.
    this._experiment = experiment;

    // Set the class public properties.
    this.audio = true;
    this.duration = 'keypress';
    this.full_screen = false;

    // Set the class pivate properties.
    this._playing = false;
    this._script = null;

    // Create the video instance
    if (source !== null) {
      // Set the video object.
      this._video = source.data;

      // create a video texture from the video.
      this._texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__["Texture"].from(source.data);

      // create a new Sprite using the video texture (yes it's that easy)
      this._videoSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__["Sprite"](this._texture);
      this._video.pause();

      // Set the event anchors.
      this._video.onended = this._experiment._runner._events._videoEnded.bind(this);
      this._video.onplay = this._experiment._runner._events._videoPlay.bind(this);
    }
  }

  /** Update the video rendering. */
  _update() {
    if (this._playing === true) {
      // Update the renderer.
      this._experiment._runner._renderer.render(this._videoSprite);

      // execute script.
      if (this._script !== null && this._event_handler_always === true) {
        // Start the parser
        this._experiment._runner._pythonParser._run(null, this._script);
      }
    }
  }

  /** Play the actual video. */
  play() {
    // Enable the video playing.
    this._video.play();

    // Set the volume
    this._video.volume = this.audio === true ? 1 : 0;

    // Check if the video must be scaled.
    if (this.full_screen === true) {
      this._videoSprite.width = this._experiment._runner._renderer.width;
      this._videoSprite.height = this._experiment._runner._renderer.height;
    }

    // Render the first frame.
    this._experiment._runner._renderer.render(this._videoSprite);

    // Set the play toggle.
    this._playing = true;
  }

  /** Stop playing the video. */
  stop() {
    // Pause the actual sound.
    this._video.pause();
    this._playing = false;
  }

  /** Set the blocking of the sound. */
  wait() {
    this._experiment._runner._events._run(-1, _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].RESPONSE_VIDEO, []);
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");




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
class CanvasHandler {
  constructor(experiment) {
    let styleArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this._style = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"](experiment);
    this._canvas = new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_2__["default"](experiment);
    this._canvas._styles = this._style;
    Object.assign(this._style, styleArgs);
    this._xc = this._canvas.width / (2 * experiment._scale_x);
    this._yc = this._canvas.height / (2 * experiment._scale_y);
  }
  get color() {
    return this._style.color;
  }
  set color(val) {
    this._style.color = val;
  }
  get background_color() {
    return this._style.background_color;
  }
  set background_color(val) {
    this._style.background_color = val;
  }
  get fill() {
    return this._style.fill;
  }
  set fill(val) {
    this._style.fill = val;
  }
  get html() {
    return this._style.html;
  }
  set html(val) {
    this._style.html = val;
  }
  get font_family() {
    return this._style.font_family;
  }
  set font_family(val) {
    this._style.font_family = val;
  }
  get font_size() {
    return this._style.font_size;
  }
  set font_size(val) {
    this._style.font_size = val;
  }
  get font_italic() {
    return this._style.font_italic;
  }
  set font_italic(val) {
    this._style.font_italic = val;
  }
  get font_bold() {
    return this._style.font_bold;
  }
  set font_bold(val) {
    this._style.font_bold = val;
  }
  get font_underline() {
    return this._style.font_underline;
  }
  set font_underline(val) {
    this._style.font_underline = val;
  }
  _element_style(styleArgs) {
    if (typeof styleArgs === "undefined") {
      return this._style;
    }
    const style = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
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
  arrow() {
    let {
      sx = 0,
      sy = 0,
      ex = 50,
      ey = 0,
      body_length = 0.8,
      body_width = 0.5,
      head_width = 30,
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  clear() {
    let styleArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  circle() {
    let {
      x = 0,
      y = 0,
      r = 50,
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  ellipse() {
    let {
      x = -50,
      y = -25,
      w = 100,
      h = 50,
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  fixdot() {
    let {
      x = 0,
      y = 0,
      style = 'default',
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  gabor() {
    let {
      x = 0,
      y = 0,
      orient = 0,
      freq = .1,
      env = 'gaussian',
      size = 96,
      stdev = 12,
      phase = 0,
      col1 = 'white',
      col2 = 'black',
      bgmode = 'avg'
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  image() {
    let {
      fname,
      center = true,
      x = 0,
      y = 0,
      scale = 1,
      rotation = 0
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  line() {
    let {
      sx = 0,
      sy = 0,
      ex = 50,
      ey = 0,
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  noise_patch() {
    let {
      x = 0,
      y = 0,
      env = 'gaussian',
      size = 96,
      stdev = 12,
      col1 = 'white',
      col2 = 'black',
      bgmode = 'avg'
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  polygon() {
    let {
      vertices,
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (typeof vertices === "undefined") {
      throw "vertices is a required parameter for Canvas.polygon()";
    }
    // Adjust the coordinates of all vertices
    const v = [];
    for (const [x, y] of vertices) v.push([x + this._xc, y + this._yc]);
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
  rect() {
    let {
      x = -50,
      y = -25,
      w = 100,
      h = 50,
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
  show() {
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
  text() {
    let {
      text,
      center = true,
      x = 0,
      y = 0,
      ...styleArgs
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (typeof text === "undefined") {
      throw "text is a required parameter for Canvas.text()";
    }
    let style = this._element_style(styleArgs);
    this._canvas.text(text, center, x + this._xc, y + this._yc, style.html, style);
  }
}

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
/** Class representing a file pool. */
class FilePoolStore {
  /**
   * Create a file store object for all stimuli files.
   * @param {Object} runner - The runner to which the file store belongs.
   */
  constructor(runner) {
    // Create and set private properties.
    this._items = []; // Container for all pool items.
    this._runner = runner; // Parent runner attached to the file pool.
  }

  /** Clear all the items in the store. */
  _clean_up() {
    // Clear the items.
    this._items = [];
  }

  /**
   * General function for adding an item to the pool.
   * @param {Object} item - The item which is added to the pool.
   */
  add(item, new_name) {
    // Check parameter new_name.
    new_name = typeof new_name === 'undefined' ? null : new_name;

    // Set the new name of the item.
    if (new_name !== null) {
      item.name = new_name;
    }

    // Add the item to the pool.
    this._items.push(item);

    // Link the item as property
    this[item.name] = item;
  }

  /**
   * Should return the fallback folder bunt osweb this is not functional.
   * @return {null} - always null due to the nature of osweb.
   */
  fallback_folder() {
    // Always returns null because this function is not possible.
    return null;
  }

  /**
   * Create an array with all the files in the store.
   * @return {Array} - An array containing all the files.
   */
  files() {
    // Create a list o keys.
    var files = [];
    for (var i = 0; i < this._items.length; i++) {
      files.push(this._items[i]);
    }

    // Returns a list of item names.
    return files;
  }

  /**
   * Renames a file in the pool folder.
   * @param {String} old_path - The olod file name.
   * @param {String} new_path - The new file name.
   */
  rename(old_path, new_path) {
    for (var i = 0; i < this._items.length; i++) {
      // Check for the old_name.
      if (this._items[i].name === old_path) {
        // Set the new property name.
        this[new_path] = this._items[i];

        // Remove the old property name.
        delete this[old_path];

        // Set the new name.
        this._items[i].name = new_path;
      }
    }
  }

  /**
   * Calculates and returns the total size in bytes of all thje fioles.
   * @return {Number} - The size of all files in bytes.
   */
  size() {
    // Create a list of keys.
    var size = 0;
    for (var i = 0; i < this._items.length; i++) {
      size = size + this._items[i].size;
    }

    // Returns a list of item names.
    return size;
  }
}

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
/** Class representing an item stack. */
class ItemStack {
  /**
   * Create an stack array for running items.
   * @param {Object} runner - The runner to which the item stack belongs.
   */
  constructor(runner) {
    // Create and set private properties.
    this._items = []; // Container for all items.
    this._runner = runner; // Parent runner attached to the item stack class.
  }

  /** Clear the entire item stack. */
  clear() {
    // Clears the stack.
    this._items = [];
  }

  /**
   * Push a new item onto the item stack.
   * @param {Object} item - The item to add to the item stack.
   * @param {String} phase - The phase in which the stack exists.
   */
  push(item, phase) {
    // Create the stack item.
    const stackItem = {
      item: item,
      phase: phase
    };

    // Push the item onto the stack.
    this._items.push(stackItem);
  }

  /**
   * Pops the last item from the stack.
   * @return {Object} - The last added item from the stack.
   */
  pop() {
    // Pops the last item from the stack.
    return this._items.pop();
  }
}

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
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
// This itemClasses variable is a temporary solution. We should think of a simpler
// method of converting string names (e.g. keyboard_response) to the associated
// class names (e.g. KeyboardResponse), without relying on eval.


/** Class representing an item store. */
class ItemStore {
  /**
   * Create an item store for all OpenSesame items.
   * @param {Object} runner - The runner to which the item store belongs.
   */
  constructor(runner) {
    // Set the class private properties.
    this._items = {}; // All the unique items in the item store.
    this._runner = runner; // Parent runner attached to the item store.
  }

  /** Clear all the items in the store. */
  _clean_up() {
    // Clear the items.
    this._items = {};
  }

  /**
   * Checks of the classname is defined within the osweb namespace.
   * @param {String} className - name of the class to check.
   * @return {Boolean} - True if the class is valid within the opsweb context.
   */
  _isClass(className) {
    // Return true if the classname is found in the item classes.
    return className in _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["itemClasses"];
  }

  /**
   * Add a new OpenSesame element to a sketchpad item.
   * @param {String} type -type of the element to be created.
   * @param {Object} sketchpad - sketchpad item to which the item belongs.
   * @param {String} script - string definition of the ites.
   * @return {Object} - The item which wass created.
   */
  _newElementClass(type, sketchpad, string) {
    // Create the element.
    var element = new _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["itemClasses"][type](sketchpad, string);

    // Return the element
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
  _newItemClass(type, experiment, name, script) {
    // Create the element.
    var element = new _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["itemClasses"][type](experiment, name, script);

    // Set the type of the item.
    element.type = type;

    // Return the element
    return element;
  }

  /**
   * Add a new OpenSesame widget to the experiment.
   * @param {String} type -type of the widget to be created.
   * @param {Object} form - form to which the widget belongs.
   * @param {String} variables - variabled belonging to the widget.
   * @return {Object} - The widget which was created.
   */
  _newWidgetClass(type, form, variables) {
    // Create the widget.
    var widget = new _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["itemClasses"][type + '_widget'](form, variables);

    // Return the element
    return widget;
  }

  /**
   * Executes the prepare and the run phase of an item.
   * @param {String} name - name of the item to prepare and run
   * @param {String} parent - parent of the item.
   */
  execute(name, parent) {
    // Prepare the item.
    this.prepare(name, parent);
    // Remove the prepare phase call of the item from the stack
    this._runner._itemStack.pop();
    // Run the item.
    this.run(name, parent);
  }

  /**
   * Create an array with all the items in the store.
   * @return {Array} - An array containing all the items.
   */
  items() {
    // Create a list o keys.
    var items = [];
    for (var key in this._items) {
      items.push([key, this._items[key]]);
    }

    // Returns a list of item names.
    return items;
  }

  /**
   * Create an array with all the names of the items in the store.
   * @return {Array} - An array containing all the names.
   */
  keys() {
    // Create a list o keys.
    var keys = [];
    for (var key in this._items) {
      keys.push(key);
    }

    // Returns a list of item names.
    return keys;
  }

  /**
   * Create a new OpenSesame item and add it to the item store.
   * @param {String} type - type of item to add.
   * @param {String} name - unique name of the item to add.
   * @param {String} script - script containing definitions of the item.
   */
  newItem(type, name, script) {
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
  prepare(name, parent) {
    // Add item to the stack.
    this._runner._itemStack.push(name, 'prepare');

    // Prepare the item.
    this._items[name]._parent = parent;
    this._items[name].prepare();
  }

  /**
   * Executes the run phase of an item, and updates the item stack.
   * @param {String} name - name of the item to run.
   * @param {String} pParent - parent of the item.
   */
  run(name, parent) {
    // Set the current and its parent item.
    this._runner._events._currentItem = this._items[name];
    this._runner._events._currentItem._parent = parent;

    // Executes the run phase of an item, and updates the item stack.
    this._runner._itemStack.push(name, 'run');
    this._items[name].run();
  }

  /**
   * Create a valid name for an item within the OpenSesame context.
   * @param {String} itemType - type of the item for which a name must be build.
   * @param {String} suggestion - An suggestion how to build up the name.
   * @return {String} - A valid string name for the given item.
   */
  valid_name(itemType, suggestion) {
    // Check the optional parameters.
    suggestion = typeof suggestion === 'undefined' ? null : suggestion;
    let name;
    if (suggestion === null) {
      name = 'new_' + itemType;
    } else {
      name = this._runner._experiment.syntax.sanitize(suggestion, true, false);
    }

    // Create a unique name.
    var i = 1;
    var uniqueName = name;
    while (Object.prototype.hasOwnProperty.call(this._items, uniqueName) === true) {
      uniqueName = name + '_' + String(i);
      i++;
    }

    // Return function result
    return uniqueName;
  }

  /**
   * Create an array with all the values (items) in the store.
   * @return {Array} - An array containing all the items.
   */
  values() {
    // Create a list o keys.
    var values = [];
    for (var key in this._items) {
      values.push(this._items[key]);
    }

    // Returns a list of item names.
    return values;
  }
}

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
/* harmony import */ var _classes_javascript_workspace_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/javascript_workspace_api */ "./src/js/osweb/classes/javascript_workspace_api.js");
/* harmony import */ var _classes_canvas_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/canvas_handler */ "./src/js/osweb/classes/canvas_handler.js");
/* harmony import */ var _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/var_store_handler */ "./src/js/osweb/classes/var_store_handler.js");
/* harmony import */ var random_ext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! random-ext */ "./node_modules/random-ext/index.js");
/* harmony import */ var random_ext__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(random_ext__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! color-convert */ "./node_modules/color-convert/index.js");
/* harmony import */ var color_convert__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(color_convert__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! csv-parse/lib/sync */ "./node_modules/csv-parse/lib/sync.js");
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pythonic */ "./node_modules/pythonic/index.js");
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pythonic__WEBPACK_IMPORTED_MODULE_6__);








/**
 * A workspace for executing inline JavaScript code. For now, the workspace is
 * not persistent, and only exposes the vars object.
 */
class JavaScriptWorkspace {
  /**
   * Create a JavaScript workspace.
   * @param {Object} experiment - The experiment item to which the item belongs.
   */
  constructor(experiment) {
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
  _init() {
    this._initialized = true;
    window.vars = new Proxy(this.experiment.vars, new _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_2__["default"]());
    window.range = pythonic__WEBPACK_IMPORTED_MODULE_6__["range"];
    window.enumerate = pythonic__WEBPACK_IMPORTED_MODULE_6__["enumerate"];
    window.items = pythonic__WEBPACK_IMPORTED_MODULE_6__["items"];
    window.zip = pythonic__WEBPACK_IMPORTED_MODULE_6__["zip"];
    window.zipLongest = pythonic__WEBPACK_IMPORTED_MODULE_6__["zipLongest"];
    window.random = random_ext__WEBPACK_IMPORTED_MODULE_3___default.a;
    window.convert = color_convert__WEBPACK_IMPORTED_MODULE_4___default.a;
    window.csvParse = csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_5___default.a;
    window.Canvas = function () {
      let styleArgs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new _classes_canvas_handler__WEBPACK_IMPORTED_MODULE_1__["default"](runner._experiment, styleArgs);
    };
    window.exp = runner._experiment;
    window.pool = runner._pool;
    window.persistent = {};
    const api = new _classes_javascript_workspace_api__WEBPACK_IMPORTED_MODULE_0__["default"](runner._experiment);
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
  _eval(js) {
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
  exec(js) {
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
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pythonic */ "./node_modules/pythonic/index.js");
/* harmony import */ var pythonic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pythonic__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Provides common functions based on the Python API.
 **/
class JavaScriptWorkspaceAPI {
  constructor(experiment) {
    this._experiment = experiment;
  }

  /**
   * Resets all feedback variables to their initial state.
   *
   * @example
   * reset_feedback()
   **/
  reset_feedback() {
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
  set_subject_nr(nr) {
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
  sometimes() {
    let p = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .5;
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
  xy_from_polar(rho, phi) {
    let pole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
    if (typeof rho !== "number") throw "rho should be numeric in xy_from_polar()";
    if (typeof phi !== "number") throw "phi should be numeric in xy_from_polar()";
    phi = this._radians(phi);
    const [ox, oy] = this._parse_pole(pole);
    const x = rho * Math.cos(phi) + ox;
    const y = rho * Math.sin(phi) + oy;
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
  xy_to_polar(x, y) {
    let pole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
    if (typeof x !== "number") throw "x should be numeric in xy_to_polar()";
    if (typeof y !== "number") throw "y should be numeric in xy_to_polar()";
    const [ox, oy] = this._parse_pole(pole);
    const dx = x - ox;
    const dy = y - oy;
    const rho = Math.sqrt(dx ** 2 + dy ** 2);
    const phi = this._degrees(Math.atan2(dy, dx));
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
  xy_distance(x1, y1, x2, y2) {
    if (typeof x1 !== "number" || typeof y1 !== "number" || typeof x2 !== "number" || typeof y2 !== "number") throw "Coordinates should be numeric in xy_distance()";
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
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
  xy_circle(n, rho) {
    let phi0 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let pole = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0, 0];
    if (typeof n !== "number" || n < 0) throw "n should be a non-negative integer in xy_circle()";
    if (typeof rho !== "number" || typeof phi0 !== "number") throw "rho and phi0 should be numeric in xy_circle()";
    const a = [];
    for (const i of Object(pythonic__WEBPACK_IMPORTED_MODULE_1__["range"])(n)) {
      a.push(this.xy_from_polar(rho, phi0, pole));
      phi0 += 360 / n;
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
  xy_grid(n, spacing) {
    let pole = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
    // Parse and validate the n
    const n_err_msg = "n should be a single non-negative number, or an array of two non-negative numbers in xy_grid()";
    let n_col;
    let n_row;
    if (typeof n === "object") {
      if (n.length !== 2) throw n_err_msg[(n_col, n_row)] = n;
    } else {
      n_col = n;
      n_row = n;
    }
    if (typeof n_col !== "number" || typeof n_row !== "number") throw n_err_msg;
    // Parse and validate the spacing
    const spacing_err_msg = "spacing should be a single non-negative number, or an array of two non-negative numbers xy_grid()";
    let s_col;
    let s_row;
    if (typeof spacing === "object") {
      if (spacing.length !== 2) throw spacing_err_msg[(s_col, s_row)] = spacing;
    } else {
      s_col = spacing;
      s_row = spacing;
    }
    if (typeof s_col !== "number" || typeof s_row !== "number") throw spacing_err_msg;
    // Generate the grid
    const [ox, oy] = this._parse_pole(pole);
    const a = [];
    let x;
    let y;
    for (const row of Object(pythonic__WEBPACK_IMPORTED_MODULE_1__["range"])(n_row)) {
      y = (row - (n_row - 1) / 2) * s_row + oy;
      for (const col of Object(pythonic__WEBPACK_IMPORTED_MODULE_1__["range"])(n_col)) {
        x = (col - (n_col - 1) / 2) * s_col + ox;
        a.push([x, y]);
      }
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
  xy_random(n, width, height) {
    let min_dist = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let pole = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0, 0];
    if (typeof n !== "number" || n < 0) throw "n should be a non-negative number in xy_circle()";
    if (typeof min_dist !== "number" || n < 0) throw "min_dist should be a non-negative number in xy_circle()";
    if (typeof width !== "number" || typeof height !== "number") throw "width and height should be numeric in xy_circle()";
    const [ox, oy] = this._parse_pole(pole);
    const max_try = 1000;
    let a, i, t2, x1, y1, x2, y2, too_close;
    for (const t1 of Object(pythonic__WEBPACK_IMPORTED_MODULE_1__["range"])(max_try)) {
      a = [];
      for (i of Object(pythonic__WEBPACK_IMPORTED_MODULE_1__["range"])(n)) {
        // A loop for trying to find a single new point
        for (t2 of Object(pythonic__WEBPACK_IMPORTED_MODULE_1__["range"])(max_try)) {
          // Generate a point and check if it's not too close to the other
          // points so far
          x1 = (Math.random() - .5) * width + ox;
          y1 = (Math.random() - .5) * height + oy;
          too_close = false;
          for ([x2, y2] of a) {
            if (this.xy_distance(x1, y1, x2, y2) < min_dist) {
              too_close = true;
              break;
            }
          }
          // Add the point and the break the loop for finding a single point
          if (!too_close) {
            a.push([x1, y1]);
            break;
          }
        }
      }
      // If the array is complete, return it. If not, the outer for loop will
      // try again until max_try is reached
      if (a.length === n) return a;
    }
    throw "Failed to generate random coordinates in xy_random()";
  }
  _radians(a) {
    return a / 360 * 2 * Math.PI;
  }
  _degrees(a) {
    return a / (2 * Math.PI) * 360;
  }
  _parse_pole(pole) {
    if (pole.length !== 2) throw "pole should be an array of two numeric values";
    const [x, y] = pole;
    if (typeof x !== "number" || typeof y !== "number") throw "pole should be an array of two numeric values";
    return [x, y];
  }
}

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
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isBoolean */ "./node_modules/lodash/isBoolean.js");
/* harmony import */ var lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0__);

/** Class representing a python workspace. */
class PythonWorkspace {
  /**
   * Create a python workspace object.
   * @param {Object} runner - The runner to which the python workspace belongs.
   */
  constructor(runner) {
    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the python workspace class.
  }

  /**
   * Evaluate an expression within osweb.
   * @param {Boolean|Object|String} bytecode - The expression to evaluate.
   * @return {Boolean|Number|Object|String} - The result of the evaluated expression.
   */
  _eval(bytecode) {
    // Check wich type of expression must be evaled.
    if (lodash_isBoolean__WEBPACK_IMPORTED_MODULE_0___default()(bytecode)) {
      return bytecode;
    } else if (typeof bytecode === 'string') {
      // Open sesame script, first check for parameter values.
      bytecode = this._runner._syntax.eval_text(bytecode, null, true);

      // Evaluate the expression.
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
}

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
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.string.replace-all.js */ "./node_modules/core-js/modules/esnext.string.replace-all.js");
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/esnext.string.match-all.js */ "./node_modules/core-js/modules/esnext.string.match-all.js");
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_7__);








/** Class representing a syntax checker. */
class Syntax {
  /**
   * Create a syntax checker within OpenSesame.
   * @param {Object} runner - The runner to which the syntax checker belongs.
   */
  constructor(runner) {
    // Create and set private properties.
    this._runner = runner; // Parent runner attached to the syntax class.
    this.isNumber = lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default.a; // attach lodash function to class;
  }

  /**
   * Converts a string to a float or integer if possible.
   * @param {String|Number} value -The variable to convert to a number.
   * @return {String|Number} - An number or float if variable could be converted, original value otherwise.
   */
  convert_if_numeric(value) {
    if (value === '') return value;
    var result = Number(value);
    return Number.isNaN(result) ? value : result;
  }

  /**
   * Counts the quotes occuring inside the provided string.
   * @param {String} line - The string line to count the quotes in.
   * @return {Number} - The number of quotes counted.
   */
  count_quotes(line) {
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
  eval_text(text, vars) {
    let addQuotes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // if pTxt is an object then it is a parsed python expression.
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(text)) return this._runner._pythonParser._run_statement(text);
    // if pTxt is already a number simply return it
    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default()(text)) return text;
    // Try to convert text to a number. If this succeeds return it. Don't do 
    // this for strings that are either empty or contain only whitespace, to
    // avoid them from being converted to 0.
    if (text.trim().length !== 0 && !isNaN(lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(text))) return lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(text);
    // Check if the text contains template literals. If so, we evaluate these.
    // This is the preferred syntax.
    if (text.includes('${')) return this._runner._experiment._javascriptWorkspace._eval("`".concat(text, "`"));
    text = this.escapeBrackets(text);
    // First, parse the regular variables. These should be parsed recursively
    // to allow for [[nested]variables].
    const reNormal = /\[(?!=)(\w+?)\]/g;
    while (text.search(reNormal) >= 0) {
      text = text.replace(reNormal, (match, content, offset, string) => {
        content = this.unescapeBrackets(content);
        let value;
        try {
          if (typeof vars === 'undefined' || vars === null || typeof vars[content] === 'undefined') {
            value = this._runner._experiment.vars.get(content, null, false);
          } else {
            value = vars.get(content, null, false);
          }
          // Value could still be an expression, so evaluate again
          if (typeof value === 'undefined') {
            throw new ReferenceError("Variable '".concat(content, "' not present in var store"));
          }
          if (lodash_isString__WEBPACK_IMPORTED_MODULE_0___default()(value)) {
            if (value !== '') {
              value = this.eval_text(value, vars, addQuotes);
            }
          }
        } catch (err) {
          this._runner._debugger.addError("Could not resolve variable '".concat(content, "': ").concat(err.message));
          throw err;
        }
        if (addQuotes === true) {
          // Temporary hack for string types.
          return lodash_isString__WEBPACK_IMPORTED_MODULE_0___default()(value) ? "\"".concat(value, "\"") : value;
        }
        return value;
      });
    }
    // Next, parse the inline-Python defintions. Those should only be parsed
    // once, not recursively, because they may contain literal [brackets]
    const rePython = /\[=(.+?)\]/g;
    text = text.replace(rePython, (match, content, offset, string) => {
      // Check if contents of [] start with an =. In this case they should be
      // evaluated as a Python statement
      content = this.unescapeBrackets(content);
      const ast = this._runner._pythonParser._parse(content);
      return this._runner._pythonParser._run_statement(ast);
    });
    // Try to convert the result to a number again. If this succeeds return it.
    if (text !== '') {
      const nr = lodash_toNumber__WEBPACK_IMPORTED_MODULE_2___default()(text);
      if (!isNaN(nr)) return nr;
    }
    // Check if content has additional quotes
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
  safe_wrap(s) {
    // If s is a number, return untouched.
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default()(s)) {
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
  add_slashes(str) {
    return str.replace(/\\/g, '\\\\')
    // eslint-disable-next-line no-control-regex
    .replace(/\u0008/g, '\\b').replace(/\t/g, '\\t').replace(/\n/g, '\\n').replace(/\f/g, '\\f').replace(/\r/g, '\\r').replace(/'/g, '\\\'').replace(/"/g, '\\"');
  }

  /**
   * Strip escape slashes from the given string.
   * @param {String} line - The string to strip from escape backslashes
   * @return {String} - The stripped string.
   */
  strip_slashes(line) {
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
  dedent(script) {
    const lines = script.split('\n');
    let dedented = [];
    for (const line of lines) {
      if (line[0] !== '\t') {
        return script;
      }
      dedented.push(line.slice(1));
    }
    return dedented.join('\n');
  }

  /**
   * Extracts all multineline variable definitions from an OpenSesame script
   * @param {String} script - The OpenSesame script of an item
   * @return {Array} - An array of key, value mappings
   */
  parse_multiline_vars(script) {
    const pattern = /__(\w+)__\n(.*?)\n__end__/gms;
    let match;
    let vars = [];
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
  parse_cmd(line) {
    // Check if quoted strings are properly closed.
    if (this.count_quotes(line) % 2 !== 0) {
      // Unequal number of quotes detected. Can't be right.
      this._runner._debugger.addError('Invalid script definition, parsing error: ' + " '" + line + "'");
    }

    // Split the string line.
    var tokens = this.split(line);
    var cmd = tokens.shift();
    var args = [];
    var kwargs = {};
    for (var i = 0; i < tokens.length; i++) {
      var value = tokens[i];
      // Monster regex, splits into key/value pair.
      let parsed = value.split(/(?:("[^"\\]*(?:\\.[^"\\]*)*"))|(?:(\w+)=(?:(?:(-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)|(\w+))|("[^"\\]*(?:\\.[^"\\]*)*")))/gm).filter(Boolean);
      // This is a horrifying hack to deal with the fact that the regular
      // expression above is not unicode-safe. This means that a single
      // unquoted word is not seen as a word when it doesn't consist of ascii
      // characters (e.g. text=λάθος). See also:
      // - https://github.com/open-cogsci/osweb/issues/49
      if (parsed.length === 1 && parsed[0].startsWith('text=')) {
        parsed = ['text', parsed[0].slice(5)];
      }
      // parsed will have length 1 if the variable has no keyword, and will be
      // of length 2 (split over the = symbol) if the variable had a keyword
      if (parsed.length < 2) {
        args.push(this.convert_if_numeric(this.sanitize(parsed[0])));
      } else {
        kwargs[parsed[0]] = this.convert_if_numeric(this.sanitize(parsed[1]));
      }
    }
    return [cmd, args, kwargs];
  }
  create_cmd(cmd, args, kwargs) {
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
  remove_quotes(line) {
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
  sanitize(line, strict, allowVars) {
    // Replace quotes.
    line = line.replace(/^"(.*(?="$))"$/, '$1');

    // Replace slashes and return result.
    return this.strip_slashes(line);
  }

  /**
   * Return an array with tokens ignoring whitespaces within.
   * @param {String} line - line the line to split in tokens
   * @return {Array} - The list of tokens
   */
  split(s) {
    // Double backslashes cause issues because they get confused with escaped
    // quotes. That's why we replace them by a very unlikely string first,
    // replace them back afterwards.
    s = s.replaceAll('\\\\', '-/*/*-');
    const regex = /(?:([^\s"']+)|(["'])(.*?[^\\])\2)+/g;
    const matches = s.matchAll(regex);
    const result = [];
    for (const match of matches) {
      let token = match[0];
      // If the keyword ends with an =, then an empty string has been stripped
      // off afterwards. We re-add it.
      if (token.endsWith('=')) token += '""';
      result.push(token.replaceAll('-/*/*-', '\\\\'));
    }
    // If the original string ends with a trailing empty string, then this has
    // been stripped off. We add it here.
    if (s.endsWith(' ""')) result.push('""');
    return result;
  }

  /**
   * Replaces all escaped brackets by a placeholder string of the format
   * `%%OPEN:1:%%`
   * @param {String} text - The text to escape.
   * @return {String} - The escaped text.
   */
  escapeBrackets(text) {
    const result = text.replace(/\\+[[\]]/g, (match, content, offset, str) => {
      const NBrackets = match.length - 1;
      if (NBrackets % 2 === 1) {
        const chartype = match[match.length - 1] === '[' ? 'OPEN' : 'CLOSE';
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
  unescapeBrackets(text) {
    const result = text.replace(/%%(OPEN|CLOSE):\d+:%%/g, (match, content, offset, str) => {
      const chartype = match.substr(2, 4) === 'OPEN' ? '[' : ']';
      const i1 = match.indexOf(':') + 1;
      const i2 = match.lastIndexOf(':');
      const nBrackets = parseInt(match.substr(i1, i2 - i1));
      return Array(nBrackets).join('\\') + chartype;
    });
    return result;
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);

/** Class representing a variable store. */
class VarStore {
  /**
   * Create a variable store object for all variables.
   * @param {Object} item - The item to which the var_store belongs.
   * @param {Object} parent - The parent global var_store.
   */
  constructor(item) {
    let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
  get(variable) {
    let evaluate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    let defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var value = null;
    // Gets an experimental variable.
    if (variable in this._scope) {
      this._bypass_proxy = true; // Avoid Proxy feedback loop
      if (typeof this._scope[variable] === 'string' && evaluate === true) {
        value = this._item.syntax.eval_text(this._scope[variable]);
      } else {
        value = this._scope[variable];
      }
      this._bypass_proxy = false;
    }
    // If value is not found locally, look in experiment object.
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
  has(variable) {
    return this.inspect().includes(variable);
  }

  /** Create a list of all avariables available.
   * @return {Array} - Array containing names of all variables.
   */
  inspect() {
    const variables = [];
    for (const variable in this._scope) {
      // If a variable hasn't been explicitly registered using vars.set, then
      // it is only returned under particular conditions.
      if (!this._registered.includes(variable)) {
        if (this._ignored_properties.includes(variable)) continue;
        // Don't return hidden variables prefixed with _
        if (variable.startsWith('_')) continue;
        // Only return variables of standard types to keep the log file clean
        if (!['number', 'string', 'boolean'].includes(typeof this._scope[variable])) continue;
      }
      variables.push(variable);
    }
    return variables;
  }

  /** Create a list of value/name pairs.
   * @return {Array} - Array containing name and values of all variables.
   */
  items() {
    const pairs = {};
    for (const variable of this.inspect()) {
      pairs[variable] = this._scope[variable];
    }
    return pairs;
  }

  /**
   * Set the value of a variable in the store.
   * @param {String} variable - The name of the variable.
   * @value {Boolean|Number|String} - Value of the variable to set.
   */
  set(variable, value) {
    if (!this._registered.includes(variable)) this._registered.push(variable);
    this._scope[variable] = value;
  }

  /**
   * Unset (remove) a variable from the store.
   * @param {String} variable - The name of the variable.
   */
  unset(variable) {
    if (this.has(variable) === true) {
      delete this._scope[variable];
    }
  }

  /** Create a list of variable names.
   * @return {Array} - Array containing namesof all variables.
   */
  vars() {
    return this.inspect();
  }

  /**
   * Clears all experimental variables, except those that are explicitly
   * preserved.
   * @param {Array} preserve - An array of variable names to preserve.
   */
  clear() {
    let preserve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    for (const variable of this.inspect()) {
      if (preserve.includes(variable)) continue;
      this.unset(variable);
    }
  }
}

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
/**
 * A proxy handler for the VarStore that maps properties onto calls to
 * VarStore.get() and VarStore.set().
 */
class VarStoreHandler {
  get(target, prop) {
    return target.get(prop, false, null);
  }
  set(target, key, value) {
    target.set(key, value);
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_var_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/var_store.js */ "./src/js/osweb/classes/var_store.js");




/** Class representing a the var store of the main experiment item, which maps
 *  onto the JavaScript workspace.
 **/
class WorkspaceVarStore extends _classes_var_store_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(item) {
    let parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    super(item, parent);
    this._scope = window;
    if (typeof jatos !== 'undefined') {
      // JATOS uses a special mechanism to pass query parameters
      for (const param in jatos.urlQueryParameters) {
        let val = jatos.urlQueryParameters[param];
        console.log("JATOS query parameter: ".concat(param, " = ").concat(val));
        this.set(param, item.syntax.convert_if_numeric(val));
      }
    } else {
      // When running outside of JATOS we use the standard URL query parameters
      const urlParams = new URLSearchParams(window.location.search);
      for (const [param, val] of urlParams) {
        console.log("URL query parameter: ".concat(param, " = ").concat(val));
        this.set(param, item.syntax.convert_if_numeric(val));
      }
    }
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */
class Arrow extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  constructor(sketchpad, script) {
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
    defaults.y2 = null;

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Create a styles object containing style information
    var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    styles.background_color = this._properties.color;
    styles.color = this._properties.color;
    styles.fill = this._properties.fill;
    styles.penwidth = this._properties.penwidth;

    // Draw the arrow element to the canvas of the sketchpad.
    this.sketchpad.canvas.arrow(this._properties.x1, this._properties.y1, this._properties.x2, this._properties.y2, this._properties.arrow_body_width, this._properties.arrow_body_length, this._properties.arrow_head_width, styles);
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);

/** Class representing a general visual element. */
class BaseElement {
  /**
   * Create a log object which stores all the response data.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   * @param {Object} defaults - The default property values of the visual element.
   */
  constructor(sketchpad, script, defaults) {
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
    this.vars = sketchpad.vars;

    // Set the private properties.
    this._properties = null;

    // Read the definition string.
    this.from_string(script);
  }

  /**
   * Parses the element from a definition string.
   *
   * @param {String} script The definition script line to be parsed.
   * @memberof BaseElement
   */
  from_string(script) {
    this.properties = this.sketchpad.syntax.parse_cmd(script)[2];
    if (typeof this.properties['name'] === 'undefined') {
      this.name = this.canvas.unique_name();
    } else {
      this.name = this.properties['name'];
    }
  }

  /**
   * Determines the drawing order of the elements.
   *
   * @returns {Number}
   * @memberof BaseElement
   */
  z_index() {
    return this.properties.z_index;
  }

  /**
   * Calculate the dynamic elements within properties.
   *
   * @memberof BaseElement
   */
  eval_properties() {
    // Evaluates all properties and return them.
    const xc = this.experiment.vars.get('width') / 2;
    const yc = this.experiment.vars.get('height') / 2;
    this._properties = Object.entries(this.properties).reduce((result, _ref) => {
      let [prop, val] = _ref;
      let value = this.syntax.eval_text(val, this.vars, false);
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
  is_shown() {
    // Set the self of the current workspace.
    this.experiment.python_workspace.self = this.sketchpad;

    // Determines whether the element should be shown, based on the show-if statement.
    return this.experiment._javascriptWorkspace._eval(this.properties.show_if);
  }

  /**
   * Draws the element
   *
   * @memberof BaseElement
   */
  draw() {
    // Calculate the dynamic properties.
    this.eval_properties();
    this.canvas.current_roi = this.syntax.eval_text(this.name);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */
class Circle extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  constructor(sketchpad, script) {
    // Create a default property container.
    var defaults = {};
    defaults.color = sketchpad.vars.get('foreground');
    defaults.fill = 0;
    defaults.penwidth = 1;
    defaults.x = null;
    defaults.y = null;
    defaults.r = null;

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Create a styles object containing style information
    var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    styles.color = this._properties.color;
    styles.fill = this._properties.fill;
    styles.penwidth = this._properties.penwidth;

    // Draw the circle element to the canvas of the sketchpad.
    this.sketchpad.canvas.circle(this._properties.x, this._properties.y, this._properties.r, styles);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */
class Ellipse extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  constructor(sketchpad, script) {
    // Create a default property container.
    const defaults = {
      fill: 1,
      color: sketchpad.vars.get('foreground'),
      penwidth: 1,
      x: null,
      y: null,
      w: null,
      h: null
    };

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Create a styles object containing style information
    var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    styles.background_color = this._properties.color;
    styles.color = this._properties.color;
    styles.fill = this._properties.fill;
    styles.penwidth = this._properties.penwidth;

    // Draw the ellipse element to the canvas of the sketchpad.
    this.sketchpad.canvas.ellipse(Number(this._properties.x), Number(this._properties.y), Number(this._properties.w), Number(this._properties.h), styles);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */
class Fixdot extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  constructor(sketchpad, script) {
    // Create a default property container.
    var defaults = {};
    defaults.color = sketchpad.vars.get('foreground');
    defaults.style = 'default';
    defaults.x = null;
    defaults.y = null;

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Create a styles object containing style information
    var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.sketchpad);
    styles.color = this._properties.color;
    // Draw the fixdot element to the canvas of the sketchpad.
    this.sketchpad.canvas.fixdot(this._properties.x, this._properties.y, this._properties.style, styles);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");


/**
 * Class representing an arrow element.
 * @extends BaseElement
 */
class Gabor extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  constructor(sketchpad, script) {
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
    defaults.y = null;

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Draw the gabor element to the canvas of the sketchpad.
    this.sketchpad.canvas.gabor(this._properties.x, this._properties.y, this._properties.orient, this._properties.freq, this._properties.env, this._properties.size, this._properties.stdev, this._properties.phase, this._properties.color1, this._properties.color2, this._properties.bgmode);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");


/**
 * Class representing an image element.
 * @extends BaseElement
 */
class ImageElement extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  constructor(sketchpad, script) {
    // Create a default property container.
    const defaults = {};
    defaults.center = 1;
    defaults.file = null;
    defaults.scale = 1;
    defaults.rotation = 0;
    defaults.x = null;
    defaults.y = null;

    // Inherited.
    super(sketchpad, script, defaults);

    // Set the class private properties.
    this._file = null;
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Draw the image element to the canvas of the sketchpad.
    this.sketchpad.canvas.image(this._properties.file, this._properties.center, this._properties.x, this._properties.y, this._properties.scale, this._properties.rotation);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");
/**
 * Class representing an arrow element.
 * @extends BaseElement
 */


class Line extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  constructor(sketchpad, script) {
    // Create a default property container.
    var defaults = {};
    defaults.color = sketchpad.vars.get('foreground');
    defaults.penwidth = 1;
    defaults.x1 = null;
    defaults.y1 = null;
    defaults.x2 = null;
    defaults.y2 = null;

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Create a styles object containing style information
    var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    styles.color = this._properties.color;
    styles.penwidth = this._properties.penwidth;

    // Draw the line element to the canvas of the sketchpad.
    this.sketchpad.canvas.line(this._properties.x1, this._properties.y1, this._properties.x2, this._properties.y2, styles);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");


/**
 * Class representing an arrow element.
 * @extends BaseElement
 */
class Noise extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} sketchpad - The sketchpad item that owns the visual element.
   * @param {String} script - The script containing properties of the visual element.
   */
  constructor(sketchpad, script) {
    // Create a default property container.
    var defaults = {};
    defaults.color1 = 'white';
    defaults.color2 = 'black';
    defaults.env = 'gaussian';
    defaults.size = 96;
    defaults.stdev = 12;
    defaults.x = null;
    defaults.y = null;
    defaults.bgmode = 'avg';

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Draw the noise element to the canvas of the sketchpad.
    this.sketchpad.canvas.noise(this._properties.x, this._properties.y, this._properties.env, this._properties.size, this._properties.stdev, this._properties.color1, this._properties.color2, this._properties.bgmode);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");



/**
 * Class representing an arrow element.
 * @extends BaseElement
 */
class Rect extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  constructor(sketchpad, script) {
    // Create a default property container.
    var defaults = {};
    defaults.fill = 1;
    defaults.color = sketchpad.vars.get('foreground');
    defaults.penwidth = 1;
    defaults.x = null;
    defaults.y = null;
    defaults.w = null;
    defaults.h = null;

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();

    // Create a styles object containing style information
    var styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    styles.fill = this._properties.fill;
    styles.color = this._properties.color;
    styles.background_color = this._properties.color;
    styles.penwidth = this._properties.penwidth;

    // Draw the rectangle element to the canvas of the sketchpad.
    this.sketchpad.canvas.rect(this._properties.x, this._properties.y, this._properties.w, this._properties.h, styles);
  }
}

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
/* harmony import */ var _base_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base_element.js */ "./src/js/osweb/elements/base_element.js");
/* harmony import */ var _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/styles.js */ "./src/js/osweb/backends/styles.js");



/**
 * Class representing a textline element.
 * @extends BaseElement
 */
class Textline extends _base_element_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} sketchpad - The sketchpad item that owns the visual element.
     * @param {String} script - The script containing properties of the visual element.
     */
  constructor(sketchpad, script) {
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
    defaults.y = null;

    // Inherited.
    super(sketchpad, script, defaults);
  }

  /** Implements the draw phase of an element. */
  draw() {
    // Inherited.
    super.draw();
    const text = this._properties.text;
    // Create a styles object containing style information
    const styles = new _backends_styles_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    styles.color = this._properties.color;
    styles.font_family = this._properties.font_family;
    styles.font_size = Number(this._properties.font_size);
    styles.font_italic = this._properties.font_italic === 'yes';
    styles.font_bold = this._properties.font_bold === 'yes';
    styles.font_underline = this._properties.font_underline === 'yes';
    this.sketchpad.canvas.text(text, this._properties.center, this._properties.x, this._properties.y, this._properties.html, styles);
  }
}

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
/* harmony import */ var _system_runner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./system/runner.js */ "./src/js/osweb/system/runner.js");
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


const VERSION_NAME = "osweb";
const VERSION_NUMBER = "2.1.0a5";

// Add _pySlide function to string prototype (HACK for the filbert interpreter).
String.prototype._pySlice = function (start, end, step) {
  if (end !== null) {
    return this.slice(start, end);
  } else {
    return this.slice(start);
  }
};

// Create the osweb library container.
const osweb = {
  printVersionInfo: function () {
    // Show library name and library version number in the console.
    console.log("".concat(VERSION_NAME, " v").concat(VERSION_NUMBER));
  },
  getRunner: function (target) {
    return new _system_runner_js__WEBPACK_IMPORTED_MODULE_0__["default"](target);
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
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");


/**
 * Class representing a advanced delay item.
 * @extends Item
 */
class AdvancedDelay extends _items_item_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Create an advanced delay plugin item which delays for e specific duration the experiment.
   * @param {Object} experiment - The experiment item to which the item belongs.
   * @param {String} name - The unique name of the item.
   * @param {String} script - The script containing the properties of the item.
   */
  constructor(experiment, name, script) {
    super(experiment, name, script);
    this.description = 'Waits for a specified duration';
    this._duration = -1;
    this.from_string(script);
  }

  /**
   * Gaussian distribution function.
   * @param {Number} mean - The mean value.
   * @param {Number} std - The standard deviation value.
   * @return {Number} - result value
   */
  _random_gauss(mean, std) {
    let u = 0;
    let v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.max(0, mean + Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * std);
  }

  /**
   * Uniform distribution function.
   * @param {Number} mean - The mean value.
   * @param {Number} stdev - The standard deviation value.
   * @return {Number} - result value
   */
  _random_uniform(mean, jitter) {
    return Math.max(0, Math.floor(mean + Math.random() * jitter - jitter / 2));
  }

  /** Resets all item variables to their default value. */
  reset() {
    this.vars.set("duration", 1000);
    this.vars.set("jitter", 0);
    this.vars.set('jitter_mode', 'Uniform');
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    const duration = this.vars.get('duration');
    const jitter = this.vars.get('jitter');
    const jitter_mode = this.vars.get('jitter_mode');
    if (!lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(duration) || duration < 0) {
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
    super.prepare();
  }

  /** Implements the run phase of an item. */
  run() {
    super.run();
    this.set_item_onset(this.time());
    if (this._duration > 0) {
      this.sleep(this._duration);
    } else {
      this._complete();
    }
  }
}

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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");







/**
 * Class representing coroutines
 * @extends Item
 */
class Coroutines extends _item_js__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor(experiment, name, script) {
    // Inherited create.
    super(experiment, name, script);
    // Definition of public properties.
    this.description = 'Repeatedly runs another item';
    // The tasks to perform
    this.tasks = [];
    // The tasks to perform this iteration
    this.schedule = [];
    // Process the script.
    this.from_string(script);
  }
  from_string(script) {
    if (script === null) return;
    for (const s of script.split('\n')) {
      const [cmd, arglist, kwdict] = this.experiment.syntax.parse_cmd(s);
      if (cmd === 'set') {
        const [variable, value] = arglist;
        this.vars.set(variable, value);
      }
      if (cmd === 'run' && arglist.length) {
        const task = {
          item_name: arglist.shift(),
          start_time: kwdict.start || 0,
          end_time: kwdict.end || 0,
          run_if: kwdict.runif || 'always'
        };
        this.tasks.push(task);
      }
    }
  }
  prepare() {
    this._runner._debugger.addMessage("Preparing coroutines item '".concat(this.name, "'"));
    this.schedule = this.tasks.reduce((result, taskParams) => {
      const item_name = this._runner._syntax.eval_text(taskParams.item_name, this.vars);
      const item = this._runner._itemStore._items[item_name];
      if (!item) {
        const msg = "Coroutines '".concat(this.name, "' - could not find item: ").concat(item_name);
        this._runner._debugger.addError(msg);
        throw new Error(msg);
      }
      this._runner._pythonWorkspace.self = this;
      const cond = taskParams.run_if;
      if (this._runner._pythonWorkspace._eval(cond) === true) {
        const start_time = this._runner._syntax.eval_text(taskParams.start_time, this.vars);
        const end_time = this._runner._syntax.eval_text(taskParams.end_time, this.vars);
        result.push(new Task(item, item_name, start_time, end_time, taskParams.item_name === this.vars.get('end_after_item')));
      }
      return result;
    }, []);
    super.prepare();
  }
  run() {
    this._runner._debugger.addMessage("Running coroutines item '".concat(this.name, "'"));
    super.run();
    // Prepare all tasks
    for (const task of this.schedule) {
      this._runner._itemStore.prepare(task.item_name, this);
    }
    this.schedule = lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default()(this.schedule, 'start_time');
    // Launch all tasks and wrap them in the coroutine helper
    for (const task of this.schedule) {
      this._runner._debugger.addMessage("Launching task '".concat(task.item_name, "'"));
      task.launch();
    }
    this.active = [];
    this.dt = 0;
    this.t0 = performance.now();
    this.running = true;
    this._loop();
  }
  _loop() {
    while (this.schedule.length > 0 && this.schedule[0].started(this.dt)) {
      this.active.push(this.schedule.shift());
    }
    this.active = lodash_sortBy__WEBPACK_IMPORTED_MODULE_2___default()(this.active, 'end_time');
    const _active = [];
    for (const task of this.active) {
      const status = task.step();
      if (status === task.RUNNING) {
        _active.push(task);
        continue;
      }
      if (status === task.ABORTED) {
        this.running = false;
      }
    }
    this.active = _active;
    while (this.active.length > 0 && this.active[0].stopped(this.dt)) {
      this.active.shift();
    }
    this.dt = performance.now() - this.t0;
    if (this.running && this.dt < this.vars.get('duration') && ![_system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_BREAK, _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_EXIT, _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].TIMER_ERROR].includes(this._runner._events._state)) {
      setTimeout(this._loop.bind(this), 0); // The well-known trick to deal with JS async nature...
    } else {
      // Kill all remaining tasks
      for (const task of this.active) {
        this._runner._debugger.addMessage("Killing task '".concat(task.item_name, "'"));
        task.kill();
      }
      this._complete();
    }
  }
}
class Task {
  constructor(item, item_name, start_time, end_time, abort_on_end) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "UNINITIALISED", 0);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "RUNNING", 1);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "FINISHED", 2);
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "ABORTED", -1);
    this.item = item;
    this.item_name = item_name;
    this.start_time = start_time;
    this.end_time = end_time;
    this.abort_on_end = abort_on_end;
    this.state = this.UNINITIALISED;
    this._coroutine = null;
    this.step = () => {
      throw new Error('Task has not been initialized');
    };
  }
  launch() {
    if (!lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default()(this.item.coroutine)) {
      throw new Error("Item ".concat(this.item_name, " does not have correct coroutine implementation"));
    }
    this._coroutine = this.item.coroutine();
    this._coroutine.next();
    this.step = () => {
      // console.log(`Stepping ${this.item_name}`)
      const {
        value,
        done
      } = this._coroutine.next(true);
      if (value === false) {
        this.state = this.ABORTED;
        return this.ABORTED;
      }
      if (done === true) {
        let newState;
        if (this.abort_on_end) {
          newState = this.ABORTED;
        } else {
          newState = this.FINISHED;
        }
        this.state = newState;
        return this.state;
      }
      return this.state; // Should be this.RUNNING
    };

    this.state = this.RUNNING;
  }
  started(dt) {
    return dt >= this.start_time;
  }
  stopped(dt) {
    if (dt < this.end_time) {
      return false;
    }
    return this.kill();
  }
  kill() {
    const response = this._coroutine.next(false);
    if (response.done === true) {
      this.state = this.FINISHED;
      return true;
    } else {
      return false;
    }
  }
}

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
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _classes_javascript_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/javascript_workspace.js */ "./src/js/osweb/classes/javascript_workspace.js");
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");
/* harmony import */ var _backends_log__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../backends/log */ "./src/js/osweb/backends/log.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../index.js */ "./src/js/osweb/index.js");









/**
 * Class representing an Experiment item.
 * @extends Item
 */
class Experiment extends _item_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /** The experiment class defines the starting point for an experiment. */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Create and set private properties.
    this._canvas = new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    this._currentCanvas = this._canvas;
    this._log = new _backends_log__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    this._scale_x = 1; // Scaling of the canvas for fullscreen mode.
    this._scale_y = 1; // Scaling of the canvas for fullscreen mode.
    this._javascriptWorkspace = new _classes_javascript_workspace_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);

    // Create and set public properties.
    this.debug = this._runner._debugger.enabled;
    this.items = this._runner._itemStore;
    this.pool = this._runner._pool;

    // Set default variables
    this.vars.set('start', 'experiment');
    this.vars.set('round_decimals', 2);
    this.vars.set('form_clicks', 'no');
    this.vars.set('sessionid', new Date().valueOf() + Math.floor(Math.random() * 100000));
    // Display parameters.
    this.vars.set('width', 1024);
    this.vars.set('height', 768);
    this.vars.set('background', 0x000000);
    this.vars.set('foreground', 0xFFFFFF);
    this.vars.set('penwidth', 1);

    // Font parameters.
    this.vars.set('font_size', 18);
    this.vars.set('font_family', 'mono');
    this.vars.set('font_italic', 'no');
    this.vars.set('font_bold', 'no');
    this.vars.set('font_underline', 'no');
  }

  /** Resets the feedback variables (acc, avg_rt, etc.). */
  reset_feedback() {
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
  set_subject(pNr) {
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
  read_definition(script) {
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
  from_string(script) {
    // Split the string into an array of lines.
    if (script !== null) {
      script = script.replace(/\r\n|\r|\n/g, '\n'); // convert line endings
      this._source = script.split('\n');
      var l = this._source.shift();
      while (l != null) {
        // Set the processing of the next line.
        const get_next = true;
        // eslint-disable-next-line no-unused-vars
        let cmd, args, kwargs;
        try {
          // Split the single line into a set of tokens.
          [cmd, args, kwargs] = this._runner._syntax.parse_cmd(l);
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
        }

        // Get the next line.
        if (get_next === true) {
          l = this._source.shift();
        }
      }
    }
  }

  /** Initializes the clock backend. */
  init_clock() {
    // Initializes the clock backend.
    this.clock._initialize();
  }

  /** Initializes the canvas backend. */
  init_display() {
    // Initializes the canvas backend.
    this._canvas.init_display(this);
  }

  /** Event handler for external data retrieval. */
  onLog(data) {
    // Function to be overwritten by external handler
  }

  /** Implements the run phase of an item. */
  run() {
    // Inherited.
    super.run();

    // Runs the experiment.
    switch (this._status) {
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_6__["constants"].STATUS_INITIALIZE:
        // Adjust the status of the item.
        this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_6__["constants"].STATUS_FINALIZE;

        // Save the date and time, and the version of OpenSesame
        this.vars.set('datetime', new Date().toString());
        this.vars.set('opensesame_version', _index_js__WEBPACK_IMPORTED_MODULE_7__["VERSION_NUMBER"]);
        this.vars.set('opensesame_codename', _index_js__WEBPACK_IMPORTED_MODULE_7__["VERSION_NAME"]);
        this.init_clock();
        this.init_display();
        this.reset_feedback();

        // Add closing message to debug system.
        this._runner._debugger.addMessage('experiment.run(): experiment started at ' + new Date().toUTCString());
        const start = this.vars.get('start');
        if (this._runner._itemStore._items[start] !== null) {
          this._runner._itemStack.clear();
          this._runner._itemStore.prepare(start, this);
        } else {
          this._runner._debugger.addError('Could not find the item that is the entry point of the experiment: ' + this.vars.start);
        }
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_6__["constants"].STATUS_FINALIZE:
        // Add closing message to debug system.
        this._runner._debugger.addMessage('experiment.run(): experiment finished at ' + new Date().toUTCString());

        // Complete the run process.
        this.end();
        break;
    }
  }

  /** Ends an experiment. */
  end() {
    this._runner._finalize();
  }
}

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
/* harmony import */ var _sketchpad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sketchpad.js */ "./src/js/osweb/items/sketchpad.js");


/**
 * Class representing a feedback item.
 * @extends Sketchpad
 */
class Feedback extends _sketchpad_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Create a feedback which show feedback info to the subhect.
   * @param {Object} experiment - The experiment item to which the item belongs.
   * @param {String} name - The unique name of the item.
   * @param {String} script - The script containing the properties of the item.
   */
  constructor(experiment, name, script) {
    // Inherited create.
    super(experiment, name, script);

    // Definition of public properties.
    this.description = 'Provides feedback to the participant';
  }

  /** Implements the complete phase of an item. */
  _complete() {
    // Inherited.
    super._complete();

    // Reset feedback variables.
    if (this.vars.get('reset_variables') === 'yes') {
      this.experiment.reset_feedback();
    }
  }

  /** Resets all item variables to their default value. */
  reset() {
    // Inherited.
    super.reset();

    // Reset the variables.
    this.vars.set('reset_variables', 'yes');
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    this._parent._prepare_complete();
  }

  /** Implements the run phase of an item. */
  run() {
    // Inherited.
    super.prepare();
    super.run();
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");



/**
 * Class representing a form consent item.
 * @extends FormHTML
 */
class FormConsent extends _form_html_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  onDecline() {
    alertify.error(this.vars.get('decline_message'));
  }
  onAccept() {
    if (this._checkbox.checked) {
      this.resumeOSWeb();
      return;
    }
    this.onDecline();
  }
  formElements() {
    const title = this.element('h1', this.vars.get('form_title'), 1 / 7);
    const text = this.element('p', this.vars.get('form_text'), 4 / 7);
    text.style.textAlign = 'left';
    const [checkboxContainer, checkbox] = this.checkbox('checkbox', this.vars.get('checkbox_text'), 1 / 7);
    this._checkbox = checkbox;
    const buttonContainer = this.element('div', null, 1 / 7);
    const acceptButton = this.element('input', null, null, 1 / 3);
    acceptButton.value = this.vars.get('accept_text');
    acceptButton.type = 'button';
    acceptButton.onclick = this.onAccept.bind(this);
    const declineButton = this.element('input', null, null, 1 / 3);
    declineButton.value = this.vars.get('decline_text');
    declineButton.type = 'button';
    declineButton.onclick = this.onDecline.bind(this);
    buttonContainer.append(acceptButton);
    buttonContainer.append(declineButton);
    this.applyTheme(acceptButton, true);
    this.applyTheme(declineButton, true);
    return [title, text, checkboxContainer, buttonContainer];
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");




/**
 * Base class for implementing HTML forms. These forms briefly hide the OSWeb
 * canvas and replace it by an HTML div. When the form is finished, OSWeb is
 * re-activated.
 * @extends Item
 */
class FormHTML extends _items_item_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(experiment, name, script) {
    super(experiment, name, script);
    this._widgets = []; // avoid crashes when parsing widgets command
    this.from_string(script);
  }
  reset() {
    super.reset();
    this.vars.set('margins', '50;50;50;50');
  }

  /**
   * Generates an array of HTML elements that are appended to the form. Should
   * be overridden in the actual form classes.
   * @return {!Array<Object>} - an array of HTML elements
   **/
  formElements() {
    return [];
  }

  /**
   * Gives HTML code to be used for the form. Should be overridden in the
   * actual form classes.
   * @return {string}
   **/
  formHTML() {
    return null;
  }

  /**
   * Hides the form container and re-enables OSWeb. Also re-enablees the event
   * listeners.
   **/
  resumeOSWeb() {
    this._formContainer.remove();
    this._osweb.style.display = 'flex';
    window.addEventListener('keydown', runner._events._keyDownHandler);
    window.addEventListener('keyup', runner._events._keyUpHandler);
    this._complete();
  }

  /**
   * Executes script elements that are embedded in the form
   **/
  _runScripts() {
    for (const script of this._customForm.getElementsByTagName('script')) {
      this.experiment._javascriptWorkspace.exec(script.textContent);
    }
  }

  /**
   * Emulates the 'gray' which is applied to buttons.
   **/
  applyTheme(element) {
    let setBackground = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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
  element(type, html, height) {
    let width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    let inherit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    const element = document.createElement(type);
    // Replace all newlines by <br> tags
    if (typeof html !== "undefined" && html !== null) element.innerHTML = String(html).replace(/\n/g, '<br>');
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
  checkbox(boxType, label, height) {
    let width = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    let inherit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    const box = this.element('input', null, null, null);
    box.type = boxType;
    box.value = label;
    const labelElement = this.element('label', label, null, null);
    const container = this.element('div', null, height, width, inherit);
    container.style.textAlign = 'left';
    container.append(box);
    container.append(labelElement);
    return [container, box];
  }

  /**
   * Maps the font family onto names that browsers understand.
   * @returns {string}
   **/
  get _fontFamily() {
    const fontFamily = this.vars.get('font_family');
    if (fontFamily === 'sans') return 'sans-serif';
    if (fontFamily === 'mono') return 'monospace';
    return fontFamily;
  }

  /**
   * Gets the padding for all four sides based on the margins variable.
   * @returns {!Array<number>}
   **/
  get _padding() {
    if (typeof this._cached_padding === "undefined") this._cached_padding = String(this.vars.get('margins')).split(';').map(Number);
    return this._cached_padding;
  }

  /**
   * Gets the width that takes into account the padding
   * @returns {number}
   **/
  get _paddedWidth() {
    if (typeof this._width === "undefined") {
      const [top, right, bottom, left] = this._padding;
      this._width = this.experiment._runner._renderer.view.clientWidth - right - left;
    }
    return this._width;
  }

  /**
   * Gets the height that takes into account the padding
   * @returns {number}
   **/
  get _paddedHeight() {
    if (typeof this._height === "undefined") {
      const [top, right, bottom, left] = this._padding;
      this._height = this.experiment._runner._renderer.view.clientHeight - top - bottom;
    }
    return this._height;
  }
  run() {
    // The main container that contains the form elements
    this._customForm = document.createElement('div');
    this._customForm.style.color = this.vars.get('foreground');
    this._customForm.style.backgroundColor = this.vars.get('background');
    this._customForm.style.fontSize = this.vars.get('font_size') + 'px';
    this._customForm.style.fontFamily = this._fontFamily;
    if (this.vars.get('font_bold') === 'yes') this._customForm.style.fontWeight = 'bold';
    if (this.vars.get('font_italic') === 'yes') this._customForm.style.fontStyle = 'italic';
    if (this.vars.get('font_underline') === 'yes') this._customForm.style.textDecoration = 'underline';
    // Convert margins from '50;50;50;50' to '50px 50px 50px 50px'
    this._customForm.style.padding = this._padding.join('px ') + 'px';
    this._customForm.style.width = this._paddedWidth + 'px';
    this._customForm.style.height = this._paddedHeight + 'px';
    this._customForm.style.textAlign = 'center';
    for (const element of this.formElements()) this._customForm.append(element);
    const html = this.formHTML();
    if (html !== null) this._customForm.innerHTML = html;
    // A container that centers the form
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
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");



/**
 * Class representing a form-mulitple-choice item.
 * @extends FormHTML
 */
class FormMultipleChoice extends _form_html_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  resumeOSWeb() {
    const values = [];
    for (const box of this._boxes) {
      if (box.checked) values.push(box.value);
    }
    this.experiment.vars.set(this.vars.get('form_var'), values.length > 0 ? values.join(';') : 'no');
    super.resumeOSWeb();
  }
  _boxClicked() {
    if (!this._hasOkButton) setTimeout(this.resumeOSWeb.bind(this), 100);
  }
  formElements() {
    const boxType = this.vars.get('allow_multiple') === 'no' ? 'radio' : 'checkbox';
    this._hasOkButton = this.vars.get('advance_immediately') === 'no' || boxType === 'checkbox';
    const elements = [];
    this._boxes = [];
    // Create an array of non-empty options
    const options = String(this.vars.get('options')).split('\n').filter(option => option.trim().length > 0);
    const elementHeight = 1 / (options.length + (this._hasOkButton ? 3 : 2));
    const title = this.element('h1', this.vars.get('form_title'), elementHeight, 1);
    elements.push(title);
    const question = this.element('p', this.vars.get('question'), elementHeight, 1);
    elements.push(question);
    for (const option of options) {
      const [container, box] = this.checkbox(boxType, option, elementHeight);
      box.name = 'options';
      box.onclick = this._boxClicked.bind(this);
      this._boxes.push(box);
      elements.push(container);
    }
    if (this._hasOkButton) {
      const okButton = this.element('input', null, elementHeight, 1 / 3);
      okButton.style.width = '100%';
      this.applyTheme(okButton, true);
      okButton.type = 'button';
      okButton.value = this.vars.get('button_text');
      okButton.onclick = this.resumeOSWeb.bind(this);
      elements.push(okButton);
    }
    return elements;
  }
}

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
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");


/**
 * Class representing a form text display item.
 * @extends FormHTML
 */
class FormTextDisplay extends _form_html_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  formElements() {
    const title = this.element('h1', this.vars.get('form_title'), 1 / 6);
    const text = this.element('p', this.vars.get('form_text'), 4 / 6);
    text.style.textAlign = 'left';
    const okButton = this.element('input', null, 1 / 6, 1 / 3);
    okButton.type = 'button';
    okButton.value = this.vars.get('ok_text');
    okButton.onclick = this.resumeOSWeb.bind(this);
    this.applyTheme(okButton, true);
    return [title, text, okButton];
  }
}

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
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");


/**
 * Class representing a form text input item.
 * @extends FormHTML
 */
class FormTextInput extends _form_html_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Is called when a key is pressed in the textarea, and accepts the form
   * input when return is pressed by setting the response variable to the
   * value of the textarea.
   **/
  checkReturnPress(event) {
    if (event.keyCode !== 13) return;
    this.experiment.vars.set(this.vars.get('form_var'), this._textArea.value);
    this.resumeOSWeb();
  }
  formElements() {
    const title = this.element('h1', this.vars.get('form_title'), 1 / 8);
    const question = this.element('p', this.vars.get('form_question'), 1 / 8);
    question.style.textAlign = 'left';
    this._textArea = this.element('textarea', null, 6 / 8);
    this.applyTheme(this._textArea, false);
    return [title, question, this._textArea];
  }
  _activateTextArea() {
    this._textArea.focus();
    this._textArea.onkeypress = this.checkReturnPress.bind(this);
  }
  run() {
    super.run();
    // The textarea is activate after a very short timeout. This avoid previous
    // keypress from being entered as text immediately.
    setTimeout(this._activateTextArea.bind(this), 10);
  }
}

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
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../backends/keyboard.js */ "./src/js/osweb/backends/keyboard.js");
/* harmony import */ var _backends_mouse_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backends/mouse.js */ "./src/js/osweb/backends/mouse.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");







/**
 * Class representing a GeneralResponse item.
 * @extends Item
 */
class GenericResponse extends _item_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /** The sequence class controls the running of a serie of items. */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Create and set private properties.
    this._allowed_responses = null;
    this._duration = 0;
    this._duration_func = null;
    this._keyboard = null;
    this._mouse = null;
    this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_NONE;
    this._timeout = -1;

    // Create and set public properties.
    this.process_feedback = false;
    this.synonyms = null;
  }

  /** Implements the complete phase of the general response item. */
  _complete() {
    // Check if a timeout has occured which must be treaded as a response.
    let timeout = this.vars.get('timeout', true, -1);
    if (timeout !== -1 && this.experiment._runner._events._timeStamp - this.experiment.vars.get('time_' + this.name) > timeout) {
      // Process the timeout none response.
      this.process_response_timeout();
    }

    // Inherited.
    super._complete();
  }

  /**
     * Implements the update response phase of the general response item.
     * @param {Object} response - The response object which is evaluated.
     */
  _update(response) {
    if (response !== null) {
      // Implements the update response phase of the item.
      if (this._responsetype === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_KEYBOARD && response.type === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_KEYBOARD) {
        this.process_response_keypress(response);
      } else if (this._responsetype === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_MOUSE && response.type === _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_MOUSE) {
        this.process_response_mouseclick(response);
      }
    }
  }

  /**
   * Converts a string of semi-colon separated responses to an array of
   * responses.
   **/
  _prepare_responses(responses) {
    if (responses === -1) return null;
    let response_array = String(responses).split(';').map(item => typeof item === 'string' ? item.replace(/^"(.*)"$/g, '$1').trim() : item).filter(Boolean);
    if (response_array.length === 0) return null;
    const duration = this.vars.get('duration', true, -1);
    if (duration === 'keypress') {
      response_array = this._keyboard._get_default_from_synonym(response_array);
    } else if (duration === 'mouseclick') {
      response_array = this._mouse._get_default_from_synonym(response_array);
    }
    return response_array;
  }

  /** Prepare the list with allowed responses */
  prepare_allowed_responses() {
    this._allowed_responses = this._prepare_responses(this.vars.get('allowed_responses', true, -1));
    if (this._allowed_responses !== null && this._allowed_responses.length === 0) {
      this.experiment._runner._debugger.addError('Defined responses are not valid in keyboard_response: ' + this.name + ' (' + this.vars.get('allowed_responses') + ')');
    }
  }

  /** Prepare the list with correct responses */
  prepare_correct_responses() {
    this._correct_responses = this._prepare_responses(this.vars.get('correct_response', true, -1));
    if (this._correct_responses !== null && this._correct_responses.length === 0) {
      this.experiment._runner._debugger.addError('Correct response is not valid in keyboard_response: ' + this.name + ' (' + this.vars.get('correct_response') + ')');
    }
  }

  // Prepare the duration of the stimulus interaction. */
  prepare_duration() {
    this._duration = this.vars.get('duration', true, -1);
    if (this._duration === -1) {
      this._duration = 0;
      return;
    }
    if (this._duration === 'keypress' || this._duration === 'mouseclick' || this._duration === 'sound' || this._duration === 'video') {
      this._final_duration = this._timeout !== null ? this._timeout : -1;
      if (this._duration === 'keypress') {
        this.prepare_duration_keypress();
        this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_KEYBOARD;
      } else if (this._duration === 'mouseclick') {
        this.prepare_duration_mouseclick();
        this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_MOUSE;
      } else if (this._duration === 'sound') {
        this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_SOUND;
      } else if (this._duration === 'video') {
        this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_VIDEO;
      }
      return;
    }
    // Prepare a duration in milliseconds
    this._duration = Number(this._duration);
    if (this._duration === 0) {
      this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_NONE;
    } else {
      this._responsetype = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_DURATION;
    }
  }

  /** Prepare the system for a keyboard duration interval. */
  prepare_duration_keypress() {
    this._keyboard = new _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_3__["default"](this.experiment);
  }

  /** Prepare the system for a mouseclick duration interval. */
  prepare_duration_mouseclick() {
    this._mouse = new _backends_mouse_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.experiment);
  }

  /** Prepare the system for a timeout. */
  prepare_timeout() {
    let timeout = this.vars.get('timeout', true, -1);
    this._timeout = typeof timeout === 'number' && timeout !== -1 ? timeout : null;
  }

  /** Sets duration and allowed responses on the response object. **/
  configure_response_objects() {
    // We get duration again, because this._duration can be set to -1
    const duration = this.vars.get('duration', true, -1);
    if (duration === 'keypress') {
      this._keyboard._set_config(this._final_duration, this._allowed_responses);
    } else if (duration === 'mouseclick') {
      this._mouse._set_config(this._final_duration, this._allowed_responses, false);
    }
  }

  /** Select the type of stimulus response processing. */
  process_response() {
    // Start stimulus response cycle.
    switch (this._responsetype) {
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_NONE:
        // Duration is 0, so complete the stimulus/response cycle.
        this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].STATUS_FINALIZE;
        this._complete();
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_DURATION:
        this.sleep_for_duration();
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_KEYBOARD:
        this._keyboard.get_key();
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_MOUSE:
        this._mouse.get_click();
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_SOUND:
        this._sampler.wait();
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].RESPONSE_VIDEO:
        this._video_player.wait();
        break;
    }
  }

  /** Sets the mouse coordinates based **/
  set_mouse_coordinates(clientX, clientY) {
    // We need the top-left and scaling of the viewport to set the mouse
    // coordinates so that 0,0 corresponds to the display center. The scaling
    // needs to be taken into account also such that the viewport always has
    // the same size in cursor coordinates, even if it's scaled down.
    const rect = this._runner._renderer.view.getBoundingClientRect();
    const width = this.experiment.vars.get('width');
    const height = this.experiment.vars.get('height');
    const scale = Math.min((rect.right - rect.left) / width, (rect.bottom - rect.top) / height);
    const center_x = scale * width / 2;
    const center_y = scale * height / 2;
    this.experiment.vars.set('cursor_x', (clientX - center_x - rect.left) / scale);
    this.experiment.vars.set('cursor_y', (clientY - center_y - rect.top) / scale);
  }

  /** Process a keyboard response. */
  process_response_keypress(retval) {
    this.experiment._start_response_interval = this.sri;
    this.experiment._end_response_interval = retval.rtTime;
    const response = this.syntax.sanitize(retval.resp);
    this.experiment.vars.set('response', response);
    this.synonyms = this._keyboard._synonyms(response);
    this.response_bookkeeping();
  }

  /** Process a mouse click response. */
  process_response_mouseclick(retval) {
    this.experiment._start_response_interval = this.sri;
    this.experiment._end_response_interval = retval.rtTime;
    this.experiment.vars.set('response', retval.resp);
    this.synonyms = this._mouse._synonyms(this.experiment.vars.response);
    this.set_mouse_coordinates(retval.event.clientX, retval.event.clientY);
    this.response_bookkeeping();
    this.cursor_roi_bookkeeping();
  }

  /** Process a time out response. */
  process_response_timeout() {
    this.experiment._start_response_interval = this.sri;
    this.experiment._end_response_interval = this.experiment._runner._events._timeStamp;
    this.experiment.vars.set('response', 'None');
    this.synonyms = ['None', 'none'];
    this.response_bookkeeping();
  }

  /** Processes roi for the linked-sketchad functionality of the mouse **/
  cursor_roi_bookkeeping() {
    const linked_sketchpad = this.experiment.items._items[this.vars.get('linked_sketchpad')];
    if (typeof linked_sketchpad === 'undefined') {
      this.experiment.vars.set('cursor_roi', 'undefined');
      return;
    }
    this.experiment.vars.set('cursor_roi', linked_sketchpad.canvas.elements_at(this.experiment.vars.get('cursor_x'), this.experiment.vars.get('cursor_y')).join(';'));
  }

  /** General response logging after a stimulus/response. */
  response_bookkeeping() {
    // The respone and response_time variables are always set, for every response item
    this.experiment.vars.set('response_time', this.experiment._end_response_interval - this.experiment._start_response_interval);
    this.experiment.vars.set('response_' + this.name, this.experiment.vars.get('response'));
    this.experiment.vars.set('response_time_' + this.name, this.experiment.vars.get('response_time'));
    this.experiment._start_response_interval = null;
    // But correctness information is only set for dedicated response items,
    // such as keyboard_response items, because otherwise we might confound the
    // feedback
    if (this.process_feedback !== true) return;
    if (this._correct_responses === null) {
      this.experiment.vars.set('correct', 'undefined');
    } else {
      this.experiment.vars.set('correct', 0);
      for (let cr of this._correct_responses) {
        if (this.synonyms.includes(cr)) {
          this.experiment.vars.set('correct', 1);
          this.experiment.vars.set('total_correct', this.experiment.vars.get('total_correct') + 1);
          break;
        }
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
  set_sri(reset) {
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
  sleep_for_duration() {
    this.sleep(this._duration);
  }

  /** Implements the prepare phase of the general response item. */
  prepare() {
    this.prepare_timeout();
    this.prepare_duration();
    this.prepare_allowed_responses();
    this.prepare_correct_responses();
    this.configure_response_objects();
    super.prepare();
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.string.match-all.js */ "./node_modules/core-js/modules/esnext.string.match-all.js");
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form_html.js */ "./src/js/osweb/items/form_html.js");




/**
 * Class representing custom HTML code
 * @extends FormHTML
 */
class InlineHTML extends _form_html_js__WEBPACK_IMPORTED_MODULE_2__["default"] {
  reset() {
    super.reset();
    this.vars.set('htm', '');
  }

  /**
   * @return {string} - the HTML content
   **/
  formHTML() {
    // The goal is to evaluate only the non-script parts of the HTML. To
    // accomplish this, we first get all script blocks and determine the
    // to-be-evaluated parts based on whatever is in-between. Finally, we
    // reverse the indices and evaluate the to-be-evaluated HTML parts from the
    // end to the beginning.
    let html = this.vars.get('html', false);
    let start_pos = 0;
    const to_eval = [];
    for (const match of html.matchAll(/<script>.*?<\/script>/isg)) {
      to_eval.push([start_pos, match.index]);
      start_pos = match.index + match[0].length;
    }
    to_eval.push([start_pos, html.length]);
    to_eval.reverse();
    for (let [start, end] of to_eval) {
      html = html.slice(0, start) + this.syntax.eval_text(html.slice(start, end)) + html.slice(end);
    }
    return html;
  }

  /**
   * Returns an array of all form input elements, including select and textarea
   * elements.
   **/
  _inputElements() {
    return Array.from(document.getElementsByTagName('input')).concat(Array.from(document.getElementsByTagName('select'))).concat(Array.from(document.getElementsByTagName('textarea')));
  }

  /**
   * Sets experimental variables based on the name properties of input elements
   * and then resumes OSWeb.
   **/
  _submitForm() {
    for (const input of this._inputElements()) {
      if (!input.required) continue;
      if (['checkbox', 'radio'].includes(input.type) && !this._groupChecked(input) || !['checkbox', 'radio'].includes(input.type) && input.value === '') {
        alert('One or more required input fields are empty or have not been checked');
        return;
      }
    }
    for (const input of this._inputElements()) {
      if (['checkbox', 'radio'].includes(input.type)) {
        // If a checkbox or radio button is checked, set the value to the `id`
        // attribute if an `id` attribute has been defined. This is especially
        // important for radio-group buttons, which all share the same `name`
        // attribute. If no `id` has been defined, fall back to the `value`
        // attribute, which is 'on' for checked elements.
        if (input.checked) {
          this.experiment.vars.set(input.name, input.id !== '' ? input.id : input.value);
        }
      } else {
        this.experiment.vars.set(input.name, input.value);
      }
    }
    this.resumeOSWeb();
  }

  /**
   * Checks where any element from a group of input elements is checked. This
   * allows for the required attribute to serve as expected for radio-button
   * groups.
   **/
  _groupChecked(input) {
    if (input.name === "") return input.checked;
    for (input of document.getElementsByName(input.name)) {
      if (input.checked) return true;
    }
    return false;
  }
  run() {
    super.run();
    // Disable the submit action of form elements, in case the user has added
    // (unnecessary) form tags
    for (const form of document.getElementsByTagName('form')) form.onsubmit = () => false;
    // Bind input elements of type submit to the custom submit action
    for (const input of document.getElementsByTagName('input')) {
      if (input.type === 'submit') input.onclick = this._submitForm.bind(this);
    }
  }
}

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
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");


/**
 * Class representing an inline item.
 * @extends Item
 */
class InlineJavaScript extends _item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create an inline item which executes inline python code.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited create.
    super(experiment, name, script);
    // Define and set the public properties.
    this.description = 'Executes JavaScript code (ECMA 5.1)';
    this.workspace = experiment._javascriptWorkspace;
    // Process the script
    this.from_string(script);
  }

  /** Reset all item variables to their default value. */
  reset() {
    this.vars.set('_prepare', '');
    this.vars.set('_run', '');
  }

  /**
     * Parse a definition string and retrieve all properties of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  from_string(script) {
    // Parses a definition string.
    this.reset();
    // Split the string into an array of lines.
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
  prepare() {
    this.workspace.exec(this.vars.get('_prepare', false));
    super.prepare();
  }

  /** Implements the run phase of an item. */
  run() {
    super.run();
    this.set_item_onset();
    this.workspace.exec(this.vars.get('_run', false));
    this._complete();
  }
}

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
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");


/**
 * Class representing an inline item.
 * @extends Item
 */
class InlineScript extends _item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create an inline item which executes inline python code.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited create.
    super(experiment, name, script);

    // Define and set the public properties.
    this.description = 'Executes Python code';

    // Define and set the public properties.
    this._prepare_run = false;
    this._prepare_tree = null;
    this._run_tree = null;

    // Process the script.
    this.from_string(script);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    // Check if the parser is in pause mode and must be restarted.
    if (this.experiment._runner._pythonParser._status === 1) {
      // Process the current active node.
      this.experiment._runner._pythonParser._process_nodes();
    } else {
      if (this._prepare_run === true) {
        // Inherited prepare.
        super.prepare();
      } else {
        // Inherited.
        super._complete();
      }
    }
  }

  /** Implements the complete script phase of an item. */
  _complete_script() {
    // Added for video script functionaliry.
    this._complete();
  }

  /** Reset all item variables to their default value. */
  reset() {
    this.vars.set('_prepare', '');
    this.vars.set('_run', '');
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    // Compile the script code to ast trees.
    this._prepare_tree = this.experiment._runner._pythonParser._parse(this.vars.get('_prepare'));
    this._run_tree = this.experiment._runner._pythonParser._parse(this.vars.get('_run'));

    // Execute the run code.
    if (this._prepare_tree !== null) {
      // Set the current item.
      this.experiment._runner._events._currentItem = this;

      // Set the prepare run toggle.
      this._prepare_run = true;

      // Record the onset of the current item.
      this.set_item_onset();

      // Start the parser
      this.experiment._runner._pythonParser._run(this, this._prepare_tree);
    } else {
      // Inherited.
      super.prepare();
    }
  }

  /** Implements the run phase of an item. */
  run() {
    // Inherited.
    super.run();

    // Set the prepare run toggle.
    this._prepare_run = false;

    // Record the onset of the current item.
    this.set_item_onset();

    // Execute the run code.
    if (this._run_tree !== null) {
      // Start the parser
      this.experiment._runner._pythonParser._run(this, this._run_tree);
    } else {
      // To prevent prepeare script from running twice.
      this.experiment._runner._pythonParser._status = 0;

      // No script, so jump to compelte.
      this._complete();
    }
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _classes_var_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../classes/var_store.js */ "./src/js/osweb/classes/var_store.js");
/* harmony import */ var _classes_workspace_var_store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../classes/workspace_var_store.js */ "./src/js/osweb/classes/workspace_var_store.js");
/* harmony import */ var _backends_clock_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backends/clock.js */ "./src/js/osweb/backends/clock.js");






/** Class representing an OpenSesame item. */
class Item {
  constructor(experiment, name, script) {
    // Create and set private properties.
    this._parent = null;
    this._runner = experiment.constructor.name === 'Runner' ? experiment : experiment._runner;
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_NONE;

    // Create and set public properties.
    this.clock = experiment.constructor.name === 'Runner' ? new _backends_clock_js__WEBPACK_IMPORTED_MODULE_4__["default"](this) : experiment.clock;
    this.count = 0;
    this.experiment = experiment.constructor.name === 'Runner' ? this : experiment;
    this.name = name;
    this.python_workspace = this._runner._pythonWorkspace;
    this.response_store = this._runner._responseStore;
    this.syntax = this._runner._syntax;
    // The experiment object has a special VarStore that maps onto the 
    // JavaScript worskpace.
    if (experiment.constructor.name === 'Runner') this.vars = new _classes_workspace_var_store_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);else this.vars = new _classes_var_store_js__WEBPACK_IMPORTED_MODULE_2__["default"](this, this.experiment.vars);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    // Adjust the status of the item.
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_FINALIZE;

    // Implements the complete phase of the item.
    if (this._parent !== null && this._runner._events._currentItem) {
      // Return the process control to the parent of the element.
      this._runner._events._currentItem = this._parent;
      this._runner._events._currentItem.run();
    }
  }

  /** Implements the prepare complete phase of an item. */
  _prepare_complete() {}

  /** Implements the update phase of an item. */
  _update(response) {}

  /**
     * Pauses the object execution. !WARNING This function can not be implemented due the script blocking of javascript.
     * @param {Number} pMs - The sleep time in milliseconds.
     */
  sleep(pMs) {
    this.clock.sleep(pMs);
  }

  /**
     * Returns the current time.
     * @returns {Number} - The current time in ms from the start of the experiment.
     */
  time() {
    // Returns the current time.
    return this.clock.time();
  }

  /**
     * Parses comments from a single definition line, indicated by # // or '.
  .    * @param {String} line - The definition line to be parsed.
     * @returns {Boolean} - Return true if the commennt is succesfully parsed.
     */
  parse_comment(line) {
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
  parse_keyword(line, fromAscii, evaluate) {}

  /**
     * Implements arbitrary line parsing, for item-specific requirements.
     * @param {String} line - The definition line to be parsed.
     */
  parse_line(line) {}

  /**
    * Reads a single variable from a single definition line.
    * @param {String} line - The definition line to be parsed.
    * @return {Boolean} - Return true if the variabel is succesfully parsed.
    */
  parse_variable(line) {
    // Reads a single variable from a single definition line.
    if (this.parse_comment(line)) {
      return true;
    } else {
      // Split the single line into a set of tokens.
      const [cmd, args, _kwargs] = this._runner._syntax.parse_cmd(line);
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
  parse_multiline_vars(script) {
    const vars = this.syntax.parse_multiline_vars(script);
    for (const key in vars) {
      this.vars.set(key, vars[key]);
    }
  }

  /**
   * Parses the item from a definition string.
   * @param {String} script - The definition script line to be parsed.
   */
  from_string(script) {
    // Parses the item from a definition string.
    this.variables = {};
    this.comments = [];
    this.reset();

    // Split the string into an array of lines. We keep track of whether we're
    // inside a multiline variable definition, because those contain lines that
    // are not syntactically valid.
    if (script !== null) {
      this.parse_multiline_vars(script);
      const lines = script.split('\n');
      let in_multi = false;
      for (let line of lines) {
        if (in_multi) {
          if (line === '__end__') in_multi = false;
          continue;
        }
        if (/__(\w+)__/gms.test(line)) {
          in_multi = true;
          continue;
        }
        if (line !== '' && this.parse_variable(line) === false) {
          this.parse_line(line);
        }
      }
    }
  }

  /** Implements the reset item variables method. */
  reset() {}

  /** Implements the prepeare phase of an item. */
  prepare() {
    // Set the internal counter.
    this.experiment.vars.set('count_' + this.name, this.count);
    this.count++;

    // Set the status to initialize.
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_INITIALIZE;

    // For debugging.
    this._runner._debugger.addMessage('prepare ' + this.name);

    // Implements the complete phase of the item (to support blocking script in the prepare phase).
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
  set_item_onset(time) {
    // Set a timestamp for the item's executions
    time = typeof time === 'undefined' ? this.clock.time() : time;

    // Add the time stamp to the variable list.
    this.experiment.vars.set('time_' + this.name, time);
  }

  /** Implements the run phase of an item. */
  run() {
    this._runner._debugger.addMessage('run ' + this.name);
  }
}

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
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/keyboard.js */ "./src/js/osweb/backends/keyboard.js");



/**
 * Class representing a keyboard response item.
 * @extends GenericResponse
 */
class KeyboardResponse extends _generic_response_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a keyboard response item which waits for a keyboard response.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    super(experiment, name, script);
    this.description = 'Collects keyboard responses';
    this._flush = 'yes';
    this._keyboard = new _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.experiment);
    this.from_string(script);
  }

  /** Resets all item variables to their default value. */
  reset() {
    this.process_feedback = true;
    this.vars.set("allowed_responses", null);
    this.vars.set("correct_response", null);
    this.vars.set('duration', 'keypress');
    this.vars.set('flush', 'yes');
    this.vars.set('timeout', 'infinite');
  }

  /** Implements the prepare phase of the KeyboardResponse. */
  prepare() {
    // Inherited.
    super.prepare();
  }

  /** Implements the run phase of the KeyboardResponse. */
  run() {
    // Inherited.
    super.run();

    // Record the onset of the current item.
    this.set_item_onset();

    // Flush responses, to make sure that earlier responses are not carried over.
    if (this.vars.get('flush') === 'yes') {
      this._keyboard.flush();
    }
    this.set_sri();
    this.process_response();
  }
  *coroutine() {
    const keyDownHandler = event => {
      const keypress = this.experiment._runner._events._processKeyboardEvent(event, 1);
      let allowed_responses = 'all';
      if (this.vars.get('allowed_responses')) {
        allowed_responses = this._keyboard._get_default_from_synonym(this.vars.get('allowed_responses').split(';').map(key => key.trim()));
      }
      if (allowed_responses === 'all' || allowed_responses.includes(keypress.resp)) {
        this.response = keypress;
      }
    };
    window.addEventListener('keydown', keyDownHandler);
    yield;
    // Record the onset of the current item.
    this.set_item_onset();
    this.set_sri();
    let proceed = true;
    this.response = null;
    while (!this.response && proceed) {
      proceed = yield true;
    }
    window.removeEventListener('keydown', keyDownHandler);
    if (this.response) this.process_response_keypress(this.response);
  }
}

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
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.string.replace-all.js */ "./node_modules/core-js/modules/esnext.string.replace-all.js");
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");






/**
 * Class representing a logger item.
 * @extends Item
 */
class Logger extends _item_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  /**
     * Create an experiment item which controls the OpenSesame experiment.
     * @param {Object} pExperiment - The experiment item to which the item belongs.
     * @param {String} pName - The unique name of the item.
     * @param {String} pScript - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    super(experiment, name, script);
    this.description = 'Logs experimental data';
    this.from_string(script);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    // Inherited.
    super._complete();
  }

  /** Reset all item variables to their default value. */
  reset() {
    this.logvars = [];
    this.exclude_patterns = [];
    this.vars.set('auto_log', 'yes');
  }

  /**
     * Parse a definition string and retrieve all properties of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  from_string(script) {
    this.reset();
    let key;
    let val;
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
  run() {
    super.run();
    if (this._status !== _system_constants_js__WEBPACK_IMPORTED_MODULE_4__["constants"].STATUS_FINALIZE) {
      this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_4__["constants"].STATUS_FINALIZE;
      this.set_item_onset();
      let logvars = this.logvars;
      if (this.vars.get('auto_log') === 'yes') logvars = logvars.concat(this.experiment.vars.inspect());
      for (const exclude_pattern of this.exclude_patterns) logvars = logvars.filter(key => {
        return !key.match(exclude_pattern);
      });
      this.experiment._log.write_vars(logvars.sort());
      this._complete();
    }
  }
}

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
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/sortBy */ "./node_modules/lodash/sortBy.js");
/* harmony import */ var lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_sortBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _util_matrix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/matrix */ "./src/js/osweb/util/matrix.js");
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! csv-parse/lib/sync */ "./node_modules/csv-parse/lib/sync.js");
/* harmony import */ var csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8__);










/**
 * Class representing a sequence item.
 * @extends Item
 */
class Loop extends _item_js__WEBPACK_IMPORTED_MODULE_6__["default"] {
  /**
   * Create an experiment item which controls the OpenSesame experiment.
   * @param {Object} experiment - The experiment item to which the item belongs.
   * @param {String} name - The unique name of the item.
   * @param {String} script - The script containing the properties of the item.
   */
  constructor(experiment, name, script) {
    // Inherited create.
    super(experiment, name, script);

    // Definition of public properties.
    this.description = 'Repeatedly runs another item';
    this.matrix = null;

    // Definition of private properties.
    this._break_if = '';
    this._cycles = [];
    this._index = 0;
    this._keyboard = null;
    this._operations = [];
    this._initialized = false;

    // Process the script.
    this.from_string(script);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_5__["constants"].STATUS_FINALIZE;
    super._complete();
  }

  /**
   * Scans the provided list of argument for variables and retrieves them if found.
   * The function works recursively and thus also parses elements inside arrays that are part of
   * args.
   *
   * @param {array} args The list of arguments to parse.
   * @returns {array} The parsed arguments list
   */
  _eval_args(args) {
    if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(args)) return args;
    return args.map(el => {
      if (lodash_isArray__WEBPACK_IMPORTED_MODULE_2___default()(el)) {
        return this._eval_args(el);
      } else {
        return this._runner._syntax.remove_quotes(this._runner._syntax.eval_text(el));
      }
    });
  }

  /** Reset all item variables to their default value. */
  reset() {
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
  from_string(script) {
    // Creates a loop from a definition in a string.
    this.comments = [];
    this.variables = {};
    this.reset();

    // Split the string into an array of lines.
    if (script != null) {
      const lines = script.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i] !== '' && this.parse_variable(lines[i]) === false) {
          const [instruction, ...params] = this.syntax.split(lines[i]);
          let cycle, name, value;
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
              value = this.syntax.remove_quotes(params[2]);
              // Check if the value is numeric
              value = lodash_isNumber__WEBPACK_IMPORTED_MODULE_3___default()(value) ? Number(value) : value;
              // If a python expression, convert to javascript.
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
              this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_7__["fullfactorial"], []]);
              break;
            case 'shuffle':
              this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_7__["shuffleVert"], [params]]);
              break;
            case 'shuffle_horiz':
              this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_7__["shuffleHoriz"], [params]]);
              break;
            case 'slice':
              this._operations.push([(matrix, args) => matrix.slice(...args), [params]]);
              break;
            case 'sort':
              this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_7__["sortCol"], [...params]]);
              break;
            case 'sortby':
              this._operations.push([lodash_sortBy__WEBPACK_IMPORTED_MODULE_0___default.a, [params]]);
              break;
            case 'reverse':
              this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_7__["reverseRows"], [params]]);
              break;
            case 'roll':
              this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_7__["roll"], [...params]]);
              break;
            case 'weight':
              this._operations.push([_util_matrix__WEBPACK_IMPORTED_MODULE_7__["weight"], [...params]]);
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
  apply_cycle(cycle) {
    // Sets all the loop variables according to the cycle.
    if (cycle in this.matrix) {
      for (const variable in this.matrix[cycle]) {
        // Get the value of the variable.
        let value = this.matrix[cycle][variable];

        // Check for python expression.
        if (typeof value === 'object') {
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
        }
        // Set the variable.
        this.experiment.vars.set(variable, value);
      }
    }
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    // Make sure the item to run exists.
    const item = this.vars.get('item');
    if (this.experiment.items._items[item] === 'undefined') {
      this._runner._debugger.addError('Could not find an item which is called by loop item: ' + this.name + ' (' + item + ')');
    }
    if (this.vars.get('source') === 'file') this.parseFileSource();
    this._initialized = false;
    super.prepare();
    this.set_item_onset();
  }

  /** Reads the loop table from a csv file in the file pool **/
  parseFileSource() {
    let src = this.vars.get('source_file');
    if (!src.toLowerCase().endsWith('.csv')) {
      throw 'Only csv files are supported as source files by loop items';
    }
    if (typeof this._runner._pool[src] === 'undefined') {
      throw 'Loop item refers to non-existing source file: ' + src;
    }
    this.orig_matrix = csv_parse_lib_sync__WEBPACK_IMPORTED_MODULE_8___default()(this._runner._pool[src].data, {
      columns: true,
      skip_empty_lines: true
    });
  }

  /** Implements the run phase of an item. */
  run() {
    super.run();
    if (!this._initialized) {
      // The first step is to create an array of cycle indices (`cycles`). We
      // first add the integer part of the repeats to this array, which results
      // in a `cycles` array with a length that is a multiple of the original
      // matrix length.
      let cycles = [];
      const wholeRepeats = Math.floor(this.vars.get('repeat'));
      for (let j = 0; j < wholeRepeats; j++) {
        for (let i in this.orig_matrix) {
          cycles.push(i);
        }
      }
      // Next, we add the non-integer part of the repeats to the cycles array.
      const partialRepeats = this.vars.get('repeat') - wholeRepeats;
      const order = this.vars.get('order');
      if (partialRepeats > 0) {
        // Get an array of all cycles indices. (This syntax is like a range().)
        // For randomly ordered loops, shuffle the order of the indices.
        // This makes sure that the next step of determining the repeatcycles
        // is a 'random selection without replacement'
        let allCycles = [...Array(this.orig_matrix.length).keys()];
        if (order === 'random') {
          allCycles = lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default()(allCycles);
        }
        // Add the remaining cycles to the cycles array
        const remainder = Math.floor(this.orig_matrix.length * partialRepeats);
        cycles = [...cycles, ...allCycles.splice(0, remainder)];
      }
      if (order === 'random') {
        cycles = lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default()(cycles);
      }
      // Create a live matrix that takes into account the repeats and the
      // shuffles.
      this.matrix = [];
      for (let k in cycles) {
        this.matrix.push(this.orig_matrix[cycles[k]]);
      }
      // Perform the operations. This may change the number of cycles, which
      // is why this._cycles is only determined afterwards.
      this.matrix = this._operations.reduce((mtrx, _ref) => {
        let [func, args] = _ref;
        return func(mtrx, ...this._eval_args(args));
      }, this.matrix);
      this._cycles = [...this.matrix.keys()];
      this._initialized = true;
      this._index = null;
    } // end init
    // Check if if the cycle must be repeated.
    if (this.experiment.vars.get('repeat_cycle', true, -1) === 1 && this._index !== null) {
      this._runner._debugger.msg('Repeating cycle: ' + this._index);
      this._cycles.push(this._index);
      if (this.vars.get('order') === 'random') {
        this._cycles = lodash_shuffle__WEBPACK_IMPORTED_MODULE_1___default()(this._cycles);
      }
    }
    // When the loop is finished
    if (this._cycles.length == 0) {
      this._complete();
      return;
    }
    // Prepare for the current cycle
    this._index = this._cycles.shift();
    this.apply_cycle(this._index);
    this.experiment.vars.set('repeat_cycle', 0);
    // Process the break-if statement
    const break_if_val = this.vars.get('break_if', false);
    this._break_if = ['never', ''].includes(break_if_val) ? null : break_if_val;
    if (this._break_if !== null) {
      this.python_workspace['this'] = this;
      if (this.experiment._javascriptWorkspace._eval(this._break_if)) {
        this._complete();
        this._initialized = false;
        return;
      }
    }
    // Execute the item to run
    const item = this.vars.get('item');
    if (this._runner._itemStore._items[item].type === 'sequence') {
      this._runner._itemStore.prepare(item, this);
    } else {
      this._runner._itemStore.execute(item, this);
    }
  }
}

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
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _backends_video_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/video.js */ "./src/js/osweb/backends/video.js");



/**
 * Class representing a video player item.
 * @extends Item
 */
class MediaPlayer extends _items_item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a video player plugin item which plays videos.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Define and set the public properties.
    this.description = 'A video player';

    // Define and set the private properties.
    this._script_executed = false;

    // Process the script.
    this.from_string(script);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    if (this._script_executed === false) {
      // Stop the video playing.
      this._video_player.stop();

      // execute script.
      if (this._video_player._script !== null && this.vars.get('event_handler_trigger') === 'on keypress') {
        // Set the execute toggle.
        this._script_executed = true;

        // Execute the script code.
        this._runner._pythonParser._run(this, this._video_player._script);
      } else {
        // Inherited.
        super._complete();
      }
    } else {
      // Inherited.
      super._complete();
    }
  }

  /** Implements the update phase of an item. */
  _update(response) {
    // Update the video canvas.
    this._video_player._update();
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    const event_handler = this.vars.get('event_handler');
    const event_handler_trigger = this.vars.get('event_handler_trigger');
    const duration = this.vars.get('duration');
    // Opens the video file for playback.
    this._video = this.experiment.pool[this.vars.get('video_src')];
    this._video_player = new _backends_video_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.experiment, this._video);

    // Set the inline code options.
    if (event_handler !== '') this._video_player._script = this._runner._pythonParser._parse(event_handler);
    this._video_player._event_handler_always = event_handler_trigger === 'after every frame';

    // Set the audio option.
    this._video_player.audio = this.vars.get('playaudio') === 'yes';

    // Set the full screen option (if enabled).
    this._video_player.full_screen = this.vars.get('resizeVideo') === 'yes';

    // Adjust the duration parameter from sound to video if defined.
    if (duration === 'sound') this._video_player.duration = 'video';else this._video_player.duration = duration;

    // Inherited.
    super.prepare();
  }

  /** Implements the run phase of an item. */
  run() {
    // Set the onset time.
    this.set_item_onset();
    this.set_sri();

    // Start the video player.
    this._video_player.play();

    // Start response processing.
    this.process_response();
  }
}

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
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_mouse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/mouse.js */ "./src/js/osweb/backends/mouse.js");



/**
 * Class representing a mouse response item.
 * @extends GenericResponse
 */
class MouseResponse extends _generic_response_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create an mouse response item which waits for a mouse response.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    super(experiment, name, script);
    this.description = 'Collects mouse responses';
    this.resp_codes = {};
    this._flush = 'yes';
    this.from_string(script);
  }

  /** Implements the complete phase of the Sketschpad. */
  _complete() {
    // Hide the mouse cursor.
    this._mouse.show_cursor(false);

    // Inherited.
    super._complete();
  }

  /** Resets all item variables to their default value. */
  reset() {
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
    this.vars.set('linked_sketchpad', '');
  }
  prepare() {
    super.prepare();
  }
  run() {
    super.run();
    this.set_item_onset();
    if (this.vars.get('show_cursor') === 'yes') {
      this._mouse.show_cursor(true);
    }

    // Flush responses, to make sure that earlier responses are not carried over.
    if (this.vars.get("flush") === 'yes') {
      this._mouse.flush();
    }
    this.set_sri();
    this.process_response();
  }
  *coroutine() {
    const mouseDownHandler = event => {
      this.response = this.experiment._runner._events._processMouseEvent(event, 1);
    };
    const touchHandler = event => {
      event.button = 0;
      event.clientX = event.changedTouches[0].clientX;
      event.clientY = event.changedTouches[0].clientY;
      this.response = this.experiment._runner._events._processMouseEvent(event, 1);
    };
    window.addEventListener('mousedown', mouseDownHandler);
    window.addEventListener('touchstart', touchHandler);
    yield;
    // Show the cursor if defined.
    if (this.vars.get('show_cursor') === 'yes') {
      this._mouse.show_cursor(true);
    }

    // Record the onset of the current item.
    this.set_item_onset();
    this.set_sri();
    let proceed = true;
    this.response = null;
    while (!this.response && proceed) {
      proceed = yield true;
    }
    window.removeEventListener('mousedown', mouseDownHandler);
    window.removeEventListener('touchstart', touchHandler);
    if (this.response) this.process_response_mouseclick(this.response);
  }
}

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
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");



/**
 * Class representing a notepad item.
 * @extends Item
 */
class Notepad extends _items_item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a notepad plugin item which only shows some text in the console.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Define and set the public properties.
    this.description = 'A simple notepad to document your experiment. This plug-in does nothing.';

    // Read the item definition string.
    this.from_string(script);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    // sequence is finalized.
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_FINALIZE;

    // Inherited.
    super._complete();
  }

  /** Implements the run phase of an item. */
  run() {
    // Inherited.
    super.run();

    // Complete the current cycle.
    this._complete();
  }
}

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
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");



/**
 * Class representing a repeat cycle item.
 * @extends Item
 */
class RepeatCycle extends _items_item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a repeat cycle item which repeat a cycle within a loop.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Define and set the public properties.
    this.description = 'Optionally repeat a cycle from a loop';

    // Process the script.
    this.from_string(script);
  }
  _complete() {
    // sequence is finalized.
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_FINALIZE;

    // Inherited.
    super._complete();
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    // Inherited.
    super.prepare();
  }

  /** Implements the run phase of an item. */
  run() {
    // Inherited.
    super.run();
    // Prepare the condtion for which the repeat_cycle must fire.
    const condition = this.vars.get('condition', false);
    // Run item only one time.
    if (this._status !== _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_FINALIZE) {
      if (this.experiment._javascriptWorkspace._eval(condition)) {
        this.experiment.vars.set('repeat_cycle', 1);
      }

      // Complete the current cycle.
      this._complete();
    }
  }
}

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
/* harmony import */ var _items_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");



/**
 * Class representing a reset feedback item.
 * @extends Item
 */
class ResetFeedback extends _items_item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a reset feedback  item which resets the feedback values.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Define and set the public properties.
    this.description = 'Resets the feedback variables, such as "avg_rt" and "acc"';

    // Read the item definition string.
    this.from_string(script);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    // sequence is finalized.
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_FINALIZE;

    // Inherited.
    super._complete();
  }

  /** Implements the run phase of an item. */
  run() {
    // Inherited.
    super.run();

    // Run item only one time.
    if (this._status !== _system_constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].STATUS_FINALIZE) {
      // Run the item.
      this.experiment.reset_feedback();

      // Complete the current cycle.
      this._complete();
    }
  }
}

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
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_sampler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/sampler.js */ "./src/js/osweb/backends/sampler.js");



/**
 * Class representing a sampler item.
 * @extends GenericResponse
 */
class Sampler extends _generic_response_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a sampler  item which plays a sound.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited create.
    super(experiment, name, script);

    // Definition of public properties.
    this.block = false;
    this.description = 'Plays a sound file in .wav or .ogg format';

    // Definition of private properties.
    this._sample = null;
    this._sampler = null;

    // Process the script.
    this.from_string(script);
  }

  /** Reset all item variables to their default value. */
  reset() {
    this.block = false;
    this.vars.set('sample', '');
    this.vars.set('pan', 0);
    this.vars.set('pitch', 1);
    this.vars.set('fade_in', 0);
    this.vars.set('stop_after', 0);
    this.vars.set('volume', 1);
    this.vars.set('duration', 'sound');
    this.vars.set('linked_sketchpad', '');
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    const sample = this.vars.get('sample');
    if (sample === '') throw "No sample has been specified in sampler: ".concat(sample);
    this._sample = this._runner._pool[sample];
    if (typeof this._sample === 'undefined') this.experiment._runner._debugger.addError("\"".concat(sample, "\" does not exist in the file pool"));
    this._sampler = new _backends_sampler_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.experiment, this._sample, this.vars.get("volume"), this.vars.get("pitch"), this.vars.get("pan"), this.vars.get("duration"), this.vars.get("fade_in"));
    super.prepare();
  }

  /** Implements the run phase of an item. */
  run() {
    this.set_item_onset();
    this.set_sri();
    this._sampler.play();
    this.process_response();
  }
}

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
/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ "./src/js/osweb/items/item.js");
/* harmony import */ var _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/keyboard.js */ "./src/js/osweb/backends/keyboard.js");
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");




/**
 * Class representing a Sequence item.
 * @extends Item
 */
class Sequence extends _item_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** The sequence class controls the running of a series of items. */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Create and set private properties.
    this._index = -1;
    this._items = null;
    this._keyboard = null;

    // Create and set public properties.
    this.description = 'Runs a number of items in sequence';
    this.flush_keyboard = 'yes';
    this.items = null;

    // Process the script.
    this.from_string(script);
  }

  /** Implements the complete phase of an item. */
  _complete() {
    // sequence is finalized.
    this._status = _system_constants_js__WEBPACK_IMPORTED_MODULE_2__["constants"].STATUS_FINALIZE;

    // Inherited.
    super._complete();
  }

  /** Implements the prepare complete phase of an item. */
  _prepare_complete() {
    // Generate the items list for the run cycle.
    if (this._index < this.items.length) {
      if (this.items[this._index].item in this._runner._itemStore._items === false) {
        this._runner._debugger.addError('Could not find a child item which is called by sequence item: ' + this.name + ' (' + this.items[this._index].item.name + ')');
      } else {
        // Increase the current index.
        this._index++;

        // Add the item to the internal list.
        this._items.push({
          item: this.items[this._index - 1].item,
          cond: this.items[this._index - 1].cond
        });

        // Prepare the item.
        this._runner._itemStore.prepare(this.items[this._index - 1].item, this);
      }
    } else {
      // Prepare process is done, start execution.
      this._index = 0;

      // Remove the prepare phase form the stack.
      this._runner._itemStack.pop();

      // Check if this sequence is part of a parent sequence and must jump back in the prepare phase.
      if (this._parent.type === 'sequence') {
        this._parent._prepare_complete();
      } else {
        // Execute the next cycle of the sequence itself.
        this._runner._itemStore.run(this.name, this._parent);
      }
    }
  }

  /** Reset all item variables to their default value. */
  reset() {
    this.items = [];
    this.vars.set('flush_keyboard', 'yes');
  }

  /**
     * Parse a definition string and retrieve all properties of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  from_string(script) {
    // Parses a definition string.
    this.variables = {};
    this.comments = [];
    this.reset();

    // Split the string into an array of lines.
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
            }
            // Push the item and condition definition to the items list.
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
  prepare() {
    // Inherited.
    super.prepare();

    // Create a keyboard to flush responses at the start of the run phase
    if (this.vars.get('flush_keyboard') === 'yes') {
      this._keyboard = new _backends_keyboard_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.experiment);
    } else {
      this._keyboard = null;
    }

    // Generate the items list for the run cycle.
    this._index = 0;
    this._items = [];

    // Prepare the items.
    this._prepare_complete();
  }

  /** Implements the run phase of an item. */
  run() {
    // Inherited.
    super.run();
    // Check if all items have been processed.
    if (this._index < this._items.length) {
      // Flush the keyboard at the beginning of the sequence.
      if (this._index === 0 && this.vars.get('flush_keyboard') === 'yes') {
        this._keyboard.flush();
      }

      // Increase the current index.
      this._index++;
      const currentItem = this._items[this._index - 1];

      // Set the workspace.
      this._runner._experiment._javascriptWorkspace.self = this;

      // Check if the item may run.
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
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generic_response_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic_response.js */ "./src/js/osweb/items/generic_response.js");
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");




/**
 * Class representing a Sketchpad item.
 * @extends GeneralResponse
 */
class Sketchpad extends _generic_response_js__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(experiment, name, script) {
    super(experiment, name, script);
    this.canvas = new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_2__["default"](experiment, false);
    this.elements = [];
    this.from_string(script);
  }

  /**
    * Sort function used for determining the draw index (z-index) of alle elemente.
    * @param {Object} a - The first object to compare.
    * @param {Object} b - The second object to compare.
    * @return {Number} - The result of the comparison.
    */
  _compare(a, b) {
    // Sort function used for determining the draw index (z-index) of alle elemente.
    if (a.z_index() < b.z_index()) {
      return 1;
    } else if (a.z_index() > b.z_index()) {
      return -1;
    } else {
      return 0;
    }
  }

  /** Resets all item variables to their default value. */
  reset() {
    this.elements = [];
    this.vars.set('duration', 'keypress');
    this.vars.set('linked_sketchpad', '');
  }

  /** Process a time out response. */
  process_response_timeout() {
    // Nothing happens
  }

  /**
    * Parse a definition string and retrieve all properties of the item.
    * @param {String} script - The script containing the properties of the item.
    */
  from_string(script) {
    this.variables = {};
    this.comments = [];
    this.reset();
    if (script === null) return;
    const lines = script.split('\n');
    for (let line of lines) {
      if (line === '' || this.parse_variable(line) !== false) continue;
      const tokens = this.syntax.split(line);
      if (tokens.length > 0 && tokens[0] === 'draw') {
        if (this.experiment.items._isClass(tokens[1]) === true) {
          var element = this.experiment.items._newElementClass(tokens[1], this, line);
          this.elements.push(element);
        } else {
          this.experiment._runner._debugger.addError('Failed to parse definition: ' + tokens[1]);
        }
      }
    }
    // Sort the elements usin the z-index.
    this.elements.sort(this._compare);
  }

  /**
   * Set the background color of the canvas if it is defined in the var store
   *
   * @memberof Sketchpad
   */
  _set_bg_color() {
    const backgroundColor = this.vars.get('background');
    if (backgroundColor) {
      this.canvas._styles.background_color = backgroundColor;
    }
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    this.canvas.clear();
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].is_shown() === true) {
        this.elements[i].draw();
      }
    }
    super.prepare();
  }

  /** Implements the run phase of the Sketschpad. */
  run() {
    super.run();
    this._set_bg_color();
    // Set the onset and start the stimulus response process.
    this.set_item_onset(this.canvas.show());
    this.set_sri(false);
    this.process_response();
  }
  *coroutine() {
    yield;
    this._set_bg_color();
    this.set_item_onset(this.canvas.show());
  }
}

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
/* harmony import */ var _sampler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sampler.js */ "./src/js/osweb/items/sampler.js");


/**
 * Class representing a synth item.
 * @extends Sampler
 */
class Synth extends _sampler_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a synth item which create a synthessised sound wave.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} Ssript - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited create.
    super(experiment, name, script);

    // Define and set the public properties.
    this.description = 'A basic sound synthesizer';
  }
}

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
/* harmony import */ var _items_mouse_response_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/mouse_response.js */ "./src/js/osweb/items/mouse_response.js");


/**
 * Class representing a reset feedback item.
 * @extends Item
 */
class TouchResponse extends _items_mouse_response_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
     * Create a reset feedback  item which resets the feedback values.
     * @param {Object} experiment - The experiment item to which the item belongs.
     * @param {String} name - The unique name of the item.
     * @param {String} script - The script containing the properties of the item.
     */
  constructor(experiment, name, script) {
    // Inherited.
    super(experiment, name, script);

    // Define and set the public properties.
    this.description = 'A grid-based response item, convenient for touch screens';
  }

  /** Resets all item variables to their default value. */
  reset() {
    super.reset();
    this.vars.set('allowed_responses', null);
    this.vars.set("_ncol", 2);
    this.vars.set("_nrow", 1);
  }

  /** Implements the prepare phase of an item. */
  prepare() {
    // Temp hack
    this.experiment.vars.set('correct', -1);
    // Inherited.
    super.prepare();
  }

  /**
     * Process a mouse click response.
     * @param {Object} pRetval - The mouse response to process.
     */
  process_response_mouseclick(retval) {
    this.experiment._start_response_interval = this.sri;
    this.experiment._end_response_interval = retval.rtTime;
    this.set_mouse_coordinates(retval.event.clientX, retval.event.clientY);
    // Calulate the row, column and cell.
    const cursor_x = this.experiment.vars.get('cursor_x');
    const cursor_y = this.experiment.vars.get('cursor_y');
    const width = this.experiment.vars.get('width');
    const height = this.experiment.vars.get('height');
    const ncol = this.vars.get('_ncol');
    const nrow = this.vars.get('_nrow');
    this.col = Math.floor((cursor_x + width / 2) / (width / ncol));
    this.row = Math.floor((cursor_y + height / 2) / (height / nrow));
    this.cell = this.row * ncol + this.col + 1;
    this.experiment.vars.set('response', this.cell);
    this.synonyms = [this.experiment.vars.get('response').toString()];
    this.response_bookkeeping();
  }
}

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
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/var_store_handler */ "./src/js/osweb/classes/var_store_handler.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _python_math_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./python_math.js */ "./src/js/osweb/python/python_math.js");
/* harmony import */ var _python_opensesame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./python_opensesame.js */ "./src/js/osweb/python/python_opensesame.js");
/* harmony import */ var _python_random_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./python_random.js */ "./src/js/osweb/python/python_random.js");
/* harmony import */ var _python_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./python_string.js */ "./src/js/osweb/python/python_string.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/toNumber */ "./node_modules/lodash/toNumber.js");
/* harmony import */ var lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_toNumber__WEBPACK_IMPORTED_MODULE_7__);









/** Class implementing a python AST interpreter. */
class PythonParser {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the AST object belongs.
     */
  constructor(runner) {
    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the AST object.

    // Set class properties.
    this.python_math = new _python_math_js__WEBPACK_IMPORTED_MODULE_3__["default"](this._runner);
    this.python_opensesame = new _python_opensesame_js__WEBPACK_IMPORTED_MODULE_4__["default"](this._runner);
    this.python_random = new _python_random_js__WEBPACK_IMPORTED_MODULE_5__["default"](this._runner);
    this.python_string = new _python_string_js__WEBPACK_IMPORTED_MODULE_6__["default"](this._runner);

    // Definition of private properties.
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
  _initialize() {
    // Set the python variable connections with opensesame.
    this._variables.clock = this._runner._experiment.clock;
    this._variables.exp = this._runner._experiment;
    this._variables.items = this._runner._itemStore;
    this._variables.pool = this._runner._pool;
    this._variables.var = new Proxy(this._runner._experiment.vars, new _classes_var_store_handler__WEBPACK_IMPORTED_MODULE_1__["default"]());

    // Set the console handler.
    if (this._runner._onConsole !== null) {
      this._onConsole = this._runner._onConsole;
    }

    // Initialize internal libraries to the interpreter.
    this.python_math._initialize();
    this.python_opensesame._initialize();
    this.python_random._initialize();
    this.python_string._initialize();
  }

  /**
     * Create a python AST runner.
     * @param {String} script - Parse a python script using the filbert library.
     */
  _parse(script) {
    // Check if the script exists.
    if (script !== '""') {
      var locations = false;
      var parseFn = filbert__WEBPACK_IMPORTED_MODULE_2___default.a.parse;
      var ranges = false;

      // Try to parse the script.
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
  _get_context(identifier) {
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
  _get_element(element) {
    // Split the identifier name space.
    var items = element.value.split('.');

    // Check if the identifier is part of the internal scope.
    if (items[0] === '__pythonRuntime') {
      // Check if the identifier is part of the import scope.
      if (items[1] === 'imports') {
        var import_lib = filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports[items[2]];
        const value = import_lib[items[3]];
        // Attempt to convert the value to a number,
        // if this fails return the original value
        return isNaN(lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default()(value)) ? value : lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default()(value);
      } else {
        var default_lib = filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime[items[1]];
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
  _get_element_value(element) {
    switch (element.type) {
      case 'identifier':
        // Split the identifier name space.
        var items = element.value.split('.');

        // Set the element value in the global scope.
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
              const import_lib = filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime.imports[items[2]];
              const value = import_lib[items[3]];
              // Attempt to convert the value to a number,
              // if this fails return the original value
              return isNaN(lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default()(value)) ? value : lodash_toNumber__WEBPACK_IMPORTED_MODULE_7___default()(value);
            } else {
              var default_lib = filbert__WEBPACK_IMPORTED_MODULE_2___default.a.pythonRuntime[items[1]];
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
  _set_element_value(element, value) {
    // Split the identifier name space.
    var items = element.value.split('.');

    // Set the element value in the global scope.
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
  _set_node(node) {
    // Set the current node as the parent node
    node.parent = this._node;

    // Set the new node as the current node.
    this._node = node;
  }

  /**
     * Set the return value of a node.
     * @param {Boolean|Number|Object|String} value - The return value for the processed node.
     */
  _set_return_value(value) {
    // Create or acces the return_values array.
    this._node.parent.return_values = typeof this._node.parent.return_values === 'undefined' ? [] : this._node.parent.return_values;

    // Push the value.
    this._node.parent.return_values.push(value);
  }

  /** Process an AST array expression. */
  _array_expression() {
    // Initialize node specific properties.
    this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;

    // Check if all nodes in script have been processed.
    if (this._node.index < this._node.elements.length) {
      // Set current node to node in body.
      this._node.index++;
      this._set_node(this._node.elements[this._node.index - 1]);

      // Return to the processor.
      this._process_nodes();
    } else {
      // Redefine the return values.
      for (var i = 0; i < this._node.return_values.length; i++) {
        this._node.return_values[i] = this._get_element_value(this._node.return_values[i]);
      }
      var return_value = {
        type: 'literal',
        value: this._node.return_values
      };

      // Set the return value.
      this._set_return_value(return_value);

      // Reset node index and return to the parent node.
      this._node.index = 0;
      this._node.return_values = [];
      this._node = this._node.parent;
      this._process_nodes();
    }
  }

  /** Process an AST assignment expression. */
  _assignment_expression() {
    // Initialize node specific properties.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // process id.
        this._node.status = 1;
        this._set_node(this._node.left);

        // Return to the processor.
        this._process_nodes();
        break;
      case 1:
        // Process init.
        this._node.status = 2;
        this._set_node(this._node.right);

        // Return to the processor.
        this._process_nodes();
        break;
      case 2:
        // define variables
        var tmp_value;

        // Select binary operator.
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
        }

        // Reset node index and return to the parent node.
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST binary expression. */
  _binary_expression() {
    // Initialize status property.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.left);

        // Return to the node processor.
        this._process_nodes();
        break;
      case 1:
        // Process property
        this._node.status = 2;
        this._set_node(this._node.right);

        // Return to the node processor.
        this._process_nodes();
        break;
      case 2:
        // define variables.
        var left = this._get_element_value(this._node.return_values[0]);
        var right = this._get_element_value(this._node.return_values[1]);
        var return_value = {
          type: 'literal'
        };

        // Select binary operator.
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
        }

        // Set the return value.
        this._set_return_value(return_value);

        // Reset node index and return to the parent node.
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST block statement. */
  _block_statement() {
    // Initialize node specific properties.
    this._node.break = typeof this._node.break === 'undefined' ? false : this._node.break;
    this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;

    // Check if all nodes in script have been processed.
    if (this._node.index < this._node.body.length && this._node.break === false) {
      // Set current node to node in body.
      this._node.index++;
      this._set_node(this._node.body[this._node.index - 1]);

      // Return to the processor.
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
  _break_statement() {
    // Set break flag for parent element.
    this._node.parent.break = true;

    // Return to the parent node.
    this._node = this._node.parent;
    this._process_nodes();
  }

  /** Process an AST call expression. */
  _call_expression() {
    // Initialize status properties.
    this._node.arguments = typeof this._node.arguments === 'undefined' ? [] : this._node.arguments;
    this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process arguments and caller.
        if (this._node.index < this._node.arguments.length) {
          // Set current node to next node in list.
          this._node.index++;
          this._set_node(this._node.arguments[this._node.index - 1]);

          // Return to the node processessor.
          this._process_nodes();
        } else {
          // Set parent node.
          this._node.status = 1;
          this._set_node(this._node.callee);

          // Return to the node processor.
          this._process_nodes();
        }
        break;
      case 1:
        // Get the first return value, which is the name of the caller element.
        var return_value = this._node.return_values.pop();

        // Get the arguments used on the caller element.
        var tmp_arguments = [];
        for (var i = 0; i < this._node.return_values.length; i++) {
          tmp_arguments.push(this._get_element_value(this._node.return_values[i]));
        }
        var caller = this._get_element(return_value);
        var context = this._get_context(return_value);
        if (return_value.value === 'sleep' || return_value.value === '__pythonRuntime.imports.clock.sleep') {
          // Adjust the status to special.
          this._node.status = 2;

          // Check the context.
          if (typeof context === 'undefined') {
            context = this;
          }

          // Execute the blocking call.
          caller.apply(context, tmp_arguments);
        } else {
          // Check the context.
          if (typeof context === 'undefined') {
            context = this;
          }

          // Execute the call, check first for internal function call.
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
          }

          // Set the return value.
          this._set_return_value(return_value);

          // Reset node index and return to the parent node.
          this._node.index = 0;
          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;
          this._process_nodes();
        }
        break;
      case 2:
        // Special state used when calling a blocking method (sleep, clock.sleep, keyboard.get_key(), mouse.get_click).
        this._set_return_value(this.global_return_value);

        // Reset node index and return to the parent node.
        this._node.index = 0;
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST empty statment. */
  _empty_statement() {
    // Set parent node.
    this._node = this._node.parent;

    // Return to the node processessor.
    this._process_nodes();
  }

  /** Process an AST expression statement. */
  _expression_statement() {
    // Initialize status property.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    if (this._node.status === 0) {
      // Set parent node.
      this._node.status = 1;
      this._set_node(this._node.expression);

      // Return to the node processor.
      this._process_nodes();
    } else {
      // Set parent node.
      this._node.status = 0;
      this._node = this._node.parent;

      // Return to the node processessor.
      this._process_nodes();
    }
  }

  /** Process an AST for statement. */
  _for_statement() {
    // Initialize status property.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.init);

        // Return to the node processessor.
        this._process_nodes();
        break;
      case 1:
        // Process object.
        this._node.status = 2;
        this._set_node(this._node.test);

        // Return to the node processessor.
        this._process_nodes();
        break;
      case 2:
        // Check if the test node has returned true.
        if (this._node.return_values[0].value === true) {
          // Process object.
          this._node.status = 3;
          this._node.return_values = [];
          this._set_node(this._node.body);

          // Return to the node processessor.
          this._process_nodes();
        } else {
          // Range has ended.
          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;

          // Return to the node processessor.
          this._process_nodes();
        }
        break;
      case 3:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.update);

        // Return to the node processessor.
        this._process_nodes();
        break;
    }
  }

  /** Process an AST for in statement. */
  _for_in_statement() {
    // Initialize status property.
    this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.left);

        // Return to the node processessor.
        this._process_nodes();
        break;
      case 1:
        // Process object.
        this._node.status = 2;
        this._set_node(this._node.right);

        // Return to the node processessor.
        this._process_nodes();
        break;
      case 2:
        // Retrieve the range on which the loop travels.
        var tmp_range = this._get_element_value(this._node.return_values[1]);

        // Execute the range.
        if (this._node.index < tmp_range.length) {
          // Set the value of the range.
          this._set_element_value(this._node.return_values[0], tmp_range[this._node.index]);

          // Increase the index.
          this._node.index++;

          // Execute the body.
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
  _function_expression() {
    // Initialize status property.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process defaults.
        this._node.status = 1;
        this._set_node(this._node.body);

        // Return to the node processor.
        this._process_nodes();
        break;
      case 1:
        // Remove the last return value from the global function stack.
        var return_value = this._function_stack.pop();

        // Set the return value
        this._set_return_value(return_value);

        // Set parent node.
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST identifier. */
  _identifier() {
    // Retrieve the identifier information.
    const return_value = {
      type: 'identifier',
      value: this._node.name
    };

    // Set the return value.
    this._set_return_value(return_value);

    // Set parent node.
    this._node = this._node.parent;
    this._process_nodes();
  }

  /** Process an AST if statement. */
  _if_statement() {
    // Initialize status property.
    this._node.break = typeof this._node.break === 'undefined' ? false : this._node.break;
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.test);

        // Return to the node processor.
        this._process_nodes();
        break;
      case 1:
        // Check if expression is true.
        if (this._node.return_values[0].value === true) {
          this._node.status = 2;
          this._set_node(this._node.consequent);

          // Return to the node processor.
          this._process_nodes();
        } else if (this._node.alternate !== null) {
          this._node.status = 2;
          this._set_node(this._node.alternate);

          // Return to the node processor.
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
  _literal() {
    // Retrieve the identifier information.
    var return_value = {
      type: 'literal',
      value: this._node.value
    };

    // Set the return value.
    this._set_return_value(return_value);

    // Set parent node.
    this._node = this._node.parent;
    this._process_nodes();
  }

  /** Process an AST logical expression. */
  _logical_expression() {
    // Initialize status property.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.left);

        // Return to the node processor.
        this._process_nodes();
        break;
      case 1:
        // Process property
        this._node.status = 2;
        this._set_node(this._node.right);

        // Return to the node processor.
        this._process_nodes();
        break;
      case 2:
        // define variables.
        var left = this._get_element_value(this._node.return_values[0]);
        var right = this._get_element_value(this._node.return_values[1]);
        var return_value = {
          type: 'literal'
        };

        // Select binary operator.
        switch (this._node.operator) {
          case '&&':
            return_value.value = left && right;
            break;
          case '||':
            return_value.value = left || right;
            break;
        }

        // Set the return value.
        this._set_return_value(return_value);

        // Reset node index and return to the parent node.
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST member expression */
  _member_expression() {
    // Initialize status property.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.object);

        // Return to the node processessor.
        this._process_nodes();
        break;
      case 1:
        // Process property
        this._node.status = 2;
        this._set_node(this._node.property);

        // Return to the node processessor.
        this._process_nodes();
        break;
      case 2:
        // Build the combing return value.
        var return_value = {
          type: 'identifier',
          value: this._node.return_values[0].value + '.' + this._node.return_values[1].value
        };

        // Set the return value
        this._set_return_value(return_value);

        // Reset node index and return to the parent node.
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST new expression. */
  _new_expression() {
    // Initialize status properties.
    this._node.arguments = typeof this._node.arguments === 'undefined' ? [] : this._node.arguments;
    this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    if (this._node.status === 0) {
      // Process arguments and caller.
      if (this._node.index < this._node.arguments.length) {
        // Set current node to next node in list.
        this._node.index++;
        this._set_node(this._node.arguments[this._node.index - 1]);

        // Return to the node processessor.
        this._process_nodes();
      } else {
        // Set parent node.
        this._node.status = 1;
        this._set_node(this._node.callee);

        // Return to the node processor.
        this._process_nodes();
      }
    } else {
      // Get the caller and context element.
      let returnValue = this._node.return_values.pop();
      var caller = this._get_element(returnValue);
      var context = this._get_context(returnValue);

      // Create the aruments array.
      var tmp_arguments = [];
      for (var i = 0; i < this._node.return_values.length; i++) {
        tmp_arguments.push(this._get_element_value(this._node.return_values[i]));
      }

      // Execute the call.
      returnValue = {
        type: 'literal',
        value: caller.apply(context, tmp_arguments)
      };

      // Set the return value
      this._set_return_value(returnValue);

      // Reset node index and return to the parent node.
      this._node.index = 0;
      this._node.status = 0;
      this._node.return_values = [];
      this._node = this._node.parent;
      this._process_nodes();
    }
  }

  /** Process an AST program. */
  _program() {
    // Initialize node specific properties.
    this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;

    // Check if all nodes in script have been processed.
    if (this._node.index < this._node.body.length) {
      // Set current node to node in body.
      this._node.index++;
      this._set_node(this._node.body[this._node.index - 1]);

      // Return to the processor.
      this._process_nodes();
    } else {
      // Change status and end the running process.
      this._node.index = 0;
      this._status = 2;

      // Complete the inline item.
      if (this._inline_script !== null) {
        this._inline_script._complete();
      }
    }
  }

  /** Process an AST return statement. */
  _return_statement() {
    // Initialize status property.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;
    let returnValue;
    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Process object.
        this._node.status = 1;
        this._set_node(this._node.argument);

        // Return to the node processessor.
        this._process_nodes();
        break;
      case 1:
        // Set return value.
        returnValue = {
          type: 'identifier',
          value: this._node.return_values[0].value
        };

        // Set the return value
        this._function_stack.push(returnValue);

        // Reset node index and return to the parent node.
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST unary expression. */
  _unary_expression() {
    // Initialize node specific properties.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    if (this._node.status === 0) {
      // Set parent node.
      this._node.status = 1;
      this._set_node(this._node.argument);

      // Return to the node processor.
      this._process_nodes();
    } else {
      var return_value = {
        type: 'literal'
      };

      // process the operator.
      switch (this._node.operator) {
        case '!':
          return_value.value = !this._node.return_values[0].value;
          break;
        case '-':
          return_value.value = -this._node.return_values[0].value;
          break;
      }

      // Set the return value
      this._set_return_value(return_value);

      // Return to the node processessor.
      this._node.status = 0;
      this._node.return_values = [];
      this._node = this._node.parent;
      this._process_nodes();
    }
  }

  /** Process an AST update expression. */
  _update_expression() {
    // Initialize node specific properties.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    if (this._node.status === 0) {
      // Set parent node.
      this._node.status = 1;
      this._set_node(this._node.argument);

      // Return to the node processor.
      this._process_nodes();
    } else {
      // Process the init value.
      switch (this._node.operator) {
        case '++':
          this._set_element_value(this._node.return_values[0], this._get_element_value(this._node.return_values[0]) + 1);
          break;
      }

      // Return to the node processessor.
      this._node.status = 0;
      this._node.return_values = [];
      this._node = this._node.parent;
      this._process_nodes();
    }
  }

  /** Process an AST variable declaration. */
  _variable_declaration() {
    // Initialize node specific properties.
    this._node.index = typeof this._node.index === 'undefined' ? 0 : this._node.index;

    // Check if all nodes in script have been processed.
    if (this._node.index < this._node.declarations.length) {
      // Set current node to next node in list.
      this._node.index++;
      this._set_node(this._node.declarations[this._node.index - 1]);

      // Return to the processor.
      this._process_nodes();
    } else {
      // Reset node index and return to the parent node.
      this._node.index = 0;
      this._node = this._node.parent;
      this._process_nodes();
    }
  }

  /** Process an AST variable declarator. */
  _variable_declarator() {
    // Initialize node specific properties.
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // process id.
        this._node.status = 1;
        this._set_node(this._node.id);

        // Return to the processor.
        this._process_nodes();
        break;
      case 1:
        // Process init.
        this._node.status = 2;
        this._set_node(this._node.init);

        // Return to the processor.
        this._process_nodes();
        break;
      case 2:
        // Process the init value.
        this._set_element_value(this._node.return_values[0], this._get_element_value(this._node.return_values[1]));

        // Reset node index and return to the parent node.
        this._node.status = 0;
        this._node.return_values = [];
        this._node = this._node.parent;
        this._process_nodes();
        break;
    }
  }

  /** Process an AST while statement. */
  _while_statement() {
    // Initialize status property.
    this._node.break = typeof this._node.break === 'undefined' ? false : this._node.break;
    this._node.status = typeof this._node.status === 'undefined' ? 0 : this._node.status;

    // Process the current status.
    switch (this._node.status) {
      case 0:
        // Check for the break flag.
        if (this._node.break === true) {
          this._node.break = false;
          // Set parent node.
          this._node.status = 0;
          this._node.return_values = [];
          this._node = this._node.parent;
          this._process_nodes();
        } else {
          // Process object.
          this._node.status = 1;
          this._set_node(this._node.test);

          // Return to the node processeor.
          this._process_nodes();
        }
        break;
      case 1:
        // Check if expression is true.
        if (this._node.return_values[0].value === true) {
          // Reset the test
          this._node.status = 0;
          this._node.return_values = [];

          // execute the body.
          this._set_node(this._node.body);

          // Return to the node processor.
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
  _process_nodes() {
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
  _process_nodes_jump() {
    // Increase the stack counter.
    this._stack++;
    if (this._stack > 500) {
      // Clear the stack.
      this._stack = 0;

      // Process nodes with a timeout (this is a hack for clearing the browser cache.
      setTimeout(function () {
        this._process_nodes_timeout();
      }.bind(this), 1);
    } else {
      // Process the nodes without a timeout.
      this._process_nodes_timeout();
    }
  }

  /** Process a single AST nodes (timeout is for non-blocking) */
  _process_nodes_timeout() {
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
  _run_statement(ast_tree) {
    this._node = ast_tree.body[0];
    this._node.parent = ast_tree;
    this._statement = ast_tree;

    // Adjust status of partser to running and start the process.
    this._status = 1;

    // Process the nodes.
    this._process_nodes();

    // Return the result value of the expression.
    let returnValue;
    if (ast_tree.body[0].return_values[0].type === 'identifier') {
      returnValue = this._get_element_value(ast_tree.body[0].return_values[0]);
    } else {
      returnValue = ast_tree.body[0].return_values[0].value;
    }

    // Clear the return value container for next cycle.
    ast_tree.body[0].return_values = [];

    // Retur value of the statement.
    return returnValue;
  }

  /**
     * Run an AST python script.
     * @param {Object} inline_script - The Inline Script item to which the AST tree belongs.
     * @param {Object} ast_tree - The AST tree to run.
     */
  _run(inline_script, ast_tree) {
    // Set the inline item.
    this._inline_script = inline_script;

    // set the self parameter.
    this._variables.self = inline_script;

    // Set the first node and its parent.
    this._node = ast_tree;
    this._node.parent = null;
    this._statement = null;

    // Adjust status of partser to running and start the process.
    this._status = 1;
    this._process_nodes();
  }
}

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
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_0__);


/** Class implementing a python math library. */
class PythonMath {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  constructor(runner) {
    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.

    // Set class properties.
    this.e = Math.E;
    this.pi = Math.PI;
  }

  /** Initialization phase of the python_math class. */
  _initialize() {
    // Insert math library methods into the python interpreter.
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math = {};
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.ceil = this.ceil;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.copysign = this.copysign;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.fabs = this.fabs;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.factorial = this.factorial;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.floor = this.floor;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.fmod = this.fmod;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.frexp = this.frexp;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.fsum = this.fsum;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.acos = this.acos;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.asin = this.asin;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.atan = this.atan;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.atan2 = this.atan2;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.cos = this.cos;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.hypot = this.hypot;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.sin = this.sin;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.tan = this.tan;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.e = this.e;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.math.pi = this.pi;
  }

  /** Import 'ceil' function for osweb script. */
  ceil(x) {}

  /** Import 'copysign' function for osweb script. */
  copysign(x, y) {}

  /** Import 'fabs' function for osweb script. */
  fabs(x) {}

  /** Import 'factorial' function for osweb script. */
  factorial(x) {}

  /** Import 'floor' function for osweb script. */
  floor(x) {
    return Math.floor(x);
  }

  /** Import 'fmod' function for osweb script. */
  fmod(x, y) {}

  /** Import 'frexp' function for osweb script. */
  frexp(x) {}

  /** Import 'fsum' function for osweb script. */
  fsum(iterable) {}

  /** Import 'acos' function for osweb script. */
  acos(x) {
    return Math.acos(x);
  }

  /** Import 'asin' function for osweb script. */
  asin(x) {
    return Math.asin(x);
  }

  /** Import 'atan' function for osweb script. */
  atan(x) {
    return Math.atan(x);
  }

  /** Import 'atan2' function for osweb script. */
  atan2(y, x) {
    return Math.atan2(y, x);
  }

  /** Import 'cos' function for osweb script. */
  cos(x) {
    return Math.cos(x);
  }

  /** Import 'hypot' function for osweb script. */
  hypot(x, y) {}

  /** Import 'sin' function for osweb script. */
  sin(x) {
    return Math.sin(x);
  }

  /** Import 'tan' function for osweb script. */
  tan(x) {
    return Math.tan(x);
  }
}

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
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backends_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backends/canvas.js */ "./src/js/osweb/backends/canvas.js");



/** Class implementing a python opensesame library. */
class PythonOpenSesame {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  constructor(runner) {
    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.
  }

  /** Initialization phase of the python_library class. */
  _initialize() {
    this._objects = {};

    // Insert clock class into the python interpreter.
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.clock = {};
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.clock.sleep = this._runner._experiment.clock.sleep;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.clock.time = this._runner._experiment.clock.time;

    // Insert log class into the python interpreter.
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.log = {};
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.log.close = this._runner._experiment._log.close;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.log.open = this._runner._experiment._log.open;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.log.write = this._runner._experiment._log.write;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.log.write_vars = this._runner._experiment._log.write_vars;

    // Insert var class into the python interpreter.
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.var = this._runner._experiment.vars;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.var.get = this._runner._experiment.vars.get;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.var.has = this._runner._experiment.vars.has;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.var.set = this._runner._experiment.vars.set;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.var.unset = this._runner._experiment.vars.unset;

    // Insert general opensesame methods into the python interpreter.
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.reset_feedback = this._runner._experiment.reset_feedback;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.set_subject_nr = this._runner._experiment.set_subject;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.canvas = this.canvas;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.copy_sketchpad = this.copy_sketchpad;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.keyboard = this.keyboard;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.mouse = this.mouse;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.pause = this.pause;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.set_subject_nr = this.set_subject_nr;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.sometimes = this.sometimes;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.synth = this.synth;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.xy_circle = this.xy_circle;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.xy_distance = this.xy_distance;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.xy_from_polar = this.xy_from_polar;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.xy_grid = this.xy_grid;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.xy_random = this.xy_random;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.functions.xy_to_polar = this.xy_to_polar;
  }

  /** Import 'canvas' function for osweb script. */
  canvas(auto_prepare, style_args) {
    return new _backends_canvas_js__WEBPACK_IMPORTED_MODULE_1__["default"](this._runner._experiment, auto_prepare, style_args);
  }

  /** Import 'copy_sketchpad' function for osweb script. */
  copy_sketchpad(name) {}

  /** Import 'keyboard' function for osweb script. */
  keyboard(resp_args) {}

  /** Import 'mouse' function for osweb script. */
  mouse(resp_args) {}

  /** Import 'pause' function for osweb script. */
  pause(test) {}

  /** Import 'sampler' function for osweb script. */
  sampler(src, playback_args) {}

  /** Import 'set_response' function for osweb script. */
  set_response(response, response_time, correct) {}

  /** Import 'sometimes' function for osweb script. */
  sometimes(p) {}

  /** Import 'synth' function for osweb script. */
  synth(osc, freq, length, attack, decay) {}

  /** Import 'xy_circle' function for osweb script. */
  xy_circle(n, rho, phi0, pole) {}

  /** Import 'xy_distance' function for osweb script. */
  xy_distance(x1, y1, x2, y2) {}

  /** Import 'xy_from_polar' function for osweb script. */
  xy_from_polar(rho, phi, pole) {}

  /** Import 'xy_grid' function for osweb script. */
  xy_grid(n, spacing, pole) {}

  /** Import 'xy_random' function for osweb script. */
  xy_random(n, width, height, min_dist, pole) {}

  /** Import 'xy_to_polar' function for osweb script. */
  xy_to_polar(x, y, pole) {}
}

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
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! filbert */ "./node_modules/filbert/filbert.js");
/* harmony import */ var filbert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(filbert__WEBPACK_IMPORTED_MODULE_0__);


/** Class implementing a python random library. */
class PythonRandom {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  constructor(runner) {
    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.
  }

  /** Initialization phase of the python_library class. */
  _initialize() {
    // Insert math library methods into the python interpreter.
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.random = {};
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.random.random = this.random;
    filbert__WEBPACK_IMPORTED_MODULE_0___default.a.pythonRuntime.imports.random.shuffle = this.shuffle;
  }

  /** Import 'Random' function for osweb script. */
  random() {
    return Math.random();
  }

  /** Import 'Shuffle' function for osweb script. */
  shuffle(x, random) {
    // Fisher-Yates (aka Knuth) Shuffle.
    var currentIndex = x.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = x[currentIndex];
      x[currentIndex] = x[randomIndex];
      x[randomIndex] = temporaryValue;
    }
    return x;
  }
}

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
/** Class implementing a python string library. */
class PythonString {
  /**
     * Create a python AST runner.
     * @param {Object} runner - The runner to which the library belongs.
     */
  constructor(runner) {
    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the library.
  }

  /** Initialization phase of the python_library class. */
  _initialize() {}

  /** Import 'capitalize' function for osweb script. */
  capitalize() {}

  /** Import 'center' function for osweb script. */
  center(width, fillchar) {}

  /** Import 'upper' function for osweb script. */
  upper() {}
}

/***/ }),

/***/ "./src/js/osweb/system/audio_context.js":
/*!**********************************************!*\
  !*** ./src/js/osweb/system/audio_context.js ***!
  \**********************************************/
/*! exports provided: getAudioContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAudioContext", function() { return getAudioContext; });
let audioContext = null;

// A singleton function to expose the same audio context throughout the app
function getAudioContext() {
  if (audioContext === null) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
}

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
const itemClasses = {
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
const constants = {
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
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);

/** Class representing a convertor. */
class Convertor {
  /**
   * Create a convertor which converts an osexp script to a JSON object stucture.
   * @param {Object} runner - The runner class to which the debugger belongs.
   */
  constructor(runner) {
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
  parseValue(value) {
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
  parseLine(line) {
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
    }
    // if defined process a single line.
    if (items !== null) {
      // Select action on first token.
      switch (items[0]) {
        case 'define':
          // Process a define statement.
          this.item = this.runner._itemStore.newItem(items[1], items[2], '');
          break;
        case 'draw':
          // Create the element.
          var element = this.runner._itemStore._newElementClass(items[1], this.item, '');

          // Split the properties and process them.
          for (var i = 2; i < items.length; i++) {
            var pair = items[i].split('=', 2);
            element.properties[pair[0]] = pair[1];
          }

          // Add the element to the item.
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
          var value = this.parseValue(items[3]);

          // Convert the python expression to javascript.
          if (value[0] === '=') {
            // Parse the python statement.
            value = this.runner._pythonParser._prepare(value.slice(1));
            if (value !== null) {
              value = value.body[0];
            }
          } else {
            // Check if the value is numeric
            value = lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(value) ? Number(value) : value;
          }

          // Set the matrix with the proper values.
          if (this.item.orig_matrix[items[1]] === undefined) {
            this.item.orig_matrix[items[1]] = {};
          }
          this.item.orig_matrix[items[1]][items[2]] = value;
          break;
        case 'widget':
          // Remove the widget token from the list.
          items.shift();

          // Add the element to the item.
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
  parseScript(script) {
    // Set first item.
    this.item = this.runner._experiment;

    // Split the script into lines.
    if (script !== null) {
      // Split the script into lines.
      var lines = script.split('\n');
      for (var i = 0; i < lines.length; i++) {
        // Parse a single line
        this.parseLine(lines[i]);
      }
    }
  }
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3__);





/** Class representing a debugger. */
class Debugger {
  /**
   * Create a debugger which handles errors and messahes during an session.
   * @param {Object} runner - The runner class to which the debugger belongs.
   */
  constructor(runner) {
    // Create and set private properties.
    this._runner = runner; // Parent runner attached to the debugger.

    // Create and set public properties.
    this.enabled = true; // Enable the debugger.
    this.error = false; // True if an error occured.
    this.messageLog = []; // Arraty with alle log messages.
  }

  /** Initialize the debugger object class. */
  _initialize() {
    // Clear the log.
    this.messageLog = [];
  }

  /** Finalize the debugger object class. */
  _finalize() {
    // If enabled push the messages to the javascript console.
    if (this.enabled === true) {
      console.log(this.messageLog);
    }

    // Clear the log.
    this.messageLog = [];
  }

  /**
   * Show a fatal error to the user and stops the running of the experiment.
   * @param {String} errorText - The error shown to the user.
   */
  addError(errorText) {
    let context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    this.error = true;
    this._runner._events.state = _constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].TIMER_ERROR;
    console.error('OSWeb has stopped running due to a fatal error.');
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_3___default()(context)) {
      if (context.notify === true && lodash_isFunction__WEBPACK_IMPORTED_MODULE_2___default()(this._runner._onError)) {
        const url = context.url || null;
        this._runner._onError(errorText, url);
      }
    }
    const itemStack = [];
    for (let itemInfo of this._runner._itemStack._items) {
      itemStack.push(itemInfo['item'] + '[' + itemInfo['phase'] + ']');
    }
    console.log('item-stack: ' + itemStack.join('.'));
    throw errorText;
  }

  /**
   * Add a message to the debugger list.
   * @param {String} message - The message to be added to the list.
   */
  addMessage(messageText) {
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
  msg(messageText) {
    // Push the error message to the log.
    this.addMessage(messageText);
  }
}

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
/* harmony import */ var _system_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../system/constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");



/** Class representing the event system. */
class Events {
  /** The events class controls the running of an experiment. */
  constructor(runner) {
    // Create and set private properties.
    this._currentItem = null; // The current active item.
    this._keyDownEvent = null; // Container for last key event.
    this._keyDownHandler = null; // Key down event handler.
    this._keyPressMode = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_ONLY; // Keyboard press mode.
    this._keyUpHandler = null; // Key up event handler.
    this._mouseDownEvent = null; // Container for last mouse event.
    this._mouseDownHandler = null; // Mouse down event handler.
    this._mouseMoveEvent = null; // Container for last mouse move event.
    this._mouseMoveHandler = null; // Mouse move event handler.
    this._mousePressMode = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_ONLY; // Mouse press mode.
    this._mouseUpHandler = null; // Mouse up event handler.
    this._runner = runner; // Parent runner class.
    this._responseGiven = false; // Valid response toggle
    this._responseList = null; // Items to respond on.
    this._responseType = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_NONE; // Set type of response (0 = none, 1 = keyboard, 2 = mouse, 3 = sound).
    this._soundHasEnded = false; // Sound play is finished.
    this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_NONE; // Current status of the runner.
    this._statePrevious = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_NONE; // Previous state, used when pausing experiment.
    this._timeHandler = null; // Timing event handler.
    this._timeOut = -1; // Duration before timeout occures.
    this._timeStamp = -1; // Moment of update checking.
    this._videoHasEnded = false; // Video play is finished.

    // Definition of the conversion table to convert keycodes to OpenSesame codes.
    this._KEY_CODES = ['', '', '', '', '', '', 'help', '', 'backspace', 'tab', '', '', 'clear', 'enter', 'enter_special', '', 'shift', 'ctrl', 'alt', 'pause',
    // 00  .. 19
    'caps', '', '', '', '', '', '', 'escape', '', '', '', '', 'space', 'page up', 'page down', 'end', 'home', 'left', 'up', 'right',
    // 20  .. 39
    'down', 'select', 'print', 'execute', 'print screen', 'insert', 'delete', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';',
    // 40  .. 59
    '<', '=', '>', '?', '@', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    // 60  .. 79
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'left meta', 'right meta', 'menu', '', '', 'kp0', 'kp1', 'kp2', 'kp3',
    // 80  .. 99
    'kp4', 'kp5', 'kp6', 'kp7', 'kp8', 'kp9', 'kp_multiply', 'kp_plus', '', 'kp_minus', 'kp_period', 'kp_divide', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8',
    // 100 .. 119
    'f9', 'f10', 'f11', 'f12', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 120 .. 139
    '', '', '', '', 'numlock', 'scrollock', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 140 .. 159
    '^', '!', '"', '#', '$', '%', '&', '_', '(', ')', '*', '+', '|', '_', '{', '}', '~', '', '', '',
    // 160 .. 179
    '', '', '', '', '', '', ';', '=', ',', '-', '.', '/', '`', '', '', '', '', '', '', '',
    // 180 .. 199
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '[',
    // 200 .. 219
    '\\', ']', '\'', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 220 .. 239
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' // 240 .. 255
    ];

    // Definition of the conversion table to convert shift keycodes to OpenSesame codes.
    this._KEY_SHIFTCODES = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'pause',
    // 00  .. 19
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 20  .. 39
    '', '', '', '', '', '', '', '', ')', '!', '@', '#', '$', '%', '^', '&', '*', '(', '', ':',
    // 40  .. 59
    '', '+', '', '', '', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    // 60  .. 79
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z', '', '', '', '', '', '', '', '', '', '',
    // 80  .. 99
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 100 .. 119
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 120 .. 139
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 140 .. 159
    '', '', '', '', '', '', '', '', '', '', '', '', '', '_', '', '', '', '', '', '',
    // 160 .. 179
    '', '', '', '', '', '', '', '', '<', '', '>', '?', '~', '', '', '', '', '', '', '',
    // 180 .. 199
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '{',
    // 200 .. 219
    '|', '}', '"', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    // 220 .. 239
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '' // 240 .. 255
    ];
  }

  /** Initialize the event system. */
  _initialize() {
    // Create and set the keyboard event listeners.
    this._keyDownHandler = this._keyDown.bind(this);
    this._keyUpHandler = this._keyUp.bind(this);
    window.addEventListener('keydown', this._keyDownHandler);
    window.addEventListener('keyup', this._keyUpHandler);

    // Create and set the mouse event listeners.
    this._mouseDownHandler = this._mouseDown.bind(this);
    this._mouseMoveHandler = this._mouseMove.bind(this);
    this._mouseUpHandler = this._mouseUp.bind(this);
    this._touchStartHandler = this._touchStart.bind(this);
    this._runner._renderer.view.addEventListener('mousedown', this._mouseDownHandler);
    this._runner._renderer.view.addEventListener('mousemove', this._mouseMoveHandler);
    this._runner._renderer.view.addEventListener('mouseup', this._mouseUpHandler);
    this._runner._renderer.view.addEventListener('touchstart', this._touchStartHandler);

    // Set the current item to the experiment object.
    this._currentItem = this._runner._experiment;
    this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_NONE;

    // Create the time handler and start the experiment.
    this._timeHandler = new pixi_js__WEBPACK_IMPORTED_MODULE_1__["Ticker"]();
    this._timeHandler.add(this._time.bind(this));
    this._timeHandler.start();
  }

  /** Finalize the event system. */
  _finalize() {
    // Remove the keyboard event listeners.
    window.removeEventListener('keydown', this._keyDownHandler);
    window.removeEventListener('keyup', this._keyUpHandler);

    // Remove the mouse event listeners.
    this._runner._renderer.view.removeEventListener('mousedown', this._mouseDownHandler);
    this._runner._renderer.view.removeEventListener('mousemove', this._mouseMoveHandler);
    this._runner._renderer.view.removeEventListener('mouseup', this._mouseUpHandler);
    this._runner._renderer.view.removeEventListener('touchstart', this._touchStartHandler);

    // Stop the timing event listener.
    this._timeHandler.stop();
    this._timeHandler.remove(this._time);

    // Clear the properties.
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
  _convertKeyCode(event) {
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
    }

    // Return function result.
    return key;
  }

  /**
     * Event handler for retrieving key down events.
     * @param {Object} event - system keydown event.
     */
  _keyDown(event) {
    // Ignore events if the key was already down. This is to avoid keypresses
    if (event.repeat) return;
    // Store the keyboard event.
    this._keyDownEvent = {
      event: event,
      rtTime: this._runner._experiment.clock.time()
    };

    // Check for esc key to pause the experiment.
    if (event.keyCode === 27 && this._state !== _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_PAUSE) {
      // Set system to paused.
      this._statePrevious = this._state;
      this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_PAUSE;

      // Show the pause screen.
      this._runner._screen._showPauseScreen();
    } else if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_WAIT && (this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_ONLY || this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_AND_RELEASES)) {
      // Process the event.
      return this._processKeyboardEvent(event, 1);
    }
  }

  /**
     * Event handler for retrieving key up events.
     * @param {Object} event - system keyup event.
     */
  _keyUp(event) {
    if (event.repeat) return;
    // Only select this event when the collection mode is set for this.
    if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_WAIT && (this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RELEASES_ONLY || this._keyPressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_AND_RELEASES)) {
      // Process the event.
      return this._processKeyboardEvent(event, 0);
    }
  }

  /**
     * Process and convert keyboard events into response objects.
     * @param {Object} event - system keyboard event.
     * @param {Number} keyboardState - type of keyboard event.
     */
  _processKeyboardEvent(event, keyboardState) {
    // Create a new keyboard response object.
    const keyboardResponse = {
      event: event,
      rtTime: this._runner._experiment.clock.time(),
      state: keyboardState,
      type: _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_KEYBOARD
    };
    // Convert response to proper keyboard token.
    keyboardResponse.resp = this._convertKeyCode(event);

    // Process the response to the current object.
    if (this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_KEYBOARD && (this._responseList === null || this._responseList.indexOf(keyboardResponse.resp) >= 0)) {
      // Process the current item.
      if (this._currentItem !== null) {
        // Process the response.
        this._currentItem._update(keyboardResponse);
      }

      // Set the valid response given toggle.
      this._responseGiven = true;
    }
    return keyboardResponse;
  }

  /** Prevent the right mouse context menu from showing. */
  _mouseContext(event) {
    // Prevent default action.
    event.preventDefault();

    // Return false to prevent the context menu from pushing up.
    return false;
  }

  /** Store the last mouse move event for later use. */
  _mouseMove(event) {
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
  _touchStart(event) {
    event.button = 0;
    event.clientX = event.changedTouches[0].clientX;
    event.clientY = event.changedTouches[0].clientY;
    this._mouseDown(event);
  }

  /**
     * Event handler for retrieving mouse down events.
     * @param {Object} event - system mousedown event.
     */
  _mouseDown(event) {
    // Store the mouse down event and its timestamp for use in the mouse class.
    this._mouseDownEvent = {
      event: event,
      rtTime: this._runner._experiment.clock.time()
    };

    // Only select this event when the collection mode is set for this.
    if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_WAIT && (this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_ONLY || this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_AND_RELEASES)) {
      // Process the event.
      return this._processMouseEvent(event, 1);
    }
  }

  /**
     * Event handler for retrieving mouse up events.
     * @param {Object} event - system mouseup event.
     */
  _mouseUp(event) {
    // Only select this event when the collection mode is set for this.
    if (this._state === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_WAIT && (this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RELEASES_ONLY || this._mousePressMode === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].PRESSES_AND_RELEASES)) {
      // Process the event.
      this._processMouseEvent(event, 0);
    }
  }

  /**
     * Process and convert mouse events into response objects.
     * @param {Object} event - system mouse event.
     * @param {Number} mouseState - type of mouse event.
     */
  _processMouseEvent(event, mouseState) {
    // Create a mouse response object.
    var mouseResponse = {
      event: event,
      rtTime: this._runner._experiment.clock.time(),
      state: mouseState,
      type: _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_MOUSE
    };

    // Adjust mouse response.
    mouseResponse.resp = String(event.button + 1);

    // Process the response to the current object.
    if (this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_MOUSE && (this._responseList === null || this._responseList.indexOf(mouseResponse.resp) >= 0)) {
      // Process the response to the current object.
      if (this._currentItem !== null) {
        this._currentItem._update(mouseResponse);
      }

      // Set the valid response given toggle.
      this._responseGiven = true;
    }
    return mouseResponse;
  }

  /**
     * Event handler for sound event processing.
     * @param {Object} event - sound end event.
     */
  _audioEnded(sampler) {
    sampler.clearFilters();
    // If duration isequal to sound exit the sound item.
    if (sampler.duration === 'sound') {
      this.proceed();
    }
  }

  /** Definition of methods for video event processing. */
  _videoEnded(event) {
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
  _videoPlay(event) {}

  /**
     * Event handler for experiment execution.
     * @param {Object} event - system timer event.
     */
  _time(event) {
    // Select the proper state.
    switch (this._state) {
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_NONE:
        // Do nothing in the loop
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_WAIT:
        // Set current time stamp
        this._timeStamp = this._currentItem.clock.time();
        // Check if a time out occures or a valid response is given.
        if (this._timeOut === -1 && (this._responseGiven === true || this._videoHasEnded === true) || this._timeOut > 0 && (this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_KEYBOARD || this._responseType === _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].RESPONSE_MOUSE) && this._responseGiven === true || this._timeOut > 0 && this._timeStamp - this._currentItem.experiment.vars.get('time_' + this._currentItem.name) > this._timeOut) {
          this.proceed();
        } else {
          // Update the current item without response.
          this._currentItem._update(null);
        }
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_PAUSE:
        // Do nothing in the loop
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_RESUME:
        // Do nothing in the loop
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_BREAK:
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_EXIT:
        // Adjus the status.
        this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_NONE;

        // Exit the runner.
        this._runner._finalize();
        break;
      case _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_FORM:
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
  _run(timeOut, responseType, responseList) {
    // Set the event run|ning properties.
    this._responseList = responseList;
    this._responseType = responseType;
    this._timeOut = timeOut;

    // Activate the event running.
    this._responseGiven = false;
    this._soundHasEnded = false;
    this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_WAIT;
    this._videoHasEnded = false;
  }
  proceed() {
    // Adjust the status.
    this._state = _system_constants_js__WEBPACK_IMPORTED_MODULE_0__["constants"].TIMER_NONE;

    // Remove the items from the general stack.
    this._runner._itemStack.pop();

    // Execute the post-run phase after duration is finished or response is received.
    this._currentItem._complete();
  }
}

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
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);

/** Class representing a parameter processor. */
class Parameters {
  /**
     * Create an session class which stores information about the client system.
     * @param {Runner} runner - The runner class to which the debugger belongs.
     */
  constructor(runner) {
    // Create and set private properties.
    this._itemCounter = 0; // Number of active parameter.
    this._parameters = []; // All parameters to process.
    this._runner = runner; // Parent runner attached to the session object.
  }

  /** Initialize the parameters class. */
  _initialize() {
    // Check if subject parameter is already defined.
    if (this._runner._subject !== null) {
      // Set the subject number
      this._runner._experiment.set_subject(this._runner._subject);

      // Parameters are processed, next phase.
      this._runner._screen._setupClickScreen(this._runner._welcomeText);
    } else {
      // Update inroscreen.
      this._runner._screen._updateIntroScreen('Retrieving input parameters.');

      // Set properties if defined.
      var parameter = {
        dataType: 'number',
        defaultValue: '0',
        name: 'subject_nr',
        title: 'Starting the experiment',
        prompt: 'Please enter the subject number',
        promptEnabled: true
      };

      // Add the subject parameter to the parameters list.
      this._parameters.push(parameter);

      // Process the Parameters.
      this._processParameters();
    }
  }

  /** Process all parameters within the parameter list. */
  _processParameters() {
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
  _onParamConfirm(parameter, value) {
    // Get the response information
    parameter.response = value;

    // Increase the counter.
    this._itemCounter++;

    // Continue processing.
    this._processParameters();
  }

  /** Callback function for dialog when its cancel button has been clicked. */
  _onParamCancel() {
    // Exit the runner.
    this._runner._exit();
  }

  /**
     * Process a single parameter
     * @param {Object} parameter - The parameter which must be processed.
     */
  _processParameter(parameter) {
    // Check if a user request is required.
    if (parameter.promptEnabled === true) {
      // Use passed function that displays a prompt. This leaves the display
      // of the prompt to the library or system that implements osweb.
      if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(this._runner._prompt)) {
        this._runner._prompt(parameter.title, parameter.prompt, parameter.defaultValue, parameter.dataType, this._onParamConfirm.bind(this, parameter), this._onParamCancel.bind(this));
      } else {
        // Fallback to the window prompt if no function has been passed.
        const result = window.prompt(parameter.prompt, parameter.defaultValue);
        if (result === null) {
          this._onParamCancel();
        } else {
          this._onParamConfirm(parameter, result);
        }
      }
    } else {
      // Assign default value to the Startup item.
      parameter.response = parameter.defaultValue;

      // Increase the counter.
      this._itemCounter++;

      // Continue processing.
      this._processParameters();
    }
  }

  /** Transfer the startup info items to the context. */
  _transferParameters() {
    // Transfer the startup info items to the context.
    for (var i = 0; i < this._parameters.length; i++) {
      // Additional run for subject_nr
      if (this._parameters[i].name === 'subject_nr') {
        this._runner._experiment.set_subject(this._parameters[i].response);
      } else {
        this._runner._experiment.vars.set(this._parameters[i].name, this._parameters[i].response);
      }
    }

    // Parameters are processed, next phase.
    this._runner._screen._setupClickScreen(this._runner._welcomeText);
  }
}

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
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants.js */ "./src/js/osweb/system/constants.js");
/* harmony import */ var _debugger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debugger.js */ "./src/js/osweb/system/debugger.js");
/* harmony import */ var _convertor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./convertor.js */ "./src/js/osweb/system/convertor.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events.js */ "./src/js/osweb/system/events.js");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parameters.js */ "./src/js/osweb/system/parameters.js");
/* harmony import */ var _screen_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screen.js */ "./src/js/osweb/system/screen.js");
/* harmony import */ var _session_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./session.js */ "./src/js/osweb/system/session.js");
/* harmony import */ var _transfer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transfer.js */ "./src/js/osweb/system/transfer.js");
/* harmony import */ var _classes_item_stack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../classes/item_stack.js */ "./src/js/osweb/classes/item_stack.js");
/* harmony import */ var _classes_item_store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../classes/item_store.js */ "./src/js/osweb/classes/item_store.js");
/* harmony import */ var _classes_python_workspace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../classes/python_workspace.js */ "./src/js/osweb/classes/python_workspace.js");
/* harmony import */ var _classes_file_pool_store_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../classes/file_pool_store.js */ "./src/js/osweb/classes/file_pool_store.js");
/* harmony import */ var _classes_syntax_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../classes/syntax.js */ "./src/js/osweb/classes/syntax.js");
/* harmony import */ var _python_python_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../python/python.js */ "./src/js/osweb/python/python.js");
/* harmony import */ var _items_experiment_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../items/experiment.js */ "./src/js/osweb/items/experiment.js");

















/** Class representing the Runner. */
class Runner {
  /** Create a runner which runs an experiment. */
  constructor(content) {
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
    this._debugger = new _debugger_js__WEBPACK_IMPORTED_MODULE_2__["default"](this); // Internal error system.
    this._convertor = new _convertor_js__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this._events = new _events_js__WEBPACK_IMPORTED_MODULE_4__["default"](this); // The event processor.
    this._itemStack = new _classes_item_stack_js__WEBPACK_IMPORTED_MODULE_9__["default"](this); // The global item stack.
    this._itemStore = new _classes_item_store_js__WEBPACK_IMPORTED_MODULE_10__["default"](this); // The global item store.
    this._parameters = new _parameters_js__WEBPACK_IMPORTED_MODULE_5__["default"](this); // Parameter processor.
    this._pool = new _classes_file_pool_store_js__WEBPACK_IMPORTED_MODULE_12__["default"](this); // The virtual file pool store.
    this._pythonParser = new _python_python_js__WEBPACK_IMPORTED_MODULE_14__["default"](this); // Python parser
    this._pythonWorkspace = new _classes_python_workspace_js__WEBPACK_IMPORTED_MODULE_11__["default"](this); // Python workspace.
    this._screen = new _screen_js__WEBPACK_IMPORTED_MODULE_6__["default"](this); // Introduction screen renderer.
    this._session = new _session_js__WEBPACK_IMPORTED_MODULE_7__["default"](this); // Session information container.
    this._syntax = new _classes_syntax_js__WEBPACK_IMPORTED_MODULE_13__["default"](this); // The script syntax checker.
    this._transfer = new _transfer_js__WEBPACK_IMPORTED_MODULE_8__["default"](this); // File transfer system.

    // Create the content container.
    this._setupContent(content);
  }

  /**
   * Setup the content container which shows all the visual output.
   * @param {String|Object} content - The content (div element) in which the experiment is projected.
   */
  _setupContent(content) {
    // Check if the experiment container is defined.
    if (typeof content !== 'undefined') {
      // Get the div element from the DOM element tree
      this._container = typeof content === 'string' ? document.getElementById(content) : content;

      // Create and set the experiment canvas.
      try {
        this._renderer = Object(pixi_js__WEBPACK_IMPORTED_MODULE_0__["autoDetectRenderer"])(800, 600, {
          antialias: true,
          transparent: false,
          resolution: 1
        });
      } catch (error) {
        document.getElementById('webgl-unavailable').style.display = 'block';
        return;
      }
      this._renderer.backgroundColor = 0xFFFFFF;

      // Append the canvas to the container.
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
  async _setupContext(context) {
    // Check if the script parameter is defined.
    if (typeof context !== 'undefined') {
      // Initialize the context parameters.
      // Use ES6 destructuring to determine values and set default ones if
      // required.
      ({
        confirm: this._confirm = null,
        debug: this._debugger.enabled = false,
        fullScreen: this._fullScreen = false,
        fullBackgroundColor: this._fullBackgroundColor = false,
        introClick: this._screen._click = true,
        introScreen: this._screen._active = true,
        mimetype: this._mimetype = null,
        name: this._name = 'noname.exp',
        onConsole: this._onConsole = null,
        onFinished: this._onFinished = null,
        onLog: this._onLog = null,
        onError: this._onError = null,
        prompt: this._prompt = null,
        scaleMode: this._scaleMode = 'noScale',
        source: this._source = null,
        subject: this._subject = null,
        target: this._target = null,
        welcomeText: this._welcomeText = null
      } = context);

      // Set up the introscreen.
      this._screen._setupIntroScreen();
      this._screen._updateIntroScreen('Loading experiment.');

      // Load the script file, using the source parameter.
      try {
        this._script = await this._transfer._readSource(this._source);
      } catch (e) {
        this._debugger.addError("Error reading osexp: ".concat(e));
        this._exit();
        return;
      }

      // Update the introscreen
      this._screen._updateIntroScreen('Building experiment structure.');

      // Continue the experiment build.
      this._build();

      // Initialize the parameters class and request user input.
      this._parameters._initialize();
    } else {
      // Show error message.
      this.debugger.addError('No context parameter specified.');
    }
  }

  /** Build the experiment system. */
  _build() {
    // Create the experiment item.
    this._experiment = new _items_experiment_js__WEBPACK_IMPORTED_MODULE_15__["default"](this, this._name, this._script);
    this._convertor.parseScript(this._script);
    this._experiment.from_string(this._script);

    // Set the onlog event handler (if defined).
    if (this._onLog) {
      this._experiment.onLog = this._onLog;
    }
  }

  /** initialize the runner. */
  _initialize() {
    // Initialize the helper classes.
    this._debugger._initialize();
    this._events._initialize();
    this._pythonParser._initialize();
    this._session._initialize();

    // Prepare and run the experiment item.
    this._experiment.prepare();
    this._experiment.run();
  }

  /** finalize the runner. */
  _finalize() {
    // Finalize the event system.
    this._events._finalize();

    // Finalize the debugger.
    this._debugger._finalize();

    // Clear the item store and file pool.
    this._itemStore._clean_up();
    this._pool._clean_up();

    // Exit the runner.
    this._exit();
  }

  /** Exit the experiment environment and execute the optional callback. */
  _exit() {
    // Leave the full screen mode
    this._screen._fullScreenExit();

    // Reset te size of the container and the canvas.
    this._experiment._canvas._exitDisplay();

    // Clear the experiment item.
    this._experiment = null;

    // Check if a callback function is defined.
    if (this._onFinished) {
      // Execute callback function.
      this._onFinished(this._data, this._session._session);
    }
  }

  /** Exit a running experiment. */
  exit() {
    // Set state of the event system to break.
    this._events._state = _constants_js__WEBPACK_IMPORTED_MODULE_1__["constants"].TIMER_BREAK;
  }

  /** Run an experiment */
  run(context) {
    // Build the experiment.
    this._setupContext(context);
  }
}

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
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/pixi.es.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index.js */ "./src/js/osweb/index.js");
/* harmony import */ var _audio_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio_context */ "./src/js/osweb/system/audio_context.js");







/** Class representing a Screen. */
class Screen {
  /**
   * Create an introduction screen which handles the start of the experiment.
   * @param {Object} runner - The runner class to which the screen belongs.
   */
  constructor(runner) {
    // Set class parameter properties.
    this._runner = runner; // Parent runner attached to the screen object.

    // Set class properties.
    this._active = true; // If true the introduction screen is shown.
    this._click = true; // If true all is started with a mouse click.
    this._container = null; //  Container which holds the screen info.
    this._exit = false; // Exit toggle to prevent dialog when closing experiment.
  }

  screenCenter() {
    return {
      x: this._runner._renderer.width / 2,
      y: this._runner._renderer.height / 2
    };
  }

  /** Initialize the fullscreen mode if enabled. */
  _fullScreenInit() {
    if (this._runner._fullScreen === true) {
      // At the moment, Safari appears not implement the fullscreen API and
      // still needs the webkit prefix
      if (typeof document.documentElement.requestFullscreen === 'undefined') {
        console.log('using webkit fullscreen functions');
        document.documentElement.requestFullscreen = document.documentElement.webkitRequestFullscreen;
        document.exitFullscreen = document.webkitExitFullscreen;
      }
      document.documentElement.requestFullscreen();
    }
  }

  /** Finalize the fullscreen mode if if was enabled. */
  _fullScreenExit() {
    if (document.fullscreenElement !== null && this._runner._fullScreen === true) {
      document.exitFullscreen();
    }
  }

  /** Set the introscreen elements. */
  _setupIntroScreen(logoSrc) {
    // Check if introscreen is used.
    if (this._active === true) {
      // Define introscreen elements.
      this._introScreen = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Container"]();
      const center = this.screenCenter();
      const logoPath = typeof logoSrc === 'undefined' ? 'img/opensesame.png' : logoSrc;
      const oswebLogo = pixi_js__WEBPACK_IMPORTED_MODULE_3__["Sprite"].from(logoPath);
      const oswebTitle = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Text"]('OSWeb', {
        fontFamily: 'Arial',
        fontSize: 48,
        fill: '#607d8b'
      });
      const versionInfo = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Text"](_index_js__WEBPACK_IMPORTED_MODULE_4__["VERSION_NUMBER"], {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: '#607d8b'
      });
      const copyrightText = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Text"]("Copyright Jaap Bos, Daniel Schreij & Sebastiaan Mathot, 2016 - ".concat(new Date().getFullYear()), {
        fontFamily: 'Arial',
        fontSize: 16,
        fill: '#607d8b'
      });
      oswebLogo.width = oswebLogo.height = 150;
      oswebLogo.position.set(center.x - oswebLogo.width / 2, 50);
      oswebTitle.position.set(center.x - oswebTitle.width / 2, 215);
      versionInfo.position.set(center.x - versionInfo.width / 2, 270);
      copyrightText.position.set(center.x - copyrightText.width / 2, center.y * 2 - copyrightText.height * 2);
      this._statusText = new pixi_js__WEBPACK_IMPORTED_MODULE_3__["Text"]('', {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: '#607d8b'
      });
      this._statusText.position.set(center.x - this._statusText.width / 2, center.y);
      this._introScreen.addChild(oswebLogo, oswebTitle, versionInfo, copyrightText, this._statusText);

      // Show the introduction screen.
      this._runner._renderer.render(this._introScreen);
    }
  }

  /** Check if the experiment must be clicked to start. */
  _setupClickScreen(text) {
    // If no user interaction is required to start the experiment, we continue
    // straight away
    if (this._click === false) {
      this._clearIntroScreen();
      this._runner._initialize();
      return;
    }
    // Otherwise we require the user to touch/ click the screen, in response
    // to which all audio files are preloaded before the experiment actually
    // launches. This implemented in a series of callbacks below.
    //
    // Once all audio samples have been preloaded, we continue with the
    // experiment.
    let preloadStimuli = function (event) {
      let continueAfterPreload = function () {
        if (this._audioContext === null) {
          console.log('already finished silent playback, ignoring');
          return;
        }
        this._audioContext = null;
        console.log('finished silent playback');
        this._runner._renderer.view.removeEventListener('click', preloadStimuli);
        this._runner._renderer.view.removeEventListener('touchstart', preloadStimuli);
        this._clearIntroScreen();
        this._runner._initialize();
      }.bind(this);
      // Once the audio context is running, this function silently and 
      // briefly plays all audio samples so that they can be played back
      // without a user interaction later on.
      let withRunningAudioContext = function () {
        if (this._preloadQueue.length > 0) {
          console.log("silently playing ".concat(this._preloadQueue.length, " audio samples"));
          let promises = [];
          while (this._preloadQueue.length > 0) {
            let item = this._preloadQueue.pop();
            if (item.type === 'audioBuffer') {
              console.log('silently playing audio buffer for preloading');
              const source = this._audioContext.createBufferSource();
              source.buffer = item.data;
              // Create a Gain Node to mute the audio
              const gainNode = this._audioContext.createGain();
              gainNode.gain.setValueAtTime(0, this._audioContext.currentTime);
              source.connect(gainNode).connect(this._audioContext.destination);
              // Create a promise to be resolved when this buffer starts playing
              promises.push(new Promise(resolve => {
                source.onended = resolve;
              }));
              // Start and stop playing the audio buffer almost immediately
              source.start(0);
              source.stop(0 + 0.001);
            }
          }
          // Wait for all audio to finish playing, then proceed
          Promise.all(promises).then(continueAfterPreload).catch(error => {
            console.log('failed to preload some or all audio buffers: ' + error);
          });
        } else {
          continueAfterPreload();
        }
      }.bind(this);
      // We get the audio context and try to resume it if it is currently
      // suspended. Once the audio context is running, we continue. If 
      // resuming the context fails, we do nothing so that the user can
      // click the screen again to try again.
      this._audioContext = Object(_audio_context__WEBPACK_IMPORTED_MODULE_5__["getAudioContext"])();
      if (this._audioContext.state === 'suspended') {
        this._audioContext.resume().then(() => {
          console.log('audio context resumed');
          withRunningAudioContext();
        }).catch(() => {
          console.log('failed to resume audio context, click to try again');
        });
      } else {
        console.log('no need to resume audio context');
        withRunningAudioContext();
      }
    }.bind(this);
    // Update inroscreen.
    if (typeof text === "undefined" || text.length === 0) {
      text = "\nNever provide personal or sensitive information\n    such as credit card numbers or PIN codes\n\n           Click or touch the screen to begin!";
    }
    this._updateIntroScreen(text);
    this._preloadQueue = this._runner._experiment.pool._items.slice();
    this._runner._renderer.view.addEventListener('click', preloadStimuli);
    this._runner._renderer.view.addEventListener('touchstart', preloadStimuli);
  }

  /** Clear the introscreen elements. */
  _clearIntroScreen() {
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
   * Update the introscreen elements.
   * @param {String} text - The text which must be updated.
   */
  _updateIntroScreen(text) {
    // Update the introscreen elements.
    if (this._active === true) {
      const center = this.screenCenter();
      this._statusText.text = text.replace(/<br \/>/g, '\n').replace(/&#39;/g, "'").replace(/&#34;/g, '"');
      this._statusText.position.set(center.x - this._statusText.width / 2, center.y);
      this._runner._renderer.render(this._introScreen);
    }
  }

  /** Show the pause screen. */
  _showPauseScreen() {
    // Open Sesame is running, request subject to continue of to stop.
    if (lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(this._runner._confirm)) {
      this._runner._confirm('Esc key pressed, pausing experiment.', 'Please press ok the resume the experiment otherwise cancel to stop.', this._onPauseScreenConfirm.bind(this), this._onPauseScreenCancel.bind(this));
    }
  }

  /** Event handler to respond to dialog ok conmfirmation. */
  _onPauseScreenConfirm() {
    // Restore the old state.
    this._runner._events._state = this._runner._events._statePrevious;
  }

  /** Event handler to respond to dialog cancel confirmation. */
  _onPauseScreenCancel() {
    // Exit the experiment.
    this._runner._finalize();
  }
}

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
/** Class representing a client session information collector. */
class Session {
  /**
     * Create an session object which stores information about the client system.
     * @param {Object} runner - The runner class to which the session belongs.
     */
  constructor(runner) {
    // Create and set private properties.
    this._date = null; // Date information container.
    this._runner = runner; // Parent runner attached to the session object.
    this._session = null; // Session information container.
  }

  /** Initialize the session. */
  _initialize() {
    // Update the loader text.
    this._runner._screen._updateIntroScreen('Retrieving session information.');

    // Get the session information.
    this._getSessionInformation();
  }

  /** Retrieve session information from the client. */
  _getSessionInformation() {
    // Get the session information from the client system.
    this._date = new Date();
    this._session = {
      browser: {
        codename: navigator.appCodeName,
        name: navigator.appName,
        version: navigator.appVersion
      },
      date: {
        startdate: ('0' + this._date.getDate()).slice(-2) + '-' + ('0' + (1 + this._date.getMonth())).slice(-2) + '-' + ('0' + this._date.getFullYear()).slice(-2),
        starttime: ('0' + this._date.getHours()).slice(-2) + ':' + ('0' + this._date.getMinutes()).slice(-2) + ':' + ('0' + this._date.getSeconds()).slice(-2),
        startdateUTC: ('0' + this._date.getUTCDate()).slice(-2) + '-' + ('0' + (1 + this._date.getUTCMonth())).slice(-2) + '-' + ('0' + this._date.getUTCFullYear()).slice(-2)
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
}

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! webfontloader */ "./node_modules/webfontloader/webfontloader.js");
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _audio_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio_context */ "./src/js/osweb/system/audio_context.js");
/* harmony import */ var _util_files__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/files */ "./src/js/osweb/util/files.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);












/** Class representing a information stream processor. */
class Transfer {
  /**
   * Create a transfer object used for streaming information.
   * @param {Object} runner - The runner class to which the transfer belongs.
   */
  constructor(runner) {
    this._runner = runner;
  }

  /**
   * This is the top-level function that is called by the runner to load the
   * experiment file, pool files included with the experiment file, pool files
   * included as HTML elements, and web fonts.
   * @param {Object|String} source - A file object or a String containing the 
   *                                 experiment or a download URL.
   */
  async _readSource(source) {
    // Check type of object.
    if (!lodash_isString__WEBPACK_IMPORTED_MODULE_8___default()(source) && (!lodash_isObject__WEBPACK_IMPORTED_MODULE_9___default()(source) || source.constructor !== File)) {
      throw new Error('No osexp source file defined.');
    }
    // This var will hold the OS script after parsing
    let osScript;
    if (source.constructor === File) {
      // Source is a local file.
      try {
        osScript = await this._readExpFile(source);
      } catch (e) {
        throw new Error("Could not read local osexp, ".concat(e));
      }
    } else if (lodash_isString__WEBPACK_IMPORTED_MODULE_8___default()(source)) {
      // Check if the source string is an URL
      const uri = Object(_util_files__WEBPACK_IMPORTED_MODULE_7__["parseUrl"])(source);
      if (uri !== false) {
        // Attempt to download and load the remote experiment
        try {
          const remoteFile = await this.fetch(uri.href);
          osScript = await this._readExpFile(remoteFile);
        } catch (e) {
          throw new Error("Could not read remote osexp, ".concat(e));
        }
      } else {
        try {
          osScript = this._processScript(source);
        } catch (e) {
          throw new Error("Could not read source string, ".concat(e, "\n\n").concat(source));
        }
      }
    }
    await this._readPoolElements();
    await this._readWebFonts();
    return osScript;
  }

  /**
   * Reads in an osexp from a string
   *
   * @param {File|String} osexpFile The osexp to parse, can be a string or a File containing a string
   * @returns boolean
   * @memberof Transfer
   */
  async _readExpFile(osexp) {
    if ([File, Blob].includes(osexp.constructor)) {
      osexp = await Object(_util_files__WEBPACK_IMPORTED_MODULE_7__["readFileAsText"])(osexp);
    }
    return this._processScript(osexp);
  }

  /**
   * Reads an osexp file from a remote server, if its type is indicated to be
   * 'text/plain' (opposed to being zipped)
   * @param  {string} url The url at which the osexp can be found
   * @return {void}
   */
  async fetch(url) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(url, {
      responseType: 'blob'
    });
    let res;
    if (/Edge/.test(navigator.userAgent)) {
      res = new Blob([response.data]);
      res.name = 'downloaded.osexp';
    } else {
      res = new File([response.data], 'downloaded.osexp');
    }
    return res;
  }

  /**
   * Process an osexp script
   * @param  {string} contents - The script contents
   * @return {boolean} - True if script was successfully processed, false otherwise
   */
  _processScript(contents) {
    if (contents.substr(0, 3) !== '---') {
      throw new Error('Specified script file is not valid OpenSesame script');
    }
    return contents;
  }

  /**
   * If file-pool assets are included as HTML elements, they are added to the
   * file pool here.
   *
   * @returns Promise
   * @memberof Transfer
   */
  async _readPoolElements() {
    const filePool = document.getElementById('filePool');
    if (filePool === null) {
      console.log('file pool not embedded in HTML');
      return;
    }
    console.log("file pool embedded in HTML (".concat(filePool.children.length, " files)"));
    const audioContext = Object(_audio_context__WEBPACK_IMPORTED_MODULE_6__["getAudioContext"])();
    let audioPromises = [];
    for (const asset of filePool.children) {
      if (asset instanceof HTMLImageElement) {
        this._runner._pool.add({
          data: asset,
          type: 'image'
        }, asset.id);
      } else if (asset instanceof HTMLAudioElement || asset instanceof HTMLSpanElement && asset.className === 'audioFile') {
        // Audio can be embedded either as the text content of a `<span>`
        // element or the source of an `<audio><source></src>` element.
        // By default, spans are used because too many audio elements 
        // breaks on iOS. In all cases, audio is read into a buffer for
        // later playback through the WebAudio API.
        let audioSrc = asset instanceof HTMLAudioElement ? asset.querySelector('source').src : asset.textContent;
        let promise = new Promise((resolve, reject) => {
          if (audioSrc.startsWith('data:')) {
            // Handle Base64 encoded data
            const base64String = audioSrc.split(',')[1];
            const audioData = atob(base64String);
            const audioArray = new Uint8Array(audioData.length);
            for (let i = 0; i < audioData.length; i++) {
              audioArray[i] = audioData.charCodeAt(i);
            }
            const audioBuffer = new ArrayBuffer(audioArray.length);
            const bufferView = new Uint8Array(audioBuffer);
            bufferView.set(audioArray);
            audioContext.decodeAudioData(audioBuffer, function (buffer) {
              this._runner._pool.add({
                data: buffer,
                type: 'audioBuffer'
              }, asset.id);
              resolve();
            }.bind(this), function (error) {
              console.error('Error decoding audio:', error);
              reject(error);
            });
          } else {
            // Handle audio file from a URI
            let request = new XMLHttpRequest();
            request.open('GET', audioSrc, true);
            request.responseType = 'arraybuffer';
            request.onload = function () {
              audioContext.decodeAudioData(request.response, function (buffer) {
                this._runner._pool.add({
                  data: buffer,
                  type: 'audioBuffer'
                }, asset.id);
                resolve();
              }.bind(this), function (error) {
                console.error('Error decoding audio:', error);
                reject(error);
              });
            }.bind(this);
            request.send();
          }
        });
        audioPromises.push(promise);
      } else if (asset instanceof HTMLVideoElement) {
        this._runner._pool.add({
          data: asset,
          type: 'video'
        }, asset.id);
      } else if (asset instanceof HTMLPreElement) {
        this._runner._pool.add({
          data: asset.innerText,
          type: 'text'
        }, asset.id);
      } else {
        console.log("unknown pool element: ".concat(asset));
        continue;
      }
    }
    await Promise.all(audioPromises);
    console.log("all audio files have been loaded and decoded");
  }

  /**
   * Read in webfonts
   *
   * @returns Promise
   * @memberof Transfer
   */
  async _readWebFonts() {
    // Update the introscreen
    this._runner._screen._updateIntroScreen('Retrieving required webfonts.');
    return new Promise((resolve, reject) => {
      // Load the required fonts using webfont.
      webfontloader__WEBPACK_IMPORTED_MODULE_5___default.a.load({
        google: {
          families: ['Droid Sans', 'Droid Serif', 'Droid Sans Mono'],
          urls: ['//fonts.googleapis.com/css?family=Droid Sans', '//fonts.googleapis.com/css?family=Droid Serif', '//fonts.googleapis.com/css?family=Droid Sans Mono']
        },
        active: () => resolve(),
        inactive: () => {
          console.warn('Could not load webfonts');
          resolve(false);
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/js/osweb/util/files.js":
/*!************************************!*\
  !*** ./src/js/osweb/util/files.js ***!
  \************************************/
/*! exports provided: readFileAsText, parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileAsText", function() { return readFileAsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return parseUrl; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isFunction */ "./node_modules/lodash/isFunction.js");
/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_3__);





/**
 * FileStreamer makes it possible to asynchronously stream a file to another reader
 *
 * @class FileStreamer
 */
class FileStreamer {
  constructor(file) {
    let chunkSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 64 * 1024;
    this.file = file;
    this.offset = 0;
    this.chunkSize = chunkSize; // bytes
    this.rewind();
  }
  rewind() {
    this.offset = 0;
  }
  isEndOfFile() {
    return this.offset >= this.getFileSize();
  }
  readBlock() {
    const fileReader = new FileReader();
    const blob = this.file.slice(this.offset, this.offset + this.chunkSize);
    return new Promise((resolve, reject) => {
      fileReader.onloadend = event => {
        const target = event.target;
        if (target.error) {
          return reject(target.error);
        }
        this.offset += target.result.byteLength;
        resolve({
          data: target.result,
          progress: Math.min(this.offset / this.file.size, 1)
        });
      };
      fileReader.readAsArrayBuffer(blob);
    });
  }
  getFileSize() {
    return this.file.size;
  }
}

/**
 * Converts a File/Blob to a string representation
 *
 * @export
 * @param {File} inputFile The file to convert
 * @returns string
 */
function readFileAsText(inputFile) {
  const temporaryFileReader = new FileReader();
  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new DOMException('Problem parsing input file.'));
    };
    temporaryFileReader.onload = () => {
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
    const host = getHost();
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
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/reverse */ "./node_modules/lodash/reverse.js");
/* harmony import */ var lodash_reverse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_reverse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/fromPairs */ "./node_modules/lodash/fromPairs.js");
/* harmony import */ var lodash_fromPairs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_fromPairs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/zipObject */ "./node_modules/lodash/zipObject.js");
/* harmony import */ var lodash_zipObject__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_zipObject__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/zip */ "./node_modules/lodash/zip.js");
/* harmony import */ var lodash_zip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_zip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isArray */ "./node_modules/lodash/isArray.js");
/* harmony import */ var lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isArray__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isInteger */ "./node_modules/lodash/isInteger.js");
/* harmony import */ var lodash_isInteger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isInteger__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var combos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! combos */ "./node_modules/combos/lib/index.js");
/* harmony import */ var combos__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(combos__WEBPACK_IMPORTED_MODULE_12__);












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
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(srcMatrix)) {
    throw new TypeError('srcMatrix should be an array');
  }
  return Object.values(srcMatrix).reduce((acc, cycle) => {
    for (const [key, val] of Object.entries(cycle)) {
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
  if (!lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_8___default()(srcMatrix)) {
    throw new TypeError('srcMatrix should be an object');
  }
  const columns = Object.keys(srcMatrix);
  const rows = lodash_zip__WEBPACK_IMPORTED_MODULE_4___default()(...Object.values(srcMatrix));
  return rows.map(row => lodash_zipObject__WEBPACK_IMPORTED_MODULE_3___default()(columns, row));
}

/**
 * Creates a full factorial design of all the variable values in the matrix
 * @param {array} matrix The array of cycles to fully cross
 * @returns {array}
 */
function fullfactorial(matrix) {
  const result = combos__WEBPACK_IMPORTED_MODULE_12___default()(unstack(matrix));
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
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }
  if (typeof columns === 'undefined' || lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(columns) && columns.length === 0) {
    return lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default()(matrix);
  } else if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(columns)) {
    throw new TypeError('Invalid argument for columns passed to shuffleVert. Expects an array containing column names');
  } else {
    const grouped = unstack(matrix);
    let cols = lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(grouped, columns);
    cols = Object.entries(cols).reduce((prev, _ref) => {
      let [key, values] = _ref;
      prev[key] = lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default()(values);
      return prev;
    }, {});
    return stack({
      ...grouped,
      ...cols
    });
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
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }
  if (typeof columns === 'undefined') columns = [];
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(columns)) {
    throw new TypeError('Invalid argument specified to shuffleHoriz. Expects an array that optionally contains column names to shuffle');
  }
  return Object.values(matrix).map(row => {
    const vars = columns.length === 0 ? row : lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(row, columns);
    const keys = Object.keys(vars);
    let vals = Object.values(vars);
    vals = lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default()(vals);
    const res = lodash_fromPairs__WEBPACK_IMPORTED_MODULE_2___default()(lodash_zip__WEBPACK_IMPORTED_MODULE_4___default()(keys, vals));
    return {
      ...row,
      ...res
    };
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
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }
  if (!lodash_isString__WEBPACK_IMPORTED_MODULE_7___default()(col) || col === '') {
    throw new Error('Invalid argument specified to sortCol. Expects a column name');
  }
  const grouped = unstack(matrix);
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
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }
  if (typeof columns === 'undefined') columns = [];
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(columns)) {
    throw new TypeError('Invalid argument specified to reverseRows. Expects an array containing a column name');
  }
  if (columns.length === 0) {
    return lodash_reverse__WEBPACK_IMPORTED_MODULE_0___default()(matrix);
  } else {
    const grouped = unstack(matrix);
    let cols = lodash_pick__WEBPACK_IMPORTED_MODULE_1___default()(grouped, columns);
    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_6___default()(cols)) {
      throw new ReferenceError("one or more of ".concat(columns, " were not found in the matrix"));
    }
    cols = Object.entries(cols).reduce((prev, _ref2) => {
      let [key, values] = _ref2;
      prev[key] = lodash_reverse__WEBPACK_IMPORTED_MODULE_0___default()(values);
      return prev;
    }, {});
    return stack({
      ...grouped,
      ...cols
    });
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
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }
  // operate on a copy of the array to preserve the original
  matrix = [...matrix];
  amount = parseInt(amount);
  if (!lodash_isInteger__WEBPACK_IMPORTED_MODULE_10___default()(amount)) {
    throw new TypeError("amount needs to be an integer, was ".concat(amount));
  }
  if (!column) {
    return rollN(matrix, amount);
  }
  if (!lodash_isString__WEBPACK_IMPORTED_MODULE_7___default()(column)) {
    throw new TypeError("column expects a string, was ".concat(column));
  } else {
    const grouped = unstack(matrix);
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
    for (let i = 0; i < amount; i++) {
      list.unshift(list.pop());
    }
  } else {
    for (let i = 0; i > amount; i--) {
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
  if (!lodash_isArray__WEBPACK_IMPORTED_MODULE_9___default()(matrix)) {
    throw new TypeError('matrix should be of type array');
  }
  if (!lodash_isString__WEBPACK_IMPORTED_MODULE_7___default()(weightCol)) {
    throw new TypeError('Invalid argument passed to weight. Expects a column name');
  }
  if (!Object.prototype.hasOwnProperty.call(matrix[0], weightCol)) {
    throw new ReferenceError("Column '".concat(weightCol, "' not found in matrix"));
  }
  return matrix.reduce((result, item) => {
    const weight = parseInt(item[weightCol]);
    if (!lodash_isInteger__WEBPACK_IMPORTED_MODULE_10___default()(weight)) {
      throw new TypeError('Specified weight value is not an integer');
    }
    for (let i = 0; i < weight; i++) {
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
//# sourceMappingURL=osweb.7003ab8bf5263f1a8f9f.bundle.js.map