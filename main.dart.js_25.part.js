self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
bHj(d,e){d.O(0,new C.bwt(e))},
bHS(d,e,f,g){return A.yF(function(){var x=d,w=e,v=f,u=g
var t=0,s=2,r,q,p,o,n,m,l,k,j,i,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bHS(b1,b2){if(b1===1){r=b2
t=s}while(true)$async$outer:switch(t){case 0:if(x==null){t=1
break}if(x.Q&&A.bTl(x,w.x)){$.aY().aA(B.P,"Holiday is free day for this worker -> don't generate times",null,null)
t=1
break}q=A.a_("dd-MM-yyyy",null).a1(0,w.x)
p=A.aur(x.a2a(w.x))
o=A.aur(x.id.h(0,q))
n=A.bT7(q,x.k1,null,!1)
m=B.b.a4(B.b.a4(o,A.bS8(x,q,v,u)),n)
if(x.id.h(0,q)!=null&&o.length===0){$.aY().aA(B.P,"Free day don't generate times",null,null)
t=1
break}B.b.j6(m)
B.b.j6(p)
l=A.ah1(w.Q).z.a
k=J.jx(l,y.e)
for(j=0;j<l;++j)k[j]=0
i=C.ci9(new A.C(Date.now(),!1),!0)
h=y.f,a0=0,a1=0
case 3:if(!(a1<p.length)){t=5
break}a2=p[a1]
a3=p[a1+1]
a4=A.a_("HH:mm",null).a1(0,new A.C(Date.now(),!1))
a5=A.a_("dd-MM-yyyy",null).a1(0,new A.C(Date.now(),!1))
a6=a2.aL(A.a_("HH:mm",null).cR(a4,!1,!1))
if(q===a5&&a6){switch(A.DF(i,i,a2,a3)){case"BEFORE":$.aY().aA(B.P,"Alg duration status - BEFORE",null,null)
t=4
break $async$outer
case"AFTER":$.aY().aA(B.P,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.aY().aA(B.P,"Alg duration status - STRIKE",null,null)
break}a2=i}a7=A.bSY(w,a2)
case 6:if(!(a5=a7.gaG(a7),a5=h.a(J.Y(a5.b.$1(J.DO(a5.a)),"start")),a8=a7.gaG(a7),!a5.B(0,J.Y(a8.b.$1(J.DO(a8.a)),"duration")).aC(a3))){t=7
break}++a0
if(a0>500){$.aY().aA(B.a3,"Infinity loop in times algorited - stopping",null,null)
t=7
break}a9=A.bHN(k,a7,m)
a5=a7.gaG(a7)
b0=C.ci4(h.a(J.Y(a5.b.$1(J.lm(a5.a)),"start")),m,k,x.rx)
t=a9===0?8:10
break
case 8:$.aY().aA(B.P,"generate new val -> "+a0,null,null)
a5=a7.gaG(a7)
t=11
return h.a(J.Y(a5.b.$1(J.lm(a5.a)),"start"))
case 11:C.bHj(a7,b0)
t=9
break
case 10:if(m.length-1<B.b.gac(k)+1)C.bHj(a7,b0)
else C.bHj(a7,a9)
case 9:t=6
break
case 7:case 4:a1+=2
t=3
break
case 5:case 1:return A.yj()
case 2:return A.yk(r)}}},y.f)},
ci4(d,e,f,g){var x,w,v,u=d.B(0,A.ax(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.aC(d)&&w.aL(u))return B.c.R(v.f5(d).a,6e7)
return g},
ci9(d,e){var x=A.lQ(d),w=B.e.ds(x/10),v=B.e.hj(B.c.a5(x,10)/5),u=A.a9(1970,1,1,A.kd(d),w*10+v*5,0,0,!1)
if(!A.a4(u))A.u(A.a7(u))
return new A.C(u,!1)},
bwt:function bwt(d){this.a=d},
cag(d,e,f,g,h,i,j,k,l){var x,w,v,u,t,s=A.a9(e,f,g,h,i,j,k+B.e.ab(l/1000),!0)
if(!A.a4(s))A.u(A.a7(s))
x=d.Fb(s)
w=x.a.a
if(w!==0){v=s-w
w=x.b
if(v<w)x=d.Fb(w-1)
else{w=x.c
if(v>=w)x=d.Fb(w)}s-=x.a.a}w=A.Nn(A.ax(0,0,0,s,0,0).a,!0)
u=w.uM()
t=$.DK()
w=d===t?B.ts:d.Fb(w.gcH()).a
return new A.nU(d===t?u:u.B(0,A.ax(0,0,0,w.a,0,0)),u,d,w)}},J,A,D,B
C=a.updateHolder(c[73],C)
J=c[1]
A=c[0]
D=c[92]
B=c[2]
var z=a.updateTypes([])
C.bwt.prototype={
$2(d,e){var x=J.W(e)
x.m(e,"start",y.f.a(x.h(e,"start")).B(0,A.ax(0,0,0,0,this.a,0)))},
$S:36};(function inheritance(){var x=a.inherit
x(C.bwt,A.dd)})()
var y={f:A.A("C"),e:A.A("v")};(function constants(){D.a8i=new A.ba(864e8)})()}
$__dart_deferred_initializers__["3a4YtYv/R3R3U8k8kgqSAl+nU/k="] = $__dart_deferred_initializers__.current
