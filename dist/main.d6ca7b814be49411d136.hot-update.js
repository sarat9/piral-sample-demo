"use strict";
self["webpackHotUpdatenetflix_piral"]("main",{

/***/ "./src/utils/add-to-cart-pilet.tsx":
/*!*****************************************!*\
  !*** ./src/utils/add-to-cart-pilet.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToCartPilet": () => (/* binding */ addToCartPilet)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AddToCartButton = function AddToCartButton(_ref) {
  var piral = _ref.piral,
    addToCart = _ref.addToCart,
    item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: 'second-pilet-div',
    onClick: addToCart(item),
    style: {
      padding: "10px",
      margin: "10px",
      background: "deepskyblue"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "Add to cart"));
};
// allow-unused-export -- pulled in via require()
var addToCartPilet = {
  name: 'addToCartPilet',
  version: '0.0.1',
  spec: 'v2',
  dependencies: {},
  config: {},
  basePath: '',
  link: 'fakelink',
  setup: function setup(api) {
    api.setData('cart', []);
    var addToCart = function addToCart(item) {
      return function (e) {
        e.preventDefault();
        console.log('item', item);
        var cart = api.getData('cart');
        cart.push(item);
        api.setData('cart', cart);
      };
    };
    api.registerExtension('add-to-cart-button', function (_ref2) {
      var piral = _ref2.piral,
        params = _ref2.params;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AddToCartButton, Object.assign({
        piral: piral,
        addToCart: addToCart
      }, params));
    });
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("04be92c76cf17511a6a8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d6ca7b814be49411d136.hot-update.js.map