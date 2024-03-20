((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_168",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={WH:function WH(d,e,f){this.d=d
this.e=e
this.a=f},a3h:function a3h(d){this.a=d
this.b=0},aPU:function aPU(){},Q1:function Q1(d){this.b=d},a_H:function a_H(d){this.c=d},
ayH(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.bP2(x)},
bP2:function bP2(d){this.a=d},
dab(d,e){var x=B.a([],y.v)
B.cYD(d,1,40,"typeNumber")
B.dwV(e,A.aS9,"errorCorrectLevel",null)
return new C.bP_(d,e,d*4+17,x)},
dwM(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.dad(w,d)
u=new C.a3h(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.td(0,4,4)
u.td(0,q.b.length,C.dec(4,w))
q.oq(0,u)}if(u.b<=s*8)break}return w},
ddw(d,e,f){var x,w,v,u,t,s,r,q=C.dad(d,e),p=new C.a3h(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
p.td(0,4,4)
p.td(0,w.b.length,C.dec(4,d))
w.oq(0,p)}for(v=q.length,u=0,x=0;x<v;++x)u+=q[x].b
t=u*8
v=p.b
if(v>t)throw B.u(new C.a_H("Input too long. "+v+" > "+t))
if(v+4<=t)p.td(0,0,4)
for(;D.c.ap(p.b,8)!==0;)p.aHh(!1)
for(s=0;!0;s=r){if(p.b>=t)break
r=s+1
p.td(0,(s&1)===0?236:17,8)}return C.dDw(p,q)},
dDw(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.bG(e.length,null,!1,h),f=B.bG(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.dDX(r)
t=o.a.length-1
n=C.ayH(q,t).aG6(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
dec(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.u(B.cv("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.u(B.cv("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.u(B.cv("mode:"+d,x))}else throw B.u(B.cv("type:"+e,x))},
dDX(d){var x,w=y.t,v=C.ayH(B.a([1],w),0)
for(x=0;x<d;++x)v=v.eW(0,C.ayH(B.a([1,C.d0z(x)],w),0))
return v},
bP_:function bP_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=g},
dwN(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=y.Q,w=d.c,v=d.a,u=d.b,t=d.e,s=0,r=null,q=0;q<8;++q){p=new C.ayG(w,v,u,q,B.a([],x))
o=d.d
p.aul(q,o==null?d.d=C.ddw(v,u,t):o,!0)
n=C.dF2(p)
if(q===0||s>n){r=p
s=n}}t=r.d
x=new C.ayG(w,v,u,t,B.a([],x))
x.aul(t,d.gbA4(),!1)
return x},
dF7(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.c.ap(f,3)===0
case 3:return D.c.ap(e+f,3)===0
case 4:return(D.c.W(e,2)+D.c.W(f,3)&1)===0
case 5:x=e*f
return D.c.ap(x,2)+D.c.ap(x,3)===0
case 6:x=e*f
return(D.c.ap(x,2)+D.c.ap(x,3)&1)===0
case 7:return(D.c.ap(e*f,3)+D.c.ap(e+f,2)&1)===0
default:throw B.u(B.cv("bad maskPattern:"+d,null))}},
dF2(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.jg(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.jg(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.jg(w,v)?1:0
if(d.jg(n,v))++m;++v
if(d.jg(w,v))++m
if(d.jg(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.jg(w,v)&&!d.jg(w,v+1)&&d.jg(w,v+2)&&d.jg(w,v+3)&&d.jg(w,v+4)&&!d.jg(w,v+5)&&d.jg(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.jg(w,v)&&!d.jg(w+1,v)&&d.jg(w+2,v)&&d.jg(w+3,v)&&d.jg(w+4,v)&&!d.jg(w+5,v)&&d.jg(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.jg(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
ayG:function ayG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dad(d,e){var x,w,v,u,t,s,r=C.dEv(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.ayI(u,t))}return p},
dEv(d,e){switch(e){case 1:return A.vJ[(d-1)*4]
case 0:return A.vJ[(d-1)*4+1]
case 3:return A.vJ[(d-1)*4+2]
case 2:return A.vJ[(d-1)*4+3]
default:throw B.u(B.cv("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
ayI:function ayI(d,e){this.a=d
this.b=e},
bHZ:function bHZ(d,e){this.a=d
this.b=e},
a3i:function a3i(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.x=g
_.cx=h
_.a=i},
aPV:function aPV(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
cuG:function cuG(d){this.a=d},
abg:function abg(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a3j:function a3j(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.z=_.y=$
_.as=l
_.at=m
_.a=n},
csD:function csD(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
IP:function IP(d,e){this.a=d
this.b=e},
NP:function NP(d,e){this.a=d
this.b=e},
bP1:function bP1(d,e){this.a=d
this.b=e},
bP0:function bP0(d,e){this.a=d
this.b=e},
ayF:function ayF(){},
ayE:function ayE(){},
dwO(d,e,f){var x,w,v,u,t,s=B.aN("qrCode")
try{if(f!==-1){s.sdJ(C.dab(f,e))
v=s.a_()
u=D.c0.dm(d)
v.e.push(new C.Q1(u))
v.d=null}else{v=C.dab(C.dwM(e,B.a([new C.Q1(D.c0.dm(d))],y.v)),e)
v.e.push(new C.Q1(D.c0.dm(d)))
v.d=null
s.sdJ(v)}v=s.a_()
return new C.a3k(A.Fw,v,null)}catch(t){v=B.ar(t)
if(v instanceof C.a_H){x=v
return new C.a3k(A.b6X,null,x)}else if(y.L.b(v)){w=v
return new C.a3k(A.b6Y,null,w)}else throw t}},
a3k:function a3k(d,e,f){this.a=d
this.b=e
this.c=f},
a3l:function a3l(d,e){this.a=d
this.b=e},
dfN(d){if(d<1)throw B.u(B.cv("glog("+d+")",null))
return $.cUS()[d]},
d0z(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.d2h()[d]},
dDx(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.c.r9(1,x)
for(x=8;x<256;++x)w[x]=w[x-4]^w[x-5]^w[x-6]^w[x-8]
return w},
dDy(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.d2h()[x]]=x
return w},
dGs(d){var x,w=d<<10>>>0
for(x=w;C.L1(x)-C.L1(1335)>=0;)x=(x^D.c.mg(1335,C.L1(x)-C.L1(1335)))>>>0
return((w|x)^21522)>>>0},
dGt(d){var x,w=d<<12>>>0
for(x=w;C.L1(x)-C.L1(7973)>=0;)x=(x^D.c.mg(7973,C.L1(x)-C.L1(7973)))>>>0
return(w|x)>>>0},
L1(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},A
B=c[0]
D=c[2]
C=a.updateHolder(c[172],C)
A=c[468]
C.WH.prototype={
n(d){var x=null,w=B.cV(new B.ay(15,15))
return B.iv(w,B.al(x,new B.LY(1,new C.a3i(this.e,D.u,-1,this.d,D.G,x),x),D.j,D.u,x,x,x,x,x,x,new B.x(10,10,10,10),x,x,x),D.b2)}}
C.a3h.prototype={
i(d,e,f){return B.A(B.bg("cannot change"))},
h(d,e){return(D.c.Fx(this.a[D.c.W(e,8)],7-D.c.ap(e,8))&1)===1},
gA(d){return this.b},
sA(d,e){B.A(B.bg("Cannot change"))},
td(d,e,f){var x
for(x=0;x<f;++x)this.aHh((D.c.K1(e,f-x-1)&1)===1)},
aHh(d){var x=this,w=D.c.W(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=v[w]|D.c.tZ(128,D.c.ap(x.b,8));++x.b},
$ibp:1,
$iU:1,
$iZ:1}
C.aPU.prototype={}
C.Q1.prototype={
gA(d){return this.b.length},
oq(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.td(0,x[v],8)},
$idac:1}
C.a_H.prototype={
l(d){return"QrInputTooLongException: "+this.c},
$icW:1}
C.bP2.prototype={
h(d,e){return this.a[e]},
gA(d){return this.a.length},
eW(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.A(B.cv("glog("+t+")",null))
s=$.cUS()
t=s[t]
r=o[w]
if(r<1)B.A(B.cv("glog("+r+")",null))
m[v]=(u^C.d0z(t+s[r]))>>>0}return C.ayH(m,0)},
aG6(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.dfN(u[0])-C.dfN(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.A(B.cv("glog("+t+")",null))
w[v]=(u^C.d0z($.cUS()[t]+x))>>>0}return C.ayH(w,0).aG6(d)}}
C.bP_.prototype={
gbA4(){var x=this,w=x.d
return w==null?x.d=C.ddw(x.a,x.b,x.e):w}}
C.ayG.prototype={
bm2(){var x,w,v,u=this.e
D.b.aM(u)
for(x=this.a,w=y.u,v=0;v<x;++v)u.push(B.bG(x,null,!1,w))},
jg(d,e){var x
if(d>=0){x=this.a
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.u(B.cv(""+d+" , "+e,null))
x=this.e[d][e]
x.toString
return x},
aul(d,e,f){var x,w=this
w.bm2()
w.ad6(0,0)
x=w.a-7
w.ad6(x,0)
w.ad6(0,x)
w.bno()
w.bnp()
w.bnq(d,f)
if(w.b>=7)w.bnr(f)
w.bgQ(e,d)},
ad6(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=this.e,w=this.a,v=-1;v<=7;++v){u=d+v
if(u<=-1||w<=u)continue
for(t=0<=v,s=v<=6,r=v!==0,q=v===6,p=2<=v,o=v<=4,n=-1;n<=7;++n){m=e+n
if(m<=-1||w<=m)continue
if(t)if(s)l=n===0||n===6
else l=!1
else l=!1
if(!l){if(0<=n)if(n<=6)l=!r||q
else l=!1
else l=!1
if(!l)l=p&&o&&2<=n&&n<=4
else l=!0}else l=!0
if(l)x[u][m]=!0
else x[u][m]=!1}}},
bno(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.aYG[this.b-1]
for(x=j.length,w=this.e,v=0;v<x;++v)for(u=0;u<x;++u){t=j[v]
s=j[u]
if(w[t][s]!=null)continue
for(r=-2;r<=2;++r)for(q=t+r,p=r!==-2,o=r!==2,n=r===0,m=-2;m<=2;++m){if(p)if(o)if(m!==-2)if(m!==2)l=n&&m===0
else l=!0
else l=!0
else l=!0
else l=!0
k=s+m
if(l)w[q][k]=!0
else w[q][k]=!1}}},
bnp(){var x,w,v,u,t
for(x=this.a-8,w=this.e,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
bnq(d,e){var x,w,v,u,t,s,r=C.dGs((this.c<<3|d)>>>0)
for(x=this.e,w=this.a,v=w-15,u=!e,t=0;t<15;++t){s=u&&(D.c.tZ(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.c.tZ(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
bnr(d){var x,w,v,u,t,s=C.dGt(this.b)
for(x=this.e,w=this.a,v=!d,u=0;u<18;++u){t=v&&(D.c.tZ(s,u)&1)===1
x[D.c.W(u,3)][D.c.ap(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.c.tZ(s,u)&1)===1
x[D.c.ap(u,3)+w-8-3][D.c.W(u,3)]=t}},
bgQ(d,e){var x,w,v,u,t,s,r,q,p,o=this.a,n=o-1
for(x=this.e,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.c.Fx(d[t],u)&1)===1
if(C.dF7(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}}}
C.ayI.prototype={}
C.bHZ.prototype={
apB(d,e){var x=e!=null?e.R():"any"
return d.l(0)+":"+x},
bvi(d,e,f,g){if(f===A.ze)this.a.push(e)
else this.b.i(0,this.apB(f,g),e)},
aAQ(d,e,f){return this.bvi(d,e,f,null)},
a0X(d,e){return d===A.ze?D.b.gah(this.a):this.b.h(0,this.apB(d,e))},
bDU(d){return this.a0X(d,null)}}
C.a3i.prototype={
a0(){return new C.aPV(D.o)},
gop(d){return this.f}}
C.aPV.prototype={
n(d){var x=this,w=x.a
w=x.e=C.dwO(w.c,1,w.f)
x.d=w.a===A.Fw?w.b:null
return new B.ow(new C.cuG(x),null)},
blc(d,e){var x,w,v,u=null,t=this.d
t.toString
x=this.a.cx
w=t.a
v=new C.a3j(w,t.b,!0,d,u,A.acn,A.acm,t,new C.bHZ(B.a([],y.H),B.p(y.N,y.Z)),x,u)
v.z=w
v.bfc()
return new C.abg(e,this.a.e,D.he,B.fy(u,u,u,v,D.T),"qr code",u)},
b8q(d,e,f){var x,w=null,v=this.a
v.toString
x=B.al(w,w,D.j,w,w,w,w,w,w,w,w,w,w,w)
return new C.abg(v.x,v.e,D.he,x,"qr code",w)}}
C.abg.prototype={
n(d){var x=this,w=null,v=x.c
v=B.al(w,new B.a4(x.e,x.f,w),D.j,x.d,w,w,w,v,w,w,w,w,w,v)
return new B.cJ(B.cN(w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),!1,!1,!1,!1,v,w)}}
C.a3j.prototype={
bfc(){var x,w,v,u,t,s,r
this.y=C.dwN(this.x)
x=this.as
w=$.aK()
v=w.aw()
v.sb_(0,D.a4)
x.aAQ(0,v,A.ze)
v=w.aw()
v.sb_(0,D.a4)
x.aAQ(0,v,A.b6U)
for(u=0;u<3;++u){t=A.aYQ[u]
v=w.aw()
v.sb_(0,D.a1)
s=x.b
r=t.R()
s.i(0,A.a5A.l(0)+":"+r,v)
v=w.aw()
v.sb_(0,D.a1)
r=t.R()
s.i(0,A.a5B.l(0)+":"+r,v)
v=w.aw()
v.sb_(0,D.a4)
r=t.R()
s.i(0,A.a5C.l(0)+":"+r,v)}},
aj(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a4.gj5()===0){B.aZr().$1("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a4.gj5()
w=a2.x.c
v=new C.csD(w,x,0)
u=(w-1)*0
t=v.d=D.f.a4Z((x-u)/w*2)/2
s=t*w+u
v.e=s
s=v.f=(x-s)/2
a2.aa6(A.CP,a3,v)
a2.aa6(A.CQ,a3,v)
a2.aa6(A.M7,a3,v)
r=a2.as.bDU(A.ze)
r.sU(0,a2.at)
for(x=w-7,q=t+0,p=0;p<w;++p)for(o=p<7,n=p>=x,m=s+p*q,l=0;l<w;++l){k=l<7
j=k&&o
i=k&&n
h=l>=x&&o
if(j||i||h)continue
k=a2.y
k===$&&B.j()
g=k.jg(l,p)?r:null
if(g==null)continue
f=s+l*q
k=a2.beO(p,l,w)
e=k?0.5:0
k=a2.beP(p,l,w)
d=k?0.5:0
a3.dd(new B.a0(m,f,m+(t+e),f+(t+d)),g)}x=a2.e
if(x!=null){w=x.gcf(x)
t=x.gb0(x)
a0=a2.bmw(a4,new B.an(w,t),null)
w=a0.a
t=(a4.a-w)/2
s=a0.b
q=(a4.b-s)/2
g=$.aK().aw()
g.seU(!0)
g.spf(D.M6)
k=x.gcf(x)
a1=x.gb0(x)
a3.C3(x,D.v.Hw(new B.an(k,a1),new B.a0(0,0,k,a1)),D.v.Hw(a0,new B.a0(t,q,t+w,q+s)),g)}},
beP(d,e,f){var x,w=e+1
if(w>=f)return!1
x=this.y
x===$&&B.j()
return x.jg(w,d)},
beO(d,e,f){var x,w=d+1
if(w>=f)return!1
x=this.y
x===$&&B.j()
return x.jg(e,w)},
aa6(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=f.d
j===$&&B.j()
x=7*j+6*f.c-j
w=j/2
v=f.f
v===$&&B.j()
u=f.e
u===$&&B.j()
t=v+u-(x+w)
if(d===A.CP){v+=w
s=new B.C(v,v)}else{v+=w
s=d===A.CQ?new B.C(v,t):new B.C(t,v)}v=this.as
r=v.a0X(A.a5A,d)
r.sbY(j)
u=this.at
r.sU(0,u)
q=v.a0X(A.a5B,d)
q.sbY(j)
q.sU(0,D.Bl)
p=v.a0X(A.a5C,d)
p.sU(0,u)
v=s.a
u=s.b
o=x-2*j
n=v+j
m=u+j
l=x-j*2-2*w
j=n+w
k=m+w
e.dd(new B.a0(v,u,v+x,u+x),r)
e.dd(new B.a0(n,m,n+o,m+o),q)
e.dd(new B.a0(j,k,j+l,k+l),p)},
bmw(d,e,f){var x=0.25*d.gj5()/e.gaFR()
return new B.an(x*e.a,x*e.b)},
fi(d){var x,w,v=this
if(d instanceof C.a3j){if(v.c===d.c){x=v.z
x===$&&B.j()
w=d.z
w===$&&B.j()
x=x!==w||v.x!==d.x||v.e!=d.e||!v.r.m(0,d.r)||!v.w.m(0,d.w)}else x=!0
return x}return!0},
gop(d){return this.b}}
C.csD.prototype={}
C.IP.prototype={
R(){return"QrCodeElement."+this.b}}
C.NP.prototype={
R(){return"FinderPatternPosition."+this.b}}
C.bP1.prototype={
R(){return"QrEyeShape."+this.b}}
C.bP0.prototype={
R(){return"QrDataModuleShape."+this.b}}
C.ayF.prototype={
gJ(d){return(B.j3(A.b6W)^D.c.gJ(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.ayF){x=D.G.m(0,D.G)
return x}return!1}}
C.ayE.prototype={
gJ(d){return(B.j3(A.b6V)^D.c.gJ(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.ayE){x=D.G.m(0,D.G)
return x}return!1}}
C.a3k.prototype={}
C.a3l.prototype={
R(){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.cuG.prototype={
$2(d,e){var x,w=this.a,v=w.e
v===$&&B.j()
if(v.a!==A.Fw)return w.b8q(d,e,v.c)
x=w.a.x
w=w.blc(null,x)
return w},
$S:455};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.y,[C.WH,C.abg])
w(B.ah,[C.aPU,C.Q1,C.a_H,C.bP2,C.bP_,C.ayG,C.ayI,C.bHZ,C.csD,C.ayF,C.ayE,C.a3k])
v(C.a3h,C.aPU)
v(C.a3i,B.a2)
v(C.aPV,B.aa)
v(C.cuG,B.bI)
v(C.a3j,B.of)
w(B.fk,[C.IP,C.NP,C.bP1,C.bP0,C.a3l])
x(C.aPU,B.b9)})()
B.aS(b.typeUniverse,JSON.parse('{"WH":{"y":[],"k":[]},"a3h":{"b9":["H"],"Z":["H"],"bp":["H"],"U":["H"],"b9.E":"H","U.E":"H"},"Q1":{"dac":[]},"a_H":{"cW":[]},"a3i":{"a2":[],"k":[]},"aPV":{"aa":["a3i"]},"abg":{"y":[],"k":[]},"a3j":{"ba":[]}}'))
var y=(function rtii(){var x=B.t
return{L:x("cW"),S:x("E<Z<D>>"),Q:x("E<Z<H?>>"),H:x("E<t0>"),v:x("E<dac>"),J:x("E<ayI>"),t:x("E<D>"),Z:x("t0"),N:x("o"),T:x("Z<D>?"),u:x("H?")}})();(function constants(){var x=a.makeConstList
A.b6V=new C.bP0(0,"square")
A.acm=new C.ayE()
A.b6W=new C.bP1(0,"square")
A.acn=new C.ayF()
A.CP=new C.NP(0,"topLeft")
A.M7=new C.NP(1,"topRight")
A.CQ=new C.NP(2,"bottomLeft")
A.aS9=B.a(x([1,0,3,2]),y.t)
A.aSe=B.a(x([1,26,19]),y.t)
A.aSd=B.a(x([1,26,16]),y.t)
A.aSc=B.a(x([1,26,13]),y.t)
A.aSf=B.a(x([1,26,9]),y.t)
A.aSj=B.a(x([1,44,34]),y.t)
A.aSi=B.a(x([1,44,28]),y.t)
A.aSh=B.a(x([1,44,22]),y.t)
A.aSg=B.a(x([1,44,16]),y.t)
A.aSl=B.a(x([1,70,55]),y.t)
A.aSk=B.a(x([1,70,44]),y.t)
A.aSu=B.a(x([2,35,17]),y.t)
A.aSt=B.a(x([2,35,13]),y.t)
A.aSa=B.a(x([1,100,80]),y.t)
A.aSw=B.a(x([2,50,32]),y.t)
A.aSv=B.a(x([2,50,24]),y.t)
A.aVa=B.a(x([4,25,9]),y.t)
A.aSb=B.a(x([1,134,108]),y.t)
A.aSx=B.a(x([2,67,43]),y.t)
A.aTK=B.a(x([2,33,15,2,34,16]),y.t)
A.aTV=B.a(x([2,33,11,2,34,12]),y.t)
A.aSy=B.a(x([2,86,68]),y.t)
A.aVd=B.a(x([4,43,27]),y.t)
A.aVc=B.a(x([4,43,19]),y.t)
A.aVb=B.a(x([4,43,15]),y.t)
A.aSz=B.a(x([2,98,78]),y.t)
A.aVe=B.a(x([4,49,31]),y.t)
A.aU5=B.a(x([2,32,14,4,33,15]),y.t)
A.aUg=B.a(x([4,39,13,1,40,14]),y.t)
A.aSr=B.a(x([2,121,97]),y.t)
A.aUr=B.a(x([2,60,38,2,61,39]),y.t)
A.aUC=B.a(x([4,40,18,2,41,19]),y.t)
A.aUN=B.a(x([4,40,14,2,41,15]),y.t)
A.aSs=B.a(x([2,146,116]),y.t)
A.aUY=B.a(x([3,58,36,2,59,37]),y.t)
A.aT0=B.a(x([4,36,16,4,37,17]),y.t)
A.aTb=B.a(x([4,36,12,4,37,13]),y.t)
A.aTm=B.a(x([2,86,68,2,87,69]),y.t)
A.aTx=B.a(x([4,69,43,1,70,44]),y.t)
A.aTE=B.a(x([6,43,19,2,44,20]),y.t)
A.aTF=B.a(x([6,43,15,2,44,16]),y.t)
A.aV8=B.a(x([4,101,81]),y.t)
A.aTG=B.a(x([1,80,50,4,81,51]),y.t)
A.aTH=B.a(x([4,50,22,4,51,23]),y.t)
A.aTI=B.a(x([3,36,12,8,37,13]),y.t)
A.aTJ=B.a(x([2,116,92,2,117,93]),y.t)
A.aTL=B.a(x([6,58,36,2,59,37]),y.t)
A.aTM=B.a(x([4,46,20,6,47,21]),y.t)
A.aTN=B.a(x([7,42,14,4,43,15]),y.t)
A.aV9=B.a(x([4,133,107]),y.t)
A.aTO=B.a(x([8,59,37,1,60,38]),y.t)
A.aTP=B.a(x([8,44,20,4,45,21]),y.t)
A.aTQ=B.a(x([12,33,11,4,34,12]),y.t)
A.aTR=B.a(x([3,145,115,1,146,116]),y.t)
A.aTS=B.a(x([4,64,40,5,65,41]),y.t)
A.aTT=B.a(x([11,36,16,5,37,17]),y.t)
A.aTU=B.a(x([11,36,12,5,37,13]),y.t)
A.aTW=B.a(x([5,109,87,1,110,88]),y.t)
A.aTX=B.a(x([5,65,41,5,66,42]),y.t)
A.aTY=B.a(x([5,54,24,7,55,25]),y.t)
A.aS1=B.a(x([11,36,12]),y.t)
A.aTZ=B.a(x([5,122,98,1,123,99]),y.t)
A.aU_=B.a(x([7,73,45,3,74,46]),y.t)
A.aU0=B.a(x([15,43,19,2,44,20]),y.t)
A.aU1=B.a(x([3,45,15,13,46,16]),y.t)
A.aU2=B.a(x([1,135,107,5,136,108]),y.t)
A.aU3=B.a(x([10,74,46,1,75,47]),y.t)
A.aU4=B.a(x([1,50,22,15,51,23]),y.t)
A.aU6=B.a(x([2,42,14,17,43,15]),y.t)
A.aU7=B.a(x([5,150,120,1,151,121]),y.t)
A.aU8=B.a(x([9,69,43,4,70,44]),y.t)
A.aU9=B.a(x([17,50,22,1,51,23]),y.t)
A.aUa=B.a(x([2,42,14,19,43,15]),y.t)
A.aUb=B.a(x([3,141,113,4,142,114]),y.t)
A.aUc=B.a(x([3,70,44,11,71,45]),y.t)
A.aUd=B.a(x([17,47,21,4,48,22]),y.t)
A.aUe=B.a(x([9,39,13,16,40,14]),y.t)
A.aUf=B.a(x([3,135,107,5,136,108]),y.t)
A.aUh=B.a(x([3,67,41,13,68,42]),y.t)
A.aUi=B.a(x([15,54,24,5,55,25]),y.t)
A.aUj=B.a(x([15,43,15,10,44,16]),y.t)
A.aUk=B.a(x([4,144,116,4,145,117]),y.t)
A.aS5=B.a(x([17,68,42]),y.t)
A.aUl=B.a(x([17,50,22,6,51,23]),y.t)
A.aUm=B.a(x([19,46,16,6,47,17]),y.t)
A.aUn=B.a(x([2,139,111,7,140,112]),y.t)
A.aS6=B.a(x([17,74,46]),y.t)
A.aUo=B.a(x([7,54,24,16,55,25]),y.t)
A.aSC=B.a(x([34,37,13]),y.t)
A.aUp=B.a(x([4,151,121,5,152,122]),y.t)
A.aUq=B.a(x([4,75,47,14,76,48]),y.t)
A.aUs=B.a(x([11,54,24,14,55,25]),y.t)
A.aUt=B.a(x([16,45,15,14,46,16]),y.t)
A.aUu=B.a(x([6,147,117,4,148,118]),y.t)
A.aUv=B.a(x([6,73,45,14,74,46]),y.t)
A.aUw=B.a(x([11,54,24,16,55,25]),y.t)
A.aUx=B.a(x([30,46,16,2,47,17]),y.t)
A.aUy=B.a(x([8,132,106,4,133,107]),y.t)
A.aUz=B.a(x([8,75,47,13,76,48]),y.t)
A.aUA=B.a(x([7,54,24,22,55,25]),y.t)
A.aUB=B.a(x([22,45,15,13,46,16]),y.t)
A.aUD=B.a(x([10,142,114,2,143,115]),y.t)
A.aUE=B.a(x([19,74,46,4,75,47]),y.t)
A.aUF=B.a(x([28,50,22,6,51,23]),y.t)
A.aUG=B.a(x([33,46,16,4,47,17]),y.t)
A.aUH=B.a(x([8,152,122,4,153,123]),y.t)
A.aUI=B.a(x([22,73,45,3,74,46]),y.t)
A.aUJ=B.a(x([8,53,23,26,54,24]),y.t)
A.aUK=B.a(x([12,45,15,28,46,16]),y.t)
A.aUL=B.a(x([3,147,117,10,148,118]),y.t)
A.aUM=B.a(x([3,73,45,23,74,46]),y.t)
A.aUO=B.a(x([4,54,24,31,55,25]),y.t)
A.aUP=B.a(x([11,45,15,31,46,16]),y.t)
A.aUQ=B.a(x([7,146,116,7,147,117]),y.t)
A.aUR=B.a(x([21,73,45,7,74,46]),y.t)
A.aUS=B.a(x([1,53,23,37,54,24]),y.t)
A.aUT=B.a(x([19,45,15,26,46,16]),y.t)
A.aUU=B.a(x([5,145,115,10,146,116]),y.t)
A.aUV=B.a(x([19,75,47,10,76,48]),y.t)
A.aUW=B.a(x([15,54,24,25,55,25]),y.t)
A.aUX=B.a(x([23,45,15,25,46,16]),y.t)
A.aUZ=B.a(x([13,145,115,3,146,116]),y.t)
A.aV_=B.a(x([2,74,46,29,75,47]),y.t)
A.aV0=B.a(x([42,54,24,1,55,25]),y.t)
A.aV1=B.a(x([23,45,15,28,46,16]),y.t)
A.aS4=B.a(x([17,145,115]),y.t)
A.aV2=B.a(x([10,74,46,23,75,47]),y.t)
A.aV3=B.a(x([10,54,24,35,55,25]),y.t)
A.aV4=B.a(x([19,45,15,35,46,16]),y.t)
A.aV5=B.a(x([17,145,115,1,146,116]),y.t)
A.aV6=B.a(x([14,74,46,21,75,47]),y.t)
A.aV7=B.a(x([29,54,24,19,55,25]),y.t)
A.aT1=B.a(x([11,45,15,46,46,16]),y.t)
A.aT2=B.a(x([13,145,115,6,146,116]),y.t)
A.aT3=B.a(x([14,74,46,23,75,47]),y.t)
A.aT4=B.a(x([44,54,24,7,55,25]),y.t)
A.aT5=B.a(x([59,46,16,1,47,17]),y.t)
A.aT6=B.a(x([12,151,121,7,152,122]),y.t)
A.aT7=B.a(x([12,75,47,26,76,48]),y.t)
A.aT8=B.a(x([39,54,24,14,55,25]),y.t)
A.aT9=B.a(x([22,45,15,41,46,16]),y.t)
A.aTa=B.a(x([6,151,121,14,152,122]),y.t)
A.aTc=B.a(x([6,75,47,34,76,48]),y.t)
A.aTd=B.a(x([46,54,24,10,55,25]),y.t)
A.aTe=B.a(x([2,45,15,64,46,16]),y.t)
A.aTf=B.a(x([17,152,122,4,153,123]),y.t)
A.aTg=B.a(x([29,74,46,14,75,47]),y.t)
A.aTh=B.a(x([49,54,24,10,55,25]),y.t)
A.aTi=B.a(x([24,45,15,46,46,16]),y.t)
A.aTj=B.a(x([4,152,122,18,153,123]),y.t)
A.aTk=B.a(x([13,74,46,32,75,47]),y.t)
A.aTl=B.a(x([48,54,24,14,55,25]),y.t)
A.aTn=B.a(x([42,45,15,32,46,16]),y.t)
A.aTo=B.a(x([20,147,117,4,148,118]),y.t)
A.aTp=B.a(x([40,75,47,7,76,48]),y.t)
A.aTq=B.a(x([43,54,24,22,55,25]),y.t)
A.aTr=B.a(x([10,45,15,67,46,16]),y.t)
A.aTs=B.a(x([19,148,118,6,149,119]),y.t)
A.aTt=B.a(x([18,75,47,31,76,48]),y.t)
A.aTu=B.a(x([34,54,24,34,55,25]),y.t)
A.aTv=B.a(x([20,45,15,61,46,16]),y.t)
A.vJ=B.a(x([A.aSe,A.aSd,A.aSc,A.aSf,A.aSj,A.aSi,A.aSh,A.aSg,A.aSl,A.aSk,A.aSu,A.aSt,A.aSa,A.aSw,A.aSv,A.aVa,A.aSb,A.aSx,A.aTK,A.aTV,A.aSy,A.aVd,A.aVc,A.aVb,A.aSz,A.aVe,A.aU5,A.aUg,A.aSr,A.aUr,A.aUC,A.aUN,A.aSs,A.aUY,A.aT0,A.aTb,A.aTm,A.aTx,A.aTE,A.aTF,A.aV8,A.aTG,A.aTH,A.aTI,A.aTJ,A.aTL,A.aTM,A.aTN,A.aV9,A.aTO,A.aTP,A.aTQ,A.aTR,A.aTS,A.aTT,A.aTU,A.aTW,A.aTX,A.aTY,A.aS1,A.aTZ,A.aU_,A.aU0,A.aU1,A.aU2,A.aU3,A.aU4,A.aU6,A.aU7,A.aU8,A.aU9,A.aUa,A.aUb,A.aUc,A.aUd,A.aUe,A.aUf,A.aUh,A.aUi,A.aUj,A.aUk,A.aS5,A.aUl,A.aUm,A.aUn,A.aS6,A.aUo,A.aSC,A.aUp,A.aUq,A.aUs,A.aUt,A.aUu,A.aUv,A.aUw,A.aUx,A.aUy,A.aUz,A.aUA,A.aUB,A.aUD,A.aUE,A.aUF,A.aUG,A.aUH,A.aUI,A.aUJ,A.aUK,A.aUL,A.aUM,A.aUO,A.aUP,A.aUQ,A.aUR,A.aUS,A.aUT,A.aUU,A.aUV,A.aUW,A.aUX,A.aUZ,A.aV_,A.aV0,A.aV1,A.aS4,A.aV2,A.aV3,A.aV4,A.aV5,A.aV6,A.aV7,A.aT1,A.aT2,A.aT3,A.aT4,A.aT5,A.aT6,A.aT7,A.aT8,A.aT9,A.aTa,A.aTc,A.aTd,A.aTe,A.aTf,A.aTg,A.aTh,A.aTi,A.aTj,A.aTk,A.aTl,A.aTn,A.aTo,A.aTp,A.aTq,A.aTr,A.aTs,A.aTt,A.aTu,A.aTv]),y.S)
A.aVw=B.a(x([6,18]),y.t)
A.aVx=B.a(x([6,22]),y.t)
A.aVA=B.a(x([6,26]),y.t)
A.aVG=B.a(x([6,30]),y.t)
A.aVM=B.a(x([6,34]),y.t)
A.aVy=B.a(x([6,22,38]),y.t)
A.aVz=B.a(x([6,24,42]),y.t)
A.aVB=B.a(x([6,26,46]),y.t)
A.aVF=B.a(x([6,28,50]),y.t)
A.aVH=B.a(x([6,30,54]),y.t)
A.aVL=B.a(x([6,32,58]),y.t)
A.aVN=B.a(x([6,34,62]),y.t)
A.aVC=B.a(x([6,26,46,66]),y.t)
A.aVD=B.a(x([6,26,48,70]),y.t)
A.aVE=B.a(x([6,26,50,74]),y.t)
A.aVI=B.a(x([6,30,54,78]),y.t)
A.aVJ=B.a(x([6,30,56,82]),y.t)
A.aVK=B.a(x([6,30,58,86]),y.t)
A.aVO=B.a(x([6,34,62,90]),y.t)
A.aWb=B.a(x([6,28,50,72,94]),y.t)
A.aWc=B.a(x([6,26,50,74,98]),y.t)
A.aWd=B.a(x([6,30,54,78,102]),y.t)
A.aWe=B.a(x([6,28,54,80,106]),y.t)
A.aWf=B.a(x([6,32,58,84,110]),y.t)
A.aWg=B.a(x([6,30,58,86,114]),y.t)
A.aWh=B.a(x([6,34,62,90,118]),y.t)
A.aTw=B.a(x([6,26,50,74,98,122]),y.t)
A.aTy=B.a(x([6,30,54,78,102,126]),y.t)
A.aTz=B.a(x([6,26,52,78,104,130]),y.t)
A.aTA=B.a(x([6,30,56,82,108,134]),y.t)
A.aTB=B.a(x([6,34,60,86,112,138]),y.t)
A.aTC=B.a(x([6,30,58,86,114,142]),y.t)
A.aTD=B.a(x([6,34,62,90,118,146]),y.t)
A.aWP=B.a(x([6,30,54,78,102,126,150]),y.t)
A.aWQ=B.a(x([6,24,50,76,102,128,154]),y.t)
A.aWR=B.a(x([6,28,54,80,106,132,158]),y.t)
A.aWS=B.a(x([6,32,58,84,110,136,162]),y.t)
A.aWT=B.a(x([6,26,54,82,110,138,166]),y.t)
A.aWU=B.a(x([6,30,58,86,114,142,170]),y.t)
A.aYG=B.a(x([D.kF,A.aVw,A.aVx,A.aVA,A.aVG,A.aVM,A.aVy,A.aVz,A.aVB,A.aVF,A.aVH,A.aVL,A.aVN,A.aVC,A.aVD,A.aVE,A.aVI,A.aVJ,A.aVK,A.aVO,A.aWb,A.aWc,A.aWd,A.aWe,A.aWf,A.aWg,A.aWh,A.aTw,A.aTy,A.aTz,A.aTA,A.aTB,A.aTC,A.aTD,A.aWP,A.aWQ,A.aWR,A.aWS,A.aWT,A.aWU]),y.S)
A.aYQ=B.a(x([A.CP,A.M7,A.CQ]),B.t("E<NP>"))
A.a5A=new C.IP(0,"finderPatternOuter")
A.a5B=new C.IP(1,"finderPatternInner")
A.a5C=new C.IP(2,"finderPatternDot")
A.ze=new C.IP(3,"codePixel")
A.b6U=new C.IP(4,"codePixelEmpty")
A.Fw=new C.a3l(0,"valid")
A.b6X=new C.a3l(1,"contentTooLong")
A.b6Y=new C.a3l(2,"error")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dUL","cUS",()=>C.dDy())
x($,"dUa","d2h",()=>C.dDx())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_168",e:"endPart",h:b})})($__dart_deferred_initializers__,"2lEe/BrgDr6s69CKVkdH/vPdwkc=");