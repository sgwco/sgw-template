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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
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
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
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
/* 14 */,
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(56);


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(11);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(36);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(18);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

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

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(9);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(20);

// EXTERNAL MODULE: external "redux-persist/integration/react"
var react_ = __webpack_require__(37);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__(38);
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__(39);
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(35);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(21);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(31);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(16);

// CONCATENATED MODULE: ./components/progress/index.js









external_nprogress_default.a.configure({
  showSpinner: false
});

routes["Router"].onRouteChangeStart = function () {
  external_nprogress_default.a.start();
};

routes["Router"].onRouteChangeComplete = function () {
  return external_nprogress_default.a.done();
};

routes["Router"].onRouteChangeError = function () {
  return external_nprogress_default.a.done();
};

var progress_Progress =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(Progress, _React$Component);

  function Progress() {
    classCallCheck_default()(this, Progress);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Progress).apply(this, arguments));
  }

  createClass_default()(Progress, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/nprogress.css"
      }));
    }
  }]);

  return Progress;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(17);

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(40);
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(30);

// EXTERNAL MODULE: external "redux-persist/lib/storage"
var storage_ = __webpack_require__(41);
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__(44);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__(12);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(22);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(19);

// EXTERNAL MODULE: ./store/template/action.js
var template_action = __webpack_require__(3);

// EXTERNAL MODULE: ./commons/utils.js
var utils = __webpack_require__(13);

// CONCATENATED MODULE: ./store/template/saga.js


var _marked =
/*#__PURE__*/
regenerator_default.a.mark(getTemplates),
    _marked2 =
/*#__PURE__*/
regenerator_default.a.mark(getTemplateByUrl),
    _marked3 =
/*#__PURE__*/
regenerator_default.a.mark(addTemplate),
    _marked4 =
/*#__PURE__*/
regenerator_default.a.mark(editTemplate),
    _marked5 =
/*#__PURE__*/
regenerator_default.a.mark(deleteTemplate),
    _marked6 =
/*#__PURE__*/
regenerator_default.a.mark(templateSaga);






