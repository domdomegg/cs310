(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{0:function(n,e,t){"use strict";var r=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();Object.defineProperty(e,"__esModule",{value:!0}),e.ParseError=e.parse=e.PolyType=e.TypeFuncApp=e.TypeVar=e.Let=e.Abs=e.App=e.Var=e.NumberLiteral=e.CharLiteral=void 0;var o=t(29),i=function(){function n(n){this.value=n}return n.prototype.toString=function(){return this.value},n}();e.CharLiteral=i;var a=function(){function n(n){this.value=n}return n.prototype.toString=function(){return this.value.toString()},n}();e.NumberLiteral=a;var p=function(){function n(n){this.name=n}return n.prototype.toString=function(){return this.name},n}();e.Var=p;var u=function(){function n(n,e){this.func=n,this.arg=e}return n.prototype.toString=function(){return"("+this.func.toString()+" "+this.arg.toString()+")"},n}();e.App=u;var c=function(){function n(n,e){this.param=n,this.body=e}return n.prototype.toString=function(){return"(\\"+this.param+" -> "+this.body.toString()+")"},n}();e.Abs=c;var y=function(){function n(n,e,t){this.param=n,this.def=e,this.body=t}return n.prototype.toString=function(){return"(let "+this.param+" = "+this.def.toString()+" in "+this.body.toString()+")"},n}();e.Let=y;var s=function(){function n(n){this.name=n}return n.prototype.toString=function(){return this.name},n}();e.TypeVar=s;var f=function(){function n(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];this.constructorName=n,this.args=e}return n.prototype.toString=function(){return this.constructorName+(this.args.length?" ":"")+this.args.map((function(n){return"("+n.toString()+")"})).join(" ")},n}();e.TypeFuncApp=f;var l=function(){function n(n,e){this.quantifiedVars=n,this.monoType=e}return n.prototype.toString=function(){return this.quantifiedVars.map((function(n){return"\u2200"+n})).join("")+": "+this.monoType.toString()},n}();e.PolyType=l;var h=function(n){function e(e){var t=n.call(this,e)||this;return t.name="ParseError",t}return r(e,n),e}(Error);e.ParseError=h;var w=new o.GenLex,T=w.tokenize(o.C.charIn("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*+-/%<>^:[]_|&,").rep().map((function(n){return n.join()})),"identifier"),d=w.tokenize(o.C.charLiteral(),"char"),m=w.tokenize(o.C.stringLiteral(),"string"),b=w.tokenize(o.N.number(),"number"),g=w.tokenize(o.C.char("\\"),"backslash"),P=w.tokenize(o.C.string("->"),"arrow"),v=w.tokenize(o.C.char("("),"lparen"),j=w.tokenize(o.C.char(")"),"rparen"),F=w.tokenize(o.C.string("let"),"let"),O=w.tokenize(o.C.char("="),"equal"),A=w.tokenize(o.C.string("in"),"in"),S=function(){return o.F.try(L(V())).or(o.F.try(L(k()))).or(o.F.try(L(N()))).or(o.F.try(L(E())))},x=function(){return o.F.try(V()).or(o.F.try(k())).or(o.F.try(N())).or(o.F.try(E()))},_=function(n){for(var e=n.split(""),t=new p("[]");e.length;)t=new u(new u(new p(":"),new i(e.pop())),t);return t},V=function(){return o.F.try(b.map((function(n){return new a(n)}))).or(o.F.try(m.map(_))).or(o.F.try(d.map((function(n){return new i(n)})))).or(o.F.try(T.map((function(n){return new p(n)}))))},k=function(){return v.drop().then(C()).then(j.drop()).single()},C=function(){return g.drop().then(T).then(P.drop()).then(o.F.lazy(S)).map((function(n){return new c(n.at(0),n.at(1))}))},E=function(){return v.drop().then(o.F.lazy(S)).then(j.drop()).single()},N=function(){return v.drop().then(z()).then(j.drop()).single()},z=function(){return F.drop().then(T).then(O.drop()).then(o.F.lazy(S)).then(A.drop()).then(o.F.lazy(S)).map((function(n){return new y(n.at(0),n.at(1),n.at(2))}))},L=function(n){return n.then(I()).array().map(J)},I=function(){return o.F.lazy(x).optrep()},J=function(n){return n.reduce((function(n,e){return new u(n,e)}))},q=w.use(o.F.try(z()).or(o.F.try(C())).or(o.F.try(S())).then(o.F.eos().drop()).single());e.parse=function(n,e){void 0===e&&(e=!1);var t=q.parse(o.Streams.ofString(n));if(e)return t;if(t.isAccepted())return t.value;throw new h("Failed to parse:\n\t"+n+"\n\t"+" ".repeat(t.location())+"^")}},15:function(n,e,t){"use strict";var r=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;var r=Array(n),o=0;for(e=0;e<t;e++)for(var i=arguments[e],a=0,p=i.length;a<p;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.apply=e.infer=e.unify=e.combine=e.substitute=e.TypeInferenceError=void 0;var a=t(0),p=function(n){function e(e){var t=n.call(this,e)||this;return t.name="TypeInferenceError",t}return r(e,n),e}(Error);function u(n,e){var t=e,r={};for(var o in t)r[o]=w(t[o],n);return r}function c(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];if(0===n.length)return{};if(1===n.length)return n[0];if(n.length>2)return c(n[0],c.apply(void 0,n.slice(1)));var t=n[0],r=n[1],o={};for(var i in t)o[i]=w(t[i],r);for(var i in r)i in t||(o[i]=r[i]);return o}function y(n,e){var t;if(n instanceof a.TypeVar){if(T(e,n))throw new p("Contains/occurs check failed with "+JSON.stringify(n)+" and "+JSON.stringify(e));return(t={})[n.name]=e,t}if(e instanceof a.TypeVar)return y(e,n);if(n instanceof a.TypeFuncApp&&e instanceof a.TypeFuncApp){if(n.constructorName!==e.constructorName)throw new p("Could not unify type function applications with different constructors '"+n.constructorName+"' and '"+e.constructorName+"'");if(n.args.length!==e.args.length)throw new p("Could not unify type function applications with different argument list lengths "+JSON.stringify(n)+" and "+JSON.stringify(e));for(var r={},o=0;o<n.args.length;o++)r=c(y(w(n.args[o],r),w(e.args[o],r)),r);return r}throw new Error("Internal error, this should never happen")}function s(n,e){var t=new Set(e);return n.filter((function(n){return!t.has(n)}))}function f(n){if(n instanceof a.PolyType)return s(f(n.monoType),n.quantifiedVars);if(n instanceof a.TypeVar)return[n.name];if(n instanceof a.TypeFuncApp)return n.args.map(f).reduce((function(n,e){return i(n,e)}),[]);if(n)return Object.values(n).map(f).reduce((function(n,e){return i(n,e)}),[]);throw new Error("Internal error, this should never happen")}function l(n,e,t){var r,i;if(n instanceof a.CharLiteral)return[h(new a.PolyType([],new a.TypeFuncApp("char")),t),{}];if(n instanceof a.NumberLiteral)return[h(new a.PolyType([],new a.TypeFuncApp("number")),t),{}];if(n instanceof a.Var){var T=e[n.name];if(!T)throw new p(n.name+" is not in scope");return[h(T,t),{}]}if(n instanceof a.App){var d=l(n.func,e,t),m=d[0],b=d[1],g=l(n.arg,u(b,e),t),P=g[0],v=g[1],j=new a.TypeVar(t()),F=y(w(m,v),new a.TypeFuncApp("->",P,j));return[w(j,F),c(b,v,F)]}if(n instanceof a.Abs){j=new a.TypeVar(t());var O=l(n.body,o(o({},e),((r={})[n.param]=new a.PolyType([],j),r)),t),A=O[0],S=O[1];return[w(new a.TypeFuncApp("->",j,A),S),S]}if(n instanceof a.Let){var x=l(n.def,e,t),_=x[0],V=x[1],k=l(n.body,o(o({},u(V,e)),((i={})[n.param]=function(n,e){return new a.PolyType(s(f(e),f(n)),e)}(u(V,e),_),i)),t);return[A=k[0],c(V,S=k[1])]}throw new Error("Internal error, this should never happen")}function h(n,e,t,r){if(void 0===t&&(t=[]),void 0===r&&(r=[]),n instanceof a.TypeVar){var o=t.indexOf(n.name);return-1===o?n:new a.TypeVar(r[o])}if(n instanceof a.TypeFuncApp)return new(a.TypeFuncApp.bind.apply(a.TypeFuncApp,i([void 0,n.constructorName],n.args.map((function(n){return h(n,e,t,r)})))));if(n instanceof a.PolyType)return h(n.monoType,e,n.quantifiedVars,n.quantifiedVars.map(e));throw new Error("Internal error, this should never happen")}function w(n,e){if(n instanceof a.TypeVar)return n.name in e?e[n.name]:n;if(n instanceof a.TypeFuncApp)return new(a.TypeFuncApp.bind.apply(a.TypeFuncApp,i([void 0,n.constructorName],n.args.map((function(n){return w(n,e)})))));if(n instanceof a.PolyType)return new a.PolyType(n.quantifiedVars,w(n.monoType,e));throw new Error("Internal error, this should never happen")}function T(n,e){if(n instanceof a.TypeVar)return n.name==e.name;if(n instanceof a.TypeFuncApp)return n.args.some((function(n){return T(n,e)}));if(n instanceof a.PolyType)return T(n.monoType,e)&&!n.quantifiedVars.includes(e.name);throw new Error("Internal error, this should never happen")}e.TypeInferenceError=p,e.substitute=u,e.combine=c,e.unify=y,e.infer=function(n,e){void 0===e&&(e={});var t=0;return l(n,e,(function(){return"t"+t++}))[0]},e.apply=w},28:function(n,e,t){},38:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(2),i=t.n(o),a=t(20),p=t.n(a),u=t(21),c=t(22),y=t(16),s=(t(28),t(0)),f=t(15),l=new s.TypeFuncApp("number"),h=new s.TypeFuncApp("boolean"),w=function n(e,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return 0===o.length?new s.TypeFuncApp("->",e,t):new s.TypeFuncApp("->",e,n.apply(void 0,[t,o[0]].concat(Object(y.a)(o.slice(1)))))},T=function(n){return new s.TypeFuncApp("[]",n)},d=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(e.length<=1)throw new Error("Tuple has too few elements, minimum of 2 but given "+e.length);if(e.length>8)throw new Error("Tuple has too many elements, maximum of 8 but given "+e.length);return Object(c.a)(s.TypeFuncApp,[",".repeat(e.length-1)].concat(e))},m=function(n){return new s.TypeFuncApp("Maybe",n)},b=function(n,e){return new s.TypeFuncApp("Either",n,e)},g=new s.TypeVar("a"),P=new s.TypeVar("b"),v=new s.TypeVar("c"),j=new s.TypeVar("d"),F=function(n){return new s.PolyType([],n)},O={"+":F(w(l,l,l)),"*":F(w(l,l,l)),"-":F(w(l,l,l)),"/":F(w(l,l,l)),"%":F(w(l,l,l)),negate:F(w(l,l)),abs:F(w(l,l)),signum:F(w(l,l)),even:F(w(l,h)),odd:F(w(l,h)),not:F(w(h,h)),"&&":F(w(h,h,h)),"||":F(w(h,h,h)),True:F(h),False:F(h),myNumber:F(l),myBoolean:F(h),"[]":new s.PolyType(["a"],T(g)),":":new s.PolyType(["a"],w(g,T(g),T(g))),cons:new s.PolyType(["a"],w(g,T(g),T(g))),"++":new s.PolyType(["a"],w(T(g),T(g),T(g))),head:new s.PolyType(["a"],w(T(g),g)),last:new s.PolyType(["a"],w(T(g),g)),tail:new s.PolyType(["a"],w(T(g),T(g))),init:new s.PolyType(["a"],w(T(g),T(g))),uncons:new s.PolyType(["a"],w(T(g),m(d(g,T(g))))),null:new s.PolyType(["a"],w(T(g),h)),length:new s.PolyType(["a"],w(T(g),l)),map:new s.PolyType(["a","b"],w(w(g,P),T(g),T(P))),reverse:new s.PolyType(["a"],w(T(g),T(g))),intersperse:new s.PolyType(["a"],w(g,T(g),T(g))),intercalate:new s.PolyType(["a"],w(T(g),T(T(g)),T(g))),transpose:new s.PolyType(["a"],w(T(T(g)),T(T(g)))),subsequences:new s.PolyType(["a"],w(T(g),T(T(g)))),permutations:new s.PolyType(["a"],w(T(g),T(T(g)))),foldl:new s.PolyType(["a"],w(w(P,g,P),P,T(g),P)),"foldl'":new s.PolyType(["a"],w(w(P,g,P),P,T(g),P)),foldl1:new s.PolyType(["a"],w(w(g,g,g),T(g),g)),"foldl1'":new s.PolyType(["a"],w(w(g,g,g),T(g),g)),foldr:new s.PolyType(["a"],w(w(g,P,P),P,T(g),P)),foldr1:new s.PolyType(["a"],w(w(g,g,g),T(g),g)),concat:new s.PolyType(["a"],w(T(T(g)),T(g))),concatMap:new s.PolyType(["a"],w(w(g,T(g)),T(g),T(P))),and:F(w(T(h),h)),or:F(w(T(h),h)),any:new s.PolyType(["a"],w(w(g,h),T(g),h)),all:new s.PolyType(["a"],w(w(g,h),T(g),h)),sum:F(w(T(l),l)),product:F(w(T(l),l)),maximum:F(w(T(l),l)),minimum:F(w(T(l),l)),take:new s.PolyType(["a"],w(l,T(g),T(g))),drop:new s.PolyType(["a"],w(l,T(g),T(g))),splitAt:new s.PolyType(["a"],w(l,T(g),d(T(g),T(g)))),takeWhile:new s.PolyType(["a"],w(w(g,h),T(g),T(g))),dropWhile:new s.PolyType(["a"],w(w(g,h),T(g),T(g))),elem:new s.PolyType(["a"],w(g,T(g),h)),notElem:new s.PolyType(["a"],w(g,T(g),h)),lookup:new s.PolyType(["a","b"],w(g,T(d(g,P)),m(P))),find:new s.PolyType(["a"],w(w(g,h),T(g),m(g))),filter:new s.PolyType(["a"],w(w(g,h),T(g),T(g))),partition:new s.PolyType(["a"],w(w(g,h),T(g),d(T(g),T(g)))),"!!":new s.PolyType(["a"],w(T(g),l,g)),zip:new s.PolyType(["a","b"],w(T(g),T(P),T(d(g,P)))),zipWith:new s.PolyType(["a","b","c"],w(w(g,P,v),T(g),T(P),T(v))),unzip:new s.PolyType(["a","b"],w(T(d(g,P)),d(T(g),T(P)))),nub:new s.PolyType(["a"],w(T(g),T(g))),delete:new s.PolyType(["a"],w(g,T(g),T(g))),"\\\\":new s.PolyType(["a"],w(T(g),T(g),T(g))),union:new s.PolyType(["a"],w(T(g),T(g),T(g))),intersect:new s.PolyType(["a"],w(T(g),T(g),T(g))),sort:new s.PolyType(["a"],w(T(g),T(g))),",":new s.PolyType(["a","b"],w(g,P,d(g,P))),",,":new s.PolyType(["a","b","c"],w(g,P,v,d(g,P,v))),",,,":new s.PolyType(["a","b","c","d"],w(g,P,v,j,d(g,P,v,j))),fst:new s.PolyType(["a","b"],w(d(g,P),g)),snd:new s.PolyType(["a","b"],w(d(g,P),P)),curry:new s.PolyType(["a","b","c"],w(w(d(g,P),v),g,P,v)),uncurry:new s.PolyType(["a","b","c"],w(w(g,P,v),d(g,P),v)),Just:new s.PolyType(["a"],w(g,m(g))),Nothing:new s.PolyType(["a"],m(g)),Left:new s.PolyType(["a","b"],w(g,b(g,P))),Right:new s.PolyType(["a","b"],w(P,b(g,P)))};var A=function(){var n=Object(o.useState)("map not []"),e=Object(u.a)(n,2),t=e[0],i=e[1],a="Failed to parse",p="Failed to infer type";try{if(!((a=Object(s.parse)(t))instanceof s.CharLiteral)&&!(a instanceof s.NumberLiteral)&&!(a instanceof s.Var)&&!(a instanceof s.App)&&!(a instanceof s.Abs)&&!(a instanceof s.Let))throw new Error("Not a valid expression");p=Object(f.infer)(a,O)}catch(c){c.name===s.ParseError.name?a=c.message:c.name===f.TypeInferenceError.name?p=c.message:a="Not a valid expression: "+JSON.stringify(c.message)}return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"interactive type inference"}),Object(r.jsx)("h2",{children:"Play with algorithm W in your browser."}),Object(r.jsxs)("h2",{children:["Samples:",Object(r.jsx)("button",{onClick:function(){return i("4")},children:"4"}),Object(r.jsx)("button",{onClick:function(){return i("+")},children:"+"}),Object(r.jsx)("button",{onClick:function(){return i("map not []")},children:"map not []"}),Object(r.jsx)("button",{onClick:function(){return i("fst")},children:"fst"}),Object(r.jsx)("button",{onClick:function(){return i("Just")},children:"Just"}),Object(r.jsx)("button",{onClick:function(){return i("let x = 3 in + x")},children:"let x = 3 in +"})]}),Object(r.jsx)("textarea",{placeholder:"Enter code here...",value:t,onChange:function(n){return i(n.target.value)}}),Object(r.jsx)("h2",{children:"AST"}),Object(r.jsx)("p",{children:a.toString()}),Object(r.jsx)("h2",{children:"Type"}),Object(r.jsx)("p",{children:p.toString()})]})};p.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.a8ba1895.chunk.js.map