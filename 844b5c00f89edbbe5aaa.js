(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{237:function(t,e,o){"use strict";o.r(e);var s=(t,e)=>{new window.MutationObserver(e).observe(t,{childList:!1,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0})},d=t=>{const e=document.createElement("div");return e.setAttribute("data-trustvox-product-code",t),e};e.default=t=>{t&&t.trustvoxStoreId?(["//static.trustvox.com.br/assets/widget.js","//s3-sa-east-1.amazonaws.com/trustvox-rate-widget-js/widget.js"].forEach(t=>{const e=document.createElement("script");e.src=t,document.body.appendChild(e)}),(t=>{const e=document.getElementsByClassName("product-card");if(e){const o=[],n={};for(let t=0;t<e.length;t++){const r=e[t];if(r&&r.dataset){const{sku:t}=r.dataset;if(-1===o.indexOf(t)){const e=d(t);e.style.display="none",o.push(t),n[t]=e,document.body.appendChild(e)}const e=r.parentElement;s(e,()=>{for(let t=0;t<e.childNodes.length;t++){const s=e.childNodes[t],{sku:d,toRender:r}=s.dataset;if(!r&&o.indexOf(d)>-1){const t=n[d],e=document.querySelectorAll(`[data-sku="${d}"] .ec-product-card__link`);if(e.length){for(let o=0;o<e.length;o++)e[o].appendChild(t);t.style.display="inherit"}}}})}}window._trustvox_shelf_rate=window._trustvox_shelf_rate||[],window._trustvox_shelf_rate.push(["_storeId",t.trustvoxStoreId])}})(t),(()=>{const t=document.getElementById("search");t&&s(t,()=>{const t=document.querySelectorAll("#search-engine .product-card");for(let e=0;e<t.length;e++){const o=t[e],{sku:s}=o.dataset,n=document.querySelectorAll(`[data-sku="${s}"] .ec-product-card__link`);if(n.length){const t=d(s);for(let e=0;e<n.length;e++)n[e].appendChild(t)}}window._trustvox_shelf_rate.push(["_productContainer","#search"])})})(),(t=>{const e=document.getElementById("product"),o=window._context.body,s={childList:!1,attributes:!0,characterData:!0,subtree:!0,attributeOldValue:!0,characterDataOldValue:!0};if(e){const d=(()=>{const t=document.createElement("a");t.className="trustvox-fluid-jump trustvox-widget-rating product-widget-rating",t.id="trustvox-widget-rating",t.href="#_trustvox_widget",t.title="Veja as opiniões de quem comprou esse produto!";const e=document.createElement("div");e.className="trustvox-shelf-container",e.setAttribute("data-trustvox-product-code",o.sku),t.appendChild(e);const s=document.createElement("span");return s.className="rating-click-here",t.appendChild(s),t})();d.style.display="none",document.body.appendChild(d);let n=!1,r=null;const c=e.parentElement;for(let t=0;t<c.childNodes.length;t++)if("product"===c.childNodes[t].id){const e=()=>{for(let e=0;e<c.childNodes[t].childNodes.length;e++){const o=c.childNodes[t].childNodes[e];if("product-block"===o.id){const{toRender:t}=o.dataset;if(!t){const t=document.getElementsByClassName("ec-product__name")[0];n||void 0===t||(t.parentNode.insertBefore(d,t.nextSibling),d.style.display="inherit",n=!0)}}}};r=new window.MutationObserver(e),r.observe(c.childNodes[t],s)}const a=[];o.pictures.forEach(t=>{t.normal&&a.push(t.normal.url)}),window._trustvox=window._trustvox||[],window._trustvox.push(["_storeId",t.trustvoxStoreId]),window._trustvox.push(["_productId",o.sku]),window._trustvox.push(["_productName",o.name]),window._trustvox.push(["_productPhotos",a]);const i=document.createElement("div");i.id="_trustvox_widget",document.getElementById("product").appendChild(i);const u=setInterval(()=>{n&&(r.disconnect(),clearInterval(u))},1e3)}})(t)):console.error(new Error("Can't setup Trustvox widget without `trustvoxStoreId` option"))}}}]);
//# sourceMappingURL=844b5c00f89edbbe5aaa.js.map