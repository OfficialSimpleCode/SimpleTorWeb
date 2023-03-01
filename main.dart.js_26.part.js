self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
jA(){return $.bLA()},
b2d:function b2d(){},
b2n:function b2n(d){this.a=d},
b2m:function b2m(d){this.a=d},
b2i:function b2i(d){this.a=d},
b2o:function b2o(){},
b2p:function b2p(){},
b2f:function b2f(){},
b2e:function b2e(d,e){this.a=d
this.b=e},
b2g:function b2g(d){this.a=d},
b2l:function b2l(){},
b2j:function b2j(){},
b2k:function b2k(d){this.a=d},
b2h:function b2h(){}},A,C,J
B=a.updateHolder(c[36],B)
A=c[0]
C=c[2]
J=c[1]
B.b2d.prototype={
aY6(d){var x,w,v
A.aH($.hj().h(0,C.th),null,null)
x=$.bK()
w=x.a
if(d===w.CW)return
w.CW=d
A.bO(C.aX)
v=$.bt()
w=$.cI
v.ds(x.a.c,"notifyWhenGettingBooking","Businesses/"+w+"/Workers",d).T(0,new B.b2n(d),y.e)},
aY5(d){var x,w,v
A.aH($.hj().h(0,C.Nw),null,null)
x=$.bK()
w=x.a
if(d===w.r)return
w.r=d
A.bO(C.aX)
v=$.bt()
w=$.cI
v.ds(x.a.c,"notifyOnWaitingListEvents","Businesses/"+w+"/Workers",d).T(0,new B.b2m(d),y.e)},
agc(d){var x,w,v,u,t
A.aH($.hj().h(0,C.th),null,null)
x=$.bK()
w=x.a
if(d===w.ay)return
w.ay=d
A.bO(C.aX)
v=A.az("dd-MM-yyyy",null).az(new A.aj(Date.now(),!1))
u=$.bt()
w=$.cI
t=x.a.c
u.Eh(A.A(["saveData",d,"lastDeleteBookingsDataDay",v],y.w,y.b),t,"Businesses/"+w+"/Workers").T(0,new B.b2i(d),y.e)},
Ep(d,e){return this.aYr(d,e)},
aYr(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$Ep=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:A.aH($.hj().h(0,C.Nq),null,null)
v=$.cI
x=e!=null?2:3
break
case 2:u=$.bK()
t=u.a
x=t.d===""?4:5
break
case 4:x=6
return A.d($.of().acI("Businesses/"+v+"/Workers",t.c,e,"profileImg","images/profiles").T(0,new B.b2o(),y.F),$async$Ep)
case 6:case 5:x=7
return A.d($.of().yL(u.a.d,e,"profileImg","images/profiles").T(0,new B.b2p(),y.F),$async$Ep)
case 7:case 3:return A.i(null,w)}})
return A.j($async$Ep,w)},
Jj(){var x=0,w=A.k(y.e),v,u,t,s,r
var $async$Jj=A.f(function(d,e){if(d===1)return A.h(e,w)
while(true)switch(x){case 0:A.aH($.hj().h(0,C.Nr),null,null)
u=$.bK()
t=$.of()
s=u.a
r=s.c
s=s.d
x=3
return A.d(t.a8s(r,"profileImg","Businesses/"+$.cI+"/Workers","","profileImg",s,!1,"images/profiles",r).T(0,new B.b2f(),y.e),$async$Jj)
case 3:v=e
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$Jj,w)},
aW1(d,e,f){var x,w
A.aH($.hj().h(0,C.Nz),null,null)
x=$.bK()
w=x.a.dy.h(0,f)
w.toString
J.l5(w,d)
w=x.a.dy.h(0,f)
w.toString
J.l5(w,e)
A.bO(C.aX)},
a6V(d,e,f){var x,w
A.aH($.hj().h(0,C.NA),null,null)
x=$.bK()
w=x.a.dy.h(0,f)
w.toString
J.hD(w,d)
w=x.a.dy.h(0,f)
w.toString
J.hD(w,e)
A.bO(C.aX)},
wN(d,e,f,g){return this.aHQ(d,e,f,g)},
aHP(d,e,f){return this.wN(d,e,f,null)},
aHQ(d,e,f,g){var x=0,w=A.k(y.e),v,u=this,t,s,r,q
var $async$wN=A.f(function(h,i){if(h===1)return A.h(i,w)
while(true)switch(x){case 0:q={}
q.a=e
A.aH($.hj().h(0,C.Nn),null,null)
if(e==="")e=new A.mN().lU()
q.a=e
x=g!=null?3:4
break
case 3:x=e!==g.gcd(g)?5:6
break
case 5:x=7
return A.d(u.DT(g,g.gcd(g)),$async$wN)
case 7:if($.bK().a.fy.L(0,e)){v=!1
x=1
break}case 6:t=g.bt()
t.m(0,"name",g.gcd(g))
d.m(0,"name",e)
if(C.F.cO(d,t)){new A.bl(A.o("sameData",!0),C.v,C.y,f,null).b8()
$.aR().ag(C.H,"Nothing changes - no need to update",null,null)
v=!0
x=1
break}case 4:s=$.bt()
r=$.cI
x=8
return A.d(s.ds($.bK().a.c,"treatments."+e,"Businesses/"+r+"/Workers",d).T(0,new B.b2e(q,d),y.e),$async$wN)
case 8:v=i
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$wN,w)},
DT(d,e){return this.aW2(d,e)},
aW2(d,e){var x=0,w=A.k(y.v),v,u
var $async$DT=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:A.aH($.hj().h(0,C.No),null,null)
v=$.bt()
u=$.cI
x=2
return A.d(v.MO($.bK().a.c,"treatments."+e,"Businesses/"+u+"/Workers").T(0,new B.b2g(e),y.F),$async$DT)
case 2:return A.i(null,w)}})
return A.j($async$DT,w)},
Iz(d,e){return this.aJy(d,e)},
aJy(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$Iz=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:A.aH($.hj().h(0,C.Np),null,null)
v=$.bK()
v.a.as=d
A.bO(C.aX)
A.cb(e,null)
u=$.bt()
t=$.cI
x=2
return A.d(u.ds(v.a.c,"onHoldMinutes","Businesses/"+t+"/Workers",d),$async$Iz)
case 2:return A.i(null,w)}})
return A.j($async$Iz,w)},
Ix(d,e){return this.aJs(d,e)},
aJs(d,e){var x=0,w=A.k(y.v),v,u,t
var $async$Ix=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:A.aH($.hj().h(0,C.Ny),null,null)
v=$.bK()
v.a.at=d
A.bO(C.aX)
A.cb(e,null)
u=$.bt()
t=$.cI
x=2
return A.d(u.ds(v.a.c,"cancelMinutes","Businesses/"+t+"/Workers",d),$async$Ix)
case 2:return A.i(null,w)}})
return A.j($async$Ix,w)},
Fp(d,e){return this.agH(d,e)},
agH(d,e){var x=0,w=A.k(y.v),v,u,t,s,r
var $async$Fp=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:r=$.bK()
if(d===r.a.Q){x=1
break}u=A.an(d).i("af<1,t>")
t=A.ag(new A.af(d,new B.b2l(),u),!0,u.i("bh.E"))
r.a.Q=t
A.bO(C.aX)
A.cb(e,null)
s=$.bt()
u=$.a6().a
x=3
return A.d(s.ds(r.a.c,"weekendDays","Businesses/"+u+"/Workers",t),$async$Fp)
case 3:case 1:return A.i(v,w)}})
return A.j($async$Fp,w)},
Fl(d,e){return this.agx(d,e)},
agx(d,e){var x=0,w=A.k(y.e),v,u,t,s
var $async$Fl=A.f(function(f,g){if(f===1)return A.h(g,w)
while(true)switch(x){case 0:s=$.bK()
if(d===s.a.x){$.cl=C.d4
v=!1
x=1
break}u=A.an(d).i("af<1,hN>")
t=A.ag(new A.af(d,new B.b2j(),u),!0,u.i("bh.E"))
x=3
return A.d($.bt().vu(!1,t,s.a).T(0,new B.b2k(t),y.e),$async$Fl)
case 3:v=g
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$Fl,w)},
vr(d,e,f){return this.ag3(d,e,f)},
ag2(d,e){return this.vr(d,e,!0)},
ag3(d,e,f){var x=0,w=A.k(y.e),v,u,t,s
var $async$vr=A.f(function(g,h){if(g===1)return A.h(h,w)
while(true)switch(x){case 0:t=$.bK()
s=t.a
if(d===s.y){$.cl=C.d4
v=!1
x=1
break}if(!f){s.y=d
A.bO(C.aX)
A.cb(e,null)}x=!d?3:5
break
case 3:u=$.bt()
s=$.a6().a
x=6
return A.d(u.ds(t.a.c,"closeScheduleOnHolidays","Businesses/"+s+"/Workers",!1),$async$vr)
case 6:v=h
x=1
break
x=4
break
case 5:u=$.bt()
s=t.a
x=7
return A.d(u.vu(!0,s.x,s).T(0,new B.b2h(),y.e),$async$vr)
case 7:v=h
x=1
break
case 4:case 1:return A.i(v,w)}})
return A.j($async$vr,w)}}
var z=a.updateTypes([])
B.b2n.prototype={
$1(d){var x=this.a
if(d)$.aR().ag(C.H,"Worker new notifyWhenGettingBooking status -> "+x,null,null)
else $.bK().a.CW=!x
return d},
$S:9}
B.b2m.prototype={
$1(d){var x=this.a
if(d)$.aR().ag(C.H,"Worker new notifyOnWaitingListEvents status -> "+x,null,null)
else $.bK().a.r=!x
return d},
$S:9}
B.b2i.prototype={
$1(d){return this.ae4(d)},
ae4(d){var x=0,w=A.k(y.e),v,u=this
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:if(!d)$.bK().a.CW=!u.a
v=d
x=1
break
case 1:return A.i(v,w)}})
return A.j($async$$1,w)},
$S:11}
B.b2o.prototype={
$1(d){$.bK().a.d=d
A.bO(C.aX)},
$S:155}
B.b2p.prototype={
$1(d){return this.ae5(d)},
ae5(d){var x=0,w=A.k(y.F),v,u
var $async$$1=A.f(function(e,f){if(e===1)return A.h(f,w)
while(true)switch(x){case 0:v=$.a6().ax
u=$.bK()
x=2
return A.d(v.nF(u.a.d),$async$$1)
case 2:u.a.d=d
x=3
return A.d(v.Jx(d),$async$$1)
case 3:A.bO(C.aX)
return A.i(null,w)}})
return A.j($async$$1,w)},
$S:46}
B.b2f.prototype={
$1(d){if(d){$.bK().a.d=""
A.bO(C.aX)}return d},
$S:9}
B.b2e.prototype={
$1(d){var x,w,v,u,t=this
A.es(d)
if(d){x=$.a6()
w=x.x
v=$.bK()
if(w.L(0,v.a.c)){w=x.x.h(0,v.a.c).fy
u=t.a.a
w.m(0,u,A.b03(t.b,u))}w=v.a.fy
u=t.a.a
w.m(0,u,A.b03(t.b,u))
A.bO(C.aX)}return d},
$S:9}
B.b2g.prototype={
$1(d){var x,w,v
if(d){x=$.a6()
w=x.x
v=$.bK()
if(w.L(0,v.a.c))x.x.h(0,v.a.c).fy.F(0,this.a)
v.a.fy.F(0,this.a)
A.bO(C.aX)}},
$S:34}
B.b2l.prototype={
$1(d){return A.dm(d)},
$S:801}
B.b2j.prototype={
$1(d){return y.B.a(d)},
$S:802}
B.b2k.prototype={
$1(d){if(d){$.bK().a.x=this.a
A.bO(C.aX)}return d},
$S:9}
B.b2h.prototype={
$1(d){if(d){$.bK().a.y=!0
A.bO(C.aX)}return d},
$S:9};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.b2d,A.P)
w(A.bY,[B.b2n,B.b2m,B.b2i,B.b2o,B.b2p,B.b2f,B.b2e,B.b2g,B.b2l,B.b2j,B.b2k,B.b2h])})()
var y={F:A.D("aG"),B:A.D("hN"),w:A.D("e"),e:A.D("I"),b:A.D("@"),v:A.D("~")};(function lazyInitializers(){var x=a.lazyFinal
x($,"cel","bLA",()=>new B.b2d())})()}
$__dart_deferred_initializers__["17uc/mqMAD48ZZs2TPwKPxQnduc="] = $__dart_deferred_initializers__.current
