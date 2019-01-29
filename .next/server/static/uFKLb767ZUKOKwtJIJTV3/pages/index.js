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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
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
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


exports.formatNumber = function (number) {
  var optionsDefault = {
    decimals: -1,
    decimalPoint: '.',
    thousandSeparator: ','
  };
  var numberParsed = number;

  if (optionsDefault.decimals > -1) {
    numberParsed = Number(numberParsed.toFixed(optionsDefault.decimals));
  }

  numberParsed = numberParsed.toString();
  var parts = numberParsed.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, optionsDefault.thousandSeparator);
  return parts.join(optionsDefault.decimalPoint);
};

exports.get = function (obj, path) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var pathArr = path.split('.');
  var result = pathArr.reduce(function (o, key) {
    return o && o[key] !== undefined ? o[key] : undefined;
  }, obj);
  if (typeof result === 'undefined') return defaultValue;else return result;
};

exports.isEmpty = function (data) {
  switch (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
    case 'object':
      {
        if (data instanceof Array) {
          return data.length === 0;
        } else {
          return Object.keys(data).length === 0;
        }
      }

    case 'string':
      return data.length === 0;

    default:
      return true;
  }
};

exports.clone = function (inst) {
  switch (inst.constructor) {
    case Array:
      return [].concat(inst);

    case Object:
      return Object.assign({}, inst);

    default:
      return inst;
  }
};

exports.keyBy = function (arr, key) {
  return arr.reduce(function (obj, item) {
    if (item[key]) {
      obj[item[key]] = item;
    }

    return obj;
  }, {});
};

exports.formatDate = function (date) {
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\./g, '/');
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.TEMPLATE_PER_PAGE = 16;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(26)();

module.exports = routes;
routes.add('preview', '/preview/:id').add('admin');

