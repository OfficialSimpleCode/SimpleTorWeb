self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bLH(d,e){d.K(0,new C.bBq(e))},
bMo(d,e,f,g){return A.rL(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bMo(b1,b2){if(b1===1){r=b2
t=s}while(true)$async$outer:switch(t){case 0:if(x==null){t=1
break}if(x.Q&&A.bYh(x,w.x)){$.b0().aC(B.R,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=x.ald(w.x)
if(q){$.b0().aC(B.R,"This day is closin by the worker",null,null)
t=1
break}p=A.P("dd-MM-yyyy",null).O(w.x)
o=A.ayM(x.a51(w.x))
n=A.ayM(x.k2.h(0,p))
m=A.bY5(p,x.k3,null,!1)
l=B.b.a2(B.b.a2(n,A.bXc(x,p,v,u)),m)
if(x.k2.h(0,p)!=null&&n.length===0){$.b0().aC(B.R,"Free day don't generate times",null,null)
t=1
break}B.b.jm(l)
B.b.jm(o)
k=A.aj8(w.Q).Q.a
j=J.kA(k,y.e)
for(i=0;i<k;++i)j[i]=0
h=C.cnG(new A.C(Date.now(),!1),!0)
q=y.f,a0=0,a1=0
case 4:if(!(a1<o.length)){t=6
break}a2=o[a1]
a3=o[a1+1]
a4=A.P("HH:mm",null).O(new A.C(Date.now(),!1))
a5=A.P("dd-MM-yyyy",null).O(new A.C(Date.now(),!1))
a6=a2.aO(A.P("HH:mm",null).bJ(a4,!1,!1))
if(p===a5&&a6){switch(A.E2(h,h,a2,a3)){case"BEFORE":$.b0().aC(B.R,"Alg duration status - BEFORE",null,null)
t=5
break $async$outer
case"AFTER":$.b0().aC(B.R,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.b0().aC(B.R,"Alg duration status - STRIKE",null,null)
break}a2=h}a7=A.bXW(w,a2)
case 7:if(!(a5=a7.gaH(a7),a5=q.a(J.Y(a5.b.$1(J.v4(a5.a)),"start")),a8=a7.gaH(a7),!a5.u(0,J.Y(a8.b.$1(J.v4(a8.a)),"duration")).aB(a3))){t=8
break}++a0
if(a0>500){$.b0().aC(B.a_,"Infinity loop in times algorited - stopping",null,null)
t=8
break}a9=A.bMh(j,a7,l)
a5=a7.gaH(a7)
b0=C.cnz(q.a(J.Y(a5.b.$1(J.hu(a5.a)),"start")),l,j,x.x1)
t=a9===0?9:11
break
case 9:$.b0().aC(B.R,"generate new val -> "+a0,null,null)
a5=a7.gaH(a7)
t=12
return q.a(J.Y(a5.b.$1(J.hu(a5.a)),"start"))
case 12:C.bLH(a7,b0)
t=10
break
case 11:if(l.length-1<B.b.ga9(j)+1)C.bLH(a7,b0)
else C.bLH(a7,a9)
case 10:t=7
break
case 8:case 5:a1+=2
t=4
break
case 6:case 3:case 1:return A.ry()
case 2:return A.rz(r)}}},y.f)},
cnz(d,e,f,g){var x,w,v,u=d.u(0,A.aq(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.aB(d)&&w.aO(u))return B.c.S(v.eS(d).a,6e7)
return g},
cnG(d,e){var x=A.n6(d),w=B.e.dw(x/10),v=B.e.ft(B.c.a4(x,10)/5),u=A.ab(1970,1,1,A.le(d),w*10+v*5,0,0,!1)
if(!A.a4(u))A.w(A.a7(u))
return new A.C(u,!1)},
bBq:function bBq(d){this.a=d},
cfC(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.ab(e,f,g,h,i,j,k+B.e.a7(l/1000),!0)
if(!A.a4(s))A.w(A.a7(s))
x=d.GR(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.GR(w-1)
else{w=x.c
if(v>=w)x=d.GR(w)}s-=x.a.a}w=A.NZ(A.aq(0,0,0,s,0,0).a,!0)
u=w.ob()
t=$.Ec()
w=d===t?B.tL:d.GR(w.gd1()).a
return new A.oc(d===t?u:u.u(0,A.aq(0,0,0,w.a,0,0)),u,d,w)}},J,A,B
C=a.updateHolder(c[80],C)
J=c[1]
A=c[0]
B=c[2]
var z=a.updateTypes([])
C.bBq.prototype={
$2(d,e){var x=J.T(e)
x.j(e,"start",y.f.a(x.h(e,"start")).u(0,A.aq(0,0,0,0,this.a,0)))},
$S:31};(function inheritance(){var x=a.inherit
x(C.bBq,A.dk)})()
var y={f:A.A("C"),e:A.A("v")}}
$__dart_deferred_initializers__["oAzHBLMj9QM5TlKGpIMYZBMNElY="] = $__dart_deferred_initializers__.current
