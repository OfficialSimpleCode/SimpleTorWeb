self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={b8F:function b8F(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},b8G:function b8G(){},UD:function UD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ai1:function ai1(){},J4:function J4(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.AA$=d
_.er$=e
_.ag$=f
_.a=null},agw:function agw(d,e,f,g,h,i,j){var _=this
_.dI=d
_.bZ=e
_.ah=f
_.aN=$
_.bx=!0
_.ac$=g
_.Y$=h
_.cH$=i
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
bKe(d,e,f,g,h,i,j,k,l,m){var x=null,w=e==null&&l===C.C
w=w?C.jQ:x
return new A.PV(g,new B.py(h,i,!0,!0,!0,x),k,l,!1,e,x,w,x,m,x,0,d,i,f,C.aN,x,C.w,j)},
PV:function PV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
ai0:function ai0(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
A=a.updateHolder(c[61],A)
C=c[2]
B=c[0]
A.b8F.prototype={
aqE(d){var x=this.c
return d.zU(this.d,x,x)},
m(d){var x=this
return"SliverGridGeometry("+C.b.c1(B.a(["scrollOffset: "+B.u(x.a),"crossAxisOffset: "+B.u(x.b),"mainAxisExtent: "+B.u(x.c),"crossAxisExtent: "+B.u(x.d)],y.x),", ")+")"}}
A.b8G.prototype={}
A.UD.prototype={
ar9(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.fA(d/x)-1)
return 0},
aIK(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
T0(d){var x=this,w=x.a,v=C.c.a5(d,w)
return new A.b8F(C.c.cC(d,w)*x.b,x.aIK(v*x.c),x.d,x.e)},
aiD(d){var x
if(d===0)return 0
x=this.b
return x*(C.c.cC(d-1,this.a)+1)-(x-this.d)}}
A.ai1.prototype={}
A.J4.prototype={
m(d){return"crossAxisOffset="+B.u(this.w)+"; "+this.awq(0)}}
A.agw.prototype={
fG(d){if(!(d.e instanceof A.J4))d.e=new A.J4(!1,null,null)},
sarC(d){var x=this
if(x.dI===d)return
if(B.W(d)!==B.W(x.dI)||d.mF(x.dI))x.U()
x.dI=d},
A_(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
cI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.O.prototype.ga9.call(a4)),a7=a4.bZ
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.dI.IS(a6)
t=u.b
s=t>1e-10?u.a*C.e.cC(w,t):0
r=isFinite(v)?u.ar9(v):a5
t=a4.Y$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a4.cH$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.c.e1(s-t,0,a4.ac$)
a4.x6(o,r==null?0:C.c.e1(p-r,0,a4.ac$))}else a4.x6(0,0)
n=u.T0(s)
if(a4.Y$==null)if(!a4.ZW(s,n.a)){m=u.aiD(a7.gEX())
a4.id=B.mh(a5,!1,a5,a5,m,0,0,0,m,a5)
a7.xh()
return}l=n.a
k=l+n.c
t=a4.Y$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a5
for(;j>=s;--j){h=u.T0(j)
p=h.c
g=a4.als(a6.zU(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.Y$
p.toString
p.fB(n.aqE(a6))
i=a4.Y$
p=i.e
p.toString
t.a(p)
p.a=l
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.y(a4).i("ac.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.T0(j)
e=h.c
d=a6.zU(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ag$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.alq(d,i)
if(g==null)break}else g.fB(d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
k=Math.max(k,a0+e);++j
i=g}t=a4.cH$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a7.a0C(a6,s,t,l,k)
a2=a4.mZ(a6,Math.min(x,l),k)
a3=a4.wY(a6,l,k)
a4.id=B.mh(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,0,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.xh()}}
A.PV.prototype={
ai6(d){return new A.ai0(this.p3,this.p4,null)}}
A.ai0.prototype={
b3(d){var x=new A.agw(this.f,y.v.a(d),B.t(y.e,y.g),0,null,null,B.aQ(y.d))
x.b4()
return x},
b5(d,e){e.sarC(this.f)},
a0B(d,e,f,g,h){var x,w
this.awr(d,e,f,g,h)
x=this.f.IS(d)
w=this.d.gAv()
w.toString
w=x.aiD(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.S,[A.b8F,A.b8G,A.ai1])
w(A.UD,A.b8G)
w(A.J4,B.id)
w(A.agw,B.pp)
w(A.PV,B.Nm)
w(A.ai0,B.pA)})()
B.cH(b.typeUniverse,JSON.parse('{"J4":{"id":[],"uk":[],"fN":["N"],"p1":[],"ea":[]},"agw":{"pp":[],"e0":[],"ac":["N","id"],"O":[],"ah":[],"aN":[],"ac.1":"id","ac.0":"N"},"PV":{"R":[],"d":[]},"ai0":{"pA":[],"aX":[],"d":[]}}'))
var y={d:B.z("ey"),x:B.z("B<f>"),g:B.z("N"),z:B.z("pz"),t:B.z("J4"),v:B.z("Db"),c:B.z("id"),e:B.z("v")}}
$__dart_deferred_initializers__["3tLgeCcMezph8V1ZbaTnv/ZZAOg="] = $__dart_deferred_initializers__.current
