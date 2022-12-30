"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var piral_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral/polyfills */ "./node_modules/piral/polyfills.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! piral */ "./node_modules/piral-menu/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
/* harmony import */ var _local_pilet_demo_pilet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-pilet/demo-pilet */ "./src/local-pilet/demo-pilet.tsx");
/* harmony import */ var _local_second_pilet_second_pilet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-second-pilet/second-pilet */ "./src/local-second-pilet/second-pilet.tsx");
/* harmony import */ var _fetch_pilet_fetch_pilet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetch-pilet/fetch-pilet */ "./src/fetch-pilet/fetch-pilet.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








// change to your feed URL here (either using feed.piral.cloud or your own service)
// const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/sample'
var feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';
var instance = (0,piral__WEBPACK_IMPORTED_MODULE_7__.createInstance)({
  state: {
    components: _layout__WEBPACK_IMPORTED_MODULE_3__.layout,
    errorComponents: _layout__WEBPACK_IMPORTED_MODULE_3__.errors
  },
  plugins: [].concat(_toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_8__.createStandardApi)()), [(0,piral__WEBPACK_IMPORTED_MODULE_9__.createMenuApi)()]),
  availablePilets: [_local_pilet_demo_pilet__WEBPACK_IMPORTED_MODULE_4__.demoPilet, _local_second_pilet_second_pilet__WEBPACK_IMPORTED_MODULE_5__.secondPilet, _fetch_pilet_fetch_pilet__WEBPACK_IMPORTED_MODULE_6__.fetchPilet]
  // requestPilets() {
  //   return fetch(feedUrl,{
  //     mode: 'no-cors'
  //   })
  //     .then((res) => {
  //       console.log('resjson',res)
  //       console.log('resjson',res.json())
  //       return res.json()
  //     })
  //     .then((res) => {
  //       console.log('res',res)
  //       return res.items
  //     });
  // },
});

instance.root.setData("mobileNo", "9090909090");
instance.root.registerExtension("setAnotherValue", function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: function onClick() {
      return instance.root.setData("dynamicValue", 42);
    }
  }, "Set value of dynamicValue");
});
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(document.querySelector('#app'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(piral__WEBPACK_IMPORTED_MODULE_10__.Piral, {
  instance: instance
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a4672068ca5b99066618")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1e205ec4c2e9237c4a5a.hot-update.js.map