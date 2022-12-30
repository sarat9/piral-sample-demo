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
    piral = _ref.piral;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'second-pilet-div',
    style: {
      background: "yellow"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "SecondPiletDiv"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "AuthToken is ", authToken, ". This is passed from props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from piral.getdata --- foo: ", piral.getData("foo")), children);
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
        authToken: "token12345",
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
/******/ 	__webpack_require__.h = () => ("afbaea62b4547e234ac8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e7153448bb291306537c.hot-update.js.map