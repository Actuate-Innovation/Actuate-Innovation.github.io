(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{109:function(t,e,n){"use strict";var r=n(231);e.a=function(t){var e=t.app.$axios.defaults;e.adapter=Object(r.a)(e.adapter),e.headers.common.Accept="application/json",e.headers.common["X-Requested-With"]="XMLHttpRequest"}},111:function(t,e,n){"use strict";e.a=function(t,e){var n=t.$config,r=t.$http,o=t.query,l=r.create({prefixUrl:n.craftApiUrl,headers:{"content-type":"application/graphql"}});""!==n.craftAuthToken&&l.setToken(n.craftAuthToken,"Bearer"),e("craft",l.$post.bind(l,o.token?"?token=".concat(o.token):""))}},112:function(t,e,n){"use strict";n(14);var r=n(2);function o(){return(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.$config,r=e.enablePreview,!e.query.CraftPreviewSlug||!n.livePreview){t.next=4;break}return t.next=4,r();case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.a=function(t){return o.apply(this,arguments)}},134:function(t,e,n){},135:function(t,e,n){t.exports=n.p+"img/logo.bd76cee.svg"},154:function(t,e,n){"use strict";var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{staticClass:"logo mx-auto",attrs:{src:n(135),alt:"Actuate"}})])}],o=(n(14),n(2));n(86);function l(t){return new URL(t).pathname.split("/")[1]}var c={props:{hoverStyle:{type:String},items:{type:Array},showActiveItem:{type:Boolean}},data:function(){return{currentUrl:null}},methods:{isActive:function(t){return!(!this.showActiveItem||!this.currentUrl)&&l(t.linkField.url)===l(this.currentUrl)}},mounted:function(){this.currentUrl=window.location}},v=(n(188),n(3)),h=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center -mb-3"},[n("nav",{staticClass:"tracking-1/2"},[n("ul",t._l(t.items,(function(e){return n("li",{staticClass:"pb-5 sm:pb-3"},[n("a",{class:["transition duration-150 ease","yellow"===t.hoverStyle?"transition-colors hover:text-yellow":"","opacity"===t.hoverStyle?"transition-opacity hover:opacity-50":"",t.showActiveItem?"py-1":"",t.isActive(e)?"active":""],attrs:{href:e.linkField.url,target:e.target?e.target:"_self"}},[t._v("\n                    "+t._s(e.linkField.text)+"\n                ")])])})),0)])])}),[],!1,null,"e2276222",null).exports,m=(n(115),{props:{iconName:{type:String,default:"box"},viewbox:{type:String,default:"0 0 18 18"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"},classNames:{type:String}}}),f=(n(191),Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.classNames,attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:t.viewbox,"aria-labelledby":t.iconName,role:"presentation"}},[n("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),t._v(" "),n("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])}),[],!1,null,"566010e3",null).exports),d=Object(v.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M5.87329 12.5299H10.3274V25.9302H5.87329V12.5299Z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M8.0709 10.701H8.10029C9.65415 10.701 10.6204 9.67163 10.6204 8.38503C10.591 7.07008 9.65415 6.06982 8.12941 6.06982C6.60493 6.06982 5.60828 7.07008 5.60828 8.38503C5.60828 9.67163 6.57683 10.701 8.0709 10.701Z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M17.2469 25.9302V18.4461C17.2469 18.0446 17.2776 17.6467 17.3949 17.3603C17.7173 16.5588 18.449 15.7312 19.6804 15.7312C21.2928 15.7312 21.9366 16.9603 21.9366 18.7608V25.9299H26.3918V18.2456C26.3918 14.1299 24.1941 12.2152 21.2624 12.2152C18.8957 12.2152 17.839 13.5178 17.2469 14.4286V14.4724H17.2178C17.2256 14.458 17.2382 14.4433 17.2469 14.4286V12.5299H12.791C12.8508 13.7869 12.791 25.9299 12.791 25.9299H17.2469V25.9302Z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M0 0V32H32V0H0ZM30.0206 30.0206H1.97938V1.97938H30.0206V30.0206Z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,w=Object(v.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{fill:"currentColor",d:"M26.6,7.6l-1.7,1.7c-0.1,0.1-0.2,0.3-0.2,0.5v12.1c0,0.2,0,0.4,0.2,0.5l1.7,1.6v0.4h-8.4V24l1.7-1.7C20,22.1,20,22,20,21.8\n        V12l-4.8,12.3h-0.6L8.9,12v8.2c-0.1,0.4,0.1,0.7,0.3,0.9l2.3,2.7v0.4H5.1v-0.4l2.3-2.7c0.2-0.2,0.3-0.6,0.3-0.9v-9.5\n        c0-0.3-0.1-0.5-0.3-0.7l-2-2.4V7.2h6.2l4.8,10.6l4.2-10.6h5.9L26.6,7.6L26.6,7.6z"}}),this._v(" "),e("path",{attrs:{fill:"currentColor",d:"M0,0v32h32V0H0z M30,30H2V2h28V30z"}})])}),[],!1,null,null,null).exports,C=Object(v.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M5.60815 22.5291C7.49501 23.7392 9.73625 24.4451 12.1445 24.4451C19.9875 24.4451 24.2762 17.9479 24.2762 12.3129C24.2762 12.1284 24.2721 11.9443 24.2641 11.7613C25.0973 11.1603 25.82 10.4093 26.3917 9.55413C25.627 9.8933 24.8053 10.1227 23.9427 10.2258C24.8231 9.69794 25.4991 8.86238 25.8174 7.86676C24.9935 8.35516 24.0811 8.71031 23.11 8.90129C22.3321 8.07268 21.2239 7.5549 19.9973 7.5549C17.6427 7.5549 15.7334 9.46418 15.7334 11.8188C15.7334 12.1528 15.7713 12.4784 15.844 12.7905C12.3004 12.6126 9.15841 10.9152 7.05532 8.33531C6.68831 8.96521 6.478 9.69743 6.478 10.4791C6.478 11.9583 7.23058 13.2634 8.37491 14.0281C7.67568 14.0059 7.01821 13.8139 6.44346 13.4946C6.44321 13.5126 6.44321 13.5304 6.44321 13.5485C6.44321 15.6142 7.91305 17.3376 9.86357 17.7294C9.50583 17.8265 9.12903 17.8791 8.74011 17.8791C8.46537 17.8791 8.19836 17.8523 7.93779 17.8023C8.48032 19.4964 10.0553 20.7291 11.921 20.7634C10.4618 21.9072 8.6231 22.5889 6.62542 22.5889C6.28109 22.5889 5.94166 22.5688 5.60815 22.5291Z",fill:"currentColor"}}),this._v(" "),e("path",{attrs:{d:"M0 0V32H32V0H0ZM30.0206 30.0206H1.97938V1.97938H30.0206V30.0206Z",fill:"currentColor"}})])}),[],!1,null,null,null).exports,x={data:function(){return{globalSet:{}}},props:{wrapperClasses:{type:String},iconClasses:{type:String},items:{type:Array}},components:{"v-base-icon":f,"v-icon-medium":w,"v-icon-twitter":C,"v-icon-linkedin":d},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:'{\n    globalSet(handle: "globalSiteFooter") {\n        ... on globalSiteFooter_GlobalSet {\n            socialIcons {\n                ... on socialIcons_icon_BlockType {\n                    platformType\n                    platformUrl\n                }\n            }\n        }\n    }\n}'});case 2:n=e.sent,t.globalSet=n.data.globalSet;case 4:case"end":return e.stop()}}),e)})))()}},y=Object(v.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.globalSet.socialIcons.length>0?n("div",{class:t.wrapperClasses},[n("nav",{staticClass:"inline-block"},[n("ul",t._l(t.globalSet.socialIcons,(function(e){return n("li",{staticClass:"inline-block mx-3"},[n("a",{class:t.iconClasses,attrs:{href:e.platformUrl}},[n("v-base-icon",{attrs:{"icon-name":e.platformType,width:"32",height:"32",viewbox:"0 0 32 32"}},[n("v-icon-"+e.platformType,{tag:"component"})],1)],1)])})),0)])]):t._e()}),[],!1,null,null,null).exports,_={data:function(){return{globalSet:{},active:!1}},components:{"v-navigation":h,"v-social-icons":y},methods:{close:function(){this.active=!1,this.$nuxt.$emit("mobileNavStatusChanged",!1)}},mounted:function(){var t=this;this.$nuxt.$on("clickMobileNavButton",(function(){t.active=!t.active,t.$nuxt.$emit("mobileNavStatusChanged",t.active)})),this.$nuxt.$on("escKeyPressed",(function(){t.active&&t.close()}))},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:'{\n    globalSet(handle:"globalSiteHeader") {\n        ... on globalSiteHeader_GlobalSet {\n            mainNavigation {\n                ... on mainNavigation_item_BlockType {\n                    linkField {\n                        target\n                        text\n                        url\n                    }\n                }\n            }\n        }\n    }\n}'});case 2:n=e.sent,t.globalSet=n.data.globalSet;case 4:case"end":return e.stop()}}),e)})))()}},S=(n(192),Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sm:hidden"},[n("div",{class:["mobile-nav left-0 top-0 bottom-0",t.active?"translate-x-0":"-translate-x-full","transform transition transition-all duration-300 ease-in-out delay-200","w-4/5 sm:w-2/3 min-w-sm md:max-w-sm h-full overflow-y-auto","bg-grey-dark text-white shadow-xl p-5"]},[t._m(0),t._v(" "),n("div",{staticClass:"mt-10"},[n("v-navigation",{attrs:{items:t.globalSet.mainNavigation,showActiveItem:!0,hoverStyle:"yellow"}})],1),t._v(" "),n("v-social-icons",{attrs:{wrapperClasses:"social-icons text-center mt-12",iconClasses:"text-white"}})],1),t._v(" "),n("div",{class:["overlay","left-0 right-0 top-0 bottom-0","w-full",t.active?"max-h-full opacity-75":"max-h-0 opacity-0"],on:{click:t.close}})])}),r,!1,null,"19456752",null).exports),k=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{staticClass:"logo sm:mx-auto sm:mb-6",attrs:{src:n(135),alt:"Actuate"}})])}],N={data:function(){return{active:!1}},methods:{click:function(){this.$nuxt.$emit("clickMobileNavButton")}},mounted:function(){var t=this;this.$nuxt.$on("mobileNavStatusChanged",(function(e){t.active=e}))}},M=(n(193),Object(v.a)(N,(function(){var t=this.$createElement;return(this._self._c||t)("button",{class:["hamburger inline-block absolute right-0 sm:hidden",this.active?"is-active":""],attrs:{type:"button"},on:{click:this.click}},[this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"hamburger-box"},[e("span",{staticClass:"hamburger-inner"})])}],!1,null,"98237904",null).exports),j={data:function(){return{globalSet:{}}},components:{"v-hamburger-button":M,"v-navigation":h},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:'{\n    globalSet(handle:"globalSiteHeader") {\n        ... on globalSiteHeader_GlobalSet {\n            mainNavigation {\n                ... on mainNavigation_item_BlockType {\n                    linkField {\n                        target\n                        text\n                        url\n                    }\n                }\n            }\n        }\n    }\n}'});case 2:n=e.sent,t.globalSet=n.data.globalSet;case 4:case"end":return e.stop()}}),e)})))()}},$=(n(194),Object(v.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"site-header bg-blue text-white relative"},[e("div",{staticClass:"container mx-auto py-4 sm:py-6"},[this._m(0),this._v(" "),e("div",{staticClass:"hidden sm:block"},[e("v-navigation",{attrs:{items:this.globalSet.mainNavigation,showActiveItem:!0,hoverStyle:"yellow"}})],1),this._v(" "),e("v-hamburger-button")],1)])}),k,!1,null,"40ce9310",null).exports),I=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"/"}},[e("img",{staticClass:"logo-mark inline-block mx-auto mb-12",attrs:{src:n(195),alt:""}})])}],A={data:function(){return{globalSet:{}}},components:{"v-navigation":h,"v-social-icons":y},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:'{\n    globalSet(handle: "globalSiteFooter") {\n        ... on globalSiteFooter_GlobalSet {\n            footerNavigation {\n                ... on footerNavigation_item_BlockType {\n                    linkField {\n                        text\n                        target\n                        url\n                    }\n                }\n            }\n            copyrightText\n        }\n    }\n}'});case 2:n=e.sent,t.globalSet=n.data.globalSet;case 4:case"end":return e.stop()}}),e)})))()}};n(196);function E(t){9===t.keyCode&&(document.documentElement.classList.add("user-is-tabbing"),window.removeEventListener("keydown",E),window.addEventListener("mousedown",H))}function H(){document.documentElement.classList.remove("user-is-tabbing"),window.removeEventListener("mousedown",H),window.addEventListener("keydown",E)}var O={components:{"v-mobile-navigation":S,"v-site-header":$,"v-site-footer":Object(v.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"site-footer bg-grey-light"},[n("div",{staticClass:"container mx-auto py-12 text-center"},[t._m(0),t._v(" "),n("v-navigation",{attrs:{items:t.globalSet.footerNavigation,showActiveItem:!1,hoverStyle:"opacity"}}),t._v(" "),n("v-social-icons",{attrs:{wrapperClasses:"social-icons text-center mt-12",iconClasses:"text-blue hover:text-blue-hover transition transition-colors duration-300 ease"}}),t._v(" "),n("div",{staticClass:"text-xs text-grey mt-15"},[t._v("\n            Copyright © 2020\n            "),n("span",{domProps:{innerHTML:t._s(t.globalSet.copyrightText)}})])],1)])}),I,!1,null,null,null).exports},mounted:function(){var t=this;document.addEventListener("keydown",(function(e){27==e.keyCode&&t.$nuxt.$emit("escKeyPressed")})),window.addEventListener("keydown",E)}},T=(n(197),Object(v.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-mobile-navigation"),this._v(" "),e("v-site-header"),this._v(" "),e("nuxt"),this._v(" "),e("v-site-footer")],1)}),[],!1,null,null,null));e.a=T.exports},156:function(t,e,n){t.exports=n(157)},187:function(t,e,n){},188:function(t,e,n){"use strict";var r=n(74);n.n(r).a},191:function(t,e,n){"use strict";var r=n(75);n.n(r).a},192:function(t,e,n){"use strict";var r=n(76);n.n(r).a},193:function(t,e,n){"use strict";var r=n(77);n.n(r).a},194:function(t,e,n){"use strict";var r=n(78);n.n(r).a},195:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyIiBoZWlnaHQ9IjEwMiIgdmlld0JveD0iMCAwIDEwMiAxMDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03Ny42NjcxIDcxLjkwMTZINTQuNjY3MUw1OC42NjcxIDYyLjUzNzdINzMuNjY3MUw2MC4zMzM4IDMzLjQ0MjZMMzYuMDAwNCA4Ny4yODUySDI1LjY2NzFMMzMuMDAwNCAxMDJMODEuMDAwNCA3OS4yNTlMNzcuNjY3MSA3MS45MDE2WiIgZmlsbD0iIzE2NTg5NSIvPgo8cGF0aCBkPSJNNTkuNjY2NyAxMi4wMzkzSDYxTDkwLjY2NjcgNzQuNTc3MUwxMDIgNjkuMjI2Mkw2OSAwTDAgMzMuMTA4MkwyNC42NjY3IDg1LjI3ODdMNTkuNjY2NyAxMi4wMzkzWiIgZmlsbD0iIzE2NTg5NSIvPgo8L3N2Zz4K"},196:function(t,e,n){"use strict";var r=n(79);n.n(r).a},197:function(t,e,n){"use strict";var r=n(80);n.n(r).a},33:function(t,e,n){"use strict";var r={props:{error:{type:Object}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"page-header bg-grey-light"},[n("div",{staticClass:"container text-center py-6"},[n("h1",{staticClass:"text-5xl uppercase font-bold"},[t._v("\n                "+t._s(t.error&&404===t.error.statusCode?"Page not found":"An error occurred")+"\n            ")])])]),t._v(" "),n("section",{staticClass:"block bg-white section--standard-padding"},[n("div",{staticClass:"container text-center text-lg"},[n("div",{staticClass:"mb-4"},[t._v("\n                We're sorry,\n                "),t.error&&404===t.error.statusCode?n("span",[t._v("\n                    but this page could not be found.\n                ")]):n("span",[t._v("\n                    but an error occurred while requesting this page.\n                ")])]),t._v(" "),n("div",[n("nuxt-link",{staticClass:"underline hover:no-underline",attrs:{to:"/"}},[t._v("\n                    Return to the homepage\n                ")])],1)])])])}),[],!1,null,null,null);e.a=component.exports},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},77:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){}},[[156,12,2,13]]]);