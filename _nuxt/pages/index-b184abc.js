(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{279:function(e,t,r){"use strict";t.a={methods:{backgroundPosition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 2===e.length?{"background-position":100*e[0]+"% "+100*e[1]+"%"}:null},objectPosition:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return 2===e.length?{"object-position":100*e[0]+"% "+100*e[1]+"%"}:null}}}},281:function(e,t,r){var content=r(436);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("50fb0c4c",content,!0,{sourceMap:!1})},435:function(e,t,r){"use strict";var n=r(281);r.n(n).a},436:function(e,t,r){(t=r(17)(!1)).push([e.i,".large-hero[data-v-fc69027c]{height:400px;overflow:hidden}picture[data-v-fc69027c]{display:flex;width:100%;height:400px}",""]),e.exports=t},439:function(e,t,r){"use strict";r.r(t);r(9);var n=r(2),o=(r(46),r(23),r(21),r(11),r(39),r(16)),c=(r(66),r(261)),l=r(269),d=r(279);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var m={props:{data:{type:Array}},components:{"v-base-button":l.a,"v-optimized-image":c.a},mixins:[d.a],methods:{getSrcset:function(e){var t=this.getImageUrlByWidth(e)||null,r=this.getImageUrlByWidth(2*e)||null;return r?t+" 1x, "+r+" 2x":t},getImageUrlByWidth:function(e){for(var t=this.data[0].backgroundImage[0].largeHeroImageVariants.srcUrls,i=0;i<t.length;++i){var r=t[i];if(r[0]==e)return r[1]}return null},nl2br:function(e){return(e+"").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2")}},computed:{imageStyles:function(){return this.data[0].backgroundImage.length>0?function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"object-fit":"cover"},this.objectPosition(this.data[0].backgroundImage[0].largeHeroImageVariants.focalPoint)):{"background-color":"#aaa"}},overlayStyles:function(){var e=.25;return this.data[0]&&this.data[0].darkOverlayPercentage&&""!==this.data[0].darkOverlayPercentage&&(e=this.data[0].darkOverlayPercentage/100),{"background-color":"rgba(0, 0, 0, ".concat(e,")")}}}},v=(r(435),r(3)),f=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.data[0]?r("div",{staticClass:"large-hero border-t-2 border-white relative"},[e.data[0].backgroundImage.length>0?r("picture",{staticClass:"z-10"},[r("source",{attrs:{"data-srcset":e.data[0].backgroundImage[0].largeHeroImageVariants.srcset,sizes:"100vw",type:"image/jpeg"}}),e._v(" "),r("source",{attrs:{"data-srcset":e.data[0].backgroundImage[0].largeHeroImageVariants.srcsetWebp,sizes:"100vw",type:"image/webp"}}),e._v(" "),r("img",{staticClass:"w-full lazyload",style:e.imageStyles,attrs:{src:e.data[0].backgroundImage[0].largeHeroImageVariants.placeholderImage,width:e.data[0].backgroundImage[0].width,height:e.data[0].backgroundImage[0].height,alt:""}})]):e._e(),e._v(" "),e.data[0].backgroundImage[0].photoCredit?r("span",{staticClass:"photo-credit z-40"},[e._v("\n    "+e._s(e.data[0].backgroundImage[0].photoCredit)+"\n  ")]):e._e(),e._v(" "),r("div",{staticClass:"absolute top-0 left-0 z-30 w-full h-full flex items-center"},[r("div",{staticClass:"px-5 py-6 text-white text-center w-full"},[r("h1",{staticClass:"block text-4xl xs:text-5xl lg:text-6xl font-semibold uppercase leading-extra-tight",domProps:{innerHTML:e._s(e.nl2br(e.data[0].heading))}}),e._v(" "),r("div",{class:["text","font-semibold text-lg lg:text-3hxl leading-relaxed",e.data[0].heading?"mt-4":""],domProps:{innerHTML:e._s(e.data[0].text)}}),e._v(" "),e.data[0].buttons.length>0?r("div",{staticClass:"mt-10"},e._l(e.data[0].buttons,(function(e){return r("v-base-button",{key:"button-"+e.id,attrs:{"class-names":"mx-3",color:"yellow",data:e.button}})})),1):e._e()])]),e._v(" "),r("div",{staticClass:"dark-overlay absolute top-0 z-20 w-screen h-full",style:e.overlayStyles})]):e._e()}),[],!1,null,"fc69027c",null).exports,y=r(265),x=r(260),_={data:function(){return{entry:{}}},layout:"homepage",components:{"v-large-hero":f,"v-page-blocks":y.a,"v-seomatic":x.a},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$craft({query:'\n    query getEntry($id: [QueryArgument]) {\n        entry(section: ["homepage"], id: $id) {\n            id\n            title\n            slug\n            ... on homepage_homepage_Entry {\n                id\n                pageHeader {\n                    ... on pageHeader_largeHero_BlockType {\n                        id\n                        heading\n                        text\n                        typeHandle\n                        buttons {\n                            ... on buttons_BlockType {\n                                id\n                                button {\n                                    target\n                                    url\n                                    text\n                                }\n                            }\n                        }\n                        backgroundImage {\n                            ... on backgroundImages_Asset {\n                                id\n                                photoCredit\n                                width\n                                height\n                                largeHeroImageVariants {\n                                    src\n                                    srcset\n                                    srcWebp\n                                    srcsetWebp\n                                    maxSrcsetWidth\n                                    placeholderImage\n                                    placeholderBox\n                                    placeholderSilhouette\n                                    focalPoint\n                                    srcUrls\n                                }\n                            }\n                        }\n                        darkOverlayPercentage\n                    }\n                }\n            }\n        }\n    }\n',variables:{id:2}});case 2:r=t.sent,e.entry=r.data.entry;case 4:case"end":return t.stop()}}),t)})))()}},k={components:{"v-homepage":Object(v.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.entry?r("div",[e.entry.pageHeader&&"largeHero"===e.entry.pageHeader[0].typeHandle?r("v-large-hero",{attrs:{data:e.entry.pageHeader}}):e._e(),e._v(" "),r("v-page-blocks",{attrs:{entryId:e.entry.id,objectType:"homepage_homepage_Entry"}}),e._v(" "),r("v-seomatic",{attrs:{entryId:e.entry.id}})],1):e._e()}),[],!1,null,null,null).exports}},w=Object(v.a)(k,(function(){var e=this.$createElement;return(this._self._c||e)("v-homepage")}),[],!1,null,null,null);t.default=w.exports}}]);