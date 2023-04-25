self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bNI(d,e,f,g){return new A.acE(f,d,g,e,null)},
acE:function acE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aTT:function aTT(d){this.a=d},
aTS:function aTS(d){this.a=d},
aTU:function aTU(d){this.a=d},
aAI:function aAI(d,e,f,g){var _=this
_.d=d
_.x=e
_.y=f
_.z=g},
aBP:function aBP(d,e){this.a=d
this.b=e},
aBO:function aBO(d,e,f,g){var _=this
_.a=d
_.b=e
_.x=f
_.z=g},
aNs:function aNs(d){this.b=d},
TG:function TG(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.r=f
_.y=g
_.a=h},
Ze:function Ze(d,e,f){var _=this
_.e=_.d=!1
_.x=_.w=_.r=_.f=null
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ay=$
_.ev$=d
_.bf$=e
_.a=null
_.b=f
_.c=null},
bra:function bra(d){this.a=d},
br9:function br9(d,e,f){this.a=d
this.b=e
this.c=f},
brc:function brc(d){this.a=d},
brd:function brd(){},
brb:function brb(){},
ajT:function ajT(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.r=null
_.w=$
_.a=h},
pz:function pz(d,e,f,g,h,i,j,k){var _=this
_.Q=d
_.as=e
_.at=f
_.e=g
_.f=h
_.r=null
_.a=i
_.b=null
_.c=j
_.d=k},
a0i:function a0i(){},
b8E:function b8E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=$
_.r=!1},
b8F:function b8F(d,e){this.a=d
this.b=e},
b8G:function b8G(d){this.a=d},
bSk(d,e){var x=Math.atan2(d.b-e.b,e.a-d.a)
return x<0?-x:6.283185307179586-x},
bTg(d,e,f,g){return Math.abs(Math.sqrt(Math.pow(d.a-e.a,2)+Math.pow(d.b-e.b,2))-f)<g},
bSa(d,e,f,g){var x=f*57.29577951308232,w=x>=g&&x<=360?x-g:360-g+x
return w},
cgg(d,e,f,g,h){var x
if(g==null)return f
x=A.bSa(d,!1,g,h)
if(x-d>(360-d)*0.5)return 0
else if(x>d)return d
return x},
ciu(d,e,f,g,h){if(A.bSa(d,!1,h,g)>d)return!1
return!0},
bTH(d,e,f){return(f-e)/100*d+e},
cji(d,e){if(d>100)return e
else if(d<0)return 0.5
return d*(e/100)},
bS2(d,e){if(d>e)return 100
else if(d<0.5)return 0
return d/(e/100)}},B,C,D
A=a.updateHolder(c[41],A)
B=c[0]
C=c[2]
D=c[129]
A.acE.prototype={
u(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=p||!1?1:0.5,n=$.ct(),m=r.r
if(p)x=r.c.a
else x=0
w=B.t(d).p3.y.cn(24*m)
v=15*m
u=B.t(d).ax.f
u=B.Q(102,u.gj(u)>>>16&255,u.gj(u)>>>8&255,u.gj(u)&255)
t=B.t(d)
s=B.t(d).ax.f
o=B.dk(!1,B.a0(q,new A.TG(x,new A.aAI(r.w,new A.aBP(v,v),new A.aBO(B.Q(51,s.gj(s)>>>16&255,s.gj(s)>>>8&255,s.gj(s)&255),t.ax.f,!0,u),new A.aNs(w)),new A.aTS(r),new A.aTT(r),q),C.h,q,q,q,q,n*0.132*m,q,q,q,q,q,n*0.132*m),o)
return B.ck(C.W,B.a([o,p?B.E(q,q,q):B.bN(q,B.a0(q,q,C.h,C.E,q,q,q,n*0.132*m,q,q,q,q,q,n*0.132*m),C.m,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.aTU(r),q,q,q,q,q,q,q)],y.p),C.x,C.Q,q)}}
A.aAI.prototype={
gGc(){var x=this.x
x=x==null?null:x.a
return x==null?this.gp0()/4:x},
gp0(){var x=this.x
x=x==null?null:x.b
return x==null?15:x},
ga28(){var x=this.gp0()
return x*1.4},
gaza(){var x=this.y
if(x!=null){x=x.b
x=B.a([x,x],y.O)
return x}return null},
gazb(){return null},
gb65(){var x=this.gaza()
return x==null?D.acw:x}}
A.aBP.prototype={}
A.aBO.prototype={}
A.aNs.prototype={}
A.TG.prototype={
gtO(d){return A.cji((this.c-0)/1,240)},
Y(){return new A.Ze(null,null,C.l)}}
A.Ze.prototype={
af(){var x,w=this
w.am()
x=w.a
x.toString
w.y=150
w.z=240
w.ay=B.fX(x.f)
if(!w.a.f.d)return
w.a4M(0)},
b0(d){var x=this,w=d.gtO(d),v=x.a
if(w!==v.gtO(v)){w=x.x
w=w==null?null:C.e.aW(w,4)
v=x.a
v=w!==C.e.aW(v.gtO(v),4)
w=v}else w=!1
if(w)x.a4M(0)
x.bi(d)},
a4M(d){var x,w,v=this,u=v.a
if(!u.f.d||!1){v.Vy()
v.Wd()
return}x=v.ax
if(x==null)x=v.ax=new A.b8E(v,1,0,100)
w=u.c
x.aUH(0,u.gtO(u),w,v.r,v.w,new A.bra(v))},
u(d){var x,w,v=this
if(v.f!=null){x=v.ay
x===$&&B.b()
x=x!==B.fX(v.a.f)}else x=!0
if(x){v.ay=B.fX(v.a.f)
v.Vy()}x=B.F([D.asn,new B.dS(new A.brc(v),new A.brd(),y.e)],y.n,y.s)
w=v.as
v.a.toString
return new B.mM(v.axa(w,new B.a2(150,150)),x,null,!1,null,null)},
n(){var x=this.at
if(x!=null){x=x.r
x===$&&B.b()
x.n()}x=this.ax
if(x!=null)x.gBC().n()
this.aud()},
ab2(d){var x,w,v,u,t=this,s=t.x
if(s==null){x=t.a
s=x.gtO(x)}x=t.r
if(x!=null){w=t.a
if(x!==w.gtO(w)){t.Q=null
x=t.a
s=x.gtO(x)}}x=t.y
x===$&&B.b()
w=t.z
w===$&&B.b()
v=t.x=A.cgg(w,!1,s,t.Q,x)
if(v<0.5)v=0.5
u=t.a
t.f=new A.ajT(v,u.f,x,w,null)
t.r=u.gtO(u)
t.w=t.a.c},
Vy(){return this.ab2(!1)},
Wd(){var x,w,v=this,u=v.a
u.toString
x=v.e
if(!x){x=v.x
x.toString
w=v.z
w===$&&B.b()
u.r.$1(A.bTH(A.bS2(x,w),0,100))}},
axa(d,e){var x
if(d!=null){x=new B.bm(new Float64Array(16))
x.dh()
x.Aj(d*5*3.141592653589793/6)
return B.nY(D.a9K,this.a4k(e),x,!0)}else return this.a4k(e)},
a4k(d){var x=null,w=this.f
return B.fd(B.a0(x,this.awP(),C.h,x,x,x,x,d.b,x,x,x,x,x,d.a),x,x,w,C.L)},
awP(){var x,w,v,u=this.a
u.toString
x=this.x
x.toString
w=this.z
w===$&&B.b()
v=u.y.$1(A.bTH(A.bS2(x,w),0,100))
return v},
a9p(d){var x
if(!this.d)return
x=this.f
if((x==null?null:x.r)==null)return
this.a7S(d,!1)},
aLM(d){this.a7S(d,!0)
this.a.toString
this.d=!1},
a7S(d,e){var x,w,v,u=this,t=u.f
if((t==null?null:t.r)==null)return
x=y.x.a(u.c.gP()).j5(d)
w=u.a.f.gp0()>=25?u.a.f.gp0():25
t=u.f
v=t.r
v.toString
t=t.w
t===$&&B.b()
if(A.bTg(x,v,t,w)){t=u.f.r
t.toString
u.Q=A.bSk(t,x)
u.a.toString
u.ab2(!1)
u.Wd()
u.L(new A.brb())}},
aLK(d){var x,w,v,u,t,s,r,q=this
if(q.f!=null){q.a.toString
x=!1}else x=!0
if(x)return!1
w=y.x.a(q.c.gP()).j5(d)
x=q.y
x===$&&B.b()
v=q.z
v===$&&B.b()
u=q.f.r
u.toString
u=A.bSk(u,w)
t=q.x
s=q.a
s.toString
if(!A.ciu(v,!1,t,x,u))return!1
r=s.f.gp0()>=25?q.a.f.gp0():25
x=q.f
v=x.r
v.toString
x=x.w
x===$&&B.b()
if(A.bTg(w,v,x,r)){q.d=!0
q.a.toString
q.a9p(d)}else q.d=!1
return q.d}}
A.ajT.prototype={
a9(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=e.a,n=o/2,m=e.b/2,l=q.c
q.w=Math.min(n,m)-l.gp0()*0.5
q.r=new B.q(n,m)
o=0+o
l.gazb()
n=$.aw()
x=n.aE()
x.spp(C.fZ)
x.sbp(0,C.aa)
x.sdz(l.gGc())
m=l.y
m=m==null?p:m.a
x.sN(0,m==null?D.a2i:m)
q.afE(d,!0,x,e,!1)
q.aZC(d,e)
m=l.y!=null||p
w=m===!0
w
w
w
v=l.gb65()
u=n.aE()
u.sqy(new B.lE(C.dS,C.ed,C.ard,v,p,p).XN(0,new B.G(0,0,o,o)))
u.spp(C.fZ)
u.sbp(0,C.aa)
u.sdz(l.gp0())
q.afD(d,u,e)
t=n.aE()
t.sN(0,C.q)
o=q.r
n=q.w
m=0.017453292519943295*(-1.5707963267948966+q.d+q.b+1.5)
s=o.a
r=Math.cos(m)
o=o.b
m=Math.sin(m)
l=l.gp0()
d.hH(new B.q(s+n*r,o+n*m),l/5,t)},
afE(d,e,f,g,h){var x,w=this,v=e?0:w.e-w.b,u=w.r
u.toString
x=w.w
x===$&&B.b()
x=B.p6(u,x)
d.Yi(x,0.017453292519943295*w.d,0.017453292519943295*(w.e+-v),!1,f)},
afD(d,e,f){return this.afE(d,!1,e,f,!1)},
aZC(d,e){var x,w,v,u=this.c,t=Math.max(1,C.e.R(u.ga28()-u.gp0(),10)),s=Math.min(1,0.2),r=Math.max(1,C.e.cD(u.ga28()-u.gp0(),t)),q=s/r,p=$.aw().aE()
p.spp(C.fZ)
p.sbp(0,C.aa)
for(x=u.y,u=u.x,w=1;w<=r;++w){v=u==null?null:u.b
if(v==null)v=15
p.sdz(v+w*t)
v=x==null?null:x.z
if(v==null)v=D.a1N
v=v.a
p.sN(0,B.Q(C.e.ab(255*(s-q*(w-1))),v>>>16&255,v>>>8&255,v&255))
this.afD(d,p,e)}},
fD(d){return!0}}
A.pz.prototype={
yy(d){var x=this
if(x.Q.$1(d.gdj(d))){x.ap6(d.gdN())
x.aF(0,C.ds)}else x.mj(d.gdN())},
ny(d){if(y.A.b(d))this.as.$1(d.gdj(d))
if(y.E.b(d)){this.at.$1(d.gdj(d))
this.mj(d.gdN())}},
z7(d){}}
A.a0i.prototype={
n(){var x=this,w=x.bf$
if(w!=null)w.H(0,x.gfc())
x.bf$=null
x.aB()},
cm(){this.cY()
this.cS()
this.fd()}}
A.b8E.prototype={
gBC(){var x=null,w=this.f
return w===$?this.f=B.bx(x,x,0,x,1,x,this.a):w},
aUH(d,e,f,g,h,i){var x,w,v,u,t,s=this
s.r=!1
x=h==null?s.c:h
w=(s.d-s.c)/100
x=w!==0?C.e.cD(Math.abs(f-x),w)*15:0
v=C.c.av(s.b*x)
s.gBC().e=B.ax(0,0,0,v,0,0)
u=B.ch(C.cK,s.gBC(),null)
x=g==null?0:g
t=y.t
u.W(0,new A.b8F(s,i))
u.iF(new A.b8G(s))
s.e=new B.aG(u,new B.aV(x,e,t),t.i("aG<aN.T>"))
s.gBC().bt(0)}}
var z=a.updateTypes(["~(q)","L(q)","pz()","~(pz)","~(cx)"])
A.aTT.prototype={
$1(d){var x=null,w=C.c.l(C.e.ab(d))
return new B.dc(C.o,x,x,B.H(w+"%",x,x,x,x,x,x,x,B.ac(x,x,x,x,x,x,x,x,x,x,x,18*this.a.r,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),C.v,x,x),x)},
$S:834}
A.aTS.prototype={
$1(d){var x=this.a.c
x.sj(0,C.e.ab(d))
x.ad()},
$S:124}
A.aTU.prototype={
$0(){},
$S:0}
A.bra.prototype={
$2(d,e){var x=this.a
x.e=!e
x.L(new A.br9(x,e,d))},
$S:835}
A.br9.prototype={
$0(){if(!this.b){var x=this.a
x.x=this.c
x.Vy()
x.Wd()}},
$S:0}
A.brc.prototype={
$0(){var x=this.a,w=y.S,v=B.f4(w)
return new A.pz(x.gaLJ(),x.gaLO(),x.gaLL(),B.x(w,y.o),v,null,null,B.x(w,y.z))},
$S:z+2}
A.brd.prototype={
$1(d){},
$S:z+3}
A.brb.prototype={
$0(){},
$S:0}
A.b8F.prototype={
$0(){var x,w=this.a,v=w.e
v===$&&B.b()
x=v.a
this.b.$2(v.b.ae(0,x.gj(x)),w.r)},
$S:0}
A.b8G.prototype={
$1(d){var x
if(d===C.O){x=this.a
x.r=!0
x=x.gBC()
x.sj(0,x.a)}},
$S:10};(function aliases(){var x=A.a0i.prototype
x.aud=x.n})();(function installTearOffs(){var x=a._instance_1u
var w
x(w=A.Ze.prototype,"gaLO","a9p",0)
x(w,"gaLL","aLM",0)
x(w,"gaLJ","aLK",1)
x(A.pz.prototype,"gwy","ny",4)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.acE,B.af)
v(B.ca,[A.aTT,A.aTS,A.brd,A.b8G])
v(B.dE,[A.aTU,A.br9,A.brc,A.brb,A.b8F])
v(B.S,[A.aAI,A.aBP,A.aBO,A.aNs,A.b8E])
w(A.TG,B.R)
w(A.a0i,B.T)
w(A.Ze,A.a0i)
w(A.bra,B.dd)
w(A.ajT,B.mo)
w(A.pz,B.GL)
x(A.a0i,B.e4)})()
B.d7(b.typeUniverse,JSON.parse('{"acE":{"af":[],"e":[]},"TG":{"R":[],"e":[]},"pz":{"eo":[],"fg":[]},"Ze":{"T":["TG"]},"ajT":{"aS":[]}}'))
var y=(function rtii(){var x=B.A
return{o:x("Au"),e:x("dS<pz>"),s:x("ql<eo>"),O:x("B<V>"),p:x("B<e>"),z:x("l_"),A:x("tG"),E:x("p0"),x:x("O"),t:x("aV<a1>"),n:x("i2"),S:x("v")}})();(function constants(){var x=a.makeConstList
D.a1N=new B.V(4281096128)
D.a2i=new B.V(4292656891)
D.a9K=new B.Aq(0,0)
D.a1G=new B.V(4280156219)
D.a2s=new B.V(4293656714)
D.a2_=new B.V(4284646874)
D.acw=B.a(x([D.a1G,D.a2s,D.a2_]),y.O)
D.asn=B.bi("pz")})()}
$__dart_deferred_initializers__["n6ErAzu19p+K/u582GsORYcjnj4="] = $__dart_deferred_initializers__.current