/***/ }),
/* 17 */,
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
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectSpread");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.WEB_CATEGORY = {
  BAN_HANG: 'Bán hàng',
  BAT_DONG_SAN: 'Bất động sản',
  XAY_DUNG_NOI_THAT: 'Xây dựng - nội thất',
  GIAO_DUC: 'Giáo dục',
  GIOI_THIEU_CONG_TY: 'Giới thiệu công ty',
  LANDING_PAGE: 'Landing page',
  TIN_TUC: 'Tin tức',
  NHA_HANG_KHACH_SAN: 'Nhà hàng - khách sạn',
  ANH_VIEN_AO_CUOI: 'Ảnh viện áo cưới',
  DU_LICH: 'Du lịch',
  KHAC: 'Khác'
};
exports.PAYMENT_TYPE = {
  TRANSFER: 0,
  PAYPAL: 1
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
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
/* 33 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(7);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(8);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(21);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/header.js







var header_Header =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Header, _React$Component);

  function Header() {
    classCallCheck_default()(this, Header);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Header).apply(this, arguments));
  }

  createClass_default()(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("header", {
        id: "slider-area"
      }, external_react_default.a.createElement("nav", {
        className: "navbar navbar-expand-md fixed-top scrolling-navbar bg-white"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("a", {
        className: "navbar-brand",
        href: "/"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/logo-rgb.png",
        alt: "logo"
      })), external_react_default.a.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarCollapse",
        "aria-controls": "navbarCollapse",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      }, external_react_default.a.createElement("i", {
        className: "lni-menu"
      })), external_react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarCollapse"
      }, external_react_default.a.createElement("ul", {
        className: "navbar-nav mr-auto w-100 justify-content-end"
      }, external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement("a", {
        className: "nav-link page-scroll",
        href: "#dich-vu"
      }, "D\u1ECBch v\u1EE5")), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement("a", {
        className: "nav-link page-scroll",
        href: "#kho-giao-dien"
      }, "Kho giao di\u1EC7n")), external_react_default.a.createElement("li", {
        className: "nav-item"
      }, external_react_default.a.createElement("a", {
        className: "nav-link page-scroll",
        href: "#doi-tac"
      }, "\u0110\u1ED1i t\xE1c")))))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(23);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(18);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(28);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__(42);
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// EXTERNAL MODULE: ./commons/utils.js
var utils = __webpack_require__(13);

// CONCATENATED MODULE: ./components/images.js












var images_Image =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Image, _React$Component);

  function Image() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Image)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "userAgent", typeof window !== 'undefined' ? Object(utils["get"])(window, 'navigator.userAgent', '').toLowerCase() : '');

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "isAndroid", function () {
      return _this.userAgent.match(/Android/i);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "isBlackBerry", function () {
      return _this.userAgent.match(/BlackBerry/i);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "isIOS", function () {
      return _this.userAgent.match(/iPhone|iPad|iPod/i);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "isOpera", function () {
      return _this.userAgent.match(/Opera Mini/i);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "isWindows", function () {
      return _this.userAgent.match(/IEMobile/i);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "mobile", function () {
      return _this.isAndroid() || _this.isBlackBerry() || _this.isIOS() || _this.isOpera() || _this.isWindows();
    });

    return _this;
  }

  createClass_default()(Image, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          webpPath = _this$props.webpPath,
          mobilePath = _this$props.mobilePath,
          lazyloadHeight = _this$props.lazyloadHeight,
          props = objectWithoutProperties_default()(_this$props, ["path", "webpPath", "mobilePath", "lazyloadHeight"]);

      var match = this.userAgent.match(/version\/(\d+).+?safari/);
      var resultPath = path;

      if (match === null && webpPath && !this.mobile()) {
        resultPath = webpPath;
      } else {
        resultPath = this.mobile() && mobilePath ? mobilePath : path;
      }

      if (lazyloadHeight) {
        return external_react_default.a.createElement(external_react_lazyload_default.a, {
          height: lazyloadHeight
        }, external_react_default.a.createElement("img", extends_default()({}, props, {
          src: resultPath
        })));
      }

      return external_react_default.a.createElement("img", extends_default()({}, props, {
        src: resultPath
      }));
    }
  }]);

  return Image;
}(external_react_default.a.Component);
// CONCATENATED MODULE: ./components/homepage/main-search/style.js


var SearchWrapperStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__SearchWrapperStyled",
  componentId: "flwi5l-0"
})(["position:relative;"]);
var SearchWrapperBackground = external_styled_components_default()(images_Image).withConfig({
  displayName: "style__SearchWrapperBackground",
  componentId: "flwi5l-1"
})(["height:650px;width:100%;object-fit:cover;"]);
var SearchTextWrapperStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__SearchTextWrapperStyled",
  componentId: "flwi5l-2"
})(["position:absolute;top:280px;left:10%;right:10%;@media (min-width:768px) and (max-width:1024px){top:240px;}@media (min-width:481px) and (max-width:768px){top:200px;}@media (max-width:481px){top:180px;}"]);
var SearchMainTextStyled = external_styled_components_default.a.h2.withConfig({
  displayName: "style__SearchMainTextStyled",
  componentId: "flwi5l-3"
})(["font-weight:800;font-size:40px;color:white;@media (max-width:481px){font-size:30px;}"]);
var SearchSecondaryTextStyled = external_styled_components_default.a.h4.withConfig({
  displayName: "style__SearchSecondaryTextStyled",
  componentId: "flwi5l-4"
})(["font-weight:300;font-size:18px;line-height:35px;color:white;margin:10px 10%;@media (max-width:481px){font-size:14px;line-height:25px;}"]);
var SearchBoxGroupStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__SearchBoxGroupStyled",
  componentId: "flwi5l-5"
})(["width:60% !important;margin:0 auto;@media (max-width:768px){width:100% !important;}"]);
var SearchBoxStyled = external_styled_components_default.a.input.withConfig({
  displayName: "style__SearchBoxStyled",
  componentId: "flwi5l-6"
})(["padding:23px 30px !important;border-radius:30px !important;border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;"]);
var SearchBoxBtnStyled = external_styled_components_default.a.button.withConfig({
  displayName: "style__SearchBoxBtnStyled",
  componentId: "flwi5l-7"
})(["padding-top:0;padding-bottom:0;display:flex;justify-content:center;align-items:center;"]);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(10);

// CONCATENATED MODULE: ./components/style.js

 // LABELS

var SeoLabel = external_styled_components_default.a.label.withConfig({
  displayName: "style__SeoLabel",
  componentId: "sc-1cnmhq6-0"
})(["position:absolute;right:-99999px;"]); // BUTTONS

var PrimaryButton = external_styled_components_default()(external_reactstrap_["Button"]).withConfig({
  displayName: "style__PrimaryButton",
  componentId: "sc-1cnmhq6-1"
})(["background-color:#0051ad !important;border:none !important;&:hover{background-color:#003c80 !important;}"]);
var SuccessButton = external_styled_components_default()(external_reactstrap_["Button"]).withConfig({
  displayName: "style__SuccessButton",
  componentId: "sc-1cnmhq6-2"
})(["background-color:#176324 !important;border:none !important;&:hover{background-color:#114b1b !important;}"]);
var PaginationLinkBtn = external_styled_components_default()(external_reactstrap_["PaginationLink"]).withConfig({
  displayName: "style__PaginationLinkBtn",
  componentId: "sc-1cnmhq6-3"
})(["", ";"], function (props) {
  return props.selected ? "\n    background-color: #1258a5 !important;\n    border-color: #1258a5 !important;\n    color: white !important;\n  " : 'color: #1258a5 !important;';
});
var EffectBtn = external_styled_components_default.a.button.withConfig({
  displayName: "style__EffectBtn",
  componentId: "sc-1cnmhq6-4"
})(["overflow:hidden;border:none !important;&:after{content:'';position:absolute;width:0;height:100%;z-index:1;left:0;top:0;background:rgba(0,0,0,0.1);-webkit-transition:all 0.3s ease;-moz-transition:all 0.3s ease;transition:all 0.3s ease;}&:hover{&:after{width:100%;}}"]); // SECTIONS

var SectionStyled = external_styled_components_default.a.section.withConfig({
  displayName: "style__SectionStyled",
  componentId: "sc-1cnmhq6-5"
})(["padding:80px 0;"]);
var SectionHeaderStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__SectionHeaderStyled",
  componentId: "sc-1cnmhq6-6"
})(["color:#fff;margin-bottom:40px;text-align:center;position:relative;"]);
var SectionTitleStyled = external_styled_components_default.a.h2.withConfig({
  displayName: "style__SectionTitleStyled",
  componentId: "sc-1cnmhq6-7"
})(["font-size:36px;margin-bottom:20px;text-transform:uppercase;font-family:'Montserrat',Arial,Helvetica,sans-serif;font-weight:700;color:#263238;position:relative;&::before{content:'';position:absolute;bottom:-8px;width:80px;height:2px;margin:0 auto;left:calc(50% - 40px);background:#ad1a1a;-webkit-transition:0.3s;-moz-transition:0.3s;transition:0.3s;}"]); // ITEM BOXES

var ItemBoxStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__ItemBoxStyled",
  componentId: "sc-1cnmhq6-8"
})(["padding:30px;border-radius:4px;border:1px solid #eaeaea;margin:15px 0;webkit-transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out;"]);
var ItemBoxHeaderStyled = external_styled_components_default.a.h4.withConfig({
  displayName: "style__ItemBoxHeaderStyled",
  componentId: "sc-1cnmhq6-9"
})(["font-size:18px;font-weight:500;margin-bottom:15px;"]);
// CONCATENATED MODULE: ./components/homepage/main-search/index.js










var main_search_MainSearch =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(MainSearch, _React$Component);

  function MainSearch() {
    classCallCheck_default()(this, MainSearch);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(MainSearch).apply(this, arguments));
  }

  createClass_default()(MainSearch, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(SearchWrapperStyled, null, external_react_default.a.createElement(SearchWrapperBackground, {
        path: "/static/images/bg-3.jpg",
        webpPath: "/static/images/bg-3.webp",
        mobilePath: "/static/images/bg-3-mobile.jpg",
        alt: "main background"
      }), external_react_default.a.createElement(SearchTextWrapperStyled, {
        className: "text-center"
      }, external_react_default.a.createElement(SearchMainTextStyled, null, "T\xECm giao di\u1EC7n website cho doanh nghi\u1EC7p c\u1EE7a b\u1EA1n"), external_react_default.a.createElement(SearchSecondaryTextStyled, null, "L\u1EF1a ch\u1ECDn giao di\u1EC7n website nhanh ch\xF3ng t\u1EEB kho website \u0111a l\u0129nh v\u1EF1c ph\xF9 h\u1EE3p nh\u1EA5t v\u1EDBi doanh nghi\u1EC7p c\u1EE7a b\u1EA1n, ti\u1EBFt ki\u1EC7m chi ph\xED v\xE0 th\u1EDDi gian nh\u1EA5t c\xF3 th\u1EC3."), external_react_default.a.createElement(SeoLabel, {
        htmlFor: "search"
      }, "Search"), external_react_default.a.createElement(SearchBoxGroupStyled, {
        className: "input-group"
      }, external_react_default.a.createElement(SearchBoxStyled, {
        id: "search",
        type: "text",
        className: "form-control",
        placeholder: "T\xECm giao di\u1EC7n..."
      }), external_react_default.a.createElement("div", {
        className: "input-group-append"
      }, external_react_default.a.createElement(SearchBoxBtnStyled, {
        className: "btn btn-common btn-effect",
        "aria-label": "Search"
      }, external_react_default.a.createElement(react_fontawesome_["FontAwesomeIcon"], {
        icon: "search"
      }))))));
    }
  }]);

  return MainSearch;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/homepage/services/style.js



var ServiceItemStyled = external_styled_components_default()(ItemBoxStyled).withConfig({
  displayName: "style__ServiceItemStyled",
  componentId: "qwscvn-0"
})(["padding:30px 15px;background:#fff;border-radius:4px;text-align:center;margin-bottom:30px;position:relative;transition:all 0.3s ease-in-out;-moz-transition:all 0.3s ease-in-out;-webkit-transition:all 0.3s ease-in-out;-o-transition:all 0.3s ease-in-out;&:hover{box-shadow:0px 10px 50px 0px rgba(84,110,122,0.35);}"]);
var ServiceItemIconStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__ServiceItemIconStyled",
  componentId: "qwscvn-1"
})(["width:60px;height:60px;margin:0 auto;border-radius:50%;margin-bottom:20px;background-color:", ";"], function (props) {
  switch (props.color) {
    case 1:
      return '#FAE3E3';

    case 2:
      return '#E6F8ED';

    case 3:
      return '#E3EAFA';

    case 4:
      return '#F3EAD6';

    case 5:
      return '#E7E6FF';

    case 6:
      return '#DEDEDE';

    default:
      return 'none';
  }
});
var ServiceItemIconSVGStyled = external_styled_components_default()(react_fontawesome_["FontAwesomeIcon"]).withConfig({
  displayName: "style__ServiceItemIconSVGStyled",
  componentId: "qwscvn-2"
})(["height:100%;line-height:60px;font-size:24px;text-align:center;color:", ";"], function (props) {
  switch (props.color) {
    case 1:
      return '#D82928';

    case 2:
      return '#57D283';

    case 3:
      return '#457BF4';

    case 4:
      return '#f1a90a';

    case 5:
      return '#7271FF';

    case 6:
      return '#35393D';

    default:
      return 'black';
  }
});
// CONCATENATED MODULE: ./components/homepage/services/index.js












var services_ServiceMainPage =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ServiceMainPage, _React$Component);

  function ServiceMainPage() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ServiceMainPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ServiceMainPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "state", {
      services: [{
        title: 'Chuẩn SEO',
        description: 'Đáp ứng tốt tiêu chí SEO Quake nhằm tối ưu kết quả thăng hạng website trên các công cụ tìm kiếm hiện nay (Search Engine)',
        icon: 'cog',
        colorSet: 1
      }, {
        title: 'Thân thiện với di dộng',
        description: 'Thân thiện di động là tính năng Sài Gòn Web đã tích hợp cho tất cả website khách hàng để đáp ứng xu hướng 4.0 đang phát triển mạnh mẽ',
        icon: 'mobile',
        colorSet: 2
      }, {
        title: 'Tối ưu tốc độ',
        description: 'Tốc độ load trang được đo lường và đảm bảo theo các chuẩn như GTMetrix, Lighthouse,… để tốc độ đạt được giá trị cao nhất',
        icon: 'chart-line',
        colorSet: 6
      }, {
        title: 'Giao diện đẹp',
        description: 'Kho website đa dạng, đẹp và đẳng cấp phù hợp nhất với doanh nghiệp của bạn, được thiết kế theo các chuẩn hiện đại của Google, Microsoft,...',
        icon: 'layer-group',
        colorSet: 4
      }, {
        title: 'Dễ sử dụng',
        description: 'Trang quản trị được tùy biến gọn gàng, dễ sử dụng cho những người mới làm quen hoặc cần làm việc nhanh',
        icon: 'smile',
        colorSet: 5
      }, {
        title: 'Bảo mật',
        description: 'Mã nguồn sạch sẽ và an toàn, hạn chế những rủi ro và tấn công đến doanh nghiệp của bạn từ các tin tặc bên ngoài',
        icon: 'lock',
        colorSet: 2
      }]
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderServiceItem", function (service, index) {
      return external_react_default.a.createElement("div", {
        className: "col-lg-4 col-md-6 col-xs-12",
        key: index
      }, external_react_default.a.createElement(ServiceItemStyled, null, external_react_default.a.createElement(ServiceItemIconStyled, {
        color: service.colorSet
      }, external_react_default.a.createElement(ServiceItemIconSVGStyled, {
        color: service.colorSet,
        icon: service.icon
      })), external_react_default.a.createElement(ItemBoxHeaderStyled, null, service.title), external_react_default.a.createElement("p", null, service.description)));
    });

    return _this;
  }

  createClass_default()(ServiceMainPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(SectionStyled, {
        id: "dich-vu"
      }, external_react_default.a.createElement(external_reactstrap_["Container"], null, external_react_default.a.createElement(SectionHeaderStyled, null, external_react_default.a.createElement(SectionTitleStyled, null, "Ti\xEAu ch\xED c\u1EE7a ch\xFAng t\xF4i"), external_react_default.a.createElement("p", null, "\u0110\u1EBFn v\u1EDBi S\xE0i G\xF2n Web, ch\xFAng t\xF4i cam k\u1EBFt s\u1EBD cung c\u1EA5p m\u1EABu website")), external_react_default.a.createElement(external_reactstrap_["Row"], null, this.state.services.map(this.renderServiceItem))));
    }
  }]);

  return ServiceMainPage;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/homepage/clients/style.js


var ClientSlideImgStyled = external_styled_components_default()(images_Image).withConfig({
  displayName: "style__ClientSlideImgStyled",
  componentId: "sc-8tkxqs-0"
})(["height:60px;"]);
// CONCATENATED MODULE: ./components/homepage/clients/index.js












var clients_ClientsMainPage =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ClientsMainPage, _React$Component);

  function ClientsMainPage() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, ClientsMainPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(ClientsMainPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "clients", [{
      name: 'White Palace',
      fileName: 'white-palace'
    }, {
      name: 'AtoZ Travel',
      fileName: 'atoz-travel'
    }, {
      name: 'TBA',
      fileName: 'tba'
    }, {
      name: 'Thiet ke BZC',
      fileName: 'thiekebzc'
    }, {
      name: 'Sai Gon Laps',
      fileName: 'saigonlaps'
    }, {
      name: 'Keo AB',
      fileName: 'keo-ab'
    }]);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderClientItem", function (item, index) {
      return external_react_default.a.createElement(ClientSlideImgStyled, {
        key: index,
        path: "/static/images/clients/".concat(item.fileName, ".png"),
        webpPath: "/static/images/clients/".concat(item.fileName, ".webp"),
        lazyloadHeight: 60,
        alt: item.name
      });
    });

    return _this;
  }

  createClass_default()(ClientsMainPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(SectionStyled, {
        id: "doi-tac"
      }, external_react_default.a.createElement(external_reactstrap_["Container"], null, external_react_default.a.createElement(SectionHeaderStyled, null, external_react_default.a.createElement(SectionTitleStyled, null, "\u0110\u1ED1i t\xE1c")), external_react_default.a.createElement("div", {
        className: "d-flex justify-content-between flex-row flex-wrap"
      }, this.clients.map(this.renderClientItem))));
    }
  }]);

  return ClientsMainPage;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(20);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(16);

// CONCATENATED MODULE: ./components/homepage/web-templates/style.js



var PortfolioItemStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__PortfolioItemStyled",
  componentId: "yi1tpq-0"
})(["padding:10px 0;"]);
var TemplateShotPreviewStyled = external_styled_components_default()(images_Image).withConfig({
  displayName: "style__TemplateShotPreviewStyled",
  componentId: "yi1tpq-1"
})(["width:100%;"]);
var TemplateSingleContentStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__TemplateSingleContentStyled",
  componentId: "yi1tpq-2"
})(["background-color:rgba(255,255,255,0.4);height:100%;left:0;opacity:0;position:absolute;top:0;-webkit-transition-duration:500ms;-o-transition-duration:500ms;transition-duration:500ms;width:100%;"]);
var hoverImageScroll = Object(external_styled_components_["keyframes"])(["100%{transform:translateY(calc(-100% + 300px));}"]);
var TemplateShotItemStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__TemplateShotItemStyled",
  componentId: "yi1tpq-3"
})(["width:100%;height:300px;overflow:hidden;border:1px solid rgba(0,0,0,0.4);position:relative;&:hover ", "{animation:", " 2s ease-in-out;animation-fill-mode:forwards;}&:hover ", "{opacity:1;}"], TemplateShotPreviewStyled, hoverImageScroll, TemplateSingleContentStyled);
var TemplateFancyTableStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__TemplateFancyTableStyled",
  componentId: "yi1tpq-4"
})(["display:table;height:100%;left:0;position:relative;top:0;width:100%;z-index:2;"]);
var TemplateFancyTableItemStyled = external_styled_components_default.a.div.withConfig({
  displayName: "style__TemplateFancyTableItemStyled",
  componentId: "yi1tpq-5"
})(["display:table-cell;vertical-align:middle;text-align:center;"]);
var TemplateBtnFilter = external_styled_components_default()(EffectBtn).withConfig({
  displayName: "style__TemplateBtnFilter",
  componentId: "yi1tpq-6"
})(["border:2px solid #ad1a1a !important;", ";margin:5px;"], function (props) {
  return props.selected && "\n    color: #AD1A1A !important;\n    background-color: white !important;\n  ";
});
// CONCATENATED MODULE: ./components/homepage/web-templates/template-item.js










var template_item_TemplateItem =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(TemplateItem, _React$Component);

  function TemplateItem() {
    classCallCheck_default()(this, TemplateItem);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(TemplateItem).apply(this, arguments));
  }

  createClass_default()(TemplateItem, [{
    key: "render",
    value: function render() {
      var template = this.props.template;
      return external_react_default.a.createElement("div", {
        className: "col-lg-3 col-md-6 col-xs-12"
      }, external_react_default.a.createElement(PortfolioItemStyled, {
        className: "portfolio-item"
      }, external_react_default.a.createElement(TemplateShotItemStyled, null, external_react_default.a.createElement(TemplateShotPreviewStyled, {
        path: "/static/images/uploads/".concat(this.props.template.url, ".jpg"),
        webpPath: "/static/images/uploads/".concat(this.props.template.url, ".webp"),
        alt: template.name,
        lazyloadHeight: 300
      }), external_react_default.a.createElement(TemplateSingleContentStyled, null, external_react_default.a.createElement(TemplateFancyTableStyled, null, external_react_default.a.createElement(TemplateFancyTableItemStyled, null, external_react_default.a.createElement("div", null, external_react_default.a.createElement(routes["Link"], {
        route: "preview",
        params: {
          id: template.url.replace(/\./g, '-')
        }
      }, external_react_default.a.createElement(PrimaryButton, {
        className: "mb-3"
      }, "Xem demo"))), external_react_default.a.createElement("div", null, external_react_default.a.createElement(SuccessButton, null, "Ch\u1ECDn m\u1EABu n\xE0y")))))), external_react_default.a.createElement("div", {
        className: "text-center"
      }, external_react_default.a.createElement("strong", null, template.name))));
    }
  }]);

  return TemplateItem;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./commons/enum.js
var commons_enum = __webpack_require__(25);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectSpread"
var objectSpread_ = __webpack_require__(24);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread_);

// EXTERNAL MODULE: external "reselect"
var external_reselect_ = __webpack_require__(33);

// EXTERNAL MODULE: ./commons/const.js
var commons_const = __webpack_require__(15);

// CONCATENATED MODULE: ./store/template/selector.js






var selector_getTemplates = function getTemplates(state) {
  return state.template.listTemplates;
};

var getTemplatesPage = function getTemplatesPage(state) {
  return state.template.selectedPage;
};

var getTemplatesCategory = function getTemplatesCategory(state) {
  return state.template.selectedTemplateCategory;
};

var getAdminTemplatePage = function getAdminTemplatePage(state) {
  return state.admin.templateSelectedPage;
};

var getFilteredTemplatesSelector = Object(external_reselect_["createSelector"])([selector_getTemplates, getTemplatesPage, getTemplatesCategory], function (templates, page, category) {
  var filteredTemplates = Object.keys(templates);

  if (category) {
    filteredTemplates = filteredTemplates.filter(function (item) {
      return templates[item].category.split(',').indexOf(commons_enum["WEB_CATEGORY"][category]) !== -1;
    });
  }

  if (page !== null) {
    filteredTemplates = filteredTemplates.slice(page * commons_const["TEMPLATE_PER_PAGE"], page * commons_const["TEMPLATE_PER_PAGE"] + commons_const["TEMPLATE_PER_PAGE"]);
  }

  return filteredTemplates.reduce(function (result, key) {
    return objectSpread_default()({}, result, defineProperty_default()({}, key, templates[key]));
  }, {});
});
var getAdminTemplatesSelector = Object(external_reselect_["createSelector"])([selector_getTemplates, getAdminTemplatePage], function (templates, page) {
  var filteredTemplates = Object.keys(templates);

  if (page !== null) {
    filteredTemplates = filteredTemplates.slice(page * commons_const["TEMPLATE_PER_PAGE"], page * commons_const["TEMPLATE_PER_PAGE"] + commons_const["TEMPLATE_PER_PAGE"]);
  }

  return filteredTemplates.reduce(function (result, key) {
    return objectSpread_default()({}, result, defineProperty_default()({}, key, templates[key]));
  }, {});
});
var getTotalPageSelector = Object(external_reselect_["createSelector"])([selector_getTemplates, getTemplatesCategory], function (templates, category) {
  var filteredTemplates = Object.keys(templates);

  if (category) {
    filteredTemplates = filteredTemplates.filter(function (item) {
      return templates[item].category.split(',').indexOf(commons_enum["WEB_CATEGORY"][category]) !== -1;
    });
  }

  var numberOfTemplates = Object.keys(filteredTemplates).length;
  var totalPage = parseInt(numberOfTemplates / commons_const["TEMPLATE_PER_PAGE"]);

  if (numberOfTemplates % commons_const["TEMPLATE_PER_PAGE"] !== 0) {
    totalPage++;
  }

  return totalPage;
});
var getAdminTotalPageSelector = Object(external_reselect_["createSelector"])(selector_getTemplates, function (templates) {
  var numberOfTemplates = Object.keys(templates).length;
  var totalPage = parseInt(numberOfTemplates / commons_const["TEMPLATE_PER_PAGE"]);

  if (numberOfTemplates % commons_const["TEMPLATE_PER_PAGE"] !== 0) {
    totalPage++;
  }

  return totalPage;
});
// EXTERNAL MODULE: ./store/template/action.js
var action = __webpack_require__(3);

// CONCATENATED MODULE: ./components/homepage/web-templates/index.js


















function mapStateToProps(state) {
  return {
    selectedTemplateCategory: state.template.selectedTemplateCategory,
    selectedPage: state.template.selectedPage,
    listTemplates: getFilteredTemplatesSelector(state),
    totalPage: getTotalPageSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemplates: function getTemplates() {
      return dispatch(Object(action["o" /* getTemplate */])());
    },
    selectTemplateCategoryAction: function selectTemplateCategoryAction(cat) {
      return dispatch(Object(action["s" /* selectTemplateCategory */])(cat));
    },
    selectPageAction: function selectPageAction(page) {
      return dispatch(Object(action["t" /* selectTemplatePage */])(page));
    }
  };
}

