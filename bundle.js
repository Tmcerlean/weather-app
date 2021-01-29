/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Main Styles */\nbody {\n  margin: 0px;\n  font-family: \"Courier New\", Courier, monospace;\n  overflow: hidden;\n}\n\na {\n  color: white;\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nselect {\n  border: none;\n  text-align: center;\n  text-align-last: center;\n}\n\n/* Header Styling */\nh1 {\n  font-size: xx-large;\n}\n\nh2 {\n  font-size: large;\n}\n\nh3 {\n  font-size: small;\n}\n\nh4 {\n  font-size: small;\n}\n\n/* Wrapper */\n.wrapper {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-template-areas:\n    \"main\";\n}\n\n#search-input {\n  text-align: center;\n  height: 75px;\n  width: 30vw;\n  padding-left: 10px;\n  font-size: 30px;\n  color: black;\n  border: none;\n  border-bottom: 2px solid black;\n  outline: none;\n  background: transparent;\n}\n\n#search-input::placeholder {\n  text-align: center;\n  font-size: 30px;\n  color: black;\n}\n\n#search-button {\n  height: 75px;\n  width: 75px;\n  border: none;\n  border-radius: 50%;\n  margin-left: 30px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n/* Main Content Area */\n.main-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  max-height: 100vh;\n  height: 100%;\n  padding: 30px;\n  grid-area: main;\n}\n\n.form-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 50vw;\n  height: 50vh;\n  margin-bottom: 10%;\n}\n\n#main-logo {\n  width: 75px;\n  height: 75px;\n  margin-right: 30px;\n}\n\n#weather-results {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  width: 50vw;\n  margin-bottom: 10%;\n  border-radius: 20px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n#weather-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 100px;\n  margin: 0px;\n}\n\n#weather-description {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 30px;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n#weather-city-country {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 45px;\n  font-weight: bolder;\n  text-transform: uppercase;\n  margin: 0px;\n  padding-left: 10px;\n}\n\n#weather-temperature {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 45px;\n  font-weight: bolder;\n  text-transform: uppercase;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-temperature-variations-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.weather-temperature-div {\n  width: 33%;\n  margin: 0px;\n}\n\n.weather-temperature-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-temperature-feels-like {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-minimum-temperature {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-maximum-temperature {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-additional-parameters-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 15px;\n}\n\n#weather-humidity-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-humidity-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-humidity {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-pressure-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-pressure-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-pressure {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-sun-times-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 30px;\n}\n\n#weather-sunrise-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-sunrise-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-sunrise {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-sunset-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-sunset-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-sunset {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-restart-span {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: black;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n#weather-restart-icon {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  color: white;\n  cursor: pointer;\n}\n\n/* Temperature Units Switch */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 90px;\n  height: 34px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2ab934;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #ca2222;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  -ms-transform: translateX(55px);\n  transform: translateX(55px);\n}\n\n/*------ ADDED CSS ---------*/\n.on\n{\n  display: none;\n}\n\n.on, .off\n{\n  color: white;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  top: 50%;\n  left: 50%;\n  font-size: 10px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked+ .slider .on\n{display: block;}\n\ninput:checked + .slider .off\n{display: none;}\n\n/*--------- END --------*/\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/* Main Styles */\nbody {\n  margin: 0px;\n  font-family: \"Courier New\", Courier, monospace;\n  overflow: hidden;\n}\n\na {\n  color: white;\n  text-decoration: none;\n}\n\nul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n\nselect {\n  border: none;\n  text-align: center;\n  text-align-last: center;\n}\n\n/* Header Styling */\nh1 {\n  font-size: xx-large;\n}\n\nh2 {\n  font-size: large;\n}\n\nh3 {\n  font-size: small;\n}\n\nh4 {\n  font-size: small;\n}\n\n/* Wrapper */\n.wrapper {\n  display: grid;\n  grid-template-columns: auto;\n  grid-template-rows: auto;\n  grid-template-areas:\n    \"main\";\n}\n\n#search-input {\n  text-align: center;\n  height: 75px;\n  width: 30vw;\n  padding-left: 10px;\n  font-size: 30px;\n  color: black;\n  border: none;\n  border-bottom: 2px solid black;\n  outline: none;\n  background: transparent;\n}\n\n#search-input::placeholder {\n  text-align: center;\n  font-size: 30px;\n  color: black;\n}\n\n#search-button {\n  height: 75px;\n  width: 75px;\n  border: none;\n  border-radius: 50%;\n  margin-left: 30px;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n/* Main Content Area */\n.main-container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  max-height: 100vh;\n  height: 100%;\n  padding: 30px;\n  grid-area: main;\n}\n\n.form-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  width: 50vw;\n  height: 50vh;\n  margin-bottom: 10%;\n}\n\n#main-logo {\n  width: 75px;\n  height: 75px;\n  margin-right: 30px;\n}\n\n#weather-results {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n  flex-wrap: wrap;\n  width: 50vw;\n  margin-bottom: 10%;\n  border-radius: 20px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.3);\n  padding: 10px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n#weather-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100px;\n  height: 100px;\n  margin: 0px;\n}\n\n#weather-description {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 30px;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n#weather-city-country {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 45px;\n  font-weight: bolder;\n  text-transform: uppercase;\n  margin: 0px;\n  padding-left: 10px;\n}\n\n#weather-temperature {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 45px;\n  font-weight: bolder;\n  text-transform: uppercase;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-temperature-variations-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.weather-temperature-div {\n  width: 33%;\n  margin: 0px;\n}\n\n.weather-temperature-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-temperature-feels-like {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-minimum-temperature {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-maximum-temperature {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-additional-parameters-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 15px;\n}\n\n#weather-humidity-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-humidity-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-humidity {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-pressure-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-pressure-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-pressure {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-sun-times-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n  margin-top: 15px;\n  margin-bottom: 30px;\n}\n\n#weather-sunrise-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-sunrise-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-sunrise {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-sunset-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 50%;\n  margin: 0px;\n}\n\n#weather-sunset-header {\n  text-align: center;\n  width: 100%;\n  margin: 0px;\n  margin-top: 15px;\n}\n\n#weather-sunset {\n  width: 100%;\n  font-size: 15px;\n  font-weight: bolder;\n  text-transform: capitalize;\n  margin: 0px;\n  text-align: center;\n}\n\n#weather-restart-span {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: black;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n#weather-restart-icon {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  color: white;\n  cursor: pointer;\n}\n\n/* Temperature Units Switch */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 90px;\n  height: 34px;\n}\n\n.switch input {display:none;}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #2ab934;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\ninput:checked + .slider {\n  background-color: #ca2222;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(55px);\n  -ms-transform: translateX(55px);\n  transform: translateX(55px);\n}\n\n/*------ ADDED CSS ---------*/\n.on\n{\n  display: none;\n}\n\n.on, .off\n{\n  color: white;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  top: 50%;\n  left: 50%;\n  font-size: 10px;\n  font-family: Verdana, sans-serif;\n}\n\ninput:checked+ .slider .on\n{display: block;}\n\ninput:checked + .slider .off\n{display: none;}\n\n/*--------- END --------*/\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateForm": () => /* binding */ generateForm,
/* harmony export */   "generateWeatherResults": () => /* binding */ generateWeatherResults
/* harmony export */ });
const generateForm = () => {
    // Elements
    const mainContainer = document.querySelector(".main-container");

    // Empty Main Container
    mainContainer.textContent = '';
  
    // Append form wrapper div to main container
    const formWrapper = document.createElement("div");
    formWrapper.setAttribute("class", "form-wrapper");
    mainContainer.appendChild(formWrapper);

    // Append logo to wrapper
    const mainLogo = document.createElement("img");
    mainLogo.src = "cloudy.png";
    mainLogo.setAttribute("id", "main-logo");
    formWrapper.appendChild(mainLogo);

    // Append form to wrapper
    const mainForm = document.createElement("form");
    mainForm.setAttribute("class", "main-form");
    formWrapper.appendChild(mainForm);

    // Append input to form
    const formInput = document.createElement("input");
    formInput.setAttribute("id", "search-input");
    formInput.setAttribute("placeholder", "Enter a city");
    formInput.setAttribute("name", "q");
    formInput.autofocus = true;
    mainForm.appendChild(formInput);

    // Append button to form
    const formButton = document.createElement("button");
    formButton.setAttribute("id", "search-button");
    mainForm.appendChild(formButton);

    // Append icon to button
    const formButtonIcon = document.createElement("i");
    formButtonIcon.setAttribute("class", "fa fa-search");
    formButton.appendChild(formButtonIcon);
}

