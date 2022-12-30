"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/checkout-pilet/checkout-pilet.tsx":
/*!***********************************************!*\
  !*** ./src/checkout-pilet/checkout-pilet.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkOutPilet": () => (/* binding */ checkOutPilet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CheckoutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutPage */ "./src/checkout-pilet/CheckoutPage.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



// allow-unused-export -- pulled in via require()
var checkOutPilet = {
  name: 'checkoutPilet',
  version: '0.0.1',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '',
  link: 'fakelink',
  setup: function setup(api) {
    api.registerPage("/checkout", _CheckoutPage__WEBPACK_IMPORTED_MODULE_1__["default"]);
    api.registerMenu(function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/checkout"
      }, "Checkout");
    });
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8cfa94843e46155417ce")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.574dce8144f0b70c9afd.hot-update.js.map