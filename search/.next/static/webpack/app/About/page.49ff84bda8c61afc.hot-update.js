"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/About/page",{

/***/ "(app-pages-browser)/./app/components/razorpay.js":
/*!************************************!*\
  !*** ./app/components/razorpay.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RazorpayButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// components/RazorpayButton.js\n\nfunction RazorpayButton(param) {\n    let { buttonId } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Load Razorpay SDK asynchronously\n        const loadRazorpay = async ()=>{\n            try {\n                const script1 = document.createElement(\"script\");\n                script1.src = \"https://checkout.razorpay.com/v1/payment-button.js\";\n                script1.async = true;\n                document.body.appendChild(script1);\n            } catch (error) {}\n            script.onload = ()=>{\n                // Initialize the payment button\n                const options = {\n                    \"key\": \"<YOUR_RAZORPAY_API_KEY>\",\n                    \"button_id\": buttonId,\n                    \"amount\": 50000,\n                    \"currency\": \"INR\",\n                    \"name\": \"Your Company Name\",\n                    \"description\": \"Purchase Description\",\n                    \"image\": \"/your-logo.png\",\n                    \"handler\": function(response) {\n                        alert(response.razorpay_payment_id);\n                    },\n                    \"prefill\": {\n                        \"name\": \"John Doe\",\n                        \"email\": \"john@example.com\",\n                        \"contact\": \"9999999999\"\n                    },\n                    \"theme\": {\n                        \"color\": \"#3399cc\"\n                    }\n                };\n                const rzpButton = new window.Razorpay.Button(options);\n                rzpButton.on(\"payment.success\", function(response) {\n                    console.log(response);\n                });\n                rzpButton.on(\"payment.error\", function(error) {\n                    console.error(error);\n                });\n                rzpButton.open();\n            };\n        };\n        loadRazorpay();\n        return ()=>{\n            // Cleanup function\n            const razorpayScript = document.getElementById(\"razorpay-script\");\n            if (razorpayScript) {\n                razorpayScript.remove();\n            }\n        };\n    }, [\n        buttonId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"razorpay-container\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\isbn\\\\search\\\\app\\\\components\\\\razorpay.js\",\n        lineNumber: 65,\n        columnNumber: 10\n    }, this);\n}\n_s(RazorpayButton, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = RazorpayButton;\n;\nvar _c;\n$RefreshReg$(_c, \"RazorpayButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Jhem9ycGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLCtCQUErQjtBQUVVO0FBRTFCLFNBQVNFLGVBQWdCLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDdENGLGdEQUFTQSxDQUFDO1FBQ1IsbUNBQW1DO1FBQ25DLE1BQU1HLGVBQWU7WUFDakIsSUFBRztnQkFDTCxNQUFNQyxVQUFTQyxTQUFTQyxhQUFhLENBQUM7Z0JBQ3RDRixRQUFPRyxHQUFHLEdBQUc7Z0JBQ2JILFFBQU9JLEtBQUssR0FBRztnQkFDZkgsU0FBU0ksSUFBSSxDQUFDQyxXQUFXLENBQUNOO1lBQ3hCLEVBQ0EsT0FBTU8sT0FBTSxDQUVaO1lBQ0ZQLE9BQU9RLE1BQU0sR0FBRztnQkFDZCxnQ0FBZ0M7Z0JBQ2hDLE1BQU1DLFVBQVU7b0JBQ2QsT0FBTztvQkFDUCxhQUFhWDtvQkFDYixVQUFVO29CQUNWLFlBQVk7b0JBQ1osUUFBUTtvQkFDUixlQUFlO29CQUNmLFNBQVM7b0JBQ1QsV0FBVyxTQUFVWSxRQUFRO3dCQUMzQkMsTUFBTUQsU0FBU0UsbUJBQW1CO29CQUNwQztvQkFDQSxXQUFXO3dCQUNULFFBQVE7d0JBQ1IsU0FBUzt3QkFDVCxXQUFXO29CQUNiO29CQUNBLFNBQVM7d0JBQ1AsU0FBUztvQkFDWDtnQkFDRjtnQkFFQSxNQUFNQyxZQUFZLElBQUlDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDUDtnQkFDN0NJLFVBQVVJLEVBQUUsQ0FBQyxtQkFBbUIsU0FBVVAsUUFBUTtvQkFDaERRLFFBQVFDLEdBQUcsQ0FBQ1Q7Z0JBQ2Q7Z0JBQ0FHLFVBQVVJLEVBQUUsQ0FBQyxpQkFBaUIsU0FBVVYsS0FBSztvQkFDM0NXLFFBQVFYLEtBQUssQ0FBQ0E7Z0JBQ2hCO2dCQUNBTSxVQUFVTyxJQUFJO1lBQ2hCO1FBQ0Y7UUFFQXJCO1FBRUEsT0FBTztZQUNMLG1CQUFtQjtZQUNuQixNQUFNc0IsaUJBQWlCcEIsU0FBU3FCLGNBQWMsQ0FBQztZQUMvQyxJQUFJRCxnQkFBZ0I7Z0JBQ2xCQSxlQUFlRSxNQUFNO1lBQ3ZCO1FBQ0Y7SUFDRixHQUFHO1FBQUN6QjtLQUFTO0lBRWIscUJBQU8sOERBQUMwQjtRQUFJQyxJQUFHOzs7Ozs7QUFDakI7R0EzRHdCNUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvcmF6b3JwYXkuanM/M2ZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuLy8gY29tcG9uZW50cy9SYXpvcnBheUJ1dHRvbi5qc1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhem9ycGF5QnV0dG9uICh7IGJ1dHRvbklkIH0pe1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBMb2FkIFJhem9ycGF5IFNESyBhc3luY2hyb25vdXNseVxyXG4gICAgY29uc3QgbG9hZFJhem9ycGF5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvcGF5bWVudC1idXR0b24uanMnO1xyXG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHBheW1lbnQgYnV0dG9uXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIFwia2V5XCI6IFwiPFlPVVJfUkFaT1JQQVlfQVBJX0tFWT5cIixcclxuICAgICAgICAgIFwiYnV0dG9uX2lkXCI6IGJ1dHRvbklkLFxyXG4gICAgICAgICAgXCJhbW91bnRcIjogNTAwMDAsIC8vIEV4YW1wbGUgYW1vdW50IGluIHBhaXNlIChJTlIgNTAwLjAwKVxyXG4gICAgICAgICAgXCJjdXJyZW5jeVwiOiBcIklOUlwiLFxyXG4gICAgICAgICAgXCJuYW1lXCI6IFwiWW91ciBDb21wYW55IE5hbWVcIixcclxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJQdXJjaGFzZSBEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgXCJpbWFnZVwiOiBcIi95b3VyLWxvZ28ucG5nXCIsXHJcbiAgICAgICAgICBcImhhbmRsZXJcIjogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3BvbnNlLnJhem9ycGF5X3BheW1lbnRfaWQpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicHJlZmlsbFwiOiB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkpvaG4gRG9lXCIsXHJcbiAgICAgICAgICAgIFwiZW1haWxcIjogXCJqb2huQGV4YW1wbGUuY29tXCIsXHJcbiAgICAgICAgICAgIFwiY29udGFjdFwiOiBcIjk5OTk5OTk5OTlcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwidGhlbWVcIjoge1xyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiIzMzOTljY1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcnpwQnV0dG9uID0gbmV3IHdpbmRvdy5SYXpvcnBheS5CdXR0b24ob3B0aW9ucyk7XHJcbiAgICAgICAgcnpwQnV0dG9uLm9uKCdwYXltZW50LnN1Y2Nlc3MnLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByenBCdXR0b24ub24oJ3BheW1lbnQuZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJ6cEJ1dHRvbi5vcGVuKCk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGxvYWRSYXpvcnBheSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFudXAgZnVuY3Rpb25cclxuICAgICAgY29uc3QgcmF6b3JwYXlTY3JpcHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF6b3JwYXktc2NyaXB0Jyk7XHJcbiAgICAgIGlmIChyYXpvcnBheVNjcmlwdCkge1xyXG4gICAgICAgIHJhem9ycGF5U2NyaXB0LnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH0sIFtidXR0b25JZF0pO1xyXG5cclxuICByZXR1cm4gPGRpdiBpZD1cInJhem9ycGF5LWNvbnRhaW5lclwiPjwvZGl2PjtcclxufTtcclxuXHJcblxyXG5cclxuICAgXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlJhem9ycGF5QnV0dG9uIiwiYnV0dG9uSWQiLCJsb2FkUmF6b3JwYXkiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImVycm9yIiwib25sb2FkIiwib3B0aW9ucyIsInJlc3BvbnNlIiwiYWxlcnQiLCJyYXpvcnBheV9wYXltZW50X2lkIiwicnpwQnV0dG9uIiwid2luZG93IiwiUmF6b3JwYXkiLCJCdXR0b24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIiwicmF6b3JwYXlTY3JpcHQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/razorpay.js\n"));

/***/ })

});