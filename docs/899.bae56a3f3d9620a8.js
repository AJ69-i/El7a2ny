"use strict";(self.webpackChunkEl7a2ny_Dashboard=self.webpackChunkEl7a2ny_Dashboard||[]).push([[899],{7899:(J,g,i)=>{i.r(g),i.d(g,{AuthModule:()=>O});var d=i(6895),u=i(9299),l=i(4006),y=i(6013),p=i.n(y),t=i(4650),s=i(9549),_=i(4144),Z=i(3336),c=i(4859),v=i(9494);function I(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter valid email "),t.qZA())}function T(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function b(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function A(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t._UZ(2,"br"),t._uU(3),t.qZA()),2&e){const o=t.oxw();let n,r;t.xp6(1),t.hij(" Actual length is : ",null==(n=o.loginForm.get("password"))?null:n.getError("minlength").actualLength," "),t.xp6(2),t.hij(" Required length is : ",null==(r=o.loginForm.get("password"))?null:r.getError("minlength").requiredLength," ")}}function L(e,a){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t._UZ(2,"br"),t._uU(3),t.qZA()),2&e){const o=t.oxw();let n,r;t.xp6(1),t.hij(" Actual length is : ",null==(n=o.loginForm.get("password"))?null:n.getError("maxlength").actualLength," "),t.xp6(2),t.hij(" Required length is : ",null==(r=o.loginForm.get("password"))?null:r.getError("maxlength").requiredLength," ")}}function U(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a correct password "),t.qZA())}const C=[{path:"",component:(()=>{class e{constructor(o){this.router=o,this.hide=!0,this.auth=[{email:"ahmedasemelfert@gmail.com",password:"vSY88s0fPe8UngU5"},{email:"ahmed@el7a2ny.com",password:"Kyv467VYxfQ5mwJ8"},{email:"manager@el7a2ny.com",password:"SX2GXscW949eG6Fu"},{email:"ismail@el7a2ny.com",password:"Hq91azZSk7TBLmzv"}],this.loginForm=new l.cw({email:new l.NI(null,[l.kI.required,l.kI.email,l.kI.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),password:new l.NI(null,[l.kI.required,l.kI.minLength(8),l.kI.maxLength(16)])})}ngOnInit(){"Authenticated"===JSON.parse(localStorage.getItem("Auth"))?this.router.navigateByUrl("/emergency",{replaceUrl:!0}):this.router.navigateByUrl("/",{replaceUrl:!0})}login(o){console.log(o.get("password")?.hasError("password")),o.valid&&(this.auth.findIndex(r=>r.email==o.value.email&&r.password==this.loginForm.value.password)>-1?(p().success({title:"successfully done !!",message:"You have logged in successfully",timeout:5e3,position:"topLeft",transitionIn:"fadeInDown",transitionOut:"fadeOutLeft",drag:!0,transitionInMobile:"fadeInDown",transitionOutMobile:"fadeOutDown"}),localStorage.setItem("Auth",JSON.stringify("Authenticated")),this.router.navigateByUrl("/emergency",{replaceUrl:!0})):p().error({title:"Failure login !!",message:"Not logged yet",timeout:5e3,position:"topLeft",transitionIn:"fadeIn",transitionOut:"fadeOutLeft",drag:!0,transitionInMobile:"fadeInDown",transitionOutMobile:"fadeOutDown"}))}GoToForgetPassword(){this.router.navigate(["/forget-password"])}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:30,vars:11,consts:[[1,"container-fluid","vh-100","d-flex","justify-content-center","align-items-center"],[1,"container","rounded-5"],[1,"row","p-lg-5","p-md-3","p-sm-3","p-3"],[1,"col-lg-6","col-md-12","col-sm-12","d-flex","flex-column","justify-content-center","align-items-center","mb-lg-0","mb-md-4","mb-sm-4","mb-4"],[1,"fs-1"],[1,"w-100","d-flex","flex-column","justify-content-center","align-items-center",3,"formGroup","ngSubmit"],[1,"example-full-width"],["type","email","matInput","","formControlName","email","placeholder","Enter your email"],[4,"ngIf"],["type","password","matInput","","formControlName","password","placeholder","Enter the password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary","type","submit",1,"mb-3","mt-5"],["mat-raised-button","","color","primary","type","submit",3,"click"],[1,"col-lg-6","col-md-12","col-sm-12","d-flex","justify-content-center","align-items-center"],["lazyLoad","https://aj69-i.github.io/El7a2ny/assets/img/logo.webp","defaultImage","https://aj69-i.github.io/El7a2ny/assets/img/logo.webp","loading","lazy","decoding","async","alt","El7a2ny logo",1,"w-100"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"section",3)(4,"h1",4),t._uU(5,"Login"),t.qZA(),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return n.login(n.loginForm)}),t.TgZ(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Email"),t.qZA(),t._UZ(10,"input",7),t.YNc(11,I,2,0,"mat-error",8),t.YNc(12,T,4,0,"mat-error",8),t.qZA(),t.TgZ(13,"mat-form-field",6)(14,"mat-label"),t._uU(15,"Password"),t.qZA(),t._UZ(16,"input",9),t.YNc(17,b,4,0,"mat-error",8),t.YNc(18,A,4,2,"mat-error",8),t.YNc(19,L,4,2,"mat-error",8),t.YNc(20,U,2,0,"mat-error",8),t.TgZ(21,"button",10),t.NdJ("click",function(){return n.hide=!n.hide}),t.TgZ(22,"mat-icon"),t._uU(23),t.qZA()()(),t.TgZ(24,"button",11),t._uU(25,"Login"),t.qZA(),t.TgZ(26,"button",12),t.NdJ("click",function(){return n.GoToForgetPassword()}),t._uU(27,"Forgot password ?"),t.qZA()()(),t.TgZ(28,"div",13),t._UZ(29,"img",14),t.qZA()()()()),2&o){let r,f,h,w,x,m;t.xp6(6),t.Q6J("formGroup",n.loginForm),t.xp6(5),t.Q6J("ngIf",(null==(r=n.loginForm.get("email"))?null:r.hasError("email"))&&!(null!=(r=n.loginForm.get("email"))&&r.hasError("required"))),t.xp6(1),t.Q6J("ngIf",null==(f=n.loginForm.get("email"))?null:f.hasError("required")),t.xp6(4),t.Q6J("type",n.hide?"password":"text"),t.xp6(1),t.Q6J("ngIf",null==(h=n.loginForm.get("password"))?null:h.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(w=n.loginForm.get("password"))?null:w.getError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(x=n.loginForm.get("password"))?null:x.getError("maxlength")),t.xp6(1),t.Q6J("ngIf",(null==(m=n.loginForm.get("password"))?null:m.hasError("password"))||!(null!=(m=n.loginForm.get("password"))&&m.hasError("required"))),t.xp6(1),t.uIk("aria-label","Hide password")("aria-pressed",n.hide),t.xp6(2),t.Oqu(n.hide?"visibility_off":"visibility")}},dependencies:[d.O5,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,s.KE,s.hX,s.TO,s.R9,_.Nt,Z.Hw,c.lW,c.RK,v.z1],styles:[".container[_ngcontent-%COMP%]{background-color:#f7f7f7;box-shadow:#0000002b 0 -23px 25px inset,#00000026 0 -36px 30px inset,#0000001a 0 -79px 40px inset,#0000000f 0 2px 1px,#00000017 0 4px 2px,#00000017 0 8px 4px,#00000017 0 16px 8px,#00000017 0 32px 16px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}h1[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}@media only screen and (min-width: 600px){.container-fluid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}}@media only screen and (max-width: 600px){.container-fluid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}}"]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(C),u.Bz]}),e})();var E=i(2448);let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,F,E.m]}),e})()}}]);