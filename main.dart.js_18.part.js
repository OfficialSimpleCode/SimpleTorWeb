self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bSX(d,e){d.G(0,new C.bIf(e))},
bTC(d,e,f,g){return A.ts(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bTC(b1,b2){if(b1===1){r=b2
t=s}while(true)$async$outer:switch(t){case 0:if(x.ay&&A.c4S(x,w.at)){$.ba().aJ(B.T,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=x.anK(w.at)
if(q){$.ba().aJ(B.T,"This day is closin by the worker",null,null)
t=1
break}p=A.F("dd-MM-yyyy",null).K(w.at)
o=A.aBC(x.a7i(w.at))
n=A.aBC(x.R8.h(0,p))
m=A.c4G(p,x.RG,null,!1)
l=B.b.a4(B.b.a4(n,A.c3L(x,p,v,u,null)),m)
if(x.R8.h(0,p)!=null&&n.length===0){$.ba().aJ(B.T,"Free day don't generate times",null,null)
t=1
break}B.b.jA(l)
B.b.jA(o)
k=A.alB(w.ch).as.a
j=J.jn(k,y.e)
for(i=0;i<k;++i)j[i]=0
h=C.cvF(new A.z(Date.now(),!1),!0)
q=y.f,a0=0,a1=0
case 4:if(!(a1<o.length)){t=6
break}a2=o[a1]
a3=o[a1+1]
a4=A.F("HH:mm",null).K(new A.z(Date.now(),!1))
a5=A.F("dd-MM-yyyy",null).K(new A.z(Date.now(),!1))
a6=a2.az(A.F("HH:mm",null).aY(a4,!1,!1))
if(p===a5&&a6){switch(A.A7(h,h,a2,a3)){case"BEFORE":$.ba().aJ(B.T,"Alg duration status - BEFORE",null,null)
t=5
break $async$outer
case"AFTER":$.ba().aJ(B.T,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.ba().aJ(B.T,"Alg duration status - STRIKE",null,null)
break}a2=h}a7=A.c4v(w,a2)
case 7:if(!(a5=a7.gaH(a7),a5=q.a(J.Z(a5.b.$1(J.vT(a5.a)),"start")),a8=a7.gaH(a7),!a5.t(0,J.Z(a8.b.$1(J.vT(a8.a)),"duration")).an(a3))){t=8
break}++a0
if(a0>500){$.ba().aJ(B.a2,"Infinity loop in times algorited - stopping",null,null)
t=8
break}a9=A.bTv(j,a7,l)
a5=a7.gaH(a7)
b0=C.cvz(q.a(J.Z(a5.b.$1(J.hp(a5.a)),"start")),l,j,x.d0)
t=a9===0?9:11
break
case 9:a5=a7.gaH(a7)
t=12
return q.a(J.Z(a5.b.$1(J.hp(a5.a)),"start"))
case 12:C.bSX(a7,b0)
t=10
break
case 11:if(l.length-1<B.b.gac(j)+1)C.bSX(a7,b0)
else C.bSX(a7,a9)
case 10:t=7
break
case 8:case 5:a1+=2
t=4
break
case 6:case 3:case 1:return A.tf()
case 2:return A.tg(r)}}},y.f)},
cvz(d,e,f,g){var x,w,v,u=d.t(0,A.ag(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.an(d)&&w.az(u))return B.c.P(v.eg(d).a,6e7)
return g},
cvF(d,e){var x=A.mt(d),w=B.e.dc(x/10),v=B.e.fp(B.c.a6(x,10)/5),u=A.a9(1970,1,1,A.kk(d),w*10+v*5,0,0,!1)
if(!A.a1(u))A.w(A.a3(u))
return new A.z(u,!1)},
bIf:function bIf(d){this.a=d},
cnw(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.a9(e,f,g,h,i,j,k+B.e.aa(l/1000),!0)
if(!A.a1(s))A.w(A.a3(s))
x=d.I2(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.I2(w-1)
else{w=x.c
if(v>=w)x=d.I2(w)}s-=x.a.a}w=A.Pz(A.ag(0,0,0,s,0,0).a,!0)
u=w.kf()
t=$.Fr()
w=d===t?B.ud:d.I2(w.gd8()).a
return new A.oP(d===t?u:u.t(0,A.ag(0,0,0,w.a,0,0)),u,d,w)}},J,A,B
C=a.updateHolder(c[87],C)
J=c[1]
A=c[0]
B=c[2]
var z=a.updateTypes([])
C.bIf.prototype={
$2(d,e){var x=J.W(e)
x.j(e,"start",y.f.a(x.h(e,"start")).t(0,A.ag(0,0,0,0,this.a,0)))},
$S:42};(function inheritance(){var x=a.inherit
x(C.bIf,A.dj)})()
var y={f:A.B("z"),e:A.B("v")}}
$__dart_deferred_initializers__["3w0agGOcsHiNKQCmD36TiNKIDvo="] = $__dart_deferred_initializers__.current
