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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet_components_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet/components/App */ "grommet/components/App");
/* harmony import */ var grommet_components_App__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(grommet_components_App__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet/components/Box */ "grommet/components/Box");
/* harmony import */ var grommet_components_Box__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Box__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet_components_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet/components/Image */ "grommet/components/Image");
/* harmony import */ var grommet_components_Image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var grommet_components_Headline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet/components/Headline */ "grommet/components/Headline");
/* harmony import */ var grommet_components_Headline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Headline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet/components/icons/base/Chat */ "grommet/components/icons/base/Chat");
/* harmony import */ var grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var grommet_components_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet/components/Form */ "grommet/components/Form");
/* harmony import */ var grommet_components_Form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var grommet_components_Heading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet/components/Heading */ "grommet/components/Heading");
/* harmony import */ var grommet_components_Heading__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Heading__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var grommet_components_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! grommet/components/Button */ "grommet/components/Button");
/* harmony import */ var grommet_components_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! grommet/components/Footer */ "grommet/components/Footer");
/* harmony import */ var grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var grommet_components_FormField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! grommet/components/FormField */ "grommet/components/FormField");
/* harmony import */ var grommet_components_FormField__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(grommet_components_FormField__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_lib_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/lib/bootstrap */ "./src/lib/bootstrap.js");
/* harmony import */ var _src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/modules/auth/containers/SigninContainer */ "./src/modules/auth/containers/SigninContainer/index.js");
/* harmony import */ var _src_modules_form_components_TextInput__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/modules/form/components/TextInput */ "./src/modules/form/components/TextInput.js");
/* harmony import */ var _src_modules_form_components_CheckBox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/modules/form/components/CheckBox */ "./src/modules/form/components/CheckBox.js");





var _jsxFileName = "/drupal/app/next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

















const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(grommet_components_Image__WEBPACK_IMPORTED_MODULE_8___default.a).withConfig({
  displayName: "pages__StyledImage",
  componentId: "sc-1qg7482-0"
})(["width:auto;margin-bottom:2rem;"]);

