(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{222:function(e,t,n){"use strict";n.r(t);n(22),n(57),n(6);var o=n(10),r=n(71),i=n(180);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}window._info=window._info||{};const s=[],p=[{endpoint:"list_payments"},{endpoint:"calculate_shipping"}];Object.keys(i.a).length&&p.push({endpoint:"apply_discount",reqOptions:{method:"post",data:{utm:i.a}}}),p.forEach(({endpoint:e,reqOptions:t})=>{const n={};window._info[e]=n;const i=new Promise(i=>{Object(o.b)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({url:"/".concat(e,".json")},t)).then(({data:t})=>{const{result:o}=t;Array.isArray(o)&&o.forEach(({error:t,response:o})=>{if(!t){let t,r;switch(e){case"calculate_shipping":t="free_shipping_from_value",r=o[t],"number"==typeof r&&(void 0===n[t]||r<n[t])&&(n[t]=r);break;case"list_payments":t="installments_option",r=o[t],r&&(!n[t]||r.monthly_interest<n[t].monthly_interest||r.max_number>n[t].max_number)&&(n[t]=r),t="discount_option",r=o[t],r&&(!n[t]||r.value>n[t].value)&&(n[t]=r);break;default:t="available_extra_discount",r=o[t],r&&(!n[t]||r.value>n[t].value)&&(n[t]=r)}}}),r.a.emit("info:".concat(e),n)}).catch(t=>{console.error(t),r.a.emit("info:".concat(e),t)}).finally(i)});s.push(i)}),Promise.all(s).then(()=>r.a.emit("info",window._info))}}]);
//# sourceMappingURL=44214eb6ca5752f69a81.js.map