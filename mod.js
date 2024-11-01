// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Math.floor;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;var a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";var u=n&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,a,u,f;if(null==r)return t.call(r);n=r[o],f=o,e=null!=(u=r)&&i.call(u,f);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=n:delete r[o],a}:function(r){return t.call(r)},f="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var s,l="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,e,n;if("function"!=typeof c)return!1;try{e=new c(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(f&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var p=s,v="function"==typeof Float64Array;var g="function"==typeof Float64Array?Float64Array:null;var y,d="function"==typeof Float64Array?Float64Array:void 0;y=function(){var r,e,n;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),n=e,r=(v&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=y,w="function"==typeof Uint8Array;var b="function"==typeof Uint8Array?Uint8Array:null;var m,A="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var r,e,n;if("function"!=typeof b)return!1;try{e=new b(e=[1,3.14,-3.14,256,257]),n=e,r=(w&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _=m,N="function"==typeof Uint16Array;var E="function"==typeof Uint16Array?Uint16Array:null;var U,S="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,n;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),n=e,r=(N&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var I,k={uint16:U,uint8:_};(I=new k.uint16(1))[0]=4660;var x=52===new k.uint8(I.buffer)[0],F=!0===x?1:0,j=new h(1),T=new p(j.buffer);function O(r){return j[0]=r,T[F]}var V=!0===x?0:1,$=new h(1),G=new p($.buffer);function H(r,e){return $[0]=r,G[V]=e>>>0,$[0]}var W=.7853981633974483,C=3061616997868383e-32,L=.3333333333333341,P=2147483647;function M(r,e,n){var t,i,a,o,u,f,c,s,l;return(i=(t=O(r))&P|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=W-r)+(s=C-e),e=0),o=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),o=e+l*((u=l*r)*(o+c)+e),s=r+(o+=L*u),i>=1072010280?(1-(t>>30&2))*((c=n)-2*(r-(s*s/(s+c)-o))):1===n?s:(c=o-((l=H(s,0))-r),(f=H(a=-1/s,0))+a*((u=1+f*l)+f*c))}var R,Z,X=2147483647,Y=2146435072,q=1048575,z=!0===x?0:1,B=new h(1),D=new p(B.buffer);!0===x?(R=1,Z=0):(R=0,Z=1);var J={HIGH:R,LOW:Z},K=new h(1),Q=new p(K.buffer),rr=J.HIGH,er=J.LOW;function nr(r,e){return Q[rr]=r,Q[er]=e,K[0]}var tr=Number.POSITIVE_INFINITY,ir=Number.NEGATIVE_INFINITY,ar=1023,or=1023,ur=-1023,fr=-1074;function cr(r){return r===tr||r===ir}var sr=2147483648,lr="function"==typeof Object.defineProperty?Object.defineProperty:null;var pr=Object.defineProperty;function vr(r){return"number"==typeof r}function gr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function yr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+gr(i):gr(i)+r,t&&(r="-"+r)),r}var dr=String.prototype.toLowerCase,hr=String.prototype.toUpperCase;function wr(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!vr(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=yr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=yr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===hr.call(r.specifier)?hr.call(n):dr.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var br=Math.abs,mr=String.prototype.toLowerCase,Ar=String.prototype.toUpperCase,_r=String.prototype.replace,Nr=/e\+(\d)$/,Er=/e-(\d)$/,Ur=/^(\d+)$/,Sr=/^(\d+)e/,Ir=/\.0$/,kr=/\.0*e/,xr=/(\..*[^0])0*e/;function Fr(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!vr(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":br(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=_r.call(n,xr,"$1e"),n=_r.call(n,kr,"e"),n=_r.call(n,Ir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=_r.call(n,Nr,"e+0$1"),n=_r.call(n,Er,"e-0$1"),r.alternate&&(n=_r.call(n,Ur,"$1."),n=_r.call(n,Sr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Ar.call(r.specifier)?Ar.call(n):mr.call(n)}function jr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var Tr=String.fromCharCode,Or=Array.isArray;function Vr(r){return r!=r}function $r(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Gr(r){var e,n,t,i,a,o,u,f,c,s,l,p,v;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(t=r[f],"string"==typeof t)o+=t;else{if(e=void 0!==t.precision,!(t=$r(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,Vr(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,Vr(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=wr(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!Vr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Vr(a)?String(t.arg):Tr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=Fr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=yr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(s=t.arg,l=t.width,p=t.padRight,v=void 0,(v=l-s.length)<0?s:s=p?s+jr(v):jr(v)+s)),o+=t.arg||"",u+=1}return o}var Hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Wr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,n,t,i;for(n=[],i=0,t=Hr.exec(r);t;)(e=r.slice(i,Hr.lastIndex-t[0].length)).length&&n.push(e),n.push(Wr(t)),i=Hr.lastIndex,t=Hr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Lr(r){var e,n;if("string"!=typeof r)throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Cr(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return Gr.apply(null,e)}var Pr=Object.prototype,Mr=Pr.toString,Rr=Pr.__defineGetter__,Zr=Pr.__defineSetter__,Xr=Pr.__lookupGetter__,Yr=Pr.__lookupSetter__;var qr,zr,Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?pr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===Mr.call(r))throw new TypeError(Lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Mr.call(n))throw new TypeError(Lr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Xr.call(r,e)||Yr.call(r,e)?(t=r.__proto__,r.__proto__=Pr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Rr&&Rr.call(r,e,n.get),o&&Zr&&Zr.call(r,e,n.set),r};function Dr(r,e,n){Br(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===x?(qr=1,zr=0):(qr=0,zr=1);var Jr={HIGH:qr,LOW:zr},Kr=new h(1),Qr=new p(Kr.buffer),re=Jr.HIGH,ee=Jr.LOW;function ne(r,e,n,t){return Kr[0]=r,e[t]=Qr[re],e[t+n]=Qr[ee],e}function te(r){return ne(r,[0,0],1,0)}Dr(te,"assign",ne);var ie=[0,0];function ae(r,e){var n,t;return te.assign(r,ie,1,0),n=ie[0],n&=X,t=O(e),nr(n|=t&=sr,ie[1])}var oe=22250738585072014e-324;function ue(r){return Math.abs(r)}var fe=4503599627370496;function ce(e,n,t,i){return r(e)||cr(e)?(n[i]=e,n[i+t]=0,n):0!==e&&ue(e)<oe?(n[i]=e*fe,n[i+t]=-52,n):(n[i]=e,n[i+t]=0,n)}Dr((function(r){return ce(r,[0,0],1,0)}),"assign",ce);var se=2220446049250313e-31,le=2148532223,pe=[0,0],ve=[0,0];function ge(e,n){var t,i;return 0===n||0===e||r(e)||cr(e)?e:(ce(e,pe,1,0),e=pe[0],n+=pe[1],n+=function(r){var e=O(r);return(e=(e&Y)>>>20)-ar|0}(e),n<fr?ae(0,e):n>or?e<0?ir:tr:(n<=ur?(n+=52,i=se):i=1,te.assign(e,ve,1,0),t=ve[0],t&=le,i*nr(t|=n+ar<<20,ve[1])))}function ye(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var de=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],he=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],we=16777216,be=5.960464477539063e-8,me=ye(20),Ae=ye(20),_e=ye(20),Ne=ye(20);function Ee(r,n,t,i,a,o,u,f,c){var s,l,p,v,g,y,d,h,w;for(v=o,w=i[t],h=t,g=0;h>0;g++)l=be*w|0,Ne[g]=w-we*l|0,w=i[h-1]+l,h-=1;if(w=ge(w,a),w-=8*e(.125*w),w-=d=0|w,p=0,a>0?(d+=g=Ne[t-1]>>24-a,Ne[t-1]-=g<<24-a,p=Ne[t-1]>>23-a):0===a?p=Ne[t-1]>>23:w>=.5&&(p=2),p>0){for(d+=1,s=0,g=0;g<t;g++)h=Ne[g],0===s?0!==h&&(s=1,Ne[g]=16777216-h):Ne[g]=16777215-h;if(a>0)switch(a){case 1:Ne[t-1]&=8388607;break;case 2:Ne[t-1]&=4194303}2===p&&(w=1-w,0!==s&&(w-=ge(1,a)))}if(0===w){for(h=0,g=t-1;g>=o;g--)h|=Ne[g];if(0===h){for(y=1;0===Ne[o-y];y++);for(g=t+1;g<=t+y;g++){for(c[f+g]=de[u+g],l=0,h=0;h<=f;h++)l+=r[h]*c[f+(g-h)];i[g]=l}return Ee(r,n,t+=y,i,a,o,u,f,c)}}if(0===w)for(t-=1,a-=24;0===Ne[t];)t-=1,a-=24;else(w=ge(w,-a))>=we?(l=be*w|0,Ne[t]=w-we*l|0,a+=24,Ne[t+=1]=l):Ne[t]=0|w;for(l=ge(1,a),g=t;g>=0;g--)i[g]=l*Ne[g],l*=be;for(g=t;g>=0;g--){for(l=0,y=0;y<=v&&y<=t-g;y++)l+=he[y]*i[g+y];_e[t-g]=l}for(l=0,g=t;g>=0;g--)l+=_e[g];for(n[0]=0===p?l:-l,l=_e[0]-l,g=1;g<=t;g++)l+=_e[g];return n[1]=0===p?l:-l,7&d}function Ue(r,e,n,t){var i,a,o,u,f,c,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)me[f]=c<0?0:de[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*me[o+(f-c)];Ae[f]=i}return 4,Ee(r,e,4,Ae,u,4,a,o,me)}var Se=Math.round,Ie=.6366197723675814,ke=1.5707963267341256,xe=6077100506506192e-26,Fe=6077100506303966e-26,je=20222662487959506e-37,Te=20222662487111665e-37,Oe=84784276603689e-45,Ve=2047;function $e(r,e,n){var t,i,a,o,u;return a=r-(t=Se(r*Ie))*ke,o=t*xe,u=e>>20|0,n[0]=a-o,u-(O(n[0])>>20&Ve)>16&&(o=t*je-((i=a)-(a=i-(o=t*Fe))-o),n[0]=a-o,u-(O(n[0])>>20&Ve)>49&&(o=t*Oe-((i=a)-(a=i-(o=t*Te))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var Ge=0,He=16777216,We=1.5707963267341256,Ce=6077100506506192e-26,Le=2*Ce,Pe=3*Ce,Me=4*Ce,Re=598523,Ze=1072243195,Xe=1073928572,Ye=1074752122,qe=1074977148,ze=1075183036,Be=1075388923,De=1075594811,Je=1094263291,Ke=[0,0,0],Qe=[0,0];function rn(r,e){var n,t,i,a,o,u,f;if((i=O(r)&X|0)<=Ze)return e[0]=r,e[1]=0,0;if(i<=Ye)return(i&q)===Re?$e(r,i,e):i<=Xe?r>0?(f=r-We,e[0]=f-Ce,e[1]=f-e[0]-Ce,1):(f=r+We,e[0]=f+Ce,e[1]=f-e[0]+Ce,-1):r>0?(f=r-2*We,e[0]=f-Le,e[1]=f-e[0]-Le,2):(f=r+2*We,e[0]=f+Le,e[1]=f-e[0]+Le,-2);if(i<=De)return i<=ze?i===qe?$e(r,i,e):r>0?(f=r-3*We,e[0]=f-Pe,e[1]=f-e[0]-Pe,3):(f=r+3*We,e[0]=f+Pe,e[1]=f-e[0]+Pe,-3):i===Be?$e(r,i,e):r>0?(f=r-4*We,e[0]=f-Me,e[1]=f-e[0]-Me,4):(f=r+4*We,e[0]=f+Me,e[1]=f-e[0]+Me,-4);if(i<Je)return $e(r,i,e);if(i>=Y)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return B[0]=r,D[z]}(r),f=nr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)Ke[o]=0|f,f=(f-Ke[o])*He;for(Ke[2]=f,a=3;Ke[a-1]===Ge;)a-=1;return u=Ue(Ke,Qe,t,a),r<0?(e[0]=-Qe[0],e[1]=-Qe[1],-u):(e[0]=Qe[0],e[1]=Qe[1],u)}var en=[0,0],nn=2147483647,tn=1072243195,an=2146435072,on=1044381696;var un=3.141592653589793,fn=!0===x?1:0,cn=new h(1),sn=new p(cn.buffer);function ln(r,e){return cn[0]=r,sn[fn]=e>>>0,cn[0]}var pn=.6931471803691238,vn=1.9082149292705877e-10,gn=0x40000000000000,yn=.3333333333333333,dn=1048575,hn=2146435072,wn=1048576,bn=1072693248;function mn(e){var n,t,i,a,o,u,f,c,s,l,p,v;return 0===e?ir:r(e)||e<0?NaN:(o=0,(t=O(e))<wn&&(o-=54,t=O(e*=gn)),t>=hn?e+e:(o+=(t>>20)-ar|0,o+=(c=(t&=dn)+614244&1048576|0)>>20|0,f=(e=ln(e,t|c^bn))-1,(dn&2+t)<3?0===f?0===o?0:o*pn+o*vn:(u=f*f*(.5-yn*f),0===o?f-u:o*pn-(u-o*vn-f)):(c=t-398458|0,s=440401-t|0,a=(p=(v=(l=f/(2+f))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(c|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+u)):o*pn-(n-(l*(n+u)+o*vn)-f)):0===o?f-l*(f-u):o*pn-(l*(f-u)-o*vn-f))))}var An=1.4616321446374059,_n=3.309564688275257e-10,Nn=9.016312093258695e-20,En=.9955816268920898;var Un=10;function Sn(n){var t,i;if(r(n)||0===n)return NaN;if(n<=-1){if((t=(n=1-n)-e(n))>.5&&(t-=1),0===t)return NaN;i=un/function(r){var e,n;return e=O(r),(e&=nn)<=tn?e<on?r:M(r,0,1):e>=an?NaN:(n=rn(r,en),M(en[0],en[1],1-((1&n)<<1)))}(un*t)}else i=0;if(n>=Un)return i+=function(r){var e;return mn(r-=1)+1/(2*r)-(e=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(e)}(n),i;for(;n>2;)i+=1/(n-=1);for(;n<1;)i-=1/n,n+=1;return i+=function(r){var e,n;return e=r-An,e-=_n,e-=Nn,n=function(r){var e,n;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(e=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),n=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(e=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),n=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),e/n)}(r-1),e*En+e*n}(n),i}function In(r){return e(r)===r}function kn(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var xn=-.16666666666666632,Fn=.00833333333332249,jn=-.0001984126982985795,Tn=27557313707070068e-22,On=-2.5050760253406863e-8,Vn=1.58969099521155e-10;function $n(r,e){var n,t,i;return n=Fn+(i=r*r)*(jn+i*Tn)+i*(i*i)*(On+i*Vn),t=i*r,0===e?r+t*(xn+i*n):r-(i*(.5*e-t*n)-e-t*xn)}var Gn=1072243195,Hn=1045430272,Wn=[0,0];var Cn=2.5066282746310007;function Ln(r){return In(r/2)}function Pn(r){return Ln(r>0?r-1:r+1)}var Mn=Math.sqrt;function Rn(r){return 0|r}var Zn=1072693247,Xn=1e300,Yn=1e-300;var qn=1048575,zn=1048576,Bn=1072693248,Dn=536870912,Jn=524288,Kn=20,Qn=9007199254740992,rt=.9617966939259756,et=.9617967009544373,nt=-7.028461650952758e-9,tt=[1,1.5],it=[0,.5849624872207642],at=[0,1.350039202129749e-8];var ot=1.4426950408889634,ut=1.4426950216293335,ft=1.9259629911266175e-8;var ct=.6931471805599453;var st=1048576,lt=1071644672,pt=20,vt=.6931471824645996,gt=-1.904654299957768e-9;var yt=1072693247,dt=1105199104,ht=1139802112,wt=1083179008,bt=1072693248,mt=1083231232,At=3230714880,_t=31,Nt=1e300,Et=1e-300,Ut=8008566259537294e-32,St=[0,0],It=[0,0];function kt(e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d;if(r(e)||r(n))return NaN;if(te.assign(n,St,1,0),u=St[0],0===St[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return Mn(e);if(-.5===n)return 1/Mn(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(cr(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:ue(r)<1==(e===tr)?0:tr}(e,n)}if(te.assign(e,St,1,0),o=St[0],0===St[1]){if(0===o)return function(r,e){return e===ir?tr:e===tr?0:e>0?Pn(e)?r:0:Pn(e)?ae(tr,r):tr}(e,n);if(1===e)return 1;if(-1===e&&Pn(n))return-1;if(cr(e))return e===ir?kt(-0,-n):n<0?0:tr}if(e<0&&!1===In(n))return(e-e)/(e-e);if(a=ue(e),t=o&X|0,i=u&X|0,c=u>>>_t|0,f=(f=o>>>_t|0)&&Pn(n)?-1:1,i>dt){if(i>ht)return function(r,e){return(O(r)&X)<=Zn?e<0?Xn*Xn:Yn*Yn:e>0?Xn*Xn:Yn*Yn}(e,n);if(t<yt)return 1===c?f*Nt*Nt:f*Et*Et;if(t>bt)return 0===c?f*Nt*Nt:f*Et*Et;v=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*ft-a*ot)-((t=H(t=(o=ut*i)+u,0))-o),r[0]=t,r[1]=n,r}(It,a)}else v=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,_,N;return m=0,n<zn&&(m-=53,n=O(e*=Qn)),m+=(n>>Kn)-ar|0,n=(A=n&qn|0)|Bn|0,A<=235662?_=0:A<767610?_=1:(_=0,m+=1,n-=zn),o=H(i=(w=(e=ln(e,n))-(c=tt[_]))*(b=1/(e+c)),0),t=(n>>1|Dn)+Jn,f=ln(0,t+=_<<18),h=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=H(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=H(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=et*l,y=(v=nt*l+(b-(l-w))*rt+at[_])-((g=H(g=p+v+(s=it[_])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(It,a,t);if(g=(p=(n-(s=H(n,0)))*v[0]+n*v[1])+(l=s*v[0]),te.assign(g,St,1,0),y=Rn(St[0]),d=Rn(St[1]),y>=wt){if(0!=(y-wt|d))return f*Nt*Nt;if(p+Ut>g-l)return f*Nt*Nt}else if((y&X)>=mt){if(0!=(y-At|d))return f*Et*Et;if(p<=g-l)return f*Et*Et}return g=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&X|0)>>pt)-ar|0,c=0,s>lt&&(i=ln(0,((c=r+(st>>l+1)>>>0)&~(q>>(l=((c&X)>>pt)-ar|0)))>>>0),c=(c&q|st)>>pt-l>>>0,r<0&&(c=-c),e-=i),r=Rn(r=O(f=1-((f=(a=(i=H(i=n+e,0))*vt)+(o=(n-(i-e))*ct+i*gt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<pt>>>0)>>pt<=0?ge(f,c):ln(f,r)}(y,l,p),f*g}var xt=Math.ceil;function Ft(r){return r<0?xt(r):e(r)}var jt=.6931471803691238,Tt=1.9082149292705877e-10,Ot=1.4426950408889634,Vt=709.782712893384,$t=-745.1332191019411,Gt=1/(1<<28),Ht=-Gt;function Wt(e){var n;return r(e)||e===tr?e:e===ir?0:e>Vt?tr:e<$t?0:e>Ht&&e<Gt?1+e:function(r,e,n){var t,i,a,o;return ge(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(e-(n=Ft(e<0?Ot*e-.5:Ot*e+.5))*jt,n*Tt,n)}var Ct=143.01608;function Lt(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=Wt(r),n=r>Ct?(t=kt(r,.5*r-.25))*(t/n):kt(r,r-.5)/n,Cn*n*e}var Pt=.5772156649015329;function Mt(r,e){return e/((1+Pt*r)*r)}function Rt(n){var t,i,a,o;if(In(n)&&n<0||n===ir||r(n))return NaN;if(0===n)return function(r){return 0===r&&1/r===ir}(n)?ir:tr;if(n>171.61447887182297)return tr;if(n<-170.5674972726612)return 0;if((i=ue(n))>33)return n>=0?Lt(n):(t=0==(1&(a=e(i)))?-1:1,(o=i-a)>.5&&(o=i-(a+=1)),o=i*function(r){var e;if(e=O(r),(e&=X)<=Gn)return e<Hn?r:$n(r,0);if(e>=Y)return NaN;switch(3&rn(r,Wn)){case 0:return $n(Wn[0],Wn[1]);case 1:return kn(Wn[0],Wn[1]);case 2:return-$n(Wn[0],Wn[1]);default:return-kn(Wn[0],Wn[1])}}(un*o),t*un/(ue(o)*Lt(i)));for(o=1;n>=3;)o*=n-=1;for(;n<0;){if(n>-1e-9)return Mt(n,o);o/=n,n+=1}for(;n<2;){if(n<1e-9)return Mt(n,o);o/=n,n+=1}return 2===n?o:o*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(n-=2)}function Zt(r,e){var n;return r<=0||e<=0?NaN:(n=r+mn(e*Rt(r)),n-=(1+r)*Sn(r))}export{Zt as default};
//# sourceMappingURL=mod.js.map
