self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={bcC:function bcC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},bcD:function bcD(){},VW:function VW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ajN:function ajN(){},JZ:function JZ(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.B4$=d
_.ev$=e
_.ai$=f
_.a=null},aie:function aie(d,e,f,g,h,i,j){var _=this
_.dD=d
_.c_=e
_.ak=f
_.aP=$
_.bC=!0
_.ad$=g
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
bPk(d,e,f,g,h,i,j,k,l,m){var x=null,w=e==null&&l===C.C
w=w?C.k1:x
return new A.R2(g,new B.q1(h,i,!0,!0,!0,x),k,l,!1,e,x,w,x,m,x,0,d,i,f,C.aI,x,C.w,j)},
R2:function R2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
ajM:function ajM(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
A=a.updateHolder(c[63],A)
C=c[2]
B=c[0]
A.bcC.prototype={
as8(d){var x=this.c
return d.Ar(this.d,x,x)},
m(d){var x=this
return"SliverGridGeometry("+C.b.c0(B.a(["scrollOffset: "+B.u(x.a),"crossAxisOffset: "+B.u(x.b),"mainAxisExtent: "+B.u(x.c),"crossAxisExtent: "+B.u(x.d)],y.x),", ")+")"}}
A.bcD.prototype={}
A.VW.prototype={
asE(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.fg(d/x)-1)
return 0},
aL_(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
U9(d){var x=this,w=x.a,v=C.c.a5(d,w)
return new A.bcC(C.c.cA(d,w)*x.b,x.aL_(v*x.c),x.d,x.e)},
ajX(d){var x
if(d===0)return 0
x=this.b
return x*(C.c.cA(d-1,this.a)+1)-(x-this.d)}}
A.ajN.prototype={}
A.JZ.prototype={
m(d){return"crossAxisOffset="+B.u(this.w)+"; "+this.ayr(0)}}
A.aie.prototype={
fI(d){if(!(d.e instanceof A.JZ))d.e=new A.JZ(!1,null,null)},
sat8(d){var x=this
if(x.dD===d)return
if(B.U(d)!==B.U(x.dD)||d.mM(x.dD))x.U()
x.dD=d},
Ay(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
cI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.P.prototype.ga9.call(a4)),a7=a4.c_
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.dD.Jx(a6)
t=u.b
s=t>1e-10?u.a*C.e.cA(w,t):0
r=isFinite(v)?u.asE(v):a5
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
o=C.c.e3(s-t,0,a4.ad$)
a4.xC(o,r==null?0:C.c.e3(p-r,0,a4.ad$))}else a4.xC(0,0)
n=u.U9(s)
if(a4.Y$==null)if(!a4.a02(s,n.a)){m=u.ajX(a7.gFB())
a4.id=B.my(a5,!1,a5,a5,m,0,0,0,m,a5)
a7.xP()
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
for(;j>=s;--j){h=u.U9(j)
p=h.c
g=a4.amQ(a6.Ar(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.Y$
p.toString
p.fC(n.as8(a6))
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
p=B.x(a4).i("af.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.U9(j)
e=h.c
d=a6.Ar(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ai$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.amO(d,i)
if(g==null)break}else g.fC(d)
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
a1=a7.a1J(a6,s,t,l,k)
a2=a4.n7(a6,Math.min(x,l),k)
a3=a4.xw(a6,l,k)
a4.id=B.my(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,0,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.xP()}}
A.R2.prototype={
ajs(d){return new A.ajM(this.p3,this.p4,null)}}
A.ajM.prototype={
b2(d){var x=new A.aie(this.f,y.v.a(d),B.r(y.e,y.g),0,null,null,B.aT(y.d))
x.b3()
return x},
b5(d,e){e.sat8(this.f)},
a1I(d,e,f,g,h){var x,w
this.ays(d,e,f,g,h)
x=this.f.Jx(d)
w=this.d.gAZ()
w.toString
w=x.ajX(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.T,[A.bcC,A.bcD,A.ajN])
w(A.VW,A.bcD)
w(A.JZ,B.ir)
w(A.aie,B.pT)
w(A.R2,B.Ol)
w(A.ajM,B.q3)})()
B.cG(b.typeUniverse,JSON.parse('{"JZ":{"ir":[],"uU":[],"fW":["O"],"pw":[],"ek":[]},"aie":{"pT":[],"e1":[],"af":["O","ir"],"P":[],"aj":[],"aS":[],"af.1":"ir","af.0":"O"},"R2":{"R":[],"d":[]},"ajM":{"q3":[],"aZ":[],"d":[]}}'))
var y={d:B.A("eh"),x:B.A("C<f>"),g:B.A("O"),z:B.A("q2"),t:B.A("JZ"),v:B.A("E3"),c:B.A("ir"),e:B.A("v")}}
$__dart_deferred_initializers__["XE7ZfndiJ/usdOijlji9JQ1nMuE="] = $__dart_deferred_initializers__.current
