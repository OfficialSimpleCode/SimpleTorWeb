self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
h6(){return $.bQC()},
b5n:function b5n(){},
b5B:function b5B(d){this.a=d},
b5A:function b5A(d){this.a=d},
b5w:function b5w(d){this.a=d},
b5C:function b5C(){},
b5D:function b5D(){},
b5r:function b5r(){},
b5p:function b5p(d,e){this.a=d
this.b=e},
b5t:function b5t(d){this.a=d},
b5q:function b5q(d,e,f){this.a=d
this.b=e
this.c=f},
b5z:function b5z(){},
b5x:function b5x(){},
b5y:function b5y(d){this.a=d},
b5v:function b5v(){},
b5u:function b5u(d,e){this.a=d
this.b=e},
b5o:function b5o(d){this.a=d},
b5s:function b5s(d){this.a=d}},C,A,J
B=a.updateHolder(c[4],B)
C=c[2]
A=c[0]
J=c[1]
B.b5n.prototype={
b1P(d){var x,w,v
$.ao().aK($.em().h(0,C.uV))
x=$.b0()
w=x.a
if(d===w.cy)return
w.cy=d
A.bn(C.aD)
v=$.bg()
w=$.ce
v.d6(x.a.c,"notifyWhenGettingBooking","Businesses/"+w+"/Workers",d).T(0,new B.b5B(d),y.e)},
b1O(d){var x,w,v
$.ao().aK($.em().h(0,C.PG))
x=$.b0()
w=x.a
if(d===w.r)return
w.r=d
A.bn(C.aD)
v=$.bg()
w=$.ce
v.d6(x.a.c,"notifyOnWaitingListEvents","Businesses/"+w+"/Workers",d).T(0,new B.b5A(d),y.e)},
ajI(d){var x,w,v,u,t
$.ao().aK($.em().h(0,C.uV))
x=$.b0()
w=x.a
if(d===w.CW)return
w.CW=d
A.bn(C.aD)
v=A.af("dd-MM-yyyy",null).a2(new A.a8(Date.now(),!1))
u=$.bg()
w=$.ce
t=x.a.c
u.ES(A.C(["saveData",d,"lastDeleteBookingsDataDay",v],y.w,y.b),t,"Businesses/"+w+"/Workers").T(0,new B.b5w(d),y.e)},
EX(d,e){return this.b29(d,e)},
b29(d,e){var x=0,w=A.j(y.v),v,u,t
var $async$EX=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.Pv))
v=$.ce
x=e!=null?2:3
break
case 2:u=$.b0()
t=u.a
x=t.d===""?4:5
break
case 4:x=6
return A.d($.qq().afX("Businesses/"+v+"/Workers",t.c,e,"profileImg","images/profiles").T(0,new B.b5C(),y.F),$async$EX)
case 6:case 5:x=7
return A.d($.qq().EP(u.a.d,e,"profileImg","images/profiles").T(0,new B.b5D(),y.F),$async$EX)
case 7:case 3:return A.h(null,w)}})
return A.i($async$EX,w)},
Ks(){var x=0,w=A.j(y.e),v,u,t,s,r
var $async$Ks=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.Pz))
u=$.b0()
t=$.qq()
s=u.a
r=s.c
s=s.d
x=3
return A.d(t.abl(r,"profileImg","Businesses/"+$.ce+"/Workers","","profileImg",s,!1,"images/profiles",r).T(0,new B.b5r(),y.e),$async$Ks)
case 3:v=e
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ks,w)},
b_H(d,e,f){var x,w
$.ao().aK($.em().h(0,C.PJ))
x=$.b0()
w=x.a.fx.h(0,f)
w.toString
J.lq(w,d)
w=x.a.fx.h(0,f)
w.toString
J.lq(w,e)
A.bn(C.aD)},
a9K(d,e,f){var x,w
$.ao().aK($.em().h(0,C.PK))
x=$.b0()
w=x.a.fx.h(0,f)
w.toString
J.jq(w,d)
w=x.a.fx.h(0,f)
w.toString
J.jq(w,e)
A.bn(C.aD)},
xD(d,e,f,g){return this.aMh(d,e,f,g)},
aMg(d,e,f){return this.xD(d,e,f,null)},
aMh(d,e,f,g){var x=0,w=A.j(y.e),v,u=this,t,s,r,q
var $async$xD=A.e(function(h,i){if(h===1)return A.f(i,w)
while(true)switch(x){case 0:q={}
q.a=e
$.ao().aK($.em().h(0,C.Pr))
if(e==="")e=new A.kt().ku()
q.a=e
x=g!=null?3:4
break
case 3:x=e!==g.gcd(g)?5:6
break
case 5:x=7
return A.d(u.Er(g,g.gcd(g)),$async$xD)
case 7:if($.b0().a.id.J(0,e)){v=!1
x=1
break}case 6:t=g.bt()
t.m(0,"name",g.gcd(g))
d.m(0,"name",e)
if(C.J.cU(d,t)){new A.b3(A.l("sameData",!0),C.u,C.v,f,null).aA()
$.aC().a4(C.G,"Nothing changes - no need to update",null,null)
v=!0
x=1
break}case 4:s=$.bg()
r=$.ce
x=8
return A.d(s.d6($.b0().a.c,"treatments."+e,"Businesses/"+r+"/Workers",d).T(0,new B.b5p(q,d),y.e),$async$xD)
case 8:v=i
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$xD,w)},
Er(d,e){return this.b_I(d,e)},
b_I(d,e){var x=0,w=A.j(y.v),v,u
var $async$Er=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.Ps))
v=$.bg()
u=$.ce
x=2
return A.d(v.zp($.b0().a.c,"treatments."+e,"Businesses/"+u+"/Workers").T(0,new B.b5t(e),y.F),$async$Er)
case 2:return A.h(null,w)}})
return A.i($async$Er,w)},
JF(d,e){return this.aOh(d,e)},
aOh(d,e){var x=0,w=A.j(y.v),v,u,t
var $async$JF=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.Pt))
v=$.b0()
v.a.ax=d
A.bn(C.aD)
A.c_(e,null)
u=$.bg()
t=$.ce
x=2
return A.d(u.d6(v.a.c,"onHoldMinutes","Businesses/"+t+"/Workers",d),$async$JF)
case 2:return A.h(null,w)}})
return A.i($async$JF,w)},
JB(d,e){return this.aO9(d,e)},
aO9(d,e){var x=0,w=A.j(y.v),v,u,t
var $async$JB=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.mh))
v=$.b0()
v.a.ay=d
A.bn(C.aD)
A.c_(e,null)
u=$.bg()
t=$.ce
x=2
return A.d(u.d6(v.a.c,"cancelMinutes","Businesses/"+t+"/Workers",d),$async$JB)
case 2:return A.h(null,w)}})
return A.i($async$JB,w)},
JD(d,e){return this.aOe(d,e)},
aOe(d,e){var x=0,w=A.j(y.v),v,u,t
var $async$JD=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.mh))
v=$.b0()
v.a.w=d
A.bn(C.aD)
A.c_(e,null)
u=$.bg()
t=$.ce
x=2
return A.d(u.d6(v.a.c,"notifyAboutCancelNearDeadline","Businesses/"+t+"/Workers",d),$async$JD)
case 2:return A.h(null,w)}})
return A.i($async$JD,w)},
JE(d,e){return this.aOf(d,e)},
aOf(d,e){var x=0,w=A.j(y.v),v,u,t
var $async$JE=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.mh))
v=$.b0()
v.a.x=d
A.bn(C.aD)
A.c_(e,null)
u=$.bg()
t=$.ce
x=2
return A.d(u.d6(v.a.c,"notifyAboutOrderNearDeadline","Businesses/"+t+"/Workers",d),$async$JE)
case 2:return A.h(null,w)}})
return A.i($async$JE,w)},
Jy(d,e,f,g){return this.aNI(d,e,f,g)},
aNI(d,e,f,g){var x=0,w=A.j(y.e),v
var $async$Jy=A.e(function(h,i){if(h===1)return A.f(i,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.Pw))
if(d.as===f){v=!0
x=1
break}x=3
return A.d($.bg().zn(d,"status",C.JX.h(0,f)).T(0,new B.b5q(f,d,g),y.e),$async$Jy)
case 3:v=i
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jy,w)},
G4(d,e){return this.akc(d,e)},
akc(d,e){var x=0,w=A.j(y.v),v,u,t,s,r
var $async$G4=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:r=$.b0()
if(d===r.a.at){x=1
break}u=A.av(d).i("aj<1,t>")
t=A.ai(new A.aj(d,new B.b5z(),u),!0,u.i("bf.E"))
r.a.at=t
A.bn(C.aD)
A.c_(e,null)
s=$.bg()
u=$.a4().a
x=3
return A.d(s.d6(r.a.c,"weekendDays","Businesses/"+u+"/Workers",t),$async$G4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$G4,w)},
G0(d,e){return this.ak3(d,e)},
ak3(d,e){var x=0,w=A.j(y.e),v,u,t,s
var $async$G0=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:s=$.b0()
if(d===s.a.z){$.ao().b=C.cB
v=!1
x=1
break}u=A.av(d).i("aj<1,hU>")
t=A.ai(new A.aj(d,new B.b5x(),u),!0,u.i("bf.E"))
x=3
return A.d($.bg().wg(!1,t,s.a).T(0,new B.b5y(t),y.e),$async$G0)
case 3:v=g
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G0,w)},
wb(d,e,f){return this.ajz(d,e,f)},
ajy(d,e){return this.wb(d,e,!0)},
ajz(d,e,f){var x=0,w=A.j(y.e),v,u,t,s
var $async$wb=A.e(function(g,h){if(g===1)return A.f(h,w)
while(true)switch(x){case 0:t=$.b0()
s=t.a
if(d===s.Q){$.ao().b=C.cB
v=!1
x=1
break}if(!f){s.Q=d
A.bn(C.aD)
A.c_(e,null)}x=!d?3:5
break
case 3:u=$.bg()
s=$.a4().a
x=6
return A.d(u.d6(t.a.c,"closeScheduleOnHolidays","Businesses/"+s+"/Workers",!1),$async$wb)
case 6:v=h
x=1
break
x=4
break
case 5:u=$.bg()
s=t.a
x=7
return A.d(u.wg(!0,s.z,s).T(0,new B.b5v(),y.e),$async$wb)
case 7:v=h
x=1
break
case 4:case 1:return A.h(v,w)}})
return A.i($async$wb,w)},
FU(d,e){return this.ajt(d,e)},
ajt(d,e){var x=0,w=A.j(y.e),v,u,t,s,r
var $async$FU=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.PC))
u=d.f
u===$&&A.b()
if(u===e){v=!0
x=1
break}t=$.b0()
u=t.a.go
s=d.r
s===$&&A.b()
if(!u.J(0,s)){v=!1
x=1
break}r=$.bg()
u=$.ce
x=3
return A.d(r.d6(t.a.c,"breaks."+d.r+".note","Businesses/"+u+"/Workers",e).T(0,new B.b5u(d,e),y.e),$async$FU)
case 3:v=g
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FU,w)},
FT(d,e){return this.ajr(d,e)},
ajr(d,e){var x=0,w=A.j(y.e),v,u,t,s,r
var $async$FT=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.PB))
if(d.e===e){v=!0
x=1
break}u=A.af("dd-MM-yyyy",null).a2(d.d)
t=$.bg()
s=$.ce
r=d.x
x=3
return A.d(t.d6(u,d.at+".note","Businesses/"+s+"/Workers/"+r+"/PublicData/publicData/BookingsObjects",e),$async$FT)
case 3:v=g
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FT,w)},
J0(d){return this.aM3(d)},
aM3(d){var x=0,w=A.j(y.e),v,u,t,s
var $async$J0=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.Py))
u=$.b0()
t=u.a.go
s=d.r
s===$&&A.b()
if(t.J(0,s)){v=!1
x=1
break}x=3
return A.d($.bg().J1(d,u.a.c).T(0,new B.b5o(d),y.e),$async$J0)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J0,w)},
Nm(d){return this.b_s(d)},
b_s(d){var x=0,w=A.j(y.e),v,u,t,s,r,q
var $async$Nm=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:$.ao().aK($.em().h(0,C.Px))
u=d.d
u===$&&A.b()
t=d.e
t===$&&A.b()
s=u+"T"+t
r=$.b0()
if(!r.a.go.J(0,s)){v=!1
x=1
break}q=$.bg()
u=$.ce
x=3
return A.d(q.zp(r.a.c,"breaks."+s,"Businesses/"+u+"/Workers").T(0,new B.b5s(s),y.e),$async$Nm)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nm,w)}}
var z=a.updateTypes([])
B.b5B.prototype={
$1(d){var x=this.a
if(d)$.aC().a4(C.G,"Worker new notifyWhenGettingBooking status -> "+x,null,null)
else $.b0().a.cy=!x
return d},
$S:8}
B.b5A.prototype={
$1(d){var x=this.a
if(d)$.aC().a4(C.G,"Worker new notifyOnWaitingListEvents status -> "+x,null,null)
else $.b0().a.r=!x
return d},
$S:8}
B.b5w.prototype={
$1(d){return this.ahp(d)},
ahp(d){var x=0,w=A.j(y.e),v,u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:if(!d)$.b0().a.cy=!u.a
v=d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:9}
B.b5C.prototype={
$1(d){$.b0().a.d=d
A.bn(C.aD)},
$S:110}
B.b5D.prototype={
$1(d){return this.ahq(d)},
ahq(d){var x=0,w=A.j(y.F),v,u
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:v=$.a4().ax
u=$.b0()
x=2
return A.d(v.pa(u.a.d),$async$$1)
case 2:u.a.d=d
x=3
return A.d(v.KH(d),$async$$1)
case 3:A.bn(C.aD)
return A.h(null,w)}})
return A.i($async$$1,w)},
$S:46}
B.b5r.prototype={
$1(d){if(d){$.b0().a.d=""
A.bn(C.aD)}return d},
$S:8}
B.b5p.prototype={
$1(d){var x,w,v,u,t=this
if(d){x=$.a4()
w=x.x
v=$.b0()
if(w.J(0,v.a.c)){w=x.x.h(0,v.a.c).id
u=t.a.a
w.m(0,u,A.b39(t.b,u))}w=v.a.id
u=t.a.a
w.m(0,u,A.b39(t.b,u))
A.bn(C.aD)}return d},
$S:8}
B.b5t.prototype={
$1(d){var x,w,v
if(d){x=$.a4()
w=x.x
v=$.b0()
if(w.J(0,v.a.c))x.x.h(0,v.a.c).id.F(0,this.a)
v.a.id.F(0,this.a)
A.bn(C.aD)}},
$S:37}
B.b5q.prototype={
$1(d){var x,w=this
if(d&&w.a===C.be&&w.b.ax.length>10)$.oG().Mr(w.b)
if(d){x=w.b
x=x.x===x.b}else x=!1
if(x)w.c.h(0,w.b.at).as=C.be
return d},
$S:8}
B.b5z.prototype={
$1(d){return A.dq(d)},
$S:833}
B.b5x.prototype={
$1(d){return y.B.a(d)},
$S:834}
B.b5y.prototype={
$1(d){if(d){$.b0().a.z=this.a
A.bn(C.aD)}return d},
$S:8}
B.b5v.prototype={
$1(d){if(d){$.b0().a.Q=!0
A.bn(C.aD)}return d},
$S:8}
B.b5u.prototype={
$1(d){var x,w
if(d){x=$.b0().a.go
w=this.a.r
w===$&&A.b()
x.h(0,w).f=this.b
A.bn(C.aD)}return d},
$S:8}
B.b5o.prototype={
$1(d){var x,w,v
if(d){x=$.b0().a.go
w=this.a
v=w.r
v===$&&A.b()
x.m(0,v,w)
A.bn(C.aD)}return d},
$S:8}
B.b5s.prototype={
$1(d){if(d){$.b0().a.go.F(0,this.a)
A.bn(C.aD)}return d},
$S:8};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.b5n,A.R)
w(A.bX,[B.b5B,B.b5A,B.b5w,B.b5C,B.b5D,B.b5r,B.b5p,B.b5t,B.b5q,B.b5z,B.b5x,B.b5y,B.b5v,B.b5u,B.b5o,B.b5s])})()
var y={F:A.E("aL"),B:A.E("hU"),w:A.E("k"),e:A.E("I"),b:A.E("@"),v:A.E("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cjY","bQC",()=>new B.b5n())})()}
$__dart_deferred_initializers__["KtbRTAK34P4gMRXXk0HkWpDHHKQ="] = $__dart_deferred_initializers__.current
