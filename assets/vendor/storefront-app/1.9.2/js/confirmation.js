(window["webpackJsonp_storefront_app"]=window["webpackJsonp_storefront_app"]||[]).push([["confirmation"],{"26cb":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".ec-shipping-line__address{margin-top:1rem}",""]),t.exports=e},3171:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"confirmation"}},[i("ec-order-info",{attrs:{order:t.order,isNew:!0},on:{"update:order":function(e){t.order=e}}})],1)},r=[],s=(i("a4d3"),i("99af"),i("4de4"),i("7db0"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b"),i("ade3")),a=i("5880"),o=i("f69d"),c=i.n(o),d=i("2e80"),l=i.n(d),u=i("e0f7"),_=i("e2a0");function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"confirmation",components:{EcOrderInfo:_["a"]},data:function(){return{canUpsertCart:!0}},computed:m({},Object(a["mapGetters"])(["orders","customer"]),{orderId:function(){return this.$route.params.id},order:{get:function(){var t=this;return this.orders.find((function(e){var i=e._id;return i===t.orderId}))||{_id:this.orderId}},set:function(t){if(t&&t._id===this.orderId){var e=this.orders.concat(),i=e.find((function(e){var i=e._id;return i===t._id}));i?Object.assign(i,t):e.push(t),this.setOrders(e)}}}}),methods:m({},Object(a["mapMutations"])(["addOrder","setOrders","resetCart"]),{},Object(a["mapActions"])(["saveCustomer"]),{handleUpsertCart:function(){if(this.canUpsertCart){this.canUpsertCart=!1;var t=this.order.status;t&&"cancelled"!==t&&(c.a.data.completed=!0,this.orderId&&(c.a.data.orders||(c.a.data.orders=[]),c.a.data.orders.push(this.orderId)),Object(u["c"])().then(this.resetCart))}}}),created:function(){var t=this,e=this.customer;l.a.checkAuthorization()||e.main_email&&e.doc_number&&l.a.fetchLogin(e.main_email,e.doc_number).then((function(){t.saveCustomer({ecomPassport:l.a}),t.handleUpsertCart()}))},mounted:function(){l.a.checkAuthorization()&&this.handleUpsertCart()}},b=f,g=i("2877"),v=Object(g["a"])(b,n,r,!1,null,null,null);e["default"]=v.exports},"350e":function(t,e,i){"use strict";var n=i("eee8"),r=i.n(n);r.a},3977:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".ec-summary__item{display:-webkit-box;display:flex;-webkit-box-align:start;align-items:flex-start;overflow-x:hidden;margin-bottom:.5rem}.ec-summary__item a{color:inherit}.ec-summary__item img{-webkit-box-flex:0;flex:0 0 50px;height:auto;margin-right:.5rem}.ec-summary__item small{line-height:1.3;display:inline-block}.ec-summary__amount{margin:1.5rem 0;padding:.75rem 0;border-top:1px dotted var(--gray)}.ec-summary__amount:last-child{margin-bottom:0;padding-bottom:0}.ec-summary__amount__row{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;margin-top:.25rem}.ec-summary__amount__row>span{font-weight:300}.ec-summary__amount__row>span small{display:block;line-height:1.15;color:var(--gray)}.ec-summary__amount__row--total{margin-top:.5rem;font-size:1.25rem}.ec-summary__amount__row--total>div{font-weight:700}.ec-summary__amount__row--total strong{color:var(--secondary)}",""]),t.exports=e},"3ef4":function(t,e,i){"use strict";var n=i("5363"),r=i.n(n);r.a},5363:function(t,e,i){var n=i("26cb");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("14614874",n,!0,{sourceMap:!1,shadowMode:!1})},6205:function(t,e,i){var n=i("3977");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("0d9c572e",n,!0,{sourceMap:!1,shadowMode:!1})},8225:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"ec-summary"},[i("h5",{staticClass:"ec-summary__title"},[t._v(" "+t._s(t.i19summary)+" ")]),t._t("list",[t.items?i("div",{staticClass:"ec-summary__list"},t._l(t.items,(function(e){return i("div",{staticClass:"ec-summary__item"},[t.img(e)?i("img",{attrs:{src:t.img(e).url,alt:t.img(e).alt}}):t._e(),i("div",[i("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(e.quantity)+" ")]),t._v(" "+t._s(t.formatMoney(t.price(e)))+" "),i("br"),e.slug?i("a",{attrs:{href:"/"+e.slug,target:"_blank"}},[i("small",[t._v(t._s(t.name(e)))])]):i("small",[t._v(t._s(t.name(e)))])])])})),0):t._e()]),t._t("amount",[i("div",{staticClass:"ec-summary__amount"},[i("div",{staticClass:"ec-summary__amount__row"},[i("span",[t._v(t._s(t.i19subtotal))]),i("div",[t._v(t._s(t.formatMoney(t.amount.subtotal)))])]),i("div",{staticClass:"ec-summary__amount__row"},[i("span",[t._v(" "+t._s(t.i19freight)+" "),t.shippingAddress?i("small",[t._v(" "+t._s(t.shippingAddress.street)+" "),t.shippingAddress.number?[t._v(" "+t._s(t.shippingAddress.number)+" ")]:t._e()],2):t._e()]),i("div",[t._v(t._s(t.formatMoney(t.amount.freight)))])]),t.amount.discount?i("div",{staticClass:"ec-summary__amount__row"},[i("span",[t._v(t._s(t.i19discount))]),i("div",[t._v(t._s(t.formatMoney(t.amount.discount)))])]):t._e(),i("div",{staticClass:"ec-summary__amount__row ec-summary__amount__row--total"},[i("span",[t._v(t._s(t.i19total))]),i("div",[t._v(t._s(t.formatMoney(t.amount.total)))])])])]),t._t("default"),t._t("buyer",[t.buyer?i("div",{staticClass:"ec-summary__buyer"},[i("h5",[t._v(t._s(t.i19buyer))]),i("p",[t._v(" "+t._s(t.buyerName)+" "),i("br"),i("small",[t._v(t._s(t.i19docNumber)+":")]),t._v(" "+t._s(t.buyer.doc_number)+" "),i("br"),i("small",[t._v(t._s(t.i19contactPhone)+":")]),t._v(" "+t._s(t.buyerPhone)+" ")]),i("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.$emit("click:account")}}},[i("i",{staticClass:"fas fa-pencil-alt mr-1"}),t._v(" "+t._s(t.i19myAccount)+" ")])]):t._e()])],2)},r=[],s=(i("99af"),i("b0c0"),i("83c4")),a=i("5b1c"),o={name:"EcSummary",props:{amount:{type:Object,required:!0},items:Array,buyer:Object,shippingAddress:Object},computed:{i19buyer:function(){return Object(s["i18n"])(a["i19buyer"])},i19contactPhone:function(){return Object(s["i18n"])(a["i19contactPhone"])},i19discount:function(){return Object(s["i18n"])(a["i19discount"])},i19docNumber:function(){return Object(s["i18n"])(a["i19docNumber"])},i19freight:function(){return Object(s["i18n"])(a["i19freight"])},i19myAccount:function(){return Object(s["i18n"])(a["i19myAccount"])},i19subtotal:function(){return Object(s["i18n"])(a["i19subtotal"])},i19summary:function(){return Object(s["i18n"])(a["i19summary"])},i19total:function(){return Object(s["i18n"])(a["i19total"])},buyerName:function(){if(!this.buyer)return"";var t=this.buyer.name;return"".concat(t.given_name," ").concat(t.middle_name||""," ").concat(t.family_name)},buyerPhone:function(){return Object(s["phone"])(this.buyer)}},methods:{name:s["name"],price:s["price"],formatMoney:s["formatMoney"],img:function(t){return Object(s["img"])(t,null,"small")}}},c=o,d=(i("fc7c"),i("2877")),l=Object(d["a"])(c,n,r,!1,null,null,null);e["a"]=l.exports},c740:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").findIndex,s=i("44d2"),a=i("ae40"),o="findIndex",c=!0,d=a(o);o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},e2a0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-order-info py-4"},[t.isNew?i("div",{staticClass:"ec-order-info__new"},[t._v(" "+t._s(t.i19orderConfirmationMsg)+"! ")]):t._e(),i("slide-y-up-transition",{attrs:{group:""}},[t.loaded?i("div",{key:"loaded"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-lg-7"},[i("p",{staticClass:"ec-order-info__number"},[t._v(" "+t._s(t.i19orderNumber)+": "),i("span",{staticClass:"h4"},[t._v(t._s(t.localOrder.number))])]),t.localOrder.status?i("div",{staticClass:"ec-order-info__status",class:"ec-order-info__status--"+t.localOrder.status},[t._v(" "+t._s(t.i19OrderStatus(t.localOrder.status))+" ")]):t._e(),t.transaction.status&&"pending"===t.transaction.status.current?[t.transaction.banking_billet?i("div",{staticClass:"ec-order-info__billet"},[i("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),t.transaction.banking_billet.code?[i("p",[t._v(" "+t._s(t.i19ticketCode)+": "),i("br"),i("samp",[t._v(t._s(t.transaction.banking_billet.code))])]),i("button",{staticClass:"btn btn-outline-primary mr-3",on:{click:function(){return t.toClipboard(t.transaction.banking_billet.code)}}},[i("i",{staticClass:"fas fa-copy mr-1"}),t._v(" "+t._s(t.i19copyCode)+" ")])]:t._e(),t.transaction.banking_billet.link?i("a",{staticClass:"btn btn-primary",attrs:{target:"_blank",href:t.transaction.banking_billet.link}},[i("i",{staticClass:"fas fa-print mr-1"}),t._v(" "+t._s(t.i19printBillet)+" ")]):t._e()],2):t.transaction.payment_link?i("div",{staticClass:"ec-order-info__redirect"},[i("p",{staticClass:"lead"},[t._v(t._s(t.i19doPaymentMsg))]),i("a",{staticClass:"btn btn-lg btn-primary",attrs:{target:"_blank",href:t.transaction.payment_link}},[i("i",{staticClass:"fas fa-arrow-right"}),t._v(" "+t._s(t.i19redirectToPayment)+" ")])]):t._e()]:t._e(),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-6"},[t._t("payment",[i("div",{staticClass:"ec-order-info__payment"},[i("div",{staticClass:"ec-order-info__financial-status",class:"ec-order-info__financial-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FinancialStatus(t.financialStatus))+" ")]),t._l(t.localOrder.transactions,(function(e){return i("div",[i("p",{staticClass:"ec-order-info__payment-value"},[t._v(" "+t._s(e.payment_method.name||t.localOrder.payment_method_label)+": "),e.installments&&e.installments.value?i("strong",[t._v(" "+t._s(e.installments.number)+"x "+t._s(t.i19of.toLowerCase())+" "+t._s(t.formatMoney(e.installments.value))+" ")]):i("strong",[t._v(" "+t._s(t.formatMoney(e.amount||t.localOrder.amount.total))+" ")])]),e.credit_card?i("p",{staticClass:"ec-order-info__credit-card"},[t._v(" "+t._s(e.credit_card.company)+" "),e.credit_card.last_digits?i("span",[e.credit_card.company?t._e():i("span",[t._v(" "+t._s(t.i19cardNumber)+" ")]),t._v(" **** "+t._s(e.credit_card.last_digits)+" ")]):t._e()]):t._e(),e.intermediator?[e.intermediator.transaction_code?i("div",{staticClass:"ec-order-info__transaction-code"},[i("small",[t._v(t._s(t.i19transactionCode))]),i("br"),t._v(" "+t._s(e.intermediator.transaction_code)+" ")]):t._e(),e.intermediator.transaction_reference?i("div",{staticClass:"ec-order-info__transaction-reference"},[i("small",[t._v(t._s(t.i19referenceCode))]),i("br"),t._v(" "+t._s(e.intermediator.transaction_reference)+" ")]):t._e()]:t._e()],2)}))],2)],null,{order:t.localOrder,transaction:t.transaction})],2),i("div",{staticClass:"col-12 col-md-6"},[t._t("shipping",[i("div",{staticClass:"ec-order-info__shipping"},[t.fulfillmentStatus?i("div",{staticClass:"ec-order-info__fulfillment-status",class:"ec-order-info__fulfillment-status--"+t.financialStatus},[t._v(" "+t._s(t.i19FulfillmentStatus(t.fulfillmentStatus))+" ")]):t._e(),t.localOrder.shipping_lines?t._l(t.localOrder.shipping_lines,(function(e){return i("ec-shipping-line",{key:e._id,attrs:{"shipping-line":e,financialStatus:t.financialStatus}})})):t._e()],2)],null,{order:t.localOrder,shippingAddress:t.shippingAddress})],2)])],2),t.localOrder.amount?i("div",{staticClass:"col-12 col-lg-5"},[i("div",{staticClass:"ec-order-info__summary card"},[i("div",{staticClass:"card-body"},[i("ec-summary",{attrs:{amount:t.localOrder.amount,items:t.localOrder.items,buyer:t.localOrder.buyer&&t.localOrder.buyer[0],shippingAddress:t.shippingAddress}})],1)])]):t._e()])]):i("div",{key:"loading"},[i("div",{staticClass:"spinner-border",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])])])]),t.isNew&&t.accountOrdersUrl?i("a",{staticClass:"ec-order-info__orders-link btn btn-sm btn-light",attrs:{href:t.accountOrdersUrl}},[t._v(" "+t._s(t.i19myOrders)+" ")]):t._e()],1)},r=[],s=(i("a4d3"),i("99af"),i("4de4"),i("c740"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("d3b7"),i("159b"),i("ade3")),a=i("83c4"),o=i("f27e"),c=i("2e80"),d=i.n(c),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ec-shipping-line"},[t.isDeliveryPending?i("div",[t.shippingLine.status?i("div",{staticClass:"ec-shipping-line__info"},[t.shippingLine.posting_deadline?i("div",[t._v(" "+t._s(t.i19postingDeadline)+": "+t._s(t.shippingLine.posting_deadline.days)+" "),t.shippingLine.posting_deadline.working_days?[t._v(" "+t._s(t.i19workingDays)+" ")]:[t._v(" "+t._s(t.i19days)+" ")],"paid"!==t.financialStatus&&t.shippingLine.posting_deadline.after_approval?i("span",[t._v(" "+t._s(t.i19afterApproval)+" ")]):t._e()],2):t._e(),t.shippingLine.delivery_time?i("div",[t._v(" "+t._s(t.i19postingDeadline)+": "+t._s(t.shippingLine.delivery_time.days)+" "),t.shippingLine.delivery_time.working_days?[t._v(" "+t._s(t.i19workingDays)+" ")]:[t._v(" "+t._s(t.i19days)+" ")]],2):t._e()]):i("div",{staticClass:"ec-shipping-line__deadline"},[t._v(" "+t._s(t.i19willReceiveMsg)+" "+t._s(t.shippingTime)+" "+t._s(t.isShippingTimeWorkingDays?t.i19workingDays:t.i19days)+" "),t.shippingLine.posting_deadline&&t.shippingLine.posting_deadline.after_approval?i("span",[t._v(" "+t._s(t.i19afterApproval)+" ")]):t._e()]),i("div",{staticClass:"ec-shipping-line__method"},[t._v(" "+t._s(t.i19shippingMethod)+": "+t._s(t.shippingLine.app.label||t.shippingLine.shipping_method_label)+" "),t.shippingLine.tracking_codes?i("div",{staticClass:"ec-shipping-line__tracking"},[t._v(" "+t._s(t.i19trackingCodes)+": "),t._l(t.shippingLine.tracking_codes,(function(e){return i("div",[e.link?i("a",{attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.code)+" ")]):i("strong",[t._v(" "+t._s(e.code)+" ")])])}))],2):t._e()]),i("div",{staticClass:"ec-shipping-line__address"},[i("h5",[i("i",{staticClass:"fas fa-map-marker-alt mr-1"}),t._v(" "+t._s(t.i19shippingAddress)+" ")]),t.shippingLine.to.name?i("p",[t._v(" "+t._s(t.i19recipient)+": "+t._s(t.shippingLine.to.name)+" ")]):t._e(),t._v(" "+t._s(t.shippingLine.to.street+", "+(t.shippingLine.to.number||t.i19noNumber)+(t.shippingLine.to.complement?" - "+t.shippingLine.to.complement:"")+(t.shippingLine.to.borough?", "+t.shippingLine.to.borough:""))+" "),t.shippingLine.to.city?i("div",[t._v(" "+t._s(t.shippingLine.to.city)+" / "+t._s(t.shippingLine.to.province_code||t.shippingLine.to.province)+" ")]):t._e(),i("div",[t._v(t._s(t.shippingLine.to.zip))])])]):t._e()])},u=[],_=i("5b1c"),p={name:"EcShippingLine",props:{shippingLine:{type:Object,required:!0},financialStatus:String},computed:{i19afterApproval:function(){return Object(a["i18n"])(_["i19afterApproval"])},i19days:function(){return Object(a["i18n"])(_["i19days"]).toLowerCase()},i19noNumber:function(){return Object(a["i18n"])(_["i19noNumber"])},i19postingDeadline:function(){return Object(a["i18n"])(_["i19postingDeadline"])},i19recipient:function(){return Object(a["i18n"])(_["i19recipient"])},i19shippingAddress:function(){return Object(a["i18n"])(_["i19shippingAddress"])},i19shippingMethod:function(){return Object(a["i18n"])(_["i19shippingMethod"])},i19trackingCodes:function(){return Object(a["i18n"])(_["i19trackingCodes"])},i19willReceiveMsg:function(){return Object(a["i18n"])(_["i19willReceiveMsg"])},i19workingDays:function(){return Object(a["i18n"])(_["i19workingDays"]).toLowerCase()},isDeliveryPending:function(){if(this.shippingLine.status)switch(this.shippingLine.status.current){case"delivered":case"returned_for_exchange":case"received_for_exchange":case"returned":return!1}return!0},shippingTime:function(){var t=this.shippingLine,e=t.posting_deadline?t.posting_deadline.days:0;return t.delivery_time&&(e+=t.delivery_time.days),e},isShippingTimeWorkingDays:function(){var t=this.shippingLine;return t.delivery_time&&t.delivery_time.working_days||t.posting_deadline&&t.posting_deadline.working_days}}},m=p,f=(i("3ef4"),i("2877")),b=Object(f["a"])(m,l,u,!1,null,null,null),g=b.exports,v=i("8225"),h=i("4e48");function y(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function O(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?y(Object(i),!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var C={name:"EcOrderInfo",components:{EcShippingLine:g,EcSummary:v["a"],SlideYUpTransition:h["SlideYUpTransition"]},props:{ecomPassport:{type:Object,default:function(){return d.a}},order:{type:Object,required:!0},isNew:{type:Boolean},skipDataLoad:{type:Boolean},skipFirstDataLoad:{type:Boolean},skipCustomerUpdate:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"}},data:function(){return{loaded:this.skipDataLoad||this.skipFirstDataLoad,updateInterval:null,orderBody:this.order}},computed:{i19codeCopied:function(){return Object(a["i18n"])(_["i19codeCopied"])},i19copyCode:function(){return Object(a["i18n"])(_["i19copyCode"])},i19copyErrorMsg:function(){return Object(a["i18n"])(_["i19copyErrorMsg"])},i19doPaymentMsg:function(){return Object(a["i18n"])(_["i19doPaymentMsg"])},i19myOrders:function(){return Object(a["i18n"])(_["i19myOrders"])},i19of:function(){return Object(a["i18n"])(_["i19of"])},i19orderConfirmationMsg:function(){return Object(a["i18n"])(_["i19orderConfirmationMsg"])},i19orderNumber:function(){return Object(a["i18n"])(_["i19orderNumber"])},i19printBillet:function(){return Object(a["i18n"])(_["i19printBillet"])},i19redirectToPayment:function(){return Object(a["i18n"])(_["i19redirectToPayment"])},i19referenceCode:function(){return Object(a["i18n"])(_["i19referenceCode"])},i19transactionCode:function(){return Object(a["i18n"])(_["i19transactionCode"])},i19ticketCode:function(){return Object(a["i18n"])(_["i19ticketCode"])},localOrder:{get:function(){return this.orderBody},set:function(t){this.orderBody=t,this.$emit("update:order",t),this.saveCustomerOrder()}},transaction:function(){var t=this.localOrder.transactions;return t&&t.length?t[0]:{}},shippingAddress:function(){var t=this.localOrder;if(t.shipping_lines&&t.shipping_lines.length)return t.shipping_lines[0].to},financialStatus:function(){var t=this.localOrder,e=this.transaction,i=t.financial_status&&t.financial_status.current;return i||(e&&e.status?e.status.current:"pending")},fulfillmentStatus:function(){var t=this.localOrder,e=t.fulfillment_status&&t.fulfillment_status.current;if(e)return e;var i=t.shipping_lines&&t.shipping_lines[0];return i&&i.status?i.status.current:null}},methods:{formatMoney:a["formatMoney"],i19FinancialStatus:function(t){return Object(a["i18n"])(_["i19FinancialStatus"])[t]},i19FulfillmentStatus:function(t){return Object(a["i18n"])(_["i19FulfillmentStatus"])[t]},i19OrderStatus:function(t){return Object(a["i18n"])(_["i19OrderStatus"])[t]},toClipboard:function(t){var e=this;this.$copyText(t).then((function(){e.$bvToast.toast(t,{title:e.i18n("CodeCopied"),variant:"success",solid:!0,autoHideDelay:1500})}),(function(i){console.error(i),e.$bvToast.toast("Oops",{title:"".concat(e.i18n("copyErrorMsg"),": ").concat(t),variant:"warning",solid:!0})}))},saveCustomerOrder:function(){var t=this.localOrder,e=this.ecomPassport;!this.skipCustomerUpdate&&t.number&&e&&e.checkAuthorization()&&e.requestApi("/me.json").then((function(i){var n=i.data,r=n.orders||[],s={};["_id","created_at","number","currency_id","currency_symbol","amount","payment_method_label","shipping_method_label"].forEach((function(e){t[e]&&(s[e]=t[e])}));var a=r.findIndex((function(e){var i=e._id,n=e.number;return i===t._id||n===t.number}));a>-1?Object.assign(r[a],s):r.push(s),e.requestApi("/me.json","patch",{orders:r})}))}},created:function(){var t=this;if(this.order._id&&(this.isNew&&this.saveCustomerOrder(),!this.skipDataLoad)){var e=function(){return Object(o["store"])({url:"/orders/".concat(t.order._id,".json")}).then((function(e){var i=e.data;t.localOrder=O({},t.localOrder,{},i)})).catch((function(t){console.error(t)}))};this.updateInterval=setInterval(e,9e3),this.skipFirstDataLoad||setTimeout((function(){e().finally((function(){t.loaded=!0}))}),this.isNew?1e3:3e3)}},beforeDestroy:function(){clearInterval(this.updateInterval)}},j=C,w=(i("350e"),Object(f["a"])(j,n,r,!1,null,null,null));e["a"]=w.exports},eee8:function(t,e,i){var n=i("f433");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("499e").default;r("91dc8b24",n,!0,{sourceMap:!1,shadowMode:!1})},f433:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".ec-order-info__new{text-align:center;color:var(--success);font-size:1.4rem;margin-bottom:2rem}.ec-order-info__orders-link{margin-top:1.5rem}.ec-order-info__number{color:var(--gray)}.ec-order-info__number span{display:block;color:var(--secondary)}.ec-order-info__financial-status,.ec-order-info__status{font-weight:700;font-size:1.15rem;margin:1rem 0}.ec-order-info__status--open{color:var(--info)}.ec-order-info__status--cancelled{color:var(--danger)}.ec-order-info__status--closed{color:var(--success)}.ec-order-info__financial-status--pending{color:var(--warning)}.ec-order-info__financial-status--under_analysis{color:var(--info)}.ec-order-info__financial-status--in_dispute,.ec-order-info__financial-status--unauthorized,.ec-order-info__financial-status--voided{color:var(--danger)}.ec-order-info__financial-status--paid{color:var(--success)}.ec-order-info__summary{background:var(--light)}",""]),t.exports=e},fc7c:function(t,e,i){"use strict";var n=i("6205"),r=i.n(n);r.a}}]);
//# sourceMappingURL=confirmation.js.map