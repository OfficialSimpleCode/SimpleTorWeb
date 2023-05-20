self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bN8(d,e){d.K(0,new C.bCR(e))},
bNQ(d,e,f,g){return A.rR(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bNQ(b1,b2){if(b1===1){r=b2
t=s}while(true)$async$outer:switch(t){case 0:if(x==null){t=1
break}if(x.Q&&A.bZK(x,w.x)){$.b0().aC(B.P,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=x.alK(w.x)
if(q){$.b0().aC(B.P,"This day is closin by the worker",null,null)
t=1
break}p=A.P("dd-MM-yyyy",null).N(w.x)
o=A.azq(x.a5o(w.x))
n=A.azq(x.k2.h(0,p))
m=A.bZy(p,x.k3,null,!1)
l=B.b.a3(B.b.a3(n,A.bYF(x,p,v,u)),m)
if(x.k2.h(0,p)!=null&&n.length===0){$.b0().aC(B.P,"Free day don't generate times",null,null)
t=1
break}B.b.jr(l)
B.b.jr(o)
k=A.ajG(w.Q).Q.a
j=J.jw(k,y.e)
for(i=0;i<k;++i)j[i]=0
h=C.cpb(new A.D(Date.now(),!1),!0)
q=y.f,a0=0,a1=0
case 4:if(!(a1<o.length)){t=6
break}a2=o[a1]
a3=o[a1+1]
a4=A.P("HH:mm",null).N(new A.D(Date.now(),!1))
a5=A.P("dd-MM-yyyy",null).N(new A.D(Date.now(),!1))
a6=a2.aQ(A.P("HH:mm",null).bL(a4,!1,!1))
if(p===a5&&a6){switch(A.Ed(h,h,a2,a3)){case"BEFORE":$.b0().aC(B.P,"Alg duration status - BEFORE",null,null)
t=5
break $async$outer
case"AFTER":$.b0().aC(B.P,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.b0().aC(B.P,"Alg duration status - STRIKE",null,null)
break}a2=h}a7=A.bZo(w,a2)
case 7:if(!(a5=a7.gaI(a7),a5=q.a(J.Y(a5.b.$1(J.vb(a5.a)),"start")),a8=a7.gaI(a7),!a5.u(0,J.Y(a8.b.$1(J.vb(a8.a)),"duration")).aB(a3))){t=8
break}++a0
if(a0>500){$.b0().aC(B.a_,"Infinity loop in times algorited - stopping",null,null)
t=8
break}a9=A.bNJ(j,a7,l)
a5=a7.gaI(a7)
b0=C.cp4(q.a(J.Y(a5.b.$1(J.hx(a5.a)),"start")),l,j,x.x1)
t=a9===0?9:11
break
case 9:$.b0().aC(B.P,"generate new val -> "+a0,null,null)
a5=a7.gaI(a7)
t=12
return q.a(J.Y(a5.b.$1(J.hx(a5.a)),"start"))
case 12:C.bN8(a7,b0)
t=10
break
case 11:if(l.length-1<B.b.gaa(j)+1)C.bN8(a7,b0)
else C.bN8(a7,a9)
case 10:t=7
break
case 8:case 5:a1+=2
t=4
break
case 6:case 3:case 1:return A.rE()
case 2:return A.rF(r)}}},y.f)},
cp4(d,e,f,g){var x,w,v,u=d.u(0,A.aq(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.aB(d)&&w.aQ(u))return B.c.S(v.eU(d).a,6e7)
return g},
cpb(d,e){var x=A.nb(d),w=B.e.dB(x/10),v=B.e.fA(B.c.a5(x,10)/5),u=A.ad(1970,1,1,A.lj(d),w*10+v*5,0,0,!1)
if(!A.a5(u))A.w(A.a8(u))
return new A.D(u,!1)},
bCR:function bCR(d){this.a=d},
ch7(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.ad(e,f,g,h,i,j,k+B.e.a7(l/1000),!0)
if(!A.a5(s))A.w(A.a8(s))
x=d.H3(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.H3(w-1)
else{w=x.c
if(v>=w)x=d.H3(w)}s-=x.a.a}w=A.On(A.aq(0,0,0,s,0,0).a,!0)
u=w.oi()
t=$.Eo()
w=d===t?B.tX:d.H3(w.gd4()).a
return new A.oh(d===t?u:u.u(0,A.aq(0,0,0,w.a,0,0)),u,d,w)}},J,A,B
C=a.updateHolder(c[84],C)
J=c[1]
A=c[0]
B=c[2]
var z=a.updateTypes([])
C.bCR.prototype={
$2(d,e){var x=J.U(e)
x.j(e,"start",y.f.a(x.h(e,"start")).u(0,A.aq(0,0,0,0,this.a,0)))},
$S:32};(function inheritance(){var x=a.inherit
x(C.bCR,A.di)})()
var y={f:A.z("D"),e:A.z("v")}}
$__dart_deferred_initializers__["STOabCYfDSX3tEmjr/Iyzup12Os="] = $__dart_deferred_initializers__.current