const SignInPage = () => __jsx(grommet_components_App__WEBPACK_IMPORTED_MODULE_6___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
  full: "vertical",
  justify: "center",
  align: "center",
  pad: {
    vertical: 'large'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(StyledImage, {
  src: "/static/logo.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}), __jsx(grommet_components_Headline__WEBPACK_IMPORTED_MODULE_9___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Welcome to the ", __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "TallerChat"), " ", __jsx(grommet_components_icons_base_Chat__WEBPACK_IMPORTED_MODULE_10___default.a, {
  size: "large",
  colorIndex: "critical",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})), __jsx(_src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, (_ref) => {
  let {
    handleSubmit,
    submitting,
    invalid,
    values: {
      register
    }
  } = _ref,
      form = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["handleSubmit", "submitting", "invalid", "values"]);

  return __jsx(grommet_components_Form__WEBPACK_IMPORTED_MODULE_11___default.a, {
    pad: "medium",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(grommet_components_Heading__WEBPACK_IMPORTED_MODULE_12___default.a, {
    strong: true,
    tag: "h2",
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Sign In"), __jsx("fieldset", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(grommet_components_FormField__WEBPACK_IMPORTED_MODULE_15___default.a, {
    label: _src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["labels"].name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx(_src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["default"].Username, {
    autoFocus: true,
    disabled: submitting,
    component: _src_modules_form_components_TextInput__WEBPACK_IMPORTED_MODULE_18__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), register && __jsx(grommet_components_FormField__WEBPACK_IMPORTED_MODULE_15___default.a, {
    label: _src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["labels"].email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(_src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["default"].Email, {
    disabled: submitting,
    component: _src_modules_form_components_TextInput__WEBPACK_IMPORTED_MODULE_18__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })), __jsx(grommet_components_FormField__WEBPACK_IMPORTED_MODULE_15___default.a, {
    label: _src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["labels"].password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["default"].Password, {
    disabled: submitting,
    component: _src_modules_form_components_TextInput__WEBPACK_IMPORTED_MODULE_18__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  })), register && __jsx(grommet_components_FormField__WEBPACK_IMPORTED_MODULE_15___default.a, {
    label: _src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["labels"].passwordConfirm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["default"].PasswordConfirm, {
    disabled: submitting,
    component: _src_modules_form_components_TextInput__WEBPACK_IMPORTED_MODULE_18__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }))), __jsx(grommet_components_Box__WEBPACK_IMPORTED_MODULE_7___default.a, {
    margin: {
      bottom: 'medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx(_src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["default"].Register, {
    label: "I'm new here",
    disabled: submitting,
    component: _src_modules_form_components_CheckBox__WEBPACK_IMPORTED_MODULE_19__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  })), __jsx(Errors, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  })), __jsx(grommet_components_Footer__WEBPACK_IMPORTED_MODULE_14___default.a, {
    size: "small",
    direction: "column",
    align: "center",
    pad: {
      between: 'medium'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(grommet_components_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    fill: true,
    primary: true,
    type: "submit",
    label: register ? submitting ? 'Registering...' : 'Register' : submitting ? 'Logging...' : 'Log In',
    disabled: invalid || submitting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })));
})));

const ErrorBox = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(grommet_components_Box__WEBPACK_IMPORTED_MODULE_7___default.a).withConfig({
  displayName: "pages__ErrorBox",
  componentId: "sc-1qg7482-1"
})(["ul{margin:0 0 0 1.5rem;}"]);
/**
 * Component to show form errors.
 */

const Errors = ({
  errors,
  submitErrors,
  touched
}) => {
  const errorMessages = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(errors).filter(field => touched[field]).map(field => [_src_modules_auth_containers_SigninContainer__WEBPACK_IMPORTED_MODULE_17__["labels"][field], errors[field]]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, submitErrors && __jsx(ErrorBox, {
    colorIndex: "critical",
    pad: "small",
    margin: {
      vertical: 'small'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, submitErrors), !!errorMessages.length && __jsx(ErrorBox, {
    colorIndex: "critical",
    pad: "small",
    margin: {
      vertical: 'small'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, errorMessages.map(([label, error]) => __jsx("li", {
    key: label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, label, ": ", __jsx("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, error))))));
};

Errors.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  submitErrors: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  touched: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_lib_bootstrap__WEBPACK_IMPORTED_MODULE_16__["default"])(SignInPage));

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

/***/ "./src/lib/form/validation.js":
/*!************************************!*\
  !*** ./src/lib/form/validation.js ***!
  \************************************/
/*! exports provided: nil, required, email, equalsField, minLength, combine, condition, branch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nil", function() { return nil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsField", function() { return equalsField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combine", function() { return combine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "condition", function() { return condition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "branch", function() { return branch; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var conducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! conducer */ "conducer");
/* harmony import */ var conducer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(conducer__WEBPACK_IMPORTED_MODULE_2__);




 // import isURL from 'is-url'

const isEmpty = value => typeof value === 'undefined' || _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(value) && value.length === 0 || value === null || value === '';

const isNotEmpty = ramda__WEBPACK_IMPORTED_MODULE_1__["complement"](isEmpty);

const isNotEmail = value => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value); // const isNotNumeric = value => !/^(\d+(\.\d+)?)$/.test(value)
// const isNotInteger = value => Number(value) !== Math.floor(value)
// const isNotURL = R.complement(isURL)

/*
 * Validation rules.
 */


const nil = () => undefined;
const required = value => isEmpty(value) && 'Required'; // export const url = value => every([isNotEmpty, isNotURL])(value) && 'Invalid URL'

const email = value => Object(conducer__WEBPACK_IMPORTED_MODULE_2__["every"])([isNotEmpty, isNotEmail])(value) && 'Must be a valid e-mail'; // export const number = value => every([isNotEmpty, isNotNumeric])(value) && 'Digite apenas números'
// export const integer = value => number(value) || isNotInteger(value) && 'Digite apenas números inteiros'
// export const checked = value => !value && 'Este campo deve estar marcado'
// export const min = min => value => value < min && `Número deve ser maior ou igual a ${min}`
// export const max = max => value => value >= max && `Número deve ser menor que ${max}`

const equalsField = (field, label) => (value, values) => value !== values[field] && `Must equal field ${label}`; // export const oneOf = (options = [], error = 'Opção inválida', caseSensitive = true) =>
//   value => options
//     .map(str => caseSensitive ? str : str.toLowerCase())
//     .indexOf(caseSensitive ? value : value && value.toLowerCase()) === -1 && error
// export const maxLength = max => value => {
//   if (!isEmpty(value) && value.length > max) {
//     return `Não deve ter mais de ${max} caracteres`
//   }
// }

const minLength = min => value => {
  if (!isEmpty(value) && value.length < min) {
    return `Must have at least ${min} characters`;
  }
};
/*
 * Combine multiple validation rules into one..
 */

const combine = rules => (...args) => {
  const _rules = [].concat(rules);

  for (let i = 0; i < _rules.length; i++) {
    const error = _rules[i](...args);

    if (error) return error;
  }
};
/**
 * Conditionally validates a field.
 *
 * @param {Function} condition Callback to check if should validate. Receives the field
 *                             value as first argument and the whole form data as second.
 * @param {Array|Function} rules Either a single rule function or an array of rules.
 *
 * @return {Function} A configured conditional rule.
 */

const condition = (condition, rules) => (...args) => condition(...args) ? combine(rules)(...args) : undefined;
/**
 * Branch validate based on field current value.
 *
 * @param {Function} test Branch predicate.
 * @param {Array|Function} leftRules Rules to apply when predicates true.
 * @param {Array|Function} rightRules Rules to apply when predicates false.
 */

const branch = (test, leftRules, rightRules = nil) => (...args) => combine(test(...args) ? leftRules : rightRules)(...args);

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

/***/ "./src/modules/auth/containers/SigninContainer/SigninContainer.js":
/*!************************************************************************!*\
  !*** ./src/modules/auth/containers/SigninContainer/SigninContainer.js ***!
  \************************************************************************/
/*! exports provided: labels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return labels; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ "react-final-form");
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_final_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../lib/form/validation */ "./src/lib/form/validation.js");
/* harmony import */ var _mutations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mutations */ "./src/modules/auth/containers/SigninContainer/mutations.js");



var _jsxFileName = "/drupal/app/next/src/modules/auth/containers/SigninContainer/SigninContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const labels = {
  name: 'Username',
  email: 'E-mail',
  password: 'Password',
  passwordConfirm: 'Confirm password'
};
const validations = {
  name: Object(_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["combine"])([_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["required"]]),
  email: Object(_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["combine"])([_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["required"], _lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["email"]]),
  password: Object(_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["combine"])([_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["required"], Object(_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["minLength"])(6)]),
  passwordConfirm: Object(_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["condition"])((value, {
    register
  }) => register, [_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["required"], Object(_lib_form_validation__WEBPACK_IMPORTED_MODULE_6__["equalsField"])('password', labels.password)])
};
/**
 * Grab actual error from GraphQL error.
 */

const normalizeError = err => err.graphQLErrors ? err.graphQLErrors[0].message : err.message;
/**
 * Redirect when registered/logged in.
 */


const redirect = () => {
  next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/channel', '/messages/general');
  return undefined;
};
/**
 * Submit handler: switch between register and login based on form values.
 */


const handleSubmit = ({
  register,
  login
}) => variables => (variables.register ? register : login)({
  variables
}).then(redirect).catch(normalizeError);

const SigninContainer = ({
  children
}) => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
  mutation: _mutations__WEBPACK_IMPORTED_MODULE_7__["loginMutation"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, login => __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Mutation"], {
  mutation: _mutations__WEBPACK_IMPORTED_MODULE_7__["registerMutation"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, register => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Form"], {
  children: children,
  onSubmit: handleSubmit({
    register,
    login
  }),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
})));
/**
 * Composable name field.
 */


SigninContainer.Username = props => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "name",
  validate: validations.name
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}));
/**
 * Composable e-mail field.
 */


