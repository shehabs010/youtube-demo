(function(t){function e(e){for(var s,o,l=e[0],c=e[1],r=e[2],u=0,v=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(v.length)v.shift()();return n.push.apply(n,r||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,l=1;l<i.length;l++){var c=i[l];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/youtube-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var r=0;r<l.length;r++)e(l[r]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0f71":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header__section fixed"},[s("div",{staticClass:"container"},[s("div",{staticClass:"container__row"},[s("div",{staticClass:"top__header d-flex w-100 align-items-center"},[s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"},[s("div",{staticClass:"top__header--logo mr-auto"},[t.isMobile?s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"fab fa-youtube"})]):s("router-link",{attrs:{to:"/"}},[s("img",{staticClass:"img-fluid",attrs:{src:i("4ffd"),alt:""}})])],1)]),t._v(" "),s("div",{staticClass:"col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12"},[s("searchInput")],1)])])])])},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"top__header-form"},[i("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.saveTermToStore()}}},[i("div",{staticClass:"top__header-form--input w-100 d-flex"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._m(0)])])])},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn top__header-form--btn",attrs:{type:"submit"}},[i("i",{staticClass:"fas fa-search"})])}],l=(i("ac1f"),i("5319"),{name:"search-input",data:function(){return{query:""}},props:[],methods:{saveTermToStore:function(){this.$store.commit("SearchQuery",this.query),""!=window.localStorage.searchTerm?(this.$router.replace({path:"/search",query:{query:window.localStorage.searchTerm}}),console.log("value")):(this.$router.replace({path:"/search",query:{query:this.query}}),console.log("empty"))}},computed:{searchLoactStorage:function(){return this.$store.state.searchTerm}},watch:{$route:function(t){this.query=t.query.query}}}),c=l,r=i("2877"),d=Object(r["a"])(c,n,o,!1,null,null,null),u=d.exports,v={name:"header-section",props:[],data:function(){return{innerWidth:425,windowWidth:window.innerWidth}},components:{searchInput:u},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth,console.log(t.isMobile)}))},computed:{isMobile:function(){return this.windowWidth<=768}}},p=v,f=Object(r["a"])(p,s,a,!1,null,null,null);e["default"]=f.exports},"1f68":function(t,e,i){},3506:function(t,e,i){},"4f85":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{},[i("headerItem"),i("channelInfo",{attrs:{data:t.channelInfos}}),i("div",{staticClass:"videos__list"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container__row"},[i("div",{staticClass:"videos__list--bg w-100"},t._l(t.getChannelPlaylist,(function(t){return i("videoItem",{key:t.etag,attrs:{video:t}})})),1)])])])],1)},a=[],n=i("5454"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"channel mt-3"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container__row"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t.data&&t.data.brandingSettings&&t.data.brandingSettings.image?i("div",{staticClass:"channel__banner",style:{backgroundImage:"url('"+t.data.brandingSettings.image.bannerExternalUrl+"')"}}):t._e()]),i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},[i("div",{staticClass:"channel__detail d-flex align-items-center"},[i("div",{staticClass:"channel__detail--avatar"},[t.data&&t.data.snippet&&t.data.snippet.thumbnails?i("img",{staticClass:"img-fluid",attrs:{src:t.data.snippet.thumbnails.medium.url,alt:""}}):t._e()]),i("div",{staticClass:"channel__detail-text"},[i("div",{staticClass:"channel__detail--title"},[t.data&&t.data.snippet&&t.data.snippet.title?i("h4",[t._v(t._s(t.data.snippet.title))]):t._e()]),i("div",{staticClass:"channel__detail--subscribe d-flex"},[i("div",{staticClass:"channel__details--videos-count"},[t.data&&t.data.statistics&&t.data.statistics.videoCount?i("span",[t._v(t._s(t.data.statistics.videoCount)+" Videos ")]):t._e()]),i("div",{staticClass:"channel__details--videos-subscribe d-flex"},[t._m(0),t.data&&t.data.statistics&&t.data.statistics.subscriberCount?i("span",[t._v(t._s(t.subscribersCount))]):t._e()])])])])])])])])},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("i",{staticClass:"fab fa-youtube"}),t._v(" subscribe")])}],c={name:"",props:["data"],data:function(){return{}},computed:{subscribersCount:function(){var t=this.data.statistics.subscriberCount;return t>=1e6?t=t/1e6+"M":t>=1e3&&(t=t/1e3+"K"),t}}},r=c,d=i("2877"),u=Object(d["a"])(r,o,l,!1,null,null,null),v=u.exports,p={name:"channel",components:{channelInfo:v},data:function(){return{id:this.$route.params.id,type:this.$route.params.query,maxResults:25,channelInfos:{},getChannelPlaylist:[],getChannelSection:{}}},methods:{getChannelDetails:function(){var t=this;Object(n["a"])(this.id).then((function(e){t.channelInfos=e.data.items[0],t.getChannelPlaylists(),t.getFeaturedChannel(t.channelInfos.id)})).catch((function(t){console.log(t)}))},getChannelPlaylists:function(){var t=this;Object(n["b"])(this.id,this.maxResults).then((function(e){t.getChannelPlaylist=e.data.items,console.log(e.data)})).catch((function(t){console.log(t)}))},getFeaturedChannel:function(t){var e=this;Object(n["c"])(t).then((function(t){e.getChannelSection=t}))}},created:function(){this.getChannelDetails()}},f=p,_=Object(d["a"])(f,s,a,!1,null,null,null);e["default"]=_.exports},"4ffd":function(t,e,i){t.exports=i.p+"img/logo.191e85cb.png"},5454:function(t,e,i){"use strict";i.d(e,"e",(function(){return r})),i.d(e,"f",(function(){return d})),i.d(e,"i",(function(){return u})),i.d(e,"g",(function(){return v})),i.d(e,"d",(function(){return p})),i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return _})),i.d(e,"h",(function(){return h})),i.d(e,"c",(function(){return m}));i("99af");var s=i("bc3a"),a=i.n(s),n={get:a.a.get,put:a.a.put,post:a.a.post,delete:a.a.delete,patch:a.a.patch},o={API_KEY:"AIzaSyA4wZN5xGaQ4alTaWRmsA88Iq9qDbECAZo"},l=o,c="https://youtube.googleapis.com/youtube/v3",r=function(t){return n.get("".concat(c,"/search?part=snippet&key=").concat(l.API_KEY,"&q=").concat(t))},d=function(t,e){return n.get("".concat(c,"/search?part=snippet&order=").concat(t,"&type=").concat(e,"&key=").concat(l.API_KEY))},u=function(t){return n.get("".concat(c,"/search?part=snippet&maxResults=10&order=viewCount&pageToken=").concat(t,"&q=skateboarding%20dog&type=video&key=").concat(l.API_KEY))},v=function(t){return n.get("".concat(c,"/videos?part=snippet%2C%20player%2C%20statistics&id=").concat(t,"&maxHeight=565&maxWidth=1150&key=").concat(l.API_KEY))},p=function(t){return n.get("".concat(c,"/search?part=snippet&relatedToVideoId=").concat(t,"&type=video&key=").concat(l.API_KEY))},f=function(t){return n.get("".concat(c,"/channels?part=brandingSettings%2Csnippet%2CcontentDetails%2Cstatistics&id=").concat(t,"&key=").concat(l.API_KEY))},_=function(t,e){return n.get("".concat(c,"/playlists?part=snippet%2CcontentDetails&channelId=").concat(t,"&maxResults=").concat(e,"&key=").concat(l.API_KEY))},h=function(t){return n.get("".concat(c,"/playlistItems?part=snippet%2CcontentDetails&playlistId=").concat(t,"&key=").concat(l.API_KEY))},m=function(t){return n.get("".concat(c,"/channelSections?part=snippet%2CcontentDetails&channelId=").concat(t,"&key=").concat(l.API_KEY))}},"56d7":function(t,e,i){"use strict";i.r(e),i.d(e,"bus",(function(){return G}));i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper clearfix",attrs:{id:"app"}},[i("router-view")],1)},n=[],o={name:"App"},l=o,c=i("2877"),r=Object(c["a"])(l,a,n,!1,null,null,null),d=r.exports,u=i("2909"),v=i("2f62"),p=i("5454");s["a"].use(v["a"]);var f=window.localStorage.getItem("searchValue"),_=new v["a"].Store({state:{SearchResultData:{items:[],pageInfo:{},nextPageToken:null},filters:{sortby:"relevance",type:"video"},searchInput:f},mutations:{SearchQuery:function(t,e){t.searchInput=e,window.localStorage.setItem("searchTerm",t.searchInput),this.commit("getSearchResult")},getSearchResult:function(t){t.SearchResultData.nextPageToken=null,Object(p["e"])(t.searchInput).then((function(e){t.SearchResultData=[],t.term="",t.SearchResultData=e.data})).catch((function(t){console.log(t)}))},getResultItemsByFilters:function(t,e){console.log(e),t.filters.sortby=e.sortby,t.filters.type=e.type,t.SearchResultData.nextPageToken=null,Object(p["f"])(t.filters.sortby,t.filters.type).then((function(e){t.SearchResultData=[],t.term="",t.SearchResultData=e.data})).catch((function(t){console.log(t)}))},gotoNextPage:function(t){this.loading||Object(p["i"])(t.SearchResultData.nextPageToken).then((function(e){var i;e.data.items.length>0&&((i=t.SearchResultData.items).push.apply(i,Object(u["a"])(e.data.items)),t.SearchResultData.pageInfo=e.data.pageInfo,t.SearchResultData.nextPageToken=e.data.nextPageToken)}))}}}),h=i("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{attrs:{id:"search-result"}},[i("headerItem"),i("filterList",{staticClass:"mt-3",attrs:{totalResults:this.$store.state.SearchResultData.pageInfo.totalResults}}),i("div",{staticClass:"videos__list"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container__row"},[i("div",{staticClass:"videos__list--bg w-100"},t._l(this.$store.state.SearchResultData.items,(function(t){return i("videoItem",{key:t.videoId,attrs:{video:t}})})),1)])])])],1),i("scroll-loader",{attrs:{"loader-method":t.getNextPage,"loader-enable":t.loading}})],1)},g=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"filter"},[s("div",{staticClass:"container"},[s("div",{staticClass:"container__row align-items-center"},[s("div",{staticClass:"container__row align-items-center"},[s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3 mr-auto"},[s("div",{staticClass:"filter__result"},[s("p",[t._v("About "),s("span",[t._v(t._s(t.totalResults))]),t._v(" result")])])]),s("div",{staticClass:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-3"},[s("div",{staticClass:"filter__button"},[s("button",{staticClass:"btn d-flex align-items-center",attrs:{type:"button"},on:{click:function(e){return t.openFilter()}}},[s("img",{attrs:{src:i("8e90"),alt:""}}),s("span",[t._v(" Filter ")])])])])]),t._v(" "),s("div",{staticClass:"container__row"},[s("div",{staticClass:"filter__types w-100",class:t.active?"":"active"},[s("filterItem")],1)])])])])},b=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex w-100"},[t._m(0),t._v(" "),i("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-32"},[i("h3",[t._v(" Type ")]),i("div",{staticClass:"filter__column--links"},[i("a",{staticClass:"active",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.takeValueItemsByFilters(t.filtersList.type="video")}}},[t._v("video ")]),i("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.takeValueItemsByFilters(t.filtersList.type="channel")}}},[t._v("Channel")]),i("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.takeValueItemsByFilters(t.filtersList.type="playlist")}}},[t._v("Playlist")])])]),t._v(" "),i("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 pr-32"},[i("h3",[t._v(" Sort By ")]),i("div",{staticClass:"filter__column--links"},[i("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.filtersList.sortby="relevance",t.takeValueItemsByFilters()}}},[t._v("Relevance ")]),i("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.filtersList.sortby="date",t.takeValueItemsByFilters()}}},[t._v("Upload Date")]),i("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.filtersList.sortby="viewCount",t.takeValueItemsByFilters()}}},[t._v("View Count")]),i("a",{attrs:{href:""},on:{click:function(e){e.preventDefault(),t.filtersList.sortby="rating",t.takeValueItemsByFilters()}}},[t._v("Rating")])])])])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-none pr-32"},[i("h3",[t._v(" upload Date ")]),i("div",{staticClass:"filter__column--links"},[i("a",{attrs:{href:""}},[t._v(" i didn't find these paramters in youtube API")])])])}],D={name:"filter-item",props:[],data:function(){return{filtersList:{type:"",sortby:""}}},methods:{takeValueItemsByFilters:function(){this.$store.commit("getResultItemsByFilters",this.filtersList),G.$emit("closeFilter")}}},w=D,I=Object(c["a"])(w,y,x,!1,null,null,null),k=I.exports,S={name:"filter",props:["totalResults"],components:{filterItem:k},data:function(){return{active:!1}},methods:{openFilter:function(){this.active=!this.active}},created:function(){var t=this;G.$on("closeFilter",(function(){t.openFilter()}))}},$=S,P=Object(c["a"])($,C,b,!1,null,null,null),V=P.exports,E={name:"search-result",data:function(){return{term:"",loading:!0}},components:{filterList:V},methods:{getNextPage:function(){this.$store.commit("gotoNextPage")}},mounted:function(){this.getNextPage()},created:function(){null!=this.term&&this.$store.commit("getSearchResult"),this.term=window.localStorage.searchTerm},watch:{$route:function(t){this.term=t.query.query,this.term=window.localStorage.searchTerm,this.$store.commit("getSearchResult")}}},O=E,j=Object(c["a"])(O,m,g,!1,null,null,null),R=j.exports,T=i("4f85"),A=i("9ff3"),q=i("7a30"),F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{})},L=[],B={name:"not-found"},K=B,M=Object(c["a"])(K,F,L,!1,null,null,null),Y=M.exports;s["a"].use(h["a"]);var H=new h["a"]({mode:"history",base:"/youtube-demo/",routes:[{path:"",name:"search-result",component:R},{path:"/search",name:"search-result",component:R},{path:"/channel/:id",name:"channel",component:T["default"]},{path:"/video/:id",name:"video",component:A["default"]},{path:"/video/list/:id",name:"List",component:q["default"]},{path:"/404",name:"404",component:Y},{path:"*",redirect:"/404"}]}),W=H,N=i("87f4"),Q=i.n(N),z=i("bc3a"),J=i.n(z),U=i("2106"),Z=i.n(U);i("1f68");s["a"].use(Q.a),s["a"].use(h["a"]),s["a"].use(Z.a,J.a),s["a"].config.productionTip=!1;var G=new s["a"];s["a"].component("loading",i("c428").default),s["a"].component("headerItem",i("0f71").default),s["a"].component("videoItem",i("f7fc").default),s["a"].component("channelView",i("4f85").default),s["a"].component("videoDetails",i("9ff3").default),s["a"].component("VideoPlaylistDetails",i("7a30").default),new s["a"]({router:W,store:_,render:function(t){return t(d)}}).$mount("#app")},"7a30":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("headerItem"),i("section",{staticClass:"video__details mt-3"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container__row"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t.videoDetails&&t.videoDetails.player&&t.videoDetails.player.embedHtml?i("div",{domProps:{innerHTML:t._s(t.videoDetails.player.embedHtml)}}):t._e()])]),i("div",{staticClass:"container__row"},[i("div",{staticClass:"video__details--container w-100 border__bottom"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},[i("div",{staticClass:"video__details--title"},[t.videoDetails&&t.videoDetails.snippet&&t.videoDetails.snippet.title?i("h2",[t._v(t._s(t.videoDetails.snippet.title))]):t._e()])]),i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center video__details--info"},[i("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 mr-auto"},[t.videoDetails&&t.videoDetails.player&&t.videoDetails.player.viewCount?i("div",{staticClass:"video__details--views"},[i("p",[t._v(t._s(t.videoDetails.player.viewCount)+" watching now")])]):t._e()]),i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex video__info--items align-items-center"},[i("div",{staticClass:"video__icons--container d-flex align-items-center"},[t.videoDetails&&t.videoDetails.statistics&&t.videoDetails.statistics.dislikeCount?i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-like"}),i("span",[t._v(t._s(t.videoDetails.statistics.dislikeCount))])]):t._e(),t.videoDetails&&t.videoDetails.statistics&&t.videoDetails.statistics.likeCount?i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-dislike"}),i("span",[t._v(t._s(t.videoDetails.statistics.likeCount))])]):t._e(),i("div",{staticClass:"video__info--icon-border"})]),t._m(0),t._m(1),t._m(2)])])]),i("div",{staticClass:"video__details--channel w-100 border__bottom"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center"},[t.videoDetails&&t.videoDetails.snippet&&t.videoDetails.snippet.title?i("div",{staticClass:"video__details--channel-avater"},[t._v(" "+t._s(t.videoDetails.snippet.title.charAt(0))+" ")]):t._e(),i("div",{staticClass:"video__details--channel-info"},[t.videoDetails&&t.videoDetails.snippet&&t.videoDetails.snippet.channelId?i("router-link",{attrs:{to:{path:"/channel/"+t.videoDetails.snippet.channelId}}},[i("h3",[t._v(t._s(t.videoDetails.snippet.channelTitle))])]):t._e(),t.videoDetails&&t.videoDetails.snippet&&t.videoDetails.snippet.publishedAt?i("p",[t._v("published "+t._s(t.videoDetails.snippet.publishedAt))]):t._e()],1)])])])])]),i("div",{staticClass:"videos__list"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container__row"},[i("div",{staticClass:"videos__list--bg w-100"},t._l(t.playlistVideos,(function(t,e){return i("videoItem",{key:e,attrs:{video:t}})})),1)])])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-share"}),t._v(" "),i("span",[t._v("SHARE")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-save-search"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"fas fa-ellipsis-h"})])}],n=i("5454"),o={name:"video-list-details",data:function(){return{id:this.$route.params.id,videoDetails:{},playlistVideos:[],firstVideo:{}}},methods:{getVideoDetails:function(){var t=this;Object(n["g"])(this.id).then((function(e){t.videoDetails=e.data.items[0]})).catch((function(t){console.log(t)}))},getPlaylistsVideo:function(){var t=this;Object(n["h"])(this.id).then((function(e){t.firstVideo=e.data.items[0],t.playlistVideos=e.data.items,t.id=t.firstVideo.snippet.resourceId.videoId,t.getVideoDetails()}))}},created:function(){this.getPlaylistsVideo()},watch:{$route:function(t){this.id=t.params.id,window.location.reload(),this.getPlaylistsVideo()}}},l=o,c=i("2877"),r=Object(c["a"])(l,s,a,!1,null,null,null);e["default"]=r.exports},"8e90":function(t,e,i){t.exports=i.p+"img/filter.e279154a.svg"},"9ff3":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("headerItem"),i("section",{staticClass:"video__details mt-3"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container__row"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},[t.videoDetails&&t.videoDetails.player&&t.videoDetails.player.embedHtml?i("div",{domProps:{innerHTML:t._s(t.videoDetails.player.embedHtml)}}):t._e()])]),i("div",{staticClass:"container__row"},[i("div",{staticClass:"video__details--container w-100 border__bottom"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"},[i("div",{staticClass:"video__details--title"},[i("h2",[t._v(t._s(t.videoDetails.snippet.title))])])]),i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center video__details--info"},[i("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 mr-auto"},[t.videoDetails&&t.videoDetails.player&&t.videoDetails.player.viewCount?i("div",{staticClass:"video__details--views"},[i("p",[t._v(t._s(t.videoDetails.player.viewCount)+" watching now")])]):t._e()]),i("div",{staticClass:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex video__info--items align-items-center"},[i("div",{staticClass:"video__icons--container d-flex align-items-center"},[t.videoDetails&&t.videoDetails.statistics&&t.videoDetails.statistics.dislikeCount?i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-like"}),i("span",[t._v(t._s(t.videoDetails.statistics.dislikeCount))])]):t._e(),t.videoDetails&&t.videoDetails.statistics&&t.videoDetails.statistics.likeCount?i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-dislike"}),i("span",[t._v(t._s(t.videoDetails.statistics.likeCount))])]):t._e(),i("div",{staticClass:"video__info--icon-border"})]),t._m(0),t._m(1),t._m(2)])])]),i("div",{staticClass:"video__details--channel w-100 border__bottom"},[i("div",{staticClass:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex align-items-center"},[t.videoDetails.snippet.title?i("div",{staticClass:"video__details--channel-avater"},[t._v(" "+t._s(t.videoDetails.snippet.title.charAt(0))+" ")]):t._e(),i("div",{staticClass:"video__details--channel-info"},[i("router-link",{attrs:{to:{path:"/channel/"+t.videoDetails.snippet.channelId}}},[i("h3",[t._v(t._s(t.videoDetails.snippet.channelTitle))])]),i("p",[t._v("published "+t._s(t.videoDetails.snippet.publishedAt))])],1)])])])])]),i("section",{staticClass:"videos__list"},[i("div",{staticClass:"container"},[i("div",{staticClass:"container__row"},[i("div",{staticClass:"videos__list--bg w-100"},t._l(t.relatedVidoesIDs.length>0?t.relatedVidoesIDs:t.playlistVideos,(function(t){return i("videoItem",{key:t.etag,attrs:{video:t}})})),1)])])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-share"}),t._v(" "),i("span",[t._v("SHARE")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"icon icon-save-search"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"btn video__info--icon",attrs:{type:"button"}},[i("i",{staticClass:"fas fa-ellipsis-h"})])}],n=i("5454"),o=i("56d7"),l={name:"video-details",data:function(){return{id:this.$route.params.id,videoDetails:{},relatedVidoesIDs:[],playlistVideos:[],firstVideo:{}}},methods:{getVideoDetails:function(){var t=this;Object(n["g"])(this.id).then((function(e){t.videoDetails=e.data.items[0],t.getRelatedVideos()})).catch((function(t){console.log(t)}))},getPlaylistsVideo:function(){var t=this;Object(n["h"])(this.id).then((function(e){t.firstVideo=e.data.items[0],t.playlistVideos=e.data.items,t.id=t.firstVideo.snippet.resourceId.videoId,t.getVideoDetails()}))},getRelatedVideos:function(){var t=this;Object(n["d"])(this.id).then((function(e){t.relatedVidoesIDs=e.data.items})).catch((function(t){console.log(t)}))},update:function(){}},created:function(){var t=this;this.getVideoDetails(),o["bus"].$on("getQuery",(function(e){t.term=e}))},watch:{$route:function(t){this.id=t.params.id,this.getVideoDetails()}}},c=l,r=i("2877"),d=Object(r["a"])(c,s,a,!1,null,null,null);e["default"]=d.exports},afbc:function(t,e,i){"use strict";i("3506")},c428:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("div",{staticClass:"loading"},[t._v(" Loading...... ")]):t._e()},a=[],n={name:"loading",data:function(){return{}},props:["loading"]},o=n,l=(i("afbc"),i("2877")),c=Object(l["a"])(o,s,a,!1,null,"5cb66a28",null);e["default"]=c.exports},f7fc:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"videos__list--item d-flex flex-wrap "},[t.video.id&&"youtube#video"==t.video.id.kind?i("router-link",{attrs:{to:{path:"/video/"+t.video.id.videoId}}},[i("div",{staticClass:"videos__list--item-image"},[i("img",{attrs:{src:t.video.snippet.thumbnails.medium.url,alt:""}}),i("span",[t._v("10:2")])])]):t.video.id&&"youtube#channel"==t.video.id.kind||t.video.id&&"youtube#playlist"==t.video.kind?i("router-link",{attrs:{to:{path:"youtube#playlist"==t.video.kind?"/video/list/"+t.video.id:"/channel/"+t.video.id.channelId}}},[i("div",{staticClass:"videos__list--item-image"},[i("img",{attrs:{src:t.video.snippet.thumbnails.medium.url,alt:""}}),i("span",[t._v("10:2")]),t.video&&t.video.id&&"youtube#playlist"==t.video.kind?i("div",{staticClass:"videos__list--playlist"},[i("div",{staticClass:"video__playlist--count"},[t._v(" "+t._s(t.video.contentDetails.itemCount)+" ")]),i("div",{staticClass:"videos__playlist--icon"},[i("i",{staticClass:"icon icon-video-list"})])]):t._e()])]):t.video.id&&"youtube#playlistItem"==t.video.kind?i("router-link",{attrs:{to:{path:"/video/list/"+t.video.snippet.resourceId.videoId}}},[i("div",{staticClass:"videos__list--item-image"},[i("img",{attrs:{src:t.video.snippet.thumbnails.medium.url,alt:""}}),i("span",[t._v("10:2")])])]):t._e(),i("div",{staticClass:"videos__list--item-detail"},[t.video.id&&"youtube#video"==t.video.id.kind?i("router-link",{attrs:{to:{path:"/video/"+t.video.id.videoId}}},[t.video&&t.video.snippet&&t.video.snippet.title?i("h3",{staticClass:"videos__list--item-title"},[t._v(" "+t._s(t.video.snippet.title)+" ")]):t._e()]):t.video.id&&"youtube#channel"==t.video.id.kind||t.video.id&&"youtube#playlist"==t.video.kind?i("router-link",{attrs:{to:{path:"/channel/"+t.video.snippet.channelId}}},[i("h3",{staticClass:"videos__list--item-title"},[t._v(" "+t._s(t.video.snippet.title)+" ")])]):t._e(),t.video&&t.video.snippet?i("router-link",{attrs:{to:{path:"/channel/"+t.video.snippet.channelId}}},[i("p",{staticClass:"videos__list--item-channel"},[t._v(" "+t._s(t.video.snippet.channelTitle)+" ")]),i("span",[t._v(" 1500 views ")])]):t._e()],1)],1)},a=[],n={name:"video-item",props:["video"],mounted:function(){}},o=n,l=i("2877"),c=Object(l["a"])(o,s,a,!1,null,null,null);e["default"]=c.exports}});
//# sourceMappingURL=app.f109d8b5.js.map