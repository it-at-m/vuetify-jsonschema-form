(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{627:function(t,e,n){"use strict";n(13),n(6),n(12),n(109),n(34),n(357),n(266),n(89),n(110);var r=n(3);var o,c=n(90);e.a=(o="container",r.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var d=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,d=data.attrs;return d&&(data.attrs={},n=Object.keys(d).filter((function(t){if("slot"===t)return!1;var e=d[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},989:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{title:"1.x to 2.x"}},head:function(){return{title:"vjsf - "+this.title}}},o=n(94),c=n(130),d=n.n(c),l=n(627),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h1",{staticClass:"display-1 mb-4"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),n("p",[t._v("\n    The 2.x major version does not introduce actual breaking changes in the API. But the implementation of events and reactivity was changed in important ways.\n  ")]),t._v(" "),n("p",[n("ul",[n("li",[t._v("better implementation of v-model by not mutating the value parameter and instead creating clones for each input event (better for clarity and side-effects)")]),t._v(" "),n("li",[t._v("prevent triggering duplicate input events (better for performance and clarity)")]),t._v(" "),n("li",[t._v("a change event is always triggered after the corresponding input event (better if you want to automatically validate the form on each change)")])])]),t._v(" "),n("p",[t._v("\n    When upgrading you should focus on checking that the way you integrate vjsf is in line with these changes. In our experience a very straightforward implementation using v-model and either a validate button or listening to change events for validation should work better than it used to.\n  ")])])}),[],!1,null,"91497cc8",null);e.default=component.exports;d()(component,{VContainer:l.a})}}]);