var web_templates_WebTemplates =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(WebTemplates, _React$Component);

  function WebTemplates() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, WebTemplates);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(WebTemplates)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderCategoryItem", function (item) {
      var _this$props = _this.props,
          selectTemplateCategoryAction = _this$props.selectTemplateCategoryAction,
          selectedTemplateCategory = _this$props.selectedTemplateCategory;
      return external_react_default.a.createElement(TemplateBtnFilter, {
        key: item,
        selected: selectedTemplateCategory === item,
        className: "btn btn-common",
        "data-filter": ".".concat(item.toLowerCase()),
        onClick: function onClick() {
          return selectTemplateCategoryAction(item);
        }
      }, commons_enum["WEB_CATEGORY"][item]);
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderTemplateItem", function (template, index) {
      return external_react_default.a.createElement(template_item_TemplateItem, {
        key: index,
        template: _this.props.listTemplates[template]
      });
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderPaginationItem", function (page) {
      var _this$props2 = _this.props,
          selectPageAction = _this$props2.selectPageAction,
          selectedPage = _this$props2.selectedPage;
      return external_react_default.a.createElement(external_reactstrap_["PaginationItem"], {
        key: page,
        active: page === selectedPage,
        onClick: function onClick() {
          return selectPageAction(page);
        }
      }, external_react_default.a.createElement(PaginationLinkBtn, {
        selected: page === selectedPage
      }, page + 1));
    });

    return _this;
  }

  createClass_default()(WebTemplates, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          listTemplates = _this$props3.listTemplates,
          getTemplates = _this$props3.getTemplates;

      if (Object(utils["isEmpty"])(listTemplates)) {
        getTemplates();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          selectTemplateCategoryAction = _this$props4.selectTemplateCategoryAction,
          listTemplates = _this$props4.listTemplates,
          totalPage = _this$props4.totalPage,
          selectPageAction = _this$props4.selectPageAction,
          selectedTemplateCategory = _this$props4.selectedTemplateCategory,
          selectedPage = _this$props4.selectedPage;
      var templateCategories = Object.keys(commons_enum["WEB_CATEGORY"]);
      var templateIds = Object.keys(listTemplates);
      return external_react_default.a.createElement(SectionStyled, {
        id: "kho-giao-dien"
      }, external_react_default.a.createElement(external_reactstrap_["Container"], null, external_react_default.a.createElement(SectionHeaderStyled, null, external_react_default.a.createElement(SectionTitleStyled, null, "Kho giao di\u1EC7n"), external_react_default.a.createElement("p", null, "Kho giao di\u1EC7n kh\u1ED5ng l\u1ED3 \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt th\u01B0\u1EDDng xuy\xEAn v\u1EDBi h\u01A1n 200+ m\u1EABu website th\xEDch h\u1EE3p cho doanh nghi\u1EC7p c\u1EE7a b\u1EA1n")), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement("div", {
        className: "col-md-12"
      }, external_react_default.a.createElement("div", {
        className: "controls text-center"
      }, external_react_default.a.createElement(TemplateBtnFilter, {
        className: "btn btn-common",
        selected: selectedTemplateCategory === '',
        "data-filter": "all",
        onClick: function onClick() {
          return selectTemplateCategoryAction('');
        }
      }, "T\u1EA5t c\u1EA3"), templateCategories.map(this.renderCategoryItem)))), external_react_default.a.createElement(external_reactstrap_["Row"], null, templateIds.map(this.renderTemplateItem)), external_react_default.a.createElement("div", {
        className: "d-flex justify-content-center mt-3"
      }, external_react_default.a.createElement(external_reactstrap_["Pagination"], {
        "aria-label": "page navigation web template"
      }, selectedPage !== 0 && external_react_default.a.createElement(external_reactstrap_["PaginationItem"], {
        onClick: function onClick() {
          return selectPageAction(selectedPage - 1);
        }
      }, external_react_default.a.createElement(PaginationLinkBtn, {
        previous: true
      })), Array.from(Array(totalPage).keys()).map(this.renderPaginationItem), selectedPage !== totalPage - 1 && external_react_default.a.createElement(external_reactstrap_["PaginationItem"], {
        onClick: function onClick() {
          return selectPageAction(selectedPage + 1);
        }
      }, external_react_default.a.createElement(PaginationLinkBtn, {
        next: true
      }))))));
    }
  }]);

  return WebTemplates;
}(external_react_default.a.Component);

