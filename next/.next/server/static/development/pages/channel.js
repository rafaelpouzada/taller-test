module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/to-primitive.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/to-primitive.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/to-primitive */ "core-js/library/fn/symbol/to-primitive");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/channel.js":
/*!**************************!*\
  !*** ./pages/channel.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_components_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/components/App */ "grommet/components/App");
/* harmony import */ var grommet_components_App__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_components_App__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet/components/icons/base/Chat */ "grommet/components/icons/base/Chat");
/* harmony import */ var grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet_components_icons_base_Refresh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet/components/icons/base/Refresh */ "grommet/components/icons/base/Refresh");
/* harmony import */ var grommet_components_icons_base_Refresh__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet_components_icons_base_Refresh__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet_components_icons_base_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet/components/icons/base/Add */ "grommet/components/icons/base/Add");
/* harmony import */ var grommet_components_icons_base_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet_components_icons_base_Add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var grommet_components_icons_base_User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet/components/icons/base/User */ "grommet/components/icons/base/User");
/* harmony import */ var grommet_components_icons_base_User__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(grommet_components_icons_base_User__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var grommet_components_icons_base_Logout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet/components/icons/base/Logout */ "grommet/components/icons/base/Logout");
/* harmony import */ var grommet_components_icons_base_Logout__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(grommet_components_icons_base_Logout__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var grommet_components_Split__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet/components/Split */ "grommet/components/Split");
/* harmony import */ var grommet_components_Split__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Split__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var grommet_components_Sidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet/components/Sidebar */ "grommet/components/Sidebar");
/* harmony import */ var grommet_components_Sidebar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Sidebar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var grommet_components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! grommet/components/Header */ "grommet/components/Header");
/* harmony import */ var grommet_components_Header__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Header__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! grommet/components/Footer */ "grommet/components/Footer");
/* harmony import */ var grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var grommet_components_Title__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! grommet/components/Title */ "grommet/components/Title");
/* harmony import */ var grommet_components_Title__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Title__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! grommet/components/Box */ "grommet/components/Box");
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Box__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var grommet_components_Menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! grommet/components/Menu */ "grommet/components/Menu");
/* harmony import */ var grommet_components_Menu__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Menu__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var grommet_components_Anchor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! grommet/components/Anchor */ "grommet/components/Anchor");
/* harmony import */ var grommet_components_Anchor__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Anchor__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var grommet_components_Button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! grommet/components/Button */ "grommet/components/Button");
/* harmony import */ var grommet_components_Button__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Button__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var grommet_components_Paragraph__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! grommet/components/Paragraph */ "grommet/components/Paragraph");
/* harmony import */ var grommet_components_Paragraph__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Paragraph__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var grommet_components_Label__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! grommet/components/Label */ "grommet/components/Label");
/* harmony import */ var grommet_components_Label__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Label__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _src_lib_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/lib/bootstrap */ "./src/lib/bootstrap.js");
/* harmony import */ var _src_modules_form_components_TextInput__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/modules/form/components/TextInput */ "./src/modules/form/components/TextInput.js");
/* harmony import */ var _src_modules_auth_containers_CurrentUserContainer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/modules/auth/containers/CurrentUserContainer */ "./src/modules/auth/containers/CurrentUserContainer.js");
/* harmony import */ var _src_modules_channel_containers_ChannelsContainer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/modules/channel/containers/ChannelsContainer */ "./src/modules/channel/containers/ChannelsContainer.js");
/* harmony import */ var _src_modules_channel_containers_MessagesContainer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../src/modules/channel/containers/MessagesContainer */ "./src/modules/channel/containers/MessagesContainer.js");
/* harmony import */ var _src_modules_channel_containers_NewMessageContainer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../src/modules/channel/containers/NewMessageContainer */ "./src/modules/channel/containers/NewMessageContainer.js");
/* harmony import */ var _src_modules_channel_containers_NewChannelContainer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../src/modules/channel/containers/NewChannelContainer */ "./src/modules/channel/containers/NewChannelContainer.js");


var _jsxFileName = "/drupal/app/next/pages/channel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * This is the page rendered when inside a chat room.
 */
























const StyledRoomHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(grommet_components_Header__WEBPACK_IMPORTED_MODULE_13___default.a).withConfig({
  displayName: "channel__StyledRoomHeader",
  componentId: "sc-1g5qepo-0"
})(["border-bottom:1px solid #ddd;"]);
const StyledMessage = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(grommet_components_Paragraph__WEBPACK_IMPORTED_MODULE_20___default.a).withConfig({
  displayName: "channel__StyledMessage",
  componentId: "sc-1g5qepo-1"
})(["margin:0;"]);
const StyledAuthor = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(grommet_components_Label__WEBPACK_IMPORTED_MODULE_21___default.a).withConfig({
  displayName: "channel__StyledAuthor",
  componentId: "sc-1g5qepo-2"
})(["margin:0;"]);
const StyledTextInput = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_src_modules_form_components_TextInput__WEBPACK_IMPORTED_MODULE_23__["default"]).withConfig({
  displayName: "channel__StyledTextInput",
  componentId: "sc-1g5qepo-3"
})(["width:100%;"]);
const AddChannelButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(grommet_components_Button__WEBPACK_IMPORTED_MODULE_19___default.a).withConfig({
  displayName: "channel__AddChannelButton",
  componentId: "sc-1g5qepo-4"
})(["margin-left:auto;"]);

const LoadingComponent = () => __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
  full: "vertical",
  justify: "center",
  align: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_4__["HashLoader"], {
  color: "#e02438",
  loading: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}));







const ChatRoom = ({
  url,
  url: {
    query: {
      channel = 'general'
    }
  }
}) => __jsx(_src_modules_auth_containers_CurrentUserContainer__WEBPACK_IMPORTED_MODULE_24__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, ({
  user
}) => __jsx(_src_modules_channel_containers_ChannelsContainer__WEBPACK_IMPORTED_MODULE_25__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, ({
  loading,
  channels
}) => loading && !channels.length ? __jsx(LoadingComponent, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}) : __jsx(grommet_components_App__WEBPACK_IMPORTED_MODULE_5___default.a, {
  centered: false,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx(grommet_components_Split__WEBPACK_IMPORTED_MODULE_11___default.a, {
  fixed: true,
  flex: "right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx(grommet_components_Sidebar__WEBPACK_IMPORTED_MODULE_12___default.a, {
  colorIndex: "neutral-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(grommet_components_Header__WEBPACK_IMPORTED_MODULE_13___default.a, {
  pad: "medium",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx(grommet_components_Title__WEBPACK_IMPORTED_MODULE_15___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, "TallerChat ", __jsx(grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_6___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
})), __jsx(_src_modules_channel_containers_NewChannelContainer__WEBPACK_IMPORTED_MODULE_28__["default"], {
  channels: channels,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, create => __jsx(AddChannelButton, {
  icon: __jsx(grommet_components_icons_base_Add__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }),
  onClick: () => create(window.prompt('Name your new channel')),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}))), __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
  flex: "grow",
  justify: "start",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx(grommet_components_Menu__WEBPACK_IMPORTED_MODULE_17___default.a, {
  primary: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, channels.map(({
  name
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  key: name,
  prefetch: true,
  href: `/messages/${name}`,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx(grommet_components_Anchor__WEBPACK_IMPORTED_MODULE_18___default.a, {
  className: channel === name ? 'active' : '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, "# ", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, name)))))), __jsx(grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14___default.a, {
  pad: "medium",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, __jsx(grommet_components_Button__WEBPACK_IMPORTED_MODULE_19___default.a, {
  icon: __jsx(grommet_components_icons_base_User__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }),
  onClick: console.log,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}), __jsx(grommet_components_Button__WEBPACK_IMPORTED_MODULE_19___default.a, {
  icon: __jsx(grommet_components_icons_base_Logout__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }),
  onClick: console.log,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}))), !user || !user.uid ? __jsx(LoadingComponent, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}) : __jsx(_src_modules_channel_containers_MessagesContainer__WEBPACK_IMPORTED_MODULE_26__["default"], {
  channel: channels.find(({
    name
  }) => name === channel),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, ({
  loading,
  refetch,
  messages
}) => __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
  full: "vertical",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx(StyledRoomHeader, {
  pad: {
    vertical: 'small',
    horizontal: 'medium'
  },
  justify: "between",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, __jsx(grommet_components_Title__WEBPACK_IMPORTED_MODULE_15___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, '#' + channel), __jsx(grommet_components_Button__WEBPACK_IMPORTED_MODULE_19___default.a, {
  icon: __jsx(grommet_components_icons_base_Refresh__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }),
  onClick: () => refetch(),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
})), __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
  pad: "medium",
  flex: "grow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, loading ? 'Loading...' : messages.length === 0 ? 'No one talking here yet :(' : messages.map(({
  id,
  author,
  message
}) => __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
  key: id,
  pad: "small",
  credit: author,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, __jsx(StyledAuthor, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, author), __jsx(StyledMessage, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, message)))), __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_16___default.a, {
  pad: "medium",
  direction: "column",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, user && user.uid ? __jsx(_src_modules_channel_containers_NewMessageContainer__WEBPACK_IMPORTED_MODULE_27__["default"], {
  user: user,
  channel: channels.find(({
    name
  }) => name === channel),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, ({
  handleSubmit
}) => __jsx("form", {
  onSubmit: handleSubmit,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, __jsx(_src_modules_channel_containers_NewMessageContainer__WEBPACK_IMPORTED_MODULE_27__["default"].Message, {
  placeHolder: "Message #general",
  component: StyledTextInput,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}))) : 'Log in to post messages')))))));

