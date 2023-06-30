self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
c4S(d,e){d.A(0,new C.bTW(e))},
c5D(d,e,f,g){return A.rD(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8
return function $async$c5D(a9,b0){if(a9===1){r=b0
t=s}while(true)$async$outer:switch(t){case 0:if(x.y&&A.cil(x,w.ch)){$.bk().aV(B.a0,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=x.apH(w.ch)
if(q){$.bk().aV(B.a0,"This day is closin by the worker",null,null)
t=1
break}p=A.F("dd-MM-yyyy",null).F(w.ch)
o=A.c55(x.a8N(w.ch))
n=A.cha(x,p,v,u,null)
B.b.iv(n)
B.b.iv(o)
m=A.apz(w.cy).ax.a
l=J.iA(m,y.e)
for(k=0;k<m;++k)l[k]=0
j=C.cK4(new A.C(Date.now(),!1),!0)
q=y.f,i=0,h=0
case 4:if(!(h<o.length)){t=6
break}a0=o[h]
a1=o[h+1]
a2=A.F("HH:mm",null).F(new A.C(Date.now(),!1))
a3=A.F("dd-MM-yyyy",null).F(new A.C(Date.now(),!1))
a4=a0.az(A.F("HH:mm",null).aS(a2,!1,!1))
if(p===a3&&a4){switch(A.Bo(j,j,a0,a1)){case"BEFORE":$.bk().aV(B.a0,"Alg duration status - BEFORE",null,null)
t=5
break $async$outer
case"AFTER":$.bk().aV(B.a0,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.bk().aV(B.a0,"Alg duration status - STRIKE",null,null)
break}a0=j}a5=A.ci_(w,a0)
case 7:if(!(a3=a5.gar(a5),a3=q.a(J.a_(a3.b.$1(J.x8(a3.a)),"start")),a6=a5.gar(a5),!a3.q(0,J.a_(a6.b.$1(J.x8(a6.a)),"duration")).ag(a1))){t=8
break}++i
if(i>500){$.bk().aV(B.aa,"Infinity loop in times algorited - stopping",null,null)
t=8
break}a7=A.c5w(l,a5,n)
a3=a5.gar(a5)
a8=C.cJY(q.a(J.a_(a3.b.$1(J.fb(a3.a)),"start")),n,l,x.ry)
t=a7===0?9:11
break
case 9:a3=a5.gar(a5)
t=12
return q.a(J.a_(a3.b.$1(J.fb(a3.a)),"start"))
case 12:C.c4S(a5,a8)
t=10
break
case 11:if(n.length-1<B.b.gac(l)+1)C.c4S(a5,a8)
else C.c4S(a5,a7)
case 10:t=7
break
case 8:case 5:h+=2
t=4
break
case 6:case 3:case 1:return A.rv()
case 2:return A.rw(r)}}},y.f)},
cJY(d,e,f,g){var x,w,v,u=d.q(0,A.a4(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.ag(d)&&w.az(u))return B.c.O(v.e1(d).a,6e7)
return g},
cK4(d,e){var x=A.mp(d),w=B.e.d3(x/10),v=B.e.ft(B.c.a7(x,10)/5),u=A.ac(1970,1,1,A.kl(d),w*10+v*5,0,0,!1)
if(!A.a6(u))A.x(A.a9(u))
return new A.C(u,!1)},
bTW:function bTW(d){this.a=d},
cBp(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.ac(e,f,g,h,i,j,k+B.e.a9(l/1000),!0)
if(!A.a6(s))A.x(A.a9(s))
x=d.IO(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.IO(w-1)
else{w=x.c
if(v>=w)x=d.IO(w)}s-=x.a.a}w=A.If(A.a4(0,0,0,s,0,0).a,!0)
u=w.kt()
t=$.GV()
w=d===t?B.uT:d.IO(w.gd4()).a
return new A.pK(d===t?u:u.q(0,A.a4(0,0,0,w.a,0,0)),u,d,w)}},J,A,B
C=a.updateHolder(c[126],C)
J=c[1]
A=c[0]
B=c[2]
var z=a.updateTypes([])
C.bTW.prototype={
$2(d,e){var x=J.a0(e)
x.j(e,"start",y.f.a(x.h(e,"start")).q(0,A.a4(0,0,0,0,this.a,0)))},
$S:108};(function inheritance(){var x=a.inherit
x(C.bTW,A.cp)})()
var y={f:A.y("C"),e:A.y("u")}}
$__dart_deferred_initializers__["t8+vtckiSAslO0gDwBgzDzdFrWs="] = $__dart_deferred_initializers__.current
