(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{265:function(e,t,s){var a=s(314);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,s(137).default)("5af98a6a",a,!0,{})},313:function(e,t,s){"use strict";var a=s(265);s.n(a).a},314:function(e,t,s){(t=s(136)(!1)).push([e.i,".ec-search__popover{max-width:calc(100vw - 2rem);max-height:calc(100vh - 200px);margin-top:10px;overflow-y:auto;box-shadow:0 0 .75rem rgba(0,0,0,.075)}@media (min-width:576px){.ec-search__popover{min-width:400px}}@media (min-width:850px){.ec-search__popover{max-height:calc(100vh - 100px)}}@media (min-width:1200px){.ec-search__popover{max-width:1100px;min-width:800px}}.ec-search__head{display:flex;justify-content:space-between;align-items:flex-start}.ec-search__close{padding:0 .25rem}.ec-search__close:focus{box-shadow:none}.ec-search__history,.ec-search__info{font-weight:300;margin-bottom:.25rem;font-size:1.15rem;overflow-x:auto;white-space:nowrap;color:var(--gray)}.ec-search__info em{color:var(--secondary);margin-right:.5rem}.ec-search__info span{display:inline-block}.ec-search__history__link{margin-left:.5rem}.ec-search__items{display:flex;overflow-x:auto}@media (min-width:992px){.ec-search__items{margin-top:1rem;width:850px}}.ec-search__item{padding-right:1rem}.ec-search__item:last-child{padding-right:0}@media (max-width:849.98px){.ec-search__item{width:200px;flex:0 0 200px}}@media (min-width:850px){.ec-search__item{width:25%}}.ec-search__item .btn,.ec-search__item button{display:none}.ec-search__item .ec-prices{height:auto;white-space:normal}",""]),e.exports=t},356:function(e,t,s){"use strict";s.r(t);var a=s(37),r=(s(183),s(22),s(57),s(16),s(1)),i=s(187);const c={did_you_mean:{en_us:"Did you mean",pt_br:"Você quis dizer"},no_results_for:{en_us:"No results for",pt_br:"Nenhum produto encontrado para"},total_results_for:{en_us:"products found for",pt_br:"produtos encontrados para"},see_all:{en_us:"See all",pt_br:"Ver todos"}};var o={name:"EcSearch",components:{EcProductCard:s(209).a},props:{lang:{type:String,default:r.a.get("lang")},storeId:{type:Number,default:r.a.get("store_id")},term:{type:String,default:""},maxItems:{type:Number,default:4},autoFixScore:{type:[Number,Boolean],default:.83},popoverPlacement:{type:String,default:"bottom"}},data(){return{ecomSearch:new i.a(this.storeId),searchTerm:this.term,searchedTerm:null,searching:!1,suggestedItems:[],suggestedTerm:"",totalSearchResults:0,elInput:null,showPopover:!1}},computed:{history(){return this.ecomSearch.history.filter(e=>e.length>2&&-1===this.searchTerm.indexOf(e)).slice(0,5)}},methods:{dictionary:function(e,t){return t||(t=this&&this.lang||"en_us"),c[e]&&c[e][t]||""},setSearchTerm(e){this.elInput.value=e;const t=this.$el.parentElement;t&&"FORM"===t.tagName?t.submit():this.searchTerm=e},checkCurrentTerm(e){return!e&&!this.elInput.value||this.elInput.value===e},handleSuggestions(e){let t=e,s=!1;this.suggestedTerm="",this.ecomSearch.getTermSuggestions().forEach(({options:a,text:r})=>{if(a.length){const i=a[0];!this.totalSearchResults&&this.autoFixScore>0&&i.score>=this.autoFixScore&&-1===i.text.indexOf(e)&&(s=!0),t=t.replace(r,i.text)}}),t!==e&&(s?this.elInput.value=this.searchTerm=t:this.suggestedTerm=t,this.ecomSearch.history.shift())},fetchItems(e){const{ecomSearch:t}=this;!1!==e?(e||(e=this.searchTerm),t.setSearchTerm(e)):t.reset().setPageSize(this.maxItems),this.searching=!0,t.fetch().then(()=>{if(this.checkCurrentTerm(e)){const{getItems:s,getTotalCount:a}=t;this.searchedTerm=e,this.suggestedItems=s(),this.totalSearchResults=a(),this.handleSuggestions(e)}}).catch(e=>{console.error(e)}).finally(()=>{this.searching=!1})},instantSearch(e){null===this.searchedTerm?this.fetchItems(e):this.searchedTerm!==e&&(this.showPopover=!1,setTimeout(()=>{this.checkCurrentTerm(e)&&this.fetchItems(e),setTimeout(()=>{this.checkCurrentTerm(e)&&(this.showPopover=!0)},100)},400))}},created(){let e,t=window.pageYOffset;window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{Math.abs(window.pageYOffset-t)>50&&this.elInput===document.activeElement&&this.elInput.blur(),t=window.pageYOffset},50)}),this.ecomSearch.setPageSize(this.maxItems)},mounted(){let e;for(let t=0;t<this.$el.childNodes.length;t++)if("INPUT"===this.$el.childNodes[0].tagName){e=this.$el.childNodes[0];break}e?(e.addEventListener("keyup",t=>{this.searchTerm=e.value,this.showPopover||(this.showPopover=!0)}),e.addEventListener("focus",e=>{this.totalSearchResults||this.instantSearch(!1)}),this.term?this.fetchItems():this.searchTerm=e.value,e.setAttribute("autocomplete","off"),this.elInput=e):this.fetchItems()},watch:{searchTerm(e){e?e.length>2&&this.instantSearch(e):this.instantSearch(!1)}}},n=(s(313),s(72)),h=Object(n.a)(o,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-search"},[e._t("input",[s("input",{staticClass:"form-control",attrs:{type:"search"}})]),e.elInput?[s("b-popover",{attrs:{triggers:"focus","custom-class":"ec-search__popover",target:e.elInput.id,show:e.showPopover,placement:e.popoverPlacement,"fallback-placement":[e.popoverPlacement]},on:{"update:show":function(t){e.showPopover=t}}},[s("div",{staticClass:"ec-search__head"},[s("div",[e.searching?s("div",{staticClass:"spinner-border m-4",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[!e.searching&&e.searchedTerm?s("div",{staticClass:"ec-search__info"},[e.suggestedTerm?[e._v(" "+e._s(e.dictionary("did_you_mean"))+" "),s("a",{staticClass:"ec-search__suggestion",attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.suggestedTerm)}}}),e._v(" ? ")]:e._e(),e.totalSearchResults?s("span",{staticClass:"ec-search__count-results"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.dictionary("total_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))]),e.totalSearchResults>e.maxItems?s("a",{attrs:{href:"#"},domProps:{textContent:e._s("+"+e.dictionary("see_all"))},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.searchedTerm)}}}):e._e()]):s("span",{staticClass:"ec-search__no-results"},[e._v(" "+e._s(e.dictionary("no_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))])])],2):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInLeft"}},[e.history.length?s("div",{staticClass:"ec-search__history"},[s("i",{staticClass:"fas fa-history"}),e._l(e.history,(function(t){return s("a",{staticClass:"ec-search__history__link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(s){return s.preventDefault(),e.setSearchTerm(t)}}})}))],2):e._e()])],1),s("button",{staticClass:"btn ec-search__close",attrs:{type:"button"},on:{click:function(t){e.showPopover=!1}}},[s("i",{staticClass:"fas fa-times"})])]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slow"}},[!e.searching&&e.suggestedItems.length?s("div",{staticClass:"ec-search__items"},e._l(e.suggestedItems,(function(t){return s("ec-product-card",{key:t._id,staticClass:"ec-search__item",attrs:{lang:e.lang,storeId:e.storeId,product:t}})})),1):e._e()])],1)]:e._e()],2)}),[],!1,null,null,null).exports;t.default=(e={},t="search-input")=>{const s=document.getElementById(t);if(s){const t={};for(let e=s.attributes.length-1;e>=0;e--){const{name:a,value:r}=s.attributes[e];t[a]=r}new a.default({render:s=>s(h,{props:e.props,scopedSlots:{input:()=>s("input",{attrs:t})}})}).$mount(s)}}}}]);
//# sourceMappingURL=6c7f6c4cb57290084032.js.map