import{S as e,i as t,s as a,e as n,t as r,c as o,b as i,d as s,g as l,h as c,j as u,k as d,l as h,a as f,q as g,f as m,n as p,m as T,o as v,p as A,r as S,u as w,H as y}from"./client.19b6d283.js";var C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var E=function(e,t,a){return e(a={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&a.path)}},a.exports),a.exports}((function(e){var t,a;t=C,a=function(){var e=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]+t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]+t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]+t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]+t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]},t=function(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var a=[0,0,0,0];return a[3]+=e[3]*t[3],a[2]+=a[3]>>>16,a[3]&=65535,a[2]+=e[2]*t[3],a[1]+=a[2]>>>16,a[2]&=65535,a[2]+=e[3]*t[2],a[1]+=a[2]>>>16,a[2]&=65535,a[1]+=e[1]*t[3],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[2]*t[2],a[0]+=a[1]>>>16,a[1]&=65535,a[1]+=e[3]*t[1],a[0]+=a[1]>>>16,a[1]&=65535,a[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],a[0]&=65535,[a[0]<<16|a[1],a[2]<<16|a[3]]},a=function(e,t){return 32==(t%=64)?[e[1],e[0]]:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])},n=function(e,t){return 0==(t%=64)?e:t<32?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]},r=function(e,t){return[e[0]^t[0],e[1]^t[1]]},o=function(e){return e=r(e,[0,e[0]>>>1]),e=t(e,[4283543511,3981806797]),e=r(e,[0,e[0]>>>1]),e=t(e,[3301882366,444984403]),e=r(e,[0,e[0]>>>1])},i=function(i,s){s=s||0;for(var l=(i=i||"").length%16,c=i.length-l,u=[0,s],d=[0,s],h=[0,0],f=[0,0],g=[2277735313,289559509],m=[1291169091,658871167],p=0;p<c;p+=16)h=[255&i.charCodeAt(p+4)|(255&i.charCodeAt(p+5))<<8|(255&i.charCodeAt(p+6))<<16|(255&i.charCodeAt(p+7))<<24,255&i.charCodeAt(p)|(255&i.charCodeAt(p+1))<<8|(255&i.charCodeAt(p+2))<<16|(255&i.charCodeAt(p+3))<<24],f=[255&i.charCodeAt(p+12)|(255&i.charCodeAt(p+13))<<8|(255&i.charCodeAt(p+14))<<16|(255&i.charCodeAt(p+15))<<24,255&i.charCodeAt(p+8)|(255&i.charCodeAt(p+9))<<8|(255&i.charCodeAt(p+10))<<16|(255&i.charCodeAt(p+11))<<24],h=t(h,g),h=a(h,31),h=t(h,m),u=r(u,h),u=a(u,27),u=e(u,d),u=e(t(u,[0,5]),[0,1390208809]),f=t(f,m),f=a(f,33),f=t(f,g),d=r(d,f),d=a(d,31),d=e(d,u),d=e(t(d,[0,5]),[0,944331445]);switch(h=[0,0],f=[0,0],l){case 15:f=r(f,n([0,i.charCodeAt(p+14)],48));case 14:f=r(f,n([0,i.charCodeAt(p+13)],40));case 13:f=r(f,n([0,i.charCodeAt(p+12)],32));case 12:f=r(f,n([0,i.charCodeAt(p+11)],24));case 11:f=r(f,n([0,i.charCodeAt(p+10)],16));case 10:f=r(f,n([0,i.charCodeAt(p+9)],8));case 9:f=r(f,[0,i.charCodeAt(p+8)]),f=t(f,m),f=a(f,33),f=t(f,g),d=r(d,f);case 8:h=r(h,n([0,i.charCodeAt(p+7)],56));case 7:h=r(h,n([0,i.charCodeAt(p+6)],48));case 6:h=r(h,n([0,i.charCodeAt(p+5)],40));case 5:h=r(h,n([0,i.charCodeAt(p+4)],32));case 4:h=r(h,n([0,i.charCodeAt(p+3)],24));case 3:h=r(h,n([0,i.charCodeAt(p+2)],16));case 2:h=r(h,n([0,i.charCodeAt(p+1)],8));case 1:h=r(h,[0,i.charCodeAt(p)]),h=t(h,g),h=a(h,31),h=t(h,m),u=r(u,h)}return u=r(u,[0,i.length]),d=r(d,[0,i.length]),u=e(u,d),d=e(d,u),u=o(u),d=o(d),u=e(u,d),d=e(d,u),("00000000"+(u[0]>>>0).toString(16)).slice(-8)+("00000000"+(u[1]>>>0).toString(16)).slice(-8)+("00000000"+(d[0]>>>0).toString(16)).slice(-8)+("00000000"+(d[1]>>>0).toString(16)).slice(-8)},s={preprocessor:null,audio:{timeout:1e3,excludeIOS11:!0},fonts:{swfContainerId:"fingerprintjs2",swfPath:"flash/compiled/FontList.swf",userDefinedFonts:[],extendedJsFonts:!1},screen:{detectScreenOrientation:!0},plugins:{sortPluginsFor:[/palemoon/i],excludeIE:!1},extraComponents:[],excludes:{enumerateDevices:!0,pixelRatio:!0,doNotTrack:!0,fontsFlash:!0},NOT_AVAILABLE:"not available",ERROR:"error",EXCLUDED:"excluded"},l=function(e,t){if(Array.prototype.forEach&&e.forEach===Array.prototype.forEach)e.forEach(t);else if(e.length===+e.length)for(var a=0,n=e.length;a<n;a++)t(e[a],a,e);else for(var r in e)e.hasOwnProperty(r)&&t(e[r],r,e)},c=function(e,t){var a=[];return null==e?a:Array.prototype.map&&e.map===Array.prototype.map?e.map(t):(l(e,(function(e,n,r){a.push(t(e,n,r))})),a)},u=function(){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices},d=function(e){var t=[window.screen.width,window.screen.height];return e.screen.detectScreenOrientation&&t.sort().reverse(),t},h=function(e){if(window.screen.availWidth&&window.screen.availHeight){var t=[window.screen.availHeight,window.screen.availWidth];return e.screen.detectScreenOrientation&&t.sort().reverse(),t}return e.NOT_AVAILABLE},f=function(e){if(null==navigator.plugins)return e.NOT_AVAILABLE;for(var t=[],a=0,n=navigator.plugins.length;a<n;a++)navigator.plugins[a]&&t.push(navigator.plugins[a]);return m(e)&&(t=t.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))),c(t,(function(e){var t=c(e,(function(e){return[e.type,e.suffixes]}));return[e.name,e.description,t]}))},g=function(e){var t=[];return Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window?t=c(["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"],(function(t){try{return new window.ActiveXObject(t),t}catch(t){return e.ERROR}})):t.push(e.NOT_AVAILABLE),navigator.plugins&&(t=t.concat(f(e))),t},m=function(e){for(var t=!1,a=0,n=e.plugins.sortPluginsFor.length;a<n;a++){var r=e.plugins.sortPluginsFor[a];if(navigator.userAgent.match(r)){t=!0;break}}return t},p=function(e){try{return!!window.sessionStorage}catch(t){return e.ERROR}},T=function(e){try{return!!window.localStorage}catch(t){return e.ERROR}},v=function(e){try{return!!window.indexedDB}catch(t){return e.ERROR}},A=function(e){return navigator.hardwareConcurrency?navigator.hardwareConcurrency:e.NOT_AVAILABLE},S=function(e){return navigator.cpuClass||e.NOT_AVAILABLE},w=function(e){return navigator.platform?navigator.platform:e.NOT_AVAILABLE},y=function(e){return navigator.doNotTrack?navigator.doNotTrack:navigator.msDoNotTrack?navigator.msDoNotTrack:window.doNotTrack?window.doNotTrack:e.NOT_AVAILABLE},C=function(){var e,t=0;void 0!==navigator.maxTouchPoints?t=navigator.maxTouchPoints:void 0!==navigator.msMaxTouchPoints&&(t=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),e=!0}catch(t){e=!1}return[t,e,"ontouchstart"in window]},E=function(e){var t=[],a=document.createElement("canvas");a.width=2e3,a.height=200,a.style.display="inline";var n=a.getContext("2d");return n.rect(0,0,10,10),n.rect(2,2,6,6),t.push("canvas winding:"+(!1===n.isPointInPath(5,5,"evenodd")?"yes":"no")),n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",e.dontUseFakeFontInCanvas?n.font="11pt Arial":n.font="11pt no-real-font-123",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),n.globalCompositeOperation="multiply",n.fillStyle="rgb(255,0,255)",n.beginPath(),n.arc(50,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(0,255,255)",n.beginPath(),n.arc(100,50,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,255,0)",n.beginPath(),n.arc(75,100,50,0,2*Math.PI,!0),n.closePath(),n.fill(),n.fillStyle="rgb(255,0,255)",n.arc(75,75,75,0,2*Math.PI,!0),n.arc(75,75,25,0,2*Math.PI,!0),n.fill("evenodd"),a.toDataURL&&t.push("canvas fp:"+a.toDataURL()),t},B=function(){var e,t=function(t){return e.clearColor(0,0,0,1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),"["+t[0]+", "+t[1]+"]"};if(!(e=G()))return null;var a=[],n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);var r=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),n.itemSize=3,n.numItems=3;var o=e.createProgram(),i=e.createShader(e.VERTEX_SHADER);e.shaderSource(i,"attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"),e.compileShader(i);var s=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(s,"precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"),e.compileShader(s),e.attachShader(o,i),e.attachShader(o,s),e.linkProgram(o),e.useProgram(o),o.vertexPosAttrib=e.getAttribLocation(o,"attrVertex"),o.offsetUniform=e.getUniformLocation(o,"uniformOffset"),e.enableVertexAttribArray(o.vertexPosArray),e.vertexAttribPointer(o.vertexPosAttrib,n.itemSize,e.FLOAT,!1,0,0),e.uniform2f(o.offsetUniform,1,1),e.drawArrays(e.TRIANGLE_STRIP,0,n.numItems);try{a.push(e.canvas.toDataURL())}catch(e){}a.push("extensions:"+(e.getSupportedExtensions()||[]).join(";")),a.push("webgl aliased line width range:"+t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+e.getParameter(e.ALPHA_BITS)),a.push("webgl antialiasing:"+(e.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+e.getParameter(e.BLUE_BITS)),a.push("webgl depth bits:"+e.getParameter(e.DEPTH_BITS)),a.push("webgl green bits:"+e.getParameter(e.GREEN_BITS)),a.push("webgl max anisotropy:"+function(e){var t=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");if(t){var a=e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);return 0===a&&(a=2),a}return null}(e)),a.push("webgl max combined texture image units:"+e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+e.getParameter(e.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+e.getParameter(e.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+e.getParameter(e.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+e.getParameter(e.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+t(e.getParameter(e.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+e.getParameter(e.RED_BITS)),a.push("webgl renderer:"+e.getParameter(e.RENDERER)),a.push("webgl shading language version:"+e.getParameter(e.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+e.getParameter(e.STENCIL_BITS)),a.push("webgl vendor:"+e.getParameter(e.VENDOR)),a.push("webgl version:"+e.getParameter(e.VERSION));try{var c=e.getExtension("WEBGL_debug_renderer_info");c&&(a.push("webgl unmasked vendor:"+e.getParameter(c.UNMASKED_VENDOR_WEBGL)),a.push("webgl unmasked renderer:"+e.getParameter(c.UNMASKED_RENDERER_WEBGL)))}catch(e){}return e.getShaderPrecisionFormat?(l(["FLOAT","INT"],(function(t){l(["VERTEX","FRAGMENT"],(function(n){l(["HIGH","MEDIUM","LOW"],(function(r){l(["precision","rangeMin","rangeMax"],(function(o){var i=e.getShaderPrecisionFormat(e[n+"_SHADER"],e[r+"_"+t])[o];"precision"!==o&&(o="precision "+o);var s=["webgl ",n.toLowerCase()," shader ",r.toLowerCase()," ",t.toLowerCase()," ",o,":",i].join("");a.push(s)}))}))}))})),a):a},b=function(){try{var e=G(),t=e.getExtension("WEBGL_debug_renderer_info");return e.getParameter(t.UNMASKED_VENDOR_WEBGL)+"~"+e.getParameter(t.UNMASKED_RENDERER_WEBGL)}catch(e){return null}},x=function(){var e=document.createElement("div");e.innerHTML="&nbsp;",e.className="adsbox";var t=!1;try{document.body.appendChild(e),t=0===document.getElementsByClassName("adsbox")[0].offsetHeight,document.body.removeChild(e)}catch(e){t=!1}return t},M=function(){if(void 0!==navigator.languages)try{if(navigator.languages[0].substr(0,2)!==navigator.language.substr(0,2))return!0}catch(e){return!0}return!1},O=function(){return window.screen.width<window.screen.availWidth||window.screen.height<window.screen.availHeight},P=function(){var e,t=navigator.userAgent.toLowerCase(),a=navigator.oscpu,n=navigator.platform.toLowerCase();if(e=t.indexOf("windows phone")>=0?"Windows Phone":t.indexOf("win")>=0?"Windows":t.indexOf("android")>=0?"Android":t.indexOf("linux")>=0||t.indexOf("cros")>=0?"Linux":t.indexOf("iphone")>=0||t.indexOf("ipad")>=0?"iOS":t.indexOf("mac")>=0?"Mac":"Other",("ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)&&"Windows Phone"!==e&&"Android"!==e&&"iOS"!==e&&"Other"!==e)return!0;if(void 0!==a){if((a=a.toLowerCase()).indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e)return!0;if(a.indexOf("linux")>=0&&"Linux"!==e&&"Android"!==e)return!0;if(a.indexOf("mac")>=0&&"Mac"!==e&&"iOS"!==e)return!0;if((-1===a.indexOf("win")&&-1===a.indexOf("linux")&&-1===a.indexOf("mac"))!=("Other"===e))return!0}return n.indexOf("win")>=0&&"Windows"!==e&&"Windows Phone"!==e||(n.indexOf("linux")>=0||n.indexOf("android")>=0||n.indexOf("pike")>=0)&&"Linux"!==e&&"Android"!==e||(n.indexOf("mac")>=0||n.indexOf("ipad")>=0||n.indexOf("ipod")>=0||n.indexOf("iphone")>=0)&&"Mac"!==e&&"iOS"!==e||(n.indexOf("win")<0&&n.indexOf("linux")<0&&n.indexOf("mac")<0&&n.indexOf("iphone")<0&&n.indexOf("ipad")<0)!=("Other"===e)||void 0===navigator.plugins&&"Windows"!==e&&"Windows Phone"!==e},D=function(){var e,t=navigator.userAgent.toLowerCase(),a=navigator.productSub;if(("Chrome"==(e=t.indexOf("firefox")>=0?"Firefox":t.indexOf("opera")>=0||t.indexOf("opr")>=0?"Opera":t.indexOf("chrome")>=0?"Chrome":t.indexOf("safari")>=0?"Safari":t.indexOf("trident")>=0?"Internet Explorer":"Other")||"Safari"===e||"Opera"===e)&&"20030107"!==a)return!0;var n,r=eval.toString().length;if(37===r&&"Safari"!==e&&"Firefox"!==e&&"Other"!==e)return!0;if(39===r&&"Internet Explorer"!==e&&"Other"!==e)return!0;if(33===r&&"Chrome"!==e&&"Opera"!==e&&"Other"!==e)return!0;try{throw"a"}catch(e){try{e.toSource(),n=!0}catch(e){n=!1}}return n&&"Firefox"!==e&&"Other"!==e},k=function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},L=function(){if(!k())return!1;var e=G();return!!window.WebGLRenderingContext&&!!e},I=function(){return"Microsoft Internet Explorer"===navigator.appName||!("Netscape"!==navigator.appName||!/Trident/.test(navigator.userAgent))},R=function(){return void 0!==window.swfobject},N=function(){return window.swfobject.hasFlashPlayerVersion("9.0.0")},_=function(e,t){window.___fp_swf_loaded=function(t){e(t)};var a=t.fonts.swfContainerId;!function(e){var t=document.createElement("div");t.setAttribute("id",e.fonts.swfContainerId),document.body.appendChild(t)}();var n={onReady:"___fp_swf_loaded"};window.swfobject.embedSWF(t.fonts.swfPath,a,"1","1","9.0.0",!1,n,{allowScriptAccess:"always",menu:"false"},{})},G=function(){var e=document.createElement("canvas"),t=null;try{t=e.getContext("webgl")||e.getContext("experimental-webgl")}catch(e){}return t||(t=null),t},F=[{key:"userAgent",getData:function(e){e(navigator.userAgent)}},{key:"webdriver",getData:function(e,t){e(null==navigator.webdriver?t.NOT_AVAILABLE:navigator.webdriver)}},{key:"language",getData:function(e,t){e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||t.NOT_AVAILABLE)}},{key:"colorDepth",getData:function(e,t){e(window.screen.colorDepth||t.NOT_AVAILABLE)}},{key:"deviceMemory",getData:function(e,t){e(navigator.deviceMemory||t.NOT_AVAILABLE)}},{key:"pixelRatio",getData:function(e,t){e(window.devicePixelRatio||t.NOT_AVAILABLE)}},{key:"hardwareConcurrency",getData:function(e,t){e(A(t))}},{key:"screenResolution",getData:function(e,t){e(d(t))}},{key:"availableScreenResolution",getData:function(e,t){e(h(t))}},{key:"timezoneOffset",getData:function(e){e((new Date).getTimezoneOffset())}},{key:"timezone",getData:function(e,t){window.Intl&&window.Intl.DateTimeFormat?e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone):e(t.NOT_AVAILABLE)}},{key:"sessionStorage",getData:function(e,t){e(p(t))}},{key:"localStorage",getData:function(e,t){e(T(t))}},{key:"indexedDb",getData:function(e,t){e(v(t))}},{key:"addBehavior",getData:function(e){e(!(!document.body||!document.body.addBehavior))}},{key:"openDatabase",getData:function(e){e(!!window.openDatabase)}},{key:"cpuClass",getData:function(e,t){e(S(t))}},{key:"platform",getData:function(e,t){e(w(t))}},{key:"doNotTrack",getData:function(e,t){e(y(t))}},{key:"plugins",getData:function(e,t){I()?t.plugins.excludeIE?e(t.EXCLUDED):e(g(t)):e(f(t))}},{key:"canvas",getData:function(e,t){k()?e(E(t)):e(t.NOT_AVAILABLE)}},{key:"webgl",getData:function(e,t){L()?e(B()):e(t.NOT_AVAILABLE)}},{key:"webglVendorAndRenderer",getData:function(e){L()?e(b()):e()}},{key:"adBlock",getData:function(e){e(x())}},{key:"hasLiedLanguages",getData:function(e){e(M())}},{key:"hasLiedResolution",getData:function(e){e(O())}},{key:"hasLiedOs",getData:function(e){e(P())}},{key:"hasLiedBrowser",getData:function(e){e(D())}},{key:"touchSupport",getData:function(e){e(C())}},{key:"fonts",getData:function(e,t){var a=["monospace","sans-serif","serif"],n=["Andale Mono","Arial","Arial Black","Arial Hebrew","Arial MT","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Bitstream Vera Sans Mono","Book Antiqua","Bookman Old Style","Calibri","Cambria","Cambria Math","Century","Century Gothic","Century Schoolbook","Comic Sans","Comic Sans MS","Consolas","Courier","Courier New","Geneva","Georgia","Helvetica","Helvetica Neue","Impact","Lucida Bright","Lucida Calligraphy","Lucida Console","Lucida Fax","LUCIDA GRANDE","Lucida Handwriting","Lucida Sans","Lucida Sans Typewriter","Lucida Sans Unicode","Microsoft Sans Serif","Monaco","Monotype Corsiva","MS Gothic","MS Outlook","MS PGothic","MS Reference Sans Serif","MS Sans Serif","MS Serif","MYRIAD","MYRIAD PRO","Palatino","Palatino Linotype","Segoe Print","Segoe Script","Segoe UI","Segoe UI Light","Segoe UI Semibold","Segoe UI Symbol","Tahoma","Times","Times New Roman","Times New Roman PS","Trebuchet MS","Verdana","Wingdings","Wingdings 2","Wingdings 3"];t.fonts.extendedJsFonts&&(n=n.concat(["Abadi MT Condensed Light","Academy Engraved LET","ADOBE CASLON PRO","Adobe Garamond","ADOBE GARAMOND PRO","Agency FB","Aharoni","Albertus Extra Bold","Albertus Medium","Algerian","Amazone BT","American Typewriter","American Typewriter Condensed","AmerType Md BT","Andalus","Angsana New","AngsanaUPC","Antique Olive","Aparajita","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arabic Typesetting","ARCHER","ARNO PRO","Arrus BT","Aurora Cn BT","AvantGarde Bk BT","AvantGarde Md BT","AVENIR","Ayuthaya","Bandy","Bangla Sangam MN","Bank Gothic","BankGothic Md BT","Baskerville","Baskerville Old Face","Batang","BatangChe","Bauer Bodoni","Bauhaus 93","Bazooka","Bell MT","Bembo","Benguiat Bk BT","Berlin Sans FB","Berlin Sans FB Demi","Bernard MT Condensed","BernhardFashion BT","BernhardMod BT","Big Caslon","BinnerD","Blackadder ITC","BlairMdITC TT","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bodoni MT","Bodoni MT Black","Bodoni MT Condensed","Bodoni MT Poster Compressed","Bookshelf Symbol 7","Boulder","Bradley Hand","Bradley Hand ITC","Bremen Bd BT","Britannic Bold","Broadway","Browallia New","BrowalliaUPC","Brush Script MT","Californian FB","Calisto MT","Calligrapher","Candara","CaslonOpnface BT","Castellar","Centaur","Cezanne","CG Omega","CG Times","Chalkboard","Chalkboard SE","Chalkduster","Charlesworth","Charter Bd BT","Charter BT","Chaucer","ChelthmITC Bk BT","Chiller","Clarendon","Clarendon Condensed","CloisterBlack BT","Cochin","Colonna MT","Constantia","Cooper Black","Copperplate","Copperplate Gothic","Copperplate Gothic Bold","Copperplate Gothic Light","CopperplGoth Bd BT","Corbel","Cordia New","CordiaUPC","Cornerstone","Coronet","Cuckoo","Curlz MT","DaunPenh","Dauphin","David","DB LCD Temp","DELICIOUS","Denmark","DFKai-SB","Didot","DilleniaUPC","DIN","DokChampa","Dotum","DotumChe","Ebrima","Edwardian Script ITC","Elephant","English 111 Vivace BT","Engravers MT","EngraversGothic BT","Eras Bold ITC","Eras Demi ITC","Eras Light ITC","Eras Medium ITC","EucrosiaUPC","Euphemia","Euphemia UCAS","EUROSTILE","Exotc350 Bd BT","FangSong","Felix Titling","Fixedsys","FONTIN","Footlight MT Light","Forte","FrankRuehl","Fransiscan","Freefrm721 Blk BT","FreesiaUPC","Freestyle Script","French Script MT","FrnkGothITC Bk BT","Fruitger","FRUTIGER","Futura","Futura Bk BT","Futura Lt BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Gabriola","Galliard BT","Gautami","Geeza Pro","Geometr231 BT","Geometr231 Hv BT","Geometr231 Lt BT","GeoSlab 703 Lt BT","GeoSlab 703 XBd BT","Gigi","Gill Sans","Gill Sans MT","Gill Sans MT Condensed","Gill Sans MT Ext Condensed Bold","Gill Sans Ultra Bold","Gill Sans Ultra Bold Condensed","Gisha","Gloucester MT Extra Condensed","GOTHAM","GOTHAM BOLD","Goudy Old Style","Goudy Stout","GoudyHandtooled BT","GoudyOLSt BT","Gujarati Sangam MN","Gulim","GulimChe","Gungsuh","GungsuhChe","Gurmukhi MN","Haettenschweiler","Harlow Solid Italic","Harrington","Heather","Heiti SC","Heiti TC","HELV","Herald","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hoefler Text","Humanst 521 Cn BT","Humanst521 BT","Humanst521 Lt BT","Imprint MT Shadow","Incised901 Bd BT","Incised901 BT","Incised901 Lt BT","INCONSOLATA","Informal Roman","Informal011 BT","INTERSTATE","IrisUPC","Iskoola Pota","JasmineUPC","Jazz LET","Jenson","Jester","Jokerman","Juice ITC","Kabel Bk BT","Kabel Ult BT","Kailasa","KaiTi","Kalinga","Kannada Sangam MN","Kartika","Kaufmann Bd BT","Kaufmann BT","Khmer UI","KodchiangUPC","Kokila","Korinna BT","Kristen ITC","Krungthep","Kunstler Script","Lao UI","Latha","Leelawadee","Letter Gothic","Levenim MT","LilyUPC","Lithograph","Lithograph Light","Long Island","Lydian BT","Magneto","Maiandra GD","Malayalam Sangam MN","Malgun Gothic","Mangal","Marigold","Marion","Marker Felt","Market","Marlett","Matisse ITC","Matura MT Script Capitals","Meiryo","Meiryo UI","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Tai Le","Microsoft Uighur","Microsoft YaHei","Microsoft Yi Baiti","MingLiU","MingLiU_HKSCS","MingLiU_HKSCS-ExtB","MingLiU-ExtB","Minion","Minion Pro","Miriam","Miriam Fixed","Mistral","Modern","Modern No. 20","Mona Lisa Solid ITC TT","Mongolian Baiti","MONO","MoolBoran","Mrs Eaves","MS LineDraw","MS Mincho","MS PMincho","MS Reference Specialty","MS UI Gothic","MT Extra","MUSEO","MV Boli","Nadeem","Narkisim","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Niagara Engraved","Niagara Solid","Noteworthy","NSimSun","Nyala","OCR A Extended","Old Century","Old English Text MT","Onyx","Onyx BT","OPTIMA","Oriya Sangam MN","OSAKA","OzHandicraft BT","Palace Script MT","Papyrus","Parchment","Party LET","Pegasus","Perpetua","Perpetua Titling MT","PetitaBold","Pickwick","Plantagenet Cherokee","Playbill","PMingLiU","PMingLiU-ExtB","Poor Richard","Poster","PosterBodoni BT","PRINCETOWN LET","Pristina","PTBarnum BT","Pythagoras","Raavi","Rage Italic","Ravie","Ribbon131 Bd BT","Rockwell","Rockwell Condensed","Rockwell Extra Bold","Rod","Roman","Sakkal Majalla","Santa Fe LET","Savoye LET","Sceptre","Script","Script MT Bold","SCRIPTINA","Serifa","Serifa BT","Serifa Th BT","ShelleyVolante BT","Sherwood","Shonar Bangla","Showcard Gothic","Shruti","Signboard","SILKSCREEN","SimHei","Simplified Arabic","Simplified Arabic Fixed","SimSun","SimSun-ExtB","Sinhala Sangam MN","Sketch Rockwell","Skia","Small Fonts","Snap ITC","Snell Roundhand","Socket","Souvenir Lt BT","Staccato222 BT","Steamer","Stencil","Storybook","Styllo","Subway","Swis721 BlkEx BT","Swiss911 XCm BT","Sylfaen","Synchro LET","System","Tamil Sangam MN","Technical","Teletype","Telugu Sangam MN","Tempus Sans ITC","Terminal","Thonburi","Traditional Arabic","Trajan","TRAJAN PRO","Tristan","Tubular","Tunga","Tw Cen MT","Tw Cen MT Condensed","Tw Cen MT Condensed Extra Bold","TypoUpright BT","Unicorn","Univers","Univers CE 55 Medium","Univers Condensed","Utsaah","Vagabond","Vani","Vijaya","Viner Hand ITC","VisualUI","Vivaldi","Vladimir Script","Vrinda","Westminster","WHITNEY","Wide Latin","ZapfEllipt BT","ZapfHumnst BT","ZapfHumnst Dm BT","Zapfino","Zurich BlkEx BT","Zurich Ex BT","ZWAdobeF"])),n=(n=n.concat(t.fonts.userDefinedFonts)).filter((function(e,t){return n.indexOf(e)===t}));var r=document.getElementsByTagName("body")[0],o=document.createElement("div"),i=document.createElement("div"),s={},l={},c=function(){var e=document.createElement("span");return e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="72px",e.style.fontStyle="normal",e.style.fontWeight="normal",e.style.letterSpacing="normal",e.style.lineBreak="auto",e.style.lineHeight="normal",e.style.textTransform="none",e.style.textAlign="left",e.style.textDecoration="none",e.style.textShadow="none",e.style.whiteSpace="normal",e.style.wordBreak="normal",e.style.wordSpacing="normal",e.innerHTML="mmmmmmmmmmlli",e},u=function(e,t){var a=c();return a.style.fontFamily="'"+e+"',"+t,a},d=function(e){for(var t=!1,n=0;n<a.length;n++)if(t=e[n].offsetWidth!==s[a[n]]||e[n].offsetHeight!==l[a[n]])return t;return t},h=function(){for(var e=[],t=0,n=a.length;t<n;t++){var r=c();r.style.fontFamily=a[t],o.appendChild(r),e.push(r)}return e}();r.appendChild(o);for(var f=0,g=a.length;f<g;f++)s[a[f]]=h[f].offsetWidth,l[a[f]]=h[f].offsetHeight;var m=function(){for(var e={},t=0,r=n.length;t<r;t++){for(var o=[],s=0,l=a.length;s<l;s++){var c=u(n[t],a[s]);i.appendChild(c),o.push(c)}e[n[t]]=o}return e}();r.appendChild(i);for(var p=[],T=0,v=n.length;T<v;T++)d(m[n[T]])&&p.push(n[T]);r.removeChild(i),r.removeChild(o),e(p)},pauseBefore:!0},{key:"fontsFlash",getData:function(e,t){return R()?N()?t.fonts.swfPath?void _((function(t){e(t)}),t):e("missing options.fonts.swfPath"):e("flash not installed"):e("swf object not loaded")},pauseBefore:!0},{key:"audio",getData:function(e,t){var a=t.audio;if(a.excludeIOS11&&navigator.userAgent.match(/OS 11.+Version\/11.+Safari/))return e(t.EXCLUDED);var n=window.OfflineAudioContext||window.webkitOfflineAudioContext;if(null==n)return e(t.NOT_AVAILABLE);var r=new n(1,44100,44100),o=r.createOscillator();o.type="triangle",o.frequency.setValueAtTime(1e4,r.currentTime);var i=r.createDynamicsCompressor();l([["threshold",-50],["knee",40],["ratio",12],["reduction",-20],["attack",0],["release",.25]],(function(e){void 0!==i[e[0]]&&"function"==typeof i[e[0]].setValueAtTime&&i[e[0]].setValueAtTime(e[1],r.currentTime)})),o.connect(i),i.connect(r.destination),o.start(0),r.startRendering();var s=setTimeout((function(){return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "'+navigator.userAgent+'".'),r.oncomplete=function(){},r=null,e("audioTimeout")}),a.timeout);r.oncomplete=function(t){var a;try{clearTimeout(s),a=t.renderedBuffer.getChannelData(0).slice(4500,5e3).reduce((function(e,t){return e+Math.abs(t)}),0).toString(),o.disconnect(),i.disconnect()}catch(t){return void e(t)}e(a)}}},{key:"enumerateDevices",getData:function(e,t){if(!u())return e(t.NOT_AVAILABLE);navigator.mediaDevices.enumerateDevices().then((function(t){e(t.map((function(e){return"id="+e.deviceId+";gid="+e.groupId+";"+e.kind+";"+e.label})))})).catch((function(t){e(t)}))}}],U=function(e){throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")};return U.get=function(e,t){t?e||(e={}):(t=e,e={}),function(e,t){if(null==t)return e;var a,n;for(n in t)null==(a=t[n])||Object.prototype.hasOwnProperty.call(e,n)||(e[n]=a)}(e,s),e.components=e.extraComponents.concat(F);var a={data:[],addPreprocessedComponent:function(t,n){"function"==typeof e.preprocessor&&(n=e.preprocessor(t,n)),a.data.push({key:t,value:n})}},n=-1,r=function(o){if((n+=1)>=e.components.length)t(a.data);else{var i=e.components[n];if(e.excludes[i.key])r(!1);else{if(!o&&i.pauseBefore)return n-=1,void setTimeout((function(){r(!0)}),1);try{i.getData((function(e){a.addPreprocessedComponent(i.key,e),r(!1)}),e)}catch(e){a.addPreprocessedComponent(i.key,String(e)),r(!1)}}}};r(!1)},U.getPromise=function(e){return new Promise((function(t,a){U.get(e,t)}))},U.getV18=function(e,t){return null==t&&(t=e,e={}),U.get(e,(function(a){for(var n=[],r=0;r<a.length;r++){var o=a[r];if(o.value===(e.NOT_AVAILABLE||"not available"))n.push({key:o.key,value:"unknown"});else if("plugins"===o.key)n.push({key:"plugins",value:c(o.value,(function(e){var t=c(e[2],(function(e){return e.join?e.join("~"):e})).join(",");return[e[0],e[1],t].join("::")}))});else if(-1!==["canvas","webgl"].indexOf(o.key))n.push({key:o.key,value:o.value.join("~")});else if(-1!==["sessionStorage","localStorage","indexedDb","addBehavior","openDatabase"].indexOf(o.key)){if(!o.value)continue;n.push({key:o.key,value:1})}else o.value?n.push(o.value.join?{key:o.key,value:o.value.join(";")}:o):n.push({key:o.key,value:o.value})}var s=i(c(n,(function(e){return e.value})).join("~~~"),31);t(s,n)}))},U.x64hash128=i,U.VERSION="2.1.0",U},e.exports?e.exports=a():t.exports?t.exports=a():t.Fingerprint2=a()}));const{document:B}=S;function b(e,t,a){const n=e.slice();return n[8]=t[a],n}function x(e){let t,a,f=e[8]+"";return{c(){t=n("span"),a=r(f),this.h()},l(e){t=o(e,"SPAN",{class:!0});var n=i(t);a=s(n,f),n.forEach(l),this.h()},h(){c(t,"class","label svelte-1hcu46h")},m(e,n){u(e,t,n),d(t,a)},p(e,t){1&t&&f!==(f=e[8]+"")&&h(a,f)},d(e){e&&l(t)}}}function M(e){let t;function a(e,t){return e[2]?P:O}let r=a(e),s=r(e);return{c(){t=n("div"),s.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=i(t);s.l(a),a.forEach(l),this.h()},h(){c(t,"class","clap-here flex cursor-pointer justify-center svelte-1hcu46h")},m(e,a){u(e,t,a),s.m(t,null)},p(e,n){r===(r=a(e))&&s?s.p(e,n):(s.d(1),s=r(e),s&&(s.c(),s.m(t,null)))},d(e){e&&l(t),s.d()}}}function O(e){let t,a,g,p,T,v,A,S=(e[1].data||"")+"";return{c(){t=n("img"),g=f(),p=n("span"),T=r(S),this.h()},l(e){t=o(e,"IMG",{src:!0,class:!0,alt:!0}),g=m(e),p=o(e,"SPAN",{class:!0});var a=i(p);T=s(a,S),a.forEach(l),this.h()},h(){t.src!==(a="clap.png")&&c(t,"src","clap.png"),c(t,"class","w-8 h-8"),c(t,"alt",""),c(p,"class","ml-1")},m(a,n){u(a,t,n),u(a,g,n),u(a,p,n),d(p,T),v||(A=w(t,"click",e[3]),v=!0)},p(e,t){2&t&&S!==(S=(e[1].data||"")+"")&&h(T,S)},d(e){e&&l(t),e&&l(g),e&&l(p),v=!1,A()}}}function P(e){let t,a;return{c(){t=n("span"),a=r("处理中...")},l(e){t=o(e,"SPAN",{});var n=i(t);a=s(n,"处理中..."),n.forEach(l)},m(e,n){u(e,t,n),d(t,a)},p:p,d(e){e&&l(t)}}}function D(e){let t,a,v,A,S,w,C,E,O,P,D,k,L,I,R,N,_,G,F=e[0].fmData.attributes.title+"",U=new Date(e[0].fmData.attributes.date).toLocaleDateString()+"",V=e[0].html+"";B.title=t=e[0].fmData.attributes.title+"-GzhiYi's blog";let H=e[0].fmData.attributes.labels,j=[];for(let t=0;t<H.length;t+=1)j[t]=x(b(e,H,t));let X="data"in e[1]&&M(e);return{c(){a=n("meta"),A=n("meta"),w=f(),C=n("div"),E=n("h1"),O=r(F),P=f(),D=n("p"),k=r(U),L=f();for(let e=0;e<j.length;e+=1)j[e].c();I=f(),N=f(),X&&X.c(),_=f(),G=n("div"),this.h()},l(e){const t=g('[data-svelte="svelte-zeglup"]',B.head);a=o(t,"META",{name:!0,content:!0}),A=o(t,"META",{name:!0,content:!0}),t.forEach(l),w=m(e),C=o(e,"DIV",{class:!0});var n=i(C);E=o(n,"H1",{});var r=i(E);O=s(r,F),r.forEach(l),P=m(n),D=o(n,"P",{class:!0});var c=i(D);k=s(c,U),L=m(c);for(let e=0;e<j.length;e+=1)j[e].l(c);c.forEach(l),I=m(n),n.forEach(l),N=m(e),X&&X.l(e),_=m(e),G=o(e,"DIV",{id:!0,class:!0}),i(G).forEach(l),this.h()},h(){c(a,"name","description"),c(a,"content",v=e[0].fmData.attributes.description||"GzhiYi's blog"),c(A,"name","keywords"),c(A,"content",S=e[0].fmData.attributes.keywords||"GzhiYi's blog"),c(D,"class","desc svelte-1hcu46h"),R=new y(null),c(C,"class","content svelte-1hcu46h"),c(G,"id","vcomments"),c(G,"class","my-8")},m(e,t){d(B.head,a),d(B.head,A),u(e,w,t),u(e,C,t),d(C,E),d(E,O),d(C,P),d(C,D),d(D,k),d(D,L);for(let e=0;e<j.length;e+=1)j[e].m(D,null);d(C,I),R.m(V,C),u(e,N,t),X&&X.m(e,t),u(e,_,t),u(e,G,t)},p(e,[n]){if(1&n&&t!==(t=e[0].fmData.attributes.title+"-GzhiYi's blog")&&(B.title=t),1&n&&v!==(v=e[0].fmData.attributes.description||"GzhiYi's blog")&&c(a,"content",v),1&n&&S!==(S=e[0].fmData.attributes.keywords||"GzhiYi's blog")&&c(A,"content",S),1&n&&F!==(F=e[0].fmData.attributes.title+"")&&h(O,F),1&n&&U!==(U=new Date(e[0].fmData.attributes.date).toLocaleDateString()+"")&&h(k,U),1&n){let t;for(H=e[0].fmData.attributes.labels,t=0;t<H.length;t+=1){const a=b(e,H,t);j[t]?j[t].p(a,n):(j[t]=x(a),j[t].c(),j[t].m(D,null))}for(;t<j.length;t+=1)j[t].d(1);j.length=H.length}1&n&&V!==(V=e[0].html+"")&&R.p(V),"data"in e[1]?X?X.p(e,n):(X=M(e),X.c(),X.m(_.parentNode,_)):X&&(X.d(1),X=null)},i:p,o:p,d(e){l(a),l(A),e&&l(w),e&&l(C),T(j,e),e&&l(N),X&&X.d(e),e&&l(_),e&&l(G)}}}async function k({params:e,query:t}){const a=await this.fetch(`blog/${e.slug}.json`),n=await a.json();if(200===a.status)return{post:n};this.error(a.status,n.message)}function L(e,t,a){let n=null,r="",o={},i=!1;async function s(e){r=e,a(2,i=!0);try{const t=await fetch("https://us-central1-sapper-blog-f8d89.cloudfunctions.net/getLikes",{method:"POST",mode:"cors",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({title:document.title,id:e})});a(1,o=await t.json())}catch(e){console.error("Get like data error",e)}a(2,i=!1)}v(()=>{try{import("./medium-zoom.esm.eccdde9e.js").then(e=>{n=e.default("[data-zoomable]")})}catch(e){console.log("import zoom error",e)}new Valine({el:"#vcomments",appId:"jMRbNJRVqVMPkivFo08DMhO3-gzGzoHsz",appKey:"umugMHpa6HfcC81tB6dl8TiE",placeholder:"欢迎评论留言，我都会看的～",meta:["nick","mail"],path:location.pathname}),window.requestIdleCallback?requestIdleCallback((function(){E.get((function(e){const t=e.map((function(e){return e.value}));s(E.x64hash128(t.join(""),31))}))})):setTimeout((function(){E.get((function(e){const t=e.map((function(e){return e.value}));s(E.x64hash128(t.join(""),31))}))}),500),ah.proxy({onRequest:(e,t)=>{e.url.includes("classes/Comment")&&"POST"===e.method&&(console.log("请求发起前",e.body),fetch(`https://push.techulus.com/api/v1/notify/0429893b-781b-4885-b153-c20b3a5c5049?title=${location.pathname||"文章"}有新回复&body=${e.body.substr(12,30)}`,{method:"POST",mode:"cors",headers:new Headers({"Content-Type":"application/json"})})),t.next(e)},onError:(e,t)=>{t.next(e)},onResponse:(e,t)=>{t.next(e)}})}),A(()=>{n&&n.detach()});let{post:l}=t;return e.$set=e=>{"post"in e&&a(0,l=e.post)},[l,o,i,async function(){a(2,i=!0);const e=await fetch("https://us-central1-sapper-blog-f8d89.cloudfunctions.net/newLike",{method:"POST",mode:"cors",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify({title:document.title,id:r})}),t=await e.json();1===t.code?(alert(t.message),a(2,i=!1)):s()}]}export default class extends e{constructor(e){super(),t(this,e,L,D,a,{post:0})}}export{k as preload};