ChatRoom.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_lib_bootstrap__WEBPACK_IMPORTED_MODULE_22__["default"])(ChatRoom));

/***/ }),

/***/ "./src/containers/IgnoreStyleSheets.js":
/*!*********************************************!*\
  !*** ./src/containers/IgnoreStyleSheets.js ***!
  \*********************************************/
/*! exports provided: IgnoreStyleSheets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgnoreStyleSheets", function() { return IgnoreStyleSheets; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/drupal/app/next/src/containers/IgnoreStyleSheets.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/**
 * SSR solutions constantly need to create a virtual tree to collect data,
 * such as Apollo does to perform queries on the server-side. When using
 * multiple of these solutions - styled-components is another case - there
 * might happen a clash of data because of duplicated rendering down the tree.
 *
 * The following component can be used to avoid collecting styled on a virtual
 * tree such as that created to collect Apollo queries results.
 */

const IgnoreStyleSheets = ({
  children
}) => __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["StyleSheetManager"], {
  sheet: new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"]().instance,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, children);
IgnoreStyleSheets.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};

/***/ }),

/***/ "./src/lib/bootstrap.js":
/*!******************************!*\
  !*** ./src/lib/bootstrap.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _withData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withData */ "./src/lib/withData.js");



/* harmony default export */ __webpack_exports__["default"] = (_withData__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/lib/func.js":
/*!*************************!*\
  !*** ./src/lib/func.js ***!
  \*************************/
/*! exports provided: noop, stopPropagation, preventDefault, finishEvent, rename, launch, rethrow, flatten, isClient, isServer, isProduction, isDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefault", function() { return preventDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishEvent", function() { return finishEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rename", function() { return rename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "launch", function() { return launch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rethrow", function() { return rethrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/to-primitive */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/to-primitive.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_3__);






function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[_babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0___default.a]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * Empty function. Commonly used for default func properties.
 */

const noop = () => {};
/**
 * Higher-order function to stop event propagations.
 */

const stopPropagation = fn => (event, ...args) => {
  if (event) event.stopPropagation();
  return fn ? fn(event, ...args) : undefined;
};
/**
 * Higher-order function to prevent event handler defaults.
 */

const preventDefault = fn => (event, ...args) => {
  if (event) event.preventDefault();
  return fn ? fn(event, ...args) : undefined;
};
/**
 * Helper method to both stop propagation and prevent default for event handlers.
 */

const finishEvent = ramda__WEBPACK_IMPORTED_MODULE_3__["compose"](stopPropagation, preventDefault);
/**
 * Renames a property on a given object.
 *
 * @param {String} from Original property name.
 * @param {String} to New property name.
 * @param {Object} object The object to apply the renaming.
 * @return {Object} return The resulting object.
 */

const rename = ramda__WEBPACK_IMPORTED_MODULE_3__["curry"]((from, to, obj) => obj ? ramda__WEBPACK_IMPORTED_MODULE_3__["omit"]([from], Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
  [to]: obj[from]
}, obj)) : obj);
/**
 * Function version of throw, to facilitate composition.
 *
 * @param {Object} err Object (usually an error) to be thrown.
 * @throws {Object} err.
 */

