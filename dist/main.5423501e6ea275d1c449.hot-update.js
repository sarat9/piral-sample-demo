"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/checkout-pilet/Page.tsx":
/*!*************************************!*\
  !*** ./src/checkout-pilet/Page.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var piral = _ref.piral;
  var cart = piral.getData("cart");
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    storeData = _React$useState2[0],
    setStoreData = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    fetch('https://fakestoreapi.com/products').then(function (res) {
      return res.json();
    }).then(function (json) {
      return setStoreData(_toConsumableArray(json));
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Fetching Data from Random API"), cart && cart.map(function (val) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        boxShadow: "grey 1px 1px 1px 1px",
        margin: "10px",
        padding: "10px"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, val.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: val.image,
      style: {
        width: "200px",
        height: "200px"
      }
    }));
  }));
});

/***/ }),

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
/* harmony import */ var _Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page */ "./src/checkout-pilet/Page.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var DemoDiv = function DemoDiv(_ref) {
  var children = _ref.children,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "LocalPilet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from piral.getdata --- foo: ", piral.getData("mobileNo")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This is fetched from piral.getdata and then put to state --- dynamicValue: ", dynamicValue), children);
};
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
    api.registerPage("/checkout", _Page__WEBPACK_IMPORTED_MODULE_1__["default"]);
    api.registerMenu(function () {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/checkout"
      }, "Checkout");
    });
    api.registerExtension('fetch-extention', function (_ref2) {
      var piral = _ref2.piral;
      var dynamicValue = usePiralStoreValueHook("dynamicValue");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DemoDiv, {
        piral: piral,
        dynamicValue: dynamicValue
      }, "This came through a pilet extension slot");
    });
  }
};

/***/ }),

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
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
/* harmony import */ var _local_pilet_demo_pilet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-pilet/demo-pilet */ "./src/local-pilet/demo-pilet.tsx");
/* harmony import */ var _local_second_pilet_second_pilet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local-second-pilet/second-pilet */ "./src/local-second-pilet/second-pilet.tsx");
/* harmony import */ var _fetch_pilet_fetch_pilet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fetch-pilet/fetch-pilet */ "./src/fetch-pilet/fetch-pilet.tsx");
/* harmony import */ var _utils_add_to_cart_pilet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/add-to-cart-pilet */ "./src/utils/add-to-cart-pilet.tsx");
/* harmony import */ var _checkout_pilet_checkout_pilet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout-pilet/checkout-pilet */ "./src/checkout-pilet/checkout-pilet.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










// change to your feed URL here (either using feed.piral.cloud or your own service)
// const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/sample'
var feedUrl = 'https://feed.piral.cloud/api/v1/pilet/empty';
var instance = (0,piral__WEBPACK_IMPORTED_MODULE_9__.createInstance)({
  state: {
    components: _layout__WEBPACK_IMPORTED_MODULE_3__.layout,
    errorComponents: _layout__WEBPACK_IMPORTED_MODULE_3__.errors
  },
  plugins: _toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_10__.createStandardApi)()),
  availablePilets: [_local_pilet_demo_pilet__WEBPACK_IMPORTED_MODULE_4__.demoPilet, _local_second_pilet_second_pilet__WEBPACK_IMPORTED_MODULE_5__.secondPilet, _fetch_pilet_fetch_pilet__WEBPACK_IMPORTED_MODULE_6__.fetchPilet, _utils_add_to_cart_pilet__WEBPACK_IMPORTED_MODULE_7__.addToCartPilet, _checkout_pilet_checkout_pilet__WEBPACK_IMPORTED_MODULE_8__.checkOutPilet]
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
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(piral__WEBPACK_IMPORTED_MODULE_11__.Piral, {
  instance: instance
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a29656a2afedf76bc65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5423501e6ea275d1c449.hot-update.js.map