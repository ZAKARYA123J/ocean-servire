/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.prisma/client/index-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/.prisma/client/index-browser.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = __webpack_require__(/*! @prisma/client/runtime/index-browser.js */ "./node_modules/@prisma/client/runtime/index-browser.js")


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.20.0
 * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
 */
Prisma.prismaVersion = {
  client: "5.20.0",
  engine: "06fc58a368dc7be9fbbbe894adf8d445d208c284"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  name: 'name'
};

exports.Prisma.GallaryScalarFieldEnum = {
  id: 'id',
  img: 'img',
  title: 'title',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Gallary: 'Gallary'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)


/***/ }),

/***/ "./node_modules/@prisma/client/index-browser.js":
/*!******************************************************!*\
  !*** ./node_modules/@prisma/client/index-browser.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const prisma = __webpack_require__(/*! .prisma/client/index-browser */ "./node_modules/.prisma/client/index-browser.js")

module.exports = prisma


/***/ }),

/***/ "./node_modules/@prisma/client/runtime/index-browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@prisma/client/runtime/index-browser.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
var de=Object.defineProperty;var We=Object.getOwnPropertyDescriptor;var Ge=Object.getOwnPropertyNames;var Je=Object.prototype.hasOwnProperty;var Me=(e,n)=>{for(var i in n)de(e,i,{get:n[i],enumerable:!0})},Xe=(e,n,i,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of Ge(n))!Je.call(e,r)&&r!==i&&de(e,r,{get:()=>n[r],enumerable:!(t=We(n,r))||t.enumerable});return e};var Ke=e=>Xe(de({},"__esModule",{value:!0}),e);var Xn={};Me(Xn,{Decimal:()=>je,Public:()=>he,getRuntime:()=>be,makeStrictEnum:()=>Pe,objectEnumValues:()=>Oe});module.exports=Ke(Xn);var he={};Me(he,{validator:()=>Ce});function Ce(...e){return n=>n}var ne=Symbol(),pe=new WeakMap,ge=class{constructor(n){n===ne?pe.set(this,"Prisma.".concat(this._getName())):pe.set(this,"new Prisma.".concat(this._getNamespace(),".").concat(this._getName(),"()"))}_getName(){return this.constructor.name}toString(){return pe.get(this)}},G=class extends ge{_getNamespace(){return"NullTypes"}},J=class extends G{};me(J,"DbNull");var X=class extends G{};me(X,"JsonNull");var K=class extends G{};me(K,"AnyNull");var Oe={classes:{DbNull:J,JsonNull:X,AnyNull:K},instances:{DbNull:new J(ne),JsonNull:new X(ne),AnyNull:new K(ne)}};function me(e,n){Object.defineProperty(e,"name",{value:n,configurable:!0})}var xe=new Set(["toJSON","$$typeof","asymmetricMatch",Symbol.iterator,Symbol.toStringTag,Symbol.isConcatSpreadable,Symbol.toPrimitive]);function Pe(e){return new Proxy(e,{get(n,i){if(i in n)return n[i];if(!xe.has(i))throw new TypeError("Invalid enum value: ".concat(String(i)))}})}var Qe="Cloudflare-Workers",Ye="node";function Re(){var e,n,i;return typeof Netlify=="object"?"netlify":typeof EdgeRuntime=="string"?"edge-light":((e=globalThis.navigator)==null?void 0:e.userAgent)===Qe?"workerd":globalThis.Deno?"deno":globalThis.__lagon__?"lagon":((i=(n=globalThis.process)==null?void 0:n.release)==null?void 0:i.name)===Ye?"node":globalThis.Bun?"bun":globalThis.fastly?"fastly":"unknown"}var ze={node:"Node.js",workerd:"Cloudflare Workers",deno:"Deno and Deno Deploy",netlify:"Netlify Edge Functions","edge-light":"Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)"};function be(){let e=Re();return{id:e,prettyName:ze[e]||e,isEdge:["workerd","deno","netlify","edge-light"].includes(e)}}var H=9e15,$=1e9,we="0123456789abcdef",te="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",re="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Ne={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-H,maxE:H,crypto:!1},Te,Z,w=!0,oe="[DecimalError] ",V=oe+"Invalid argument: ",Le=oe+"Precision limit exceeded",De=oe+"crypto unavailable",Fe="[object Decimal]",b=Math.floor,C=Math.pow,ye=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,en=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,nn=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Ie=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,D=1e7,m=7,tn=9007199254740991,rn=te.length-1,ve=re.length-1,h={toStringTag:Fe};h.absoluteValue=h.abs=function(){var e=new this.constructor(this);return e.s<0&&(e.s=1),p(e)};h.ceil=function(){return p(new this.constructor(this),this.e+1,2)};h.clampedTo=h.clamp=function(e,n){var i,t=this,r=t.constructor;if(e=new r(e),n=new r(n),!e.s||!n.s)return new r(NaN);if(e.gt(n))throw Error(V+n);return i=t.cmp(e),i<0?e:t.cmp(n)>0?n:new r(t)};h.comparedTo=h.cmp=function(e){var n,i,t,r,s=this,o=s.d,u=(e=new s.constructor(e)).d,l=s.s,f=e.s;if(!o||!u)return!l||!f?NaN:l!==f?l:o===u?0:!o^l<0?1:-1;if(!o[0]||!u[0])return o[0]?l:u[0]?-f:0;if(l!==f)return l;if(s.e!==e.e)return s.e>e.e^l<0?1:-1;for(t=o.length,r=u.length,n=0,i=t<r?t:r;n<i;++n)if(o[n]!==u[n])return o[n]>u[n]^l<0?1:-1;return t===r?0:t>r^l<0?1:-1};h.cosine=h.cos=function(){var e,n,i=this,t=i.constructor;return i.d?i.d[0]?(e=t.precision,n=t.rounding,t.precision=e+Math.max(i.e,i.sd())+m,t.rounding=1,i=sn(t,$e(t,i)),t.precision=e,t.rounding=n,p(Z==2||Z==3?i.neg():i,e,n,!0)):new t(1):new t(NaN)};h.cubeRoot=h.cbrt=function(){var e,n,i,t,r,s,o,u,l,f,c=this,a=c.constructor;if(!c.isFinite()||c.isZero())return new a(c);for(w=!1,s=c.s*C(c.s*c,1/3),!s||Math.abs(s)==1/0?(i=O(c.d),e=c.e,(s=(e-i.length+1)%3)&&(i+=s==1||s==-2?"0":"00"),s=C(i,1/3),e=b((e+1)/3)-(e%3==(e<0?-1:2)),s==1/0?i="5e"+e:(i=s.toExponential(),i=i.slice(0,i.indexOf("e")+1)+e),t=new a(i),t.s=c.s):t=new a(s.toString()),o=(e=a.precision)+3;;)if(u=t,l=u.times(u).times(u),f=l.plus(c),t=S(f.plus(c).times(u),f.plus(l),o+2,1),O(u.d).slice(0,o)===(i=O(t.d)).slice(0,o))if(i=i.slice(o-3,o+1),i=="9999"||!r&&i=="4999"){if(!r&&(p(u,e+1,0),u.times(u).times(u).eq(c))){t=u;break}o+=4,r=1}else{(!+i||!+i.slice(1)&&i.charAt(0)=="5")&&(p(t,e+1,1),n=!t.times(t).times(t).eq(c));break}return w=!0,p(t,e,a.rounding,n)};h.decimalPlaces=h.dp=function(){var e,n=this.d,i=NaN;if(n){if(e=n.length-1,i=(e-b(this.e/m))*m,e=n[e],e)for(;e%10==0;e/=10)i--;i<0&&(i=0)}return i};h.dividedBy=h.div=function(e){return S(this,new this.constructor(e))};h.dividedToIntegerBy=h.divToInt=function(e){var n=this,i=n.constructor;return p(S(n,new i(e),0,1,1),i.precision,i.rounding)};h.equals=h.eq=function(e){return this.cmp(e)===0};h.floor=function(){return p(new this.constructor(this),this.e+1,3)};h.greaterThan=h.gt=function(e){return this.cmp(e)>0};h.greaterThanOrEqualTo=h.gte=function(e){var n=this.cmp(e);return n==1||n===0};h.hyperbolicCosine=h.cosh=function(){var e,n,i,t,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,t=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,r=s.d.length,r<32?(e=Math.ceil(r/3),n=(1/fe(4,e)).toString()):(e=16,n="2.3283064365386962890625e-10"),s=j(o,1,s.times(n),new o(1),!0);for(var l,f=e,c=new o(8);f--;)l=s.times(s),s=u.minus(l.times(c.minus(l.times(c))));return p(s,o.precision=i,o.rounding=t,!0)};h.hyperbolicSine=h.sinh=function(){var e,n,i,t,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(n=s.precision,i=s.rounding,s.precision=n+Math.max(r.e,r.sd())+4,s.rounding=1,t=r.d.length,t<3)r=j(s,2,r,r,!0);else{e=1.4*Math.sqrt(t),e=e>16?16:e|0,r=r.times(1/fe(5,e)),r=j(s,2,r,r,!0);for(var o,u=new s(5),l=new s(16),f=new s(20);e--;)o=r.times(r),r=r.times(u.plus(o.times(l.times(o).plus(f))))}return s.precision=n,s.rounding=i,p(r,n,i,!0)};h.hyperbolicTangent=h.tanh=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+7,t.rounding=1,S(i.sinh(),i.cosh(),t.precision=e,t.rounding=n)):new t(i.s)};h.inverseCosine=h.acos=function(){var e,n=this,i=n.constructor,t=n.abs().cmp(1),r=i.precision,s=i.rounding;return t!==-1?t===0?n.isNeg()?L(i,r,s):new i(0):new i(NaN):n.isZero()?L(i,r+4,s).times(.5):(i.precision=r+6,i.rounding=1,n=n.asin(),e=L(i,r+4,s).times(.5),i.precision=r,i.rounding=s,e.minus(n))};h.inverseHyperbolicCosine=h.acosh=function(){var e,n,i=this,t=i.constructor;return i.lte(1)?new t(i.eq(1)?0:NaN):i.isFinite()?(e=t.precision,n=t.rounding,t.precision=e+Math.max(Math.abs(i.e),i.sd())+4,t.rounding=1,w=!1,i=i.times(i).minus(1).sqrt().plus(i),w=!0,t.precision=e,t.rounding=n,i.ln()):new t(i)};h.inverseHyperbolicSine=h.asinh=function(){var e,n,i=this,t=i.constructor;return!i.isFinite()||i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+2*Math.max(Math.abs(i.e),i.sd())+6,t.rounding=1,w=!1,i=i.times(i).plus(1).sqrt().plus(i),w=!0,t.precision=e,t.rounding=n,i.ln())};h.inverseHyperbolicTangent=h.atanh=function(){var e,n,i,t,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(e=s.precision,n=s.rounding,t=r.sd(),Math.max(t,e)<2*-r.e-1?p(new s(r),e,n,!0):(s.precision=i=t-r.e,r=S(r.plus(1),new s(1).minus(r),i+e,1),s.precision=e+4,s.rounding=1,r=r.ln(),s.precision=e,s.rounding=n,r.times(.5))):new s(NaN)};h.inverseSine=h.asin=function(){var e,n,i,t,r=this,s=r.constructor;return r.isZero()?new s(r):(n=r.abs().cmp(1),i=s.precision,t=s.rounding,n!==-1?n===0?(e=L(s,i+4,t).times(.5),e.s=r.s,e):new s(NaN):(s.precision=i+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=t,r.times(2)))};h.inverseTangent=h.atan=function(){var e,n,i,t,r,s,o,u,l,f=this,c=f.constructor,a=c.precision,d=c.rounding;if(f.isFinite()){if(f.isZero())return new c(f);if(f.abs().eq(1)&&a+4<=ve)return o=L(c,a+4,d).times(.25),o.s=f.s,o}else{if(!f.s)return new c(NaN);if(a+4<=ve)return o=L(c,a+4,d).times(.5),o.s=f.s,o}for(c.precision=u=a+10,c.rounding=1,i=Math.min(28,u/m+2|0),e=i;e;--e)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(w=!1,n=Math.ceil(u/m),t=1,l=f.times(f),o=new c(f),r=f;e!==-1;)if(r=r.times(l),s=o.minus(r.div(t+=2)),r=r.times(l),o=s.plus(r.div(t+=2)),o.d[n]!==void 0)for(e=n;o.d[e]===s.d[e]&&e--;);return i&&(o=o.times(2<<i-1)),w=!0,p(o,c.precision=a,c.rounding=d,!0)};h.isFinite=function(){return!!this.d};h.isInteger=h.isInt=function(){return!!this.d&&b(this.e/m)>this.d.length-2};h.isNaN=function(){return!this.s};h.isNegative=h.isNeg=function(){return this.s<0};h.isPositive=h.isPos=function(){return this.s>0};h.isZero=function(){return!!this.d&&this.d[0]===0};h.lessThan=h.lt=function(e){return this.cmp(e)<0};h.lessThanOrEqualTo=h.lte=function(e){return this.cmp(e)<1};h.logarithm=h.log=function(e){var n,i,t,r,s,o,u,l,f=this,c=f.constructor,a=c.precision,d=c.rounding,g=5;if(e==null)e=new c(10),n=!0;else{if(e=new c(e),i=e.d,e.s<0||!i||!i[0]||e.eq(1))return new c(NaN);n=e.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new c(i&&!i[0]?-1/0:f.s!=1?NaN:i?0:1/0);if(n)if(i.length>1)s=!0;else{for(r=i[0];r%10===0;)r/=10;s=r!==1}if(w=!1,u=a+g,o=B(f,u),t=n?se(c,u+10):B(e,u),l=S(o,t,u,1),x(l.d,r=a,d))do if(u+=10,o=B(f,u),t=n?se(c,u+10):B(e,u),l=S(o,t,u,1),!s){+O(l.d).slice(r+1,r+15)+1==1e14&&(l=p(l,a+1,0));break}while(x(l.d,r+=10,d));return w=!0,p(l,a,d)};h.minus=h.sub=function(e){var n,i,t,r,s,o,u,l,f,c,a,d,g=this,v=g.constructor;if(e=new v(e),!g.d||!e.d)return!g.s||!e.s?e=new v(NaN):g.d?e.s=-e.s:e=new v(e.d||g.s!==e.s?g:NaN),e;if(g.s!=e.s)return e.s=-e.s,g.plus(e);if(f=g.d,d=e.d,u=v.precision,l=v.rounding,!f[0]||!d[0]){if(d[0])e.s=-e.s;else if(f[0])e=new v(g);else return new v(l===3?-0:0);return w?p(e,u,l):e}if(i=b(e.e/m),c=b(g.e/m),f=f.slice(),s=c-i,s){for(a=s<0,a?(n=f,s=-s,o=d.length):(n=d,i=c,o=f.length),t=Math.max(Math.ceil(u/m),o)+2,s>t&&(s=t,n.length=1),n.reverse(),t=s;t--;)n.push(0);n.reverse()}else{for(t=f.length,o=d.length,a=t<o,a&&(o=t),t=0;t<o;t++)if(f[t]!=d[t]){a=f[t]<d[t];break}s=0}for(a&&(n=f,f=d,d=n,e.s=-e.s),o=f.length,t=d.length-o;t>0;--t)f[o++]=0;for(t=d.length;t>s;){if(f[--t]<d[t]){for(r=t;r&&f[--r]===0;)f[r]=D-1;--f[r],f[t]+=D}f[t]-=d[t]}for(;f[--o]===0;)f.pop();for(;f[0]===0;f.shift())--i;return f[0]?(e.d=f,e.e=ue(f,i),w?p(e,u,l):e):new v(l===3?-0:0)};h.modulo=h.mod=function(e){var n,i=this,t=i.constructor;return e=new t(e),!i.d||!e.s||e.d&&!e.d[0]?new t(NaN):!e.d||i.d&&!i.d[0]?p(new t(i),t.precision,t.rounding):(w=!1,t.modulo==9?(n=S(i,e.abs(),0,3,1),n.s*=e.s):n=S(i,e,0,t.modulo,1),n=n.times(e),w=!0,i.minus(n))};h.naturalExponential=h.exp=function(){return Ee(this)};h.naturalLogarithm=h.ln=function(){return B(this)};h.negated=h.neg=function(){var e=new this.constructor(this);return e.s=-e.s,p(e)};h.plus=h.add=function(e){var n,i,t,r,s,o,u,l,f,c,a=this,d=a.constructor;if(e=new d(e),!a.d||!e.d)return!a.s||!e.s?e=new d(NaN):a.d||(e=new d(e.d||a.s===e.s?a:NaN)),e;if(a.s!=e.s)return e.s=-e.s,a.minus(e);if(f=a.d,c=e.d,u=d.precision,l=d.rounding,!f[0]||!c[0])return c[0]||(e=new d(a)),w?p(e,u,l):e;if(s=b(a.e/m),t=b(e.e/m),f=f.slice(),r=s-t,r){for(r<0?(i=f,r=-r,o=c.length):(i=c,t=s,o=f.length),s=Math.ceil(u/m),o=s>o?s+1:o+1,r>o&&(r=o,i.length=1),i.reverse();r--;)i.push(0);i.reverse()}for(o=f.length,r=c.length,o-r<0&&(r=o,i=c,c=f,f=i),n=0;r;)n=(f[--r]=f[r]+c[r]+n)/D|0,f[r]%=D;for(n&&(f.unshift(n),++t),o=f.length;f[--o]==0;)f.pop();return e.d=f,e.e=ue(f,t),w?p(e,u,l):e};h.precision=h.sd=function(e){var n,i=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(V+e);return i.d?(n=Ze(i.d),e&&i.e+1>n&&(n=i.e+1)):n=NaN,n};h.round=function(){var e=this,n=e.constructor;return p(new n(e),e.e+1,n.rounding)};h.sine=h.sin=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+Math.max(i.e,i.sd())+m,t.rounding=1,i=un(t,$e(t,i)),t.precision=e,t.rounding=n,p(Z>2?i.neg():i,e,n,!0)):new t(NaN)};h.squareRoot=h.sqrt=function(){var e,n,i,t,r,s,o=this,u=o.d,l=o.e,f=o.s,c=o.constructor;if(f!==1||!u||!u[0])return new c(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(w=!1,f=Math.sqrt(+o),f==0||f==1/0?(n=O(u),(n.length+l)%2==0&&(n+="0"),f=Math.sqrt(n),l=b((l+1)/2)-(l<0||l%2),f==1/0?n="5e"+l:(n=f.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),t=new c(n)):t=new c(f.toString()),i=(l=c.precision)+3;;)if(s=t,t=s.plus(S(o,s,i+2,1)).times(.5),O(s.d).slice(0,i)===(n=O(t.d)).slice(0,i))if(n=n.slice(i-3,i+1),n=="9999"||!r&&n=="4999"){if(!r&&(p(s,l+1,0),s.times(s).eq(o))){t=s;break}i+=4,r=1}else{(!+n||!+n.slice(1)&&n.charAt(0)=="5")&&(p(t,l+1,1),e=!t.times(t).eq(o));break}return w=!0,p(t,l,c.rounding,e)};h.tangent=h.tan=function(){var e,n,i=this,t=i.constructor;return i.isFinite()?i.isZero()?new t(i):(e=t.precision,n=t.rounding,t.precision=e+10,t.rounding=1,i=i.sin(),i.s=1,i=S(i,new t(1).minus(i.times(i)).sqrt(),e+10,0),t.precision=e,t.rounding=n,p(Z==2||Z==4?i.neg():i,e,n,!0)):new t(NaN)};h.times=h.mul=function(e){var n,i,t,r,s,o,u,l,f,c=this,a=c.constructor,d=c.d,g=(e=new a(e)).d;if(e.s*=c.s,!d||!d[0]||!g||!g[0])return new a(!e.s||d&&!d[0]&&!g||g&&!g[0]&&!d?NaN:!d||!g?e.s/0:e.s*0);for(i=b(c.e/m)+b(e.e/m),l=d.length,f=g.length,l<f&&(s=d,d=g,g=s,o=l,l=f,f=o),s=[],o=l+f,t=o;t--;)s.push(0);for(t=f;--t>=0;){for(n=0,r=l+t;r>t;)u=s[r]+g[t]*d[r-t-1]+n,s[r--]=u%D|0,n=u/D|0;s[r]=(s[r]+n)%D|0}for(;!s[--o];)s.pop();return n?++i:s.shift(),e.d=s,e.e=ue(s,i),w?p(e,a.precision,a.rounding):e};h.toBinary=function(e,n){return ke(this,2,e,n)};h.toDecimalPlaces=h.toDP=function(e,n){var i=this,t=i.constructor;return i=new t(i),e===void 0?i:(_(e,0,$),n===void 0?n=t.rounding:_(n,0,8),p(i,e+i.e+1,n))};h.toExponential=function(e,n){var i,t=this,r=t.constructor;return e===void 0?i=F(t,!0):(_(e,0,$),n===void 0?n=r.rounding:_(n,0,8),t=p(new r(t),e+1,n),i=F(t,!0,e+1)),t.isNeg()&&!t.isZero()?"-"+i:i};h.toFixed=function(e,n){var i,t,r=this,s=r.constructor;return e===void 0?i=F(r):(_(e,0,$),n===void 0?n=s.rounding:_(n,0,8),t=p(new s(r),e+r.e+1,n),i=F(t,!1,e+t.e+1)),r.isNeg()&&!r.isZero()?"-"+i:i};h.toFraction=function(e){var n,i,t,r,s,o,u,l,f,c,a,d,g=this,v=g.d,N=g.constructor;if(!v)return new N(g);if(f=i=new N(1),t=l=new N(0),n=new N(t),s=n.e=Ze(v)-g.e-1,o=s%m,n.d[0]=C(10,o<0?m+o:o),e==null)e=s>0?n:f;else{if(u=new N(e),!u.isInt()||u.lt(f))throw Error(V+u);e=u.gt(n)?s>0?n:f:u}for(w=!1,u=new N(O(v)),c=N.precision,N.precision=s=v.length*m*2;a=S(u,n,0,1,1),r=i.plus(a.times(t)),r.cmp(e)!=1;)i=t,t=r,r=f,f=l.plus(a.times(r)),l=r,r=n,n=u.minus(a.times(r)),u=r;return r=S(e.minus(i),t,0,1,1),l=l.plus(r.times(f)),i=i.plus(r.times(t)),l.s=f.s=g.s,d=S(f,t,s,1).minus(g).abs().cmp(S(l,i,s,1).minus(g).abs())<1?[f,t]:[l,i],N.precision=c,w=!0,d};h.toHexadecimal=h.toHex=function(e,n){return ke(this,16,e,n)};h.toNearest=function(e,n){var i=this,t=i.constructor;if(i=new t(i),e==null){if(!i.d)return i;e=new t(1),n=t.rounding}else{if(e=new t(e),n===void 0?n=t.rounding:_(n,0,8),!i.d)return e.s?i:e;if(!e.d)return e.s&&(e.s=i.s),e}return e.d[0]?(w=!1,i=S(i,e,0,n,1).times(e),w=!0,p(i)):(e.s=i.s,i=e),i};h.toNumber=function(){return+this};h.toOctal=function(e,n){return ke(this,8,e,n)};h.toPower=h.pow=function(e){var n,i,t,r,s,o,u=this,l=u.constructor,f=+(e=new l(e));if(!u.d||!e.d||!u.d[0]||!e.d[0])return new l(C(+u,f));if(u=new l(u),u.eq(1))return u;if(t=l.precision,s=l.rounding,e.eq(1))return p(u,t,s);if(n=b(e.e/m),n>=e.d.length-1&&(i=f<0?-f:f)<=tn)return r=Ue(l,u,i,t),e.s<0?new l(1).div(r):p(r,t,s);if(o=u.s,o<0){if(n<e.d.length-1)return new l(NaN);if(e.d[n]&1||(o=1),u.e==0&&u.d[0]==1&&u.d.length==1)return u.s=o,u}return i=C(+u,f),n=i==0||!isFinite(i)?b(f*(Math.log("0."+O(u.d))/Math.LN10+u.e+1)):new l(i+"").e,n>l.maxE+1||n<l.minE-1?new l(n>0?o/0:0):(w=!1,l.rounding=u.s=1,i=Math.min(12,(n+"").length),r=Ee(e.times(B(u,t+i)),t),r.d&&(r=p(r,t+5,1),x(r.d,t,s)&&(n=t+10,r=p(Ee(e.times(B(u,n+i)),n),n+5,1),+O(r.d).slice(t+1,t+15)+1==1e14&&(r=p(r,t+1,0)))),r.s=o,w=!0,l.rounding=s,p(r,t,s))};h.toPrecision=function(e,n){var i,t=this,r=t.constructor;return e===void 0?i=F(t,t.e<=r.toExpNeg||t.e>=r.toExpPos):(_(e,1,$),n===void 0?n=r.rounding:_(n,0,8),t=p(new r(t),e,n),i=F(t,e<=t.e||t.e<=r.toExpNeg,e)),t.isNeg()&&!t.isZero()?"-"+i:i};h.toSignificantDigits=h.toSD=function(e,n){var i=this,t=i.constructor;return e===void 0?(e=t.precision,n=t.rounding):(_(e,1,$),n===void 0?n=t.rounding:_(n,0,8)),p(new t(i),e,n)};h.toString=function(){var e=this,n=e.constructor,i=F(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()&&!e.isZero()?"-"+i:i};h.truncated=h.trunc=function(){return p(new this.constructor(this),this.e+1,1)};h.valueOf=h.toJSON=function(){var e=this,n=e.constructor,i=F(e,e.e<=n.toExpNeg||e.e>=n.toExpPos);return e.isNeg()?"-"+i:i};function O(e){var n,i,t,r=e.length-1,s="",o=e[0];if(r>0){for(s+=o,n=1;n<r;n++)t=e[n]+"",i=m-t.length,i&&(s+=U(i)),s+=t;o=e[n],t=o+"",i=m-t.length,i&&(s+=U(i))}else if(o===0)return"0";for(;o%10===0;)o/=10;return s+o}function _(e,n,i){if(e!==~~e||e<n||e>i)throw Error(V+e)}function x(e,n,i,t){var r,s,o,u;for(s=e[0];s>=10;s/=10)--n;return--n<0?(n+=m,r=0):(r=Math.ceil((n+1)/m),n%=m),s=C(10,m-n),u=e[r]%s|0,t==null?n<3?(n==0?u=u/100|0:n==1&&(u=u/10|0),o=i<4&&u==99999||i>3&&u==49999||u==5e4||u==0):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(e[r+1]/s/100|0)==C(10,n-2)-1||(u==s/2||u==0)&&(e[r+1]/s/100|0)==0:n<4?(n==0?u=u/1e3|0:n==1?u=u/100|0:n==2&&(u=u/10|0),o=(t||i<4)&&u==9999||!t&&i>3&&u==4999):o=((t||i<4)&&u+1==s||!t&&i>3&&u+1==s/2)&&(e[r+1]/s/1e3|0)==C(10,n-3)-1,o}function ie(e,n,i){for(var t,r=[0],s,o=0,u=e.length;o<u;){for(s=r.length;s--;)r[s]*=n;for(r[0]+=we.indexOf(e.charAt(o++)),t=0;t<r.length;t++)r[t]>i-1&&(r[t+1]===void 0&&(r[t+1]=0),r[t+1]+=r[t]/i|0,r[t]%=i)}return r.reverse()}function sn(e,n){var i,t,r;if(n.isZero())return n;t=n.d.length,t<32?(i=Math.ceil(t/3),r=(1/fe(4,i)).toString()):(i=16,r="2.3283064365386962890625e-10"),e.precision+=i,n=j(e,1,n.times(r),new e(1));for(var s=i;s--;){var o=n.times(n);n=o.times(o).minus(o).times(8).plus(1)}return e.precision-=i,n}var S=function(){function e(t,r,s){var o,u=0,l=t.length;for(t=t.slice();l--;)o=t[l]*r+u,t[l]=o%s|0,u=o/s|0;return u&&t.unshift(u),t}function n(t,r,s,o){var u,l;if(s!=o)l=s>o?1:-1;else for(u=l=0;u<s;u++)if(t[u]!=r[u]){l=t[u]>r[u]?1:-1;break}return l}function i(t,r,s,o){for(var u=0;s--;)t[s]-=u,u=t[s]<r[s]?1:0,t[s]=u*o+t[s]-r[s];for(;!t[0]&&t.length>1;)t.shift()}return function(t,r,s,o,u,l){var f,c,a,d,g,v,N,A,M,q,E,P,Y,I,le,z,W,ce,T,y,ee=t.constructor,ae=t.s==r.s?1:-1,R=t.d,k=r.d;if(!R||!R[0]||!k||!k[0])return new ee(!t.s||!r.s||(R?k&&R[0]==k[0]:!k)?NaN:R&&R[0]==0||!k?ae*0:ae/0);for(l?(g=1,c=t.e-r.e):(l=D,g=m,c=b(t.e/g)-b(r.e/g)),T=k.length,W=R.length,M=new ee(ae),q=M.d=[],a=0;k[a]==(R[a]||0);a++);if(k[a]>(R[a]||0)&&c--,s==null?(I=s=ee.precision,o=ee.rounding):u?I=s+(t.e-r.e)+1:I=s,I<0)q.push(1),v=!0;else{if(I=I/g+2|0,a=0,T==1){for(d=0,k=k[0],I++;(a<W||d)&&I--;a++)le=d*l+(R[a]||0),q[a]=le/k|0,d=le%k|0;v=d||a<W}else{for(d=l/(k[0]+1)|0,d>1&&(k=e(k,d,l),R=e(R,d,l),T=k.length,W=R.length),z=T,E=R.slice(0,T),P=E.length;P<T;)E[P++]=0;y=k.slice(),y.unshift(0),ce=k[0],k[1]>=l/2&&++ce;do d=0,f=n(k,E,T,P),f<0?(Y=E[0],T!=P&&(Y=Y*l+(E[1]||0)),d=Y/ce|0,d>1?(d>=l&&(d=l-1),N=e(k,d,l),A=N.length,P=E.length,f=n(N,E,A,P),f==1&&(d--,i(N,T<A?y:k,A,l))):(d==0&&(f=d=1),N=k.slice()),A=N.length,A<P&&N.unshift(0),i(E,N,P,l),f==-1&&(P=E.length,f=n(k,E,T,P),f<1&&(d++,i(E,T<P?y:k,P,l))),P=E.length):f===0&&(d++,E=[0]),q[a++]=d,f&&E[0]?E[P++]=R[z]||0:(E=[R[z]],P=1);while((z++<W||E[0]!==void 0)&&I--);v=E[0]!==void 0}q[0]||q.shift()}if(g==1)M.e=c,Te=v;else{for(a=1,d=q[0];d>=10;d/=10)a++;M.e=a+c*g-1,p(M,u?s+M.e+1:s,o,v)}return M}}();function p(e,n,i,t){var r,s,o,u,l,f,c,a,d,g=e.constructor;e:if(n!=null){if(a=e.d,!a)return e;for(r=1,u=a[0];u>=10;u/=10)r++;if(s=n-r,s<0)s+=m,o=n,c=a[d=0],l=c/C(10,r-o-1)%10|0;else if(d=Math.ceil((s+1)/m),u=a.length,d>=u)if(t){for(;u++<=d;)a.push(0);c=l=0,r=1,s%=m,o=s-m+1}else break e;else{for(c=u=a[d],r=1;u>=10;u/=10)r++;s%=m,o=s-m+r,l=o<0?0:c/C(10,r-o-1)%10|0}if(t=t||n<0||a[d+1]!==void 0||(o<0?c:c%C(10,r-o-1)),f=i<4?(l||t)&&(i==0||i==(e.s<0?3:2)):l>5||l==5&&(i==4||t||i==6&&(s>0?o>0?c/C(10,r-o):0:a[d-1])%10&1||i==(e.s<0?8:7)),n<1||!a[0])return a.length=0,f?(n-=e.e+1,a[0]=C(10,(m-n%m)%m),e.e=-n||0):a[0]=e.e=0,e;if(s==0?(a.length=d,u=1,d--):(a.length=d+1,u=C(10,m-s),a[d]=o>0?(c/C(10,r-o)%C(10,o)|0)*u:0),f)for(;;)if(d==0){for(s=1,o=a[0];o>=10;o/=10)s++;for(o=a[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(e.e++,a[0]==D&&(a[0]=1));break}else{if(a[d]+=u,a[d]!=D)break;a[d--]=0,u=1}for(s=a.length;a[--s]===0;)a.pop()}return w&&(e.e>g.maxE?(e.d=null,e.e=NaN):e.e<g.minE&&(e.e=0,e.d=[0])),e}function F(e,n,i){if(!e.isFinite())return Ve(e);var t,r=e.e,s=O(e.d),o=s.length;return n?(i&&(t=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+U(t):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(e.e<0?"e":"e+")+e.e):r<0?(s="0."+U(-r-1)+s,i&&(t=i-o)>0&&(s+=U(t))):r>=o?(s+=U(r+1-o),i&&(t=i-r-1)>0&&(s=s+"."+U(t))):((t=r+1)<o&&(s=s.slice(0,t)+"."+s.slice(t)),i&&(t=i-o)>0&&(r+1===o&&(s+="."),s+=U(t))),s}function ue(e,n){var i=e[0];for(n*=m;i>=10;i/=10)n++;return n}function se(e,n,i){if(n>rn)throw w=!0,i&&(e.precision=i),Error(Le);return p(new e(te),n,1,!0)}function L(e,n,i){if(n>ve)throw Error(Le);return p(new e(re),n,i,!0)}function Ze(e){var n=e.length-1,i=n*m+1;if(n=e[n],n){for(;n%10==0;n/=10)i--;for(n=e[0];n>=10;n/=10)i++}return i}function U(e){for(var n="";e--;)n+="0";return n}function Ue(e,n,i,t){var r,s=new e(1),o=Math.ceil(t/m+4);for(w=!1;;){if(i%2&&(s=s.times(n),_e(s.d,o)&&(r=!0)),i=b(i/2),i===0){i=s.d.length-1,r&&s.d[i]===0&&++s.d[i];break}n=n.times(n),_e(n.d,o)}return w=!0,s}function Ae(e){return e.d[e.d.length-1]&1}function Be(e,n,i){for(var t,r=new e(n[0]),s=0;++s<n.length;)if(t=new e(n[s]),t.s)r[i](t)&&(r=t);else{r=t;break}return r}function Ee(e,n){var i,t,r,s,o,u,l,f=0,c=0,a=0,d=e.constructor,g=d.rounding,v=d.precision;if(!e.d||!e.d[0]||e.e>17)return new d(e.d?e.d[0]?e.s<0?0:1/0:1:e.s?e.s<0?0:e:NaN);for(n==null?(w=!1,l=v):l=n,u=new d(.03125);e.e>-2;)e=e.times(u),a+=5;for(t=Math.log(C(2,a))/Math.LN10*2+5|0,l+=t,i=s=o=new d(1),d.precision=l;;){if(s=p(s.times(e),l,1),i=i.times(++c),u=o.plus(S(s,i,l,1)),O(u.d).slice(0,l)===O(o.d).slice(0,l)){for(r=a;r--;)o=p(o.times(o),l,1);if(n==null)if(f<3&&x(o.d,l-t,g,f))d.precision=l+=10,i=s=u=new d(1),c=0,f++;else return p(o,d.precision=v,g,w=!0);else return d.precision=v,o}o=u}}function B(e,n){var i,t,r,s,o,u,l,f,c,a,d,g=1,v=10,N=e,A=N.d,M=N.constructor,q=M.rounding,E=M.precision;if(N.s<0||!A||!A[0]||!N.e&&A[0]==1&&A.length==1)return new M(A&&!A[0]?-1/0:N.s!=1?NaN:A?0:N);if(n==null?(w=!1,c=E):c=n,M.precision=c+=v,i=O(A),t=i.charAt(0),Math.abs(s=N.e)<15e14){for(;t<7&&t!=1||t==1&&i.charAt(1)>3;)N=N.times(e),i=O(N.d),t=i.charAt(0),g++;s=N.e,t>1?(N=new M("0."+i),s++):N=new M(t+"."+i.slice(1))}else return f=se(M,c+2,E).times(s+""),N=B(new M(t+"."+i.slice(1)),c-v).plus(f),M.precision=E,n==null?p(N,E,q,w=!0):N;for(a=N,l=o=N=S(N.minus(1),N.plus(1),c,1),d=p(N.times(N),c,1),r=3;;){if(o=p(o.times(d),c,1),f=l.plus(S(o,new M(r),c,1)),O(f.d).slice(0,c)===O(l.d).slice(0,c))if(l=l.times(2),s!==0&&(l=l.plus(se(M,c+2,E).times(s+""))),l=S(l,new M(g),c,1),n==null)if(x(l.d,c-v,q,u))M.precision=c+=v,f=o=N=S(a.minus(1),a.plus(1),c,1),d=p(N.times(N),c,1),r=u=1;else return p(l,M.precision=E,q,w=!0);else return M.precision=E,l;l=f,r+=2}}function Ve(e){return String(e.s*e.s/0)}function Se(e,n){var i,t,r;for((i=n.indexOf("."))>-1&&(n=n.replace(".","")),(t=n.search(/e/i))>0?(i<0&&(i=t),i+=+n.slice(t+1),n=n.substring(0,t)):i<0&&(i=n.length),t=0;n.charCodeAt(t)===48;t++);for(r=n.length;n.charCodeAt(r-1)===48;--r);if(n=n.slice(t,r),n){if(r-=t,e.e=i=i-t-1,e.d=[],t=(i+1)%m,i<0&&(t+=m),t<r){for(t&&e.d.push(+n.slice(0,t)),r-=m;t<r;)e.d.push(+n.slice(t,t+=m));n=n.slice(t),t=m-n.length}else t-=r;for(;t--;)n+="0";e.d.push(+n),w&&(e.e>e.constructor.maxE?(e.d=null,e.e=NaN):e.e<e.constructor.minE&&(e.e=0,e.d=[0]))}else e.e=0,e.d=[0];return e}function on(e,n){var i,t,r,s,o,u,l,f,c;if(n.indexOf("_")>-1){if(n=n.replace(/(\d)_(?=\d)/g,"$1"),Ie.test(n))return Se(e,n)}else if(n==="Infinity"||n==="NaN")return+n||(e.s=NaN),e.e=NaN,e.d=null,e;if(en.test(n))i=16,n=n.toLowerCase();else if(ye.test(n))i=2;else if(nn.test(n))i=8;else throw Error(V+n);for(s=n.search(/p/i),s>0?(l=+n.slice(s+1),n=n.substring(2,s)):n=n.slice(2),s=n.indexOf("."),o=s>=0,t=e.constructor,o&&(n=n.replace(".",""),u=n.length,s=u-s,r=Ue(t,new t(i),s,s*2)),f=ie(n,i,D),c=f.length-1,s=c;f[s]===0;--s)f.pop();return s<0?new t(e.s*0):(e.e=ue(f,c),e.d=f,w=!1,o&&(e=S(e,r,u*4)),l&&(e=e.times(Math.abs(l)<54?C(2,l):Q.pow(2,l))),w=!0,e)}function un(e,n){var i,t=n.d.length;if(t<3)return n.isZero()?n:j(e,2,n,n);i=1.4*Math.sqrt(t),i=i>16?16:i|0,n=n.times(1/fe(5,i)),n=j(e,2,n,n);for(var r,s=new e(5),o=new e(16),u=new e(20);i--;)r=n.times(n),n=n.times(s.plus(r.times(o.times(r).minus(u))));return n}function j(e,n,i,t,r){var s,o,u,l,f=1,c=e.precision,a=Math.ceil(c/m);for(w=!1,l=i.times(i),u=new e(t);;){if(o=S(u.times(l),new e(n++*n++),c,1),u=r?t.plus(o):t.minus(o),t=S(o.times(l),new e(n++*n++),c,1),o=u.plus(t),o.d[a]!==void 0){for(s=a;o.d[s]===u.d[s]&&s--;);if(s==-1)break}s=u,u=t,t=o,o=s,f++}return w=!0,o.d.length=a+1,o}function fe(e,n){for(var i=e;--n;)i*=e;return i}function $e(e,n){var i,t=n.s<0,r=L(e,e.precision,1),s=r.times(.5);if(n=n.abs(),n.lte(s))return Z=t?4:1,n;if(i=n.divToInt(r),i.isZero())Z=t?3:2;else{if(n=n.minus(i.times(r)),n.lte(s))return Z=Ae(i)?t?2:3:t?4:1,n;Z=Ae(i)?t?1:4:t?3:2}return n.minus(r).abs()}function ke(e,n,i,t){var r,s,o,u,l,f,c,a,d,g=e.constructor,v=i!==void 0;if(v?(_(i,1,$),t===void 0?t=g.rounding:_(t,0,8)):(i=g.precision,t=g.rounding),!e.isFinite())c=Ve(e);else{for(c=F(e),o=c.indexOf("."),v?(r=2,n==16?i=i*4-3:n==8&&(i=i*3-2)):r=n,o>=0&&(c=c.replace(".",""),d=new g(1),d.e=c.length-o,d.d=ie(F(d),10,r),d.e=d.d.length),a=ie(c,10,r),s=l=a.length;a[--l]==0;)a.pop();if(!a[0])c=v?"0p+0":"0";else{if(o<0?s--:(e=new g(e),e.d=a,e.e=s,e=S(e,d,i,t,0,r),a=e.d,s=e.e,f=Te),o=a[i],u=r/2,f=f||a[i+1]!==void 0,f=t<4?(o!==void 0||f)&&(t===0||t===(e.s<0?3:2)):o>u||o===u&&(t===4||f||t===6&&a[i-1]&1||t===(e.s<0?8:7)),a.length=i,f)for(;++a[--i]>r-1;)a[i]=0,i||(++s,a.unshift(1));for(l=a.length;!a[l-1];--l);for(o=0,c="";o<l;o++)c+=we.charAt(a[o]);if(v){if(l>1)if(n==16||n==8){for(o=n==16?4:3,--l;l%o;l++)c+="0";for(a=ie(c,r,n),l=a.length;!a[l-1];--l);for(o=1,c="1.";o<l;o++)c+=we.charAt(a[o])}else c=c.charAt(0)+"."+c.slice(1);c=c+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)c="0"+c;c="0."+c}else if(++s>l)for(s-=l;s--;)c+="0";else s<l&&(c=c.slice(0,s)+"."+c.slice(s))}c=(n==16?"0x":n==2?"0b":n==8?"0o":"")+c}return e.s<0?"-"+c:c}function _e(e,n){if(e.length>n)return e.length=n,!0}function fn(e){return new this(e).abs()}function ln(e){return new this(e).acos()}function cn(e){return new this(e).acosh()}function an(e,n){return new this(e).plus(n)}function dn(e){return new this(e).asin()}function hn(e){return new this(e).asinh()}function pn(e){return new this(e).atan()}function gn(e){return new this(e).atanh()}function mn(e,n){e=new this(e),n=new this(n);var i,t=this.precision,r=this.rounding,s=t+4;return!e.s||!n.s?i=new this(NaN):!e.d&&!n.d?(i=L(this,s,1).times(n.s>0?.25:.75),i.s=e.s):!n.d||e.isZero()?(i=n.s<0?L(this,t,r):new this(0),i.s=e.s):!e.d||n.isZero()?(i=L(this,s,1).times(.5),i.s=e.s):n.s<0?(this.precision=s,this.rounding=1,i=this.atan(S(e,n,s,1)),n=L(this,s,1),this.precision=t,this.rounding=r,i=e.s<0?i.minus(n):i.plus(n)):i=this.atan(S(e,n,s,1)),i}function wn(e){return new this(e).cbrt()}function Nn(e){return p(e=new this(e),e.e+1,2)}function vn(e,n,i){return new this(e).clamp(n,i)}function En(e){if(!e||typeof e!="object")throw Error(oe+"Object expected");var n,i,t,r=e.defaults===!0,s=["precision",1,$,"rounding",0,8,"toExpNeg",-H,0,"toExpPos",0,H,"maxE",0,H,"minE",-H,0,"modulo",0,9];for(n=0;n<s.length;n+=3)if(i=s[n],r&&(this[i]=Ne[i]),(t=e[i])!==void 0)if(b(t)===t&&t>=s[n+1]&&t<=s[n+2])this[i]=t;else throw Error(V+i+": "+t);if(i="crypto",r&&(this[i]=Ne[i]),(t=e[i])!==void 0)if(t===!0||t===!1||t===0||t===1)if(t)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[i]=!0;else throw Error(De);else this[i]=!1;else throw Error(V+i+": "+t);return this}function Sn(e){return new this(e).cos()}function kn(e){return new this(e).cosh()}function He(e){var n,i,t;function r(s){var o,u,l,f=this;if(!(f instanceof r))return new r(s);if(f.constructor=r,qe(s)){f.s=s.s,w?!s.d||s.e>r.maxE?(f.e=NaN,f.d=null):s.e<r.minE?(f.e=0,f.d=[0]):(f.e=s.e,f.d=s.d.slice()):(f.e=s.e,f.d=s.d?s.d.slice():s.d);return}if(l=typeof s,l==="number"){if(s===0){f.s=1/s<0?-1:1,f.e=0,f.d=[0];return}if(s<0?(s=-s,f.s=-1):f.s=1,s===~~s&&s<1e7){for(o=0,u=s;u>=10;u/=10)o++;w?o>r.maxE?(f.e=NaN,f.d=null):o<r.minE?(f.e=0,f.d=[0]):(f.e=o,f.d=[s]):(f.e=o,f.d=[s]);return}else if(s*0!==0){s||(f.s=NaN),f.e=NaN,f.d=null;return}return Se(f,s.toString())}else if(l!=="string")throw Error(V+s);return(u=s.charCodeAt(0))===45?(s=s.slice(1),f.s=-1):(u===43&&(s=s.slice(1)),f.s=1),Ie.test(s)?Se(f,s):on(f,s)}if(r.prototype=h,r.ROUND_UP=0,r.ROUND_DOWN=1,r.ROUND_CEIL=2,r.ROUND_FLOOR=3,r.ROUND_HALF_UP=4,r.ROUND_HALF_DOWN=5,r.ROUND_HALF_EVEN=6,r.ROUND_HALF_CEIL=7,r.ROUND_HALF_FLOOR=8,r.EUCLID=9,r.config=r.set=En,r.clone=He,r.isDecimal=qe,r.abs=fn,r.acos=ln,r.acosh=cn,r.add=an,r.asin=dn,r.asinh=hn,r.atan=pn,r.atanh=gn,r.atan2=mn,r.cbrt=wn,r.ceil=Nn,r.clamp=vn,r.cos=Sn,r.cosh=kn,r.div=Mn,r.exp=Cn,r.floor=On,r.hypot=Pn,r.ln=Rn,r.log=bn,r.log10=_n,r.log2=An,r.max=qn,r.min=Tn,r.mod=Ln,r.mul=Dn,r.pow=Fn,r.random=In,r.round=Zn,r.sign=Un,r.sin=Bn,r.sinh=Vn,r.sqrt=$n,r.sub=Hn,r.sum=jn,r.tan=Wn,r.tanh=Gn,r.trunc=Jn,e===void 0&&(e={}),e&&e.defaults!==!0)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],n=0;n<t.length;)e.hasOwnProperty(i=t[n++])||(e[i]=this[i]);return r.config(e),r}function Mn(e,n){return new this(e).div(n)}function Cn(e){return new this(e).exp()}function On(e){return p(e=new this(e),e.e+1,3)}function Pn(){var e,n,i=new this(0);for(w=!1,e=0;e<arguments.length;)if(n=new this(arguments[e++]),n.d)i.d&&(i=i.plus(n.times(n)));else{if(n.s)return w=!0,new this(1/0);i=n}return w=!0,i.sqrt()}function qe(e){return e instanceof Q||e&&e.toStringTag===Fe||!1}function Rn(e){return new this(e).ln()}function bn(e,n){return new this(e).log(n)}function An(e){return new this(e).log(2)}function _n(e){return new this(e).log(10)}function qn(){return Be(this,arguments,"lt")}function Tn(){return Be(this,arguments,"gt")}function Ln(e,n){return new this(e).mod(n)}function Dn(e,n){return new this(e).mul(n)}function Fn(e,n){return new this(e).pow(n)}function In(e){var n,i,t,r,s=0,o=new this(1),u=[];if(e===void 0?e=this.precision:_(e,1,$),t=Math.ceil(e/m),this.crypto)if(crypto.getRandomValues)for(n=crypto.getRandomValues(new Uint32Array(t));s<t;)r=n[s],r>=429e7?n[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else if(crypto.randomBytes){for(n=crypto.randomBytes(t*=4);s<t;)r=n[s]+(n[s+1]<<8)+(n[s+2]<<16)+((n[s+3]&127)<<24),r>=214e7?crypto.randomBytes(4).copy(n,s):(u.push(r%1e7),s+=4);s=t/4}else throw Error(De);else for(;s<t;)u[s++]=Math.random()*1e7|0;for(t=u[--s],e%=m,t&&e&&(r=C(10,m-e),u[s]=(t/r|0)*r);u[s]===0;s--)u.pop();if(s<0)i=0,u=[0];else{for(i=-1;u[0]===0;i-=m)u.shift();for(t=1,r=u[0];r>=10;r/=10)t++;t<m&&(i-=m-t)}return o.e=i,o.d=u,o}function Zn(e){return p(e=new this(e),e.e+1,this.rounding)}function Un(e){return e=new this(e),e.d?e.d[0]?e.s:0*e.s:e.s||NaN}function Bn(e){return new this(e).sin()}function Vn(e){return new this(e).sinh()}function $n(e){return new this(e).sqrt()}function Hn(e,n){return new this(e).sub(n)}function jn(){var e=0,n=arguments,i=new this(n[e]);for(w=!1;i.s&&++e<n.length;)i=i.plus(n[e]);return w=!0,p(i,this.precision,this.rounding)}function Wn(e){return new this(e).tan()}function Gn(e){return new this(e).tanh()}function Jn(e){return p(e=new this(e),e.e+1,1)}h[Symbol.for("nodejs.util.inspect.custom")]=h.toString;h[Symbol.toStringTag]="Decimal";var Q=h.constructor=He(Ne);te=new Q(te);re=new Q(re);var je=Q;0&&(0);
/*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
//# sourceMappingURL=index-browser.js.map


/***/ }),

/***/ "./api/controllers/galleryController.js":
/*!**********************************************!*\
  !*** ./api/controllers/galleryController.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGallery: () => (/* binding */ createGallery),
/* harmony export */   deleteGallery: () => (/* binding */ deleteGallery),
/* harmony export */   getGalleries: () => (/* binding */ getGalleries),
/* harmony export */   updateGallery: () => (/* binding */ updateGallery)
/* harmony export */ });
/* harmony import */ var _prisma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prisma.js */ "./api/prisma.js");
// src/controllers/galleryController.js


// Get all galleries
const getGalleries = async c => {
  const galleries = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].gallary.findMany();
  return c.json(galleries);
};

// Create a new gallery
const createGallery = async c => {
  const data = await c.req.json();
  const {
    img,
    title
  } = data;
  const newGallery = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].gallary.create({
    data: {
      img,
      title
    }
  });
  return c.json(newGallery);
};

// Update a gallery
const updateGallery = async c => {
  const id = parseInt(c.req.param('id'));
  const data = await c.req.json();
  const updatedGallery = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].gallary.update({
    where: {
      id
    },
    data
  });
  return c.json(updatedGallery);
};

// Delete a gallery
const deleteGallery = async c => {
  const id = parseInt(c.req.param('id'));
  const deletedGallery = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].gallary.delete({
    where: {
      id
    }
  });
  return c.json({
    message: 'Gallery deleted',
    deletedGallery
  });
};

/***/ }),

/***/ "./api/controllers/userController.js":
/*!*******************************************!*\
  !*** ./api/controllers/userController.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUser: () => (/* binding */ createUser),
/* harmony export */   deleteUser: () => (/* binding */ deleteUser),
/* harmony export */   getUsers: () => (/* binding */ getUsers),
/* harmony export */   updateUser: () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _prisma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prisma.js */ "./api/prisma.js");
// src/controllers/userController.js


// Get all users
const getUsers = async c => {
  const users = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.findMany();
  return c.json(users);
};

// Create a new user
const createUser = async c => {
  const data = await c.req.json();
  const {
    email,
    password,
    name
  } = data;
  const newUser = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.create({
    data: {
      email,
      password,
      name
    }
  });
  return c.json(newUser);
};

// Update a user
const updateUser = async c => {
  const id = parseInt(c.req.param('id'));
  const data = await c.req.json();
  const updatedUser = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.update({
    where: {
      id
    },
    data
  });
  return c.json(updatedUser);
};

// Delete a user
const deleteUser = async c => {
  const id = parseInt(c.req.param('id'));
  const deletedUser = await _prisma_js__WEBPACK_IMPORTED_MODULE_0__["default"].user.delete({
    where: {
      id
    }
  });
  return c.json({
    message: 'User deleted',
    deletedUser
  });
};

/***/ }),

/***/ "./api/prisma.js":
/*!***********************!*\
  !*** ./api/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "./node_modules/@prisma/client/index-browser.js");

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./api/router/router.js":
/*!******************************!*\
  !*** ./api/router/router.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var hono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hono */ "./node_modules/hono/dist/index.js");
/* harmony import */ var _controllers_userController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/userController.js */ "./api/controllers/userController.js");
/* harmony import */ var _controllers_galleryController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/galleryController.js */ "./api/controllers/galleryController.js");
// src/routes.js



const routes = new hono__WEBPACK_IMPORTED_MODULE_0__.Hono();

// User routes
routes.get('/users', _controllers_userController_js__WEBPACK_IMPORTED_MODULE_1__.getUsers);
routes.post('/users', _controllers_userController_js__WEBPACK_IMPORTED_MODULE_1__.createUser);
routes.put('/users/:id', _controllers_userController_js__WEBPACK_IMPORTED_MODULE_1__.updateUser);
routes.delete('/users/:id', _controllers_userController_js__WEBPACK_IMPORTED_MODULE_1__.deleteUser);

// Gallery routes
routes.get('/galleries', _controllers_galleryController_js__WEBPACK_IMPORTED_MODULE_2__.getGalleries);
routes.post('/galleries', _controllers_galleryController_js__WEBPACK_IMPORTED_MODULE_2__.createGallery);
routes.put('/galleries/:id', _controllers_galleryController_js__WEBPACK_IMPORTED_MODULE_2__.updateGallery);
routes.delete('/galleries/:id', _controllers_galleryController_js__WEBPACK_IMPORTED_MODULE_2__.deleteGallery);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./node_modules/hono/dist/adapter/vercel/handler.js":
/*!**********************************************************!*\
  !*** ./node_modules/hono/dist/adapter/vercel/handler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handle: () => (/* binding */ handle)
/* harmony export */ });
// src/adapter/vercel/handler.ts
var handle = (app) => (req, requestContext) => {
  return app.fetch(req, {}, requestContext);
};



/***/ }),

/***/ "./node_modules/hono/dist/adapter/vercel/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hono/dist/adapter/vercel/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handle: () => (/* reexport safe */ _handler_js__WEBPACK_IMPORTED_MODULE_0__.handle)
/* harmony export */ });
/* harmony import */ var _handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler.js */ "./node_modules/hono/dist/adapter/vercel/handler.js");
// src/adapter/vercel/index.ts




/***/ }),

/***/ "./node_modules/hono/dist/compose.js":
/*!*******************************************!*\
  !*** ./node_modules/hono/dist/compose.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compose: () => (/* binding */ compose)
/* harmony export */ });
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context.js */ "./node_modules/hono/dist/context.js");
// src/compose.ts

var compose = (middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context instanceof _context_js__WEBPACK_IMPORTED_MODULE_0__.Context) {
          context.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (!handler) {
        if (context instanceof _context_js__WEBPACK_IMPORTED_MODULE_0__.Context && context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      } else {
        try {
          res = await handler(context, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context instanceof _context_js__WEBPACK_IMPORTED_MODULE_0__.Context && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
  };
};



/***/ }),

/***/ "./node_modules/hono/dist/context.js":
/*!*******************************************!*\
  !*** ./node_modules/hono/dist/context.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   TEXT_PLAIN: () => (/* binding */ TEXT_PLAIN)
/* harmony export */ });
/* harmony import */ var _utils_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/html.js */ "./node_modules/hono/dist/utils/html.js");
// src/context.ts

var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var Context = class {
  req;
  env = {};
  _var = {};
  finalized = false;
  error = void 0;
  #status = 200;
  #executionCtx;
  #headers = void 0;
  #preparedHeaders = void 0;
  #res;
  #isFresh = true;
  layout = void 0;
  renderer = (content) => this.html(content);
  notFoundHandler = () => new Response();
  constructor(req, options) {
    this.req = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      if (options.notFoundHandler) {
        this.notFoundHandler = options.notFoundHandler;
      }
    }
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      this.#res.headers.delete("content-type");
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => this.renderer(...args);
  setLayout = (layout) => this.layout = layout;
  getLayout = () => this.layout;
  setRenderer = (renderer) => {
    this.renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this._var ??= {};
    this._var[key] = value;
  };
  get = (key) => {
    return this._var ? this._var[key] : void 0;
  };
  get var() {
    return { ...this._var };
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body, arg, headers) : this.newResponse(body, arg);
  };
  html = (html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      if (!(html instanceof Promise)) {
        html = html.toString();
      }
      if (html instanceof Promise) {
        return html.then((html2) => (0,_utils_html_js__WEBPACK_IMPORTED_MODULE_0__.resolveCallback)(html2, _utils_html_js__WEBPACK_IMPORTED_MODULE_0__.HtmlEscapedCallbackPhase.Stringify, false, {})).then((html2) => {
          return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
        });
      }
    }
    return typeof arg === "number" ? this.newResponse(html, arg, headers) : this.newResponse(html, arg);
  };
  redirect = (location, status = 302) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", location);
    return this.newResponse(null, status);
  };
  notFound = () => {
    return this.notFoundHandler(this);
  };
};



/***/ }),

/***/ "./node_modules/hono/dist/hono-base.js":
/*!*********************************************!*\
  !*** ./node_modules/hono/dist/hono-base.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPOSED_HANDLER: () => (/* binding */ COMPOSED_HANDLER),
/* harmony export */   HonoBase: () => (/* binding */ Hono)
/* harmony export */ });
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose.js */ "./node_modules/hono/dist/compose.js");
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context.js */ "./node_modules/hono/dist/context.js");
/* harmony import */ var _http_exception_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-exception.js */ "./node_modules/hono/dist/http-exception.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.js */ "./node_modules/hono/dist/request.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router.js */ "./node_modules/hono/dist/router.js");
/* harmony import */ var _utils_url_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url.js */ "./node_modules/hono/dist/utils/url.js");
// src/hono-base.ts






var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if (err instanceof _http_exception_js__WEBPACK_IMPORTED_MODULE_2__.HTTPException) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [..._router_js__WEBPACK_IMPORTED_MODULE_4__.METHODS, _router_js__WEBPACK_IMPORTED_MODULE_4__.METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      if (!method) {
        return this;
      }
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(_router_js__WEBPACK_IMPORTED_MODULE_4__.METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? _utils_url_js__WEBPACK_IMPORTED_MODULE_5__.getPath : _utils_url_js__WEBPACK_IMPORTED_MODULE_5__.getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    if (!app) {
      return subApp;
    }
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await (0,_compose_js__WEBPACK_IMPORTED_MODULE_0__.compose)([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_5__.mergePath)(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_5__.mergePath)(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(_router_js__WEBPACK_IMPORTED_MODULE_4__.METHOD_NAME_ALL, (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_5__.mergePath)(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_5__.mergePath)(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new _context_js__WEBPACK_IMPORTED_MODULE_1__.Context(new _request_js__WEBPACK_IMPORTED_MODULE_3__.HonoRequest(request, path, matchResult), {
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))
      ).catch((err) => this.handleError(err, c)) : res;
    }
    const composed = (0,_compose_js__WEBPACK_IMPORTED_MODULE_0__.compose)(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. You may forget returning Response object or `await next()`"
          );
        }
        return context.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
  fetch = (request, ...rest) => {
    return this.dispatch(request, rest[1], rest[0], request.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== void 0) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${(0,_utils_url_js__WEBPACK_IMPORTED_MODULE_5__.mergePath)("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, void 0, event.request.method));
    });
  };
};



/***/ }),

/***/ "./node_modules/hono/dist/hono.js":
/*!****************************************!*\
  !*** ./node_modules/hono/dist/hono.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hono: () => (/* binding */ Hono)
/* harmony export */ });
/* harmony import */ var _hono_base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hono-base.js */ "./node_modules/hono/dist/hono-base.js");
/* harmony import */ var _router_reg_exp_router_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/reg-exp-router/index.js */ "./node_modules/hono/dist/router/reg-exp-router/index.js");
/* harmony import */ var _router_smart_router_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/smart-router/index.js */ "./node_modules/hono/dist/router/smart-router/index.js");
/* harmony import */ var _router_trie_router_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/trie-router/index.js */ "./node_modules/hono/dist/router/trie-router/index.js");
// src/hono.ts




var Hono = class extends _hono_base_js__WEBPACK_IMPORTED_MODULE_0__.HonoBase {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new _router_smart_router_index_js__WEBPACK_IMPORTED_MODULE_2__.SmartRouter({
      routers: [new _router_reg_exp_router_index_js__WEBPACK_IMPORTED_MODULE_1__.RegExpRouter(), new _router_trie_router_index_js__WEBPACK_IMPORTED_MODULE_3__.TrieRouter()]
    });
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/http-exception.js":
/*!**************************************************!*\
  !*** ./node_modules/hono/dist/http-exception.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTTPException: () => (/* binding */ HTTPException)
/* harmony export */ });
// src/http-exception.ts
var HTTPException = class extends Error {
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/hono/dist/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hono: () => (/* reexport safe */ _hono_js__WEBPACK_IMPORTED_MODULE_0__.Hono)
/* harmony export */ });
/* harmony import */ var _hono_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hono.js */ "./node_modules/hono/dist/hono.js");
// src/index.ts




/***/ }),

/***/ "./node_modules/hono/dist/request.js":
/*!*******************************************!*\
  !*** ./node_modules/hono/dist/request.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HonoRequest: () => (/* binding */ HonoRequest)
/* harmony export */ });
/* harmony import */ var _utils_body_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/body.js */ "./node_modules/hono/dist/utils/body.js");
/* harmony import */ var _utils_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/url.js */ "./node_modules/hono/dist/utils/url.js");
// src/request.ts


var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.decodeURIComponent_)(param) : param : void 0;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.decodeURIComponent_)(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.getQueryParam)(this.url, key);
  }
  queries(key) {
    return (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.getQueryParams)(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    if (this.bodyCache.parsedBody) {
      return this.bodyCache.parsedBody;
    }
    const parsedBody = await (0,_utils_body_js__WEBPACK_IMPORTED_MODULE_0__.parseBody)(this, options);
    this.bodyCache.parsedBody = parsedBody;
    return parsedBody;
  }
  cachedBody = (key) => {
    const { bodyCache, raw } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    if (!bodyCache[key]) {
      for (const keyOfBodyCache of Object.keys(bodyCache)) {
        if (keyOfBodyCache === "parsedBody") {
          continue;
        }
        return (async () => {
          let body = await bodyCache[keyOfBodyCache];
          if (keyOfBodyCache === "json") {
            body = JSON.stringify(body);
          }
          return await new Response(body)[key]();
        })();
      }
    }
    return bodyCache[key] = raw[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/router.js":
/*!******************************************!*\
  !*** ./node_modules/hono/dist/router.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MESSAGE_MATCHER_IS_ALREADY_BUILT: () => (/* binding */ MESSAGE_MATCHER_IS_ALREADY_BUILT),
/* harmony export */   METHODS: () => (/* binding */ METHODS),
/* harmony export */   METHOD_NAME_ALL: () => (/* binding */ METHOD_NAME_ALL),
/* harmony export */   METHOD_NAME_ALL_LOWERCASE: () => (/* binding */ METHOD_NAME_ALL_LOWERCASE),
/* harmony export */   UnsupportedPathError: () => (/* binding */ UnsupportedPathError)
/* harmony export */ });
// src/router.ts
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};



/***/ }),

/***/ "./node_modules/hono/dist/router/reg-exp-router/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/hono/dist/router/reg-exp-router/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRouter: () => (/* reexport safe */ _router_js__WEBPACK_IMPORTED_MODULE_0__.RegExpRouter)
/* harmony export */ });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ "./node_modules/hono/dist/router/reg-exp-router/router.js");
// src/router/reg-exp-router/index.ts




/***/ }),

/***/ "./node_modules/hono/dist/router/reg-exp-router/node.js":
/*!**************************************************************!*\
  !*** ./node_modules/hono/dist/router/reg-exp-router/node.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node),
/* harmony export */   PATH_ERROR: () => (/* binding */ PATH_ERROR)
/* harmony export */ });
// src/router/reg-exp-router/node.ts
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node = class {
  index;
  varIndex;
  children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node();
        if (name !== "") {
          node.varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/router/reg-exp-router/router.js":
/*!****************************************************************!*\
  !*** ./node_modules/hono/dist/router/reg-exp-router/router.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegExpRouter: () => (/* binding */ RegExpRouter)
/* harmony export */ });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.js */ "./node_modules/hono/dist/router.js");
/* harmony import */ var _utils_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url.js */ "./node_modules/hono/dist/utils/url.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node.js */ "./node_modules/hono/dist/router/reg-exp-router/node.js");
/* harmony import */ var _trie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trie.js */ "./node_modules/hono/dist/router/reg-exp-router/trie.js");
// src/router/reg-exp-router/router.ts




var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new _trie_js__WEBPACK_IMPORTED_MODULE_3__.Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === _node_js__WEBPACK_IMPORTED_MODULE_2__.PATH_ERROR ? new _router_js__WEBPACK_IMPORTED_MODULE_0__.UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
var RegExpRouter = class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.routes = { [_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(_router_js__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === _router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === _router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === _router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.checkOptionalParameter)(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === _router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = void 0;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === _router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== _router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL]).map((path) => [path, r[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/router/reg-exp-router/trie.js":
/*!**************************************************************!*\
  !*** ./node_modules/hono/dist/router/reg-exp-router/trie.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Trie: () => (/* binding */ Trie)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./node_modules/hono/dist/router/reg-exp-router/node.js");
// src/router/reg-exp-router/trie.ts

var Trie = class {
  context = { varIndex: 0 };
  root = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/router/smart-router/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/hono/dist/router/smart-router/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartRouter: () => (/* reexport safe */ _router_js__WEBPACK_IMPORTED_MODULE_0__.SmartRouter)
/* harmony export */ });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ "./node_modules/hono/dist/router/smart-router/router.js");
// src/router/smart-router/index.ts




/***/ }),

/***/ "./node_modules/hono/dist/router/smart-router/router.js":
/*!**************************************************************!*\
  !*** ./node_modules/hono/dist/router/smart-router/router.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SmartRouter: () => (/* binding */ SmartRouter)
/* harmony export */ });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.js */ "./node_modules/hono/dist/router.js");
// src/router/smart-router/router.ts

var SmartRouter = class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(_router_js__WEBPACK_IMPORTED_MODULE_0__.MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        routes.forEach((args) => {
          router.add(...args);
        });
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof _router_js__WEBPACK_IMPORTED_MODULE_0__.UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.routers = [router];
      this.routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/router/trie-router/index.js":
/*!************************************************************!*\
  !*** ./node_modules/hono/dist/router/trie-router/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrieRouter: () => (/* reexport safe */ _router_js__WEBPACK_IMPORTED_MODULE_0__.TrieRouter)
/* harmony export */ });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ "./node_modules/hono/dist/router/trie-router/router.js");
// src/router/trie-router/index.ts




/***/ }),

/***/ "./node_modules/hono/dist/router/trie-router/node.js":
/*!***********************************************************!*\
  !*** ./node_modules/hono/dist/router/trie-router/node.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Node: () => (/* binding */ Node)
/* harmony export */ });
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router.js */ "./node_modules/hono/dist/router.js");
/* harmony import */ var _utils_url_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/url.js */ "./node_modules/hono/dist/utils/url.js");
// src/router/trie-router/node.ts


var Node = class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = /* @__PURE__ */ Object.create(null);
  constructor(method, handler, children) {
    this.children = children || /* @__PURE__ */ Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.splitRoutingPath)(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.getPattern)(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node();
      const pattern = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.getPattern)(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.methods.length; i < len; i++) {
      const m = node.methods[i];
      const handlerSet = m[method] || m[_router_js__WEBPACK_IMPORTED_MODULE_0__.METHOD_NAME_ALL];
      const processedSet = /* @__PURE__ */ Object.create(null);
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = /* @__PURE__ */ Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_1__.splitPath)(path);
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.children[part];
        if (nextNode) {
          nextNode.params = node.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(
                ...this.gHSets(nextNode.children["*"], method, node.params, /* @__PURE__ */ Object.create(null))
              );
            }
            handlerSets.push(...this.gHSets(nextNode, method, node.params, /* @__PURE__ */ Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.patterns.length; k < len3; k++) {
          const pattern = node.patterns[k];
          const params = { ...node.params };
          if (pattern === "*") {
            const astNode = node.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node.params, /* @__PURE__ */ Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/router/trie-router/router.js":
/*!*************************************************************!*\
  !*** ./node_modules/hono/dist/router/trie-router/router.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrieRouter: () => (/* binding */ TrieRouter)
/* harmony export */ });
/* harmony import */ var _utils_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/url.js */ "./node_modules/hono/dist/utils/url.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "./node_modules/hono/dist/router/trie-router/node.js");
// src/router/trie-router/router.ts


var TrieRouter = class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new _node_js__WEBPACK_IMPORTED_MODULE_1__.Node();
  }
  add(method, path, handler) {
    const results = (0,_utils_url_js__WEBPACK_IMPORTED_MODULE_0__.checkOptionalParameter)(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/utils/body.js":
/*!**********************************************!*\
  !*** ./node_modules/hono/dist/utils/body.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseBody: () => (/* binding */ parseBody)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "./node_modules/hono/dist/request.js");
// src/utils/body.ts

var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof _request_js__WEBPACK_IMPORTED_MODULE_0__.HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType !== null && contentType.startsWith("multipart/form-data") || contentType !== null && contentType.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
};
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};



/***/ }),

/***/ "./node_modules/hono/dist/utils/html.js":
/*!**********************************************!*\
  !*** ./node_modules/hono/dist/utils/html.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlEscapedCallbackPhase: () => (/* binding */ HtmlEscapedCallbackPhase),
/* harmony export */   escapeToBuffer: () => (/* binding */ escapeToBuffer),
/* harmony export */   raw: () => (/* binding */ raw),
/* harmony export */   resolveCallback: () => (/* binding */ resolveCallback),
/* harmony export */   stringBufferToString: () => (/* binding */ stringBufferToString)
/* harmony export */ });
// src/utils/html.ts
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var escapeRe = /[&<>'"]/;
var stringBufferToString = async (buffer) => {
  let str = "";
  const callbacks = [];
  for (let i = buffer.length - 1; ; i--) {
    str += buffer[i];
    i--;
    if (i < 0) {
      break;
    }
    let r = await buffer[i];
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    const isEscaped = r.isEscaped;
    r = await (typeof r === "object" ? r.toString() : r);
    if (typeof r === "object") {
      callbacks.push(...r.callbacks || []);
    }
    if (r.isEscaped ?? isEscaped) {
      str += r;
    } else {
      const buf = [str];
      escapeToBuffer(r, buf);
      str = buf[0];
    }
  }
  return raw(str, callbacks);
};
var escapeToBuffer = (str, buffer) => {
  const match = str.search(escapeRe);
  if (match === -1) {
    buffer[0] += str;
    return;
  }
  let escape;
  let index;
  let lastIndex = 0;
  for (index = match; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        escape = "&quot;";
        break;
      case 39:
        escape = "&#39;";
        break;
      case 38:
        escape = "&amp;";
        break;
      case 60:
        escape = "&lt;";
        break;
      case 62:
        escape = "&gt;";
        break;
      default:
        continue;
    }
    buffer[0] += str.substring(lastIndex, index) + escape;
    lastIndex = index + 1;
  }
  buffer[0] += str.substring(lastIndex, index);
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};



/***/ }),

/***/ "./node_modules/hono/dist/utils/url.js":
/*!*********************************************!*\
  !*** ./node_modules/hono/dist/utils/url.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkOptionalParameter: () => (/* binding */ checkOptionalParameter),
/* harmony export */   decodeURIComponent_: () => (/* binding */ decodeURIComponent_),
/* harmony export */   getPath: () => (/* binding */ getPath),
/* harmony export */   getPathNoStrict: () => (/* binding */ getPathNoStrict),
/* harmony export */   getPattern: () => (/* binding */ getPattern),
/* harmony export */   getQueryParam: () => (/* binding */ getQueryParam),
/* harmony export */   getQueryParams: () => (/* binding */ getQueryParams),
/* harmony export */   getQueryStrings: () => (/* binding */ getQueryStrings),
/* harmony export */   mergePath: () => (/* binding */ mergePath),
/* harmony export */   splitPath: () => (/* binding */ splitPath),
/* harmony export */   splitRoutingPath: () => (/* binding */ splitRoutingPath)
/* harmony export */ });
// src/utils/url.ts
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecodeURI = (str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
};
var getPath = (request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getQueryStrings = (url) => {
  const queryIndex = url.indexOf("?", 8);
  return queryIndex === -1 ? "" : "?" + url.slice(queryIndex + 1);
};
var getPathNoStrict = (request) => {
  const result = getPath(request);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ GET),
/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS),
/* harmony export */   PATCH: () => (/* binding */ PATCH),
/* harmony export */   POST: () => (/* binding */ POST),
/* harmony export */   PUT: () => (/* binding */ PUT)
/* harmony export */ });
/* harmony import */ var hono__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hono */ "./node_modules/hono/dist/index.js");
/* harmony import */ var hono_vercel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hono/vercel */ "./node_modules/hono/dist/adapter/vercel/index.js");
/* harmony import */ var _router_router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/router.js */ "./api/router/router.js");



const app = new hono__WEBPACK_IMPORTED_MODULE_0__.Hono().basePath('/api');
app.get('/', c => {
  return c.json({
    message: "Congrats! You've deployed Hono to Vercel"
  });
});
const handler = (0,hono_vercel__WEBPACK_IMPORTED_MODULE_1__.handle)(app);
app.route('/', _router_router_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
const GET = handler;
const POST = handler;
const PATCH = handler;
const PUT = handler;
const OPTIONS = handler;
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bm9kZV9tb2R1bGVzLy5wcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BwcmlzbWEvY2xpZW50L2luZGV4LWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BwcmlzbWEvY2xpZW50L3J1bnRpbWUvaW5kZXgtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvY29udHJvbGxlcnMvZ2FsbGVyeUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL2NvbnRyb2xsZXJzL3VzZXJDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2FwaS9wcmlzbWEuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbm8vZGlzdC9hZGFwdGVyL3ZlcmNlbC9oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3QvYWRhcHRlci92ZXJjZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbm8vZGlzdC9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3QvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L2hvbm8tYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L2hvbm8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbm8vZGlzdC9odHRwLWV4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3QvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L3JvdXRlci9yZWctZXhwLXJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L3JvdXRlci9yZWctZXhwLXJvdXRlci9ub2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3Qvcm91dGVyL3JlZy1leHAtcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L3JvdXRlci9yZWctZXhwLXJvdXRlci90cmllLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3Qvcm91dGVyL3NtYXJ0LXJvdXRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L3JvdXRlci9zbWFydC1yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3Qvcm91dGVyL3RyaWUtcm91dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3Qvcm91dGVyL3RyaWUtcm91dGVyL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbm8vZGlzdC9yb3V0ZXIvdHJpZS1yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob25vL2Rpc3QvdXRpbHMvYm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9uby9kaXN0L3V0aWxzL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvbm8vZGlzdC91dGlscy91cmwuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG5jb25zdCB7XG4gIERlY2ltYWwsXG4gIG9iamVjdEVudW1WYWx1ZXMsXG4gIG1ha2VTdHJpY3RFbnVtLFxuICBQdWJsaWMsXG4gIGdldFJ1bnRpbWUsXG4gIHNraXBcbn0gPSByZXF1aXJlKCdAcHJpc21hL2NsaWVudC9ydW50aW1lL2luZGV4LWJyb3dzZXIuanMnKVxuXG5cbmNvbnN0IFByaXNtYSA9IHt9XG5cbmV4cG9ydHMuUHJpc21hID0gUHJpc21hXG5leHBvcnRzLiRFbnVtcyA9IHt9XG5cbi8qKlxuICogUHJpc21hIENsaWVudCBKUyB2ZXJzaW9uOiA1LjIwLjBcbiAqIFF1ZXJ5IEVuZ2luZSB2ZXJzaW9uOiAwNmZjNThhMzY4ZGM3YmU5ZmJiYmU4OTRhZGY4ZDQ0NWQyMDhjMjg0XG4gKi9cblByaXNtYS5wcmlzbWFWZXJzaW9uID0ge1xuICBjbGllbnQ6IFwiNS4yMC4wXCIsXG4gIGVuZ2luZTogXCIwNmZjNThhMzY4ZGM3YmU5ZmJiYmU4OTRhZGY4ZDQ0NWQyMDhjMjg0XCJcbn1cblxuUHJpc21hLlByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yID0gKCkgPT4ge1xuICBjb25zdCBydW50aW1lTmFtZSA9IGdldFJ1bnRpbWUoKS5wcmV0dHlOYW1lO1xuICB0aHJvdyBuZXcgRXJyb3IoYFByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yIGlzIHVuYWJsZSB0byBydW4gaW4gdGhpcyBicm93c2VyIGVudmlyb25tZW50LCBvciBoYXMgYmVlbiBidW5kbGVkIGZvciB0aGUgYnJvd3NlciAocnVubmluZyBpbiAke3J1bnRpbWVOYW1lfSkuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vcHJpcy5seS9wcmlzbWEtcHJpc21hLWJ1Zy1yZXBvcnRgLFxuKX07XG5QcmlzbWEuUHJpc21hQ2xpZW50VW5rbm93blJlcXVlc3RFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgcnVudGltZU5hbWUgPSBnZXRSdW50aW1lKCkucHJldHR5TmFtZTtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yIGlzIHVuYWJsZSB0byBydW4gaW4gdGhpcyBicm93c2VyIGVudmlyb25tZW50LCBvciBoYXMgYmVlbiBidW5kbGVkIGZvciB0aGUgYnJvd3NlciAocnVubmluZyBpbiAke3J1bnRpbWVOYW1lfSkuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vcHJpcy5seS9wcmlzbWEtcHJpc21hLWJ1Zy1yZXBvcnRgLFxuKX1cblByaXNtYS5QcmlzbWFDbGllbnRSdXN0UGFuaWNFcnJvciA9ICgpID0+IHtcbiAgY29uc3QgcnVudGltZU5hbWUgPSBnZXRSdW50aW1lKCkucHJldHR5TmFtZTtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRSdXN0UGFuaWNFcnJvciBpcyB1bmFibGUgdG8gcnVuIGluIHRoaXMgYnJvd3NlciBlbnZpcm9ubWVudCwgb3IgaGFzIGJlZW4gYnVuZGxlZCBmb3IgdGhlIGJyb3dzZXIgKHJ1bm5pbmcgaW4gJHtydW50aW1lTmFtZX0pLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL3ByaXMubHkvcHJpc21hLXByaXNtYS1idWctcmVwb3J0YCxcbil9XG5QcmlzbWEuUHJpc21hQ2xpZW50SW5pdGlhbGl6YXRpb25FcnJvciA9ICgpID0+IHtcbiAgY29uc3QgcnVudGltZU5hbWUgPSBnZXRSdW50aW1lKCkucHJldHR5TmFtZTtcbiAgdGhyb3cgbmV3IEVycm9yKGBQcmlzbWFDbGllbnRJbml0aWFsaXphdGlvbkVycm9yIGlzIHVuYWJsZSB0byBydW4gaW4gdGhpcyBicm93c2VyIGVudmlyb25tZW50LCBvciBoYXMgYmVlbiBidW5kbGVkIGZvciB0aGUgYnJvd3NlciAocnVubmluZyBpbiAke3J1bnRpbWVOYW1lfSkuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vcHJpcy5seS9wcmlzbWEtcHJpc21hLWJ1Zy1yZXBvcnRgLFxuKX1cblByaXNtYS5QcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3IgPSAoKSA9PiB7XG4gIGNvbnN0IHJ1bnRpbWVOYW1lID0gZ2V0UnVudGltZSgpLnByZXR0eU5hbWU7XG4gIHRocm93IG5ldyBFcnJvcihgUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yIGlzIHVuYWJsZSB0byBydW4gaW4gdGhpcyBicm93c2VyIGVudmlyb25tZW50LCBvciBoYXMgYmVlbiBidW5kbGVkIGZvciB0aGUgYnJvd3NlciAocnVubmluZyBpbiAke3J1bnRpbWVOYW1lfSkuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vcHJpcy5seS9wcmlzbWEtcHJpc21hLWJ1Zy1yZXBvcnRgLFxuKX1cblByaXNtYS5Ob3RGb3VuZEVycm9yID0gKCkgPT4ge1xuICBjb25zdCBydW50aW1lTmFtZSA9IGdldFJ1bnRpbWUoKS5wcmV0dHlOYW1lO1xuICB0aHJvdyBuZXcgRXJyb3IoYE5vdEZvdW5kRXJyb3IgaXMgdW5hYmxlIHRvIHJ1biBpbiB0aGlzIGJyb3dzZXIgZW52aXJvbm1lbnQsIG9yIGhhcyBiZWVuIGJ1bmRsZWQgZm9yIHRoZSBicm93c2VyIChydW5uaW5nIGluICR7cnVudGltZU5hbWV9KS5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9wcmlzLmx5L3ByaXNtYS1wcmlzbWEtYnVnLXJlcG9ydGAsXG4pfVxuUHJpc21hLkRlY2ltYWwgPSBEZWNpbWFsXG5cbi8qKlxuICogUmUtZXhwb3J0IG9mIHNxbC10ZW1wbGF0ZS10YWdcbiAqL1xuUHJpc21hLnNxbCA9ICgpID0+IHtcbiAgY29uc3QgcnVudGltZU5hbWUgPSBnZXRSdW50aW1lKCkucHJldHR5TmFtZTtcbiAgdGhyb3cgbmV3IEVycm9yKGBzcWx0YWcgaXMgdW5hYmxlIHRvIHJ1biBpbiB0aGlzIGJyb3dzZXIgZW52aXJvbm1lbnQsIG9yIGhhcyBiZWVuIGJ1bmRsZWQgZm9yIHRoZSBicm93c2VyIChydW5uaW5nIGluICR7cnVudGltZU5hbWV9KS5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9wcmlzLmx5L3ByaXNtYS1wcmlzbWEtYnVnLXJlcG9ydGAsXG4pfVxuUHJpc21hLmVtcHR5ID0gKCkgPT4ge1xuICBjb25zdCBydW50aW1lTmFtZSA9IGdldFJ1bnRpbWUoKS5wcmV0dHlOYW1lO1xuICB0aHJvdyBuZXcgRXJyb3IoYGVtcHR5IGlzIHVuYWJsZSB0byBydW4gaW4gdGhpcyBicm93c2VyIGVudmlyb25tZW50LCBvciBoYXMgYmVlbiBidW5kbGVkIGZvciB0aGUgYnJvd3NlciAocnVubmluZyBpbiAke3J1bnRpbWVOYW1lfSkuXG5JbiBjYXNlIHRoaXMgZXJyb3IgaXMgdW5leHBlY3RlZCBmb3IgeW91LCBwbGVhc2UgcmVwb3J0IGl0IGluIGh0dHBzOi8vcHJpcy5seS9wcmlzbWEtcHJpc21hLWJ1Zy1yZXBvcnRgLFxuKX1cblByaXNtYS5qb2luID0gKCkgPT4ge1xuICBjb25zdCBydW50aW1lTmFtZSA9IGdldFJ1bnRpbWUoKS5wcmV0dHlOYW1lO1xuICB0aHJvdyBuZXcgRXJyb3IoYGpvaW4gaXMgdW5hYmxlIHRvIHJ1biBpbiB0aGlzIGJyb3dzZXIgZW52aXJvbm1lbnQsIG9yIGhhcyBiZWVuIGJ1bmRsZWQgZm9yIHRoZSBicm93c2VyIChydW5uaW5nIGluICR7cnVudGltZU5hbWV9KS5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9wcmlzLmx5L3ByaXNtYS1wcmlzbWEtYnVnLXJlcG9ydGAsXG4pfVxuUHJpc21hLnJhdyA9ICgpID0+IHtcbiAgY29uc3QgcnVudGltZU5hbWUgPSBnZXRSdW50aW1lKCkucHJldHR5TmFtZTtcbiAgdGhyb3cgbmV3IEVycm9yKGByYXcgaXMgdW5hYmxlIHRvIHJ1biBpbiB0aGlzIGJyb3dzZXIgZW52aXJvbm1lbnQsIG9yIGhhcyBiZWVuIGJ1bmRsZWQgZm9yIHRoZSBicm93c2VyIChydW5uaW5nIGluICR7cnVudGltZU5hbWV9KS5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9wcmlzLmx5L3ByaXNtYS1wcmlzbWEtYnVnLXJlcG9ydGAsXG4pfVxuUHJpc21hLnZhbGlkYXRvciA9IFB1YmxpYy52YWxpZGF0b3JcblxuLyoqXG4qIEV4dGVuc2lvbnNcbiovXG5QcmlzbWEuZ2V0RXh0ZW5zaW9uQ29udGV4dCA9ICgpID0+IHtcbiAgY29uc3QgcnVudGltZU5hbWUgPSBnZXRSdW50aW1lKCkucHJldHR5TmFtZTtcbiAgdGhyb3cgbmV3IEVycm9yKGBFeHRlbnNpb25zLmdldEV4dGVuc2lvbkNvbnRleHQgaXMgdW5hYmxlIHRvIHJ1biBpbiB0aGlzIGJyb3dzZXIgZW52aXJvbm1lbnQsIG9yIGhhcyBiZWVuIGJ1bmRsZWQgZm9yIHRoZSBicm93c2VyIChydW5uaW5nIGluICR7cnVudGltZU5hbWV9KS5cbkluIGNhc2UgdGhpcyBlcnJvciBpcyB1bmV4cGVjdGVkIGZvciB5b3UsIHBsZWFzZSByZXBvcnQgaXQgaW4gaHR0cHM6Ly9wcmlzLmx5L3ByaXNtYS1wcmlzbWEtYnVnLXJlcG9ydGAsXG4pfVxuUHJpc21hLmRlZmluZUV4dGVuc2lvbiA9ICgpID0+IHtcbiAgY29uc3QgcnVudGltZU5hbWUgPSBnZXRSdW50aW1lKCkucHJldHR5TmFtZTtcbiAgdGhyb3cgbmV3IEVycm9yKGBFeHRlbnNpb25zLmRlZmluZUV4dGVuc2lvbiBpcyB1bmFibGUgdG8gcnVuIGluIHRoaXMgYnJvd3NlciBlbnZpcm9ubWVudCwgb3IgaGFzIGJlZW4gYnVuZGxlZCBmb3IgdGhlIGJyb3dzZXIgKHJ1bm5pbmcgaW4gJHtydW50aW1lTmFtZX0pLlxuSW4gY2FzZSB0aGlzIGVycm9yIGlzIHVuZXhwZWN0ZWQgZm9yIHlvdSwgcGxlYXNlIHJlcG9ydCBpdCBpbiBodHRwczovL3ByaXMubHkvcHJpc21hLXByaXNtYS1idWctcmVwb3J0YCxcbil9XG5cbi8qKlxuICogU2hvcnRoYW5kIHV0aWxpdGllcyBmb3IgSlNPTiBmaWx0ZXJpbmdcbiAqL1xuUHJpc21hLkRiTnVsbCA9IG9iamVjdEVudW1WYWx1ZXMuaW5zdGFuY2VzLkRiTnVsbFxuUHJpc21hLkpzb25OdWxsID0gb2JqZWN0RW51bVZhbHVlcy5pbnN0YW5jZXMuSnNvbk51bGxcblByaXNtYS5BbnlOdWxsID0gb2JqZWN0RW51bVZhbHVlcy5pbnN0YW5jZXMuQW55TnVsbFxuXG5QcmlzbWEuTnVsbFR5cGVzID0ge1xuICBEYk51bGw6IG9iamVjdEVudW1WYWx1ZXMuY2xhc3Nlcy5EYk51bGwsXG4gIEpzb25OdWxsOiBvYmplY3RFbnVtVmFsdWVzLmNsYXNzZXMuSnNvbk51bGwsXG4gIEFueU51bGw6IG9iamVjdEVudW1WYWx1ZXMuY2xhc3Nlcy5BbnlOdWxsXG59XG5cblxuXG4vKipcbiAqIEVudW1zXG4gKi9cblxuZXhwb3J0cy5QcmlzbWEuVHJhbnNhY3Rpb25Jc29sYXRpb25MZXZlbCA9IG1ha2VTdHJpY3RFbnVtKHtcbiAgUmVhZFVuY29tbWl0dGVkOiAnUmVhZFVuY29tbWl0dGVkJyxcbiAgUmVhZENvbW1pdHRlZDogJ1JlYWRDb21taXR0ZWQnLFxuICBSZXBlYXRhYmxlUmVhZDogJ1JlcGVhdGFibGVSZWFkJyxcbiAgU2VyaWFsaXphYmxlOiAnU2VyaWFsaXphYmxlJ1xufSk7XG5cbmV4cG9ydHMuUHJpc21hLlVzZXJTY2FsYXJGaWVsZEVudW0gPSB7XG4gIGlkOiAnaWQnLFxuICBlbWFpbDogJ2VtYWlsJyxcbiAgcGFzc3dvcmQ6ICdwYXNzd29yZCcsXG4gIG5hbWU6ICduYW1lJ1xufTtcblxuZXhwb3J0cy5QcmlzbWEuR2FsbGFyeVNjYWxhckZpZWxkRW51bSA9IHtcbiAgaWQ6ICdpZCcsXG4gIGltZzogJ2ltZycsXG4gIHRpdGxlOiAndGl0bGUnLFxuICBjcmVhdGVkQXQ6ICdjcmVhdGVkQXQnLFxuICB1cGRhdGVkQXQ6ICd1cGRhdGVkQXQnXG59O1xuXG5leHBvcnRzLlByaXNtYS5Tb3J0T3JkZXIgPSB7XG4gIGFzYzogJ2FzYycsXG4gIGRlc2M6ICdkZXNjJ1xufTtcblxuZXhwb3J0cy5QcmlzbWEuUXVlcnlNb2RlID0ge1xuICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gIGluc2Vuc2l0aXZlOiAnaW5zZW5zaXRpdmUnXG59O1xuXG5leHBvcnRzLlByaXNtYS5OdWxsc09yZGVyID0ge1xuICBmaXJzdDogJ2ZpcnN0JyxcbiAgbGFzdDogJ2xhc3QnXG59O1xuXG5cbmV4cG9ydHMuUHJpc21hLk1vZGVsTmFtZSA9IHtcbiAgVXNlcjogJ1VzZXInLFxuICBHYWxsYXJ5OiAnR2FsbGFyeSdcbn07XG5cbi8qKlxuICogVGhpcyBpcyBhIHN0dWIgUHJpc21hIENsaWVudCB0aGF0IHdpbGwgZXJyb3IgYXQgcnVudGltZSBpZiBjYWxsZWQuXG4gKi9cbmNsYXNzIFByaXNtYUNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiBuZXcgUHJveHkodGhpcywge1xuICAgICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgICBsZXQgbWVzc2FnZVxuICAgICAgICBjb25zdCBydW50aW1lID0gZ2V0UnVudGltZSgpXG4gICAgICAgIGlmIChydW50aW1lLmlzRWRnZSkge1xuICAgICAgICAgIG1lc3NhZ2UgPSBgUHJpc21hQ2xpZW50IGlzIG5vdCBjb25maWd1cmVkIHRvIHJ1biBpbiAke3J1bnRpbWUucHJldHR5TmFtZX0uIEluIG9yZGVyIHRvIHJ1biBQcmlzbWEgQ2xpZW50IG9uIGVkZ2UgcnVudGltZSwgZWl0aGVyOlxuLSBVc2UgUHJpc21hIEFjY2VsZXJhdGU6IGh0dHBzOi8vcHJpcy5seS9kL2FjY2VsZXJhdGVcbi0gVXNlIERyaXZlciBBZGFwdGVyczogaHR0cHM6Ly9wcmlzLmx5L2QvZHJpdmVyLWFkYXB0ZXJzXG5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPSAnUHJpc21hQ2xpZW50IGlzIHVuYWJsZSB0byBydW4gaW4gdGhpcyBicm93c2VyIGVudmlyb25tZW50LCBvciBoYXMgYmVlbiBidW5kbGVkIGZvciB0aGUgYnJvd3NlciAocnVubmluZyBpbiBgJyArIHJ1bnRpbWUucHJldHR5TmFtZSArICdgKS4nXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIG1lc3NhZ2UgKz0gYFxuSWYgdGhpcyBpcyB1bmV4cGVjdGVkLCBwbGVhc2Ugb3BlbiBhbiBpc3N1ZTogaHR0cHM6Ly9wcmlzLmx5L3ByaXNtYS1wcmlzbWEtYnVnLXJlcG9ydGBcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydHMuUHJpc21hQ2xpZW50ID0gUHJpc21hQ2xpZW50XG5cbk9iamVjdC5hc3NpZ24oZXhwb3J0cywgUHJpc21hKVxuIiwiY29uc3QgcHJpc21hID0gcmVxdWlyZSgnLnByaXNtYS9jbGllbnQvaW5kZXgtYnJvd3NlcicpXG5cbm1vZHVsZS5leHBvcnRzID0gcHJpc21hXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgZGU9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBXZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciBHZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgSmU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTt2YXIgTWU9KGUsbik9Pntmb3IodmFyIGkgaW4gbilkZShlLGkse2dldDpuW2ldLGVudW1lcmFibGU6ITB9KX0sWGU9KGUsbixpLHQpPT57aWYobiYmdHlwZW9mIG49PVwib2JqZWN0XCJ8fHR5cGVvZiBuPT1cImZ1bmN0aW9uXCIpZm9yKGxldCByIG9mIEdlKG4pKSFKZS5jYWxsKGUscikmJnIhPT1pJiZkZShlLHIse2dldDooKT0+bltyXSxlbnVtZXJhYmxlOiEodD1XZShuLHIpKXx8dC5lbnVtZXJhYmxlfSk7cmV0dXJuIGV9O3ZhciBLZT1lPT5YZShkZSh7fSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxlKTt2YXIgWG49e307TWUoWG4se0RlY2ltYWw6KCk9PmplLFB1YmxpYzooKT0+aGUsZ2V0UnVudGltZTooKT0+YmUsbWFrZVN0cmljdEVudW06KCk9PlBlLG9iamVjdEVudW1WYWx1ZXM6KCk9Pk9lfSk7bW9kdWxlLmV4cG9ydHM9S2UoWG4pO3ZhciBoZT17fTtNZShoZSx7dmFsaWRhdG9yOigpPT5DZX0pO2Z1bmN0aW9uIENlKC4uLmUpe3JldHVybiBuPT5ufXZhciBuZT1TeW1ib2woKSxwZT1uZXcgV2Vha01hcCxnZT1jbGFzc3tjb25zdHJ1Y3RvcihuKXtuPT09bmU/cGUuc2V0KHRoaXMsXCJQcmlzbWEuXCIuY29uY2F0KHRoaXMuX2dldE5hbWUoKSkpOnBlLnNldCh0aGlzLFwibmV3IFByaXNtYS5cIi5jb25jYXQodGhpcy5fZ2V0TmFtZXNwYWNlKCksXCIuXCIpLmNvbmNhdCh0aGlzLl9nZXROYW1lKCksXCIoKVwiKSl9X2dldE5hbWUoKXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lfXRvU3RyaW5nKCl7cmV0dXJuIHBlLmdldCh0aGlzKX19LEc9Y2xhc3MgZXh0ZW5kcyBnZXtfZ2V0TmFtZXNwYWNlKCl7cmV0dXJuXCJOdWxsVHlwZXNcIn19LEo9Y2xhc3MgZXh0ZW5kcyBHe307bWUoSixcIkRiTnVsbFwiKTt2YXIgWD1jbGFzcyBleHRlbmRzIEd7fTttZShYLFwiSnNvbk51bGxcIik7dmFyIEs9Y2xhc3MgZXh0ZW5kcyBHe307bWUoSyxcIkFueU51bGxcIik7dmFyIE9lPXtjbGFzc2VzOntEYk51bGw6SixKc29uTnVsbDpYLEFueU51bGw6S30saW5zdGFuY2VzOntEYk51bGw6bmV3IEoobmUpLEpzb25OdWxsOm5ldyBYKG5lKSxBbnlOdWxsOm5ldyBLKG5lKX19O2Z1bmN0aW9uIG1lKGUsbil7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJuYW1lXCIse3ZhbHVlOm4sY29uZmlndXJhYmxlOiEwfSl9dmFyIHhlPW5ldyBTZXQoW1widG9KU09OXCIsXCIkJHR5cGVvZlwiLFwiYXN5bW1ldHJpY01hdGNoXCIsU3ltYm9sLml0ZXJhdG9yLFN5bWJvbC50b1N0cmluZ1RhZyxTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlLFN5bWJvbC50b1ByaW1pdGl2ZV0pO2Z1bmN0aW9uIFBlKGUpe3JldHVybiBuZXcgUHJveHkoZSx7Z2V0KG4saSl7aWYoaSBpbiBuKXJldHVybiBuW2ldO2lmKCF4ZS5oYXMoaSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgZW51bSB2YWx1ZTogXCIuY29uY2F0KFN0cmluZyhpKSkpfX0pfXZhciBRZT1cIkNsb3VkZmxhcmUtV29ya2Vyc1wiLFllPVwibm9kZVwiO2Z1bmN0aW9uIFJlKCl7dmFyIGUsbixpO3JldHVybiB0eXBlb2YgTmV0bGlmeT09XCJvYmplY3RcIj9cIm5ldGxpZnlcIjp0eXBlb2YgRWRnZVJ1bnRpbWU9PVwic3RyaW5nXCI/XCJlZGdlLWxpZ2h0XCI6KChlPWdsb2JhbFRoaXMubmF2aWdhdG9yKT09bnVsbD92b2lkIDA6ZS51c2VyQWdlbnQpPT09UWU/XCJ3b3JrZXJkXCI6Z2xvYmFsVGhpcy5EZW5vP1wiZGVub1wiOmdsb2JhbFRoaXMuX19sYWdvbl9fP1wibGFnb25cIjooKGk9KG49Z2xvYmFsVGhpcy5wcm9jZXNzKT09bnVsbD92b2lkIDA6bi5yZWxlYXNlKT09bnVsbD92b2lkIDA6aS5uYW1lKT09PVllP1wibm9kZVwiOmdsb2JhbFRoaXMuQnVuP1wiYnVuXCI6Z2xvYmFsVGhpcy5mYXN0bHk/XCJmYXN0bHlcIjpcInVua25vd25cIn12YXIgemU9e25vZGU6XCJOb2RlLmpzXCIsd29ya2VyZDpcIkNsb3VkZmxhcmUgV29ya2Vyc1wiLGRlbm86XCJEZW5vIGFuZCBEZW5vIERlcGxveVwiLG5ldGxpZnk6XCJOZXRsaWZ5IEVkZ2UgRnVuY3Rpb25zXCIsXCJlZGdlLWxpZ2h0XCI6XCJFZGdlIFJ1bnRpbWUgKFZlcmNlbCBFZGdlIEZ1bmN0aW9ucywgVmVyY2VsIEVkZ2UgTWlkZGxld2FyZSwgTmV4dC5qcyAoUGFnZXMgUm91dGVyKSBFZGdlIEFQSSBSb3V0ZXMsIE5leHQuanMgKEFwcCBSb3V0ZXIpIEVkZ2UgUm91dGUgSGFuZGxlcnMgb3IgTmV4dC5qcyBNaWRkbGV3YXJlKVwifTtmdW5jdGlvbiBiZSgpe2xldCBlPVJlKCk7cmV0dXJue2lkOmUscHJldHR5TmFtZTp6ZVtlXXx8ZSxpc0VkZ2U6W1wid29ya2VyZFwiLFwiZGVub1wiLFwibmV0bGlmeVwiLFwiZWRnZS1saWdodFwiXS5pbmNsdWRlcyhlKX19dmFyIEg9OWUxNSwkPTFlOSx3ZT1cIjAxMjM0NTY3ODlhYmNkZWZcIix0ZT1cIjIuMzAyNTg1MDkyOTk0MDQ1Njg0MDE3OTkxNDU0Njg0MzY0MjA3NjAxMTAxNDg4NjI4NzcyOTc2MDMzMzI3OTAwOTY3NTcyNjA5Njc3MzUyNDgwMjM1OTk3MjA1MDg5NTk4Mjk4MzQxOTY3Nzg0MDQyMjg2MjQ4NjMzNDA5NTI1NDY1MDgyODA2NzU2NjY2Mjg3MzY5MDk4NzgxNjg5NDgyOTA3MjA4MzI1NTU0NjgwODQzNzk5ODk0ODI2MjMzMTk4NTI4MzkzNTA1MzA4OTY1Mzc3NzMyNjI4ODQ2MTYzMzY2MjIyMjg3Njk4MjE5ODg2NzQ2NTQzNjY3NDc0NDA0MjQzMjc0MzY1MTU1MDQ4OTM0MzE0OTM5MzkxNDc5NjE5NDA0NDAwMjIyMTA1MTAxNzE0MTc0ODAwMzY4ODA4NDAxMjY0NzA4MDY4NTU2Nzc0MzIxNjIyODM1NTIyMDExNDgwNDY2MzcxNTY1OTEyMTM3MzQ1MDc0Nzg1Njk0NzY4MzQ2MzYxNjc5MjEwMTgwNjQ0NTA3MDY0ODAwMDI3NzUwMjY4NDkxNjc0NjU1MDU4Njg1NjkzNTY3MzQyMDY3MDU4MTEzNjQyOTIyNDU1NDQwNTc1ODkyNTcyNDIwODI0MTMxNDY5NTY4OTAxNjc1ODk0MDI1Njc3NjMxMTM1NjkxOTI5MjAzMzM3NjU4NzE0MTY2MDIzMDEwNTcwMzA4OTYzNDU3MjA3NTQ0MDM3MDg0NzQ2OTk0MDE2ODI2OTI4MjgwODQ4MTE4NDI4OTMxNDg0ODUyNDk0ODY0NDg3MTkyNzgwOTY3NjI3MTI3NTc3NTM5NzAyNzY2ODYwNTk1MjQ5NjcxNjY3NDE4MzQ4NTcwNDQyMjUwNzE5Nzk2NTAwNDcxNDk1MTA1MDQ5MjIxNDc3NjU2NzYzNjkzODY2Mjk3Njk3OTUyMjExMDcxODI2NDU0OTczNDc3MjY2MjQyNTcwOTQyOTMyMjU4Mjc5ODUwMjU4NTUwOTc4NTI2NTM4MzIwNzYwNjcyNjMxNzE2NDMwOTUwNTk5NTA4NzgwNzUyMzcxMDMzMzEwMTE5Nzg1NzU0NzMzMTU0MTQyMTgwODQyNzU0Mzg2MzU5MTc3ODExNzA1NDMwOTgyNzQ4MjM4NTA0NTY0ODAxOTA5NTYxMDI5OTI5MTgyNDMxODIzNzUyNTM1NzcwOTc1MDUzOTU2NTE4NzY5NzUxMDM3NDk3MDg4ODY5MjE4MDIwNTE4OTMzOTUwNzIzODUzOTIwNTE0NDYzNDE5NzI2NTI4NzI4Njk2NTExMDg2MjU3MTQ5MjE5ODg0OTk3ODc0ODg3Mzc3MTM0NTY4NjIwOTE2NzA1OFwiLHJlPVwiMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1MDI4ODQxOTcxNjkzOTkzNzUxMDU4MjA5NzQ5NDQ1OTIzMDc4MTY0MDYyODYyMDg5OTg2MjgwMzQ4MjUzNDIxMTcwNjc5ODIxNDgwODY1MTMyODIzMDY2NDcwOTM4NDQ2MDk1NTA1ODIyMzE3MjUzNTk0MDgxMjg0ODExMTc0NTAyODQxMDI3MDE5Mzg1MjExMDU1NTk2NDQ2MjI5NDg5NTQ5MzAzODE5NjQ0Mjg4MTA5NzU2NjU5MzM0NDYxMjg0NzU2NDgyMzM3ODY3ODMxNjUyNzEyMDE5MDkxNDU2NDg1NjY5MjM0NjAzNDg2MTA0NTQzMjY2NDgyMTMzOTM2MDcyNjAyNDkxNDEyNzM3MjQ1ODcwMDY2MDYzMTU1ODgxNzQ4ODE1MjA5MjA5NjI4MjkyNTQwOTE3MTUzNjQzNjc4OTI1OTAzNjAwMTEzMzA1MzA1NDg4MjA0NjY1MjEzODQxNDY5NTE5NDE1MTE2MDk0MzMwNTcyNzAzNjU3NTk1OTE5NTMwOTIxODYxMTczODE5MzI2MTE3OTMxMDUxMTg1NDgwNzQ0NjIzNzk5NjI3NDk1NjczNTE4ODU3NTI3MjQ4OTEyMjc5MzgxODMwMTE5NDkxMjk4MzM2NzMzNjI0NDA2NTY2NDMwODYwMjEzOTQ5NDYzOTUyMjQ3MzcxOTA3MDIxNzk4NjA5NDM3MDI3NzA1MzkyMTcxNzYyOTMxNzY3NTIzODQ2NzQ4MTg0Njc2Njk0MDUxMzIwMDA1NjgxMjcxNDUyNjM1NjA4Mjc3ODU3NzEzNDI3NTc3ODk2MDkxNzM2MzcxNzg3MjE0Njg0NDA5MDEyMjQ5NTM0MzAxNDY1NDk1ODUzNzEwNTA3OTIyNzk2ODkyNTg5MjM1NDIwMTk5NTYxMTIxMjkwMjE5NjA4NjQwMzQ0MTgxNTk4MTM2Mjk3NzQ3NzEzMDk5NjA1MTg3MDcyMTEzNDk5OTk5OTgzNzI5NzgwNDk5NTEwNTk3MzE3MzI4MTYwOTYzMTg1OTUwMjQ0NTk0NTUzNDY5MDgzMDI2NDI1MjIzMDgyNTMzNDQ2ODUwMzUyNjE5MzExODgxNzEwMTAwMDMxMzc4Mzg3NTI4ODY1ODc1MzMyMDgzODE0MjA2MTcxNzc2NjkxNDczMDM1OTgyNTM0OTA0Mjg3NTU0Njg3MzExNTk1NjI4NjM4ODIzNTM3ODc1OTM3NTE5NTc3ODE4NTc3ODA1MzIxNzEyMjY4MDY2MTMwMDE5Mjc4NzY2MTExOTU5MDkyMTY0MjAxOTg5MzgwOTUyNTcyMDEwNjU0ODU4NjMyNzg5XCIsTmU9e3ByZWNpc2lvbjoyMCxyb3VuZGluZzo0LG1vZHVsbzoxLHRvRXhwTmVnOi03LHRvRXhwUG9zOjIxLG1pbkU6LUgsbWF4RTpILGNyeXB0bzohMX0sVGUsWix3PSEwLG9lPVwiW0RlY2ltYWxFcnJvcl0gXCIsVj1vZStcIkludmFsaWQgYXJndW1lbnQ6IFwiLExlPW9lK1wiUHJlY2lzaW9uIGxpbWl0IGV4Y2VlZGVkXCIsRGU9b2UrXCJjcnlwdG8gdW5hdmFpbGFibGVcIixGZT1cIltvYmplY3QgRGVjaW1hbF1cIixiPU1hdGguZmxvb3IsQz1NYXRoLnBvdyx5ZT0vXjBiKFswMV0rKFxcLlswMV0qKT98XFwuWzAxXSspKHBbKy1dP1xcZCspPyQvaSxlbj0vXjB4KFswLTlhLWZdKyhcXC5bMC05YS1mXSopP3xcXC5bMC05YS1mXSspKHBbKy1dP1xcZCspPyQvaSxubj0vXjBvKFswLTddKyhcXC5bMC03XSopP3xcXC5bMC03XSspKHBbKy1dP1xcZCspPyQvaSxJZT0vXihcXGQrKFxcLlxcZCopP3xcXC5cXGQrKShlWystXT9cXGQrKT8kL2ksRD0xZTcsbT03LHRuPTkwMDcxOTkyNTQ3NDA5OTEscm49dGUubGVuZ3RoLTEsdmU9cmUubGVuZ3RoLTEsaD17dG9TdHJpbmdUYWc6RmV9O2guYWJzb2x1dGVWYWx1ZT1oLmFicz1mdW5jdGlvbigpe3ZhciBlPW5ldyB0aGlzLmNvbnN0cnVjdG9yKHRoaXMpO3JldHVybiBlLnM8MCYmKGUucz0xKSxwKGUpfTtoLmNlaWw9ZnVuY3Rpb24oKXtyZXR1cm4gcChuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKSx0aGlzLmUrMSwyKX07aC5jbGFtcGVkVG89aC5jbGFtcD1mdW5jdGlvbihlLG4pe3ZhciBpLHQ9dGhpcyxyPXQuY29uc3RydWN0b3I7aWYoZT1uZXcgcihlKSxuPW5ldyByKG4pLCFlLnN8fCFuLnMpcmV0dXJuIG5ldyByKE5hTik7aWYoZS5ndChuKSl0aHJvdyBFcnJvcihWK24pO3JldHVybiBpPXQuY21wKGUpLGk8MD9lOnQuY21wKG4pPjA/bjpuZXcgcih0KX07aC5jb21wYXJlZFRvPWguY21wPWZ1bmN0aW9uKGUpe3ZhciBuLGksdCxyLHM9dGhpcyxvPXMuZCx1PShlPW5ldyBzLmNvbnN0cnVjdG9yKGUpKS5kLGw9cy5zLGY9ZS5zO2lmKCFvfHwhdSlyZXR1cm4hbHx8IWY/TmFOOmwhPT1mP2w6bz09PXU/MDohb15sPDA/MTotMTtpZighb1swXXx8IXVbMF0pcmV0dXJuIG9bMF0/bDp1WzBdPy1mOjA7aWYobCE9PWYpcmV0dXJuIGw7aWYocy5lIT09ZS5lKXJldHVybiBzLmU+ZS5lXmw8MD8xOi0xO2Zvcih0PW8ubGVuZ3RoLHI9dS5sZW5ndGgsbj0wLGk9dDxyP3Q6cjtuPGk7KytuKWlmKG9bbl0hPT11W25dKXJldHVybiBvW25dPnVbbl1ebDwwPzE6LTE7cmV0dXJuIHQ9PT1yPzA6dD5yXmw8MD8xOi0xfTtoLmNvc2luZT1oLmNvcz1mdW5jdGlvbigpe3ZhciBlLG4saT10aGlzLHQ9aS5jb25zdHJ1Y3RvcjtyZXR1cm4gaS5kP2kuZFswXT8oZT10LnByZWNpc2lvbixuPXQucm91bmRpbmcsdC5wcmVjaXNpb249ZStNYXRoLm1heChpLmUsaS5zZCgpKSttLHQucm91bmRpbmc9MSxpPXNuKHQsJGUodCxpKSksdC5wcmVjaXNpb249ZSx0LnJvdW5kaW5nPW4scChaPT0yfHxaPT0zP2kubmVnKCk6aSxlLG4sITApKTpuZXcgdCgxKTpuZXcgdChOYU4pfTtoLmN1YmVSb290PWguY2JydD1mdW5jdGlvbigpe3ZhciBlLG4saSx0LHIscyxvLHUsbCxmLGM9dGhpcyxhPWMuY29uc3RydWN0b3I7aWYoIWMuaXNGaW5pdGUoKXx8Yy5pc1plcm8oKSlyZXR1cm4gbmV3IGEoYyk7Zm9yKHc9ITEscz1jLnMqQyhjLnMqYywxLzMpLCFzfHxNYXRoLmFicyhzKT09MS8wPyhpPU8oYy5kKSxlPWMuZSwocz0oZS1pLmxlbmd0aCsxKSUzKSYmKGkrPXM9PTF8fHM9PS0yP1wiMFwiOlwiMDBcIikscz1DKGksMS8zKSxlPWIoKGUrMSkvMyktKGUlMz09KGU8MD8tMToyKSkscz09MS8wP2k9XCI1ZVwiK2U6KGk9cy50b0V4cG9uZW50aWFsKCksaT1pLnNsaWNlKDAsaS5pbmRleE9mKFwiZVwiKSsxKStlKSx0PW5ldyBhKGkpLHQucz1jLnMpOnQ9bmV3IGEocy50b1N0cmluZygpKSxvPShlPWEucHJlY2lzaW9uKSszOzspaWYodT10LGw9dS50aW1lcyh1KS50aW1lcyh1KSxmPWwucGx1cyhjKSx0PVMoZi5wbHVzKGMpLnRpbWVzKHUpLGYucGx1cyhsKSxvKzIsMSksTyh1LmQpLnNsaWNlKDAsbyk9PT0oaT1PKHQuZCkpLnNsaWNlKDAsbykpaWYoaT1pLnNsaWNlKG8tMyxvKzEpLGk9PVwiOTk5OVwifHwhciYmaT09XCI0OTk5XCIpe2lmKCFyJiYocCh1LGUrMSwwKSx1LnRpbWVzKHUpLnRpbWVzKHUpLmVxKGMpKSl7dD11O2JyZWFrfW8rPTQscj0xfWVsc2V7KCEraXx8IStpLnNsaWNlKDEpJiZpLmNoYXJBdCgwKT09XCI1XCIpJiYocCh0LGUrMSwxKSxuPSF0LnRpbWVzKHQpLnRpbWVzKHQpLmVxKGMpKTticmVha31yZXR1cm4gdz0hMCxwKHQsZSxhLnJvdW5kaW5nLG4pfTtoLmRlY2ltYWxQbGFjZXM9aC5kcD1mdW5jdGlvbigpe3ZhciBlLG49dGhpcy5kLGk9TmFOO2lmKG4pe2lmKGU9bi5sZW5ndGgtMSxpPShlLWIodGhpcy5lL20pKSptLGU9bltlXSxlKWZvcig7ZSUxMD09MDtlLz0xMClpLS07aTwwJiYoaT0wKX1yZXR1cm4gaX07aC5kaXZpZGVkQnk9aC5kaXY9ZnVuY3Rpb24oZSl7cmV0dXJuIFModGhpcyxuZXcgdGhpcy5jb25zdHJ1Y3RvcihlKSl9O2guZGl2aWRlZFRvSW50ZWdlckJ5PWguZGl2VG9JbnQ9ZnVuY3Rpb24oZSl7dmFyIG49dGhpcyxpPW4uY29uc3RydWN0b3I7cmV0dXJuIHAoUyhuLG5ldyBpKGUpLDAsMSwxKSxpLnByZWNpc2lvbixpLnJvdW5kaW5nKX07aC5lcXVhbHM9aC5lcT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5jbXAoZSk9PT0wfTtoLmZsb29yPWZ1bmN0aW9uKCl7cmV0dXJuIHAobmV3IHRoaXMuY29uc3RydWN0b3IodGhpcyksdGhpcy5lKzEsMyl9O2guZ3JlYXRlclRoYW49aC5ndD1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5jbXAoZSk+MH07aC5ncmVhdGVyVGhhbk9yRXF1YWxUbz1oLmd0ZT1mdW5jdGlvbihlKXt2YXIgbj10aGlzLmNtcChlKTtyZXR1cm4gbj09MXx8bj09PTB9O2guaHlwZXJib2xpY0Nvc2luZT1oLmNvc2g9ZnVuY3Rpb24oKXt2YXIgZSxuLGksdCxyLHM9dGhpcyxvPXMuY29uc3RydWN0b3IsdT1uZXcgbygxKTtpZighcy5pc0Zpbml0ZSgpKXJldHVybiBuZXcgbyhzLnM/MS8wOk5hTik7aWYocy5pc1plcm8oKSlyZXR1cm4gdTtpPW8ucHJlY2lzaW9uLHQ9by5yb3VuZGluZyxvLnByZWNpc2lvbj1pK01hdGgubWF4KHMuZSxzLnNkKCkpKzQsby5yb3VuZGluZz0xLHI9cy5kLmxlbmd0aCxyPDMyPyhlPU1hdGguY2VpbChyLzMpLG49KDEvZmUoNCxlKSkudG9TdHJpbmcoKSk6KGU9MTYsbj1cIjIuMzI4MzA2NDM2NTM4Njk2Mjg5MDYyNWUtMTBcIikscz1qKG8sMSxzLnRpbWVzKG4pLG5ldyBvKDEpLCEwKTtmb3IodmFyIGwsZj1lLGM9bmV3IG8oOCk7Zi0tOylsPXMudGltZXMocykscz11Lm1pbnVzKGwudGltZXMoYy5taW51cyhsLnRpbWVzKGMpKSkpO3JldHVybiBwKHMsby5wcmVjaXNpb249aSxvLnJvdW5kaW5nPXQsITApfTtoLmh5cGVyYm9saWNTaW5lPWguc2luaD1mdW5jdGlvbigpe3ZhciBlLG4saSx0LHI9dGhpcyxzPXIuY29uc3RydWN0b3I7aWYoIXIuaXNGaW5pdGUoKXx8ci5pc1plcm8oKSlyZXR1cm4gbmV3IHMocik7aWYobj1zLnByZWNpc2lvbixpPXMucm91bmRpbmcscy5wcmVjaXNpb249bitNYXRoLm1heChyLmUsci5zZCgpKSs0LHMucm91bmRpbmc9MSx0PXIuZC5sZW5ndGgsdDwzKXI9aihzLDIscixyLCEwKTtlbHNle2U9MS40Kk1hdGguc3FydCh0KSxlPWU+MTY/MTY6ZXwwLHI9ci50aW1lcygxL2ZlKDUsZSkpLHI9aihzLDIscixyLCEwKTtmb3IodmFyIG8sdT1uZXcgcyg1KSxsPW5ldyBzKDE2KSxmPW5ldyBzKDIwKTtlLS07KW89ci50aW1lcyhyKSxyPXIudGltZXModS5wbHVzKG8udGltZXMobC50aW1lcyhvKS5wbHVzKGYpKSkpfXJldHVybiBzLnByZWNpc2lvbj1uLHMucm91bmRpbmc9aSxwKHIsbixpLCEwKX07aC5oeXBlcmJvbGljVGFuZ2VudD1oLnRhbmg9ZnVuY3Rpb24oKXt2YXIgZSxuLGk9dGhpcyx0PWkuY29uc3RydWN0b3I7cmV0dXJuIGkuaXNGaW5pdGUoKT9pLmlzWmVybygpP25ldyB0KGkpOihlPXQucHJlY2lzaW9uLG49dC5yb3VuZGluZyx0LnByZWNpc2lvbj1lKzcsdC5yb3VuZGluZz0xLFMoaS5zaW5oKCksaS5jb3NoKCksdC5wcmVjaXNpb249ZSx0LnJvdW5kaW5nPW4pKTpuZXcgdChpLnMpfTtoLmludmVyc2VDb3NpbmU9aC5hY29zPWZ1bmN0aW9uKCl7dmFyIGUsbj10aGlzLGk9bi5jb25zdHJ1Y3Rvcix0PW4uYWJzKCkuY21wKDEpLHI9aS5wcmVjaXNpb24scz1pLnJvdW5kaW5nO3JldHVybiB0IT09LTE/dD09PTA/bi5pc05lZygpP0woaSxyLHMpOm5ldyBpKDApOm5ldyBpKE5hTik6bi5pc1plcm8oKT9MKGkscis0LHMpLnRpbWVzKC41KTooaS5wcmVjaXNpb249cis2LGkucm91bmRpbmc9MSxuPW4uYXNpbigpLGU9TChpLHIrNCxzKS50aW1lcyguNSksaS5wcmVjaXNpb249cixpLnJvdW5kaW5nPXMsZS5taW51cyhuKSl9O2guaW52ZXJzZUh5cGVyYm9saWNDb3NpbmU9aC5hY29zaD1mdW5jdGlvbigpe3ZhciBlLG4saT10aGlzLHQ9aS5jb25zdHJ1Y3RvcjtyZXR1cm4gaS5sdGUoMSk/bmV3IHQoaS5lcSgxKT8wOk5hTik6aS5pc0Zpbml0ZSgpPyhlPXQucHJlY2lzaW9uLG49dC5yb3VuZGluZyx0LnByZWNpc2lvbj1lK01hdGgubWF4KE1hdGguYWJzKGkuZSksaS5zZCgpKSs0LHQucm91bmRpbmc9MSx3PSExLGk9aS50aW1lcyhpKS5taW51cygxKS5zcXJ0KCkucGx1cyhpKSx3PSEwLHQucHJlY2lzaW9uPWUsdC5yb3VuZGluZz1uLGkubG4oKSk6bmV3IHQoaSl9O2guaW52ZXJzZUh5cGVyYm9saWNTaW5lPWguYXNpbmg9ZnVuY3Rpb24oKXt2YXIgZSxuLGk9dGhpcyx0PWkuY29uc3RydWN0b3I7cmV0dXJuIWkuaXNGaW5pdGUoKXx8aS5pc1plcm8oKT9uZXcgdChpKTooZT10LnByZWNpc2lvbixuPXQucm91bmRpbmcsdC5wcmVjaXNpb249ZSsyKk1hdGgubWF4KE1hdGguYWJzKGkuZSksaS5zZCgpKSs2LHQucm91bmRpbmc9MSx3PSExLGk9aS50aW1lcyhpKS5wbHVzKDEpLnNxcnQoKS5wbHVzKGkpLHc9ITAsdC5wcmVjaXNpb249ZSx0LnJvdW5kaW5nPW4saS5sbigpKX07aC5pbnZlcnNlSHlwZXJib2xpY1RhbmdlbnQ9aC5hdGFuaD1mdW5jdGlvbigpe3ZhciBlLG4saSx0LHI9dGhpcyxzPXIuY29uc3RydWN0b3I7cmV0dXJuIHIuaXNGaW5pdGUoKT9yLmU+PTA/bmV3IHMoci5hYnMoKS5lcSgxKT9yLnMvMDpyLmlzWmVybygpP3I6TmFOKTooZT1zLnByZWNpc2lvbixuPXMucm91bmRpbmcsdD1yLnNkKCksTWF0aC5tYXgodCxlKTwyKi1yLmUtMT9wKG5ldyBzKHIpLGUsbiwhMCk6KHMucHJlY2lzaW9uPWk9dC1yLmUscj1TKHIucGx1cygxKSxuZXcgcygxKS5taW51cyhyKSxpK2UsMSkscy5wcmVjaXNpb249ZSs0LHMucm91bmRpbmc9MSxyPXIubG4oKSxzLnByZWNpc2lvbj1lLHMucm91bmRpbmc9bixyLnRpbWVzKC41KSkpOm5ldyBzKE5hTil9O2guaW52ZXJzZVNpbmU9aC5hc2luPWZ1bmN0aW9uKCl7dmFyIGUsbixpLHQscj10aGlzLHM9ci5jb25zdHJ1Y3RvcjtyZXR1cm4gci5pc1plcm8oKT9uZXcgcyhyKToobj1yLmFicygpLmNtcCgxKSxpPXMucHJlY2lzaW9uLHQ9cy5yb3VuZGluZyxuIT09LTE/bj09PTA/KGU9TChzLGkrNCx0KS50aW1lcyguNSksZS5zPXIucyxlKTpuZXcgcyhOYU4pOihzLnByZWNpc2lvbj1pKzYscy5yb3VuZGluZz0xLHI9ci5kaXYobmV3IHMoMSkubWludXMoci50aW1lcyhyKSkuc3FydCgpLnBsdXMoMSkpLmF0YW4oKSxzLnByZWNpc2lvbj1pLHMucm91bmRpbmc9dCxyLnRpbWVzKDIpKSl9O2guaW52ZXJzZVRhbmdlbnQ9aC5hdGFuPWZ1bmN0aW9uKCl7dmFyIGUsbixpLHQscixzLG8sdSxsLGY9dGhpcyxjPWYuY29uc3RydWN0b3IsYT1jLnByZWNpc2lvbixkPWMucm91bmRpbmc7aWYoZi5pc0Zpbml0ZSgpKXtpZihmLmlzWmVybygpKXJldHVybiBuZXcgYyhmKTtpZihmLmFicygpLmVxKDEpJiZhKzQ8PXZlKXJldHVybiBvPUwoYyxhKzQsZCkudGltZXMoLjI1KSxvLnM9Zi5zLG99ZWxzZXtpZighZi5zKXJldHVybiBuZXcgYyhOYU4pO2lmKGErNDw9dmUpcmV0dXJuIG89TChjLGErNCxkKS50aW1lcyguNSksby5zPWYucyxvfWZvcihjLnByZWNpc2lvbj11PWErMTAsYy5yb3VuZGluZz0xLGk9TWF0aC5taW4oMjgsdS9tKzJ8MCksZT1pO2U7LS1lKWY9Zi5kaXYoZi50aW1lcyhmKS5wbHVzKDEpLnNxcnQoKS5wbHVzKDEpKTtmb3Iodz0hMSxuPU1hdGguY2VpbCh1L20pLHQ9MSxsPWYudGltZXMoZiksbz1uZXcgYyhmKSxyPWY7ZSE9PS0xOylpZihyPXIudGltZXMobCkscz1vLm1pbnVzKHIuZGl2KHQrPTIpKSxyPXIudGltZXMobCksbz1zLnBsdXMoci5kaXYodCs9MikpLG8uZFtuXSE9PXZvaWQgMClmb3IoZT1uO28uZFtlXT09PXMuZFtlXSYmZS0tOyk7cmV0dXJuIGkmJihvPW8udGltZXMoMjw8aS0xKSksdz0hMCxwKG8sYy5wcmVjaXNpb249YSxjLnJvdW5kaW5nPWQsITApfTtoLmlzRmluaXRlPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmR9O2guaXNJbnRlZ2VyPWguaXNJbnQ9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuZCYmYih0aGlzLmUvbSk+dGhpcy5kLmxlbmd0aC0yfTtoLmlzTmFOPWZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuc307aC5pc05lZ2F0aXZlPWguaXNOZWc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zPDB9O2guaXNQb3NpdGl2ZT1oLmlzUG9zPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucz4wfTtoLmlzWmVybz1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5kJiZ0aGlzLmRbMF09PT0wfTtoLmxlc3NUaGFuPWgubHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY21wKGUpPDB9O2gubGVzc1RoYW5PckVxdWFsVG89aC5sdGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY21wKGUpPDF9O2gubG9nYXJpdGhtPWgubG9nPWZ1bmN0aW9uKGUpe3ZhciBuLGksdCxyLHMsbyx1LGwsZj10aGlzLGM9Zi5jb25zdHJ1Y3RvcixhPWMucHJlY2lzaW9uLGQ9Yy5yb3VuZGluZyxnPTU7aWYoZT09bnVsbCllPW5ldyBjKDEwKSxuPSEwO2Vsc2V7aWYoZT1uZXcgYyhlKSxpPWUuZCxlLnM8MHx8IWl8fCFpWzBdfHxlLmVxKDEpKXJldHVybiBuZXcgYyhOYU4pO249ZS5lcSgxMCl9aWYoaT1mLmQsZi5zPDB8fCFpfHwhaVswXXx8Zi5lcSgxKSlyZXR1cm4gbmV3IGMoaSYmIWlbMF0/LTEvMDpmLnMhPTE/TmFOOmk/MDoxLzApO2lmKG4paWYoaS5sZW5ndGg+MSlzPSEwO2Vsc2V7Zm9yKHI9aVswXTtyJTEwPT09MDspci89MTA7cz1yIT09MX1pZih3PSExLHU9YStnLG89QihmLHUpLHQ9bj9zZShjLHUrMTApOkIoZSx1KSxsPVMobyx0LHUsMSkseChsLmQscj1hLGQpKWRvIGlmKHUrPTEwLG89QihmLHUpLHQ9bj9zZShjLHUrMTApOkIoZSx1KSxsPVMobyx0LHUsMSksIXMpeytPKGwuZCkuc2xpY2UocisxLHIrMTUpKzE9PTFlMTQmJihsPXAobCxhKzEsMCkpO2JyZWFrfXdoaWxlKHgobC5kLHIrPTEwLGQpKTtyZXR1cm4gdz0hMCxwKGwsYSxkKX07aC5taW51cz1oLnN1Yj1mdW5jdGlvbihlKXt2YXIgbixpLHQscixzLG8sdSxsLGYsYyxhLGQsZz10aGlzLHY9Zy5jb25zdHJ1Y3RvcjtpZihlPW5ldyB2KGUpLCFnLmR8fCFlLmQpcmV0dXJuIWcuc3x8IWUucz9lPW5ldyB2KE5hTik6Zy5kP2Uucz0tZS5zOmU9bmV3IHYoZS5kfHxnLnMhPT1lLnM/ZzpOYU4pLGU7aWYoZy5zIT1lLnMpcmV0dXJuIGUucz0tZS5zLGcucGx1cyhlKTtpZihmPWcuZCxkPWUuZCx1PXYucHJlY2lzaW9uLGw9di5yb3VuZGluZywhZlswXXx8IWRbMF0pe2lmKGRbMF0pZS5zPS1lLnM7ZWxzZSBpZihmWzBdKWU9bmV3IHYoZyk7ZWxzZSByZXR1cm4gbmV3IHYobD09PTM/LTA6MCk7cmV0dXJuIHc/cChlLHUsbCk6ZX1pZihpPWIoZS5lL20pLGM9YihnLmUvbSksZj1mLnNsaWNlKCkscz1jLWkscyl7Zm9yKGE9czwwLGE/KG49ZixzPS1zLG89ZC5sZW5ndGgpOihuPWQsaT1jLG89Zi5sZW5ndGgpLHQ9TWF0aC5tYXgoTWF0aC5jZWlsKHUvbSksbykrMixzPnQmJihzPXQsbi5sZW5ndGg9MSksbi5yZXZlcnNlKCksdD1zO3QtLTspbi5wdXNoKDApO24ucmV2ZXJzZSgpfWVsc2V7Zm9yKHQ9Zi5sZW5ndGgsbz1kLmxlbmd0aCxhPXQ8byxhJiYobz10KSx0PTA7dDxvO3QrKylpZihmW3RdIT1kW3RdKXthPWZbdF08ZFt0XTticmVha31zPTB9Zm9yKGEmJihuPWYsZj1kLGQ9bixlLnM9LWUucyksbz1mLmxlbmd0aCx0PWQubGVuZ3RoLW87dD4wOy0tdClmW28rK109MDtmb3IodD1kLmxlbmd0aDt0PnM7KXtpZihmWy0tdF08ZFt0XSl7Zm9yKHI9dDtyJiZmWy0tcl09PT0wOylmW3JdPUQtMTstLWZbcl0sZlt0XSs9RH1mW3RdLT1kW3RdfWZvcig7ZlstLW9dPT09MDspZi5wb3AoKTtmb3IoO2ZbMF09PT0wO2Yuc2hpZnQoKSktLWk7cmV0dXJuIGZbMF0/KGUuZD1mLGUuZT11ZShmLGkpLHc/cChlLHUsbCk6ZSk6bmV3IHYobD09PTM/LTA6MCl9O2gubW9kdWxvPWgubW9kPWZ1bmN0aW9uKGUpe3ZhciBuLGk9dGhpcyx0PWkuY29uc3RydWN0b3I7cmV0dXJuIGU9bmV3IHQoZSksIWkuZHx8IWUuc3x8ZS5kJiYhZS5kWzBdP25ldyB0KE5hTik6IWUuZHx8aS5kJiYhaS5kWzBdP3AobmV3IHQoaSksdC5wcmVjaXNpb24sdC5yb3VuZGluZyk6KHc9ITEsdC5tb2R1bG89PTk/KG49UyhpLGUuYWJzKCksMCwzLDEpLG4ucyo9ZS5zKTpuPVMoaSxlLDAsdC5tb2R1bG8sMSksbj1uLnRpbWVzKGUpLHc9ITAsaS5taW51cyhuKSl9O2gubmF0dXJhbEV4cG9uZW50aWFsPWguZXhwPWZ1bmN0aW9uKCl7cmV0dXJuIEVlKHRoaXMpfTtoLm5hdHVyYWxMb2dhcml0aG09aC5sbj1mdW5jdGlvbigpe3JldHVybiBCKHRoaXMpfTtoLm5lZ2F0ZWQ9aC5uZWc9ZnVuY3Rpb24oKXt2YXIgZT1uZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKTtyZXR1cm4gZS5zPS1lLnMscChlKX07aC5wbHVzPWguYWRkPWZ1bmN0aW9uKGUpe3ZhciBuLGksdCxyLHMsbyx1LGwsZixjLGE9dGhpcyxkPWEuY29uc3RydWN0b3I7aWYoZT1uZXcgZChlKSwhYS5kfHwhZS5kKXJldHVybiFhLnN8fCFlLnM/ZT1uZXcgZChOYU4pOmEuZHx8KGU9bmV3IGQoZS5kfHxhLnM9PT1lLnM/YTpOYU4pKSxlO2lmKGEucyE9ZS5zKXJldHVybiBlLnM9LWUucyxhLm1pbnVzKGUpO2lmKGY9YS5kLGM9ZS5kLHU9ZC5wcmVjaXNpb24sbD1kLnJvdW5kaW5nLCFmWzBdfHwhY1swXSlyZXR1cm4gY1swXXx8KGU9bmV3IGQoYSkpLHc/cChlLHUsbCk6ZTtpZihzPWIoYS5lL20pLHQ9YihlLmUvbSksZj1mLnNsaWNlKCkscj1zLXQscil7Zm9yKHI8MD8oaT1mLHI9LXIsbz1jLmxlbmd0aCk6KGk9Yyx0PXMsbz1mLmxlbmd0aCkscz1NYXRoLmNlaWwodS9tKSxvPXM+bz9zKzE6bysxLHI+byYmKHI9byxpLmxlbmd0aD0xKSxpLnJldmVyc2UoKTtyLS07KWkucHVzaCgwKTtpLnJldmVyc2UoKX1mb3Iobz1mLmxlbmd0aCxyPWMubGVuZ3RoLG8tcjwwJiYocj1vLGk9YyxjPWYsZj1pKSxuPTA7cjspbj0oZlstLXJdPWZbcl0rY1tyXStuKS9EfDAsZltyXSU9RDtmb3IobiYmKGYudW5zaGlmdChuKSwrK3QpLG89Zi5sZW5ndGg7ZlstLW9dPT0wOylmLnBvcCgpO3JldHVybiBlLmQ9ZixlLmU9dWUoZix0KSx3P3AoZSx1LGwpOmV9O2gucHJlY2lzaW9uPWguc2Q9ZnVuY3Rpb24oZSl7dmFyIG4saT10aGlzO2lmKGUhPT12b2lkIDAmJmUhPT0hIWUmJmUhPT0xJiZlIT09MCl0aHJvdyBFcnJvcihWK2UpO3JldHVybiBpLmQ/KG49WmUoaS5kKSxlJiZpLmUrMT5uJiYobj1pLmUrMSkpOm49TmFOLG59O2gucm91bmQ9ZnVuY3Rpb24oKXt2YXIgZT10aGlzLG49ZS5jb25zdHJ1Y3RvcjtyZXR1cm4gcChuZXcgbihlKSxlLmUrMSxuLnJvdW5kaW5nKX07aC5zaW5lPWguc2luPWZ1bmN0aW9uKCl7dmFyIGUsbixpPXRoaXMsdD1pLmNvbnN0cnVjdG9yO3JldHVybiBpLmlzRmluaXRlKCk/aS5pc1plcm8oKT9uZXcgdChpKTooZT10LnByZWNpc2lvbixuPXQucm91bmRpbmcsdC5wcmVjaXNpb249ZStNYXRoLm1heChpLmUsaS5zZCgpKSttLHQucm91bmRpbmc9MSxpPXVuKHQsJGUodCxpKSksdC5wcmVjaXNpb249ZSx0LnJvdW5kaW5nPW4scChaPjI/aS5uZWcoKTppLGUsbiwhMCkpOm5ldyB0KE5hTil9O2guc3F1YXJlUm9vdD1oLnNxcnQ9ZnVuY3Rpb24oKXt2YXIgZSxuLGksdCxyLHMsbz10aGlzLHU9by5kLGw9by5lLGY9by5zLGM9by5jb25zdHJ1Y3RvcjtpZihmIT09MXx8IXV8fCF1WzBdKXJldHVybiBuZXcgYyghZnx8ZjwwJiYoIXV8fHVbMF0pP05hTjp1P286MS8wKTtmb3Iodz0hMSxmPU1hdGguc3FydCgrbyksZj09MHx8Zj09MS8wPyhuPU8odSksKG4ubGVuZ3RoK2wpJTI9PTAmJihuKz1cIjBcIiksZj1NYXRoLnNxcnQobiksbD1iKChsKzEpLzIpLShsPDB8fGwlMiksZj09MS8wP249XCI1ZVwiK2w6KG49Zi50b0V4cG9uZW50aWFsKCksbj1uLnNsaWNlKDAsbi5pbmRleE9mKFwiZVwiKSsxKStsKSx0PW5ldyBjKG4pKTp0PW5ldyBjKGYudG9TdHJpbmcoKSksaT0obD1jLnByZWNpc2lvbikrMzs7KWlmKHM9dCx0PXMucGx1cyhTKG8scyxpKzIsMSkpLnRpbWVzKC41KSxPKHMuZCkuc2xpY2UoMCxpKT09PShuPU8odC5kKSkuc2xpY2UoMCxpKSlpZihuPW4uc2xpY2UoaS0zLGkrMSksbj09XCI5OTk5XCJ8fCFyJiZuPT1cIjQ5OTlcIil7aWYoIXImJihwKHMsbCsxLDApLHMudGltZXMocykuZXEobykpKXt0PXM7YnJlYWt9aSs9NCxyPTF9ZWxzZXsoIStufHwhK24uc2xpY2UoMSkmJm4uY2hhckF0KDApPT1cIjVcIikmJihwKHQsbCsxLDEpLGU9IXQudGltZXModCkuZXEobykpO2JyZWFrfXJldHVybiB3PSEwLHAodCxsLGMucm91bmRpbmcsZSl9O2gudGFuZ2VudD1oLnRhbj1mdW5jdGlvbigpe3ZhciBlLG4saT10aGlzLHQ9aS5jb25zdHJ1Y3RvcjtyZXR1cm4gaS5pc0Zpbml0ZSgpP2kuaXNaZXJvKCk/bmV3IHQoaSk6KGU9dC5wcmVjaXNpb24sbj10LnJvdW5kaW5nLHQucHJlY2lzaW9uPWUrMTAsdC5yb3VuZGluZz0xLGk9aS5zaW4oKSxpLnM9MSxpPVMoaSxuZXcgdCgxKS5taW51cyhpLnRpbWVzKGkpKS5zcXJ0KCksZSsxMCwwKSx0LnByZWNpc2lvbj1lLHQucm91bmRpbmc9bixwKFo9PTJ8fFo9PTQ/aS5uZWcoKTppLGUsbiwhMCkpOm5ldyB0KE5hTil9O2gudGltZXM9aC5tdWw9ZnVuY3Rpb24oZSl7dmFyIG4saSx0LHIscyxvLHUsbCxmLGM9dGhpcyxhPWMuY29uc3RydWN0b3IsZD1jLmQsZz0oZT1uZXcgYShlKSkuZDtpZihlLnMqPWMucywhZHx8IWRbMF18fCFnfHwhZ1swXSlyZXR1cm4gbmV3IGEoIWUuc3x8ZCYmIWRbMF0mJiFnfHxnJiYhZ1swXSYmIWQ/TmFOOiFkfHwhZz9lLnMvMDplLnMqMCk7Zm9yKGk9YihjLmUvbSkrYihlLmUvbSksbD1kLmxlbmd0aCxmPWcubGVuZ3RoLGw8ZiYmKHM9ZCxkPWcsZz1zLG89bCxsPWYsZj1vKSxzPVtdLG89bCtmLHQ9bzt0LS07KXMucHVzaCgwKTtmb3IodD1mOy0tdD49MDspe2ZvcihuPTAscj1sK3Q7cj50Oyl1PXNbcl0rZ1t0XSpkW3ItdC0xXStuLHNbci0tXT11JUR8MCxuPXUvRHwwO3Nbcl09KHNbcl0rbiklRHwwfWZvcig7IXNbLS1vXTspcy5wb3AoKTtyZXR1cm4gbj8rK2k6cy5zaGlmdCgpLGUuZD1zLGUuZT11ZShzLGkpLHc/cChlLGEucHJlY2lzaW9uLGEucm91bmRpbmcpOmV9O2gudG9CaW5hcnk9ZnVuY3Rpb24oZSxuKXtyZXR1cm4ga2UodGhpcywyLGUsbil9O2gudG9EZWNpbWFsUGxhY2VzPWgudG9EUD1mdW5jdGlvbihlLG4pe3ZhciBpPXRoaXMsdD1pLmNvbnN0cnVjdG9yO3JldHVybiBpPW5ldyB0KGkpLGU9PT12b2lkIDA/aTooXyhlLDAsJCksbj09PXZvaWQgMD9uPXQucm91bmRpbmc6XyhuLDAsOCkscChpLGUraS5lKzEsbikpfTtoLnRvRXhwb25lbnRpYWw9ZnVuY3Rpb24oZSxuKXt2YXIgaSx0PXRoaXMscj10LmNvbnN0cnVjdG9yO3JldHVybiBlPT09dm9pZCAwP2k9Rih0LCEwKTooXyhlLDAsJCksbj09PXZvaWQgMD9uPXIucm91bmRpbmc6XyhuLDAsOCksdD1wKG5ldyByKHQpLGUrMSxuKSxpPUYodCwhMCxlKzEpKSx0LmlzTmVnKCkmJiF0LmlzWmVybygpP1wiLVwiK2k6aX07aC50b0ZpeGVkPWZ1bmN0aW9uKGUsbil7dmFyIGksdCxyPXRoaXMscz1yLmNvbnN0cnVjdG9yO3JldHVybiBlPT09dm9pZCAwP2k9RihyKTooXyhlLDAsJCksbj09PXZvaWQgMD9uPXMucm91bmRpbmc6XyhuLDAsOCksdD1wKG5ldyBzKHIpLGUrci5lKzEsbiksaT1GKHQsITEsZSt0LmUrMSkpLHIuaXNOZWcoKSYmIXIuaXNaZXJvKCk/XCItXCIraTppfTtoLnRvRnJhY3Rpb249ZnVuY3Rpb24oZSl7dmFyIG4saSx0LHIscyxvLHUsbCxmLGMsYSxkLGc9dGhpcyx2PWcuZCxOPWcuY29uc3RydWN0b3I7aWYoIXYpcmV0dXJuIG5ldyBOKGcpO2lmKGY9aT1uZXcgTigxKSx0PWw9bmV3IE4oMCksbj1uZXcgTih0KSxzPW4uZT1aZSh2KS1nLmUtMSxvPXMlbSxuLmRbMF09QygxMCxvPDA/bStvOm8pLGU9PW51bGwpZT1zPjA/bjpmO2Vsc2V7aWYodT1uZXcgTihlKSwhdS5pc0ludCgpfHx1Lmx0KGYpKXRocm93IEVycm9yKFYrdSk7ZT11Lmd0KG4pP3M+MD9uOmY6dX1mb3Iodz0hMSx1PW5ldyBOKE8odikpLGM9Ti5wcmVjaXNpb24sTi5wcmVjaXNpb249cz12Lmxlbmd0aCptKjI7YT1TKHUsbiwwLDEsMSkscj1pLnBsdXMoYS50aW1lcyh0KSksci5jbXAoZSkhPTE7KWk9dCx0PXIscj1mLGY9bC5wbHVzKGEudGltZXMocikpLGw9cixyPW4sbj11Lm1pbnVzKGEudGltZXMocikpLHU9cjtyZXR1cm4gcj1TKGUubWludXMoaSksdCwwLDEsMSksbD1sLnBsdXMoci50aW1lcyhmKSksaT1pLnBsdXMoci50aW1lcyh0KSksbC5zPWYucz1nLnMsZD1TKGYsdCxzLDEpLm1pbnVzKGcpLmFicygpLmNtcChTKGwsaSxzLDEpLm1pbnVzKGcpLmFicygpKTwxP1tmLHRdOltsLGldLE4ucHJlY2lzaW9uPWMsdz0hMCxkfTtoLnRvSGV4YWRlY2ltYWw9aC50b0hleD1mdW5jdGlvbihlLG4pe3JldHVybiBrZSh0aGlzLDE2LGUsbil9O2gudG9OZWFyZXN0PWZ1bmN0aW9uKGUsbil7dmFyIGk9dGhpcyx0PWkuY29uc3RydWN0b3I7aWYoaT1uZXcgdChpKSxlPT1udWxsKXtpZighaS5kKXJldHVybiBpO2U9bmV3IHQoMSksbj10LnJvdW5kaW5nfWVsc2V7aWYoZT1uZXcgdChlKSxuPT09dm9pZCAwP249dC5yb3VuZGluZzpfKG4sMCw4KSwhaS5kKXJldHVybiBlLnM/aTplO2lmKCFlLmQpcmV0dXJuIGUucyYmKGUucz1pLnMpLGV9cmV0dXJuIGUuZFswXT8odz0hMSxpPVMoaSxlLDAsbiwxKS50aW1lcyhlKSx3PSEwLHAoaSkpOihlLnM9aS5zLGk9ZSksaX07aC50b051bWJlcj1mdW5jdGlvbigpe3JldHVybit0aGlzfTtoLnRvT2N0YWw9ZnVuY3Rpb24oZSxuKXtyZXR1cm4ga2UodGhpcyw4LGUsbil9O2gudG9Qb3dlcj1oLnBvdz1mdW5jdGlvbihlKXt2YXIgbixpLHQscixzLG8sdT10aGlzLGw9dS5jb25zdHJ1Y3RvcixmPSsoZT1uZXcgbChlKSk7aWYoIXUuZHx8IWUuZHx8IXUuZFswXXx8IWUuZFswXSlyZXR1cm4gbmV3IGwoQygrdSxmKSk7aWYodT1uZXcgbCh1KSx1LmVxKDEpKXJldHVybiB1O2lmKHQ9bC5wcmVjaXNpb24scz1sLnJvdW5kaW5nLGUuZXEoMSkpcmV0dXJuIHAodSx0LHMpO2lmKG49YihlLmUvbSksbj49ZS5kLmxlbmd0aC0xJiYoaT1mPDA/LWY6Zik8PXRuKXJldHVybiByPVVlKGwsdSxpLHQpLGUuczwwP25ldyBsKDEpLmRpdihyKTpwKHIsdCxzKTtpZihvPXUucyxvPDApe2lmKG48ZS5kLmxlbmd0aC0xKXJldHVybiBuZXcgbChOYU4pO2lmKGUuZFtuXSYxfHwobz0xKSx1LmU9PTAmJnUuZFswXT09MSYmdS5kLmxlbmd0aD09MSlyZXR1cm4gdS5zPW8sdX1yZXR1cm4gaT1DKCt1LGYpLG49aT09MHx8IWlzRmluaXRlKGkpP2IoZiooTWF0aC5sb2coXCIwLlwiK08odS5kKSkvTWF0aC5MTjEwK3UuZSsxKSk6bmV3IGwoaStcIlwiKS5lLG4+bC5tYXhFKzF8fG48bC5taW5FLTE/bmV3IGwobj4wP28vMDowKToodz0hMSxsLnJvdW5kaW5nPXUucz0xLGk9TWF0aC5taW4oMTIsKG4rXCJcIikubGVuZ3RoKSxyPUVlKGUudGltZXMoQih1LHQraSkpLHQpLHIuZCYmKHI9cChyLHQrNSwxKSx4KHIuZCx0LHMpJiYobj10KzEwLHI9cChFZShlLnRpbWVzKEIodSxuK2kpKSxuKSxuKzUsMSksK08oci5kKS5zbGljZSh0KzEsdCsxNSkrMT09MWUxNCYmKHI9cChyLHQrMSwwKSkpKSxyLnM9byx3PSEwLGwucm91bmRpbmc9cyxwKHIsdCxzKSl9O2gudG9QcmVjaXNpb249ZnVuY3Rpb24oZSxuKXt2YXIgaSx0PXRoaXMscj10LmNvbnN0cnVjdG9yO3JldHVybiBlPT09dm9pZCAwP2k9Rih0LHQuZTw9ci50b0V4cE5lZ3x8dC5lPj1yLnRvRXhwUG9zKTooXyhlLDEsJCksbj09PXZvaWQgMD9uPXIucm91bmRpbmc6XyhuLDAsOCksdD1wKG5ldyByKHQpLGUsbiksaT1GKHQsZTw9dC5lfHx0LmU8PXIudG9FeHBOZWcsZSkpLHQuaXNOZWcoKSYmIXQuaXNaZXJvKCk/XCItXCIraTppfTtoLnRvU2lnbmlmaWNhbnREaWdpdHM9aC50b1NEPWZ1bmN0aW9uKGUsbil7dmFyIGk9dGhpcyx0PWkuY29uc3RydWN0b3I7cmV0dXJuIGU9PT12b2lkIDA/KGU9dC5wcmVjaXNpb24sbj10LnJvdW5kaW5nKTooXyhlLDEsJCksbj09PXZvaWQgMD9uPXQucm91bmRpbmc6XyhuLDAsOCkpLHAobmV3IHQoaSksZSxuKX07aC50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBlPXRoaXMsbj1lLmNvbnN0cnVjdG9yLGk9RihlLGUuZTw9bi50b0V4cE5lZ3x8ZS5lPj1uLnRvRXhwUG9zKTtyZXR1cm4gZS5pc05lZygpJiYhZS5pc1plcm8oKT9cIi1cIitpOml9O2gudHJ1bmNhdGVkPWgudHJ1bmM9ZnVuY3Rpb24oKXtyZXR1cm4gcChuZXcgdGhpcy5jb25zdHJ1Y3Rvcih0aGlzKSx0aGlzLmUrMSwxKX07aC52YWx1ZU9mPWgudG9KU09OPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxuPWUuY29uc3RydWN0b3IsaT1GKGUsZS5lPD1uLnRvRXhwTmVnfHxlLmU+PW4udG9FeHBQb3MpO3JldHVybiBlLmlzTmVnKCk/XCItXCIraTppfTtmdW5jdGlvbiBPKGUpe3ZhciBuLGksdCxyPWUubGVuZ3RoLTEscz1cIlwiLG89ZVswXTtpZihyPjApe2ZvcihzKz1vLG49MTtuPHI7bisrKXQ9ZVtuXStcIlwiLGk9bS10Lmxlbmd0aCxpJiYocys9VShpKSkscys9dDtvPWVbbl0sdD1vK1wiXCIsaT1tLXQubGVuZ3RoLGkmJihzKz1VKGkpKX1lbHNlIGlmKG89PT0wKXJldHVyblwiMFwiO2Zvcig7byUxMD09PTA7KW8vPTEwO3JldHVybiBzK299ZnVuY3Rpb24gXyhlLG4saSl7aWYoZSE9PX5+ZXx8ZTxufHxlPmkpdGhyb3cgRXJyb3IoVitlKX1mdW5jdGlvbiB4KGUsbixpLHQpe3ZhciByLHMsbyx1O2ZvcihzPWVbMF07cz49MTA7cy89MTApLS1uO3JldHVybi0tbjwwPyhuKz1tLHI9MCk6KHI9TWF0aC5jZWlsKChuKzEpL20pLG4lPW0pLHM9QygxMCxtLW4pLHU9ZVtyXSVzfDAsdD09bnVsbD9uPDM/KG49PTA/dT11LzEwMHwwOm49PTEmJih1PXUvMTB8MCksbz1pPDQmJnU9PTk5OTk5fHxpPjMmJnU9PTQ5OTk5fHx1PT01ZTR8fHU9PTApOm89KGk8NCYmdSsxPT1zfHxpPjMmJnUrMT09cy8yKSYmKGVbcisxXS9zLzEwMHwwKT09QygxMCxuLTIpLTF8fCh1PT1zLzJ8fHU9PTApJiYoZVtyKzFdL3MvMTAwfDApPT0wOm48ND8obj09MD91PXUvMWUzfDA6bj09MT91PXUvMTAwfDA6bj09MiYmKHU9dS8xMHwwKSxvPSh0fHxpPDQpJiZ1PT05OTk5fHwhdCYmaT4zJiZ1PT00OTk5KTpvPSgodHx8aTw0KSYmdSsxPT1zfHwhdCYmaT4zJiZ1KzE9PXMvMikmJihlW3IrMV0vcy8xZTN8MCk9PUMoMTAsbi0zKS0xLG99ZnVuY3Rpb24gaWUoZSxuLGkpe2Zvcih2YXIgdCxyPVswXSxzLG89MCx1PWUubGVuZ3RoO288dTspe2ZvcihzPXIubGVuZ3RoO3MtLTspcltzXSo9bjtmb3IoclswXSs9d2UuaW5kZXhPZihlLmNoYXJBdChvKyspKSx0PTA7dDxyLmxlbmd0aDt0Kyspclt0XT5pLTEmJihyW3QrMV09PT12b2lkIDAmJihyW3QrMV09MCksclt0KzFdKz1yW3RdL2l8MCxyW3RdJT1pKX1yZXR1cm4gci5yZXZlcnNlKCl9ZnVuY3Rpb24gc24oZSxuKXt2YXIgaSx0LHI7aWYobi5pc1plcm8oKSlyZXR1cm4gbjt0PW4uZC5sZW5ndGgsdDwzMj8oaT1NYXRoLmNlaWwodC8zKSxyPSgxL2ZlKDQsaSkpLnRvU3RyaW5nKCkpOihpPTE2LHI9XCIyLjMyODMwNjQzNjUzODY5NjI4OTA2MjVlLTEwXCIpLGUucHJlY2lzaW9uKz1pLG49aihlLDEsbi50aW1lcyhyKSxuZXcgZSgxKSk7Zm9yKHZhciBzPWk7cy0tOyl7dmFyIG89bi50aW1lcyhuKTtuPW8udGltZXMobykubWludXMobykudGltZXMoOCkucGx1cygxKX1yZXR1cm4gZS5wcmVjaXNpb24tPWksbn12YXIgUz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLHMpe3ZhciBvLHU9MCxsPXQubGVuZ3RoO2Zvcih0PXQuc2xpY2UoKTtsLS07KW89dFtsXSpyK3UsdFtsXT1vJXN8MCx1PW8vc3wwO3JldHVybiB1JiZ0LnVuc2hpZnQodSksdH1mdW5jdGlvbiBuKHQscixzLG8pe3ZhciB1LGw7aWYocyE9bylsPXM+bz8xOi0xO2Vsc2UgZm9yKHU9bD0wO3U8czt1KyspaWYodFt1XSE9clt1XSl7bD10W3VdPnJbdV0/MTotMTticmVha31yZXR1cm4gbH1mdW5jdGlvbiBpKHQscixzLG8pe2Zvcih2YXIgdT0wO3MtLTspdFtzXS09dSx1PXRbc108cltzXT8xOjAsdFtzXT11Km8rdFtzXS1yW3NdO2Zvcig7IXRbMF0mJnQubGVuZ3RoPjE7KXQuc2hpZnQoKX1yZXR1cm4gZnVuY3Rpb24odCxyLHMsbyx1LGwpe3ZhciBmLGMsYSxkLGcsdixOLEEsTSxxLEUsUCxZLEksbGUseixXLGNlLFQseSxlZT10LmNvbnN0cnVjdG9yLGFlPXQucz09ci5zPzE6LTEsUj10LmQsaz1yLmQ7aWYoIVJ8fCFSWzBdfHwha3x8IWtbMF0pcmV0dXJuIG5ldyBlZSghdC5zfHwhci5zfHwoUj9rJiZSWzBdPT1rWzBdOiFrKT9OYU46UiYmUlswXT09MHx8IWs/YWUqMDphZS8wKTtmb3IobD8oZz0xLGM9dC5lLXIuZSk6KGw9RCxnPW0sYz1iKHQuZS9nKS1iKHIuZS9nKSksVD1rLmxlbmd0aCxXPVIubGVuZ3RoLE09bmV3IGVlKGFlKSxxPU0uZD1bXSxhPTA7a1thXT09KFJbYV18fDApO2ErKyk7aWYoa1thXT4oUlthXXx8MCkmJmMtLSxzPT1udWxsPyhJPXM9ZWUucHJlY2lzaW9uLG89ZWUucm91bmRpbmcpOnU/ST1zKyh0LmUtci5lKSsxOkk9cyxJPDApcS5wdXNoKDEpLHY9ITA7ZWxzZXtpZihJPUkvZysyfDAsYT0wLFQ9PTEpe2ZvcihkPTAsaz1rWzBdLEkrKzsoYTxXfHxkKSYmSS0tO2ErKylsZT1kKmwrKFJbYV18fDApLHFbYV09bGUva3wwLGQ9bGUla3wwO3Y9ZHx8YTxXfWVsc2V7Zm9yKGQ9bC8oa1swXSsxKXwwLGQ+MSYmKGs9ZShrLGQsbCksUj1lKFIsZCxsKSxUPWsubGVuZ3RoLFc9Ui5sZW5ndGgpLHo9VCxFPVIuc2xpY2UoMCxUKSxQPUUubGVuZ3RoO1A8VDspRVtQKytdPTA7eT1rLnNsaWNlKCkseS51bnNoaWZ0KDApLGNlPWtbMF0sa1sxXT49bC8yJiYrK2NlO2RvIGQ9MCxmPW4oayxFLFQsUCksZjwwPyhZPUVbMF0sVCE9UCYmKFk9WSpsKyhFWzFdfHwwKSksZD1ZL2NlfDAsZD4xPyhkPj1sJiYoZD1sLTEpLE49ZShrLGQsbCksQT1OLmxlbmd0aCxQPUUubGVuZ3RoLGY9bihOLEUsQSxQKSxmPT0xJiYoZC0tLGkoTixUPEE/eTprLEEsbCkpKTooZD09MCYmKGY9ZD0xKSxOPWsuc2xpY2UoKSksQT1OLmxlbmd0aCxBPFAmJk4udW5zaGlmdCgwKSxpKEUsTixQLGwpLGY9PS0xJiYoUD1FLmxlbmd0aCxmPW4oayxFLFQsUCksZjwxJiYoZCsrLGkoRSxUPFA/eTprLFAsbCkpKSxQPUUubGVuZ3RoKTpmPT09MCYmKGQrKyxFPVswXSkscVthKytdPWQsZiYmRVswXT9FW1ArK109Ult6XXx8MDooRT1bUlt6XV0sUD0xKTt3aGlsZSgoeisrPFd8fEVbMF0hPT12b2lkIDApJiZJLS0pO3Y9RVswXSE9PXZvaWQgMH1xWzBdfHxxLnNoaWZ0KCl9aWYoZz09MSlNLmU9YyxUZT12O2Vsc2V7Zm9yKGE9MSxkPXFbMF07ZD49MTA7ZC89MTApYSsrO00uZT1hK2MqZy0xLHAoTSx1P3MrTS5lKzE6cyxvLHYpfXJldHVybiBNfX0oKTtmdW5jdGlvbiBwKGUsbixpLHQpe3ZhciByLHMsbyx1LGwsZixjLGEsZCxnPWUuY29uc3RydWN0b3I7ZTppZihuIT1udWxsKXtpZihhPWUuZCwhYSlyZXR1cm4gZTtmb3Iocj0xLHU9YVswXTt1Pj0xMDt1Lz0xMClyKys7aWYocz1uLXIsczwwKXMrPW0sbz1uLGM9YVtkPTBdLGw9Yy9DKDEwLHItby0xKSUxMHwwO2Vsc2UgaWYoZD1NYXRoLmNlaWwoKHMrMSkvbSksdT1hLmxlbmd0aCxkPj11KWlmKHQpe2Zvcig7dSsrPD1kOylhLnB1c2goMCk7Yz1sPTAscj0xLHMlPW0sbz1zLW0rMX1lbHNlIGJyZWFrIGU7ZWxzZXtmb3IoYz11PWFbZF0scj0xO3U+PTEwO3UvPTEwKXIrKztzJT1tLG89cy1tK3IsbD1vPDA/MDpjL0MoMTAsci1vLTEpJTEwfDB9aWYodD10fHxuPDB8fGFbZCsxXSE9PXZvaWQgMHx8KG88MD9jOmMlQygxMCxyLW8tMSkpLGY9aTw0PyhsfHx0KSYmKGk9PTB8fGk9PShlLnM8MD8zOjIpKTpsPjV8fGw9PTUmJihpPT00fHx0fHxpPT02JiYocz4wP28+MD9jL0MoMTAsci1vKTowOmFbZC0xXSklMTAmMXx8aT09KGUuczwwPzg6NykpLG48MXx8IWFbMF0pcmV0dXJuIGEubGVuZ3RoPTAsZj8obi09ZS5lKzEsYVswXT1DKDEwLChtLW4lbSklbSksZS5lPS1ufHwwKTphWzBdPWUuZT0wLGU7aWYocz09MD8oYS5sZW5ndGg9ZCx1PTEsZC0tKTooYS5sZW5ndGg9ZCsxLHU9QygxMCxtLXMpLGFbZF09bz4wPyhjL0MoMTAsci1vKSVDKDEwLG8pfDApKnU6MCksZilmb3IoOzspaWYoZD09MCl7Zm9yKHM9MSxvPWFbMF07bz49MTA7by89MTApcysrO2ZvcihvPWFbMF0rPXUsdT0xO28+PTEwO28vPTEwKXUrKztzIT11JiYoZS5lKyssYVswXT09RCYmKGFbMF09MSkpO2JyZWFrfWVsc2V7aWYoYVtkXSs9dSxhW2RdIT1EKWJyZWFrO2FbZC0tXT0wLHU9MX1mb3Iocz1hLmxlbmd0aDthWy0tc109PT0wOylhLnBvcCgpfXJldHVybiB3JiYoZS5lPmcubWF4RT8oZS5kPW51bGwsZS5lPU5hTik6ZS5lPGcubWluRSYmKGUuZT0wLGUuZD1bMF0pKSxlfWZ1bmN0aW9uIEYoZSxuLGkpe2lmKCFlLmlzRmluaXRlKCkpcmV0dXJuIFZlKGUpO3ZhciB0LHI9ZS5lLHM9TyhlLmQpLG89cy5sZW5ndGg7cmV0dXJuIG4/KGkmJih0PWktbyk+MD9zPXMuY2hhckF0KDApK1wiLlwiK3Muc2xpY2UoMSkrVSh0KTpvPjEmJihzPXMuY2hhckF0KDApK1wiLlwiK3Muc2xpY2UoMSkpLHM9cysoZS5lPDA/XCJlXCI6XCJlK1wiKStlLmUpOnI8MD8ocz1cIjAuXCIrVSgtci0xKStzLGkmJih0PWktbyk+MCYmKHMrPVUodCkpKTpyPj1vPyhzKz1VKHIrMS1vKSxpJiYodD1pLXItMSk+MCYmKHM9cytcIi5cIitVKHQpKSk6KCh0PXIrMSk8byYmKHM9cy5zbGljZSgwLHQpK1wiLlwiK3Muc2xpY2UodCkpLGkmJih0PWktbyk+MCYmKHIrMT09PW8mJihzKz1cIi5cIikscys9VSh0KSkpLHN9ZnVuY3Rpb24gdWUoZSxuKXt2YXIgaT1lWzBdO2ZvcihuKj1tO2k+PTEwO2kvPTEwKW4rKztyZXR1cm4gbn1mdW5jdGlvbiBzZShlLG4saSl7aWYobj5ybil0aHJvdyB3PSEwLGkmJihlLnByZWNpc2lvbj1pKSxFcnJvcihMZSk7cmV0dXJuIHAobmV3IGUodGUpLG4sMSwhMCl9ZnVuY3Rpb24gTChlLG4saSl7aWYobj52ZSl0aHJvdyBFcnJvcihMZSk7cmV0dXJuIHAobmV3IGUocmUpLG4saSwhMCl9ZnVuY3Rpb24gWmUoZSl7dmFyIG49ZS5sZW5ndGgtMSxpPW4qbSsxO2lmKG49ZVtuXSxuKXtmb3IoO24lMTA9PTA7bi89MTApaS0tO2ZvcihuPWVbMF07bj49MTA7bi89MTApaSsrfXJldHVybiBpfWZ1bmN0aW9uIFUoZSl7Zm9yKHZhciBuPVwiXCI7ZS0tOyluKz1cIjBcIjtyZXR1cm4gbn1mdW5jdGlvbiBVZShlLG4saSx0KXt2YXIgcixzPW5ldyBlKDEpLG89TWF0aC5jZWlsKHQvbSs0KTtmb3Iodz0hMTs7KXtpZihpJTImJihzPXMudGltZXMobiksX2Uocy5kLG8pJiYocj0hMCkpLGk9YihpLzIpLGk9PT0wKXtpPXMuZC5sZW5ndGgtMSxyJiZzLmRbaV09PT0wJiYrK3MuZFtpXTticmVha31uPW4udGltZXMobiksX2Uobi5kLG8pfXJldHVybiB3PSEwLHN9ZnVuY3Rpb24gQWUoZSl7cmV0dXJuIGUuZFtlLmQubGVuZ3RoLTFdJjF9ZnVuY3Rpb24gQmUoZSxuLGkpe2Zvcih2YXIgdCxyPW5ldyBlKG5bMF0pLHM9MDsrK3M8bi5sZW5ndGg7KWlmKHQ9bmV3IGUobltzXSksdC5zKXJbaV0odCkmJihyPXQpO2Vsc2V7cj10O2JyZWFrfXJldHVybiByfWZ1bmN0aW9uIEVlKGUsbil7dmFyIGksdCxyLHMsbyx1LGwsZj0wLGM9MCxhPTAsZD1lLmNvbnN0cnVjdG9yLGc9ZC5yb3VuZGluZyx2PWQucHJlY2lzaW9uO2lmKCFlLmR8fCFlLmRbMF18fGUuZT4xNylyZXR1cm4gbmV3IGQoZS5kP2UuZFswXT9lLnM8MD8wOjEvMDoxOmUucz9lLnM8MD8wOmU6TmFOKTtmb3Iobj09bnVsbD8odz0hMSxsPXYpOmw9bix1PW5ldyBkKC4wMzEyNSk7ZS5lPi0yOyllPWUudGltZXModSksYSs9NTtmb3IodD1NYXRoLmxvZyhDKDIsYSkpL01hdGguTE4xMCoyKzV8MCxsKz10LGk9cz1vPW5ldyBkKDEpLGQucHJlY2lzaW9uPWw7Oyl7aWYocz1wKHMudGltZXMoZSksbCwxKSxpPWkudGltZXMoKytjKSx1PW8ucGx1cyhTKHMsaSxsLDEpKSxPKHUuZCkuc2xpY2UoMCxsKT09PU8oby5kKS5zbGljZSgwLGwpKXtmb3Iocj1hO3ItLTspbz1wKG8udGltZXMobyksbCwxKTtpZihuPT1udWxsKWlmKGY8MyYmeChvLmQsbC10LGcsZikpZC5wcmVjaXNpb249bCs9MTAsaT1zPXU9bmV3IGQoMSksYz0wLGYrKztlbHNlIHJldHVybiBwKG8sZC5wcmVjaXNpb249dixnLHc9ITApO2Vsc2UgcmV0dXJuIGQucHJlY2lzaW9uPXYsb31vPXV9fWZ1bmN0aW9uIEIoZSxuKXt2YXIgaSx0LHIscyxvLHUsbCxmLGMsYSxkLGc9MSx2PTEwLE49ZSxBPU4uZCxNPU4uY29uc3RydWN0b3IscT1NLnJvdW5kaW5nLEU9TS5wcmVjaXNpb247aWYoTi5zPDB8fCFBfHwhQVswXXx8IU4uZSYmQVswXT09MSYmQS5sZW5ndGg9PTEpcmV0dXJuIG5ldyBNKEEmJiFBWzBdPy0xLzA6Ti5zIT0xP05hTjpBPzA6Tik7aWYobj09bnVsbD8odz0hMSxjPUUpOmM9bixNLnByZWNpc2lvbj1jKz12LGk9TyhBKSx0PWkuY2hhckF0KDApLE1hdGguYWJzKHM9Ti5lKTwxNWUxNCl7Zm9yKDt0PDcmJnQhPTF8fHQ9PTEmJmkuY2hhckF0KDEpPjM7KU49Ti50aW1lcyhlKSxpPU8oTi5kKSx0PWkuY2hhckF0KDApLGcrKztzPU4uZSx0PjE/KE49bmV3IE0oXCIwLlwiK2kpLHMrKyk6Tj1uZXcgTSh0K1wiLlwiK2kuc2xpY2UoMSkpfWVsc2UgcmV0dXJuIGY9c2UoTSxjKzIsRSkudGltZXMocytcIlwiKSxOPUIobmV3IE0odCtcIi5cIitpLnNsaWNlKDEpKSxjLXYpLnBsdXMoZiksTS5wcmVjaXNpb249RSxuPT1udWxsP3AoTixFLHEsdz0hMCk6Tjtmb3IoYT1OLGw9bz1OPVMoTi5taW51cygxKSxOLnBsdXMoMSksYywxKSxkPXAoTi50aW1lcyhOKSxjLDEpLHI9Mzs7KXtpZihvPXAoby50aW1lcyhkKSxjLDEpLGY9bC5wbHVzKFMobyxuZXcgTShyKSxjLDEpKSxPKGYuZCkuc2xpY2UoMCxjKT09PU8obC5kKS5zbGljZSgwLGMpKWlmKGw9bC50aW1lcygyKSxzIT09MCYmKGw9bC5wbHVzKHNlKE0sYysyLEUpLnRpbWVzKHMrXCJcIikpKSxsPVMobCxuZXcgTShnKSxjLDEpLG49PW51bGwpaWYoeChsLmQsYy12LHEsdSkpTS5wcmVjaXNpb249Yys9dixmPW89Tj1TKGEubWludXMoMSksYS5wbHVzKDEpLGMsMSksZD1wKE4udGltZXMoTiksYywxKSxyPXU9MTtlbHNlIHJldHVybiBwKGwsTS5wcmVjaXNpb249RSxxLHc9ITApO2Vsc2UgcmV0dXJuIE0ucHJlY2lzaW9uPUUsbDtsPWYscis9Mn19ZnVuY3Rpb24gVmUoZSl7cmV0dXJuIFN0cmluZyhlLnMqZS5zLzApfWZ1bmN0aW9uIFNlKGUsbil7dmFyIGksdCxyO2ZvcigoaT1uLmluZGV4T2YoXCIuXCIpKT4tMSYmKG49bi5yZXBsYWNlKFwiLlwiLFwiXCIpKSwodD1uLnNlYXJjaCgvZS9pKSk+MD8oaTwwJiYoaT10KSxpKz0rbi5zbGljZSh0KzEpLG49bi5zdWJzdHJpbmcoMCx0KSk6aTwwJiYoaT1uLmxlbmd0aCksdD0wO24uY2hhckNvZGVBdCh0KT09PTQ4O3QrKyk7Zm9yKHI9bi5sZW5ndGg7bi5jaGFyQ29kZUF0KHItMSk9PT00ODstLXIpO2lmKG49bi5zbGljZSh0LHIpLG4pe2lmKHItPXQsZS5lPWk9aS10LTEsZS5kPVtdLHQ9KGkrMSklbSxpPDAmJih0Kz1tKSx0PHIpe2Zvcih0JiZlLmQucHVzaCgrbi5zbGljZSgwLHQpKSxyLT1tO3Q8cjspZS5kLnB1c2goK24uc2xpY2UodCx0Kz1tKSk7bj1uLnNsaWNlKHQpLHQ9bS1uLmxlbmd0aH1lbHNlIHQtPXI7Zm9yKDt0LS07KW4rPVwiMFwiO2UuZC5wdXNoKCtuKSx3JiYoZS5lPmUuY29uc3RydWN0b3IubWF4RT8oZS5kPW51bGwsZS5lPU5hTik6ZS5lPGUuY29uc3RydWN0b3IubWluRSYmKGUuZT0wLGUuZD1bMF0pKX1lbHNlIGUuZT0wLGUuZD1bMF07cmV0dXJuIGV9ZnVuY3Rpb24gb24oZSxuKXt2YXIgaSx0LHIscyxvLHUsbCxmLGM7aWYobi5pbmRleE9mKFwiX1wiKT4tMSl7aWYobj1uLnJlcGxhY2UoLyhcXGQpXyg/PVxcZCkvZyxcIiQxXCIpLEllLnRlc3QobikpcmV0dXJuIFNlKGUsbil9ZWxzZSBpZihuPT09XCJJbmZpbml0eVwifHxuPT09XCJOYU5cIilyZXR1cm4rbnx8KGUucz1OYU4pLGUuZT1OYU4sZS5kPW51bGwsZTtpZihlbi50ZXN0KG4pKWk9MTYsbj1uLnRvTG93ZXJDYXNlKCk7ZWxzZSBpZih5ZS50ZXN0KG4pKWk9MjtlbHNlIGlmKG5uLnRlc3QobikpaT04O2Vsc2UgdGhyb3cgRXJyb3IoVituKTtmb3Iocz1uLnNlYXJjaCgvcC9pKSxzPjA/KGw9K24uc2xpY2UocysxKSxuPW4uc3Vic3RyaW5nKDIscykpOm49bi5zbGljZSgyKSxzPW4uaW5kZXhPZihcIi5cIiksbz1zPj0wLHQ9ZS5jb25zdHJ1Y3RvcixvJiYobj1uLnJlcGxhY2UoXCIuXCIsXCJcIiksdT1uLmxlbmd0aCxzPXUtcyxyPVVlKHQsbmV3IHQoaSkscyxzKjIpKSxmPWllKG4saSxEKSxjPWYubGVuZ3RoLTEscz1jO2Zbc109PT0wOy0tcylmLnBvcCgpO3JldHVybiBzPDA/bmV3IHQoZS5zKjApOihlLmU9dWUoZixjKSxlLmQ9Zix3PSExLG8mJihlPVMoZSxyLHUqNCkpLGwmJihlPWUudGltZXMoTWF0aC5hYnMobCk8NTQ/QygyLGwpOlEucG93KDIsbCkpKSx3PSEwLGUpfWZ1bmN0aW9uIHVuKGUsbil7dmFyIGksdD1uLmQubGVuZ3RoO2lmKHQ8MylyZXR1cm4gbi5pc1plcm8oKT9uOmooZSwyLG4sbik7aT0xLjQqTWF0aC5zcXJ0KHQpLGk9aT4xNj8xNjppfDAsbj1uLnRpbWVzKDEvZmUoNSxpKSksbj1qKGUsMixuLG4pO2Zvcih2YXIgcixzPW5ldyBlKDUpLG89bmV3IGUoMTYpLHU9bmV3IGUoMjApO2ktLTspcj1uLnRpbWVzKG4pLG49bi50aW1lcyhzLnBsdXMoci50aW1lcyhvLnRpbWVzKHIpLm1pbnVzKHUpKSkpO3JldHVybiBufWZ1bmN0aW9uIGooZSxuLGksdCxyKXt2YXIgcyxvLHUsbCxmPTEsYz1lLnByZWNpc2lvbixhPU1hdGguY2VpbChjL20pO2Zvcih3PSExLGw9aS50aW1lcyhpKSx1PW5ldyBlKHQpOzspe2lmKG89Uyh1LnRpbWVzKGwpLG5ldyBlKG4rKypuKyspLGMsMSksdT1yP3QucGx1cyhvKTp0Lm1pbnVzKG8pLHQ9UyhvLnRpbWVzKGwpLG5ldyBlKG4rKypuKyspLGMsMSksbz11LnBsdXModCksby5kW2FdIT09dm9pZCAwKXtmb3Iocz1hO28uZFtzXT09PXUuZFtzXSYmcy0tOyk7aWYocz09LTEpYnJlYWt9cz11LHU9dCx0PW8sbz1zLGYrK31yZXR1cm4gdz0hMCxvLmQubGVuZ3RoPWErMSxvfWZ1bmN0aW9uIGZlKGUsbil7Zm9yKHZhciBpPWU7LS1uOylpKj1lO3JldHVybiBpfWZ1bmN0aW9uICRlKGUsbil7dmFyIGksdD1uLnM8MCxyPUwoZSxlLnByZWNpc2lvbiwxKSxzPXIudGltZXMoLjUpO2lmKG49bi5hYnMoKSxuLmx0ZShzKSlyZXR1cm4gWj10PzQ6MSxuO2lmKGk9bi5kaXZUb0ludChyKSxpLmlzWmVybygpKVo9dD8zOjI7ZWxzZXtpZihuPW4ubWludXMoaS50aW1lcyhyKSksbi5sdGUocykpcmV0dXJuIFo9QWUoaSk/dD8yOjM6dD80OjEsbjtaPUFlKGkpP3Q/MTo0OnQ/MzoyfXJldHVybiBuLm1pbnVzKHIpLmFicygpfWZ1bmN0aW9uIGtlKGUsbixpLHQpe3ZhciByLHMsbyx1LGwsZixjLGEsZCxnPWUuY29uc3RydWN0b3Isdj1pIT09dm9pZCAwO2lmKHY/KF8oaSwxLCQpLHQ9PT12b2lkIDA/dD1nLnJvdW5kaW5nOl8odCwwLDgpKTooaT1nLnByZWNpc2lvbix0PWcucm91bmRpbmcpLCFlLmlzRmluaXRlKCkpYz1WZShlKTtlbHNle2ZvcihjPUYoZSksbz1jLmluZGV4T2YoXCIuXCIpLHY/KHI9MixuPT0xNj9pPWkqNC0zOm49PTgmJihpPWkqMy0yKSk6cj1uLG8+PTAmJihjPWMucmVwbGFjZShcIi5cIixcIlwiKSxkPW5ldyBnKDEpLGQuZT1jLmxlbmd0aC1vLGQuZD1pZShGKGQpLDEwLHIpLGQuZT1kLmQubGVuZ3RoKSxhPWllKGMsMTAscikscz1sPWEubGVuZ3RoO2FbLS1sXT09MDspYS5wb3AoKTtpZighYVswXSljPXY/XCIwcCswXCI6XCIwXCI7ZWxzZXtpZihvPDA/cy0tOihlPW5ldyBnKGUpLGUuZD1hLGUuZT1zLGU9UyhlLGQsaSx0LDAsciksYT1lLmQscz1lLmUsZj1UZSksbz1hW2ldLHU9ci8yLGY9Znx8YVtpKzFdIT09dm9pZCAwLGY9dDw0PyhvIT09dm9pZCAwfHxmKSYmKHQ9PT0wfHx0PT09KGUuczwwPzM6MikpOm8+dXx8bz09PXUmJih0PT09NHx8Znx8dD09PTYmJmFbaS0xXSYxfHx0PT09KGUuczwwPzg6NykpLGEubGVuZ3RoPWksZilmb3IoOysrYVstLWldPnItMTspYVtpXT0wLGl8fCgrK3MsYS51bnNoaWZ0KDEpKTtmb3IobD1hLmxlbmd0aDshYVtsLTFdOy0tbCk7Zm9yKG89MCxjPVwiXCI7bzxsO28rKyljKz13ZS5jaGFyQXQoYVtvXSk7aWYodil7aWYobD4xKWlmKG49PTE2fHxuPT04KXtmb3Iobz1uPT0xNj80OjMsLS1sO2wlbztsKyspYys9XCIwXCI7Zm9yKGE9aWUoYyxyLG4pLGw9YS5sZW5ndGg7IWFbbC0xXTstLWwpO2ZvcihvPTEsYz1cIjEuXCI7bzxsO28rKyljKz13ZS5jaGFyQXQoYVtvXSl9ZWxzZSBjPWMuY2hhckF0KDApK1wiLlwiK2Muc2xpY2UoMSk7Yz1jKyhzPDA/XCJwXCI6XCJwK1wiKStzfWVsc2UgaWYoczwwKXtmb3IoOysrczspYz1cIjBcIitjO2M9XCIwLlwiK2N9ZWxzZSBpZigrK3M+bClmb3Iocy09bDtzLS07KWMrPVwiMFwiO2Vsc2UgczxsJiYoYz1jLnNsaWNlKDAscykrXCIuXCIrYy5zbGljZShzKSl9Yz0obj09MTY/XCIweFwiOm49PTI/XCIwYlwiOm49PTg/XCIwb1wiOlwiXCIpK2N9cmV0dXJuIGUuczwwP1wiLVwiK2M6Y31mdW5jdGlvbiBfZShlLG4pe2lmKGUubGVuZ3RoPm4pcmV0dXJuIGUubGVuZ3RoPW4sITB9ZnVuY3Rpb24gZm4oZSl7cmV0dXJuIG5ldyB0aGlzKGUpLmFicygpfWZ1bmN0aW9uIGxuKGUpe3JldHVybiBuZXcgdGhpcyhlKS5hY29zKCl9ZnVuY3Rpb24gY24oZSl7cmV0dXJuIG5ldyB0aGlzKGUpLmFjb3NoKCl9ZnVuY3Rpb24gYW4oZSxuKXtyZXR1cm4gbmV3IHRoaXMoZSkucGx1cyhuKX1mdW5jdGlvbiBkbihlKXtyZXR1cm4gbmV3IHRoaXMoZSkuYXNpbigpfWZ1bmN0aW9uIGhuKGUpe3JldHVybiBuZXcgdGhpcyhlKS5hc2luaCgpfWZ1bmN0aW9uIHBuKGUpe3JldHVybiBuZXcgdGhpcyhlKS5hdGFuKCl9ZnVuY3Rpb24gZ24oZSl7cmV0dXJuIG5ldyB0aGlzKGUpLmF0YW5oKCl9ZnVuY3Rpb24gbW4oZSxuKXtlPW5ldyB0aGlzKGUpLG49bmV3IHRoaXMobik7dmFyIGksdD10aGlzLnByZWNpc2lvbixyPXRoaXMucm91bmRpbmcscz10KzQ7cmV0dXJuIWUuc3x8IW4ucz9pPW5ldyB0aGlzKE5hTik6IWUuZCYmIW4uZD8oaT1MKHRoaXMscywxKS50aW1lcyhuLnM+MD8uMjU6Ljc1KSxpLnM9ZS5zKTohbi5kfHxlLmlzWmVybygpPyhpPW4uczwwP0wodGhpcyx0LHIpOm5ldyB0aGlzKDApLGkucz1lLnMpOiFlLmR8fG4uaXNaZXJvKCk/KGk9TCh0aGlzLHMsMSkudGltZXMoLjUpLGkucz1lLnMpOm4uczwwPyh0aGlzLnByZWNpc2lvbj1zLHRoaXMucm91bmRpbmc9MSxpPXRoaXMuYXRhbihTKGUsbixzLDEpKSxuPUwodGhpcyxzLDEpLHRoaXMucHJlY2lzaW9uPXQsdGhpcy5yb3VuZGluZz1yLGk9ZS5zPDA/aS5taW51cyhuKTppLnBsdXMobikpOmk9dGhpcy5hdGFuKFMoZSxuLHMsMSkpLGl9ZnVuY3Rpb24gd24oZSl7cmV0dXJuIG5ldyB0aGlzKGUpLmNicnQoKX1mdW5jdGlvbiBObihlKXtyZXR1cm4gcChlPW5ldyB0aGlzKGUpLGUuZSsxLDIpfWZ1bmN0aW9uIHZuKGUsbixpKXtyZXR1cm4gbmV3IHRoaXMoZSkuY2xhbXAobixpKX1mdW5jdGlvbiBFbihlKXtpZighZXx8dHlwZW9mIGUhPVwib2JqZWN0XCIpdGhyb3cgRXJyb3Iob2UrXCJPYmplY3QgZXhwZWN0ZWRcIik7dmFyIG4saSx0LHI9ZS5kZWZhdWx0cz09PSEwLHM9W1wicHJlY2lzaW9uXCIsMSwkLFwicm91bmRpbmdcIiwwLDgsXCJ0b0V4cE5lZ1wiLC1ILDAsXCJ0b0V4cFBvc1wiLDAsSCxcIm1heEVcIiwwLEgsXCJtaW5FXCIsLUgsMCxcIm1vZHVsb1wiLDAsOV07Zm9yKG49MDtuPHMubGVuZ3RoO24rPTMpaWYoaT1zW25dLHImJih0aGlzW2ldPU5lW2ldKSwodD1lW2ldKSE9PXZvaWQgMClpZihiKHQpPT09dCYmdD49c1tuKzFdJiZ0PD1zW24rMl0pdGhpc1tpXT10O2Vsc2UgdGhyb3cgRXJyb3IoVitpK1wiOiBcIit0KTtpZihpPVwiY3J5cHRvXCIsciYmKHRoaXNbaV09TmVbaV0pLCh0PWVbaV0pIT09dm9pZCAwKWlmKHQ9PT0hMHx8dD09PSExfHx0PT09MHx8dD09PTEpaWYodClpZih0eXBlb2YgY3J5cHRvPFwidVwiJiZjcnlwdG8mJihjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzfHxjcnlwdG8ucmFuZG9tQnl0ZXMpKXRoaXNbaV09ITA7ZWxzZSB0aHJvdyBFcnJvcihEZSk7ZWxzZSB0aGlzW2ldPSExO2Vsc2UgdGhyb3cgRXJyb3IoVitpK1wiOiBcIit0KTtyZXR1cm4gdGhpc31mdW5jdGlvbiBTbihlKXtyZXR1cm4gbmV3IHRoaXMoZSkuY29zKCl9ZnVuY3Rpb24ga24oZSl7cmV0dXJuIG5ldyB0aGlzKGUpLmNvc2goKX1mdW5jdGlvbiBIZShlKXt2YXIgbixpLHQ7ZnVuY3Rpb24gcihzKXt2YXIgbyx1LGwsZj10aGlzO2lmKCEoZiBpbnN0YW5jZW9mIHIpKXJldHVybiBuZXcgcihzKTtpZihmLmNvbnN0cnVjdG9yPXIscWUocykpe2Yucz1zLnMsdz8hcy5kfHxzLmU+ci5tYXhFPyhmLmU9TmFOLGYuZD1udWxsKTpzLmU8ci5taW5FPyhmLmU9MCxmLmQ9WzBdKTooZi5lPXMuZSxmLmQ9cy5kLnNsaWNlKCkpOihmLmU9cy5lLGYuZD1zLmQ/cy5kLnNsaWNlKCk6cy5kKTtyZXR1cm59aWYobD10eXBlb2YgcyxsPT09XCJudW1iZXJcIil7aWYocz09PTApe2Yucz0xL3M8MD8tMToxLGYuZT0wLGYuZD1bMF07cmV0dXJufWlmKHM8MD8ocz0tcyxmLnM9LTEpOmYucz0xLHM9PT1+fnMmJnM8MWU3KXtmb3Iobz0wLHU9czt1Pj0xMDt1Lz0xMClvKys7dz9vPnIubWF4RT8oZi5lPU5hTixmLmQ9bnVsbCk6bzxyLm1pbkU/KGYuZT0wLGYuZD1bMF0pOihmLmU9byxmLmQ9W3NdKTooZi5lPW8sZi5kPVtzXSk7cmV0dXJufWVsc2UgaWYocyowIT09MCl7c3x8KGYucz1OYU4pLGYuZT1OYU4sZi5kPW51bGw7cmV0dXJufXJldHVybiBTZShmLHMudG9TdHJpbmcoKSl9ZWxzZSBpZihsIT09XCJzdHJpbmdcIil0aHJvdyBFcnJvcihWK3MpO3JldHVybih1PXMuY2hhckNvZGVBdCgwKSk9PT00NT8ocz1zLnNsaWNlKDEpLGYucz0tMSk6KHU9PT00MyYmKHM9cy5zbGljZSgxKSksZi5zPTEpLEllLnRlc3Qocyk/U2UoZixzKTpvbihmLHMpfWlmKHIucHJvdG90eXBlPWgsci5ST1VORF9VUD0wLHIuUk9VTkRfRE9XTj0xLHIuUk9VTkRfQ0VJTD0yLHIuUk9VTkRfRkxPT1I9MyxyLlJPVU5EX0hBTEZfVVA9NCxyLlJPVU5EX0hBTEZfRE9XTj01LHIuUk9VTkRfSEFMRl9FVkVOPTYsci5ST1VORF9IQUxGX0NFSUw9NyxyLlJPVU5EX0hBTEZfRkxPT1I9OCxyLkVVQ0xJRD05LHIuY29uZmlnPXIuc2V0PUVuLHIuY2xvbmU9SGUsci5pc0RlY2ltYWw9cWUsci5hYnM9Zm4sci5hY29zPWxuLHIuYWNvc2g9Y24sci5hZGQ9YW4sci5hc2luPWRuLHIuYXNpbmg9aG4sci5hdGFuPXBuLHIuYXRhbmg9Z24sci5hdGFuMj1tbixyLmNicnQ9d24sci5jZWlsPU5uLHIuY2xhbXA9dm4sci5jb3M9U24sci5jb3NoPWtuLHIuZGl2PU1uLHIuZXhwPUNuLHIuZmxvb3I9T24sci5oeXBvdD1QbixyLmxuPVJuLHIubG9nPWJuLHIubG9nMTA9X24sci5sb2cyPUFuLHIubWF4PXFuLHIubWluPVRuLHIubW9kPUxuLHIubXVsPURuLHIucG93PUZuLHIucmFuZG9tPUluLHIucm91bmQ9Wm4sci5zaWduPVVuLHIuc2luPUJuLHIuc2luaD1WbixyLnNxcnQ9JG4sci5zdWI9SG4sci5zdW09am4sci50YW49V24sci50YW5oPUduLHIudHJ1bmM9Sm4sZT09PXZvaWQgMCYmKGU9e30pLGUmJmUuZGVmYXVsdHMhPT0hMClmb3IodD1bXCJwcmVjaXNpb25cIixcInJvdW5kaW5nXCIsXCJ0b0V4cE5lZ1wiLFwidG9FeHBQb3NcIixcIm1heEVcIixcIm1pbkVcIixcIm1vZHVsb1wiLFwiY3J5cHRvXCJdLG49MDtuPHQubGVuZ3RoOyllLmhhc093blByb3BlcnR5KGk9dFtuKytdKXx8KGVbaV09dGhpc1tpXSk7cmV0dXJuIHIuY29uZmlnKGUpLHJ9ZnVuY3Rpb24gTW4oZSxuKXtyZXR1cm4gbmV3IHRoaXMoZSkuZGl2KG4pfWZ1bmN0aW9uIENuKGUpe3JldHVybiBuZXcgdGhpcyhlKS5leHAoKX1mdW5jdGlvbiBPbihlKXtyZXR1cm4gcChlPW5ldyB0aGlzKGUpLGUuZSsxLDMpfWZ1bmN0aW9uIFBuKCl7dmFyIGUsbixpPW5ldyB0aGlzKDApO2Zvcih3PSExLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KWlmKG49bmV3IHRoaXMoYXJndW1lbnRzW2UrK10pLG4uZClpLmQmJihpPWkucGx1cyhuLnRpbWVzKG4pKSk7ZWxzZXtpZihuLnMpcmV0dXJuIHc9ITAsbmV3IHRoaXMoMS8wKTtpPW59cmV0dXJuIHc9ITAsaS5zcXJ0KCl9ZnVuY3Rpb24gcWUoZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBRfHxlJiZlLnRvU3RyaW5nVGFnPT09RmV8fCExfWZ1bmN0aW9uIFJuKGUpe3JldHVybiBuZXcgdGhpcyhlKS5sbigpfWZ1bmN0aW9uIGJuKGUsbil7cmV0dXJuIG5ldyB0aGlzKGUpLmxvZyhuKX1mdW5jdGlvbiBBbihlKXtyZXR1cm4gbmV3IHRoaXMoZSkubG9nKDIpfWZ1bmN0aW9uIF9uKGUpe3JldHVybiBuZXcgdGhpcyhlKS5sb2coMTApfWZ1bmN0aW9uIHFuKCl7cmV0dXJuIEJlKHRoaXMsYXJndW1lbnRzLFwibHRcIil9ZnVuY3Rpb24gVG4oKXtyZXR1cm4gQmUodGhpcyxhcmd1bWVudHMsXCJndFwiKX1mdW5jdGlvbiBMbihlLG4pe3JldHVybiBuZXcgdGhpcyhlKS5tb2Qobil9ZnVuY3Rpb24gRG4oZSxuKXtyZXR1cm4gbmV3IHRoaXMoZSkubXVsKG4pfWZ1bmN0aW9uIEZuKGUsbil7cmV0dXJuIG5ldyB0aGlzKGUpLnBvdyhuKX1mdW5jdGlvbiBJbihlKXt2YXIgbixpLHQscixzPTAsbz1uZXcgdGhpcygxKSx1PVtdO2lmKGU9PT12b2lkIDA/ZT10aGlzLnByZWNpc2lvbjpfKGUsMSwkKSx0PU1hdGguY2VpbChlL20pLHRoaXMuY3J5cHRvKWlmKGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpZm9yKG49Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkodCkpO3M8dDspcj1uW3NdLHI+PTQyOWU3P25bc109Y3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdOnVbcysrXT1yJTFlNztlbHNlIGlmKGNyeXB0by5yYW5kb21CeXRlcyl7Zm9yKG49Y3J5cHRvLnJhbmRvbUJ5dGVzKHQqPTQpO3M8dDspcj1uW3NdKyhuW3MrMV08PDgpKyhuW3MrMl08PDE2KSsoKG5bcyszXSYxMjcpPDwyNCkscj49MjE0ZTc/Y3J5cHRvLnJhbmRvbUJ5dGVzKDQpLmNvcHkobixzKToodS5wdXNoKHIlMWU3KSxzKz00KTtzPXQvNH1lbHNlIHRocm93IEVycm9yKERlKTtlbHNlIGZvcig7czx0Oyl1W3MrK109TWF0aC5yYW5kb20oKSoxZTd8MDtmb3IodD11Wy0tc10sZSU9bSx0JiZlJiYocj1DKDEwLG0tZSksdVtzXT0odC9yfDApKnIpO3Vbc109PT0wO3MtLSl1LnBvcCgpO2lmKHM8MClpPTAsdT1bMF07ZWxzZXtmb3IoaT0tMTt1WzBdPT09MDtpLT1tKXUuc2hpZnQoKTtmb3IodD0xLHI9dVswXTtyPj0xMDtyLz0xMCl0Kys7dDxtJiYoaS09bS10KX1yZXR1cm4gby5lPWksby5kPXUsb31mdW5jdGlvbiBabihlKXtyZXR1cm4gcChlPW5ldyB0aGlzKGUpLGUuZSsxLHRoaXMucm91bmRpbmcpfWZ1bmN0aW9uIFVuKGUpe3JldHVybiBlPW5ldyB0aGlzKGUpLGUuZD9lLmRbMF0/ZS5zOjAqZS5zOmUuc3x8TmFOfWZ1bmN0aW9uIEJuKGUpe3JldHVybiBuZXcgdGhpcyhlKS5zaW4oKX1mdW5jdGlvbiBWbihlKXtyZXR1cm4gbmV3IHRoaXMoZSkuc2luaCgpfWZ1bmN0aW9uICRuKGUpe3JldHVybiBuZXcgdGhpcyhlKS5zcXJ0KCl9ZnVuY3Rpb24gSG4oZSxuKXtyZXR1cm4gbmV3IHRoaXMoZSkuc3ViKG4pfWZ1bmN0aW9uIGpuKCl7dmFyIGU9MCxuPWFyZ3VtZW50cyxpPW5ldyB0aGlzKG5bZV0pO2Zvcih3PSExO2kucyYmKytlPG4ubGVuZ3RoOylpPWkucGx1cyhuW2VdKTtyZXR1cm4gdz0hMCxwKGksdGhpcy5wcmVjaXNpb24sdGhpcy5yb3VuZGluZyl9ZnVuY3Rpb24gV24oZSl7cmV0dXJuIG5ldyB0aGlzKGUpLnRhbigpfWZ1bmN0aW9uIEduKGUpe3JldHVybiBuZXcgdGhpcyhlKS50YW5oKCl9ZnVuY3Rpb24gSm4oZSl7cmV0dXJuIHAoZT1uZXcgdGhpcyhlKSxlLmUrMSwxKX1oW1N5bWJvbC5mb3IoXCJub2RlanMudXRpbC5pbnNwZWN0LmN1c3RvbVwiKV09aC50b1N0cmluZztoW1N5bWJvbC50b1N0cmluZ1RhZ109XCJEZWNpbWFsXCI7dmFyIFE9aC5jb25zdHJ1Y3Rvcj1IZShOZSk7dGU9bmV3IFEodGUpO3JlPW5ldyBRKHJlKTt2YXIgamU9UTswJiYobW9kdWxlLmV4cG9ydHM9e0RlY2ltYWwsUHVibGljLGdldFJ1bnRpbWUsbWFrZVN0cmljdEVudW0sb2JqZWN0RW51bVZhbHVlc30pO1xuLyohIEJ1bmRsZWQgbGljZW5zZSBpbmZvcm1hdGlvbjpcblxuZGVjaW1hbC5qcy9kZWNpbWFsLm1qczpcbiAgKCohXG4gICAqICBkZWNpbWFsLmpzIHYxMC40LjNcbiAgICogIEFuIGFyYml0cmFyeS1wcmVjaXNpb24gRGVjaW1hbCB0eXBlIGZvciBKYXZhU2NyaXB0LlxuICAgKiAgaHR0cHM6Ly9naXRodWIuY29tL01pa2VNY2wvZGVjaW1hbC5qc1xuICAgKiAgQ29weXJpZ2h0IChjKSAyMDIyIE1pY2hhZWwgTWNsYXVnaGxpbiA8TThjaDg4bEBnbWFpbC5jb20+XG4gICAqICBNSVQgTGljZW5jZVxuICAgKilcbiovXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC1icm93c2VyLmpzLm1hcFxuIiwiLy8gc3JjL2NvbnRyb2xsZXJzL2dhbGxlcnlDb250cm9sbGVyLmpzXHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vcHJpc21hLmpzJztcclxuXHJcbi8vIEdldCBhbGwgZ2FsbGVyaWVzXHJcbmV4cG9ydCBjb25zdCBnZXRHYWxsZXJpZXMgPSBhc3luYyAoYykgPT4ge1xyXG4gIGNvbnN0IGdhbGxlcmllcyA9IGF3YWl0IHByaXNtYS5nYWxsYXJ5LmZpbmRNYW55KCk7XHJcbiAgcmV0dXJuIGMuanNvbihnYWxsZXJpZXMpO1xyXG59O1xyXG5cclxuLy8gQ3JlYXRlIGEgbmV3IGdhbGxlcnlcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdhbGxlcnkgPSBhc3luYyAoYykgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjLnJlcS5qc29uKCk7XHJcbiAgY29uc3QgeyBpbWcsIHRpdGxlIH0gPSBkYXRhO1xyXG5cclxuICBjb25zdCBuZXdHYWxsZXJ5ID0gYXdhaXQgcHJpc21hLmdhbGxhcnkuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgaW1nLFxyXG4gICAgICB0aXRsZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGMuanNvbihuZXdHYWxsZXJ5KTtcclxufTtcclxuXHJcbi8vIFVwZGF0ZSBhIGdhbGxlcnlcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdhbGxlcnkgPSBhc3luYyAoYykgPT4ge1xyXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQoYy5yZXEucGFyYW0oJ2lkJykpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjLnJlcS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IHVwZGF0ZWRHYWxsZXJ5ID0gYXdhaXQgcHJpc21hLmdhbGxhcnkudXBkYXRlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICBkYXRhLFxyXG4gIH0pO1xyXG4gIHJldHVybiBjLmpzb24odXBkYXRlZEdhbGxlcnkpO1xyXG59O1xyXG5cclxuLy8gRGVsZXRlIGEgZ2FsbGVyeVxyXG5leHBvcnQgY29uc3QgZGVsZXRlR2FsbGVyeSA9IGFzeW5jIChjKSA9PiB7XHJcbiAgY29uc3QgaWQgPSBwYXJzZUludChjLnJlcS5wYXJhbSgnaWQnKSk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZWRHYWxsZXJ5ID0gYXdhaXQgcHJpc21hLmdhbGxhcnkuZGVsZXRlKHtcclxuICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGMuanNvbih7IG1lc3NhZ2U6ICdHYWxsZXJ5IGRlbGV0ZWQnLCBkZWxldGVkR2FsbGVyeSB9KTtcclxufTtcclxuIiwiLy8gc3JjL2NvbnRyb2xsZXJzL3VzZXJDb250cm9sbGVyLmpzXHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vcHJpc21hLmpzJztcclxuXHJcbi8vIEdldCBhbGwgdXNlcnNcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKGMpID0+IHtcclxuICBjb25zdCB1c2VycyA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KCk7XHJcbiAgcmV0dXJuIGMuanNvbih1c2Vycyk7XHJcbn07XHJcblxyXG4vLyBDcmVhdGUgYSBuZXcgdXNlclxyXG5leHBvcnQgY29uc3QgY3JlYXRlVXNlciA9IGFzeW5jIChjKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGMucmVxLmpzb24oKTtcclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgbmFtZSB9ID0gZGF0YTtcclxuXHJcbiAgY29uc3QgbmV3VXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmNyZWF0ZSh7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBwYXNzd29yZCxcclxuICAgICAgbmFtZSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGMuanNvbihuZXdVc2VyKTtcclxufTtcclxuXHJcbi8vIFVwZGF0ZSBhIHVzZXJcclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSBhc3luYyAoYykgPT4ge1xyXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQoYy5yZXEucGFyYW0oJ2lkJykpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjLnJlcS5qc29uKCk7XHJcbiAgXHJcbiAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci51cGRhdGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICAgIGRhdGEsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGMuanNvbih1cGRhdGVkVXNlcik7XHJcbn07XHJcblxyXG4vLyBEZWxldGUgYSB1c2VyXHJcbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKGMpID0+IHtcclxuICBjb25zdCBpZCA9IHBhcnNlSW50KGMucmVxLnBhcmFtKCdpZCcpKTtcclxuXHJcbiAgY29uc3QgZGVsZXRlZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5kZWxldGUoe1xyXG4gICAgd2hlcmU6IHsgaWQgfSxcclxuICB9KTtcclxuICByZXR1cm4gYy5qc29uKHsgbWVzc2FnZTogJ1VzZXIgZGVsZXRlZCcsIGRlbGV0ZWRVc2VyIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnR9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuY29uc3QgcHJpc21hPW5ldyBQcmlzbWFDbGllbnQoKVxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcclxuIiwiLy8gc3JjL3JvdXRlcy5qc1xyXG5pbXBvcnQgeyBIb25vIH0gZnJvbSAnaG9ubyc7XHJcbmltcG9ydCB7IGdldFVzZXJzLCBjcmVhdGVVc2VyLCB1cGRhdGVVc2VyLCBkZWxldGVVc2VyIH0gZnJvbSAnLi4vY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgeyBnZXRHYWxsZXJpZXMsIGNyZWF0ZUdhbGxlcnksIHVwZGF0ZUdhbGxlcnksIGRlbGV0ZUdhbGxlcnkgfSBmcm9tICcuLi9jb250cm9sbGVycy9nYWxsZXJ5Q29udHJvbGxlci5qcyc7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBuZXcgSG9ubygpO1xyXG5cclxuLy8gVXNlciByb3V0ZXNcclxucm91dGVzLmdldCgnL3VzZXJzJywgZ2V0VXNlcnMpO1xyXG5yb3V0ZXMucG9zdCgnL3VzZXJzJywgY3JlYXRlVXNlcik7XHJcbnJvdXRlcy5wdXQoJy91c2Vycy86aWQnLCB1cGRhdGVVc2VyKTtcclxucm91dGVzLmRlbGV0ZSgnL3VzZXJzLzppZCcsIGRlbGV0ZVVzZXIpO1xyXG5cclxuLy8gR2FsbGVyeSByb3V0ZXNcclxucm91dGVzLmdldCgnL2dhbGxlcmllcycsIGdldEdhbGxlcmllcyk7XHJcbnJvdXRlcy5wb3N0KCcvZ2FsbGVyaWVzJywgY3JlYXRlR2FsbGVyeSk7XHJcbnJvdXRlcy5wdXQoJy9nYWxsZXJpZXMvOmlkJywgdXBkYXRlR2FsbGVyeSk7XHJcbnJvdXRlcy5kZWxldGUoJy9nYWxsZXJpZXMvOmlkJywgZGVsZXRlR2FsbGVyeSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XHJcbiIsIi8vIHNyYy9hZGFwdGVyL3ZlcmNlbC9oYW5kbGVyLnRzXG52YXIgaGFuZGxlID0gKGFwcCkgPT4gKHJlcSwgcmVxdWVzdENvbnRleHQpID0+IHtcbiAgcmV0dXJuIGFwcC5mZXRjaChyZXEsIHt9LCByZXF1ZXN0Q29udGV4dCk7XG59O1xuZXhwb3J0IHtcbiAgaGFuZGxlXG59O1xuIiwiLy8gc3JjL2FkYXB0ZXIvdmVyY2VsL2luZGV4LnRzXG5pbXBvcnQgeyBoYW5kbGUgfSBmcm9tIFwiLi9oYW5kbGVyLmpzXCI7XG5leHBvcnQge1xuICBoYW5kbGVcbn07XG4iLCIvLyBzcmMvY29tcG9zZS50c1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQuanNcIjtcbnZhciBjb21wb3NlID0gKG1pZGRsZXdhcmUsIG9uRXJyb3IsIG9uTm90Rm91bmQpID0+IHtcbiAgcmV0dXJuIChjb250ZXh0LCBuZXh0KSA9PiB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgcmV0dXJuIGRpc3BhdGNoKDApO1xuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3BhdGNoKGkpIHtcbiAgICAgIGlmIChpIDw9IGluZGV4KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5leHQoKSBjYWxsZWQgbXVsdGlwbGUgdGltZXNcIik7XG4gICAgICB9XG4gICAgICBpbmRleCA9IGk7XG4gICAgICBsZXQgcmVzO1xuICAgICAgbGV0IGlzRXJyb3IgPSBmYWxzZTtcbiAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgaWYgKG1pZGRsZXdhcmVbaV0pIHtcbiAgICAgICAgaGFuZGxlciA9IG1pZGRsZXdhcmVbaV1bMF1bMF07XG4gICAgICAgIGlmIChjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dCkge1xuICAgICAgICAgIGNvbnRleHQucmVxLnJvdXRlSW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVyID0gaSA9PT0gbWlkZGxld2FyZS5sZW5ndGggJiYgbmV4dCB8fCB2b2lkIDA7XG4gICAgICB9XG4gICAgICBpZiAoIWhhbmRsZXIpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgaW5zdGFuY2VvZiBDb250ZXh0ICYmIGNvbnRleHQuZmluYWxpemVkID09PSBmYWxzZSAmJiBvbk5vdEZvdW5kKSB7XG4gICAgICAgICAgcmVzID0gYXdhaXQgb25Ob3RGb3VuZChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXMgPSBhd2FpdCBoYW5kbGVyKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaChpICsgMSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvciAmJiBjb250ZXh0IGluc3RhbmNlb2YgQ29udGV4dCAmJiBvbkVycm9yKSB7XG4gICAgICAgICAgICBjb250ZXh0LmVycm9yID0gZXJyO1xuICAgICAgICAgICAgcmVzID0gYXdhaXQgb25FcnJvcihlcnIsIGNvbnRleHQpO1xuICAgICAgICAgICAgaXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChyZXMgJiYgKGNvbnRleHQuZmluYWxpemVkID09PSBmYWxzZSB8fCBpc0Vycm9yKSkge1xuICAgICAgICBjb250ZXh0LnJlcyA9IHJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZXh0O1xuICAgIH1cbiAgfTtcbn07XG5leHBvcnQge1xuICBjb21wb3NlXG59O1xuIiwiLy8gc3JjL2NvbnRleHQudHNcbmltcG9ydCB7IEh0bWxFc2NhcGVkQ2FsbGJhY2tQaGFzZSwgcmVzb2x2ZUNhbGxiYWNrIH0gZnJvbSBcIi4vdXRpbHMvaHRtbC5qc1wiO1xudmFyIFRFWFRfUExBSU4gPSBcInRleHQvcGxhaW47IGNoYXJzZXQ9VVRGLThcIjtcbnZhciBzZXRIZWFkZXJzID0gKGhlYWRlcnMsIG1hcCA9IHt9KSA9PiB7XG4gIE9iamVjdC5lbnRyaWVzKG1hcCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiBoZWFkZXJzLnNldChrZXksIHZhbHVlKSk7XG4gIHJldHVybiBoZWFkZXJzO1xufTtcbnZhciBDb250ZXh0ID0gY2xhc3Mge1xuICByZXE7XG4gIGVudiA9IHt9O1xuICBfdmFyID0ge307XG4gIGZpbmFsaXplZCA9IGZhbHNlO1xuICBlcnJvciA9IHZvaWQgMDtcbiAgI3N0YXR1cyA9IDIwMDtcbiAgI2V4ZWN1dGlvbkN0eDtcbiAgI2hlYWRlcnMgPSB2b2lkIDA7XG4gICNwcmVwYXJlZEhlYWRlcnMgPSB2b2lkIDA7XG4gICNyZXM7XG4gICNpc0ZyZXNoID0gdHJ1ZTtcbiAgbGF5b3V0ID0gdm9pZCAwO1xuICByZW5kZXJlciA9IChjb250ZW50KSA9PiB0aGlzLmh0bWwoY29udGVudCk7XG4gIG5vdEZvdW5kSGFuZGxlciA9ICgpID0+IG5ldyBSZXNwb25zZSgpO1xuICBjb25zdHJ1Y3RvcihyZXEsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnJlcSA9IHJlcTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdGhpcy4jZXhlY3V0aW9uQ3R4ID0gb3B0aW9ucy5leGVjdXRpb25DdHg7XG4gICAgICB0aGlzLmVudiA9IG9wdGlvbnMuZW52O1xuICAgICAgaWYgKG9wdGlvbnMubm90Rm91bmRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMubm90Rm91bmRIYW5kbGVyID0gb3B0aW9ucy5ub3RGb3VuZEhhbmRsZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldCBldmVudCgpIHtcbiAgICBpZiAodGhpcy4jZXhlY3V0aW9uQ3R4ICYmIFwicmVzcG9uZFdpdGhcIiBpbiB0aGlzLiNleGVjdXRpb25DdHgpIHtcbiAgICAgIHJldHVybiB0aGlzLiNleGVjdXRpb25DdHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKFwiVGhpcyBjb250ZXh0IGhhcyBubyBGZXRjaEV2ZW50XCIpO1xuICAgIH1cbiAgfVxuICBnZXQgZXhlY3V0aW9uQ3R4KCkge1xuICAgIGlmICh0aGlzLiNleGVjdXRpb25DdHgpIHtcbiAgICAgIHJldHVybiB0aGlzLiNleGVjdXRpb25DdHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKFwiVGhpcyBjb250ZXh0IGhhcyBubyBFeGVjdXRpb25Db250ZXh0XCIpO1xuICAgIH1cbiAgfVxuICBnZXQgcmVzKCkge1xuICAgIHRoaXMuI2lzRnJlc2ggPSBmYWxzZTtcbiAgICByZXR1cm4gdGhpcy4jcmVzIHx8PSBuZXcgUmVzcG9uc2UoXCI0MDQgTm90IEZvdW5kXCIsIHsgc3RhdHVzOiA0MDQgfSk7XG4gIH1cbiAgc2V0IHJlcyhfcmVzKSB7XG4gICAgdGhpcy4jaXNGcmVzaCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLiNyZXMgJiYgX3Jlcykge1xuICAgICAgdGhpcy4jcmVzLmhlYWRlcnMuZGVsZXRlKFwiY29udGVudC10eXBlXCIpO1xuICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgdGhpcy4jcmVzLmhlYWRlcnMuZW50cmllcygpKSB7XG4gICAgICAgIGlmIChrID09PSBcInNldC1jb29raWVcIikge1xuICAgICAgICAgIGNvbnN0IGNvb2tpZXMgPSB0aGlzLiNyZXMuaGVhZGVycy5nZXRTZXRDb29raWUoKTtcbiAgICAgICAgICBfcmVzLmhlYWRlcnMuZGVsZXRlKFwic2V0LWNvb2tpZVwiKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvb2tpZSBvZiBjb29raWVzKSB7XG4gICAgICAgICAgICBfcmVzLmhlYWRlcnMuYXBwZW5kKFwic2V0LWNvb2tpZVwiLCBjb29raWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfcmVzLmhlYWRlcnMuc2V0KGssIHYpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuI3JlcyA9IF9yZXM7XG4gICAgdGhpcy5maW5hbGl6ZWQgPSB0cnVlO1xuICB9XG4gIHJlbmRlciA9ICguLi5hcmdzKSA9PiB0aGlzLnJlbmRlcmVyKC4uLmFyZ3MpO1xuICBzZXRMYXlvdXQgPSAobGF5b3V0KSA9PiB0aGlzLmxheW91dCA9IGxheW91dDtcbiAgZ2V0TGF5b3V0ID0gKCkgPT4gdGhpcy5sYXlvdXQ7XG4gIHNldFJlbmRlcmVyID0gKHJlbmRlcmVyKSA9PiB7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuICB9O1xuICBoZWFkZXIgPSAobmFtZSwgdmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBpZiAodmFsdWUgPT09IHZvaWQgMCkge1xuICAgICAgaWYgKHRoaXMuI2hlYWRlcnMpIHtcbiAgICAgICAgdGhpcy4jaGVhZGVycy5kZWxldGUobmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuI3ByZXBhcmVkSGVhZGVycykge1xuICAgICAgICBkZWxldGUgdGhpcy4jcHJlcGFyZWRIZWFkZXJzW25hbWUudG9Mb2NhbGVMb3dlckNhc2UoKV07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5yZXMuaGVhZGVycy5kZWxldGUobmFtZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChvcHRpb25zPy5hcHBlbmQpIHtcbiAgICAgIGlmICghdGhpcy4jaGVhZGVycykge1xuICAgICAgICB0aGlzLiNpc0ZyZXNoID0gZmFsc2U7XG4gICAgICAgIHRoaXMuI2hlYWRlcnMgPSBuZXcgSGVhZGVycyh0aGlzLiNwcmVwYXJlZEhlYWRlcnMpO1xuICAgICAgICB0aGlzLiNwcmVwYXJlZEhlYWRlcnMgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI2hlYWRlcnMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuI2hlYWRlcnMpIHtcbiAgICAgICAgdGhpcy4jaGVhZGVycy5zZXQobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4jcHJlcGFyZWRIZWFkZXJzID8/PSB7fTtcbiAgICAgICAgdGhpcy4jcHJlcGFyZWRIZWFkZXJzW25hbWUudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuZmluYWxpemVkKSB7XG4gICAgICBpZiAob3B0aW9ucz8uYXBwZW5kKSB7XG4gICAgICAgIHRoaXMucmVzLmhlYWRlcnMuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzLmhlYWRlcnMuc2V0KG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHN0YXR1cyA9IChzdGF0dXMpID0+IHtcbiAgICB0aGlzLiNpc0ZyZXNoID0gZmFsc2U7XG4gICAgdGhpcy4jc3RhdHVzID0gc3RhdHVzO1xuICB9O1xuICBzZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIHRoaXMuX3ZhciA/Pz0ge307XG4gICAgdGhpcy5fdmFyW2tleV0gPSB2YWx1ZTtcbiAgfTtcbiAgZ2V0ID0gKGtleSkgPT4ge1xuICAgIHJldHVybiB0aGlzLl92YXIgPyB0aGlzLl92YXJba2V5XSA6IHZvaWQgMDtcbiAgfTtcbiAgZ2V0IHZhcigpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLl92YXIgfTtcbiAgfVxuICBuZXdSZXNwb25zZSA9IChkYXRhLCBhcmcsIGhlYWRlcnMpID0+IHtcbiAgICBpZiAodGhpcy4jaXNGcmVzaCAmJiAhaGVhZGVycyAmJiAhYXJnICYmIHRoaXMuI3N0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy4jcHJlcGFyZWRIZWFkZXJzXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGFyZyAmJiB0eXBlb2YgYXJnICE9PSBcIm51bWJlclwiKSB7XG4gICAgICBjb25zdCBoZWFkZXIgPSBuZXcgSGVhZGVycyhhcmcuaGVhZGVycyk7XG4gICAgICBpZiAodGhpcy4jaGVhZGVycykge1xuICAgICAgICB0aGlzLiNoZWFkZXJzLmZvckVhY2goKHYsIGspID0+IHtcbiAgICAgICAgICBpZiAoayA9PT0gXCJzZXQtY29va2llXCIpIHtcbiAgICAgICAgICAgIGhlYWRlci5hcHBlbmQoaywgdik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhlYWRlci5zZXQoaywgdik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGhlYWRlcnMyID0gc2V0SGVhZGVycyhoZWFkZXIsIHRoaXMuI3ByZXBhcmVkSGVhZGVycyk7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGRhdGEsIHtcbiAgICAgICAgaGVhZGVyczogaGVhZGVyczIsXG4gICAgICAgIHN0YXR1czogYXJnLnN0YXR1cyA/PyB0aGlzLiNzdGF0dXNcbiAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBzdGF0dXMgPSB0eXBlb2YgYXJnID09PSBcIm51bWJlclwiID8gYXJnIDogdGhpcy4jc3RhdHVzO1xuICAgIHRoaXMuI3ByZXBhcmVkSGVhZGVycyA/Pz0ge307XG4gICAgdGhpcy4jaGVhZGVycyA/Pz0gbmV3IEhlYWRlcnMoKTtcbiAgICBzZXRIZWFkZXJzKHRoaXMuI2hlYWRlcnMsIHRoaXMuI3ByZXBhcmVkSGVhZGVycyk7XG4gICAgaWYgKHRoaXMuI3Jlcykge1xuICAgICAgdGhpcy4jcmVzLmhlYWRlcnMuZm9yRWFjaCgodiwgaykgPT4ge1xuICAgICAgICBpZiAoayA9PT0gXCJzZXQtY29va2llXCIpIHtcbiAgICAgICAgICB0aGlzLiNoZWFkZXJzPy5hcHBlbmQoaywgdik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4jaGVhZGVycz8uc2V0KGssIHYpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNldEhlYWRlcnModGhpcy4jaGVhZGVycywgdGhpcy4jcHJlcGFyZWRIZWFkZXJzKTtcbiAgICB9XG4gICAgaGVhZGVycyA/Pz0ge307XG4gICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoaGVhZGVycykpIHtcbiAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aGlzLiNoZWFkZXJzLnNldChrLCB2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI2hlYWRlcnMuZGVsZXRlKGspO1xuICAgICAgICBmb3IgKGNvbnN0IHYyIG9mIHYpIHtcbiAgICAgICAgICB0aGlzLiNoZWFkZXJzLmFwcGVuZChrLCB2Mik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShkYXRhLCB7XG4gICAgICBzdGF0dXMsXG4gICAgICBoZWFkZXJzOiB0aGlzLiNoZWFkZXJzXG4gICAgfSk7XG4gIH07XG4gIGJvZHkgPSAoZGF0YSwgYXJnLCBoZWFkZXJzKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09IFwibnVtYmVyXCIgPyB0aGlzLm5ld1Jlc3BvbnNlKGRhdGEsIGFyZywgaGVhZGVycykgOiB0aGlzLm5ld1Jlc3BvbnNlKGRhdGEsIGFyZyk7XG4gIH07XG4gIHRleHQgPSAodGV4dCwgYXJnLCBoZWFkZXJzKSA9PiB7XG4gICAgaWYgKCF0aGlzLiNwcmVwYXJlZEhlYWRlcnMpIHtcbiAgICAgIGlmICh0aGlzLiNpc0ZyZXNoICYmICFoZWFkZXJzICYmICFhcmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0ZXh0KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuI3ByZXBhcmVkSGVhZGVycyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLiNwcmVwYXJlZEhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPSBURVhUX1BMQUlOO1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSBcIm51bWJlclwiID8gdGhpcy5uZXdSZXNwb25zZSh0ZXh0LCBhcmcsIGhlYWRlcnMpIDogdGhpcy5uZXdSZXNwb25zZSh0ZXh0LCBhcmcpO1xuICB9O1xuICBqc29uID0gKG9iamVjdCwgYXJnLCBoZWFkZXJzKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG9iamVjdCk7XG4gICAgdGhpcy4jcHJlcGFyZWRIZWFkZXJzID8/PSB7fTtcbiAgICB0aGlzLiNwcmVwYXJlZEhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0gPSBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLThcIjtcbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gXCJudW1iZXJcIiA/IHRoaXMubmV3UmVzcG9uc2UoYm9keSwgYXJnLCBoZWFkZXJzKSA6IHRoaXMubmV3UmVzcG9uc2UoYm9keSwgYXJnKTtcbiAgfTtcbiAgaHRtbCA9IChodG1sLCBhcmcsIGhlYWRlcnMpID0+IHtcbiAgICB0aGlzLiNwcmVwYXJlZEhlYWRlcnMgPz89IHt9O1xuICAgIHRoaXMuI3ByZXBhcmVkSGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXSA9IFwidGV4dC9odG1sOyBjaGFyc2V0PVVURi04XCI7XG4gICAgaWYgKHR5cGVvZiBodG1sID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAoIShodG1sIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgaHRtbCA9IGh0bWwudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIGlmIChodG1sIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gaHRtbC50aGVuKChodG1sMikgPT4gcmVzb2x2ZUNhbGxiYWNrKGh0bWwyLCBIdG1sRXNjYXBlZENhbGxiYWNrUGhhc2UuU3RyaW5naWZ5LCBmYWxzZSwge30pKS50aGVuKChodG1sMikgPT4ge1xuICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJnID09PSBcIm51bWJlclwiID8gdGhpcy5uZXdSZXNwb25zZShodG1sMiwgYXJnLCBoZWFkZXJzKSA6IHRoaXMubmV3UmVzcG9uc2UoaHRtbDIsIGFyZyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gXCJudW1iZXJcIiA/IHRoaXMubmV3UmVzcG9uc2UoaHRtbCwgYXJnLCBoZWFkZXJzKSA6IHRoaXMubmV3UmVzcG9uc2UoaHRtbCwgYXJnKTtcbiAgfTtcbiAgcmVkaXJlY3QgPSAobG9jYXRpb24sIHN0YXR1cyA9IDMwMikgPT4ge1xuICAgIHRoaXMuI2hlYWRlcnMgPz89IG5ldyBIZWFkZXJzKCk7XG4gICAgdGhpcy4jaGVhZGVycy5zZXQoXCJMb2NhdGlvblwiLCBsb2NhdGlvbik7XG4gICAgcmV0dXJuIHRoaXMubmV3UmVzcG9uc2UobnVsbCwgc3RhdHVzKTtcbiAgfTtcbiAgbm90Rm91bmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMubm90Rm91bmRIYW5kbGVyKHRoaXMpO1xuICB9O1xufTtcbmV4cG9ydCB7XG4gIENvbnRleHQsXG4gIFRFWFRfUExBSU5cbn07XG4iLCIvLyBzcmMvaG9uby1iYXNlLnRzXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSBcIi4vY29tcG9zZS5qc1wiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuL2NvbnRleHQuanNcIjtcbmltcG9ydCB7IEhUVFBFeGNlcHRpb24gfSBmcm9tIFwiLi9odHRwLWV4Y2VwdGlvbi5qc1wiO1xuaW1wb3J0IHsgSG9ub1JlcXVlc3QgfSBmcm9tIFwiLi9yZXF1ZXN0LmpzXCI7XG5pbXBvcnQgeyBNRVRIT0RTLCBNRVRIT0RfTkFNRV9BTEwsIE1FVEhPRF9OQU1FX0FMTF9MT1dFUkNBU0UgfSBmcm9tIFwiLi9yb3V0ZXIuanNcIjtcbmltcG9ydCB7IGdldFBhdGgsIGdldFBhdGhOb1N0cmljdCwgbWVyZ2VQYXRoIH0gZnJvbSBcIi4vdXRpbHMvdXJsLmpzXCI7XG52YXIgQ09NUE9TRURfSEFORExFUiA9IFN5bWJvbChcImNvbXBvc2VkSGFuZGxlclwiKTtcbnZhciBub3RGb3VuZEhhbmRsZXIgPSAoYykgPT4ge1xuICByZXR1cm4gYy50ZXh0KFwiNDA0IE5vdCBGb3VuZFwiLCA0MDQpO1xufTtcbnZhciBlcnJvckhhbmRsZXIgPSAoZXJyLCBjKSA9PiB7XG4gIGlmIChlcnIgaW5zdGFuY2VvZiBIVFRQRXhjZXB0aW9uKSB7XG4gICAgcmV0dXJuIGVyci5nZXRSZXNwb25zZSgpO1xuICB9XG4gIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgcmV0dXJuIGMudGV4dChcIkludGVybmFsIFNlcnZlciBFcnJvclwiLCA1MDApO1xufTtcbnZhciBIb25vID0gY2xhc3Mge1xuICBnZXQ7XG4gIHBvc3Q7XG4gIHB1dDtcbiAgZGVsZXRlO1xuICBvcHRpb25zO1xuICBwYXRjaDtcbiAgYWxsO1xuICBvbjtcbiAgdXNlO1xuICByb3V0ZXI7XG4gIGdldFBhdGg7XG4gIF9iYXNlUGF0aCA9IFwiL1wiO1xuICAjcGF0aCA9IFwiL1wiO1xuICByb3V0ZXMgPSBbXTtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgYWxsTWV0aG9kcyA9IFsuLi5NRVRIT0RTLCBNRVRIT0RfTkFNRV9BTExfTE9XRVJDQVNFXTtcbiAgICBhbGxNZXRob2RzLmZvckVhY2goKG1ldGhvZCkgPT4ge1xuICAgICAgdGhpc1ttZXRob2RdID0gKGFyZ3MxLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnczEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICB0aGlzLiNwYXRoID0gYXJnczE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hZGRSb3V0ZShtZXRob2QsIHRoaXMuI3BhdGgsIGFyZ3MxKTtcbiAgICAgICAgfVxuICAgICAgICBhcmdzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkUm91dGUobWV0aG9kLCB0aGlzLiNwYXRoLCBoYW5kbGVyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSk7XG4gICAgdGhpcy5vbiA9IChtZXRob2QsIHBhdGgsIC4uLmhhbmRsZXJzKSA9PiB7XG4gICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgcCBvZiBbcGF0aF0uZmxhdCgpKSB7XG4gICAgICAgIHRoaXMuI3BhdGggPSBwO1xuICAgICAgICBmb3IgKGNvbnN0IG0gb2YgW21ldGhvZF0uZmxhdCgpKSB7XG4gICAgICAgICAgaGFuZGxlcnMubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFJvdXRlKG0udG9VcHBlckNhc2UoKSwgdGhpcy4jcGF0aCwgaGFuZGxlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgdGhpcy51c2UgPSAoYXJnMSwgLi4uaGFuZGxlcnMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aGlzLiNwYXRoID0gYXJnMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuI3BhdGggPSBcIipcIjtcbiAgICAgICAgaGFuZGxlcnMudW5zaGlmdChhcmcxKTtcbiAgICAgIH1cbiAgICAgIGhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgdGhpcy5hZGRSb3V0ZShNRVRIT0RfTkFNRV9BTEwsIHRoaXMuI3BhdGgsIGhhbmRsZXIpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIGNvbnN0IHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0ID8/IHRydWU7XG4gICAgZGVsZXRlIG9wdGlvbnMuc3RyaWN0O1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5nZXRQYXRoID0gc3RyaWN0ID8gb3B0aW9ucy5nZXRQYXRoID8/IGdldFBhdGggOiBnZXRQYXRoTm9TdHJpY3Q7XG4gIH1cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBuZXcgSG9ubyh7XG4gICAgICByb3V0ZXI6IHRoaXMucm91dGVyLFxuICAgICAgZ2V0UGF0aDogdGhpcy5nZXRQYXRoXG4gICAgfSk7XG4gICAgY2xvbmUucm91dGVzID0gdGhpcy5yb3V0ZXM7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9XG4gIG5vdEZvdW5kSGFuZGxlciA9IG5vdEZvdW5kSGFuZGxlcjtcbiAgZXJyb3JIYW5kbGVyID0gZXJyb3JIYW5kbGVyO1xuICByb3V0ZShwYXRoLCBhcHApIHtcbiAgICBjb25zdCBzdWJBcHAgPSB0aGlzLmJhc2VQYXRoKHBhdGgpO1xuICAgIGlmICghYXBwKSB7XG4gICAgICByZXR1cm4gc3ViQXBwO1xuICAgIH1cbiAgICBhcHAucm91dGVzLm1hcCgocikgPT4ge1xuICAgICAgbGV0IGhhbmRsZXI7XG4gICAgICBpZiAoYXBwLmVycm9ySGFuZGxlciA9PT0gZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIGhhbmRsZXIgPSByLmhhbmRsZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYW5kbGVyID0gYXN5bmMgKGMsIG5leHQpID0+IChhd2FpdCBjb21wb3NlKFtdLCBhcHAuZXJyb3JIYW5kbGVyKShjLCAoKSA9PiByLmhhbmRsZXIoYywgbmV4dCkpKS5yZXM7XG4gICAgICAgIGhhbmRsZXJbQ09NUE9TRURfSEFORExFUl0gPSByLmhhbmRsZXI7XG4gICAgICB9XG4gICAgICBzdWJBcHAuYWRkUm91dGUoci5tZXRob2QsIHIucGF0aCwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgYmFzZVBhdGgocGF0aCkge1xuICAgIGNvbnN0IHN1YkFwcCA9IHRoaXMuY2xvbmUoKTtcbiAgICBzdWJBcHAuX2Jhc2VQYXRoID0gbWVyZ2VQYXRoKHRoaXMuX2Jhc2VQYXRoLCBwYXRoKTtcbiAgICByZXR1cm4gc3ViQXBwO1xuICB9XG4gIG9uRXJyb3IgPSAoaGFuZGxlcikgPT4ge1xuICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gaGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgbm90Rm91bmQgPSAoaGFuZGxlcikgPT4ge1xuICAgIHRoaXMubm90Rm91bmRIYW5kbGVyID0gaGFuZGxlcjtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgbW91bnQocGF0aCwgYXBwbGljYXRpb25IYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbGV0IHJlcGxhY2VSZXF1ZXN0O1xuICAgIGxldCBvcHRpb25IYW5kbGVyO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvcHRpb25IYW5kbGVyID0gb3B0aW9ucztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbkhhbmRsZXIgPSBvcHRpb25zLm9wdGlvbkhhbmRsZXI7XG4gICAgICAgIHJlcGxhY2VSZXF1ZXN0ID0gb3B0aW9ucy5yZXBsYWNlUmVxdWVzdDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0T3B0aW9ucyA9IG9wdGlvbkhhbmRsZXIgPyAoYykgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uczIgPSBvcHRpb25IYW5kbGVyKGMpO1xuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob3B0aW9uczIpID8gb3B0aW9uczIgOiBbb3B0aW9uczJdO1xuICAgIH0gOiAoYykgPT4ge1xuICAgICAgbGV0IGV4ZWN1dGlvbkNvbnRleHQgPSB2b2lkIDA7XG4gICAgICB0cnkge1xuICAgICAgICBleGVjdXRpb25Db250ZXh0ID0gYy5leGVjdXRpb25DdHg7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbYy5lbnYsIGV4ZWN1dGlvbkNvbnRleHRdO1xuICAgIH07XG4gICAgcmVwbGFjZVJlcXVlc3QgfHw9ICgoKSA9PiB7XG4gICAgICBjb25zdCBtZXJnZWRQYXRoID0gbWVyZ2VQYXRoKHRoaXMuX2Jhc2VQYXRoLCBwYXRoKTtcbiAgICAgIGNvbnN0IHBhdGhQcmVmaXhMZW5ndGggPSBtZXJnZWRQYXRoID09PSBcIi9cIiA/IDAgOiBtZXJnZWRQYXRoLmxlbmd0aDtcbiAgICAgIHJldHVybiAocmVxdWVzdCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgdXJsLnBhdGhuYW1lID0gdXJsLnBhdGhuYW1lLnNsaWNlKHBhdGhQcmVmaXhMZW5ndGgpIHx8IFwiL1wiO1xuICAgICAgICByZXR1cm4gbmV3IFJlcXVlc3QodXJsLCByZXF1ZXN0KTtcbiAgICAgIH07XG4gICAgfSkoKTtcbiAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKGMsIG5leHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwcGxpY2F0aW9uSGFuZGxlcihyZXBsYWNlUmVxdWVzdChjLnJlcS5yYXcpLCAuLi5nZXRPcHRpb25zKGMpKTtcbiAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIGF3YWl0IG5leHQoKTtcbiAgICB9O1xuICAgIHRoaXMuYWRkUm91dGUoTUVUSE9EX05BTUVfQUxMLCBtZXJnZVBhdGgocGF0aCwgXCIqXCIpLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBhZGRSb3V0ZShtZXRob2QsIHBhdGgsIGhhbmRsZXIpIHtcbiAgICBtZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICBwYXRoID0gbWVyZ2VQYXRoKHRoaXMuX2Jhc2VQYXRoLCBwYXRoKTtcbiAgICBjb25zdCByID0geyBwYXRoLCBtZXRob2QsIGhhbmRsZXIgfTtcbiAgICB0aGlzLnJvdXRlci5hZGQobWV0aG9kLCBwYXRoLCBbaGFuZGxlciwgcl0pO1xuICAgIHRoaXMucm91dGVzLnB1c2gocik7XG4gIH1cbiAgbWF0Y2hSb3V0ZShtZXRob2QsIHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXIubWF0Y2gobWV0aG9kLCBwYXRoKTtcbiAgfVxuICBoYW5kbGVFcnJvcihlcnIsIGMpIHtcbiAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9ySGFuZGxlcihlcnIsIGMpO1xuICAgIH1cbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgZGlzcGF0Y2gocmVxdWVzdCwgZXhlY3V0aW9uQ3R4LCBlbnYsIG1ldGhvZCkge1xuICAgIGlmIChtZXRob2QgPT09IFwiSEVBRFwiKSB7XG4gICAgICByZXR1cm4gKGFzeW5jICgpID0+IG5ldyBSZXNwb25zZShudWxsLCBhd2FpdCB0aGlzLmRpc3BhdGNoKHJlcXVlc3QsIGV4ZWN1dGlvbkN0eCwgZW52LCBcIkdFVFwiKSkpKCk7XG4gICAgfVxuICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgocmVxdWVzdCwgeyBlbnYgfSk7XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSB0aGlzLm1hdGNoUm91dGUobWV0aG9kLCBwYXRoKTtcbiAgICBjb25zdCBjID0gbmV3IENvbnRleHQobmV3IEhvbm9SZXF1ZXN0KHJlcXVlc3QsIHBhdGgsIG1hdGNoUmVzdWx0KSwge1xuICAgICAgZW52LFxuICAgICAgZXhlY3V0aW9uQ3R4LFxuICAgICAgbm90Rm91bmRIYW5kbGVyOiB0aGlzLm5vdEZvdW5kSGFuZGxlclxuICAgIH0pO1xuICAgIGlmIChtYXRjaFJlc3VsdFswXS5sZW5ndGggPT09IDEpIHtcbiAgICAgIGxldCByZXM7XG4gICAgICB0cnkge1xuICAgICAgICByZXMgPSBtYXRjaFJlc3VsdFswXVswXVswXVswXShjLCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYy5yZXMgPSBhd2FpdCB0aGlzLm5vdEZvdW5kSGFuZGxlcihjKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRXJyb3IoZXJyLCBjKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXMgaW5zdGFuY2VvZiBQcm9taXNlID8gcmVzLnRoZW4oXG4gICAgICAgIChyZXNvbHZlZCkgPT4gcmVzb2x2ZWQgfHwgKGMuZmluYWxpemVkID8gYy5yZXMgOiB0aGlzLm5vdEZvdW5kSGFuZGxlcihjKSlcbiAgICAgICkuY2F0Y2goKGVycikgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIsIGMpKSA6IHJlcztcbiAgICB9XG4gICAgY29uc3QgY29tcG9zZWQgPSBjb21wb3NlKG1hdGNoUmVzdWx0WzBdLCB0aGlzLmVycm9ySGFuZGxlciwgdGhpcy5ub3RGb3VuZEhhbmRsZXIpO1xuICAgIHJldHVybiAoYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGF3YWl0IGNvbXBvc2VkKGMpO1xuICAgICAgICBpZiAoIWNvbnRleHQuZmluYWxpemVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgXCJDb250ZXh0IGlzIG5vdCBmaW5hbGl6ZWQuIFlvdSBtYXkgZm9yZ2V0IHJldHVybmluZyBSZXNwb25zZSBvYmplY3Qgb3IgYGF3YWl0IG5leHQoKWBcIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnRleHQucmVzO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUVycm9yKGVyciwgYyk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfVxuICBmZXRjaCA9IChyZXF1ZXN0LCAuLi5yZXN0KSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2gocmVxdWVzdCwgcmVzdFsxXSwgcmVzdFswXSwgcmVxdWVzdC5tZXRob2QpO1xuICB9O1xuICByZXF1ZXN0ID0gKGlucHV0LCByZXF1ZXN0SW5pdCwgRW52LCBleGVjdXRpb25DdHgpID0+IHtcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAocmVxdWVzdEluaXQgIT09IHZvaWQgMCkge1xuICAgICAgICBpbnB1dCA9IG5ldyBSZXF1ZXN0KGlucHV0LCByZXF1ZXN0SW5pdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5mZXRjaChpbnB1dCwgRW52LCBleGVjdXRpb25DdHgpO1xuICAgIH1cbiAgICBpbnB1dCA9IGlucHV0LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgcGF0aCA9IC9eaHR0cHM/OlxcL1xcLy8udGVzdChpbnB1dCkgPyBpbnB1dCA6IGBodHRwOi8vbG9jYWxob3N0JHttZXJnZVBhdGgoXCIvXCIsIGlucHV0KX1gO1xuICAgIGNvbnN0IHJlcSA9IG5ldyBSZXF1ZXN0KHBhdGgsIHJlcXVlc3RJbml0KTtcbiAgICByZXR1cm4gdGhpcy5mZXRjaChyZXEsIEVudiwgZXhlY3V0aW9uQ3R4KTtcbiAgfTtcbiAgZmlyZSA9ICgpID0+IHtcbiAgICBhZGRFdmVudExpc3RlbmVyKFwiZmV0Y2hcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5yZXNwb25kV2l0aCh0aGlzLmRpc3BhdGNoKGV2ZW50LnJlcXVlc3QsIGV2ZW50LCB2b2lkIDAsIGV2ZW50LnJlcXVlc3QubWV0aG9kKSk7XG4gICAgfSk7XG4gIH07XG59O1xuZXhwb3J0IHtcbiAgQ09NUE9TRURfSEFORExFUixcbiAgSG9ubyBhcyBIb25vQmFzZVxufTtcbiIsIi8vIHNyYy9ob25vLnRzXG5pbXBvcnQgeyBIb25vQmFzZSB9IGZyb20gXCIuL2hvbm8tYmFzZS5qc1wiO1xuaW1wb3J0IHsgUmVnRXhwUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyL3JlZy1leHAtcm91dGVyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBTbWFydFJvdXRlciB9IGZyb20gXCIuL3JvdXRlci9zbWFydC1yb3V0ZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IFRyaWVSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXIvdHJpZS1yb3V0ZXIvaW5kZXguanNcIjtcbnZhciBIb25vID0gY2xhc3MgZXh0ZW5kcyBIb25vQmFzZSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMucm91dGVyID0gb3B0aW9ucy5yb3V0ZXIgPz8gbmV3IFNtYXJ0Um91dGVyKHtcbiAgICAgIHJvdXRlcnM6IFtuZXcgUmVnRXhwUm91dGVyKCksIG5ldyBUcmllUm91dGVyKCldXG4gICAgfSk7XG4gIH1cbn07XG5leHBvcnQge1xuICBIb25vXG59O1xuIiwiLy8gc3JjL2h0dHAtZXhjZXB0aW9uLnRzXG52YXIgSFRUUEV4Y2VwdGlvbiA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xuICByZXM7XG4gIHN0YXR1cztcbiAgY29uc3RydWN0b3Ioc3RhdHVzID0gNTAwLCBvcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucz8ubWVzc2FnZSwgeyBjYXVzZTogb3B0aW9ucz8uY2F1c2UgfSk7XG4gICAgdGhpcy5yZXMgPSBvcHRpb25zPy5yZXM7XG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gIH1cbiAgZ2V0UmVzcG9uc2UoKSB7XG4gICAgaWYgKHRoaXMucmVzKSB7XG4gICAgICBjb25zdCBuZXdSZXNwb25zZSA9IG5ldyBSZXNwb25zZSh0aGlzLnJlcy5ib2R5LCB7XG4gICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXG4gICAgICAgIGhlYWRlcnM6IHRoaXMucmVzLmhlYWRlcnNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ld1Jlc3BvbnNlO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMubWVzc2FnZSwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1c1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgSFRUUEV4Y2VwdGlvblxufTtcbiIsIi8vIHNyYy9pbmRleC50c1xuaW1wb3J0IHsgSG9ubyB9IGZyb20gXCIuL2hvbm8uanNcIjtcbmV4cG9ydCB7XG4gIEhvbm9cbn07XG4iLCIvLyBzcmMvcmVxdWVzdC50c1xuaW1wb3J0IHsgcGFyc2VCb2R5IH0gZnJvbSBcIi4vdXRpbHMvYm9keS5qc1wiO1xuaW1wb3J0IHsgZGVjb2RlVVJJQ29tcG9uZW50XywgZ2V0UXVlcnlQYXJhbSwgZ2V0UXVlcnlQYXJhbXMgfSBmcm9tIFwiLi91dGlscy91cmwuanNcIjtcbnZhciBIb25vUmVxdWVzdCA9IGNsYXNzIHtcbiAgcmF3O1xuICAjdmFsaWRhdGVkRGF0YTtcbiAgI21hdGNoUmVzdWx0O1xuICByb3V0ZUluZGV4ID0gMDtcbiAgcGF0aDtcbiAgYm9keUNhY2hlID0ge307XG4gIGNvbnN0cnVjdG9yKHJlcXVlc3QsIHBhdGggPSBcIi9cIiwgbWF0Y2hSZXN1bHQgPSBbW11dKSB7XG4gICAgdGhpcy5yYXcgPSByZXF1ZXN0O1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgdGhpcy4jbWF0Y2hSZXN1bHQgPSBtYXRjaFJlc3VsdDtcbiAgICB0aGlzLiN2YWxpZGF0ZWREYXRhID0ge307XG4gIH1cbiAgcGFyYW0oa2V5KSB7XG4gICAgcmV0dXJuIGtleSA/IHRoaXMuZ2V0RGVjb2RlZFBhcmFtKGtleSkgOiB0aGlzLmdldEFsbERlY29kZWRQYXJhbXMoKTtcbiAgfVxuICBnZXREZWNvZGVkUGFyYW0oa2V5KSB7XG4gICAgY29uc3QgcGFyYW1LZXkgPSB0aGlzLiNtYXRjaFJlc3VsdFswXVt0aGlzLnJvdXRlSW5kZXhdWzFdW2tleV07XG4gICAgY29uc3QgcGFyYW0gPSB0aGlzLmdldFBhcmFtVmFsdWUocGFyYW1LZXkpO1xuICAgIHJldHVybiBwYXJhbSA/IC9cXCUvLnRlc3QocGFyYW0pID8gZGVjb2RlVVJJQ29tcG9uZW50XyhwYXJhbSkgOiBwYXJhbSA6IHZvaWQgMDtcbiAgfVxuICBnZXRBbGxEZWNvZGVkUGFyYW1zKCkge1xuICAgIGNvbnN0IGRlY29kZWQgPSB7fTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy4jbWF0Y2hSZXN1bHRbMF1bdGhpcy5yb3V0ZUluZGV4XVsxXSk7XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFBhcmFtVmFsdWUodGhpcy4jbWF0Y2hSZXN1bHRbMF1bdGhpcy5yb3V0ZUluZGV4XVsxXVtrZXldKTtcbiAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZGVjb2RlZFtrZXldID0gL1xcJS8udGVzdCh2YWx1ZSkgPyBkZWNvZGVVUklDb21wb25lbnRfKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGVjb2RlZDtcbiAgfVxuICBnZXRQYXJhbVZhbHVlKHBhcmFtS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuI21hdGNoUmVzdWx0WzFdID8gdGhpcy4jbWF0Y2hSZXN1bHRbMV1bcGFyYW1LZXldIDogcGFyYW1LZXk7XG4gIH1cbiAgcXVlcnkoa2V5KSB7XG4gICAgcmV0dXJuIGdldFF1ZXJ5UGFyYW0odGhpcy51cmwsIGtleSk7XG4gIH1cbiAgcXVlcmllcyhrZXkpIHtcbiAgICByZXR1cm4gZ2V0UXVlcnlQYXJhbXModGhpcy51cmwsIGtleSk7XG4gIH1cbiAgaGVhZGVyKG5hbWUpIHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmF3LmhlYWRlcnMuZ2V0KG5hbWUudG9Mb3dlckNhc2UoKSkgPz8gdm9pZCAwO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJEYXRhID0ge307XG4gICAgdGhpcy5yYXcuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICBoZWFkZXJEYXRhW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaGVhZGVyRGF0YTtcbiAgfVxuICBhc3luYyBwYXJzZUJvZHkob3B0aW9ucykge1xuICAgIGlmICh0aGlzLmJvZHlDYWNoZS5wYXJzZWRCb2R5KSB7XG4gICAgICByZXR1cm4gdGhpcy5ib2R5Q2FjaGUucGFyc2VkQm9keTtcbiAgICB9XG4gICAgY29uc3QgcGFyc2VkQm9keSA9IGF3YWl0IHBhcnNlQm9keSh0aGlzLCBvcHRpb25zKTtcbiAgICB0aGlzLmJvZHlDYWNoZS5wYXJzZWRCb2R5ID0gcGFyc2VkQm9keTtcbiAgICByZXR1cm4gcGFyc2VkQm9keTtcbiAgfVxuICBjYWNoZWRCb2R5ID0gKGtleSkgPT4ge1xuICAgIGNvbnN0IHsgYm9keUNhY2hlLCByYXcgfSA9IHRoaXM7XG4gICAgY29uc3QgY2FjaGVkQm9keSA9IGJvZHlDYWNoZVtrZXldO1xuICAgIGlmIChjYWNoZWRCb2R5KSB7XG4gICAgICByZXR1cm4gY2FjaGVkQm9keTtcbiAgICB9XG4gICAgaWYgKCFib2R5Q2FjaGVba2V5XSkge1xuICAgICAgZm9yIChjb25zdCBrZXlPZkJvZHlDYWNoZSBvZiBPYmplY3Qua2V5cyhib2R5Q2FjaGUpKSB7XG4gICAgICAgIGlmIChrZXlPZkJvZHlDYWNoZSA9PT0gXCJwYXJzZWRCb2R5XCIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBsZXQgYm9keSA9IGF3YWl0IGJvZHlDYWNoZVtrZXlPZkJvZHlDYWNoZV07XG4gICAgICAgICAgaWYgKGtleU9mQm9keUNhY2hlID09PSBcImpzb25cIikge1xuICAgICAgICAgICAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXdhaXQgbmV3IFJlc3BvbnNlKGJvZHkpW2tleV0oKTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJvZHlDYWNoZVtrZXldID0gcmF3W2tleV0oKTtcbiAgfTtcbiAganNvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZWRCb2R5KFwianNvblwiKTtcbiAgfVxuICB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZEJvZHkoXCJ0ZXh0XCIpO1xuICB9XG4gIGFycmF5QnVmZmVyKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZEJvZHkoXCJhcnJheUJ1ZmZlclwiKTtcbiAgfVxuICBibG9iKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZEJvZHkoXCJibG9iXCIpO1xuICB9XG4gIGZvcm1EYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZEJvZHkoXCJmb3JtRGF0YVwiKTtcbiAgfVxuICBhZGRWYWxpZGF0ZWREYXRhKHRhcmdldCwgZGF0YSkge1xuICAgIHRoaXMuI3ZhbGlkYXRlZERhdGFbdGFyZ2V0XSA9IGRhdGE7XG4gIH1cbiAgdmFsaWQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHRoaXMuI3ZhbGlkYXRlZERhdGFbdGFyZ2V0XTtcbiAgfVxuICBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLnJhdy51cmw7XG4gIH1cbiAgZ2V0IG1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yYXcubWV0aG9kO1xuICB9XG4gIGdldCBtYXRjaGVkUm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLiNtYXRjaFJlc3VsdFswXS5tYXAoKFtbLCByb3V0ZV1dKSA9PiByb3V0ZSk7XG4gIH1cbiAgZ2V0IHJvdXRlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy4jbWF0Y2hSZXN1bHRbMF0ubWFwKChbWywgcm91dGVdXSkgPT4gcm91dGUpW3RoaXMucm91dGVJbmRleF0ucGF0aDtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIEhvbm9SZXF1ZXN0XG59O1xuIiwiLy8gc3JjL3JvdXRlci50c1xudmFyIE1FVEhPRF9OQU1FX0FMTCA9IFwiQUxMXCI7XG52YXIgTUVUSE9EX05BTUVfQUxMX0xPV0VSQ0FTRSA9IFwiYWxsXCI7XG52YXIgTUVUSE9EUyA9IFtcImdldFwiLCBcInBvc3RcIiwgXCJwdXRcIiwgXCJkZWxldGVcIiwgXCJvcHRpb25zXCIsIFwicGF0Y2hcIl07XG52YXIgTUVTU0FHRV9NQVRDSEVSX0lTX0FMUkVBRFlfQlVJTFQgPSBcIkNhbiBub3QgYWRkIGEgcm91dGUgc2luY2UgdGhlIG1hdGNoZXIgaXMgYWxyZWFkeSBidWlsdC5cIjtcbnZhciBVbnN1cHBvcnRlZFBhdGhFcnJvciA9IGNsYXNzIGV4dGVuZHMgRXJyb3Ige1xufTtcbmV4cG9ydCB7XG4gIE1FU1NBR0VfTUFUQ0hFUl9JU19BTFJFQURZX0JVSUxULFxuICBNRVRIT0RTLFxuICBNRVRIT0RfTkFNRV9BTEwsXG4gIE1FVEhPRF9OQU1FX0FMTF9MT1dFUkNBU0UsXG4gIFVuc3VwcG9ydGVkUGF0aEVycm9yXG59O1xuIiwiLy8gc3JjL3JvdXRlci9yZWctZXhwLXJvdXRlci9pbmRleC50c1xuaW1wb3J0IHsgUmVnRXhwUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyLmpzXCI7XG5leHBvcnQge1xuICBSZWdFeHBSb3V0ZXJcbn07XG4iLCIvLyBzcmMvcm91dGVyL3JlZy1leHAtcm91dGVyL25vZGUudHNcbnZhciBMQUJFTF9SRUdfRVhQX1NUUiA9IFwiW14vXStcIjtcbnZhciBPTkxZX1dJTERDQVJEX1JFR19FWFBfU1RSID0gXCIuKlwiO1xudmFyIFRBSUxfV0lMRENBUkRfUkVHX0VYUF9TVFIgPSBcIig/OnwvLiopXCI7XG52YXIgUEFUSF9FUlJPUiA9IFN5bWJvbCgpO1xudmFyIHJlZ0V4cE1ldGFDaGFycyA9IG5ldyBTZXQoXCIuXFxcXCsqW15dJCgpXCIpO1xuZnVuY3Rpb24gY29tcGFyZUtleShhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBiLmxlbmd0aCA9PT0gMSA/IGEgPCBiID8gLTEgOiAxIDogLTE7XG4gIH1cbiAgaWYgKGIubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKGEgPT09IE9OTFlfV0lMRENBUkRfUkVHX0VYUF9TVFIgfHwgYSA9PT0gVEFJTF9XSUxEQ0FSRF9SRUdfRVhQX1NUUikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGIgPT09IE9OTFlfV0lMRENBUkRfUkVHX0VYUF9TVFIgfHwgYiA9PT0gVEFJTF9XSUxEQ0FSRF9SRUdfRVhQX1NUUikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA9PT0gTEFCRUxfUkVHX0VYUF9TVFIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmIChiID09PSBMQUJFTF9SRUdfRVhQX1NUUikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICByZXR1cm4gYS5sZW5ndGggPT09IGIubGVuZ3RoID8gYSA8IGIgPyAtMSA6IDEgOiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xufVxudmFyIE5vZGUgPSBjbGFzcyB7XG4gIGluZGV4O1xuICB2YXJJbmRleDtcbiAgY2hpbGRyZW4gPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgaW5zZXJ0KHRva2VucywgaW5kZXgsIHBhcmFtTWFwLCBjb250ZXh0LCBwYXRoRXJyb3JDaGVja09ubHkpIHtcbiAgICBpZiAodG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRoaXMuaW5kZXggIT09IHZvaWQgMCkge1xuICAgICAgICB0aHJvdyBQQVRIX0VSUk9SO1xuICAgICAgfVxuICAgICAgaWYgKHBhdGhFcnJvckNoZWNrT25seSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFt0b2tlbiwgLi4ucmVzdFRva2Vuc10gPSB0b2tlbnM7XG4gICAgY29uc3QgcGF0dGVybiA9IHRva2VuID09PSBcIipcIiA/IHJlc3RUb2tlbnMubGVuZ3RoID09PSAwID8gW1wiXCIsIFwiXCIsIE9OTFlfV0lMRENBUkRfUkVHX0VYUF9TVFJdIDogW1wiXCIsIFwiXCIsIExBQkVMX1JFR19FWFBfU1RSXSA6IHRva2VuID09PSBcIi8qXCIgPyBbXCJcIiwgXCJcIiwgVEFJTF9XSUxEQ0FSRF9SRUdfRVhQX1NUUl0gOiB0b2tlbi5tYXRjaCgvXlxcOihbXlxce1xcfV0rKSg/OlxceyguKylcXH0pPyQvKTtcbiAgICBsZXQgbm9kZTtcbiAgICBpZiAocGF0dGVybikge1xuICAgICAgY29uc3QgbmFtZSA9IHBhdHRlcm5bMV07XG4gICAgICBsZXQgcmVnZXhwU3RyID0gcGF0dGVyblsyXSB8fCBMQUJFTF9SRUdfRVhQX1NUUjtcbiAgICAgIGlmIChuYW1lICYmIHBhdHRlcm5bMl0pIHtcbiAgICAgICAgcmVnZXhwU3RyID0gcmVnZXhwU3RyLnJlcGxhY2UoL15cXCgoPyFcXD86KSg/PVteKV0rXFwpJCkvLCBcIig/OlwiKTtcbiAgICAgICAgaWYgKC9cXCgoPyFcXD86KS8udGVzdChyZWdleHBTdHIpKSB7XG4gICAgICAgICAgdGhyb3cgUEFUSF9FUlJPUjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbm9kZSA9IHRoaXMuY2hpbGRyZW5bcmVnZXhwU3RyXTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbikuc29tZShcbiAgICAgICAgICAoaykgPT4gayAhPT0gT05MWV9XSUxEQ0FSRF9SRUdfRVhQX1NUUiAmJiBrICE9PSBUQUlMX1dJTERDQVJEX1JFR19FWFBfU1RSXG4gICAgICAgICkpIHtcbiAgICAgICAgICB0aHJvdyBQQVRIX0VSUk9SO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoRXJyb3JDaGVja09ubHkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IHRoaXMuY2hpbGRyZW5bcmVnZXhwU3RyXSA9IG5ldyBOb2RlKCk7XG4gICAgICAgIGlmIChuYW1lICE9PSBcIlwiKSB7XG4gICAgICAgICAgbm9kZS52YXJJbmRleCA9IGNvbnRleHQudmFySW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFwYXRoRXJyb3JDaGVja09ubHkgJiYgbmFtZSAhPT0gXCJcIikge1xuICAgICAgICBwYXJhbU1hcC5wdXNoKFtuYW1lLCBub2RlLnZhckluZGV4XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSB0aGlzLmNoaWxkcmVuW3Rva2VuXTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5jaGlsZHJlbikuc29tZShcbiAgICAgICAgICAoaykgPT4gay5sZW5ndGggPiAxICYmIGsgIT09IE9OTFlfV0lMRENBUkRfUkVHX0VYUF9TVFIgJiYgayAhPT0gVEFJTF9XSUxEQ0FSRF9SRUdfRVhQX1NUUlxuICAgICAgICApKSB7XG4gICAgICAgICAgdGhyb3cgUEFUSF9FUlJPUjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aEVycm9yQ2hlY2tPbmx5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG5vZGUgPSB0aGlzLmNoaWxkcmVuW3Rva2VuXSA9IG5ldyBOb2RlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIG5vZGUuaW5zZXJ0KHJlc3RUb2tlbnMsIGluZGV4LCBwYXJhbU1hcCwgY29udGV4dCwgcGF0aEVycm9yQ2hlY2tPbmx5KTtcbiAgfVxuICBidWlsZFJlZ0V4cFN0cigpIHtcbiAgICBjb25zdCBjaGlsZEtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmNoaWxkcmVuKS5zb3J0KGNvbXBhcmVLZXkpO1xuICAgIGNvbnN0IHN0ckxpc3QgPSBjaGlsZEtleXMubWFwKChrKSA9PiB7XG4gICAgICBjb25zdCBjID0gdGhpcy5jaGlsZHJlbltrXTtcbiAgICAgIHJldHVybiAodHlwZW9mIGMudmFySW5kZXggPT09IFwibnVtYmVyXCIgPyBgKCR7a30pQCR7Yy52YXJJbmRleH1gIDogcmVnRXhwTWV0YUNoYXJzLmhhcyhrKSA/IGBcXFxcJHtrfWAgOiBrKSArIGMuYnVpbGRSZWdFeHBTdHIoKTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIHRoaXMuaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHN0ckxpc3QudW5zaGlmdChgIyR7dGhpcy5pbmRleH1gKTtcbiAgICB9XG4gICAgaWYgKHN0ckxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgaWYgKHN0ckxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gc3RyTGlzdFswXTtcbiAgICB9XG4gICAgcmV0dXJuIFwiKD86XCIgKyBzdHJMaXN0LmpvaW4oXCJ8XCIpICsgXCIpXCI7XG4gIH1cbn07XG5leHBvcnQge1xuICBOb2RlLFxuICBQQVRIX0VSUk9SXG59O1xuIiwiLy8gc3JjL3JvdXRlci9yZWctZXhwLXJvdXRlci9yb3V0ZXIudHNcbmltcG9ydCB7XG4gIE1FU1NBR0VfTUFUQ0hFUl9JU19BTFJFQURZX0JVSUxULFxuICBNRVRIT0RfTkFNRV9BTEwsXG4gIFVuc3VwcG9ydGVkUGF0aEVycm9yXG59IGZyb20gXCIuLi8uLi9yb3V0ZXIuanNcIjtcbmltcG9ydCB7IGNoZWNrT3B0aW9uYWxQYXJhbWV0ZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXJsLmpzXCI7XG5pbXBvcnQgeyBQQVRIX0VSUk9SIH0gZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHsgVHJpZSB9IGZyb20gXCIuL3RyaWUuanNcIjtcbnZhciBlbXB0eVBhcmFtID0gW107XG52YXIgbnVsbE1hdGNoZXIgPSBbL14kLywgW10sIC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpXTtcbnZhciB3aWxkY2FyZFJlZ0V4cENhY2hlID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG5mdW5jdGlvbiBidWlsZFdpbGRjYXJkUmVnRXhwKHBhdGgpIHtcbiAgcmV0dXJuIHdpbGRjYXJkUmVnRXhwQ2FjaGVbcGF0aF0gPz89IG5ldyBSZWdFeHAoXG4gICAgcGF0aCA9PT0gXCIqXCIgPyBcIlwiIDogYF4ke3BhdGgucmVwbGFjZShcbiAgICAgIC9cXC9cXCokfChbLlxcXFwrKlteXFxdJCgpXSkvZyxcbiAgICAgIChfLCBtZXRhQ2hhcikgPT4gbWV0YUNoYXIgPyBgXFxcXCR7bWV0YUNoYXJ9YCA6IFwiKD86fC8uKilcIlxuICAgICl9JGBcbiAgKTtcbn1cbmZ1bmN0aW9uIGNsZWFyV2lsZGNhcmRSZWdFeHBDYWNoZSgpIHtcbiAgd2lsZGNhcmRSZWdFeHBDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gYnVpbGRNYXRjaGVyRnJvbVByZXByb2Nlc3NlZFJvdXRlcyhyb3V0ZXMpIHtcbiAgY29uc3QgdHJpZSA9IG5ldyBUcmllKCk7XG4gIGNvbnN0IGhhbmRsZXJEYXRhID0gW107XG4gIGlmIChyb3V0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxNYXRjaGVyO1xuICB9XG4gIGNvbnN0IHJvdXRlc1dpdGhTdGF0aWNQYXRoRmxhZyA9IHJvdXRlcy5tYXAoXG4gICAgKHJvdXRlKSA9PiBbIS9cXCp8XFwvOi8udGVzdChyb3V0ZVswXSksIC4uLnJvdXRlXVxuICApLnNvcnQoXG4gICAgKFtpc1N0YXRpY0EsIHBhdGhBXSwgW2lzU3RhdGljQiwgcGF0aEJdKSA9PiBpc1N0YXRpY0EgPyAxIDogaXNTdGF0aWNCID8gLTEgOiBwYXRoQS5sZW5ndGggLSBwYXRoQi5sZW5ndGhcbiAgKTtcbiAgY29uc3Qgc3RhdGljTWFwID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGZvciAobGV0IGkgPSAwLCBqID0gLTEsIGxlbiA9IHJvdXRlc1dpdGhTdGF0aWNQYXRoRmxhZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IFtwYXRoRXJyb3JDaGVja09ubHksIHBhdGgsIGhhbmRsZXJzXSA9IHJvdXRlc1dpdGhTdGF0aWNQYXRoRmxhZ1tpXTtcbiAgICBpZiAocGF0aEVycm9yQ2hlY2tPbmx5KSB7XG4gICAgICBzdGF0aWNNYXBbcGF0aF0gPSBbaGFuZGxlcnMubWFwKChbaF0pID0+IFtoLCAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKV0pLCBlbXB0eVBhcmFtXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaisrO1xuICAgIH1cbiAgICBsZXQgcGFyYW1Bc3NvYztcbiAgICB0cnkge1xuICAgICAgcGFyYW1Bc3NvYyA9IHRyaWUuaW5zZXJ0KHBhdGgsIGosIHBhdGhFcnJvckNoZWNrT25seSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgZSA9PT0gUEFUSF9FUlJPUiA/IG5ldyBVbnN1cHBvcnRlZFBhdGhFcnJvcihwYXRoKSA6IGU7XG4gICAgfVxuICAgIGlmIChwYXRoRXJyb3JDaGVja09ubHkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBoYW5kbGVyRGF0YVtqXSA9IGhhbmRsZXJzLm1hcCgoW2gsIHBhcmFtQ291bnRdKSA9PiB7XG4gICAgICBjb25zdCBwYXJhbUluZGV4TWFwID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBwYXJhbUNvdW50IC09IDE7XG4gICAgICBmb3IgKDsgcGFyYW1Db3VudCA+PSAwOyBwYXJhbUNvdW50LS0pIHtcbiAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gcGFyYW1Bc3NvY1twYXJhbUNvdW50XTtcbiAgICAgICAgcGFyYW1JbmRleE1hcFtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gW2gsIHBhcmFtSW5kZXhNYXBdO1xuICAgIH0pO1xuICB9XG4gIGNvbnN0IFtyZWdleHAsIGluZGV4UmVwbGFjZW1lbnRNYXAsIHBhcmFtUmVwbGFjZW1lbnRNYXBdID0gdHJpZS5idWlsZFJlZ0V4cCgpO1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gaGFuZGxlckRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMCwgbGVuMiA9IGhhbmRsZXJEYXRhW2ldLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xuICAgICAgY29uc3QgbWFwID0gaGFuZGxlckRhdGFbaV1bal0/LlsxXTtcbiAgICAgIGlmICghbWFwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG1hcCk7XG4gICAgICBmb3IgKGxldCBrID0gMCwgbGVuMyA9IGtleXMubGVuZ3RoOyBrIDwgbGVuMzsgaysrKSB7XG4gICAgICAgIG1hcFtrZXlzW2tdXSA9IHBhcmFtUmVwbGFjZW1lbnRNYXBbbWFwW2tleXNba11dXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlck1hcCA9IFtdO1xuICBmb3IgKGNvbnN0IGkgaW4gaW5kZXhSZXBsYWNlbWVudE1hcCkge1xuICAgIGhhbmRsZXJNYXBbaV0gPSBoYW5kbGVyRGF0YVtpbmRleFJlcGxhY2VtZW50TWFwW2ldXTtcbiAgfVxuICByZXR1cm4gW3JlZ2V4cCwgaGFuZGxlck1hcCwgc3RhdGljTWFwXTtcbn1cbmZ1bmN0aW9uIGZpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmUsIHBhdGgpIHtcbiAgaWYgKCFtaWRkbGV3YXJlKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXMobWlkZGxld2FyZSkuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCkpIHtcbiAgICBpZiAoYnVpbGRXaWxkY2FyZFJlZ0V4cChrKS50ZXN0KHBhdGgpKSB7XG4gICAgICByZXR1cm4gWy4uLm1pZGRsZXdhcmVba11dO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdm9pZCAwO1xufVxudmFyIFJlZ0V4cFJvdXRlciA9IGNsYXNzIHtcbiAgbmFtZSA9IFwiUmVnRXhwUm91dGVyXCI7XG4gIG1pZGRsZXdhcmU7XG4gIHJvdXRlcztcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5taWRkbGV3YXJlID0geyBbTUVUSE9EX05BTUVfQUxMXTogLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCkgfTtcbiAgICB0aGlzLnJvdXRlcyA9IHsgW01FVEhPRF9OQU1FX0FMTF06IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpIH07XG4gIH1cbiAgYWRkKG1ldGhvZCwgcGF0aCwgaGFuZGxlcikge1xuICAgIGNvbnN0IHsgbWlkZGxld2FyZSwgcm91dGVzIH0gPSB0aGlzO1xuICAgIGlmICghbWlkZGxld2FyZSB8fCAhcm91dGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoTUVTU0FHRV9NQVRDSEVSX0lTX0FMUkVBRFlfQlVJTFQpO1xuICAgIH1cbiAgICBpZiAoIW1pZGRsZXdhcmVbbWV0aG9kXSkge1xuICAgICAgO1xuICAgICAgW21pZGRsZXdhcmUsIHJvdXRlc10uZm9yRWFjaCgoaGFuZGxlck1hcCkgPT4ge1xuICAgICAgICBoYW5kbGVyTWFwW21ldGhvZF0gPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgT2JqZWN0LmtleXMoaGFuZGxlck1hcFtNRVRIT0RfTkFNRV9BTExdKS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgaGFuZGxlck1hcFttZXRob2RdW3BdID0gWy4uLmhhbmRsZXJNYXBbTUVUSE9EX05BTUVfQUxMXVtwXV07XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwYXRoID09PSBcIi8qXCIpIHtcbiAgICAgIHBhdGggPSBcIipcIjtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1Db3VudCA9IChwYXRoLm1hdGNoKC9cXC86L2cpIHx8IFtdKS5sZW5ndGg7XG4gICAgaWYgKC9cXCokLy50ZXN0KHBhdGgpKSB7XG4gICAgICBjb25zdCByZSA9IGJ1aWxkV2lsZGNhcmRSZWdFeHAocGF0aCk7XG4gICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfTkFNRV9BTEwpIHtcbiAgICAgICAgT2JqZWN0LmtleXMobWlkZGxld2FyZSkuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICAgIG1pZGRsZXdhcmVbbV1bcGF0aF0gfHw9IGZpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmVbbV0sIHBhdGgpIHx8IGZpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmVbTUVUSE9EX05BTUVfQUxMXSwgcGF0aCkgfHwgW107XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWlkZGxld2FyZVttZXRob2RdW3BhdGhdIHx8PSBmaW5kTWlkZGxld2FyZShtaWRkbGV3YXJlW21ldGhvZF0sIHBhdGgpIHx8IGZpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmVbTUVUSE9EX05BTUVfQUxMXSwgcGF0aCkgfHwgW107XG4gICAgICB9XG4gICAgICBPYmplY3Qua2V5cyhtaWRkbGV3YXJlKS5mb3JFYWNoKChtKSA9PiB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9OQU1FX0FMTCB8fCBtZXRob2QgPT09IG0pIHtcbiAgICAgICAgICBPYmplY3Qua2V5cyhtaWRkbGV3YXJlW21dKS5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICByZS50ZXN0KHApICYmIG1pZGRsZXdhcmVbbV1bcF0ucHVzaChbaGFuZGxlciwgcGFyYW1Db3VudF0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKHJvdXRlcykuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfTkFNRV9BTEwgfHwgbWV0aG9kID09PSBtKSB7XG4gICAgICAgICAgT2JqZWN0LmtleXMocm91dGVzW21dKS5mb3JFYWNoKFxuICAgICAgICAgICAgKHApID0+IHJlLnRlc3QocCkgJiYgcm91dGVzW21dW3BdLnB1c2goW2hhbmRsZXIsIHBhcmFtQ291bnRdKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXRocyA9IGNoZWNrT3B0aW9uYWxQYXJhbWV0ZXIocGF0aCkgfHwgW3BhdGhdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwYXRocy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgcGF0aDIgPSBwYXRoc1tpXTtcbiAgICAgIE9iamVjdC5rZXlzKHJvdXRlcykuZm9yRWFjaCgobSkgPT4ge1xuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfTkFNRV9BTEwgfHwgbWV0aG9kID09PSBtKSB7XG4gICAgICAgICAgcm91dGVzW21dW3BhdGgyXSB8fD0gW1xuICAgICAgICAgICAgLi4uZmluZE1pZGRsZXdhcmUobWlkZGxld2FyZVttXSwgcGF0aDIpIHx8IGZpbmRNaWRkbGV3YXJlKG1pZGRsZXdhcmVbTUVUSE9EX05BTUVfQUxMXSwgcGF0aDIpIHx8IFtdXG4gICAgICAgICAgXTtcbiAgICAgICAgICByb3V0ZXNbbV1bcGF0aDJdLnB1c2goW2hhbmRsZXIsIHBhcmFtQ291bnQgLSBsZW4gKyBpICsgMV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbWF0Y2gobWV0aG9kLCBwYXRoKSB7XG4gICAgY2xlYXJXaWxkY2FyZFJlZ0V4cENhY2hlKCk7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSB0aGlzLmJ1aWxkQWxsTWF0Y2hlcnMoKTtcbiAgICB0aGlzLm1hdGNoID0gKG1ldGhvZDIsIHBhdGgyKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gbWF0Y2hlcnNbbWV0aG9kMl0gfHwgbWF0Y2hlcnNbTUVUSE9EX05BTUVfQUxMXTtcbiAgICAgIGNvbnN0IHN0YXRpY01hdGNoID0gbWF0Y2hlclsyXVtwYXRoMl07XG4gICAgICBpZiAoc3RhdGljTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRpY01hdGNoO1xuICAgICAgfVxuICAgICAgY29uc3QgbWF0Y2ggPSBwYXRoMi5tYXRjaChtYXRjaGVyWzBdKTtcbiAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFtbXSwgZW1wdHlQYXJhbV07XG4gICAgICB9XG4gICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4T2YoXCJcIiwgMSk7XG4gICAgICByZXR1cm4gW21hdGNoZXJbMV1baW5kZXhdLCBtYXRjaF07XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5tYXRjaChtZXRob2QsIHBhdGgpO1xuICB9XG4gIGJ1aWxkQWxsTWF0Y2hlcnMoKSB7XG4gICAgY29uc3QgbWF0Y2hlcnMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBbLi4uT2JqZWN0LmtleXModGhpcy5yb3V0ZXMpLCAuLi5PYmplY3Qua2V5cyh0aGlzLm1pZGRsZXdhcmUpXS5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICAgIG1hdGNoZXJzW21ldGhvZF0gfHw9IHRoaXMuYnVpbGRNYXRjaGVyKG1ldGhvZCk7XG4gICAgfSk7XG4gICAgdGhpcy5taWRkbGV3YXJlID0gdGhpcy5yb3V0ZXMgPSB2b2lkIDA7XG4gICAgcmV0dXJuIG1hdGNoZXJzO1xuICB9XG4gIGJ1aWxkTWF0Y2hlcihtZXRob2QpIHtcbiAgICBjb25zdCByb3V0ZXMgPSBbXTtcbiAgICBsZXQgaGFzT3duUm91dGUgPSBtZXRob2QgPT09IE1FVEhPRF9OQU1FX0FMTDtcbiAgICBbdGhpcy5taWRkbGV3YXJlLCB0aGlzLnJvdXRlc10uZm9yRWFjaCgocikgPT4ge1xuICAgICAgY29uc3Qgb3duUm91dGUgPSByW21ldGhvZF0gPyBPYmplY3Qua2V5cyhyW21ldGhvZF0pLm1hcCgocGF0aCkgPT4gW3BhdGgsIHJbbWV0aG9kXVtwYXRoXV0pIDogW107XG4gICAgICBpZiAob3duUm91dGUubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGhhc093blJvdXRlIHx8PSB0cnVlO1xuICAgICAgICByb3V0ZXMucHVzaCguLi5vd25Sb3V0ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1ldGhvZCAhPT0gTUVUSE9EX05BTUVfQUxMKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKFxuICAgICAgICAgIC4uLk9iamVjdC5rZXlzKHJbTUVUSE9EX05BTUVfQUxMXSkubWFwKChwYXRoKSA9PiBbcGF0aCwgcltNRVRIT0RfTkFNRV9BTExdW3BhdGhdXSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoIWhhc093blJvdXRlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1aWxkTWF0Y2hlckZyb21QcmVwcm9jZXNzZWRSb3V0ZXMocm91dGVzKTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnQge1xuICBSZWdFeHBSb3V0ZXJcbn07XG4iLCIvLyBzcmMvcm91dGVyL3JlZy1leHAtcm91dGVyL3RyaWUudHNcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLmpzXCI7XG52YXIgVHJpZSA9IGNsYXNzIHtcbiAgY29udGV4dCA9IHsgdmFySW5kZXg6IDAgfTtcbiAgcm9vdCA9IG5ldyBOb2RlKCk7XG4gIGluc2VydChwYXRoLCBpbmRleCwgcGF0aEVycm9yQ2hlY2tPbmx5KSB7XG4gICAgY29uc3QgcGFyYW1Bc3NvYyA9IFtdO1xuICAgIGNvbnN0IGdyb3VwcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyA7ICkge1xuICAgICAgbGV0IHJlcGxhY2VkID0gZmFsc2U7XG4gICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXHtbXn1dK1xcfS9nLCAobSkgPT4ge1xuICAgICAgICBjb25zdCBtYXJrID0gYEBcXFxcJHtpfWA7XG4gICAgICAgIGdyb3Vwc1tpXSA9IFttYXJrLCBtXTtcbiAgICAgICAgaSsrO1xuICAgICAgICByZXBsYWNlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBtYXJrO1xuICAgICAgfSk7XG4gICAgICBpZiAoIXJlcGxhY2VkKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b2tlbnMgPSBwYXRoLm1hdGNoKC8oPzo6W15cXC9dKyl8KD86XFwvXFwqJCl8Li9nKSB8fCBbXTtcbiAgICBmb3IgKGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBbbWFya10gPSBncm91cHNbaV07XG4gICAgICBmb3IgKGxldCBqID0gdG9rZW5zLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgIGlmICh0b2tlbnNbal0uaW5kZXhPZihtYXJrKSAhPT0gLTEpIHtcbiAgICAgICAgICB0b2tlbnNbal0gPSB0b2tlbnNbal0ucmVwbGFjZShtYXJrLCBncm91cHNbaV1bMV0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucm9vdC5pbnNlcnQodG9rZW5zLCBpbmRleCwgcGFyYW1Bc3NvYywgdGhpcy5jb250ZXh0LCBwYXRoRXJyb3JDaGVja09ubHkpO1xuICAgIHJldHVybiBwYXJhbUFzc29jO1xuICB9XG4gIGJ1aWxkUmVnRXhwKCkge1xuICAgIGxldCByZWdleHAgPSB0aGlzLnJvb3QuYnVpbGRSZWdFeHBTdHIoKTtcbiAgICBpZiAocmVnZXhwID09PSBcIlwiKSB7XG4gICAgICByZXR1cm4gWy9eJC8sIFtdLCBbXV07XG4gICAgfVxuICAgIGxldCBjYXB0dXJlSW5kZXggPSAwO1xuICAgIGNvbnN0IGluZGV4UmVwbGFjZW1lbnRNYXAgPSBbXTtcbiAgICBjb25zdCBwYXJhbVJlcGxhY2VtZW50TWFwID0gW107XG4gICAgcmVnZXhwID0gcmVnZXhwLnJlcGxhY2UoLyMoXFxkKyl8QChcXGQrKXxcXC5cXCpcXCQvZywgKF8sIGhhbmRsZXJJbmRleCwgcGFyYW1JbmRleCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBoYW5kbGVySW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaW5kZXhSZXBsYWNlbWVudE1hcFsrK2NhcHR1cmVJbmRleF0gPSBOdW1iZXIoaGFuZGxlckluZGV4KTtcbiAgICAgICAgcmV0dXJuIFwiJCgpXCI7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBhcmFtSW5kZXggIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgcGFyYW1SZXBsYWNlbWVudE1hcFtOdW1iZXIocGFyYW1JbmRleCldID0gKytjYXB0dXJlSW5kZXg7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtuZXcgUmVnRXhwKGBeJHtyZWdleHB9YCksIGluZGV4UmVwbGFjZW1lbnRNYXAsIHBhcmFtUmVwbGFjZW1lbnRNYXBdO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgVHJpZVxufTtcbiIsIi8vIHNyYy9yb3V0ZXIvc21hcnQtcm91dGVyL2luZGV4LnRzXG5pbXBvcnQgeyBTbWFydFJvdXRlciB9IGZyb20gXCIuL3JvdXRlci5qc1wiO1xuZXhwb3J0IHtcbiAgU21hcnRSb3V0ZXJcbn07XG4iLCIvLyBzcmMvcm91dGVyL3NtYXJ0LXJvdXRlci9yb3V0ZXIudHNcbmltcG9ydCB7IE1FU1NBR0VfTUFUQ0hFUl9JU19BTFJFQURZX0JVSUxULCBVbnN1cHBvcnRlZFBhdGhFcnJvciB9IGZyb20gXCIuLi8uLi9yb3V0ZXIuanNcIjtcbnZhciBTbWFydFJvdXRlciA9IGNsYXNzIHtcbiAgbmFtZSA9IFwiU21hcnRSb3V0ZXJcIjtcbiAgcm91dGVycyA9IFtdO1xuICByb3V0ZXMgPSBbXTtcbiAgY29uc3RydWN0b3IoaW5pdCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XG4gIH1cbiAgYWRkKG1ldGhvZCwgcGF0aCwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5yb3V0ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihNRVNTQUdFX01BVENIRVJfSVNfQUxSRUFEWV9CVUlMVCk7XG4gICAgfVxuICAgIHRoaXMucm91dGVzLnB1c2goW21ldGhvZCwgcGF0aCwgaGFuZGxlcl0pO1xuICB9XG4gIG1hdGNoKG1ldGhvZCwgcGF0aCkge1xuICAgIGlmICghdGhpcy5yb3V0ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhdGFsIGVycm9yXCIpO1xuICAgIH1cbiAgICBjb25zdCB7IHJvdXRlcnMsIHJvdXRlcyB9ID0gdGhpcztcbiAgICBjb25zdCBsZW4gPSByb3V0ZXJzLmxlbmd0aDtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHJlcztcbiAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSByb3V0ZXJzW2ldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVzLmZvckVhY2goKGFyZ3MpID0+IHtcbiAgICAgICAgICByb3V0ZXIuYWRkKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzID0gcm91dGVyLm1hdGNoKG1ldGhvZCwgcGF0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRQYXRoRXJyb3IpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgICAgdGhpcy5tYXRjaCA9IHJvdXRlci5tYXRjaC5iaW5kKHJvdXRlcik7XG4gICAgICB0aGlzLnJvdXRlcnMgPSBbcm91dGVyXTtcbiAgICAgIHRoaXMucm91dGVzID0gdm9pZCAwO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhdGFsIGVycm9yXCIpO1xuICAgIH1cbiAgICB0aGlzLm5hbWUgPSBgU21hcnRSb3V0ZXIgKyAke3RoaXMuYWN0aXZlUm91dGVyLm5hbWV9YDtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIGdldCBhY3RpdmVSb3V0ZXIoKSB7XG4gICAgaWYgKHRoaXMucm91dGVzIHx8IHRoaXMucm91dGVycy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFjdGl2ZSByb3V0ZXIgaGFzIGJlZW4gZGV0ZXJtaW5lZCB5ZXQuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJzWzBdO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgU21hcnRSb3V0ZXJcbn07XG4iLCIvLyBzcmMvcm91dGVyL3RyaWUtcm91dGVyL2luZGV4LnRzXG5pbXBvcnQgeyBUcmllUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyLmpzXCI7XG5leHBvcnQge1xuICBUcmllUm91dGVyXG59O1xuIiwiLy8gc3JjL3JvdXRlci90cmllLXJvdXRlci9ub2RlLnRzXG5pbXBvcnQgeyBNRVRIT0RfTkFNRV9BTEwgfSBmcm9tIFwiLi4vLi4vcm91dGVyLmpzXCI7XG5pbXBvcnQgeyBnZXRQYXR0ZXJuLCBzcGxpdFBhdGgsIHNwbGl0Um91dGluZ1BhdGggfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXJsLmpzXCI7XG52YXIgTm9kZSA9IGNsYXNzIHtcbiAgbWV0aG9kcztcbiAgY2hpbGRyZW47XG4gIHBhdHRlcm5zO1xuICBvcmRlciA9IDA7XG4gIG5hbWU7XG4gIHBhcmFtcyA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBjb25zdHJ1Y3RvcihtZXRob2QsIGhhbmRsZXIsIGNoaWxkcmVuKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuIHx8IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMubWV0aG9kcyA9IFtdO1xuICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgaWYgKG1ldGhvZCAmJiBoYW5kbGVyKSB7XG4gICAgICBjb25zdCBtID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBtW21ldGhvZF0gPSB7IGhhbmRsZXIsIHBvc3NpYmxlS2V5czogW10sIHNjb3JlOiAwLCBuYW1lOiB0aGlzLm5hbWUgfTtcbiAgICAgIHRoaXMubWV0aG9kcyA9IFttXTtcbiAgICB9XG4gICAgdGhpcy5wYXR0ZXJucyA9IFtdO1xuICB9XG4gIGluc2VydChtZXRob2QsIHBhdGgsIGhhbmRsZXIpIHtcbiAgICB0aGlzLm5hbWUgPSBgJHttZXRob2R9ICR7cGF0aH1gO1xuICAgIHRoaXMub3JkZXIgPSArK3RoaXMub3JkZXI7XG4gICAgbGV0IGN1ck5vZGUgPSB0aGlzO1xuICAgIGNvbnN0IHBhcnRzID0gc3BsaXRSb3V0aW5nUGF0aChwYXRoKTtcbiAgICBjb25zdCBwb3NzaWJsZUtleXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGFydHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHAgPSBwYXJ0c1tpXTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhjdXJOb2RlLmNoaWxkcmVuKS5pbmNsdWRlcyhwKSkge1xuICAgICAgICBjdXJOb2RlID0gY3VyTm9kZS5jaGlsZHJlbltwXTtcbiAgICAgICAgY29uc3QgcGF0dGVybjIgPSBnZXRQYXR0ZXJuKHApO1xuICAgICAgICBpZiAocGF0dGVybjIpIHtcbiAgICAgICAgICBwb3NzaWJsZUtleXMucHVzaChwYXR0ZXJuMlsxXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjdXJOb2RlLmNoaWxkcmVuW3BdID0gbmV3IE5vZGUoKTtcbiAgICAgIGNvbnN0IHBhdHRlcm4gPSBnZXRQYXR0ZXJuKHApO1xuICAgICAgaWYgKHBhdHRlcm4pIHtcbiAgICAgICAgY3VyTm9kZS5wYXR0ZXJucy5wdXNoKHBhdHRlcm4pO1xuICAgICAgICBwb3NzaWJsZUtleXMucHVzaChwYXR0ZXJuWzFdKTtcbiAgICAgIH1cbiAgICAgIGN1ck5vZGUgPSBjdXJOb2RlLmNoaWxkcmVuW3BdO1xuICAgIH1cbiAgICBpZiAoIWN1ck5vZGUubWV0aG9kcy5sZW5ndGgpIHtcbiAgICAgIGN1ck5vZGUubWV0aG9kcyA9IFtdO1xuICAgIH1cbiAgICBjb25zdCBtID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgY29uc3QgaGFuZGxlclNldCA9IHtcbiAgICAgIGhhbmRsZXIsXG4gICAgICBwb3NzaWJsZUtleXM6IHBvc3NpYmxlS2V5cy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSksXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBzY29yZTogdGhpcy5vcmRlclxuICAgIH07XG4gICAgbVttZXRob2RdID0gaGFuZGxlclNldDtcbiAgICBjdXJOb2RlLm1ldGhvZHMucHVzaChtKTtcbiAgICByZXR1cm4gY3VyTm9kZTtcbiAgfVxuICBnSFNldHMobm9kZSwgbWV0aG9kLCBub2RlUGFyYW1zLCBwYXJhbXMpIHtcbiAgICBjb25zdCBoYW5kbGVyU2V0cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub2RlLm1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IG0gPSBub2RlLm1ldGhvZHNbaV07XG4gICAgICBjb25zdCBoYW5kbGVyU2V0ID0gbVttZXRob2RdIHx8IG1bTUVUSE9EX05BTUVfQUxMXTtcbiAgICAgIGNvbnN0IHByb2Nlc3NlZFNldCA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgaWYgKGhhbmRsZXJTZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBoYW5kbGVyU2V0LnBhcmFtcyA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBoYW5kbGVyU2V0LnBvc3NpYmxlS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9jZXNzZWQgPSBwcm9jZXNzZWRTZXRbaGFuZGxlclNldC5uYW1lXTtcbiAgICAgICAgICBoYW5kbGVyU2V0LnBhcmFtc1trZXldID0gcGFyYW1zW2tleV0gJiYgIXByb2Nlc3NlZCA/IHBhcmFtc1trZXldIDogbm9kZVBhcmFtc1trZXldID8/IHBhcmFtc1trZXldO1xuICAgICAgICAgIHByb2Nlc3NlZFNldFtoYW5kbGVyU2V0Lm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbmRsZXJTZXRzLnB1c2goaGFuZGxlclNldCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoYW5kbGVyU2V0cztcbiAgfVxuICBzZWFyY2gobWV0aG9kLCBwYXRoKSB7XG4gICAgY29uc3QgaGFuZGxlclNldHMgPSBbXTtcbiAgICB0aGlzLnBhcmFtcyA9IC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIGNvbnN0IGN1ck5vZGUgPSB0aGlzO1xuICAgIGxldCBjdXJOb2RlcyA9IFtjdXJOb2RlXTtcbiAgICBjb25zdCBwYXJ0cyA9IHNwbGl0UGF0aChwYXRoKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcGFydHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhcnQgPSBwYXJ0c1tpXTtcbiAgICAgIGNvbnN0IGlzTGFzdCA9IGkgPT09IGxlbiAtIDE7XG4gICAgICBjb25zdCB0ZW1wTm9kZXMgPSBbXTtcbiAgICAgIGZvciAobGV0IGogPSAwLCBsZW4yID0gY3VyTm9kZXMubGVuZ3RoOyBqIDwgbGVuMjsgaisrKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBjdXJOb2Rlc1tqXTtcbiAgICAgICAgY29uc3QgbmV4dE5vZGUgPSBub2RlLmNoaWxkcmVuW3BhcnRdO1xuICAgICAgICBpZiAobmV4dE5vZGUpIHtcbiAgICAgICAgICBuZXh0Tm9kZS5wYXJhbXMgPSBub2RlLnBhcmFtcztcbiAgICAgICAgICBpZiAoaXNMYXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAobmV4dE5vZGUuY2hpbGRyZW5bXCIqXCJdKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXJTZXRzLnB1c2goXG4gICAgICAgICAgICAgICAgLi4udGhpcy5nSFNldHMobmV4dE5vZGUuY2hpbGRyZW5bXCIqXCJdLCBtZXRob2QsIG5vZGUucGFyYW1zLCAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXJTZXRzLnB1c2goLi4udGhpcy5nSFNldHMobmV4dE5vZGUsIG1ldGhvZCwgbm9kZS5wYXJhbXMsIC8qIEBfX1BVUkVfXyAqLyBPYmplY3QuY3JlYXRlKG51bGwpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBOb2Rlcy5wdXNoKG5leHROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgayA9IDAsIGxlbjMgPSBub2RlLnBhdHRlcm5zLmxlbmd0aDsgayA8IGxlbjM7IGsrKykge1xuICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBub2RlLnBhdHRlcm5zW2tdO1xuICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHsgLi4ubm9kZS5wYXJhbXMgfTtcbiAgICAgICAgICBpZiAocGF0dGVybiA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzdE5vZGUgPSBub2RlLmNoaWxkcmVuW1wiKlwiXTtcbiAgICAgICAgICAgIGlmIChhc3ROb2RlKSB7XG4gICAgICAgICAgICAgIGhhbmRsZXJTZXRzLnB1c2goLi4udGhpcy5nSFNldHMoYXN0Tm9kZSwgbWV0aG9kLCBub2RlLnBhcmFtcywgLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCkpKTtcbiAgICAgICAgICAgICAgdGVtcE5vZGVzLnB1c2goYXN0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBhcnQgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBba2V5LCBuYW1lLCBtYXRjaGVyXSA9IHBhdHRlcm47XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBub2RlLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgY29uc3QgcmVzdFBhdGhTdHJpbmcgPSBwYXJ0cy5zbGljZShpKS5qb2luKFwiL1wiKTtcbiAgICAgICAgICBpZiAobWF0Y2hlciBpbnN0YW5jZW9mIFJlZ0V4cCAmJiBtYXRjaGVyLnRlc3QocmVzdFBhdGhTdHJpbmcpKSB7XG4gICAgICAgICAgICBwYXJhbXNbbmFtZV0gPSByZXN0UGF0aFN0cmluZztcbiAgICAgICAgICAgIGhhbmRsZXJTZXRzLnB1c2goLi4udGhpcy5nSFNldHMoY2hpbGQsIG1ldGhvZCwgbm9kZS5wYXJhbXMsIHBhcmFtcykpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXRjaGVyID09PSB0cnVlIHx8IG1hdGNoZXIgaW5zdGFuY2VvZiBSZWdFeHAgJiYgbWF0Y2hlci50ZXN0KHBhcnQpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBwYXJ0O1xuICAgICAgICAgICAgICBpZiAoaXNMYXN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlclNldHMucHVzaCguLi50aGlzLmdIU2V0cyhjaGlsZCwgbWV0aG9kLCBwYXJhbXMsIG5vZGUucGFyYW1zKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuW1wiKlwiXSkge1xuICAgICAgICAgICAgICAgICAgaGFuZGxlclNldHMucHVzaCguLi50aGlzLmdIU2V0cyhjaGlsZC5jaGlsZHJlbltcIipcIl0sIG1ldGhvZCwgcGFyYW1zLCBub2RlLnBhcmFtcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5wYXJhbXMgPSBwYXJhbXM7XG4gICAgICAgICAgICAgICAgdGVtcE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjdXJOb2RlcyA9IHRlbXBOb2RlcztcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0cyA9IGhhbmRsZXJTZXRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLnNjb3JlIC0gYi5zY29yZTtcbiAgICB9KTtcbiAgICByZXR1cm4gW3Jlc3VsdHMubWFwKCh7IGhhbmRsZXIsIHBhcmFtcyB9KSA9PiBbaGFuZGxlciwgcGFyYW1zXSldO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgTm9kZVxufTtcbiIsIi8vIHNyYy9yb3V0ZXIvdHJpZS1yb3V0ZXIvcm91dGVyLnRzXG5pbXBvcnQgeyBjaGVja09wdGlvbmFsUGFyYW1ldGVyIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VybC5qc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGUuanNcIjtcbnZhciBUcmllUm91dGVyID0gY2xhc3Mge1xuICBuYW1lID0gXCJUcmllUm91dGVyXCI7XG4gIG5vZGU7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubm9kZSA9IG5ldyBOb2RlKCk7XG4gIH1cbiAgYWRkKG1ldGhvZCwgcGF0aCwgaGFuZGxlcikge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBjaGVja09wdGlvbmFsUGFyYW1ldGVyKHBhdGgpO1xuICAgIGlmIChyZXN1bHRzKSB7XG4gICAgICBmb3IgKGNvbnN0IHAgb2YgcmVzdWx0cykge1xuICAgICAgICB0aGlzLm5vZGUuaW5zZXJ0KG1ldGhvZCwgcCwgaGFuZGxlcik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubm9kZS5pbnNlcnQobWV0aG9kLCBwYXRoLCBoYW5kbGVyKTtcbiAgfVxuICBtYXRjaChtZXRob2QsIHBhdGgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlLnNlYXJjaChtZXRob2QsIHBhdGgpO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgVHJpZVJvdXRlclxufTtcbiIsIi8vIHNyYy91dGlscy9ib2R5LnRzXG5pbXBvcnQgeyBIb25vUmVxdWVzdCB9IGZyb20gXCIuLi9yZXF1ZXN0LmpzXCI7XG52YXIgcGFyc2VCb2R5ID0gYXN5bmMgKHJlcXVlc3QsIG9wdGlvbnMgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKSkgPT4ge1xuICBjb25zdCB7IGFsbCA9IGZhbHNlLCBkb3QgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgY29uc3QgaGVhZGVycyA9IHJlcXVlc3QgaW5zdGFuY2VvZiBIb25vUmVxdWVzdCA/IHJlcXVlc3QucmF3LmhlYWRlcnMgOiByZXF1ZXN0LmhlYWRlcnM7XG4gIGNvbnN0IGNvbnRlbnRUeXBlID0gaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7XG4gIGlmIChjb250ZW50VHlwZSAhPT0gbnVsbCAmJiBjb250ZW50VHlwZS5zdGFydHNXaXRoKFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiKSB8fCBjb250ZW50VHlwZSAhPT0gbnVsbCAmJiBjb250ZW50VHlwZS5zdGFydHNXaXRoKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpKSB7XG4gICAgcmV0dXJuIHBhcnNlRm9ybURhdGEocmVxdWVzdCwgeyBhbGwsIGRvdCB9KTtcbiAgfVxuICByZXR1cm4ge307XG59O1xuYXN5bmMgZnVuY3Rpb24gcGFyc2VGb3JtRGF0YShyZXF1ZXN0LCBvcHRpb25zKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBpZiAoZm9ybURhdGEpIHtcbiAgICByZXR1cm4gY29udmVydEZvcm1EYXRhVG9Cb2R5RGF0YShmb3JtRGF0YSwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuZnVuY3Rpb24gY29udmVydEZvcm1EYXRhVG9Cb2R5RGF0YShmb3JtRGF0YSwgb3B0aW9ucykge1xuICBjb25zdCBmb3JtID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGZvcm1EYXRhLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBjb25zdCBzaG91bGRQYXJzZUFsbFZhbHVlcyA9IG9wdGlvbnMuYWxsIHx8IGtleS5lbmRzV2l0aChcIltdXCIpO1xuICAgIGlmICghc2hvdWxkUGFyc2VBbGxWYWx1ZXMpIHtcbiAgICAgIGZvcm1ba2V5XSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVQYXJzaW5nQWxsVmFsdWVzKGZvcm0sIGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIGlmIChvcHRpb25zLmRvdCkge1xuICAgIE9iamVjdC5lbnRyaWVzKGZvcm0pLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgY29uc3Qgc2hvdWxkUGFyc2VEb3RWYWx1ZXMgPSBrZXkuaW5jbHVkZXMoXCIuXCIpO1xuICAgICAgaWYgKHNob3VsZFBhcnNlRG90VmFsdWVzKSB7XG4gICAgICAgIGhhbmRsZVBhcnNpbmdOZXN0ZWRWYWx1ZXMoZm9ybSwga2V5LCB2YWx1ZSk7XG4gICAgICAgIGRlbGV0ZSBmb3JtW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGZvcm07XG59XG52YXIgaGFuZGxlUGFyc2luZ0FsbFZhbHVlcyA9IChmb3JtLCBrZXksIHZhbHVlKSA9PiB7XG4gIGlmIChmb3JtW2tleV0gIT09IHZvaWQgMCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZvcm1ba2V5XSkpIHtcbiAgICAgIDtcbiAgICAgIGZvcm1ba2V5XS5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybVtrZXldID0gW2Zvcm1ba2V5XSwgdmFsdWVdO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3JtW2tleV0gPSB2YWx1ZTtcbiAgfVxufTtcbnZhciBoYW5kbGVQYXJzaW5nTmVzdGVkVmFsdWVzID0gKGZvcm0sIGtleSwgdmFsdWUpID0+IHtcbiAgbGV0IG5lc3RlZEZvcm0gPSBmb3JtO1xuICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KFwiLlwiKTtcbiAga2V5cy5mb3JFYWNoKChrZXkyLCBpbmRleCkgPT4ge1xuICAgIGlmIChpbmRleCA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICBuZXN0ZWRGb3JtW2tleTJdID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghbmVzdGVkRm9ybVtrZXkyXSB8fCB0eXBlb2YgbmVzdGVkRm9ybVtrZXkyXSAhPT0gXCJvYmplY3RcIiB8fCBBcnJheS5pc0FycmF5KG5lc3RlZEZvcm1ba2V5Ml0pIHx8IG5lc3RlZEZvcm1ba2V5Ml0gaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgIG5lc3RlZEZvcm1ba2V5Ml0gPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIH1cbiAgICAgIG5lc3RlZEZvcm0gPSBuZXN0ZWRGb3JtW2tleTJdO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IHtcbiAgcGFyc2VCb2R5XG59O1xuIiwiLy8gc3JjL3V0aWxzL2h0bWwudHNcbnZhciBIdG1sRXNjYXBlZENhbGxiYWNrUGhhc2UgPSB7XG4gIFN0cmluZ2lmeTogMSxcbiAgQmVmb3JlU3RyZWFtOiAyLFxuICBTdHJlYW06IDNcbn07XG52YXIgcmF3ID0gKHZhbHVlLCBjYWxsYmFja3MpID0+IHtcbiAgY29uc3QgZXNjYXBlZFN0cmluZyA9IG5ldyBTdHJpbmcodmFsdWUpO1xuICBlc2NhcGVkU3RyaW5nLmlzRXNjYXBlZCA9IHRydWU7XG4gIGVzY2FwZWRTdHJpbmcuY2FsbGJhY2tzID0gY2FsbGJhY2tzO1xuICByZXR1cm4gZXNjYXBlZFN0cmluZztcbn07XG52YXIgZXNjYXBlUmUgPSAvWyY8PidcIl0vO1xudmFyIHN0cmluZ0J1ZmZlclRvU3RyaW5nID0gYXN5bmMgKGJ1ZmZlcikgPT4ge1xuICBsZXQgc3RyID0gXCJcIjtcbiAgY29uc3QgY2FsbGJhY2tzID0gW107XG4gIGZvciAobGV0IGkgPSBidWZmZXIubGVuZ3RoIC0gMTsgOyBpLS0pIHtcbiAgICBzdHIgKz0gYnVmZmVyW2ldO1xuICAgIGktLTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgciA9IGF3YWl0IGJ1ZmZlcltpXTtcbiAgICBpZiAodHlwZW9mIHIgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGNhbGxiYWNrcy5wdXNoKC4uLnIuY2FsbGJhY2tzIHx8IFtdKTtcbiAgICB9XG4gICAgY29uc3QgaXNFc2NhcGVkID0gci5pc0VzY2FwZWQ7XG4gICAgciA9IGF3YWl0ICh0eXBlb2YgciA9PT0gXCJvYmplY3RcIiA/IHIudG9TdHJpbmcoKSA6IHIpO1xuICAgIGlmICh0eXBlb2YgciA9PT0gXCJvYmplY3RcIikge1xuICAgICAgY2FsbGJhY2tzLnB1c2goLi4uci5jYWxsYmFja3MgfHwgW10pO1xuICAgIH1cbiAgICBpZiAoci5pc0VzY2FwZWQgPz8gaXNFc2NhcGVkKSB7XG4gICAgICBzdHIgKz0gcjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYnVmID0gW3N0cl07XG4gICAgICBlc2NhcGVUb0J1ZmZlcihyLCBidWYpO1xuICAgICAgc3RyID0gYnVmWzBdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmF3KHN0ciwgY2FsbGJhY2tzKTtcbn07XG52YXIgZXNjYXBlVG9CdWZmZXIgPSAoc3RyLCBidWZmZXIpID0+IHtcbiAgY29uc3QgbWF0Y2ggPSBzdHIuc2VhcmNoKGVzY2FwZVJlKTtcbiAgaWYgKG1hdGNoID09PSAtMSkge1xuICAgIGJ1ZmZlclswXSArPSBzdHI7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBlc2NhcGU7XG4gIGxldCBpbmRleDtcbiAgbGV0IGxhc3RJbmRleCA9IDA7XG4gIGZvciAoaW5kZXggPSBtYXRjaDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgIGNhc2UgMzQ6XG4gICAgICAgIGVzY2FwZSA9IFwiJnF1b3Q7XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTpcbiAgICAgICAgZXNjYXBlID0gXCImIzM5O1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIGVzY2FwZSA9IFwiJmFtcDtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYwOlxuICAgICAgICBlc2NhcGUgPSBcIiZsdDtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYyOlxuICAgICAgICBlc2NhcGUgPSBcIiZndDtcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgYnVmZmVyWzBdICs9IHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCkgKyBlc2NhcGU7XG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xuICB9XG4gIGJ1ZmZlclswXSArPSBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpO1xufTtcbnZhciByZXNvbHZlQ2FsbGJhY2sgPSBhc3luYyAoc3RyLCBwaGFzZSwgcHJlc2VydmVDYWxsYmFja3MsIGNvbnRleHQsIGJ1ZmZlcikgPT4ge1xuICBjb25zdCBjYWxsYmFja3MgPSBzdHIuY2FsbGJhY2tzO1xuICBpZiAoIWNhbGxiYWNrcz8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzdHIpO1xuICB9XG4gIGlmIChidWZmZXIpIHtcbiAgICBidWZmZXJbMF0gKz0gc3RyO1xuICB9IGVsc2Uge1xuICAgIGJ1ZmZlciA9IFtzdHJdO1xuICB9XG4gIGNvbnN0IHJlc1N0ciA9IFByb21pc2UuYWxsKGNhbGxiYWNrcy5tYXAoKGMpID0+IGMoeyBwaGFzZSwgYnVmZmVyLCBjb250ZXh0IH0pKSkudGhlbihcbiAgICAocmVzKSA9PiBQcm9taXNlLmFsbChcbiAgICAgIHJlcy5maWx0ZXIoQm9vbGVhbikubWFwKChzdHIyKSA9PiByZXNvbHZlQ2FsbGJhY2soc3RyMiwgcGhhc2UsIGZhbHNlLCBjb250ZXh0LCBidWZmZXIpKVxuICAgICkudGhlbigoKSA9PiBidWZmZXJbMF0pXG4gICk7XG4gIGlmIChwcmVzZXJ2ZUNhbGxiYWNrcykge1xuICAgIHJldHVybiByYXcoYXdhaXQgcmVzU3RyLCBjYWxsYmFja3MpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNTdHI7XG4gIH1cbn07XG5leHBvcnQge1xuICBIdG1sRXNjYXBlZENhbGxiYWNrUGhhc2UsXG4gIGVzY2FwZVRvQnVmZmVyLFxuICByYXcsXG4gIHJlc29sdmVDYWxsYmFjayxcbiAgc3RyaW5nQnVmZmVyVG9TdHJpbmdcbn07XG4iLCIvLyBzcmMvdXRpbHMvdXJsLnRzXG52YXIgc3BsaXRQYXRoID0gKHBhdGgpID0+IHtcbiAgY29uc3QgcGF0aHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgaWYgKHBhdGhzWzBdID09PSBcIlwiKSB7XG4gICAgcGF0aHMuc2hpZnQoKTtcbiAgfVxuICByZXR1cm4gcGF0aHM7XG59O1xudmFyIHNwbGl0Um91dGluZ1BhdGggPSAocm91dGVQYXRoKSA9PiB7XG4gIGNvbnN0IHsgZ3JvdXBzLCBwYXRoIH0gPSBleHRyYWN0R3JvdXBzRnJvbVBhdGgocm91dGVQYXRoKTtcbiAgY29uc3QgcGF0aHMgPSBzcGxpdFBhdGgocGF0aCk7XG4gIHJldHVybiByZXBsYWNlR3JvdXBNYXJrcyhwYXRocywgZ3JvdXBzKTtcbn07XG52YXIgZXh0cmFjdEdyb3Vwc0Zyb21QYXRoID0gKHBhdGgpID0+IHtcbiAgY29uc3QgZ3JvdXBzID0gW107XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xce1tefV0rXFx9L2csIChtYXRjaCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBtYXJrID0gYEAke2luZGV4fWA7XG4gICAgZ3JvdXBzLnB1c2goW21hcmssIG1hdGNoXSk7XG4gICAgcmV0dXJuIG1hcms7XG4gIH0pO1xuICByZXR1cm4geyBncm91cHMsIHBhdGggfTtcbn07XG52YXIgcmVwbGFjZUdyb3VwTWFya3MgPSAocGF0aHMsIGdyb3VwcykgPT4ge1xuICBmb3IgKGxldCBpID0gZ3JvdXBzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3QgW21hcmtdID0gZ3JvdXBzW2ldO1xuICAgIGZvciAobGV0IGogPSBwYXRocy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgaWYgKHBhdGhzW2pdLmluY2x1ZGVzKG1hcmspKSB7XG4gICAgICAgIHBhdGhzW2pdID0gcGF0aHNbal0ucmVwbGFjZShtYXJrLCBncm91cHNbaV1bMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhdGhzO1xufTtcbnZhciBwYXR0ZXJuQ2FjaGUgPSB7fTtcbnZhciBnZXRQYXR0ZXJuID0gKGxhYmVsKSA9PiB7XG4gIGlmIChsYWJlbCA9PT0gXCIqXCIpIHtcbiAgICByZXR1cm4gXCIqXCI7XG4gIH1cbiAgY29uc3QgbWF0Y2ggPSBsYWJlbC5tYXRjaCgvXlxcOihbXlxce1xcfV0rKSg/OlxceyguKylcXH0pPyQvKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgaWYgKCFwYXR0ZXJuQ2FjaGVbbGFiZWxdKSB7XG4gICAgICBpZiAobWF0Y2hbMl0pIHtcbiAgICAgICAgcGF0dGVybkNhY2hlW2xhYmVsXSA9IFtsYWJlbCwgbWF0Y2hbMV0sIG5ldyBSZWdFeHAoXCJeXCIgKyBtYXRjaFsyXSArIFwiJFwiKV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXR0ZXJuQ2FjaGVbbGFiZWxdID0gW2xhYmVsLCBtYXRjaFsxXSwgdHJ1ZV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXR0ZXJuQ2FjaGVbbGFiZWxdO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcbnZhciB0cnlEZWNvZGVVUkkgPSAoc3RyKSA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSShzdHIpO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyg/OiVbMC05QS1GYS1mXXsyfSkrL2csIChtYXRjaCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSShtYXRjaCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIGdldFBhdGggPSAocmVxdWVzdCkgPT4ge1xuICBjb25zdCB1cmwgPSByZXF1ZXN0LnVybDtcbiAgY29uc3Qgc3RhcnQgPSB1cmwuaW5kZXhPZihcIi9cIiwgOCk7XG4gIGxldCBpID0gc3RhcnQ7XG4gIGZvciAoOyBpIDwgdXJsLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2hhckNvZGUgPSB1cmwuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoY2hhckNvZGUgPT09IDM3KSB7XG4gICAgICBjb25zdCBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoXCI/XCIsIGkpO1xuICAgICAgY29uc3QgcGF0aCA9IHVybC5zbGljZShzdGFydCwgcXVlcnlJbmRleCA9PT0gLTEgPyB2b2lkIDAgOiBxdWVyeUluZGV4KTtcbiAgICAgIHJldHVybiB0cnlEZWNvZGVVUkkocGF0aC5pbmNsdWRlcyhcIiUyNVwiKSA/IHBhdGgucmVwbGFjZSgvJTI1L2csIFwiJTI1MjVcIikgOiBwYXRoKTtcbiAgICB9IGVsc2UgaWYgKGNoYXJDb2RlID09PSA2Mykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB1cmwuc2xpY2Uoc3RhcnQsIGkpO1xufTtcbnZhciBnZXRRdWVyeVN0cmluZ3MgPSAodXJsKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSB1cmwuaW5kZXhPZihcIj9cIiwgOCk7XG4gIHJldHVybiBxdWVyeUluZGV4ID09PSAtMSA/IFwiXCIgOiBcIj9cIiArIHVybC5zbGljZShxdWVyeUluZGV4ICsgMSk7XG59O1xudmFyIGdldFBhdGhOb1N0cmljdCA9IChyZXF1ZXN0KSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGdldFBhdGgocmVxdWVzdCk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoID4gMSAmJiByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSBcIi9cIiA/IHJlc3VsdC5zbGljZSgwLCAtMSkgOiByZXN1bHQ7XG59O1xudmFyIG1lcmdlUGF0aCA9ICguLi5wYXRocykgPT4ge1xuICBsZXQgcCA9IFwiXCI7XG4gIGxldCBlbmRzV2l0aFNsYXNoID0gZmFsc2U7XG4gIGZvciAobGV0IHBhdGggb2YgcGF0aHMpIHtcbiAgICBpZiAocFtwLmxlbmd0aCAtIDFdID09PSBcIi9cIikge1xuICAgICAgcCA9IHAuc2xpY2UoMCwgLTEpO1xuICAgICAgZW5kc1dpdGhTbGFzaCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChwYXRoWzBdICE9PSBcIi9cIikge1xuICAgICAgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgfVxuICAgIGlmIChwYXRoID09PSBcIi9cIiAmJiBlbmRzV2l0aFNsYXNoKSB7XG4gICAgICBwID0gYCR7cH0vYDtcbiAgICB9IGVsc2UgaWYgKHBhdGggIT09IFwiL1wiKSB7XG4gICAgICBwID0gYCR7cH0ke3BhdGh9YDtcbiAgICB9XG4gICAgaWYgKHBhdGggPT09IFwiL1wiICYmIHAgPT09IFwiXCIpIHtcbiAgICAgIHAgPSBcIi9cIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHA7XG59O1xudmFyIGNoZWNrT3B0aW9uYWxQYXJhbWV0ZXIgPSAocGF0aCkgPT4ge1xuICBpZiAoIXBhdGgubWF0Y2goL1xcOi4rXFw/JC8pKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3Qgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICBsZXQgYmFzZVBhdGggPSBcIlwiO1xuICBzZWdtZW50cy5mb3JFYWNoKChzZWdtZW50KSA9PiB7XG4gICAgaWYgKHNlZ21lbnQgIT09IFwiXCIgJiYgIS9cXDovLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgIGJhc2VQYXRoICs9IFwiL1wiICsgc2VnbWVudDtcbiAgICB9IGVsc2UgaWYgKC9cXDovLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgIGlmICgvXFw/Ly50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA9PT0gMCAmJiBiYXNlUGF0aCA9PT0gXCJcIikge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChcIi9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGJhc2VQYXRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvcHRpb25hbFNlZ21lbnQgPSBzZWdtZW50LnJlcGxhY2UoXCI/XCIsIFwiXCIpO1xuICAgICAgICBiYXNlUGF0aCArPSBcIi9cIiArIG9wdGlvbmFsU2VnbWVudDtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGJhc2VQYXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2VQYXRoICs9IFwiL1wiICsgc2VnbWVudDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0cy5maWx0ZXIoKHYsIGksIGEpID0+IGEuaW5kZXhPZih2KSA9PT0gaSk7XG59O1xudmFyIF9kZWNvZGVVUkkgPSAodmFsdWUpID0+IHtcbiAgaWYgKCEvWyUrXS8udGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKHZhbHVlLmluZGV4T2YoXCIrXCIpICE9PSAtMSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwrL2csIFwiIFwiKTtcbiAgfVxuICByZXR1cm4gLyUvLnRlc3QodmFsdWUpID8gZGVjb2RlVVJJQ29tcG9uZW50Xyh2YWx1ZSkgOiB2YWx1ZTtcbn07XG52YXIgX2dldFF1ZXJ5UGFyYW0gPSAodXJsLCBrZXksIG11bHRpcGxlKSA9PiB7XG4gIGxldCBlbmNvZGVkO1xuICBpZiAoIW11bHRpcGxlICYmIGtleSAmJiAhL1slK10vLnRlc3Qoa2V5KSkge1xuICAgIGxldCBrZXlJbmRleDIgPSB1cmwuaW5kZXhPZihgPyR7a2V5fWAsIDgpO1xuICAgIGlmIChrZXlJbmRleDIgPT09IC0xKSB7XG4gICAgICBrZXlJbmRleDIgPSB1cmwuaW5kZXhPZihgJiR7a2V5fWAsIDgpO1xuICAgIH1cbiAgICB3aGlsZSAoa2V5SW5kZXgyICE9PSAtMSkge1xuICAgICAgY29uc3QgdHJhaWxpbmdLZXlDb2RlID0gdXJsLmNoYXJDb2RlQXQoa2V5SW5kZXgyICsga2V5Lmxlbmd0aCArIDEpO1xuICAgICAgaWYgKHRyYWlsaW5nS2V5Q29kZSA9PT0gNjEpIHtcbiAgICAgICAgY29uc3QgdmFsdWVJbmRleCA9IGtleUluZGV4MiArIGtleS5sZW5ndGggKyAyO1xuICAgICAgICBjb25zdCBlbmRJbmRleCA9IHVybC5pbmRleE9mKFwiJlwiLCB2YWx1ZUluZGV4KTtcbiAgICAgICAgcmV0dXJuIF9kZWNvZGVVUkkodXJsLnNsaWNlKHZhbHVlSW5kZXgsIGVuZEluZGV4ID09PSAtMSA/IHZvaWQgMCA6IGVuZEluZGV4KSk7XG4gICAgICB9IGVsc2UgaWYgKHRyYWlsaW5nS2V5Q29kZSA9PSAzOCB8fCBpc05hTih0cmFpbGluZ0tleUNvZGUpKSB7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgfVxuICAgICAga2V5SW5kZXgyID0gdXJsLmluZGV4T2YoYCYke2tleX1gLCBrZXlJbmRleDIgKyAxKTtcbiAgICB9XG4gICAgZW5jb2RlZCA9IC9bJStdLy50ZXN0KHVybCk7XG4gICAgaWYgKCFlbmNvZGVkKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgfVxuICBjb25zdCByZXN1bHRzID0ge307XG4gIGVuY29kZWQgPz89IC9bJStdLy50ZXN0KHVybCk7XG4gIGxldCBrZXlJbmRleCA9IHVybC5pbmRleE9mKFwiP1wiLCA4KTtcbiAgd2hpbGUgKGtleUluZGV4ICE9PSAtMSkge1xuICAgIGNvbnN0IG5leHRLZXlJbmRleCA9IHVybC5pbmRleE9mKFwiJlwiLCBrZXlJbmRleCArIDEpO1xuICAgIGxldCB2YWx1ZUluZGV4ID0gdXJsLmluZGV4T2YoXCI9XCIsIGtleUluZGV4KTtcbiAgICBpZiAodmFsdWVJbmRleCA+IG5leHRLZXlJbmRleCAmJiBuZXh0S2V5SW5kZXggIT09IC0xKSB7XG4gICAgICB2YWx1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGxldCBuYW1lID0gdXJsLnNsaWNlKFxuICAgICAga2V5SW5kZXggKyAxLFxuICAgICAgdmFsdWVJbmRleCA9PT0gLTEgPyBuZXh0S2V5SW5kZXggPT09IC0xID8gdm9pZCAwIDogbmV4dEtleUluZGV4IDogdmFsdWVJbmRleFxuICAgICk7XG4gICAgaWYgKGVuY29kZWQpIHtcbiAgICAgIG5hbWUgPSBfZGVjb2RlVVJJKG5hbWUpO1xuICAgIH1cbiAgICBrZXlJbmRleCA9IG5leHRLZXlJbmRleDtcbiAgICBpZiAobmFtZSA9PT0gXCJcIikge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAodmFsdWVJbmRleCA9PT0gLTEpIHtcbiAgICAgIHZhbHVlID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB1cmwuc2xpY2UodmFsdWVJbmRleCArIDEsIG5leHRLZXlJbmRleCA9PT0gLTEgPyB2b2lkIDAgOiBuZXh0S2V5SW5kZXgpO1xuICAgICAgaWYgKGVuY29kZWQpIHtcbiAgICAgICAgdmFsdWUgPSBfZGVjb2RlVVJJKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICBpZiAoIShyZXN1bHRzW25hbWVdICYmIEFycmF5LmlzQXJyYXkocmVzdWx0c1tuYW1lXSkpKSB7XG4gICAgICAgIHJlc3VsdHNbbmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIDtcbiAgICAgIHJlc3VsdHNbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdHNbbmFtZV0gPz89IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4ga2V5ID8gcmVzdWx0c1trZXldIDogcmVzdWx0cztcbn07XG52YXIgZ2V0UXVlcnlQYXJhbSA9IF9nZXRRdWVyeVBhcmFtO1xudmFyIGdldFF1ZXJ5UGFyYW1zID0gKHVybCwga2V5KSA9PiB7XG4gIHJldHVybiBfZ2V0UXVlcnlQYXJhbSh1cmwsIGtleSwgdHJ1ZSk7XG59O1xudmFyIGRlY29kZVVSSUNvbXBvbmVudF8gPSBkZWNvZGVVUklDb21wb25lbnQ7XG5leHBvcnQge1xuICBjaGVja09wdGlvbmFsUGFyYW1ldGVyLFxuICBkZWNvZGVVUklDb21wb25lbnRfLFxuICBnZXRQYXRoLFxuICBnZXRQYXRoTm9TdHJpY3QsXG4gIGdldFBhdHRlcm4sXG4gIGdldFF1ZXJ5UGFyYW0sXG4gIGdldFF1ZXJ5UGFyYW1zLFxuICBnZXRRdWVyeVN0cmluZ3MsXG4gIG1lcmdlUGF0aCxcbiAgc3BsaXRQYXRoLFxuICBzcGxpdFJvdXRpbmdQYXRoXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBIb25vIH0gZnJvbSAnaG9ubydcclxuaW1wb3J0IHsgaGFuZGxlIH0gZnJvbSAnaG9uby92ZXJjZWwnXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXIvcm91dGVyLmpzJztcclxuY29uc3QgYXBwID0gbmV3IEhvbm8oKS5iYXNlUGF0aCgnL2FwaScpXHJcblxyXG5hcHAuZ2V0KCcvJywgKGMpID0+IHtcclxuICByZXR1cm4gYy5qc29uKHsgbWVzc2FnZTogXCJDb25ncmF0cyEgWW91J3ZlIGRlcGxveWVkIEhvbm8gdG8gVmVyY2VsXCIgfSlcclxufSlcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBoYW5kbGUoYXBwKTtcclxuYXBwLnJvdXRlKCcvJywgcm91dGVzKTtcclxuZXhwb3J0IGNvbnN0IEdFVCA9IGhhbmRsZXI7XHJcbmV4cG9ydCBjb25zdCBQT1NUID0gaGFuZGxlcjtcclxuZXhwb3J0IGNvbnN0IFBBVENIID0gaGFuZGxlcjtcclxuZXhwb3J0IGNvbnN0IFBVVCA9IGhhbmRsZXI7XHJcbmV4cG9ydCBjb25zdCBPUFRJT05TID0gaGFuZGxlcjsiXSwibmFtZXMiOlsicHJpc21hIiwiZ2V0R2FsbGVyaWVzIiwiYyIsImdhbGxlcmllcyIsImdhbGxhcnkiLCJmaW5kTWFueSIsImpzb24iLCJjcmVhdGVHYWxsZXJ5IiwiZGF0YSIsInJlcSIsImltZyIsInRpdGxlIiwibmV3R2FsbGVyeSIsImNyZWF0ZSIsInVwZGF0ZUdhbGxlcnkiLCJpZCIsInBhcnNlSW50IiwicGFyYW0iLCJ1cGRhdGVkR2FsbGVyeSIsInVwZGF0ZSIsIndoZXJlIiwiZGVsZXRlR2FsbGVyeSIsImRlbGV0ZWRHYWxsZXJ5IiwiZGVsZXRlIiwibWVzc2FnZSIsImdldFVzZXJzIiwidXNlcnMiLCJ1c2VyIiwiY3JlYXRlVXNlciIsImVtYWlsIiwicGFzc3dvcmQiLCJuYW1lIiwibmV3VXNlciIsInVwZGF0ZVVzZXIiLCJ1cGRhdGVkVXNlciIsImRlbGV0ZVVzZXIiLCJkZWxldGVkVXNlciIsIlByaXNtYUNsaWVudCIsIkhvbm8iLCJyb3V0ZXMiLCJnZXQiLCJwb3N0IiwicHV0IiwiaGFuZGxlIiwiYXBwIiwiYmFzZVBhdGgiLCJoYW5kbGVyIiwicm91dGUiLCJHRVQiLCJQT1NUIiwiUEFUQ0giLCJQVVQiLCJPUFRJT05TIl0sInNvdXJjZVJvb3QiOiIifQ==