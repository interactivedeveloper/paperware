"use strict";
exports.id = 948;
exports.ids = [948];
exports.modules = {

/***/ 1948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ common_ChannelIO)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "gsap/dist/ScrollTrigger"
var ScrollTrigger_ = __webpack_require__(4965);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-channel-plugin"
var external_react_channel_plugin_ = __webpack_require__(1285);
// EXTERNAL MODULE: external "recoil"
var external_recoil_ = __webpack_require__(9755);
// EXTERNAL MODULE: ./store/store.ts
var store = __webpack_require__(8407);
;// CONCATENATED MODULE: ./hooks/useChannelIO.tsx





const useChannelIO = ()=>{
    const { boot , showChannelButton , hideChannelButton  } = (0,external_react_channel_plugin_.useChannelIOApi)();
    const [channelIOBooted] = (0,external_recoil_.useRecoilState)(store/* channelIOBootedState */.p4);
    const { 0: showButton , 1: setShowButton  } = (0,external_react_.useState)(false);
    (0,external_react_channel_plugin_.useChannelIOEvent)("onHideMessenger", ScrollTrigger_.ScrollTrigger.refresh);
    (0,external_react_.useEffect)(()=>{
        if (channelIOBooted && showButton) {
            setTimeout(()=>showChannelButton()
            , 1000);
        }
    }, [
        channelIOBooted
    ]);
    const show = ()=>{
        showChannelButton();
        if (!channelIOBooted) {
            setShowButton(true);
        }
    };
    const hide = ()=>{
        hideChannelButton();
        if (!channelIOBooted) {
            setShowButton(false);
        }
    };
    return {
        show,
        hide
    };
};
/* harmony default export */ const hooks_useChannelIO = (useChannelIO);

;// CONCATENATED MODULE: ./components/common/ChannelIO.tsx







const ChannelIOHook = ()=>{
    const { show , hide  } = hooks_useChannelIO();
    (0,external_react_.useEffect)(()=>{
        ScrollTrigger_.ScrollTrigger.create({
            trigger: document.querySelector("#home"),
            start: "bottom +=1",
            toggleActions: "play none none reverse",
            onEnter: show,
            onLeaveBack: hide
        });
    }, []);
    return null;
};
const ChannelIO = ()=>{
    const [_, setChannelIOBooted] = (0,external_recoil_.useRecoilState)(store/* channelIOBootedState */.p4);
    const Component = external_react_channel_plugin_.ReactChannelIO;
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        pluginKey: "4901c2a2-59db-423c-a135-bf76f7b5bff6",
        language: "ko",
        autoBoot: true,
        hideChannelButtonOnBoot: true,
        onBoot: ()=>setChannelIOBooted(true)
        ,
        verbose: false,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ChannelIOHook, {})
    });
};
/* harmony default export */ const common_ChannelIO = (ChannelIO);


/***/ })

};
;