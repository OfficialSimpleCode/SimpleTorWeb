self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
a_Q(d){var x=new A.ej("","","",$,$,$,!1,$,$,"",-2,1,1,!1,!0,A.n(y.w,y.t))
x.aK0(d,{})
return x},
bxX:function bxX(d,e){this.a=d
this.b=e},
bxW:function bxW(d,e,f){this.a=d
this.b=e
this.c=f},
bxV:function bxV(d,e){this.a=d
this.b=e},
c4E(d,e){var x={}
x.a=!1
C.b.q(d.x,new B.c4F(x,e))
return x.a},
c4F:function c4F(d,e){this.a=d
this.b=e},
crL(d,e){var x={},w=A.n(y.w,y.y)
x.a=e
B.a_Q(d.dx).cx.q(0,new B.c3N(x,w))
return w},
cf0(d,e,f){var x,w={}
w.a=w.b=0
x=e.gag(e)
C.b.q(d,new B.c5I(w,A.ap(x,!0,A.E(x).j("M.E")),f))
return w.b},
HN(d,e,f,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="HH:mm"
if(d==null)return!1
x=!a0
if(x&&d.z&&B.c4E(d,e.cx)){$.bb().aL(C.Z,"Holiday is free day for this worker -> don't generate times",h,h)
return!1}if(x&&d.arV(e.cx)){$.bb().aL(C.Z,"This day is closin by the worker",h,h)
return!1}f=A.w(g,h).au(A.w(g,h).v(f),!1,!1)
w=a0?A.a([A.w(g,h).au("00:00",!1,!1),A.w(g,h).au("23:59",!1,!1)],y.A):h
v=A.w("dd-MM-yyyy",h).v(e.cx)
x=w==null
u=x?E.ceC(d.Yr(e.cx)):w
t=B.cqV(d,v,a1,a2,a3)
if(x)C.b.iJ(u)
C.b.iJ(t)
s=B.crV(t,f)
r=B.a_Q(e.dx)
x=r.cx
q=J.aH(x.gdu(x))
p=J.jb(q,y.e)
for(o=0;o<q;++o)p[o]=0
for(n=0;n<u.length;n+=2){m=u[n]
l=u[n+1]
if(m.al(f))break
if(!l.al(f))continue
k=r.a
if(f.t(0,new A.b5(6e7*(k===$?r.a=0:k))).al(l)){$.aO().b=C.Ev
return!1}j=B.crL(e,f)
i=B.cf0(p,j,s)===0
if(!i&&B.cUX(e,f,v,d,j)){$.aO().b=C.kZ
return!1}return i}return!1},
cUX(d,e,f,g,h){var x,w,v,u,t={},s=g.RG
if(!s.c.G(0,f))return!1
t.a=A.a([],y.A)
s.c.h(0,f).q(0,new B.c4D(t))
x=B.crV(t.a,e)
s=B.a_Q(d.dx).cx
w=J.aH(s.gdu(s))
v=J.jb(w,y.e)
for(u=0;u<w;++u)v[u]=0
return B.cf0(v,h,x)!==0},
crV(d,e){var x,w,v=A.a([],y.A)
for(x=0;x<d.length;x+=2){w=x+1
if(!d[w].ah(e)){v.push(d[x])
v.push(d[w])}}return v},
cqV(d,e,f,g,h){var x,w,v="dd-MM-yyyy",u=null,t={},s=A.a([],y.A),r=A.w(v,u).au(e,!1,!1),q=d.RG
if(q.a.G(0,e)){q=q.a.h(0,e)
q.toString
x=A.E(q).j("aT<1>")
x=A.k9(new A.aT(q,x),new B.c1X(s,d,e),x.j("M.E"),y.F)
A.ap(x,!0,A.E(x).j("M.E"))}w=A.aI(y.w)
if(f&&g!=null&&h!=null)g.gpF().q(0,new B.c1Y(w,h))
d.bn.b.q(0,new B.c1Z(f,g,r,w,s))
if(f&&g!=null&&g.fr===d.d&&g.p4==null){q=g.cx
if(C.c.S(r.dD(A.w(v,u).au(A.w(v,u).v(q),!1,!1)).a,1e6)===0){q=g.cx
t.a=A.w("HH:mm",u).au(A.w("HH:mm",u).v(q),!1,!1)
B.a_Q(g.dx).cx.q(0,new B.c2_(t,s))}}return s},
c3N:function c3N(d,e){this.a=d
this.b=e},
c5I:function c5I(d,e,f){this.a=d
this.b=e
this.c=f},
c4D:function c4D(d){this.a=d},
c1X:function c1X(d,e,f){this.a=d
this.b=e
this.c=f},
c1Y:function c1Y(d,e){this.a=d
this.b=e},
c1Z:function c1Z(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c1W:function c1W(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c2_:function c2_(d,e){this.a=d
this.b=e}},A,C,D,J,E
B=a.updateHolder(c[8],B)
A=c[0]
C=c[2]
D=c[198]
J=c[1]
E=c[150]
var z=a.updateTypes([])
B.bxX.prototype={
$2(d,e){A.u9(e.z,new B.bxW(this.a,this.b,e),y.F)},
$S:12}
B.bxW.prototype={
$1(d){var x,w,v=this.c,u=this.b
v.cx.q(0,new B.bxV(this.a,u))
x=v.e
x===$&&A.b()
if(x!=null){w=u.e
w===$&&A.b()
w.a=w.a+x.a
w.b=x.b}x=u.Q
w=v.Q
if(x==="")u.Q=w
else u.Q=x+(" + "+w)
u.y=u.gpn()&&v.gpn()
u.x=u.gqE()&&v.gqE()
x=v.r
x===$&&A.b()
u.r=x
u.f=u.giM()+v.giM()
u.a=u.gfv()+v.gfv()},
$S:45}
B.bxV.prototype={
$2(d,e){var x=this.a
this.b.cx.i(0,""+x.a,e);++x.a},
$S:32}
B.c4F.prototype={
$1(d){var x,w,v=A.w("dd-MM-yyyy",null).v(this.b)
switch(d.a){case 1:x=C.d.ap(v,0,v.length-4)
w=this.a
w.a=w.a||D.TV.G(0,x+"0000")
return
default:x=this.a
x.a=x.a||D.lL.h(0,d).G(0,v)
return}},
$S:186}
B.c3N.prototype={
$2(d,e){var x=this.a,w=x.a.t(0,A.a_(0,0,0,0,e.b,0))
x.a=w
this.b.i(0,d,A.G(["start",w,"duration",A.a_(0,0,0,0,e.a,0)],y.w,y.b))
x.a=x.a.t(0,A.a_(0,0,0,0,e.a,0))},
$S:32}
B.c5I.prototype={
$1(d){var x,w,v,u,t,s=this.b,r=this.a,q=J.W(s[r.a],"start"),p=q.t(0,J.W(s[r.a],"duration"))
for(s=this.c,x=s.length;d<x;d+=2){w=d+1
if(w>=x)break
v=s[d]
w=s[w]
u=A.xK(v,w,q,p)
if(u==="STRIKE"){t=C.c.S(w.dD(q).a,6e7)
r.b=Math.max(r.b,t)
break}if(u==="BEFORE")break}++r.a},
$S:18}
B.c4D.prototype={
$2(d,e){var x,w,v,u,t,s
try{x=A.w("HH:mm",null).au(d,!1,!1)
w=J.dJ(x,A.a_(0,0,0,0,J.W(e,1),0))
t=this.a
t.a=C.b.a7(t.a,A.a([x,w],y.A))}catch(s){v=A.al(s)
u="Error while creating the during payment list, iilegal list"
$.bb().aL(C.V,A.x(u)+" -> "+A.x(e)+"\n"+A.x(v),null,null)}},
$S:293}
B.c1X.prototype={
$1(d){var x,w=A.w("HH:mm",null).au(d,!1,!1),v=this.a
v.push(w)
x=this.b.RG.a.h(0,this.c).h(0,d)
x.toString
v.push(w.t(0,A.a_(0,0,0,0,x,0)))},
$S:50}
B.c1Y.prototype={
$2(d,e){var x,w,v=A.w("HH:mm",null).au(d,!1,!1),u=this.b,t=u.gD(),s=u.gM()
u=u.gac()
x=v.gbE()
w=v.gc9()
u=A.aa(t,s,u,x,w,0,0,!1)
if(!A.a4(u))A.z(A.a7(u))
this.a.t(0,new A.B(u,!1).l(0))},
$S:29}
B.c1Z.prototype={
$2(d,e){var x=this
J.aK(e,new B.c1W(x.a,x.b,x.c,x.d,x.e))},
$S:57}
B.c1W.prototype={
$2(d,e){var x,w,v,u=this
if(u.a){x=u.b
x=x!=null&&x.p4!=null}else x=!1
if(x){w=A.w("HH:mm",null).au(d,!1,!1)
if(u.d.A(0,u.c.t(0,A.a_(0,w.gbE(),0,0,w.gc9(),0)).l(0)))return}x=e.fr
if(x==null)return
if(x.ks(u.c)){v=A.w("HH:mm",null).au(d,!1,!1)
x=u.e
x.push(v)
x.push(v.t(0,A.a_(0,0,0,0,e.at,0)))}},
$S:29}
B.c2_.prototype={
$2(d,e){var x,w,v=this.a,u=v.a.t(0,A.a_(0,0,0,0,e.b,0))
v.a=u
x=u.t(0,A.a_(0,0,0,0,e.a,0))
w=this.b
C.b.L(w,v.a)
C.b.L(w,x)
v.a=x},
$S:32};(function inheritance(){var x=a.inheritMany
x(A.cc,[B.bxX,B.bxV,B.c3N,B.c4D,B.c1Y,B.c1Z,B.c1W,B.c2_])
x(A.bF,[B.bxW,B.c4F,B.c5I,B.c1X])})()
var y={p:A.y("aq<l,l>"),A:A.y("C<B>"),x:A.y("C<l>"),y:A.y("V<l,@>"),F:A.y("aG"),w:A.y("l"),t:A.y("hw"),b:A.y("@"),e:A.y("v")};(function constants(){var x=a.makeConstList
D.al_=A.a(x(["01-01-0000","16-01-0000","20-02-0000","29-05-0000","19-06-0000","04-07-0000","04-09-0000","09-10-0000","11-11-0000","23-11-0000","25-12-0000"]),y.x)
D.TV=new A.aq(11,{"01-01-0000":"New Year's Day","16-01-0000":"Martin Luther King Jr. Day","20-02-0000":"Presidents' Day","29-05-0000":"Memorial Day","19-06-0000":"Juneteenth","04-07-0000":"Independence Day","04-09-0000":"Labor Day","09-10-0000":"Columbus Day","11-11-0000":"Veterans Day","23-11-0000":"Thanksgiving Day","25-12-0000":"Christmas Day"},D.al_,y.p)
D.akN=A.a(x(["06-04-2023","12-04-2023","26-04-2023","26-05-2023","16-09-2023","17-09-2023","25-09-2023","30-09-2023","07-10-2023","23-04-2024","29-04-2024","14-05-2024","12-06-2024","03-10-2024","04-10-2024","12-10-2024","17-10-2024","24-10-2024","13-04-2025","19-04-2025","01-05-2025","02-06-2025","23-09-2025","24-09-2025","02-10-2025","07-10-2025","14-10-2025"]),y.x)
D.apc=new A.aq(27,{"06-04-2023":"Passover (Day 1)","12-04-2023":"Passover (Day 7)","26-04-2023":"Yom HaAtzmaut","26-05-2023":"Shavuot","16-09-2023":"Rosh Hashana","17-09-2023":"Rosh Hashana (Day 2)","25-09-2023":"Yom Kippur","30-09-2023":"Sukkot","07-10-2023":"Simchat Torah","23-04-2024":"Passover (Day 1)","29-04-2024":"Passover (Day 7)","14-05-2024":"Yom HaAtzmaut","12-06-2024":"Shavuot","03-10-2024":"Rosh Hashana","04-10-2024":"Rosh Hashana (Day 2)","12-10-2024":"Yom Kippur","17-10-2024":"Sukkot","24-10-2024":"Simchat Torah","13-04-2025":"Passover (Day 1)","19-04-2025":"Passover (Day 7)","01-05-2025":"Yom HaAtzmaut","02-06-2025":"Shavuot","23-09-2025":"Rosh Hashana","24-09-2025":"Rosh Hashana (Day 2)","02-10-2025":"Yom Kippur","07-10-2025":"Sukkot","14-10-2025":"Simchat Torah"},D.akN,y.p)
D.lL=new A.bm([C.zx,D.TV,C.zy,D.apc],A.y("bm<m7,V<l,l>>"))})()}
$__dart_deferred_initializers__["ko3etu8hjoe/1QMBOMaI0RvioLE="] = $__dart_deferred_initializers__.current
