var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=l(o(((e,t)=>{((n,r)=>{typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).Dexie=r()})(e,function(){var e=function(t,n){return(e=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(e,t){e.__proto__=t}:function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}))(t,n)},t=function(){return(t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function n(e,t,n){if(n||arguments.length===2)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||((r||=Array.prototype.slice.call(t,0,i))[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var r=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,i=Object.keys,a=Array.isArray;function o(e,t){return typeof t==`object`&&i(t).forEach(function(n){e[n]=t[n]}),e}typeof Promise>`u`||r.Promise||(r.Promise=Promise);var s=Object.getPrototypeOf,c={}.hasOwnProperty;function l(e,t){return c.call(e,t)}function u(e,t){typeof t==`function`&&(t=t(s(e))),(typeof Reflect>`u`?i:Reflect.ownKeys)(t).forEach(function(n){f(e,n,t[n])})}var d=Object.defineProperty;function f(e,t,n,r){d(e,t,o(n&&l(n,`get`)&&typeof n.get==`function`?{get:n.get,set:n.set,configurable:!0}:{value:n,configurable:!0,writable:!0},r))}function p(e){return{from:function(t){return e.prototype=Object.create(t.prototype),f(e.prototype,`constructor`,e),{extend:u.bind(null,e.prototype)}}}}var m=Object.getOwnPropertyDescriptor,h=[].slice;function g(e,t,n){return h.call(e,t,n)}function _(e,t){return t(e)}function v(e){if(!e)throw Error(`Assertion Failed`)}function y(e){r.setImmediate?setImmediate(e):setTimeout(e,0)}function b(e,t){if(typeof t==`string`&&l(e,t))return e[t];if(!t)return e;if(typeof t!=`string`){for(var n=[],r=0,i=t.length;r<i;++r){var a=b(e,t[r]);n.push(a)}return n}var o,s=t.indexOf(`.`);return s===-1||(o=e[t.substr(0,s)])==null?void 0:b(o,t.substr(s+1))}function x(e,t,n){if(e&&t!==void 0&&!(`isFrozen`in Object&&Object.isFrozen(e)))if(typeof t!=`string`&&`length`in t){v(typeof n!=`string`&&`length`in n);for(var r=0,i=t.length;r<i;++r)x(e,t[r],n[r])}else{var o=t.indexOf(`.`);if(o!==-1){var s=t.substr(0,o),o=t.substr(o+1);if(o===``)n===void 0?a(e)&&!isNaN(parseInt(s))?e.splice(s,1):delete e[s]:e[s]=n;else{var c=e[s];if(!c||!l(e,s)){if(n===void 0)return;c=e[s]={}}x(c,o,n)}}else n===void 0?a(e)&&!isNaN(parseInt(t))?e.splice(t,1):delete e[t]:e[t]=n}}function ee(e){var t,n={};for(t in e)l(e,t)&&(n[t]=e[t]);return n}var S=[].concat;function te(e){return S.apply([],e)}var C=`BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey`.split(`,`).concat(te([8,16,32,64].map(function(e){return[`Int`,`Uint`,`Float`].map(function(t){return t+e+`Array`})}))).filter(function(e){return r[e]}),ne=new Set(C.map(function(e){return r[e]})),w=null;function T(e){return w=new WeakMap,e=function e(t){if(!t||typeof t!=`object`)return t;var n=w.get(t);if(n)return n;if(a(t)){n=[],w.set(t,n);for(var r=0,i=t.length;r<i;++r)n.push(e(t[r]))}else if(ne.has(t.constructor))n=t;else{var o,c=s(t);for(o in n=c===Object.prototype?{}:Object.create(c),w.set(t,n),t)l(t,o)&&(n[o]=e(t[o]))}return n}(e),w=null,e}var E={}.toString;function D(e){return E.call(e).slice(8,-1)}var O=typeof Symbol<`u`?Symbol.iterator:`@@iterator`,re=typeof O==`symbol`?function(e){var t;return e!=null&&(t=e[O])&&t.apply(e)}:function(){return null};function k(e,t){t=e.indexOf(t),0<=t&&e.splice(t,1)}var A={};function j(e){var t,n,r,i;if(arguments.length===1){if(a(e))return e.slice();if(this===A&&typeof e==`string`)return[e];if(i=re(e))for(n=[];!(r=i.next()).done;)n.push(r.value);else{if(e==null||typeof(t=e.length)!=`number`)return[e];for(n=Array(t);t--;)n[t]=e[t]}}else for(t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return n}var M=typeof Symbol<`u`?function(e){return e[Symbol.toStringTag]===`AsyncFunction`}:function(){return!1},C=[`Unknown`,`Constraint`,`Data`,`TransactionInactive`,`ReadOnly`,`Version`,`NotFound`,`InvalidState`,`InvalidAccess`,`Abort`,`Timeout`,`QuotaExceeded`,`Syntax`,`DataClone`],N=[`Modify`,`Bulk`,`OpenFailed`,`VersionChange`,`Schema`,`Upgrade`,`InvalidTable`,`MissingAPI`,`NoSuchDatabase`,`InvalidArgument`,`SubTransaction`,`Unsupported`,`Internal`,`DatabaseClosed`,`PrematureCommit`,`ForeignAwait`].concat(C),ie={VersionChanged:`Database version changed by other database connection`,DatabaseClosed:`Database has been closed`,Abort:`Transaction aborted`,TransactionInactive:`Transaction has already completed or failed`,MissingAPI:`IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb`};function ae(e,t){this.name=e,this.message=t}function oe(e,t){return e+`. Errors: `+Object.keys(t).map(function(e){return t[e].toString()}).filter(function(e,t,n){return n.indexOf(e)===t}).join(`
`)}function se(e,t,n,r){this.failures=t,this.failedKeys=r,this.successCount=n,this.message=oe(e,t)}function P(e,t){this.name=`BulkError`,this.failures=Object.keys(t).map(function(e){return t[e]}),this.failuresByPos=t,this.message=oe(e,this.failures)}p(ae).from(Error).extend({toString:function(){return this.name+`: `+this.message}}),p(se).from(ae),p(P).from(ae);var ce=N.reduce(function(e,t){return e[t]=t+`Error`,e},{}),le=ae,F=N.reduce(function(e,t){var n=t+`Error`;function r(e,r){this.name=n,e?typeof e==`string`?(this.message=`${e}${r?`
 `+r:``}`,this.inner=r||null):typeof e==`object`&&(this.message=`${e.name} ${e.message}`,this.inner=e):(this.message=ie[t]||n,this.inner=null)}return p(r).from(le),e[t]=r,e},{}),ue=(F.Syntax=SyntaxError,F.Type=TypeError,F.Range=RangeError,C.reduce(function(e,t){return e[t+`Error`]=F[t],e},{}));C=N.reduce(function(e,t){return[`Syntax`,`Type`,`Range`].indexOf(t)===-1&&(e[t+`Error`]=F[t]),e},{});function I(){}function de(e){return e}function fe(e,t){return e==null||e===de?t:function(n){return t(e(n))}}function pe(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function me(e,t){return e===I?t:function(){var n=e.apply(this,arguments),r=(n!==void 0&&(arguments[0]=n),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return r&&(this.onsuccess=this.onsuccess?pe(r,this.onsuccess):r),i&&(this.onerror=this.onerror?pe(i,this.onerror):i),a===void 0?n:a}}function he(e,t){return e===I?t:function(){e.apply(this,arguments);var n=this.onsuccess,r=this.onerror;this.onsuccess=this.onerror=null,t.apply(this,arguments),n&&(this.onsuccess=this.onsuccess?pe(n,this.onsuccess):n),r&&(this.onerror=this.onerror?pe(r,this.onerror):r)}}function L(e,t){return e===I?t:function(n){var r=e.apply(this,arguments),n=(o(n,r),this.onsuccess),i=this.onerror,a=(this.onsuccess=null,this.onerror=null,t.apply(this,arguments));return n&&(this.onsuccess=this.onsuccess?pe(n,this.onsuccess):n),i&&(this.onerror=this.onerror?pe(i,this.onerror):i),r===void 0?a===void 0?void 0:a:o(r,a)}}function ge(e,t){return e===I?t:function(){return!1!==t.apply(this,arguments)&&e.apply(this,arguments)}}function _e(e,t){return e===I?t:function(){var n=e.apply(this,arguments);if(n&&typeof n.then==`function`){for(var r=this,i=arguments.length,a=Array(i);i--;)a[i]=arguments[i];return n.then(function(){return t.apply(r,a)})}return t.apply(this,arguments)}}C.ModifyError=se,C.DexieError=ae,C.BulkError=P;var R=typeof location<`u`&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function ve(e){R=e}var ye={},be=100,xe=typeof Promise>`u`?[]:(N=Promise.resolve(),typeof crypto<`u`&&crypto.subtle?[xe=crypto.subtle.digest(`SHA-512`,new Uint8Array([0])),s(xe),N]:[N,s(N),N]),N=xe[0],Se=xe[1],Se=Se&&Se.then,Ce=N&&N.constructor,we=!!xe[2],Te=function(e,t){je.push([e,t]),De&&=(queueMicrotask(ze),!1)},Ee=!0,De=!0,Oe=[],ke=[],Ae=de,z={id:`global`,global:!0,ref:0,unhandleds:[],onunhandled:I,pgp:!1,env:{},finalize:I},B=z,je=[],V=0,Me=[];function H(e){if(typeof this!=`object`)throw TypeError(`Promises must be constructed via new`);this._listeners=[],this._lib=!1;var t=this._PSD=B;if(typeof e!=`function`){if(e!==ye)throw TypeError(`Not a function`);this._state=arguments[1],this._value=arguments[2],!1===this._state&&Fe(this,this._value)}else this._state=null,this._value=null,++t.ref,function e(t,n){try{n(function(n){if(t._state===null){if(n===t)throw TypeError(`A promise cannot be resolved with itself.`);var r=t._lib&&Be();n&&typeof n.then==`function`?e(t,function(e,t){n instanceof H?n._then(e,t):n.then(e,t)}):(t._state=!0,t._value=n,Ie(t)),r&&Ve()}},Fe.bind(null,t))}catch(e){Fe(t,e)}}(this,e)}var Ne={get:function(){var e=B,t=qe;function n(n,r){var i=this,a=!e.global&&(e!==B||t!==qe),o=a&&!Ze(),s=new H(function(t,s){Le(i,new Pe(rt(n,e,a,o),rt(r,e,a,o),t,s,e))});return this._consoleTask&&(s._consoleTask=this._consoleTask),s}return n.prototype=ye,n},set:function(e){f(this,`then`,e&&e.prototype===ye?Ne:{get:function(){return e},set:Ne.set})}};function Pe(e,t,n,r,i){this.onFulfilled=typeof e==`function`?e:null,this.onRejected=typeof t==`function`?t:null,this.resolve=n,this.reject=r,this.psd=i}function Fe(e,t){var n,r;ke.push(t),e._state===null&&(n=e._lib&&Be(),t=Ae(t),e._state=!1,e._value=t,r=e,Oe.some(function(e){return e._value===r._value})||Oe.push(r),Ie(e),n)&&Ve()}function Ie(e){var t=e._listeners;e._listeners=[];for(var n=0,r=t.length;n<r;++n)Le(e,t[n]);var i=e._PSD;--i.ref||i.finalize(),V===0&&(++V,Te(function(){--V==0&&He()},[]))}function Le(e,t){if(e._state===null)e._listeners.push(t);else{var n=e._state?t.onFulfilled:t.onRejected;if(n===null)return(e._state?t.resolve:t.reject)(e._value);++t.psd.ref,++V,Te(Re,[n,e,t])}}function Re(e,t,n){try{var r,i=t._value;!t._state&&ke.length&&(ke=[]),r=R&&t._consoleTask?t._consoleTask.run(function(){return e(i)}):e(i),t._state||ke.indexOf(i)!==-1||(e=>{for(var t=Oe.length;t;)if(Oe[--t]._value===e._value)return Oe.splice(t,1)})(t),n.resolve(r)}catch(e){n.reject(e)}finally{--V==0&&He(),--n.psd.ref||n.psd.finalize()}}function ze(){nt(z,function(){Be()&&Ve()})}function Be(){var e=Ee;return De=Ee=!1,e}function Ve(){var e,t,n;do for(;0<je.length;)for(e=je,je=[],n=e.length,t=0;t<n;++t){var r=e[t];r[0].apply(null,r[1])}while(0<je.length);De=Ee=!0}function He(){for(var e=Oe,t=(Oe=[],e.forEach(function(e){e._PSD.onunhandled.call(null,e._value,e)}),Me.slice(0)),n=t.length;n;)t[--n]()}function Ue(e){return new H(ye,!1,e)}function U(e,t){var n=B;return function(){var r=Be(),i=B;try{return et(n,!0),e.apply(this,arguments)}catch(e){t&&t(e)}finally{et(i,!1),r&&Ve()}}}u(H.prototype,{then:Ne,_then:function(e,t){Le(this,new Pe(null,null,e,t,B))},catch:function(e){var t,n;return arguments.length===1?this.then(null,e):(t=e,n=arguments[1],typeof t==`function`?this.then(null,function(e){return(e instanceof t?n:Ue)(e)}):this.then(null,function(e){return(e&&e.name===t?n:Ue)(e)}))},finally:function(e){return this.then(function(t){return H.resolve(e()).then(function(){return t})},function(t){return H.resolve(e()).then(function(){return Ue(t)})})},timeout:function(e,t){var n=this;return e<1/0?new H(function(r,i){var a=setTimeout(function(){return i(new F.Timeout(t))},e);n.then(r,i).finally(clearTimeout.bind(null,a))}):this}}),typeof Symbol<`u`&&Symbol.toStringTag&&f(H.prototype,Symbol.toStringTag,`Dexie.Promise`),z.env=tt(),u(H,{all:function(){var e=j.apply(null,arguments).map(Qe);return new H(function(t,n){e.length===0&&t([]);var r=e.length;e.forEach(function(i,a){return H.resolve(i).then(function(n){e[a]=n,--r||t(e)},n)})})},resolve:function(e){return e instanceof H?e:e&&typeof e.then==`function`?new H(function(t,n){e.then(t,n)}):new H(ye,!0,e)},reject:Ue,race:function(){var e=j.apply(null,arguments).map(Qe);return new H(function(t,n){e.map(function(e){return H.resolve(e).then(t,n)})})},PSD:{get:function(){return B},set:function(e){return B=e}},totalEchoes:{get:function(){return qe}},newPSD:Ye,usePSD:nt,scheduler:{get:function(){return Te},set:function(e){Te=e}},rejectionMapper:{get:function(){return Ae},set:function(e){Ae=e}},follow:function(e,t){return new H(function(n,r){return Ye(function(t,n){var r=B;r.unhandleds=[],r.onunhandled=n,r.finalize=pe(function(){var e,r=this;e=function(){r.unhandleds.length===0?t():n(r.unhandleds[0])},Me.push(function t(){e(),Me.splice(Me.indexOf(t),1)}),++V,Te(function(){--V==0&&He()},[])},r.finalize),e()},t,n,r)})}}),Ce&&(Ce.allSettled&&f(H,`allSettled`,function(){var e=j.apply(null,arguments).map(Qe);return new H(function(t){e.length===0&&t([]);var n=e.length,r=Array(n);e.forEach(function(e,i){return H.resolve(e).then(function(e){return r[i]={status:`fulfilled`,value:e}},function(e){return r[i]={status:`rejected`,reason:e}}).then(function(){return--n||t(r)})})})}),Ce.any&&typeof AggregateError<`u`&&f(H,`any`,function(){var e=j.apply(null,arguments).map(Qe);return new H(function(t,n){e.length===0&&n(AggregateError([]));var r=e.length,i=Array(r);e.forEach(function(e,a){return H.resolve(e).then(function(e){return t(e)},function(e){i[a]=e,--r||n(AggregateError(i))})})})}),Ce.withResolvers)&&(H.withResolvers=Ce.withResolvers);var W={awaits:0,echoes:0,id:0},We=0,Ge=[],Ke=0,qe=0,Je=0;function Ye(e,t,n,r){var i=B,a=Object.create(i),t=(a.parent=i,a.ref=0,a.global=!1,a.id=++Je,z.env,a.env=we?{Promise:H,PromiseProp:{value:H,configurable:!0,writable:!0},all:H.all,race:H.race,allSettled:H.allSettled,any:H.any,resolve:H.resolve,reject:H.reject}:{},t&&o(a,t),++i.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()},nt(a,e,n,r));return a.ref===0&&a.finalize(),t}function Xe(){return W.id||=++We,++W.awaits,W.echoes+=be,W.id}function Ze(){return!!W.awaits&&(--W.awaits==0&&(W.id=0),W.echoes=W.awaits*be,!0)}function Qe(e){return W.echoes&&e&&e.constructor===Ce?(Xe(),e.then(function(e){return Ze(),e},function(e){return Ze(),G(e)})):e}function $e(){var e=Ge[Ge.length-1];Ge.pop(),et(e,!1)}function et(e,t){var n,i,a=B;(t?!W.echoes||Ke++&&e===B:!Ke||--Ke&&e===B)||queueMicrotask(t?function(e){++qe,W.echoes&&--W.echoes!=0||(W.echoes=W.awaits=W.id=0),Ge.push(B),et(e,!0)}.bind(null,e):$e),e!==B&&(B=e,a===z&&(z.env=tt()),we)&&(n=z.env.Promise,i=e.env,a.global||e.global)&&(Object.defineProperty(r,"Promise",i.PromiseProp),n.all=i.all,n.race=i.race,n.resolve=i.resolve,n.reject=i.reject,i.allSettled&&(n.allSettled=i.allSettled),i.any)&&(n.any=i.any)}function tt(){var e=r.Promise;return we?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(r,`Promise`),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject}:{}}function nt(e,t,n,r,i){var a=B;try{return et(e,!0),t(n,r,i)}finally{et(a,!1)}}function rt(e,t,n,r){return typeof e==`function`?function(){var i=B;n&&Xe(),et(t,!0);try{return e.apply(this,arguments)}finally{et(i,!1),r&&queueMicrotask(Ze)}}:e}function it(e){Promise===Ce&&W.echoes===0?Ke===0?e():enqueueNativeMicroTask(e):setTimeout(e,0)}(``+Se).indexOf(`[native code]`)===-1&&(Xe=Ze=I);var G=H.reject,at=`￿`,ot=`Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.`,st=`String expected.`,ct=`__dbnames`,lt=`readonly`,ut=`readwrite`;function dt(e,t){return e?t?function(){return e.apply(this,arguments)&&t.apply(this,arguments)}:e:t}var ft={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function pt(e){return typeof e!=`string`||/\./.test(e)?function(e){return e}:function(t){return t[e]===void 0&&e in t&&delete(t=T(t))[e],t}}function mt(){throw F.Type(`Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.`)}function K(e,t){try{var n=ht(e),r=ht(t);if(n!==r)return n===`Array`?1:r===`Array`?-1:n===`binary`?1:r===`binary`?-1:n===`string`?1:r===`string`?-1:n===`Date`?1:r===`Date`?-1:NaN;switch(n){case`number`:case`Date`:case`string`:return t<e?1:e<t?-1:0;case`binary`:for(var i=gt(e),a=gt(t),o=i.length,s=a.length,c=o<s?o:s,l=0;l<c;++l)if(i[l]!==a[l])return i[l]<a[l]?-1:1;return o===s?0:o<s?-1:1;case`Array`:for(var u=e,d=t,f=u.length,p=d.length,m=f<p?f:p,h=0;h<m;++h){var g=K(u[h],d[h]);if(g!==0)return g}return f===p?0:f<p?-1:1}}catch{}return NaN}function ht(e){var t=typeof e;return t==`object`&&(ArrayBuffer.isView(e)||(t=D(e))===`ArrayBuffer`)?`binary`:t}function gt(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}function _t(e,t,n){var r=e.schema.yProps;return r?(t&&0<n.numFailures&&(t=t.filter(function(e,t){return!n.failures[t]})),Promise.all(r.map(function(n){return n=n.updatesTable,t?e.db.table(n).where(`k`).anyOf(t).delete():e.db.table(n).clear()})).then(function(){return n})):n}yt.prototype.execute=function(e){var t=this[`@@propmod`];if(t.add!==void 0){var r=t.add;if(a(r))return n(n([],a(e)?e:[],!0),r,!0).sort();if(typeof r==`number`)return(Number(e)||0)+r;if(typeof r==`bigint`)try{return BigInt(e)+r}catch{return BigInt(0)+r}throw TypeError(`Invalid term ${r}`)}if(t.remove!==void 0){var i=t.remove;if(a(i))return a(e)?e.filter(function(e){return!i.includes(e)}).sort():[];if(typeof i==`number`)return Number(e)-i;if(typeof i==`bigint`)try{return BigInt(e)-i}catch{return BigInt(0)-i}throw TypeError(`Invalid subtrahend ${i}`)}return r=(r=t.replacePrefix)?.[0],r&&typeof e==`string`&&e.startsWith(r)?t.replacePrefix[1]+e.substring(r.length):e};var vt=yt;function yt(e){this[`@@propmod`]=e}function bt(e,t){for(var n=i(t),r=n.length,a=!1,o=0;o<r;++o){var s=n[o],c=t[s],l=b(e,s);c instanceof vt?(x(e,s,c.execute(l)),a=!0):l!==c&&(x(e,s,c),a=!0)}return a}q.prototype._trans=function(e,t,n){var r=this._tx||B.trans,i=this.name,a=R&&typeof console<`u`&&console.createTask&&console.createTask(`Dexie: ${e===`readonly`?`read`:`write`} ${this.name}`);function o(e,n,r){if(r.schema[i])return t(r.idbtrans,r);throw new F.NotFound(`Table `+i+` not part of transaction`)}var s=Be();try{var c=r&&r.db._novip===this.db._novip?r===B.trans?r._promise(e,o,n):Ye(function(){return r._promise(e,o,n)},{trans:r,transless:B.transless||B}):function e(t,n,r,i){if(t.idbdb&&(t._state.openComplete||B.letThrough||t._vip)){var a=t._createTransaction(n,r,t._dbSchema);try{a.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===ce.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,i)})):G(a)}return a._promise(n,function(e,t){return Ye(function(){return B.trans=a,i(e,t,a)})}).then(function(e){if(n===`readwrite`)try{a.idbtrans.commit()}catch{}return n===`readonly`?e:a._completion.then(function(){return e})})}if(t._state.openComplete)return G(new F.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return G(new F.DatabaseClosed);t.open().catch(I)}return t._state.dbReadyPromise.then(function(){return e(t,n,r,i)})}(this.db,e,[this.name],o);return a&&(c._consoleTask=a,c=c.catch(function(e){return console.trace(e),G(e)})),c}finally{s&&Ve()}},q.prototype.get=function(e,t){var n=this;return e&&e.constructor===Object?this.where(e).first(t):e==null?G(new F.Type(`Invalid argument to Table.get()`)):this._trans(`readonly`,function(t){return n.core.get({trans:t,key:e}).then(function(e){return n.hook.reading.fire(e)})}).then(t)},q.prototype.where=function(e){if(typeof e==`string`)return new this.db.WhereClause(this,e);if(a(e))return new this.db.WhereClause(this,`[${e.join(`+`)}]`);var t=i(e);if(t.length===1)return this.where(t[0]).equals(e[t[0]]);var n=this.schema.indexes.concat(this.schema.primKey).filter(function(e){if(e.compound&&t.every(function(t){return 0<=e.keyPath.indexOf(t)})){for(var n=0;n<t.length;++n)if(t.indexOf(e.keyPath[n])===-1)return!1;return!0}return!1}).sort(function(e,t){return e.keyPath.length-t.keyPath.length})[0];if(n&&this.db._maxKey!==at)return s=n.keyPath.slice(0,t.length),this.where(s).equals(s.map(function(t){return e[t]}));!n&&R&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit from a compound index [${t.join(`+`)}]`);var r=this.schema.idxByName;function o(e,t){return K(e,t)===0}var s=t.reduce(function(t,n){var i=t[0],t=t[1],s=r[n],c=e[n];return[i||s,i||!s?dt(t,s&&s.multi?function(e){return e=b(e,n),a(e)&&e.some(function(e){return o(c,e)})}:function(e){return o(c,b(e,n))}):t]},[null,null]),c=s[0],s=s[1];return c?this.where(c.name).equals(e[c.keyPath]).filter(s):n?this.filter(s):this.where(t).equals(``)},q.prototype.filter=function(e){return this.toCollection().and(e)},q.prototype.count=function(e){return this.toCollection().count(e)},q.prototype.offset=function(e){return this.toCollection().offset(e)},q.prototype.limit=function(e){return this.toCollection().limit(e)},q.prototype.each=function(e){return this.toCollection().each(e)},q.prototype.toArray=function(e){return this.toCollection().toArray(e)},q.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},q.prototype.orderBy=function(e){return new this.db.Collection(new this.db.WhereClause(this,a(e)?`[${e.join(`+`)}]`:e))},q.prototype.reverse=function(){return this.toCollection().reverse()},q.prototype.mapToClass=function(t){for(var n=this.db,r=this.name,i=((this.schema.mappedClass=t).prototype instanceof mt&&(t=(t=>{var i=s,a=t;if(typeof a!=`function`&&a!==null)throw TypeError(`Class extends value `+String(a)+` is not a constructor or null`);function o(){this.constructor=i}function s(){return t!==null&&t.apply(this,arguments)||this}return e(i,a),i.prototype=a===null?Object.create(a):(o.prototype=a.prototype,new o),Object.defineProperty(s.prototype,"db",{get:function(){return n},enumerable:!1,configurable:!0}),s.prototype.table=function(){return r},s})(t)),new Set),a=t.prototype;a;a=s(a))Object.getOwnPropertyNames(a).forEach(function(e){return i.add(e)});function o(e){if(!e)return e;var n,r=Object.create(t.prototype);for(n in e)if(!i.has(n))try{r[n]=e[n]}catch{}return r}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=o,this.hook(`reading`,o),t},q.prototype.defineClass=function(){return this.mapToClass(function(e){o(this,e)})},q.prototype.add=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=pt(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`add`,keys:t==null?null:[t],values:[o]})}).then(function(e){return e.numFailures?H.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},q.prototype.upsert=function(e,t){var n=this,r=this.schema.primKey.keyPath;return this._trans(`readwrite`,function(i){return n.core.get({trans:i,key:e}).then(function(a){var o=a??{};return bt(o,t),r&&x(o,r,e),n.core.mutate({trans:i,type:`put`,values:[o],keys:[e],upsert:!0,updates:{keys:[e],changeSpecs:[t]}}).then(function(e){return e.numFailures?H.reject(e.failures[0]):!!a})})})},q.prototype.update=function(e,t){return typeof e!=`object`||a(e)?this.where(`:id`).equals(e).modify(t):(e=b(e,this.schema.primKey.keyPath))===void 0?G(new F.InvalidArgument(`Given object does not contain its primary key`)):this.where(`:id`).equals(e).modify(t)},q.prototype.put=function(e,t){var n=this,r=this.schema.primKey,i=r.auto,a=r.keyPath,o=e;return a&&i&&(o=pt(a)(e)),this._trans(`readwrite`,function(e){return n.core.mutate({trans:e,type:`put`,values:[o],keys:t==null?null:[t]})}).then(function(e){return e.numFailures?H.reject(e.failures[0]):e.lastResult}).then(function(t){if(a)try{x(e,a,t)}catch{}return t})},q.prototype.delete=function(e){var t=this;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:[e]}).then(function(n){return _t(t,[e],n)}).then(function(e){return e.numFailures?H.reject(e.failures[0]):void 0})})},q.prototype.clear=function(){var e=this;return this._trans(`readwrite`,function(t){return e.core.mutate({trans:t,type:`deleteRange`,range:ft}).then(function(t){return _t(e,null,t)})}).then(function(e){return e.numFailures?H.reject(e.failures[0]):void 0})},q.prototype.bulkGet=function(e){var t=this;return this._trans(`readonly`,function(n){return t.core.getMany({keys:e,trans:n}).then(function(e){return e.map(function(e){return t.hook.reading.fire(e)})})})},q.prototype.bulkAdd=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new F.InvalidArgument(`bulkAdd(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new F.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(pt(n)):e;return r.core.mutate({trans:t,type:`add`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new P(`${r.name}.bulkAdd(): ${t} of ${s} operations failed`,n)})})},q.prototype.bulkPut=function(e,t,n){var r=this,i=Array.isArray(t)?t:void 0,a=(n||=i?void 0:t)?n.allKeys:void 0;return this._trans(`readwrite`,function(t){var n=r.schema.primKey,o=n.auto,n=n.keyPath;if(n&&i)throw new F.InvalidArgument(`bulkPut(): keys argument invalid on tables with inbound keys`);if(i&&i.length!==e.length)throw new F.InvalidArgument(`Arguments objects and keys must have the same length`);var s=e.length,o=n&&o?e.map(pt(n)):e;return r.core.mutate({trans:t,type:`put`,keys:i,values:o,wantResults:a}).then(function(e){var t=e.numFailures,n=e.failures;if(t===0)return a?e.results:e.lastResult;throw new P(`${r.name}.bulkPut(): ${t} of ${s} operations failed`,n)})})},q.prototype.bulkUpdate=function(e){var t=this,n=this.core,r=e.map(function(e){return e.key}),i=e.map(function(e){return e.changes}),a=[];return this._trans(`readwrite`,function(o){return n.getMany({trans:o,keys:r,cache:`clone`}).then(function(s){var c=[],l=[],u=(e.forEach(function(e,n){var r=e.key,i=e.changes,o=s[n];if(o){for(var u=0,d=Object.keys(i);u<d.length;u++){var f=d[u],p=i[f];if(f===t.schema.primKey.keyPath){if(K(p,r)!==0)throw new F.Constraint(`Cannot update primary key in bulkUpdate()`)}else x(o,f,p)}a.push(n),c.push(r),l.push(o)}}),c.length);return n.mutate({trans:o,type:`put`,keys:c,values:l,updates:{keys:r,changeSpecs:i}}).then(function(e){var n=e.numFailures,r=e.failures;if(n===0)return u;for(var i=0,o=Object.keys(r);i<o.length;i++){var s,c=o[i],l=a[Number(c)];l!=null&&(s=r[c],delete r[c],r[l]=s)}throw new P(`${t.name}.bulkUpdate(): ${n} of ${u} operations failed`,r)})})})},q.prototype.bulkDelete=function(e){var t=this,n=e.length;return this._trans(`readwrite`,function(n){return t.core.mutate({trans:n,type:`delete`,keys:e}).then(function(n){return _t(t,e,n)})}).then(function(e){var r=e.numFailures,i=e.failures;if(r===0)return e.lastResult;throw new P(`${t.name}.bulkDelete(): ${r} of ${n} operations failed`,i)})};var xt=q;function q(){}function St(e){function t(t,r){if(r){for(var i=arguments.length,a=Array(i-1);--i;)a[i-1]=arguments[i];return n[t].subscribe.apply(null,a),e}if(typeof t==`string`)return n[t]}var n={};t.addEventType=s;for(var r=1,o=arguments.length;r<o;++r)s(arguments[r]);return t;function s(e,r,o){var c,l;if(typeof e!=`object`)return r||=ge,l={subscribers:[],fire:o||=I,subscribe:function(e){l.subscribers.indexOf(e)===-1&&(l.subscribers.push(e),l.fire=r(l.fire,e))},unsubscribe:function(e){l.subscribers=l.subscribers.filter(function(t){return t!==e}),l.fire=l.subscribers.reduce(r,o)}},n[e]=t[e]=l;i(c=e).forEach(function(e){var t=c[e];if(a(t))s(e,c[e][0],c[e][1]);else{if(t!==`asap`)throw new F.InvalidArgument(`Invalid event config`);var n=s(e,de,function(){for(var e=arguments.length,t=Array(e);e--;)t[e]=arguments[e];n.subscribers.forEach(function(e){y(function(){e.apply(null,t)})})})}})}}function Ct(e,t){return p(t).from({prototype:e}),t}function wt(e,t){return!(e.filter||e.algorithm||e.or)&&(t?e.justLimit:!e.replayFilter)}function Tt(e,t){e.filter=dt(e.filter,t)}function Et(e,t,n){var r=e.replayFilter;e.replayFilter=r?function(){return dt(r(),t())}:t,e.justLimit=n&&!r}function Dt(e,t){if(e.isPrimKey)return t.primaryKey;var n=t.getIndexByKeyPath(e.index);if(n)return n;throw new F.Schema(`KeyPath `+e.index+` on object store `+t.name+` is not indexed`)}function Ot(e,t,n){var r=Dt(e,t.schema);return t.openCursor({trans:n,values:!e.keysOnly,reverse:e.dir===`prev`,unique:!!e.unique,query:{index:r,range:e.range}})}function kt(e,t,n,r){var i,a,o=e.replayFilter?dt(e.filter,e.replayFilter()):e.filter;return e.or?(i={},a=function(e,n,r){var a,s;o&&!o(n,r,function(e){return n.stop(e)},function(e){return n.fail(e)})||((s=``+(a=n.primaryKey))==`[object ArrayBuffer]`&&(s=``+new Uint8Array(a)),l(i,s))||(i[s]=!0,t(e,n,r))},Promise.all([e.or._iterate(a,n),At(Ot(e,r,n),e.algorithm,a,!e.keysOnly&&e.valueMapper)])):At(Ot(e,r,n),dt(e.algorithm,o),t,!e.keysOnly&&e.valueMapper)}function At(e,t,n,r){var i=U(r?function(e,t,i){return n(r(e),t,i)}:n);return e.then(function(e){if(e)return e.start(function(){var n=function(){return e.continue()};t&&!t(e,function(e){return n=e},function(t){e.stop(t),n=I},function(t){e.fail(t),n=I})||i(e.value,e,function(e){return n=e}),n()})})}J.prototype._read=function(e,t){var n=this._ctx;return n.error?n.table._trans(null,G.bind(null,n.error)):n.table._trans(`readonly`,e).then(t)},J.prototype._write=function(e){var t=this._ctx;return t.error?t.table._trans(null,G.bind(null,t.error)):t.table._trans(`readwrite`,e,`locked`)},J.prototype._addAlgorithm=function(e){var t=this._ctx;t.algorithm=dt(t.algorithm,e)},J.prototype._iterate=function(e,t){return kt(this._ctx,e,t,this._ctx.table.core)},J.prototype.clone=function(e){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return e&&o(n,e),t._ctx=n,t},J.prototype.raw=function(){return this._ctx.valueMapper=null,this},J.prototype.each=function(e){var t=this._ctx;return this._read(function(n){return kt(t,e,n,t.table.core)})},J.prototype.count=function(e){var t=this;return this._read(function(e){var n,r=t._ctx,i=r.table.core;return wt(r,!0)?i.count({trans:e,query:{index:Dt(r,i.schema),range:r.range}}).then(function(e){return Math.min(e,r.limit)}):(n=0,kt(r,function(){return++n,!1},e,i).then(function(){return n}))}).then(e)},J.prototype.sortBy=function(e,t){var n=e.split(`.`).reverse(),r=n[0],i=n.length-1;function a(e,t){return t?a(e[n[t]],t-1):e[r]}var o=this._ctx.dir===`next`?1:-1;function s(e,t){return K(a(e,i),a(t,i))*o}return this.toArray(function(e){return e.slice().sort(s)}).then(t)},J.prototype.toArray=function(e){var t=this;return this._read(function(e){var n,r,i,a=t._ctx;return wt(a,!0)&&0<a.limit?(n=a.valueMapper,r=Dt(a,a.table.core.schema),a.table.core.query({trans:e,limit:a.limit,values:!0,direction:a.dir===`prev`?`prev`:void 0,query:{index:r,range:a.range}}).then(function(e){return e=e.result,n?e.map(n):e})):(i=[],kt(a,function(e){return i.push(e)},e,a.table.core).then(function(){return i}))},e)},J.prototype.offset=function(e){var t=this._ctx;return e<=0||(t.offset+=e,wt(t)?Et(t,function(){var t=e;return function(e,n){return t===0||(t===1?--t:n(function(){e.advance(t),t=0}),!1)}}):Et(t,function(){var t=e;return function(){return--t<0}})),this},J.prototype.limit=function(e){return this._ctx.limit=Math.min(this._ctx.limit,e),Et(this._ctx,function(){var t=e;return function(e,n,r){return--t<=0&&n(r),0<=t}},!0),this},J.prototype.until=function(e,t){return Tt(this._ctx,function(n,r,i){return!e(n.value)||(r(i),t)}),this},J.prototype.first=function(e){return this.limit(1).toArray(function(e){return e[0]}).then(e)},J.prototype.last=function(e){return this.reverse().first(e)},J.prototype.filter=function(e){var t;return Tt(this._ctx,function(t){return e(t.value)}),(t=this._ctx).isMatch=dt(t.isMatch,e),this},J.prototype.and=function(e){return this.filter(e)},J.prototype.or=function(e){return new this.db.WhereClause(this._ctx.table,e,this)},J.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir===`prev`?`next`:`prev`,this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},J.prototype.desc=function(){return this.reverse()},J.prototype.eachKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.key,n)})},J.prototype.eachUniqueKey=function(e){return this._ctx.unique=`unique`,this.eachKey(e)},J.prototype.eachPrimaryKey=function(e){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(t,n){e(n.primaryKey,n)})},J.prototype.keys=function(e){var t=this._ctx,n=(t.keysOnly=!t.isMatch,[]);return this.each(function(e,t){n.push(t.key)}).then(function(){return n}).then(e)},J.prototype.primaryKeys=function(e){var t=this._ctx;if(wt(t,!0)&&0<t.limit)return this._read(function(e){var n=Dt(t,t.table.core.schema);return t.table.core.query({trans:e,values:!1,limit:t.limit,direction:t.dir===`prev`?`prev`:void 0,query:{index:n,range:t.range}})}).then(function(e){return e.result}).then(e);t.keysOnly=!t.isMatch;var n=[];return this.each(function(e,t){n.push(t.primaryKey)}).then(function(){return n}).then(e)},J.prototype.uniqueKeys=function(e){return this._ctx.unique=`unique`,this.keys(e)},J.prototype.firstKey=function(e){return this.limit(1).keys(function(e){return e[0]}).then(e)},J.prototype.lastKey=function(e){return this.reverse().firstKey(e)},J.prototype.distinct=function(){var e,t=this._ctx,t=t.index&&t.table.schema.idxByName[t.index];return t&&t.multi&&(e={},Tt(this._ctx,function(t){var t=t.primaryKey.toString(),n=l(e,t);return e[t]=!0,!n})),this},J.prototype.modify=function(e){var t=this,n=this._ctx;return this._write(function(r){function a(e,t){var n=t.failures;p+=e-t.numFailures;for(var r=0,a=i(n);r<a.length;r++){var o=a[r];f.push(n[o])}}var o=typeof e==`function`?e:function(t){return bt(t,e)},s=n.table.core,c=s.schema.primaryKey,l=c.outbound,u=c.extractKey,d=200,c=t.db._options.modifyChunkSize,f=(c&&(d=typeof c==`object`?c[s.name]||c[`*`]||200:c),[]),p=0,m=[],h=e===Mt;return t.clone().primaryKeys().then(function(t){function i(f){var p=Math.min(d,t.length-f),m=t.slice(f,f+p);return(h?Promise.resolve([]):s.getMany({trans:r,keys:m,cache:`immutable`})).then(function(g){var _=[],v=[],y=l?[]:null,b=h?m:[];if(!h)for(var x=0;x<p;++x){var ee=g[x],S={value:T(ee),primKey:t[f+x]};!1!==o.call(S,S.value,S)&&(S.value==null?b.push(t[f+x]):l||K(u(ee),u(S.value))===0?(v.push(S.value),l&&y.push(t[f+x])):(b.push(t[f+x]),_.push(S.value)))}return Promise.resolve(0<_.length&&s.mutate({trans:r,type:`add`,values:_}).then(function(e){for(var t in e.failures)b.splice(parseInt(t),1);a(_.length,e)})).then(function(){return(0<v.length||c&&typeof e==`object`)&&s.mutate({trans:r,type:`put`,keys:y,values:v,criteria:c,changeSpec:typeof e!=`function`&&e,isAdditionalChunk:0<f}).then(function(e){return a(v.length,e)})}).then(function(){return(0<b.length||c&&h)&&s.mutate({trans:r,type:`delete`,keys:b,criteria:c,isAdditionalChunk:0<f}).then(function(e){return _t(n.table,b,e)}).then(function(e){return a(b.length,e)})}).then(function(){return t.length>f+p&&i(f+d)})})}var c=wt(n)&&n.limit===1/0&&(typeof e!=`function`||h)&&{index:n.index,range:n.range};return i(0).then(function(){if(0<f.length)throw new se(`Error modifying one or more objects`,f,p,m);return t.length})})})},J.prototype.delete=function(){var e=this._ctx,t=e.range;return!wt(e)||e.table.schema.yProps||!e.isPrimKey&&t.type!==3?this.modify(Mt):this._write(function(n){var r=e.table.core.schema.primaryKey,i=t;return e.table.core.count({trans:n,query:{index:r,range:i}}).then(function(t){return e.table.core.mutate({trans:n,type:`deleteRange`,range:i}).then(function(e){var n=e.failures,e=e.numFailures;if(e)throw new se(`Could not delete some values`,Object.keys(n).map(function(e){return n[e]}),t-e);return t-e})})})};var jt=J;function J(){}var Mt=function(e,t){return t.value=null};function Nt(e,t){return e<t?-1:e===t?0:1}function Pt(e,t){return t<e?-1:e===t?0:1}function Y(e,t,n){return e=e instanceof zt?new e.Collection(e):e,e._ctx.error=new(n||TypeError)(t),e}function Ft(e){return new e.Collection(e,function(){return Rt(``)}).limit(0)}function It(e,t,n,r){var i,a,o,s,c,l,u,d=n.length;if(!n.every(function(e){return typeof e==`string`}))return Y(e,st);function f(e){i=e===`next`?function(e){return e.toUpperCase()}:function(e){return e.toLowerCase()},a=e===`next`?function(e){return e.toLowerCase()}:function(e){return e.toUpperCase()},o=e===`next`?Nt:Pt;var t=n.map(function(e){return{lower:a(e),upper:i(e)}}).sort(function(e,t){return o(e.lower,t.lower)});s=t.map(function(e){return e.upper}),c=t.map(function(e){return e.lower}),u=(l=e)===`next`?``:r}f(`next`);var e=new e.Collection(e,function(){return Lt(s[0],c[d-1]+r)}),p=(e._ondirectionchange=function(e){f(e)},0);return e._addAlgorithm(function(e,n,r){var i=e.key;if(typeof i==`string`){var f=a(i);if(t(f,c,p))return!0;for(var m=null,h=p;h<d;++h){var g=((e,t,n,r,i,a)=>{for(var o=Math.min(e.length,r.length),s=-1,c=0;c<o;++c){var l=t[c];if(l!==r[c])return i(e[c],n[c])<0?e.substr(0,c)+n[c]+n.substr(c+1):i(e[c],r[c])<0?e.substr(0,c)+r[c]+n.substr(c+1):0<=s?e.substr(0,s)+t[s]+n.substr(s+1):null;i(e[c],l)<0&&(s=c)}return o<r.length&&a===`next`?e+n.substr(e.length):o<e.length&&a===`prev`?e.substr(0,n.length):s<0?null:e.substr(0,s)+r[s]+n.substr(s+1)})(i,f,s[h],c[h],o,l);g===null&&m===null?p=h+1:(m===null||0<o(m,g))&&(m=g)}n(m===null?r:function(){e.continue(m+u)})}return!1}),e}function Lt(e,t,n,r){return{type:2,lower:e,upper:t,lowerOpen:n,upperOpen:r}}function Rt(e){return{type:1,lower:e,upper:e}}Object.defineProperty(X.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),X.prototype.between=function(e,t,n,r){n=!1!==n,r=!0===r;try{return 0<this._cmp(e,t)||this._cmp(e,t)===0&&(n||r)&&(!n||!r)?Ft(this):new this.Collection(this,function(){return Lt(e,t,!n,!r)})}catch{return Y(this,ot)}},X.prototype.equals=function(e){return e==null?Y(this,ot):new this.Collection(this,function(){return Rt(e)})},X.prototype.above=function(e){return e==null?Y(this,ot):new this.Collection(this,function(){return Lt(e,void 0,!0)})},X.prototype.aboveOrEqual=function(e){return e==null?Y(this,ot):new this.Collection(this,function(){return Lt(e,void 0,!1)})},X.prototype.below=function(e){return e==null?Y(this,ot):new this.Collection(this,function(){return Lt(void 0,e,!1,!0)})},X.prototype.belowOrEqual=function(e){return e==null?Y(this,ot):new this.Collection(this,function(){return Lt(void 0,e)})},X.prototype.startsWith=function(e){return typeof e==`string`?this.between(e,e+at,!0,!0):Y(this,st)},X.prototype.startsWithIgnoreCase=function(e){return e===``?this.startsWith(e):It(this,function(e,t){return e.indexOf(t[0])===0},[e],at)},X.prototype.equalsIgnoreCase=function(e){return It(this,function(e,t){return e===t[0]},[e],``)},X.prototype.anyOfIgnoreCase=function(){var e=j.apply(A,arguments);return e.length===0?Ft(this):It(this,function(e,t){return t.indexOf(e)!==-1},e,``)},X.prototype.startsWithAnyOfIgnoreCase=function(){var e=j.apply(A,arguments);return e.length===0?Ft(this):It(this,function(e,t){return t.some(function(t){return e.indexOf(t)===0})},e,at)},X.prototype.anyOf=function(){var e,t,n=this,r=j.apply(A,arguments),i=this._cmp;try{r.sort(i)}catch{return Y(this,ot)}return r.length===0?Ft(this):((e=new this.Collection(this,function(){return Lt(r[0],r[r.length-1])}))._ondirectionchange=function(e){i=e===`next`?n._ascending:n._descending,r.sort(i)},t=0,e._addAlgorithm(function(e,n,a){for(var o=e.key;0<i(o,r[t]);)if(++t===r.length)return n(a),!1;return i(o,r[t])===0||(n(function(){e.continue(r[t])}),!1)}),e)},X.prototype.notEqual=function(e){return this.inAnyRange([[-1/0,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},X.prototype.noneOf=function(){var e=j.apply(A,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{return Y(this,ot)}var t=e.reduce(function(e,t){return e?e.concat([[e[e.length-1][1],t]]):[[-1/0,t]]},null);return t.push([e[e.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})},X.prototype.inAnyRange=function(e,t){var n=this,r=this._cmp,i=this._ascending,a=this._descending,o=this._min,s=this._max;if(e.length===0)return Ft(this);if(!e.every(function(e){return e[0]!==void 0&&e[1]!==void 0&&i(e[0],e[1])<=0}))return Y(this,`First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower`,F.InvalidArgument);var c=!t||!1!==t.includeLowers,l=t&&!0===t.includeUppers,u,d=i;function f(e,t){return d(e[0],t[0])}try{(u=e.reduce(function(e,t){for(var n=0,i=e.length;n<i;++n){var a=e[n];if(r(t[0],a[1])<0&&0<r(t[1],a[0])){a[0]=o(a[0],t[0]),a[1]=s(a[1],t[1]);break}}return n===i&&e.push(t),e},[])).sort(f)}catch{return Y(this,ot)}var p=0,m=l?function(e){return 0<i(e,u[p][1])}:function(e){return 0<=i(e,u[p][1])},h=c?function(e){return 0<a(e,u[p][0])}:function(e){return 0<=a(e,u[p][0])},g=m,t=new this.Collection(this,function(){return Lt(u[0][0],u[u.length-1][1],!c,!l)});return t._ondirectionchange=function(e){d=e===`next`?(g=m,i):(g=h,a),u.sort(f)},t._addAlgorithm(function(e,t,r){for(var a,o=e.key;g(o);)if(++p===u.length)return t(r),!1;return!m(a=o)&&!h(a)||(n._cmp(o,u[p][1])===0||n._cmp(o,u[p][0])===0||t(function(){d===i?e.continue(u[p][0]):e.continue(u[p][1])}),!1)}),t},X.prototype.startsWithAnyOf=function(){var e=j.apply(A,arguments);return e.every(function(e){return typeof e==`string`})?e.length===0?Ft(this):this.inAnyRange(e.map(function(e){return[e,e+at]})):Y(this,`startsWithAnyOf() only works with strings`)};var zt=X;function X(){}function Z(e){return U(function(t){return Bt(t),e(t.target.error),!1})}function Bt(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var Vt=`storagemutated`,Ht=`x-storagemutated-1`,Ut=St(null,Vt),Wt=(Gt.prototype._lock=function(){return v(!B.global),++this._reculock,this._reculock!==1||B.global||(B.lockOwnerFor=this),this},Gt.prototype._unlock=function(){if(v(!B.global),--this._reculock==0)for(B.global||(B.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var e=this._blockedFuncs.shift();try{nt(e[1],e[0])}catch{}}return this},Gt.prototype._locked=function(){return this._reculock&&B.lockOwnerFor!==this},Gt.prototype.create=function(e){var t=this;if(this.mode){var n=this.db.idbdb,r=this.db._state.dbOpenError;if(v(!this.idbtrans),!e&&!n)switch(r&&r.name){case`DatabaseClosedError`:throw new F.DatabaseClosed(r);case`MissingAPIError`:throw new F.MissingAPI(r.message,r);default:throw new F.OpenFailed(r)}if(!this.active)throw new F.TransactionInactive;v(this._completion._state===null),(e=this.idbtrans=e||(this.db.core||n).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=U(function(n){Bt(n),t._reject(e.error)}),e.onabort=U(function(n){Bt(n),t.active&&t._reject(new F.Abort(e.error)),t.active=!1,t.on(`abort`).fire(n)}),e.oncomplete=U(function(){t.active=!1,t._resolve(),`mutatedParts`in e&&Ut.storagemutated.fire(e.mutatedParts)})}return this},Gt.prototype._promise=function(e,t,n){var r,i=this;return e===`readwrite`&&this.mode!==`readwrite`?G(new F.ReadOnly(`Transaction is readonly`)):this.active?this._locked()?new H(function(r,a){i._blockedFuncs.push([function(){i._promise(e,t,n).then(r,a)},B])}):n?Ye(function(){var e=new H(function(e,n){i._lock();var r=t(e,n,i);r&&r.then&&r.then(e,n)});return e.finally(function(){return i._unlock()}),e._lib=!0,e}):((r=new H(function(e,n){var r=t(e,n,i);r&&r.then&&r.then(e,n)}))._lib=!0,r):G(new F.TransactionInactive)},Gt.prototype._root=function(){return this.parent?this.parent._root():this},Gt.prototype.waitFor=function(e){var t,n=this._root(),r=H.resolve(e),i=(n._waitingFor?n._waitingFor=n._waitingFor.then(function(){return r}):(n._waitingFor=r,n._waitingQueue=[],t=n.idbtrans.objectStore(n.storeNames[0]),function e(){for(++n._spinCount;n._waitingQueue.length;)n._waitingQueue.shift()();n._waitingFor&&(t.get(-1/0).onsuccess=e)}()),n._waitingFor);return new H(function(e,t){r.then(function(t){return n._waitingQueue.push(U(e.bind(null,t)))},function(e){return n._waitingQueue.push(U(t.bind(null,e)))}).finally(function(){n._waitingFor===i&&(n._waitingFor=null)})})},Gt.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new F.Abort))},Gt.prototype.table=function(e){var t=this._memoizedTables||={};if(l(t,e))return t[e];var n=this.schema[e];if(n)return(n=new this.db.Table(e,n,this)).core=this.db.core.table(e),t[e]=n;throw new F.NotFound(`Table `+e+` not part of transaction`)},Gt);function Gt(){}function Kt(e,t,n,r,i,a,o,s){return{name:e,keyPath:t,unique:n,multi:r,auto:i,compound:a,src:(n&&!o?`&`:``)+(r?`*`:``)+(i?`++`:``)+qt(t),type:s}}function qt(e){return typeof e==`string`?e:e?`[`+[].join.call(e,`+`)+`]`:``}function Jt(e,t,n){return{name:e,primKey:t,indexes:n,mappedClass:null,idxByName:(r=function(e){return[e.name,e]},n.reduce(function(e,t,n){return t=r(t,n),t&&(e[t[0]]=t[1]),e},{}))};var r}var Yt=function(e){try{return e.only([[]]),Yt=function(){return[[]]},[[]]}catch{return Yt=function(){return at},at}};function Xt(e){return e==null?function(){}:typeof e==`string`?(t=e).split(`.`).length===1?function(e){return e[t]}:function(e){return b(e,t)}:function(t){return b(t,e)};var t}function Zt(e){return[].slice.call(e)}var Qt=0;function $t(e){return e==null?`:id`:typeof e==`string`?e:`[${e.join(`+`)}]`}function en(e,t,n){function r(e){if(e.type===3)return null;if(e.type===4)throw Error(`Cannot convert never type to IDBKeyRange`);var n=e.lower,r=e.upper,i=e.lowerOpen,e=e.upperOpen;return n===void 0?r===void 0?null:t.upperBound(r,!!e):r===void 0?t.lowerBound(n,!!i):t.bound(n,r,!!i,!!e)}function i(e){var t,n,i=e.name;return{name:i,schema:e,mutate:function(e){var t=e.trans,n=e.type,a=e.keys,o=e.values,s=e.range;return new Promise(function(e,c){e=U(e);var l=t.objectStore(i),u=l.keyPath==null,d=n===`put`||n===`add`;if(!d&&n!==`delete`&&n!==`deleteRange`)throw Error(`Invalid operation type: `+n);var f,p=(a||o||{length:1}).length;if(a&&o&&a.length!==o.length)throw Error(`Given keys array must have same length as given values array.`);if(p===0)return e({numFailures:0,failures:{},results:[],lastResult:void 0});function m(e){++_,Bt(e)}var h=[],g=[],_=0;if(n===`deleteRange`){if(s.type===4)return e({numFailures:_,failures:g,results:[],lastResult:void 0});s.type===3?h.push(f=l.clear()):h.push(f=l.delete(r(s)))}else{var u=d?u?[o,a]:[o,null]:[a,null],v=u[0],y=u[1];if(d)for(var b=0;b<p;++b)h.push(f=y&&y[b]!==void 0?l[n](v[b],y[b]):l[n](v[b])),f.onerror=m;else for(b=0;b<p;++b)h.push(f=l[n](v[b])),f.onerror=m}function x(t){t=t.target.result,h.forEach(function(e,t){return e.error!=null&&(g[t]=e.error)}),e({numFailures:_,failures:g,results:n===`delete`?a:h.map(function(e){return e.result}),lastResult:t})}f.onerror=function(e){m(e),x(e)},f.onsuccess=x})},getMany:function(e){var t=e.trans,n=e.keys;return new Promise(function(e,r){e=U(e);for(var a,o=t.objectStore(i),s=n.length,c=Array(s),l=0,u=0,d=function(t){t=t.target,c[t._pos]=t.result,++u===l&&e(c)},f=Z(r),p=0;p<s;++p)n[p]!=null&&((a=o.get(n[p]))._pos=p,a.onsuccess=d,a.onerror=f,++l);l===0&&e(c)})},get:function(e){var t=e.trans,n=e.key;return new Promise(function(e,r){e=U(e);var a=t.objectStore(i).get(n);a.onsuccess=function(t){return e(t.target.result)},a.onerror=Z(r)})},query:(t=c,n=l,function(e){return new Promise(function(a,o){a=U(a);var s,c,l,u,d=e.trans,f=e.values,p=e.limit,m=e.query,h=(h=e.direction)??`next`,g=p===1/0?void 0:p,_=m.index,m=m.range,d=d.objectStore(i),d=_.isPrimaryKey?d:d.index(_.name),_=r(m);if(p===0)return a({result:[]});n?(m={query:_,count:g,direction:h},(s=f?d.getAll(m):d.getAllKeys(m)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=Z(o)):t&&h===`next`?((s=f?d.getAll(_,g):d.getAllKeys(_,g)).onsuccess=function(e){return a({result:e.target.result})},s.onerror=Z(o)):(c=0,l=!f&&`openKeyCursor`in d?d.openKeyCursor(_,h):d.openCursor(_,h),u=[],l.onsuccess=function(){var e=l.result;return!e||(u.push(f?e.value:e.primaryKey),++c===p)?a({result:u}):void e.continue()},l.onerror=Z(o))})}),openCursor:function(e){var t=e.trans,n=e.values,a=e.query,o=e.reverse,s=e.unique;return new Promise(function(e,c){e=U(e);var l=a.index,u=a.range,d=t.objectStore(i),d=l.isPrimaryKey?d:d.index(l.name),l=o?s?`prevunique`:`prev`:s?`nextunique`:`next`,f=!n&&`openKeyCursor`in d?d.openKeyCursor(r(u),l):d.openCursor(r(u),l);f.onerror=Z(c),f.onsuccess=U(function(n){var r,i,a,o,s=f.result;s?(s.___id=++Qt,s.done=!1,r=s.continue.bind(s),i=(i=s.continuePrimaryKey)&&i.bind(s),a=s.advance.bind(s),o=function(){throw Error(`Cursor not stopped`)},s.trans=t,s.stop=s.continue=s.continuePrimaryKey=s.advance=function(){throw Error(`Cursor not started`)},s.fail=U(c),s.next=function(){var e=this,t=1;return this.start(function(){return t--?e.continue():e.stop()}).then(function(){return e})},s.start=function(e){function t(){if(f.result)try{e()}catch(e){s.fail(e)}else s.done=!0,s.start=function(){throw Error(`Cursor behind last entry`)},s.stop()}var n=new Promise(function(e,t){e=U(e),f.onerror=Z(t),s.fail=t,s.stop=function(t){s.stop=s.continue=s.continuePrimaryKey=s.advance=o,e(t)}});return f.onsuccess=U(function(e){f.onsuccess=t,t()}),s.continue=r,s.continuePrimaryKey=i,s.advance=a,t(),n},e(s)):e(null)},c)})},count:function(e){var t=e.query,n=e.trans,a=t.index,o=t.range;return new Promise(function(e,t){var s=n.objectStore(i),s=a.isPrimaryKey?s:s.index(a.name),c=r(o),c=c?s.count(c):s.count();c.onsuccess=U(function(t){return e(t.target.result)}),c.onerror=Z(t)})}}}o=n,s=Zt((n=e).objectStoreNames),u=0<s.length?o.objectStore(s[0]):{};var o,n={schema:{name:n.name,tables:s.map(function(e){return o.objectStore(e)}).map(function(e){var t=e.keyPath,n=e.autoIncrement,r=a(t),i={},r={name:e.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:t==null,compound:r,keyPath:t,autoIncrement:n,unique:!0,extractKey:Xt(t)},indexes:Zt(e.indexNames).map(function(t){return e.index(t)}).map(function(e){var t=e.name,n=e.unique,r=e.multiEntry,e=e.keyPath,t={name:t,compound:a(e),keyPath:e,unique:n,multiEntry:r,extractKey:Xt(e)};return i[$t(e)]=t}),getIndexByKeyPath:function(e){return i[$t(e)]}};return i[`:id`]=r.primaryKey,t!=null&&(i[$t(t)]=r.primaryKey),r})},hasGetAll:0<s.length&&`getAll`in u&&!(typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:`getAllRecords`in u},s=n.schema,c=n.hasGetAll,l=n.hasIdb3Features,u=s.tables.map(i),d={};return u.forEach(function(e){return d[e.name]=e}),{stack:`dbcore`,transaction:e.transaction.bind(e),table:function(e){if(d[e])return d[e];throw Error(`Table '${e}' not found`)},MIN_KEY:-1/0,MAX_KEY:Yt(t),schema:s}}function tn(e,n,r,i){return r=r.IDBKeyRange,n=en(n,r,i),{dbcore:e.dbcore.reduce(function(e,n){return n=n.create,t(t({},e),n(e))},n)}}function nn(e,t){var n=t.db,n=tn(e._middlewares,n,e._deps,t);e.core=n.dbcore,e.tables.forEach(function(t){var n=t.name;e.core.schema.tables.some(function(e){return e.name===n})&&(t.core=e.core.table(n),e[n]instanceof e.Table)&&(e[n].core=t.core)})}function rn(e,t,n,r){n.forEach(function(n){var i=r[n];t.forEach(function(t){var r=function e(t,n){return m(t,n)||(t=s(t))&&e(t,n)}(t,n);(!r||`value`in r&&r.value===void 0)&&(t===e.Transaction.prototype||t instanceof e.Transaction?f(t,n,{get:function(){return this.table(n)},set:function(e){d(this,n,{value:e,writable:!0,configurable:!0,enumerable:!0})}}):t[n]=new e.Table(n,i))})})}function an(e,t){t.forEach(function(t){for(var n in t)t[n]instanceof e.Table&&delete t[n]})}function on(e,t){return e._cfg.version-t._cfg.version}function sn(e,t,n,r){var a=e._dbSchema,o=(n.objectStoreNames.contains(`$meta`)&&!a.$meta&&(a.$meta=Jt(`$meta`,hn(``)[0],[]),e._storeNames.push(`$meta`)),e._createTransaction(`readwrite`,e._storeNames,a)),s=(o.create(n),o._completion.catch(r),o._reject.bind(o)),c=B.transless||B;Ye(function(){if(B.trans=o,B.transless=c,t!==0)return nn(e,n),l=t,((r=o).storeNames.includes(`$meta`)?r.table(`$meta`).get(`version`).then(function(e){return e??l}):H.resolve(l)).then(function(t){var r=e,a=t,s=o,c=n,l=[],t=r._versions,u=r._dbSchema=pn(0,r.idbdb,c);return(t=t.filter(function(e){return e._cfg.version>=a})).length===0?H.resolve():(t.forEach(function(e){l.push(function(){var t,n,o,l=u,d=e._cfg.dbschema,f=(mn(r,l,c),mn(r,d,c),u=r._dbSchema=d,ln(l,d)),p=(f.add.forEach(function(e){un(c,e[0],e[1].primKey,e[1].indexes)}),f.change.forEach(function(e){if(e.recreate)throw new F.Upgrade(`Not yet support for changing primary key`);var t=c.objectStore(e.name);e.add.forEach(function(e){return fn(t,e)}),e.change.forEach(function(e){t.deleteIndex(e.name),fn(t,e)}),e.del.forEach(function(e){return t.deleteIndex(e)})}),e._cfg.contentUpgrade);if(p&&e._cfg.version>a)return nn(r,c),s._memoizedTables={},t=ee(d),f.del.forEach(function(e){t[e]=l[e]}),an(r,[r.Transaction.prototype]),rn(r,[r.Transaction.prototype],i(t),t),s.schema=t,(n=M(p))&&Xe(),d=H.follow(function(){var e;(o=p(s))&&n&&(e=Ze.bind(null,null),o.then(e,e))}),o&&typeof o.then==`function`?H.resolve(o):d.then(function(){return o})}),l.push(function(t){var n=e._cfg.dbschema,i=t;[].slice.call(i.db.objectStoreNames).forEach(function(e){return n[e]==null&&i.db.deleteObjectStore(e)}),an(r,[r.Transaction.prototype]),rn(r,[r.Transaction.prototype],r._storeNames,r._dbSchema),s.schema=r._dbSchema}),l.push(function(t){r.idbdb.objectStoreNames.contains(`$meta`)&&(Math.ceil(r.idbdb.version/10)===e._cfg.version?(r.idbdb.deleteObjectStore(`$meta`),delete r._dbSchema.$meta,r._storeNames=r._storeNames.filter(function(e){return e!==`$meta`})):t.objectStore(`$meta`).put(e._cfg.version,`version`))})}),function e(){return l.length?H.resolve(l.shift()(s.idbtrans)).then(e):H.resolve()}().then(function(){dn(u,c)}))}).catch(s);var r,l;i(a).forEach(function(e){un(n,e,a[e].primKey,a[e].indexes)}),nn(e,n),H.follow(function(){return e.on.populate.fire(o)}).catch(s)})}function cn(e,t){dn(e._dbSchema,t),t.db.version%10!=0||t.objectStoreNames.contains(`$meta`)||t.db.createObjectStore(`$meta`).add(Math.ceil(t.db.version/10-1),`version`);var n=pn(0,e.idbdb,t);mn(e,e._dbSchema,t);for(var r=0,i=ln(n,e._dbSchema).change;r<i.length;r++){var a=(e=>{if(e.change.length||e.recreate)return console.warn(`Unable to patch indexes of table ${e.name} because it has changes on the type of index or primary key.`),{value:void 0};var n=t.objectStore(e.name);e.add.forEach(function(t){R&&console.debug(`Dexie upgrade patch: Creating missing index ${e.name}.${t.src}`),fn(n,t)})})(i[r]);if(typeof a==`object`)return a.value}}function ln(e,t){var n,r={del:[],add:[],change:[]};for(n in e)t[n]||r.del.push(n);for(n in t){var i=e[n],a=t[n];if(i){var o={name:n,def:a,recreate:!1,del:[],add:[],change:[]};if(``+(i.primKey.keyPath||``)!=``+(a.primKey.keyPath||``)||i.primKey.auto!==a.primKey.auto)o.recreate=!0,r.change.push(o);else{var s=i.idxByName,c=a.idxByName,l=void 0;for(l in s)c[l]||o.del.push(l);for(l in c){var u=s[l],d=c[l];u?u.src!==d.src&&o.change.push(d):o.add.push(d)}(0<o.del.length||0<o.add.length||0<o.change.length)&&r.change.push(o)}}else r.add.push([n,a])}return r}function un(e,t,n,r){var i=e.db.createObjectStore(t,n.keyPath?{keyPath:n.keyPath,autoIncrement:n.auto}:{autoIncrement:n.auto});r.forEach(function(e){return fn(i,e)})}function dn(e,t){i(e).forEach(function(n){t.db.objectStoreNames.contains(n)||(R&&console.debug(`Dexie: Creating missing table`,n),un(t,n,e[n].primKey,e[n].indexes))})}function fn(e,t){e.createIndex(t.name,t.keyPath,{unique:t.unique,multiEntry:t.multi})}function pn(e,t,n){var r={};return g(t.objectStoreNames,0).forEach(function(e){for(var t=n.objectStore(e),i=Kt(qt(c=t.keyPath),c||``,!0,!1,!!t.autoIncrement,c&&typeof c!=`string`,!0),a=[],o=0;o<t.indexNames.length;++o){var s=t.index(t.indexNames[o]),c=s.keyPath,s=Kt(s.name,c,!!s.unique,!!s.multiEntry,!1,c&&typeof c!=`string`,!1);a.push(s)}r[e]=Jt(e,i,a)}),r}function mn(e,t,n){for(var i=n.db.objectStoreNames,a=0;a<i.length;++a){var o=i[a],s=n.objectStore(o);e._hasGetAll=`getAll`in s;for(var c=0;c<s.indexNames.length;++c){var l,u=s.indexNames[c],d=s.index(u).keyPath,d=typeof d==`string`?d:`[`+g(d).join(`+`)+`]`;t[o]&&(l=t[o].idxByName[d])&&(l.name=u,delete t[o].idxByName[d],t[o].idxByName[u]=l)}}typeof navigator<`u`&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&r.WorkerGlobalScope&&r instanceof r.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function hn(e){return e.split(`,`).map(function(e,t){var n=e.split(`:`),r=(r=n[1])?.trim(),n=(e=n[0].trim()).replace(/([&*]|\+\+)/g,``),i=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split(`+`):n;return Kt(n,i||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(e),a(i),t===0,r)})}_n.prototype._createTableSchema=Jt,_n.prototype._parseIndexSyntax=hn,_n.prototype._parseStoresSpec=function(e,t){var n=this;i(e).forEach(function(r){if(e[r]!==null){var i=n._parseIndexSyntax(e[r]),a=i.shift();if(!a)throw new F.Schema(`Invalid schema for table `+r+`: `+e[r]);if(a.unique=!0,a.multi)throw new F.Schema(`Primary key cannot be multiEntry*`);i.forEach(function(e){if(e.auto)throw new F.Schema(`Only primary key can be marked as autoIncrement (++)`);if(!e.keyPath)throw new F.Schema(`Index must have a name and cannot be an empty string`)}),a=n._createTableSchema(r,a,i),t[r]=a}})},_n.prototype.stores=function(e){var t=this.db,e=(this._cfg.storesSource=this._cfg.storesSource?o(this._cfg.storesSource,e):e,t._versions),n={},r={};return e.forEach(function(e){o(n,e._cfg.storesSource),r=e._cfg.dbschema={},e._parseStoresSpec(n,r)}),t._dbSchema=r,an(t,[t._allTables,t,t.Transaction.prototype]),rn(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],i(r),r),t._storeNames=i(r),this},_n.prototype.upgrade=function(e){return this._cfg.contentUpgrade=_e(this._cfg.contentUpgrade||I,e),this};var gn=_n;function _n(){}var vn=(()=>{var e,t,n;return typeof FinalizationRegistry<`u`&&typeof WeakRef<`u`?(e=new Set,t=new FinalizationRegistry(function(t){e.delete(t)}),{toArray:function(){return Array.from(e).map(function(e){return e.deref()}).filter(function(e){return e!==void 0})},add:function(n){var r=new WeakRef(n._novip);e.add(r),t.register(n._novip,r,r),e.size>n._options.maxConnections&&(r=e.values().next().value,e.delete(r),t.unregister(r))},remove:function(n){if(n)for(var r=e.values(),i=r.next();!i.done;){var a=i.value;if(a.deref()===n._novip)return e.delete(a),void t.unregister(a);i=r.next()}}}):(n=[],{toArray:function(){return n},add:function(e){n.push(e._novip)},remove:function(e){e&&(e=n.indexOf(e._novip))!==-1&&n.splice(e,1)}})})();function yn(e,t){var n=e._dbNamesDB;return n||(n=e._dbNamesDB=new rr(ct,{addons:[],indexedDB:e,IDBKeyRange:t})).version(1).stores({dbnames:`name`}),n.table(`dbnames`)}function bn(e){return e&&typeof e.databases==`function`}function xn(e){return Ye(function(){return B.letThrough=!0,e()})}function Sn(e){return!(`from`in e)}var Q=function(e,t){var n;if(!this)return n=new Q,e&&`d`in e&&o(n,e),n;o(this,arguments.length?{d:1,from:e,to:1<arguments.length?t:e}:{d:0})};function Cn(e,t,n){var r=K(t,n);if(!isNaN(r)){if(0<r)throw RangeError();if(Sn(e))return o(e,{from:t,to:n,d:1});var r=e.l,i=e.r;if(K(n,e.from)<0)return r?Cn(r,t,n):e.l={from:t,to:n,d:1,l:null,r:null},Dn(e);if(0<K(t,e.to))return i?Cn(i,t,n):e.r={from:t,to:n,d:1,l:null,r:null},Dn(e);K(t,e.from)<0&&(e.from=t,e.l=null,e.d=i?i.d+1:1),0<K(n,e.to)&&(e.to=n,e.r=null,e.d=e.l?e.l.d+1:1),t=!e.r,r&&!e.l&&wn(e,r),i&&t&&wn(e,i)}}function wn(e,t){Sn(t)||function e(t,n){var r=n.from,i=n.l,a=n.r;Cn(t,r,n.to),i&&e(t,i),a&&e(t,a)}(e,t)}function Tn(e,t){var n=En(t),r=n.next();if(!r.done)for(var i=r.value,a=En(e),o=a.next(i.from),s=o.value;!r.done&&!o.done;){if(K(s.from,i.to)<=0&&0<=K(s.to,i.from))return!0;K(i.from,s.from)<0?i=(r=n.next(s.from)).value:s=(o=a.next(i.from)).value}return!1}function En(e){var t=Sn(e)?null:{s:0,n:e};return{next:function(e){for(var n=0<arguments.length;t;)switch(t.s){case 0:if(t.s=1,n)for(;t.n.l&&K(e,t.n.from)<0;)t={up:t,n:t.n.l,s:1};else for(;t.n.l;)t={up:t,n:t.n.l,s:1};case 1:if(t.s=2,!n||K(e,t.n.to)<=0)return{value:t.n,done:!1};case 2:if(t.n.r){t.s=3,t={up:t,n:t.n.r,s:0};continue}case 3:t=t.up}return{done:!0}}}}function Dn(e){var n,r,i,a=((a=e.r)?.d||0)-((a=e.l)?.d||0),a=1<a?`r`:a<-1?`l`:``;a&&(n=a==`r`?`l`:`r`,r=t({},e),i=e[a],e.from=i.from,e.to=i.to,e[a]=i[a],r[a]=i[n],(e[n]=r).d=On(r)),e.d=On(e)}function On(e){var t=e.r,e=e.l;return(t?e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}function kn(e,t){return i(t).forEach(function(n){e[n]?wn(e[n],t[n]):e[n]=function e(t){var n,r,i={};for(n in t)l(t,n)&&(r=t[n],i[n]=!r||typeof r!=`object`||ne.has(r.constructor)?r:e(r));return i}(t[n])}),e}function An(e,t){return e.all||t.all||Object.keys(e).some(function(n){return t[n]&&Tn(t[n],e[n])})}u(Q.prototype,((N={add:function(e){return wn(this,e),this},addKey:function(e){return Cn(this,e,e),this},addKeys:function(e){var t=this;return e.forEach(function(e){return Cn(t,e,e)}),this},hasKey:function(e){var t=En(this).next(e).value;return t&&K(t.from,e)<=0&&0<=K(t.to,e)}})[O]=function(){return En(this)},N));var jn={},Mn={},Nn=!1;function Pn(e){kn(Mn,e),Nn||(Nn=!0,setTimeout(function(){Nn=!1,Fn(Mn,!(Mn={}))},0))}function Fn(e,t){t===void 0&&(t=!1);var n=new Set;if(e.all)for(var r=0,i=Object.values(jn);r<i.length;r++)In(s=i[r],e,n,t);else for(var a in e){var o,s,a=/^idb\:\/\/(.*)\/(.*)\//.exec(a);a&&(o=a[1],a=a[2],s=jn[`idb://${o}/${a}`])&&In(s,e,n,t)}n.forEach(function(e){return e()})}function In(e,t,n,r){for(var i=[],a=0,o=Object.entries(e.queries.query);a<o.length;a++){for(var s=o[a],c=s[0],l=[],u=0,d=s[1];u<d.length;u++){var f=d[u];An(t,f.obsSet)?f.subscribers.forEach(function(e){return n.add(e)}):r&&l.push(f)}r&&i.push([c,l])}if(r)for(var p=0,m=i;p<m.length;p++){var h=m[p],c=h[0],l=h[1];e.queries.query[c]=l}}function Ln(e){var t=e._state,n=e._deps.indexedDB;if(t.isBeingOpened||e.idbdb)return t.dbReadyPromise.then(function(){return t.dbOpenError?G(t.dbOpenError):e});t.isBeingOpened=!0,t.dbOpenError=null,t.openComplete=!1;var r=t.openCanceller,a=Math.round(10*e.verno),o=!1;function s(){if(t.openCanceller!==r)throw new F.DatabaseClosed(`db.open() was cancelled`)}function c(){return new H(function(r,l){if(s(),!n)throw new F.MissingAPI;var u=e.name,p=t.autoSchema||!a?n.open(u):n.open(u,a);if(!p)throw new F.MissingAPI;p.onerror=Z(l),p.onblocked=U(e._fireOnBlocked),p.onupgradeneeded=U(function(r){var i;d=p.transaction,t.autoSchema&&!e._options.allowEmptyDB?(p.onerror=Bt,d.abort(),p.result.close(),(i=n.deleteDatabase(u)).onsuccess=i.onerror=U(function(){l(new F.NoSuchDatabase(`Database ${u} doesnt exist`))})):(d.onerror=Z(l),i=r.oldVersion>2**62?0:r.oldVersion,f=i<1,e.idbdb=p.result,o&&cn(e,d),sn(e,i/10,d,l))},l),p.onsuccess=U(function(){d=null;var n,s,l,m,h,_,v=e.idbdb=p.result,y=g(v.objectStoreNames);if(0<y.length)try{var b=v.transaction((h=y).length===1?h[0]:h,`readonly`);if(t.autoSchema)_=v,m=b,(l=e).verno=_.version/10,m=l._dbSchema=pn(0,_,m),l._storeNames=g(_.objectStoreNames,0),rn(l,[l._allTables],i(m),m);else if(mn(e,e._dbSchema,b),s=b,((s=ln(pn(0,(n=e).idbdb,s),n._dbSchema)).add.length||s.change.some(function(e){return e.add.length||e.change.length}))&&!o)return console.warn(`Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this.`),v.close(),a=v.version+1,o=!0,r(c());nn(e,b)}catch{}vn.add(e),v.onversionchange=U(function(n){t.vcFired=!0,e.on(`versionchange`).fire(n)}),v.onclose=U(function(){e.close({disableAutoOpen:!1})}),f&&(y=e._deps,h=u,bn(_=y.indexedDB)||h===ct||yn(_,y.IDBKeyRange).put({name:h}).catch(I)),r()},l)}).catch(function(e){switch(e?.name){case`UnknownError`:if(0<t.PR1398_maxLoop)return t.PR1398_maxLoop--,console.warn(`Dexie: Workaround for Chrome UnknownError on open()`),c();break;case`VersionError`:if(0<a)return a=0,c()}return H.reject(e)})}var l,u=t.dbReadyResolve,d=null,f=!1;return H.race([r,(typeof navigator>`u`?H.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(e){function t(){return indexedDB.databases().finally(e)}l=setInterval(t,100),t()}).finally(function(){return clearInterval(l)}):Promise.resolve()).then(c)]).then(function(){return s(),t.onReadyBeingFired=[],H.resolve(xn(function(){return e.on.ready.fire(e.vip)})).then(function n(){var r;if(0<t.onReadyBeingFired.length)return r=t.onReadyBeingFired.reduce(_e,I),t.onReadyBeingFired=[],H.resolve(xn(function(){return r(e.vip)})).then(n)})}).finally(function(){t.openCanceller===r&&(t.onReadyBeingFired=null,t.isBeingOpened=!1)}).catch(function(n){t.dbOpenError=n;try{d&&d.abort()}catch{}return r===t.openCanceller&&e._close(),G(n)}).finally(function(){t.openComplete=!0,u()}).then(function(){var t;return f&&(t={},e.tables.forEach(function(n){n.schema.indexes.forEach(function(r){r.name&&(t[`idb://${e.name}/${n.name}/${r.name}`]=new Q(-1/0,[[[]]]))}),t[`idb://${e.name}/${n.name}/`]=t[`idb://${e.name}/${n.name}/:dels`]=new Q(-1/0,[[[]]])}),Ut(Vt).fire(t),Fn(t,!0)),e})}function Rn(e){function t(t){return e.next(t)}var n=i(t),r=i(function(t){return e.throw(t)});function i(e){return function(t){var t=e(t),i=t.value;return t.done?i:i&&typeof i.then==`function`?i.then(n,r):a(i)?Promise.all(i).then(n,r):n(i)}}return i(t)()}function zn(e,t,n){for(var r=a(e)?e.slice():[e],i=0;i<n;++i)r.push(t);return r}var Bn={stack:`dbcore`,name:`VirtualIndexMiddleware`,level:1,create:function(e){return t(t({},e),{table:function(n){var r=e.table(n),n=r.schema,i={},a=[];function o(e,n,r){var s=$t(e),c=i[s]=i[s]||[],l=e==null?0:typeof e==`string`?1:e.length,u=0<n,s=t(t({},r),{name:u?`${s}(virtual-from:${r.name})`:r.name,lowLevelIndex:r,isVirtual:u,keyTail:n,keyLength:l,extractKey:Xt(e),unique:!u&&r.unique});return c.push(s),s.isPrimaryKey||a.push(s),1<l&&o(l===2?e[0]:e.slice(0,l-1),n+1,r),c.sort(function(e,t){return e.keyTail-t.keyTail}),s}var s=o(n.primaryKey.keyPath,0,n.primaryKey);i[`:id`]=[s];for(var c=0,l=n.indexes;c<l.length;c++){var u=l[c];o(u.keyPath,0,u)}function d(n){var r,i=n.query.index;return i.isVirtual?t(t({},n),{query:{index:i.lowLevelIndex,range:(r=n.query.range,i=i.keyTail,{type:r.type===1?2:r.type,lower:zn(r.lower,r.lowerOpen?e.MAX_KEY:e.MIN_KEY,i),lowerOpen:!0,upper:zn(r.upper,r.upperOpen?e.MIN_KEY:e.MAX_KEY,i),upperOpen:!0})}}):n}return t(t({},r),{schema:t(t({},n),{primaryKey:s,indexes:a,getIndexByKeyPath:function(e){return(e=i[$t(e)])&&e[0]}}),count:function(e){return r.count(d(e))},query:function(e){return r.query(d(e))},openCursor:function(t){var n=t.query.index,i=n.keyTail,a=n.keyLength;return n.isVirtual?r.openCursor(d(t)).then(function(e){return e&&o(e)}):r.openCursor(t);function o(n){return Object.create(n,{continue:{value:function(r){r==null?t.unique?n.continue(n.key.slice(0,a).concat(t.reverse?e.MIN_KEY:e.MAX_KEY,i)):n.continue():n.continue(zn(r,t.reverse?e.MAX_KEY:e.MIN_KEY,i))}},continuePrimaryKey:{value:function(t,r){n.continuePrimaryKey(zn(t,e.MAX_KEY,i),r)}},primaryKey:{get:function(){return n.primaryKey}},key:{get:function(){var e=n.key;return a===1?e[0]:e.slice(0,a)}},value:{get:function(){return n.value}}})}}})}})}};function Vn(e,t,n,r){return n||={},r||=``,i(e).forEach(function(i){var a,o,s;l(t,i)?(a=e[i],o=t[i],typeof a==`object`&&typeof o==`object`&&a&&o?(s=D(a))===D(o)?s===`Object`?Vn(a,o,n,r+i+`.`):a!==o&&(n[r+i]=t[i]):n[r+i]=t[i]:a!==o&&(n[r+i]=t[i])):n[r+i]=void 0}),i(t).forEach(function(i){l(e,i)||(n[r+i]=t[i])}),n}function Hn(e,t){return t.type===`delete`?t.keys:t.keys||t.values.map(e.extractKey)}var Un={stack:`dbcore`,name:`HooksMiddleware`,level:2,create:function(e){return t(t({},e),{table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o=B.trans,s=o.table(r).hook,c=s.deleting,u=s.creating,d=s.updating;switch(e.type){case`add`:if(u.fire===I)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`put`:if(u.fire===I&&d.fire===I)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`delete`:if(c.fire===I)break;return o._promise(`readwrite`,function(){return f(e)},!0);case`deleteRange`:if(c.fire===I)break;return o._promise(`readwrite`,function(){return function e(n,r,o){return i.query({trans:n,values:!1,query:{index:a,range:r},limit:o}).then(function(i){var a=i.result;return f({type:`delete`,keys:a,trans:n}).then(function(i){return 0<i.numFailures?Promise.reject(i.failures[0]):a.length<o?{failures:[],numFailures:0,lastResult:void 0}:e(n,t(t({},r),{lower:a[a.length-1],lowerOpen:!0}),o)})})}(e.trans,e.range,1e4)},!0)}return i.mutate(e);function f(e){var r,o,s,f=B.trans,p=e.keys||Hn(a,e);if(p)return(e=e.type===`add`||e.type===`put`?t(t({},e),{keys:p}):t({},e)).type!==`delete`&&(e.values=n([],e.values,!0)),e.keys&&=n([],e.keys,!0),r=i,s=p,((o=e).type===`add`?Promise.resolve([]):r.getMany({trans:o.trans,keys:s,cache:`immutable`})).then(function(t){var n=p.map(function(n,r){var i,o,s,p=t[r],m={onerror:null,onsuccess:null};return e.type===`delete`?c.fire.call(m,n,p,f):e.type===`add`||p===void 0?(i=u.fire.call(m,n,e.values[r],f),n==null&&i!=null&&(e.keys[r]=n=i,a.outbound||x(e.values[r],a.keyPath,n))):(i=Vn(p,e.values[r]),(o=d.fire.call(m,i,n,p,f))&&(s=e.values[r],Object.keys(o).forEach(function(e){l(s,e)?s[e]=o[e]:x(s,e,o[e])}))),m});return i.mutate(e).then(function(r){for(var i=r.failures,a=r.results,o=r.numFailures,r=r.lastResult,s=0;s<p.length;++s){var c=(a||p)[s],l=n[s];c==null?l.onerror&&l.onerror(i[s]):l.onsuccess&&l.onsuccess(e.type===`put`&&t[s]?e.values[s]:c)}return{failures:i,results:a,numFailures:o,lastResult:r}}).catch(function(e){return n.forEach(function(t){return t.onerror&&t.onerror(e)}),Promise.reject(e)})});throw Error(`Keys missing`)}}})}})}};function Wn(e,t,n){try{if(!t||t.keys.length<e.length)return null;for(var r=[],i=0,a=0;i<t.keys.length&&a<e.length;++i)K(t.keys[i],e[a])===0&&(r.push(n?T(t.values[i]):t.values[i]),++a);return r.length===e.length?r:null}catch{return null}}var Gn={stack:`dbcore`,level:-1,create:function(e){return{table:function(n){var r=e.table(n);return t(t({},r),{getMany:function(e){var t;return e.cache?(t=Wn(e.keys,e.trans._cache,e.cache===`clone`))?H.resolve(t):r.getMany(e).then(function(t){return e.trans._cache={keys:e.keys,values:e.cache===`clone`?T(t):t},t}):r.getMany(e)},mutate:function(e){return e.type!==`add`&&(e.trans._cache=null),r.mutate(e)}})}}}};function Kn(e,t){return e.trans.mode===`readonly`&&!!e.subscr&&!e.trans.explicit&&e.trans.db._options.cache!==`disabled`&&!t.schema.primaryKey.outbound}function qn(e,t){switch(e){case`query`:return t.values&&!t.unique;case`get`:case`getMany`:case`count`:case`openCursor`:return!1}}var Jn={stack:`dbcore`,level:0,name:`Observability`,create:function(e){var n=e.schema.name,r=new Q(e.MIN_KEY,e.MAX_KEY);return t(t({},e),{transaction:function(t,n,r){if(B.subscr&&n!==`readonly`)throw new F.ReadOnly(`Readwrite transaction in liveQuery context. Querier source: ${B.querier}`);return e.transaction(t,n,r)},table:function(o){function s(t){var t=t.query;return[t.index,new Q((t=t.range).lower??e.MIN_KEY,t.upper??e.MAX_KEY)]}var c=e.table(o),l=c.schema,u=l.primaryKey,d=l.indexes,f=u.extractKey,p=u.outbound,m=u.autoIncrement&&d.filter(function(e){return e.compound&&e.keyPath.includes(u.keyPath)}),h=t(t({},c),{mutate:function(t){function i(e){return e=`idb://${n}/${o}/${e}`,h[e]||(h[e]=new Q)}var s,d,f,p=t.trans,h=t.mutatedParts||={},g=i(``),_=i(`:dels`),v=t.type,y=t.type===`deleteRange`?[t.range]:t.type===`delete`?[t.keys]:t.values.length<50?[Hn(u,t).filter(function(e){return e}),t.values]:[],b=y[0],y=y[1],x=t.trans._cache;return a(b)?(g.addKeys(b),(v=v===`delete`||b.length===y.length?Wn(b,x):null)||_.addKeys(b),(v||y)&&(s=i,d=v,f=y,l.indexes.forEach(function(e){var t=s(e.name||``);function n(t){return t==null?null:e.extractKey(t)}function r(n){e.multiEntry&&a(n)?n.forEach(function(e){return t.addKey(e)}):t.addKey(n)}(d||f).forEach(function(e,t){var i=d&&n(d[t]),t=f&&n(f[t]);K(i,t)!==0&&(i!=null&&r(i),t!=null)&&r(t)})}))):b?(y={from:(x=b.lower)??e.MIN_KEY,to:(v=b.upper)??e.MAX_KEY},_.add(y),g.add(y)):(g.add(r),_.add(r),l.indexes.forEach(function(e){return i(e.name).add(r)})),c.mutate(t).then(function(e){return!b||t.type!==`add`&&t.type!==`put`||(g.addKeys(e.results),m&&m.forEach(function(n){for(var r=t.values.map(function(e){return n.extractKey(e)}),a=n.keyPath.findIndex(function(e){return e===u.keyPath}),o=0,s=e.results.length;o<s;++o)r[o][a]=e.results[o];i(n.name).addKeys(r)})),p.mutatedParts=kn(p.mutatedParts||{},h),e})}}),g={get:function(e){return[u,new Q(e.key)]},getMany:function(e){return[u,new Q().addKeys(e.keys)]},count:s,query:s,openCursor:s};return i(g).forEach(function(e){h[e]=function(i){var a=B.subscr,s=!!a,l=Kn(B,c)&&qn(e,i)?i.obsSet={}:a;if(s){var u,a=function(e){return e=`idb://${n}/${o}/${e}`,l[e]||(l[e]=new Q)},d=a(``),m=a(`:dels`),s=g[e](i),h=s[0],s=s[1];if((e===`query`&&h.isPrimaryKey&&!i.values?m:a(h.name||``)).add(s),!h.isPrimaryKey){if(e!==`count`)return u=e===`query`&&p&&i.values&&c.query(t(t({},i),{values:!1})),c[e].apply(this,arguments).then(function(t){if(e===`query`){if(p&&i.values)return u.then(function(e){return e=e.result,d.addKeys(e),t});var n=i.values?t.result.map(f):t.result;(i.values?d:m).addKeys(n)}else{var r,a;if(e===`openCursor`)return a=i.values,(r=t)&&Object.create(r,{key:{get:function(){return m.addKey(r.primaryKey),r.key}},primaryKey:{get:function(){var e=r.primaryKey;return m.addKey(e),e}},value:{get:function(){return a&&d.addKey(r.primaryKey),r.value}}})}return t});m.add(r)}}return c[e].apply(this,arguments)}}),h}})}};function Yn(e,n,r){var i;return r.numFailures===0?n:n.type===`deleteRange`||(i=n.keys?n.keys.length:`values`in n&&n.values?n.values.length:1,r.numFailures===i)?null:(i=t({},n),a(i.keys)&&(i.keys=i.keys.filter(function(e,t){return!(t in r.failures)})),`values`in i&&a(i.values)&&(i.values=i.values.filter(function(e,t){return!(t in r.failures)})),i)}function Xn(e,t){return n=e,((r=t).lower===void 0||(r.lowerOpen?0<K(n,r.lower):0<=K(n,r.lower)))&&(n=e,(r=t).upper===void 0||(r.upperOpen?K(n,r.upper)<0:K(n,r.upper)<=0));var n,r}function Zn(e,t,n,r,i,o){var s,c,l,u,d,f,p;return!n||n.length===0||(s=t.query.index,c=s.multiEntry,l=t.query.range,u=r.schema.primaryKey.extractKey,d=s.extractKey,f=(s.lowLevelIndex||s).extractKey,(r=n.reduce(function(e,n){var r=e,i=[];if(n.type===`add`||n.type===`put`)for(var o=new Q,s=n.values.length-1;0<=s;--s){var f,p=n.values[s],m=u(p);!o.hasKey(m)&&(f=d(p),c&&a(f)?f.some(function(e){return Xn(e,l)}):Xn(f,l))&&(o.addKey(m),i.push(p))}switch(n.type){case`add`:var h=new Q().addKeys(t.values?e.map(function(e){return u(e)}):e),r=e.concat(t.values?i.filter(function(e){return e=u(e),!h.hasKey(e)&&(h.addKey(e),!0)}):i.map(function(e){return u(e)}).filter(function(e){return!h.hasKey(e)&&(h.addKey(e),!0)}));break;case`put`:var g=new Q().addKeys(n.values.map(function(e){return u(e)}));r=e.filter(function(e){return!g.hasKey(t.values?u(e):e)}).concat(t.values?i:i.map(function(e){return u(e)}));break;case`delete`:var _=new Q().addKeys(n.keys);r=e.filter(function(e){return!_.hasKey(t.values?u(e):e)});break;case`deleteRange`:var v=n.range;r=e.filter(function(e){return!Xn(u(e),v)})}return r},e))===e)?e:(p=function(e,t){return K(f(e),f(t))||K(u(e),u(t))},r.sort(t.direction===`prev`||t.direction===`prevunique`?function(e,t){return p(t,e)}:p),t.limit&&t.limit<1/0&&(r.length>t.limit?r.length=t.limit:e.length===t.limit&&r.length<t.limit&&(i.dirty=!0)),o?Object.freeze(r):r)}function Qn(e,t){return K(e.lower,t.lower)===0&&K(e.upper,t.upper)===0&&!!e.lowerOpen==!!t.lowerOpen&&!!e.upperOpen==!!t.upperOpen}function $n(e,t){return((e,t,n,r)=>{if(e===void 0)return t===void 0?0:-1;if(t===void 0)return 1;if((e=K(e,t))===0){if(n&&r)return 0;if(n)return 1;if(r)return-1}return e})(e.lower,t.lower,e.lowerOpen,t.lowerOpen)<=0&&0<=((e,t,n,r)=>{if(e===void 0)return t===void 0?0:1;if(t===void 0)return-1;if((e=K(e,t))===0){if(n&&r)return 0;if(n)return-1;if(r)return 1}return e})(e.upper,t.upper,e.upperOpen,t.upperOpen)}function er(e,t,n,r){e.subscribers.add(n),r.addEventListener(`abort`,function(){var r,i;e.subscribers.delete(n),e.subscribers.size===0&&(r=e,i=t,setTimeout(function(){r.subscribers.size===0&&k(i,r)},3e3))})}var tr={stack:`dbcore`,level:0,name:`Cache`,create:function(e){var n=e.schema.name;return t(t({},e),{transaction:function(t,r,i){var a,o,s=e.transaction(t,r,i);return r===`readwrite`&&(i=(a=new AbortController).signal,s.addEventListener(`abort`,(o=function(i){return function(){if(a.abort(),r===`readwrite`){for(var o=new Set,c=0,l=t;c<l.length;c++){var u=l[c],d=jn[`idb://${n}/${u}`];if(d){var f=e.table(u),p=d.optimisticOps.filter(function(e){return e.trans===s});if(s._explicit&&i&&s.mutatedParts)for(var m=0,h=Object.values(d.queries.query);m<h.length;m++)for(var g=0,_=(b=h[m]).slice();g<_.length;g++)An((x=_[g]).obsSet,s.mutatedParts)&&(k(b,x),x.subscribers.forEach(function(e){return o.add(e)}));else if(0<p.length){d.optimisticOps=d.optimisticOps.filter(function(e){return e.trans!==s});for(var v=0,y=Object.values(d.queries.query);v<y.length;v++)for(var b,x,ee,S=0,te=(b=y[v]).slice();S<te.length;S++)(x=te[S]).res!=null&&s.mutatedParts&&(i&&!x.dirty?(ee=Object.isFrozen(x.res),ee=Zn(x.res,x.req,p,f,x,ee),x.dirty?(k(b,x),x.subscribers.forEach(function(e){return o.add(e)})):ee!==x.res&&(x.res=ee,x.promise=H.resolve({result:ee}))):(x.dirty&&k(b,x),x.subscribers.forEach(function(e){return o.add(e)})))}}}o.forEach(function(e){return e()})}}})(!1),{signal:i}),s.addEventListener(`error`,o(!1),{signal:i}),s.addEventListener(`complete`,o(!0),{signal:i})),s},table:function(r){var i=e.table(r),a=i.schema.primaryKey;return t(t({},i),{mutate:function(e){var o,s=B.trans;return!a.outbound&&s.db._options.cache!==`disabled`&&!s.explicit&&s.idbtrans.mode===`readwrite`&&(o=jn[`idb://${n}/${r}`])?(s=i.mutate(e),e.type!==`add`&&e.type!==`put`||!(50<=e.values.length||Hn(a,e).some(function(e){return e==null}))?(o.optimisticOps.push(e),e.mutatedParts&&Pn(e.mutatedParts),s.then(function(t){0<t.numFailures&&(k(o.optimisticOps,e),(t=Yn(0,e,t))&&o.optimisticOps.push(t),e.mutatedParts)&&Pn(e.mutatedParts)}),s.catch(function(){k(o.optimisticOps,e),e.mutatedParts&&Pn(e.mutatedParts)})):s.then(function(n){var r=Yn(0,t(t({},e),{values:e.values.map(function(e,r){var i;return n.failures[r]?e:(x(i=(i=a.keyPath)!=null&&i.includes(`.`)?T(e):t({},e),a.keyPath,n.results[r]),i)})}),n);o.optimisticOps.push(r),queueMicrotask(function(){return e.mutatedParts&&Pn(e.mutatedParts)})}),s):i.mutate(e)},query:function(e){var t,a,o,s,c,l,u;return Kn(B,i)&&qn(`query`,e)?(t=(o=B.trans)?.db._options.cache===`immutable`,a=(o=B).requery,o=o.signal,l=((e,t,n,r)=>{var i=jn[`idb://${e}/${t}`];if(!i)return[];if(!(e=i.queries[n]))return[null,!1,i,null];var a=e[(r.query?r.query.index.name:null)||``];if(!a)return[null,!1,i,null];switch(n){case`query`:var o=(s=r.direction)??`next`,s=a.find(function(e){return e.req.limit===r.limit&&e.req.values===r.values&&(e.req.direction??`next`)===o&&Qn(e.req.query.range,r.query.range)});return s?[s,!0,i,a]:[a.find(function(e){return(`limit`in e.req?e.req.limit:1/0)>=r.limit&&(e.req.direction??`next`)===o&&(!r.values||e.req.values)&&$n(e.req.query.range,r.query.range)}),!1,i,a];case`count`:return s=a.find(function(e){return Qn(e.req.query.range,r.query.range)}),[s,!!s,i,a]}})(n,r,`query`,e),u=l[0],s=l[2],c=l[3],u&&l[1]?u.obsSet=e.obsSet:(l=i.query(e).then(function(e){var n=e.result;if(u&&(u.res=n),t){for(var r=0,i=n.length;r<i;++r)Object.freeze(n[r]);Object.freeze(n)}else e.result=T(n);return e}).catch(function(e){return c&&u&&k(c,u),Promise.reject(e)}),u={obsSet:e.obsSet,promise:l,subscribers:new Set,type:`query`,req:e,dirty:!1},c?c.push(u):(c=[u],(s||=jn[`idb://${n}/${r}`]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}}).queries.query[e.query.index.name||``]=c)),er(u,c,a,o),u.promise.then(function(n){return{result:Zn(n.result,e,s?.optimisticOps,i,u,t)}})):i.query(e)}})}})}};function nr(e,t){return new Proxy(e,{get:function(e,n,r){return n===`db`?t:Reflect.get(e,n,r)}})}$.prototype.version=function(e){if(isNaN(e)||e<.1)throw new F.Type(`Given version is not a positive number`);if(e=Math.round(10*e)/10,this.idbdb||this._state.isBeingOpened)throw new F.Schema(`Cannot add version when database is open`);this.verno=Math.max(this.verno,e);var t=this._versions,n=t.filter(function(t){return t._cfg.version===e})[0];return n||(n=new this.Version(e),t.push(n),t.sort(on),n.stores({}),this._state.autoSchema=!1),n},$.prototype._whenReady=function(e){var t=this;return this.idbdb&&(this._state.openComplete||B.letThrough||this._vip)?e():new H(function(e,n){if(t._state.openComplete)return n(new F.DatabaseClosed(t._state.dbOpenError));if(!t._state.isBeingOpened){if(!t._state.autoOpen)return void n(new F.DatabaseClosed);t.open().catch(I)}t._state.dbReadyPromise.then(e,n)}).then(e)},$.prototype.use=function(e){var t=e.stack,n=e.create,r=e.level,e=e.name,i=(e&&this.unuse({stack:t,name:e}),this._middlewares[t]||(this._middlewares[t]=[]));return i.push({stack:t,create:n,level:r??10,name:e}),i.sort(function(e,t){return e.level-t.level}),this},$.prototype.unuse=function(e){var t=e.stack,n=e.name,r=e.create;return t&&this._middlewares[t]&&(this._middlewares[t]=this._middlewares[t].filter(function(e){return r?e.create!==r:!!n&&e.name!==n})),this},$.prototype.open=function(){var e=this;return nt(z,function(){return Ln(e)})},$.prototype._close=function(){this.on.close.fire(new CustomEvent(`close`));var e=this._state;if(vn.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}e.isBeingOpened||(e.dbReadyPromise=new H(function(t){e.dbReadyResolve=t}),e.openCanceller=new H(function(t,n){e.cancelOpen=n}))},$.prototype.close=function(e){var e=(e===void 0?{disableAutoOpen:!0}:e).disableAutoOpen,t=this._state;e?(t.isBeingOpened&&t.cancelOpen(new F.DatabaseClosed),this._close(),t.autoOpen=!1,t.dbOpenError=new F.DatabaseClosed):(this._close(),t.autoOpen=this._options.autoOpen||t.isBeingOpened,t.openComplete=!1,t.dbOpenError=null)},$.prototype.delete=function(e){var t=this,n=(e===void 0&&(e={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!=`object`),r=this._state;return new H(function(i,a){function o(){t.close(e);var n=t._deps.indexedDB.deleteDatabase(t.name);n.onsuccess=U(function(){var e=t._deps,n=t.name,r;bn(r=e.indexedDB)||n===ct||yn(r,e.IDBKeyRange).delete(n).catch(I),i()}),n.onerror=Z(a),n.onblocked=t._fireOnBlocked}if(n)throw new F.InvalidArgument(`Invalid closeOptions argument to db.delete()`);r.isBeingOpened?r.dbReadyPromise.then(o):o()})},$.prototype.backendDB=function(){return this.idbdb},$.prototype.isOpen=function(){return this.idbdb!==null},$.prototype.hasBeenClosed=function(){var e=this._state.dbOpenError;return e&&e.name===`DatabaseClosed`},$.prototype.hasFailed=function(){return this._state.dbOpenError!==null},$.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty($.prototype,"tables",{get:function(){var e=this;return i(this._allTables).map(function(t){return e._allTables[t]})},enumerable:!1,configurable:!0}),$.prototype.transaction=function(){var e=function(e,t,n){var r=arguments.length;if(r<2)throw new F.InvalidArgument(`Too few arguments`);for(var i=Array(r-1);--r;)i[r-1]=arguments[r];return n=i.pop(),[e,te(i),n]}.apply(this,arguments);return this._transaction.apply(this,e)},$.prototype._transaction=function(e,t,n){var r,i,a=this,o=B.trans,s=(o&&o.db===this&&e.indexOf(`!`)===-1||(o=null),e.indexOf(`?`)!==-1);e=e.replace(`!`,``).replace(`?`,``);try{if(i=t.map(function(e){if(e=e instanceof a.Table?e.name:e,typeof e!=`string`)throw TypeError(`Invalid table argument to Dexie.transaction(). Only Table or String are allowed`);return e}),e==`r`||e===lt)r=lt;else{if(e!=`rw`&&e!=ut)throw new F.InvalidArgument(`Invalid transaction mode: `+e);r=ut}if(o){if(o.mode===lt&&r===ut){if(!s)throw new F.SubTransaction(`Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY`);o=null}o&&i.forEach(function(e){if(o&&o.storeNames.indexOf(e)===-1){if(!s)throw new F.SubTransaction(`Table `+e+` not included in parent transaction.`);o=null}}),s&&o&&!o.active&&(o=null)}}catch(e){return o?o._promise(null,function(t,n){n(e)}):G(e)}var c=function e(t,n,r,i,a){return H.resolve().then(function(){var o=B.transless||B,s=t._createTransaction(n,r,t._dbSchema,i),o=(s.explicit=!0,{trans:s,transless:o});if(i)s.idbtrans=i.idbtrans;else try{s.create(),s.idbtrans._explicit=!0,t._state.PR1398_maxLoop=3}catch(i){return i.name===ce.InvalidState&&t.isOpen()&&0<--t._state.PR1398_maxLoop?(console.warn(`Dexie: Need to reopen db`),t.close({disableAutoOpen:!1}),t.open().then(function(){return e(t,n,r,null,a)})):G(i)}var c,l=M(a),o=(l&&Xe(),H.follow(function(){var e;(c=a.call(s,s))&&(l?(e=Ze.bind(null,null),c.then(e,e)):typeof c.next==`function`&&typeof c.throw==`function`&&(c=Rn(c)))},o));return(c&&typeof c.then==`function`?H.resolve(c).then(function(e){return s.active?e:G(new F.PrematureCommit(`Transaction committed too early. See http://bit.ly/2kdckMn`))}):o.then(function(){return c})).then(function(e){return i&&s._resolve(),s._completion.then(function(){return e})}).catch(function(e){return s._reject(e),G(e)})})}.bind(null,this,r,i,o,n);return o?o._promise(r,c,`lock`):B.trans?nt(B.transless,function(){return a._whenReady(c)}):this._whenReady(c)},$.prototype.table=function(e){if(l(this._allTables,e))return this._allTables[e];throw new F.InvalidTable(`Table ${e} does not exist`)};var rr=$;function $(e,n){var r,i,a,o,s,c=this,l=(this._middlewares={},this.verno=0,$.dependencies),l=(this._options=n=t({addons:$.addons,autoOpen:!0,indexedDB:l.indexedDB,IDBKeyRange:l.IDBKeyRange,cache:`cloned`,maxConnections:1e3},n),this._deps={indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange},n.addons),u=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:I,dbReadyPromise:null,cancelOpen:I,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:n.autoOpen}),d=(u.dbReadyPromise=new H(function(e){u.dbReadyResolve=e}),u.openCanceller=new H(function(e,t){u.cancelOpen=t}),this._state=u,this.name=e,this.on=St(this,`populate`,`blocked`,`versionchange`,`close`,{ready:[_e,I]}),this.once=function(e,t){var n=function(){var r=[...arguments];c.on(e).unsubscribe(n),t.apply(c,r)};return c.on(e,n)},this.on.ready.subscribe=_(this.on.ready.subscribe,function(e){return function(t,n){$.vip(function(){var r,i=c._state;i.openComplete?(i.dbOpenError||H.resolve().then(t),n&&e(t)):i.onReadyBeingFired?(i.onReadyBeingFired.push(t),n&&e(t)):(e(t),r=c,n||e(function e(){r.on.ready.unsubscribe(t),r.on.ready.unsubscribe(e)}))})}}),this.Collection=(r=this,Ct(jt.prototype,function(e,t){this.db=r;var n=ft,i=null;if(t)try{n=t()}catch(e){i=e}var t=e._ctx,e=t.table,a=e.hook.reading.fire;this._ctx={table:e,index:t.index,isPrimKey:!t.index||e.schema.primKey.keyPath&&t.index===e.schema.primKey.name,range:n,keysOnly:!1,dir:`next`,unique:``,algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:i,or:t.or,valueMapper:a===de?null:a}})),this.Table=(i=this,Ct(xt.prototype,function(e,t,n){this.db=i,this._tx=n,this.name=e,this.schema=t,this.hook=i._allTables[e]?i._allTables[e].hook:St(null,{creating:[me,I],reading:[fe,de],updating:[L,I],deleting:[he,I]})})),this.Transaction=(a=this,Ct(Wt.prototype,function(e,t,n,r,i){var o=this;e!==`readonly`&&t.forEach(function(e){e=(e=n[e])?.yProps,e&&(t=t.concat(e.map(function(e){return e.updatesTable})))}),this.db=a,this.mode=e,this.storeNames=t,this.schema=n,this.chromeTransactionDurability=r,this.idbtrans=null,this.on=St(this,`complete`,`error`,`abort`),this.parent=i||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new H(function(e,t){o._resolve=e,o._reject=t}),this._completion.then(function(){o.active=!1,o.on.complete.fire()},function(e){var t=o.active;return o.active=!1,o.on.error.fire(e),o.parent?o.parent._reject(e):t&&o.idbtrans&&o.idbtrans.abort(),G(e)})})),this.Version=(o=this,Ct(gn.prototype,function(e){this.db=o,this._cfg={version:e,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(s=this,Ct(zt.prototype,function(e,t,n){if(this.db=s,this._ctx={table:e,index:t===`:id`?null:t,or:n},this._cmp=this._ascending=K,this._descending=function(e,t){return K(t,e)},this._max=function(e,t){return 0<K(e,t)?e:t},this._min=function(e,t){return K(e,t)<0?e:t},this._IDBKeyRange=s._deps.IDBKeyRange,!this._IDBKeyRange)throw new F.MissingAPI})),this.on(`versionchange`,function(e){0<e.newVersion?console.warn(`Another connection wants to upgrade database '${c.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${c.name}'. Closing db now to resume the delete request.`),c.close({disableAutoOpen:!1})}),this.on(`blocked`,function(e){!e.newVersion||e.newVersion<e.oldVersion?console.warn(`Dexie.delete('${c.name}') was blocked`):console.warn(`Upgrade '${c.name}' blocked by other connection holding version ${e.oldVersion/10}`)}),this._maxKey=Yt(n.IDBKeyRange),this._createTransaction=function(e,t,n,r){return new c.Transaction(e,t,n,c._options.chromeTransactionDurability,r)},this._fireOnBlocked=function(e){c.on(`blocked`).fire(e),vn.toArray().filter(function(e){return e.name===c.name&&e!==c&&!e._state.vcFired}).map(function(t){return t.on(`versionchange`).fire(e)})},this.use(Gn),this.use(tr),this.use(Jn),this.use(Bn),this.use(Un),new Proxy(this,{get:function(e,t,n){var r;return t===`_vip`||(t===`table`?function(e){return nr(c.table(e),d)}:(r=Reflect.get(e,t,n))instanceof xt?nr(r,d):t===`tables`?r.map(function(e){return nr(e,d)}):t===`_createTransaction`?function(){return nr(r.apply(this,arguments),d)}:r)}}));this.vip=d,l.forEach(function(e){return e(c)})}var ir,Se=typeof Symbol<`u`&&`observable`in Symbol?Symbol.observable:`@@observable`,ar=(or.prototype.subscribe=function(e,t,n){return this._subscribe(e&&typeof e!=`function`?e:{next:e,error:t,complete:n})},or.prototype[Se]=function(){return this},or);function or(e){this._subscribe=e}try{ir={indexedDB:r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB,IDBKeyRange:r.IDBKeyRange||r.webkitIDBKeyRange}}catch{ir={indexedDB:null,IDBKeyRange:null}}function sr(e){var t,n=!1,r=new ar(function(r){var i=M(e),a,o=!1,s={},c={},l={get closed(){return o},unsubscribe:function(){o||(o=!0,a&&a.abort(),u&&Ut.storagemutated.unsubscribe(p))}},u=(r.start&&r.start(l),!1),d=function(){return it(m)};function f(){return An(c,s)}var p=function(e){kn(s,e),f()&&d()},m=function(){var l,m,h;!o&&ir.indexedDB&&(s={},l={},a&&a.abort(),a=new AbortController,h=(t=>{var n=Be();try{i&&Xe();var r=Ye(e,t);return r=i?r.finally(Ze):r}finally{n&&Ve()}})(m={subscr:l,signal:a.signal,requery:d,querier:e,trans:null}),u||=(Ut.storagemutated.subscribe(p),!0),Promise.resolve(h).then(function(e){n=!0,t=e,o||m.signal.aborted||(f()||(c=l,f())?d():(s={},it(function(){return!o&&r.next&&r.next(e)})))},function(e){n=!1,[`DatabaseClosedError`,`AbortError`].includes(e?.name)||o||it(function(){o||r.error&&r.error(e)})}))};return setTimeout(d,0),l});return r.hasValue=function(){return n},r.getValue=function(){return t},r}var cr=rr;function lr(e){var t=dr;try{dr=!0,Ut.storagemutated.fire(e),Fn(e,!0)}finally{dr=t}}u(cr,t(t({},C),{delete:function(e){return new cr(e,{addons:[]}).delete()},exists:function(e){return new cr(e,{addons:[]}).open().then(function(e){return e.close(),!0}).catch(`NoSuchDatabaseError`,function(){return!1})},getDatabaseNames:function(e){try{return t=cr.dependencies,n=t.indexedDB,t=t.IDBKeyRange,(bn(n)?Promise.resolve(n.databases()).then(function(e){return e.map(function(e){return e.name}).filter(function(e){return e!==ct})}):yn(n,t).toCollection().primaryKeys()).then(e)}catch{return G(new F.MissingAPI)}var t,n},defineClass:function(){return function(e){o(this,e)}},ignoreTransaction:function(e){return B.trans?nt(B.transless||z,e):e()},vip:xn,async:function(e){return function(){try{var t=Rn(e.apply(this,arguments));return t&&typeof t.then==`function`?t:H.resolve(t)}catch(e){return G(e)}}},spawn:function(e,t,n){try{var r=Rn(e.apply(n,t||[]));return r&&typeof r.then==`function`?r:H.resolve(r)}catch(e){return G(e)}},currentTransaction:{get:function(){return B.trans||null}},waitFor:function(e,t){return e=H.resolve(typeof e==`function`?cr.ignoreTransaction(e):e).timeout(t||6e4),B.trans?B.trans.waitFor(e):e},Promise:H,debug:{get:function(){return R},set:function(e){ve(e)}},derive:p,extend:o,props:u,override:_,Events:St,on:Ut,liveQuery:sr,extendObservabilitySet:kn,getByKeyPath:b,setByKeyPath:x,delByKeyPath:function(e,t){typeof t==`string`?x(e,t,void 0):`length`in t&&[].map.call(t,function(t){x(e,t,void 0)})},shallowClone:ee,deepClone:T,getObjectDiff:Vn,cmp:K,asap:y,minKey:-1/0,addons:[],connections:{get:vn.toArray},errnames:ce,dependencies:ir,cache:jn,semVer:`4.4.3`,version:`4.4.3`.split(`.`).map(function(e){return parseInt(e)}).reduce(function(e,t,n){return e+t/10**(2*n)})})),cr.maxKey=Yt(cr.dependencies.IDBKeyRange),typeof dispatchEvent<`u`&&typeof addEventListener<`u`&&(Ut(Vt,function(e){dr||=(e=new CustomEvent(Ht,{detail:e}),dr=!0,dispatchEvent(e),!1)}),addEventListener(Ht,function(e){e=e.detail,dr||lr(e)}));var ur,dr=!1,fr=function(){};return typeof BroadcastChannel<`u`&&((fr=function(){(ur=new BroadcastChannel(Ht)).onmessage=function(e){return e.data&&lr(e.data)}})(),typeof ur.unref==`function`&&ur.unref(),Ut(Vt,function(e){dr||ur.postMessage(e)})),typeof addEventListener<`u`&&(addEventListener(`pagehide`,function(e){if(!rr.disableBfCache&&e.persisted){R&&console.debug(`Dexie: handling persisted pagehide`),ur?.close();for(var t=0,n=vn.toArray();t<n.length;t++)n[t].close({disableAutoOpen:!1})}}),addEventListener(`pageshow`,function(e){!rr.disableBfCache&&e.persisted&&(R&&console.debug(`Dexie: handling persisted pageshow`),fr(),lr({all:new Q(-1/0,[[]])}))})),H.rejectionMapper=function(e,t){return!e||e instanceof ae||e instanceof TypeError||e instanceof SyntaxError||!e.name||!ue[e.name]?e:(t=new ue[e.name](t||e.message,e),`stack`in e&&f(t,`stack`,{get:function(){return this.inner.stack}}),t)},ve(R),t(rr,Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:1e3,Dexie:rr,Entity:mt,PropModification:vt,RangeSet:Q,add:function(e){return new vt({add:e})},cmp:K,default:rr,liveQuery:sr,mergeRanges:wn,rangesOverlap:Tn,remove:function(e){return new vt({remove:e})},replacePrefix:function(e,t){return new vt({replacePrefix:[e,t]})}}),{default:rr}),rr})}))(),1),d=Symbol.for(`Dexie`),f=globalThis[d]||(globalThis[d]=u.default);if(u.default.semVer!==f.semVer)throw Error(`Two different versions of Dexie loaded in the same app: ${u.default.semVer} and ${f.semVer}`);var{liveQuery:p,mergeRanges:m,rangesOverlap:h,RangeSet:g,cmp:_,Entity:v,PropModification:y,replacePrefix:b,add:x,remove:ee,DexieYProvider:S}=f,te=s({CategoriesAPI:()=>E,MovementsAPI:()=>T,ProductsAPI:()=>w,SettingsAPI:()=>O,UsersAPI:()=>D,default:()=>C,seedDefaultData:()=>ne}),C=new f(`DonaMarian`);C.version(1).stores({users:`++id, name, pin, role, active, createdAt`,categories:`++id, name, color, icon, active, order`,products:`++id, name, barcode, categoryId, purchasePrice, salePrice, stock, minStock, unit, supplier, notes, active, createdAt, updatedAt`,movements:`++id, productId, type, quantity, previousStock, newStock, reason, userId, createdAt`,settings:`key, value`});async function ne(){await C.categories.count()===0&&await C.categories.bulkAdd([{name:`Abarrotes`,color:`#40916C`,icon:`shopping-basket`,active:!0,order:1},{name:`Bebidas`,color:`#5AA9E6`,icon:`cup-soda`,active:!0,order:2},{name:`Lácteos`,color:`#E9C46A`,icon:`milk`,active:!0,order:3},{name:`Limpieza`,color:`#9B5DE5`,icon:`sparkles`,active:!0,order:4},{name:`Snacks`,color:`#E76F51`,icon:`cookie`,active:!0,order:5},{name:`Frutas y Verduras`,color:`#2D6A4F`,icon:`apple`,active:!0,order:6},{name:`Carnes y Embutidos`,color:`#D4A373`,icon:`beef`,active:!0,order:7},{name:`Pan y Tortillas`,color:`#C48B5C`,icon:`croissant`,active:!0,order:8}]),await C.settings.count()===0&&await C.settings.bulkPut([{key:`storeName`,value:`Doña Marian`},{key:`ownerName`,value:`Marian`},{key:`currency`,value:`MXN`},{key:`setupComplete`,value:!1}])}var w={async getAll(e={}){C.products.where(`active`).equals(1),e.categoryId&&C.products.where(`categoryId`).equals(e.categoryId);let t=await C.products.filter(t=>{if(!t.active&&!e.showInactive||e.categoryId&&t.categoryId!==e.categoryId||e.lowStock&&t.stock>=t.minStock)return!1;if(e.search){let n=e.search.toLowerCase();return t.name.toLowerCase().includes(n)||t.barcode&&t.barcode.includes(n)||t.supplier&&t.supplier.toLowerCase().includes(n)}return!0}).toArray(),n=e.sortBy||`name`,r=e.sortDir||`asc`;return t.sort((e,t)=>{let i=e[n],a=t[n];return typeof i==`string`&&(i=i.toLowerCase()),typeof a==`string`&&(a=a.toLowerCase()),i<a?r===`asc`?-1:1:i>a?r===`asc`?1:-1:0}),t},async getById(e){return await C.products.get(e)},async create(e){let t=new Date().toISOString();return await C.products.add({...e,stock:e.stock||0,minStock:e.minStock||5,active:!0,createdAt:t,updatedAt:t})},async update(e,t){return t.updatedAt=new Date().toISOString(),await C.products.update(e,t)},async toggleActive(e){let t=await C.products.get(e);return await C.products.update(e,{active:!t.active})},async delete(e){return await C.products.delete(e)},async getStats(){let e=await C.products.filter(e=>e.active).toArray(),t=e.length,n=e.filter(e=>e.stock<e.minStock).length,r=e.reduce((e,t)=>e+t.purchasePrice*t.stock,0),i=e.reduce((e,t)=>e+t.salePrice*t.stock,0);return{totalProducts:t,lowStockCount:n,outOfStock:e.filter(e=>e.stock===0).length,totalValuePurchase:r,totalValueSale:i,potentialProfit:i-r}},async getLowStock(){return await C.products.filter(e=>e.active&&e.stock<e.minStock).toArray()}},T={async register(e,t,n,r,i){let a=await C.products.get(e);if(!a)throw Error(`Producto no encontrado`);let o=a.stock,s;return t===`entry`?s=o+n:(s=o-n,s<0&&(s=0)),await C.products.update(e,{stock:s,updatedAt:new Date().toISOString()}),await C.movements.add({productId:e,type:t,quantity:n,previousStock:o,newStock:s,reason:r||(t===`entry`?`Reabastecimiento`:`Venta`),userId:i,createdAt:new Date().toISOString()})},async getByProduct(e){return await C.movements.where(`productId`).equals(e).reverse().sortBy(`createdAt`)},async getRecent(e=20){return await C.movements.orderBy(`id`).reverse().limit(e).toArray()},async getAll(e={}){let t=await C.movements.orderBy(`id`).reverse().toArray();return e.type&&(t=t.filter(t=>t.type===e.type)),e.productId&&(t=t.filter(t=>t.productId===e.productId)),e.dateFrom&&(t=t.filter(t=>t.createdAt>=e.dateFrom)),e.dateTo&&(t=t.filter(t=>t.createdAt<=e.dateTo)),t},async getDailyStats(e=7){let t=new Date,n=[];for(let r=e-1;r>=0;r--){let e=new Date(t);e.setDate(e.getDate()-r);let i=e.toISOString().split(`T`)[0],a=e.toLocaleDateString(`es-MX`,{weekday:`short`}),o=await C.movements.filter(e=>e.createdAt&&e.createdAt.startsWith(i)).toArray(),s=o.filter(e=>e.type===`entry`).reduce((e,t)=>e+t.quantity,0),c=o.filter(e=>e.type===`exit`).reduce((e,t)=>e+t.quantity,0);n.push({date:i,label:a,entries:s,exits:c,total:o.length})}return n}},E={async getAll(){return await C.categories.filter(e=>e.active).sortBy(`order`)},async getAllIncludeInactive(){return await C.categories.orderBy(`order`).toArray()},async getById(e){return await C.categories.get(e)},async create(e){let t=await C.categories.orderBy(`order`).last();return await C.categories.add({...e,active:!0,order:t?t.order+1:1})},async update(e,t){return await C.categories.update(e,t)},async delete(e){let t=await C.products.where(`categoryId`).equals(e).count();if(t>0)throw Error(`No se puede eliminar: ${t} producto(s) usan esta categoría`);return await C.categories.delete(e)},async toggleActive(e){let t=await C.categories.get(e);return await C.categories.update(e,{active:!t.active})},async getProductCount(e){return await C.products.where(`categoryId`).equals(e).filter(e=>e.active).count()}},D={async getAll(){return await C.users.toArray()},async getActive(){return await C.users.filter(e=>e.active).toArray()},async getById(e){return await C.users.get(e)},async create(e){if(await C.users.filter(t=>t.pin===e.pin).first())throw Error(`Ese PIN ya está en uso`);return await C.users.add({...e,active:!0,createdAt:new Date().toISOString()})},async update(e,t){if(t.pin&&await C.users.filter(n=>n.pin===t.pin&&n.id!==e).first())throw Error(`Ese PIN ya está en uso`);return await C.users.update(e,t)},async authenticate(e){return await C.users.filter(t=>t.pin===e&&t.active).first()||null},async delete(e){return await C.users.update(e,{active:!1})},async countByRole(e){return await C.users.filter(t=>t.role===e&&t.active).count()}},O={async get(e){let t=await C.settings.get(e);return t?t.value:null},async set(e,t){return await C.settings.put({key:e,value:t})},async getAll(){let e=await C.settings.toArray(),t={};return e.forEach(e=>{t[e.key]=e.value}),t},async exportAll(){let e={users:await C.users.toArray(),categories:await C.categories.toArray(),products:await C.products.toArray(),movements:await C.movements.toArray(),settings:await C.settings.toArray(),exportedAt:new Date().toISOString(),version:1};return JSON.stringify(e,null,2)},async importAll(e){let t=JSON.parse(e);if(!t.version)throw Error(`Archivo de respaldo inválido`);await C.transaction(`rw`,C.users,C.categories,C.products,C.movements,C.settings,async()=>{await C.users.clear(),await C.categories.clear(),await C.products.clear(),await C.movements.clear(),await C.settings.clear(),t.users?.length&&await C.users.bulkAdd(t.users),t.categories?.length&&await C.categories.bulkAdd(t.categories),t.products?.length&&await C.products.bulkAdd(t.products),t.movements?.length&&await C.movements.bulkAdd(t.movements),t.settings?.length&&await C.settings.bulkPut(t.settings)})},async exportCSV(){let e=await C.products.toArray(),t=await C.categories.toArray(),n={};return t.forEach(e=>{n[e.id]=e.name}),[[`Nombre`,`Código`,`Categoría`,`Precio Compra`,`Precio Venta`,`Stock`,`Stock Mínimo`,`Unidad`,`Proveedor`,`Estado`],...e.map(e=>[e.name,e.barcode||``,n[e.categoryId]||``,e.purchasePrice||0,e.salePrice||0,e.stock||0,e.minStock||0,e.unit||`pzas`,e.supplier||``,e.active?`Activo`:`Inactivo`])].map(e=>e.map(e=>`"${e}"`).join(`,`)).join(`
`)}},re=`dm_session`,k=new class{constructor(){this.currentUser=null,this._listeners=[]}async init(){let e=localStorage.getItem(re);if(e)try{let{userId:t}=JSON.parse(e),n=await D.getById(t);if(n&&n.active)return this.currentUser=n,this._notify(),!0}catch{localStorage.removeItem(re)}return!1}async login(e){let t=await D.authenticate(e);return t?(this.currentUser=t,localStorage.setItem(re,JSON.stringify({userId:t.id})),this._notify(),{success:!0,user:t}):{success:!1,error:`PIN incorrecto`}}logout(){this.currentUser=null,localStorage.removeItem(re),this._notify()}async isFirstTime(){return!await O.get(`setupComplete`)}async setupOwner(e,t){return await D.create({name:e,pin:t,role:`owner`}),await O.set(`setupComplete`,!0),await O.set(`ownerName`,e),await this.login(t)}isOwner(){return this.currentUser?.role===`owner`}isEmployee(){return this.currentUser?.role===`employee`}isLoggedIn(){return this.currentUser!==null}getUser(){return this.currentUser}getUserName(){return this.currentUser?.name||`Usuario`}getUserRole(){return this.currentUser?.role===`owner`?`Dueña`:`Empleado`}getUserId(){return this.currentUser?.id}hasPermission(e){return this.currentUser?this.currentUser.role===`owner`?!0:[`view_inventory`,`register_movement`,`view_dashboard`,`view_categories`,`view_movements`].includes(e):!1}onChange(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>t!==e)}}_notify(){this._listeners.forEach(e=>e(this.currentUser))}},A=new class{constructor(){this.routes={},this.currentRoute=null,this.beforeEach=null,window.addEventListener(`hashchange`,()=>this._handleRoute())}register(e){this.routes=e}setGuard(e){this.beforeEach=e}navigate(e){window.location.hash=e}getCurrentPath(){return window.location.hash.slice(1)||`/login`}start(){this._handleRoute()}async _handleRoute(){let e=this.getCurrentPath(),[t,...n]=e.split(`/`).filter(Boolean),r=`/`+t,i=this.routes[r],a={};if(!i)for(let[t,n]of Object.entries(this.routes)){let r=t.split(`/`).filter(Boolean),o=e.split(`/`).filter(Boolean);if(r.length===o.length){let e=!0,t={};for(let n=0;n<r.length;n++)if(r[n].startsWith(`:`))t[r[n].slice(1)]=o[n];else if(r[n]!==o[n]){e=!1;break}if(e){i=n,a=t;break}}}if(!i){this.navigate(`/dashboard`);return}if(this.beforeEach&&!await this.beforeEach(r,a))return;this.currentRoute=r;let o=document.getElementById(`page-content`);if(r===`/login`&&(o=document.getElementById(`app`)),o){let e=o.id===`page-content`;e&&(o.classList.add(`page-transitioning`),await new Promise(e=>setTimeout(e,150))),typeof i==`function`&&await i(o,a),e&&(o.classList.remove(`page-transitioning`),o.classList.add(`page-entering`),setTimeout(()=>{o.classList.remove(`page-entering`)},300))}}},j={"layout-dashboard":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,package:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.5 9.4 7.55 4.24"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>`,tags:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/></svg>`,"arrow-left-right":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>`,users:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,settings:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,"log-out":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,plus:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,edit:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>`,trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,filter:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,download:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,upload:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,delete:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,"more-vertical":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>`,"chevron-right":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,"chevron-left":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>`,eye:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`,"trending-up":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,"trending-down":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>`,"alert-triangle":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,"check-circle":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,"circle-x":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`,"shopping-basket":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 11-1 9"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="m9 11 1 9"/><path d="M5 11 9 4"/></svg>`,"cup-soda":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"/><path d="M5 8h14"/><path d="M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"/><path d="m12 8 1-6h2"/></svg>`,menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,box:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,"dollar-sign":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,"bar-chart":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>`,activity:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>`,"arrow-down":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>`,"arrow-up":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>`,clock:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,shield:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,database:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,store:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/></svg>`,user:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,"wifi-off":`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M2 2l20 20"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M13.83 10.17A10 10 0 0 1 19 12.86"/><path d="M1.42 9a16 16 0 0 1 6.58-4.4"/><path d="M16.01 4.6A16 16 0 0 1 22.58 9"/></svg>`,save:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>`,refresh:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`};function M(e){return j[e]||``}var N=s({CATEGORY_COLORS:()=>de,MOVEMENT_REASONS:()=>I,UNITS:()=>ue,debounce:()=>ce,downloadFile:()=>le,formatCurrency:()=>ie,formatDate:()=>se,formatNumber:()=>ae,getInitials:()=>P,readFile:()=>F,timeAgo:()=>oe});function ie(e){return new Intl.NumberFormat(`es-MX`,{style:`currency`,currency:`MXN`,minimumFractionDigits:2}).format(e||0)}function ae(e){return new Intl.NumberFormat(`es-MX`).format(e||0)}function oe(e){if(!e)return``;let t=new Date(e),n=new Date-t,r=Math.floor(n/1e3),i=Math.floor(r/60),a=Math.floor(i/60),o=Math.floor(a/24);return r<60?`hace un momento`:i<60?`hace ${i} min`:a<24?`hace ${a}h`:o===1?`ayer`:o<7?`hace ${o} días`:t.toLocaleDateString(`es-MX`,{day:`numeric`,month:`short`})}function se(e){return e?new Date(e).toLocaleDateString(`es-MX`,{day:`numeric`,month:`long`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}):``}function P(e){return e?e.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2):`?`}function ce(e,t=300){let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}}function le(e,t,n=`text/plain`){let r=new Blob([e],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=t,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)}function F(e=`.json`){return new Promise((t,n)=>{let r=document.createElement(`input`);r.type=`file`,r.accept=e,r.onchange=e=>{let r=e.target.files[0];if(!r)return n(Error(`No se seleccionó archivo`));let i=new FileReader;i.onload=e=>t(e.target.result),i.onerror=()=>n(Error(`Error al leer archivo`)),i.readAsText(r)},r.click()})}var ue=[{value:`pzas`,label:`Piezas`},{value:`kg`,label:`Kilogramos`},{value:`g`,label:`Gramos`},{value:`lt`,label:`Litros`},{value:`ml`,label:`Mililitros`},{value:`paq`,label:`Paquetes`},{value:`caja`,label:`Cajas`},{value:`bolsa`,label:`Bolsas`},{value:`bote`,label:`Botes`},{value:`rollo`,label:`Rollos`}],I={entry:[`Compra a proveedor`,`Reabastecimiento`,`Devolución de cliente`,`Ajuste de inventario`,`Inventario inicial`,`Otro`],exit:[`Venta`,`Merma / Caducidad`,`Robo / Pérdida`,`Uso interno`,`Devolución a proveedor`,`Ajuste de inventario`,`Otro`]},de=[`#40916C`,`#5AA9E6`,`#E9C46A`,`#9B5DE5`,`#E76F51`,`#2D6A4F`,`#D4A373`,`#C48B5C`,`#FF6B6B`,`#4ECDC4`,`#45B7D1`,`#96CEB4`],fe=`
.toast-container {
  position: fixed;
  top: var(--space-lg);
  right: var(--space-lg);
  z-index: var(--z-toast);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  pointer-events: none;
  max-width: 380px;
  width: calc(100% - 2 * var(--space-lg));
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-md);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  animation: toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  pointer-events: all;
  backdrop-filter: blur(12px);
}

.toast.removing {
  animation: toastOut 0.3s ease forwards;
}

.toast-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 1px;
}

.toast.success { border-left: 3px solid var(--success); }
.toast.success .toast-icon { color: var(--success); }
.toast.error { border-left: 3px solid var(--danger); }
.toast.error .toast-icon { color: var(--danger); }
.toast.warning { border-left: 3px solid var(--warning); }
.toast.warning .toast-icon { color: var(--warning); }
.toast.info { border-left: 3px solid var(--info); }
.toast.info .toast-icon { color: var(--info); }

.toast-content {
  flex: 1;
  min-width: 0;
}

.toast-title {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: 2px;
}

.toast-message {
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  line-height: var(--line-height-normal);
}

.toast-close {
  padding: 2px;
  color: var(--text-muted);
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.toast-close:hover {
  color: var(--text-primary);
  background: var(--bg-card);
}

.toast-close svg {
  width: 16px;
  height: 16px;
}

@keyframes toastIn {
  from { opacity: 0; transform: translateX(100%) scale(0.8); }
  to { opacity: 1; transform: translateX(0) scale(1); }
}

@keyframes toastOut {
  from { opacity: 1; transform: translateX(0) scale(1); }
  to { opacity: 0; transform: translateX(100%) scale(0.8); }
}

@media (max-width: 480px) {
  .toast-container {
    top: var(--space-sm);
    right: var(--space-sm);
    left: var(--space-sm);
    width: auto;
    max-width: none;
  }
}
`,pe={success:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,error:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`,warning:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,info:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`},me=null;function he(){if(!me){let e=document.createElement(`style`);e.textContent=fe,document.head.appendChild(e),me=document.createElement(`div`),me.className=`toast-container`,document.body.appendChild(me)}}function L(e,t,n=``,r=4e3){he();let i=document.createElement(`div`);return i.className=`toast ${e}`,i.innerHTML=`
    <div class="toast-icon">${pe[e]||pe.info}</div>
    <div class="toast-content">
      <div class="toast-title">${t}</div>
      ${n?`<div class="toast-message">${n}</div>`:``}
    </div>
    <button class="toast-close" aria-label="Cerrar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>
  `,i.querySelector(`.toast-close`).addEventListener(`click`,()=>ge(i)),me.appendChild(i),r>0&&setTimeout(()=>ge(i),r),i}function ge(e){!e||!e.parentElement||(e.classList.add(`removing`),setTimeout(()=>e.remove(),300))}var _e=`
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--bg-overlay);
  z-index: var(--z-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-md);
  animation: fadeIn 0.2s ease;
  backdrop-filter: blur(4px);
}

.modal-backdrop.closing {
  animation: fadeOut 0.2s ease forwards;
}

.modal {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 520px;
  max-height: 90dvh;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-xl);
  animation: modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}

.modal-backdrop.closing .modal {
  animation: modalOut 0.2s ease forwards;
}

.modal-sm { max-width: 400px; }
.modal-lg { max-width: 700px; }

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-lg) var(--space-lg) var(--space-md);
}

.modal-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
}

.modal-close {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  color: var(--text-muted);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.modal-close:hover {
  background: var(--bg-card);
  color: var(--text-primary);
}

.modal-close svg {
  width: 20px;
  height: 20px;
}

.modal-body {
  padding: 0 var(--space-lg);
  overflow-y: auto;
  flex: 1;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg) var(--space-lg);
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes modalOut {
  from { opacity: 1; transform: scale(1) translateY(0); }
  to { opacity: 0; transform: scale(0.9) translateY(20px); }
}

@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}
`,R=!1;function ve(){if(!R){let e=document.createElement(`style`);e.textContent=_e,document.head.appendChild(e),R=!0}}function ye({title:e,content:t,size:n=``,footer:r=``,onClose:i=null}){ve();let a=document.createElement(`div`);a.className=`modal-backdrop`,a.innerHTML=`
    <div class="modal ${n?`modal-`+n:``}">
      <div class="modal-header">
        <h2 class="modal-title">${e}</h2>
        <button class="modal-close" aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div class="modal-body">${t}</div>
      ${r?`<div class="modal-footer">${r}</div>`:``}
    </div>
  `;let o=()=>{a.classList.add(`closing`),setTimeout(()=>{a.remove(),i&&i()},200)};return a.querySelector(`.modal-close`).addEventListener(`click`,o),a.addEventListener(`click`,e=>{e.target===a&&o()}),document.body.appendChild(a),{element:a,close:o}}function be({title:e,message:t,type:n=`danger`,confirmText:r=`Confirmar`,cancelText:i=`Cancelar`}){return new Promise(a=>{let o={danger:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`,warning:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`},s=ye({title:``,content:`
      <div class="confirm-icon ${n}">
        ${o[n]||o.danger}
      </div>
      <div class="confirm-text">
        <h3>${e}</h3>
        <p>${t}</p>
      </div>
      <div class="confirm-actions">
        <button class="btn btn-secondary cancel-btn">${i}</button>
        <button class="btn btn-${n===`danger`?`danger`:`primary`} confirm-btn">${r}</button>
      </div>
    `,size:`sm`});s.element.querySelector(`.modal-header`).style.display=`none`,s.element.querySelector(`.modal-body`).style.padding=`var(--space-xl)`,s.element.querySelector(`.cancel-btn`).addEventListener(`click`,()=>{s.close(),a(!1)}),s.element.querySelector(`.confirm-btn`).addEventListener(`click`,()=>{s.close(),a(!0)})})}async function xe(e){await k.isFirstTime()?Se(e):Ce(e)}function Se(e){let t=1,n=``,r=``;function i(){let e=document.getElementById(`app`);e.className=``,e.innerHTML=`
      <div class="login-page">
        <div class="login-container">
          <div class="login-header">
            <div class="login-logo">🏪</div>
            <h1 class="login-title">Doña Marian</h1>
            <p class="login-subtitle">Configuración Inicial</p>
          </div>

          <div class="setup-steps">
            <div class="setup-step ${t>=1?`active`:``} ${t>1?`done`:``}"></div>
            <div class="setup-step ${t>=2?`active`:``} ${t>2?`done`:``}"></div>
          </div>

          <div class="login-card">
            ${t===1?a():o()}
          </div>
        </div>
      </div>
    `,s()}function a(){return`
      <div style="text-align: center; margin-bottom: var(--space-lg);">
        <h3 style="color: var(--text-primary); margin-bottom: var(--space-xs);">¡Bienvenida!</h3>
        <p style="color: var(--text-secondary); font-size: var(--font-size-sm);">Vamos a configurar tu tienda</p>
      </div>
      <div class="form-group" style="margin-bottom: var(--space-lg);">
        <label class="form-label">Tu nombre</label>
        <input type="text" class="form-input" id="setup-name" placeholder="Ej: Marian" value="${n}" autofocus>
      </div>
      <button class="btn btn-primary btn-lg" style="width: 100%;" id="setup-next" ${n?``:`disabled`}>
        Continuar
      </button>
    `}function o(){return`
      <div style="text-align: center; margin-bottom: var(--space-lg);">
        <h3 style="color: var(--text-primary); margin-bottom: var(--space-xs);">Crea tu PIN</h3>
        <p style="color: var(--text-secondary); font-size: var(--font-size-sm);">PIN de 4 dígitos para acceder</p>
      </div>
      ${we(r)}
      <p class="pin-error-msg" id="pin-error"></p>
    `}function s(){if(t===1){let e=document.getElementById(`setup-name`),a=document.getElementById(`setup-next`);e?.addEventListener(`input`,e=>{n=e.target.value.trim(),a.disabled=!n}),a?.addEventListener(`click`,()=>{n&&(t=2,r=``,i())}),e?.addEventListener(`keydown`,e=>{e.key===`Enter`&&n&&(t=2,r=``,i())})}t===2&&Ee(async e=>{try{(await k.setupOwner(n,e)).success&&(L(`success`,`¡Bienvenida!`,`Tu tienda está lista, ${n}`),A.navigate(`/dashboard`))}catch(e){document.getElementById(`pin-error`).textContent=e.message,r=``,Te(r)}},e=>{r=e})}i()}async function Ce(e){let t=await D.getActive(),n=null,r=``;function i(){let e=document.getElementById(`app`);e.className=``,e.innerHTML=`
      <div class="login-page">
        <div class="login-container">
          <div class="login-header">
            <div class="login-logo">🏪</div>
            <h1 class="login-title">Doña Marian</h1>
            <p class="login-subtitle">${n?`Ingresa tu PIN`:`Selecciona tu usuario`}</p>
          </div>

          <div class="login-card">
            ${n?o():a()}
          </div>
        </div>
      </div>
    `,s()}function a(){return t.length===0?`<p style="text-align:center; color: var(--text-secondary);">No hay usuarios registrados</p>`:`
      <div class="login-user-select">
        ${t.map(e=>`
          <div class="login-user-option" data-user-id="${e.id}">
            <div class="avatar ${e.role===`owner`?`avatar-secondary`:`avatar-primary`}">
              ${P(e.name)}
            </div>
            <div>
              <div class="user-name">${e.name}</div>
              <div class="user-role">${e.role===`owner`?`👑 Dueña`:`👤 Empleado`}</div>
            </div>
            <span style="margin-left:auto; color: var(--text-muted);">${M(`chevron-right`)}</span>
          </div>
        `).join(``)}
      </div>
    `}function o(){return`
      <div style="text-align: center; margin-bottom: var(--space-md);">
        <div class="avatar avatar-lg ${n.role===`owner`?`avatar-secondary`:`avatar-primary`}" style="margin: 0 auto var(--space-sm);">
          ${P(n.name)}
        </div>
        <p style="font-weight: var(--font-weight-semibold); color: var(--text-primary);">${n.name}</p>
        <button class="btn btn-ghost btn-sm" id="back-to-users" style="margin-top: var(--space-2xs);">
          ← Cambiar usuario
        </button>
      </div>
      ${we(r)}
      <p class="pin-error-msg" id="pin-error"></p>
    `}function s(){n?(document.getElementById(`back-to-users`)?.addEventListener(`click`,()=>{n=null,r=``,i()}),Ee(async e=>{let t=await k.login(e);if(t.success)L(`success`,`¡Hola, ${t.user.name}!`),A.navigate(`/dashboard`);else{let e=document.getElementById(`pin-error`);e&&(e.textContent=`PIN incorrecto`),r=``,Te(r),document.querySelectorAll(`.pin-dot`).forEach(e=>{e.classList.add(`error`),setTimeout(()=>e.classList.remove(`error`),600)})}},e=>{r=e})):document.querySelectorAll(`.login-user-option`).forEach(e=>{e.addEventListener(`click`,()=>{let a=parseInt(e.dataset.userId);n=t.find(e=>e.id===a),r=``,i()})})}i()}function we(e){return`
    <div class="pin-container">
      <div class="pin-dots">
        ${[0,1,2,3].map(t=>`
          <div class="pin-dot ${t<e.length?`filled`:``}" data-index="${t}"></div>
        `).join(``)}
      </div>
      <div class="pin-keypad">
        ${[1,2,3,4,5,6,7,8,9].map(e=>`
          <button class="pin-key" data-key="${e}">${e}</button>
        `).join(``)}
        <button class="pin-key action" data-key="clear">C</button>
        <button class="pin-key" data-key="0">0</button>
        <button class="pin-key action" data-key="delete">
          ${M(`delete`)}
        </button>
      </div>
    </div>
  `}function Te(e){document.querySelectorAll(`.pin-dot`).forEach((t,n)=>{t.classList.toggle(`filled`,n<e.length)})}function Ee(e,t){let n=``;document.querySelectorAll(`.pin-key`).forEach(r=>{r.addEventListener(`click`,()=>{let i=r.dataset.key;i===`clear`?n=``:i===`delete`?n=n.slice(0,-1):n.length<4&&(n+=i),t(n),Te(n);let a=document.getElementById(`pin-error`);a&&(a.textContent=``),n.length===4&&setTimeout(()=>e(n),200)})}),document.addEventListener(`keydown`,function r(i){if(!document.querySelector(`.pin-keypad`)){document.removeEventListener(`keydown`,r);return}i.key>=`0`&&i.key<=`9`&&n.length<4?(n+=i.key,t(n),Te(n),n.length===4&&setTimeout(()=>e(n),200)):i.key===`Backspace`&&(n=n.slice(0,-1),t(n),Te(n))})}async function De(e){let t=await w.getStats(),n=await T.getRecent(8),r=await w.getLowStock(),i=await T.getDailyStats(7);await E.getAll();let a=(await D.getAll()).map(e=>`${e.name}: ${e.pin}`).join(`, `);await w.getAll();for(let e of n)e.productName=(await w.getById(e.productId))?.name||`Producto eliminado`;let o=Math.max(...i.map(e=>e.total),1);e.innerHTML=`
    <div class="page-header fade-in-up">
      <div class="page-header-info">
        <h1 class="page-title">¡Hola, ${k.getUserName()}! 👋</h1>
        <p class="page-subtitle">Resumen de tu tienda | PINs: ${a}</p>
      </div>
    </div>

    <!-- Stats -->
    <div class="dashboard-stats">
      <div class="stat-card fade-in-up stagger-1">
        <div class="stat-icon primary">${M(`package`)}</div>
        <div class="stat-info">
          <span class="stat-value">${ae(t.totalProducts)}</span>
          <span class="stat-label">Productos</span>
        </div>
      </div>

      <div class="stat-card fade-in-up stagger-2" ${t.lowStockCount>0?`style="border-color: var(--danger); cursor:pointer;" onclick="location.hash='#/inventory?filter=lowstock'"`:``}>
        <div class="stat-icon danger">${M(`alert-triangle`)}</div>
        <div class="stat-info">
          <span class="stat-value">${ae(t.lowStockCount)}</span>
          <span class="stat-label">Stock Bajo</span>
        </div>
      </div>

      <div class="stat-card fade-in-up stagger-3">
        <div class="stat-icon secondary">${M(`dollar-sign`)}</div>
        <div class="stat-info">
          <span class="stat-value">${ie(t.totalValueSale)}</span>
          <span class="stat-label">Valor Inventario</span>
        </div>
      </div>

      <div class="stat-card fade-in-up stagger-4">
        <div class="stat-icon info">${M(`trending-up`)}</div>
        <div class="stat-info">
          <span class="stat-value">${ie(t.potentialProfit)}</span>
          <span class="stat-label">Utilidad Potencial</span>
        </div>
      </div>
    </div>

    <div class="dashboard-grid">
      <!-- Chart -->
      <div class="card fade-in-up stagger-3">
        <div class="card-header">
          <h3 class="card-title">Movimientos (7 días)</h3>
          <span class="badge badge-neutral">${M(`bar-chart`)} Actividad</span>
        </div>
        <div class="mini-chart-container">
          <div class="chart-bars">
            ${i.map(e=>`
              <div class="chart-bar-wrapper">
                <span class="chart-bar-value">${e.total||``}</span>
                <div class="chart-bar" style="height: ${Math.max(e.total/o*100,3)}%;" data-tooltip="Entradas: ${e.entries} | Salidas: ${e.exits}"></div>
                <span class="chart-bar-label">${e.label}</span>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="card fade-in-up stagger-4">
        <div class="card-header">
          <h3 class="card-title">Actividad Reciente</h3>
          <button class="btn btn-ghost btn-sm" onclick="location.hash='#/movements'">
            Ver todo ${M(`chevron-right`)}
          </button>
        </div>
        <div class="activity-list">
          ${n.length===0?`
            <div class="empty-state" style="padding: var(--space-xl);">
              <p style="color: var(--text-muted); font-size: var(--font-size-sm);">No hay movimientos registrados</p>
            </div>
          `:n.map(e=>`
            <div class="activity-item">
              <div class="activity-icon ${e.type}">
                ${M(e.type===`entry`?`arrow-down`:`arrow-up`)}
              </div>
              <div class="activity-text">
                <p>
                  <strong>${e.type===`entry`?`+`:`-`}${e.quantity}</strong> 
                  ${e.productName}
                </p>
                <span>${e.reason} · ${oe(e.createdAt)}</span>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>

    <!-- Low Stock Alert -->
    ${r.length>0?`
      <div class="card fade-in-up stagger-5" style="margin-top: var(--space-md); border-color: rgba(231, 111, 81, 0.3);">
        <div class="card-header">
          <h3 class="card-title" style="color: var(--danger);">
            ${M(`alert-triangle`)} Productos con Stock Bajo
          </h3>
          <span class="badge badge-danger">${r.length}</span>
        </div>
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Stock</th>
                <th>Mínimo</th>
                <th class="hide-mobile">Acción</th>
              </tr>
            </thead>
            <tbody>
              ${r.slice(0,5).map(e=>`
                <tr>
                  <td style="font-weight: var(--font-weight-medium);">${e.name}</td>
                  <td>
                    <span class="badge ${e.stock===0?`badge-danger`:`badge-warning`}">
                      ${e.stock} ${e.unit||`pzas`}
                    </span>
                  </td>
                  <td style="color: var(--text-secondary);">${e.minStock} ${e.unit||`pzas`}</td>
                  <td class="hide-mobile">
                    <button class="btn btn-sm btn-primary restock-btn" data-id="${e.id}">
                      ${M(`plus`)} Reabastecer
                    </button>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
        ${r.length>5?`
          <div style="padding: var(--space-sm); text-align: center;">
            <button class="btn btn-ghost btn-sm" onclick="location.hash='#/inventory?filter=lowstock'">
              Ver los ${r.length} productos →
            </button>
          </div>
        `:``}
      </div>
    `:``}

    <!-- Quick Actions -->
    <div class="card fade-in-up stagger-6" style="margin-top: var(--space-md);">
      <div class="card-header">
        <h3 class="card-title">Acciones Rápidas</h3>
      </div>
      <div class="quick-actions">
        <button class="quick-action-btn" onclick="location.hash='#/products/new'">
          ${M(`plus`)}
          Nuevo Producto
        </button>
        <button class="quick-action-btn" onclick="location.hash='#/inventory'">
          ${M(`package`)}
          Ver Inventario
        </button>
        <button class="quick-action-btn" onclick="location.hash='#/categories'">
          ${M(`tags`)}
          Categorías
        </button>
        <button class="quick-action-btn" onclick="location.hash='#/movements'">
          ${M(`arrow-left-right`)}
          Movimientos
        </button>
      </div>
    </div>
  `,e.querySelectorAll(`.restock-btn`).forEach(e=>{e.addEventListener(`click`,()=>{A.navigate(`/movements?product=${e.dataset.id}&type=entry`)})})}var Oe=`modulepreload`,ke=function(e){return`/Tienda.github.io/`+e},Ae={},z=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=ke(t,n),t in Ae)return;Ae[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Oe,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},B={search:``,categoryId:null,lowStock:!1,sortBy:`name`,sortDir:`asc`};async function je(e){window.location.hash.includes(`filter=lowstock`)&&(B.lowStock=!0),await V(e)}async function V(e){let t=await E.getAll(),n=await w.getAll(B);e.innerHTML=`
    <div class="page-header fade-in-up">
      <div class="page-header-info">
        <h1 class="page-title">Inventario</h1>
        <p class="page-subtitle">${n.length} producto${n.length===1?``:`s`}</p>
      </div>
      <div class="page-actions">
        ${k.isOwner()?`
          <button class="btn btn-secondary" id="export-csv-btn">
            ${M(`download`)} <span class="hide-mobile">Exportar</span>
          </button>
        `:``}
        <button class="btn btn-primary" id="add-product-btn">
          ${M(`plus`)} Nuevo Producto
        </button>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="toolbar fade-in-up stagger-1">
      <div class="search-box">
        <span class="search-icon">${M(`search`)}</span>
        <input type="text" class="form-input" id="search-input" placeholder="Buscar producto..." value="${B.search||``}">
      </div>
      <div class="filter-group">
        <select class="form-select" id="category-filter" style="min-width:140px;">
          <option value="">Todas las categorías</option>
          ${t.map(e=>`
            <option value="${e.id}" ${B.categoryId===e.id?`selected`:``}>${e.name}</option>
          `).join(``)}
        </select>
        <button class="btn btn-sm ${B.lowStock?`btn-danger`:`btn-secondary`}" id="lowstock-filter">
          ${M(`alert-triangle`)} Stock bajo
        </button>
      </div>
    </div>

    <!-- Products Table -->
    ${n.length===0?`
      <div class="empty-state fade-in-up stagger-2">
        <div class="empty-state-icon">${M(`package`)}</div>
        <h3 class="empty-state-title">${B.search||B.categoryId||B.lowStock?`Sin resultados`:`Sin productos`}</h3>
        <p class="empty-state-text">${B.search||B.categoryId||B.lowStock?`Intenta con otros filtros`:`Agrega tu primer producto para empezar`}</p>
        ${!B.search&&!B.categoryId?`
          <button class="btn btn-primary" onclick="location.hash='#/products/new'">${M(`plus`)} Agregar Producto</button>
        `:`
          <button class="btn btn-secondary" id="clear-filters-btn">${M(`refresh`)} Limpiar filtros</button>
        `}
      </div>
    `:`
      <div class="table-wrapper fade-in-up stagger-2">
        <table class="data-table" id="products-table">
          <thead>
            <tr>
              <th class="sortable" data-sort="name">Producto</th>
              <th class="hide-mobile sortable" data-sort="categoryId">Categoría</th>
              <th class="sortable" data-sort="stock">Stock</th>
              <th class="hide-mobile sortable" data-sort="purchasePrice">P. Compra</th>
              <th class="sortable" data-sort="salePrice">P. Venta</th>
              <th style="width:120px;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${await Me(n,t)}
          </tbody>
        </table>
      </div>
    `}
  `,H(e,t)}async function Me(e,t){let n={};return t.forEach(e=>{n[e.id]=e}),e.map(e=>{let t=n[e.categoryId],r=e.stock<e.minStock,i=e.stock===0;return`
      <tr data-product-id="${e.id}">
        <td>
          <div style="display:flex; flex-direction:column; gap:2px;">
            <span style="font-weight: var(--font-weight-semibold);">${e.name}</span>
            ${e.barcode?`<span style="font-size: var(--font-size-xs); color: var(--text-muted);">${e.barcode}</span>`:``}
          </div>
        </td>
        <td class="hide-mobile">
          ${t?`<span class="badge" style="background: ${t.color}20; color: ${t.color};">${t.name}</span>`:`—`}
        </td>
        <td>
          <span class="badge ${i?`badge-danger`:r?`badge-warning`:`badge-success`}">
            ${e.stock} ${e.unit||`pzas`}
          </span>
        </td>
        <td class="hide-mobile">${ie(e.purchasePrice)}</td>
        <td>${ie(e.salePrice)}</td>
        <td>
          <div style="display:flex; gap: var(--space-2xs);">
            <button class="btn btn-icon btn-ghost movement-btn" data-id="${e.id}" data-tooltip="Movimiento">
              ${M(`arrow-left-right`)}
            </button>
            <button class="btn btn-icon btn-ghost edit-btn" data-id="${e.id}" data-tooltip="Editar">
              ${M(`edit`)}
            </button>
            ${k.isOwner()?`
              <button class="btn btn-icon btn-ghost delete-btn" data-id="${e.id}" data-tooltip="Eliminar" style="color: var(--danger);">
                ${M(`trash`)}
              </button>
            `:``}
          </div>
        </td>
      </tr>
    `}).join(``)}function H(e,t){let n=e.querySelector(`#search-input`),r=ce(async t=>{B.search=t,await V(e)},300);n?.addEventListener(`input`,e=>r(e.target.value)),e.querySelector(`#category-filter`)?.addEventListener(`change`,async t=>{B.categoryId=t.target.value?parseInt(t.target.value):null,await V(e)}),e.querySelector(`#lowstock-filter`)?.addEventListener(`click`,async()=>{B.lowStock=!B.lowStock,await V(e)}),e.querySelector(`#clear-filters-btn`)?.addEventListener(`click`,async()=>{B={search:``,categoryId:null,lowStock:!1,sortBy:`name`,sortDir:`asc`},await V(e)}),e.querySelector(`#add-product-btn`)?.addEventListener(`click`,()=>{A.navigate(`/products/new`)}),e.querySelector(`#export-csv-btn`)?.addEventListener(`click`,async()=>{let{SettingsAPI:e}=await z(async()=>{let{SettingsAPI:e}=await Promise.resolve().then(()=>te);return{SettingsAPI:e}},void 0),t=await e.exportCSV(),{downloadFile:n}=await z(async()=>{let{downloadFile:e}=await Promise.resolve().then(()=>N);return{downloadFile:e}},void 0);n(t,`inventario_dona_marian_${new Date().toISOString().split(`T`)[0]}.csv`,`text/csv`),L(`success`,`Exportación exitosa`,`Se descargó el archivo CSV`)}),e.querySelectorAll(`.edit-btn`).forEach(e=>{e.addEventListener(`click`,()=>{A.navigate(`/products/${e.dataset.id}`)})}),e.querySelectorAll(`.delete-btn`).forEach(t=>{t.addEventListener(`click`,async()=>{await be({title:`¿Eliminar producto?`,message:`Se eliminará "${(await w.getById(parseInt(t.dataset.id))).name}" permanentemente.`,type:`danger`,confirmText:`Eliminar`})&&(await w.delete(parseInt(t.dataset.id)),L(`success`,`Producto eliminado`),await V(e))})}),e.querySelectorAll(`.movement-btn`).forEach(t=>{t.addEventListener(`click`,async()=>{await Ne(parseInt(t.dataset.id),e)})})}async function Ne(e,t){let n=await w.getById(e);if(!n)return;let r=`entry`,i=ye({title:`Registrar Movimiento`,content:`
    <div style="margin-bottom: var(--space-md);">
      <p style="color: var(--text-secondary); font-size: var(--font-size-sm);">
        Producto: <strong style="color: var(--text-primary);">${n.name}</strong>
      </p>
      <p style="color: var(--text-secondary); font-size: var(--font-size-sm);">
        Stock actual: <strong style="color: var(--text-primary);">${n.stock} ${n.unit||`pzas`}</strong>
      </p>
    </div>

    <div class="movement-type-selector">
      <button class="movement-type-btn active entry" data-type="entry">
        <div class="type-icon">📥</div>
        <div class="type-label" style="color: var(--success);">Entrada</div>
      </button>
      <button class="movement-type-btn exit" data-type="exit">
        <div class="type-icon">📤</div>
        <div class="type-label" style="color: var(--danger);">Salida</div>
      </button>
    </div>

    <div class="form-group" style="margin-bottom: var(--space-md);">
      <label class="form-label">Cantidad</label>
      <input type="number" class="form-input" id="movement-qty" min="1" placeholder="Cantidad" autofocus>
    </div>

    <div class="form-group" style="margin-bottom: var(--space-md);">
      <label class="form-label">Razón</label>
      <select class="form-select" id="movement-reason">
        ${I.entry.map(e=>`<option value="${e}">${e}</option>`).join(``)}
      </select>
    </div>
  `,footer:`
    <button class="btn btn-secondary" id="modal-cancel">Cancelar</button>
    <button class="btn btn-primary" id="modal-save">${M(`check-circle`)} Registrar</button>
  `});i.element.querySelectorAll(`.movement-type-btn`).forEach(e=>{e.addEventListener(`click`,()=>{i.element.querySelectorAll(`.movement-type-btn`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),r=e.dataset.type;let t=i.element.querySelector(`#movement-reason`);t.innerHTML=I[r].map(e=>`<option value="${e}">${e}</option>`).join(``)})}),i.element.querySelector(`#modal-cancel`).addEventListener(`click`,()=>i.close()),i.element.querySelector(`#modal-save`).addEventListener(`click`,async()=>{let a=parseInt(i.element.querySelector(`#movement-qty`).value),o=i.element.querySelector(`#movement-reason`).value;if(!a||a<=0){L(`error`,`Cantidad inválida`,`Ingresa una cantidad mayor a 0`);return}if(r===`exit`&&a>n.stock){L(`warning`,`Stock insuficiente`,`Solo hay ${n.stock} ${n.unit||`pzas`} disponibles`);return}try{await T.register(e,r,a,o,k.getUserId()),L(`success`,r===`entry`?`Entrada registrada`:`Salida registrada`,`${a} ${n.unit||`pzas`} de ${n.name}`),i.close(),await V(t)}catch(e){L(`error`,`Error`,e.message)}})}async function Pe(e,t={}){let n=t.id&&t.id!==`new`,r=n?await w.getById(parseInt(t.id)):null,i=await E.getAll();if(n&&!r){L(`error`,`Producto no encontrado`),A.navigate(`/inventory`);return}e.innerHTML=`
    <div class="page-header fade-in-up">
      <div class="page-header-info">
        <h1 class="page-title">${n?`Editar Producto`:`Nuevo Producto`}</h1>
        <p class="page-subtitle">${n?r.name:`Completa la información del producto`}</p>
      </div>
      <div class="page-actions">
        <button class="btn btn-secondary" id="cancel-btn">
          ${M(`chevron-left`)} Volver
        </button>
      </div>
    </div>

    <div class="card fade-in-up stagger-1">
      <form class="product-form" id="product-form">
        <!-- Info Básica -->
        <div class="form-section">
          <h3 class="form-section-title">Información Básica</h3>
          
          <div class="form-group" style="margin-bottom: var(--space-md);">
            <label class="form-label" for="product-name">Nombre del producto *</label>
            <input type="text" class="form-input" id="product-name" placeholder="Ej: Coca Cola 600ml" value="${r?.name||``}" required autofocus>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="product-barcode">Código de barras</label>
              <input type="text" class="form-input" id="product-barcode" placeholder="Opcional" value="${r?.barcode||``}">
            </div>
            <div class="form-group">
              <label class="form-label" for="product-category">Categoría *</label>
              <select class="form-select" id="product-category" required>
                <option value="">Seleccionar...</option>
                ${i.map(e=>`
                  <option value="${e.id}" ${r?.categoryId===e.id?`selected`:``}>${e.name}</option>
                `).join(``)}
              </select>
            </div>
          </div>
        </div>

        <!-- Precios -->
        <div class="form-section">
          <h3 class="form-section-title">Precios</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="product-purchase">Precio de compra *</label>
              <input type="number" class="form-input" id="product-purchase" step="0.01" min="0" placeholder="$0.00" value="${r?.purchasePrice||``}" required>
            </div>
            <div class="form-group">
              <label class="form-label" for="product-sale">Precio de venta *</label>
              <input type="number" class="form-input" id="product-sale" step="0.01" min="0" placeholder="$0.00" value="${r?.salePrice||``}" required>
            </div>
          </div>

          <div id="margin-indicator" style="font-size: var(--font-size-sm); color: var(--text-secondary); margin-top: var(--space-xs);"></div>
        </div>

        <!-- Stock -->
        <div class="form-section">
          <h3 class="form-section-title">Inventario</h3>
          
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="product-stock">${n?`Stock actual`:`Stock inicial`}</label>
              <input type="number" class="form-input" id="product-stock" min="0" placeholder="0" value="${r?.stock??0}" ${n?`disabled`:``}>
              ${n?`<span class="form-hint">Para cambiar stock, usa Movimientos</span>`:``}
            </div>
            <div class="form-group">
              <label class="form-label" for="product-minstock">Stock mínimo (alerta)</label>
              <input type="number" class="form-input" id="product-minstock" min="0" placeholder="5" value="${r?.minStock??5}">
            </div>
          </div>

          <div class="form-group" style="margin-top: var(--space-md);">
            <label class="form-label" for="product-unit">Unidad de medida</label>
            <select class="form-select" id="product-unit" style="max-width: 200px;">
              ${ue.map(e=>`
                <option value="${e.value}" ${(r?.unit||`pzas`)===e.value?`selected`:``}>${e.label}</option>
              `).join(``)}
            </select>
          </div>
        </div>

        <!-- Extra -->
        <div class="form-section">
          <h3 class="form-section-title">Información Adicional</h3>
          
          <div class="form-group" style="margin-bottom: var(--space-md);">
            <label class="form-label" for="product-supplier">Proveedor</label>
            <input type="text" class="form-input" id="product-supplier" placeholder="Nombre del proveedor" value="${r?.supplier||``}">
          </div>

          <div class="form-group">
            <label class="form-label" for="product-notes">Notas</label>
            <textarea class="form-textarea" id="product-notes" placeholder="Notas adicionales..." rows="3">${r?.notes||``}</textarea>
          </div>
        </div>

        <!-- Submit -->
        <div style="display: flex; gap: var(--space-sm); justify-content: flex-end; padding-top: var(--space-md); border-top: 1px solid var(--border-color);">
          <button type="button" class="btn btn-secondary" id="form-cancel">Cancelar</button>
          <button type="submit" class="btn btn-primary btn-lg">
            ${M(`save`)} ${n?`Guardar Cambios`:`Crear Producto`}
          </button>
        </div>
      </form>
    </div>
  `;let a=e.querySelector(`#product-form`),o=e.querySelector(`#product-purchase`),s=e.querySelector(`#product-sale`),c=e.querySelector(`#margin-indicator`);function l(){let e=parseFloat(o.value)||0,t=parseFloat(s.value)||0;if(e>0&&t>0){let n=((t-e)/e*100).toFixed(1),r=n>=0?`var(--success)`:`var(--danger)`;c.innerHTML=`Margen: <strong style="color: ${r};">${n}%</strong> (Ganancia: <strong style="color: ${r};">$${(t-e).toFixed(2)}</strong>)`}else c.innerHTML=``}o?.addEventListener(`input`,l),s?.addEventListener(`input`,l),l(),e.querySelector(`#cancel-btn`)?.addEventListener(`click`,()=>A.navigate(`/inventory`)),e.querySelector(`#form-cancel`)?.addEventListener(`click`,()=>A.navigate(`/inventory`)),a?.addEventListener(`submit`,async i=>{i.preventDefault();let a={name:e.querySelector(`#product-name`).value.trim(),barcode:e.querySelector(`#product-barcode`).value.trim(),categoryId:parseInt(e.querySelector(`#product-category`).value),purchasePrice:parseFloat(e.querySelector(`#product-purchase`).value)||0,salePrice:parseFloat(e.querySelector(`#product-sale`).value)||0,stock:n?r.stock:parseInt(e.querySelector(`#product-stock`).value)||0,minStock:parseInt(e.querySelector(`#product-minstock`).value)||5,unit:e.querySelector(`#product-unit`).value,supplier:e.querySelector(`#product-supplier`).value.trim(),notes:e.querySelector(`#product-notes`).value.trim()};if(!a.name){L(`error`,`Nombre requerido`);return}if(!a.categoryId){L(`error`,`Selecciona una categoría`);return}try{n?(await w.update(parseInt(t.id),a),L(`success`,`Producto actualizado`,a.name)):(await w.create(a),L(`success`,`Producto creado`,a.name)),A.navigate(`/inventory`)}catch(e){L(`error`,`Error`,e.message)}})}async function Fe(e){let t=await E.getAllIncludeInactive();for(let e of t)e.productCount=await E.getProductCount(e.id);e.innerHTML=`
    <div class="page-header fade-in-up">
      <div class="page-header-info">
        <h1 class="page-title">Categorías</h1>
        <p class="page-subtitle">${t.filter(e=>e.active).length} categorías activas</p>
      </div>
      ${k.isOwner()?`
        <div class="page-actions">
          <button class="btn btn-primary" id="add-category-btn">
            ${M(`plus`)} Nueva Categoría
          </button>
        </div>
      `:``}
    </div>

    <div class="grid grid-auto fade-in-up stagger-1">
      ${t.map((e,t)=>`
        <div class="card card-interactive ${e.active?``:`opacity-50`}" style="position: relative; ${e.active?``:`opacity: 0.5;`}" data-cat-id="${e.id}">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: ${e.color}20; display: flex; align-items: center; justify-content: center;">
              <div style="width: 20px; height: 20px; border-radius: var(--radius-full); background: ${e.color};"></div>
            </div>
            <div style="flex: 1; min-width: 0;">
              <h3 style="font-weight: var(--font-weight-semibold); color: var(--text-primary); font-size: var(--font-size-md);">${e.name}</h3>
              <p style="font-size: var(--font-size-sm); color: var(--text-secondary);">
                ${e.productCount} producto${e.productCount===1?``:`s`}
                ${e.active?``:` · <span style="color: var(--warning);">Inactiva</span>`}
              </p>
            </div>
            ${k.isOwner()?`
              <div style="display: flex; gap: var(--space-2xs);">
                <button class="btn btn-icon btn-ghost edit-cat-btn" data-id="${e.id}" data-tooltip="Editar">
                  ${M(`edit`)}
                </button>
                <button class="btn btn-icon btn-ghost delete-cat-btn" data-id="${e.id}" data-tooltip="Eliminar" style="color: var(--danger);">
                  ${M(`trash`)}
                </button>
              </div>
            `:``}
          </div>
        </div>
      `).join(``)}
    </div>
  `,e.querySelector(`#add-category-btn`)?.addEventListener(`click`,()=>{Ie(null,e)}),e.querySelectorAll(`.edit-cat-btn`).forEach(t=>{t.addEventListener(`click`,async n=>{n.stopPropagation(),Ie(await E.getById(parseInt(t.dataset.id)),e)})}),e.querySelectorAll(`.delete-cat-btn`).forEach(t=>{t.addEventListener(`click`,async n=>{n.stopPropagation();let r=parseInt(t.dataset.id);if(await be({title:`¿Eliminar categoría?`,message:`Se eliminará "${(await E.getById(r)).name}". Los productos sin categoría quedarán sin asignar.`,type:`danger`,confirmText:`Eliminar`}))try{await E.delete(r),L(`success`,`Categoría eliminada`),await Fe(e)}catch(e){L(`error`,`No se pudo eliminar`,e.message)}})})}function Ie(e,t){let n=!!e,r=e?.color||de[0],i=`
    <div class="form-group" style="margin-bottom: var(--space-lg);">
      <label class="form-label">Nombre de la categoría *</label>
      <input type="text" class="form-input" id="cat-name" placeholder="Ej: Bebidas" value="${e?.name||``}" autofocus>
    </div>

    <div class="form-group">
      <label class="form-label">Color</label>
      <div id="color-grid" style="display: flex; flex-wrap: wrap; gap: var(--space-xs); margin-top: var(--space-xs);">
        ${de.map(e=>`
          <button type="button" class="color-option" data-color="${e}" 
            style="width: 36px; height: 36px; border-radius: var(--radius-md); background: ${e}; border: 3px solid ${e===r?`var(--text-primary)`:`transparent`}; cursor: pointer; transition: all var(--transition-fast);">
          </button>
        `).join(``)}
      </div>
    </div>
  `,a=`
    <button class="btn btn-secondary" id="cat-cancel">Cancelar</button>
    <button class="btn btn-primary" id="cat-save">${M(`save`)} ${n?`Guardar`:`Crear`}</button>
  `,o=ye({title:n?`Editar Categoría`:`Nueva Categoría`,content:i,footer:a,size:`sm`});o.element.querySelectorAll(`.color-option`).forEach(e=>{e.addEventListener(`click`,()=>{o.element.querySelectorAll(`.color-option`).forEach(e=>e.style.borderColor=`transparent`),e.style.borderColor=`var(--text-primary)`,r=e.dataset.color})}),o.element.querySelector(`#cat-cancel`).addEventListener(`click`,()=>o.close()),o.element.querySelector(`#cat-save`).addEventListener(`click`,async()=>{let i=o.element.querySelector(`#cat-name`).value.trim();if(!i){L(`error`,`Nombre requerido`);return}try{n?(await E.update(e.id,{name:i,color:r}),L(`success`,`Categoría actualizada`)):(await E.create({name:i,color:r}),L(`success`,`Categoría creada`)),o.close(),await Fe(t)}catch(e){L(`error`,`Error`,e.message)}})}async function Le(e){let t=await T.getAll(),n=await w.getAll({showInactive:!0}),r=await D.getAll(),i={};n.forEach(e=>{i[e.id]=e});let a={};r.forEach(e=>{a[e.id]=e});let o=t.map(e=>({...e,productName:i[e.productId]?.name||`Eliminado`,productUnit:i[e.productId]?.unit||`pzas`,userName:a[e.userId]?.name||`—`})),s=o.filter(e=>e.type===`entry`).reduce((e,t)=>e+t.quantity,0),c=o.filter(e=>e.type===`exit`).reduce((e,t)=>e+t.quantity,0);e.innerHTML=`
    <div class="page-header fade-in-up">
      <div class="page-header-info">
        <h1 class="page-title">Movimientos de Stock</h1>
        <p class="page-subtitle">${o.length} movimientos registrados</p>
      </div>
    </div>

    <!-- Mini Stats -->
    <div style="display: flex; gap: var(--space-md); margin-bottom: var(--space-lg); flex-wrap: wrap;" class="fade-in-up stagger-1">
      <div style="display: flex; align-items: center; gap: var(--space-xs); padding: var(--space-sm) var(--space-md); background: var(--success-bg); border-radius: var(--radius-md);">
        ${M(`arrow-down`)}
        <span style="color: var(--success); font-weight: var(--font-weight-semibold);">Entradas: ${s}</span>
      </div>
      <div style="display: flex; align-items: center; gap: var(--space-xs); padding: var(--space-sm) var(--space-md); background: var(--danger-bg); border-radius: var(--radius-md);">
        ${M(`arrow-up`)}
        <span style="color: var(--danger); font-weight: var(--font-weight-semibold);">Salidas: ${c}</span>
      </div>
    </div>

    ${o.length===0?`
      <div class="empty-state fade-in-up stagger-2">
        <div class="empty-state-icon">${M(`arrow-left-right`)}</div>
        <h3 class="empty-state-title">Sin movimientos</h3>
        <p class="empty-state-text">Los movimientos de stock aparecerán aquí cuando registres entradas o salidas</p>
      </div>
    `:`
      <div class="table-wrapper fade-in-up stagger-2">
        <table class="data-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th class="hide-mobile">Stock</th>
              <th class="hide-mobile">Razón</th>
              <th class="hide-mobile">Usuario</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            ${o.map(e=>`
              <tr>
                <td>
                  <span class="badge ${e.type===`entry`?`badge-success`:`badge-danger`}">
                    ${e.type===`entry`?`📥 Entrada`:`📤 Salida`}
                  </span>
                </td>
                <td style="font-weight: var(--font-weight-medium);">${e.productName}</td>
                <td>
                  <span style="font-weight: var(--font-weight-semibold); color: ${e.type===`entry`?`var(--success)`:`var(--danger)`};">
                    ${e.type===`entry`?`+`:`-`}${e.quantity} ${e.productUnit}
                  </span>
                </td>
                <td class="hide-mobile" style="color: var(--text-secondary);">
                  ${e.previousStock} → ${e.newStock}
                </td>
                <td class="hide-mobile" style="color: var(--text-secondary); font-size: var(--font-size-sm);">${e.reason}</td>
                <td class="hide-mobile" style="color: var(--text-secondary); font-size: var(--font-size-sm);">${e.userName}</td>
                <td style="font-size: var(--font-size-sm); color: var(--text-secondary);">
                  <span data-tooltip="${se(e.createdAt)}">${oe(e.createdAt)}</span>
                </td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
    `}
  `}async function Re(e){if(!k.isOwner()){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-state-icon" style="background: var(--danger-bg); color: var(--danger);">${M(`shield`)}</div>
        <h3 class="empty-state-title">Acceso restringido</h3>
        <p class="empty-state-text">Solo la dueña puede gestionar usuarios</p>
      </div>
    `;return}let t=await D.getAll();e.innerHTML=`
    <div class="page-header fade-in-up">
      <div class="page-header-info">
        <h1 class="page-title">Usuarios</h1>
        <p class="page-subtitle">${t.filter(e=>e.active).length} usuarios activos</p>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary" id="add-user-btn">
          ${M(`plus`)} Nuevo Empleado
        </button>
      </div>
    </div>

    <div class="grid grid-auto fade-in-up stagger-1">
      ${t.map(e=>`
        <div class="card" style="${e.active?``:`opacity: 0.5;`}">
          <div style="display: flex; align-items: center; gap: var(--space-md);">
            <div class="avatar avatar-lg ${e.role===`owner`?`avatar-secondary`:`avatar-primary`}">
              ${P(e.name)}
            </div>
            <div style="flex: 1;">
              <h3 style="font-weight: var(--font-weight-semibold); font-size: var(--font-size-md); color: var(--text-primary);">
                ${e.name}
              </h3>
              <p style="font-size: var(--font-size-sm); color: var(--text-secondary);">
                ${e.role===`owner`?`👑 Dueña`:`👤 Empleado`}
                ${e.active?``:` · <span style="color: var(--danger);">Inactivo</span>`}
              </p>
              <p style="font-size: var(--font-size-xs); color: var(--text-muted); margin-top: 4px;">
                Desde: ${se(e.createdAt)}
              </p>
            </div>
            ${e.role===`owner`?``:`
              <div style="display: flex; gap: var(--space-2xs);">
                <button class="btn btn-icon btn-ghost edit-user-btn" data-id="${e.id}" data-tooltip="Editar">
                  ${M(`edit`)}
                </button>
                <button class="btn btn-icon btn-ghost toggle-user-btn" data-id="${e.id}" data-active="${e.active}" data-tooltip="${e.active?`Desactivar`:`Activar`}" style="color: ${e.active?`var(--danger)`:`var(--success)`};">
                  ${e.active?M(`circle-x`):M(`check-circle`)}
                </button>
              </div>
            `}
          </div>
        </div>
      `).join(``)}
    </div>
  `,e.querySelector(`#add-user-btn`)?.addEventListener(`click`,()=>{ze(null,e)}),e.querySelectorAll(`.edit-user-btn`).forEach(t=>{t.addEventListener(`click`,async()=>{ze(await D.getById(parseInt(t.dataset.id)),e)})}),e.querySelectorAll(`.toggle-user-btn`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=parseInt(t.dataset.id),r=await D.getById(n);r.active?await be({title:`¿Desactivar usuario?`,message:`${r.name} no podrá acceder a la app.`,type:`warning`,confirmText:`Desactivar`})&&(await D.update(n,{active:!1}),L(`success`,`Usuario desactivado`),await Re(e)):(await D.update(n,{active:!0}),L(`success`,`Usuario activado`),await Re(e))})})}function ze(e,t){let n=!!e,r=`
    <div class="form-group" style="margin-bottom: var(--space-md);">
      <label class="form-label">Nombre del empleado *</label>
      <input type="text" class="form-input" id="user-name" placeholder="Ej: Juan Pérez" value="${e?.name||``}" autofocus>
    </div>

    <div class="form-group" style="margin-bottom: var(--space-md);">
      <label class="form-label">${n?`Nuevo PIN (dejar vacío para no cambiar)`:`PIN de acceso (4 dígitos) *`}</label>
      <input type="password" class="form-input" id="user-pin" placeholder="****" maxlength="4" pattern="[0-9]{4}" inputmode="numeric"
        style="text-align: center; font-size: var(--font-size-xl); letter-spacing: 12px;">
      <span class="form-hint">El PIN debe ser único para cada usuario</span>
    </div>
  `,i=`
    <button class="btn btn-secondary" id="user-cancel">Cancelar</button>
    <button class="btn btn-primary" id="user-save">${M(`save`)} ${n?`Guardar`:`Crear`}</button>
  `,a=ye({title:n?`Editar Empleado`:`Nuevo Empleado`,content:r,footer:i,size:`sm`});a.element.querySelector(`#user-cancel`).addEventListener(`click`,()=>a.close()),a.element.querySelector(`#user-save`).addEventListener(`click`,async()=>{let r=a.element.querySelector(`#user-name`).value.trim(),i=a.element.querySelector(`#user-pin`).value.trim();if(!r){L(`error`,`Nombre requerido`);return}if(!n&&(!i||i.length!==4||!/^\d{4}$/.test(i))){L(`error`,`PIN inválido`,`Debe ser de 4 dígitos numéricos`);return}if(n&&i&&(i.length!==4||!/^\d{4}$/.test(i))){L(`error`,`PIN inválido`,`Debe ser de 4 dígitos numéricos`);return}try{if(n){let t={name:r};i&&(t.pin=i),await D.update(e.id,t),L(`success`,`Empleado actualizado`)}else await D.create({name:r,pin:i,role:`employee`}),L(`success`,`Empleado creado`,`PIN: ${i}`);a.close(),await Re(t)}catch(e){L(`error`,`Error`,e.message)}})}async function Be(e){let t=await O.getAll();e.innerHTML=`
    <div class="page-header fade-in-up">
      <div class="page-header-info">
        <h1 class="page-title">Configuración</h1>
        <p class="page-subtitle">Ajustes de la tienda</p>
      </div>
    </div>

    <!-- Store Info -->
    <div class="card fade-in-up stagger-1" style="margin-bottom: var(--space-md);">
      <div class="card-header">
        <h3 class="card-title">${M(`store`)} Datos de la Tienda</h3>
      </div>
      <div style="display: flex; flex-direction: column; gap: var(--space-md);">
        <div class="form-group">
          <label class="form-label">Nombre de la tienda</label>
          <input type="text" class="form-input" id="setting-store-name" value="${t.storeName||`Doña Marian`}" ${k.isOwner()?``:`disabled`}>
        </div>
        <div class="form-group">
          <label class="form-label">Nombre de la dueña</label>
          <input type="text" class="form-input" id="setting-owner-name" value="${t.ownerName||``}" ${k.isOwner()?``:`disabled`}>
        </div>
        ${k.isOwner()?`
          <button class="btn btn-primary" id="save-settings-btn" style="align-self: flex-start;">
            ${M(`save`)} Guardar Cambios
          </button>
        `:``}
      </div>
    </div>

    <!-- Data Management -->
    ${k.isOwner()?`
      <div class="card fade-in-up stagger-2" style="margin-bottom: var(--space-md);">
        <div class="card-header">
          <h3 class="card-title">${M(`database`)} Respaldos</h3>
        </div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-icon">${M(`download`)}</div>
              <div class="settings-item-text">
                <h4>Exportar Respaldo</h4>
                <p>Descarga todos los datos en formato JSON</p>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" id="export-backup-btn">Exportar</button>
          </div>

          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-icon" style="background: var(--warning-bg); color: var(--warning);">${M(`upload`)}</div>
              <div class="settings-item-text">
                <h4>Importar Respaldo</h4>
                <p>Restaurar datos desde un archivo JSON</p>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" id="import-backup-btn">Importar</button>
          </div>

          <div class="settings-item">
            <div class="settings-item-info">
              <div class="settings-item-icon">${M(`download`)}</div>
              <div class="settings-item-text">
                <h4>Exportar Inventario CSV</h4>
                <p>Descarga el inventario en formato CSV</p>
              </div>
            </div>
            <button class="btn btn-secondary btn-sm" id="export-csv-btn">Exportar CSV</button>
          </div>
        </div>
      </div>
    `:``}

    <!-- App Info -->
    <div class="card fade-in-up stagger-3">
      <div class="card-header">
        <h3 class="card-title">Acerca de</h3>
      </div>
      <div style="display: flex; flex-direction: column; gap: var(--space-sm); color: var(--text-secondary); font-size: var(--font-size-sm);">
        <p><strong style="color: var(--text-primary);">Doña Marian</strong> v1.0.0</p>
        <p>Sistema de gestión de tienda de abarrotes</p>
        <p>Datos almacenados localmente en tu dispositivo</p>
        <div style="display: flex; align-items: center; gap: var(--space-xs); margin-top: var(--space-xs);">
          <span id="connection-status" style="width: 8px; height: 8px; border-radius: var(--radius-full); background: var(--success);"></span>
          <span id="connection-text">Conectado</span>
        </div>
      </div>
    </div>
  `;function n(){let t=e.querySelector(`#connection-status`),n=e.querySelector(`#connection-text`);t&&n&&(navigator.onLine?(t.style.background=`var(--success)`,n.textContent=`Conectado`):(t.style.background=`var(--warning)`,n.textContent=`Sin conexión — datos guardados localmente`))}n(),window.addEventListener(`online`,n),window.addEventListener(`offline`,n),e.querySelector(`#save-settings-btn`)?.addEventListener(`click`,async()=>{let t=e.querySelector(`#setting-store-name`).value.trim(),n=e.querySelector(`#setting-owner-name`).value.trim();await O.set(`storeName`,t||`Doña Marian`),await O.set(`ownerName`,n),L(`success`,`Configuración guardada`);let r=document.querySelector(`.sidebar-brand-name`);r&&(r.textContent=t||`Doña Marian`)}),e.querySelector(`#export-backup-btn`)?.addEventListener(`click`,async()=>{try{let e=await O.exportAll(),t=new Date().toISOString().split(`T`)[0];le(e,`dona_marian_backup_${t}.json`,`application/json`),L(`success`,`Respaldo exportado`,`Guarda este archivo en un lugar seguro`)}catch(e){L(`error`,`Error al exportar`,e.message)}}),e.querySelector(`#import-backup-btn`)?.addEventListener(`click`,async()=>{try{let e=await F(`.json`);await O.importAll(e),L(`success`,`Respaldo restaurado`,`Se recargará la app...`),setTimeout(()=>location.reload(),1500)}catch(e){L(`error`,`Error al importar`,e.message)}}),e.querySelector(`#export-csv-btn`)?.addEventListener(`click`,async()=>{try{let e=await O.exportCSV(),t=new Date().toISOString().split(`T`)[0];le(e,`inventario_dona_marian_${t}.csv`,`text/csv`),L(`success`,`CSV exportado`)}catch(e){L(`error`,`Error al exportar`,e.message)}})}function Ve(){let e=k.getUser(),t=document.getElementById(`app`);t.innerHTML=`
    <!-- Sidebar Overlay (mobile) -->
    <div class="sidebar-overlay" id="sidebar-overlay"></div>

    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-brand">
        <div class="sidebar-brand-logo">🏪</div>
        <div class="sidebar-brand-info">
          <span class="sidebar-brand-name">Doña Marian</span>
          <span class="sidebar-brand-sub">Sistema de Gestión</span>
        </div>
      </div>

      <nav class="sidebar-nav">
        <span class="nav-section-label">Principal</span>
        <a class="nav-item" href="#/dashboard" data-route="/dashboard">
          ${M(`layout-dashboard`)}
          <span>Dashboard</span>
        </a>
        <a class="nav-item" href="#/inventory" data-route="/inventory">
          ${M(`package`)}
          <span>Inventario</span>
          <span class="nav-badge" id="low-stock-badge" style="display:none;"></span>
        </a>
        <a class="nav-item" href="#/categories" data-route="/categories">
          ${M(`tags`)}
          <span>Categorías</span>
        </a>
        <a class="nav-item" href="#/movements" data-route="/movements">
          ${M(`arrow-left-right`)}
          <span>Movimientos</span>
        </a>

        ${k.isOwner()?`
          <span class="nav-section-label" style="margin-top: var(--space-sm);">Administración</span>
          <a class="nav-item" href="#/users" data-route="/users">
            ${M(`users`)}
            <span>Usuarios</span>
          </a>
        `:``}

        <a class="nav-item" href="#/settings" data-route="/settings" style="margin-top: auto;">
          ${M(`settings`)}
          <span>Configuración</span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-user" id="user-menu">
          <div class="avatar avatar-sm ${e?.role===`owner`?`avatar-secondary`:`avatar-primary`}">
            ${P(e?.name)}
          </div>
          <div class="sidebar-user-info">
            <span class="sidebar-user-name">${e?.name||`Usuario`}</span>
            <span class="sidebar-user-role">${k.getUserRole()}</span>
          </div>
          <span style="color: var(--text-muted); cursor: pointer;" id="logout-btn" data-tooltip="Cerrar sesión">
            ${M(`log-out`)}
          </span>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <header class="main-header">
        <div class="header-left">
          <button class="hamburger" id="hamburger-btn" aria-label="Menú">
            ${M(`menu`)}
          </button>
          <div>
            <h2 class="header-title" id="header-title">Dashboard</h2>
          </div>
        </div>
        <div class="header-right">
          <div id="offline-indicator" style="display:none; color: var(--warning); font-size: var(--font-size-sm); display: flex; align-items: center; gap: var(--space-2xs);">
            ${M(`wifi-off`)} Sin conexión
          </div>
        </div>
      </header>

      <div class="page-content" id="page-content">
        <!-- Pages render here -->
      </div>
    </main>

    <!-- Bottom Nav (mobile) -->
    <nav class="bottom-nav">
      <div class="bottom-nav-items">
        <a class="bottom-nav-item" href="#/dashboard" data-route="/dashboard">
          ${M(`layout-dashboard`)}
          <span>Inicio</span>
        </a>
        <a class="bottom-nav-item" href="#/inventory" data-route="/inventory">
          ${M(`package`)}
          <span>Inventario</span>
        </a>
        <a class="bottom-nav-item" href="#/categories" data-route="/categories">
          ${M(`tags`)}
          <span>Categorías</span>
        </a>
        <a class="bottom-nav-item" href="#/movements" data-route="/movements">
          ${M(`arrow-left-right`)}
          <span>Movimientos</span>
        </a>
        <a class="bottom-nav-item" href="#/settings" data-route="/settings">
          ${M(`settings`)}
          <span>Ajustes</span>
        </a>
      </div>
    </nav>

    <!-- Offline Banner -->
    <div class="offline-banner" id="offline-banner">
      ${M(`wifi-off`)} Sin conexión — los datos se guardan localmente
    </div>
  `;let n=document.getElementById(`sidebar`),r=document.getElementById(`sidebar-overlay`);document.getElementById(`hamburger-btn`)?.addEventListener(`click`,()=>{n.classList.toggle(`open`),r.classList.toggle(`open`),r.classList.toggle(`visible`)}),r?.addEventListener(`click`,()=>{n.classList.remove(`open`),r.classList.remove(`open`),r.classList.remove(`visible`)}),document.getElementById(`logout-btn`)?.addEventListener(`click`,()=>{k.logout(),A.navigate(`/login`)});function i(){let e=`/`+A.getCurrentPath().split(`/`)[1];document.querySelectorAll(`.nav-item`).forEach(t=>{t.classList.toggle(`active`,t.dataset.route===e)}),document.querySelectorAll(`.bottom-nav-item`).forEach(t=>{t.classList.toggle(`active`,t.dataset.route===e)}),n?.classList.remove(`open`),r?.classList.remove(`open`,`visible`);let t={"/dashboard":`Dashboard`,"/inventory":`Inventario`,"/categories":`Categorías`,"/movements":`Movimientos`,"/users":`Usuarios`,"/settings":`Configuración`,"/products":`Producto`},i=document.getElementById(`header-title`);i&&(i.textContent=t[e]||`Doña Marian`)}window.addEventListener(`hashchange`,i),i();function a(){let e=document.getElementById(`offline-banner`),t=document.getElementById(`offline-indicator`);navigator.onLine?(e?.classList.remove(`visible`),t&&(t.style.display=`none`)):(e?.classList.add(`visible`),t&&(t.style.display=`flex`))}window.addEventListener(`online`,a),window.addEventListener(`offline`,a),a(),He()}async function He(){try{let{ProductsAPI:e}=await z(async()=>{let{ProductsAPI:e}=await Promise.resolve().then(()=>te);return{ProductsAPI:e}},void 0),t=await e.getLowStock(),n=document.getElementById(`low-stock-badge`);n&&(t.length>0?(n.textContent=t.length,n.style.display=`flex`):n.style.display=`none`)}catch{}}async function Ue(){if(await ne(),A.register({"/login":e=>xe(e),"/dashboard":e=>De(e),"/inventory":e=>je(e),"/products/new":e=>Pe(e,{id:`new`}),"/products/:id":(e,t)=>Pe(e,t),"/categories":e=>Fe(e),"/movements":e=>Le(e),"/users":e=>Re(e),"/settings":e=>Be(e)}),A.setGuard(async e=>e===`/login`?!0:k.isLoggedIn()?!(!k.isOwner()&&e===`/users`):(A.navigate(`/login`),!1)),await k.init()?(Ve(),!window.location.hash||window.location.hash===`#/login`?A.navigate(`/dashboard`):A.start()):(A.navigate(`/login`),A.start()),k.onChange(e=>{e&&(Ve(),A.start())}),`serviceWorker`in navigator)try{let e=await navigator.serviceWorker.register(`/Tienda.github.io/sw.js`);console.log(`Service Worker registered:`,e.scope)}catch(e){console.log(`SW registration failed:`,e)}}var U=document.createElement(`style`);U.textContent=`
  .page-transitioning { opacity: 0; transform: translateY(8px); transition: all 0.15s ease; }
  .page-entering { animation: fadeInUp 0.3s ease forwards; }
  
  .icon { display: inline-flex; align-items: center; justify-content: center; }
  .icon svg { width: 1em; height: 1em; }
`,document.head.appendChild(U),Ue();