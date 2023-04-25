self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
c92(d,e,f,g,h,i,j,k,l){var x=new B.Hy(g,d,j,h,i,f,k,l,e,A.aQ(y.h),0,null,null,A.aQ(y.d))
x.b6()
x.a6(0,null)
return x},
V5:function V5(d,e){this.a=d
this.b=e},
ahO:function ahO(d,e){this.a=d
this.b=e},
YP:function YP(d,e,f){this.a=d
this.b=e
this.c=f},
la:function la(d,e,f){var _=this
_.e=0
_.d5$=d
_.V$=e
_.a=f},
Hy:function Hy(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.p=d
_.A=e
_.a2=f
_.ah=g
_.aj=h
_.aK=i
_.bT=j
_.bL=k
_.bH=l
_.az=!1
_.cG=m
_.X$=n
_.T$=o
_.bK$=p
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
apn:function apn(){},
apo:function apo(){},
V4(d,e,f,g,h){return new B.ahN(d,h,f,g,e,null)},
ahN:function ahN(d,e,f,g,h,i){var _=this
_.f=d
_.r=e
_.w=f
_.x=g
_.c=h
_.a=i}},C,A,D
B=a.updateHolder(c[69],B)
C=c[2]
A=c[0]
D=c[100]
B.V5.prototype={
M(){return"WrapAlignment."+this.b}}
B.ahO.prototype={
M(){return"WrapCrossAlignment."+this.b}}
B.YP.prototype={}
B.la.prototype={}
B.Hy.prototype={
sz8(d,e){if(this.p===e)return
this.p=e
this.U()},
sjC(d){if(this.A===d)return
this.A=d
this.U()},
sQY(d,e){if(this.a2===e)return
this.a2=e
this.U()},
sb7L(d){if(this.ah===d)return
this.ah=d
this.U()},
sb7Q(d){if(this.aj===d)return
this.aj=d
this.U()},
sXR(d){if(this.aK===d)return
this.aK=d
this.U()},
he(d){if(!(d.e instanceof B.la))d.e=new B.la(null,null,C.k)},
cP(d){var x,w,v,u,t=this
switch(t.p.a){case 0:x=t.T$
for(w=A.w(t).i("ae.1"),v=0;x!=null;){v=Math.max(v,x.aJ(C.az,1/0,x.gcL()))
u=x.e
u.toString
x=w.a(u).V$}return v
case 1:return t.BL(new A.aU(0,1/0,0,d)).a}},
cE(d){var x,w,v,u,t=this
switch(t.p.a){case 0:x=t.T$
for(w=A.w(t).i("ae.1"),v=0;x!=null;){v+=x.aJ(C.aD,1/0,x.gcU())
u=x.e
u.toString
x=w.a(u).V$}return v
case 1:return t.BL(new A.aU(0,1/0,0,d)).a}},
cF(d){var x,w,v,u,t=this
switch(t.p.a){case 0:return t.BL(new A.aU(0,d,0,1/0)).b
case 1:x=t.T$
for(w=A.w(t).i("ae.1"),v=0;x!=null;){v=Math.max(v,x.aJ(C.aA,1/0,x.gcK()))
u=x.e
u.toString
x=w.a(u).V$}return v}},
cI(d){var x,w,v,u,t=this
switch(t.p.a){case 0:return t.BL(new A.aU(0,d,0,1/0)).b
case 1:x=t.T$
for(w=A.w(t).i("ae.1"),v=0;x!=null;){v+=x.aJ(C.aY,1/0,x.gdd())
u=x.e
u.toString
x=w.a(u).V$}return v}},
it(d){return this.M8(d)},
Tr(d){switch(this.p.a){case 0:return d.a
case 1:return d.b}},
Tp(d){switch(this.p.a){case 0:return d.b
case 1:return d.a}},
aDF(d,e){switch(this.p.a){case 0:return new A.q(d,e)
case 1:return new A.q(e,d)}},
aD3(d,e,f){var x=e-f
switch(this.aK.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
ev(d){return this.BL(d)},
BL(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.p.a){case 0:x=d.b
w=new A.aU(0,x,0,1/0)
break
case 1:x=d.d
w=new A.aU(0,1/0,0,x)
break
default:w=null
x=0}v=k.T$
for(u=A.w(k).i("ae.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=A.bKK(v,w)
n=k.Tr(o)
m=k.Tp(o)
if(p>0&&r+n+k.a2>x){t=Math.max(t,r)
s+=q+k.aj
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.a2;++p
l=v.e
l.toString
v=u.a(l).V$}s+=q
t=Math.max(t,r)
switch(k.p.a){case 0:return d.cM(new A.a2(t,s))
case 1:return d.cM(new A.a2(s,t))}},
cN(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(A.N.prototype.gaa.call(b1))
b1.az=!1
x=b1.T$
if(x==null){b1.k3=new A.a2(A.a8(0,b2.a,b2.b),A.a8(0,b2.c,b2.d))
return}switch(b1.p.a){case 0:w=b2.b
v=new A.aU(0,w,0,1/0)
u=b1.bT===C.ay&&!0
t=b1.bL===C.BE&&!0
break
case 1:w=b2.d
v=new A.aU(0,1/0,0,w)
u=b1.bL===C.BE&&!0
t=b1.bT===C.ay&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.a2
r=b1.aj
q=A.a([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.dM(v,!0)
j=x.k3
j.toString
i=b1.Tr(j)
j=x.k3
j.toString
h=b1.Tp(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new B.YP(m,l,k))
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
q.push(new B.YP(m,l,k))}g=q.length
switch(b1.p.a){case 0:j=b1.k3=b2.cM(new A.a2(o,n))
f=j.a
e=j.b
break
case 1:j=b1.k3=b2.cM(new A.a2(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.az=f<o||e<n
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
switch(b1.A.a){case 0:a6=0
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
i=b1.Tr(a9)
a9=x.k3
a9.toString
b0=b1.aD3(t,l,b1.Tp(a9))
if(u)a8-=i
j.a=b1.aDF(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.V$}a2=t?a2-a1:a2+(l+a1)}},
eT(d,e){return this.z0(d,e)},
a9(d,e){var x,w=this,v=w.az&&w.bH!==C.h,u=w.cG
if(v){v=w.cx
v===$&&A.b()
x=w.k3
u.sbY(0,d.nK(v,e,new A.G(0,0,0+x.a,0+x.b),w.gafc(),w.bH,u.a))}else{u.sbY(0,null)
w.pI(d,e)}},
n(){this.cG.sbY(0,null)
this.jy()}}
B.apn.prototype={
aU(d){var x,w,v
this.fp(d)
x=this.T$
for(w=y.e;x!=null;){x.aU(d)
v=x.e
v.toString
x=w.a(v).V$}},
aI(d){var x,w,v
this.fa(0)
x=this.T$
for(w=y.e;x!=null;){x.aI(0)
v=x.e
v.toString
x=w.a(v).V$}}}
B.apo.prototype={}
B.ahN.prototype={
b5(d){var x=this,w=A.fe(d)
return B.c92(x.f,C.h,D.BL,C.af,x.w,x.x,x.r,w,C.dh)},
b8(d,e){var x,w=this
e.sz8(0,C.af)
e.sjC(w.f)
e.sQY(0,w.r)
e.sb7L(w.w)
e.sb7Q(w.x)
e.sXR(D.BL)
x=A.fe(d)
if(e.bT!=x){e.bT=x
e.U()}if(e.bL!==C.dh){e.bL=C.dh
e.U()}if(C.h!==e.bH){e.bH=C.h
e.S()
e.d3()}}}
var z=a.updateTypes(["a1(a1)"]);(function installTearOffs(){var x=a._instance_1u
var w
x(w=B.Hy.prototype,"gcL","cP",0)
x(w,"gcU","cE",0)
x(w,"gcK","cF",0)
x(w,"gdd","cI",0)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(A.hw,[B.V5,B.ahO])
u(B.YP,A.S)
u(B.la,A.rQ)
u(B.apn,A.O)
u(B.apo,B.apn)
u(B.Hy,B.apo)
u(B.ahN,A.dw)
x(B.apn,A.ae)
w(B.apo,A.cr)})()
A.d7(b.typeUniverse,JSON.parse('{"la":{"hi":[],"fE":["O"],"ee":[]},"V5":{"Z":[]},"ahO":{"Z":[]},"Hy":{"cr":["O","la"],"O":[],"ae":["O","la"],"N":[],"ak":[],"aP":[],"ae.1":"la","cr.1":"la","cr.0":"O","ae.0":"O"},"ahN":{"dw":[],"aX":[],"e":[]}}'))
var y={a:A.A("aU"),h:A.A("nc"),d:A.A("eI"),l:A.A("B<YP>"),e:A.A("la")};(function constants(){D.f6=new B.V5(0,"start")
D.lk=new B.V5(2,"center")
D.BL=new B.ahO(0,"start")})()}
$__dart_deferred_initializers__["/x4xJTZZYS46b8E3oBopd8XUx2M="] = $__dart_deferred_initializers__.current
