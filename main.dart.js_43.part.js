self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
nJ(d,e,f,g){return new B.KJ(d,e,f,g,null)},
KJ:function KJ(d,e,f,g,h){var _=this
_.d=d
_.f=e
_.as=f
_.at=g
_.a=h},
ag6:function ag6(d){this.a=null
this.b=d
this.c=null},
b9y:function b9y(d){this.a=d},
Do:function Do(d,e){var _=this
_.c=d
_.d=!1
_.e=null
_.a=e},
agr:function agr(d){this.a=null
this.b=d
this.c=null},
bba:function bba(d){this.a=d},
bb9:function bb9(d,e){this.a=d
this.b=e},
bJe(d,e,f,g){var x=new B.Do(A.k("addToDeviceCalendar",!0),null),w=new B.ac1(d,f,g,e,x)
x.e=w.gY7()
return w},
ac1:function ac1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.z=_.y=_.x=_.w=_.f=_.e=_.d=$
_.ax=_.as=_.Q=""
_.ch=g
_.CW=h},
aWI:function aWI(d){this.a=d},
aWH:function aWH(){},
aWJ:function aWJ(d){this.a=d},
aWK:function aWK(d){this.a=d},
aa4(d){var x=0,w=A.j(y.x),v,u,t,s
var $async$aa4=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:u=A.a([d],y.o)
s=J
x=3
return A.d($.bxA().NG(u),$async$aa4)
case 3:t=s.aC(f,d)
v=t==null?C.iE:t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aa4,w)}},C,A,J
B=a.updateHolder(c[56],B)
C=c[2]
A=c[0]
J=c[1]
B.KJ.prototype={
M(){return new B.ag6(C.m)}}
B.ag6.prototype={
a_(){this.ae()
this.a.toString},
ba(d){this.by(d)
this.a.toString},
q(d){return new A.iC(new B.b9y(this),null)},
atL(d,e,f){var x,w,v,u,t,s,r,q,p=this,o=p.a
o=o.d
x=A.em(null,null,e,o)
o=p.c
o.toString
w=A.a8v(o)
p.a.toString
o=e.r
o.toString
v=C.e.d9(o,12,1/0)
u=v*w
if(p.a2r(x,u/o,f,d))return A.a([u,!0],y.h)
p.a.toString
t=C.d.ev(12)
p.a.toString
s=C.e.fs(v/1)
for(r=!1;t<=s;){q=C.e.ev(t+(s-t)/2)
p.a.toString
if(p.a2r(x,q*w/o,f,d)){t=q+1
r=!0}else s=q-1}if(!r)++s
p.a.toString
return A.a([s*w,r],y.h)},
a2r(d,e,f,g){var x,w=null,v=this.a,u=v.as
if(u==null)u=C.j3
v=v.at
x=A.HB(w,w,f,w,d,u,v==null?C.y:v,w,e,C.ah)
v=g.b
x.aWv(v)
if(!x.a.gabH()){u=x.a
v=Math.ceil(u.gdj(u))>g.d||x.gcB(x)>v}else v=!0
return!v},
aty(d,e,f){var x=null,w=this.a.d,v=e.bl(d),u=this.a
u=A.t(w,x,x,f,x,x,x,x,v,u.as,u.at,1)
return u},
n(){this.a.toString
this.al()}}
B.Do.prototype={
M(){return new B.agr(C.m)}}
B.agr.prototype={
a_(){$.aE().a2(C.F,"CheckBox Object - init",null,null)
this.a.d=!1
this.ae()},
q(d){var x=null,w=$.aB()
return A.Y(A.a([A.v(A.t(this.a.c,x,x,x,x,x,x,x,A.p(d).p3.z,C.n,x,x),x,w*0.6),A.yG(x,!1,x,x,new B.bba(this),x,x,!1,this.a.d)],y.u),C.i,C.A,C.f)}}
B.ac1.prototype={
mV(){var x,w,v,u,t,s,r,q,p,o=this,n="dd-MM-yyyy",m=null,l=A.ah(n,m),k=$.cg()
if(l.a4(k.b.d)===A.ah(n,m).a4(new A.a9(Date.now(),!1).B(0,A.al(1,0,0,0,0,0))))o.Q=A.k("tomorrow",!0)
if(A.ah(n,m).a4(k.b.d)===A.ah(n,m).a4(new A.a9(Date.now(),!1)))o.Q=A.k("today",!0)
o.d=A.ah(n,m).a4(k.b.d)
o.w=A.ah("HH:mm",m).a4(k.b.d)
l=k.r.h(0,k.c).k1.h(0,k.e)
l.toString
o.e=k.e
l=l.b
l===$&&A.b()
o.f=J.bu(l)
o.z=A.kH(A.al(0,0,0,0,k.b.r.ghO(),0),-1)
o.x=$.U().x.h(0,k.c).b
o.as=C.dR[k.b.d.gkW()]
if(o.Q==="")A.k("day ",!0)
o.ax=A.k("bookingNeedConfirmation",!0)
o.y=A.k("confirmInviteBooking",!0)+" "+o.d+" \n"+A.k("at",!0)+": "+o.w+","+A.k("to",!0)+" "+o.x+" ?\n "+A.k("treatmentType",!0)+": "+o.e+" | "+A.k("price",!0)+": "+o.f+" | "+A.k("time",!0)+": "+o.z+"."
l=o.a
x=A.k("hey",!0)
w=$.ac().c.a
v=o.y
if(o.b)v=v+"\n\n"+o.ax
v=A.t(v,m,m,m,m,m,m,m,A.p(l).p3.z,C.n,m,m)
u=A.v(m,m,m)
t=A.v(m,20,m)
s=A.p(l)
s=A.by(A.bv(C.o,m,m,A.t(A.k("cancel",!0),m,m,m,m,m,m,m,A.p(l).p3.y.bl(18),m,m,m),s.ax.f,m,m,m,C.S,m,!0,new B.aWI(o),m,new A.F(0,5,0,5),5,!0,m),6)
r=A.by(A.v(m,m,m),1)
q=A.p(l)
p=y.u
return A.dF(m,C.ax,1,A.Y(A.a([v,u,t,A.aS(A.a([s,r,A.by(A.bv(C.o,m,m,A.t(A.k("order2",!0),m,m,m,m,m,m,m,A.p(l).p3.y.bl(18),C.n,m,m),q.ax.f,m,m,m,C.S,m,!0,new B.aWJ(o),m,new A.F(0,5,0,5),5,!0,m),6)],p),C.i,C.A,C.f,m)],p),C.i,C.j,C.f),l,!0,x+" "+w+",")},
mc(){var x=0,w=A.j(y.e),v,u=this,t,s,r
var $async$mc=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:x=3
return A.d($.bxA().BY(C.iF),$async$mc)
case 3:r=e
x=r===C.lA?4:5
break
case 4:t=A.k("premissionDenide",!0)
s=A.t(A.k("allwoDeviceCalendar",!0),null,null,null,null,null,null,null,null,C.n,null,null)
x=6
return A.d(A.dF(A.a([A.ce(A.t(A.k("ok",!0),null,null,null,null,null,null,null,null,null,null,null),new B.aWK(u),null)],y.u),C.ax,1,s,u.a,!0,t),$async$mc)
case 6:v=e
x=1
break
case 5:x=r===C.iE?7:8
break
case 7:x=9
return A.d(B.aa4(C.iF),$async$mc)
case 9:v=e===C.lz
x=1
break
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$mc,w)}}
var z=a.updateTypes(["aa<G>()"])
B.b9y.prototype={
$2(d,e){var x,w,v,u,t,s,r=d.S(y.c)
if(r==null)r=C.o7
x=this.a
w=x.a.f
if(w==null||w.a)w=r.w.dd(0,w)
if(w.r==null)w=w.bl(14)
x.a.toString
v=r.Q
u=x.atL(e,w,v)
t=A.kD(u[0])
A.nw(u[1])
x.a.toString
s=x.aty(t,w,v)
x.a.toString
return s},
$S:112}
B.bba.prototype={
$1(d){return this.ahL(d)},
ahL(d){var x=0,w=A.j(y.v),v,u=this,t,s,r
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:t=u.a
s=t.a.e
r=s!=null
if(r){x=3
break}else f=r
x=4
break
case 3:x=5
return A.d(s.$0(),$async$$1)
case 5:f=!f
case 4:if(f){x=1
break}t.N(new B.bb9(t,d))
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:784}
B.bb9.prototype={
$0(){var x,w=this.a.a
w.toString
x=this.b
w.d=x==null?w.d:x},
$S:0}
B.aWI.prototype={
$0(){var x=0,w=A.j(y.F),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:u=v.a
A.c2(u.a,A.eg(new B.aWH(),y.v))
u.ch.ao("CANCLE")
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:10}
B.aWH.prototype={
$0(){return $.cg().qS(-1)},
$S:0}
B.aWJ.prototype={
$0(){var x=0,w=A.j(y.F),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
while(true)switch(x){case 0:u=v.a
u.ch.ao("OK_"+u.CW.d)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:10}
B.aWK.prototype={
$0(){A.af(this.a.a,!1).ao(!1)
return null},
$S:0};(function installTearOffs(){var x=a._instance_0u
x(B.ac1.prototype,"gY7","mc",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.O,[B.KJ,B.Do])
x(A.S,[B.ag6,B.agr])
w(B.b9y,A.cz)
w(B.bba,A.bH)
x(A.ci,[B.bb9,B.aWI,B.aWH,B.aWJ,B.aWK])
w(B.ac1,A.R)})()
A.cm(b.typeUniverse,JSON.parse('{"KJ":{"O":[],"m":[]},"ag6":{"S":["KJ"]},"Do":{"O":[],"m":[]},"agr":{"S":["Do"]}}'))
var y={c:A.B("r4"),h:A.B("A<R>"),o:A.B("A<d5>"),u:A.B("A<m>"),F:A.B("aM"),x:A.B("l4"),e:A.B("G"),v:A.B("~")}}
$__dart_deferred_initializers__["/jhiBtQ7ejm2FtnktdCaxbKk8lE="] = $__dart_deferred_initializers__.current
