self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={bmh:function bmh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},bmi:function bmi(){},Yg:function Yg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},anL:function anL(){},LO:function LO(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.BP$=d
_.eD$=e
_.ak$=f
_.a=null},am2:function am2(d,e,f,g,h,i,j){var _=this
_.dM=d
_.bY=e
_.am=f
_.aX=$
_.bF=!0
_.ae$=g
_.a0$=h
_.cJ$=i
_.id=null
_.d=!1
_.f=_.e=null
_.w=_.r=!1
_.x=null
_.y=!1
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ax=!1
_.ay=$
_.ch=j
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
caK(d,e,f,g,h,i,j,k,l){var x=null,w=e==null&&!0
w=w?C.kt:x
return new A.Tn(g,new B.pG(h,i,!0,!0,!0,x),k,C.z,!1,e,x,w,x,l,x,0,d,i,f,C.aj,x,C.t,j)},
Tn:function Tn(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
_.p3=d
_.p4=e
_.cx=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k
_.w=l
_.x=m
_.y=n
_.z=o
_.Q=p
_.as=q
_.at=r
_.ax=s
_.ay=t
_.ch=u
_.a=v},
anK:function anK(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
A=a.updateHolder(c[95],A)
C=c[2]
B=c[0]
A.bmh.prototype={
av9(d){var x=this.c
return d.B5(this.d,x,x)},
m(d){var x=this
return"SliverGridGeometry("+C.b.c2(B.a(["scrollOffset: "+B.w(x.a),"crossAxisOffset: "+B.w(x.b),"mainAxisExtent: "+B.w(x.c),"crossAxisExtent: "+B.w(x.d)],y.x),", ")+")"}}
A.bmi.prototype={}
A.Yg.prototype={
avH(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.ft(d/x)-1)
return 0},
aOD(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
VG(d){var x=this,w=x.a,v=C.c.a7(d,w)
return new A.bmh(C.c.c5(d,w)*x.b,x.aOD(v*x.c),x.d,x.e)},
amm(d){var x
if(d===0)return 0
x=this.b
return x*(C.c.c5(d-1,this.a)+1)-(x-this.d)}}
A.anL.prototype={}
A.LO.prototype={
m(d){return"crossAxisOffset="+B.w(this.w)+"; "+this.aBZ(0)}}
A.am2.prototype={
fE(d){if(!(d.e instanceof A.LO))d.e=new A.LO(!1,null,null)},
sawm(d){var x=this
if(x.dM===d)return
if(B.Y(d)!==B.Y(x.dM)||d.n4(x.dM))x.V()
x.dM=d},
Bb(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
ct(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.Q.prototype.gab.call(a4)),a7=a4.bY
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.dM.KJ(a6)
t=u.b
s=t>1e-10?u.a*C.e.c5(w,t):0
r=isFinite(v)?u.avH(v):a5
t=a4.a0$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a4.cJ$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.c.el(s-t,0,a4.ae$)
a4.y6(o,r==null?0:C.c.el(p-r,0,a4.ae$))}else a4.y6(0,0)
n=u.VG(s)
if(a4.a0$==null)if(!a4.a1Q(s,n.a)){m=u.amm(a7.gGv())
a4.id=B.lJ(a5,!1,a5,a5,m,0,0,0,m,a5)
a7.ye()
return}l=n.a
k=l+n.c
t=a4.a0$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a5
for(;j>=s;--j){h=u.VG(j)
p=h.c
g=a4.apq(a6.B5(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.a0$
p.toString
p.fI(n.av9(a6))
i=a4.a0$
p=i.e
p.toString
t.a(p)
p.a=l
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.z(a4).i("aj.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.VG(j)
e=h.c
d=a6.B5(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ak$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.apo(d,i)
if(g==null)break}else g.fI(d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
k=Math.max(k,a0+e);++j
i=g}t=a4.cJ$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a7.a3J(a6,s,t,l,k)
a2=a4.lS(a6,Math.min(x,l),k)
a3=a4.vw(a6,l,k)
a4.id=B.lJ(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,0,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.ye()}}
A.Tn.prototype={
alR(d){return new A.anK(this.p3,this.p4,null)}}
A.anK.prototype={
b4(d){var x=new A.am2(this.f,y.v.a(d),B.q(y.e,y.g),0,null,null,B.aW(y.d))
x.b5()
return x},
b8(d,e){e.sawm(this.f)},
a3I(d,e,f,g,h){var x,w
this.aC_(d,e,f,g,h)
x=this.f.KJ(d)
w=this.d.gBJ()
w.toString
w=x.amm(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.X,[A.bmh,A.bmi,A.anL])
w(A.Yg,A.bmi)
w(A.LO,B.j0)
w(A.am2,B.r0)
w(A.Tn,B.Qs)
w(A.anK,B.r9)})()
B.bL(b.typeUniverse,JSON.parse('{"LO":{"j0":[],"we":[],"hc":["P"],"qF":[],"ez":[]},"am2":{"r0":[],"e9":[],"aj":["P","j0"],"Q":[],"an":[],"aV":[],"aj.1":"j0","aj.0":"P"},"Tn":{"I":[],"c":[]},"anK":{"r9":[],"b6":[],"c":[]}}'))
var y={d:B.y("e6"),x:B.y("B<h>"),g:B.y("P"),z:B.y("pH"),t:B.y("LO"),v:B.y("FC"),c:B.y("j0"),e:B.y("u")}}
$__dart_deferred_initializers__["r7+mz6jU1IqSLagJMamEF2PcE2g="] = $__dart_deferred_initializers__.current
