self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
bWd(){return new B.aV6($.bRW(),new A.jU())},
R0:function R0(d,e){this.a=d
this.b=e},
aV6:function aV6(d,e){this.a=d
this.b=e}},A,C,D
B=a.updateHolder(c[90],B)
A=c[0]
C=c[2]
D=c[169]
B.R0.prototype={
N(){return"InvoiceIdTypes."+this.b}}
B.aV6.prototype={
J8(d,e,f,g,h,i,j,k){return this.arJ(d,e,f,g,h,i,j,k)},
arJ(d,e,f,g,h,i,j,k){var x=0,w=A.l(y.c),v,u=this,t,s,r,q,p
var $async$J8=A.h(function(l,m){if(l===1)return A.i(m,w)
while(true)switch(x){case 0:t=C.e.m(d)
s=C.c.m(f)
r=A.aK("enviroments/production","enviroments/","")
q=i?"True":"False"
p=y.c
x=3
return A.e(u.a.I1(A.F(["terminal",j,"transaction_info",k,"amount",t,"currency",s,"email",g,"first_name",h,"phone_number","","business_id",e,"enviroment",r,"last_name","","is_deposit",q],p,p),"/hyp/get_checkout_page","post"),$async$J8)
case 3:v=m
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$J8,w)},
OI(d,e,f,g){return this.b3g(d,e,f,g)},
b3g(d,e,f,g){var x=0,w=A.l(y.c),v,u=this,t
var $async$OI=A.h(function(h,i){if(h===1)return A.i(i,w)
while(true)switch(x){case 0:t=y.c
x=3
return A.e(u.a.I1(A.F(["terminal",e,"transaction_info",g,"transaction_id",f,"business_id",d,"enviroment",A.aK("enviroments/production","enviroments/","")],t,t),"/hyp/commit_transaction","post"),$async$OI)
case 3:v=i
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$OI,w)},
rn(d,e,f){return this.ase(d,e,f)},
ase(d,e,f){var x=0,w=A.l(y.c),v,u=this,t
var $async$rn=A.h(function(g,h){if(g===1)return A.i(h,w)
while(true)switch(x){case 0:t=y.c
x=3
return A.e(u.a.I1(A.F(["terminal",e,"transaction_id",f,"business_id",d,"enviroment",A.aK("enviroments/production","enviroments/","")],t,t),"/hyp/get_payment_token","post"),$async$rn)
case 3:v=h
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$rn,w)},
RQ(d,e,f,g,h,i,j,k,l,m,n,o){return this.bem(d,e,f,g,h,i,j,k,l,m,n,o)},
bem(d,e,f,g,h,i,j,k,l,m,n,o){var x=0,w=A.l(y.c),v,u=this,t,s,r,q,p
var $async$RQ=A.h(function(a0,a1){if(a0===1)return A.i(a1,w)
while(true)switch(x){case 0:t=C.e.m(d)
s=C.c.m(f)
r=A.aK("enviroments/production","enviroments/","")
q=h?"True":"False"
p=y.c
x=3
return A.e(u.a.I1(A.F(["terminal",j,"transaction_info",l,"amount",t,"currency",s,"t_month",n,"t_year",o,"email",g,"first_name",i,"last_name","","user_id",m,"token",k,"business_id",e,"enviroment",r,"is_deposit",q],p,p),"/hyp/pay_with_token","post"),$async$RQ)
case 3:v=a1
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$RQ,w)},
Jh(d,e,f,g){return this.as3(d,e,f,g)},
as3(d,e,f,g){var x=0,w=A.l(y.c),v,u=this,t,s
var $async$Jh=A.h(function(h,i){if(h===1)return A.i(i,w)
while(true)switch(x){case 0:s=$.c5H().h(0,f)
if(s==null)s="transaction_id"
t=y.c
x=3
return A.e(u.a.I1(A.F(["terminal",g,"business_id",d,s,e,"enviroment",A.aK("enviroments/production","enviroments/","")],t,t),"/hyp_invoices/get_invoice_link","post"),$async$Jh)
case 3:v=i
x=1
break
case 1:return A.j(v,w)}})
return A.k($async$Jh,w)}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(B.R0,A.hf)
x(B.aV6,A.T)})()
var y={c:A.A("f")};(function constants(){D.Ei=new B.R0(0,"asm")
D.acE=new B.R0(1,"transactionId")})();(function lazyInitializers(){var x=a.lazy
x($,"czQ","c5H",()=>A.F([D.Ei,"asm",D.acE,"transaction_id"],A.A("R0"),y.c))})()}
$__dart_deferred_initializers__["/6MZBZiZObmf23zFi88Jl/6pcG8="] = $__dart_deferred_initializers__.current
