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

/***/ "(pages-dir-node)/./common/components/modal/animations/ModalManager.animations.ts":
/*!***********************************************************************!*\
  !*** ./common/components/modal/animations/ModalManager.animations.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bgAnimation: () => (/* binding */ bgAnimation),\n/* harmony export */   modalAnimation: () => (/* binding */ modalAnimation)\n/* harmony export */ });\n/* harmony import */ var _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/common/constants/easings */ \"(pages-dir-node)/./common/constants/easings.ts\");\n\nconst transition = {\n    ease: _common_constants_easings__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_EASE\n};\nconst bgAnimation = {\n    closed: {\n        opacity: 0,\n        transition\n    },\n    opened: {\n        opacity: 1,\n        transition\n    }\n};\nconst modalAnimation = {\n    closed: {\n        y: -100,\n        transition\n    },\n    opened: {\n        y: 0,\n        transition\n    },\n    exited: {\n        y: 100,\n        transition\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBEO0FBRTFELE1BQU1DLGFBQWE7SUFBRUMsTUFBTUYsbUVBQVlBO0FBQUM7QUFFakMsTUFBTUcsY0FBYztJQUN6QkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdKO0lBQVc7SUFDakNLLFFBQVE7UUFBRUQsU0FBUztRQUFHSjtJQUFXO0FBQ25DLEVBQUU7QUFFSyxNQUFNTSxpQkFBaUI7SUFDNUJILFFBQVE7UUFBRUksR0FBRyxDQUFDO1FBQUtQO0lBQVc7SUFDOUJLLFFBQVE7UUFBRUUsR0FBRztRQUFHUDtJQUFXO0lBQzNCUSxRQUFRO1FBQUVELEdBQUc7UUFBS1A7SUFBVztBQUMvQixFQUFFIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGphaXN3XFxEb3dubG9hZHNcXG5ld193aGl0ZWJvYXJkXFxXaGl0ZWJvYXJkXFxjb21tb25cXGNvbXBvbmVudHNcXG1vZGFsXFxhbmltYXRpb25zXFxNb2RhbE1hbmFnZXIuYW5pbWF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBERUZBVUxUX0VBU0UgfSBmcm9tIFwiQC9jb21tb24vY29uc3RhbnRzL2Vhc2luZ3NcIjtcclxuXHJcbmNvbnN0IHRyYW5zaXRpb24gPSB7IGVhc2U6IERFRkFVTFRfRUFTRSB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJnQW5pbWF0aW9uID0ge1xyXG4gIGNsb3NlZDogeyBvcGFjaXR5OiAwLCB0cmFuc2l0aW9uIH0sXHJcbiAgb3BlbmVkOiB7IG9wYWNpdHk6IDEsIHRyYW5zaXRpb24gfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbEFuaW1hdGlvbiA9IHtcclxuICBjbG9zZWQ6IHsgeTogLTEwMCwgdHJhbnNpdGlvbiB9LFxyXG4gIG9wZW5lZDogeyB5OiAwLCB0cmFuc2l0aW9uIH0sXHJcbiAgZXhpdGVkOiB7IHk6IDEwMCwgdHJhbnNpdGlvbiB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsiREVGQVVMVF9FQVNFIiwidHJhbnNpdGlvbiIsImVhc2UiLCJiZ0FuaW1hdGlvbiIsImNsb3NlZCIsIm9wYWNpdHkiLCJvcGVuZWQiLCJtb2RhbEFuaW1hdGlvbiIsInkiLCJleGl0ZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/components/modal/animations/ModalManager.animations.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/components/modal/components/ModalManager.tsx":