const generateWeatherResults = (weather) => {
    // Elements
    const mainContainer = document.querySelector(".main-container");

    // Empty Main Container
    mainContainer.textContent = '';

    // Append weather results div to main container
    const weatherResults = document.createElement("div");
    weatherResults.setAttribute("id", "weather-results");
    mainContainer.appendChild(weatherResults);

    // Append weather icon to weather results div
    const weatherIcon = document.createElement("img");
    weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@4x.png`;
    weatherIcon.setAttribute("id", "weather-icon");
    weatherResults.appendChild(weatherIcon);

    // Append weather description to weather results div
    const weatherDescription = document.createElement("p");
    weatherDescription.setAttribute("id", "weather-description");
    let weatherDescriptionText = document.createTextNode(weather.description);
    weatherDescription.appendChild(weatherDescriptionText);
    weatherResults.appendChild(weatherDescription);

    // Append city to weather results div
    const weatherCityCountry = document.createElement("p");
    weatherCityCountry.setAttribute("id", "weather-city-country");
    let weatherCityCountryText = document.createTextNode(`${weather.city},${weather.country}`);
    weatherCityCountry.appendChild(weatherCityCountryText);
    weatherResults.appendChild(weatherCityCountry);

    // Append temperature to weather results div
    const weatherTemperature = document.createElement("p");
    weatherTemperature.setAttribute("id", "weather-temperature");
    let weatherTemperatureText = document.createTextNode(`${weather.temperature}°C`);
    weatherTemperature.appendChild(weatherTemperatureText);
    weatherResults.appendChild(weatherTemperature);

    // Append temperature variations div to weather results div
    const weatherTemperatureVariationsDiv = document.createElement("div");
    weatherTemperatureVariationsDiv.setAttribute("id", "weather-temperature-variations-div");
    weatherResults.appendChild(weatherTemperatureVariationsDiv);   

    // Append temperature feels like div to temperature variations div
    const weatherTemperatureFeelsLikeDiv = document.createElement("div");
    weatherTemperatureFeelsLikeDiv.setAttribute("class", "weather-temperature-div");
    weatherTemperatureVariationsDiv.appendChild(weatherTemperatureFeelsLikeDiv);   

    // Append temperature feels like header to temperature feels like div
    const weatherTemperatureFeelsLikeHeader = document.createElement("p");
    weatherTemperatureFeelsLikeHeader.setAttribute("class", "weather-temperature-header");
    let weatherTemperatureFeelsLikeHeaderText = document.createTextNode(`Feels like:`);
    weatherTemperatureFeelsLikeHeader.appendChild(weatherTemperatureFeelsLikeHeaderText);
    weatherTemperatureFeelsLikeDiv.appendChild(weatherTemperatureFeelsLikeHeader); 

    // Append temperature feels like to temperature feels like div
    const weatherTemperatureFeelsLike = document.createElement("p");
    weatherTemperatureFeelsLike.setAttribute("id", "weather-temperature-feels-like");
    let weatherTemperatureFeelsLikeText = document.createTextNode(`${weather.feelsLike}°C`);
    weatherTemperatureFeelsLike.appendChild(weatherTemperatureFeelsLikeText);
    weatherTemperatureFeelsLikeDiv.appendChild(weatherTemperatureFeelsLike);   
    
    // Append minimum temperature div to temperature variations div
    const weatherMinimumTemperatureDiv = document.createElement("div");
    weatherMinimumTemperatureDiv.setAttribute("class", "weather-temperature-div");
    weatherTemperatureVariationsDiv.appendChild(weatherMinimumTemperatureDiv);   

    // Append minimum temperature header to minimum temperature div
    const weatherMinimumTemperatureHeader = document.createElement("p");
    weatherMinimumTemperatureHeader.setAttribute("class", "weather-temperature-header");
    let weatherMinimumTemperatureHeaderText = document.createTextNode(`Min:`);
    weatherMinimumTemperatureHeader.appendChild(weatherMinimumTemperatureHeaderText);
    weatherMinimumTemperatureDiv.appendChild(weatherMinimumTemperatureHeader); 

    // Append minimum temperature to minimum temperature div
    const weatherMinimumTemperature = document.createElement("p");
    weatherMinimumTemperature.setAttribute("id", "weather-minimum-temperature");
    let weatherMinimumTemperatureText = document.createTextNode(`${weather.minTemp}°C`);
    weatherMinimumTemperature.appendChild(weatherMinimumTemperatureText);
    weatherMinimumTemperatureDiv.appendChild(weatherMinimumTemperature);    

    // Append maximum temperature div to temperature variations div
    const weatherMaximumTemperatureDiv = document.createElement("div");
    weatherMaximumTemperatureDiv.setAttribute("class", "weather-temperature-div");
    weatherTemperatureVariationsDiv.appendChild(weatherMaximumTemperatureDiv);   

    // Append maximum temperature header to maximum temperature div
    const weatherMaximumTemperatureHeader = document.createElement("p");
    weatherMaximumTemperatureHeader.setAttribute("class", "weather-temperature-header");
    let weatherMaximumTemperatureHeaderText = document.createTextNode(`Max:`);
    weatherMaximumTemperatureHeader.appendChild(weatherMaximumTemperatureHeaderText);
    weatherMaximumTemperatureDiv.appendChild(weatherMaximumTemperatureHeader); 

    // Append maximum temperature to maximum temperature div
    const weatherMaximumTemperature = document.createElement("p");
    weatherMaximumTemperature.setAttribute("id", "weather-maximum-temperature");
    let weatherMaximumTemperatureText = document.createTextNode(`${weather.maxTemp}°C`);
    weatherMaximumTemperature.appendChild(weatherMaximumTemperatureText);
    weatherMaximumTemperatureDiv.appendChild(weatherMaximumTemperature);   
    
    // Append additional parameters div to weather results div
    const weatherAdditionalParametersDiv = document.createElement("div");
    weatherAdditionalParametersDiv.setAttribute("id", "weather-additional-parameters-div");
    weatherResults.appendChild(weatherAdditionalParametersDiv);   

    // Append humidity div to additional parameters div
    const weatherHumidityDiv = document.createElement("div");
    weatherHumidityDiv.setAttribute("id", "weather-humidity-div");
    weatherAdditionalParametersDiv.appendChild(weatherHumidityDiv);   

    // Append humidity header to humidity div
    const weatherHumidityHeader = document.createElement("p");
    weatherHumidityHeader.setAttribute("id", "weather-humidity-header");
    let weatherHumidityHeaderText = document.createTextNode(`Humidity:`);
    weatherHumidityHeader.appendChild(weatherHumidityHeaderText);
    weatherHumidityDiv.appendChild(weatherHumidityHeader); 

    // Append humidity to humidity div
    const weatherHumidity = document.createElement("p");
    weatherHumidity.setAttribute("id", "weather-humidity");
    let weatherHumidityText = document.createTextNode(`${weather.humidity}%`);
    weatherHumidity.appendChild(weatherHumidityText);
    weatherHumidityDiv.appendChild(weatherHumidity);    

    // Append pressure div to additional parameters div
    const weatherPressureDiv = document.createElement("div");
    weatherPressureDiv.setAttribute("id", "weather-pressure-div");
    weatherAdditionalParametersDiv.appendChild(weatherPressureDiv);   

    // Append pressure header to pressure div
    const weatherPressureHeader = document.createElement("p");
    weatherPressureHeader.setAttribute("id", "weather-pressure-header");
    let weatherPressureHeaderText = document.createTextNode(`Pressure:`);
    weatherPressureHeader.appendChild(weatherPressureHeaderText);
    weatherPressureDiv.appendChild(weatherPressureHeader); 

    // Append pressure to pressure div
    const weatherPressure = document.createElement("p");
    weatherPressure.setAttribute("id", "weather-pressure");
    let weatherPressureText = document.createTextNode(`${weather.pressure}mb`);
    weatherPressure.appendChild(weatherPressureText);
    weatherPressureDiv.appendChild(weatherPressure);  

    // Append sun times div to weather results div
    const weatherSunTimesDiv = document.createElement("div");
    weatherSunTimesDiv.setAttribute("id", "weather-sun-times-div");
    weatherResults.appendChild(weatherSunTimesDiv);   
    
    // Append sunrise div to sun times div
    const weatherSunriseDiv = document.createElement("div");
    weatherSunriseDiv.setAttribute("id", "weather-sunrise-div");
    weatherSunTimesDiv.appendChild(weatherSunriseDiv);   

    // Append sunrise header to sunrise div
    const weatherSunriseHeader = document.createElement("p");
    weatherSunriseHeader.setAttribute("id", "weather-sunrise-header");
    let weatherSunriseHeaderText = document.createTextNode(`Sunrise:`);
    weatherSunriseHeader.appendChild(weatherSunriseHeaderText);
    weatherSunriseDiv.appendChild(weatherSunriseHeader); 

    // Append sunrise to sunrise div
    const weatherSunrise = document.createElement("p");
    weatherSunrise.setAttribute("id", "weather-sunrise");
    let weatherSunriseText = document.createTextNode(`${weather.sunrise} AM`);
    weatherSunrise.appendChild(weatherSunriseText);
    weatherSunriseDiv.appendChild(weatherSunrise);  

    // Append sunset div to sun times div
    const weatherSunsetDiv = document.createElement("div");
    weatherSunsetDiv.setAttribute("id", "weather-sunset-div");
    weatherSunTimesDiv.appendChild(weatherSunsetDiv);   

    // Append sunset header to sunset div
    const weatherSunsetHeader = document.createElement("p");
    weatherSunsetHeader.setAttribute("id", "weather-sunset-header");
    let weatherSunsetHeaderText = document.createTextNode(`Sunset:`);
    weatherSunsetHeader.appendChild(weatherSunsetHeaderText);
    weatherSunsetDiv.appendChild(weatherSunsetHeader); 

    // Append sunset to sunset div
    const weatherSunset = document.createElement("p");
    weatherSunset.setAttribute("id", "weather-sunset");
    let weatherSunsetText = document.createTextNode(`${weather.sunset} PM`);
    weatherSunset.appendChild(weatherSunsetText);
    weatherSunsetDiv.appendChild(weatherSunset);  

    // Append weather units switch label to weather results div
    const weatherUnitsSwitchLabel = document.createElement("label");
    weatherUnitsSwitchLabel.setAttribute("class", "switch");
    weatherResults.appendChild(weatherUnitsSwitchLabel);  

    // Append weather units switch input to weather units switch label
    const weatherUnitsSwitchInput = document.createElement("input");
    weatherUnitsSwitchInput.setAttribute("type", "checkbox");
    weatherUnitsSwitchInput.setAttribute("id", "togbtn");
    weatherUnitsSwitchLabel.appendChild(weatherUnitsSwitchInput);  

    // Append weather units switch div to weather units switch label
    const weatherUnitsSwitchDiv = document.createElement("div");
    weatherUnitsSwitchDiv.setAttribute("class", "slider round");
    weatherUnitsSwitchLabel.appendChild(weatherUnitsSwitchDiv);  

    // Append weather units on switch span to weather units switch div
    const weatherUnitsSwitchCelciusSpan = document.createElement("span");
    let weatherUnitsSwitchCelciusSpanText = document.createTextNode("°C");
    weatherUnitsSwitchCelciusSpan.appendChild(weatherUnitsSwitchCelciusSpanText);
    weatherUnitsSwitchCelciusSpan.setAttribute("class", "off");
    weatherUnitsSwitchDiv.appendChild(weatherUnitsSwitchCelciusSpan); 

    // Append weather units off switch span to weather units switch div
    const weatherUnitsSwitchFarenheitSpan = document.createElement("span");
    let weatherUnitsSwitchFarenheitSpanText = document.createTextNode("°F");
    weatherUnitsSwitchFarenheitSpan.appendChild(weatherUnitsSwitchFarenheitSpanText);
    weatherUnitsSwitchFarenheitSpan.setAttribute("class", "on");
    weatherUnitsSwitchDiv.appendChild(weatherUnitsSwitchFarenheitSpan); 

    // Append restart span to weather results div
    const weatherRestartSpan = document.createElement("span");
    weatherRestartSpan.setAttribute("id", "weather-restart-span");
    weatherRestartSpan.addEventListener("click", generateForm); 
    weatherResults.appendChild(weatherRestartSpan);

    // Append restart icon to restart span
    const weatherRestartIcon = document.createElement("i");
    weatherRestartIcon.setAttribute("class", "fa fa-refresh");
    weatherRestartIcon.setAttribute("id", "weather-restart-icon");
    weatherRestartIcon.addEventListener("click", generateForm); 
    weatherResults.appendChild(weatherRestartIcon); 
}

// Module Exports


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
// Module Imports



// Init
(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.generateForm)();

// Elements
const searchLocationInput = document.querySelector("#search-input");
const searchLocationButton = document.querySelector("#search-button");

// Event Listener
searchLocationButton.addEventListener("click", (event) => {
    event.preventDefault();
    newWeatherRequest(searchLocationInput.value);
});

// Query Weather API
async function getData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=efbc4664f78b87a453c5a9b7ed953d97`, {mode: 'cors'})
        const weatherData = await response.json();
        return weatherData;
    } catch (err) {
        alert(err);
    }
}