SigninContainer.Email = props => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "email",
  validate: validations.email
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}));
/**
 * Composable password field.
 */


SigninContainer.Password = props => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "password",
  type: "password",
  validate: validations.password
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}));
/**
 * Composable password-confirm field.
 */


SigninContainer.PasswordConfirm = props => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "passwordConfirm",
  type: "password",
  validate: validations.passwordConfirm,
  validateFields: ['password']
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}));
/**
 * Composable register field.
 */


SigninContainer.Register = props => __jsx(react_final_form__WEBPACK_IMPORTED_MODULE_3__["Field"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  name: "register"
}, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}));

SigninContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SigninContainer);

/***/ }),

/***/ "./src/modules/auth/containers/SigninContainer/index.js":
/*!**************************************************************!*\
  !*** ./src/modules/auth/containers/SigninContainer/index.js ***!
  \**************************************************************/
/*! exports provided: labels, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SigninContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SigninContainer */ "./src/modules/auth/containers/SigninContainer/SigninContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "labels", function() { return _SigninContainer__WEBPACK_IMPORTED_MODULE_0__["labels"]; });





/* harmony default export */ __webpack_exports__["default"] = (_SigninContainer__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/modules/auth/containers/SigninContainer/mutations.js":
/*!******************************************************************!*\
  !*** ./src/modules/auth/containers/SigninContainer/mutations.js ***!
  \******************************************************************/
/*! exports provided: loginMutation, registerMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginMutation", function() { return loginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMutation", function() { return registerMutation; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);



const loginMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UserLogin($name: String!, $password: String!) {
    user: userLogin (name: $name, password: $password) {
      uid
      name
    }
  }
`;
const registerMutation = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation UserRegister($name: String!, $email: String!, $password: String!) {
    user: userRegister (name: $name, email: $email, password: $password) {
      uid
      name
    }
  }
`;

/***/ }),