/* harmony default export */ var web_templates = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(web_templates_WebTemplates));
// CONCATENATED MODULE: ./components/footer/style.js

var FooterSection = external_styled_components_default.a.section.withConfig({
  displayName: "style__FooterSection",
  componentId: "l8xhx9-0"
})(["background-color:#ffffff;padding:60px 0;color:#546e7a;"]);
var FooterVerifyImgStyled = external_styled_components_default.a.img.withConfig({
  displayName: "style__FooterVerifyImgStyled",
  componentId: "l8xhx9-1"
})(["width:50%;margin:15px 0;"]);
var FooterMenu = external_styled_components_default.a.ul.withConfig({
  displayName: "style__FooterMenu",
  componentId: "l8xhx9-2"
})(["padding-left:0;li{padding-bottom:12px;a{color:#546e7a;&:hover{color:#ad1a1a;}}}"]);
var FooterContactMenu = external_styled_components_default.a.ul.withConfig({
  displayName: "style__FooterContactMenu",
  componentId: "l8xhx9-3"
})(["margin:0;padding:0;display:inline-block;li{margin-bottom:5px;a{color:#546e7a;&:hover{color:#ad1a1a;}}}"]);
var FooterBlockTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "style__FooterBlockTitle",
  componentId: "l8xhx9-4"
})(["font-size:14px;font-weight:500;color:#263238;margin-bottom:30px;text-transform:uppercase;position:relative;"]);
// CONCATENATED MODULE: ./components/footer/index.js











var footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Footer, _React$Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "services", [{
      name: 'Thiết kế Website',
      url: 'https://sgweb.vn/dich-vu/thiet-ke-website/'
    }, {
      name: 'Hosting',
      url: 'https://sgweb.vn/dich-vu/hosting/'
    }, {
      name: 'VPS',
      url: 'https://sgweb.vn/dich-vu/vps/'
    }, {
      name: 'Email Domain',
      url: 'https://sgweb.vn/dich-vu/email-domain/'
    }, {
      name: 'Mobile App',
      url: 'https://sgweb.vn/dich-vu/mobile-app/'
    }]);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "policies", [{
      name: 'Quy trình làm việc',
      url: 'https://sgweb.vn/quy-trinh-lam-viec/'
    }, {
      name: 'Hướng dẫn thanh toán',
      url: 'https://sgweb.vn/huong-dan-thanh-toan/'
    }, {
      name: 'Quy định sử dụng',
      url: 'https://sgweb.vn/quy-dinh-su-dung/'
    }, {
      name: 'Chính sách riêng tư',
      url: 'https://sgweb.vn/chinh-sach-rieng-tu/'
    }]);

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderServiceItem", function (item, index) {
      return external_react_default.a.createElement("li", {
        key: index
      }, external_react_default.a.createElement("a", {
        href: item.url,
        "aria-label": item.name
      }, item.name));
    });

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "renderPolicyItem", function (item, index) {
      return external_react_default.a.createElement("li", {
        key: index
      }, external_react_default.a.createElement("a", {
        href: item.url,
        "aria-label": item.name
      }, item.name));
    });

    return _this;
  }

  createClass_default()(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", null, external_react_default.a.createElement(FooterSection, null, external_react_default.a.createElement(external_reactstrap_["Container"], null, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement("div", {
        className: "col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12"
      }, external_react_default.a.createElement("img", {
        src: "/static/images/logo-rgb.png",
        alt: "logo"
      }), external_react_default.a.createElement("a", {
        href: "http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=43667"
      }, external_react_default.a.createElement(FooterVerifyImgStyled, {
        src: "/static/images/dathongbao.png",
        alt: "da thong bao bo cong thuong"
      }))), external_react_default.a.createElement("div", {
        className: "col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12"
      }, external_react_default.a.createElement(FooterBlockTitle, null, "D\u1ECBch v\u1EE5"), external_react_default.a.createElement(FooterMenu, null, this.services.map(this.renderServiceItem))), external_react_default.a.createElement("div", {
        className: "col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12"
      }, external_react_default.a.createElement(FooterBlockTitle, null, "Ch\xEDnh s\xE1ch"), external_react_default.a.createElement(FooterMenu, null, this.policies.map(this.renderPolicyItem))), external_react_default.a.createElement("div", {
        className: "col-lg-5 col-md-6 col-sm-6 col-xs-6 col-mb-12"
      }, external_react_default.a.createElement(FooterBlockTitle, null, "CTY TNHH MTV S\xE0i G\xF2n Web"), external_react_default.a.createElement(FooterContactMenu, null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "\u0110\u1ECBa ch\u1EC9: "), external_react_default.a.createElement("span", null, "D3/40 \u1EA4p 4, X. L\xEA Minh Xu\xE2n, H. B\xECnh Ch\xE1nh, TP. H\u1ED3 Ch\xED Minh")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "VP: "), external_react_default.a.createElement("span", null, "8A \u0110\u01B0\u1EDDng Ph\u1ED5 Quang, Ph\u01B0\u1EDDng 2, Qu\u1EADn T\xE2n B\xECnh, TP. H\u1ED3 Ch\xED Minh")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "CN1: "), external_react_default.a.createElement("span", null, "2408, Park 2, Vinhomes T\xE2n C\u1EA3ng, 208 Nguy\u1EC5n H\u1EEFu C\u1EA3nh, Ph\u01B0\u1EDDng 2, B\xECnh Th\u1EA1nh, H\u1ED3 Ch\xED Minh")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "CN2: "), external_react_default.a.createElement("span", null, "70 L\xEA Th\u1ECB Trung, Ph\xFA L\u1EE3i, Th\u1EE7 D\u1EA7u M\u1ED9t, B\xECnh D\u01B0\u01A1ng")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "E-mail: "), external_react_default.a.createElement("span", null, external_react_default.a.createElement("a", {
        href: "mailto:contact@sgweb.vn"
      }, "contact@sgweb.vn"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "Gi\u1EA5y ch\u1EE9ng nh\u1EADn \u0110KKD: "), external_react_default.a.createElement("span", null, "0314418599")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("strong", null, "N\u01A1i c\u1EA5p: "), external_react_default.a.createElement("span", null, "S\u1EDF KH & \u0110T TP.HCM c\u1EA5p l\u1EA7n \u0111\u1EA7u ng\xE0y 23/05/2017"))))))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(29);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(14);

// CONCATENATED MODULE: ./pages/index.js















fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faSearch"], free_solid_svg_icons_["faCog"], free_solid_svg_icons_["faMobile"], free_solid_svg_icons_["faChartLine"], free_solid_svg_icons_["faLayerGroup"], free_solid_svg_icons_["faSmile"], free_solid_svg_icons_["faLock"]);

var pages_HomePage =
/*#__PURE__*/
function (_Component) {
  inherits_default()(HomePage, _Component);

  function HomePage() {
    classCallCheck_default()(this, HomePage);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(HomePage).apply(this, arguments));
  }

  createClass_default()(HomePage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/bootstrap.min.css"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/main.css"
      })), external_react_default.a.createElement(header_Header, null), external_react_default.a.createElement(main_search_MainSearch, null), external_react_default.a.createElement(services_ServiceMainPage, null), external_react_default.a.createElement(web_templates, null), external_react_default.a.createElement(clients_ClientsMainPage, null), external_react_default.a.createElement(footer_Footer, null));
    }
  }]);

  return HomePage;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_HomePage);

/***/ })
/******/ ]);