/*!*************************************************************!*\
  !*** ./common/components/modal/components/ModalManager.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/recoil/modal */ \"(pages-dir-node)/./common/recoil/modal/index.ts\");\n/* harmony import */ var _portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/components/Portal */ \"(pages-dir-node)/./common/components/portal/components/Portal.ts\");\n/* harmony import */ var _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/ModalManager.animations */ \"(pages-dir-node)/./common/components/modal/animations/ModalManager.animations.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst ModalManager = ()=>{\n    const [{ opened, modal }, setModal] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_common_recoil_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    console.log(\"Modal state:\", opened, modal);\n    const [portalNode, setPortalNode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ModalManager.useEffect\": ()=>{\n            if (!portalNode) {\n                const node = document.getElementById(\"portal\");\n                if (node) setPortalNode(node);\n                return;\n            }\n            if (opened) {\n                portalNode.style.pointerEvents = \"all\";\n            } else {\n                portalNode.style.pointerEvents = \"none\";\n            }\n        }\n    }[\"ModalManager.useEffect\"], [\n        opened,\n        portalNode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portal_components_Portal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"absolute z-40 flex min-h-full w-full items-center justify-center bg-black/80\",\n            onClick: ()=>setModal({\n                    modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    opened: false\n                }),\n            variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.bgAnimation,\n            initial: \"closed\",\n            animate: opened ? \"opened\" : \"closed\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n                children: opened && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                    variants: _animations_ModalManager_animations__WEBPACK_IMPORTED_MODULE_6__.modalAnimation,\n                    initial: \"closed\",\n                    animate: \"opened\",\n                    exit: \"exited\",\n                    onClick: (e)=>e.stopPropagation(),\n                    className: \"p-6\",\n                    children: modal\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\common\\\\components\\\\modal\\\\components\\\\ModalManager.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalManager);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFFWTtBQUNoQjtBQUVNO0FBRU07QUFJTDtBQUUvQyxNQUFNUyxlQUFlO0lBQ25CLE1BQU0sQ0FBQyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRSxFQUFFQyxTQUFTLEdBQUdSLHNEQUFjQSxDQUFDQyw0REFBU0E7SUFDOURRLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZ0JKLFFBQVFDO0lBQ3BDLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUE7SUFFNUNELGdEQUFTQTtrQ0FBQztZQUNSLElBQUksQ0FBQ2UsWUFBWTtnQkFDZixNQUFNRSxPQUFPQyxTQUFTQyxjQUFjLENBQUM7Z0JBQ3JDLElBQUlGLE1BQU1ELGNBQWNDO2dCQUN4QjtZQUNGO1lBRUEsSUFBSVAsUUFBUTtnQkFDVkssV0FBV0ssS0FBSyxDQUFDQyxhQUFhLEdBQUc7WUFDbkMsT0FBTztnQkFDTE4sV0FBV0ssS0FBSyxDQUFDQyxhQUFhLEdBQUc7WUFDbkM7UUFDRjtpQ0FBRztRQUFDWDtRQUFRSztLQUFXO0lBRXZCLHFCQUNFLDhEQUFDVCxpRUFBTUE7a0JBQ0wsNEVBQUNILGlEQUFNQSxDQUFDbUIsR0FBRztZQUNUQyxXQUFVO1lBQ1ZDLFNBQVMsSUFBTVosU0FBUztvQkFBRUQscUJBQU87b0JBQU9ELFFBQVE7Z0JBQU07WUFDdERlLFVBQVVsQiw0RUFBV0E7WUFDckJtQixTQUFRO1lBQ1JDLFNBQVNqQixTQUFTLFdBQVc7c0JBRTdCLDRFQUFDUiwwREFBZUE7MEJBQ2JRLHdCQUNDLDhEQUFDUCxpREFBTUEsQ0FBQ21CLEdBQUc7b0JBQ1RHLFVBQVVqQiwrRUFBY0E7b0JBQ3hCa0IsU0FBUTtvQkFDUkMsU0FBUTtvQkFDUkMsTUFBSztvQkFDTEosU0FBUyxDQUFDSyxJQUFNQSxFQUFFQyxlQUFlO29CQUNqQ1AsV0FBVTs4QkFFVFo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9mO0FBRUEsaUVBQWVGLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFpc3dcXERvd25sb2Fkc1xcbmV3X3doaXRlYm9hcmRcXFdoaXRlYm9hcmRcXGNvbW1vblxcY29tcG9uZW50c1xcbW9kYWxcXGNvbXBvbmVudHNcXE1vZGFsTWFuYWdlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmltcG9ydCBtb2RhbEF0b20gZnJvbSBcIkAvY29tbW9uL3JlY29pbC9tb2RhbFwiO1xyXG5cclxuaW1wb3J0IFBvcnRhbCBmcm9tIFwiLi4vLi4vcG9ydGFsL2NvbXBvbmVudHMvUG9ydGFsXCI7XHJcbmltcG9ydCB7XHJcbiAgYmdBbmltYXRpb24sXHJcbiAgbW9kYWxBbmltYXRpb24sXHJcbn0gZnJvbSBcIi4uL2FuaW1hdGlvbnMvTW9kYWxNYW5hZ2VyLmFuaW1hdGlvbnNcIjtcclxuXHJcbmNvbnN0IE1vZGFsTWFuYWdlciA9ICgpID0+IHtcclxuICBjb25zdCBbeyBvcGVuZWQsIG1vZGFsIH0sIHNldE1vZGFsXSA9IHVzZVJlY29pbFN0YXRlKG1vZGFsQXRvbSk7XHJcbiAgY29uc29sZS5sb2coXCJNb2RhbCBzdGF0ZTpcIiwgb3BlbmVkLCBtb2RhbCk7XHJcbiAgY29uc3QgW3BvcnRhbE5vZGUsIHNldFBvcnRhbE5vZGVdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQ+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXBvcnRhbE5vZGUpIHtcclxuICAgICAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGFsXCIpO1xyXG4gICAgICBpZiAobm9kZSkgc2V0UG9ydGFsTm9kZShub2RlKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcGVuZWQpIHtcclxuICAgICAgcG9ydGFsTm9kZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBvcnRhbE5vZGUuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gIH0sIFtvcGVuZWQsIHBvcnRhbE5vZGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQb3J0YWw+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei00MCBmbGV4IG1pbi1oLWZ1bGwgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjay84MFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWwoeyBtb2RhbDogPD48Lz4sIG9wZW5lZDogZmFsc2UgfSl9XHJcbiAgICAgICAgdmFyaWFudHM9e2JnQW5pbWF0aW9ufVxyXG4gICAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxyXG4gICAgICAgIGFuaW1hdGU9e29wZW5lZCA/IFwib3BlbmVkXCIgOiBcImNsb3NlZFwifVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgICAgIHtvcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgIHZhcmlhbnRzPXttb2RhbEFuaW1hdGlvbn1cclxuICAgICAgICAgICAgICBpbml0aWFsPVwiY2xvc2VkXCJcclxuICAgICAgICAgICAgICBhbmltYXRlPVwib3BlbmVkXCJcclxuICAgICAgICAgICAgICBleGl0PVwiZXhpdGVkXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTZcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge21vZGFsfVxyXG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L1BvcnRhbD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxNYW5hZ2VyO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJ1c2VSZWNvaWxTdGF0ZSIsIm1vZGFsQXRvbSIsIlBvcnRhbCIsImJnQW5pbWF0aW9uIiwibW9kYWxBbmltYXRpb24iLCJNb2RhbE1hbmFnZXIiLCJvcGVuZWQiLCJtb2RhbCIsInNldE1vZGFsIiwiY29uc29sZSIsImxvZyIsInBvcnRhbE5vZGUiLCJzZXRQb3J0YWxOb2RlIiwibm9kZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidmFyaWFudHMiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/components/modal/components/ModalManager.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./common/components/portal/components/Portal.ts":
