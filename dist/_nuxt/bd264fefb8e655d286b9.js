(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{270:function(t,e,n){"use strict";var r={props:{content:{type:Object,required:!0}}},o=n(11),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner-outer"},[e("article",{staticClass:"banner",style:{backgroundImage:"url("+this.content.image+")"}},[e("div",{staticClass:"banner-content container"},[e("div",{staticClass:"banner-title"},[e("h1",[this._v(" "+this._s(this.content.title)+" ")])])])])])},[],!1,null,null,null);e.a=component.exports},271:function(t,e,n){"use strict";var r={props:{content:{type:Object,required:!0},id:{type:String,required:!0}}},o=n(11),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{attrs:{to:"/"+t.id}},[n("article",{staticClass:"post-preview"},[n("div",{staticClass:"post-preview--inner"},[n("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.content.thumbnail+")"}}),t._v(" "),n("div",{staticClass:"post-preview-content"},[n("h3",[t._v(t._s(t.content.title))]),t._v(" "),n("p",[t._v(t._s(t.content.summary))])])])])])},[],!1,null,null,null);e.a=component.exports},275:function(t,e,n){"use strict";n.r(e);n(32);var r=n(7),o=n(271),c=n(270),l=n(272),v=n.n(l),d={props:{content:{type:Object,required:!0}},computed:{teaser:function(){return v()(this.content.teaser_text)}}},_=n(11),f=Object(_.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-preview--inner"},[n("div",{staticClass:"about-preview__portrait"},[n("div",{staticClass:"about-preview__portrait-image",style:{backgroundImage:"url("+t.content.portrait+")"}})]),t._v(" "),n("div",{staticClass:"about-preview__text"},[n("h2",{staticClass:"about-preview__title"},[t._v(t._s(t.content.teaser_title))]),t._v(" "),n("div",{staticClass:"about-preview__teaser",domProps:{innerHTML:t._s(t.teaser)}})])])},[],!1,null,null,null).exports,w={components:{PostPreview:o.a,Banner:c.a,AboutPreview:f},asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.app.$storyapi.get("cdn/stories",{version:"draft",filter_query:{component:{in:"post"},featured:{in:!0}}}).then(function(t){return{posts:t.data.stories.map(function(t){return{id:t.full_slug,content:t.content}})}});case 2:return n=t.sent,t.next=5,e.app.$storyapi.get("cdn/stories/banner",{version:"draft"}).then(function(t){return{id:t.data.story.slug,content:t.data.story.content}});case 5:return r=t.sent,t.next=8,e.app.$storyapi.get("cdn/stories/about",{version:"draft"}).then(function(t){return{id:t.data.story.slug,content:t.data.story.content}});case 8:return o=t.sent,t.abrupt("return",{posts:n.posts,topSection:r,about:o});case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},h=Object(_.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"front-page"},[n("Banner",{key:t.topSection.id,attrs:{content:t.topSection.content}}),t._v(" "),n("article",{staticClass:"container"},[n("section",{staticClass:"about-preview"},[n("AboutPreview",{key:t.about.id,attrs:{content:t.about.content}})],1),t._v(" "),n("section",{staticClass:"posts"},[n("h2",[t._v("Featured posts")]),t._v(" "),n("div",{staticClass:"posts-grid"},t._l(t.posts,function(t){return n("PostPreview",{key:t.id,attrs:{id:t.id,content:t.content}})}),1)])])],1)},[],!1,null,null,null);e.default=h.exports}}]);