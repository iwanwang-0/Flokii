(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2b835970"],{

/***/ "0821":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("23a2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1148":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "13a4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/twitter.18ae802a.png";

/***/ }),

/***/ "16c0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"64842d91-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home/index.vue?vue&type=template&id=0c5ce29c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"logo-wrapper"},[_c('img',{attrs:{"src":__webpack_require__("4ffd"),"alt":""}}),(!_vm.user.address)?_c('button',{staticClass:"connect-wallet",on:{"click":_vm.unlock}},[_vm._v("Connect Wallet")]):_vm._e()]),_c('div',{staticClass:"button-group"},[_c('div',{staticClass:"button-row"},[_c('div',{staticClass:"button",on:{"click":_vm.buyWithETH}},[_vm._v("Buy with ETH")]),_c('span',{staticClass:"button-text"},[_vm._v(_vm._s(_vm.ethPrice)+"ETH / 1FlokII")])]),_c('div',{staticClass:"button-row"},[_c('div',{staticClass:"button",on:{"click":_vm.buyWithUSDT}},[_vm._v("Buy with USDT")]),_c('span',{staticClass:"button-text"},[_vm._v(_vm._s(_vm.usdtPrice)+"USDT / 1FlokII")])])]),(_vm.user.address)?_c('div',{staticClass:"address"},[_vm._v(" Contract address: "+_vm._s(_vm._f("trimAddress")(_vm.user.address))+" ")]):_vm._e(),_vm._m(0),_vm._m(1)]),_c('b-modal',{attrs:{"id":"buy-modal","modal-class":"buy-modal","centered":"","hide-footer":"","hide-header":""}},[_c('img',{staticClass:"close-btn",attrs:{"src":__webpack_require__("7b05"),"alt":""},on:{"click":function($event){return _vm.$bvModal.hide('buy-modal')}}}),_c('div',{staticClass:"d-block text-center"},[_c('div',{staticClass:"input-wrapper"},[_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.amount),expression:"amount",modifiers:{"number":true}}],attrs:{"type":"text"},domProps:{"value":(_vm.amount)},on:{"input":function($event){if($event.target.composing){ return; }_vm.amount=_vm._n($event.target.value)},"blur":function($event){return _vm.$forceUpdate()}}}),_c('div',{staticClass:"amount"},[_vm._v(" 100000FlokII ")])])]),_c('div',{staticClass:"modal-button-group"},[_c('b-button',{on:{"click":function($event){return _vm.$bvModal.hide('buy-modal')}}},[_vm._v("Cancel")]),_c('b-button',{attrs:{"disabled":_vm.buyLoading},on:{"click":_vm.buy}},[_vm._v("Ok")])],1)])],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-wrapper"},[_c('div',{staticClass:"list-container"},[_c('div',{staticClass:"list-item"},[_vm._v("Alice bought 3000 FlokII")]),_c('div',{staticClass:"list-item"},[_vm._v("Bob bought 2530 FlokII")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"media-group"},[_c('div',{staticClass:"media-item"},[_c('img',{attrs:{"src":__webpack_require__("13a4"),"alt":""}}),_c('span',[_vm._v("Twitter")])]),_c('div',{staticClass:"media-item"},[_c('img',{attrs:{"src":__webpack_require__("5bf0"),"alt":""}}),_c('span',[_vm._v("Facebook")])]),_c('div',{staticClass:"media-item"},[_c('img',{attrs:{"src":__webpack_require__("d677"),"alt":""}}),_c('span',[_vm._v("Github")])])])}]


// CONCATENATED MODULE: ./src/views/Home/index.vue?vue&type=template&id=0c5ce29c&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.repeat.js
var es_string_repeat = __webpack_require__("38cf");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./node_modules/ethers/lib.esm/ethers.js + 5 modules
var ethers = __webpack_require__("6779");

// EXTERNAL MODULE: ./node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__("e36d");

// EXTERNAL MODULE: ./src/config/index.js + 3 modules
var config = __webpack_require__("f121");

// EXTERNAL MODULE: ./src/eth/ethereum.js
var eth_ethereum = __webpack_require__("b88c");

// CONCATENATED MODULE: ./src/common/sendTransaction.js





console.log(bignumber["a" /* BigNumber */]); // console.log(provider)