/*!*******************************************************!*\
  !*** ./common/components/portal/components/Portal.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Portal = ({ children })=>{\n    const [portal, setPortal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)({\n        \"Portal.useEffect\": ()=>{\n            const node = document.getElementById(\"portal\");\n            if (node) setPortal(node);\n        }\n    }[\"Portal.useEffect\"], []);\n    if (!portal) return null;\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children, portal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portal);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb21wb25lbnRzL3BvcnRhbC9jb21wb25lbnRzL1BvcnRhbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUVIO0FBRXpDLE1BQU1HLFNBQVMsQ0FBQyxFQUFFQyxRQUFRLEVBQTZDO0lBQ3JFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUE7SUFFcENELGdEQUFTQTs0QkFBQztZQUNSLE1BQU1PLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQztZQUNyQyxJQUFJRixNQUFNRCxVQUFVQztRQUN0QjsyQkFBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRixRQUFRLE9BQU87SUFFcEIsT0FBT0gsdURBQVlBLENBQUNFLFVBQVVDO0FBQ2hDO0FBRUEsaUVBQWVGLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFpc3dcXERvd25sb2Fkc1xcbmV3X3doaXRlYm9hcmRcXFdoaXRlYm9hcmRcXGNvbW1vblxcY29tcG9uZW50c1xccG9ydGFsXFxjb21wb25lbnRzXFxQb3J0YWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY29uc3QgUG9ydGFsID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogSlNYLkVsZW1lbnQgfCBKU1guRWxlbWVudFtdIH0pID0+IHtcclxuICBjb25zdCBbcG9ydGFsLCBzZXRQb3J0YWxdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQ+KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3J0YWxcIik7XHJcbiAgICBpZiAobm9kZSkgc2V0UG9ydGFsKG5vZGUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFwb3J0YWwpIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gY3JlYXRlUG9ydGFsKGNoaWxkcmVuLCBwb3J0YWwpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVQb3J0YWwiLCJQb3J0YWwiLCJjaGlsZHJlbiIsInBvcnRhbCIsInNldFBvcnRhbCIsIm5vZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/components/portal/components/Portal.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/constants/easings.ts":
/*!*************************************!*\
  !*** ./common/constants/easings.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DEFAULT_EASE: () => (/* binding */ DEFAULT_EASE)\n/* harmony export */ });\nconst DEFAULT_EASE = [\n    0.6,\n    0.01,\n    -0.05,\n    0.9\n];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9jb25zdGFudHMvZWFzaW5ncy50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsZUFBZTtJQUFDO0lBQUs7SUFBTSxDQUFDO0lBQU07Q0FBSSxDQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGphaXN3XFxEb3dubG9hZHNcXG5ld193aGl0ZWJvYXJkXFxXaGl0ZWJvYXJkXFxjb21tb25cXGNvbnN0YW50c1xcZWFzaW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgREVGQVVMVF9FQVNFID0gWzAuNiwgMC4wMSwgLTAuMDUsIDAuOV07XHJcbiJdLCJuYW1lcyI6WyJERUZBVUxUX0VBU0UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/constants/easings.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/recoil/modal/index.ts":