function getTemplates() {
  var results;
  return regenerator_default.a.wrap(function getTemplates$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["call"])(external_axios_default.a.get, '/api/template');

        case 2:
          results = _context.sent;
          _context.next = 5;
          return Object(effects_["put"])(Object(template_action["r" /* getTemplateSuccess */])(results.data));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
function getTemplateByUrl(_ref) {
  var url, results;
  return regenerator_default.a.wrap(function getTemplateByUrl$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          url = _ref.url;
          _context2.next = 3;
          return Object(effects_["call"])(external_axios_default.a.get, "".concat(process.env.BASE_URL || '', "/api/template/").concat(url));

        case 3:
          results = _context2.sent;
          _context2.next = 6;
          return Object(effects_["put"])(Object(template_action["q" /* getTemplateByUrlSuccess */])(results.data));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
function addTemplate(_ref2) {
  var data, cb, template, message;
  return regenerator_default.a.wrap(function addTemplate$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          data = _ref2.data, cb = _ref2.cb;
          _context3.prev = 1;
          _context3.next = 4;
          return Object(effects_["call"])(external_axios_default.a.post, '/api/template', data);

        case 4:
          template = _context3.sent;
          _context3.next = 7;
          return Object(effects_["put"])({
            type: template_action["c" /* ADD_TEMPLATE_SUCCESS */],
            template: template.data
          });

        case 7:
          if (cb) {
            cb(template.data);
          }

          external_react_toastify_["toast"].success('Tạo mới thành công!');
          _context3.next = 17;
          break;

        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          _context3.next = 15;
          return Object(effects_["put"])({
            type: template_action["b" /* ADD_TEMPLATE_FAIL */],
            id: data.id
          });

        case 15:
          message = Object(utils["get"])(_context3.t0, 'response.data.message', _context3.t0.message);
          external_react_toastify_["toast"].error(message);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, this, [[1, 11]]);
}
function editTemplate(_ref3) {
  var data, template, message;
  return regenerator_default.a.wrap(function editTemplate$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          data = _ref3.data;
          _context4.prev = 1;
          _context4.next = 4;
          return Object(effects_["call"])(external_axios_default.a.patch, '/api/template', data);

        case 4:
          template = _context4.sent;
          _context4.next = 7;
          return Object(effects_["put"])({
            type: template_action["h" /* EDIT_TEMPLATE_SUCCESS */],
            template: template.data
          });

        case 7:
          external_react_toastify_["toast"].success('Chỉnh sửa thành công!');
          _context4.next = 16;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          _context4.next = 14;
          return Object(effects_["put"])({
            type: template_action["g" /* EDIT_TEMPLATE_FAIL */],
            id: data.id
          });

        case 14:
          message = Object(utils["get"])(_context4.t0, 'response.data.message', _context4.t0.message);
          external_react_toastify_["toast"].error(message);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, this, [[1, 10]]);
}
function deleteTemplate(_ref4) {
  var id, message;
  return regenerator_default.a.wrap(function deleteTemplate$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = _ref4.id;
          _context5.prev = 1;
          _context5.next = 4;
          return Object(effects_["call"])(external_axios_default.a.delete, "/api/template?id=".concat(id || ''));

        case 4:
          _context5.next = 6;
          return Object(effects_["put"])({
            type: template_action["e" /* DELETE_TEMPLATE_SUCCESS */],
            id: id
          });

        case 6:
          external_react_toastify_["toast"].success('Xóa thành công!');
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          message = Object(utils["get"])(_context5.t0, 'response.data.message', _context5.t0.message);
          external_react_toastify_["toast"].error(message);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, this, [[1, 9]]);
}
function templateSaga() {
  return regenerator_default.a.wrap(function templateSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(effects_["takeEvery"])(template_action["i" /* GET_TEMPLATES */], getTemplates);

        case 2:
          _context6.next = 4;
          return Object(effects_["takeEvery"])(template_action["k" /* GET_TEMPLATE_BY_URL */], getTemplateByUrl);

        case 4:
          _context6.next = 6;
          return Object(effects_["takeEvery"])(template_action["a" /* ADD_TEMPLATE */], addTemplate);

        case 6:
          _context6.next = 8;
          return Object(effects_["takeEvery"])(template_action["f" /* EDIT_TEMPLATE */], editTemplate);

        case 8:
          _context6.next = 10;
          return Object(effects_["takeEvery"])(template_action["d" /* DELETE_TEMPLATE */], deleteTemplate);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, this);
}
// CONCATENATED MODULE: ./lib/history.js
var history_history = null;

if (typeof document !== 'undefined') {
  var createBrowserHistory = __webpack_require__(45).default;

  history_history = createBrowserHistory();
}

/* harmony default export */ var lib_history = (history_history);
// CONCATENATED MODULE: ./store/auth/action.js
var LOGIN = 'auth/LOGIN';
var LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
var login = function login(email, password) {
  return {
    type: LOGIN,
    email: email,
    password: password
  };
};
// CONCATENATED MODULE: ./store/auth/saga.js


var saga_marked =
/*#__PURE__*/
regenerator_default.a.mark(saga_login),
    saga_marked2 =
/*#__PURE__*/
regenerator_default.a.mark(authSaga);







function saga_login(_ref) {
  var email, password, _ref2, data, message;

  return regenerator_default.a.wrap(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, password = _ref.password;
          _context.prev = 1;
          _context.next = 4;
          return Object(effects_["call"])(external_axios_default.a.post, '/api/auth/login', {
            email: email,
            password: password
          });

        case 4:
          _ref2 = _context.sent;
          data = _ref2.data;
          _context.next = 8;
          return Object(effects_["put"])({
            type: LOGIN_SUCCESS,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken
          });

        case 8:
          lib_history.push('/admin');
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          message = Object(utils["get"])(_context.t0, 'response.data.message', _context.t0.message);
          external_react_toastify_["toast"].error(message);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, saga_marked, this, [[1, 11]]);
}
function authSaga() {
  return regenerator_default.a.wrap(function authSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(effects_["takeEvery"])(LOGIN, saga_login);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, saga_marked2, this);
}
// CONCATENATED MODULE: ./store/sagas.js


var sagas_marked =
/*#__PURE__*/
regenerator_default.a.mark(rootSaga);




function rootSaga() {
  return regenerator_default.a.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(effects_["all"])([authSaga(), templateSaga()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, sagas_marked, this);
}
// CONCATENATED MODULE: ./store/admin/action.js
var TOGGLE_SIDEBAR = 'admin/TOGGLE_SIDEBAR';
var TOGGLE_MINIMIZED_SIDEBAR = 'admin/TOGGLE_MINIMIZED_SIDEBAR';
var ADMIN_SELECT_TEMPLATE_PAGE = 'admin/ADMIN_SELECT_TEMPLATE_PAGE';
// CONCATENATED MODULE: ./store/admin/reducer.js

var initState = {
  sidebarIsShown: true,
  sidebarIsMinimized: false,
  templateSelectedPage: 0
};
function adminReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newState = Object.assign({}, state);

  switch (action.type) {
    case TOGGLE_SIDEBAR:
      newState.sidebarIsShown = !newState.sidebarIsShown;
      break;

    case TOGGLE_MINIMIZED_SIDEBAR:
      newState.sidebarIsMinimized = !newState.sidebarIsMinimized;
      break;

    case ADMIN_SELECT_TEMPLATE_PAGE:
      newState.templateSelectedPage = action.page;
      break;
  }

  return newState;
}
// CONCATENATED MODULE: ./store/auth/reducer.js



var reducer_initState = {
  accessToken: '',
  refreshToken: ''
};
function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducer_initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newState = Object.assign({}, state);

  switch (action.type) {
    case external_redux_persist_["REHYDRATE"]:
      newState = Object(utils["get"])(action, 'payload.auth', state);
      break;

    case LOGIN_SUCCESS:
      newState.accessToken = action.accessToken;
      newState.refreshToken = action.refreshToken;
      break;
  }

  return newState;
}
// CONCATENATED MODULE: ./store/template/reducer.js


var template_reducer_initState = {
  selectedTemplateCategory: '',
  selectedPage: 0,
  listTemplates: {},
  previewTemplate: {},
  adminEditInProgress: [],
  adminIsCreating: false
};
function templateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : template_reducer_initState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var newState = Object.assign({}, state);

  switch (action.type) {
    case template_action["j" /* GET_TEMPLATES_SUCCESS */]:
      newState.listTemplates = action.listTemplates;
      break;

    case template_action["l" /* GET_TEMPLATE_BY_URL_SUCCESS */]:
      newState.previewTemplate = action.template;
      break;

    case template_action["m" /* SELECT_TEMPLATE_CATEGORY */]:
      newState.selectedTemplateCategory = action.category;
      newState.selectedPage = 0;
      break;

    case template_action["n" /* SELECT_TEMPLATE_PAGE */]:
      newState.selectedPage = action.page;
      break;

    case template_action["a" /* ADD_TEMPLATE */]:
      newState.adminIsCreating = true;
      break;

    case template_action["c" /* ADD_TEMPLATE_SUCCESS */]:
      {
        var listTemplates = Object.assign({}, newState.listTemplates);
        var templateId = Object(utils["get"])(action, 'template.id', '');

        if (templateId) {
          listTemplates[templateId] = action.template;
        }

        newState.listTemplates = listTemplates;
        newState.adminIsCreating = false;
        break;
      }

    case template_action["b" /* ADD_TEMPLATE_FAIL */]:
      newState.adminIsCreating = false;
      break;

    case template_action["f" /* EDIT_TEMPLATE */]:
      {
        var editIds = Object(utils["clone"])(newState.adminEditInProgress);

        if (editIds.indexOf(action.data.id) === -1) {
          editIds.push(action.data.id);
          newState.adminEditInProgress = editIds;
        }

        break;
      }

    case template_action["h" /* EDIT_TEMPLATE_SUCCESS */]:
      {
        var _listTemplates = Object.assign({}, newState.listTemplates);

        var _editIds = Object(utils["clone"])(newState.adminEditInProgress);

        var _templateId = Object(utils["get"])(action, 'template.id', '');

        if (_templateId) {
          _listTemplates[_templateId] = action.template;
        }

        var editIndex = _editIds.indexOf(_templateId + '');

        if (editIndex > -1) {
          _editIds.splice(editIndex, 1);

          newState.adminEditInProgress = _editIds;
        }

        newState.listTemplates = _listTemplates;
        break;
      }

    case template_action["g" /* EDIT_TEMPLATE_FAIL */]:
      {
        var _editIds2 = Object(utils["clone"])(newState.adminEditInProgress);

        var _editIndex = _editIds2.indexOf(action.id + '');

        if (_editIndex > -1) {
          _editIds2.splice(_editIndex, 1);

          newState.adminEditInProgress = _editIds2;
        }

        break;
      }

    case template_action["e" /* DELETE_TEMPLATE_SUCCESS */]:
      {
        var _listTemplates2 = Object.assign({}, newState.listTemplates);

        delete _listTemplates2[action.id];
        newState.listTemplates = _listTemplates2;
        break;
      }
  }

  return newState;
}
// CONCATENATED MODULE: ./store/reducers.js




/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  template: templateReducer,
  admin: adminReducer,
  auth: authReducer
}));
// CONCATENATED MODULE: ./store/index.js







