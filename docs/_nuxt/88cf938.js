(window.webpackJsonp=window.webpackJsonp||[]).push([[19,2,3],{257:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("53168016",content,!0,{sourceMap:!1})},258:function(t,e,n){"use strict";n.r(e);var l=n(52),r={name:"BlogHeader",props:{image:String,title:String,subtitle:String,buttonText:String},data:function(){return{config:l}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[n("div",{staticClass:"position-relative h-100"},[n("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{quality:"90",format:"webp",height:"400",width:"612",src:t.image,alt:t.config.seo.mainKeyword}})],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 fadeInUp"},[n("div",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n                        "+t._s(t.config.seo.mainKeyword)+"\n                    ")]),t._v(" "),n("h1",{staticClass:"mb-4"},[t._v(t._s(t.title))]),t._v(" "),n("div",[n("p",[t._v("\n                            "+t._s(t.subtitle)+"\n                        ")])]),t._v(" "),n("a",{staticClass:"btn btn-primary py-3 px-5 mt-2",attrs:{href:"#article"}},[t._v(t._s(t.buttonText))])])])])])])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n(257)},262:function(t,e,n){var l=n(53)(!1);l.push([t.i,".blogThumbnails[data-v-3f7f93ae]{display:flex;flex-wrap:wrap;justify-content:space-between;height:200px;width:100%}",""]),t.exports=l},264:function(t,e,n){"use strict";n.r(e);var l={name:"BlogItem",props:{article:Object},head:{title:"News und Informationen rund ums Camping",meta:[{hid:"description",name:"description",content:"Hier findest du aktuelle News und Informationen zum Thema Camping und Outdoor. Weiterhin vergleichen wir Produkte und stellen dir die besten Modelle vor."},{hid:"robots",name:"robots",content:"index, follow"}]}},r=(n(261),n(18)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card",staticStyle:{width:"18rem"}},[n("nuxt-link",{attrs:{to:t.article.link,title:t.article.title}},[n("nuxt-img",{staticClass:"card-img-top blogThumbnails",attrs:{height:"200",width:"286",src:t.article.image,format:"webp",quality:"90",alt:t.article.title}})],1),t._v(" "),n("div",{staticClass:"card-body"},[n("p",{staticClass:"card-text"},[t._v("\n                "+t._s(t.article.date)+"\n            ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.article.link,title:t.article.title}},[n("h5",{staticClass:"card-title"},[t._v("\n                    "+t._s(t.article.title)+"\n                ")])]),t._v(" "),n("p",{staticClass:"card-text pt-3 pb-3"},[n("small",{staticClass:"text-muted"},[t._v(t._s(t.article.subtitle))])]),t._v(" "),n("nuxt-link",{staticClass:"btn btn-primary align-items-center d-block",attrs:{to:t.article.link,title:t.article.title}},[t._v("\n                weiterlesen")])],1)],1)])}),[],!1,null,"3f7f93ae",null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var l=n(52),r={name:"BlogIndex",data:function(){return{articles:l.blogArticles,config:l}}},c=n(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BlogHeader",{attrs:{buttonText:"Zu den Blogartikeln",image:"/assets/images/feature-campingtoiletten-blog-header.jpg",title:"Blog",subtitle:"Wir informieren Sie über die neuesten Trends und Entwicklungen im Bereich Camping &\n                            Campingtoiletten."}}),t._v(" "),n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container",attrs:{id:"article"}},[n("div",{staticClass:"row"},t._l(t.articles,(function(article,t){return n("div",{key:t,staticClass:"col-3"},[n("BlogItem",{attrs:{article:article}})],1)})),0)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogHeader:n(258).default,BlogItem:n(264).default})}}]);