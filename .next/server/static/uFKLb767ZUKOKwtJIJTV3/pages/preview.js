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
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_TEMPLATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_TEMPLATES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_TEMPLATE_BY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GET_TEMPLATE_BY_URL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_TEMPLATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_TEMPLATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EDIT_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return EDIT_TEMPLATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EDIT_TEMPLATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DELETE_TEMPLATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DELETE_TEMPLATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SELECT_TEMPLATE_CATEGORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SELECT_TEMPLATE_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getTemplateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getTemplateByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getTemplateByUrlSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return selectTemplateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return selectTemplatePage; });
var GET_TEMPLATES = 'template/GET_TEMPLATES';
var GET_TEMPLATES_SUCCESS = 'template/GET_TEMPLATES_SUCCESS';
var GET_TEMPLATE_BY_URL = 'template/GET_TEMPLATE_BY_URL';
var GET_TEMPLATE_BY_URL_SUCCESS = 'template/GET_TEMPLATE_BY_URL_SUCCESS';
var ADD_TEMPLATE = 'template/ADD_TEMPLATE';
var ADD_TEMPLATE_SUCCESS = 'template/ADD_TEMPLATE_SUCCESS';
var ADD_TEMPLATE_FAIL = 'template/ADD_TEMPLATE_FAIL';
var EDIT_TEMPLATE = 'template/EDIT_TEMPLATE';
var EDIT_TEMPLATE_SUCCESS = 'template/EDIT_TEMPLATE_SUCCESS';
var EDIT_TEMPLATE_FAIL = 'template/EDIT_TEMPLATE_FAIL';
var DELETE_TEMPLATE = 'template/DELETE_TEMPLATE';
var DELETE_TEMPLATE_SUCCESS = 'template/DELETE_TEMPLATE_SUCCESS';
var SELECT_TEMPLATE_CATEGORY = 'template/SELECT_TEMPLATE_CATEGORY';
var SELECT_TEMPLATE_PAGE = 'template/SELECT_TEMPLATE_PAGE';
var getTemplate = function getTemplate() {
  return {
    type: GET_TEMPLATES
  };
};
var getTemplateSuccess = function getTemplateSuccess(listTemplates) {
  return {
    type: GET_TEMPLATES_SUCCESS,
    listTemplates: listTemplates
  };
};
var getTemplateByUrl = function getTemplateByUrl(url) {
  return {
    type: GET_TEMPLATE_BY_URL,
    url: url
  };
};
var getTemplateByUrlSuccess = function getTemplateByUrlSuccess(template) {
  return {
    type: GET_TEMPLATE_BY_URL_SUCCESS,
    template: template
  };
};
var selectTemplateCategory = function selectTemplateCategory(cat) {
  return {
    type: SELECT_TEMPLATE_CATEGORY,
    category: cat
  };
};
var selectTemplatePage = function selectTemplatePage(page) {
  return {
    type: SELECT_TEMPLATE_PAGE,
    page: page
  };
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(26)();

module.exports = routes;
routes.add('preview', '/preview/:id').add('admin');

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewNavbarStyled", function() { return PreviewNavbarStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var PreviewNavbarStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "style__PreviewNavbarStyled",
  componentId: "g59c2r-0"
})(["background:rgba(0,0,0,0.1);z-index:9999;position:relative;"]);

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(34);
/* harmony import */ var _store_template_action__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3);


















_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_13__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__["faTimes"]);

function mapStateToProps(state) {
  return {
    template: state.template.previewTemplate
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])({
    getTemplateByUrl: _store_template_action__WEBPACK_IMPORTED_MODULE_17__[/* getTemplateByUrl */ "p"]
  }, dispatch);
};

var Preview =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Preview, _React$Component);

  function Preview() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Preview);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Preview).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Preview, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getTemplateByUrl(this.props.id);
    }
  }, {
    key: "render",
    value: function render() {
      var template = this.props.template;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/bootstrap.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/main.css"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_16__["PreviewNavbarStyled"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Navbar"], {
        dark: true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavbarBrand"], {
        tag: function tag(_ref) {
          var className = _ref.className,
              props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["className"]);

          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_8__["Link"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            route: "/"
          }, props));
        }
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "navbar-brand-full",
        src: "/static/images/logo-rgb.png",
        width: "89",
        height: "25",
        alt: "sai gon web logo"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Nav"], {
        className: "ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        color: "success"
      }, "Mua theme")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["NavLink"], {
        href: "https://".concat(template.url)
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeIcon"], {
        icon: "times"
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("iframe", {
        style: {
          position: 'fixed',
          top: '56px',
          left: '0px',
          bottom: '0px',
          right: '0px',
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          zIndex: 0
        },
        name: "demo",
        src: "https://".concat(template.url)
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref2) {
      var query = _ref2.query;
      var id = query.id;
      return {
        id: id
      };
    }
  }]);

  return Preview;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(Preview));

/***/ })
/******/ ]);