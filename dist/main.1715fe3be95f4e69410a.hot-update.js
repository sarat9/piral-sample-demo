"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/local-pilet/Page.tsx":
/*!**********************************!*\
  !*** ./src/local-pilet/Page.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis illum qui nulla adipisci, laudantium vitae atque dicta blanditiis ab. Quae deleniti eum sapiente temporibus tenetur, maxime quibusdam iure nisi."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda adipisci autem et nam quis, corporis maxime id? Commodi maiores eligendi similique velit porro consectetur! Voluptates quo autem omnis deserunt?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis similique veritatis nesciunt non esse commodi eligendi fugit officia earum distinctio. Mollitia blanditiis iusto cum pariatur quaerat fuga qui molestias delectus?"));
});

/***/ }),

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
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/local-pilet/Page.tsx");


var DemoDiv = function DemoDiv(_ref) {
  var authToken = _ref.authToken,
    children = _ref.children;
  // console.log('piral', piral);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "AuthToken is ", authToken), children);
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
    // const handler = (ev: PiralStoreDataEvent) => {
    // 	if (ev.name === name) {
    // 	  console.log(ev.name)
    // 	}
    // };
    // const handler = (ev) => {
    // 	console.log("heheh",ev.name)
    // 	if (ev.name === name) {
    // 	  console.log("heheh",ev.name)
    // 	}
    // };
    // api.on("store-data", handler);
    api.registerPage("/localpiletpage", _Page__WEBPACK_IMPORTED_MODULE_1__["default"]);
    api.registerExtension('dashboard-splash', function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DemoDiv, {
        authToken: "token12345"
      }, "This came through a pilet extension slot");
    });
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bce6d82545952003b7c7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1715fe3be95f4e69410a.hot-update.js.map