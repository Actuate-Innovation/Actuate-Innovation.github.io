(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{249:function(t,e,n){"use strict";var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-header bg-grey-light sm:hidden"},[e("div",{staticClass:"container sm:text-center py-3"},[e("h1",{staticClass:"text-xl uppercase font-bold"},[this._t("default")],2)])])}),[],!1,null,null,null);e.a=component.exports},250:function(t,e,n){"use strict";n(13);var r=n(2),o=(n(24),n(23),n(14),n(36),{data:function(){return{entry:{}}},props:{entryId:String},computed:{metaTitle:function(){return this.entry?JSON.parse(this.entry.seomatic.metaTitleContainer).title.title:null},metaData:function(){if(!this.entry)return null;var t=JSON.parse(this.entry.seomatic.metaTagContainer),e=[];return Object.keys(t).forEach((function(n){var r=t[n];r.content&&e.push({hid:n,property:r.property||"",name:r.name||"",content:r.content})})),e},linkData:function(){if(!this.entry)return null;var t=JSON.parse(this.entry.seomatic.metaLinkContainer),e=[];return Object.keys(t).forEach((function(n){var r=t[n];r.href&&e.push({hid:n,href:r.href,rel:r.rel||"",type:r.type||""})})),e},jsonLdData:function(){return this.entry?this.entry.seomatic.metaJsonLdContainer:null}},head:function(){return this.entry?{__dangerouslyDisableSanitizers:["script"],title:this.metaTitle,meta:this.metaData,link:this.linkData,script:[{type:"application/ld+json",innerHTML:this.jsonLdData}]}:null},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:"\n    query getEntry($id: [QueryArgument]) {\n        entry(id: $id) {\n            seomatic(asArray: true) {\n                metaTitleContainer\n                metaTagContainer\n                metaLinkContainer\n                metaJsonLdContainer\n            }\n        }\n    }\n",variables:{id:t.entryId}});case 2:n=e.sent,t.entry=n.data.entry;case 4:case"end":return e.stop()}}),e)})))()}}),c=n(3),component=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},251:function(t,e,n){"use strict";var r={props:{altText:{type:String},photoCredit:{type:String},classes:{type:String},sizes:{type:String},variants:{type:Object}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.variants&&t.variants.src?n("picture",{staticClass:"inline-block relative"},[n("source",{attrs:{"data-srcset":t.variants.srcsetWebp,sizes:t.sizes,type:"image/webp"}}),t._v(" "),n("source",{attrs:{"data-srcset":t.variants.srcset,sizes:t.sizes,type:"image/jpeg"}}),t._v(" "),n("img",{class:["lazyload",t.classes],attrs:{src:t.variants.placeholderImage,alt:t.altText}}),t._v(" "),t.photoCredit?n("span",{staticClass:"photo-credit"},[t._v("\n            "+t._s(t.photoCredit)+"\n        ")]):t._e()]):t._e()])}),[],!1,null,null,null);e.a=component.exports},252:function(t,e,n){"use strict";var r={props:{size:{type:String},color:{type:String},centered:{type:Boolean},limitWidth:{type:Boolean}}},o=n(3),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["h1"===t.size?"text-2xl sm:text-3xl md:text-4xl":"","h2"===t.size?"text-3xl":"","h3"===t.size?"text-xl":"","text-"+t.color,"font-semibold mx-auto leading-tight",t.centered?"text-center ":"",t.limitWidth&&t.centered?"md:w-8/12":"",t.limitWidth&&!t.centered?"lg:w-10/12":""]},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},264:function(t,e,n){var content=n(417);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("ff9e4bea",content,!0,{sourceMap:!1})},265:function(t,e,n){var content=n(422);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("5b12c3aa",content,!0,{sourceMap:!1})},416:function(t,e,n){"use strict";var r=n(264);n.n(r).a},417:function(t,e,n){(e=n(19)(!1)).push([t.i,"button[data-v-a4c1f088]{display:inline-block;border-width:1px;--border-opacity:1;border-color:#eee;border-color:rgba(238,238,238,var(--border-opacity));--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));padding:.5rem .75rem;margin-left:.5rem;margin-right:.5rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-property:background-color,border-color,color,fill,stroke;transition-duration:.15s}button[data-v-a4c1f088]:hover{--bg-opacity:1;background-color:#eee;background-color:rgba(238,238,238,var(--bg-opacity))}button.active[data-v-a4c1f088]{--border-opacity:1;border-color:#165895;border-color:rgba(22,88,149,var(--border-opacity));--bg-opacity:1;background-color:#165895;background-color:rgba(22,88,149,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));font-weight:600}",""]),t.exports=e},419:function(t,e,n){var map={"./af":272,"./af.js":272,"./ar":273,"./ar-dz":274,"./ar-dz.js":274,"./ar-kw":275,"./ar-kw.js":275,"./ar-ly":276,"./ar-ly.js":276,"./ar-ma":277,"./ar-ma.js":277,"./ar-sa":278,"./ar-sa.js":278,"./ar-tn":279,"./ar-tn.js":279,"./ar.js":273,"./az":280,"./az.js":280,"./be":281,"./be.js":281,"./bg":282,"./bg.js":282,"./bm":283,"./bm.js":283,"./bn":284,"./bn.js":284,"./bo":285,"./bo.js":285,"./br":286,"./br.js":286,"./bs":287,"./bs.js":287,"./ca":288,"./ca.js":288,"./cs":289,"./cs.js":289,"./cv":290,"./cv.js":290,"./cy":291,"./cy.js":291,"./da":292,"./da.js":292,"./de":293,"./de-at":294,"./de-at.js":294,"./de-ch":295,"./de-ch.js":295,"./de.js":293,"./dv":296,"./dv.js":296,"./el":297,"./el.js":297,"./en-au":298,"./en-au.js":298,"./en-ca":299,"./en-ca.js":299,"./en-gb":300,"./en-gb.js":300,"./en-ie":301,"./en-ie.js":301,"./en-il":302,"./en-il.js":302,"./en-in":303,"./en-in.js":303,"./en-nz":304,"./en-nz.js":304,"./en-sg":305,"./en-sg.js":305,"./eo":306,"./eo.js":306,"./es":307,"./es-do":308,"./es-do.js":308,"./es-us":309,"./es-us.js":309,"./es.js":307,"./et":310,"./et.js":310,"./eu":311,"./eu.js":311,"./fa":312,"./fa.js":312,"./fi":313,"./fi.js":313,"./fil":314,"./fil.js":314,"./fo":315,"./fo.js":315,"./fr":316,"./fr-ca":317,"./fr-ca.js":317,"./fr-ch":318,"./fr-ch.js":318,"./fr.js":316,"./fy":319,"./fy.js":319,"./ga":320,"./ga.js":320,"./gd":321,"./gd.js":321,"./gl":322,"./gl.js":322,"./gom-deva":323,"./gom-deva.js":323,"./gom-latn":324,"./gom-latn.js":324,"./gu":325,"./gu.js":325,"./he":326,"./he.js":326,"./hi":327,"./hi.js":327,"./hr":328,"./hr.js":328,"./hu":329,"./hu.js":329,"./hy-am":330,"./hy-am.js":330,"./id":331,"./id.js":331,"./is":332,"./is.js":332,"./it":333,"./it-ch":334,"./it-ch.js":334,"./it.js":333,"./ja":335,"./ja.js":335,"./jv":336,"./jv.js":336,"./ka":337,"./ka.js":337,"./kk":338,"./kk.js":338,"./km":339,"./km.js":339,"./kn":340,"./kn.js":340,"./ko":341,"./ko.js":341,"./ku":342,"./ku.js":342,"./ky":343,"./ky.js":343,"./lb":344,"./lb.js":344,"./lo":345,"./lo.js":345,"./lt":346,"./lt.js":346,"./lv":347,"./lv.js":347,"./me":348,"./me.js":348,"./mi":349,"./mi.js":349,"./mk":350,"./mk.js":350,"./ml":351,"./ml.js":351,"./mn":352,"./mn.js":352,"./mr":353,"./mr.js":353,"./ms":354,"./ms-my":355,"./ms-my.js":355,"./ms.js":354,"./mt":356,"./mt.js":356,"./my":357,"./my.js":357,"./nb":358,"./nb.js":358,"./ne":359,"./ne.js":359,"./nl":360,"./nl-be":361,"./nl-be.js":361,"./nl.js":360,"./nn":362,"./nn.js":362,"./oc-lnc":363,"./oc-lnc.js":363,"./pa-in":364,"./pa-in.js":364,"./pl":365,"./pl.js":365,"./pt":366,"./pt-br":367,"./pt-br.js":367,"./pt.js":366,"./ro":368,"./ro.js":368,"./ru":369,"./ru.js":369,"./sd":370,"./sd.js":370,"./se":371,"./se.js":371,"./si":372,"./si.js":372,"./sk":373,"./sk.js":373,"./sl":374,"./sl.js":374,"./sq":375,"./sq.js":375,"./sr":376,"./sr-cyrl":377,"./sr-cyrl.js":377,"./sr.js":376,"./ss":378,"./ss.js":378,"./sv":379,"./sv.js":379,"./sw":380,"./sw.js":380,"./ta":381,"./ta.js":381,"./te":382,"./te.js":382,"./tet":383,"./tet.js":383,"./tg":384,"./tg.js":384,"./th":385,"./th.js":385,"./tk":386,"./tk.js":386,"./tl-ph":387,"./tl-ph.js":387,"./tlh":388,"./tlh.js":388,"./tr":389,"./tr.js":389,"./tzl":390,"./tzl.js":390,"./tzm":391,"./tzm-latn":392,"./tzm-latn.js":392,"./tzm.js":391,"./ug-cn":393,"./ug-cn.js":393,"./uk":394,"./uk.js":394,"./ur":395,"./ur.js":395,"./uz":396,"./uz-latn":397,"./uz-latn.js":397,"./uz.js":396,"./vi":398,"./vi.js":398,"./x-pseudo":399,"./x-pseudo.js":399,"./yo":400,"./yo.js":400,"./zh-cn":401,"./zh-cn.js":401,"./zh-hk":402,"./zh-hk.js":402,"./zh-mo":403,"./zh-mo.js":403,"./zh-tw":404,"./zh-tw.js":404};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=419},421:function(t,e,n){"use strict";var r=n(265);n.n(r).a},422:function(t,e,n){(e=n(19)(!1)).push([t.i,"@media (max-width:767px){.tile[data-v-61370555]{max-width:328px}}",""]),t.exports=e},427:function(t,e,n){"use strict";n.r(e),n.d(e,"indexEntryQuery",(function(){return _}));n(13);var r=n(2),o=(n(23),n(14),n(118),{props:{numPages:Number,currentPage:Number},methods:{click:function(t){this.$emit("clicked",t)}}}),c=(n(416),n(3)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},t._l(t.numPages,(function(e){return n("button",{class:t.currentPage===e?"active":"",attrs:{type:"button"},on:{click:function(n){return t.click(e)}}},[t._v("\n        "+t._s(e)+"\n    ")])})),0)}),[],!1,null,"a4c1f088",null).exports,m=n(252),d=n(251),h=n(248),j=n.n(h),f={props:{item:Object,numEntries:Number},components:{"v-base-heading":m.a,"v-optimized-image":d.a},methods:{formattedDate:function(t){return j()(String(t)).format("MMMM D, YYYY")}}},v=(n(421),Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["tile md:px-6 mb-10 mx-auto max-w-sm text-left",t.numEntries>1?"md:w-1/2":"",t.numEntries>2?"lg:w-1/3":""]},[t.item.newsThumbnail[0]?n("div",{staticClass:"mb-4 relative"},[n("a",{staticClass:"relative inline-block",attrs:{href:t.item.newsExternalUrl,target:"_blank"}},[n("v-optimized-image",{attrs:{altText:t.item.newsThumbnail[0].altText||null,photoCredit:t.item.newsThumbnail[0].photoCredit||null,variants:t.item.newsThumbnail[0].tileThumbnailImageVariants||null,sizes:"328px",classes:"mx-auto"}}),t._v(" "),t.item.newsCategory[0]?n("span",{staticClass:"thumbnail-tag"},[t._v("\n                "+t._s(t.item.newsCategory[0].title)+"\n            ")]):t._e()],1)]):t._e(),t._v(" "),n("div",{staticClass:"text-sm text-grey mb-2"},[t._v("\n        "+t._s(t.formattedDate(t.item.postDate))+"\n    ")]),t._v(" "),n("a",{staticClass:"hover:underline",attrs:{href:t.item.newsExternalUrl,target:"_blank"}},[n("v-base-heading",{attrs:{size:"h3",color:"grey-dark",centered:!1}},[t._v("\n            "+t._s(t.item.title)+"\n        ")])],1),t._v(" "),t.item.newsTeaserText?n("div",{staticClass:"mt-2 text-sm",domProps:{innerHTML:t._s(t.item.newsTeaserText)}}):t._e()])}),[],!1,null,"61370555",null).exports),y={data:function(){return{entries:{},entryCount:0,currentPage:1}},props:{itemsPerPage:Number},components:{"v-base-pagination":l,"v-news-listing-tile":v},methods:{paginationClicked:function(t){this.currentPage=t,this.$refs.newsIndex.scrollIntoView({behavior:"smooth"});var e=1===t?"/news":"/news?page="+t;window.history.replaceState("",document.title,e)}},computed:{numPages:function(){return Math.ceil(this.entryCount/this.itemsPerPage)},showEntries:function(){var t=this.currentPage*this.itemsPerPage-this.itemsPerPage,e=t+this.itemsPerPage;return this.entries?this.entries.slice(t,e):null}},mounted:function(){var t=this.$route.query.page;t&&(this.currentPage=parseInt(t))},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:'\n    query getEntries($section: [String]) {\n        entries(section: $section, limit: null, orderBy: "postDate desc") {\n            ... on newsItems_newsItem_Entry {\n                id\n                title\n                postDate\n                newsTeaserText\n                newsExternalUrl\n                newsThumbnail {\n                    ... on pageImages_Asset {\n                        altText\n                        photoCredit\n                        tileThumbnailImageVariants {\n                            src\n                            srcset\n                            srcWebp\n                            srcsetWebp\n                            maxSrcsetWidth\n                            placeholderImage\n                            placeholderBox\n                            placeholderSilhouette\n                            focalPoint\n                        }\n                    }\n                }\n                url\n                newsCategory {\n                    ... on newsCategories_Category {\n                        id\n                        title\n                    }\n                }\n            }\n        }\n    }\n',variables:{section:"newsItems"}});case 2:return n=e.sent,t.entries=n.data.entries,e.next=6,t.$craft({query:"\n    query getEntriesCount($section: [String]) {\n        entryCount(section: $section)\n    }\n",variables:{section:"newsItems"}});case 6:r=e.sent,t.entryCount=r.data.entryCount;case 8:case"end":return e.stop()}}),e)})))()}},x=Object(c.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"newsIndex",staticClass:"news-index bg-white section--standard-padding"},[n("div",{staticClass:"container mx-auto text-center"},[t.entries&&t.entries.length>0?n("div",{staticClass:"md:flex md:flex-wrap md:-mx-6"},t._l(t.showEntries,(function(e){return n("v-news-listing-tile",{key:"news-item-"+e.id,attrs:{numEntries:t.entries.length,item:e}})})),1):t._e(),t._v(" "),t.numPages>1?n("div",{staticClass:"mt-10"},[n("v-base-pagination",{attrs:{numPages:t.numPages,currentPage:t.currentPage},on:{clicked:t.paginationClicked}})],1):t._e()])])}),[],!1,null,null,null).exports,w=n(250),k=n(249),_="\n    query getEntry($section: [String]) {\n        entry(section: $section) {\n            ... on newsIndex_newsIndex_Entry {\n                id\n                typeHandle\n                title\n                itemsPerPage\n            }\n        }\n    }\n",C={data:function(){return{entry:{}}},components:{"v-news-listing":x,"v-seomatic":w.a,"v-simple-page-header":k.a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$craft({query:_,variables:{section:"newsIndex"}});case 2:n=e.sent,t.entry=n.data.entry;case 4:case"end":return e.stop()}}),e)})))()}},z=Object(c.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-simple-page-header",[this._v("\n        "+this._s(this.entry.title)+"\n    ")]),this._v(" "),e("v-news-listing",{attrs:{itemsPerPage:this.entry.itemsPerPage}}),this._v(" "),e("v-seomatic",{attrs:{entryId:this.entry.id}})],1)}),[],!1,null,null,null);e.default=z.exports}}]);