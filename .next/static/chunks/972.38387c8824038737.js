(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{3006:function(){},9590:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,f,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(!i(e[f],a[f]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;for(c=e.entries();!(f=c.next()).done;)if(!i(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(f=c.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(e[f]!==a[f])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(a,u[f]))return!1;if(t&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==u[f]&&"__v"!==u[f]&&"__o"!==u[f]||!e.$$typeof)&&!i(e[u[f]],a[u[f]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},9148:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{O:function(){return Ce}});var o=n(7294),i=n(3935);function a(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function s(e){return e instanceof a(e).Element||e instanceof Element}function f(e){return e instanceof a(e).HTMLElement||e instanceof HTMLElement}function u(e){return"undefined"!==typeof ShadowRoot&&(e instanceof a(e).ShadowRoot||e instanceof ShadowRoot)}var c=Math.max,l=Math.min,p=Math.round;function d(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(f(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=p(n.width)/a||1),i>0&&(o=p(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function v(e){var t=a(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function m(e){return e?(e.nodeName||"").toLowerCase():null}function h(e){return((s(e)?e.ownerDocument:e.document)||window.document).documentElement}function g(e){return d(h(e)).left+v(e).scrollLeft}function y(e){return a(e).getComputedStyle(e)}function b(e){var t=y(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function w(e,t,n){void 0===n&&(n=!1);var r=f(t),o=f(t)&&function(e){var t=e.getBoundingClientRect(),n=p(t.width)/e.offsetWidth||1,r=p(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=h(t),s=d(e,o),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==m(t)||b(i))&&(u=function(e){return e!==a(e)&&f(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:v(e);var t}(t)),f(t)?((c=d(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=g(i))),{x:s.left+u.scrollLeft-c.x,y:s.top+u.scrollTop-c.y,width:s.width,height:s.height}}function O(e){var t=d(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function x(e){return"html"===m(e)?e:e.assignedSlot||e.parentNode||(u(e)?e.host:null)||h(e)}function E(e){return["html","body","#document"].indexOf(m(e))>=0?e.ownerDocument.body:f(e)&&b(e)?e:E(x(e))}function j(e,t){var n;void 0===t&&(t=[]);var r=E(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=a(r),s=o?[i].concat(i.visualViewport||[],b(r)?r:[]):r,f=t.concat(s);return o?f:f.concat(j(x(s)))}function k(e){return["table","td","th"].indexOf(m(e))>=0}function L(e){return f(e)&&"fixed"!==y(e).position?e.offsetParent:null}function A(e){for(var t=a(e),n=L(e);n&&k(n)&&"static"===y(n).position;)n=L(n);return n&&("html"===m(n)||"body"===m(n)&&"static"===y(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&f(e)&&"fixed"===y(e).position)return null;var n=x(e);for(u(n)&&(n=n.host);f(n)&&["html","body"].indexOf(m(n))<0;){var r=y(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var C="top",D="bottom",R="right",S="left",P="auto",M=[C,D,R,S],T="start",B="end",H="viewport",W="popper",V=M.reduce((function(e,t){return e.concat([t+"-"+T,t+"-"+B])}),[]),N=[].concat(M,[P]).reduce((function(e,t){return e.concat([t,t+"-"+T,t+"-"+B])}),[]),_=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function q(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function U(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var F={placement:"bottom",modifiers:[],strategy:"absolute"};function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function I(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?F:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,u={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,f),o.scrollParents={reference:s(e)?j(e):e.contextElement?j(e.contextElement):[],popper:j(t)};var l=function(e){var t=q(e);return _.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=l.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:u,options:r}),f=function(){};a.push(s||f)}})),u.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(z(t,n)){o.rects={reference:w(t,A(n),"fixed"===o.options.strategy),popper:O(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,c=void 0===s?{}:s,l=i.name;"function"===typeof a&&(o=a({state:o,options:c,name:l,instance:u})||o)}else o.reset=!1,r=-1}}},update:U((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){c(),f=!0}};if(!z(e,t))return u;function c(){a.forEach((function(e){return e()})),a=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var X={passive:!0};function Y(e){return e.split("-")[0]}function $(e){return e.split("-")[1]}function J(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function G(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?Y(o):null,a=o?$(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case C:t={x:s,y:n.y-r.height};break;case D:t={x:s,y:n.y+n.height};break;case R:t={x:n.x+n.width,y:f};break;case S:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var u=i?J(i):null;if(null!=u){var c="y"===u?"height":"width";switch(a){case T:t[u]=t[u]-(n[c]/2-r[c]/2);break;case B:t[u]=t[u]+(n[c]/2-r[c]/2)}}return t}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,s=e.offsets,f=e.position,u=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,d=e.isFixed,v=s.x,m=void 0===v?0:v,g=s.y,b=void 0===g?0:g,w="function"===typeof l?l({x:m,y:b}):{x:m,y:b};m=w.x,b=w.y;var O=s.hasOwnProperty("x"),x=s.hasOwnProperty("y"),E=S,j=C,k=window;if(c){var L=A(n),P="clientHeight",M="clientWidth";if(L===a(n)&&"static"!==y(L=h(n)).position&&"absolute"===f&&(P="scrollHeight",M="scrollWidth"),L=L,o===C||(o===S||o===R)&&i===B)j=D,b-=(d&&L===k&&k.visualViewport?k.visualViewport.height:L[P])-r.height,b*=u?1:-1;if(o===S||(o===C||o===D)&&i===B)E=R,m-=(d&&L===k&&k.visualViewport?k.visualViewport.width:L[M])-r.width,m*=u?1:-1}var T,H=Object.assign({position:f},c&&K),W=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:p(t*r)/r||0,y:p(n*r)/r||0}}({x:m,y:b}):{x:m,y:b};return m=W.x,b=W.y,u?Object.assign({},H,((T={})[j]=x?"0":"",T[E]=O?"0":"",T.transform=(k.devicePixelRatio||1)<=1?"translate("+m+"px, "+b+"px)":"translate3d("+m+"px, "+b+"px, 0)",T)):Object.assign({},H,((t={})[j]=x?b+"px":"",t[E]=O?m+"px":"",t.transform="",t))}var Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=N.reduce((function(e,n){return e[n]=function(e,t,n){var r=Y(e),o=[S,C].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[S,R].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function oe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&u(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ie(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ae(e,t){return t===H?ie(function(e){var t=a(e),n=h(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,s=0,f=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:o,height:i,x:s+g(e),y:f}}(e)):s(t)?function(e){var t=d(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ie(function(e){var t,n=h(e),r=v(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=c(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=c(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+g(e),f=-r.scrollTop;return"rtl"===y(o||n).direction&&(s+=c(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(h(e)))}function se(e,t,n){var r="clippingParents"===t?function(e){var t=j(x(e)),n=["absolute","fixed"].indexOf(y(e).position)>=0&&f(e)?A(e):e;return s(n)?t.filter((function(e){return s(e)&&oe(e,n)&&"body"!==m(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ae(e,n);return t.top=c(r.top,t.top),t.right=l(r.right,t.right),t.bottom=l(r.bottom,t.bottom),t.left=c(r.left,t.left),t}),ae(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ue(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ce(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,f=n.rootBoundary,u=void 0===f?H:f,c=n.elementContext,l=void 0===c?W:c,p=n.altBoundary,v=void 0!==p&&p,m=n.padding,g=void 0===m?0:m,y=fe("number"!==typeof g?g:ue(g,M)),b=l===W?"reference":W,w=e.rects.popper,O=e.elements[v?b:l],x=se(s(O)?O:O.contextElement||h(e.elements.popper),a,u),E=d(e.elements.reference),j=G({reference:E,element:w,strategy:"absolute",placement:o}),k=ie(Object.assign({},w,j)),L=l===W?k:E,A={top:x.top-L.top+y.top,bottom:L.bottom-x.bottom+y.bottom,left:x.left-L.left+y.left,right:L.right-x.right+y.right},S=e.modifiersData.offset;if(l===W&&S){var P=S[o];Object.keys(A).forEach((function(e){var t=[R,D].indexOf(e)>=0?1:-1,n=[C,D].indexOf(e)>=0?"y":"x";A[e]+=P[n]*t}))}return A}function le(e,t,n){return c(e,l(t,n))}var pe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,u=n.rootBoundary,p=n.altBoundary,d=n.padding,v=n.tether,m=void 0===v||v,h=n.tetherOffset,g=void 0===h?0:h,y=ce(t,{boundary:f,rootBoundary:u,padding:d,altBoundary:p}),b=Y(t.placement),w=$(t.placement),x=!w,E=J(b),j="x"===E?"y":"x",k=t.modifiersData.popperOffsets,L=t.rects.reference,P=t.rects.popper,M="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,B="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),H=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(k){if(i){var V,N="y"===E?C:S,_="y"===E?D:R,q="y"===E?"height":"width",U=k[E],F=U+y[N],z=U-y[_],I=m?-P[q]/2:0,X=w===T?L[q]:P[q],G=w===T?-P[q]:-L[q],K=t.elements.arrow,Q=m&&K?O(K):{width:0,height:0},Z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Z[N],te=Z[_],ne=le(0,L[q],Q[q]),re=x?L[q]/2-I-ne-ee-B.mainAxis:X-ne-ee-B.mainAxis,oe=x?-L[q]/2+I+ne+te+B.mainAxis:G+ne+te+B.mainAxis,ie=t.elements.arrow&&A(t.elements.arrow),ae=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(V=null==H?void 0:H[E])?V:0,fe=U+oe-se,ue=le(m?l(F,U+re-se-ae):F,U,m?c(z,fe):z);k[E]=ue,W[E]=ue-U}if(s){var pe,de="x"===E?C:S,ve="x"===E?D:R,me=k[j],he="y"===j?"height":"width",ge=me+y[de],ye=me-y[ve],be=-1!==[C,S].indexOf(b),we=null!=(pe=null==H?void 0:H[j])?pe:0,Oe=be?ge:me-L[he]-P[he]-we+B.altAxis,xe=be?me+L[he]+P[he]-we-B.altAxis:ye,Ee=m&&be?function(e,t,n){var r=le(e,t,n);return r>n?n:r}(Oe,me,xe):le(m?Oe:ge,me,m?xe:ye);k[j]=Ee,W[j]=Ee-me}t.modifiersData[r]=W}},requiresIfExists:["offset"]};var de={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Y(n.placement),f=J(s),u=[S,R].indexOf(s)>=0?"height":"width";if(i&&a){var c=function(e,t){return fe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ue(e,M))}(o.padding,n),l=O(i),p="y"===f?C:S,d="y"===f?D:R,v=n.rects.reference[u]+n.rects.reference[f]-a[f]-n.rects.popper[u],m=a[f]-n.rects.reference[f],h=A(i),g=h?"y"===f?h.clientHeight||0:h.clientWidth||0:0,y=v/2-m/2,b=c[p],w=g-l[u]-c[d],x=g/2-l[u]/2+y,E=le(b,x,w),j=f;n.modifiersData[r]=((t={})[j]=E,t.centerOffset=E-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&oe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ve(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[C,R,D,S].some((function(t){return e[t]>=0}))}var he=I({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,s=r.resize,f=void 0===s||s,u=a(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,X)})),f&&u.addEventListener("resize",n.update,X),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,X)})),f&&u.removeEventListener("resize",n.update,X)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=G({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,u={placement:Y(t.placement),variation:$(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&m(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&m(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},Z,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,u=n.padding,c=n.boundary,l=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,v=void 0===d||d,m=n.allowedAutoPlacements,h=t.options.placement,g=Y(h),y=f||(g===h||!v?[te(h)]:function(e){if(Y(e)===P)return[];var t=te(e);return[re(e),t,re(t)]}(h)),b=[h].concat(y).reduce((function(e,n){return e.concat(Y(n)===P?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,u=void 0===f?N:f,c=$(r),l=c?s?V:V.filter((function(e){return $(e)===c})):M,p=l.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=l);var d=p.reduce((function(t,n){return t[n]=ce(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[Y(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:c,rootBoundary:l,padding:u,flipVariations:v,allowedAutoPlacements:m}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,E=!0,j=b[0],k=0;k<b.length;k++){var L=b[k],A=Y(L),B=$(L)===T,H=[C,D].indexOf(A)>=0,W=H?"width":"height",_=ce(t,{placement:L,boundary:c,rootBoundary:l,altBoundary:p,padding:u}),q=H?B?R:S:B?D:C;w[W]>O[W]&&(q=te(q));var U=te(q),F=[];if(i&&F.push(_[A]<=0),s&&F.push(_[q]<=0,_[U]<=0),F.every((function(e){return e}))){j=L,E=!1;break}x.set(L,F)}if(E)for(var z=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return j=t,"break"},I=v?3:1;I>0;I--){if("break"===z(I))break}t.placement!==j&&(t.modifiersData[r]._skip=!0,t.placement=j,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},pe,de,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ce(t,{elementContext:"reference"}),s=ce(t,{altBoundary:!0}),f=ve(a,r),u=ve(s,o,i),c=me(f),l=me(u);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),ge=n(9590),ye=n.n(ge),be=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},we="undefined"!==typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect,Oe=[];function xe(e){var t=o.useRef(e);return t.current=e,o.useCallback((function(){return t.current}),[])}var Ee=function(){};function je(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var ke=["styles","attributes"],Le={getBoundingClientRect:je()},Ae={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function Ce(e,t){var n,a,s;void 0===e&&(e={}),void 0===t&&(t={});var f=Object.keys(Ae).reduce((function(e,t){var n;return r({},e,((n={})[t]=void 0!==e[t]?e[t]:Ae[t],n))}),e),u=o.useMemo((function(){return[{name:"offset",options:{offset:f.offset}}]}),Array.isArray(f.offset)?f.offset:[]),c=r({},t,{placement:t.placement||f.placement,modifiers:t.modifiers||u}),l=o.useState(null),p=l[0],d=l[1],v=o.useState(null),m=v[0],h=v[1],g=function(e){var t=e.initial,n=e.value,r=e.onChange,i=void 0===r?Ee:r;if(void 0===t&&void 0===n)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var a=o.useState(t),s=a[0],f=a[1],u=xe(s),c=o.useCallback((function(e){var t=u(),n="function"===typeof e?e(t):e;"function"===typeof n.persist&&n.persist(),f(n),"function"===typeof i&&i(n)}),[u,i]),l=void 0!==n;return[l?n:s,l?i:c]}({initial:f.defaultVisible,value:f.visible,onChange:f.onVisibleChange}),y=g[0],b=g[1],w=o.useRef();o.useEffect((function(){return function(){return clearTimeout(w.current)}}),[]);var O=function(e,t,n){void 0===n&&(n={});var r=o.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Oe},s=o.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),f=s[0],u=s[1],c=o.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);i.flushSync((function(){u({styles:be(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:be(n.map((function(e){return[e,t.attributes[e]]})))})}))},requires:["computeStyles"]}}),[]),l=o.useMemo((function(){var e={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[c,{name:"applyStyles",enabled:!1}])};return ye()(r.current,e)?r.current||e:(r.current=e,e)}),[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,c]),p=o.useRef();return we((function(){p.current&&p.current.setOptions(l)}),[l]),we((function(){if(null!=e&&null!=t){var r=(n.createPopper||he)(e,t,l);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:f.styles,attributes:f.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}(f.followCursor?Le:p,m,c),x=O.styles,E=O.attributes,j=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(O,ke),k=j.update,L=xe({visible:y,triggerRef:p,tooltipRef:m,finalConfig:f}),A=o.useCallback((function(e){return Array.isArray(f.trigger)?f.trigger.includes(e):f.trigger===e}),Array.isArray(f.trigger)?f.trigger:[f.trigger]),C=o.useCallback((function(){clearTimeout(w.current),w.current=window.setTimeout((function(){return b(!1)}),f.delayHide)}),[f.delayHide,b]),D=o.useCallback((function(){clearTimeout(w.current),w.current=window.setTimeout((function(){return b(!0)}),f.delayShow)}),[f.delayShow,b]),R=o.useCallback((function(){L().visible?C():D()}),[L,C,D]);o.useEffect((function(){if(L().finalConfig.closeOnOutsideClick){var e=function(e){var t,n=L(),r=n.tooltipRef,o=n.triggerRef,i=(null==e.composedPath||null==(t=e.composedPath())?void 0:t[0])||e.target;i instanceof Node&&(null==r||null==o||r.contains(i)||o.contains(i)||C())};return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}}),[L,C]),o.useEffect((function(){if(null!=p&&A("click"))return p.addEventListener("click",R),function(){return p.removeEventListener("click",R)}}),[p,A,R]),o.useEffect((function(){if(null!=p&&A("right-click")){var e=function(e){e.preventDefault(),R()};return p.addEventListener("contextmenu",e),function(){return p.removeEventListener("contextmenu",e)}}}),[p,A,R]),o.useEffect((function(){if(null!=p&&A("focus"))return p.addEventListener("focus",D),p.addEventListener("blur",C),function(){p.removeEventListener("focus",D),p.removeEventListener("blur",C)}}),[p,A,D,C]),o.useEffect((function(){if(null!=p&&A("hover"))return p.addEventListener("mouseenter",D),p.addEventListener("mouseleave",C),function(){p.removeEventListener("mouseenter",D),p.removeEventListener("mouseleave",C)}}),[p,A,D,C]),o.useEffect((function(){if(null!=m&&L().finalConfig.interactive)return m.addEventListener("mouseenter",D),m.addEventListener("mouseleave",C),function(){m.removeEventListener("mouseenter",D),m.removeEventListener("mouseleave",C)}}),[m,D,C,L]);var S=null==j||null==(n=j.state)||null==(a=n.modifiersData)||null==(s=a.hide)?void 0:s.isReferenceHidden;o.useEffect((function(){f.closeOnTriggerHidden&&S&&C()}),[f.closeOnTriggerHidden,C,S]),o.useEffect((function(){if(f.followCursor&&null!=p)return p.addEventListener("mousemove",e),function(){return p.removeEventListener("mousemove",e)};function e(e){var t=e.clientX,n=e.clientY;Le.getBoundingClientRect=je(t,n),null==k||k()}}),[f.followCursor,p,k]),o.useEffect((function(){if(null!=m&&null!=k&&null!=f.mutationObserverOptions){var e=new MutationObserver(k);return e.observe(m,f.mutationObserverOptions),function(){return e.disconnect()}}}),[f.mutationObserverOptions,m,k]);return r({getArrowProps:function(e){return void 0===e&&(e={}),r({},e,E.arrow,{style:r({},e.style,x.arrow),"data-popper-arrow":!0})},getTooltipProps:function(e){return void 0===e&&(e={}),r({},e,{style:r({},e.style,x.popper)},E.popper,{"data-popper-interactive":f.interactive})},setTooltipRef:h,setTriggerRef:d,tooltipRef:m,triggerRef:p,visible:y},j)}}}]);