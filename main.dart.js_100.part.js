self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={FA:function FA(d,e){this.a=d
this.b=e},aIa:function aIa(d,e,f,g){var _=this
_.a=d
_.c=e
_.d=f
_.e=g},aIb:function aIb(d){this.a=d},aIc:function aIc(d,e,f){this.a=d
this.b=e
this.c=f},a7q:function a7q(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
LO(d,e,f,g,h){var w=0,v=A.l(x.H),u,t,s,r,q,p,o
var $async$LO=A.h(function(i,j){if(i===1)return A.i(j,v)
while(true)switch(w){case 0:if(e.z&&e.CW===C.bW&&!f){new A.bf(A.p("waitingForApproval",!0),C.A,C.B,d,null).aZ()
w=1
break}w=3
return A.f(A.no(),$async$LO)
case 3:if(!j){new A.bf(A.p("noInternetConnection",!0),C.A,C.B,d,null).aZ()
w=1
break}w=4
return A.f(new B.aIa(e,f,d,h).NY(),$async$LO)
case 4:t=j
if(t==null){w=1
break}w=t===D.Ca?5:6
break
case 5:w=7
return A.f(J.bS(A.bn("userHelper.21",0),new B.bCe(e,d),x.y),$async$LO)
case 7:w=1
break
case 6:if(e.fr!=null&&g!=null){s=J.bS(A.bn("userHelper.21",0),new B.bCf(e,g),x.y)
r=A.ab(0,1,1,0,0,0,0,!1)
if(!A.a4(r))A.w(A.a7(r))
q=A.p(new A.C(r,!1).u(0,A.aq(0,0,0,0,e.ghS(),0)).a<new A.C(Date.now(),!1).gd1()?"successfullydeletedBooking":"successfullyCanceledBooking",!0)}else{r=$.ak().at.h(0,e.at)==null||f
p=x.y
o=x.K
s=r?A.eK(J.bS(A.bn("userHelper.21",0),new B.bCg(e),p),new B.bCh(),p,o):A.eK(J.bS(A.bn("userHelper.21",0),new B.bCi(e),p),new B.bCj(),p,o)
q=A.p(f?"successfullydeletedBooking":"successfullyCanceledBooking",!0)}w=8
return A.f(A.fi(y.b,d,!1,C.aS,s,null,q,A.az(d,!1),!0,!1,!0,!0,A.aq(0,0,0,0,0,4)).fh(),$async$LO)
case 8:$.cr().op()
$.at().b=!0
case 1:return A.j(u,v)}})
return A.k($async$LO,v)},
bCe:function bCe(d,e){this.a=d
this.b=e},
bCf:function bCf(d,e){this.a=d
this.b=e},
bCg:function bCg(d){this.a=d},
bCh:function bCh(){},
bCi:function bCi(d){this.a=d},
bCj:function bCj(){},
bCm(d,e){var w=0,v=A.l(x.H),u,t,s
var $async$bCm=A.h(function(f,g){if(f===1)return A.i(g,v)
while(true)switch(w){case 0:u=A.az(d,!1)
t=A.aq(0,0,0,0,0,4)
s=x.y
w=2
return A.f(A.fi(y.b,d,!1,C.aS,A.eK(J.bS(A.bn("userHelper.24",0),new B.bCn(e),s),new B.bCo(),s,x.K),null,A.p("notExistTreatment",!0),u,!0,!1,!0,!0,t).fh(),$async$bCm)
case 2:return A.j(null,v)}})
return A.k($async$bCm,v)},
bCn:function bCn(d){this.a=d},
bCo:function bCo(){},
LU(d,e,f,g,h){var w=0,v=A.l(x.H),u,t,s,r,q,p
var $async$LU=A.h(function(i,j){if(i===1)return A.i(j,v)
while(true)switch(w){case 0:if(f){new A.bf(A.p("alreadyPassed",!1),C.A,C.B,d,null).aZ()
w=1
break}w=3
return A.f(A.no(),$async$LU)
case 3:if(!j){new A.bf(A.p("noInternetConnection",!0),C.A,C.B,d,null).aZ()
w=1
break}t=Date.now()
if(new A.C(t,!1).u(0,A.aq(0,0,0,0,h!=null?h.ax:0,0)).a>e.x.gd1()&&e.CW===C.bW){new A.bf(A.p("cantEditCloseToTime",!1),C.A,C.B,d,null).aZ()
w=1
break}if(!e.x.aB(new A.C(Date.now(),!1))){w=1
break}w=!$.cr().b1q(e)?4:5
break
case 4:w=6
return A.f(B.bCm(d,e),$async$LU)
case 6:w=1
break
case 5:s=$.at()
s.b=!1
r=$.ak()
w=r.at.h(0,e.at)==null?7:9
break
case 7:t=A.az(d,!1)
q=A.aq(0,0,0,0,0,4)
p=x.y
w=10
return A.f(A.fi(y.b,d,!1,C.aS,A.eK(J.bS(A.bn("userHelper.22",0),new B.bFX(e),p),new B.bFY(),p,x.K),null,A.p("deletedBookingNotExistWorker",!0),t,!0,!1,!0,!0,q).fh(),$async$LU)
case 10:w=8
break
case 9:r.TE(e.at)
t=e.x
if(g!=null){q=F.q4(e)
q.x=g}else q=e
w=11
return A.f(A.a1V(d,!0,q,t),$async$LU)
case 11:case 8:r.mW()
s.b=!0
case 1:return A.j(u,v)}})
return A.k($async$LU,v)},
bFX:function bFX(d){this.a=d},
bFY:function bFY(){},
HZ:function HZ(d,e){this.a=d
this.b=e},
M6:function M6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a7p:function a7p(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aI9:function aI9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aI8:function aI8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aad:function aad(d,e){this.c=d
this.a=e},
aTc:function aTc(d,e){this.a=d
this.b=e},
aTb:function aTb(d){this.a=d},
aaQ:function aaQ(d,e){this.c=d
this.a=e},
aUL:function aUL(d,e){this.a=d
this.b=e},
aUK:function aUK(d,e){this.a=d
this.b=e},
aUI:function aUI(d){this.a=d},
aUJ:function aUJ(){},
aer:function aer(d,e,f){this.c=d
this.d=e
this.a=f},
aZv:function aZv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aZt:function aZt(d){this.a=d},
aZu:function aZu(d){this.a=d},
Vq:function Vq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbo:function bbo(d,e){this.a=d
this.b=e},
LS(d,e,f){var w=0,v=A.l(x.z),u,t
var $async$LS=A.h(function(g,h){if(g===1)return A.i(h,v)
while(true)switch(w){case 0:w=6
return A.f(A.fF(d,A.bn("invoicePage",0)),$async$LS)
case 6:w=h===!0?3:5
break
case 3:t=A.jT(new B.bEE(f,!0),null,x.X)
w=7
return A.f(A.az(d,!1).hk(t),$async$LS)
case 7:u=h
w=1
break
w=4
break
case 5:new A.bf(A.p("thereIsProblem",!0),C.A,C.B,d,null).aZ()
case 4:case 1:return A.j(u,v)}})
return A.k($async$LS,v)},
bEE:function bEE(d,e){this.a=d
this.b=e},
E0(d,e,f,g){var w=0,v=A.l(x.y),u,t,s,r,q,p,o,n,m
var $async$E0=A.h(function(h,i){if(h===1)return A.i(i,v)
while(true)switch(w){case 0:if(e.Q.h(0,f)==null){u=!1
w=1
break}t=e.Q.h(0,f)
t.toString
m=J
w=3
return A.f(B.bCq(d,e,t),$async$E0)
case 3:if(!m.n(i,!0)){u=!1
w=1
break}w=e.fr!=null||e.fx!=null?4:5
break
case 4:m=J
w=6
return A.f(M.a1T(d),$async$E0)
case 6:if(!m.n(i,!0)){u=!1
w=1
break}case 5:s=$.ak()
r=s.at.h(0,e.at)
if(r==null){u=!1
w=1
break}q=F.q4(e)
q.Q.J(0,f)
if(g!=null){p=F.q4(e)
p.x=g}else p=e
s.mW()
t=A.az(d,!1)
o=x.y
w=7
return A.f(A.fi(y.c,d,!1,C.aS,A.eK(J.bS(A.bn("userHelper.14",0),new B.bCt(q,p,r,!1,e),o),new B.bCu(),o,x.K),null,A.p("treatmentSuccessfullyDeleted",!0),t,!0,!1,!0,!0,C.bb).fh(),$async$E0)
case 7:n=i
w=n?8:10
break
case 8:s=$.fG()
s.as=0
s.a.a1s(-1)
u=!0
w=1
break
w=9
break
case 10:w=$.aM().b===C.kb&&e.Q.h(0,f).Q.a>1?11:12
break
case 11:w=15
return A.f(B.bFI(d),$async$E0)
case 15:w=i===!0?13:14
break
case 13:t=A.az(d,!1)
w=16
return A.f(A.fi(y.c,d,!1,C.aS,B.a2_(e,f,!1),null,A.p("bookingSplitedSuccessfully",!0),t,!0,!1,!0,!0,C.bb).fh(),$async$E0)
case 16:u=i
w=1
break
case 14:case 12:case 9:u=!1
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$E0,v)},
bCq(d,e,f){var w=0,v=A.l(x.u),u,t,s,r
var $async$bCq=A.h(function(g,h){if(g===1)return A.i(h,v)
while(true)switch(w){case 0:t=A.p("treatmentDeletion",!0)
s=A.p("deleteTreatment",!0)
r=f.y
w=3
return A.f(A.rP(null,A.H(A.aX(s,"TREATMENT",r),null,null,null,null,null,null,null,null,C.v,null,null),d,null,new B.bCr(d),new B.bCs(d),!0,t),$async$bCq)
case 3:u=h
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$bCq,v)},
bFI(d){var w=0,v=A.l(x.u),u,t,s,r
var $async$bFI=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:t=A.p("splitBooking",!0)
s=A.H(A.p("splitBookingExplain",!0),null,null,null,null,null,null,null,null,C.v,null,null)
r=A.p("split",!0)
w=3
return A.f(A.fb(C.ba,1,A.p("cancel",!0),s,d,C.O,!0,C.r,new B.bFJ(d),new B.bFK(d),!1,r,t),$async$bFI)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$bFI,v)},
a2_(d,e,f){return B.cq3(d,e,!1)},
cq3(d,e,f){var w=0,v=A.l(x.y),u,t,s,r,q,p,o,n,m,l
var $async$a2_=A.h(function(g,h){if(g===1)return A.i(h,v)
while(true)switch(w){case 0:o={}
n=F.q4(d)
m=x.N
l=x.a
n.Q=A.r(m,l)
t=F.q4(d)
t.Q=A.r(m,l)
s=d.Q.h(0,e)
if(s==null){u=!1
w=1
break}o.a=!1
d.Q.K(0,new B.bFL(o,e,t,n,s))
n.cx=new A.kI().mt()
t.cx=new A.kI().mt()
r=$.ak().at.h(0,d.at)
if(r==null){u=!1
w=1
break}q=$.at()
q.b=!1
w=3
return A.f(A.bn("userHelper.14",0),$async$a2_)
case 3:A.bh("userHelper.14")
o=E.dO()
p=$.er()
w=4
return A.f(o.A_(d,p.b,!1),$async$a2_)
case 4:A.bh("userHelper.14")
o=E.dO().ah1(n,r,p.a,p.b,!0,!0,!1)
A.bh("userHelper.14")
w=5
return A.f(A.fx(A.a([o,E.dO().ah1(t,r,p.a,p.b,!0,!0,!1)],x.C),x.y),$async$a2_)
case 5:u=q.b=!0
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$a2_,v)},
bCt:function bCt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bCu:function bCu(){},
bCr:function bCr(d){this.a=d},
bCs:function bCs(d){this.a=d},
bFJ:function bFJ(d){this.a=d},
bFK:function bFK(d){this.a=d},
bFL:function bFL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
azu(d,e,f){return B.cpw(d,e,f)},
cpw(d,e,f){var w=0,v=A.l(x.y),u,t
var $async$azu=A.h(function(g,h){if(g===1)return A.i(h,v)
while(true)switch(w){case 0:t={}
if(!e.gqz()){u=!1
w=1
break}t.a=""
e.dy.K(0,new B.bFb(t))
if(t.a===""){u=!1
w=1
break}w=3
return A.f(J.bS(A.bn("paymentsHelper.3",0),new B.bFc(t,e,f),x.f).ae(0,new B.bFd(e,d,null),x.y),$async$azu)
case 3:u=h
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$azu,v)},
azq(d,e,f,g){var w=0,v=A.l(x.u),u,t,s
var $async$azq=A.h(function(h,i){if(h===1)return A.i(i,v)
while(true)switch(w){case 0:if(d.gqz()){u=!1
w=1
break}t=d.gfV().a
s=d.gmr().a
w=3
return A.f(J.bS(A.bn("paymentsHelper.3",0),new B.bF1(g,t-s,e,d),x.h).ae(0,new B.bF2(d,f,e),x.u),$async$azq)
case 3:u=i
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$azq,v)},
azz(d,e,f){var w=0,v=A.l(x.u),u,t,s
var $async$azz=A.h(function(g,h){if(g===1)return A.i(h,v)
while(true)switch(w){case 0:t=A.az(d,!1)
s=A.p("depositPaidSuccessfully",!1)
w=3
return A.f(A.fi(y.c,d,!1,A.aq(0,0,0,0,0,0),B.azu(d,e,f),null,s,t,!0,!1,!1,!1,C.bb).fh(),$async$azz)
case 3:if(!h){u=!1
w=1
break}w=4
return A.f(B.azq(e,d,null,f),$async$azz)
case 4:u=h
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$azz,v)},
bFb:function bFb(d){this.a=d},
bFc:function bFc(d,e,f){this.a=d
this.b=e
this.c=f},
bFd:function bFd(d,e,f){this.a=d
this.b=e
this.c=f},
bFa:function bFa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bF1:function bF1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bF2:function bF2(d,e,f){this.a=d
this.b=e
this.c=f},
bF0:function bF0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A,C,D,K,G,L,N,J,E,F,O,I,H,M
B=a.updateHolder(c[40],B)
A=c[0]
C=c[2]
D=c[120]
K=c[76]
G=c[133]
L=c[143]
N=c[100]
J=c[1]
E=c[5]
F=c[3]
O=c[26]
I=c[57]
H=c[82]
M=c[58]
B.FA.prototype={
M(){return"DeleteOption."+this.b}}
B.aIa.prototype={
NY(){var w=0,v=A.l(x.R),u,t=this,s,r,q,p,o,n,m,l
var $async$NY=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:l=t.a
if(l.dy.a===0||t.c)s=A.p("areYouSure",!0)+" ?"
else s=l.gqz()?A.p("thisBookingWithDepositSureDeletionUser",!0):A.p("thisBookingWithPaidPaymentDeletionUser",!0)
r=t.e
q=r!=null
p=q?r.cy:null
o=q&&r.ax!==0&&l.CW===C.bW&&!t.c&&new A.C(Date.now(),!1).u(0,A.aq(0,0,0,0,r.ax,0)).a>l.x.gd1()
n=A.bg(D.a7R,x.U)
r=t.c?"deleteBooking2":"deleteBooking"
r=A.p(r,!0)
q=t.c
if(q)m="delete"
else m=o?"askForConfirmation":"cancel"
m=A.p(m,!0)
w=3
return A.f(A.rP(A.p(q?"cancel":"exit",!0),new B.a7q(o,p,s,l,!1,n,null),t.d,m,new B.aIb(t),new B.aIc(t,o,n),!1,r),$async$NY)
case 3:u=e
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$NY,v)}}
B.a7q.prototype={
q(d){var w,v,u,t,s=this,r="AMOUNT",q=null,p=s.e
if(C.d.t(p,r)){w=A.dV(p.split(r)[0],q,!1,!1,!1,!1,1,q,16,"")
v=s.f
p=K.VP(G.lN,A.a([w,A.dV(v.gqz()?v.gvD().m(0):v.gmr().m(0),q,!1,!1,!0,!1,1,q,16,""),A.dV(p.split(r)[1],C.v,!1,!1,!1,!1,1,q,16,"")],x.p),G.f9,0,0)}else p=A.dV(p,q,!1,!1,!1,!1,1,q,16,"")
w=A.z(q,10,q)
v=A.z(q,q,q)
if(s.c){u=s.d
if(u==null)u=A.p("needConfirmationToDelete",!1)
u=A.H(u,q,q,q,q,q,q,q,A.t(d).p3.z.bW(13),C.v,q,q)}else u=A.z(q,q,q)
s.f.gRW()>1
t=A.z(q,q,q)
return A.ac(A.a([p,w,v,u,t],x.p),C.h,C.k,C.f)}}
B.HZ.prototype={}
B.M6.prototype={
q(d){var w,v,u=this,t=null,s=u.c
if($.bF===s.e){w=u.r
v=x.p
v=A.aP(A.a([new B.a7p(s,u.d,u.f,w,u.e,t),A.aP(A.a([new B.aad(s,t),new B.aer(s,w,t)],v),C.h,C.k,C.f)],v),C.h,C.aI,C.f)
s=v}else s=new B.aaQ(s,t)
return s}}
B.a7p.prototype={
q(d){var w=this,v=w.r,u=w.c,t=w.d,s=w.e
return new A.am(D.a9j,A.aP(A.a([w.b3b(v,u,t,s),w.b4f(v,u,t,s)],x.p),C.h,C.k,C.f),null)},
b4f(d,e,f,g){var w=e.x.aB(new A.C(Date.now(),!1)),v=w?1:0.6
return new A.am(L.w7,A.di(!1,A.dd(A.di(!1,D.abd,w?1:0.5),C.r,new B.aI9(this,f,e,d,g),1),v),null)},
b3b(d,e,f,g){return new A.am(L.w7,A.dd(A.di(!1,D.abc,e.z&&!g?0.7:1),C.r,new B.aI8(this,f,e,d,g),1),null)}}
B.aad.prototype={
q(d){var w=null
if(this.c.dx.a===0)return A.z(w,w,w)
return new A.am(C.eU,A.dd(A.aQ(D.aaJ,w,w,w,w),C.r,new B.aTc(this,d),1),w)}}
B.aaQ.prototype={
q(d){var w=null,v=$.bw(),u=v*0.25,t=A.t(d)
return A.z(A.bA(C.p,w,w,A.H(A.p("loadBuisness",!0),w,w,w,w,w,w,w,A.a1(w,w,A.t(d).ax.r,w,w,w,w,w,w,w,w,17,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),t.ax.f,w,w,w,w,new A.I(u,15,u,15),!0,new B.aUL(this,d),w,new A.I(0,5,0,5),8,!0,!1,w),w,v)}}
B.aer.prototype={
q(d){var w,v=null,u=this.c
if($.bF!==u.e)return A.z(v,v,v)
w=$.ak().y
w===$&&A.b()
if(!(A.ia(w.ax,v)!=null&&w.x!=null))return A.z(v,v,v)
return A.aP(A.a([this.bbF(d,u),this.bbK(d,u)],x.p),C.h,C.k,C.f)},
bbK(d,e){var w,v,u=null
if($.bF!==e.e)return A.z(u,u,u)
w=$.ak().y
w===$&&A.b()
if(!(A.ia(w.ax,u)!=null&&w.x!=null))return A.z(u,u,u)
w=e.dy.a===0||!e.gqz()?A.p("paidUp",!0):A.p("deposited",!0)
v=e.gqz()?e.gvD().a:e.gmr().a
return new A.am(D.a9i,A.ac(A.a([A.H(w+"\n"+A.u(v)+"/"+A.u(e.gfV().a),u,u,u,u,u,u,u,u,C.v,u,u)],x.p),C.h,C.k,C.f),u)},
bbF(d,e){var w,v,u=null
if($.bF!==e.e)return A.z(u,u,u)
w=$.ak().y
w===$&&A.b()
if(!(A.ia(w.ax,u)!=null&&w.x!=null))return A.z(u,u,u)
v=e.gfV().a-e.gmr().a
w=e.CW===C.dU||!C.fV.F(0,e.gfV().b.a)?0.6:1
return A.dd(A.di(!1,A.aQ(v<=0?C.aaw:N.mS,u,u,u,u),w),C.r,new B.aZv(this,v,e,d),1)},
NO(d,e){return this.b0v(d,e)},
b0v(d,e){var w=0,v=A.l(x.T),u,t,s
var $async$NO=A.h(function(f,g){if(f===1)return A.i(g,v)
while(true)switch(w){case 0:t=A.p("chooseAction",!0)
s=x.p
s=A.ac(A.a([K.VP(G.lN,A.a([A.H(A.p("youHaveDepositWhatDoTo",!0).split("AMOUNT")[0],null,null,null,null,null,null,null,null,null,null,null),A.H(e.m(0),null,null,null,null,null,null,null,null,null,C.j,null),A.H(A.p("youHaveDepositWhatDoTo",!0).split("AMOUNT")[1],null,null,null,null,null,null,null,null,null,null,null)],s),G.f9,0,0)],s),C.h,C.k,C.f)
w=3
return A.f(A.fb(C.ba,1,A.p("payDeposit",!0),s,d,C.O,!0,C.r,new B.aZt(d),new B.aZu(d),!1,A.p("redeemAndPayAll",!1),t),$async$NO)
case 3:u=g
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$NO,v)}}
B.Vq.prototype={
q(d){var w,v,u,t,s=this,r=null,q=!s.f,p=q&&s.c.e===$.bF,o=!s.e?1:0.5
p=A.id(A.di(!1,A.dd(A.aQ(C.ce,r,r,r,r),C.r,new B.bbo(s,d),1),o),!1,!1,!1,!1,!1,p)
o=A.z(r,r,10)
w=s.d
v=A.dV(w.y,r,!1,!1,!1,!1,1,r,15,"")
u=w.d
u=u!==""?new A.am(D.Cz,A.dV(u,r,!1,!1,!1,!1,0.7,r,13,""),r):A.z(r,r,r)
t=x.p
u=A.bq(A.aP(A.a([p,o,A.bq(A.ac(A.a([v,u],t),C.aD,C.k,C.f),1)],t),C.h,C.k,C.f),1)
v=A.z(r,r,20)
if(w.gpJ()){p=w.e
p===$&&A.b()
p=J.bz(p)}else p=A.p("noPrice",!0)
p=A.H(p,r,r,r,r,r,r,r,r,r,r,r)
o=A.z(r,r,10)
p=A.aP(A.a([u,v,A.aP(A.a([p,o,A.H(w.grf()?A.nn(A.aq(0,0,0,0,w.ghS(),0),-1):A.p("noTime",!0),r,r,r,r,r,r,r,r,r,r,r)],t),C.h,C.k,C.f)],t),C.h,C.aI,C.f)
return new A.am(C.CH,A.ac(A.a([p,q?A.jm(r,r,1):A.z(r,r,r)],t),C.h,C.k,C.f),r)}}
var z=a.updateTypes(["GC(E)"])
B.aIb.prototype={
$0(){A.az(this.a.d,!1).b2(null)
return null},
$S:0}
B.aIc.prototype={
$0(){var w=this.b?D.Ca:this.c.a
A.az(this.a.d,!1).b2(w)
return null},
$S:0}
B.bCe.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.21")
w=3
return A.f(E.dO().Sm(t.a,t.b,!0),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bCf.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.21")
s=E.dO()
r=t.a
q=F.q4(r)
q.x=t.b
w=3
return A.f(s.N4(q,r.x),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bCg.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this,s
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.21")
s=t.a
w=3
return A.f(E.dO().uI(s,$.er().b,$.ak().at.h(0,s.at)!=null),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bCh.prototype={
$2(d,e){return!1},
$S:14}
B.bCi.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.21")
w=3
return A.f(E.dO().b32(t.a,$.er().b),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bCj.prototype={
$2(d,e){return!1},
$S:14}
B.bCn.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.24")
w=3
return A.f(E.dO().uI(t.a,$.er().b,!1),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bCo.prototype={
$2(d,e){return!1},
$S:14}
B.bFX.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.22")
w=3
return A.f(E.dO().uI(t.a,$.er().b,!1),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bFY.prototype={
$2(d,e){return!1},
$S:14}
B.aI9.prototype={
$0(){var w=0,v=A.l(x.H),u,t=this,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:s=t.b
if(s!=null&&t.c.x.aB(new A.C(Date.now(),!1).u(0,A.aq(s.a,0,0,0,0,0)))){new A.bf("\u05d0\u05d9\u05df \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05dc\u05e2\u05e8\u05d5\u05da \u05d0\u05d9\u05e8\u05d5\u05e2\u05d9\u05dd \u05de\u05e2\u05d1\u05e8 \u05dc\u05d6\u05de\u05e0\u05d9\u05dd \u05e9\u05e4\u05ea\u05d7 \u05d4\u05e2\u05d5\u05d1\u05d3",C.A,C.B,t.d,null).aZ()
w=1
break}w=3
return A.f(B.LU(t.d,t.c,t.e,t.a.f,s),$async$$0)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:2}
B.aI8.prototype={
$0(){var w=0,v=A.l(x.H),u,t=this,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:s=t.b
if(s!=null&&t.c.x.aB(new A.C(Date.now(),!1).u(0,A.aq(s.a,0,0,0,0,0)))){new A.bf("\u05d0\u05d9\u05df \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05dc\u05de\u05d7\u05d5\u05e7 \u05d0\u05d9\u05e8\u05d5\u05e2\u05d9\u05dd \u05de\u05e2\u05d1\u05e8 \u05dc\u05d6\u05de\u05e0\u05d9\u05dd \u05e9\u05e4\u05ea\u05d7 \u05d4\u05e2\u05d5\u05d1\u05d3",C.A,C.B,t.d,null).aZ()
w=1
break}w=3
return A.f(B.LO(t.d,t.c,t.e,t.a.f,s),$async$$0)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:2}
B.aTc.prototype={
$0(){var w=0,v=A.l(x.H),u,t=this,s,r,q
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:s=t.a
w=3
return A.f(J.bS(A.bn("userHelper.12",0),new B.aTb(s),x.n),$async$$0)
case 3:r=e
q=J.T(r)
if(q.gp(r)<s.c.dx.a)new A.bf(A.p("someInvoicesNotFound",!0),C.A,C.B,t.b,null).aZ()
if(q.gp(r)===0){w=1
break}w=4
return A.f(B.LS(t.b,!0,r),$async$$0)
case 4:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:2}
B.aTb.prototype={
$1(d){A.bh("userHelper.12")
return E.dO().BY(this.a.c)},
$S:875}
B.aUL.prototype={
$0(){var w=0,v=A.l(x.P),u,t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:q=$.ak()
p=q.a
o=t.a
n=o.c.e
if(p===n){w=1
break}s=$.at()
s.b=!1
p=t.b
r=A.az(p,!1)
w=3
return A.f(A.fi(y.c,p,!1,C.aS,q.b8F(p,n,s.gd5()),null,A.p("successfullyLoadedBuisness",!0),r,!0,!0,!0,!1,C.bb).fh().ae(0,new B.aUK(o,p),x.P),$async$$0)
case 3:s.b=!0
case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:12}
B.aUK.prototype={
$1(d){var w=0,v=A.l(x.P),u=this,t
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:t=J.iG(d)
if(t.l(d,!0)){$.fG()
$.at().eg()}w=t.l(d,!1)&&$.aM().b===C.mz?2:3
break
case 2:t=x.y
w=4
return A.f(A.ec(u.b,A.eK(J.bS(A.bn("userHelper.13",0),new B.aUI(u.a),t),new B.aUJ(),t,x.K)),$async$$1)
case 4:case 3:return A.j(null,v)}})
return A.k($async$$1,v)},
$S:24}
B.aUI.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.13")
w=3
return A.f(E.dO().uI(t.a.c,$.er().b,!1),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.aUJ.prototype={
$2(d,e){return!1},
$S:14}
B.aZv.prototype={
$0(){var w=0,v=A.l(x.H),u,t=this,s,r,q,p,o,n
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:if(t.b<=0){w=1
break}s=t.c
if(!C.fV.F(0,s.gfV().b.a)){new A.bf(A.p("onlinePaymentsNotValidCurrency",!0),C.A,C.B,t.d,null).aZ()
w=1
break}if(s.CW===C.dU){new A.bf(A.p("noPaymentOnWaitingBooking",!1),C.A,C.B,t.d,null).aZ()
w=1
break}w=!s.gqz()?3:4
break
case 3:r=$.ak().y
r===$&&A.b()
w=5
return A.f(B.azq(s,t.d,t.a.d,r.ax),$async$$0)
case 5:w=1
break
case 4:r=t.d
w=6
return A.f(t.a.NO(r,s.gvD()),$async$$0)
case 6:q=e
if(q==null){w=1
break}w=q==="PAY"?7:9
break
case 7:p=$.ak().y
p===$&&A.b()
w=10
return A.f(B.azz(r,s,p.ax),$async$$0)
case 10:if(e==null){w=1
break}w=8
break
case 9:p=A.az(r,!1)
o=A.p("depositPaidSuccessfully",!1)
n=$.ak().y
n===$&&A.b()
w=11
return A.f(A.fi(y.c,r,!1,C.aS,B.azu(r,s,n.ax),null,o,p,!0,!1,!0,!0,C.bb).fh(),$async$$0)
case 11:case 8:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:2}
B.aZt.prototype={
$0(){A.az(this.a,!1).b2("DEPOSIT")
return null},
$S:0}
B.aZu.prototype={
$0(){A.az(this.a,!1).b2("PAY")
return null},
$S:0}
B.bbo.prototype={
$0(){var w=0,v=A.l(x.H),u,t=this,s
var $async$$0=A.h(function(d,e){if(d===1)return A.i(e,v)
while(true)switch(w){case 0:s=t.a
if(s.e){new A.bf(A.p("cantEditTreatmentOnPaymentBooking",!0),C.A,C.B,t.b,null).aZ()
w=1
break}w=3
return A.f(B.E0(t.b,s.c,s.d.b,s.r),$async$$0)
case 3:case 1:return A.j(u,v)}})
return A.k($async$$0,v)},
$S:2}
B.bEE.prototype={
$1(d){A.bh("invoicePage")
return O.cbh(this.b,this.a)},
$S:z+0}
B.bCt.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.14")
s=E.dO()
r=t.e.x
q=$.er()
w=3
return A.f(s.beN(!0,q.a,q.b,t.a,t.b,r,t.c,t.d),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bCu.prototype={
$2(d,e){return!1},
$S:14}
B.bCr.prototype={
$0(){A.az(this.a,!1).b2(null)
return null},
$S:0}
B.bCs.prototype={
$0(){A.az(this.a,!1).b2(!0)
return null},
$S:0}
B.bFJ.prototype={
$0(){A.az(this.a,!1).b2(null)
return null},
$S:0}
B.bFK.prototype={
$0(){A.az(this.a,!1).b2(!0)
return null},
$S:0}
B.bFL.prototype={
$2(d,e){var w,v=this
if(d===v.b){v.a.a=!0
w=v.d
v.c.x=w.x.u(0,A.aq(0,0,0,0,w.ghS()+v.e.ghS(),0))
return}if(v.a.a){w=v.c.Q
w.j(0,C.c.m(w.a),e)}else{w=v.d.Q
w.j(0,C.c.m(w.a),e)}},
$S:15}
B.bFb.prototype={
$2(d,e){var w=e.a
w===$&&A.b()
if(w===C.cF){w=e.d
w===$&&A.b()
this.a.a=w}},
$S:64}
B.bFc.prototype={
$1(d){var w=0,v=A.l(x.f),u,t=this,s,r,q,p
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("paymentsHelper.3")
s=I.aet()
r=t.b
q=r.e
p=A.p("redeemDepositOn",!0)
r=r.gBB()
w=3
return A.f(s.ER(q,A.aX(p,"TREATMENTS",r),t.c,t.a.a),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:291}
B.bFd.prototype={
$1(d){return this.apU(d)},
apU(d){var w=0,v=A.l(x.y),u,t=this,s,r,q,p,o
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:o=J.T(d)
w=!J.n(o.h(d,"id"),"")&&o.h(d,"id")!=null?3:4
break
case 3:s=t.a
$.iK().b9P(s)
r=s.gvD().a
o=o.h(d,"id")
o.toString
q=H.bKl(r,o,C.dK,!0)
w=5
return A.f(J.bS(A.bn("userHelper.20",0),new B.bFa(q,s,d,t.b),x.y),$async$$1)
case 5:p=f
if(!p)$.aM().b=C.CW
u=p
w=1
break
case 4:$.aM().b=C.wg
u=!1
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:876}
B.bFa.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this,s,r
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.20")
s=E.dO()
r=J.Y(t.c,"Hesh")
if(r==null)r=""
w=3
return A.f(s.beR(t.b,t.d,r,t.a),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8}
B.bF1.prototype={
$1(d){var w=0,v=A.l(x.h),u,t=this
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("paymentsHelper.3")
w=3
return A.f(I.aet().bbG(t.b,t.d,t.c,t.a),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:877}
B.bF2.prototype={
$1(d){return this.apT(d)},
apT(d){var w=0,v=A.l(x.u),u,t=this,s,r,q,p,o,n
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:if(d==null){u=null
w=1
break}s=J.T(d)
w=s.gdW(d)?3:4
break
case 3:r=s.h(d,"Amount")
s=s.h(d,"Id")
s.toString
q=H.bKl(r,s,C.dK,!1)
s=t.a
p=F.q4(s)
o=t.b
if(o!=null)p.x=o
w=5
return A.f(J.bS(A.bn("userHelper.20",0),new B.bF0(q,s,p,d,t.c),x.y),$async$$1)
case 5:n=f
if(!n)$.aM().b=C.CV
u=n
w=1
break
case 4:$.aM().b=C.mx
u=!1
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:878}
B.bF0.prototype={
$1(d){var w=0,v=A.l(x.y),u,t=this,s,r,q
var $async$$1=A.h(function(e,f){if(e===1)return A.i(f,v)
while(true)switch(w){case 0:A.bh("userHelper.20")
s=E.dO()
r=t.b.x
q=J.Y(t.d,"Hesh")
if(q==null)q=""
w=3
return A.f(s.I4(t.c,t.e,q,r,t.a),$async$$1)
case 3:u=f
w=1
break
case 1:return A.j(u,v)}})
return A.k($async$$1,v)},
$S:8};(function inheritance(){var w=a.inherit,v=a.inheritMany
w(B.FA,A.hI)
v(A.S,[B.aIa,B.HZ])
v(A.de,[B.aIb,B.aIc,B.aI9,B.aI8,B.aTc,B.aUL,B.aZv,B.aZt,B.aZu,B.bbo,B.bCr,B.bCs,B.bFJ,B.bFK])
v(A.R,[B.a7q,B.M6,B.a7p,B.aad,B.aaQ,B.aer,B.Vq])
v(A.cF,[B.bCe,B.bCf,B.bCg,B.bCi,B.bCn,B.bFX,B.aTb,B.aUK,B.aUI,B.bEE,B.bCt,B.bFc,B.bFd,B.bFa,B.bF1,B.bF2,B.bF0])
v(A.dk,[B.bCh,B.bCj,B.bCo,B.bFY,B.aUJ,B.bCu,B.bFL,B.bFb])})()
A.cQ(b.typeUniverse,JSON.parse('{"a7q":{"R":[],"d":[]},"M6":{"R":[],"d":[]},"a7p":{"R":[],"d":[]},"aad":{"R":[],"d":[]},"aaQ":{"R":[],"d":[]},"aer":{"R":[],"d":[]},"Vq":{"R":[],"d":[]},"Cv":{"R":[],"d":[]}}'))
var y={b:"assets/animations/delete_animation.json.zip",c:"assets/animations/success_animation.json.zip"}
var x=(function rtii(){var w=A.A
return{U:w("FA"),C:w("B<ae<J>>"),p:w("B<d>"),n:w("F<fh>"),f:w("aj<e,e>"),P:w("aL"),K:w("S"),N:w("e"),a:w("hq"),y:w("J"),z:w("@"),R:w("FA?"),h:w("aj<e,@>?"),X:w("S?"),T:w("e?"),u:w("J?"),H:w("~")}})();(function constants(){D.a7R=new B.FA(0,"deleteAllEvents")
D.Ca=new B.FA(3,"needConfirmation")
D.Cz=new A.I(0,3,0,0)
D.a9i=new A.I(20,15,20,15)
D.a9j=new A.I(25,15,25,15)
D.aaJ=new A.bX(58636,"MaterialIcons",null,!1)
D.abc=new A.jr(C.ce,null,null,null,null)
D.abd=new A.jr(C.cE,null,null,null,null)})()}
$__dart_deferred_initializers__["tKo2co84i1xC5UZ7n8fHht5Vom8="] = $__dart_deferred_initializers__.current
