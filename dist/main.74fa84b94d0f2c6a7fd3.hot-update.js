"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/local-second-pilet/second-pilet.tsx":
/*!*************************************************!*\
  !*** ./src/local-second-pilet/second-pilet.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "secondPilet": () => (/* binding */ secondPilet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SecondPiletDiv = function SecondPiletDiv(_ref) {
  var authToken = _ref.authToken,
    children = _ref.children,
    piral = _ref.piral,
    someValue = _ref.someValue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'second-pilet-div',
    style: {
      padding: "20px",
      margin: "10px",
      background: "deepskyblue"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "SecondPiletDiv"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from piral.getdata --- ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", null, "mobileNo: ", piral.getData("mobileNo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from params --- someValue: ", someValue), children);
};
// allow-unused-export -- pulled in via require()
var secondPilet = {
  name: 'secondpilet',
  version: '0.0.1',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '',
  link: 'fakelink',
  setup: function setup(api) {
    api.registerExtension('dashboard-second-pilet', function (_ref2) {
      var piral = _ref2.piral,
        params = _ref2.params;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SecondPiletDiv, Object.assign({
        piral: piral
      }, params), "This came through a pilet extension slot");
    });
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f8bc355eb89e7a474a3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.74fa84b94d0f2c6a7fd3.hot-update.js.map