/*!**************************************!*\
  !*** ./common/recoil/modal/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useModal: () => (/* reexport safe */ _modal_hooks__WEBPACK_IMPORTED_MODULE_1__.useModal)\n/* harmony export */ });\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.atom */ \"(pages-dir-node)/./common/recoil/modal/modal.atom.tsx\");\n/* harmony import */ var _modal_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.hooks */ \"(pages-dir-node)/./common/recoil/modal/modal.hooks.tsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_modal_atom__WEBPACK_IMPORTED_MODULE_0__.modalAtom);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QztBQUNBO0FBRXpDLGlFQUFlQSxrREFBU0EsRUFBQztBQUVMIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGphaXN3XFxEb3dubG9hZHNcXG5ld193aGl0ZWJvYXJkXFxXaGl0ZWJvYXJkXFxjb21tb25cXHJlY29pbFxcbW9kYWxcXGluZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vZGFsQXRvbSB9IGZyb20gXCIuL21vZGFsLmF0b21cIjtcclxuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbC5ob29rc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kYWxBdG9tO1xyXG5cclxuZXhwb3J0IHsgdXNlTW9kYWwgfTtcclxuIl0sIm5hbWVzIjpbIm1vZGFsQXRvbSIsInVzZU1vZGFsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/recoil/modal/index.ts\n");

/***/ }),

