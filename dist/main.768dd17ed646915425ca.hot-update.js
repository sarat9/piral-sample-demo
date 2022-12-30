"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/fetch-pilet/fetch-pilet.tsx":
/*!*****************************************!*\
  !*** ./src/fetch-pilet/fetch-pilet.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchPilet": () => (/* binding */ fetchPilet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/fetch-pilet/Page.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var DemoDiv = function DemoDiv(_ref) {
  var authToken = _ref.authToken,
    children = _ref.children,
    piral = _ref.piral,
    dynamicValue = _ref.dynamicValue;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    storeData = _React$useState2[0],
    setStoreData = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    fetch('https://fakestoreapi.com/products').then(function (res) {
      return res.json();
    }).then(function (json) {
      return console.log(json);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fetch-pilet-div',
    style: {
      padding: "10px",
      background: "lightblue"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "LocalPilet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "AuthToken is ", authToken, ". This is passed from props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from piral.getdata --- foo: ", piral.getData("mobileNo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from piral.getdata and then put to state --- dynamicValue: ", dynamicValue), children);
};
// allow-unused-export -- pulled in via require()
var fetchPilet = {
  name: 'fetchpilet',
  version: '0.0.1',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '',
  link: 'fakelink',
  setup: function setup(api) {
    function usePiralStoreValueHook(name) {
      var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(""),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        value = _React$useState4[0],
        setValue = _React$useState4[1];
      react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
        var handler = function handler(ev) {
          console.log("store-data listen", ev.name);
          if (ev.name === name) {
            setValue(ev.value);
          }
        };
        api.on("store-data", handler);
      }, [name]);
      return value;
    }
    api.registerPage("/fetch", _Page__WEBPACK_IMPORTED_MODULE_1__["default"]);
    api.registerMenu("/fetch", "ft");
    api.registerExtension('fetch-extention', function (_ref2) {
      var piral = _ref2.piral;
      var dynamicValue = usePiralStoreValueHook("dynamicValue");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DemoDiv, {
        authToken: "token12345",
        piral: piral,
        dynamicValue: dynamicValue
      }, "This came through a pilet extension slot");
    });
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("edab00dc1e586e9dac25")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.768dd17ed646915425ca.hot-update.js.map