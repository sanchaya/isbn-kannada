"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/razorpay.js":
/*!************************************!*\
  !*** ./app/components/razorpay.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RazorpayButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// components/RazorpayButton.js\n\nfunction RazorpayButton(param) {\n    let { buttonId } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Load Razorpay SDK asynchronously\n        const loadRazorpay = async ()=>{\n            try {\n                const script1 = document.createElement(\"script\");\n                script1.src = \"https://checkout.razorpay.com/v1/payment-button.js\";\n                script1.async = true;\n                document.body.appendChild(script1);\n            } catch (error) {\n                console.error(\"Failed to load RazorPay script:\", error);\n            }\n            script.onload = ()=>{\n                // Initialize the payment button\n                const options = {\n                    \"key\": \"<YOUR_RAZORPAY_API_KEY>\",\n                    \"button_id\": buttonId,\n                    \"amount\": 50000,\n                    \"currency\": \"INR\",\n                    \"name\": \"Your Company Name\",\n                    \"description\": \"Purchase Description\",\n                    \"image\": \"/your-logo.png\",\n                    \"handler\": function(response) {\n                        handle(response.razorpay_payment_id);\n                    },\n                    \"prefill\": {\n                        \"name\": \"John Doe\",\n                        \"email\": \"john@example.com\",\n                        \"contact\": \"9999999999\"\n                    },\n                    \"theme\": {\n                        \"color\": \"#3399cc\"\n                    }\n                };\n                const rzpButton = new window.Razorpay.Button(options);\n                rzpButton.on(\"payment.success\", function(response) {\n                    console.log(response);\n                });\n                rzpButton.on(\"payment.error\", function(error) {\n                    console.error(error);\n                });\n                rzpButton.open();\n            };\n        };\n        loadRazorpay();\n        return ()=>{\n            // Cleanup function\n            const razorpayScript = document.getElementById(\"razorpay-script\");\n            if (razorpayScript) {\n                razorpayScript.remove();\n            }\n        };\n    }, [\n        buttonId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"razorpay-container\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\isbn\\\\search\\\\app\\\\components\\\\razorpay.js\",\n        lineNumber: 67,\n        columnNumber: 10\n    }, this);\n}\n_s(RazorpayButton, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = RazorpayButton;\n;\nvar _c;\n$RefreshReg$(_c, \"RazorpayButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Jhem9ycGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLCtCQUErQjtBQUVVO0FBRTFCLFNBQVNFLGVBQWdCLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDdENGLGdEQUFTQSxDQUFDO1FBQ1IsbUNBQW1DO1FBQ25DLE1BQU1HLGVBQWU7WUFDakIsSUFBRztnQkFDTCxNQUFNQyxVQUFTQyxTQUFTQyxhQUFhLENBQUM7Z0JBQ3RDRixRQUFPRyxHQUFHLEdBQUc7Z0JBQ2JILFFBQU9JLEtBQUssR0FBRztnQkFDZkgsU0FBU0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOO1lBQ3hCLEVBQ0EsT0FBTU8sT0FBTTtnQkFDUkMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7WUFHckQ7WUFDRlAsT0FBT1MsTUFBTSxHQUFHO2dCQUNkLGdDQUFnQztnQkFDaEMsTUFBTUMsVUFBVTtvQkFDZCxPQUFPO29CQUNQLGFBQWFaO29CQUNiLFVBQVU7b0JBQ1YsWUFBWTtvQkFDWixRQUFRO29CQUNSLGVBQWU7b0JBQ2YsU0FBUztvQkFDVCxXQUFXLFNBQVVhLFFBQVE7d0JBQzNCQyxPQUFPRCxTQUFTRSxtQkFBbUI7b0JBQ3JDO29CQUNBLFdBQVc7d0JBQ1QsUUFBUTt3QkFDUixTQUFTO3dCQUNULFdBQVc7b0JBQ2I7b0JBQ0EsU0FBUzt3QkFDUCxTQUFTO29CQUNYO2dCQUNGO2dCQUVBLE1BQU1DLFlBQVksSUFBSUMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNLENBQUNQO2dCQUM3Q0ksVUFBVUksRUFBRSxDQUFDLG1CQUFtQixTQUFVUCxRQUFRO29CQUNoREgsUUFBUVcsR0FBRyxDQUFDUjtnQkFDZDtnQkFDQUcsVUFBVUksRUFBRSxDQUFDLGlCQUFpQixTQUFVWCxLQUFLO29CQUMzQ0MsUUFBUUQsS0FBSyxDQUFDQTtnQkFDaEI7Z0JBQ0FPLFVBQVVNLElBQUk7WUFDaEI7UUFDRjtRQUVBckI7UUFFQSxPQUFPO1lBQ0wsbUJBQW1CO1lBQ25CLE1BQU1zQixpQkFBaUJwQixTQUFTcUIsY0FBYyxDQUFDO1lBQy9DLElBQUlELGdCQUFnQjtnQkFDbEJBLGVBQWVFLE1BQU07WUFDdkI7UUFDRjtJQUNGLEdBQUc7UUFBQ3pCO0tBQVM7SUFFYixxQkFBTyw4REFBQzBCO1FBQUlDLElBQUc7Ozs7OztBQUNqQjtHQTdEd0I1QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9yYXpvcnBheS5qcz8zZmUyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG4vLyBjb21wb25lbnRzL1Jhem9ycGF5QnV0dG9uLmpzXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF6b3JwYXlCdXR0b24gKHsgYnV0dG9uSWQgfSl7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIExvYWQgUmF6b3JwYXkgU0RLIGFzeW5jaHJvbm91c2x5XHJcbiAgICBjb25zdCBsb2FkUmF6b3JwYXkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9wYXltZW50LWJ1dHRvbi5qcyc7XHJcbiAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgUmF6b3JQYXkgc2NyaXB0OlwiLCBlcnJvcik7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgcGF5bWVudCBidXR0b25cclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgXCJrZXlcIjogXCI8WU9VUl9SQVpPUlBBWV9BUElfS0VZPlwiLFxyXG4gICAgICAgICAgXCJidXR0b25faWRcIjogYnV0dG9uSWQsXHJcbiAgICAgICAgICBcImFtb3VudFwiOiA1MDAwMCwgLy8gRXhhbXBsZSBhbW91bnQgaW4gcGFpc2UgKElOUiA1MDAuMDApXHJcbiAgICAgICAgICBcImN1cnJlbmN5XCI6IFwiSU5SXCIsXHJcbiAgICAgICAgICBcIm5hbWVcIjogXCJZb3VyIENvbXBhbnkgTmFtZVwiLFxyXG4gICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlB1cmNoYXNlIERlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICBcImltYWdlXCI6IFwiL3lvdXItbG9nby5wbmdcIixcclxuICAgICAgICAgIFwiaGFuZGxlclwiOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaGFuZGxlKHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicHJlZmlsbFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvaG4gRG9lXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqb2huQGV4YW1wbGUuY29tXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIjk5OTk5OTk5OTlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwidGhlbWVcIjoge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzMzOTljY1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcnpwQnV0dG9uID0gbmV3IHdpbmRvdy5SYXpvcnBheS5CdXR0b24ob3B0aW9ucyk7XHJcbiAgICAgICAgcnpwQnV0dG9uLm9uKCdwYXltZW50LnN1Y2Nlc3MnLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByenBCdXR0b24ub24oJ3BheW1lbnQuZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJ6cEJ1dHRvbi5vcGVuKCk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRSYXpvcnBheSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFudXAgZnVuY3Rpb25cclxuICAgICAgY29uc3QgcmF6b3JwYXlTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF6b3JwYXktc2NyaXB0Jyk7XHJcbiAgICAgIGlmIChyYXpvcnBheVNjcmlwdCkge1xyXG4gICAgICAgIHJhem9ycGF5U2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtidXR0b25JZF0pO1xyXG5cclxuICByZXR1cm4gPGRpdiBpZD1cInJhem9ycGF5LWNvbnRhaW5lclwiPjwvZGl2PjtcclxufTtcclxuXHJcblxyXG5cclxuICAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlJhem9ycGF5QnV0dG9uIiwiYnV0dG9uSWQiLCJsb2FkUmF6b3JwYXkiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwiY29uc29sZSIsIm9ubG9hZCIsIm9wdGlvbnMiLCJyZXNwb25zZSIsImhhbmRsZSIsInJhem9ycGF5X3BheW1lbnRfaWQiLCJyenBCdXR0b24iLCJ3aW5kb3ciLCJSYXpvcnBheSIsIkJ1dHRvbiIsIm9uIiwibG9nIiwib3BlbiIsInJhem9ycGF5U2NyaXB0IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/razorpay.js\n"));

/***/ })

});