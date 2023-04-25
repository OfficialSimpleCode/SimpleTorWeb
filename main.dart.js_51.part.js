self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={T0:function T0(d){this.a=d},ahW:function ahW(d,e){this.a=d
this.b=e},aj8:function aj8(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.y=l
_.z=m
_.a=n},Mz:function Mz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},aj9:function aj9(d,e,f){var _=this
_.d=$
_.ex$=d
_.bf$=e
_.a=null
_.b=f
_.c=null},bei:function bei(d){this.a=d},beh:function beh(d,e,f,g,h,i){var _=this
_.f=d
_.r=$
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},a_z:function a_z(){}},D,B,J,C,E
A=a.updateHolder(c[54],A)
D=c[2]
B=c[0]
J=c[1]
C=c[81]
E=c[66]
A.T0.prototype={
qg(d){d*=this.a
return d-(d<0?Math.ceil(d):Math.floor(d))},
l(d){return"SawTooth("+this.a+")"}}
A.ahW.prototype={
M(){return"_ActivityIndicatorType."+this.b}}
A.aj8.prototype={
a9(d,e){var y,x,w,v=this,u=$.aw(),t=u.aE()
t.sN(0,v.c)
y=v.x
t.sdz(y)
t.sbp(0,D.aa)
x=v.b
if(x!=null){w=u.aE()
w.sN(0,x)
w.sdz(y)
w.sbp(0,D.aa)
d.Yj(new B.G(0,0,0+e.a,0+e.b),0,6.282185307179586,!1,w)}if(v.d==null)t.spq(D.Be)
d.Yj(new B.G(0,0,0+e.a,0+e.b),v.y,v.z,!1,t)},
fD(d){var y=this
return!J.o(d.b,y.b)||!d.c.k(0,y.c)||d.d!=y.d||d.e!==y.e||d.f!==y.f||d.r!==y.r||d.w!==y.w||d.x!==y.x}}
A.Mz.prototype={
Y(){return new A.aj9(null,null,D.l)}}
A.aj9.prototype={
af(){var y,x=this
x.am()
y=B.bx(null,C.a88,0,null,1,null,x)
x.d=y
if(x.a.c==null)y.G_(0)},
b0(d){var y,x,w=this
w.bi(d)
y=w.a.c==null
if(y){x=w.d
x===$&&B.b()
x=x.r
x=!(x!=null&&x.a!=null)}else x=!1
if(x){y=w.d
y===$&&B.b()
y.G_(0)}else{if(!y){y=w.d
y===$&&B.b()
y=y.r
y=y!=null&&y.a!=null}else y=!1
if(y){y=w.d
y===$&&B.b()
y.hh(0)}}},
n(){var y=this.d
y===$&&B.b()
y.n()
this.ato()},
a4i(d,e,f,g,h){var y,x,w,v,u,t,s,r=null
B.t(d)
y=new A.beh(d,r,r,r,r,r)
x=this.a
x.toString
w=x.d
if(w==null)w=E.bFl(d).d
x=this.a
x.toString
v=x.a7l(d,y.gN(y))
u=this.a.c
t=u!=null
s=t?-1.5707963267948966:-1.5707963267948966+f*3/2*3.141592653589793+h*3.141592653589793*2+g*0.5*3.141592653589793
return x.a4m(B.a0(r,B.fd(r,r,r,new A.aj8(w,v,u,e,f,g,h,4,s,t?B.a8(u,0,1)*6.282185307179586:Math.max(e*3/2*3.141592653589793-f*3/2*3.141592653589793,0.001),r),D.L),D.h,r,C.a_y,r,r,r,r,r,r,r,r,r),d)},
awN(){var y=this.d
y===$&&B.b()
return B.fT(y,new A.bei(this),null)},
u(d){var y=this.a
y.toString
switch(0){case 0:if(y.c!=null)return this.a4i(d,0,0,0,0)
return this.awN()}}}
A.beh.prototype={
gN(d){var y,x=this,w=x.r
if(w===$){y=B.t(x.f)
x.r!==$&&B.c7()
w=x.r=y.ax}return w.b}}
A.a_z.prototype={
n(){var y=this,x=y.bf$
if(x!=null)x.H(0,y.gfc())
y.bf$=null
y.aB()},
cm(){this.cY()
this.cS()
this.fd()}}
var z=a.updateTypes([])
A.bei.prototype={
$2(d,e){var y,x,w,v=this.a,u=$.bZ8(),t=v.d
t===$&&B.b()
t=u.ae(0,t.gj(t))
u=$.bZ9()
y=v.d
y=u.ae(0,y.gj(y))
u=$.bZ6()
x=v.d
x=u.ae(0,x.gj(x))
u=$.bZ7()
w=v.d
return v.a4i(d,t,y,x,u.ae(0,w.gj(w)))},
$S:69};(function aliases(){var y=A.a_z.prototype
y.ato=y.n})();(function inheritance(){var y=a.mixinHard,x=a.inherit
x(A.T0,B.hF)
x(A.ahW,B.hw)
x(A.aj8,B.mo)
x(A.Mz,E.S1)
x(A.a_z,B.T)
x(A.aj9,A.a_z)
x(A.bei,B.dd)
x(A.beh,B.BJ)
y(A.a_z,B.e4)})()
B.d7(b.typeUniverse,JSON.parse('{"T0":{"hF":[]},"Mz":{"R":[],"e":[]},"ahW":{"Z":[]},"aj8":{"aS":[]},"aj9":{"T":["Mz"]}}'));(function constants(){C.a_y=new B.aU(36,1/0,36,1/0)
C.avV=new A.ahW(0,"material")
C.D9=new A.Mz(null,null,null,null,null,null,null)
C.a88=new B.ba(2961926e3)
C.ab3=new B.eM(0,0.5,D.U)
C.ab2=new B.eM(0.5,1,D.U)
C.akH=new A.T0(1333)
C.AJ=new A.T0(2222)})();(function lazyInitializers(){var y=a.lazyFinal
y($,"csT","bZ8",()=>B.k1(C.ab3).ns(B.k1(C.AJ)))
y($,"csU","bZ9",()=>B.k1(C.ab2).ns(B.k1(C.AJ)))
y($,"csR","bZ6",()=>B.k1(C.AJ))
y($,"csS","bZ7",()=>B.k1(C.akH))})()}
$__dart_deferred_initializers__["b5ghbIQEHzcGBSR1t8rhIpV5klQ="] = $__dart_deferred_initializers__.current