const launch = err => {
  throw err;
};
/**
 * Rethrow composition helper.
 *
 * @param {Function} fn Function to call.
 * @param {Error} err Thrown error.
 * @return void
 */

const rethrow = ramda__WEBPACK_IMPORTED_MODULE_3__["pipe"](ramda__WEBPACK_IMPORTED_MODULE_3__["prepend"](ramda__WEBPACK_IMPORTED_MODULE_3__["__"], [launch]), ramda__WEBPACK_IMPORTED_MODULE_3__["juxt"]);
/**
 * Flatten an object's prop.
 * @param {String} prop.
 * @param {Object} object.
 * @return {Object} object.
 */

const flatten = ramda__WEBPACK_IMPORTED_MODULE_3__["curry"]((prop, _ref) => {
  let {
    [prop]: toFlatten
  } = _ref,
      object = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, [prop].map(_toPropertyKey));

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, object, toFlatten);
});
/**
 * Check if code is running on the client.
 *
 * If process is available (Next), check if it has a property "browser".
 * Otherwise, check if a window object is available.
 */

const isClient = () => typeof process !== 'undefined' ? !!false : false;
/**
 * Check if code is running on the server.
 */

const isServer = ramda__WEBPACK_IMPORTED_MODULE_3__["complement"](isClient);
/**
 * Check if code is running on production mode.
 */

const isProduction = () => typeof process !== 'undefined' && "development" === 'production';
/**
 * Check if code is running on development mode.
 */

const isDevelopment = ramda__WEBPACK_IMPORTED_MODULE_3__["complement"](isProduction);

/***/ }),

/***/ "./src/lib/initApollo.js":
/*!*******************************!*\
  !*** ./src/lib/initApollo.js ***!
  \*******************************/
/*! exports provided: introspect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspect", function() { return introspect; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../process */ "./src/process.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _func__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./func */ "./src/lib/func.js");










const GRAPHQL_HOST = _process__WEBPACK_IMPORTED_MODULE_2__["default"].env.GRAPHQL_HOST;

if (!GRAPHQL_HOST) {
  throw new Error('You must set GRAPHQL_HOST environment variable prior to using Apollo.');
} // Polyfill fetch() if needed. Useful for server-side code.


const fetcher = global.fetch || isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default.a; // Override fetch to always include credentials.
// @TODO: could this be done elsewhere?

global.fetch = (uri, options = {}) => {
  options.credentials = 'include';
  return fetcher(uri, options);
};
/**
 * ID normalization. Will use, in order of precedence, a provided 'id', '_id', or
 * 'entityId' field as unique identificator, prefixed with the object's type.
 *
 * Fallbacks to default normalization system.
 *
 * @param {String} id The object's unique id.
 * @param {String} _id The object's unique id.
 * @param {String} entityId The object's unique id.
 * @param {String} __typename The object's type in GraphQL.
 *
 * @return {!String} Either a unique identificator if found, or nil.
 */


const dataIdFromObject = ({
  id,
  _id,
  entityId,
  __typename
}) => id || _id || entityId ? `${__typename}:${id || _id || entityId}` : undefined;

const defaultCacheOptions = {
  dataIdFromObject
};
const typesQuery = `
  {
    __schema {
      types {
        kind
        name
        possibleTypes {
          name
        }
      }
    }
  }
`;
let instrospectionResult = null;
/**
 * Loads instrospection data.
 * Performs a first non-client query to get GraphQL type
 * information. This process should run only once on the server.
 */

const getIntrospectionData = () => isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(GRAPHQL_HOST, {
  headers: {
    'Content-Type': 'application/json'
  },
  body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
    query: typesQuery
  }),
  method: 'POST'
}).then(result => result.json()).then(result => {
  // here we're filtering out any type information unrelated to unions or interfaces
  const filteredData = result.data.__schema.types.filter(type => type.possibleTypes !== null);

  result.data.__schema.types = filteredData;
  return result.data;
});
/**
 * Instrospect the GraphQL server for type information (unions, interface, etc.).
 * Either get data from a new query execution or from an already fetched instrospetion result
 */


const introspect = async () => instrospectionResult || (instrospectionResult = await getIntrospectionData());
/**
 * Creates a new ApolloClient instance.
 *
 * @param {Object} initialState Hydrating state.
 * @return {ApolloClient}.
 */

