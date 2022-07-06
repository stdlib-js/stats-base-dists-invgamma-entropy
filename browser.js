// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n,t=Math.floor,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),u=Object.prototype.toString,f=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"",o=e&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,a;if(null==r)return u.call(r);t=r[i],a=i,n=null!=(o=r)&&f.call(o,a);try{r[i]=void 0}catch(n){return u.call(r)}return e=u.call(r),n?r[i]=t:delete r[i],e}:function(r){return u.call(r)},a="function"==typeof Uint32Array,c="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;n=function(){var r,n,t;if("function"!=typeof c)return!1;try{n=new c(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(a&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?y:function(){throw new Error("not implemented")};var v,l=n,p="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,n,t;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),t=n,r=(p&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var A,N=v,b="function"==typeof Uint8Array,h="function"==typeof Uint8Array?Uint8Array:null,d="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,256,257]),t=n,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var U,m=A,I="function"==typeof Uint16Array,g="function"==typeof Uint16Array?Uint16Array:null,F="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,n,t;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,65536,65537]),t=n,r=(I&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?F:function(){throw new Error("not implemented")};var S,H={uint16:U,uint8:m};(S=new H.uint16(1))[0]=4660;var O=52===new H.uint8(S.buffer)[0],T=!0===O?1:0,j=new N(1),E=new l(j.buffer);function G(r){return j[0]=r,E[T]}var M=!0===O?0:1,L=new N(1),W=new l(L.buffer);function x(r,n){return L[0]=r,W[M]=n>>>0,L[0]}function P(r,n,t){var e,u,f,i,o,a,c,y,v;return(u=2147483647&(e=G(r))|0)>=1072010280&&(r<0&&(r=-r,n=-n),r=(v=.7853981633974483-r)+(y=3061616997868383e-32-n),n=0),i=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(y=(v=r*r)*v),c=v*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(y),i=n+v*((o=v*r)*(i+c)+n),y=r+(i+=.3333333333333341*o),u>=1072010280?(1-(e>>30&2))*((c=t)-2*(r-(y*y/(y+c)-i))):1===t?y:(x(v=y,0),c=i-(v-r),x(a=f=-1/y,0),a+f*((o=1+a*v)+a*c))}var V,Y,_=!0===O?0:1,k=new N(1),q=new l(k.buffer);!0===O?(V=1,Y=0):(V=0,Y=1);var z={HIGH:V,LOW:Y},B=new N(1),C=new l(B.buffer),D=z.HIGH,J=z.LOW;function K(r,n){return C[D]=r,C[J]=n,B[0]}var Q,R,X=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY,$=1023;function rr(r){return r===X||r===Z}!0===O?(Q=1,R=0):(Q=0,R=1);var nr={HIGH:Q,LOW:R},tr=new N(1),er=new l(tr.buffer),ur=nr.HIGH,fr=nr.LOW;function ir(r,n){return tr[0]=n,r[0]=er[ur],r[1]=er[fr],r}function or(r,n){return 1===arguments.length?ir([0,0],r):ir(r,n)}var ar=[0,0];function cr(r,n){var t,e;return or(ar,r),t=ar[0],t&=2147483647,e=G(n),K(t|=e&=2147483648,ar[1])}function yr(r){return Math.abs(r)}function vr(n,t){return r(t)||rr(t)?(n[0]=t,n[1]=0,n):0!==t&&yr(t)<22250738585072014e-324?(n[0]=4503599627370496*t,n[1]=-52,n):(n[0]=t,n[1]=0,n)}var lr=[0,0],pr=[0,0];function sr(n,t){var e,u;return 0===t||0===n||r(n)||rr(n)?n:(function(r,n){1===arguments.length?vr([0,0],r):vr(r,n)}(lr,n),t+=lr[1],t+=function(r){var n=G(r);return(n=(2146435072&n)>>>20)-$|0}(n=lr[0]),t<-1074?cr(0,n):t>1023?n<0?Z:X:(t<=-1023?(t+=52,u=2220446049250313e-31):u=1,or(pr,n),e=pr[0],e&=2148532223,u*K(e|=t+$<<20,pr[1])))}function wr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ar=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Nr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],br=16777216,hr=5.960464477539063e-8,dr=wr(20),Ur=wr(20),mr=wr(20),Ir=wr(20);function gr(r,n,e,u,f,i,o,a,c){var y,v,l,p,s,w,A,N,b;for(p=i,b=u[e],N=e,s=0;N>0;s++)v=hr*b|0,Ir[s]=b-br*v|0,b=u[N-1]+v,N-=1;if(b=sr(b,f),b-=8*t(.125*b),b-=A=0|b,l=0,f>0?(A+=s=Ir[e-1]>>24-f,Ir[e-1]-=s<<24-f,l=Ir[e-1]>>23-f):0===f?l=Ir[e-1]>>23:b>=.5&&(l=2),l>0){for(A+=1,y=0,s=0;s<e;s++)N=Ir[s],0===y?0!==N&&(y=1,Ir[s]=16777216-N):Ir[s]=16777215-N;if(f>0)switch(f){case 1:Ir[e-1]&=8388607;break;case 2:Ir[e-1]&=4194303}2===l&&(b=1-b,0!==y&&(b-=sr(1,f)))}if(0===b){for(N=0,s=e-1;s>=i;s--)N|=Ir[s];if(0===N){for(w=1;0===Ir[i-w];w++);for(s=e+1;s<=e+w;s++){for(c[a+s]=Ar[o+s],v=0,N=0;N<=a;N++)v+=r[N]*c[a+(s-N)];u[s]=v}return gr(r,n,e+=w,u,f,i,o,a,c)}}if(0===b)for(e-=1,f-=24;0===Ir[e];)e-=1,f-=24;else(b=sr(b,-f))>=br?(v=hr*b|0,Ir[e]=b-br*v|0,f+=24,Ir[e+=1]=v):Ir[e]=0|b;for(v=sr(1,f),s=e;s>=0;s--)u[s]=v*Ir[s],v*=hr;for(s=e;s>=0;s--){for(v=0,w=0;w<=p&&w<=e-s;w++)v+=Nr[w]*u[s+w];mr[e-s]=v}for(v=0,s=e;s>=0;s--)v+=mr[s];for(n[0]=0===l?v:-v,v=mr[0]-v,s=1;s<=e;s++)v+=mr[s];return n[1]=0===l?v:-v,7&A}function Fr(r,n,t,e){var u,f,i,o,a,c,y;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),y=i+4,a=0;a<=y;a++)dr[a]=c<0?0:Ar[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*dr[i+(a-c)];Ur[a]=u}return gr(r,n,4,Ur,o,4,f,i,dr)}var Sr=Math.round;function Hr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Sr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(G(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(G(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Or=1.5707963267341256,Tr=6077100506506192e-26,jr=2*Tr,Er=3*Tr,Gr=4*Tr,Mr=[0,0,0],Lr=[0,0];function Wr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&G(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Hr(r,u,n):u<=1073928572?r>0?(a=r-Or,n[0]=a-Tr,n[1]=a-n[0]-Tr,1):(a=r+Or,n[0]=a+Tr,n[1]=a-n[0]+Tr,-1):r>0?(a=r-2*Or,n[0]=a-jr,n[1]=a-n[0]-jr,2):(a=r+2*Or,n[0]=a+jr,n[1]=a-n[0]+jr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Hr(r,u,n):r>0?(a=r-3*Or,n[0]=a-Er,n[1]=a-n[0]-Er,3):(a=r+3*Or,n[0]=a+Er,n[1]=a-n[0]+Er,-3):1075388923===u?Hr(r,u,n):r>0?(a=r-4*Or,n[0]=a-Gr,n[1]=a-n[0]-Gr,4):(a=r+4*Or,n[0]=a+Gr,n[1]=a-n[0]+Gr,-4);if(u<1094263291)return Hr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return k[0]=r,q[_]}(r),a=K(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Mr[i]=0|a,a=16777216*(a-Mr[i]);for(Mr[2]=a,f=3;0===Mr[f-1];)f-=1;return o=Fr(Mr,Lr,e,f),r<0?(n[0]=-Lr[0],n[1]=-Lr[1],-o):(n[0]=Lr[0],n[1]=Lr[1],o)}var xr=[0,0],Pr=3.141592653589793,Vr=!0===O?1:0,Yr=new N(1),_r=new l(Yr.buffer);function kr(r,n){return Yr[0]=r,_r[Vr]=n>>>0,Yr[0]}var qr=.6931471803691238,zr=1.9082149292705877e-10,Br=1048575;function Cr(n){var t,e,u,f,i,o,a,c,y,v,l,p;return 0===n?Z:r(n)||n<0?NaN:(i=0,(e=G(n))<1048576&&(i-=54,e=G(n*=0x40000000000000)),e>=2146435072?n+n:(i+=(e>>20)-$|0,i+=(c=614244+(e&=Br)&1048576|0)>>20|0,a=(n=kr(n,e|1072693248^c))-1,(Br&2+e)<3?0===a?0===i?0:i*qr+i*zr:(o=a*a*(.5-.3333333333333333*a),0===i?a-o:i*qr-(o-i*zr-a)):(c=e-398458|0,y=440401-e|0,f=(l=(p=(v=a/(2+a))*v)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),u=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=u+f,(c|=y)>0?(t=.5*a*a,0===i?a-(t-v*(t+o)):i*qr-(t-(v*(t+o)+i*zr)-a)):0===i?a-v*(a-o):i*qr-(v*(a-o)-i*zr-a))))}function Dr(n){var e,u;if(r(n)||0===n)return NaN;if(n<=-1){if((e=(n=1-n)-t(n))>.5&&(e-=1),0===e)return NaN;u=Pr/function(r){var n,t;return n=G(r),(n&=2147483647)<=1072243195?n<1044381696?r:P(r,0,1):n>=2146435072?NaN:(t=Wr(r,xr),P(xr[0],xr[1],1-((1&t)<<1)))}(Pr*e)}else u=0;if(n>=10)return u+=function(r){var n;return Cr(r-=1)+1/(2*r)-(n=1/(r*r))*function(r){return 0===r?.08333333333333333:.08333333333333333+r*(r*(.003968253968253968+r*(r*(.007575757575757576+r*(r*(.08333333333333333+-.4432598039215686*r)-.021092796092796094))-.004166666666666667))-.008333333333333333)}(n)}(n),u;for(;n>2;)u+=1/(n-=1);for(;n<1;)u-=1/n,n+=1;return u+=function(r){var n,t;return n=r-1.4616321446374059,n-=3.309564688275257e-10,n-=9.016312093258695e-20,t=function(r){var n,t;return 0===r?.25479851061131553:((r<0?-r:r)<=1?(n=.25479851061131553+r*(r*(r*(r*(r*(0*r-.002071332116774595)-.04525132144873906)-.28919126444774784)-.6503185377089651)-.3255503118680449),t=1+r*(2.076711702373047+r*(1.4606242909763516+r*(.43593529692665967+r*(.054151797245674226+r*(.0021284987017821146+-5.578984132167551e-7*r)))))):(n=0+(r=1/r)*(r*(r*(r*(r*(.25479851061131553*r-.3255503118680449)-.6503185377089651)-.28919126444774784)-.04525132144873906)-.002071332116774595),t=r*(.0021284987017821146+r*(.054151797245674226+r*(.43593529692665967+r*(1.4606242909763516+r*(2.076711702373047+1*r)))))-5.578984132167551e-7),n/t)}(r-1),.9955816268920898*n+n*t}(n),u}function Jr(r){return t(r)===r}function Kr(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var Qr=-.16666666666666632;function Rr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Qr+u*t):r-(u*(.5*n-e*t)-n-e*Qr)}var Xr=[0,0];function Zr(r){return Jr(r/2)}function $r(r){return Zr(r>0?r-1:r+1)}var rn=Math.sqrt;function nn(r){return 0|r}var tn=1048576,en=[1,1.5],un=[0,.5849624872207642],fn=[0,1.350039202129749e-8],on=2147483647,an=1048575,cn=1048576,yn=2147483647,vn=1083179008,ln=1e300,pn=1e-300,sn=[0,0],wn=[0,0];function An(n,t){var e,u,f,i,o,a,c,y,v,l,p,s,w,A;if(r(n)||r(t))return NaN;if(or(sn,t),o=sn[0],0===sn[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return rn(n);if(-.5===t)return 1/rn(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(rr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:yr(r)<1==(n===X)?0:X}(n,t)}if(or(sn,n),i=sn[0],0===sn[1]){if(0===i)return function(r,n){return n===Z?X:n===X?0:n>0?$r(n)?r:0:$r(n)?cr(X,r):X}(n,t);if(1===n)return 1;if(-1===n&&$r(t))return-1;if(rr(n))return n===Z?An(-0,-t):t<0?0:X}if(n<0&&!1===Jr(t))return(n-n)/(n-n);if(f=yr(n),e=i&yn|0,u=o&yn|0,c=o>>>31|0,a=(a=i>>>31|0)&&$r(t)?-1:1,u>1105199104){if(u>1139802112)return function(r,n){return(2147483647&G(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?a*ln*ln:a*pn*pn;if(e>1072693248)return 0===c?a*ln*ln:a*pn*pn;p=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=x(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(wn,f)}else p=function(r,n,t){var e,u,f,i,o,a,c,y,v,l,p,s,w,A,N,b,h,d,U,m,I;return d=0,t<tn&&(d-=53,t=G(n*=9007199254740992)),d+=(t>>20)-$|0,t=1072693248|(U=1048575&t|0),U<=235662?m=0:U<767610?m=1:(m=0,d+=1,t-=tn),i=x(u=(b=(n=kr(n,t))-(c=en[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=kr(0,e+=m<<18),N=(f=u*u)*f*(0===(I=f)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),a=x(a=3+(f=i*i)+(N+=(o=h*(b-i*a-i*(n-(a-c))))*(i+u)),0),w=(p=-7.028461650952758e-9*(v=x(v=(b=i*a)+(h=o*a+(N-(a-3-f))*u),0))+.9617966939259756*(h-(v-b))+fn[m])-((s=x(s=(l=.9617967009544373*v)+p+(y=un[m])+(A=d),0))-A-y-l),r[0]=s,r[1]=w,r}(wn,f,e);if(l=(t-(y=x(t,0)))*p[0]+t*p[1],v=y*p[0],or(sn,s=l+v),w=nn(sn[0]),A=nn(sn[1]),w>=vn){if(0!=(w-vn|A))return a*ln*ln;if(l+8008566259537294e-32>s-v)return a*ln*ln}else if((w&yn)>=1083231232){if(0!=(w-3230714880|A))return a*pn*pn;if(l<=s-v)return a*pn*pn}return s=function(r,n,t){var e,u,f,i,o,a,c,y,v,l;return v=((y=r&on|0)>>20)-$|0,c=0,y>1071644672&&(u=kr(0,((c=r+(cn>>v+1)>>>0)&~(an>>(v=((c&on)>>20)-$|0)))>>>0),c=(c&an|cn)>>20-v>>>0,r<0&&(c=-c),n-=u),r=nn(r=G(a=1-((a=(f=.6931471824645996*(u=x(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(l=u)?.16666666666666602:.16666666666666602+l*(l*(6613756321437934e-20+l*(4.1381367970572385e-8*l-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?sr(a,c):kr(a,r)}(w,v,l),a*s}var Nn=Math.ceil;function bn(r){return r<0?Nn(r):t(r)}var hn=1.4426950408889634,dn=1/(1<<28);function Un(n){var t;return r(n)||n===X?n:n===Z?0:n>709.782712893384?X:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<dn?1+n:function(r,n,t){var e,u,f,i;return sr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(n-.6931471803691238*(t=bn(n<0?hn*n-.5:hn*n+.5)),1.9082149292705877e-10*t,t)}function mn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=Un(r),2.5066282746310007*(t=r>143.01608?(e=An(r,.5*r-.25))*(e/t):An(r,r-.5)/t)*n}function In(r,n){return n/((1+.5772156649015329*r)*r)}function gn(n){var e,u,f,i;if(Jr(n)&&n<0||n===Z||r(n))return NaN;if(0===n)return function(r){return 0===r&&1/r===Z}(n)?Z:X;if(n>171.61447887182297)return X;if(n<-170.5674972726612)return 0;if((u=yr(n))>33)return n>=0?mn(n):(e=0==(1&(f=t(u)))?-1:1,(i=u-f)>.5&&(i=u-(f+=1)),i=u*function(r){var n;if(n=G(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Rr(r,0);if(n>=2146435072)return NaN;switch(3&Wr(r,Xr)){case 0:return Rr(Xr[0],Xr[1]);case 1:return Kr(Xr[0],Xr[1]);case 2:return-Rr(Xr[0],Xr[1]);default:return-Kr(Xr[0],Xr[1])}}(Pr*i),e*Pr/(yr(i)*mn(u)));for(i=1;n>=3;)i*=n-=1;for(;n<0;){if(n>-1e-9)return In(n,i);i/=n,n+=1}for(;n<2;){if(n<1e-9)return In(n,i);i/=n,n+=1}return 2===n?i:i*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(n-=2)}return function(r,n){var t;return r<=0||n<=0?NaN:(t=r+Cr(n*gn(r)),t-=(1+r)*Dr(r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).entropy=n();
//# sourceMappingURL=browser.js.map