var sendTransaction = /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _ref2,
        to,
        data,
        gas,
        _ref2$value,
        value,
        gasPrice,
        transactionParameters,
        txHash,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, to = _ref2.to, data = _ref2.data, gas = _ref2.gas, _ref2$value = _ref2.value, value = _ref2$value === void 0 ? '0x00' : _ref2$value;
            _context.next = 3;
            return eth_ethereum["d" /* provider */].getGasPrice();

          case 3:
            gasPrice = _context.sent;
            // const txCount = await provider.getTransactionCount(ethereum.selectedAddress, 'pending');
            transactionParameters = {
              // nonce: txCount, // ignored by MetaMask
              gasPrice: gasPrice.toHexString(),
              // customizable by user during MetaMask confirmation.
              gas: bignumber["a" /* BigNumber */].from(gas || 240000).toHexString(),
              // customizable by user during MetaMask confirmation.
              to: to,
              // Required except during contract publications.
              from: ethereum.selectedAddress,
              // must match user's active address.
              value: value,
              // Only required to send ether to the recipient from the initiating external account.
              data: data,
              // Optional, but used for defining smart contract creation and interaction.
              chainId: config["a" /* default */].chainId // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.

            }; // txHash is a hex string
            // As with any RPC call, it may throw an error

            _context.next = 7;
            return ethereum.request({
              method: 'eth_sendTransaction',
              params: [transactionParameters]
            });

          case 7:
            txHash = _context.sent;
            return _context.abrupt("return", txHash);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendTransaction() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ var common_sendTransaction = (sendTransaction);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Home/index.vue?vue&type=script&lang=js&







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// @ is an alias to /src





console.log(eth_ethereum["a" /* FLOKIIPreSaleInterface */]);
/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: 'Home',
  components: {},
  data: function data() {
    return {
      buyType: '',
      buyLoading: false,
      amount: 0,
      usdtPrice: 0.01,
      ethPrice: 0.000005
    };
  },
  filters: {
    trimAddress: function trimAddress(address) {
      if (address) {
        return address.replace(/^(.{7}).*(.{3})$/g, function (str, $1, $2) {
          return "".concat($1, "...").concat($2);
        });
      }

      return '';
    }
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(['user'])),
  methods: {
    unlock: function unlock() {
      console.log('xxx');
      this.$store.dispatch('unlockByMetaMask'); // __g_account__.unlockByMetaMask();
    },
    buy: function buy() {
      if (this.buyType === 'eth') {
        this.ethBuySubmit();
      } else {
        this.usdtBuySubmit();
      }
    },
    ethBuySubmit: function ethBuySubmit() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var txHash, claimTx;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.amount) {
                  _context.next = 3;
                  break;
                }

                __g_root__.$bvToast.toast('Please input amount', {
                  title: _this.$t('tip'),
                  variant: 'fail',
                  autoHideDelay: 5000
                });

                return _context.abrupt("return", false);

              case 3:
                _this.buyLoading = true;
                _context.next = 6;
                return common_sendTransaction({
                  to: config["a" /* default */].FLOKIIPreSaleAddress,
                  value: ethers["utils"].hexValue(_this.ethPrice * _this.amount * 1e18),
                  data: eth_ethereum["a" /* FLOKIIPreSaleInterface */].encodeFunctionData('purchaseByETH()')
                });

              case 6:
                txHash = _context.sent;
                _context.next = 9;
                return eth_ethereum["d" /* provider */].waitForTransaction(txHash);

              case 9:
                claimTx = _context.sent;
                _this.buyLoading = false;

                if (claimTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success', {
                    title: _this.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail', {
                    title: _this.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    usdtBuySubmit: function usdtBuySubmit() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var realPrice, allowance, approveTxHash, approveTx, bidTxHash, bidTx;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this2.amount) {
                  _context2.next = 3;
                  break;
                }

                __g_root__.$bvToast.toast('Please input amount', {
                  title: _this2.$t('tip'),
                  variant: 'fail',
                  autoHideDelay: 5000
                });

                return _context2.abrupt("return", false);

              case 3:
                realPrice = _this2.amount * _this2.usdtPrice;
                _context2.next = 6;
                return eth_ethereum["b" /* USDTContract */].allowance(ethereum.selectedAddress, config["a" /* default */].FLOKIIPreSaleAddress);

              case 6:
                allowance = _context2.sent;
                console.log(allowance);

                if (!allowance.lt(realPrice * 1e6)) {
                  _context2.next = 21;
                  break;
                }

                _this2.submitting = true;
                _context2.next = 12;
                return common_sendTransaction({
                  to: config["a" /* default */].USDTAddress,
                  data: eth_ethereum["c" /* USDTInterface */].encodeFunctionData('approve', [config["a" /* default */].FLOKIIPreSaleAddress, bignumber["a" /* BigNumber */].from('9'.repeat(32)).toHexString()])
                });

              case 12:
                approveTxHash = _context2.sent;
                _context2.next = 15;
                return eth_ethereum["d" /* provider */].waitForTransaction(approveTxHash);

              case 15:
                approveTx = _context2.sent;

                if (!(approveTx.status !== 1)) {
                  _context2.next = 20;
                  break;
                }

                __g_root__.$bvToast.toast('Approve fail', {
                  title: _this2.$t('tip'),
                  variant: 'danger',
                  autoHideDelay: 5000
                });

                _this2.submitting = false;
                return _context2.abrupt("return");

              case 20:
                console.log(approveTx);

              case 21:
                // if (this.auction.lastPrice.gt(realPrice)) {
                //   this.pricestate = false;
                //   return;
                // }
                _this2.submitting = true;
                _context2.next = 24;
                return common_sendTransaction({
                  to: config["a" /* default */].FLOKIIPreSaleAddress,
                  gas: 960000,
                  data: eth_ethereum["a" /* FLOKIIPreSaleInterface */].encodeFunctionData('purchaseByUSDT', [realPrice * 1e6])
                });

              case 24:
                bidTxHash = _context2.sent;
                _context2.next = 27;
                return eth_ethereum["d" /* provider */].waitForTransaction(bidTxHash);

              case 27:
                bidTx = _context2.sent;

                if (bidTx.status === 1) {
                  __g_root__.$bvToast.toast('Buy success.', {
                    title: _this2.$t('tip'),
                    variant: 'success',
                    autoHideDelay: 5000
                  });
                } else {
                  __g_root__.$bvToast.toast('Buy fail, please retry.', {
                    title: _this2.$t('tip'),
                    variant: 'danger',
                    autoHideDelay: 5000
                  });
                }

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    buyWithETH: function buyWithETH() {
      this.buyType = 'eth';
      this.$bvModal.show('buy-modal');
    },
    buyWithUSDT: function buyWithUSDT() {
      this.buyType = 'usdt';
      this.$bvModal.show('buy-modal');
    }
  }
});
// CONCATENATED MODULE: ./src/views/Home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Home/index.vue?vue&type=style&index=0&id=0c5ce29c&lang=scss&scoped=true&
var Homevue_type_style_index_0_id_0c5ce29c_lang_scss_scoped_true_ = __webpack_require__("1e58");

