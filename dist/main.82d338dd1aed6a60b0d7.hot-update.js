"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/local-pilet/demo-pilet.tsx":
/*!****************************************!*\
  !*** ./src/local-pilet/demo-pilet.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "demoPilet": () => (/* binding */ demoPilet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DemoDiv = function DemoDiv(_ref) {
  var authToken = _ref.authToken,
    children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "authtoken is ", authToken), children);
};
// allow-unused-export -- pulled in via require()
var demoPilet = {
  name: 'demopilet',
  version: '0.0.1',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '',
  link: 'fakelink',
  setup: function setup(api) {
    api.registerExtension('dashboard-splash', function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DemoDiv, null, "This came through a pilet extension slot");
    });
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7d185bbf8686dead34cf")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.82d338dd1aed6a60b0d7.hot-update.js.map