self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bQz(d,e){d.H(0,new C.bG_(e))},
bRh(d,e,f,g){return A.tb(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bRh(b1,b2){if(b1===1){r=b2
t=s}while(true)$async$outer:switch(t){case 0:if(x==null){t=1
break}if(x.as&&A.c2o(x,w.z)){$.b1().aD(B.Q,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=x.amE(w.z)
if(q){$.b1().aD(B.Q,"This day is closin by the worker",null,null)
t=1
break}p=A.N("dd-MM-yyyy",null).M(w.z)
o=A.aAJ(x.a6b(w.z))
n=A.aAJ(x.ok.h(0,p))
m=A.c2c(p,x.p1,null,!1)
l=B.b.a3(B.b.a3(n,A.c1h(x,p,v,u,null)),m)
if(x.ok.h(0,p)!=null&&n.length===0){$.b1().aD(B.Q,"Free day don't generate times",null,null)
t=1
break}B.b.jz(l)
B.b.jz(o)
k=A.akP(w.at).as.a
j=J.jL(k,y.e)
for(i=0;i<k;++i)j[i]=0
h=C.ct2(new A.B(Date.now(),!1),!0)
q=y.f,a0=0,a1=0
case 4:if(!(a1<o.length)){t=6
break}a2=o[a1]
a3=o[a1+1]
a4=A.N("HH:mm",null).M(new A.B(Date.now(),!1))
a5=A.N("dd-MM-yyyy",null).M(new A.B(Date.now(),!1))
a6=a2.aG(A.N("HH:mm",null).bc(a4,!1,!1))
if(p===a5&&a6){switch(A.zJ(h,h,a2,a3)){case"BEFORE":$.b1().aD(B.Q,"Alg duration status - BEFORE",null,null)
t=5
break $async$outer
case"AFTER":$.b1().aD(B.Q,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.b1().aD(B.Q,"Alg duration status - STRIKE",null,null)
break}a2=h}a7=A.c21(w,a2)
case 7:if(!(a5=a7.gaH(a7),a5=q.a(J.Y(a5.b.$1(J.vC(a5.a)),"start")),a8=a7.gaH(a7),!a5.u(0,J.Y(a8.b.$1(J.vC(a8.a)),"duration")).ao(a3))){t=8
break}++a0
if(a0>500){$.b1().aD(B.a1,"Infinity loop in times algorited - stopping",null,null)
t=8
break}a9=A.bRa(j,a7,l)
a5=a7.gaH(a7)
b0=C.csX(q.a(J.Y(a5.b.$1(J.hF(a5.a)),"start")),l,j,x.y1)
t=a9===0?9:11
break
case 9:a5=a7.gaH(a7)
t=12
return q.a(J.Y(a5.b.$1(J.hF(a5.a)),"start"))
case 12:C.bQz(a7,b0)
t=10
break
case 11:if(l.length-1<B.b.gaa(j)+1)C.bQz(a7,b0)
else C.bQz(a7,a9)
case 10:t=7
break
case 8:case 5:a1+=2
t=4
break
case 6:case 3:case 1:return A.rZ()
case 2:return A.t_(r)}}},y.f)},
csX(d,e,f,g){var x,w,v,u=d.u(0,A.al(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.ao(d)&&w.aG(u))return B.c.P(v.ev(d).a,6e7)
return g},
ct2(d,e){var x=A.nw(d),w=B.e.d8(x/10),v=B.e.fb(B.c.a5(x,10)/5),u=A.a9(1970,1,1,A.lA(d),w*10+v*5,0,0,!1)
if(!A.a1(u))A.w(A.a5(u))
return new A.B(u,!1)},
bG_:function bG_(d){this.a=d},
ckY(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.a9(e,f,g,h,i,j,k+B.e.a8(l/1000),!0)
if(!A.a1(s))A.w(A.a5(s))
x=d.Hs(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.Hs(w-1)
else{w=x.c
if(v>=w)x=d.Hs(w)}s-=x.a.a}w=A.OZ(A.al(0,0,0,s,0,0).a,!0)
u=w.ot()
t=$.EW()
w=d===t?B.u6:d.Hs(w.gdi()).a
return new A.oF(d===t?u:u.u(0,A.al(0,0,0,w.a,0,0)),u,d,w)}},J,A,D,B
C=a.updateHolder(c[86],C)
J=c[1]
A=c[0]
D=c[112]
B=c[2]
var z=a.updateTypes([])
C.bG_.prototype={
$2(d,e){var x=J.V(e)
x.j(e,"start",y.f.a(x.h(e,"start")).u(0,A.al(0,0,0,0,this.a,0)))},
$S:39};(function inheritance(){var x=a.inherit
x(C.bG_,A.dj)})()
var y={f:A.A("B"),e:A.A("v")};(function constants(){D.dw=new A.b6(36e8)})()}
$__dart_deferred_initializers__["lRGdC3lmcrEEoVGuYqcBJ3U9Wcs="] = $__dart_deferred_initializers__.current
