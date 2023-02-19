/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/app.css */ \"./styles/app.css\");\n/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_app_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ \"./store/index.js\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const [theme, themeSet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // virtual dom oluştuğunda çalışıyor\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{\n        const theme = localStorage.getItem(\"THEME\") || \"light\";\n        themeSet(theme);\n    }, []);\n    const changeTheme = (theme)=>{\n        themeSet(theme);\n        localStorage.setItem(\"THEME\", theme);\n    };\n    // sayfanın tamamen yüklenmesini bekliyor sonrasında çalışıyor\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!theme) return;\n        const $html = document.querySelector(\"html\");\n        $html.classList.remove(\"light\");\n        $html.classList.remove(\"dim\");\n        $html.classList.remove(\"dark\");\n        $html.classList.add(theme.toString());\n    }, [\n        theme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Provider, {\n        value: {\n            theme,\n            changeTheme\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ususlu\\\\OneDrive - Tekyaz Teknolojik Yazilimlar Makina Tic\\\\Masa\\xfcst\\xfc\\\\twitter-clone\\\\pages\\\\_app.js\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ususlu\\\\OneDrive - Tekyaz Teknolojik Yazilimlar Makina Tic\\\\Masa\\xfcst\\xfc\\\\twitter-clone\\\\pages\\\\_app.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUU7QUFFekM7QUFFUztBQUVwQixTQUFTSyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDdEQsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDLElBQUk7SUFFdkMsb0NBQW9DO0lBQ3BDRCxzREFBZUEsQ0FBQyxJQUFNO1FBQ3BCLE1BQU1NLFFBQVFFLGFBQWFDLE9BQU8sQ0FBQyxZQUFZO1FBQy9DRixTQUFTRDtJQUNYLEdBQUcsRUFBRTtJQUVMLE1BQU1JLGNBQWNKLENBQUFBLFFBQVM7UUFDM0JDLFNBQVNEO1FBQ1RFLGFBQWFHLE9BQU8sQ0FBQyxTQUFTTDtJQUNoQztJQUVBLDhEQUE4RDtJQUM5RFAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ08sT0FBTztRQUNaLE1BQU1NLFFBQVFDLFNBQVNDLGFBQWEsQ0FBQztRQUNyQ0YsTUFBTUcsU0FBUyxDQUFDQyxNQUFNLENBQUM7UUFDdkJKLE1BQU1HLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3ZCSixNQUFNRyxTQUFTLENBQUNDLE1BQU0sQ0FBQztRQUN2QkosTUFBTUcsU0FBUyxDQUFDRSxHQUFHLENBQUNYLE1BQU1ZLFFBQVE7SUFDcEMsR0FBRztRQUFDWjtLQUFNO0lBRVYscUJBQ0UsOERBQUNKLHVEQUFxQjtRQUFDa0IsT0FBTztZQUFFZDtZQUFPSTtRQUFZO2tCQUNqRCw0RUFBQ047WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHdpdHRlci1jbG9uZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuY3NzJ1xyXG5cclxuaW1wb3J0IFN0b3JlQ29udGV4dCBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFt0aGVtZSwgdGhlbWVTZXRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgLy8gdmlydHVhbCBkb20gb2x1xZ90dcSfdW5kYSDDp2FsxLHFn8SxeW9yXHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUSEVNRVwiKSB8fCBcImxpZ2h0XCJcclxuICAgIHRoZW1lU2V0KHRoZW1lKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBjaGFuZ2VUaGVtZSA9IHRoZW1lID0+IHtcclxuICAgIHRoZW1lU2V0KHRoZW1lKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJUSEVNRVwiLCB0aGVtZSlcclxuICB9XHJcblxyXG4gIC8vIHNheWZhbsSxbiB0YW1hbWVuIHnDvGtsZW5tZXNpbmkgYmVrbGl5b3Igc29ucmFzxLFuZGEgw6dhbMSxxZ/EsXlvclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXRoZW1lKSByZXR1cm5cclxuICAgIGNvbnN0ICRodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIilcclxuICAgICRodG1sLmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFwiKVxyXG4gICAgJGh0bWwuY2xhc3NMaXN0LnJlbW92ZShcImRpbVwiKVxyXG4gICAgJGh0bWwuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcclxuICAgICRodG1sLmNsYXNzTGlzdC5hZGQodGhlbWUudG9TdHJpbmcoKSlcclxuICB9LCBbdGhlbWVdKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHRoZW1lLCBjaGFuZ2VUaGVtZSB9fT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9TdG9yZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlU3RhdGUiLCJTdG9yZUNvbnRleHQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInRoZW1lIiwidGhlbWVTZXQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2hhbmdlVGhlbWUiLCJzZXRJdGVtIiwiJGh0bWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ0b1N0cmluZyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StoreContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StoreContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsNkJBQWVELG9EQUFhQSxDQUFDLElBQUk7QUFFdkMsaUVBQWVDLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90d2l0dGVyLWNsb25lLy4vc3RvcmUvaW5kZXguanM/NTZhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNvbnRleHQiXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIlN0b3JlQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.js\n");

/***/ }),

/***/ "./styles/app.css":
/*!************************!*\
  !*** ./styles/app.css ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();