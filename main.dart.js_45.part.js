self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
c6h(d,e,f,g,h,i,j,k,l){var x=new B.GJ(g,d,j,h,i,f,k,l,e,A.aP(),0,null,null,A.aP())
x.b6()
x.a6(0,null)
return x},
Uh:function Uh(d,e){this.a=d
this.b=e},
agp:function agp(d,e){this.a=d
this.b=e},
XY:function XY(d,e,f){this.a=d
this.b=e
this.c=f},
kX:function kX(d,e,f){var _=this
_.e=0
_.d4$=d
_.V$=e
_.a=f},
GJ:function GJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.p=d
_.v=e
_.a0=f
_.ah=g
_.aj=h
_.aF=i
_.bS=j
_.bJ=k
_.bG=l
_.av=!1
_.cF=m
_.X$=n
_.T$=o
_.bI$=p
_.k1=_.id=null
_.k2=!1
_.k4=_.k3=null
_.ok=0
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
_.ch=q
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=null
_.dy=!0
_.fr=null
_.a=0
_.c=_.b=null},
anY:function anY(){},
anZ:function anZ(){},
Ug(d,e,f,g,h){return new B.ago(d,h,f,g,e,null)},
ago:function ago(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.c=h
_.a=i}},C,A,D
B=a.updateHolder(c[65],B)
C=c[2]
A=c[0]
D=c[93]
B.Uh.prototype={
M(){return"WrapAlignment."+this.b}}
B.agp.prototype={
M(){return"WrapCrossAlignment."+this.b}}
B.XY.prototype={}
B.kX.prototype={}
B.GJ.prototype={
syY(d,e){if(this.p===e)return
this.p=e
this.U()},
sjx(d){if(this.v===d)return
this.v=d
this.U()},
sQj(d,e){if(this.a0===e)return
this.a0=e
this.U()},
sb62(d){if(this.ah===d)return
this.ah=d
this.U()},
sb67(d){if(this.aj===d)return
this.aj=d
this.U()},
sXe(d){if(this.aF===d)return
this.aF=d
this.U()},
hl(d){if(!(d.e instanceof B.kX))d.e=new B.kX(null,null,C.j)},
cN(d){var x,w,v,u,t=this
switch(t.p.a){case 0:x=t.T$
for(w=A.v(t).i("ac.1"),v=0;x!=null;){v=Math.max(v,x.aJ(C.ax,1/0,x.gcK()))
u=x.e
u.toString
x=w.a(u).V$}return v
case 1:return t.Bw(new A.aT(0,1/0,0,d)).a}},
cD(d){var x,w,v,u,t=this
switch(t.p.a){case 0:x=t.T$
for(w=A.v(t).i("ac.1"),v=0;x!=null;){v+=x.aJ(C.aD,1/0,x.gcU())
u=x.e
u.toString
x=w.a(u).V$}return v
case 1:return t.Bw(new A.aT(0,1/0,0,d)).a}},
cE(d){var x,w,v,u,t=this
switch(t.p.a){case 0:return t.Bw(new A.aT(0,d,0,1/0)).b
case 1:x=t.T$
for(w=A.v(t).i("ac.1"),v=0;x!=null;){v=Math.max(v,x.aJ(C.ay,1/0,x.gcJ()))
u=x.e
u.toString
x=w.a(u).V$}return v}},
cG(d){var x,w,v,u,t=this
switch(t.p.a){case 0:return t.Bw(new A.aT(0,d,0,1/0)).b
case 1:x=t.T$
for(w=A.v(t).i("ac.1"),v=0;x!=null;){v+=x.aJ(C.aY,1/0,x.gdi())
u=x.e
u.toString
x=w.a(u).V$}return v}},
ip(d){return this.LG(d)},
SN(d){switch(this.p.a){case 0:return d.a
case 1:return d.b}},
SL(d){switch(this.p.a){case 0:return d.b
case 1:return d.a}},
aCz(d,e){switch(this.p.a){case 0:return new A.q(d,e)
case 1:return new A.q(e,d)}},
aBY(d,e,f){var x=e-f
switch(this.aF.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
eq(d){return this.Bw(d)},
Bw(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.p.a){case 0:x=d.b
w=new A.aT(0,x,0,1/0)
break
case 1:x=d.d
w=new A.aT(0,1/0,0,x)
break
default:w=null
x=0}v=k.T$
for(u=A.v(k).i("ac.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=A.bIh(v,w)
n=k.SN(o)
m=k.SL(o)
if(p>0&&r+n+k.a0>x){t=Math.max(t,r)
s+=q+k.aj
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.a0;++p
l=v.e
l.toString
v=u.a(l).V$}s+=q
t=Math.max(t,r)
switch(k.p.a){case 0:return d.cL(new A.a2(t,s))
case 1:return d.cL(new A.a2(s,t))}},
cP(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(A.N.prototype.gaa.call(b1))
b1.av=!1
x=b1.T$
if(x==null){b1.k3=new A.a2(A.a8(0,b2.a,b2.b),A.a8(0,b2.c,b2.d))
return}switch(b1.p.a){case 0:w=b2.b
v=new A.aT(0,w,0,1/0)
u=b1.bS===C.aA&&!0
t=b1.bJ===C.Bi&&!0
break
case 1:w=b2.d
v=new A.aT(0,1/0,0,w)
u=b1.bJ===C.Bi&&!0
t=b1.bS===C.aA&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.a0
r=b1.aj
q=A.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.dJ(v,!0)
j=x.k3
j.toString
i=b1.SN(j)
j=x.k3
j.toString
h=b1.SL(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new B.XY(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.V$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new B.XY(m,l,k))}g=q.length
switch(b1.p.a){case 0:j=b1.k3=b2.cL(new A.a2(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.cL(new A.a2(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.av=f<o||e<n
d=Math.max(0,e-n)
switch(b1.ah.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.T$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.v.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.k3
a9.toString
i=b1.SN(a9)
a9=x.k3
a9.toString
b0=b1.aBY(t,l,b1.SL(a9))
if(u)a8-=i
j.a=b1.aCz(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.V$}a2=t?a2-a1:a2+(l+a1)}},
eQ(d,e){return this.yP(d,e)},
a9(d,e){var x,w=this,v=w.av&&w.bG!==C.f,u=w.cF
if(v){v=w.cx
v===$&&A.b()
x=w.k3
u.sbX(0,d.nH(v,e,new A.C(0,0,0+x.a,0+x.b),w.gaei(),w.bG,u.a))}else{u.sbX(0,null)
w.pD(d,e)}},
n(){this.cF.sbX(0,null)
this.js()}}
B.anY.prototype={
aS(d){var x,w,v
this.fz(d)
x=this.T$
for(w=y.e;x!=null;){x.aS(d)
v=x.e
v.toString
x=w.a(v).V$}},
aI(d){var x,w,v
this.fg(0)
x=this.T$
for(w=y.e;x!=null;){x.aI(0)
v=x.e
v.toString
x=w.a(v).V$}}}
B.anZ.prototype={}
B.ago.prototype={
b3(d){var x=this,w=A.f8(d)
return B.c6h(x.f,C.f,D.Bp,C.af,x.w,x.x,x.r,w,C.df)},
b5(d,e){var x,w=this
e.syY(0,C.af)
e.sjx(w.f)
e.sQj(0,w.r)
e.sb62(w.w)
e.sb67(w.x)
e.sXe(D.Bp)
x=A.f8(d)
if(e.bS!=x){e.bS=x
e.U()}if(e.bJ!==C.df){e.bJ=C.df
e.U()}if(C.f!==e.bG){e.bG=C.f
e.R()
e.d2()}}}
var z=a.updateTypes(["a_(a_)"]);(function installTearOffs(){var x=a._instance_1u
var w
x(w=B.GJ.prototype,"gcK","cN",0)
x(w,"gcU","cD",0)
x(w,"gcJ","cE",0)
x(w,"gdi","cG",0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.hH,[B.Uh,B.agp])
u(B.XY,A.U)
u(B.kX,A.rB)
u(B.anY,A.O)
u(B.anZ,B.anY)
u(B.GJ,B.anZ)
u(B.ago,A.dp)
x(B.anY,A.ac)
w(B.anZ,A.cp)})()
A.dd(b.typeUniverse,JSON.parse('{"kX":{"ha":[],"fw":["O"],"e8":[]},"Uh":{"Y":[]},"agp":{"Y":[]},"GJ":{"cp":["O","kX"],"O":[],"ac":["O","kX"],"N":[],"ai":[],"aN":[],"ac.1":"kX","cp.1":"kX","cp.0":"O","ac.0":"O"},"ago":{"dp":[],"aW":[],"e":[]}}'))
var y={a:A.F("aT"),l:A.F("B<XY>"),e:A.F("kX")};(function constants(){D.eT=new B.Uh(0,"start")
D.l5=new B.Uh(2,"center")
D.Bp=new B.agp(0,"start")})()}
$__dart_deferred_initializers__["NzyL3rj3rdH8YFgvDwCiNXKSka4="] = $__dart_deferred_initializers__.current