// Process JSON Weather Data
function processWeatherData(weatherData) {

    // Create Weather Object
    let weather = {
        temperature: weatherData.main.temp,
        feelsLike: weatherData.main.feels_like,
        humidity: weatherData.main.humidity,
        pressure: weatherData.main.pressure,
        minTemp: weatherData.main.temp_min,
        maxTemp: weatherData.main.temp_max,
        clouds: weatherData.clouds.all,
        city: weatherData.name,
        country: weatherData.sys.country,
        sunrise: weatherData.sys.sunrise,
        sunset: weatherData.sys.sunset,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        windDirection: weatherData.wind.deg,
        windSpeed: weatherData.wind.speed
    };

    // Convert temperature values from Kelvin to Celcius
    weather.temperature = Math.round((weather.temperature - 273.15)*10)/10;
    weather.feelsLike = Math.round((weather.feelsLike - 273.15)*10)/10;
    weather.minTemp = Math.round((weather.minTemp - 273.15)*10)/10;
    weather.maxTemp = Math.round((weather.maxTemp - 273.15)*10)/10;

    // Function to convert sunrise UNIX timestamp to 24h
    let sunriseTimestamp = weather.sunrise;
    let sunriseDate = new Date(sunriseTimestamp * 1000);
    let sunriseHours = sunriseDate.getHours();
    let sunriseMinutes = "0" + sunriseDate.getMinutes();
    let sunriseFormattedTime = sunriseHours + ':' + sunriseMinutes.substr(-2);
    weather.sunrise = sunriseFormattedTime;

    // Function to convert sunset UNIX timestamp to 24h
    let sunsetTimestamp = weather.sunset;
    let sunsetDate = new Date(sunsetTimestamp * 1000);
    let sunsetHours = sunsetDate.getHours();
    let sunsetMinutes = "0" + sunsetDate.getMinutes();
    let sunsetFormattedTime = sunsetHours + ':' + sunsetMinutes.substr(-2);
    weather.sunset = sunsetFormattedTime;

    return weather;
}

// Request Handler
async function newWeatherRequest(location) {
    if (location !== '') {
        try {
            const dataRequest = await getData(location);    // Get data from API
            const weather = await processWeatherData(dataRequest);    // Process data
            // Populate page - Pass weather variable to DOM generateWeatherResults function
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.generateWeatherResults)(weather);
        } catch (err) {
            alert(err);
        }
    }
}

