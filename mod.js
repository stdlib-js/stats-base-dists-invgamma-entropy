// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var n=Math.floor;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;var o,f="function"==typeof Symbol?Symbol.toStringTag:"";o=t&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,o,i,a;if(null==r)return e.call(r);t=r[f],a=f,n=null!=(i=r)&&u.call(i,a);try{r[f]=void 0}catch(n){return e.call(r)}return o=e.call(r),n?r[f]=t:delete r[f],o}:function(r){return e.call(r)};var i=o,a="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var v,l="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===i(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?l:function(){throw new Error("not implemented")};var y=v,p="function"==typeof Float64Array;var b="function"==typeof Float64Array?Float64Array:null;var w,s="function"==typeof Float64Array?Float64Array:void 0;w=function(){var r,n,t;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===i(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?s:function(){throw new Error("not implemented")};var A=w,_="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var d,m="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(_&&t instanceof Uint8Array||"[object Uint8Array]"===i(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h=d,U="function"==typeof Uint16Array;var j="function"==typeof Uint16Array?Uint16Array:null;var g,I="function"==typeof Uint16Array?Uint16Array:void 0;g=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j(n=[1,3.14,-3.14,65536,65537]),t=n,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===i(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S={uint16:g,uint8:h};(O=new S.uint16(1))[0]=4660;var E=52===new S.uint8(O.buffer)[0],F=!0===E?1:0,H=new A(1),T=new y(H.buffer);function G(r){return H[0]=r,T[F]}var P=!0===E?0:1,M=new A(1),L=new y(M.buffer);function V(r,n){return M[0]=r,L[P]=n>>>0,M[0]}function W(r,n,t){var e,u,o,f,i,a,c,v,l;return(u=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(l=.7853981633974483-r)+(v=3061616997868383e-32-n),n=0),f=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(v=(l=r*r)*l),c=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(v),f=n+l*((i=l*r)*(f+c)+n),v=r+(f+=.3333333333333341*i),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(v*v/(v+c)-f))):1===t?v:(V(l=v,0),c=f-(l-r),V(a=o=-1/v,0),a+o*((i=1+a*l)+a*c))}var k,x,Y=!0===E?0:1,q=new A(1),C=new y(q.buffer);!0===E?(k=1,x=0):(k=0,x=1);var z={HIGH:k,LOW:x},B=new A(1),D=new y(B.buffer),J=z.HIGH,K=z.LOW;function Q(r,n){return D[J]=r,D[K]=n,B[0]}var R,X,Z=Number.POSITIVE_INFINITY,$=Number.NEGATIVE_INFINITY;function rr(r){return r===Z||r===$}!0===E?(R=1,X=0):(R=0,X=1);var nr={HIGH:R,LOW:X},tr=new A(1),er=new y(tr.buffer),ur=nr.HIGH,or=nr.LOW;function fr(r,n){return tr[0]=n,r[0]=er[ur],r[1]=er[or],r}function ir(r,n){return 1===arguments.length?fr([0,0],r):fr(r,n)}var ar=[0,0];function cr(r,n){var t,e;return ir(ar,r),t=ar[0],t&=2147483647,e=G(n),Q(t|=e&=2147483648,ar[1])}var vr="function"==typeof Object.defineProperty?Object.defineProperty:null;var lr,yr=Object.defineProperty,pr=Object.prototype,br=pr.toString,wr=pr.__defineGetter__,sr=pr.__defineSetter__,Ar=pr.__lookupGetter__,_r=pr.__lookupSetter__;lr=function(){try{return vr({},"x",{}),!0}catch(r){return!1}}()?yr:function(r,n,t){var e,u,o,f;if("object"!=typeof r||null===r||"[object Array]"===br.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===br.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((u="value"in t)&&(Ar.call(r,n)||_r.call(r,n)?(e=r.__proto__,r.__proto__=pr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),o="get"in t,f="set"in t,u&&(o||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&wr&&wr.call(r,n,t.get),f&&sr&&sr.call(r,n,t.set),r};function Nr(r){return Math.abs(r)}function dr(n,t,e,u){return r(n)||rr(n)?(t[u]=n,t[u+e]=0,t):0!==n&&Nr(n)<22250738585072014e-324?(t[u]=4503599627370496*n,t[u+e]=-52,t):(t[u]=n,t[u+e]=0,t)}lr((function(r){return dr(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:dr});var mr=[0,0],hr=[0,0];function Ur(n,t){var e,u;return 0===t||0===n||r(n)||rr(n)?n:(dr(n,mr,1,0),t+=mr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-1023|0}(n=mr[0]),t<-1074?cr(0,n):t>1023?n<0?$:Z:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,ir(hr,n),e=hr[0],e&=2148532223,u*Q(e|=t+1023<<20,hr[1])))}function jr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Ir=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Or=5.960464477539063e-8,Sr=jr(20),Er=jr(20),Fr=jr(20),Hr=jr(20);function Tr(r,t,e,u,o,f,i,a,c){var v,l,y,p,b,w,s,A,_;for(p=f,_=u[e],A=e,b=0;A>0;b++)l=Or*_|0,Hr[b]=_-16777216*l|0,_=u[A-1]+l,A-=1;if(_=Ur(_,o),_-=8*n(.125*_),_-=s=0|_,y=0,o>0?(s+=b=Hr[e-1]>>24-o,Hr[e-1]-=b<<24-o,y=Hr[e-1]>>23-o):0===o?y=Hr[e-1]>>23:_>=.5&&(y=2),y>0){for(s+=1,v=0,b=0;b<e;b++)A=Hr[b],0===v?0!==A&&(v=1,Hr[b]=16777216-A):Hr[b]=16777215-A;if(o>0)switch(o){case 1:Hr[e-1]&=8388607;break;case 2:Hr[e-1]&=4194303}2===y&&(_=1-_,0!==v&&(_-=Ur(1,o)))}if(0===_){for(A=0,b=e-1;b>=f;b--)A|=Hr[b];if(0===A){for(w=1;0===Hr[f-w];w++);for(b=e+1;b<=e+w;b++){for(c[a+b]=gr[i+b],l=0,A=0;A<=a;A++)l+=r[A]*c[a+(b-A)];u[b]=l}return Tr(r,t,e+=w,u,o,f,i,a,c)}}if(0===_)for(e-=1,o-=24;0===Hr[e];)e-=1,o-=24;else(_=Ur(_,-o))>=16777216?(l=Or*_|0,Hr[e]=_-16777216*l|0,o+=24,Hr[e+=1]=l):Hr[e]=0|_;for(l=Ur(1,o),b=e;b>=0;b--)u[b]=l*Hr[b],l*=Or;for(b=e;b>=0;b--){for(l=0,w=0;w<=p&&w<=e-b;w++)l+=Ir[w]*u[b+w];Fr[e-b]=l}for(l=0,b=e;b>=0;b--)l+=Fr[b];for(t[0]=0===y?l:-l,l=Fr[0]-l,b=1;b<=e;b++)l+=Fr[b];return t[1]=0===y?l:-l,7&s}function Gr(r,n,t,e){var u,o,f,i,a,c,v;for(4,(o=(t-3)/24|0)<0&&(o=0),i=t-24*(o+1),c=o-(f=e-1),v=f+4,a=0;a<=v;a++)Sr[a]=c<0?0:gr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Sr[f+(a-c)];Er[a]=u}return 4,Tr(r,n,4,Er,i,4,o,f,Sr)}var Pr=Math.round;function Mr(r,n,t){var e,u,o,f,i;return o=r-1.5707963267341256*(e=Pr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=o-f,i-(G(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((u=o)-(o=u-(f=6077100506303966e-26*e))-f),t[0]=o-f,i-(G(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((u=o)-(o=u-(f=20222662487111665e-37*e))-f),t[0]=o-f)),t[1]=o-t[0]-f,e}var Lr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,kr=4*Vr,xr=[0,0,0],Yr=[0,0];function qr(r,n){var t,e,u,o,f,i,a;if((u=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Mr(r,u,n):u<=1073928572?r>0?(a=r-Lr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Lr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Lr,n[0]=a-Wr,n[1]=a-n[0]-Wr,2):(a=r+2*Lr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Mr(r,u,n):r>0?(a=r-3*Lr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Lr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Mr(r,u,n):r>0?(a=r-4*Lr,n[0]=a-kr,n[1]=a-n[0]-kr,4):(a=r+4*Lr,n[0]=a+kr,n[1]=a-n[0]+kr,-4);if(u<1094263291)return Mr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return q[0]=r,C[Y]}(r),a=Q(u-((e=(u>>20)-1046)<<20|0),t),f=0;f<2;f++)xr[f]=0|a,a=16777216*(a-xr[f]);for(xr[2]=a,o=3;0===xr[o-1];)o-=1;return i=Gr(xr,Yr,e,o),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-i):(n[0]=Yr[0],n[1]=Yr[1],i)}var Cr=[0,0];var zr=3.141592653589793,Br=!0===E?1:0,Dr=new A(1),Jr=new y(Dr.buffer);function Kr(r,n){return Dr[0]=r,Jr[Br]=n>>>0,Dr[0]}var Qr=.6931471803691238,Rr=1.9082149292705877e-10;function Xr(n){var t,e,u,o,f,i,a,c,v,l,y,p;return 0===n?$:r(n)||n<0?NaN:(f=0,(e=G(n))<1048576&&(f-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(f+=(e>>20)-1023|0,f+=(c=(e&=1048575)+614244&1048576|0)>>20|0,a=(n=Kr(n,e|1072693248^c))-1,(1048575&2+e)<3?0===a?0===f?0:f*Qr+f*Rr:(i=a*a*(.5-.3333333333333333*a),0===f?a-i:f*Qr-(i-f*Rr-a)):(c=e-398458|0,v=440401-e|0,o=(y=(p=(l=a/(2+a))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),u=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=u+o,(c|=v)>0?(t=.5*a*a,0===f?a-(t-l*(t+i)):f*Qr-(t-(l*(t+i)+f*Rr)-a)):0===f?a-l*(a-i):f*Qr-(l*(a-i)-f*Rr-a))))}function Zr(t){var e,u;if(r(t)||0===t)return NaN;if(t<=-1){if((e=(t=1-t)-n(t))>.5&&(e-=1),0===e)return NaN;u=zr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:W(r,0,1):n>=2146435072?NaN:(t=qr(r,Cr),W(Cr[0],Cr[1],1-((1&t)<<1)))}(zr*e)}else u=0;if(t>=10)return u+=function(r){var n;return Xr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(t),u;for(;t>2;)u+=1/(t-=1);for(;t<1;)u-=1/t,t+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(t),u}function $r(r){return n(r)===r}function rn(r,n){var t,e,u,o;return u=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(u=1-(t=.5*o))+(1-u-t+(o*e-r*n))}var nn=-.16666666666666632;function tn(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(nn+u*t):r-(u*(.5*n-e*t)-n-e*nn)}var en=[0,0];function un(r){return $r(r/2)}function on(r){return un(r>0?r-1:r+1)}var fn=Math.sqrt;function an(r){return 0|r}var cn=[1,1.5],vn=[0,.5849624872207642],ln=[0,1.350039202129749e-8];var yn=1e300,pn=1e-300,bn=[0,0],wn=[0,0];function sn(n,t){var e,u,o,f,i,a,c,v,l,y,p,b,w,s;if(r(n)||r(t))return NaN;if(ir(bn,t),i=bn[0],0===bn[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return fn(n);if(-.5===t)return 1/fn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(rr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Nr(r)<1==(n===Z)?0:Z}(n,t)}if(ir(bn,n),f=bn[0],0===bn[1]){if(0===f)return function(r,n){return n===$?Z:n===Z?0:n>0?on(n)?r:0:on(n)?cr(Z,r):Z}(n,t);if(1===n)return 1;if(-1===n&&on(t))return-1;if(rr(n))return n===$?sn(-0,-t):t<0?0:Z}if(n<0&&!1===$r(t))return(n-n)/(n-n);if(o=Nr(n),e=2147483647&f|0,u=2147483647&i|0,c=i>>>31|0,a=(a=f>>>31|0)&&on(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,n){return(2147483647&G(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?a*yn*yn:a*pn*pn;if(e>1072693248)return 0===c?a*yn*yn:a*pn*pn;p=function(r,n){var t,e,u,o,f,i;return t=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(i=u)?.5:.5+i*(.25*i-.3333333333333333))*1.4426950408889634)-((e=V(e=(o=1.4426950216293335*u)+f,0))-o),r[0]=e,r[1]=t,r}(wn,o)}else p=function(r,n,t){var e,u,o,f,i,a,c,v,l,y,p,b,w,s,A,_,N,d,m,h,U;return d=0,t<1048576&&(d-=53,t=G(n*=9007199254740992)),d+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?h=0:m<767610?h=1:(h=0,d+=1,t-=1048576),f=V(u=(_=(n=Kr(n,t))-(c=cn[h]))*(N=1/(n+c)),0),e=524288+(t>>1|536870912),a=Kr(0,e+=h<<18),A=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=V(a=3+(o=f*f)+(A+=(i=N*(_-f*a-f*(n-(a-c))))*(f+u)),0),w=(p=-7.028461650952758e-9*(l=V(l=(_=f*a)+(N=i*a+(A-(a-3-o))*u),0))+.9617966939259756*(N-(l-_))+ln[h])-((b=V(b=(y=.9617967009544373*l)+p+(v=vn[h])+(s=d),0))-s-v-y),r[0]=b,r[1]=w,r}(wn,o,e);if(y=(t-(v=V(t,0)))*p[0]+t*p[1],l=v*p[0],ir(bn,b=y+l),w=an(bn[0]),s=an(bn[1]),w>=1083179008){if(0!=(w-1083179008|s))return a*yn*yn;if(y+8008566259537294e-32>b-l)return a*yn*yn}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|s))return a*pn*pn;if(y<=b-l)return a*pn*pn}return b=function(r,n,t){var e,u,o,f,i,a,c,v,l,y,p;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=o=Kr(0,e)),r=an(r=G(c=1-((c=(f=.6931471824645996*(o=V(o=t+n,0)))+(i=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(u=c-(o=c*c)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=i-(c-f))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Ur(c,v):Kr(c,r)}(w,l,y),a*b}var An=Math.ceil;function _n(r){return r<0?An(r):n(r)}function Nn(n){var t;return r(n)||n===Z?n:n===$?0:n>709.782712893384?Z:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<3.725290298461914e-9?1+n:function(r,n,t){var e,u,o,f;return Ur(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(n-.6931471803691238*(t=_n(n<0?1.4426950408889634*n-.5:1.4426950408889634*n+.5)),1.9082149292705877e-10*t,t)}function dn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Nn(r),2.5066282746310007*(t=r>143.01608?(e=sn(r,.5*r-.25))*(e/t):sn(r,r-.5)/t)*n}function mn(r,n){return n/((1+.5772156649015329*r)*r)}function hn(t){var e,u,o,f;if($r(t)&&t<0||t===$||r(t))return NaN;if(0===t)return function(r){return 0===r&&1/r===$}(t)?$:Z;if(t>171.61447887182297)return Z;if(t<-170.5674972726612)return 0;if((u=Nr(t))>33)return t>=0?dn(t):(e=0==(1&(o=n(u)))?-1:1,(f=u-o)>.5&&(f=u-(o+=1)),f=u*function(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:tn(r,0);if(n>=2146435072)return NaN;switch(3&qr(r,en)){case 0:return tn(en[0],en[1]);case 1:return rn(en[0],en[1]);case 2:return-tn(en[0],en[1]);default:return-rn(en[0],en[1])}}(zr*f),e*zr/(Nr(f)*dn(u)));for(f=1;t>=3;)f*=t-=1;for(;t<0;){if(t>-1e-9)return mn(t,f);f/=t,t+=1}for(;t<2;){if(t<1e-9)return mn(t,f);f/=t,t+=1}return 2===t?f:f*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(t-=2)}function Un(r,n){var t;return r<=0||n<=0?NaN:(t=r+Xr(n*hn(r)),t-=(1+r)*Zr(r))}export{Un as default};
//# sourceMappingURL=mod.js.map
