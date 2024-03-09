"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Contact/page",{

/***/ "(app-pages-browser)/./app/components/razorpay.js":
/*!************************************!*\
  !*** ./app/components/razorpay.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RazorpayButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// components/RazorpayButton.js\n\nfunction RazorpayButton(param) {\n    let { buttonId } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Load Razorpay SDK asynchronously\n        const loadRazorpay = async ()=>{\n            try {\n                const script1 = document.createElement(\"script\");\n                script1.src = \"https://checkout.razorpay.com/v1/payment-button.js\";\n                script1.async = true;\n                document.body.appendChild(script1);\n            } catch (error) {\n                console.error(\"Failed to load RazorPay script:\", error);\n            }\n            script.onload = ()=>{\n                // Initialize the payment button\n                const options = {\n                    \"key\": \"<YOUR_RAZORPAY_API_KEY>\",\n                    \"button_id\": buttonId,\n                    \"amount\": 50000,\n                    \"currency\": \"INR\",\n                    \"name\": \"Your Company Name\",\n                    \"description\": \"Purchase Description\",\n                    \"image\": \"/your-logo.png\",\n                    \"handler\": function(response) {\n                        handlePaymentSuccess(response.razorpay_payment_id);\n                    },\n                    \"prefill\": {\n                        \"name\": \"John Doe\",\n                        \"email\": \"john@example.com\",\n                        \"contact\": \"9999999999\"\n                    },\n                    \"theme\": {\n                        \"color\": \"#3399cc\"\n                    }\n                };\n                const rzpButton = new window.Razorpay.Button(options);\n                rzpButton.on(\"payment.success\", function(response) {\n                    console.log(response);\n                });\n                rzpButton.on(\"payment.error\", function(error) {\n                    console.error(error);\n                });\n                rzpButton.open();\n            };\n        };\n        loadRazorpay();\n        return ()=>{\n            // Cleanup function\n            const razorpayScript = document.getElementById(\"razorpay-script\");\n            if (razorpayScript) {\n                razorpayScript.remove();\n            }\n        };\n    }, [\n        buttonId\n    ]);\n    const handlePaymentSuccess = (response)=>{\n        console.log(\"Payment S\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"razorpay-container\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\isbn\\\\search\\\\app\\\\components\\\\razorpay.js\",\n        lineNumber: 70,\n        columnNumber: 10\n    }, this);\n}\n_s(RazorpayButton, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = RazorpayButton;\n;\nvar _c;\n$RefreshReg$(_c, \"RazorpayButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Jhem9ycGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLCtCQUErQjtBQUVVO0FBRTFCLFNBQVNFLGVBQWdCLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDdENGLGdEQUFTQSxDQUFDO1FBQ1IsbUNBQW1DO1FBQ25DLE1BQU1HLGVBQWU7WUFDakIsSUFBRztnQkFDTCxNQUFNQyxVQUFTQyxTQUFTQyxhQUFhLENBQUM7Z0JBQ3RDRixRQUFPRyxHQUFHLEdBQUc7Z0JBQ2JILFFBQU9JLEtBQUssR0FBRztnQkFDZkgsU0FBU0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOO1lBQ3hCLEVBQ0EsT0FBTU8sT0FBTTtnQkFDUkMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7WUFHckQ7WUFDRlAsT0FBT1MsTUFBTSxHQUFHO2dCQUNkLGdDQUFnQztnQkFDaEMsTUFBTUMsVUFBVTtvQkFDZCxPQUFPO29CQUNQLGFBQWFaO29CQUNiLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWixRQUFRO29CQUNSLGVBQWU7b0JBQ2YsU0FBUztvQkFDVCxXQUFXLFNBQVVhLFFBQVE7d0JBQzNCQyxxQkFBcUJELFNBQVNFLG1CQUFtQjtvQkFDbkQ7b0JBQ0EsV0FBVzt3QkFDVCxRQUFRO3dCQUNSLFNBQVM7d0JBQ1QsV0FBVztvQkFDYjtvQkFDQSxTQUFTO3dCQUNQLFNBQVM7b0JBQ1g7Z0JBQ0Y7Z0JBRUEsTUFBTUMsWUFBWSxJQUFJQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQ1A7Z0JBQzdDSSxVQUFVSSxFQUFFLENBQUMsbUJBQW1CLFNBQVVQLFFBQVE7b0JBQ2hESCxRQUFRVyxHQUFHLENBQUNSO2dCQUNkO2dCQUNBRyxVQUFVSSxFQUFFLENBQUMsaUJBQWlCLFNBQVVYLEtBQUs7b0JBQzNDQyxRQUFRRCxLQUFLLENBQUNBO2dCQUNoQjtnQkFDQU8sVUFBVU0sSUFBSTtZQUNoQjtRQUNGO1FBRUFyQjtRQUVBLE9BQU87WUFDTCxtQkFBbUI7WUFDbkIsTUFBTXNCLGlCQUFpQnBCLFNBQVNxQixjQUFjLENBQUM7WUFDL0MsSUFBSUQsZ0JBQWdCO2dCQUNsQkEsZUFBZUUsTUFBTTtZQUN2QjtRQUNGO0lBQ0YsR0FBRztRQUFDekI7S0FBUztJQUViLE1BQU1jLHVCQUF1QkQsQ0FBQUE7UUFDM0JILFFBQVFXLEdBQUcsQ0FBQztJQUNkO0lBQ0EscUJBQU8sOERBQUNLO1FBQUlDLElBQUc7Ozs7OztBQUNqQjtHQWhFd0I1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9yYXpvcnBheS5qcz8zZmUyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG4vLyBjb21wb25lbnRzL1Jhem9ycGF5QnV0dG9uLmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF6b3JwYXlCdXR0b24gKHsgYnV0dG9uSWQgfSl7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIExvYWQgUmF6b3JwYXkgU0RLIGFzeW5jaHJvbm91c2x5XHJcbiAgICBjb25zdCBsb2FkUmF6b3JwYXkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9wYXltZW50LWJ1dHRvbi5qcyc7XHJcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgUmF6b3JQYXkgc2NyaXB0OlwiLCBlcnJvcik7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgcGF5bWVudCBidXR0b25cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgXCJrZXlcIjogXCI8WU9VUl9SQVpPUlBBWV9BUElfS0VZPlwiLFxyXG4gICAgICAgICAgXCJidXR0b25faWRcIjogYnV0dG9uSWQsXHJcbiAgICAgICAgICBcImFtb3VudFwiOiA1MDAwMCwgLy8gRXhhbXBsZSBhbW91bnQgaW4gcGFpc2UgKElOUiA1MDAuMDApXHJcbiAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSU5SXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJZb3VyIENvbXBhbnkgTmFtZVwiLFxyXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlB1cmNoYXNlIERlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICBcImltYWdlXCI6IFwiL3lvdXItbG9nby5wbmdcIixcclxuICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaGFuZGxlUGF5bWVudFN1Y2Nlc3MocmVzcG9uc2UucmF6b3JwYXlfcGF5bWVudF9pZCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJwcmVmaWxsXCI6IHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9obiBEb2VcIixcclxuICAgICAgICAgICAgXCJlbWFpbFwiOiBcImpvaG5AZXhhbXBsZS5jb21cIixcclxuICAgICAgICAgICAgXCJjb250YWN0XCI6IFwiOTk5OTk5OTk5OVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJ0aGVtZVwiOiB7XHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMzM5OWNjXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByenBCdXR0b24gPSBuZXcgd2luZG93LlJhem9ycGF5LkJ1dHRvbihvcHRpb25zKTtcclxuICAgICAgICByenBCdXR0b24ub24oJ3BheW1lbnQuc3VjY2VzcycsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJ6cEJ1dHRvbi5vbigncGF5bWVudC5lcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcnpwQnV0dG9uLm9wZW4oKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgbG9hZFJhem9ycGF5KCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgLy8gQ2xlYW51cCBmdW5jdGlvblxyXG4gICAgICBjb25zdCByYXpvcnBheVNjcmlwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXpvcnBheS1zY3JpcHQnKTtcclxuICAgICAgaWYgKHJhem9ycGF5U2NyaXB0KSB7XHJcbiAgICAgICAgcmF6b3JwYXlTY3JpcHQucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfSwgW2J1dHRvbklkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBheW1lbnRTdWNjZXNzID0gcmVzcG9uc2UgPT57XHJcbiAgICBjb25zb2xlLmxvZyhcIlBheW1lbnQgU1wiKVxyXG4gIH1cclxuICByZXR1cm4gPGRpdiBpZD1cInJhem9ycGF5LWNvbnRhaW5lclwiPjwvZGl2PjtcclxufTtcclxuXHJcblxyXG5cclxuICAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlJhem9ycGF5QnV0dG9uIiwiYnV0dG9uSWQiLCJsb2FkUmF6b3JwYXkiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwiY29uc29sZSIsIm9ubG9hZCIsIm9wdGlvbnMiLCJyZXNwb25zZSIsImhhbmRsZVBheW1lbnRTdWNjZXNzIiwicmF6b3JwYXlfcGF5bWVudF9pZCIsInJ6cEJ1dHRvbiIsIndpbmRvdyIsIlJhem9ycGF5IiwiQnV0dG9uIiwib24iLCJsb2ciLCJvcGVuIiwicmF6b3JwYXlTY3JpcHQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/razorpay.js\n"));

/***/ })

});