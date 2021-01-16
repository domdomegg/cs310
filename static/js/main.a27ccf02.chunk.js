(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{2:function(n,t,e){"use strict";var r=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),o=this&&this.__spreadArrays||function(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;var r=Array(n),o=0;for(t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.typeUtils=t.ParseError=t.parse=t.PolyType=t.TypeFuncApp=t.TypeVar=t.Let=t.Abs=t.App=t.Var=t.NumberLiteral=t.CharLiteral=void 0;var i=e(28),a=function(){function n(n,t,e){this.value=n,this.pos=t,this.notes=e}return n.prototype.toString=function(){return"'"+this.value+"'"},n}();t.CharLiteral=a;var s=function(){function n(n,t,e){this.value=n,this.pos=t,this.notes=e}return n.prototype.toString=function(){return this.value.toString()},n}();t.NumberLiteral=s;var c=function(){function n(n,t,e){this.name=n,this.pos=t,this.notes=e}return n.prototype.toString=function(){return this.name},n}();t.Var=c;var u=function(){function n(n,t,e,r){this.func=n,this.arg=t,this.pos=e,this.notes=r}return n.prototype.toString=function(){return"("+this.func.toString()+" "+this.arg.toString()+")"},n}();t.App=u;var p=function(){function n(n,t,e,r){this.param=n,this.body=t,this.pos=e,this.notes=r}return n.prototype.toString=function(){return"(\\"+this.param+" -> "+this.body.toString()+")"},n}();t.Abs=p;var h=function(){function n(n,t,e,r,o){this.param=n,this.def=t,this.body=e,this.pos=r,this.notes=o}return n.prototype.toString=function(){return"(let "+this.param+" = "+this.def.toString()+" in "+this.body.toString()+")"},n}();t.Let=h;var l=function(){function n(n){this.name=n}return n.prototype.toString=function(){return this.name},n}();t.TypeVar=l;var f=function(){function n(n){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];this.constructorName=n,this.args=t}return n.prototype.toString=function(){return"->"==this.constructorName?(this.args[0]instanceof n&&"->"==this.args[0].constructorName?"("+this.args[0].toString()+")":this.args[0].toString())+" -> "+this.args[1].toString():"[]"==this.constructorName?"["+this.args[0].toString()+"]":this.constructorName.startsWith(",")?"("+this.args.join(", ")+")":this.args.every((function(n){return n instanceof l||"number"==n.constructorName||"char"==n.constructorName||"boolean"==n.constructorName}))?this.constructorName+(this.args.length?" ":"")+this.args.map((function(n){return""+n.toString()})).join(" "):this.constructorName+(this.args.length?" ":"")+this.args.map((function(n){return"("+n.toString()+")"})).join(" ")},n}();t.TypeFuncApp=f;var d=function(){function n(n,t){this.quantifiedVars=n,this.monoType=t}return n.prototype.toString=function(){return(this.quantifiedVars.length?this.quantifiedVars.map((function(n){return"\u2200"+n})).join("")+": ":"")+this.monoType.toString()},n}();t.PolyType=d;var y=new f("number"),b=new f("char"),g=new f("boolean"),m=function n(t,e){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return 0===r.length?new f("->",t,e):new f("->",t,n.apply(void 0,o([e,r[0]],r.slice(1))))},w=function(n){return new f("[]",n)},v=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(n.length<=1)throw new Error("Tuple has too few elements, minimum of 2 but given "+n.length);if(n.length>8)throw new Error("Tuple has too many elements, maximum of 8 but given "+n.length);return new(f.bind.apply(f,o([void 0,",".repeat(n.length-1)],n)))},j=function(n){return new f("Maybe",n)},O=function(n,t){return new f("Either",n,t)},x=new l("a"),T=new l("b"),S=new l("c"),F=new l("d"),k=function(n){return new d([],n)},C={"+":k(m(y,y,y)),"*":k(m(y,y,y)),"-":k(m(y,y,y)),"/":k(m(y,y,y)),"%":k(m(y,y,y)),negate:k(m(y,y)),abs:k(m(y,y)),signum:k(m(y,y)),even:k(m(y,g)),odd:k(m(y,g)),not:k(m(g,g)),"&&":k(m(g,g,g)),"||":k(m(g,g,g)),True:k(g),False:k(g),myNumber:k(y),myBoolean:k(g),"[]":new d(["a"],w(x)),":":new d(["a"],m(x,w(x),w(x))),cons:new d(["a"],m(x,w(x),w(x))),"++":new d(["a"],m(w(x),w(x),w(x))),head:new d(["a"],m(w(x),x)),last:new d(["a"],m(w(x),x)),tail:new d(["a"],m(w(x),w(x))),init:new d(["a"],m(w(x),w(x))),uncons:new d(["a"],m(w(x),j(v(x,w(x))))),null:new d(["a"],m(w(x),g)),length:new d(["a"],m(w(x),y)),map:new d(["a","b"],m(m(x,T),w(x),w(T))),reverse:new d(["a"],m(w(x),w(x))),intersperse:new d(["a"],m(x,w(x),w(x))),intercalate:new d(["a"],m(w(x),w(w(x)),w(x))),transpose:new d(["a"],m(w(w(x)),w(w(x)))),subsequences:new d(["a"],m(w(x),w(w(x)))),permutations:new d(["a"],m(w(x),w(w(x)))),foldl:new d(["a"],m(m(T,x,T),T,w(x),T)),"foldl'":new d(["a"],m(m(T,x,T),T,w(x),T)),foldl1:new d(["a"],m(m(x,x,x),w(x),x)),"foldl1'":new d(["a"],m(m(x,x,x),w(x),x)),foldr:new d(["a"],m(m(x,T,T),T,w(x),T)),foldr1:new d(["a"],m(m(x,x,x),w(x),x)),concat:new d(["a"],m(w(w(x)),w(x))),concatMap:new d(["a"],m(m(x,w(x)),w(x),w(T))),and:k(m(w(g),g)),or:k(m(w(g),g)),any:new d(["a"],m(m(x,g),w(x),g)),all:new d(["a"],m(m(x,g),w(x),g)),sum:k(m(w(y),y)),product:k(m(w(y),y)),maximum:k(m(w(y),y)),minimum:k(m(w(y),y)),take:new d(["a"],m(y,w(x),w(x))),drop:new d(["a"],m(y,w(x),w(x))),splitAt:new d(["a"],m(y,w(x),v(w(x),w(x)))),takeWhile:new d(["a"],m(m(x,g),w(x),w(x))),dropWhile:new d(["a"],m(m(x,g),w(x),w(x))),elem:new d(["a"],m(x,w(x),g)),notElem:new d(["a"],m(x,w(x),g)),lookup:new d(["a","b"],m(x,w(v(x,T)),j(T))),find:new d(["a"],m(m(x,g),w(x),j(x))),filter:new d(["a"],m(m(x,g),w(x),w(x))),partition:new d(["a"],m(m(x,g),w(x),v(w(x),w(x)))),"!!":new d(["a"],m(w(x),y,x)),zip:new d(["a","b"],m(w(x),w(T),w(v(x,T)))),zipWith:new d(["a","b","c"],m(m(x,T,S),w(x),w(T),w(S))),unzip:new d(["a","b"],m(w(v(x,T)),v(w(x),w(T)))),nub:new d(["a"],m(w(x),w(x))),delete:new d(["a"],m(x,w(x),w(x))),"\\\\":new d(["a"],m(w(x),w(x),w(x))),union:new d(["a"],m(w(x),w(x),w(x))),intersect:new d(["a"],m(w(x),w(x),w(x))),sort:new d(["a"],m(w(x),w(x))),",":new d(["a","b"],m(x,T,v(x,T))),",,":new d(["a","b","c"],m(x,T,S,v(x,T,S))),",,,":new d(["a","b","c","d"],m(x,T,S,F,v(x,T,S,F))),fst:new d(["a","b"],m(v(x,T),x)),snd:new d(["a","b"],m(v(x,T),T)),curry:new d(["a","b","c"],m(m(v(x,T),S),x,T,S)),uncurry:new d(["a","b","c"],m(m(x,T,S),v(x,T),S)),Just:new d(["a"],m(x,j(x))),Nothing:new d(["a"],j(x)),Left:new d(["a","b"],m(x,O(x,T))),Right:new d(["a","b"],m(T,O(x,T))),id:new d(["a"],m(x,x))},A=function(n){function t(t){var e=n.call(this,t)||this;return e.name="ParseError",e}return r(t,n),t}(Error);t.ParseError=A;var N=new i.GenLex,_=N.tokenize(i.C.charIn("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*+-/%<>^:[]_|&,").rep().map((function(n){return n.join()})),"identifier"),P=N.tokenize(i.C.charLiteral(),"char"),E=N.tokenize(i.C.stringLiteral(),"string"),V=N.tokenize(i.N.number(),"number"),L=N.tokenize(i.C.char("\\"),"backslash"),z=N.tokenize(i.C.string("->"),"arrow"),I=N.tokenize(i.C.char("("),"lparen"),W=N.tokenize(i.C.char(")"),"rparen"),q=N.tokenize(i.C.string("let"),"let"),M=N.tokenize(i.C.char("="),"equal"),J=N.tokenize(i.C.string("in"),"in"),B=function(){return i.F.try($(D())).or(i.F.try($(K()))).or(i.F.try($(Y()))).or(i.F.try($(X())))},H=function(){return i.F.try(D()).or(i.F.try(K())).or(i.F.try(Y())).or(i.F.try(X()))},U=function(n,t){for(var e=n.split(""),r=G(t),o=new c("[]",{start:r.end-1,end:r.end}),i=e.length-1;i>=0;i--){var s={start:r.start+1+i,end:r.start+2+i};o=new u(new u(new c(":",s),new a(e[i],s),s),o,{start:r.start+1+i,end:r.end-1})}return o.pos.start=r.start,o.pos.end=r.end,o},G=function(n){var t=n.getOffset()-1,e=n.input.location(t),r=n.input.location(t+1),o=n.input.source.input.source.slice(e,r);return{start:e,end:r-(o.length-o.trimEnd().length)}},R=function(n,t){var e=t.input.source.input.source;return n.pos.end+=e.slice(n.pos.end).indexOf(")")+1,n.pos.start=e.slice(0,n.pos.start).lastIndexOf("("),n},D=function(){return i.F.try(V.map((function(n,t){return new s(n,G(t))}))).or(i.F.try(E.map(U))).or(i.F.try(P.map((function(n,t){return new a(n,G(t))})))).or(i.F.try(_.map((function(n,t){return new c(n,G(t))}))))},K=function(){return I.drop().then(Q()).then(W.drop()).single().map(R)},Q=function(){return L.map((function(n,t){return t.location()-1})).then(_).then(z.drop()).then(i.F.lazy(B)).map((function(n,t){return new p(n.at(1),n.at(2),{start:n.at(0),end:t.location()})}))},X=function(){return I.drop().then(i.F.lazy(B)).then(W.drop()).single().map(R)},Y=function(){return I.drop().then(Z()).then(W.drop()).single().map(R)},Z=function(){return q.map((function(n,t){return G(t).start})).then(_).then(M.drop()).then(i.F.lazy(B)).then(J.drop()).then(i.F.lazy(B)).map((function(n,t){return new h(n.at(1),n.at(2),n.at(3),{start:n.at(0),end:t.location()})}))},$=function(n){return n.then(nn()).array().map(tn)},nn=function(){return i.F.lazy(H).optrep()},tn=function(n){return n.reduce((function(n,t){return new u(n,t,{start:n.pos.start,end:t.pos.end})}))},en=N.use(i.F.try(Z()).or(i.F.try(Q())).or(i.F.try(B())).then(i.F.eos().drop()).single());t.parse=function(n,t){void 0===t&&(t=!1);var e=en.parse(i.Streams.ofString(n));if(t)return e.isAccepted()?{accepted:!0,value:e.value}:{accepted:!1,issuePosition:{start:e.location(),end:n.length},message:"Failed to parse"};if(e.isAccepted())return e.value;throw new A("Failed to parse:\n\t"+n+"\n\t"+" ".repeat(e.location())+"^")};var rn={number:y,char:b,boolean:g,f:m,list:w,tuple:v,maybe:j,either:O,a:x,b:T,c:S,d:F,pt:k,standardCtx:C};t.typeUtils=rn},20:function(n,t,e){"use strict";var r=this&&this.__extends||function(){var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])})(t,e)};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),o=this&&this.__assign||function(){return(o=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;var r=Array(n),o=0;for(t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.apply=t.infer=t.unify=t.combine=t.substitute=t.TypeInferenceError=void 0;var a=e(2),s=function(n){function t(t){var e=n.call(this,t)||this;return e.name="TypeInferenceError",e}return r(t,n),t}(Error);function c(n,t){var e=t,r={};for(var o in e)r[o]=m(e[o],n);return r}function u(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];if(0===n.length)return{};if(1===n.length)return n[0];if(n.length>2)return u(n[0],u.apply(void 0,n.slice(1)));var e=n[0],r=n[1],o={};for(var i in e)o[i]=m(e[i],r);for(var i in r)i in e||(o[i]=r[i]);return o}function p(n,t){var e;if(n instanceof a.TypeVar){if(w(t,n))throw new s("Contains/occurs check failed with "+JSON.stringify(n)+" and "+JSON.stringify(t));return(e={})[n.name]=t,e}if(t instanceof a.TypeVar)return p(t,n);if(n instanceof a.TypeFuncApp&&t instanceof a.TypeFuncApp){if(n.constructorName!==t.constructorName)throw new s("Could not unify types `"+n.toString()+"` and `"+t.toString()+"` with different constructors `"+n.constructorName+"` and `"+t.constructorName+"`");if(n.args.length!==t.args.length)throw new s("Could not unify types `"+n.toString()+"` and `"+t.toString()+"` with different argument list lengths `"+n.args.length+"` and `"+t.args.length+"`");for(var r={},o=0;o<n.args.length;o++)r=u(p(m(n.args[o],r),m(t.args[o],r)),r);return r}throw new Error("Internal error, this should never happen")}function h(n,t){var e=new Set(t);return n.filter((function(n){return!e.has(n)}))}function l(n){if(n instanceof a.PolyType)return h(l(n.monoType),n.quantifiedVars);if(n instanceof a.TypeVar)return[n.name];if(n instanceof a.TypeFuncApp)return n.args.map(l).reduce((function(n,t){return i(n,t)}),[]);if(n)return Object.values(n).map(l).reduce((function(n,t){return i(n,t)}),[]);throw new Error("Internal error, this should never happen")}function f(n,t){return new a.PolyType(function(n){var t=[];return new Set(n).forEach((function(n){return t.push(n)})),t}(h(l(t),l(n))),t)}t.TypeInferenceError=s,t.substitute=c,t.combine=u,t.unify=p,t.infer=function(n,t,e){void 0===t&&(t=!1),void 0===e&&(e=a.typeUtils.standardCtx);var r=0,o=function(){return"t"+r++};if(!t)return b(n,e,o)[0];var i=[];try{return{accepted:!0,value:{type:b(n,e,o,(function(t,e){i.push({message:t,ast:d(n,e)})}))[0],steps:i}}}catch(c){return{accepted:!1,value:{steps:i},issuePosition:c.name==s.name?c.expr.pos:n.pos,message:c.message}}};var d=function n(t,e){if(t instanceof a.CharLiteral)return new a.CharLiteral(t.value,t.pos,e.get(t));if(t instanceof a.NumberLiteral)return new a.NumberLiteral(t.value,t.pos,e.get(t));if(t instanceof a.Var)return new a.Var(t.name,t.pos,e.get(t));if(t instanceof a.App)return new a.App(n(t.func,e),n(t.arg,e),t.pos,e.get(t));if(t instanceof a.Abs)return new a.Abs(t.param,n(t.body,e),t.pos,e.get(t));if(t instanceof a.Let)return new a.Let(t.param,n(t.def,e),n(t.body,e),t.pos,e.get(t));throw new Error("Internal error, this should never happen")},y=function(n){var t=new Map;return t.set(n,"highlight"),t};function b(n,t,e,r){var i,h,l,d;if(void 0===r&&(r=function(){}),n instanceof a.CharLiteral)return r("We know the primitive `"+n.toString()+"` is a `char`",y(n)),[g(new a.PolyType([],new a.TypeFuncApp("char")),e),{}];if(n instanceof a.NumberLiteral)return r("We know the primitive `"+n.toString()+"` is a `number`",y(n)),[g(new a.PolyType([],new a.TypeFuncApp("number")),e),{}];if(n instanceof a.Var){if(!(V=t[n.name])){r("We try to look up the variable `"+n.toString()+"` but find it is not in scope. We stop here as this is an error.",y(n));var w=new s("`"+n.name+"` is not in scope");throw w.expr=n,w}var v=g(V,e);return r("We can look up the variable `"+n.toString()+"` and find it has type `"+V.toString()+(V.quantifiedVars.length?"`\nWe instatiate this type with fresh type variables to get `"+v.toString()+"`":""),y(n)),[v,{}]}if(n instanceof a.App){var j=b(n.func,t,e,r),O=j[0],x=j[1],T=b(n.arg,c(x,t),e,r),S=T[0],F=T[1],k=new a.TypeVar(e()),C=O instanceof a.TypeFuncApp&&"->"==O.constructorName?"In function application, the function must accept the expected argument type.\nBefore unification, the function has type `"+O.toString()+"`\n\nTherefore we unify:\nFunction accepts `"+O.args[0].toString()+"`\nArgument has type `"+S.toString()+"`\n\n":"In function application, the function must accept the expected argument type and returns some other type.\n\nTherefore we unify:\nFunction type `"+O.toString()+"`\nArgument to fresh type `"+new a.TypeFuncApp("->",S,k).toString()+"`\n\n",A=void 0;try{A=p(m(O,F),new a.TypeFuncApp("->",S,k))}catch(w){throw r(C+"However, these two types are not unifiable. We stop here as this is an error.\n\nMore details:\n"+w.message,y(n)),w.expr=n,w}var N=m(k,A);return r(C+"This gives the substitution `"+(l=A,d=k.name,("{ "+Object.keys(l).filter((function(n){return n!==d})).map((function(n){return n+" \u21a6 "+l[n].toString()})).join(", ")+" }").replace("{  }","{}")+"`\nAnd the function's return type as `")+N.toString()+"`",y(n)),[N,u(x,F,A)]}if(n instanceof a.Abs){k=new a.TypeVar(e());r("Our function definition binds `"+n.param+"` in the body to the fresh type `"+k.toString()+"`",y(n));var _=b(n.body,o(o({},t),((i={})[n.param]=new a.PolyType([],k),i)),e,r),P=_[0],E=_[1],V=m(new a.TypeFuncApp("->",k,P),E);return r((E[k.name]?"We apply the substitution `{ "+k.name+" \u21a6 "+E[k.name].toString()+" }` to get the parameter's type `"+V.args[0].toString()+"`.\n":"")+"The return type is given by the function body's type `"+V.args[1].toString()+"`\nTherefore the overall type is `"+V.toString()+"`",y(n)),[V,E]}if(n instanceof a.Let){var L=b(n.def,t,e,r),z=L[0],I=L[1],W=f(c(I,t),z);r("Our let statement binds `"+n.param+"` in the body to the type `"+W.toString()+"`",y(n));var q=b(n.body,o(o({},c(I,t)),((h={})[n.param]=W,h)),e,r);P=q[0],E=q[1];return r("Our let statement then takes its body's type `"+P.toString()+"`",y(n)),[P,u(I,E)]}throw new Error("Internal error, this should never happen")}function g(n,t,e,r){if(void 0===e&&(e=[]),void 0===r&&(r=[]),n instanceof a.TypeVar){var o=e.indexOf(n.name);return-1===o?n:new a.TypeVar(r[o])}if(n instanceof a.TypeFuncApp)return new(a.TypeFuncApp.bind.apply(a.TypeFuncApp,i([void 0,n.constructorName],n.args.map((function(n){return g(n,t,e,r)})))));if(n instanceof a.PolyType)return g(n.monoType,t,n.quantifiedVars,n.quantifiedVars.map(t));throw new Error("Internal error, this should never happen")}function m(n,t){if(n instanceof a.TypeVar)return n.name in t?t[n.name]:n;if(n instanceof a.TypeFuncApp)return new(a.TypeFuncApp.bind.apply(a.TypeFuncApp,i([void 0,n.constructorName],n.args.map((function(n){return m(n,t)})))));if(n instanceof a.PolyType)return new a.PolyType(n.quantifiedVars,m(n.monoType,t));throw new Error("Internal error, this should never happen")}function w(n,t){if(n instanceof a.TypeVar)return n.name==t.name;if(n instanceof a.TypeFuncApp)return n.args.some((function(n){return w(n,t)}));if(n instanceof a.PolyType)return w(n.monoType,t)&&!n.quantifiedVars.includes(t.name);throw new Error("Internal error, this should never happen")}t.apply=m},27:function(n,t,e){},37:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e(1),i=e.n(o),a=e(19),s=e.n(a),c=e(15),u=(e(27),e(21)),p=e(2),h=e(20);function l(n){var t=n.node,e=n.hoverCallback;if(t instanceof p.CharLiteral||t instanceof p.NumberLiteral)return Object(r.jsx)(f,{node:t,hoverCallback:e,children:t.value});if(t instanceof p.Var)return Object(r.jsx)(f,{node:t,hoverCallback:e,children:t.name});if(t instanceof p.App)return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(f,{node:t,hoverCallback:e,children:Object(r.jsx)("span",{className:"sans-serif",children:"Function application"})}),Object(r.jsx)(d,{children:Object(r.jsx)(l,{node:t.func,hoverCallback:e})}),Object(r.jsx)(d,{children:Object(r.jsx)(l,{node:t.arg,hoverCallback:e})})]});if(t instanceof p.Abs)return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(f,{node:t,hoverCallback:e,children:["\u03bb",t.param]}),Object(r.jsx)(d,{symbol:"->",children:Object(r.jsx)(l,{node:t.body,hoverCallback:e})})]});if(t instanceof p.Let)return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(f,{node:t,hoverCallback:e,children:["let ",t.param]}),Object(r.jsx)(d,{symbol:"=",children:Object(r.jsx)(l,{node:t.def,hoverCallback:e})}),Object(r.jsx)(d,{symbol:"in",children:Object(r.jsx)(l,{node:t.body,hoverCallback:e})})]});throw new Error("Attempted to display a node of invalid type "+typeof t)}function f(n){var t=n.children,e=n.node,o=n.hoverCallback;return Object(r.jsx)("div",{className:"ast-node "+(e.notes||""),onMouseOver:function(){return o(!0,e.pos)},onMouseOut:function(){return o(!1,e.pos)},children:t})}function d(n){var t=n.children,e=n.symbol;return Object(r.jsx)("div",{className:"ast-child","data-symbol":e,children:t})}var y=function(n){var t=n.ast,e=n.hoverCallback;return Object(r.jsx)("div",{className:"ast-view",children:Object(r.jsx)(l,{node:t,hoverCallback:e})})};var b=function(n,t){return function(e,r){n(e?[].concat(Object(u.a)(t),[{start:r.start,end:r.end,className:"highlight-white"}]):t)}},g=function(n){var t=n.code,e=n.setHighlights,i=Object(o.useMemo)((function(){return Object(p.parse)(t,!0)}),[t]);Object(o.useEffect)((function(){return e(i.accepted?[]:[{start:i.issuePosition.start,end:i.issuePosition.end,className:"highlight-error"}])}),[i,e]);var a=Object(o.useMemo)((function(){if(i.accepted)return Object(h.infer)(i.value,!0)}),[i]);if(Object(o.useEffect)((function(){return a&&e(a.accepted?[]:[{start:a.issuePosition.start,end:a.issuePosition.end,className:"highlight-error"}])}),[a,e]),!i.accepted)return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"AST"}),Object(r.jsx)("p",{children:i.message})]});var s=b(e,[]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"AST"}),Object(r.jsx)(y,{ast:i.value,hoverCallback:s}),Object(r.jsx)("h2",{children:"Type derivation"}),a.value.steps.map((function(n,t){return Object(r.jsxs)("div",{className:"type-derivation-step",children:[Object(r.jsxs)("h3",{children:["Step ",t+1]}),Object(r.jsx)("p",{children:n.message.split("`").map((function(n,t){return t%2===0?n:Object(r.jsx)("code",{children:n},t)}))}),Object(r.jsx)(y,{ast:n.ast,hoverCallback:s})]},t)})),a.accepted&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Type"}),Object(r.jsx)("p",{children:Object(r.jsx)("code",{children:a.value.type.toString()})})]})]})};var m=function(){var n=Object(o.useState)("map not []"),t=Object(c.a)(n,2),e=t[0],i=t[1],a=Object(o.useState)([]),s=Object(c.a)(a,2),u=s[0],p=s[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{children:"interactive type inference"}),Object(r.jsx)("h2",{children:"Play with algorithm W in your browser."}),Object(r.jsxs)("h2",{children:["Samples:",Object(r.jsx)("button",{onClick:function(){return i("4")},children:"4"}),Object(r.jsx)("button",{onClick:function(){return i("not")},children:"not"}),Object(r.jsx)("button",{onClick:function(){return i("not True")},children:"not True"}),Object(r.jsx)("button",{onClick:function(){return i("+")},children:"+"}),Object(r.jsx)("button",{onClick:function(){return i("map not []")},children:"map not []"}),Object(r.jsx)("button",{onClick:function(){return i("fst")},children:"fst"}),Object(r.jsx)("button",{onClick:function(){return i("Just")},children:"Just"}),Object(r.jsx)("button",{onClick:function(){return i("let x = 3 in + x")},children:"let x = 3 in + x"}),Object(r.jsxs)("button",{onClick:function(){return i("\\x -> / x 2")},children:["\\x -",">"," / x 2"]}),Object(r.jsx)("button",{onClick:function(){return i("cons 23 []")},children:"cons 23 []"})]}),Object(r.jsxs)("div",{className:"code-container",children:[Object(r.jsx)("input",{placeholder:"Enter code...",value:e,onChange:function(n){return i(n.target.value)}}),e&&u.map((function(n,t){return Object(r.jsxs)("p",{children:[e.slice(0,n.start),Object(r.jsx)("span",{className:n.className,children:e.slice(n.start,n.end)}),e.slice(n.end)]},t)}))]}),e&&Object(r.jsx)(g,{code:e,setHighlights:p})]})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.a27ccf02.chunk.js.map