const create = ({
  context,
  initialState = {},
  cacheOptions = {}
}) => new apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
  connectToDevTools: Object(_func__WEBPACK_IMPORTED_MODULE_7__["isClient"])() && Object(_func__WEBPACK_IMPORTED_MODULE_7__["isDevelopment"])(),
  ssrMode: Object(_func__WEBPACK_IMPORTED_MODULE_7__["isServer"])(),
  // Disables forceFetch on the server (so queries are only run once)
  link: Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_6__["createHttpLink"])({
    uri: GRAPHQL_HOST
  }),
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"](Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultCacheOptions, cacheOptions)).restore(initialState)
});

let apolloClient = null;
/**
 * Initialize ApolloClient for either server ou client side.
 *
 * @param {Object} options.initialState
 * @param {Object} options.context
 * @param {Object} options.cache
 */

/* harmony default export */ __webpack_exports__["default"] = (options => Object(_func__WEBPACK_IMPORTED_MODULE_7__["isClient"])() // "client-side?"
// On the CLIENT, always reuse any available ApolloClient instance.
? apolloClient || (apolloClient = create(options)) // On the SERVER, always create a new ApolloClient instance.
// @TODO: we should reconsider this. Maybe it is best to consider SSR execution
// as an anonymous request always, and let contextual data be handled on the client,
// thus improving performance for the majority of users, which are anonymous.
: create(options));

/***/ }),

/***/ "./src/lib/withData.js":
/*!*****************************!*\
  !*** ./src/lib/withData.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _initApollo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./initApollo */ "./src/lib/initApollo.js");
/* harmony import */ var _containers_IgnoreStyleSheets__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../containers/IgnoreStyleSheets */ "./src/containers/IgnoreStyleSheets.js");






var _jsxFileName = "/drupal/app/next/src/lib/withData.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









/* harmony default export */ __webpack_exports__["default"] = (ComposedComponent => {
  var _class, _temp;

  return _temp = _class = class WithData extends react__WEBPACK_IMPORTED_MODULE_4___default.a.Component {
    static async getInitialProps(ctx) {
      // Evaluate the composed component's getInitialProps().
      // This setup is needed to allow for additional getInitialProps on each
      // page using Apollo connector.
      const props = ComposedComponent && ComposedComponent.getInitialProps ? await ComposedComponent.getInitialProps(ctx) : {};
      const introspectionQueryResultData = await Object(_initApollo__WEBPACK_IMPORTED_MODULE_11__["introspect"])();
      const fragmentMatcher = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__["IntrospectionFragmentMatcher"]({
        introspectionQueryResultData
      });

      const initialProps = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
        __APOLLO_INSTROSPECTION__: introspectionQueryResultData
      }, props); // When already on the client-side, do not defer initialization.


      if ( false || process.env.APOLLO_SSR_OFF) return initialProps;
      const apolloClient = Object(_initApollo__WEBPACK_IMPORTED_MODULE_11__["default"])({
        context: Object(ramda__WEBPACK_IMPORTED_MODULE_5__["pick"])(['res'], ctx),
        cacheOptions: {
          fragmentMatcher
        }
      });

      try {
        const router = Object(ramda__WEBPACK_IMPORTED_MODULE_5__["pick"])(['query', 'pathname', 'asPath', 'res', 'req'], ctx);
        /**
         * Some contexts are not available during SSR. `router`, for instance.
         * We are basically passing to getDataFromTree an extra context object to
         * hold these, when necessary.
         *
         * @see: https://github.com/zeit/next.js/issues/2908
         */

        const context = {
          router
        }; // Mount ComposedComponent element tree.

        const tree = __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
          client: apolloClient,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, __jsx(_containers_IgnoreStyleSheets__WEBPACK_IMPORTED_MODULE_12__["IgnoreStyleSheets"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, __jsx(ComposedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
          url: router
        }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        })))); // Run all GraphQL queries in the component tree and extract the resulting data


        await Object(react_apollo__WEBPACK_IMPORTED_MODULE_8__["getDataFromTree"])(tree, context);
      } catch (error) {
        console.error('SSR Apollo data loading error:', error); // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
      } // getDataFromTree does not call componentWillUnmount
      // head side effect therefore need to be cleared manually


      next_head__WEBPACK_IMPORTED_MODULE_10___default.a.rewind(); // Inject current Apollo state on the page's initial properties.

      initialProps.__APOLLO_STATE__ = apolloClient.cache.extract();
      return initialProps;
    }

    constructor(props) {
      super(props);
      const fragmentMatcher = new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_9__["IntrospectionFragmentMatcher"]({
        introspectionQueryResultData: this.props.__APOLLO_INSTROSPECTION__
      });
      this.apollo = Object(_initApollo__WEBPACK_IMPORTED_MODULE_11__["default"])({
        initialState: this.props.__APOLLO_STATE__,
        cacheOptions: {
          fragmentMatcher
        }
      });
    }

    render() {
      // Extract Apollo state, for ComposedComponent doesn't need to know it existed.
      const _this$props = this.props,
            {
        __APOLLO_STATE__,
        __APOLLO_INSTROSPECTION__
      } = _this$props,
            props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["__APOLLO_STATE__", "__APOLLO_INSTROSPECTION__"]);

      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__["ApolloProvider"], {
        client: this.apollo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx(ComposedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })));
    }

  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, "displayName", `WithData(${Object(recompose__WEBPACK_IMPORTED_MODULE_7__["getDisplayName"])(ComposedComponent)})`), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_class, "propTypes", {
    __APOLLO_STATE__: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
    __APOLLO_INSTROSPECTION__: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
  }), _temp;
});

