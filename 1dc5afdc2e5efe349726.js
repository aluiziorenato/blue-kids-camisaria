(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{280:function(e,t,s){},317:function(e,t,s){"use strict";var r=s(280);s.n(r).a},346:function(e,t,s){"use strict";s.r(t);var r=s(50),a=(s(202),s(12),s(41),s(65),s(29),s(145),s(23),s(8),s(3)),n=s(206);const o={did_you_mean:{en_us:"Did you mean",pt_br:"Você quis dizer"},no_results_for:{en_us:"No results for",pt_br:"Nenhum produto encontrado para"},total_results_for:{en_us:"products found for",pt_br:"produtos encontrados para"},see_all:{en_us:"See all",pt_br:"Ver todos"}};var i={name:"EcSearch",components:{EcProductCard:s(228).a},props:{lang:{type:String,default:a.a.get("lang")},storeId:{type:Number,default:a.a.get("store_id")},term:{type:String,default:""},maxItems:{type:Number,default:4},autoFixScore:{type:[Number,Boolean],default:.83},popoverPlacement:{type:String,default:"bottom"}},data(){return{ecomSearch:new n.a(this.storeId),searchTerm:this.term,searchedTerm:null,searching:!1,suggestedItems:[],suggestedTerm:"",totalSearchResults:0,elInput:null,showPopover:!1}},computed:{history(){return this.ecomSearch.history.filter(e=>e.length>2&&-1===this.searchTerm.indexOf(e)).slice(0,5)}},methods:{dictionary:function(e,t){return t||(t=this&&this.lang||"en_us"),o[e]&&o[e][t]||""},setSearchTerm(e){this.elInput.value=e;const t=this.$el.parentElement;t&&"FORM"===t.tagName?t.submit():this.searchTerm=e},checkCurrentTerm(e){return!e&&!this.elInput.value||this.elInput.value===e},handleSuggestions(e){let t=e,s=!1;this.suggestedTerm="",this.ecomSearch.getTermSuggestions().forEach(({options:r,text:a})=>{if(r.length){const n=r[0];!this.totalSearchResults&&this.autoFixScore>0&&n.score>=this.autoFixScore&&-1===n.text.indexOf(e)&&(s=!0),t=t.replace(a,n.text)}}),t!==e&&(s?this.elInput.value=this.searchTerm=t:this.suggestedTerm=t,this.ecomSearch.history.shift())},fetchItems(e){const t=this.ecomSearch;!1!==e?(e||(e=this.searchTerm),t.setSearchTerm(e)):t.reset().setPageSize(this.maxItems),this.searching=!0,t.fetch().then(()=>{if(this.checkCurrentTerm(e)){const s=t.getItems,r=t.getTotalCount;this.searchedTerm=e,this.suggestedItems=s(),this.totalSearchResults=r(),this.handleSuggestions(e)}}).catch(e=>{console.error(e)}).finally(()=>{this.searching=!1})},instantSearch(e){null===this.searchedTerm?this.fetchItems(e):this.searchedTerm!==e&&(this.showPopover=!1,setTimeout(()=>{this.checkCurrentTerm(e)&&this.fetchItems(e),setTimeout(()=>{this.checkCurrentTerm(e)&&(this.showPopover=!0)},100)},400))}},created(){let e,t=window.pageYOffset;window.addEventListener("scroll",()=>{clearTimeout(e),e=setTimeout(()=>{Math.abs(window.pageYOffset-t)>50&&this.elInput===document.activeElement&&this.elInput.blur(),t=window.pageYOffset},50)}),this.ecomSearch.setPageSize(this.maxItems)},mounted(){let e;for(let t=0;t<this.$el.childNodes.length;t++)if("INPUT"===this.$el.childNodes[0].tagName){e=this.$el.childNodes[0];break}e?(e.addEventListener("keyup",t=>{this.searchTerm=e.value,this.showPopover||(this.showPopover=!0)}),e.addEventListener("focus",e=>{this.totalSearchResults||this.instantSearch(!1)}),this.term?this.fetchItems():this.searchTerm=e.value,e.setAttribute("autocomplete","off"),this.elInput=e):this.fetchItems()},watch:{searchTerm(e){e?e.length>2&&this.instantSearch(e):this.instantSearch(!1)}}},c=(s(317),s(90)),h=Object(c.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"ec-search"},[e._t("input",[s("input",{staticClass:"form-control",attrs:{type:"search"}})]),e.elInput?[s("b-popover",{attrs:{triggers:"focus","custom-class":"ec-search__popover",target:e.elInput.id,show:e.showPopover,placement:e.popoverPlacement,"fallback-placement":[e.popoverPlacement]},on:{"update:show":function(t){e.showPopover=t}}},[s("div",{staticClass:"ec-search__head"},[s("div",[e.searching?s("div",{staticClass:"spinner-border m-4",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])]):e._e(),s("transition",{attrs:{"enter-active-class":"animated fadeIn"}},[!e.searching&&e.searchedTerm?s("div",{staticClass:"ec-search__info"},[e.suggestedTerm?[e._v(" "+e._s(e.dictionary("did_you_mean"))+" "),s("a",{staticClass:"ec-search__suggestion",attrs:{href:"#"},domProps:{textContent:e._s(e.suggestedTerm)},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.suggestedTerm)}}}),e._v(" ? ")]:e._e(),e.totalSearchResults?s("span",{staticClass:"ec-search__count-results"},[s("strong",[e._v(e._s(e.totalSearchResults))]),e._v(" "+e._s(e.dictionary("total_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))]),e.totalSearchResults>e.maxItems?s("a",{attrs:{href:"#"},domProps:{textContent:e._s("+"+e.dictionary("see_all"))},on:{click:function(t){return t.preventDefault(),e.setSearchTerm(e.searchedTerm)}}}):e._e()]):s("span",{staticClass:"ec-search__no-results"},[e._v(" "+e._s(e.dictionary("no_results_for"))+" "),s("em",[e._v(e._s(e.searchedTerm))])])],2):e._e()]),s("transition",{attrs:{"enter-active-class":"animated fadeInLeft"}},[e.history.length?s("div",{staticClass:"ec-search__history"},[s("i",{staticClass:"fas fa-history"}),e._l(e.history,(function(t){return s("a",{staticClass:"ec-search__history__link",attrs:{href:"#"},domProps:{textContent:e._s(t)},on:{click:function(s){return s.preventDefault(),e.setSearchTerm(t)}}})}))],2):e._e()])],1),s("button",{staticClass:"btn ec-search__close",attrs:{type:"button"},on:{click:function(t){e.showPopover=!1}}},[s("i",{staticClass:"fas fa-times"})])]),s("transition",{attrs:{"enter-active-class":"animated fadeIn slow"}},[!e.searching&&e.suggestedItems.length?s("div",{staticClass:"ec-search__items"},e._l(e.suggestedItems,(function(t){return s("ec-product-card",{key:t._id,staticClass:"ec-search__item",attrs:{lang:e.lang,storeId:e.storeId,product:t}})})),1):e._e()])],1)]:e._e()],2)}),[],!1,null,null,null).exports;t.default=(e={},t="search-input")=>{const s=document.getElementById(t);if(s){const t={};for(let e=s.attributes.length-1;e>=0;e--){const r=s.attributes[e],a=r.name,n=r.value;t[a]=n}new r.default({render:s=>s(h,{props:e.props,scopedSlots:{input:()=>s("input",{attrs:t})}})}).$mount(s)}}}}]);
//# sourceMappingURL=1dc5afdc2e5efe349726.js.map