/***/ "(pages-dir-node)/./common/recoil/modal/modal.atom.tsx":
/*!********************************************!*\
  !*** ./common/recoil/modal/modal.atom.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalAtom: () => (/* binding */ modalAtom)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst modalAtom = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.atom)({\n    key: \"modal\",\n    default: {\n        modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        opened: false\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvbW9kYWwuYXRvbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThCO0FBRXZCLE1BQU1DLFlBQVlELDRDQUFJQSxDQUcxQjtJQUNERSxLQUFLO0lBQ0xDLFNBQVM7UUFDUEMscUJBQU87UUFDUEMsUUFBUTtJQUNWO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxqYWlzd1xcRG93bmxvYWRzXFxuZXdfd2hpdGVib2FyZFxcV2hpdGVib2FyZFxcY29tbW9uXFxyZWNvaWxcXG1vZGFsXFxtb2RhbC5hdG9tLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdG9tIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZGFsQXRvbSA9IGF0b208e1xyXG4gIG1vZGFsOiBKU1guRWxlbWVudCB8IEpTWC5FbGVtZW50W107XHJcbiAgb3BlbmVkOiBib29sZWFuO1xyXG59Pih7XHJcbiAga2V5OiBcIm1vZGFsXCIsXHJcbiAgZGVmYXVsdDoge1xyXG4gICAgbW9kYWw6IDw+PC8+LFxyXG4gICAgb3BlbmVkOiBmYWxzZSxcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImF0b20iLCJtb2RhbEF0b20iLCJrZXkiLCJkZWZhdWx0IiwibW9kYWwiLCJvcGVuZWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/recoil/modal/modal.atom.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./common/recoil/modal/modal.hooks.tsx":
/*!*********************************************!*\
  !*** ./common/recoil/modal/modal.hooks.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useModal: () => (/* binding */ useModal)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modal_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.atom */ \"(pages-dir-node)/./common/recoil/modal/modal.atom.tsx\");\n\n\n\nconst useModal = ()=>{\n    const setModal = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useSetRecoilState)(_modal_atom__WEBPACK_IMPORTED_MODULE_2__.modalAtom);\n    const openModal = (modal)=>setModal({\n            modal,\n            opened: true\n        });\n    const closeModal = ()=>setModal({\n            modal: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n            opened: false\n        });\n    return {\n        openModal,\n        closeModal\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbW1vbi9yZWNvaWwvbW9kYWwvbW9kYWwuaG9va3MudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFFRjtBQUV6QyxNQUFNRSxXQUFXO0lBQ2YsTUFBTUMsV0FBV0gseURBQWlCQSxDQUFDQyxrREFBU0E7SUFFNUMsTUFBTUcsWUFBWSxDQUFDQyxRQUNqQkYsU0FBUztZQUFFRTtZQUFPQyxRQUFRO1FBQUs7SUFFakMsTUFBTUMsYUFBYSxJQUFNSixTQUFTO1lBQUVFLHFCQUFPO1lBQU9DLFFBQVE7UUFBTTtJQUVoRSxPQUFPO1FBQUVGO1FBQVdHO0lBQVc7QUFDakM7QUFFb0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFpc3dcXERvd25sb2Fkc1xcbmV3X3doaXRlYm9hcmRcXFdoaXRlYm9hcmRcXGNvbW1vblxccmVjb2lsXFxtb2RhbFxcbW9kYWwuaG9va3MudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNldFJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5cclxuaW1wb3J0IHsgbW9kYWxBdG9tIH0gZnJvbSBcIi4vbW9kYWwuYXRvbVwiO1xyXG5cclxuY29uc3QgdXNlTW9kYWwgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2V0TW9kYWwgPSB1c2VTZXRSZWNvaWxTdGF0ZShtb2RhbEF0b20pO1xyXG5cclxuICBjb25zdCBvcGVuTW9kYWwgPSAobW9kYWw6IEpTWC5FbGVtZW50IHwgSlNYLkVsZW1lbnRbXSkgPT5cclxuICAgIHNldE1vZGFsKHsgbW9kYWwsIG9wZW5lZDogdHJ1ZSB9KTtcclxuXHJcbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsKHsgbW9kYWw6IDw+PC8+LCBvcGVuZWQ6IGZhbHNlIH0pO1xyXG5cclxuICByZXR1cm4geyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfTtcclxufTtcclxuXHJcbmV4cG9ydCB7IHVzZU1vZGFsIH07XHJcbiJdLCJuYW1lcyI6WyJ1c2VTZXRSZWNvaWxTdGF0ZSIsIm1vZGFsQXRvbSIsInVzZU1vZGFsIiwic2V0TW9kYWwiLCJvcGVuTW9kYWwiLCJtb2RhbCIsIm9wZW5lZCIsImNsb3NlTW9kYWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./common/recoil/modal/modal.hooks.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./common/styles/global.css":
/*!**********************************!*\
  !*** ./common/styles/global.css ***!
  \**********************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/styles/global.css */ \"(pages-dir-node)/./common/styles/global.css\");\n/* harmony import */ var _common_styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"(pages-dir-node)/./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/components/modal/components/ModalManager */ \"(pages-dir-node)/./common/components/modal/components/ModalManager.tsx\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.min.css */ \"(pages-dir-node)/./node_modules/react-toastify/dist/ReactToastify.min.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_min_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__]);\n_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"SketchRoom | Online Whiteboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_components_modal_components_ModalManager__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\jaisw\\\\Downloads\\\\new_whiteboard\\\\Whiteboard\\\\pages\\\\_app.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQztBQUVSO0FBQ21CO0FBQ1o7QUFFeUM7QUFFMUI7QUFFbkQsTUFBTUksTUFBTSxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzdDLHFCQUNFOzswQkFDRSw4REFBQ04sa0RBQUlBOztrQ0FDSCw4REFBQ087a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFFeEIsOERBQUNSLDhDQUFVQTs7a0NBQ1QsOERBQUNELDBEQUFjQTs7Ozs7a0NBQ2YsOERBQUNFLHdGQUFZQTs7Ozs7a0NBQ2IsOERBQUNFO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcamFpc3dcXERvd25sb2Fkc1xcbmV3X3doaXRlYm9hcmRcXFdoaXRlYm9hcmRcXHBhZ2VzXFxfYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9jb21tb24vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XHJcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5pbXBvcnQgTW9kYWxNYW5hZ2VyIGZyb20gXCJAL2NvbW1vbi9jb21wb25lbnRzL21vZGFsL2NvbXBvbmVudHMvTW9kYWxNYW5hZ2VyXCI7XHJcblxyXG5pbXBvcnQgXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkubWluLmNzc1wiO1xyXG5cclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNrZXRjaFJvb20gfCBPbmxpbmUgV2hpdGVib2FyZDwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxSZWNvaWxSb290PlxyXG4gICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgIDxNb2RhbE1hbmFnZXIgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUmVjb2lsUm9vdD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiVG9hc3RDb250YWluZXIiLCJSZWNvaWxSb290IiwiTW9kYWxNYW5hZ2VyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();