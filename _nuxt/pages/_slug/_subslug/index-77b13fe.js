(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{251:function(e,t,n){"use strict";var r=n(3),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"page-header bg-grey-light sm:hidden"},[t("div",{staticClass:"container text-center py-3"},[t("h1",{staticClass:"text-xl uppercase font-bold"},[this._t("default")],2)])])}),[],!1,null,null,null);t.a=component.exports},257:function(e,t,n){"use strict";n(13);var r=n(2),c=n(258),l=n(251),o={data:function(){return{entry:{}}},props:{entryId:String},components:{"v-simple-page-header":l.a,"v-page-blocks":c.a},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$craft({query:'\n    query getEntry($id: [QueryArgument]) {\n        entry(section: ["pages"], id: $id) {\n            id,\n            typeHandle,\n            title\n            hidePageTitleOnMobile\n        }\n    }\n',variables:{id:e.entryId}});case 2:n=t.sent,e.entry=n.data.entry;case 4:case"end":return t.stop()}}),t)})))()}},d=n(3),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.entry.hidePageTitleOnMobile?e._e():n("v-simple-page-header",[e._v("\n    "+e._s(e.entry.title)+"\n  ")]),e._v(" "),e.entry?n("v-page-blocks",{attrs:{entryId:e.entry.id,objectType:"pages_pages_Entry"}}):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},439:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return o}));n(13);var r=n(2),c=n(257),l=n(253),o='\n    query getEntry($slug: [String], $level: Int) {\n        entry(section: ["pages"], slug: $slug, level: $level) {\n            id\n        }\n    }\n',d={data:function(){return{entry:{},entryId:null}},components:{"v-standard-page":c.a,"v-seomatic":l.a},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$craft({query:o,variables:{slug:e.$route.params.subslug,level:2}});case 2:n=t.sent,e.entry=n.data.entry;case 4:case"end":return t.stop()}}),t)})))()}},y=n(3),component=Object(y.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return this.entry?t("div",[t("v-standard-page",{attrs:{entryId:this.entry.id}}),this._v(" "),t("v-seomatic",{attrs:{entryId:this.entry.id}})],1):this._e()}),[],!1,null,null,null);t.default=component.exports}}]);