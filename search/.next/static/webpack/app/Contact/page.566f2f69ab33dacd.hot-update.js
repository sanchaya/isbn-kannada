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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RazorpayButton = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const script = document.createElement(\"script\");\n        script.src = \"https://checkout.razorpay.com/v1/payment-button.js\";\n        script.setAttribute(\"data-payment_button_id\", \"pl_FTB1pZqrFP6jrt\");\n        script.async = true;\n        const formElement = document.getElementById(\"razorpay-form\");\n        if (formElement) {\n            formElement.appendChild(script);\n        } else {\n            console.error('Form element with id \"razorpay-form\" not found.');\n        }\n        return ()=>{\n            if (formElement && formElement.contains(script)) {\n                formElement.removeChild(script);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        id: \"razorpay-form\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\isbn\\\\search\\\\app\\\\components\\\\razorpay.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(RazorpayButton, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = RazorpayButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RazorpayButton);\nvar _c;\n$RefreshReg$(_c, \"RazorpayButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3Jhem9ycGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUd6QyxNQUFNRSxpQkFBaUI7O0lBQ25CRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1FLFNBQVNDLFNBQVNDLGFBQWEsQ0FBQztRQUN0Q0YsT0FBT0csR0FBRyxHQUFHO1FBQ2JILE9BQU9JLFlBQVksQ0FBQywwQkFBMEI7UUFDOUNKLE9BQU9LLEtBQUssR0FBRztRQUVmLE1BQU1DLGNBQWNMLFNBQVNNLGNBQWMsQ0FBQztRQUM1QyxJQUFJRCxhQUFhO1lBQ2JBLFlBQVlFLFdBQVcsQ0FBQ1I7UUFDNUIsT0FBTztZQUNIUyxRQUFRQyxLQUFLLENBQUM7UUFDbEI7UUFFQSxPQUFPO1lBQ0gsSUFBSUosZUFBZUEsWUFBWUssUUFBUSxDQUFDWCxTQUFTO2dCQUM3Q00sWUFBWU0sV0FBVyxDQUFDWjtZQUM1QjtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNhO1FBQUtDLElBQUc7Ozs7OztBQUlqQjtHQTFCTWY7S0FBQUE7QUE0Qk4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvcmF6b3JwYXkuanM/M2ZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IFJhem9ycGF5QnV0dG9uID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2hlY2tvdXQucmF6b3JwYXkuY29tL3YxL3BheW1lbnQtYnV0dG9uLmpzJztcclxuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLXBheW1lbnRfYnV0dG9uX2lkJywgJ3BsX0ZUQjFwWnFyRlA2anJ0Jyk7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmF6b3JwYXktZm9ybScpO1xyXG4gICAgICAgIGlmIChmb3JtRWxlbWVudCkge1xyXG4gICAgICAgICAgICBmb3JtRWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Zvcm0gZWxlbWVudCB3aXRoIGlkIFwicmF6b3JwYXktZm9ybVwiIG5vdCBmb3VuZC4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtRWxlbWVudCAmJiBmb3JtRWxlbWVudC5jb250YWlucyhzY3JpcHQpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtRWxlbWVudC5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtIGlkPVwicmF6b3JwYXktZm9ybVwiPlxyXG4gICAgICAgICAgICB7LyogT3RoZXIgZm9ybSBlbGVtZW50cyBjYW4gYmUgYWRkZWQgaGVyZSAqL31cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF6b3JwYXlCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlJhem9ycGF5QnV0dG9uIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwic2V0QXR0cmlidXRlIiwiYXN5bmMiLCJmb3JtRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwiZXJyb3IiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIiwiZm9ybSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/razorpay.js\n"));

/***/ })

});