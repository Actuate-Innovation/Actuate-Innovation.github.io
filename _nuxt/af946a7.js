(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{331:function(e,t,n){"use strict";var r=n(9),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"page-header bg-grey-light sm:hidden"},[t("div",{staticClass:"container text-center py-3"},[t("h1",{staticClass:"text-xl uppercase font-bold"},[this._t("default")],2)])])}),[],!1,null,null,null);t.a=component.exports},337:function(e,t,n){"use strict";n(22);var r=n(3),l=n(338),o=n(331),c={data:function(){return{entry:{}}},props:{entryId:String},components:{"v-simple-page-header":o.a,"v-page-blocks":l.a},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$craft({query:'\n    query getEntry($id: [QueryArgument]) {\n        entry(section: ["pages"], id: $id) {\n            id,\n            typeHandle,\n            title\n            ... on pages_standardPage_Entry {\n                hidePageTitleOnMobile\n            }\n        }\n    }\n',variables:{id:e.entryId}});case 2:n=t.sent,e.entry=n.data.entry;case 4:case"end":return t.stop()}}),t)})))()}},d=n(9),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.entry.hidePageTitleOnMobile?e._e():n("v-simple-page-header",[e._v("\n    "+e._s(e.entry.title)+"\n  ")]),e._v(" "),e.entry?n("v-page-blocks",{attrs:{entryId:e.entry.id,objectType:"pages_pages_Entry"}}):e._e()],1)}),[],!1,null,null,null);t.a=component.exports},381:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return c}));n(22);var r=n(3),l=n(333),o=n(337),c='{\n    globalSet(handle:"globalPrograms") {\n        ... on globalPrograms_GlobalSet {\n            programsIndexEntry {\n                id\n            }\n        }\n    }\n}',d={data:function(){return{globalSet:{}}},components:{"v-seomatic":l.a,"v-standard-page":o.a},computed:{entryId:function(){return this.globalSet.programsIndexEntry[0].id||null}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$craft({query:c});case 2:n=t.sent,e.globalSet=n.data.globalSet;case 4:case"end":return t.stop()}}),t)})))()}},y=n(9),component=Object(y.a)(d,(function(){var e=this.$createElement,t=this._self._c||e;return this.entryId?t("div",[t("v-standard-page",{attrs:{entryId:this.entryId}}),this._v(" "),t("v-seomatic",{attrs:{entryId:this.entryId}})],1):this._e()}),[],!1,null,null,null);t.default=component.exports}}]);