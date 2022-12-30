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
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/local-pilet/Page.tsx");


var DemoDiv = function DemoDiv(_ref) {
  var authToken = _ref.authToken,
    children = _ref.children,
    piral = _ref.piral;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "AuthToken is ", authToken, ". This is passed from props"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from piral.getdata --- foo: ", piral.getData("foo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    onClick: function onClick() {
      return piral.setData("foo", "new bar");
    }
  }, "dwdwdwdw"), children);
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
    api.registerExtension('dashboard-splash', function (_ref2) {
      var piral = _ref2.piral;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DemoDiv, {
        authToken: "token12345",
        piral: piral
      }, "This came through a pilet extension slot");
    });
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aa9ef6630f544ab24962")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e8c5fc27600e2ec36afa.hot-update.js.map