// EXTERNAL MODULE: ./src/views/Home/index.vue?vue&type=style&index=1&lang=scss&
var Homevue_type_style_index_1_lang_scss_ = __webpack_require__("0821");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/Home/index.vue







/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0c5ce29c",
  null
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "1e58":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c5ce29c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8625");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c5ce29c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0c5ce29c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "23a2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "38cf":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var repeat = __webpack_require__("1148");

// `String.prototype.repeat` method
// https://tc39.es/ecma262/#sec-string.prototype.repeat
$({ target: 'String', proto: true }, {
  repeat: repeat
});


/***/ }),

/***/ "4ffd":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/logo.2c3d0221.png";

/***/ }),

/***/ "5bf0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/facebook.d56cdc56.png";

/***/ }),

/***/ "7b05":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAABHUlEQVRIibXWMXLCQAwF0G93VFDnMhkac5UchCauQ5FUnIBbcAg4QGhpki7zMzI2WRvbK+0qmlGz6/EbrWdlFSTxz1EAuCNlYG0BVM62YG8AXu8rUiHJmrf4Jlm1a7kpp7fjX9TNaZJckjwFGx7oEJN4l/XugSdHdBLrKvREZ7EhmItGsTEwFVVhU6AVVWNzoBY1YTEwhpoxDTiFblIwLTiG/qRgFnAMNWOS5Wzr7ccFwHGwJn+BQ/g3iEbGpdZcmaQjHcP2qR0pBeu+WVIbTMU099QEWi61Cc3FzKgHZkK9MDXqialQbyyKlm1b+go60geAF1O7eoxPAGsA53ZnAeA5nEslZW7MrWyq0mYmlRyO+r2x3ClWAK7NuwD8ArF9TQEqOLfpAAAAAElFTkSuQmCC"

/***/ }),

/***/ "8625":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d677":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "client/img/github.ad4e340b.png";

/***/ })

}]);