/***/ }),

/***/ "./src/modules/auth/containers/CurrentUserContainer.js":
/*!*************************************************************!*\
  !*** ./src/modules/auth/containers/CurrentUserContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_func__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../lib/func */ "./src/lib/func.js");




var _jsxFileName = "/drupal/app/next/src/modules/auth/containers/CurrentUserContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const query = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default.a`
  query CurrentUser {
    user: currentUserContext {
      ... on UserUser {
        uid
        mail
        name
      }
    }
  }
`;
let refetchedOnClient = false;

const CurrentUserContainer = ({
  children
}) => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
  query: query,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, (_ref) => {
  let {
    loading,
    error,
    data,
    refetch
  } = _ref,
      result = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loading", "error", "data", "refetch"]);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`; // Force a refetch on the client inside to make sure
  // the cached SSR anonymous user is replaced, in case
  // the user is already logged in..

  if (!loading && !refetchedOnClient && Object(_lib_func__WEBPACK_IMPORTED_MODULE_6__["isClient"])()) {
    refetchedOnClient = true;
    refetch();
  }

  return children(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    user: data.user
  }, result));
});

CurrentUserContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"]
};
/* harmony default export */ __webpack_exports__["default"] = (CurrentUserContainer);

/***/ }),

/***/ "./src/modules/channel/containers/ChannelsContainer.js":
/*!*************************************************************!*\
  !*** ./src/modules/channel/containers/ChannelsContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_func__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/func */ "./src/lib/func.js");


var _jsxFileName = "/drupal/app/next/src/modules/channel/containers/ChannelsContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query Channels {
    channels: taxonomyTermQuery(limit: 20, filter: { conditions: [{ field: "vid", value: ["channel"] }] }) {
      count
      entities {
        ... on TaxonomyTerm {
          tid
          name
        }
      }
    }
  }
`;
const normalize = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(_lib_func__WEBPACK_IMPORTED_MODULE_5__["rename"])('data', 'channels'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["over"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensProp"])('channels'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('channels'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('entities'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["defaultTo"])([]))));

const ChannelsContainer = ({
  children
}) => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
  query: query,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(normalize, children));

ChannelsContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"]
};
/* harmony default export */ __webpack_exports__["default"] = (ChannelsContainer);

/***/ }),

/***/ "./src/modules/channel/containers/MessagesContainer.js":
/*!*************************************************************!*\
  !*** ./src/modules/channel/containers/MessagesContainer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet/components/Box */ "grommet/components/Box");
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Box__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet_components_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet/components/Heading */ "grommet/components/Heading");
/* harmony import */ var grommet_components_Heading__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Heading__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet_components_icons_base_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet/components/icons/base/Alert */ "grommet/components/icons/base/Alert");
/* harmony import */ var grommet_components_icons_base_Alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet_components_icons_base_Alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_func__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../lib/func */ "./src/lib/func.js");


var _jsxFileName = "/drupal/app/next/src/modules/channel/containers/MessagesContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query Messages ($channel: String!) {
    messages: messageQuery(
      limit: 50
      filter: {
        conditions: [{
          field: "channel"
          value: [$channel]
        }]
      }
    ) {
      count
      entities {
        id
        author: entityOwner {
          name
        }
        ... on Message {
          message: body {
            value
          }
        }
      }
    }
  }
`;
const normalizeMessage = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["over"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensProp"])('author'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('name')), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["over"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensProp"])('message'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('value')));
const normalize = Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(_lib_func__WEBPACK_IMPORTED_MODULE_8__["rename"])('data', 'messages'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["over"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["lensProp"])('messages'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('messages'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["prop"])('entities'), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["defaultTo"])([]), Object(ramda__WEBPACK_IMPORTED_MODULE_0__["map"])(normalizeMessage))));

