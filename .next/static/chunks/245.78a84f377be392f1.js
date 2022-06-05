"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[245],{4063:function(n){n.exports=function n(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;var r,o,u;if(Array.isArray(e)){if((r=e.length)!=t.length)return!1;for(o=r;0!==o--;)if(!n(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if((r=(u=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(t,u[o]))return!1;for(o=r;0!==o--;){var i=u[o];if(!n(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}},6245:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r=t(5893),o=t(6546),u=t(7294);function i(n,e,t,r){return new(t||(t=Promise))((function(o,u){function i(n){try{c(r.next(n))}catch(e){u(e)}}function a(n){try{c(r.throw(n))}catch(e){u(e)}}function c(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,a)}c((r=r.apply(n,e||[])).next())}))}function a(n,e){var t,r,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,r=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=e.call(n,i)}catch(a){u=[6,a],r=0}finally{t=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}Object.create;function c(n,e){var t="function"===typeof Symbol&&n[Symbol.iterator];if(!t)return n;var r,o,u=t.call(n),i=[];try{for(;(void 0===e||e-- >0)&&!(r=u.next()).done;)i.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i}function l(n,e,t){if(t||2===arguments.length)for(var r,o=0,u=e.length;o<u;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}Object.create;var f=t(4063),s=t.n(f),d=function(n){var e=(0,u.useRef)(n);return(0,u.useEffect)((function(){e.current=n}),[n]),e};function h(){return"undefined"===typeof window}function v(n,e){return void 0===e&&(e=!1),i(this,void 0,void 0,(function(){return a(this,(function(t){return document.querySelector('[src="'+n+'"]')?[2]:(g(e,"Injecting SDK script..."),[2,new Promise((function(e,t){var r=document.createElement("script");r.src=n,r.async=!0,r.defer=!0,r.onload=function(){e(),r.onload=null,r.onerror=null},r.onerror=function(){t(new Error("Fail to inject SDK script.")),r.onload=null,r.onerror=null},document.head.appendChild(r)}))])}))}))}function p(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];console.warn.apply(console,l(["[ReactChannelIO]"],c(n)))}function g(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];n&&console.debug.apply(console,l(["\u2699\ufe0f [ReactChannelIO - debug]"],c(e)))}var y=function(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];h()||("function"===typeof window.ChannelIO?window.ChannelIO.apply(window,l([n],c(e))):p("ChannelIO instance is not initalized yet."))},b=(0,u.createContext)(null),w="react-channelio-evt",m=["onBoot","onShowMessenger","onShow","onHideMessenger","onHide","onBadgeChanged","onChangeBadge","onChatCreated","onCreateChat","onProfileChanged","onChangeProfile","onUrlClicked","onClickRedirect"],C=function(){if("function"===typeof window.CustomEvent)return window.CustomEvent;var n=function(n,e){var t,r,o;document.createEvent("CustomEvent").initCustomEvent(n,null!==(t=null===e||void 0===e?void 0:e.bubbles)&&void 0!==t&&t,null!==(r=null===e||void 0===e?void 0:e.cancelable)&&void 0!==r&&r,null!==(o=null===e||void 0===e?void 0:e.detail)&&void 0!==o?o:void 0)};return n.prototype=window.Event.prototype,window.CustomEvent=n,window.CustomEvent};function k(n){return m.includes(n)}var O="data-channel-plugin",E="launcher",S=function(n){var e=n.children,t=n.autoBoot,r=void 0!==t&&t,o=n.autoBootTimeout,f=void 0===o?1e3:o,h=n.rebootOnOptionChanged,k=void 0===h||h,S=n.useCustomLauncherSelectorTweak,B=void 0===S||S,j=n.verbose,A=void 0!==j&&j,P=n.onBoot,x=function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}(n,["children","autoBoot","autoBootTimeout","rebootOnOptionChanged","useCustomLauncherSelectorTweak","verbose","onBoot"]),I=d(P),T=(0,u.useRef)(x),M=c(u.useState(!1),2),L=M[0],R=M[1],U=function(){m.forEach((function(n){y(n,function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];document.dispatchEvent(new(C())(w,{detail:{method:n,args:e}}))}}(n))}))},q=(0,u.useCallback)((function(){return i(void 0,void 0,void 0,(function(){return a(this,(function(n){return[2,new Promise((function(n,e){try{U(),g(A,"Booting plugin..."),g(A,"boot options =>",T.current),y("boot",T.current,(function(t,r){if("function"===typeof I.current&&I.current(t,r),t)return p("Error occurred while boot plugin.",t),R(!1),void e(t);var o={};(null===r||void 0===r?void 0:r.language)!==T.current.language&&(o.language=T.current.language),null===T.current.profile&&(o.profile=null),y("updateUser",o,(function(n,e){n?p("Fail to reset user information of plugin."):g(A,"User updated after booting",e)})),g(A,"Booted"),R(!0),n(r)}))}catch(t){e(t)}}))]}))}))}),[A,I]),H=(0,u.useCallback)((function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];g(A,"Shuting down plugin..."),y("clearCallbacks"),y.apply(void 0,l(["shutdown"],c(n))),R(!1)}),[A]);return(0,u.useEffect)((function(){return g(A,"Bootstraping plugin...","(Set verbose flag `false`, to remove these debugging logs)"),i(void 0,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),function(){if(!window.ChannelIO){g(A,"Creating plugin queue...");var n=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.c(e)};n.q=[],n.c=function(e){n.q.push(e)},window.ChannelIO=n}}(),[4,v("https://cdn.channel.io/plugin/ch-plugin-web.js",A)];case 1:return n.sent(),g(A,"Auto boot flag set as",r),r?[4,new Promise((function(n){return setTimeout(n,f)}))]:[3,4];case 2:return n.sent(),g(A,"Auto Booting..."),[4,q().catch((function(){}))];case 3:n.sent(),n.label=4;case 4:return[3,6];case 5:return p("Error occurred at plugin boot processing on first mount.",n.sent()),[3,6];case 6:return[2]}}))})),function(){H()}}),[]),(0,u.useEffect)((function(){T.current=x}),[x]),function(n,e){var t=(0,u.useRef)(void 0);t.current&&s()(e,t.current)||(t.current=e),(0,u.useEffect)(n,t.current)}((function(){L&&k&&(g(A,"Rebooting since option has been changed..."),q().catch((function(){})))}),[x]),(0,u.useEffect)((function(){var n=x.customLauncherSelector;if(B&&n){var e=new MutationObserver((function(e){e.filter((function(n){return"childList"===n.type})).filter((function(n){return n.target instanceof HTMLElement})).map((function(e){return e.target.querySelectorAll(n)})).forEach((function(n){return Array.from(n).filter((function(n){return n instanceof HTMLElement})).forEach((function(n){var e=n;e.getAttribute(O)!==E&&(e.setAttribute(O,E),e.addEventListener("click",(function(){return y("showMessenger")}),!1))}))}))}));return e.observe(document.body,{attributes:!1,childList:!0,subtree:!0}),function(){e.disconnect()}}}),[x.customLauncherSelector,B]),u.createElement(b.Provider,{value:{isBooted:L,boot:q,shutdown:H}},e)},B=t(2804),j=t(8407);function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function P(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,u=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(u.push(r.value),!e||u.length!==e);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return A(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return A(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var x=function(){var n=function(){var n=(0,u.useRef)(!1),e=(0,u.useContext)(b);if(!e)throw new Error("Oops, looks like you forgot Provider for ChannelIO hooks.");(0,u.useEffect)((function(){e.isBooted&&(n.current=e.isBooted)}),[e.isBooted]);var t=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["showMessenger"],c(e)))}),[]),r=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["show"],c(e)))}),[]),o=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["hideMessenger"],c(e)))}),[]),f=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["hide"],c(e)))}),[]),s=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["lounge"],c(e)))}),[]),d=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["openChat"],c(e)))}),[]),h=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["track"],c(e)))}),[]),v=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(void 0,void 0,void 0,(function(){return a(this,(function(t){return n.current?[2,new Promise((function(n,t){y("updateUser",e[0],(function(e,r){e?t(e):n(r)}))}))]:[2]}))}))}),[]),p=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(void 0,void 0,void 0,(function(){return a(this,(function(t){return n.current?[2,new Promise((function(n,t){y("addTags",e[0],(function(e,r){e?t(e):n(r)}))}))]:[2]}))}))}),[]),g=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(void 0,void 0,void 0,(function(){return a(this,(function(t){return n.current?[2,new Promise((function(n,t){y("removeTags",e[0],(function(e,r){e?t(e):n(r)}))}))]:[2]}))}))}),[]),w=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["setPage"],c(e)))}),[]),m=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["resetPage"],c(e)))}),[]),C=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["showChannelButton"],c(e)))}),[]),k=(0,u.useCallback)((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.current&&y.apply(void 0,l(["hideChannelButton"],c(e)))}),[]);return{boot:e.boot,shutdown:e.shutdown,showMessenger:t,show:r,hideMessenger:o,hide:f,lounge:s,openChat:d,track:h,updateUser:v,addTags:p,removeTags:g,setPage:w,resetPage:m,showChannelButton:C,hideChannelButton:k}}(),e=(n.boot,n.showChannelButton),t=n.hideChannelButton,r=P((0,B.FV)(j.p4),1)[0],f=(0,u.useState)(!1),s=f[0],h=f[1];!function(n,e){var t=d(e);if(!(0,u.useContext)(b))throw new Error("Oops, looks like you forgot Provider for ChannelIO hooks.");var r=u.useCallback((function(e){var r=e.detail;k(r.method)&&n===r.method&&"function"===typeof t.current&&t.current.apply(t,l([],c(r.args)))}),[n,t]);(0,u.useEffect)((function(){if(k(n))return document.addEventListener(w,r,!1),function(){document.removeEventListener(w,r,!1)};p("Given method name is not exist at Channel IO.","Please refer https://developers.channel.io/docs/web-channel-io.")}),[n,r])}("onHideMessenger",o.ScrollTrigger.refresh),(0,u.useEffect)((function(){r&&s&&setTimeout((function(){return e()}),1e3)}),[r]);return{show:function(){e(),r||h(!0)},hide:function(){t(),r||h(!1)}}};function I(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function T(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,u=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(u.push(r.value),!e||u.length!==e);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==t.return||t.return()}finally{if(a)throw o}}return u}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return I(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return I(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=function(){var n=x(),e=n.show,t=n.hide;return(0,u.useEffect)((function(){o.ScrollTrigger.create({trigger:document.querySelector("#home"),start:"bottom +=1",toggleActions:"play none none reverse",onEnter:e,onLeaveBack:t})}),[]),null},L=function(){var n=T((0,B.FV)(j.p4),2),e=(n[0],n[1]),t=S;return(0,r.jsx)(t,{pluginKey:"4901c2a2-59db-423c-a135-bf76f7b5bff6",language:"ko",autoBoot:!0,hideChannelButtonOnBoot:!0,onBoot:function(){return e(!0)},verbose:!1,children:(0,r.jsx)(M,{})})}}}]);