// Module Exports







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG1FQUFtRSxnQkFBZ0IscURBQXFE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QVksYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RCxrRUFBa0U7QUFDbEU7QUFDQSxZQUFZLCtEQUFzQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFHRTs7Ozs7Ozs7Ozs7VUMvRkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBNYWluIFN0eWxlcyAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnNlbGVjdCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcXG59XFxuXFxuLyogSGVhZGVyIFN0eWxpbmcgKi9cXG5oMSB7XFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IHNtYWxsO1xcbn1cXG5cXG4vKiBXcmFwcGVyICovXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJtYWluXFxcIjtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogMzB2dztcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuI3NlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IDc1cHg7XFxuICB3aWR0aDogNzVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBNYWluIENvbnRlbnQgQXJlYSAqL1xcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWF4LWhlaWdodDogMTAwdmg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbn1cXG5cXG4uZm9ybS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcXG59XFxuXFxuI21haW4tbG9nbyB7XFxuICB3aWR0aDogNzVweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXG59XFxuXFxuI3dlYXRoZXItcmVzdWx0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDUwdnc7XFxuICBtYXJnaW4tYm90dG9tOiAxMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI3dlYXRoZXItaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiN3ZWF0aGVyLWNpdHktY291bnRyeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4jd2VhdGhlci10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDQ1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3dlYXRoZXItdGVtcGVyYXR1cmUtdmFyaWF0aW9ucy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ud2VhdGhlci10ZW1wZXJhdHVyZS1kaXYge1xcbiAgd2lkdGg6IDMzJTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ud2VhdGhlci10ZW1wZXJhdHVyZS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN3ZWF0aGVyLXRlbXBlcmF0dXJlLWZlZWxzLWxpa2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItbWluaW11bS10ZW1wZXJhdHVyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1tYXhpbXVtLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luOiAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN3ZWF0aGVyLWFkZGl0aW9uYWwtcGFyYW1ldGVycy1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3dlYXRoZXItaHVtaWRpdHktZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiN3ZWF0aGVyLWh1bWlkaXR5LWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3dlYXRoZXItaHVtaWRpdHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItcHJlc3N1cmUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiN3ZWF0aGVyLXByZXNzdXJlLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3dlYXRoZXItcHJlc3N1cmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItc3VuLXRpbWVzLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuI3dlYXRoZXItc3VucmlzZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI3dlYXRoZXItc3VucmlzZS1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN3ZWF0aGVyLXN1bnJpc2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItc3Vuc2V0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1zdW5zZXQtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jd2VhdGhlci1zdW5zZXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItcmVzdGFydC1zcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN3ZWF0aGVyLXJlc3RhcnQtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEycHg7XFxuICByaWdodDogMTJweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogVGVtcGVyYXR1cmUgVW5pdHMgU3dpdGNoICovXFxuLnN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOTBweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7ZGlzcGxheTpub25lO31cXG5cXG4uc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYWI5MzQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGxlZnQ6IDRweDtcXG4gIGJvdHRvbTogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcXG4gIHRyYW5zaXRpb246IC40cztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhMjIyMjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1NXB4KTtcXG59XFxuXFxuLyotLS0tLS0gQURERUQgQ1NTIC0tLS0tLS0tLSovXFxuLm9uXFxue1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm9uLCAub2ZmXFxue1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbmlucHV0OmNoZWNrZWQrIC5zbGlkZXIgLm9uXFxue2Rpc3BsYXk6IGJsb2NrO31cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciAub2ZmXFxue2Rpc3BsYXk6IG5vbmU7fVxcblxcbi8qLS0tLS0tLS0tIEVORCAtLS0tLS0tLSovXFxuXFxuLyogUm91bmRlZCBzbGlkZXJzICovXFxuLnNsaWRlci5yb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiAzNHB4O1xcbn1cXG5cXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUNoQjtFQUNFLFdBQVc7RUFDWCw4Q0FBOEM7RUFDOUMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCO1VBQ1E7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsYUFB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O0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBLDZCQUE2QjtBQUM3Qjs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0NBQ0MsY0FBYyxDQUFDOztBQUVoQjtDQUNDLGFBQWEsQ0FBQzs7QUFFZix5QkFBeUI7O0FBRXpCLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQixDQUFDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1haW4gU3R5bGVzICovXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xcbn1cXG5cXG4vKiBIZWFkZXIgU3R5bGluZyAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxufVxcblxcbi8qIFdyYXBwZXIgKi9cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIm1haW5cXFwiO1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNzZWFyY2gtYnV0dG9uIHtcXG4gIGhlaWdodDogNzVweDtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE1haW4gQ29udGVudCBBcmVhICovXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBncmlkLWFyZWE6IG1haW47XFxufVxcblxcbi5mb3JtLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgaGVpZ2h0OiA1MHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbn1cXG5cXG4jbWFpbi1sb2dvIHtcXG4gIHdpZHRoOiA3NXB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1yZXN1bHRzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogNTB2dztcXG4gIG1hcmdpbi1ib3R0b206IDEwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiN3ZWF0aGVyLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI3dlYXRoZXItY2l0eS1jb3VudHJ5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcblxcbiN3ZWF0aGVyLXRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jd2VhdGhlci10ZW1wZXJhdHVyZS12YXJpYXRpb25zLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi53ZWF0aGVyLXRlbXBlcmF0dXJlLWRpdiB7XFxuICB3aWR0aDogMzMlO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi53ZWF0aGVyLXRlbXBlcmF0dXJlLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3dlYXRoZXItdGVtcGVyYXR1cmUtZmVlbHMtbGlrZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1taW5pbXVtLXRlbXBlcmF0dXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luOiAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN3ZWF0aGVyLW1heGltdW0tdGVtcGVyYXR1cmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW46IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItYWRkaXRpb25hbC1wYXJhbWV0ZXJzLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jd2VhdGhlci1odW1pZGl0eS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI3dlYXRoZXItaHVtaWRpdHktaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jd2VhdGhlci1odW1pZGl0eSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1wcmVzc3VyZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI3dlYXRoZXItcHJlc3N1cmUtaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4jd2VhdGhlci1wcmVzc3VyZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1zdW4tdGltZXMtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1zdW5yaXNlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jd2VhdGhlci1zdW5yaXNlLWhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuI3dlYXRoZXItc3VucmlzZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1zdW5zZXQtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiN3ZWF0aGVyLXN1bnNldC1oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDBweDtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbiN3ZWF0aGVyLXN1bnNldCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jd2VhdGhlci1yZXN0YXJ0LXNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3dlYXRoZXItcmVzdGFydC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIHJpZ2h0OiAxMnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBUZW1wZXJhdHVyZSBVbml0cyBTd2l0Y2ggKi9cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAzNHB4O1xcbn1cXG5cXG4uc3dpdGNoIGlucHV0IHtkaXNwbGF5Om5vbmU7fVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhYjkzNDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG4uc2xpZGVyOmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGhlaWdodDogMjZweDtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgbGVmdDogNHB4O1xcbiAgYm90dG9tOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xcbiAgdHJhbnNpdGlvbjogLjRzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2EyMjIyO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTVweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDU1cHgpO1xcbn1cXG5cXG4vKi0tLS0tLSBBRERFRCBDU1MgLS0tLS0tLS0tKi9cXG4ub25cXG57XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub24sIC5vZmZcXG57XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCsgLnNsaWRlciAub25cXG57ZGlzcGxheTogYmxvY2s7fVxcblxcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIC5vZmZcXG57ZGlzcGxheTogbm9uZTt9XFxuXFxuLyotLS0tLS0tLS0gRU5EIC0tLS0tLS0tKi9cXG5cXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cXG4uc2xpZGVyLnJvdW5kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XFxufVxcblxcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTt9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGdlbmVyYXRlRm9ybSA9ICgpID0+IHtcbiAgICAvLyBFbGVtZW50c1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgLy8gRW1wdHkgTWFpbiBDb250YWluZXJcbiAgICBtYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIFxuICAgIC8vIEFwcGVuZCBmb3JtIHdyYXBwZXIgZGl2IHRvIG1haW4gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1XcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS13cmFwcGVyXCIpO1xuICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVdyYXBwZXIpO1xuXG4gICAgLy8gQXBwZW5kIGxvZ28gdG8gd3JhcHBlclxuICAgIGNvbnN0IG1haW5Mb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBtYWluTG9nby5zcmMgPSBcImNsb3VkeS5wbmdcIjtcbiAgICBtYWluTG9nby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tbG9nb1wiKTtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChtYWluTG9nbyk7XG5cbiAgICAvLyBBcHBlbmQgZm9ybSB0byB3cmFwcGVyXG4gICAgY29uc3QgbWFpbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBtYWluRm9ybS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW4tZm9ybVwiKTtcbiAgICBmb3JtV3JhcHBlci5hcHBlbmRDaGlsZChtYWluRm9ybSk7XG5cbiAgICAvLyBBcHBlbmQgaW5wdXQgdG8gZm9ybVxuICAgIGNvbnN0IGZvcm1JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWFyY2gtaW5wdXRcIik7XG4gICAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgYSBjaXR5XCIpO1xuICAgIGZvcm1JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicVwiKTtcbiAgICBmb3JtSW5wdXQuYXV0b2ZvY3VzID0gdHJ1ZTtcbiAgICBtYWluRm9ybS5hcHBlbmRDaGlsZChmb3JtSW5wdXQpO1xuXG4gICAgLy8gQXBwZW5kIGJ1dHRvbiB0byBmb3JtXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlYXJjaC1idXR0b25cIik7XG4gICAgbWFpbkZvcm0uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbik7XG5cbiAgICAvLyBBcHBlbmQgaWNvbiB0byBidXR0b25cbiAgICBjb25zdCBmb3JtQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGZvcm1CdXR0b25JY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmEgZmEtc2VhcmNoXCIpO1xuICAgIGZvcm1CdXR0b24uYXBwZW5kQ2hpbGQoZm9ybUJ1dHRvbkljb24pO1xufVxuXG5jb25zdCBnZW5lcmF0ZVdlYXRoZXJSZXN1bHRzID0gKHdlYXRoZXIpID0+IHtcbiAgICAvLyBFbGVtZW50c1xuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGFpbmVyXCIpO1xuXG4gICAgLy8gRW1wdHkgTWFpbiBDb250YWluZXJcbiAgICBtYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICAvLyBBcHBlbmQgd2VhdGhlciByZXN1bHRzIGRpdiB0byBtYWluIGNvbnRhaW5lclxuICAgIGNvbnN0IHdlYXRoZXJSZXN1bHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyUmVzdWx0cy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItcmVzdWx0c1wiKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJSZXN1bHRzKTtcblxuICAgIC8vIEFwcGVuZCB3ZWF0aGVyIGljb24gdG8gd2VhdGhlciByZXN1bHRzIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyLmljb259QDR4LnBuZ2A7XG4gICAgd2VhdGhlckljb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLWljb25cIik7XG4gICAgd2VhdGhlclJlc3VsdHMuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuXG4gICAgLy8gQXBwZW5kIHdlYXRoZXIgZGVzY3JpcHRpb24gdG8gd2VhdGhlciByZXN1bHRzIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItZGVzY3JpcHRpb25cIik7XG4gICAgbGV0IHdlYXRoZXJEZXNjcmlwdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3ZWF0aGVyLmRlc2NyaXB0aW9uKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uVGV4dCk7XG4gICAgd2VhdGhlclJlc3VsdHMuYXBwZW5kQ2hpbGQod2VhdGhlckRlc2NyaXB0aW9uKTtcblxuICAgIC8vIEFwcGVuZCBjaXR5IHRvIHdlYXRoZXIgcmVzdWx0cyBkaXZcbiAgICBjb25zdCB3ZWF0aGVyQ2l0eUNvdW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWF0aGVyQ2l0eUNvdW50cnkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLWNpdHktY291bnRyeVwiKTtcbiAgICBsZXQgd2VhdGhlckNpdHlDb3VudHJ5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3dlYXRoZXIuY2l0eX0sJHt3ZWF0aGVyLmNvdW50cnl9YCk7XG4gICAgd2VhdGhlckNpdHlDb3VudHJ5LmFwcGVuZENoaWxkKHdlYXRoZXJDaXR5Q291bnRyeVRleHQpO1xuICAgIHdlYXRoZXJSZXN1bHRzLmFwcGVuZENoaWxkKHdlYXRoZXJDaXR5Q291bnRyeSk7XG5cbiAgICAvLyBBcHBlbmQgdGVtcGVyYXR1cmUgdG8gd2VhdGhlciByZXN1bHRzIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHdlYXRoZXJUZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItdGVtcGVyYXR1cmVcIik7XG4gICAgbGV0IHdlYXRoZXJUZW1wZXJhdHVyZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt3ZWF0aGVyLnRlbXBlcmF0dXJlfcKwQ2ApO1xuICAgIHdlYXRoZXJUZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh3ZWF0aGVyVGVtcGVyYXR1cmVUZXh0KTtcbiAgICB3ZWF0aGVyUmVzdWx0cy5hcHBlbmRDaGlsZCh3ZWF0aGVyVGVtcGVyYXR1cmUpO1xuXG4gICAgLy8gQXBwZW5kIHRlbXBlcmF0dXJlIHZhcmlhdGlvbnMgZGl2IHRvIHdlYXRoZXIgcmVzdWx0cyBkaXZcbiAgICBjb25zdCB3ZWF0aGVyVGVtcGVyYXR1cmVWYXJpYXRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyVGVtcGVyYXR1cmVWYXJpYXRpb25zRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci10ZW1wZXJhdHVyZS12YXJpYXRpb25zLWRpdlwiKTtcbiAgICB3ZWF0aGVyUmVzdWx0cy5hcHBlbmRDaGlsZCh3ZWF0aGVyVGVtcGVyYXR1cmVWYXJpYXRpb25zRGl2KTsgICBcblxuICAgIC8vIEFwcGVuZCB0ZW1wZXJhdHVyZSBmZWVscyBsaWtlIGRpdiB0byB0ZW1wZXJhdHVyZSB2YXJpYXRpb25zIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJUZW1wZXJhdHVyZUZlZWxzTGlrZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlclRlbXBlcmF0dXJlRmVlbHNMaWtlRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwid2VhdGhlci10ZW1wZXJhdHVyZS1kaXZcIik7XG4gICAgd2VhdGhlclRlbXBlcmF0dXJlVmFyaWF0aW9uc0Rpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyVGVtcGVyYXR1cmVGZWVsc0xpa2VEaXYpOyAgIFxuXG4gICAgLy8gQXBwZW5kIHRlbXBlcmF0dXJlIGZlZWxzIGxpa2UgaGVhZGVyIHRvIHRlbXBlcmF0dXJlIGZlZWxzIGxpa2UgZGl2XG4gICAgY29uc3Qgd2VhdGhlclRlbXBlcmF0dXJlRmVlbHNMaWtlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VhdGhlclRlbXBlcmF0dXJlRmVlbHNMaWtlSGVhZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwid2VhdGhlci10ZW1wZXJhdHVyZS1oZWFkZXJcIik7XG4gICAgbGV0IHdlYXRoZXJUZW1wZXJhdHVyZUZlZWxzTGlrZUhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgRmVlbHMgbGlrZTpgKTtcbiAgICB3ZWF0aGVyVGVtcGVyYXR1cmVGZWVsc0xpa2VIZWFkZXIuYXBwZW5kQ2hpbGQod2VhdGhlclRlbXBlcmF0dXJlRmVlbHNMaWtlSGVhZGVyVGV4dCk7XG4gICAgd2VhdGhlclRlbXBlcmF0dXJlRmVlbHNMaWtlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJUZW1wZXJhdHVyZUZlZWxzTGlrZUhlYWRlcik7IFxuXG4gICAgLy8gQXBwZW5kIHRlbXBlcmF0dXJlIGZlZWxzIGxpa2UgdG8gdGVtcGVyYXR1cmUgZmVlbHMgbGlrZSBkaXZcbiAgICBjb25zdCB3ZWF0aGVyVGVtcGVyYXR1cmVGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWF0aGVyVGVtcGVyYXR1cmVGZWVsc0xpa2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLXRlbXBlcmF0dXJlLWZlZWxzLWxpa2VcIik7XG4gICAgbGV0IHdlYXRoZXJUZW1wZXJhdHVyZUZlZWxzTGlrZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt3ZWF0aGVyLmZlZWxzTGlrZX3CsENgKTtcbiAgICB3ZWF0aGVyVGVtcGVyYXR1cmVGZWVsc0xpa2UuYXBwZW5kQ2hpbGQod2VhdGhlclRlbXBlcmF0dXJlRmVlbHNMaWtlVGV4dCk7XG4gICAgd2VhdGhlclRlbXBlcmF0dXJlRmVlbHNMaWtlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJUZW1wZXJhdHVyZUZlZWxzTGlrZSk7ICAgXG4gICAgXG4gICAgLy8gQXBwZW5kIG1pbmltdW0gdGVtcGVyYXR1cmUgZGl2IHRvIHRlbXBlcmF0dXJlIHZhcmlhdGlvbnMgZGl2XG4gICAgY29uc3Qgd2VhdGhlck1pbmltdW1UZW1wZXJhdHVyZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlck1pbmltdW1UZW1wZXJhdHVyZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIndlYXRoZXItdGVtcGVyYXR1cmUtZGl2XCIpO1xuICAgIHdlYXRoZXJUZW1wZXJhdHVyZVZhcmlhdGlvbnNEaXYuYXBwZW5kQ2hpbGQod2VhdGhlck1pbmltdW1UZW1wZXJhdHVyZURpdik7ICAgXG5cbiAgICAvLyBBcHBlbmQgbWluaW11bSB0ZW1wZXJhdHVyZSBoZWFkZXIgdG8gbWluaW11bSB0ZW1wZXJhdHVyZSBkaXZcbiAgICBjb25zdCB3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VhdGhlck1pbmltdW1UZW1wZXJhdHVyZUhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIndlYXRoZXItdGVtcGVyYXR1cmUtaGVhZGVyXCIpO1xuICAgIGxldCB3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBNaW46YCk7XG4gICAgd2VhdGhlck1pbmltdW1UZW1wZXJhdHVyZUhlYWRlci5hcHBlbmRDaGlsZCh3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlSGVhZGVyVGV4dCk7XG4gICAgd2VhdGhlck1pbmltdW1UZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlSGVhZGVyKTsgXG5cbiAgICAvLyBBcHBlbmQgbWluaW11bSB0ZW1wZXJhdHVyZSB0byBtaW5pbXVtIHRlbXBlcmF0dXJlIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJNaW5pbXVtVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1taW5pbXVtLXRlbXBlcmF0dXJlXCIpO1xuICAgIGxldCB3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3dlYXRoZXIubWluVGVtcH3CsENgKTtcbiAgICB3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlLmFwcGVuZENoaWxkKHdlYXRoZXJNaW5pbXVtVGVtcGVyYXR1cmVUZXh0KTtcbiAgICB3ZWF0aGVyTWluaW11bVRlbXBlcmF0dXJlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJNaW5pbXVtVGVtcGVyYXR1cmUpOyAgICBcblxuICAgIC8vIEFwcGVuZCBtYXhpbXVtIHRlbXBlcmF0dXJlIGRpdiB0byB0ZW1wZXJhdHVyZSB2YXJpYXRpb25zIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJNYXhpbXVtVGVtcGVyYXR1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJNYXhpbXVtVGVtcGVyYXR1cmVEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3ZWF0aGVyLXRlbXBlcmF0dXJlLWRpdlwiKTtcbiAgICB3ZWF0aGVyVGVtcGVyYXR1cmVWYXJpYXRpb25zRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJNYXhpbXVtVGVtcGVyYXR1cmVEaXYpOyAgIFxuXG4gICAgLy8gQXBwZW5kIG1heGltdW0gdGVtcGVyYXR1cmUgaGVhZGVyIHRvIG1heGltdW0gdGVtcGVyYXR1cmUgZGl2XG4gICAgY29uc3Qgd2VhdGhlck1heGltdW1UZW1wZXJhdHVyZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHdlYXRoZXJNYXhpbXVtVGVtcGVyYXR1cmVIZWFkZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ3ZWF0aGVyLXRlbXBlcmF0dXJlLWhlYWRlclwiKTtcbiAgICBsZXQgd2VhdGhlck1heGltdW1UZW1wZXJhdHVyZUhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgTWF4OmApO1xuICAgIHdlYXRoZXJNYXhpbXVtVGVtcGVyYXR1cmVIZWFkZXIuYXBwZW5kQ2hpbGQod2VhdGhlck1heGltdW1UZW1wZXJhdHVyZUhlYWRlclRleHQpO1xuICAgIHdlYXRoZXJNYXhpbXVtVGVtcGVyYXR1cmVEaXYuYXBwZW5kQ2hpbGQod2VhdGhlck1heGltdW1UZW1wZXJhdHVyZUhlYWRlcik7IFxuXG4gICAgLy8gQXBwZW5kIG1heGltdW0gdGVtcGVyYXR1cmUgdG8gbWF4aW11bSB0ZW1wZXJhdHVyZSBkaXZcbiAgICBjb25zdCB3ZWF0aGVyTWF4aW11bVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VhdGhlck1heGltdW1UZW1wZXJhdHVyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItbWF4aW11bS10ZW1wZXJhdHVyZVwiKTtcbiAgICBsZXQgd2VhdGhlck1heGltdW1UZW1wZXJhdHVyZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt3ZWF0aGVyLm1heFRlbXB9wrBDYCk7XG4gICAgd2VhdGhlck1heGltdW1UZW1wZXJhdHVyZS5hcHBlbmRDaGlsZCh3ZWF0aGVyTWF4aW11bVRlbXBlcmF0dXJlVGV4dCk7XG4gICAgd2VhdGhlck1heGltdW1UZW1wZXJhdHVyZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyTWF4aW11bVRlbXBlcmF0dXJlKTsgICBcbiAgICBcbiAgICAvLyBBcHBlbmQgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGRpdiB0byB3ZWF0aGVyIHJlc3VsdHMgZGl2XG4gICAgY29uc3Qgd2VhdGhlckFkZGl0aW9uYWxQYXJhbWV0ZXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyQWRkaXRpb25hbFBhcmFtZXRlcnNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLWFkZGl0aW9uYWwtcGFyYW1ldGVycy1kaXZcIik7XG4gICAgd2VhdGhlclJlc3VsdHMuYXBwZW5kQ2hpbGQod2VhdGhlckFkZGl0aW9uYWxQYXJhbWV0ZXJzRGl2KTsgICBcblxuICAgIC8vIEFwcGVuZCBodW1pZGl0eSBkaXYgdG8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJIdW1pZGl0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VhdGhlckh1bWlkaXR5RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1odW1pZGl0eS1kaXZcIik7XG4gICAgd2VhdGhlckFkZGl0aW9uYWxQYXJhbWV0ZXJzRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJIdW1pZGl0eURpdik7ICAgXG5cbiAgICAvLyBBcHBlbmQgaHVtaWRpdHkgaGVhZGVyIHRvIGh1bWlkaXR5IGRpdlxuICAgIGNvbnN0IHdlYXRoZXJIdW1pZGl0eUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHdlYXRoZXJIdW1pZGl0eUhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItaHVtaWRpdHktaGVhZGVyXCIpO1xuICAgIGxldCB3ZWF0aGVySHVtaWRpdHlIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYEh1bWlkaXR5OmApO1xuICAgIHdlYXRoZXJIdW1pZGl0eUhlYWRlci5hcHBlbmRDaGlsZCh3ZWF0aGVySHVtaWRpdHlIZWFkZXJUZXh0KTtcbiAgICB3ZWF0aGVySHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckh1bWlkaXR5SGVhZGVyKTsgXG5cbiAgICAvLyBBcHBlbmQgaHVtaWRpdHkgdG8gaHVtaWRpdHkgZGl2XG4gICAgY29uc3Qgd2VhdGhlckh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VhdGhlckh1bWlkaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1odW1pZGl0eVwiKTtcbiAgICBsZXQgd2VhdGhlckh1bWlkaXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3dlYXRoZXIuaHVtaWRpdHl9JWApO1xuICAgIHdlYXRoZXJIdW1pZGl0eS5hcHBlbmRDaGlsZCh3ZWF0aGVySHVtaWRpdHlUZXh0KTtcbiAgICB3ZWF0aGVySHVtaWRpdHlEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckh1bWlkaXR5KTsgICAgXG5cbiAgICAvLyBBcHBlbmQgcHJlc3N1cmUgZGl2IHRvIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBkaXZcbiAgICBjb25zdCB3ZWF0aGVyUHJlc3N1cmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJQcmVzc3VyZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItcHJlc3N1cmUtZGl2XCIpO1xuICAgIHdlYXRoZXJBZGRpdGlvbmFsUGFyYW1ldGVyc0Rpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyUHJlc3N1cmVEaXYpOyAgIFxuXG4gICAgLy8gQXBwZW5kIHByZXNzdXJlIGhlYWRlciB0byBwcmVzc3VyZSBkaXZcbiAgICBjb25zdCB3ZWF0aGVyUHJlc3N1cmVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWF0aGVyUHJlc3N1cmVIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLXByZXNzdXJlLWhlYWRlclwiKTtcbiAgICBsZXQgd2VhdGhlclByZXNzdXJlSGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBQcmVzc3VyZTpgKTtcbiAgICB3ZWF0aGVyUHJlc3N1cmVIZWFkZXIuYXBwZW5kQ2hpbGQod2VhdGhlclByZXNzdXJlSGVhZGVyVGV4dCk7XG4gICAgd2VhdGhlclByZXNzdXJlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJQcmVzc3VyZUhlYWRlcik7IFxuXG4gICAgLy8gQXBwZW5kIHByZXNzdXJlIHRvIHByZXNzdXJlIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJQcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHdlYXRoZXJQcmVzc3VyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItcHJlc3N1cmVcIik7XG4gICAgbGV0IHdlYXRoZXJQcmVzc3VyZVRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHt3ZWF0aGVyLnByZXNzdXJlfW1iYCk7XG4gICAgd2VhdGhlclByZXNzdXJlLmFwcGVuZENoaWxkKHdlYXRoZXJQcmVzc3VyZVRleHQpO1xuICAgIHdlYXRoZXJQcmVzc3VyZURpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyUHJlc3N1cmUpOyAgXG5cbiAgICAvLyBBcHBlbmQgc3VuIHRpbWVzIGRpdiB0byB3ZWF0aGVyIHJlc3VsdHMgZGl2XG4gICAgY29uc3Qgd2VhdGhlclN1blRpbWVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyU3VuVGltZXNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLXN1bi10aW1lcy1kaXZcIik7XG4gICAgd2VhdGhlclJlc3VsdHMuYXBwZW5kQ2hpbGQod2VhdGhlclN1blRpbWVzRGl2KTsgICBcbiAgICBcbiAgICAvLyBBcHBlbmQgc3VucmlzZSBkaXYgdG8gc3VuIHRpbWVzIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJTdW5yaXNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyU3VucmlzZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItc3VucmlzZS1kaXZcIik7XG4gICAgd2VhdGhlclN1blRpbWVzRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJTdW5yaXNlRGl2KTsgICBcblxuICAgIC8vIEFwcGVuZCBzdW5yaXNlIGhlYWRlciB0byBzdW5yaXNlIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJTdW5yaXNlSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VhdGhlclN1bnJpc2VIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLXN1bnJpc2UtaGVhZGVyXCIpO1xuICAgIGxldCB3ZWF0aGVyU3VucmlzZUhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgU3VucmlzZTpgKTtcbiAgICB3ZWF0aGVyU3VucmlzZUhlYWRlci5hcHBlbmRDaGlsZCh3ZWF0aGVyU3VucmlzZUhlYWRlclRleHQpO1xuICAgIHdlYXRoZXJTdW5yaXNlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJTdW5yaXNlSGVhZGVyKTsgXG5cbiAgICAvLyBBcHBlbmQgc3VucmlzZSB0byBzdW5yaXNlIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJTdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VhdGhlclN1bnJpc2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLXN1bnJpc2VcIik7XG4gICAgbGV0IHdlYXRoZXJTdW5yaXNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3dlYXRoZXIuc3VucmlzZX0gQU1gKTtcbiAgICB3ZWF0aGVyU3VucmlzZS5hcHBlbmRDaGlsZCh3ZWF0aGVyU3VucmlzZVRleHQpO1xuICAgIHdlYXRoZXJTdW5yaXNlRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJTdW5yaXNlKTsgIFxuXG4gICAgLy8gQXBwZW5kIHN1bnNldCBkaXYgdG8gc3VuIHRpbWVzIGRpdlxuICAgIGNvbnN0IHdlYXRoZXJTdW5zZXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlYXRoZXJTdW5zZXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLXN1bnNldC1kaXZcIik7XG4gICAgd2VhdGhlclN1blRpbWVzRGl2LmFwcGVuZENoaWxkKHdlYXRoZXJTdW5zZXREaXYpOyAgIFxuXG4gICAgLy8gQXBwZW5kIHN1bnNldCBoZWFkZXIgdG8gc3Vuc2V0IGRpdlxuICAgIGNvbnN0IHdlYXRoZXJTdW5zZXRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWF0aGVyU3Vuc2V0SGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1zdW5zZXQtaGVhZGVyXCIpO1xuICAgIGxldCB3ZWF0aGVyU3Vuc2V0SGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBTdW5zZXQ6YCk7XG4gICAgd2VhdGhlclN1bnNldEhlYWRlci5hcHBlbmRDaGlsZCh3ZWF0aGVyU3Vuc2V0SGVhZGVyVGV4dCk7XG4gICAgd2VhdGhlclN1bnNldERpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyU3Vuc2V0SGVhZGVyKTsgXG5cbiAgICAvLyBBcHBlbmQgc3Vuc2V0IHRvIHN1bnNldCBkaXZcbiAgICBjb25zdCB3ZWF0aGVyU3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VhdGhlclN1bnNldC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIndlYXRoZXItc3Vuc2V0XCIpO1xuICAgIGxldCB3ZWF0aGVyU3Vuc2V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3dlYXRoZXIuc3Vuc2V0fSBQTWApO1xuICAgIHdlYXRoZXJTdW5zZXQuYXBwZW5kQ2hpbGQod2VhdGhlclN1bnNldFRleHQpO1xuICAgIHdlYXRoZXJTdW5zZXREaXYuYXBwZW5kQ2hpbGQod2VhdGhlclN1bnNldCk7ICBcblxuICAgIC8vIEFwcGVuZCB3ZWF0aGVyIHVuaXRzIHN3aXRjaCBsYWJlbCB0byB3ZWF0aGVyIHJlc3VsdHMgZGl2XG4gICAgY29uc3Qgd2VhdGhlclVuaXRzU3dpdGNoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgd2VhdGhlclVuaXRzU3dpdGNoTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzd2l0Y2hcIik7XG4gICAgd2VhdGhlclJlc3VsdHMuYXBwZW5kQ2hpbGQod2VhdGhlclVuaXRzU3dpdGNoTGFiZWwpOyAgXG5cbiAgICAvLyBBcHBlbmQgd2VhdGhlciB1bml0cyBzd2l0Y2ggaW5wdXQgdG8gd2VhdGhlciB1bml0cyBzd2l0Y2ggbGFiZWxcbiAgICBjb25zdCB3ZWF0aGVyVW5pdHNTd2l0Y2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB3ZWF0aGVyVW5pdHNTd2l0Y2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgd2VhdGhlclVuaXRzU3dpdGNoSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2didG5cIik7XG4gICAgd2VhdGhlclVuaXRzU3dpdGNoTGFiZWwuYXBwZW5kQ2hpbGQod2VhdGhlclVuaXRzU3dpdGNoSW5wdXQpOyAgXG5cbiAgICAvLyBBcHBlbmQgd2VhdGhlciB1bml0cyBzd2l0Y2ggZGl2IHRvIHdlYXRoZXIgdW5pdHMgc3dpdGNoIGxhYmVsXG4gICAgY29uc3Qgd2VhdGhlclVuaXRzU3dpdGNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVyVW5pdHNTd2l0Y2hEaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzbGlkZXIgcm91bmRcIik7XG4gICAgd2VhdGhlclVuaXRzU3dpdGNoTGFiZWwuYXBwZW5kQ2hpbGQod2VhdGhlclVuaXRzU3dpdGNoRGl2KTsgIFxuXG4gICAgLy8gQXBwZW5kIHdlYXRoZXIgdW5pdHMgb24gc3dpdGNoIHNwYW4gdG8gd2VhdGhlciB1bml0cyBzd2l0Y2ggZGl2XG4gICAgY29uc3Qgd2VhdGhlclVuaXRzU3dpdGNoQ2VsY2l1c1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgd2VhdGhlclVuaXRzU3dpdGNoQ2VsY2l1c1NwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCLCsENcIik7XG4gICAgd2VhdGhlclVuaXRzU3dpdGNoQ2VsY2l1c1NwYW4uYXBwZW5kQ2hpbGQod2VhdGhlclVuaXRzU3dpdGNoQ2VsY2l1c1NwYW5UZXh0KTtcbiAgICB3ZWF0aGVyVW5pdHNTd2l0Y2hDZWxjaXVzU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9mZlwiKTtcbiAgICB3ZWF0aGVyVW5pdHNTd2l0Y2hEaXYuYXBwZW5kQ2hpbGQod2VhdGhlclVuaXRzU3dpdGNoQ2VsY2l1c1NwYW4pOyBcblxuICAgIC8vIEFwcGVuZCB3ZWF0aGVyIHVuaXRzIG9mZiBzd2l0Y2ggc3BhbiB0byB3ZWF0aGVyIHVuaXRzIHN3aXRjaCBkaXZcbiAgICBjb25zdCB3ZWF0aGVyVW5pdHNTd2l0Y2hGYXJlbmhlaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbGV0IHdlYXRoZXJVbml0c1N3aXRjaEZhcmVuaGVpdFNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCLCsEZcIik7XG4gICAgd2VhdGhlclVuaXRzU3dpdGNoRmFyZW5oZWl0U3Bhbi5hcHBlbmRDaGlsZCh3ZWF0aGVyVW5pdHNTd2l0Y2hGYXJlbmhlaXRTcGFuVGV4dCk7XG4gICAgd2VhdGhlclVuaXRzU3dpdGNoRmFyZW5oZWl0U3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9uXCIpO1xuICAgIHdlYXRoZXJVbml0c1N3aXRjaERpdi5hcHBlbmRDaGlsZCh3ZWF0aGVyVW5pdHNTd2l0Y2hGYXJlbmhlaXRTcGFuKTsgXG5cbiAgICAvLyBBcHBlbmQgcmVzdGFydCBzcGFuIHRvIHdlYXRoZXIgcmVzdWx0cyBkaXZcbiAgICBjb25zdCB3ZWF0aGVyUmVzdGFydFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB3ZWF0aGVyUmVzdGFydFNwYW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3ZWF0aGVyLXJlc3RhcnQtc3BhblwiKTtcbiAgICB3ZWF0aGVyUmVzdGFydFNwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdlbmVyYXRlRm9ybSk7IFxuICAgIHdlYXRoZXJSZXN1bHRzLmFwcGVuZENoaWxkKHdlYXRoZXJSZXN0YXJ0U3Bhbik7XG5cbiAgICAvLyBBcHBlbmQgcmVzdGFydCBpY29uIHRvIHJlc3RhcnQgc3BhblxuICAgIGNvbnN0IHdlYXRoZXJSZXN0YXJ0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIHdlYXRoZXJSZXN0YXJ0SWNvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZhIGZhLXJlZnJlc2hcIik7XG4gICAgd2VhdGhlclJlc3RhcnRJY29uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2VhdGhlci1yZXN0YXJ0LWljb25cIik7XG4gICAgd2VhdGhlclJlc3RhcnRJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZW5lcmF0ZUZvcm0pOyBcbiAgICB3ZWF0aGVyUmVzdWx0cy5hcHBlbmRDaGlsZCh3ZWF0aGVyUmVzdGFydEljb24pOyBcbn1cblxuLy8gTW9kdWxlIEV4cG9ydHNcbmV4cG9ydCB7XG4gICAgZ2VuZXJhdGVGb3JtLFxuICAgIGdlbmVyYXRlV2VhdGhlclJlc3VsdHMsXG59OyIsIi8vIE1vZHVsZSBJbXBvcnRzXG5pbXBvcnQge1xuICAgIGdlbmVyYXRlRm9ybSxcbiAgICBnZW5lcmF0ZVdlYXRoZXJSZXN1bHRzXG59IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG4vLyBJbml0XG5nZW5lcmF0ZUZvcm0oKTtcblxuLy8gRWxlbWVudHNcbmNvbnN0IHNlYXJjaExvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcbmNvbnN0IHNlYXJjaExvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtYnV0dG9uXCIpO1xuXG4vLyBFdmVudCBMaXN0ZW5lclxuc2VhcmNoTG9jYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmV3V2VhdGhlclJlcXVlc3Qoc2VhcmNoTG9jYXRpb25JbnB1dC52YWx1ZSk7XG59KTtcblxuLy8gUXVlcnkgV2VhdGhlciBBUElcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEobG9jYXRpb24pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPWVmYmM0NjY0Zjc4Yjg3YTQ1M2M1YTliN2VkOTUzZDk3YCwge21vZGU6ICdjb3JzJ30pXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGFsZXJ0KGVycik7XG4gICAgfVxufVxuXG4vLyBQcm9jZXNzIEpTT04gV2VhdGhlciBEYXRhXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcblxuICAgIC8vIENyZWF0ZSBXZWF0aGVyIE9iamVjdFxuICAgIGxldCB3ZWF0aGVyID0ge1xuICAgICAgICB0ZW1wZXJhdHVyZTogd2VhdGhlckRhdGEubWFpbi50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IHdlYXRoZXJEYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICAgIHByZXNzdXJlOiB3ZWF0aGVyRGF0YS5tYWluLnByZXNzdXJlLFxuICAgICAgICBtaW5UZW1wOiB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWluLFxuICAgICAgICBtYXhUZW1wOiB3ZWF0aGVyRGF0YS5tYWluLnRlbXBfbWF4LFxuICAgICAgICBjbG91ZHM6IHdlYXRoZXJEYXRhLmNsb3Vkcy5hbGwsXG4gICAgICAgIGNpdHk6IHdlYXRoZXJEYXRhLm5hbWUsXG4gICAgICAgIGNvdW50cnk6IHdlYXRoZXJEYXRhLnN5cy5jb3VudHJ5LFxuICAgICAgICBzdW5yaXNlOiB3ZWF0aGVyRGF0YS5zeXMuc3VucmlzZSxcbiAgICAgICAgc3Vuc2V0OiB3ZWF0aGVyRGF0YS5zeXMuc3Vuc2V0LFxuICAgICAgICBkZXNjcmlwdGlvbjogd2VhdGhlckRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgaWNvbjogd2VhdGhlckRhdGEud2VhdGhlclswXS5pY29uLFxuICAgICAgICB3aW5kRGlyZWN0aW9uOiB3ZWF0aGVyRGF0YS53aW5kLmRlZyxcbiAgICAgICAgd2luZFNwZWVkOiB3ZWF0aGVyRGF0YS53aW5kLnNwZWVkXG4gICAgfTtcblxuICAgIC8vIENvbnZlcnQgdGVtcGVyYXR1cmUgdmFsdWVzIGZyb20gS2VsdmluIHRvIENlbGNpdXNcbiAgICB3ZWF0aGVyLnRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZCgod2VhdGhlci50ZW1wZXJhdHVyZSAtIDI3My4xNSkqMTApLzEwO1xuICAgIHdlYXRoZXIuZmVlbHNMaWtlID0gTWF0aC5yb3VuZCgod2VhdGhlci5mZWVsc0xpa2UgLSAyNzMuMTUpKjEwKS8xMDtcbiAgICB3ZWF0aGVyLm1pblRlbXAgPSBNYXRoLnJvdW5kKCh3ZWF0aGVyLm1pblRlbXAgLSAyNzMuMTUpKjEwKS8xMDtcbiAgICB3ZWF0aGVyLm1heFRlbXAgPSBNYXRoLnJvdW5kKCh3ZWF0aGVyLm1heFRlbXAgLSAyNzMuMTUpKjEwKS8xMDtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgc3VucmlzZSBVTklYIHRpbWVzdGFtcCB0byAyNGhcbiAgICBsZXQgc3VucmlzZVRpbWVzdGFtcCA9IHdlYXRoZXIuc3VucmlzZTtcbiAgICBsZXQgc3VucmlzZURhdGUgPSBuZXcgRGF0ZShzdW5yaXNlVGltZXN0YW1wICogMTAwMCk7XG4gICAgbGV0IHN1bnJpc2VIb3VycyA9IHN1bnJpc2VEYXRlLmdldEhvdXJzKCk7XG4gICAgbGV0IHN1bnJpc2VNaW51dGVzID0gXCIwXCIgKyBzdW5yaXNlRGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHN1bnJpc2VGb3JtYXR0ZWRUaW1lID0gc3VucmlzZUhvdXJzICsgJzonICsgc3VucmlzZU1pbnV0ZXMuc3Vic3RyKC0yKTtcbiAgICB3ZWF0aGVyLnN1bnJpc2UgPSBzdW5yaXNlRm9ybWF0dGVkVGltZTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgc3Vuc2V0IFVOSVggdGltZXN0YW1wIHRvIDI0aFxuICAgIGxldCBzdW5zZXRUaW1lc3RhbXAgPSB3ZWF0aGVyLnN1bnNldDtcbiAgICBsZXQgc3Vuc2V0RGF0ZSA9IG5ldyBEYXRlKHN1bnNldFRpbWVzdGFtcCAqIDEwMDApO1xuICAgIGxldCBzdW5zZXRIb3VycyA9IHN1bnNldERhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgc3Vuc2V0TWludXRlcyA9IFwiMFwiICsgc3Vuc2V0RGF0ZS5nZXRNaW51dGVzKCk7XG4gICAgbGV0IHN1bnNldEZvcm1hdHRlZFRpbWUgPSBzdW5zZXRIb3VycyArICc6JyArIHN1bnNldE1pbnV0ZXMuc3Vic3RyKC0yKTtcbiAgICB3ZWF0aGVyLnN1bnNldCA9IHN1bnNldEZvcm1hdHRlZFRpbWU7XG5cbiAgICByZXR1cm4gd2VhdGhlcjtcbn1cblxuLy8gUmVxdWVzdCBIYW5kbGVyXG5hc3luYyBmdW5jdGlvbiBuZXdXZWF0aGVyUmVxdWVzdChsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiAhPT0gJycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFSZXF1ZXN0ID0gYXdhaXQgZ2V0RGF0YShsb2NhdGlvbik7ICAgIC8vIEdldCBkYXRhIGZyb20gQVBJXG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgcHJvY2Vzc1dlYXRoZXJEYXRhKGRhdGFSZXF1ZXN0KTsgICAgLy8gUHJvY2VzcyBkYXRhXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSBwYWdlIC0gUGFzcyB3ZWF0aGVyIHZhcmlhYmxlIHRvIERPTSBnZW5lcmF0ZVdlYXRoZXJSZXN1bHRzIGZ1bmN0aW9uXG4gICAgICAgICAgICBnZW5lcmF0ZVdlYXRoZXJSZXN1bHRzKHdlYXRoZXIpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1vZHVsZSBFeHBvcnRzXG5leHBvcnQge1xuICAgIFxufTtcblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==