var persistConfig = {
  key: 'root',
  storage: storage_default.a,
  whitelist: ['auth']
};
var persistedReducer = Object(external_redux_persist_["persistReducer"])(persistConfig, reducers);
var sagaMiddleware = external_redux_saga_default()();
var middlewares = [sagaMiddleware];
function makeStore(initialState, _ref) {
  var isServer = _ref.isServer;
  var store = null;

  if (isServer) {
    store = Object(external_redux_["createStore"])(reducers, initialState, external_redux_["applyMiddleware"].apply(void 0, middlewares));
  } else {
    if (false) {}

    store = Object(external_redux_["createStore"])(persistedReducer, initialState, external_redux_["applyMiddleware"].apply(void 0, middlewares));
    store.__persistor = Object(external_redux_persist_["persistStore"])(store);
  }

  store.runSagaTask = function () {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }; // run the rootSaga initially


  store.runSagaTask();
  return store;
}
// CONCATENATED MODULE: ./pages/_app.js

















 // import { Loader } from 'components/loader';

var _app_MyApp =
/*#__PURE__*/
function (_App) {
  inherits_default()(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(assertThisInitialized_default()(_this)), "createUrl", function (router) {
      // This is to make sure we don't references the router object at call time
      var pathname = router.pathname,
          asPath = router.asPath,
          query = router.query;
      return {
        get query() {
          return query;
        },

        get pathname() {
          return pathname;
        },

        get asPath() {
          return asPath;
        },

        back: function back() {
          router.back();
        },
        push: function push(url, as) {
          return router.push(url, as);
        },
        pushTo: function pushTo(href, as) {
          var pushRoute = as ? href : null;
          var pushUrl = as || href;
          return router.push(pushRoute, pushUrl);
        },
        replace: function replace(url, as) {
          return router.replace(url, as);
        },
        replaceTo: function replaceTo(href, as) {
          var replaceRoute = as ? href : null;
          var replaceUrl = as || href;
          return router.replace(replaceRoute, replaceUrl);
        }
      };
    });

    return _this;
  }

  createClass_default()(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          router = _this$props.router,
          store = _this$props.store;
      var url = this.createUrl(router);
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(react_["PersistGate"], {
        persistor: store.__persistor
      }, external_react_default.a.createElement(progress_Progress, null), external_react_default.a.createElement(Component, extends_default()({}, pageProps, {
        url: url
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(makeStore)(external_next_redux_saga_default()(_app_MyApp)));

/***/ })
/******/ ]);