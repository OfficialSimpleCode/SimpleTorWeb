self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
c_c(d,e,f,g,h){return new A.agT(g,d,h,e,f,null)},
agT:function agT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.r=f
_.w=g
_.z=h
_.a=i},
b3Q:function b3Q(d){this.a=d},
b3P:function b3P(d){this.a=d},
b3R:function b3R(d){this.a=d},
aIW:function aIW(d,e,f,g){var _=this
_.d=d
_.x=e
_.y=f
_.z=g},
aKu:function aKu(d,e){this.a=d
this.b=e},
aKt:function aKt(d,e,f,g){var _=this
_.a=d
_.b=e
_.x=f
_.z=g},
aX4:function aX4(d){this.b=d},
VS:function VS(d,e,f,g,h){var _=this
_.c=d
_.f=e
_.r=f
_.y=g
_.a=h},
a10:function a10(d,e,f){var _=this
_.e=_.d=!1
_.x=_.w=_.r=_.f=null
_.z=_.y=$
_.ax=_.at=_.as=_.Q=null
_.ay=$
_.ep$=d
_.ba$=e
_.a=null
_.b=f
_.c=null},
bCW:function bCW(d){this.a=d},
bCV:function bCV(d,e,f){this.a=d
this.b=e
this.c=f},
bCY:function bCY(d){this.a=d},
bCZ:function bCZ(){},
bCX:function bCX(){},
aqm:function aqm(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.r=null
_.w=$
_.a=h},
qs:function qs(d,e,f,g,h,i,j,k,l){var _=this
_.at=d
_.ax=e
_.ay=f
_.f=g
_.r=h
_.w=null
_.a=i
_.b=null
_.c=j
_.d=k
_.e=l},
a3i:function a3i(){},
bjy:function bjy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.f=_.e=$
_.r=!1},
bjz:function bjz(d,e){this.a=d
this.b=e},
bjA:function bjA(d){this.a=d},
c3Z(d,e){var x=Math.atan2(d.b-e.b,e.a-d.a)
return x<0?-x:6.283185307179586-x},
c4V(d,e,f,g){return Math.abs(Math.sqrt(Math.pow(d.a-e.a,2)+Math.pow(d.b-e.b,2))-f)<g},
c3T(d,e,f,g){var x=f*57.29577951308232,w=x>=g&&x<=360?x-g:360-g+x
return w},
cu_(d,e,f,g,h){var x
if(g==null)return f
x=A.c3T(d,!1,g,h)
if(x-d>(360-d)*0.5)return 0
else if(x>d)return d
return x},
cwd(d,e,f,g,h){if(A.c3T(d,!1,h,g)>d)return!1
return!0},
c5o(d,e,f){return(f-e)/100*d+e},
cx1(d,e){if(d>100)return e
else if(d<0)return 0.5
return d*(e/100)},
c3N(d,e){if(d>e)return 100
else if(d<0.5)return 0
return d/(e/100)}},B,C,D
A=a.updateHolder(c[47],A)
B=c[0]
C=c[2]
D=c[157]
A.agT.prototype={
p(d){var x,w,v,u,t,s,r=this,q=null,p=r.d,o=p||!1?1:0.5,n=$.cs(),m=r.r
if(p)x=r.c.a
else x=0
w=B.t(d).p3.y.c0(24*m)
v=15*m
u=B.t(d).ax.f
u=B.R(102,u.gk(u)>>>16&255,u.gk(u)>>>8&255,u.gk(u)&255)
t=B.t(d)
s=B.t(d).ax.f
o=B.cW(!1,B.a2(q,new A.VS(x,new A.aIW(r.w,new A.aKu(v,v),new A.aKt(B.R(51,s.gk(s)>>>16&255,s.gk(s)>>>8&255,s.gk(s)&255),t.ax.f,!0,u),new A.aX4(w)),new A.b3P(r),new A.b3Q(r),q),C.i,q,q,q,q,n*0.132*m,q,q,q,q,q,n*0.132*m),o)
return new B.bT(C.Y,q,C.S,C.w,B.a([o,p?B.A(q,q,q):B.bF(q,B.a2(q,q,C.i,C.D,q,q,q,n*0.132*m,q,q,q,q,q,n*0.132*m),C.n,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b3R(r),q,q,q,q,q,q,q,!1,C.E)],y.p),q)}}
A.aIW.prototype={
gJ6(){var x=this.x
x=x==null?null:x.a
return x==null?this.gpL()/4:x},
gpL(){var x=this.x
x=x==null?null:x.b
return x==null?15:x},
ga7g(){var x=this.gpL()
return x*1.4},
gaHK(){var x=this.y
if(x!=null){x=x.b
x=B.a([x,x],y.O)
return x}return null},
gaHL(){return null},
gbh0(){var x=this.gaHK()
return x==null?D.agK:x}}
A.aKu.prototype={}
A.aKt.prototype={}
A.aX4.prototype={}
A.VS.prototype={
gv9(d){return A.cx1((this.c-0)/1,240)},
a0(){return new A.a10(null,null,C.m)}}
A.a10.prototype={
ah(){var x,w=this
w.aq()
x=w.a
x.toString
w.y=150
w.z=240
w.ay=B.hf(x.f)
if(!w.a.f.d)return
w.aaf(0)},
b1(d){var x=this,w=d.gv9(d),v=x.a
if(w!==v.gv9(v)){w=x.x
w=w==null?null:C.e.b0(w,4)
v=x.a
v=w!==C.e.b0(v.gv9(v),4)
w=v}else w=!1
if(w)x.aaf(0)
x.bb(d)},
aaf(d){var x,w,v=this,u=v.a
if(!u.f.d||!1){v.a_p()
v.a03()
return}x=v.ax
if(x==null)x=v.ax=new A.bjy(v,1,0,100)
w=u.c
x.b2Y(0,u.gv9(u),w,v.r,v.w,new A.bCW(v))},
p(d){var x,w,v=this
if(v.f!=null){x=v.ay
x===$&&B.b()
x=x!==B.hf(v.a.f)}else x=!0
if(x){v.ay=B.hf(v.a.f)
v.a_p()}x=B.E([D.axI,new B.dP(new A.bCY(v),new A.bCZ(),y.e)],y.n,y.s)
w=v.as
v.a.toString
return new B.nA(v.aFh(w,new B.a_(150,150)),x,null,!1,null)},
n(){var x=this.at
if(x!=null){x=x.r
x===$&&B.b()
x.n()}x=this.ax
if(x!=null)x.gDM().n()
this.aC3()},
agF(d){var x,w,v,u,t=this,s=t.x
if(s==null){x=t.a
s=x.gv9(x)}x=t.r
if(x!=null){w=t.a
if(x!==w.gv9(w)){t.Q=null
x=t.a
s=x.gv9(x)}}x=t.y
x===$&&B.b()
w=t.z
w===$&&B.b()
v=t.x=A.cu_(w,!1,s,t.Q,x)
if(v<0.5)v=0.5
u=t.a
t.f=new A.aqm(v,u.f,x,w,null)
t.r=u.gv9(u)
t.w=t.a.c},
a_p(){return this.agF(!1)},
a03(){var x,w,v=this,u=v.a
u.toString
x=v.e
if(!x){x=v.x
x.toString
w=v.z
w===$&&B.b()
u.r.$1(A.c5o(A.c3N(x,w),0,100))}},
aFh(d,e){var x
if(d!=null){x=new B.bu(new Float64Array(16))
x.dl()
x.IU(d*5*3.141592653589793/6)
return B.oT(D.abs,this.a9D(e),x,!0)}else return this.a9D(e)},
a9D(d){var x=null,w=this.f
return B.fI(B.a2(x,this.aEX(),C.i,x,x,x,x,d.b,x,x,x,x,x,d.a),x,x,w,C.M)},
aEX(){var x,w,v,u=this.a
u.toString
x=this.x
x.toString
w=this.z
w===$&&B.b()
v=u.y.$1(A.c5o(A.c3N(x,w),0,100))
return v},
aeW(d){var x
if(!this.d)return
x=this.f
if((x==null?null:x.r)==null)return
this.adr(d,!1)},
aU7(d){this.adr(d,!0)
this.a.toString
this.d=!1},
adr(d,e){var x,w,v,u=this,t=u.f
if((t==null?null:t.r)==null)return
x=y.x.a(u.c.gal()).jy(d)
w=u.a.f.gpL()>=25?u.a.f.gpL():25
t=u.f
v=t.r
v.toString
t=t.w
t===$&&B.b()
if(A.c4V(x,v,t,w)){t=u.f.r
t.toString
u.Q=A.c3Z(t,x)
u.a.toString
u.agF(!1)
u.a03()
u.S(new A.bCX())}},
aU5(d){var x,w,v,u,t,s,r,q=this
if(q.f!=null){q.a.toString
x=!1}else x=!0
if(x)return!1
w=y.x.a(q.c.gal()).jy(d)
x=q.y
x===$&&B.b()
v=q.z
v===$&&B.b()
u=q.f.r
u.toString
u=A.c3Z(u,w)
t=q.x
s=q.a
s.toString
if(!A.cwd(v,!1,t,x,u))return!1
r=s.f.gpL()>=25?q.a.f.gpL():25
x=q.f
v=x.r
v.toString
x=x.w
x===$&&B.b()
if(A.c4V(w,v,x,r)){q.d=!0
q.a.toString
q.aeW(d)}else q.d=!1
return q.d}}
A.aqm.prototype={
a9(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=e.a,n=o/2,m=e.b/2,l=q.c
q.w=Math.min(n,m)-l.gpL()*0.5
q.r=new B.r(n,m)
o=0+o
l.gaHL()
n=$.ax()
x=n.aN()
x.sqc(C.ih)
x.sbd(0,C.a7)
x.sdz(l.gJ6())
m=l.y
m=m==null?p:m.a
x.sR(0,m==null?D.a3T:m)
q.alN(d,!0,x,e,!1)
q.b8z(d,e)
m=l.y!=null||p
w=m===!0
w
w
w
v=l.gbh0()
u=n.aN()
u.sq5(new B.lv(C.es,C.e5,C.m1,v,p,p).PN(0,new B.N(0,0,o,o)))
u.sqc(C.ih)
u.sbd(0,C.a7)
u.sdz(l.gpL())
q.alM(d,u,e)
t=n.aN()
t.sR(0,C.t)
o=q.r
n=q.w
m=0.017453292519943295*(-1.5707963267948966+q.d+q.b+1.5)
s=o.a
r=Math.cos(m)
o=o.b
m=Math.sin(m)
l=l.gpL()
d.fR(new B.r(s+n*r,o+n*m),l/5,t)},
alN(d,e,f,g,h){var x,w=this,v=e?0:w.e-w.b,u=w.r
u.toString
x=w.w
x===$&&B.b()
x=B.nB(u,x)
d.a2d(x,0.017453292519943295*w.d,0.017453292519943295*(w.e+-v),!1,f)},
alM(d,e,f){return this.alN(d,!1,e,f,!1)},
b8z(d,e){var x,w,v,u=this.c,t=Math.max(1,C.e.P(u.ga7g()-u.gpL(),10)),s=Math.min(1,0.2),r=Math.max(1,C.e.cB(u.ga7g()-u.gpL(),t)),q=s/r,p=$.ax().aN()
p.sqc(C.ih)
p.sbd(0,C.a7)
for(x=u.y,u=u.x,w=1;w<=r;++w){v=u==null?null:u.b
if(v==null)v=15
p.sdz(v+w*t)
v=x==null?null:x.z
if(v==null)v=D.a3w
v=v.a
p.sR(0,B.R(C.e.aa(255*(s-q*(w-1))),v>>>16&255,v>>>8&255,v&255))
this.alM(d,p,e)}},
fL(d){return!0}}
A.qs.prototype={
xv(d){var x=this
if(x.at.$1(d.gcT(d))){x.aws(d.gdk())
x.ap(0,C.cX)}else x.m4(d.gdk())},
kC(d){if(y.A.b(d))this.ax.$1(d.gcT(d))
if(y.E.b(d)){this.ay.$1(d.gcT(d))
this.m4(d.gdk())}},
xU(d){}}
A.a3i.prototype={
n(){var x=this,w=x.ba$
if(w!=null)w.J(0,x.gfb())
x.ba$=null
x.aE()},
c2(){this.cW()
this.cH()
this.fc()}}
A.bjy.prototype={
gDM(){var x=null,w=this.f
return w===$?this.f=B.bD(x,x,0,x,1,x,this.a):w},
b2Y(d,e,f,g,h,i){var x,w,v,u,t,s=this
s.r=!1
x=h==null?s.c:h
w=(s.d-s.c)/100
x=w!==0?C.e.cB(Math.abs(f-x),w)*15:0
v=C.c.aK(s.b*x)
s.gDM().e=B.ag(0,0,0,v,0,0)
u=B.bX(C.cH,s.gDM(),null)
x=g==null?0:g
t=y.t
u.X(0,new A.bjz(s,i))
u.ii(new A.bjA(s))
s.e=new B.az(u,new B.aV(x,e,t),t.i("az<aN.T>"))
s.gDM().bq(0)}}
var z=a.updateTypes(["~(r)","J(r)","qs()","~(qs)","~(cF)"])
A.b3Q.prototype={
$1(d){var x=null,w=C.c.m(C.e.aa(d))
return new B.cH(C.p,x,x,B.K(w+"%",x,x,x,x,x,x,x,B.a6(x,x,x,x,x,x,x,x,x,x,x,18*this.a.r,x,x,x,x,x,!0,x,x,x,x,x,x,x,x),C.v,x,x),x)},
$S:933}
A.b3P.prototype={
$1(d){var x=this.a,w=x.c
w.sk(0,C.e.aa(d))
w.a_()
x=x.z
if(x!=null)x.$0()},
$S:96}
A.b3R.prototype={
$0(){},
$S:0}
A.bCW.prototype={
$2(d,e){var x=this.a
x.e=!e
x.S(new A.bCV(x,e,d))},
$S:934}
A.bCV.prototype={
$0(){if(!this.b){var x=this.a
x.x=this.c
x.a_p()
x.a03()}},
$S:0}
A.bCY.prototype={
$0(){var x=this.a,w=y.S,v=B.ez(w)
return new A.qs(x.gaU4(),x.gaU9(),x.gaU6(),B.q(w,y.o),v,null,null,B.Fl(),B.q(w,y.z))},
$S:z+2}
A.bCZ.prototype={
$1(d){},
$S:z+3}
A.bCX.prototype={
$0(){},
$S:0}
A.bjz.prototype={
$0(){var x,w=this.a,v=w.e
v===$&&B.b()
x=v.a
this.b.$2(v.b.ag(0,x.gk(x)),w.r)},
$S:0}
A.bjA.prototype={
$1(d){var x
if(d===C.P){x=this.a
x.r=!0
x=x.gDM()
x.sk(0,x.a)}},
$S:11};(function aliases(){var x=A.a3i.prototype
x.aC3=x.n})();(function installTearOffs(){var x=a._instance_1u
var w
x(w=A.a10.prototype,"gaU9","aeW",0)
x(w,"gaU6","aU7",0)
x(w,"gaU4","aU5",1)
x(A.qs.prototype,"gtI","kC",4)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.agT,B.Q)
v(B.cw,[A.b3Q,A.b3P,A.bCZ,A.bjA])
v(B.cZ,[A.b3R,A.bCV,A.bCY,A.bCX,A.bjz])
v(B.T,[A.aIW,A.aKu,A.aKt,A.aX4,A.bjy])
w(A.VS,B.S)
w(A.a3i,B.V)
w(A.a10,A.a3i)
w(A.bCW,B.dj)
w(A.aqm,B.oe)
w(A.qs,B.Db)
x(A.a3i,B.e4)})()
B.cB(b.typeUniverse,JSON.parse('{"agT":{"Q":[],"d":[]},"VS":{"S":[],"d":[]},"qs":{"es":[],"fh":[]},"a10":{"V":["VS"]},"aqm":{"aU":[]}}'))
var y=(function rtii(){var x=B.B
return{o:x("xH"),e:x("dP<qs>"),s:x("re<es>"),O:x("D<X>"),p:x("D<d>"),z:x("mq"),A:x("rE"),E:x("oG"),x:x("O"),t:x("aV<Y>"),n:x("id"),S:x("v")}})();(function constants(){var x=a.makeConstList
D.a3w=new B.X(4281096128)
D.a3T=new B.X(4292656891)
D.abs=new B.C9(0,0)
D.a3q=new B.X(4280156219)
D.a42=new B.X(4293656714)
D.a3F=new B.X(4284646874)
D.agK=B.a(x([D.a3q,D.a42,D.a3F]),y.O)
D.axI=B.bq("qs")})()}
$__dart_deferred_initializers__["Wf2WvLgMs/Jw7gGxzm2Ue2c7V5w="] = $__dart_deferred_initializers__.current