/***/ "./src/modules/form/components/CheckBox.js":
/*!*************************************************!*\
  !*** ./src/modules/form/components/CheckBox.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var grommet_components_CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grommet/components/CheckBox */ "grommet/components/CheckBox");
/* harmony import */ var grommet_components_CheckBox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grommet_components_CheckBox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./src/modules/form/lib/utils.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["connectField"])(grommet_components_CheckBox__WEBPACK_IMPORTED_MODULE_0___default.a));

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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /drupal/app/next/pages/index.js */"./pages/index.js");


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

/***/ "conducer":
/*!***************************!*\
  !*** external "conducer" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("conducer");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ "grommet/components/CheckBox":
/*!**********************************************!*\
  !*** external "grommet/components/CheckBox" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/CheckBox");

/***/ }),

/***/ "grommet/components/Footer":
/*!********************************************!*\
  !*** external "grommet/components/Footer" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Footer");

/***/ }),

/***/ "grommet/components/Form":
/*!******************************************!*\
  !*** external "grommet/components/Form" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Form");

/***/ }),

/***/ "grommet/components/FormField":
/*!***********************************************!*\
  !*** external "grommet/components/FormField" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/FormField");

/***/ }),

/***/ "grommet/components/Heading":
/*!*********************************************!*\
  !*** external "grommet/components/Heading" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Heading");

/***/ }),

/***/ "grommet/components/Headline":
/*!**********************************************!*\
  !*** external "grommet/components/Headline" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Headline");

/***/ }),

/***/ "grommet/components/Image":
/*!*******************************************!*\
  !*** external "grommet/components/Image" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/Image");

/***/ }),

/***/ "grommet/components/TextInput":
/*!***********************************************!*\
  !*** external "grommet/components/TextInput" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/TextInput");

/***/ }),

/***/ "grommet/components/icons/base/Chat":
/*!*****************************************************!*\
  !*** external "grommet/components/icons/base/Chat" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("grommet/components/icons/base/Chat");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map