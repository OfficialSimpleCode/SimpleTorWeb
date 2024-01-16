((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_168",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={Ye:function Ye(d,e,f){this.d=d
this.e=e
this.a=f},a4Q:function a4Q(d){this.a=d
this.b=0},aRb:function aRb(){},Rm:function Rm(d){this.b=d},a1h:function a1h(d){this.c=d},
aA0(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.bP5(x)},
bP5:function bP5(d){this.a=d},
d9P(d,e){var x=B.a([],y.v)
B.bPP(d,1,40,"typeNumber")
B.dz9(e,A.aRI,"errorCorrectLevel",null)
return new C.bP2(d,e,d*4+17,x)},
dz0(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.d9R(w,d)
u=new C.a4Q(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.tE(0,4,4)
u.tE(0,q.b.length,C.ddU(4,w))
q.oL(0,u)}if(u.b<=s*8)break}return w},
dda(d,e,f){var x,w,v,u,t,s,r,q=C.d9R(d,e),p=new C.a4Q(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
p.tE(0,4,4)
p.tE(0,w.b.length,C.ddU(4,d))
w.oL(0,p)}for(v=q.length,u=0,x=0;x<v;++x)u+=q[x].b
t=u*8
v=p.b
if(v>t)throw B.t(new C.a1h("Input too long. "+v+" > "+t))
if(v+4<=t)p.tE(0,0,4)
for(;D.c.ab(p.b,8)!==0;)p.aHb(!1)
for(s=0;!0;s=r){if(p.b>=t)break
r=s+1
p.tE(0,(s&1)===0?236:17,8)}return C.dFG(p,q)},
dFG(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.bn(e.length,null,!1,h),f=B.bn(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.dG6(r)
t=o.a.length-1
n=C.aA0(q,t).aG2(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
ddU(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.t(B.bm("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.t(B.bm("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.t(B.bm("mode:"+d,x))}else throw B.t(B.bm("type:"+e,x))},
dG6(d){var x,w=y.t,v=C.aA0(B.a([1],w),0)
for(x=0;x<d;++x)v=v.f2(0,C.aA0(B.a([1,C.d0_(x)],w),0))
return v},
bP2:function bP2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=g},
dz1(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=y.Q,w=d.c,v=d.a,u=d.b,t=d.e,s=0,r=null,q=0;q<8;++q){p=new C.aA_(w,v,u,q,B.a([],x))
o=d.d
p.aup(q,o==null?d.d=C.dda(v,u,t):o,!0)
n=C.dHd(p)
if(q===0||s>n){r=p
s=n}}t=r.d
x=new C.aA_(w,v,u,t,B.a([],x))
x.aup(t,d.gbzQ(),!1)
return x},
dHi(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.c.ab(f,3)===0
case 3:return D.c.ab(e+f,3)===0
case 4:return(D.c.T(e,2)+D.c.T(f,3)&1)===0
case 5:x=e*f
return D.c.ab(x,2)+D.c.ab(x,3)===0
case 6:x=e*f
return(D.c.ab(x,2)+D.c.ab(x,3)&1)===0
case 7:return(D.c.ab(e*f,3)+D.c.ab(e+f,2)&1)===0
default:throw B.t(B.bm("bad maskPattern:"+d,null))}},
dHd(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.js(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.js(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.js(w,v)?1:0
if(d.js(n,v))++m;++v
if(d.js(w,v))++m
if(d.js(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.js(w,v)&&!d.js(w,v+1)&&d.js(w,v+2)&&d.js(w,v+3)&&d.js(w,v+4)&&!d.js(w,v+5)&&d.js(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.js(w,v)&&!d.js(w+1,v)&&d.js(w+2,v)&&d.js(w+3,v)&&d.js(w+4,v)&&!d.js(w+5,v)&&d.js(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.js(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
aA_:function aA_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
d9R(d,e){var x,w,v,u,t,s,r=C.dGF(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.aA1(u,t))}return p},
dGF(d,e){switch(e){case 1:return A.vo[(d-1)*4]
case 0:return A.vo[(d-1)*4+1]
case 3:return A.vo[(d-1)*4+2]
case 2:return A.vo[(d-1)*4+3]
default:throw B.t(B.bm("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
aA1:function aA1(d,e){this.a=d
this.b=e},
bJ3:function bJ3(d,e){this.a=d
this.b=e},
a4R:function a4R(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.x=g
_.cx=h
_.a=i},
aRc:function aRc(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
cuU:function cuU(d){this.a=d},
acO:function acO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4S:function a4S(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
csS:function csS(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
K0:function K0(d,e){this.a=d
this.b=e},
P7:function P7(d,e){this.a=d
this.b=e},
bP4:function bP4(d,e){this.a=d
this.b=e},
bP3:function bP3(d,e){this.a=d
this.b=e},
azZ:function azZ(){},
azY:function azY(){},
dz2(d,e,f){var x,w,v,u,t,s=B.aQ("qrCode")
try{if(f!==-1){s.sdQ(C.d9P(f,e))
v=s.Z()
u=D.bQ.dv(d)
v.e.push(new C.Rm(u))
v.d=null}else{v=C.d9P(C.dz0(e,B.a([new C.Rm(D.bQ.dv(d))],y.v)),e)
v.e.push(new C.Rm(D.bQ.dv(d)))
v.d=null
s.sdQ(v)}v=s.Z()
return new C.a4T(A.Fj,v,null)}catch(t){v=B.av(t)
if(v instanceof C.a1h){x=v
return new C.a4T(A.b6v,null,x)}else if(y.L.b(v)){w=v
return new C.a4T(A.b6w,null,w)}else throw t}},
a4T:function a4T(d,e,f){this.a=d
this.b=e
this.c=f},
a4U:function a4U(d,e){this.a=d
this.b=e},
dfs(d){if(d<1)throw B.t(B.bm("glog("+d+")",null))
return $.cU7()[d]},
d0_(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.d1X()[d]},
dFH(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.c.mO(1,x)
for(x=8;x<256;++x)w[x]=w[x-4]^w[x-5]^w[x-6]^w[x-8]
return w},
dFI(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.d1X()[x]]=x
return w},
dIF(d){var x,w=d<<10>>>0
for(x=w;C.Mh(x)-C.Mh(1335)>=0;)x=(x^D.c.h5(1335,C.Mh(x)-C.Mh(1335)))>>>0
return((w|x)^21522)>>>0},
dIG(d){var x,w=d<<12>>>0
for(x=w;C.Mh(x)-C.Mh(7973)>=0;)x=(x^D.c.h5(7973,C.Mh(x)-C.Mh(7973)))>>>0
return(w|x)>>>0},
Mh(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},A
B=c[0]
D=c[2]
C=a.updateHolder(c[156],C)
A=c[456]
C.Ye.prototype={
n(d){var x=null,w=B.cY(new B.aw(15,15))
return B.ip(w,B.al(x,new B.Nb(1,new C.a4R(this.e,D.u,-1,this.d,D.F,x),x),D.j,D.u,x,x,x,x,x,x,new B.y(10,10,10,10),x,x,x),D.aS)}}
C.a4Q.prototype={
i(d,e,f){return B.z(B.bi("cannot change"))},
h(d,e){return(D.c.oc(this.a[D.c.T(e,8)],7-D.c.ab(e,8))&1)===1},
gA(d){return this.b},
sA(d,e){B.z(B.bi("Cannot change"))},
tE(d,e,f){var x
for(x=0;x<f;++x)this.aHb((D.c.kC(e,f-x-1)&1)===1)},
aHb(d){var x=this,w=D.c.T(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=v[w]|D.c.pa(128,D.c.ab(x.b,8));++x.b},
$ibv:1,
$iU:1,
$iR:1}
C.aRb.prototype={}
C.Rm.prototype={
gA(d){return this.b.length},
oL(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.tE(0,x[v],8)},
$id9Q:1}
C.a1h.prototype={
l(d){return"QrInputTooLongException: "+this.c},
$icQ:1}
C.bP5.prototype={
h(d,e){return this.a[e]},
gA(d){return this.a.length},
f2(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.z(B.bm("glog("+t+")",null))
s=$.cU7()
t=s[t]
r=o[w]
if(r<1)B.z(B.bm("glog("+r+")",null))
m[v]=(u^C.d0_(t+s[r]))>>>0}return C.aA0(m,0)},
aG2(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.dfs(u[0])-C.dfs(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.z(B.bm("glog("+t+")",null))
w[v]=(u^C.d0_($.cU7()[t]+x))>>>0}return C.aA0(w,0).aG2(d)}}
C.bP2.prototype={
gbzQ(){var x=this,w=x.d
return w==null?x.d=C.dda(x.a,x.b,x.e):w}}
C.aA_.prototype={
blT(){var x,w,v,u=this.e
D.b.aK(u)
for(x=this.a,w=y.u,v=0;v<x;++v)u.push(B.bn(x,null,!1,w))},
js(d,e){var x
if(d>=0){x=this.a
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.t(B.bm(""+d+" , "+e,null))
x=this.e[d][e]
x.toString
return x},
aup(d,e,f){var x,w=this
w.blT()
w.acT(0,0)
x=w.a-7
w.acT(x,0)
w.acT(0,x)
w.bne()
w.bnf()
w.bng(d,f)
if(w.b>=7)w.bnh(f)
w.bgH(e,d)},
acT(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
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
bne(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.aYf[this.b-1]
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
bnf(){var x,w,v,u,t
for(x=this.a-8,w=this.e,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
bng(d,e){var x,w,v,u,t,s,r=C.dIF((this.c<<3|d)>>>0)
for(x=this.e,w=this.a,v=w-15,u=!e,t=0;t<15;++t){s=u&&(D.c.pa(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.c.pa(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
bnh(d){var x,w,v,u,t,s=C.dIG(this.b)
for(x=this.e,w=this.a,v=!d,u=0;u<18;++u){t=v&&(D.c.pa(s,u)&1)===1
x[D.c.T(u,3)][D.c.ab(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.c.pa(s,u)&1)===1
x[D.c.ab(u,3)+w-8-3][D.c.T(u,3)]=t}},
bgH(d,e){var x,w,v,u,t,s,r,q,p,o=this.a,n=o-1
for(x=this.e,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.c.oc(d[t],u)&1)===1
if(C.dHi(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}}}
C.aA1.prototype={}
C.bJ3.prototype={
apA(d,e){var x=e!=null?e.R():"any"
return d.l(0)+":"+x},
bv6(d,e,f,g){if(f===A.yW)this.a.push(e)
else this.b.i(0,this.apA(f,g),e)},
aAR(d,e,f){return this.bv6(d,e,f,null)},
a0N(d,e){return d===A.yW?D.b.gaf(this.a):this.b.h(0,this.apA(d,e))},
bDD(d){return this.a0N(d,null)}}
C.a4R.prototype={
a_(){return new C.aRc(D.o)}}
C.aRc.prototype={
n(d){var x=this,w=x.a
w=x.e=C.dz2(w.c,1,w.f)
x.d=w.a===A.Fj?w.b:null
return new B.oI(new C.cuU(x),null)},
bl3(d,e){var x,w,v,u=null,t=this.d
t.toString
x=this.a.cx
w=t.a
v=new C.a4S(w,t.b,!0,d,u,A.ac2,A.ac1,t,new C.bJ3(B.a([],y.H),B.p(y.N,y.Z)),x,u)
v.z=w
v.bf6()
return new C.acO(e,this.a.e,D.hd,B.fq(u,u,u,v,D.V),"qr code",u)},
b8c(d,e,f){var x,w=null,v=this.a
v.toString
x=B.al(w,w,D.j,w,w,w,w,w,w,w,w,w,w,w)
return new C.acO(v.x,v.e,D.hd,x,"qr code",w)}}
C.acO.prototype={
n(d){var x=this,w=null,v=x.c
v=B.al(w,new B.a9(x.e,x.f,w),D.j,x.d,w,w,w,v,w,w,w,w,w,v)
return new B.cL(B.cT(w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),!1,!1,!1,!1,v,w)}}
C.a4S.prototype={
bf6(){var x,w,v,u,t,s,r
this.y=C.dz1(this.x)
x=this.as
w=$.aN()
v=w.au()
v.sb1(0,D.a5)
x.aAR(0,v,A.yW)
v=w.au()
v.sb1(0,D.a5)
x.aAR(0,v,A.b6s)
for(u=0;u<3;++u){t=A.aYq[u]
v=w.au()
v.sb1(0,D.a0)
s=x.b
r=t.R()
s.i(0,A.a55.l(0)+":"+r,v)
v=w.au()
v.sb1(0,D.a0)
r=t.R()
s.i(0,A.a56.l(0)+":"+r,v)
v=w.au()
v.sb1(0,D.a5)
r=t.R()
s.i(0,A.a57.l(0)+":"+r,v)}},
ak(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a4.gjg()===0){B.b_x().$1("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a4.gjg()
w=a2.x.c
v=new C.csS(w,x,0)
u=(w-1)*0
t=v.d=D.f.a4I((x-u)/w*2)/2
s=t*w+u
v.e=s
s=v.f=(x-s)/2
a2.a9M(A.CF,a3,v)
a2.a9M(A.CG,a3,v)
a2.a9M(A.LI,a3,v)
r=a2.as.bDD(A.yW)
r.sU(0,a2.at)
for(x=w-7,q=t+0,p=0;p<w;++p)for(o=p<7,n=p>=x,m=s+p*q,l=0;l<w;++l){k=l<7
j=k&&o
i=k&&n
h=l>=x&&o
if(j||i||h)continue
k=a2.y
k===$&&B.b()
g=k.js(l,p)?r:null
if(g==null)continue
f=s+l*q
k=a2.beD(p,l,w)
e=k?0.5:0
k=a2.beE(p,l,w)
d=k?0.5:0
a3.dd(new B.a1(m,f,m+(t+e),f+(t+d)),g)}x=a2.e
if(x!=null){w=x.gci(x)
t=x.gb2(x)
a0=a2.bmn(a4,new B.ao(w,t),null)
w=a0.a
t=(a4.a-w)/2
s=a0.b
q=(a4.b-s)/2
g=$.aN().au()
g.sf1(!0)
g.spB(D.LH)
k=x.gci(x)
a1=x.gb2(x)
a3.Cs(x,D.v.HR(new B.ao(k,a1),new B.a1(0,0,k,a1)),D.v.HR(a0,new B.a1(t,q,t+w,q+s)),g)}},
beE(d,e,f){var x,w=e+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.js(w,d)},
beD(d,e,f){var x,w=d+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.js(e,w)},
a9M(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=f.d
j===$&&B.b()
x=7*j+6*f.c-j
w=j/2
v=f.f
v===$&&B.b()
u=f.e
u===$&&B.b()
t=v+u-(x+w)
if(d===A.CF){v+=w
s=new B.F(v,v)}else{v+=w
s=d===A.CG?new B.F(v,t):new B.F(t,v)}v=this.as
r=v.a0N(A.a55,d)
r.sbY(j)
u=this.at
r.sU(0,u)
q=v.a0N(A.a56,d)
q.sbY(j)
q.sU(0,D.B3)
p=v.a0N(A.a57,d)
p.sU(0,u)
v=s.a
u=s.b
o=x-2*j
n=v+j
m=u+j
l=x-j*2-2*w
j=n+w
k=m+w
e.dd(new B.a1(v,u,v+x,u+x),r)
e.dd(new B.a1(n,m,n+o,m+o),q)
e.dd(new B.a1(j,k,j+l,k+l),p)},
bmn(d,e,f){var x=0.25*d.gjg()/e.gaFM()
return new B.ao(x*e.a,x*e.b)},
fl(d){var x,w,v=this
if(d instanceof C.a4S){if(v.c===d.c){x=v.z
x===$&&B.b()
w=d.z
w===$&&B.b()
x=x!==w||v.x!==d.x||v.e!=d.e||!v.r.m(0,d.r)||!v.w.m(0,d.w)}else x=!0
return x}return!0}}
C.csS.prototype={}
C.K0.prototype={
R(){return"QrCodeElement."+this.b}}
C.P7.prototype={
R(){return"FinderPatternPosition."+this.b}}
C.bP4.prototype={
R(){return"QrEyeShape."+this.b}}
C.bP3.prototype={
R(){return"QrDataModuleShape."+this.b}}
C.azZ.prototype={
gG(d){return(B.je(A.b6u)^D.c.gG(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.azZ){x=D.F.m(0,D.F)
return x}return!1}}
C.azY.prototype={
gG(d){return(B.je(A.b6t)^D.c.gG(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.azY){x=D.F.m(0,D.F)
return x}return!1}}
C.a4T.prototype={}
C.a4U.prototype={
R(){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.cuU.prototype={
$2(d,e){var x,w=this.a,v=w.e
v===$&&B.b()
if(v.a!==A.Fj)return w.b8c(d,e,v.c)
x=w.a.x
w=w.bl3(null,x)
return w},
$S:305};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.A,[C.Ye,C.acO])
w(B.ah,[C.aRb,C.Rm,C.a1h,C.bP5,C.bP2,C.aA_,C.aA1,C.bJ3,C.csS,C.azZ,C.azY,C.a4T])
v(C.a4Q,C.aRb)
v(C.a4R,B.a3)
v(C.aRc,B.ab)
v(C.cuU,B.bJ)
v(C.a4S,B.nN)
w(B.fo,[C.K0,C.P7,C.bP4,C.bP3,C.a4U])
x(C.aRb,B.b4)})()
B.aW(b.typeUniverse,JSON.parse('{"Ye":{"A":[],"l":[]},"a4Q":{"b4":["I"],"R":["I"],"bv":["I"],"U":["I"],"b4.E":"I","U.E":"I"},"Rm":{"d9Q":[]},"a1h":{"cQ":[]},"a4R":{"a3":[],"l":[]},"aRc":{"ab":["a4R"]},"acO":{"A":[],"l":[]},"a4S":{"b9":[]}}'))
var y=(function rtii(){var x=B.v
return{L:x("cQ"),S:x("G<R<C>>"),Q:x("G<R<I?>>"),H:x("G<tc>"),v:x("G<d9Q>"),J:x("G<aA1>"),t:x("G<C>"),Z:x("tc"),N:x("n"),T:x("R<C>?"),u:x("I?")}})();(function constants(){var x=a.makeConstList
A.b6t=new C.bP3(0,"square")
A.ac1=new C.azY()
A.b6u=new C.bP4(0,"square")
A.ac2=new C.azZ()
A.CF=new C.P7(0,"topLeft")
A.LI=new C.P7(1,"topRight")
A.CG=new C.P7(2,"bottomLeft")
A.aRI=B.a(x([1,0,3,2]),y.t)
A.aRN=B.a(x([1,26,19]),y.t)
A.aRM=B.a(x([1,26,16]),y.t)
A.aRL=B.a(x([1,26,13]),y.t)
A.aRO=B.a(x([1,26,9]),y.t)
A.aRS=B.a(x([1,44,34]),y.t)
A.aRR=B.a(x([1,44,28]),y.t)
A.aRQ=B.a(x([1,44,22]),y.t)
A.aRP=B.a(x([1,44,16]),y.t)
A.aRU=B.a(x([1,70,55]),y.t)
A.aRT=B.a(x([1,70,44]),y.t)
A.aS2=B.a(x([2,35,17]),y.t)
A.aS1=B.a(x([2,35,13]),y.t)
A.aRJ=B.a(x([1,100,80]),y.t)
A.aS4=B.a(x([2,50,32]),y.t)
A.aS3=B.a(x([2,50,24]),y.t)
A.aUL=B.a(x([4,25,9]),y.t)
A.aRK=B.a(x([1,134,108]),y.t)
A.aS5=B.a(x([2,67,43]),y.t)
A.aTk=B.a(x([2,33,15,2,34,16]),y.t)
A.aTv=B.a(x([2,33,11,2,34,12]),y.t)
A.aS6=B.a(x([2,86,68]),y.t)
A.aUO=B.a(x([4,43,27]),y.t)
A.aUN=B.a(x([4,43,19]),y.t)
A.aUM=B.a(x([4,43,15]),y.t)
A.aS7=B.a(x([2,98,78]),y.t)
A.aUP=B.a(x([4,49,31]),y.t)
A.aTG=B.a(x([2,32,14,4,33,15]),y.t)
A.aTR=B.a(x([4,39,13,1,40,14]),y.t)
A.aS_=B.a(x([2,121,97]),y.t)
A.aU1=B.a(x([2,60,38,2,61,39]),y.t)
A.aUc=B.a(x([4,40,18,2,41,19]),y.t)
A.aUn=B.a(x([4,40,14,2,41,15]),y.t)
A.aS0=B.a(x([2,146,116]),y.t)
A.aUy=B.a(x([3,58,36,2,59,37]),y.t)
A.aSB=B.a(x([4,36,16,4,37,17]),y.t)
A.aSM=B.a(x([4,36,12,4,37,13]),y.t)
A.aSX=B.a(x([2,86,68,2,87,69]),y.t)
A.aT7=B.a(x([4,69,43,1,70,44]),y.t)
A.aTe=B.a(x([6,43,19,2,44,20]),y.t)
A.aTf=B.a(x([6,43,15,2,44,16]),y.t)
A.aUJ=B.a(x([4,101,81]),y.t)
A.aTg=B.a(x([1,80,50,4,81,51]),y.t)
A.aTh=B.a(x([4,50,22,4,51,23]),y.t)
A.aTi=B.a(x([3,36,12,8,37,13]),y.t)
A.aTj=B.a(x([2,116,92,2,117,93]),y.t)
A.aTl=B.a(x([6,58,36,2,59,37]),y.t)
A.aTm=B.a(x([4,46,20,6,47,21]),y.t)
A.aTn=B.a(x([7,42,14,4,43,15]),y.t)
A.aUK=B.a(x([4,133,107]),y.t)
A.aTo=B.a(x([8,59,37,1,60,38]),y.t)
A.aTp=B.a(x([8,44,20,4,45,21]),y.t)
A.aTq=B.a(x([12,33,11,4,34,12]),y.t)
A.aTr=B.a(x([3,145,115,1,146,116]),y.t)
A.aTs=B.a(x([4,64,40,5,65,41]),y.t)
A.aTt=B.a(x([11,36,16,5,37,17]),y.t)
A.aTu=B.a(x([11,36,12,5,37,13]),y.t)
A.aTw=B.a(x([5,109,87,1,110,88]),y.t)
A.aTx=B.a(x([5,65,41,5,66,42]),y.t)
A.aTy=B.a(x([5,54,24,7,55,25]),y.t)
A.aRA=B.a(x([11,36,12]),y.t)
A.aTz=B.a(x([5,122,98,1,123,99]),y.t)
A.aTA=B.a(x([7,73,45,3,74,46]),y.t)
A.aTB=B.a(x([15,43,19,2,44,20]),y.t)
A.aTC=B.a(x([3,45,15,13,46,16]),y.t)
A.aTD=B.a(x([1,135,107,5,136,108]),y.t)
A.aTE=B.a(x([10,74,46,1,75,47]),y.t)
A.aTF=B.a(x([1,50,22,15,51,23]),y.t)
A.aTH=B.a(x([2,42,14,17,43,15]),y.t)
A.aTI=B.a(x([5,150,120,1,151,121]),y.t)
A.aTJ=B.a(x([9,69,43,4,70,44]),y.t)
A.aTK=B.a(x([17,50,22,1,51,23]),y.t)
A.aTL=B.a(x([2,42,14,19,43,15]),y.t)
A.aTM=B.a(x([3,141,113,4,142,114]),y.t)
A.aTN=B.a(x([3,70,44,11,71,45]),y.t)
A.aTO=B.a(x([17,47,21,4,48,22]),y.t)
A.aTP=B.a(x([9,39,13,16,40,14]),y.t)
A.aTQ=B.a(x([3,135,107,5,136,108]),y.t)
A.aTS=B.a(x([3,67,41,13,68,42]),y.t)
A.aTT=B.a(x([15,54,24,5,55,25]),y.t)
A.aTU=B.a(x([15,43,15,10,44,16]),y.t)
A.aTV=B.a(x([4,144,116,4,145,117]),y.t)
A.aRE=B.a(x([17,68,42]),y.t)
A.aTW=B.a(x([17,50,22,6,51,23]),y.t)
A.aTX=B.a(x([19,46,16,6,47,17]),y.t)
A.aTY=B.a(x([2,139,111,7,140,112]),y.t)
A.aRF=B.a(x([17,74,46]),y.t)
A.aTZ=B.a(x([7,54,24,16,55,25]),y.t)
A.aSa=B.a(x([34,37,13]),y.t)
A.aU_=B.a(x([4,151,121,5,152,122]),y.t)
A.aU0=B.a(x([4,75,47,14,76,48]),y.t)
A.aU2=B.a(x([11,54,24,14,55,25]),y.t)
A.aU3=B.a(x([16,45,15,14,46,16]),y.t)
A.aU4=B.a(x([6,147,117,4,148,118]),y.t)
A.aU5=B.a(x([6,73,45,14,74,46]),y.t)
A.aU6=B.a(x([11,54,24,16,55,25]),y.t)
A.aU7=B.a(x([30,46,16,2,47,17]),y.t)
A.aU8=B.a(x([8,132,106,4,133,107]),y.t)
A.aU9=B.a(x([8,75,47,13,76,48]),y.t)
A.aUa=B.a(x([7,54,24,22,55,25]),y.t)
A.aUb=B.a(x([22,45,15,13,46,16]),y.t)
A.aUd=B.a(x([10,142,114,2,143,115]),y.t)
A.aUe=B.a(x([19,74,46,4,75,47]),y.t)
A.aUf=B.a(x([28,50,22,6,51,23]),y.t)
A.aUg=B.a(x([33,46,16,4,47,17]),y.t)
A.aUh=B.a(x([8,152,122,4,153,123]),y.t)
A.aUi=B.a(x([22,73,45,3,74,46]),y.t)
A.aUj=B.a(x([8,53,23,26,54,24]),y.t)
A.aUk=B.a(x([12,45,15,28,46,16]),y.t)
A.aUl=B.a(x([3,147,117,10,148,118]),y.t)
A.aUm=B.a(x([3,73,45,23,74,46]),y.t)
A.aUo=B.a(x([4,54,24,31,55,25]),y.t)
A.aUp=B.a(x([11,45,15,31,46,16]),y.t)
A.aUq=B.a(x([7,146,116,7,147,117]),y.t)
A.aUr=B.a(x([21,73,45,7,74,46]),y.t)
A.aUs=B.a(x([1,53,23,37,54,24]),y.t)
A.aUt=B.a(x([19,45,15,26,46,16]),y.t)
A.aUu=B.a(x([5,145,115,10,146,116]),y.t)
A.aUv=B.a(x([19,75,47,10,76,48]),y.t)
A.aUw=B.a(x([15,54,24,25,55,25]),y.t)
A.aUx=B.a(x([23,45,15,25,46,16]),y.t)
A.aUz=B.a(x([13,145,115,3,146,116]),y.t)
A.aUA=B.a(x([2,74,46,29,75,47]),y.t)
A.aUB=B.a(x([42,54,24,1,55,25]),y.t)
A.aUC=B.a(x([23,45,15,28,46,16]),y.t)
A.aRD=B.a(x([17,145,115]),y.t)
A.aUD=B.a(x([10,74,46,23,75,47]),y.t)
A.aUE=B.a(x([10,54,24,35,55,25]),y.t)
A.aUF=B.a(x([19,45,15,35,46,16]),y.t)
A.aUG=B.a(x([17,145,115,1,146,116]),y.t)
A.aUH=B.a(x([14,74,46,21,75,47]),y.t)
A.aUI=B.a(x([29,54,24,19,55,25]),y.t)
A.aSC=B.a(x([11,45,15,46,46,16]),y.t)
A.aSD=B.a(x([13,145,115,6,146,116]),y.t)
A.aSE=B.a(x([14,74,46,23,75,47]),y.t)
A.aSF=B.a(x([44,54,24,7,55,25]),y.t)
A.aSG=B.a(x([59,46,16,1,47,17]),y.t)
A.aSH=B.a(x([12,151,121,7,152,122]),y.t)
A.aSI=B.a(x([12,75,47,26,76,48]),y.t)
A.aSJ=B.a(x([39,54,24,14,55,25]),y.t)
A.aSK=B.a(x([22,45,15,41,46,16]),y.t)
A.aSL=B.a(x([6,151,121,14,152,122]),y.t)
A.aSN=B.a(x([6,75,47,34,76,48]),y.t)
A.aSO=B.a(x([46,54,24,10,55,25]),y.t)
A.aSP=B.a(x([2,45,15,64,46,16]),y.t)
A.aSQ=B.a(x([17,152,122,4,153,123]),y.t)
A.aSR=B.a(x([29,74,46,14,75,47]),y.t)
A.aSS=B.a(x([49,54,24,10,55,25]),y.t)
A.aST=B.a(x([24,45,15,46,46,16]),y.t)
A.aSU=B.a(x([4,152,122,18,153,123]),y.t)
A.aSV=B.a(x([13,74,46,32,75,47]),y.t)
A.aSW=B.a(x([48,54,24,14,55,25]),y.t)
A.aSY=B.a(x([42,45,15,32,46,16]),y.t)
A.aSZ=B.a(x([20,147,117,4,148,118]),y.t)
A.aT_=B.a(x([40,75,47,7,76,48]),y.t)
A.aT0=B.a(x([43,54,24,22,55,25]),y.t)
A.aT1=B.a(x([10,45,15,67,46,16]),y.t)
A.aT2=B.a(x([19,148,118,6,149,119]),y.t)
A.aT3=B.a(x([18,75,47,31,76,48]),y.t)
A.aT4=B.a(x([34,54,24,34,55,25]),y.t)
A.aT5=B.a(x([20,45,15,61,46,16]),y.t)
A.vo=B.a(x([A.aRN,A.aRM,A.aRL,A.aRO,A.aRS,A.aRR,A.aRQ,A.aRP,A.aRU,A.aRT,A.aS2,A.aS1,A.aRJ,A.aS4,A.aS3,A.aUL,A.aRK,A.aS5,A.aTk,A.aTv,A.aS6,A.aUO,A.aUN,A.aUM,A.aS7,A.aUP,A.aTG,A.aTR,A.aS_,A.aU1,A.aUc,A.aUn,A.aS0,A.aUy,A.aSB,A.aSM,A.aSX,A.aT7,A.aTe,A.aTf,A.aUJ,A.aTg,A.aTh,A.aTi,A.aTj,A.aTl,A.aTm,A.aTn,A.aUK,A.aTo,A.aTp,A.aTq,A.aTr,A.aTs,A.aTt,A.aTu,A.aTw,A.aTx,A.aTy,A.aRA,A.aTz,A.aTA,A.aTB,A.aTC,A.aTD,A.aTE,A.aTF,A.aTH,A.aTI,A.aTJ,A.aTK,A.aTL,A.aTM,A.aTN,A.aTO,A.aTP,A.aTQ,A.aTS,A.aTT,A.aTU,A.aTV,A.aRE,A.aTW,A.aTX,A.aTY,A.aRF,A.aTZ,A.aSa,A.aU_,A.aU0,A.aU2,A.aU3,A.aU4,A.aU5,A.aU6,A.aU7,A.aU8,A.aU9,A.aUa,A.aUb,A.aUd,A.aUe,A.aUf,A.aUg,A.aUh,A.aUi,A.aUj,A.aUk,A.aUl,A.aUm,A.aUo,A.aUp,A.aUq,A.aUr,A.aUs,A.aUt,A.aUu,A.aUv,A.aUw,A.aUx,A.aUz,A.aUA,A.aUB,A.aUC,A.aRD,A.aUD,A.aUE,A.aUF,A.aUG,A.aUH,A.aUI,A.aSC,A.aSD,A.aSE,A.aSF,A.aSG,A.aSH,A.aSI,A.aSJ,A.aSK,A.aSL,A.aSN,A.aSO,A.aSP,A.aSQ,A.aSR,A.aSS,A.aST,A.aSU,A.aSV,A.aSW,A.aSY,A.aSZ,A.aT_,A.aT0,A.aT1,A.aT2,A.aT3,A.aT4,A.aT5]),y.S)
A.aV6=B.a(x([6,18]),y.t)
A.aV7=B.a(x([6,22]),y.t)
A.aVa=B.a(x([6,26]),y.t)
A.aVg=B.a(x([6,30]),y.t)
A.aVm=B.a(x([6,34]),y.t)
A.aV8=B.a(x([6,22,38]),y.t)
A.aV9=B.a(x([6,24,42]),y.t)
A.aVb=B.a(x([6,26,46]),y.t)
A.aVf=B.a(x([6,28,50]),y.t)
A.aVh=B.a(x([6,30,54]),y.t)
A.aVl=B.a(x([6,32,58]),y.t)
A.aVn=B.a(x([6,34,62]),y.t)
A.aVc=B.a(x([6,26,46,66]),y.t)
A.aVd=B.a(x([6,26,48,70]),y.t)
A.aVe=B.a(x([6,26,50,74]),y.t)
A.aVi=B.a(x([6,30,54,78]),y.t)
A.aVj=B.a(x([6,30,56,82]),y.t)
A.aVk=B.a(x([6,30,58,86]),y.t)
A.aVo=B.a(x([6,34,62,90]),y.t)
A.aVM=B.a(x([6,28,50,72,94]),y.t)
A.aVN=B.a(x([6,26,50,74,98]),y.t)
A.aVO=B.a(x([6,30,54,78,102]),y.t)
A.aVP=B.a(x([6,28,54,80,106]),y.t)
A.aVQ=B.a(x([6,32,58,84,110]),y.t)
A.aVR=B.a(x([6,30,58,86,114]),y.t)
A.aVS=B.a(x([6,34,62,90,118]),y.t)
A.aT6=B.a(x([6,26,50,74,98,122]),y.t)
A.aT8=B.a(x([6,30,54,78,102,126]),y.t)
A.aT9=B.a(x([6,26,52,78,104,130]),y.t)
A.aTa=B.a(x([6,30,56,82,108,134]),y.t)
A.aTb=B.a(x([6,34,60,86,112,138]),y.t)
A.aTc=B.a(x([6,30,58,86,114,142]),y.t)
A.aTd=B.a(x([6,34,62,90,118,146]),y.t)
A.aWp=B.a(x([6,30,54,78,102,126,150]),y.t)
A.aWq=B.a(x([6,24,50,76,102,128,154]),y.t)
A.aWr=B.a(x([6,28,54,80,106,132,158]),y.t)
A.aWs=B.a(x([6,32,58,84,110,136,162]),y.t)
A.aWt=B.a(x([6,26,54,82,110,138,166]),y.t)
A.aWu=B.a(x([6,30,58,86,114,142,170]),y.t)
A.aYf=B.a(x([D.kC,A.aV6,A.aV7,A.aVa,A.aVg,A.aVm,A.aV8,A.aV9,A.aVb,A.aVf,A.aVh,A.aVl,A.aVn,A.aVc,A.aVd,A.aVe,A.aVi,A.aVj,A.aVk,A.aVo,A.aVM,A.aVN,A.aVO,A.aVP,A.aVQ,A.aVR,A.aVS,A.aT6,A.aT8,A.aT9,A.aTa,A.aTb,A.aTc,A.aTd,A.aWp,A.aWq,A.aWr,A.aWs,A.aWt,A.aWu]),y.S)
A.aYq=B.a(x([A.CF,A.LI,A.CG]),B.v("G<P7>"))
A.a55=new C.K0(0,"finderPatternOuter")
A.a56=new C.K0(1,"finderPatternInner")
A.a57=new C.K0(2,"finderPatternDot")
A.yW=new C.K0(3,"codePixel")
A.b6s=new C.K0(4,"codePixelEmpty")
A.Fj=new C.a4U(0,"valid")
A.b6v=new C.a4U(1,"contentTooLong")
A.b6w=new C.a4U(2,"error")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZZ","cU7",()=>C.dFI())
x($,"dZo","d1X",()=>C.dFH())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_168",e:"endPart",h:b})})($__dart_deferred_initializers__,"w7UYLEqtrqT1xnZ6nAnl2ocg3UQ=");