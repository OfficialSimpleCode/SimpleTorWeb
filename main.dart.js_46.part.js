self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
a_Z(d){var x=new A.ei("","","",$,$,$,!1,$,$,"",-2,1,1,!0,A.n(y.w,y.t))
x.aJY(d,{})
return x},
bzf:function bzf(d,e){this.a=d
this.b=e},
bze:function bze(d,e,f){this.a=d
this.b=e
this.c=f},
bzd:function bzd(d,e){this.a=d
this.b=e},
c6a(d,e){var x={}
x.a=!1
C.b.q(d.x,new B.c6b(x,e))
return x.a},
c6b:function c6b(d,e){this.a=d
this.b=e},
ctu(d,e){var x={},w=A.n(y.w,y.y)
x.a=e
B.a_Z(d.dx).CW.q(0,new B.c58(x,w))
return w},
cgC(d,e,f){var x,w={}
w.a=w.b=0
x=e.gae(e)
C.b.q(d,new B.c7a(w,A.ao(x,!0,A.E(x).j("M.E")),f))
return w.b},
HR(d,e,f,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="HH:mm"
if(d==null)return!1
x=!a0
if(x&&d.z&&B.c6a(d,e.cx)){$.be().aR(C.X,"Holiday is free day for this worker -> don't generate times",h,h)
return!1}if(x&&d.arW(e.cx)){$.be().aR(C.X,"This day is closin by the worker",h,h)
return!1}f=A.w(g,h).aq(A.w(g,h).u(f),!1,!1)
w=a0?A.a([A.w(g,h).aq("00:00",!1,!1),A.w(g,h).aq("23:59",!1,!1)],y.A):h
v=A.w("dd-MM-yyyy",h).u(e.cx)
x=w==null
u=x?E.cgb(d.Yi(e.cx)):w
t=B.csC(d,v,a1,a2,a3)
if(x)C.b.iA(u)
C.b.iA(t)
s=B.ctE(t,f)
r=B.a_Z(e.dx)
x=r.CW
q=J.aL(x.gdv(x))
p=J.jg(q,y.e)
for(o=0;o<q;++o)p[o]=0
for(n=0;n<u.length;n+=2){m=u[n]
l=u[n+1]
if(m.al(f))break
if(!l.al(f))continue
k=r.a
if(f.t(0,new A.b5(6e7*(k===$?r.a=0:k))).al(l)){$.aP().b=C.Ew
return!1}j=B.ctu(e,f)
i=B.cgC(p,j,s)===0
if(!i&&B.cWT(e,f,v,d,j)){$.aP().b=C.kW
return!1}return i}return!1},
cWT(d,e,f,g,h){var x,w,v,u,t={},s=g.R8
if(!s.c.H(0,f))return!1
t.a=A.a([],y.A)
s.c.h(0,f).q(0,new B.c69(t))
x=B.ctE(t.a,e)
s=B.a_Z(d.dx).CW
w=J.aL(s.gdv(s))
v=J.jg(w,y.e)
for(u=0;u<w;++u)v[u]=0
return B.cgC(v,h,x)!==0},
ctE(d,e){var x,w,v=A.a([],y.A)
for(x=0;x<d.length;x+=2){w=x+1
if(!d[w].ah(e)){v.push(d[x])
v.push(d[w])}}return v},
csC(d,e,f,g,h){var x,w,v="dd-MM-yyyy",u=null,t={},s=A.a([],y.A),r=A.w(v,u).aq(e,!1,!1),q=d.R8
if(q.a.H(0,e)){q=q.a.h(0,e)
q.toString
x=A.E(q).j("aR<1>")
x=A.k9(new A.aR(q,x),new B.c3c(s,d,e),x.j("M.E"),y.F)
A.ao(x,!0,A.E(x).j("M.E"))}w=A.aK(y.w)
if(f&&g!=null&&h!=null)g.gpA().q(0,new B.c3d(w,h))
d.bY.b.q(0,new B.c3e(f,g,r,w,s))
if(f&&g!=null&&g.fr===d.d&&g.p4==null){q=g.cx
if(C.c.R(r.dD(A.w(v,u).aq(A.w(v,u).u(q),!1,!1)).a,1e6)===0){q=g.cx
t.a=A.w("HH:mm",u).aq(A.w("HH:mm",u).u(q),!1,!1)
B.a_Z(g.dx).CW.q(0,new B.c3f(t,s))}}return s},
c58:function c58(d,e){this.a=d
this.b=e},
c7a:function c7a(d,e,f){this.a=d
this.b=e
this.c=f},
c69:function c69(d){this.a=d},
c3c:function c3c(d,e,f){this.a=d
this.b=e
this.c=f},
c3d:function c3d(d,e){this.a=d
this.b=e},
c3e:function c3e(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3b:function c3b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c3f:function c3f(d,e){this.a=d
this.b=e}},A,C,D,J,E
B=a.updateHolder(c[8],B)
A=c[0]
C=c[2]
D=c[204]
J=c[1]
E=c[155]
var z=a.updateTypes([])
B.bzf.prototype={
$2(d,e){A.ub(e.z,new B.bze(this.a,this.b,e),y.F)},
$S:12}
B.bze.prototype={
$1(d){var x,w,v=this.c,u=this.b
v.CW.q(0,new B.bzd(this.a,u))
x=v.e
x===$&&A.b()
if(x!=null){w=u.e
w===$&&A.b()
w.a=w.a+x.a
w.b=x.b}x=u.Q
w=v.Q
if(x==="")u.Q=w
else u.Q=x+(" + "+w)
u.y=u.gpj()&&v.gpj()
u.x=u.gqC()&&v.gqC()
x=v.r
x===$&&A.b()
u.r=x
u.f=u.giR()+v.giR()
u.a=u.gfB()+v.gfB()},
$S:47}
B.bzd.prototype={
$2(d,e){var x=this.a
this.b.CW.i(0,""+x.a,e);++x.a},
$S:34}
B.c6b.prototype={
$1(d){var x,w,v=A.w("dd-MM-yyyy",null).u(this.b)
switch(d.a){case 1:x=C.d.ap(v,0,v.length-4)
w=this.a
w.a=w.a||D.TQ.H(0,x+"0000")
return
default:x=this.a
x.a=x.a||D.lG.h(0,d).H(0,v)
return}},
$S:218}
B.c58.prototype={
$2(d,e){var x=this.a,w=x.a.t(0,A.Z(0,0,0,0,e.b,0))
x.a=w
this.b.i(0,d,A.G(["start",w,"duration",A.Z(0,0,0,0,e.a,0)],y.w,y.b))
x.a=x.a.t(0,A.Z(0,0,0,0,e.a,0))},
$S:34}
B.c7a.prototype={
$1(d){var x,w,v,u,t,s=this.b,r=this.a,q=J.a_(s[r.a],"start"),p=q.t(0,J.a_(s[r.a],"duration"))
for(s=this.c,x=s.length;d<x;d+=2){w=d+1
if(w>=x)break
v=s[d]
w=s[w]
u=A.xG(v,w,q,p)
if(u==="STRIKE"){t=C.c.R(w.dD(q).a,6e7)
r.b=Math.max(r.b,t)
break}if(u==="BEFORE")break}++r.a},
$S:22}
B.c69.prototype={
$2(d,e){var x,w,v,u,t,s
try{x=A.w("HH:mm",null).aq(d,!1,!1)
w=J.dL(x,A.Z(0,0,0,0,J.a_(e,1),0))
t=this.a
t.a=C.b.a7(t.a,A.a([x,w],y.A))}catch(s){v=A.aq(s)
u="Error while creating the during payment list, iilegal list"
$.be().aR(C.a1,A.x(u)+" -> "+A.x(e)+"\n"+A.x(v),null,null)}},
$S:263}
B.c3c.prototype={
$1(d){var x,w=A.w("HH:mm",null).aq(d,!1,!1),v=this.a
v.push(w)
x=this.b.R8.a.h(0,this.c).h(0,d)
x.toString
v.push(w.t(0,A.Z(0,0,0,0,x,0)))},
$S:61}
B.c3d.prototype={
$2(d,e){var x,w,v=A.w("HH:mm",null).aq(d,!1,!1),u=this.b,t=u.gD(),s=u.gM()
u=u.gac()
x=v.gbD()
w=v.gca()
u=A.ac(t,s,u,x,w,0,0,!1)
if(!A.a6(u))A.A(A.ab(u))
this.a.t(0,new A.B(u,!1).l(0))},
$S:31}
B.c3e.prototype={
$2(d,e){var x=this
J.aI(e,new B.c3b(x.a,x.b,x.c,x.d,x.e))},
$S:60}
B.c3b.prototype={
$2(d,e){var x,w,v,u=this
if(u.a){x=u.b
x=x!=null&&x.p4!=null}else x=!1
if(x){w=A.w("HH:mm",null).aq(d,!1,!1)
if(u.d.A(0,u.c.t(0,A.Z(0,w.gbD(),0,0,w.gca(),0)).l(0)))return}x=e.fr
if(x==null)return
if(x.k8(u.c)){v=A.w("HH:mm",null).aq(d,!1,!1)
x=u.e
x.push(v)
x.push(v.t(0,A.Z(0,0,0,0,e.at,0)))}},
$S:31}
B.c3f.prototype={
$2(d,e){var x,w,v=this.a,u=v.a.t(0,A.Z(0,0,0,0,e.b,0))
v.a=u
x=u.t(0,A.Z(0,0,0,0,e.a,0))
w=this.b
C.b.N(w,v.a)
C.b.N(w,x)
v.a=x},
$S:34};(function inheritance(){var x=a.inheritMany
x(A.c0,[B.bzf,B.bzd,B.c58,B.c69,B.c3d,B.c3e,B.c3b,B.c3f])
x(A.bD,[B.bze,B.c6b,B.c7a,B.c3c])})()
var y={p:A.y("as<l,l>"),A:A.y("C<B>"),x:A.y("C<l>"),y:A.y("W<l,@>"),F:A.y("aB"),w:A.y("l"),t:A.y("hC"),b:A.y("@"),e:A.y("v")};(function constants(){var x=a.makeConstList
D.akJ=A.a(x(["01-01-0000","16-01-0000","20-02-0000","29-05-0000","19-06-0000","04-07-0000","04-09-0000","09-10-0000","11-11-0000","23-11-0000","25-12-0000"]),y.x)
D.TQ=new A.as(11,{"01-01-0000":"New Year's Day","16-01-0000":"Martin Luther King Jr. Day","20-02-0000":"Presidents' Day","29-05-0000":"Memorial Day","19-06-0000":"Juneteenth","04-07-0000":"Independence Day","04-09-0000":"Labor Day","09-10-0000":"Columbus Day","11-11-0000":"Veterans Day","23-11-0000":"Thanksgiving Day","25-12-0000":"Christmas Day"},D.akJ,y.p)
D.akw=A.a(x(["06-04-2023","12-04-2023","26-04-2023","26-05-2023","16-09-2023","17-09-2023","25-09-2023","30-09-2023","07-10-2023","23-04-2024","29-04-2024","14-05-2024","12-06-2024","03-10-2024","04-10-2024","12-10-2024","17-10-2024","24-10-2024","13-04-2025","19-04-2025","01-05-2025","02-06-2025","23-09-2025","24-09-2025","02-10-2025","07-10-2025","14-10-2025"]),y.x)
D.aoP=new A.as(27,{"06-04-2023":"Passover (Day 1)","12-04-2023":"Passover (Day 7)","26-04-2023":"Yom HaAtzmaut","26-05-2023":"Shavuot","16-09-2023":"Rosh Hashana","17-09-2023":"Rosh Hashana (Day 2)","25-09-2023":"Yom Kippur","30-09-2023":"Sukkot","07-10-2023":"Simchat Torah","23-04-2024":"Passover (Day 1)","29-04-2024":"Passover (Day 7)","14-05-2024":"Yom HaAtzmaut","12-06-2024":"Shavuot","03-10-2024":"Rosh Hashana","04-10-2024":"Rosh Hashana (Day 2)","12-10-2024":"Yom Kippur","17-10-2024":"Sukkot","24-10-2024":"Simchat Torah","13-04-2025":"Passover (Day 1)","19-04-2025":"Passover (Day 7)","01-05-2025":"Yom HaAtzmaut","02-06-2025":"Shavuot","23-09-2025":"Rosh Hashana","24-09-2025":"Rosh Hashana (Day 2)","02-10-2025":"Yom Kippur","07-10-2025":"Sukkot","14-10-2025":"Simchat Torah"},D.akw,y.p)
D.lG=new A.bq([C.zs,D.TQ,C.zt,D.aoP],A.y("bq<m6,W<l,l>>"))})()}
$__dart_deferred_initializers__["svx6G3obSdeG1/zatb1n3Qm3sm4="] = $__dart_deferred_initializers__.current
