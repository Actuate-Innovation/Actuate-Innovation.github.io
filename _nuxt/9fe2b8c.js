(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{334:function(e,t,n){"use strict";var r=n(9),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("header",{staticClass:"page-header bg-grey-light sm:hidden"},[t("div",{staticClass:"container text-center py-3"},[t("h1",{staticClass:"text-xl uppercase font-bold"},[this._t("default")],2)])])}),[],!1,null,null,null);t.a=component.exports},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(123);var r=n(344),l=n(337),c="\n    ".concat(r.b,"\n    query getEntry($section: [String], $id: [QueryArgument], $slug: [String], $level: Int) {\n        entry(section: $section, id: $id, slug: $slug, level: $level) {\n            id\n            title\n            slug\n            ... on pages_standardPage_Entry {\n                pageBlocks {\n                    ").concat(r.a,"\n                }\n                hidePageTitleOnMobile\n                ").concat(l.a,"\n            }\n        }\n    }\n")},389:function(e,t,n){"use strict";n.r(t);n(33);var r=n(3),l=n(338),c=n(343),o=n(334),d=n(341),v={components:{"v-base-seo":l.a,"v-page-blocks":c.a,"v-simple-page-header":o.a},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$craft,r=e.params,t.next=3,n({query:d.a,variables:{section:"pages",slug:r.subslug,level:2}});case 3:return l=t.sent,t.abrupt("return",{entry:l.data.entry});case 5:case"end":return t.stop()}}),t)})))()}},y=n(9),component=Object(y.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.entry?n("div",[e.entry.hidePageTitleOnMobile?e._e():n("v-simple-page-header",[e._v("\n    "+e._s(e.entry.title)+"\n  ")]),e._v(" "),n("v-page-blocks",{attrs:{entry:e.entry}}),e._v(" "),n("v-base-seo",{attrs:{entry:e.entry}})],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);