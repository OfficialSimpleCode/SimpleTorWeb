self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bSb(d,e){d.H(0,new C.bHB(e))},
bST(d,e,f,g){return A.tk(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bST(b1,b2){if(b1===1){r=b2
t=s}while(true)$async$outer:switch(t){case 0:if(x.as&&A.c45(x,w.Q)){$.b1().aE(B.P,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=x.an7(w.Q)
if(q){$.b1().aE(B.P,"This day is closin by the worker",null,null)
t=1
break}p=A.N("dd-MM-yyyy",null).M(w.Q)
o=A.aBx(x.a6D(w.Q))
n=A.aBx(x.ok.h(0,p))
m=A.c3U(p,x.p1,null,!1)
l=B.b.a4(B.b.a4(n,A.c2Y(x,p,v,u,null)),m)
if(x.ok.h(0,p)!=null&&n.length===0){$.b1().aE(B.P,"Free day don't generate times",null,null)
t=1
break}B.b.jA(l)
B.b.jA(o)
k=A.alv(w.ax).as.a
j=J.jk(k,y.e)
for(i=0;i<k;++i)j[i]=0
h=C.cuT(new A.B(Date.now(),!1),!0)
q=y.f,a0=0,a1=0
case 4:if(!(a1<o.length)){t=6
break}a2=o[a1]
a3=o[a1+1]
a4=A.N("HH:mm",null).M(new A.B(Date.now(),!1))
a5=A.N("dd-MM-yyyy",null).M(new A.B(Date.now(),!1))
a6=a2.aF(A.N("HH:mm",null).bd(a4,!1,!1))
if(p===a5&&a6){switch(A.A_(h,h,a2,a3)){case"BEFORE":$.b1().aE(B.P,"Alg duration status - BEFORE",null,null)
t=5
break $async$outer
case"AFTER":$.b1().aE(B.P,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.b1().aE(B.P,"Alg duration status - STRIKE",null,null)
break}a2=h}a7=A.c3J(w,a2)
case 7:if(!(a5=a7.gaI(a7),a5=q.a(J.Z(a5.b.$1(J.vN(a5.a)),"start")),a8=a7.gaI(a7),!a5.u(0,J.Z(a8.b.$1(J.vN(a8.a)),"duration")).ap(a3))){t=8
break}++a0
if(a0>500){$.b1().aE(B.a2,"Infinity loop in times algorited - stopping",null,null)
t=8
break}a9=A.bSM(j,a7,l)
a5=a7.gaI(a7)
b0=C.cuN(q.a(J.Z(a5.b.$1(J.hI(a5.a)),"start")),l,j,x.y1)
t=a9===0?9:11
break
case 9:a5=a7.gaI(a7)
t=12
return q.a(J.Z(a5.b.$1(J.hI(a5.a)),"start"))
case 12:C.bSb(a7,b0)
t=10
break
case 11:if(l.length-1<B.b.gaa(j)+1)C.bSb(a7,b0)
else C.bSb(a7,a9)
case 10:t=7
break
case 8:case 5:a1+=2
t=4
break
case 6:case 3:case 1:return A.t7()
case 2:return A.t8(r)}}},y.f)},
cuN(d,e,f,g){var x,w,v,u=d.u(0,A.ai(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.ap(d)&&w.aF(u))return B.c.P(v.ek(d).a,6e7)
return g},
cuT(d,e){var x=A.nz(d),w=B.e.d9(x/10),v=B.e.fg(B.c.a5(x,10)/5),u=A.a9(1970,1,1,A.kZ(d),w*10+v*5,0,0,!1)
if(!A.a1(u))A.w(A.a5(u))
return new A.B(u,!1)},
bHB:function bHB(d){this.a=d},
cmJ(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.a9(e,f,g,h,i,j,k+B.e.a8(l/1000),!0)
if(!A.a1(s))A.w(A.a5(s))
x=d.HL(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.HL(w-1)
else{w=x.c
if(v>=w)x=d.HL(w)}s-=x.a.a}w=A.Pr(A.ai(0,0,0,s,0,0).a,!0)
u=w.ou()
t=$.Fj()
w=d===t?B.ua:d.HL(w.gdh()).a
return new A.oI(d===t?u:u.u(0,A.ai(0,0,0,w.a,0,0)),u,d,w)}},J,A,B
C=a.updateHolder(c[86],C)
J=c[1]
A=c[0]
B=c[2]
var z=a.updateTypes([])
C.bHB.prototype={
$2(d,e){var x=J.W(e)
x.j(e,"start",y.f.a(x.h(e,"start")).u(0,A.ai(0,0,0,0,this.a,0)))},
$S:41};(function inheritance(){var x=a.inherit
x(C.bHB,A.di)})()
var y={f:A.A("B"),e:A.A("v")}}
$__dart_deferred_initializers__["X37S9KgJOVRXCt03KNoKrx+umlQ="] = $__dart_deferred_initializers__.current