const MessagesContainer = ({
  children,
  channel
}) => channel && channel.tid ? __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
  query: query,
  variables: {
    channel: channel.tid
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, Object(ramda__WEBPACK_IMPORTED_MODULE_0__["pipe"])(normalize, children)) : __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_5___default.a, {
  full: "vertical",
  justify: "center",
  align: "center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx(grommet_components_icons_base_Alert__WEBPACK_IMPORTED_MODULE_7___default.a, {
  size: "large",
  colorIndex: "critical",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}), __jsx(grommet_components_Heading__WEBPACK_IMPORTED_MODULE_6___default.a, {
  tag: "h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "This channel does not exist :("));

MessagesContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  channel: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    tid: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (MessagesContainer);

/***/ }),

/***/ "./src/modules/channel/containers/NewChannelContainer.js":
/*!***************************************************************!*\
  !*** ./src/modules/channel/containers/NewChannelContainer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/drupal/app/next/src/modules/channel/containers/NewChannelContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const mutation = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  mutation CreateChannel ($name: String!) {
    createTaxonomyTermChannel (input: { name: $name }) {
      violations {
        message
        path
        code
      }
      errors
      entity {
        entityId
      }
    }
  }
`; // @TODO: implement optimistic query on channels?

const NewMessageContainer = ({
  children
}) => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Mutation"], {
  mutation: mutation,
  refetchQueries: ['Channels'],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, mutate => children(name => {
  if (name) {
    mutate({
      variables: {
        name
      }
    });
  }
}));

NewMessageContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
};
/* harmony default export */ __webpack_exports__["default"] = (NewMessageContainer);

/***/ }),

/***/ "./src/modules/channel/containers/NewMessageContainer.js":
/*!***************************************************************!*\
  !*** ./src/modules/channel/containers/NewMessageContainer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "/drupal/app/next/src/modules/channel/containers/NewMessageContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const mutation = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  mutation CreateMessage ($user: String!, $channel: String!, $body: String!) {
    createMessageMessage(input: {
      userId: { targetId: $user }
      body: { value: $body }
      channel: { targetId: $channel }
    }) {
      errors
      violations {
        message
        path
        code
      }
      entity {
        entityId
      }
    }
  }
`; // @TODO: implement optimistic query on messages?

const NewMessageContainer = ({
  children,
  user,
  channel
}) => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
  mutation: mutation,
  refetchQueries: ['Messages'],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, send => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
  children: children,
  onSubmit: ({
    body
  }, {
    reset
  }) => {
    reset();
    send({
      variables: {
        body,
        user: user.uid,
        channel: channel.tid
      }
    });
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}));

NewMessageContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["func"],
  user: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    uid: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired
  }).isRequired,
  channel: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    tid: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"].isRequired
  }).isRequired
};
/**
 * Composable message field.
 */

NewMessageContainer.Message = props => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_5__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "body"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (NewMessageContainer);

/***/ }),

/***/ "./src/modules/form/components/TextInput.js":
/*!**************************************************!*\
  !*** ./src/modules/form/components/TextInput.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet_components_TextInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet/components/TextInput */ "grommet/components/TextInput");
/* harmony import */ var grommet_components_TextInput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grommet_components_TextInput__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils */ "./src/modules/form/lib/utils.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_0__["compose"])(_lib_utils__WEBPACK_IMPORTED_MODULE_2__["connectField"], Object(recompose__WEBPACK_IMPORTED_MODULE_0__["renameProp"])('onChange', 'onDOMChange'))(grommet_components_TextInput__WEBPACK_IMPORTED_MODULE_1___default.a));

