(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{k652:function(e,t,s){"use strict";s.r(t),s.d(t,"PokemonModule",function(){return G});var r=s("ofXK"),n=s("fXoL"),o=s("LRne"),a=s("HDdC"),i=s("bOdf"),l=s("pLZG"),h=s("lJxs");class p{}class c{}class d{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let s=e[t];const r=t.toLowerCase();"string"==typeof s&&(s=[s]),s.length>0&&(this.headers.set(r,s),this.maybeSetNormalizedName(t,r))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof d?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new d;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof d?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter(e=>-1===n.indexOf(e)),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class u{encodeKey(e){return m(e)}encodeValue(e){return m(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}function m(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}class b{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new u,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(e=>{const r=e.indexOf("="),[n,o]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],a=s.get(n)||[];a.push(o),s.set(n,a)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const s=e.fromObject[t];this.map.set(t,Array.isArray(s)?s:[s])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(s=>{const r=e[s];Array.isArray(r)?r.forEach(e=>{t.push({param:s,value:e,op:"a"})}):t.push({param:s,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(e=>t+"="+this.encoder.encodeValue(e)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new b({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(e.value),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(e.value);-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}function y(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function f(e){return"undefined"!=typeof Blob&&e instanceof Blob}function g(e){return"undefined"!=typeof FormData&&e instanceof FormData}class v{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.params&&(this.params=n.params)),this.headers||(this.headers=new d),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?");this.urlWithParams=t+(-1===s?"?":s<t.length-1?"&":"")+e}}else this.params=new b,this.urlWithParams=t}serializeBody(){return null===this.body?null:y(this.body)||f(this.body)||g(this.body)||"string"==typeof this.body?this.body:this.body instanceof b?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||g(this.body)?null:f(this.body)?this.body.type||null:y(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof b?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||Array.isArray(this.body)?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let i=e.headers||this.headers,l=e.params||this.params;return void 0!==e.setHeaders&&(i=Object.keys(e.setHeaders).reduce((t,s)=>t.set(s,e.setHeaders[s]),i)),e.setParams&&(l=Object.keys(e.setParams).reduce((t,s)=>t.set(s,e.setParams[s]),l)),new v(t,s,n,{params:l,headers:i,reportProgress:a,responseType:r,withCredentials:o})}}var w=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}({});class k{constructor(e,t=200,s="OK"){this.headers=e.headers||new d,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class T extends k{constructor(e={}){super(e),this.type=w.ResponseHeader}clone(e={}){return new T({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class C extends k{constructor(e={}){super(e),this.type=w.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new C({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class E extends k{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function x(e,t){return{body:t,headers:e.headers,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let O=(()=>{class e{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof v)r=e;else{let n,o;n=s.headers instanceof d?s.headers:new d(s.headers),s.params&&(o=s.params instanceof b?s.params:new b({fromObject:s.params})),r=new v(e,t,void 0!==s.body?s.body:null,{headers:n,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const n=Object(o.a)(r).pipe(Object(i.a)(e=>this.handler.handle(e)));if(e instanceof v||"events"===s.observe)return n;const a=n.pipe(Object(l.a)(e=>e instanceof C));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(Object(h.a)(e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body}));case"blob":return a.pipe(Object(h.a)(e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body}));case"text":return a.pipe(Object(h.a)(e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body}));case"json":default:return a.pipe(Object(h.a)(e=>e.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new b).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,x(s,t))}post(e,t,s={}){return this.request("POST",e,x(s,t))}put(e,t,s={}){return this.request("PUT",e,x(s,t))}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(p))},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})();class L{constructor(e,t){this.next=e,this.interceptor=t}handle(e){return this.interceptor.intercept(e,this.next)}}const N=new n.r("HTTP_INTERCEPTORS");let P=(()=>{class e{intercept(e,t){return t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})();const j=/^\)\]\}',?\n/;class R{}let S=(()=>{class e{constructor(){}build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})(),A=(()=>{class e{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new a.a(t=>{const s=this.xhrFactory.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((e,t)=>s.setRequestHeader(e,t.join(","))),e.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&s.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();s.responseType="json"!==t?t:"text"}const r=e.serializeBody();let n=null;const o=()=>{if(null!==n)return n;const t=1223===s.status?204:s.status,r=s.statusText||"OK",o=new d(s.getAllResponseHeaders()),a=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(s)||e.url;return n=new T({headers:o,status:t,statusText:r,url:a}),n},a=()=>{let{headers:r,status:n,statusText:a,url:i}=o(),l=null;204!==n&&(l=void 0===s.response?s.responseText:s.response),0===n&&(n=l?200:0);let h=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof l){const e=l;l=l.replace(j,"");try{l=""!==l?JSON.parse(l):null}catch(p){l=e,h&&(h=!1,l={error:p,text:l})}}h?(t.next(new C({body:l,headers:r,status:n,statusText:a,url:i||void 0})),t.complete()):t.error(new E({error:l,headers:r,status:n,statusText:a,url:i||void 0}))},i=e=>{const{url:r}=o(),n=new E({error:e,status:s.status||0,statusText:s.statusText||"Unknown Error",url:r||void 0});t.error(n)};let l=!1;const h=r=>{l||(t.next(o()),l=!0);let n={type:w.DownloadProgress,loaded:r.loaded};r.lengthComputable&&(n.total=r.total),"text"===e.responseType&&s.responseText&&(n.partialText=s.responseText),t.next(n)},p=e=>{let s={type:w.UploadProgress,loaded:e.loaded};e.lengthComputable&&(s.total=e.total),t.next(s)};return s.addEventListener("load",a),s.addEventListener("error",i),s.addEventListener("timeout",i),s.addEventListener("abort",i),e.reportProgress&&(s.addEventListener("progress",h),null!==r&&s.upload&&s.upload.addEventListener("progress",p)),s.send(r),t.next({type:w.Sent}),()=>{s.removeEventListener("error",i),s.removeEventListener("abort",i),s.removeEventListener("load",a),s.removeEventListener("timeout",i),e.reportProgress&&(s.removeEventListener("progress",h),null!==r&&s.upload&&s.upload.removeEventListener("progress",p)),s.readyState!==s.DONE&&s.abort()}})}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(R))},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})();const z=new n.r("XSRF_COOKIE_NAME"),U=new n.r("XSRF_HEADER_NAME");class I{}let F=(()=>{class e{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Object(r.q)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(r.d),n.Lb(n.C),n.Lb(z))},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})(),H=(()=>{class e{constructor(e,t){this.tokenService=e,this.headerName=t}intercept(e,t){const s=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t.handle(e);const r=this.tokenService.getToken();return null===r||e.headers.has(this.headerName)||(e=e.clone({headers:e.headers.set(this.headerName,r)})),t.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(I),n.Lb(U))},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})(),_=(()=>{class e{constructor(e,t){this.backend=e,this.injector=t,this.chain=null}handle(e){if(null===this.chain){const e=this.injector.get(N,[]);this.chain=e.reduceRight((e,t)=>new L(e,t),this.backend)}return this.chain.handle(e)}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(c),n.Lb(n.s))},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})(),J=(()=>{class e{static disable(){return{ngModule:e,providers:[{provide:H,useClass:P}]}}static withOptions(t={}){return{ngModule:e,providers:[t.cookieName?{provide:z,useValue:t.cookieName}:[],t.headerName?{provide:U,useValue:t.headerName}:[]]}}}return e.\u0275mod=n.Cb({type:e}),e.\u0275inj=n.Bb({factory:function(t){return new(t||e)},providers:[H,{provide:N,useExisting:H,multi:!0},{provide:I,useClass:F},{provide:z,useValue:"XSRF-TOKEN"},{provide:U,useValue:"X-XSRF-TOKEN"}]}),e})(),M=(()=>{class e{}return e.\u0275mod=n.Cb({type:e}),e.\u0275inj=n.Bb({factory:function(t){return new(t||e)},providers:[O,{provide:p,useClass:_},A,{provide:c,useExisting:A},S,{provide:R,useExisting:S}],imports:[[J.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),e})();var X=s("tyNb");let q=(()=>{class e{constructor(e){this.httpClient=e,this.baseUrl="https://pokeapi.co/api/v2"}fetchList(){return this.httpClient.get(`${this.baseUrl}/pokemon`).pipe(Object(h.a)(e=>((null==e?void 0:e.results)||[]).map(e=>({name:e.name}))))}fetchDetail(e){return this.httpClient.get(`${this.baseUrl}/pokemon/${e}`).pipe(Object(h.a)(e=>({name:e.name,height:e.height,id:e.id,moves:((null==e?void 0:e.moves)||[]).map(e=>{var t;return null===(t=null==e?void 0:e.move)||void 0===t?void 0:t.name}),order:e.order,types:((null==e?void 0:e.types)||[]).map(e=>{var t;return null===(t=null==e?void 0:e.type)||void 0===t?void 0:t.name}),weight:e.weight})))}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(O))},e.\u0275prov=n.Ab({token:e,factory:e.\u0275fac}),e})(),B=(()=>{class e{constructor(e,t){this.pokemonService=e,this.activatedRoute=t}ngOnInit(){this.pokemon$=this.pokemonService.fetchDetail(this.activatedRoute.snapshot.params.name)}}return e.\u0275fac=function(t){return new(t||e)(n.Eb(q),n.Eb(X.a))},e.\u0275cmp=n.yb({type:e,selectors:[["ng-component"]],decls:7,vars:5,consts:[[1,"u-margin-bottom"],["routerLink","../"]],template:function(e,t){1&e&&(n.Jb(0,"div",0),n.Jb(1,"a",1),n.Xb(2,"< Terug naar het overzicht"),n.Ib(),n.Ib(),n.Jb(3,"pre"),n.Xb(4),n.Qb(5,"json"),n.Qb(6,"async"),n.Ib()),2&e&&(n.vb(4),n.Yb(" ",n.Rb(5,1,n.Rb(6,3,t.pokemon$)),""))},directives:[X.b],pipes:[r.f,r.b],encapsulation:2}),e})();function D(e,t){if(1&e&&(n.Hb(0),n.Jb(1,"div",2),n.Jb(2,"a",3),n.Xb(3),n.Ib(),n.Ib(),n.Gb()),2&e){const e=t.$implicit;n.vb(2),n.Sb("routerLink",e.name),n.vb(1),n.Yb(" ",e.name," ")}}let K=(()=>{class e{constructor(){this.pokemon=[]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.yb({type:e,selectors:[["app-pokemon-list"]],inputs:{pokemon:"pokemon"},decls:2,vars:1,consts:[[1,"pokemon-list"],[4,"ngFor","ngForOf"],[1,"pokemon-list__item"],[3,"routerLink"]],template:function(e,t){1&e&&(n.Jb(0,"div",0),n.Wb(1,D,4,2,"ng-container",1),n.Ib()),2&e&&(n.vb(1),n.Sb("ngForOf",t.pokemon))},directives:[r.j,X.b],styles:[".pokemon-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:-15px}.pokemon-list__item[_ngcontent-%COMP%]{width:100%}@media (min-width:600px){.pokemon-list__item[_ngcontent-%COMP%]{width:50%}}@media (min-width:900px){.pokemon-list__item[_ngcontent-%COMP%]{width:33.3333%}}@media (min-width:1200px){.pokemon-list__item[_ngcontent-%COMP%]{width:25%}}a[_ngcontent-%COMP%]{display:block;box-shadow:1px 1px 4px 0 #b19e9e;background-color:#fff;padding:15px;margin:15px;text-decoration:none;color:inherit;transition:transform .2s ease-in-out;text-align:center}a[_ngcontent-%COMP%]:hover{transform:scale(1.1)}"]}),e})();const $=[{path:"",component:(()=>{class e{constructor(e){this.pokemonService=e}ngOnInit(){this.pokemon$=this.pokemonService.fetchList()}}return e.\u0275fac=function(t){return new(t||e)(n.Eb(q))},e.\u0275cmp=n.yb({type:e,selectors:[["ng-component"]],decls:8,vars:3,consts:[[1,"u-container"],[1,"u-margin-bottom"],["routerLink","/"],[3,"pokemon"]],template:function(e,t){1&e&&(n.Jb(0,"div",0),n.Jb(1,"h1"),n.Xb(2,"Pokedex"),n.Ib(),n.Jb(3,"div",1),n.Jb(4,"a",2),n.Xb(5,"< Terug naar de startpagina"),n.Ib(),n.Ib(),n.Fb(6,"app-pokemon-list",3),n.Qb(7,"async"),n.Ib()),2&e&&(n.vb(6),n.Sb("pokemon",n.Rb(7,1,t.pokemon$)))},directives:[X.b,K],pipes:[r.b],encapsulation:2}),e})()},{path:":name",component:B}];let V=(()=>{class e{}return e.\u0275mod=n.Cb({type:e}),e.\u0275inj=n.Bb({factory:function(t){return new(t||e)},imports:[[X.c.forChild($)],X.c]}),e})();const W=[q];let G=(()=>{class e{}return e.\u0275mod=n.Cb({type:e}),e.\u0275inj=n.Bb({factory:function(t){return new(t||e)},providers:[W],imports:[[r.c,M,V]]}),e})()}}]);