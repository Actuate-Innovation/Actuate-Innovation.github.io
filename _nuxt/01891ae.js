(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{298:function(t,e,n){"use strict";var r=n(6),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"page-header bg-grey-light sm:hidden"},[e("div",{staticClass:"container sm:text-center py-3"},[e("h1",{staticClass:"text-xl uppercase font-bold"},[this._t("default")],2)])])}),[],!1,null,null,null);e.a=component.exports},299:function(t,e,n){"use strict";n(32),n(26),n(17),n(37);var r=n(36),l=n(23);function o(){var data=Object(r.a)(["\n    query getEntry($id: [QueryArgument]) {\n        entry(id: $id) {\n            seomatic(asArray: true) {\n                metaTitleContainer\n                metaTagContainer\n                metaLinkContainer\n                metaJsonLdContainer\n            }\n        }\n    }\n"]);return o=function(){return data},data}var c=n.n(l)()(o()),m={props:{entryId:String},computed:{metaTitle:function(){return this.entry?JSON.parse(this.entry.seomatic.metaTitleContainer).title.title:null},metaData:function(){if(!this.entry)return null;var t=JSON.parse(this.entry.seomatic.metaTagContainer),e=[];return Object.keys(t).forEach((function(n){var r=t[n];r.content&&e.push({hid:n,property:r.property||"",name:r.name||"",content:r.content})})),e},linkData:function(){if(!this.entry)return null;var t=JSON.parse(this.entry.seomatic.metaLinkContainer),e=[];return Object.keys(t).forEach((function(n){var r=t[n];r.href&&e.push({hid:n,href:r.href,rel:r.rel||"",type:r.type||""})})),e},jsonLdData:function(){return this.entry?this.entry.seomatic.metaJsonLdContainer:null}},head:function(){return this.entry?{__dangerouslyDisableSanitizers:["script"],title:this.metaTitle,meta:this.metaData,link:this.linkData,script:[{type:"application/ld+json",innerHTML:this.jsonLdData}]}:null},apollo:{entry:{query:c,variables:function(){return{id:this.entryId}}}}},d=n(6),component=Object(d.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.a=component.exports},300:function(t,e,n){"use strict";var r={props:{altText:{type:String},photoCredit:{type:String},classes:{type:String},sizes:{type:String},variants:{type:Object}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.variants&&t.variants.src?n("picture",{staticClass:"inline-block relative"},[n("img",{class:t.classes,attrs:{src:t.variants.placeholderImage,srcset:t.variants.srcset,sizes:t.sizes,alt:t.altText}}),t._v(" "),t.photoCredit?n("span",{staticClass:"photo-credit"},[t._v("\n                "+t._s(t.photoCredit)+"\n            ")]):t._e()]):t._e()])}),[],!1,null,null,null);e.a=component.exports},301:function(t,e,n){"use strict";var r={props:{size:{type:String},color:{type:String},centered:{type:Boolean},limitWidth:{type:Boolean}}},l=n(6),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:["h1"===t.size?"text-2xl sm:text-3xl md:text-4xl":"","h2"===t.size?"text-3xl":"","h3"===t.size?"text-xl":"","text-"+t.color,"font-semibold mx-auto leading-tight",t.centered?"text-center ":"",t.limitWidth&&t.centered?"md:w-8/12":"",t.limitWidth&&!t.centered?"lg:w-10/12":""]},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},302:function(t,e,n){},305:function(t,e,n){"use strict";var r={props:{size:{type:String}},computed:{textSizeClass:function(){return"large"===this.size?"text-base sm:text-lg":"small"===this.size?"text-sm":"text-base"}}},l=n(6),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["leading-normal rich-text",this.textSizeClass]},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},313:function(t,e,n){"use strict";var r=n(302);n.n(r).a},316:function(t,e,n){"use strict";var r={props:{color:{type:String},url:{type:String}}},l=(n(313),n(6)),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"inline-flex text-sm items-center",attrs:{href:this.url}},[e("span",[e("svg",{staticClass:"text-grey",attrs:{width:"7",height:"12",viewBox:"0 0 7 12",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M5.67568 11.2917L7 10.016L2.64865 5.82442L7 1.63284L5.67568 0.357149L1.4345e-06 5.82442L5.67568 11.2917Z",fill:"currentColor"}})])]),this._v(" "),e("span",{class:["text leading-none pl-2","light"===this.color?"text-white":"text-grey-dark"]},[this._t("default")],2)])}),[],!1,null,"5b247d8d",null);e.a=component.exports},461:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return T}));var r=n(36),l=n(299),o=n(23),c=n.n(o),m=n(316),d=n(301),h=n(305),v=n(300),y=n(298),f={props:{heading:{type:String},links:{type:Array}},components:{"v-base-heading":d.a,"v-base-rich-text":h.a}},_=n(6),x=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.links.length>0?n("div",{staticClass:"mt-6"},[t.heading?n("v-base-heading",{attrs:{size:"h3",color:"blue"}},[t._v("\n        "+t._s(t.heading)+"\n    ")]):t._e(),t._v(" "),n("ul",{staticClass:"list-disc"},t._l(t.links,(function(e){return n("li",{staticClass:"mt-4 ml-5"},[n("a",{staticClass:"underline text-grey-dark font-semibold",attrs:{href:e.linkField.url,target:e.linkField.target}},[t._v("\n                "+t._s(e.linkText)+"\n            ")]),t._v(" "),e.description?n("div",{staticClass:"mt-1"},[n("v-base-rich-text",{attrs:{size:"small"}},[n("span",{domProps:{innerHTML:t._s(e.description)}})])],1):t._e()])})),0)],1):t._e()}),[],!1,null,null,null).exports;function k(){var data=Object(r.a)(['{\n    globalSet(handle:"globalTeamMembers") {\n        ... on globalTeamMembers_GlobalSet {\n            teamMemberDetailPageHeading\n            teamMembersIndexEntry {\n                url\n            }\n        }\n    }\n}']);return k=function(){return data},data}var C=c()(k()),M={props:{entry:{type:Object}},components:{"v-back-link":m.a,"v-base-heading":d.a,"v-base-rich-text":h.a,"v-optimized-image":v.a,"v-simple-page-header":y.a,"v-team-member-links":x},apollo:{globalSet:{query:C}}},S=Object(_.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-simple-page-header",[t._v("\n        "+t._s(t.globalSet.teamMemberDetailPageHeading)+"\n    ")]),t._v(" "),n("section",{staticClass:"section--standard-padding"},[n("div",{staticClass:"container"},[n("div",{staticClass:"md:w-10/12 mx-auto"},[n("v-back-link",{attrs:{url:t.globalSet.teamMembersIndexEntry[0].url}},[t._v("\n                    All Team Members\n                ")]),t._v(" "),n("div",{staticClass:"flex mt-4"},[n("div",{staticClass:"hidden sm:block w-4/12 pr-5"},[n("v-optimized-image",{attrs:{altText:t.entry.teamMemberPhoto[0].altText||null,variants:t.entry.teamMemberPhoto[0].teamMemberImageVariants||null,sizes:"280px"}}),t._v(" "),n("v-team-member-links",{attrs:{heading:"Learn more",links:t.entry.teamMemberLinks}})],1),t._v(" "),n("div",{staticClass:"sm:w-8/12 sm:pl-7"},[n("v-base-heading",{attrs:{size:"h1",color:"blue"}},[t._v("\n                            "+t._s(t.entry.firstName)+" "+t._s(t.entry.lastName)+"\n                        ")]),t._v(" "),t.entry.position?n("div",{staticClass:"mt-2"},[n("v-base-heading",{attrs:{size:"h3",color:"grey-dark"}},[t._v("\n                                "+t._s(t.entry.position)+"\n                            ")])],1):t._e(),t._v(" "),t.entry.teamMemberDescription?n("div",{staticClass:"mt-6"},[n("v-optimized-image",{attrs:{altText:t.entry.teamMemberPhoto[0].altText||null,variants:t.entry.teamMemberPhoto[0].teamMemberImageVariants||null,classes:"sm:hidden float-right ml-8 mb-10",sizes:"180px"}}),t._v(" "),n("v-base-rich-text",[n("span",{domProps:{innerHTML:t._s(t.entry.teamMemberDescription)}})])],1):t._e(),t._v(" "),n("div",{staticClass:"sm:hidden"},[n("v-team-member-links",{attrs:{heading:"Learn more about Actuate from "+t.entry.firstName,links:t.entry.teamMemberLinks}})],1)],1)])],1)])])],1)}),[],!1,null,null,null).exports;function z(){var data=Object(r.a)(['\n    query getEntry($slug: [String]) {\n        entry(section: ["teamMembers"], slug: $slug) {\n            ... on teamMembers_teamMember_Entry {\n                id,\n                firstName,\n                lastName,\n                position,\n                teamMemberDescription,\n                teamMemberPhoto {\n                    ... on teamImages_Asset {\n                        altText\n                        teamMemberImageVariants {\n                            src\n                            srcset\n                            srcWebp\n                            srcsetWebp\n                            maxSrcsetWidth\n                            placeholderImage\n                            placeholderBox\n                            placeholderSilhouette\n                            focalPoint\n                        }\n                    }\n                }\n                teamMemberLinks {\n                    ... on teamMemberLinks_link_BlockType {\n                        linkField {\n                            url\n                            text\n                            target\n                        }\n                        linkText\n                        description\n                    }\n                }\n            }\n        }\n    }\n']);return z=function(){return data},data}var T=c()(z()),L={components:{"v-seomatic":l.a,"v-team-member":S},apollo:{entry:{query:T,variables:function(){return{slug:this.$route.params.slug}}}}},j=Object(_.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.entry?e("v-team-member",{attrs:{entry:this.entry}}):this._e(),this._v(" "),e("v-seomatic",{attrs:{entryId:this.entry.id}})],1)}),[],!1,null,null,null);e.default=j.exports}}]);