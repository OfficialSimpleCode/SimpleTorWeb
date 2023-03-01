self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={Qw:function Qw(d){this.a=d},adt:function adt(d,e){this.a=d
this.b=e},aez:function aez(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.a=n},Ko:function Ko(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},aeA:function aeA(d,e,f){var _=this
_.d=$
_.es$=d
_.by$=e
_.a=null
_.b=f
_.c=null},b7f:function b7f(d){this.a=d},b7e:function b7e(d,e,f,g,h,i){var _=this
_.f=d
_.r=$
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i},Xb:function Xb(){}},D,B,J,C,E
A=a.updateHolder(c[61],A)
D=c[2]
B=c[0]
J=c[1]
C=c[109]
E=c[68]
A.Qw.prototype={
n9(d){d*=this.a
return d-(d<0?Math.ceil(d):Math.floor(d))},
j(d){return"SawTooth("+this.a+")"}}
A.adt.prototype={
H(){return"_ActivityIndicatorType."+this.b}}
A.aez.prototype={
aH(d,e){var y,x,w,v=this,u=$.ao(),t=u.au()
t.sa1(0,v.c)
y=v.x
t.sez(y)
t.sc8(0,D.X)
x=v.b
if(x!=null){w=u.au()
w.sa1(0,x)
w.sez(y)
w.sc8(0,D.X)
d.Vu(new B.L(0,0,0+e.a,0+e.b),0,6.282185307179586,!1,w)}if(v.d==null)t.stZ(D.tL)
d.Vu(new B.L(0,0,0+e.a,0+e.b),v.y,v.z,!1,t)},
fL(d){var y=this
return!J.p(d.b,y.b)||!d.c.k(0,y.c)||d.d!=y.d||d.e!==y.e||d.f!==y.f||d.r!==y.r||d.w!==y.w||d.x!==y.x}}
A.Ko.prototype={
O(){return new A.aeA(null,null,D.k)}}
A.aeA.prototype={
a2(){var y,x=this
x.ae()
y=B.bT(null,C.YG,0,null,1,null,x)
x.d=y
if(x.a.c==null)y.Eh(0)},
bb(d){var y,x,w=this
w.bz(d)
y=w.a.c==null
if(y){x=w.d
x===$&&B.b()
x=x.r
x=!(x!=null&&x.a!=null)}else x=!1
if(x){y=w.d
y===$&&B.b()
y.Eh(0)}else{if(!y){y=w.d
y===$&&B.b()
y=y.r
y=y!=null&&y.a!=null}else y=!1
if(y){y=w.d
y===$&&B.b()
y.fA(0)}}},
n(){var y=this.d
y===$&&B.b()
y.n()
this.aol()},
a19(d,e,f,g,h){var y,x,w,v,u,t,s,r=null
B.r(d)
y=new A.b7e(d,r,r,r,r,r)
x=this.a
x.toString
w=x.d
if(w==null)w=E.btC(d).d
x=this.a
x.toString
v=x.a3w(d,y.ga1(y))
u=this.a.c
t=u!=null
s=t?-1.5707963267948966:-1.5707963267948966+f*3/2*3.141592653589793+h*3.141592653589793*2+g*0.5*3.141592653589793
return x.a1d(B.X(r,B.jj(r,r,r,new A.aez(w,v,u,e,f,g,h,4,s,t?B.a1(u,0,1)*6.282185307179586:Math.max(e*3/2*3.141592653589793-f*3/2*3.141592653589793,0.001),r),D.E),D.f,r,C.PN,r,r,r,r,r,r,r,r,r),d)},
ar1(){var y=this.d
y===$&&B.b()
return B.hk(y,new A.b7f(this),null)},
u(d){var y=this.a
y.toString
switch(0){case 0:if(y.c!=null)return this.a19(d,0,0,0,0)
return this.ar1()}}}
A.b7e.prototype={
ga1(d){var y,x=this,w=x.r
if(w===$){y=B.r(x.f)
x.r!==$&&B.bQ()
w=x.r=y.ax}return w.b}}
A.Xb.prototype={
n(){var y=this,x=y.by$
if(x!=null)x.I(0,y.gfB())
y.by$=null
y.ak()},
c9(){this.cM()
this.cF()
this.fC()}}
var z=a.updateTypes([])
A.b7f.prototype={
$2(d,e){var y,x,w,v=this.a,u=$.bM5(),t=v.d
t===$&&B.b()
t=u.a_(0,t.gl(t))
u=$.bM6()
y=v.d
y=u.a_(0,y.gl(y))
u=$.bM3()
x=v.d
x=u.a_(0,x.gl(x))
u=$.bM4()
w=v.d
return v.a19(d,t,y,x,u.a_(0,w.gl(w)))},
$S:74};(function aliases(){var y=A.Xb.prototype
y.aol=y.n})();(function inheritance(){var y=a.mixinHard,x=a.inherit
x(A.Qw,B.fd)
x(A.adt,B.fW)
x(A.aez,B.oz)
x(A.Ko,E.Pr)
x(A.Xb,B.S)
x(A.aeA,A.Xb)
x(A.b7f,B.d2)
x(A.b7e,B.zY)
y(A.Xb,B.er)})()
B.ct(b.typeUniverse,JSON.parse('{"Qw":{"fd":[]},"Ko":{"O":[],"m":[]},"adt":{"W":[]},"aez":{"aI":[]},"aeA":{"S":["Ko"]}}'));(function constants(){C.PN=new B.aH(36,1/0,36,1/0)
C.auP=new A.adt(0,"material")
C.vA=new A.Ko(null,null,null,null,null,null,null)
C.YG=new B.bl(2961926e3)
C.a0q=new B.dL(0,0.5,D.ac)
C.a0p=new B.dL(0.5,1,D.ac)
C.ak5=new A.Qw(1333)
C.tl=new A.Qw(2222)})();(function lazyInitializers(){var y=a.lazyFinal
y($,"cf2","bM5",()=>B.ji(C.a0q).mz(B.ji(C.tl)))
y($,"cf3","bM6",()=>B.ji(C.a0p).mz(B.ji(C.tl)))
y($,"cf0","bM3",()=>B.ji(C.tl))
y($,"cf1","bM4",()=>B.ji(C.ak5))})()}
$__dart_deferred_initializers__["LHOD2i4TytfP/s7kuW83MkwwS8U="] = $__dart_deferred_initializers__.current
