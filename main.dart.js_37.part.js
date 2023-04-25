self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bNQ(d,e,f,g){return new A.acG(f,d,g,e,null)},
acG:function acG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.a=h},
aTZ:function aTZ(d){this.a=d},
aTY:function aTY(d){this.a=d},
aU_:function aU_(d){this.a=d},
aAL:function aAL(d,e,f,g){var _=this
_.d=d
_.x=e
_.y=f
_.z=g},
aBS:function aBS(d,e){this.a=d
this.b=e},
aBR:function aBR(d,e,f,g){var _=this
_.a=d
_.b=e
_.x=f
_.z=g},
aNv:function aNv(d){this.b=d},
TH:function TH(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.r=f
_.y=g
_.a=h},
Zf:function Zf(d,e,f){var _=this
_.e=_.d=!1
_.x=_.w=_.r=_.f=null
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ay=$
_.ex$=d
_.bf$=e
_.a=null
_.b=f
_.c=null},
brg:function brg(d){this.a=d},
brf:function brf(d,e,f){this.a=d
this.b=e
this.c=f},
bri:function bri(d){this.a=d},
brj:function brj(){},
brh:function brh(){},
ajV:function ajV(d,e,f,g,h){var _=this
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
a0j:function a0j(){},
b8K:function b8K(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=$
_.r=!1},
b8L:function b8L(d,e){this.a=d
this.b=e},
b8M:function b8M(d){this.a=d},
bSs(d,e){var x=Math.atan2(d.b-e.b,e.a-d.a)
return x<0?-x:6.283185307179586-x},
bTo(d,e,f,g){return Math.abs(Math.sqrt(Math.pow(d.a-e.a,2)+Math.pow(d.b-e.b,2))-f)<g},
bSi(d,e,f,g){var x=f*57.29577951308232,w=x>=g&&x<=360?x-g:360-g+x
return w},
cgq(d,e,f,g,h){var x
if(g==null)return f
x=A.bSi(d,!1,g,h)
if(x-d>(360-d)*0.5)return 0
else if(x>d)return d
return x},
ciE(d,e,f,g,h){if(A.bSi(d,!1,h,g)>d)return!1
return!0},
bTP(d,e,f){return(f-e)/100*d+e},
cjs(d,e){if(d>100)return e
else if(d<0)return 0.5
return d*(e/100)},
bSa(d,e){if(d>e)return 100
else if(d<0.5)return 0
return d/(e/100)}},B,C,D
A=a.updateHolder(c[41],A)
B=c[0]
C=c[2]
D=c[129]
A.acG.prototype={
u(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=p||!1?1:0.5,n=$.ct(),m=r.r
if(p)x=r.c.a
else x=0
w=B.t(d).p3.y.cn(24*m)
v=15*m
u=B.t(d).ax.f
u=B.Q(102,u.gj(u)>>>16&255,u.gj(u)>>>8&255,u.gj(u)&255)
t=B.t(d)
s=B.t(d).ax.f
o=B.dk(!1,B.a0(q,new A.TH(x,new A.aAL(r.w,new A.aBS(v,v),new A.aBR(B.Q(51,s.gj(s)>>>16&255,s.gj(s)>>>8&255,s.gj(s)&255),t.ax.f,!0,u),new A.aNv(w)),new A.aTY(r),new A.aTZ(r),q),C.h,q,q,q,q,n*0.132*m,q,q,q,q,q,n*0.132*m),o)
return B.cl(C.W,B.a([o,p?B.E(q,q,q):B.bN(q,B.a0(q,q,C.h,C.E,q,q,q,n*0.132*m,q,q,q,q,q,n*0.132*m),C.m,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.aU_(r),q,q,q,q,q,q,q)],y.p),C.x,C.Q,q)}}
A.aAL.prototype={
gGc(){var x=this.x
x=x==null?null:x.a
return x==null?this.gp5()/4:x},
gp5(){var x=this.x
x=x==null?null:x.b
return x==null?15:x},
ga28(){var x=this.gp5()
return x*1.4},
gazb(){var x=this.y
if(x!=null){x=x.b
x=B.a([x,x],y.O)
return x}return null},
gazc(){return null},
gb66(){var x=this.gazb()
return x==null?D.acw:x}}
A.aBS.prototype={}
A.aBR.prototype={}
A.aNv.prototype={}
A.TH.prototype={
gtO(d){return A.cjs((this.c-0)/1,240)},
Y(){return new A.Zf(null,null,C.l)}}
A.Zf.prototype={
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
if(!u.f.d||!1){v.Vz()
v.We()
return}x=v.ax
if(x==null)x=v.ax=new A.b8K(v,1,0,100)
w=u.c
x.aUI(0,u.gtO(u),w,v.r,v.w,new A.brg(v))},
u(d){var x,w,v=this
if(v.f!=null){x=v.ay
x===$&&B.b()
x=x!==B.fX(v.a.f)}else x=!0
if(x){v.ay=B.fX(v.a.f)
v.Vz()}x=B.F([D.aso,new B.dS(new A.bri(v),new A.brj(),y.e)],y.n,y.s)
w=v.as
v.a.toString
return new B.mM(v.axb(w,new B.a2(150,150)),x,null,!1,null,null)},
n(){var x=this.at
if(x!=null){x=x.r
x===$&&B.b()
x.n()}x=this.ax
if(x!=null)x.gBC().n()
this.aue()},
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
v=t.x=A.cgq(w,!1,s,t.Q,x)
if(v<0.5)v=0.5
u=t.a
t.f=new A.ajV(v,u.f,x,w,null)
t.r=u.gtO(u)
t.w=t.a.c},
Vz(){return this.ab2(!1)},
We(){var x,w,v=this,u=v.a
u.toString
x=v.e
if(!x){x=v.x
x.toString
w=v.z
w===$&&B.b()
u.r.$1(A.bTP(A.bSa(x,w),0,100))}},
axb(d,e){var x
if(d!=null){x=new B.bm(new Float64Array(16))
x.dh()
x.Aj(d*5*3.141592653589793/6)
return B.nY(D.a9K,this.a4k(e),x,!0)}else return this.a4k(e)},
a4k(d){var x=null,w=this.f
return B.fd(B.a0(x,this.awQ(),C.h,x,x,x,x,d.b,x,x,x,x,x,d.a),x,x,w,C.L)},
awQ(){var x,w,v,u=this.a
u.toString
x=this.x
x.toString
w=this.z
w===$&&B.b()
v=u.y.$1(A.bTP(A.bSa(x,w),0,100))
return v},
a9p(d){var x
if(!this.d)return
x=this.f
if((x==null?null:x.r)==null)return
this.a7S(d,!1)},
aLN(d){this.a7S(d,!0)
this.a.toString
this.d=!1},
a7S(d,e){var x,w,v,u=this,t=u.f
if((t==null?null:t.r)==null)return
x=y.x.a(u.c.gP()).j5(d)
w=u.a.f.gp5()>=25?u.a.f.gp5():25
t=u.f
v=t.r
v.toString
t=t.w
t===$&&B.b()
if(A.bTo(x,v,t,w)){t=u.f.r
t.toString
u.Q=A.bSs(t,x)
u.a.toString
u.ab2(!1)
u.We()
u.L(new A.brh())}},
aLL(d){var x,w,v,u,t,s,r,q=this
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
u=A.bSs(u,w)
t=q.x
s=q.a
s.toString
if(!A.ciE(v,!1,t,x,u))return!1
r=s.f.gp5()>=25?q.a.f.gp5():25
x=q.f
v=x.r
v.toString
x=x.w
x===$&&B.b()
if(A.bTo(w,v,x,r)){q.d=!0
q.a.toString
q.a9p(d)}else q.d=!1
return q.d}}
A.ajV.prototype={
a9(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=e.a,n=o/2,m=e.b/2,l=q.c
q.w=Math.min(n,m)-l.gp5()*0.5
q.r=new B.q(n,m)
o=0+o
l.gazc()
n=$.aw()
x=n.aE()
x.spq(C.fZ)
x.sbp(0,C.aa)
x.sdz(l.gGc())
m=l.y
m=m==null?p:m.a
x.sN(0,m==null?D.a2i:m)
q.afE(d,!0,x,e,!1)
q.aZD(d,e)
m=l.y!=null||p
w=m===!0
w
w
w
v=l.gb66()
u=n.aE()
u.sqy(new B.lE(C.dS,C.ee,C.are,v,p,p).XO(0,new B.G(0,0,o,o)))
u.spq(C.fZ)
u.sbp(0,C.aa)
u.sdz(l.gp5())
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
l=l.gp5()
d.hH(new B.q(s+n*r,o+n*m),l/5,t)},
afE(d,e,f,g,h){var x,w=this,v=e?0:w.e-w.b,u=w.r
u.toString
x=w.w
x===$&&B.b()
x=B.p6(u,x)
d.Yj(x,0.017453292519943295*w.d,0.017453292519943295*(w.e+-v),!1,f)},
afD(d,e,f){return this.afE(d,!1,e,f,!1)},
aZD(d,e){var x,w,v,u=this.c,t=Math.max(1,C.e.R(u.ga28()-u.gp5(),10)),s=Math.min(1,0.2),r=Math.max(1,C.e.cD(u.ga28()-u.gp5(),t)),q=s/r,p=$.aw().aE()
p.spq(C.fZ)
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
if(x.Q.$1(d.gdk(d))){x.ap7(d.gdN())
x.aF(0,C.ds)}else x.mj(d.gdN())},
ny(d){if(y.A.b(d))this.as.$1(d.gdk(d))
if(y.E.b(d)){this.at.$1(d.gdk(d))
this.mj(d.gdN())}},
z7(d){}}
A.a0j.prototype={
n(){var x=this,w=x.bf$
if(w!=null)w.H(0,x.gfc())
x.bf$=null
x.aB()},
cm(){this.cY()
this.cS()
this.fd()}}
A.b8K.prototype={
gBC(){var x=null,w=this.f
return w===$?this.f=B.bx(x,x,0,x,1,x,this.a):w},
aUI(d,e,f,g,h,i){var x,w,v,u,t,s=this
s.r=!1
x=h==null?s.c:h
w=(s.d-s.c)/100
x=w!==0?C.e.cD(Math.abs(f-x),w)*15:0
v=C.c.av(s.b*x)
s.gBC().e=B.ax(0,0,0,v,0,0)
u=B.ci(C.cK,s.gBC(),null)
x=g==null?0:g
t=y.t
u.W(0,new A.b8L(s,i))
u.iF(new A.b8M(s))
s.e=new B.aG(u,new B.aV(x,e,t),t.i("aG<aO.T>"))
s.gBC().bt(0)}}
var z=a.updateTypes(["~(q)","L(q)","pz()","~(pz)","~(cx)"])
A.aTZ.prototype={
$1(d){var x=null,w=C.c.l(C.e.ab(d))
return new B.dc(C.o,x,x,B.H(w+"%",x,x,x,x,x,x,x,B.ac(x,x,x,x,x,x,x,x,x,x,x,18*this.a.r,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),C.v,x,x),x)},
$S:835}
A.aTY.prototype={
$1(d){var x=this.a.c
x.sj(0,C.e.ab(d))
x.ad()},
$S:124}
A.aU_.prototype={
$0(){},
$S:0}
A.brg.prototype={
$2(d,e){var x=this.a
x.e=!e
x.L(new A.brf(x,e,d))},
$S:836}
A.brf.prototype={
$0(){if(!this.b){var x=this.a
x.x=this.c
x.Vz()
x.We()}},
$S:0}
A.bri.prototype={
$0(){var x=this.a,w=y.S,v=B.f4(w)
return new A.pz(x.gaLK(),x.gaLP(),x.gaLM(),B.x(w,y.o),v,null,null,B.x(w,y.z))},
$S:z+2}
A.brj.prototype={
$1(d){},
$S:z+3}
A.brh.prototype={
$0(){},
$S:0}
A.b8L.prototype={
$0(){var x,w=this.a,v=w.e
v===$&&B.b()
x=v.a
this.b.$2(v.b.ae(0,x.gj(x)),w.r)},
$S:0}
A.b8M.prototype={
$1(d){var x
if(d===C.O){x=this.a
x.r=!0
x=x.gBC()
x.sj(0,x.a)}},
$S:10};(function aliases(){var x=A.a0j.prototype
x.aue=x.n})();(function installTearOffs(){var x=a._instance_1u
var w
x(w=A.Zf.prototype,"gaLP","a9p",0)
x(w,"gaLM","aLN",0)
x(w,"gaLK","aLL",1)
x(A.pz.prototype,"gwy","ny",4)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.acG,B.af)
v(B.ca,[A.aTZ,A.aTY,A.brj,A.b8M])
v(B.dE,[A.aU_,A.brf,A.bri,A.brh,A.b8L])
v(B.S,[A.aAL,A.aBS,A.aBR,A.aNv,A.b8K])
w(A.TH,B.R)
w(A.a0j,B.T)
w(A.Zf,A.a0j)
w(A.brg,B.dd)
w(A.ajV,B.mo)
w(A.pz,B.GM)
x(A.a0j,B.e4)})()
B.d7(b.typeUniverse,JSON.parse('{"acG":{"af":[],"e":[]},"TH":{"R":[],"e":[]},"pz":{"eo":[],"fg":[]},"Zf":{"T":["TH"]},"ajV":{"aS":[]}}'))
var y=(function rtii(){var x=B.A
return{o:x("Au"),e:x("dS<pz>"),s:x("ql<eo>"),O:x("B<V>"),p:x("B<e>"),z:x("l_"),A:x("tG"),E:x("p0"),x:x("O"),t:x("aV<a1>"),n:x("i2"),S:x("v")}})();(function constants(){var x=a.makeConstList
D.a1N=new B.V(4281096128)
D.a2i=new B.V(4292656891)
D.a9K=new B.Aq(0,0)
D.a1G=new B.V(4280156219)
D.a2s=new B.V(4293656714)
D.a2_=new B.V(4284646874)
D.acw=B.a(x([D.a1G,D.a2s,D.a2_]),y.O)
D.aso=B.bi("pz")})()}
$__dart_deferred_initializers__["DQnkaALqMntCOZcoF8Sc5M6wVfk="] = $__dart_deferred_initializers__.current
