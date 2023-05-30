self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={bbk:function bbk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},bbl:function bbl(){},Vo:function Vo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},aj6:function aj6(){},JC:function JC(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.AS$=d
_.eq$=e
_.ai$=f
_.a=null},ahz:function ahz(d,e,f,g,h,i,j){var _=this
_.dC=d
_.c_=e
_.ak=f
_.aP=$
_.bC=!0
_.ab$=g
_.Y$=h
_.cG$=i
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
bNH(d,e,f,g,h,i,j,k,l,m){var x=null,w=e==null&&l===C.C
w=w?C.jY:x
return new A.Qy(g,new B.pT(h,i,!0,!0,!0,x),k,l,!1,e,x,w,x,m,x,0,d,i,f,C.aG,x,C.w,j)},
Qy:function Qy(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aj5:function aj5(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
A=a.updateHolder(c[63],A)
C=c[2]
B=c[0]
A.bbk.prototype={
arF(d){var x=this.c
return d.Ae(this.d,x,x)},
m(d){var x=this
return"SliverGridGeometry("+C.b.c0(B.a(["scrollOffset: "+B.u(x.a),"crossAxisOffset: "+B.u(x.b),"mainAxisExtent: "+B.u(x.c),"crossAxisExtent: "+B.u(x.d)],y.x),", ")+")"}}
A.bbl.prototype={}
A.Vo.prototype={
asa(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.fb(d/x)-1)
return 0},
aKc(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
TF(d){var x=this,w=x.a,v=C.c.a5(d,w)
return new A.bbk(C.c.cB(d,w)*x.b,x.aKc(v*x.c),x.d,x.e)},
aju(d){var x
if(d===0)return 0
x=this.b
return x*(C.c.cB(d-1,this.a)+1)-(x-this.d)}}
A.aj6.prototype={}
A.JC.prototype={
m(d){return"crossAxisOffset="+B.u(this.w)+"; "+this.axL(0)}}
A.ahz.prototype={
fG(d){if(!(d.e instanceof A.JC))d.e=new A.JC(!1,null,null)},
sasF(d){var x=this
if(x.dC===d)return
if(B.W(d)!==B.W(x.dC)||d.mK(x.dC))x.U()
x.dC=d},
Al(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
cH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.P.prototype.ga9.call(a4)),a7=a4.c_
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.dC.Jk(a6)
t=u.b
s=t>1e-10?u.a*C.e.cB(w,t):0
r=isFinite(v)?u.asa(v):a5
t=a4.Y$
if(t!=null){t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
p=a4.cG$
p.toString
p=p.e
p.toString
p=q.a(p).b
p.toString
o=C.c.e1(s-t,0,a4.ab$)
a4.xt(o,r==null?0:C.c.e1(p-r,0,a4.ab$))}else a4.xt(0,0)
n=u.TF(s)
if(a4.Y$==null)if(!a4.a_A(s,n.a)){m=u.aju(a7.gFj())
a4.id=B.mw(a5,!1,a5,a5,m,0,0,0,m,a5)
a7.xE()
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
for(;j>=s;--j){h=u.TF(j)
p=h.c
g=a4.amn(a6.Ae(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.Y$
p.toString
p.fA(n.arF(a6))
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
p=B.y(a4).i("ae.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.TF(j)
e=h.c
d=a6.Ae(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ai$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.aml(d,i)
if(g==null)break}else g.fA(d)
d=g.e
d.toString
t.a(d)
a0=h.a
d.a=a0
d.w=h.b
k=Math.max(k,a0+e);++j
i=g}t=a4.cG$
t.toString
t=t.e
t.toString
t=q.a(t).b
t.toString
a1=a7.a1f(a6,s,t,l,k)
a2=a4.n5(a6,Math.min(x,l),k)
a3=a4.xm(a6,l,k)
a4.id=B.mw(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,0,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.xE()}}
A.Qy.prototype={
aj_(d){return new A.aj5(this.p3,this.p4,null)}}
A.aj5.prototype={
b2(d){var x=new A.ahz(this.f,y.v.a(d),B.r(y.e,y.g),0,null,null,B.aT(y.d))
x.b3()
return x},
b5(d,e){e.sasF(this.f)},
a1e(d,e,f,g,h){var x,w
this.axM(d,e,f,g,h)
x=this.f.Jk(d)
w=this.d.gAM()
w.toString
w=x.aju(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.T,[A.bbk,A.bbl,A.aj6])
w(A.Vo,A.bbl)
w(A.JC,B.io)
w(A.ahz,B.pL)
w(A.Qy,B.NV)
w(A.aj5,B.pV)})()
B.cF(b.typeUniverse,JSON.parse('{"JC":{"io":[],"uL":[],"fT":["O"],"po":[],"ee":[]},"ahz":{"pL":[],"e0":[],"ae":["O","io"],"P":[],"ai":[],"aS":[],"ae.1":"io","ae.0":"O"},"Qy":{"R":[],"d":[]},"aj5":{"pV":[],"aY":[],"d":[]}}'))
var y={d:B.A("ec"),x:B.A("C<f>"),g:B.A("O"),z:B.A("pU"),t:B.A("JC"),v:B.A("DI"),c:B.A("io"),e:B.A("v")}}
$__dart_deferred_initializers__["0WWu1pE7hDUHbRgia+AeXGoxAbk="] = $__dart_deferred_initializers__.current
