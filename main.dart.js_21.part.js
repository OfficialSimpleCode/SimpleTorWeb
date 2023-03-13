self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
ar_(d,e){d.K(0,new B.bs8(e))},
bCA(d,e,f,g,h){return A.lp(function(){var x=d,w=e,v=f,u=g,t=h
var s=0,r=2,q,p,o,n,m,l,k,j,i,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
return function $async$bCA(b1,b2){if(b1===1){q=b2
s=r}while(true)$async$outer:switch(s){case 0:if(x==null){s=1
break}if(x.as&&A.CE(x,w.d)){$.aE().a2(C.F,"Holiday is free day for this worker -> don't generate times",null,null)
s=1
break}p=A.ah("dd-MM-yyyy",null).a4(w.d)
o=A.ah("EEEE",null).a4(w.d)
n=A.JN(x.fy.h(0,o.toLowerCase()))
m=A.JN(x.go.h(0,p))
l=A.bCo(p,x.id)
k=C.b.O(C.b.O(m,A.bs9(x,p,v,u)),l)
if(x.go.h(0,p)!=null&&m.length===0){$.aE().a2(C.F,"Free day don't generate times",null,null)
s=1
break}C.b.hS(k)
C.b.hS(n)
o=w.r.w
j=J.bU(o.gcz(o))
i=J.jJ(j,y.e)
for(a0=0;a0<j;++a0)i[a0]=0
a1=A.bNm(new A.a9(Date.now(),!1),!0)
o=y.f,a2=0,a3=0
case 3:if(!(a3<n.length)){s=5
break}a4=n[a3]
a5=n[a3+1]
if(A.bCG(a4,p)){switch(A.ard(a1,a1,a4,a5)){case"BEFORE":$.aE().a2(C.F,"Alg duration status - BEFORE",null,null)
s=4
break $async$outer
case"AFTER":$.aE().a2(C.F,"Alg duration status - AFTER",null,null)
break
case"STRIKE":$.aE().a2(C.F,"Alg duration status - STRIKE",null,null)
break}a4=a1}a6=A.bNd(w,a4)
case 6:if(!(a7=a6.gaX(a6),a7=o.a(J.aC(a7.b.$1(J.CM(a7.a)),"start")),a8=a6.gaX(a6),!a7.B(0,J.aC(a8.b.$1(J.CM(a8.a)),"duration")).f4(a5))){s=7
break}++a2
if(a2>500){$.aE().a2(C.W,"Infinity loop in times algorited - stopping",null,null)
s=7
break}a9=A.bNQ(i,a6,k)
a7=a6.gaX(a6)
b0=B.ccz(o.a(J.aC(a7.b.$1(J.oR(a7.a)),"start")),k,i,x.CW)
s=a9===0?8:10
break
case 8:$.aE().a2(C.F,"generate new val -> "+a2,null,null)
a7=a6.gaX(a6)
s=11
return o.a(J.aC(a7.b.$1(J.oR(a7.a)),"start"))
case 11:if(t)B.ar_(a6,5)
else B.ar_(a6,b0)
s=9
break
case 10:if(k.length-1<C.b.gY(i)+1)if(t)B.ar_(a6,5)
else B.ar_(a6,b0)
else B.ar_(a6,a9)
case 9:s=6
break
case 7:case 4:a3+=2
s=3
break
case 5:case 1:return A.lh()
case 2:return A.li(q)}}},y.f)},
ccz(d,e,f,g){var x,w,v,u=d.B(0,A.al(0,0,0,0,g,0))
if(f.length<=0||f[0]+1>=e.length)return g
x=f[0]
w=e[x]
v=e[x+1]
if(w.f4(d)&&w.eh(u))return C.d.an(v.j_(d).a,6e7)
return g},
bs8:function bs8(d){this.a=d}},J,A,C
B=a.updateHolder(c[81],B)
J=c[1]
A=c[0]
C=c[2]
var z=a.updateTypes([])
B.bs8.prototype={
$2(d,e){var x=J.av(e)
x.m(e,"start",y.f.a(x.h(e,"start")).B(0,A.al(0,0,0,0,this.a,0)))},
$S:44};(function inheritance(){var x=a.inherit
x(B.bs8,A.cz)})()
var y={f:A.B("a9"),e:A.B("u")}}
$__dart_deferred_initializers__["iwqjJUXvZs9L6P3VDiiz060ryAg="] = $__dart_deferred_initializers__.current
