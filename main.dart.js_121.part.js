self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={b7A:function b7A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},b7B:function b7B(){},Uh:function Uh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},ahu:function ahu(){},IQ:function IQ(d,e,f){var _=this
_.b=_.w=null
_.c=!1
_.An$=d
_.eo$=e
_.ag$=f
_.a=null},ag_:function ag_(d,e,f,g,h,i,j){var _=this
_.dM=d
_.bX=e
_.ai=f
_.aP=$
_.bB=!0
_.ac$=g
_.Z$=h
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
bIP(d,e,f,g,h,i,j,k,l,m){var x=null,w=e==null&&l===C.C
w=w?C.jD:x
return new A.Pw(g,new B.pt(h,i,!0,!0,!0,x),k,l,!1,e,x,w,x,m,x,0,d,i,f,C.aK,x,C.x,j)},
Pw:function Pw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){var _=this
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
aht:function aht(d,e,f){this.f=d
this.d=e
this.a=f}},C,B
A=a.updateHolder(c[55],A)
C=c[2]
B=c[0]
A.b7A.prototype={
aqe(d){var x=this.c
return d.zF(this.d,x,x)},
m(d){var x=this
return"SliverGridGeometry("+C.b.c_(B.a(["scrollOffset: "+B.u(x.a),"crossAxisOffset: "+B.u(x.b),"mainAxisExtent: "+B.u(x.c),"crossAxisExtent: "+B.u(x.d)],y.x),", ")+")"}}
A.b7B.prototype={}
A.Uh.prototype={
aqK(d){var x=this.b
if(x>0)return Math.max(0,this.a*C.e.ft(d/x)-1)
return 0},
aId(d){var x,w,v=this
if(v.f){x=v.c
w=v.e
return v.a*x-d-w-(x-w)}return d},
SU(d){var x=this,w=x.a,v=C.c.a4(d,w)
return new A.b7A(C.c.cB(d,w)*x.b,x.aId(v*x.c),x.d,x.e)},
ai8(d){var x
if(d===0)return 0
x=this.b
return x*(C.c.cB(d-1,this.a)+1)-(x-this.d)}}
A.ahu.prototype={}
A.IQ.prototype={
m(d){return"crossAxisOffset="+B.u(this.w)+"; "+this.aw1(0)}}
A.ag_.prototype={
fB(d){if(!(d.e instanceof A.IQ))d.e=new A.IQ(!1,null,null)},
sarb(d){var x=this
if(x.dM===d)return
if(B.V(d)!==B.V(x.dM)||d.no(x.dM))x.U()
x.dM=d},
zN(d){var x=d.e
x.toString
x=y.t.a(x).w
x.toString
return x},
cI(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=this,a5=null,a6=y.z.a(B.O.prototype.ga8.call(a4)),a7=a4.bX
a7.R8=!1
x=a6.d
w=x+a6.z
v=w+a6.Q
u=a4.dM.IG(a6)
t=u.b
s=t>1e-10?u.a*C.e.cB(w,t):0
r=isFinite(v)?u.aqK(v):a5
t=a4.Z$
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
o=C.c.e0(s-t,0,a4.ac$)
a4.wO(o,r==null?0:C.c.e0(p-r,0,a4.ac$))}else a4.wO(0,0)
n=u.SU(s)
if(a4.Z$==null)if(!a4.ZK(s,n.a)){m=u.ai8(a7.gEN())
a4.id=B.ma(a5,!1,a5,a5,m,0,0,0,m,a5)
a7.wZ()
return}l=n.a
k=l+n.c
t=a4.Z$
t.toString
t=t.e
t.toString
q=y.c
t=q.a(t).b
t.toString
j=t-1
t=y.t
i=a5
for(;j>=s;--j){h=u.SU(j)
p=h.c
g=a4.akY(a6.zF(h.d,p,p))
f=g.e
f.toString
t.a(f)
e=h.a
f.a=e
f.w=h.b
if(i==null)i=g
k=Math.max(k,e+p)}if(i==null){p=a4.Z$
p.toString
p.fu(n.aqe(a6))
i=a4.Z$
p=i.e
p.toString
t.a(p)
p.a=l
p.w=n.b}p=i.e
p.toString
p=q.a(p).b
p.toString
j=p+1
p=B.y(a4).i("ad.1")
f=r!=null
while(!0){if(!(!f||j<=r))break
h=u.SU(j)
e=h.c
d=a6.zF(h.d,e,e)
a0=i.e
a0.toString
g=p.a(a0).ag$
if(g!=null){a0=g.e
a0.toString
a0=q.a(a0).b
a0.toString
a0=a0!==j}else a0=!0
if(a0){g=a4.akW(d,i)
if(g==null)break}else g.fu(d)
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
a1=a7.a0p(a6,s,t,l,k)
a2=a4.mV(a6,Math.min(x,l),k)
a3=a4.wI(a6,l,k)
a4.id=B.ma(a3,a1>a2||x>0||a6.f!==0,a5,a5,a1,0,a2,0,a1,a5)
if(a1===k)a7.R8=!0
a7.wZ()}}
A.Pw.prototype={
ahE(d){return new A.aht(this.p3,this.p4,null)}}
A.aht.prototype={
b3(d){var x=new A.ag_(this.f,y.v.a(d),B.r(y.e,y.g),0,null,null,B.aR(y.d))
x.b4()
return x},
b5(d,e){e.sarb(this.f)},
a0o(d,e,f,g,h){var x,w
this.aw2(d,e,f,g,h)
x=this.f.IG(d)
w=this.d.gAi()
w.toString
w=x.ai8(w)
return w}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.S,[A.b7A,A.b7B,A.ahu])
w(A.Uh,A.b7B)
w(A.IQ,B.ib)
w(A.ag_,B.pk)
w(A.Pw,B.MZ)
w(A.aht,B.pv)})()
B.cQ(b.typeUniverse,JSON.parse('{"IQ":{"ib":[],"ue":[],"fL":["N"],"oX":[],"e7":[]},"ag_":{"pk":[],"dX":[],"ad":["N","ib"],"O":[],"ai":[],"aO":[],"ad.1":"ib","ad.0":"N"},"Pw":{"R":[],"d":[]},"aht":{"pv":[],"aZ":[],"d":[]}}'))
var y={d:B.A("eI"),x:B.A("B<e>"),g:B.A("N"),z:B.A("pu"),t:B.A("IQ"),v:B.A("D1"),c:B.A("ib"),e:B.A("v")}}
$__dart_deferred_initializers__["WDGbb0OvBmkVpVDbDGU+VS8r/qk="] = $__dart_deferred_initializers__.current
