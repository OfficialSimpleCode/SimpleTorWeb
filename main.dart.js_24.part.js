self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bEX(d,e){d.P(0,new C.bue(e))},
bFs(d,e){return A.rg(function(){var x=d,w=e
var v=0,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,a0,a1,a2,a3,a4,a5,a6
return function $async$bFs(a7,a8){if(a7===1){t=a8
v=u}while(true)$async$outer:switch(v){case 0:if(x==null){v=1
break}if(x.Q&&A.bQO(x,w.e)){$.aY().aA(B.P,"Holiday is free day for this worker -> don't generate times",null,null)
v=1
break}s=A.a1("dd-MM-yyyy",null).a2(0,w.e)
r=A.at1(x.a1o(w.e))
q=A.at1(x.go.h(0,s))
p=A.bQC(s,x.id,null,!1)
o=B.b.a3(B.b.a3(q,A.bPE(x,s,!1,null)),p)
if(x.go.h(0,s)!=null&&q.length===0){$.aY().aA(B.P,"Free day don't generate times",null,null)
v=1
break}B.b.j4(o)
B.b.j4(r)
n=A.afI(w.w).z.a
m=J.jW(n,y.e)
for(l=0;l<n;++l)m[l]=0
k=C.cff(new A.D(Date.now(),!1),!0)
j=y.f,i=0,h=0
case 3:if(!(h<r.length)){v=5
break}g=r[h]
f=r[h+1]
a0=A.a1("HH:mm",null).a2(0,new A.D(Date.now(),!1))
a1=A.a1("dd-MM-yyyy",null).a2(0,new A.D(Date.now(),!1))
a2=g.aK(A.a1("HH:mm",null).cI(a0,!1,!1))
if(s===a1&&a2){switch(A.D0(k,k,g,f)){case"BEFORE":$.aY().aA(B.P,"Alg duration status - BEFORE",null,null)
v=4
break $async$outer
case"AFTER":$.aY().aA(B.P,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.aY().aA(B.P,"Alg duration status - STRIKE",null,null)
break}g=k}a3=A.bQs(w,g)
case 6:if(!(a1=a3.gaH(a3),a1=j.a(J.X(a1.b.$1(J.D9(a1.a)),"start")),a4=a3.gaH(a3),!a1.C(0,J.X(a4.b.$1(J.D9(a4.a)),"duration")).aB(f))){v=7
break}++i
if(i>500){$.aY().aA(B.a5,"Infinity loop in times algorited - stopping",null,null)
v=7
break}a5=A.bFo(m,a3,o)
a1=a3.gaH(a3)
a6=C.cfa(j.a(J.X(a1.b.$1(J.l5(a1.a)),"start")),o,m,x.ry)
v=a5===0?8:10
break
case 8:$.aY().aA(B.P,"generate new val -> "+i,null,null)
a1=a3.gaH(a3)
v=11
return j.a(J.X(a1.b.$1(J.l5(a1.a)),"start"))
case 11:C.bEX(a3,a6)
v=9
break
case 10:if(o.length-1<B.b.gad(m)+1)C.bEX(a3,a6)
else C.bEX(a3,a5)
case 9:v=6
break
case 7:case 4:h+=2
v=3
break
case 5:case 1:return A.r4()
case 2:return A.r5(t)}}},y.f)},
cfa(d,e,f,g){var x,w,v,u=d.C(0,A.au(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.aB(d)&&w.aK(u))return B.c.S(v.fb(d).a,6e7)
return g},
cff(d,e){var x=A.lA(d),w=B.e.dt(x/10),v=B.e.hd(B.c.a5(x,10)/5),u=A.aa(1970,1,1,A.k_(d),w*10+v*5,0,0,!1)
if(!A.a6(u))A.w(A.a7(u))
return new A.D(u,!1)},
bue:function bue(d){this.a=d},
c7u(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.aa(e,f,g,h,i,j,k+B.e.ab(l/1000),!0)
if(!A.a6(s))A.w(A.a7(s))
x=d.ER(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.ER(w-1)
else{w=x.c
if(v>=w)x=d.ER(w)}s-=x.a.a}w=A.a4A(A.au(0,0,0,s,0,0).a,!0)
u=w.uD()
t=$.D5()
w=d===t?B.tc:d.ER(w.gcO()).a
return new A.nB(d===t?u:u.C(0,A.au(0,0,0,w.a,0,0)),u,d,w)}},J,A,D,B
C=a.updateHolder(c[68],C)
J=c[1]
A=c[0]
D=c[85]
B=c[2]
var z=a.updateTypes([])
C.bue.prototype={
$2(d,e){var x=J.a0(e)
x.m(e,"start",y.f.a(x.h(e,"start")).C(0,A.au(0,0,0,0,this.a,0)))},
$S:34};(function inheritance(){var x=a.inherit
x(C.bue,A.df)})()
var y={f:A.F("D"),e:A.F("u")};(function constants(){D.a7I=new A.b8(864e8)})()}
$__dart_deferred_initializers__["zAxHwRouUqbYBtJbAlcPclGcT+4="] = $__dart_deferred_initializers__.current
