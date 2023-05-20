self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bOf(d,e){d.L(0,new C.bE_(e))},
bOY(d,e,f,g){return A.rJ(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bOY(b1,b2){if(b1===1){r=b2
t=s}while(true)$async$outer:switch(t){case 0:if(x==null){t=1
break}if(x.Q&&A.bOL(x,w.x)){$.b1().aF(B.Q,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=x.amb(w.x)
if(q){$.b1().aF(B.Q,"This day is closin by the worker",null,null)
t=1
break}p=A.P("dd-MM-yyyy",null).N(w.x)
o=A.azM(x.TW(w.x))
n=A.azM(x.k2.h(0,p))
m=A.c_I(p,x.k3,null,!1)
l=B.b.a2(B.b.a2(n,A.bZO(x,p,v,u)),m)
if(x.k2.h(0,p)!=null&&n.length===0){$.b1().aF(B.Q,"Free day don't generate times",null,null)
t=1
break}B.b.jt(l)
B.b.jt(o)
k=A.ajT(w.Q).Q.a
j=J.ju(k,y.e)
for(i=0;i<k;++i)j[i]=0
h=C.cqD(new A.B(Date.now(),!1),!0)
q=y.f,a0=0,a1=0
case 4:if(!(a1<o.length)){t=6
break}a2=o[a1]
a3=o[a1+1]
a4=A.P("HH:mm",null).N(new A.B(Date.now(),!1))
a5=A.P("dd-MM-yyyy",null).N(new A.B(Date.now(),!1))
a6=a2.aP(A.P("HH:mm",null).bK(a4,!1,!1))
if(p===a5&&a6){switch(A.Ec(h,h,a2,a3)){case"BEFORE":$.b1().aF(B.Q,"Alg duration status - BEFORE",null,null)
t=5
break $async$outer
case"AFTER":$.b1().aF(B.Q,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.b1().aF(B.Q,"Alg duration status - STRIKE",null,null)
break}a2=h}a7=A.c_y(w,a2)
case 7:if(!(a5=a7.gaM(a7),a5=q.a(J.V(a5.b.$1(J.vd(a5.a)),"start")),a8=a7.gaM(a7),!a5.u(0,J.V(a8.b.$1(J.vd(a8.a)),"duration")).aC(a3))){t=8
break}++a0
if(a0>500){$.b1().aF(B.a0,"Infinity loop in times algorited - stopping",null,null)
t=8
break}a9=A.bOR(j,a7,l)
a5=a7.gaM(a7)
b0=C.cqw(q.a(J.V(a5.b.$1(J.hq(a5.a)),"start")),l,j,x.x1)
t=a9===0?9:11
break
case 9:$.b1().aF(B.Q,"generate new val -> "+a0,null,null)
a5=a7.gaM(a7)
t=12
return q.a(J.V(a5.b.$1(J.hq(a5.a)),"start"))
case 12:C.bOf(a7,b0)
t=10
break
case 11:if(l.length-1<B.b.gaa(j)+1)C.bOf(a7,b0)
else C.bOf(a7,a9)
case 10:t=7
break
case 8:case 5:a1+=2
t=4
break
case 6:case 3:case 1:return A.rw()
case 2:return A.rx(r)}}},y.f)},
cqw(d,e,f,g){var x,w,v,u=d.u(0,A.ap(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.aC(d)&&w.aP(u))return B.c.S(v.eZ(d).a,6e7)
return g},
cqD(d,e){var x=A.kN(d),w=B.e.dw(x/10),v=B.e.fI(B.c.a5(x,10)/5),u=A.ad(1970,1,1,A.jx(d),w*10+v*5,0,0,!1)
if(!A.a4(u))A.w(A.a7(u))
return new A.B(u,!1)},
bE_:function bE_(d){this.a=d}},J,A,B
C=a.updateHolder(c[81],C)
J=c[1]
A=c[0]
B=c[2]
var z=a.updateTypes([])
C.bE_.prototype={
$2(d,e){var x=J.S(e)
x.j(e,"start",y.f.a(x.h(e,"start")).u(0,A.ap(0,0,0,0,this.a,0)))},
$S:36};(function inheritance(){var x=a.inherit
x(C.bE_,A.ds)})()
var y={f:A.A("B"),e:A.A("v")}}
$__dart_deferred_initializers__["zZ8BWOAEwfD/fY3EfZ32iHbI8Aw="] = $__dart_deferred_initializers__.current
