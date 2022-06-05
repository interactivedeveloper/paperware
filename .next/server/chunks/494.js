exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 703:
/***/ ((module) => {

// Exports
module.exports = {
	"form-group": "TextField_form-group__i_iQx",
	"error": "TextField_error__O4nCf",
	"form-wrapper": "TextField_form-wrapper__xM6xz"
};


/***/ }),

/***/ 38:
/***/ ((module) => {

// Exports
module.exports = {
	"overlay": "InquiryModal_overlay__5eN5E",
	"inquiry-modal": "InquiryModal_inquiry-modal__ZjTug",
	"close": "InquiryModal_close__9rtWO"
};


/***/ }),

/***/ 1348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export numericRegex */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TextField_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(703);
/* harmony import */ var _TextField_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TextField_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const numericRegex = /[^0-9-+]/g;
const TextField = ({ className , label , name , required , textarea , type ="text" , rules , numeric , ...rest })=>{
    const InputElement = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return textarea ? (react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4___default()) : "input";
    }, []);
    const { field , fieldState: { error  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useController)({
        name,
        rules: {
            ...rules,
            required
        },
        defaultValue: ""
    });
    const { 0: isFocus , 1: setFocus  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const onFocus = ()=>{
        setFocus(true);
    };
    const onBlur = ()=>{
        setFocus(false);
        field.onBlur();
    };
    const onChange = (e)=>{
        if (!numeric) {
            field.onChange(e);
        } else {
            const { value  } = e.target;
            if (value.match(numericRegex)) {
                field.onChange(+value.replace(numericRegex, ""));
            } else {
                field.onChange(value);
            }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_TextField_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["form-group"]), {
                [(_TextField_module_scss__WEBPACK_IMPORTED_MODULE_5___default().error)]: error
            }, className),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    htmlFor: "",
                    children: [
                        label,
                        required ? "*" : ""
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_TextField_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["form-wrapper"]), {
                        [(_TextField_module_scss__WEBPACK_IMPORTED_MODULE_5___default().textarea)]: textarea,
                        [(_TextField_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["is-focus"])]: isFocus
                    }),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InputElement, {
                        ref: field.ref,
                        className: (_TextField_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["text-field"]),
                        type: type,
                        onFocus: onFocus,
                        onBlur: onBlur,
                        autoComplete: "off",
                        value: field.value,
                        onChange: onChange,
                        minRows: 1,
                        maxRows: 5,
                        ...rest
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextField);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7163);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_common_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1348);
/* harmony import */ var _InquiryModal_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _InquiryModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_InquiryModal_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, components_common_TextField__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, components_common_TextField__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







react_modal__WEBPACK_IMPORTED_MODULE_4___default().setAppElement("#__next");
const InquiryModal = ({ isOpen , onRequestClose  })=>{
    const methods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    if (!isOpen) {
        return null;
    }
    const onSubmit = async (form)=>{
        (0,_emailjs_browser__WEBPACK_IMPORTED_MODULE_1__.send)("service_f98mp6n", "template_75yrogx", form, "jb6iQm5PjICmOWpUO").then(()=>{
            alert("\uC804\uC1A1 \uC644\uB8CC");
            onRequestClose();
        }, (error)=>{
            alert(error.text);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
        isOpen: isOpen,
        overlayClassName: (_InquiryModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().overlay),
        className: (_InquiryModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default()["inquiry-modal"]),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: (_InquiryModal_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close),
                onClick: onRequestClose,
                children: "Close"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.FormProvider, {
                ...methods,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: methods.handleSubmit(onSubmit),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Papyrus \uB3C4\uC785\uBB38\uC758"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_TextField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            name: "name",
                            required: true,
                            label: "\uC131\uBA85"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_TextField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            name: "companyName",
                            required: true,
                            label: "\uD68C\uC0AC\uBA85"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_TextField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            name: "phone",
                            placeholder: "ex) 010-1234-5678",
                            required: true,
                            numeric: true,
                            label: "\uC5F0\uB77D\uCC98"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_TextField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            name: "email",
                            required: true,
                            label: "\uC774\uBA54\uC77C",
                            rules: {
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "\uC774\uBA54\uC77C \uC8FC\uC18C\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
                                }
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_common_TextField__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            name: "content",
                            textarea: true,
                            required: true,
                            label: "\uBB38\uC758\uB0B4\uC6A9"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "submit",
                            children: "Send"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InquiryModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;