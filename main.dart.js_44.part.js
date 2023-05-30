self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
cjB(d,e,f,g,h,i,j,k,l){var x=new B.IY(g,d,j,h,i,f,k,l,e,A.aT(y.h),0,null,null,A.aT(y.d))
x.b3()
x.a4(0,null)
return x},
ani:function ani(d,e){this.a=d
this.b=e},
biW:function biW(d,e){this.a=d
this.b=e},
a_W:function a_W(d,e,f){this.a=d
this.b=e
this.c=f},
lP:function lP(d,e,f){var _=this
_.e=0
_.eq$=d
_.ai$=e
_.a=f},
IY:function IY(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.B=d
_.a0=e
_.Z=f
_.ar=g
_.v=h
_.W=i
_.bH=j
_.aS=k
_.br=l
_.aA=!1
_.cw=m
_.ab$=n
_.Y$=o
_.cG$=p
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
avj:function avj(){},
avk:function avk(){}},C,A,D
B=a.updateHolder(c[83],B)
C=c[2]
A=c[0]
D=c[144]
B.ani.prototype={
N(){return"WrapAlignment."+this.b}}
B.biW.prototype={
N(){return"WrapCrossAlignment."+this.b}}
B.a_W.prototype={}
B.lP.prototype={}
B.IY.prototype={
svf(d,e){if(this.B===e)return
this.B=e
this.U()},
sjB(d){if(this.a0===d)return
this.a0=d
this.U()},
sUl(d,e){if(this.Z===e)return
this.Z=e
this.U()},
sbgp(d){if(this.ar===d)return
this.ar=d
this.U()},
sbgx(d){if(this.v===d)return
this.v=d
this.U()},
sa0z(d){if(this.W===d)return
this.W=d
this.U()},
fG(d){if(!(d.e instanceof B.lP))d.e=new B.lP(null,null,C.l)},
cP(d){var x,w,v,u,t=this
switch(t.B.a){case 0:x=t.Y$
for(w=A.y(t).i("ae.1"),v=0;x!=null;){v=Math.max(v,x.aQ(C.aD,1/0,x.gcT()))
u=x.e
u.toString
x=w.a(u).ai$}return v
case 1:return t.DA(new A.aV(0,1/0,0,d)).a}},
cC(d){var x,w,v,u,t=this
switch(t.B.a){case 0:x=t.Y$
for(w=A.y(t).i("ae.1"),v=0;x!=null;){v+=x.aQ(C.aH,1/0,x.gcZ())
u=x.e
u.toString
x=w.a(u).ai$}return v
case 1:return t.DA(new A.aV(0,1/0,0,d)).a}},
cA(d){var x,w,v,u,t=this
switch(t.B.a){case 0:return t.DA(new A.aV(0,d,0,1/0)).b
case 1:x=t.Y$
for(w=A.y(t).i("ae.1"),v=0;x!=null;){v=Math.max(v,x.aQ(C.az,1/0,x.gcO()))
u=x.e
u.toString
x=w.a(u).ai$}return v}},
cF(d){var x,w,v,u,t=this
switch(t.B.a){case 0:return t.DA(new A.aV(0,d,0,1/0)).b
case 1:x=t.Y$
for(w=A.y(t).i("ae.1"),v=0;x!=null;){v+=x.aQ(C.b0,1/0,x.gdd())
u=x.e
u.toString
x=w.a(u).ai$}return v}},
iv(d){return this.FL(d)},
WZ(d){switch(this.B.a){case 0:return d.a
case 1:return d.b}},
WX(d){switch(this.B.a){case 0:return d.b
case 1:return d.a}},
aKb(d,e){switch(this.B.a){case 0:return new A.q(d,e)
case 1:return new A.q(e,d)}},
aJE(d,e,f){var x=e-f
switch(this.W.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
eD(d){return this.DA(d)},
DA(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.B.a){case 0:x=d.b
w=new A.aV(0,x,0,1/0)
break
case 1:x=d.d
w=new A.aV(0,1/0,0,x)
break
default:w=null
x=0}v=k.Y$
for(u=A.y(k).i("ae.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=A.bUi(v,w)
n=k.WZ(o)
m=k.WX(o)
if(p>0&&r+n+k.Z>x){t=Math.max(t,r)
s+=q+k.v
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.Z;++p
l=v.e
l.toString
v=u.a(l).ai$}s+=q
t=Math.max(t,r)
switch(k.B.a){case 0:return d.cm(new A.a_(t,s))
case 1:return d.cm(new A.a_(s,t))}},
cH(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(A.P.prototype.ga9.call(b1))
b1.aA=!1
x=b1.Y$
if(x==null){b1.k3=new A.a_(A.a3(0,b2.a,b2.b),A.a3(0,b2.c,b2.d))
return}switch(b1.B.a){case 0:w=b2.b
v=new A.aV(0,w,0,1/0)
u=b1.bH===C.aw&&!0
t=b1.aS===C.Ac&&!0
break
case 1:w=b2.d
v=new A.aV(0,1/0,0,w)
u=b1.aS===C.Ac&&!0
t=b1.bH===C.aw&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.Z
r=b1.v
q=A.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.dE(v,!0)
j=x.k3
j.toString
i=b1.WZ(j)
j=x.k3
j.toString
h=b1.WX(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new B.a_W(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ai$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new B.a_W(m,l,k))}g=q.length
switch(b1.B.a){case 0:j=b1.k3=b2.cm(new A.a_(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.cm(new A.a_(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.aA=f<o||e<n
d=Math.max(0,e-n)
switch(b1.ar.a){case 0:a0=0
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
x=b1.Y$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.a0.a){case 0:a6=0
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
i=b1.WZ(a9)
a9=x.k3
a9.toString
b0=b1.aJE(t,l,b1.WX(a9))
if(u)a8-=i
j.a=b1.aKb(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ai$}a2=t?a2-a1:a2+(l+a1)}},
eP(d,e){return this.xB(d,e)},
a7(d,e){var x,w=this,v=w.aA&&w.br!==C.i,u=w.cw
if(v){v=w.cx
v===$&&A.b()
x=w.k3
u.sbU(0,d.on(v,e,new A.K(0,0,0+x.a,0+x.b),w.gakc(),w.br,u.a))}else{u.sbU(0,null)
w.qy(d,e)}},
n(){this.cw.sbU(0,null)
this.kk()}}
B.avj.prototype={
aM(d){var x,w,v
this.fv(d)
x=this.Y$
for(w=y.e;x!=null;){x.aM(d)
v=x.e
v.toString
x=w.a(v).ai$}},
aI(d){var x,w,v
this.fk(0)
x=this.Y$
for(w=y.e;x!=null;){x.aI(0)
v=x.e
v.toString
x=w.a(v).ai$}}}
B.avk.prototype={}
var z=a.updateTypes(["Z(Z)"]);(function installTearOffs(){var x=a._instance_1u
var w
x(w=B.IY.prototype,"gcT","cP",0)
x(w,"gcZ","cC",0)
x(w,"gcO","cA",0)
x(w,"gdd","cF",0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.hf,[B.ani,B.biW])
u(B.a_W,A.T)
u(B.lP,A.qz)
u(B.avj,A.O)
u(B.avk,B.avj)
u(B.IY,B.avk)
x(B.avj,A.ae)
w(B.avk,A.ch)})()
A.cF(b.typeUniverse,JSON.parse('{"lP":{"fQ":[],"fT":["O"],"ee":[]},"IY":{"ch":["O","lP"],"O":[],"ae":["O","lP"],"P":[],"ai":[],"aS":[],"ae.1":"lP","ch.1":"lP","ch.0":"O","ae.0":"O"}}'))
var y={a:A.A("aV"),h:A.A("m9"),d:A.A("ec"),l:A.A("C<a_W>"),e:A.A("lP")};(function constants(){D.fn=new B.ani(0,"start")
D.m3=new B.ani(2,"center")
D.Aj=new B.biW(0,"start")})()}
$__dart_deferred_initializers__["Fo9zNGZ+tBIF12pRh3NjlRiccv0="] = $__dart_deferred_initializers__.current
