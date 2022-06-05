exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 7394:
/***/ ((module) => {

// Exports
module.exports = {
	"tooltip-container": "Feature2Item_tooltip-container__KEYEA",
	"tooltip-title": "Feature2Item_tooltip-title__qTiIo",
	"tooltip-description": "Feature2Item_tooltip-description__Xz_KR"
};


/***/ }),

/***/ 6150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_popper_tooltip_dist_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7379);
/* harmony import */ var react_popper_tooltip_dist_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_popper_tooltip_dist_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_popper_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(616);
/* harmony import */ var react_popper_tooltip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_popper_tooltip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Feature2Item_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7394);
/* harmony import */ var _Feature2Item_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Feature2Item_module_scss__WEBPACK_IMPORTED_MODULE_5__);






const Feature2Item = ({ title , description , active , index , isSmallDevice  })=>{
    const { getTooltipProps , setTooltipRef , setTriggerRef , visible  } = (0,react_popper_tooltip__WEBPACK_IMPORTED_MODULE_4__.usePopperTooltip)({
        offset: [
            0,
            30
        ]
    });
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        setTriggerRef(document.querySelector(`#step-${isSmallDevice ? "m-" : ""}${index + 1}-container`));
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: active && visible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: setTooltipRef,
            ...getTooltipProps({
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()([
                    "tooltip-container"
                ], (_Feature2Item_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["tooltip-container"]))
            }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: (_Feature2Item_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["tooltip-title"]),
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_Feature2Item_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["tooltip-description"]),
                        children: description
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.memo)(Feature2Item));


/***/ }),

/***/ 7379:
/***/ (() => {



/***/ })

};
;