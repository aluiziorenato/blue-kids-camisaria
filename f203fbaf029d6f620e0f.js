(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{292:function(e,t,r){"use strict";var n=r(8),o=r(52),c=r(309),a=r(310),i=r(10),u=1..toFixed,s=Math.floor,f=function(e,t,r){return 0===t?r:t%2==1?f(e,t-1,r*e):f(e*e,t/2,r)};n({target:"Number",proto:!0,forced:u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){u.call({})}))},{toFixed:function(e){var t,r,n,i,u=c(this),d=o(e),p=[0,0,0,0,0,0],l="",v="0",m=function(e,t){for(var r=-1,n=t;++r<6;)n+=e*p[r],p[r]=n%1e7,n=s(n/1e7)},h=function(e){for(var t=6,r=0;--t>=0;)r+=p[t],p[t]=s(r/e),r=r%e*1e7},y=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==p[e]){var r=String(p[e]);t=""===t?r:t+a.call("0",7-r.length)+r}return t};if(d<0||d>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(l="-",u=-u),u>1e-21)if(r=(t=function(e){for(var t=0,r=e;r>=4096;)t+=12,r/=4096;for(;r>=2;)t+=1,r/=2;return t}(u*f(2,69,1))-69)<0?u*f(2,-t,1):u/f(2,t,1),r*=4503599627370496,(t=52-t)>0){for(m(0,r),n=d;n>=7;)m(1e7,0),n-=7;for(m(f(10,n,1),0),n=t-1;n>=23;)h(1<<23),n-=23;h(1<<n),m(1,1),h(2),v=y()}else m(0,r),m(1<<-t,0),v=y()+a.call("0",d);return v=d>0?l+((i=v.length)<=d?"0."+a.call("0",d-i)+v:v.slice(0,i-d)+"."+v.slice(i-d)):l+v}})},309:function(e,t,r){var n=r(34);e.exports=function(e){if("number"!=typeof e&&"Number"!=n(e))throw TypeError("Incorrect invocation");return+e}},310:function(e,t,r){"use strict";var n=r(52),o=r(35);e.exports="".repeat||function(e){var t=String(o(this)),r="",c=n(e);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(t+=t))1&c&&(r+=t);return r}},317:function(e,t,r){"use strict";r.r(t);r(23),r(38);var n=r(144),o=(r(292),r(57)),c=r(45),a=r(71),i=o.$ecomConfig.get("currency")||"BRL",u=function(e){var t={name:Object(c.a)(e),id:e.sku,price:Object(a.a)(e).toFixed(2)};return e.quantity&&(t.quantity=e.quantity),t},s=function(e){var t=window.storefront&&window.storefront.context;if(t&&"products"===t.resource){var r=t.body,o=u(r),c={event:"eec.detail",ecommerce:{currencyCode:i,detail:{products:[o]}}},a=Object(n.a)(r);a.length&&(o.category=r.category_tree?r.category_tree.replace(/\s>\s/g,"/"):a[0],c.ecommerce.detail.actionField={list:a[0]}),r.brands&&r.brands.length&&(o.brand=r.brands[0].name),e.push(c)}},f=(r(50),r(86),function(e){var t=document.querySelectorAll("[data-sku]");if(t.length){for(var r=[],n={},o="/search"===window.location.pathname,c=0;c<t.length;c++){var a=t[c],u=a.dataset.sku;if(-1===r.indexOf(u)&&(r.push(u),a.closest)){var s=a.closest(".products-carousel");!o&&s&&(n[u]=s.dataset.title)}}e.push({event:"eec.impressions",ecommerce:{currencyCode:i,impressions:r.map((function(e){var t=o?"Search results":n[e],r={id:e};return t&&(r.list=t),r}))}})}}),d=(r(12),r(17),r(174)),p=function(e){var t=window.storefrontApp&&window.storefrontApp.router;if(t){var r=!1,n=function(){var e=[];return d.default.data&&Array.isArray(d.default.data.items)&&d.default.data.items.forEach((function(t){e.push(u(t))})),e},o=function(t,o){var c={step:t,option:o};t<=1||!r?(e.push({event:"eec.checkout",ecommerce:{currencyCode:i,checkout:{actionField:c,products:n()}}}),e.push({event:"checkout"}),r=!0):(e.push({event:"eec.checkout_option",ecommerce:{currencyCode:i,checkout_option:{actionField:c}}}),e.push({event:"checkoutOption"}))},c=function(t){var r,c,a,u=t.name,s=t.params;switch(u){case"cart":o(1,"Review Cart");break;case"checkout":o(2,"Confirm Purchase");break;case"confirmation":r=s.id,c=window.storefrontApp.amount,a=(c&&c.total||d.default.data&&d.default.data.subtotal||0).toFixed(2),e.push({event:"eec.purchase",ecommerce:{currencyCode:i,purchase:{actionField:{id:r,revenue:a},products:n()}}})}};t.currentRoute&&c(t.currentRoute),t.afterEach(c)}};r(0),r(22),r(117),r(36),r(37),r(29);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=function(e){var t={},r=function(r){var n=u(r);e.push({event:"eec.add",ecommerce:{currencyCode:i,add:{products:[n]}}}),e.push({event:"addToCart"}),t[r.sku]=n},n=function(r){var n=t[r.sku];e.push({event:"eec.remove",ecommerce:{currencyCode:i,remove:{products:[n?Object.assign({},n):u(r)]}}}),e.push({event:"removeFromCart"}),delete t[r.sku]};d.default.on("addItem",(function(e){var t=e.item;return r(t)})),d.default.on("increaseItemQnt",(function(e){var o=e.item,c=t[o.sku];if(c){var a=o.quantity-c.quantity;a>0?r(v({},o,{quantity:a})):n(v({},o,{quantity:-a}))}else r(o)})),d.default.on("removeItem",(function(e){var t=e.item;return n(t)})),d.default.on("clear",(function(){for(var e in t)t[e]&&n(t[e])}))};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dataLayerVar,r=e.parseDomMsDelay,n=window[t]||window.dataLayer;n&&(s(n),p(n),h(n),setTimeout((function(){f(n)}),r>=0?r:300))}}}]);
//# sourceMappingURL=f203fbaf029d6f620e0f.js.map