/***/ }),

/***/ "./src/modules/form/lib/utils.js":
/*!***************************************!*\
  !*** ./src/modules/form/lib/utils.js ***!
  \***************************************/
/*! exports provided: connectField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectField", function() { return connectField; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_2__);





/**
 * Normalize react-final-form props to custom field component.
 */

const connectField = Object(recompose__WEBPACK_IMPORTED_MODULE_2__["mapProps"])((_ref) => {
  let {
    input,
    meta
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["input", "meta"]);

  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
    meta
  }, input, props);
});

/***/ }),

/***/ "./src/process.js":
/*!************************!*\
  !*** ./src/process.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-path */ "object-path");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_1__);




/**
 * This file overrides the default require('process') to inject
 * environment variables when available.
 */


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (process);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/channel.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /drupal/app/next/pages/channel.js */"./pages/channel.js");


/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol/to-primitive":
/*!*********************************************************!*\
  !*** external "core-js/library/fn/symbol/to-primitive" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/to-primitive");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "grommet/components/Anchor":
/*!********************************************!*\
  !*** external "grommet/components/Anchor" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Anchor");

/***/ }),

/***/ "grommet/components/App":
/*!*****************************************!*\
  !*** external "grommet/components/App" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/App");

/***/ }),

/***/ "grommet/components/Box":
/*!*****************************************!*\
  !*** external "grommet/components/Box" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Box");

/***/ }),

/***/ "grommet/components/Button":
/*!********************************************!*\
  !*** external "grommet/components/Button" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Button");

/***/ }),

/***/ "grommet/components/Footer":
/*!********************************************!*\
  !*** external "grommet/components/Footer" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Footer");

/***/ }),

/***/ "grommet/components/Header":
/*!********************************************!*\
  !*** external "grommet/components/Header" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Header");

/***/ }),

/***/ "grommet/components/Heading":
/*!*********************************************!*\
  !*** external "grommet/components/Heading" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Heading");

/***/ }),

/***/ "grommet/components/Label":
/*!*******************************************!*\
  !*** external "grommet/components/Label" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Label");

/***/ }),

/***/ "grommet/components/Menu":
/*!******************************************!*\
  !*** external "grommet/components/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Menu");

/***/ }),

/***/ "grommet/components/Paragraph":
/*!***********************************************!*\
  !*** external "grommet/components/Paragraph" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Paragraph");

/***/ }),

/***/ "grommet/components/Sidebar":
/*!*********************************************!*\
  !*** external "grommet/components/Sidebar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Sidebar");

/***/ }),

/***/ "grommet/components/Split":
/*!*******************************************!*\
  !*** external "grommet/components/Split" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Split");

/***/ }),

/***/ "grommet/components/TextInput":
/*!***********************************************!*\
  !*** external "grommet/components/TextInput" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/TextInput");

/***/ }),

/***/ "grommet/components/Title":
/*!*******************************************!*\
  !*** external "grommet/components/Title" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Title");

/***/ }),

/***/ "grommet/components/icons/base/Add":
/*!****************************************************!*\
  !*** external "grommet/components/icons/base/Add" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Add");

/***/ }),

/***/ "grommet/components/icons/base/Alert":
/*!******************************************************!*\
  !*** external "grommet/components/icons/base/Alert" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Alert");

/***/ }),

/***/ "grommet/components/icons/base/Chat":
/*!*****************************************************!*\
  !*** external "grommet/components/icons/base/Chat" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Chat");

/***/ }),

/***/ "grommet/components/icons/base/Logout":
/*!*******************************************************!*\
  !*** external "grommet/components/icons/base/Logout" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Logout");

/***/ }),

/***/ "grommet/components/icons/base/Refresh":
/*!********************************************************!*\
  !*** external "grommet/components/icons/base/Refresh" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Refresh");

/***/ }),

/***/ "grommet/components/icons/base/User":
/*!*****************************************************!*\
  !*** external "grommet/components/icons/base/User" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/User");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "object-path":
/*!******************************!*\
  !*** external "object-path" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("object-path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-final-form":
/*!***********************************!*\
  !*** external "react-final-form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-final-form");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map