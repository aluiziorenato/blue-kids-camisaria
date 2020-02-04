/*! For license information please see 28a1f44a040806c6c3c2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{279:function(t,o,e){},316:function(t,o,e){"use strict";var r=e(279);e.n(r).a},347:function(t,o,e){"use strict";e.r(o);e(12),e(21),e(8);var r=e(50),i=(e(202),e(51),e(29),e(145),e(39));const s={my_account:{en_us:"My account",pt_br:"Minha conta"},my_orders:{en_us:"My orders",pt_br:"Meus pedidos"},hello:{en_us:"Hello",pt_br:"Olá"},visitor:{en_us:"visitor",pt_br:"visitante"},sign_in_with:{en_us:"Sign in with",pt_br:"Entrar com"},sign_up_with:{en_us:"Sign up with",pt_br:"Cadastrar via"},another:{en_us:"another",pt_br:"outro"},email:{en_us:"email",pt_br:"e-mail"},logout:{en_us:"Logout",pt_br:"Sair"},login:{en_us:"Login",pt_br:"Entrar"},continue_on_popup:{en_us:"Continue login on popup",pt_br:"Continue o login no pop-up"},login_error:{en_us:"There was an error trying to login, please try again or select another option",pt_br:"Houve um erro ao tentar o login, por favor tente novamente ou selecione outra opção"},profile_not_found:{en_us:"No profile found with email address",pt_br:"Nenhum perfil encontrado com o endereço de e-mail"},visitor_checkout:{en_us:"You can also buy as a visitor if you prefer",pt_br:"Você também pode comprar como visitante se preferir"}};var n=function(t,o){return o||(o=this&&this.lang||"en_us"),s[t]&&s[t][o]||""},a=e(146),u={name:"EcUser",props:{lang:{type:String,default:i.$ecomConfig.get("lang")},ecomPassport:{type:Object,default:()=>a.a},popoverPlacement:{type:String,default:"bottomleft"},getGreetingsMsg:{type:Function},accountUrl:{type:String,default:"/app/#/account/"},ordersUrl:{type:String,default:"/app/#/account/orders"},popupAlertCountSecs:{type:Number,default:3}},data:()=>({showPopover:!1,popoverTriggers:"click blur",waiting:!1,waitingPopup:!1,isLogged:!1,email:"",name:"",oauthProviders:[],showLoginForm:!1,popupAlertCount:0,loginErrorAlert:!1,noProfileFound:!1,popoverHideTimer:null}),computed:{greetings(){return"function"==typeof this.getGreetingsMsg?this.getGreetingsMsg(this.name):"".concat(n("hello",this.lang)," ").concat(this.name||n("visitor",this.lang))}},methods:{dictionary:n,update(){this.fixPopoverTriggers();const t=this.ecomPassport,o=t.checkLogin,e=t.getCustomerName;this.name=e(),this.isLogged=o(),this.email="",this.popupAlertCount=0,this.isLogged&&(this.showPopover=!0,setTimeout(()=>{this.showPopover&&(this.popoverHideTimer=setTimeout(()=>{this.showPopover=!1},2e3))},200)),this.waitingPopup=!1,clearTimeout(this.popoverHideTimer)},waitPromise(t){this.fixPopoverTriggers();const o=this;o.waiting=!0,t.catch(t=>{console.error(t)}).finally(()=>{o.waiting=!1})},setOauthProviders(){const t=this,o=t.ecomPassport.fetchOauthProviders().then(({host:o,baseUri:e,oauthPath:r,providers:i})=>{const s=[];for(const t in i)if(i[t]){const n=i[t],a=n.faIcon,u=n.providerName;s.push({link:o+e+t+r,faIcon:a,provider:t,providerName:u})}t.oauthProviders=s}).catch(o=>{throw t.presetOauthProviders(),o});return t.waitPromise(o),o},presetOauthProviders(){this.oauthProviders=[{faIcon:"fa-facebook-f",providerName:"Facebook",provider:"facebook"},{faIcon:"fa-google",providerName:"Google",provider:"google"},{faIcon:"fa-windows",providerName:"Windows",provider:"windowslive"}]},oauthPopup(t,o){const e=this;if(this.loginErrorAlert=!1,t)e.ecomPassport.popupOauthLink(t),e.waitingPopup=!0,setTimeout(()=>{e.popupAlertCount=e.popupAlertCountSecs},200);else{const t=e.setOauthProviders().then(()=>{const t=e.oauthProviders.find(t=>t.provider===o);e.oauthPopup(t,o)}).catch(t=>{throw e.loginErrorAlert=!0,t});e.waitPromise(t)}},popupAlertChanged(t){this.popupAlertCount=t},emailLoginSubmit(t){const o=this;t.preventDefault(),o.showLoginForm=!1;const e=o.ecomPassport.fetchLogin(this.email).catch(t=>{const e=t.response;if(!e||403!==e.status)throw setTimeout(()=>{o.loginErrorAlert=!0},100),t;o.noProfileFound=!0});o.waitPromise(e)},logout(){this.ecomPassport.logout()},resetErrors(){this.noProfileFound=this.loginErrorAlert=!1},resetPopover(){this.showLoginForm?this.showLoginForm=!1:this.resetErrors()},fixPopoverTriggers(){this.showPopover&&(this.popoverTriggers="manual",setTimeout(()=>{this.popoverTriggers="click blur"},310))}},mounted(){const t=this;["login","logout"].forEach(o=>{this.ecomPassport.on(o,e=>{t.update(),t.$emit(o,e)})}),t.update(),t.setOauthProviders()},watch:{noProfileFound(t){!1===t&&(this.email=""),this.showLoginForm=!t},showLoginForm(t){this.loginErrorAlert=!1,t&&(this.fixPopoverTriggers(),setTimeout(()=>{this.$refs.input&&this.$refs.input.focus()},300))},showPopover(){clearTimeout(this.popoverHideTimer)}}},c=(e(316),e(90)),p=Object(c.a)(u,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"ec-user"},[t._t("button",[e("button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",modifiers:{hover:!0,left:!0}}],staticClass:"btn btn-lg btn-light",attrs:{type:"button",id:"ec-user-popover",title:t.dictionary("my_account")}},[e("i",{staticClass:"fas fa-user"})])]),e("b-popover",{attrs:{target:"ec-user-popover",triggers:t.popoverTriggers,show:t.showPopover,placement:t.popoverPlacement},on:{"update:show":function(o){t.showPopover=o},hidden:t.resetPopover}},[e("template",{slot:"title"},[t._v(" "+t._s(t.greetings)+" ")]),e("div",{staticClass:"ec-user__popover"},[e("b-alert",{staticClass:"ec-user__alert",attrs:{show:t.loginErrorAlert,fade:"",variant:"warning"}},[t._v(" "+t._s(t.dictionary("login_error"))+". ")]),e("transition-group",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated position-absolute fadeOut faster"}},[t.waiting?e("div",{key:"waiting"},[e("div",{staticClass:"spinner-border m-3",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]):t.isLogged?e("div",{key:"logged"},[e("div",{staticClass:"list-group list-group-flush"},[e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.ordersUrl}},[t._v(" "+t._s(t.dictionary("my_orders"))+" ")]),e("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:t.accountUrl}},[t._v(" "+t._s(t.dictionary("my_account"))+" ")])]),e("button",{staticClass:"btn btn-block btn-danger ec-user__logout",attrs:{type:"button"},on:{click:t.logout}},[e("i",{staticClass:"fas fa-sign-out-alt"}),t._v(" "+t._s(t.dictionary("logout"))+" ")])]):t.showLoginForm?e("div",{key:"form"},[e("form",{on:{submit:t.emailLoginSubmit}},[e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn ec-user__back",attrs:{type:"button"},on:{click:function(o){t.showLoginForm=!1}}},[e("i",{staticClass:"fas fa-arrow-left"})]),e("label",{attrs:{for:"ec-user-email"}},[t._v(" "+t._s(t.dictionary("sign_in_with")+" "+t.dictionary("email"))+" ")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"input",staticClass:"form-control",attrs:{type:"email",id:"ec-user-email",placeholder:"email@mail.com",required:""},domProps:{value:t.email},on:{input:function(o){o.target.composing||(t.email=o.target.value)}}})]),e("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"submit"}},[t._v(" "+t._s(t.dictionary("login"))+" ")])])]):e("div",{key:"oauth"},[e("b-alert",{staticClass:"ec-user__alert",attrs:{show:!t.popupAlertCount&&t.noProfileFound,fade:"",variant:"info"}},[t._v(" "+t._s(t.dictionary("profile_not_found"))+" "),e("b",[t._v(t._s(t.email))]),t._v(". "),e("br"),e("a",{staticClass:"alert-link",attrs:{href:"javascript:;"},on:{click:function(o){t.noProfileFound=!1}}},[t._v(" "+t._s(t.dictionary("sign_in_with")+" "+t.dictionary("another")+" "+t.dictionary("email"))+" ")])]),e("b-alert",{staticClass:"ec-user__alert",attrs:{show:t.popupAlertCount,dismissible:"",fade:"",variant:"info"},on:{dismissed:function(o){t.popupAlertCount=0},"dismiss-count-down":t.popupAlertChanged}},[t._v(" "+t._s(t.dictionary("continue_on_popup"))+". ")]),t._l(t.oauthProviders,(function(o){var r=o.link,i=o.faIcon,s=o.providerName,n=o.provider;return e("button",{key:n,staticClass:"btn btn-block ec-user__btn",class:"ec-user__btn--"+n,attrs:{type:"button"},on:{click:function(){return t.oauthPopup(r,n)}}},[e("span",{staticClass:"ec-user__btn__icon"},[e("i",{staticClass:"fab",class:i})]),t._v(" "+t._s(t.dictionary(t.noProfileFound?"sign_up_with":"sign_in_with"))+" "+t._s(s)+" ")])})),t.noProfileFound?e("div",{staticClass:"ec-user__visitor-info"},[t._v(" "+t._s(t.dictionary("visitor_checkout"))+" ")]):e("button",{key:"email",staticClass:"btn btn-block btn-secondary ec-user__btn",attrs:{type:"button"},on:{click:function(o){t.showLoginForm=!0}}},[e("span",{staticClass:"ec-user__btn__icon"},[e("i",{staticClass:"fas fa-envelope"})]),t._v(" "+t._s(t.dictionary("sign_in_with")+" "+t.dictionary("email"))+" ")])],2)])],1)],2)],2)}),[],!1,null,null,null).exports;function l(t,o){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?l(Object(e),!0).forEach((function(o){g(t,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))}))}return t}function g(t,o,e){return o in t?Object.defineProperty(t,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[o]=e,t}o.default=(t={},o="user-button")=>{const e=document.getElementById(o);e&&new r.default({render:e=>e(p,{attrs:{id:o},props:d({},t.props)})}).$mount(e)}}}]);
//# sourceMappingURL=28a1f44a040806c6c3c2.js.map