self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
crk(d,e,f,g){return new B.BG(e,f,g,d,null)},
BG:function BG(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
asp:function asp(d,e,f,g){var _=this
_.d=d
_.f=_.e=$
_.r=e
_.w=f
_.CW=_.ch=_.ay=_.ax=_.at=_.as=_.Q=_.z=$
_.a=null
_.b=g
_.c=null},
bwn:function bwn(d,e){this.a=d
this.b=e},
bwm:function bwm(d){this.a=d},
bwq:function bwq(d){this.a=d},
bwo:function bwo(d){this.a=d},
bwp:function bwp(d,e){this.a=d
this.b=e},
bwr:function bwr(d){this.a=d},
bwt:function bwt(d){this.a=d},
bws:function bws(d,e){this.a=d
this.b=e},
bwl:function bwl(d){this.a=d},
cja(d,e,f,g,h,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i={}
if(!(!(e.gU()!=null&&!e.gU().js())||!1)){new A.b1(A.e("somethingWrong",!0),C.w,C.y,d,null).aB()
return!0}i.a=!1
J.b5(a9.a,new B.bYV(i))
if(i.a){new A.b1(A.e("durationMustBeGratherThenZero",!1),C.w,C.y,d,null).aB()
return!1}if(a1.a>0&&!C.f2.G(0,a2.a.b.a)){new A.b1(A.e("onlinePaymentsNotValidCurrency",!0),C.w,C.y,d,null).aB()
return!1}x=J.a_(a7.a,a6).c
w=h==null
v=!w
u=v?h.b:C.c.m(x.a)
if(v)t=h.Q
else{s=A.aY(y.S)
J.b5(a7.a,new B.bYW(s))
r=4
while(!0){if(!(r<37)){t=-2
break}if(!s.t(0,r)){t=r
break}++r}}q=a8.a?C.cT:C.dv
p=a2.a
o=A.fn(a9.a,y.N,y.B)
n=a3.a
v=v?h.c:new A.l4().mc()
m=a0.a
l=A.mR(C.e.aN(a1.a/100*a2.a.a,2))
k=a5.a
j=A.ceb(l,t,v,u,f,g,m,q,p,n,a4.a,k,o)
J.a_(a7.a,a6).c.j(0,u,j)
a7.X()
if(w){A.j6(d)
A.ao(d,!1).j5()}return!0},
bYV:function bYV(d){this.a=d},
bYW:function bYW(d){this.a=d},
bYU:function bYU(d){this.a=d},
apB:function apB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bqF:function bqF(d,e){this.a=d
this.b=e},
bqE:function bqE(d,e){this.a=d
this.b=e},
bqG:function bqG(d){this.a=d},
bqH:function bqH(d){this.a=d},
ank:function ank(d,e){this.c=d
this.a=e},
bls:function bls(d){this.a=d},
blr:function blr(d){this.a=d},
blq:function blq(d){this.a=d},
anl:function anl(d,e,f){this.c=d
this.d=e
this.a=f},
blv:function blv(d){this.a=d},
blu:function blu(d){this.a=d},
blt:function blt(d){this.a=d},
anm:function anm(d,e,f){this.c=d
this.d=e
this.a=f},
bly:function bly(d){this.a=d},
blx:function blx(d){this.a=d},
blw:function blw(d){this.a=d},
aHA(d,e,f){var x=0,w=A.m(y.H),v
var $async$aHA=A.i(function(g,h){if(g===1)return A.j(h,w)
while(true)switch(x){case 0:x=3
return A.d(A.dX(d,A.b3("treatmentDurationPicker",0)),$async$aHA)
case 3:if(h!==!0){new A.b1(A.e("thereIsProblem",!0),C.w,C.y,d,null).aB()
x=1
break}A.aR("treatmentDurationPicker")
x=4
return A.d(A.mu(d,O.cC5(e,f)).l4(),$async$aHA)
case 4:v=h
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aHA,w)},
aHB(d,e,f,g,h){var x=0,w=A.m(y.H),v
var $async$aHB=A.i(function(i,j){if(i===1)return A.j(j,w)
while(true)switch(x){case 0:x=3
return A.d(A.dX(d,A.b3("treatmentPricePicker",0)),$async$aHB)
case 3:if(j!==!0){new A.b1(A.e("thereIsProblem",!0),C.w,C.y,d,null).aB()
x=1
break}A.aR("treatmentPricePicker")
x=4
return A.d(A.mu(d,P.cC6(e,f,g,h)).l4(),$async$aHB)
case 4:v=j
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aHB,w)},
cNi(d){var x
if(d==null)return d
x=C.d.hV(d).length
if(x>30)return A.e("toLongName",!0)
if(x===0)return A.e("mustIncluteChars",!0)
return null},
cNj(d){if(d==null)return d
if(C.d.hV(d).length>70)return A.e("toLong",!0)
return null}},A,C,K,J,L,E,D,I,M,N,Q,H,G,F,O,P
B=a.updateHolder(c[47],B)
A=c[0]
C=c[2]
K=c[229]
J=c[1]
L=c[170]
E=c[151]
D=c[94]
I=c[217]
M=c[171]
N=c[99]
Q=c[230]
H=c[231]
G=c[190]
F=c[114]
O=c[48]
P=c[49]
B.BG.prototype={
a_(){return new B.asp(new A.bb(null,y.w),A.ei(null),A.ei(null),C.n)}}
B.asp.prototype={
ai(){var x,w,v,u,t=this,s=null,r=t.a.c
r=r!=null?r.ax:A.H(["0",new A.jt(0)],y.N,y.B)
t.CW=A.aK(r,y.V)
r=t.a.c
if(r==null)x=0
else{r=r.gjQ()
w=t.a.c.e
w===$&&A.b()
x=r/w.a*100}r=isNaN(x)?0:C.e.a9(x)
w=y.S
t.z=A.aK(r,w)
r=t.a.c
if(r==null)r=!1
else{r=r.r
r===$&&A.b()
r=r===C.cT}v=y.y
t.as=A.aK(r,v)
r=t.a.c
if(r==null){r=$.er()
u=new A.dJ(r)
u.hb("0",r)
r=u}else{r=r.e
r===$&&A.b()
r.toString}t.Q=A.aK(r,y.A)
r=t.a.c
r=r==null?s:r.as
t.ch=A.aK(r==null?1:r,w)
r=t.c
r.toString
w=t.r
t.e=A.f_(w,s,r,s,B.cNx(),A.e(t.a.f?"eventType":"treatmentType",!0),s,s,s,!0,!0,!0,s,s,s,C.b2)
r=t.c
r.toString
u=t.w
t.f=A.f_(u,s,r,s,B.cNy(),A.e("notesToClients",!0),s,s,s,!0,!0,!0,s,s,s,C.b2)
r=t.a.c
r=r==null?s:r.gqn()
t.at=A.aK(r!==!1,v)
r=t.a.c
r=r==null?s:r.gt0()
t.ay=A.aK(r!==!1,v)
r=t.a.c
r=r==null?s:r.at
t.ax=A.aK(r!==!1,v)
r=t.a.c
w.sbL(0,r==null?"":r.z)
r=t.a.c
u.sbL(0,r==null?"":r.d)
t.au()},
n(){this.aJ()},
p(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=A.r(d),m=p.a,l=m.c
m=l!=null?A.a([new B.apB(l,m.e,m.d,o)],y.p):o
l=p.a
if(l.c==null)l=l.f?"eventAdding":"addingTreatment"
else l="edit"
l=A.iQ(m,o,!0,o,o,1,o,o,0,!1,o,!1,o,o,o,o,!0,o,o,o,o,o,A.J(A.e(l,!0),o,o,o,o,o,o,o,o),o,o,o,1,o)
m=$.b4()
x=p.bpZ()
w=p.e
w===$&&A.b()
v=A.v(o,10,o)
u=p.f
u===$&&A.b()
t=y.p
u=A.bq(o,o,o,A.U(A.a([w,v,u],t),C.h,C.i,C.f),o,o,o,o,o,o,new A.E(0,15,0,15),!0,o,o,new A.E(15,5,15,25),20,o,!0,!1,o)
v=p.blD()
w=A.cZ(o,o,1)
s=p.ay
s===$&&A.b()
s=A.bq(o,o,o,A.U(A.a([v,w,new B.anl(s,p.a.f,o)],t),C.h,C.i,C.f),o,o,o,o,o,o,new A.E(0,10,0,10),!0,o,o,new A.E(15,0,15,0),20,o,!0,!1,o)
w=p.bcB()
v=A.cZ(o,o,1)
r=p.at
r===$&&A.b()
r=A.bq(o,o,o,A.U(A.a([w,v,new B.anm(r,p.a.f,o)],t),C.h,C.i,C.f),o,o,o,o,o,o,new A.E(0,15,0,15),!0,o,o,new A.E(10,0,10,0),20,o,!0,!1,o)
v=p.bkV()
w=A.v(o,10,o)
q=p.a.c==null?p.b5l():A.v(o,o,o)
return new A.mJ(A.hA(l,n.ax.CW,A.bx(o,A.iW(o,A.cr(A.v(A.U(A.a([A.b7(A.a3(o,A.cm(A.U(A.a([x,u,s,r,v,w,q,A.v(o,20,o)],t),C.h,C.i,C.f),o,C.m,o,o,o,C.z),C.j,o,o,o,o,o,o,o,new A.E(20,0,20,10),o,o,o),1)],t),C.h,C.i,C.f),o,m),o,o),p.d),C.m,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new B.bwm(d),o,o,o,o,o,o,o,!1,C.F),o,!1,o,o,o),new B.bwn(p,d),o)},
bkV(){var x,w,v,u=null
if(!this.a.f)return A.v(u,u,u)
x=this.bl4()
w=A.cZ(u,u,1)
v=this.ax
v===$&&A.b()
return A.bq(u,u,u,A.U(A.a([x,w,new B.ank(v,u)],y.p),C.h,C.i,C.f),u,u,u,u,u,u,new A.E(0,15,0,15),!0,u,u,new A.E(10,0,10,0),20,u,!0,!1,u)},
bcB(){var x=this.CW
x===$&&A.b()
return new A.au(x,new B.bwq(this),null,null,y.M)},
bl4(){var x=this.CW
x===$&&A.b()
return new A.au(x,new B.bwr(this),null,null,y.M)},
blD(){var x=this.Q
x===$&&A.b()
return new A.au(x,new B.bwt(this),null,null,y.x)},
b5l(){var x,w,v,u=null,t=this.c
t.toString
t=A.r(t)
x=$.b4()
w=A.e("add",!0)
v=this.c
v.toString
return A.bq(C.o,u,u,A.J(w,u,u,u,u,A.a7(u,u,A.r(v).ax.r,u,u,u,u,u,u,u,u,20,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),t.ax.f,u,u,u,C.a6,u,u,!0,new B.bwl(this),u,new A.E(0,5,0,5),20,u,!0,!1,x*0.7)},
bpZ(){var x,w,v=null,u=this.a
if(u.c==null)return A.v(v,v,v)
x=A.e(u.f?"UpdateEventNotify":"UpdateTreatmentNotify",!1)
w=this.c
w.toString
return A.a3(C.o,A.J(x,v,v,v,v,A.a7(v,v,A.r(w).ax.f,v,v,v,v,v,v,v,v,v,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),C.r,v,v),C.j,v,v,v,v,v,v,new A.E(0,0,0,5),new A.E(5,10,5,10),v,v,v)}}
B.apB.prototype={
p(d){var x=null
if(this.c==null)return A.v(x,x,x)
return new A.Z(K.acQ,A.cx(A.aD(C.cm,C.b5,x,x,25),C.p,new B.bqF(this,d),0.6),x)},
ua(d){return this.bhY(d)},
bhY(d){var x=0,w=A.m(y.u),v,u=this,t,s
var $async$ua=A.i(function(e,f){if(e===1)return A.j(f,w)
while(true)switch(x){case 0:s=u.c
if(s==null){v=null
x=1
break}t=A.e("deleting",!0)
x=3
return A.d(A.rG(null,A.J(A.e("doDeleteTreatment",!0)+'  - "'+s.z+'" ?',null,null,null,null,null,C.r,null,null),d,null,new B.bqG(d),new B.bqH(d),!0,t),$async$ua)
case 3:v=f
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$ua,w)}}
B.ank.prototype={
p(d){return new A.au(this.c,new B.bls(this),null,null,y.z)}}
B.anl.prototype={
p(d){return new A.au(this.c,new B.blv(this),null,null,y.z)}}
B.anm.prototype={
p(d){return new A.au(this.c,new B.bly(this),null,null,y.z)}}
var z=a.updateTypes(["h?(h?)"])
B.bwn.prototype={
$0(){var x=0,w=A.m(y.y),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:j=u.a
i=j.a
h=i.c
if(h==null){v=!0
x=1
break}t=j.CW
t===$&&A.b()
s=j.Q
s===$&&A.b()
r=j.z
r===$&&A.b()
q=i.e
p=j.r.a.a
o=j.ax
o===$&&A.b()
n=j.at
n===$&&A.b()
m=j.ch
m===$&&A.b()
i=i.d
l=j.ay
l===$&&A.b()
k=j.as
k===$&&A.b()
B.cja(u.b,j.d,p,j.w.a.a,h,m,r,s,o,l,n,i,q,k,t)
v=!0
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:36}
B.bwm.prototype={
$0(){return A.j6(this.a)},
$S:0}
B.bwq.prototype={
$3(d,e,f){var x,w,v,u=null,t={}
t.a=0
x=this.a
w=x.CW
w===$&&A.b()
J.b5(w.a,new B.bwo(t))
w=A.aD(L.y8,u,u,u,24)
v=A.aD(C.fp,u,u,u,14)
return new A.Z(E.fU,new D.kD(A.e("times",!0),A.e("theWholeTime",!1)+": "+A.fZ(A.a4(0,0,0,0,t.a,0),-1),new A.Z(I.j9,w,u),v,new B.bwp(x,d),u),u)},
$S:359}
B.bwo.prototype={
$2(d,e){var x=this.a
x.a=x.a+(e.a+e.b)},
$S:50}
B.bwp.prototype={
$0(){var x=0,w=A.m(y.P),v=this,u,t,s
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:t=v.a
s=t.CW
s===$&&A.b()
u=t.at
u===$&&A.b()
x=2
return A.d(B.aHA(v.b,u,s),$async$$0)
case 2:t.CW.X()
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:9}
B.bwr.prototype={
$3(d,e,f){var x=null,w=A.aD(M.y5,x,x,x,24),v=this.a.ch
v===$&&A.b()
v=N.vT(25,70,1,200,1,x,v)
return new A.Z(E.fU,new D.kD(A.e("paticipants",!0),A.e("paticipantsExplain",!1),new A.Z(I.j9,w,x),v,x,x),x)},
$S:359}
B.bwt.prototype={
$3(d,e,f){var x=null,w=A.aD(Q.F4,x,x,x,19),v=A.aD(C.fp,x,x,x,14),u=A.e("price",!0),t=A.e("wholePrice",!0),s=this.a,r=s.Q
r===$&&A.b()
return new A.Z(E.fU,new D.kD(u,t+": "+A.w(r.a),new A.Z(C.aE,w,x),v,new B.bws(s,d),x),x)},
$S:1017}
B.bws.prototype={
$0(){var x,w,v=this.a,u=v.Q
u===$&&A.b()
x=v.ay
x===$&&A.b()
w=v.as
w===$&&A.b()
v=v.z
v===$&&A.b()
B.aHB(this.b,v,u,x,w)},
$S:3}
B.bwl.prototype={
$0(){var x,w,v,u,t,s,r,q,p,o,n,m,l=this.a,k=l.c
k.toString
x=l.CW
x===$&&A.b()
w=l.Q
w===$&&A.b()
v=l.z
v===$&&A.b()
u=l.a
t=u.e
s=l.r.a.a
r=l.at
r===$&&A.b()
q=u.d
p=l.ch
p===$&&A.b()
o=l.ay
o===$&&A.b()
n=l.ax
n===$&&A.b()
m=l.as
m===$&&A.b()
return B.cja(k,l.d,s,l.w.a.a,u.c,p,v,w,n,o,r,q,t,m,x)},
$S:19}
B.bYV.prototype={
$2(d,e){if(e.a===0)this.a.a=!0},
$S:50}
B.bYW.prototype={
$2(d,e){e.c.A(0,new B.bYU(this.a))},
$S:46}
B.bYU.prototype={
$2(d,e){this.a.q(0,e.Q)},
$S:11}
B.bqF.prototype={
$0(){return this.au7()},
au7(){var x=0,w=A.m(y.H),v,u=this,t,s,r,q,p,o,n
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:p={}
o=u.a
n=u.b
x=3
return A.d(o.ua(n),$async$$0)
case 3:if(e!==!0){x=1
break}t=o.d
s=o.e
r=J.a_(t.a,s).c
r.L(0,o.c.b)
p.a=0
q=A.q(y.N,y.a)
r.A(0,new B.bqE(p,q))
J.a_(t.a,s).c=q
t.X()
A.ao(n,!1).aP(null)
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:2}
B.bqE.prototype={
$2(d,e){var x=this.a
e.b=C.c.m(x.a)
this.b.j(0,C.c.m(x.a),e);++x.a},
$S:11}
B.bqG.prototype={
$0(){A.ao(this.a,!1).aP(!1)
return null},
$S:0}
B.bqH.prototype={
$0(){var x=0,w=A.m(y.H),v=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
while(true)switch(x){case 0:A.ao(v.a,!1).aP(!0)
return A.k(null,w)}})
return A.l($async$$0,w)},
$S:2}
B.bls.prototype={
$3(d,e,f){var x=null,w=A.aD(H.nT,x,x,x,19),v=this.a
return new A.Z(G.nw,new D.kD(A.e("showParticipants",!1),A.e("showParticipantsToClients",!1),new A.Z(C.aE,w,x),F.kY(A.r(d).ax.f,new B.blq(v),v.c.a),new B.blr(v),x),x)},
$S:182}
B.blr.prototype={
$0(){var x=this.a.c
x.sk(0,!x.a)
x.X()},
$S:3}
B.blq.prototype={
$1(d){var x=this.a.c
x.sk(0,!x.a)
x.X()},
$S:17}
B.blv.prototype={
$3(d,e,f){var x=null,w=A.aD(H.nT,x,x,x,19),v=this.a,u=A.e("showPrice",!1)
return new A.Z(G.nw,new D.kD(u,A.e(v.d?"showPriceToClientseEvents":"showPriceToClients",!1),new A.Z(C.aE,w,x),F.kY(A.r(d).ax.f,new B.blt(v),v.c.a),new B.blu(v),x),x)},
$S:182}
B.blu.prototype={
$0(){var x=this.a.c
x.sk(0,!x.a)
x.X()},
$S:3}
B.blt.prototype={
$1(d){var x=this.a.c
x.sk(0,!x.a)
x.X()},
$S:17}
B.bly.prototype={
$3(d,e,f){var x=null,w=A.aD(H.nT,x,x,x,19),v=this.a,u=A.e("showTime",!1)
return new A.Z(G.nw,new D.kD(u,A.e(v.d?"showTimeToClientsEvents":"showTimeToClients",!1),new A.Z(C.aE,w,x),F.kY(A.r(d).ax.f,new B.blw(v),v.c.a),new B.blx(v),x),x)},
$S:182}
B.blx.prototype={
$0(){var x=this.a.c
x.sk(0,!x.a)
x.X()},
$S:3}
B.blw.prototype={
$1(d){var x=this.a.c
x.sk(0,!x.a)
x.X()},
$S:17};(function installTearOffs(){var x=a._static_1
x(B,"cNx","cNi",0)
x(B,"cNy","cNj",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.BG,A.V)
x(B.asp,A.W)
w(A.c6,[B.bwn,B.bwm,B.bwp,B.bws,B.bwl,B.bqF,B.bqG,B.bqH,B.blr,B.blu,B.blx])
w(A.bS,[B.bwq,B.bwr,B.bwt,B.bls,B.blq,B.blv,B.blt,B.bly,B.blw])
w(A.cp,[B.bwo,B.bYV,B.bYW,B.bYU,B.bqE])
w(A.I,[B.apB,B.ank,B.anl,B.anm])})()
A.bL(b.typeUniverse,JSON.parse('{"BG":{"V":[],"c":[]},"asp":{"W":["BG"]},"apB":{"I":[],"c":[]},"ank":{"I":[],"c":[]},"anl":{"I":[],"c":[]},"anm":{"I":[],"c":[]}}'))
var y=(function rtii(){var x=A.y
return{p:x("B<c>"),w:x("bb<kc>"),V:x("a2<h,jt>"),P:x("aE"),A:x("dJ"),N:x("h"),a:x("eF"),B:x("jt"),M:x("au<a2<h,jt>>"),x:x("au<dJ>"),z:x("au<G>"),y:x("G"),S:x("u"),u:x("G?"),H:x("~")}})();(function constants(){K.acQ=new A.E(15,10,15,10)})()}
$__dart_deferred_initializers__["238eyFjJe1jcbWcK8a2amdO6On4="] = $__dart_deferred_initializers__.current
