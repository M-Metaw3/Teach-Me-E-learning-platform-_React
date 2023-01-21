/*! For license information please see 468.d526db43.chunk.js.LICENSE.txt */
(self.webpackChunkteach_me=self.webpackChunkteach_me||[]).push([[468],{8468:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(1413),a=n(4165),o=n(5861),i=n(885),s=n(1044),l=n(2791),u=n(7689),c=n(5671),d=n(3144),f=n(136),p=n(7277),y=n(2007),h=n(8262),v=n(6071),g=n(184);function m(e,t){var n,r;if(e.videoId!==t.videoId)return!0;var a=(null==(n=e.opts)?void 0:n.playerVars)||{},o=(null==(r=t.opts)?void 0:r.playerVars)||{};return a.start!==o.start||a.end!==o.end}function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.Z)((0,r.Z)({},e),{},{height:0,width:0,playerVars:(0,r.Z)((0,r.Z)({},e.playerVars),{},{autoplay:0,start:0,end:0})})}function b(e,t){return e.videoId!==t.videoId||!h(P(e.opts),P(t.opts))}function w(e,t){var n,r,a,o;return e.id!==t.id||e.className!==t.className||(null==(n=e.opts)?void 0:n.width)!==(null==(r=t.opts)?void 0:r.width)||(null==(a=e.opts)?void 0:a.height)!==(null==(o=t.opts)?void 0:o.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var E={videoId:y.string,id:y.string,className:y.string,iframeClassName:y.string,style:y.object,title:y.string,loading:y.oneOf(["lazy","eager"]),opts:y.objectOf(y.any),onReady:y.func,onError:y.func,onPlay:y.func,onPause:y.func,onEnd:y.func,onStateChange:y.func,onPlaybackRateChange:y.func,onPlaybackQualityChange:y.func},S=function(e){(0,f.Z)(n,e);var t=(0,p.Z)(n);function n(e){var a;return(0,c.Z)(this,n),(a=t.call(this,e)).destroyPlayerPromise=void 0,a.onPlayerReady=function(e){var t,n;return null==(n=(t=a.props).onReady)?void 0:n.call(t,e)},a.onPlayerError=function(e){var t,n;return null==(n=(t=a.props).onError)?void 0:n.call(t,e)},a.onPlayerStateChange=function(e){var t,r,o,i,s,l,u,c;switch(null==(r=(t=a.props).onStateChange)||r.call(t,e),e.data){case n.PlayerState.ENDED:null==(i=(o=a.props).onEnd)||i.call(o,e);break;case n.PlayerState.PLAYING:null==(l=(s=a.props).onPlay)||l.call(s,e);break;case n.PlayerState.PAUSED:null==(c=(u=a.props).onPause)||c.call(u,e)}},a.onPlayerPlaybackRateChange=function(e){var t,n;return null==(n=(t=a.props).onPlaybackRateChange)?void 0:n.call(t,e)},a.onPlayerPlaybackQualityChange=function(e){var t,n;return null==(n=(t=a.props).onPlaybackQualityChange)?void 0:n.call(t,e)},a.destroyPlayer=function(){return a.internalPlayer?(a.destroyPlayerPromise=a.internalPlayer.destroy().then((function(){return a.destroyPlayerPromise=void 0})),a.destroyPlayerPromise):Promise.resolve()},a.createPlayer=function(){if("undefined"!==typeof document)if(a.destroyPlayerPromise)a.destroyPlayerPromise.then(a.createPlayer);else{var e=(0,r.Z)((0,r.Z)({},a.props.opts),{},{videoId:a.props.videoId});a.internalPlayer=v(a.container,e),a.internalPlayer.on("ready",a.onPlayerReady),a.internalPlayer.on("error",a.onPlayerError),a.internalPlayer.on("stateChange",a.onPlayerStateChange),a.internalPlayer.on("playbackRateChange",a.onPlayerPlaybackRateChange),a.internalPlayer.on("playbackQualityChange",a.onPlayerPlaybackQualityChange),(a.props.title||a.props.loading)&&a.internalPlayer.getIframe().then((function(e){a.props.title&&e.setAttribute("title",a.props.title),a.props.loading&&e.setAttribute("loading",a.props.loading)}))}},a.resetPlayer=function(){return a.destroyPlayer().then(a.createPlayer)},a.updatePlayer=function(){var e;null==(e=a.internalPlayer)||e.getIframe().then((function(e){a.props.id?e.setAttribute("id",a.props.id):e.removeAttribute("id"),a.props.iframeClassName?e.setAttribute("class",a.props.iframeClassName):e.removeAttribute("class"),a.props.opts&&a.props.opts.width?e.setAttribute("width",a.props.opts.width.toString()):e.removeAttribute("width"),a.props.opts&&a.props.opts.height?e.setAttribute("height",a.props.opts.height.toString()):e.removeAttribute("height"),a.props.title?e.setAttribute("title",a.props.title):e.setAttribute("title","YouTube video player"),a.props.loading?e.setAttribute("loading",a.props.loading):e.removeAttribute("loading")}))},a.getInternalPlayer=function(){return a.internalPlayer},a.updateVideo=function(){var e,t,n,r;if("undefined"!==typeof a.props.videoId&&null!==a.props.videoId){var o=!1,i={videoId:a.props.videoId};(null==(t=a.props.opts)?void 0:t.playerVars)&&(o=1===a.props.opts.playerVars.autoplay,"start"in a.props.opts.playerVars&&(i.startSeconds=a.props.opts.playerVars.start),"end"in a.props.opts.playerVars&&(i.endSeconds=a.props.opts.playerVars.end)),o?null==(n=a.internalPlayer)||n.loadVideoById(i):null==(r=a.internalPlayer)||r.cueVideoById(i)}else null==(e=a.internalPlayer)||e.stopVideo()},a.refContainer=function(e){a.container=e},a.container=null,a.internalPlayer=null,a}return(0,d.Z)(n,[{key:"componentDidMount",value:function(){this.createPlayer()}},{key:"componentDidUpdate",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(t,this.props)&&this.updatePlayer(),!b(t,this.props)){e.next=4;break}return e.next=4,this.resetPlayer();case 4:m(t,this.props)&&this.updateVideo();case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.destroyPlayer()}},{key:"render",value:function(){return(0,g.jsx)("div",{className:this.props.className,style:this.props.style,children:(0,g.jsx)("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer})})}}]),n}(l.Component),C=S;C.propTypes=E,C.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:function(){},onError:function(){},onPlay:function(){},onPause:function(){},onEnd:function(){},onStateChange:function(){},onPlaybackRateChange:function(){},onPlaybackQualityChange:function(){}},C.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var x=C,A=n(4499),k=n(2788);function N(){var e=(0,l.useContext)(A.R0).userData,t=(0,u.UO)(),n=t.courseId,c=t.vedioID,d=(0,l.useState)(""),f=(0,i.Z)(d,2),p=f[0],y=f[1],h=(0,l.useState)([]),v=(0,i.Z)(h,2),m=v[0],P=v[1],b={},w=(0,u.s0)();(0,l.useEffect)((function(){!function(){var t=(0,o.Z)((0,a.Z)().mark((function t(){var r,o,i,l;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return w("/login"),t.abrupt("return");case 3:return t.next=5,s.ZP.get(k._+"/enrolls?course_id="+n+"&user_id="+e._id);case 5:return r=t.sent,b=r.data[0],t.next=9,s.ZP.get(k._+"/courseContaint?courseID="+n);case 9:if(o=t.sent,P(o.data[0].containt),c)for(i=0;i<o.data[0].containt.length;i++)o.data[0].containt[i].id==c&&(y(o.data[0].containt[i]),E(o.data[0].containt[i].id));else for(l=0;l<o.data[0].containt.length;l++)o.data[0].containt[l].id==b.progress&&(y(o.data[0].containt[l]),E(o.data[0].containt[l].id));case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]);var E=function(e){setTimeout((function(){b.progress<e&&s.ZP.put(k._+"/enrolls/"+b.id,(0,r.Z)((0,r.Z)({},b),{},{progress:e}))}),2e3)};return(0,g.jsxs)("div",{className:"row mx-1",children:[(0,g.jsx)("div",{className:"col-12 col-xl-9",children:(0,g.jsx)(x,{videoId:p.vedioUrl,opts:{height:"560",width:"100%",playerVars:{autoplay:1}}})}),(0,g.jsx)("div",{className:"col-12 col-xl-3",children:(0,g.jsx)("div",{className:"border border-5 p-3",children:m.map((function(e,t){return(0,g.jsxs)("div",{children:[(0,g.jsx)("a",{href:"/watch/".concat(n,"/").concat(e.id),className:e.id==p.id?"tx-primary":"",children:e.title}),t!=m.length-1?(0,g.jsx)("hr",{}):""]},t)}))})})]})}},8262:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,a,o;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(a=r;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(o=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(a=r;0!==a--;)if(!Object.prototype.hasOwnProperty.call(n,o[a]))return!1;for(a=r;0!==a--;){var i=o[a];if(!e(t[i],n[i]))return!1}return!0}return t!==t&&n!==n}},5102:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function n(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,r,a){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof r&&(a=r,r={}),r=r||{},a=a||function(){},i.type=r.type||"text/javascript",i.charset=r.charset||"utf8",i.async=!("async"in r)||!!r.async,i.src=e,r.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,r.attrs),r.text&&(i.text=""+r.text),("onload"in i?t:n)(i,a),i.onload||t(i,a),o.appendChild(i)}},3457:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,a=t[e];if(a)for(r=a.length;r--;)a[r].handler(n)},e},e.exports=t},6364:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(5439),o=(r=a)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[o.default.ENDED,o.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[o.default.ENDED,o.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[o.default.ENDED,o.default.PLAYING,o.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},1698:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(9530)),a=s(n(5506)),o=s(n(626)),i=s(n(6364));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)("youtube-player"),u={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){l('event "%s"',r,t),e.trigger(n,t)}},r=!0,a=!1,i=void 0;try{for(var s,u=o.default[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){n(s.value)}}catch(c){a=!0,i=c}finally{try{!r&&u.return&&u.return()}finally{if(a)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then((function(e){var t=i.default[r],a=e.getPlayerState(),o=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(a)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var a=e.getPlayerState(),o=void 0;"number"===typeof t.timeout&&(o=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(a)&&(e.removeEventListener("onStateChange",r),clearTimeout(o),n())}))})).then((function(){return o})):o}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),a=0;a<t;a++)n[a]=arguments[a];return e.then((function(e){return e[r].apply(e,n)}))}},o=!0,s=!1,l=void 0;try{for(var u,c=a.default[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var d=u.value;r(d)}}catch(f){s=!0,l=f}finally{try{!o&&c.return&&c.return()}finally{if(s)throw l}}return n}};t.default=u,e.exports=t.default},5439:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},626:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},5506:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},6071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=s(n(3457)),o=s(n(1642)),i=s(n(1698));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,a.default)();if(l||(l=(0,o.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(n){"object"===("undefined"===typeof e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):l.then((function(r){var a=new r.Player(e,t);return s.on("ready",(function(){n(a)})),null}))})),c=i.default.promisifyPlayer(u,n);return c.on=s.on,c.off=s.off,c},e.exports=t.default},1642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(5102),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,o.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},9530:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!==typeof process&&"env"in process&&(e={NODE_ENV:"production",PUBLIC_URL:"/e-l-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.DEBUG),e}(t=e.exports=n(3572)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var a=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(a++,"%c"===e&&(o=a))})),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},3572:function(e,t,n){var r;function a(e){function n(){if(n.enabled){var e=n,a=+new Date,o=a-(r||a);e.diff=o,e.prev=r,e.curr=a,r=a;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var a=t.formatters[r];if("function"===typeof a){var o=i[l];n=a.call(e,o),i.splice(l,1),l--}return n})),t.formatArgs.call(e,i);var u=n.log||t.log||console.log.bind(console);u.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"===typeof t.init&&t.init(n),n}(t=e.exports=a.debug=a.default=a).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"===typeof e?e:"").split(/[\s,]+/),r=n.length,a=0;a<r;a++)n[a]&&("-"===(e=n[a].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(9426),t.names=[],t.skips=[],t.formatters={}},9426:function(e){var t=1e3,n=60*t,r=60*n,a=24*r,o=365.25*a;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,s){s=s||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*n;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(l=e,a,"day")||i(l,r,"hour")||i(l,n,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);
//# sourceMappingURL=468.d526db43.chunk.js.map