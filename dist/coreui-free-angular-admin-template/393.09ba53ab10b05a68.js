"use strict";(self.webpackChunkcoreui_free_angular_admin_template=self.webpackChunkcoreui_free_angular_admin_template||[]).push([[393],{8393:(O,p,d)=>{d.r(p),d.d(p,{SettingsModule:()=>w});var g=d(6895),h=d(9455),e=d(4650),f=d(7241),Z=d(5830),_=d(388),u=d(4006),c=d(8423),m=d(502);const y=["largeModal"];function M(s,r){if(1&s&&(e.TgZ(0,"option",16),e._uU(1),e.qZA()),2&s){const n=r.$implicit;e.Q6J("value",n.id),e.xp6(1),e.Oqu(n.name)}}const a=function(){return{standalone:!0}};function C(s,r){if(1&s){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",8)(2,"div",9)(3,"label"),e._uU(4),e.TgZ(5,"span",10),e._uU(6,"*"),e.qZA()(),e.TgZ(7,"input",11),e.NdJ("ngModelChange",function(l){e.CHM(n);const o=e.oxw();return e.KtG(o.twilloCreds.sid=l)}),e.qZA()()(),e.TgZ(8,"div",8)(9,"div",9)(10,"label"),e._uU(11),e.TgZ(12,"span",10),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"input",11),e.NdJ("ngModelChange",function(l){e.CHM(n);const o=e.oxw();return e.KtG(o.twilloCreds.token=l)}),e.qZA()()(),e.TgZ(15,"div",8)(16,"div",9)(17,"label"),e._uU(18),e.TgZ(19,"span",10),e._uU(20,"*"),e.qZA()(),e.TgZ(21,"input",11),e.NdJ("ngModelChange",function(l){e.CHM(n);const o=e.oxw();return e.KtG(o.twilloCreds.from=l)}),e.qZA()()()()}if(2&s){const n=e.oxw();e.xp6(4),e.hij("",n.util.translate("Twilio SID")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(12,a))("ngModel",n.twilloCreds.sid)("placeholder",n.util.translate("Twilio SID")),e.xp6(4),e.hij("",n.util.translate("Twilio AUTH TOKEN")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(13,a))("ngModel",n.twilloCreds.token)("placeholder",n.util.translate("Twilio AUTH TOKEN")),e.xp6(4),e.hij("",n.util.translate("Twilio FROM NUMBER")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(14,a))("ngModel",n.twilloCreds.from)("placeholder",n.util.translate("Twilio FROM NUMBER"))}}function T(s,r){if(1&s){const n=e.EpF();e.TgZ(0,"div",2)(1,"div",8)(2,"div",9)(3,"label"),e._uU(4),e.TgZ(5,"span",10),e._uU(6,"*"),e.qZA()(),e.TgZ(7,"input",11),e.NdJ("ngModelChange",function(l){e.CHM(n);const o=e.oxw();return e.KtG(o.msgCreds.key=l)}),e.qZA()()(),e.TgZ(8,"div",8)(9,"div",9)(10,"label"),e._uU(11),e.TgZ(12,"span",10),e._uU(13,"*"),e.qZA()(),e.TgZ(14,"input",11),e.NdJ("ngModelChange",function(l){e.CHM(n);const o=e.oxw();return e.KtG(o.msgCreds.sender=l)}),e.qZA()()()()}if(2&s){const n=e.oxw();e.xp6(4),e.hij("",n.util.translate("MSG91 AUTH KEY")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(8,a))("ngModel",n.msgCreds.key)("placeholder",n.util.translate("MSG91 AUTH KEY")),e.xp6(4),e.hij("",n.util.translate("MSG91 SENDER ID")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(9,a))("ngModel",n.msgCreds.sender)("placeholder",n.util.translate("MSG91 SENDER ID"))}}function v(s,r){if(1&s&&(e.TgZ(0,"div",2)(1,"div",28),e._uU(2),e.qZA()()),2&s){const n=e.oxw();e.xp6(2),e.hij(" ",n.util.translate("Please don't forgot to add firebase creds to")," api/resources/views/fireauth.blade.php ")}}function A(s,r){if(1&s){const n=e.EpF();e.TgZ(0,"button",52),e.NdJ("click",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.createInfo())}),e._uU(1),e.qZA()}if(2&s){const n=e.oxw();e.xp6(1),e.hij(" ",n.util.translate("Create Info"),"")}}function S(s,r){if(1&s){const n=e.EpF();e.TgZ(0,"button",53),e.NdJ("click",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.updateInfo())}),e._uU(1),e.qZA()}if(2&s){const n=e.oxw();e.xp6(1),e.hij(" ",n.util.translate("Update Info"),"")}}function q(s,r){1&s&&(e.TgZ(0,"div"),e._UZ(1,"ngx-skeleton-loader",54),e.qZA())}function U(s,r){if(1&s){const n=e.EpF();e.TgZ(0,"div",55)(1,"input",56),e.NdJ("ngModelChange",function(l){const i=e.CHM(n).$implicit;return e.KtG(i.isChecked=l)})("change",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.changed())}),e.qZA(),e.TgZ(2,"label",57),e._uU(3),e.qZA()()}if(2&s){const n=r.$implicit;e.xp6(1),e.Q6J("ngModel",n.isChecked)("id",n.country_name),e.xp6(1),e.Q6J("for",n.country_name),e.xp6(1),e.AsE(" +",n.dialling_code," ",n.country_name," ")}}const b=[{path:"",component:(()=>{class s{constructor(n,t){this.util=n,this.api=t,this.isNew=!0,this.id="",this.address="",this.allowDistance=0,this.appDirection="",this.app_color="#16742d",this.app_status=1,this.city="",this.country="",this.country_modal="",this.currencyCode="",this.currencySide="",this.currencySymbol="",this.default_city_id="",this.default_country_code="",this.default_delivery_zip="",this.delivery_charge=5,this.delivery_type=1,this.email="",this.fcm_token="",this.findType=0,this.freelancer_login=0,this.have_shop=0,this.logo="",this.mobile="",this.name="",this.reset_pwd=0,this.searchResultKind=0,this.search_radius=50,this.sms_creds="",this.sms_name="2",this.social={website:"",playstore:"",appstore:"",facebook:"",twitter:"",instagram:""},this.state="",this.status=1,this.tax=5,this.user_login=0,this.user_verify_with=0,this.zip="",this.twilloCreds={sid:"",token:"",from:""},this.msgCreds={key:"",sender:""},this.countries=[],this.dummy=[],this.dummyLoad=[],this.selected=[],this.cities=[],this.getData(),this.getAllCities()}getAllCities(){this.cities=[],this.api.get_private("v1/cities/getAll").then(n=>{n&&n.status&&200==n.status&&n.success&&(console.log(">>>>>",n),n.data.length>0&&(this.cities=n.data,console.log("====",this.cities)))},n=>{console.log("Error",n),this.util.apiErrorHandler(n)}).catch(n=>{console.log("Err",n),this.util.apiErrorHandler(n)})}ngOnInit(){}getData(){this.util.show(),this.api.get_private("v1/settings/getById").then(n=>{if(console.log(n),this.util.hide(),n&&200==n.status&&n.data&&n.data.id){this.isNew=!1;const t=n.data;if(this.id=t.id,this.address=t.address,this.allowDistance=t.allowDistance,this.appDirection=t.appDirection,this.app_color=t.app_color,this.app_status=t.app_status,this.city=t.city,this.country=t.country,(l=>{try{return JSON.parse(l),!0}catch{return!1}})(t.country_modal)&&(this.country_modal=JSON.parse(t.country_modal)),this.currencyCode=t.currencyCode,this.currencySide=t.currencySide,this.currencySymbol=t.currencySymbol,this.default_city_id=t.default_city_id,this.default_country_code=t.default_country_code,this.default_delivery_zip=t.default_delivery_zip,this.delivery_charge=t.delivery_charge,this.delivery_type=t.delivery_type,this.email=t.email,this.fcm_token=t.fcm_token,this.findType=t.findType,this.freelancer_login=t.freelancer_login,this.have_shop=t.have_shop,this.logo=t.logo,this.mobile=t.mobile,this.name=t.name,this.reset_pwd=t.reset_pwd,this.searchResultKind=t.searchResultKind,this.search_radius=t.search_radius,(l=>{try{return JSON.parse(l),!0}catch{return!1}})(t.sms_creds)){const l=JSON.parse(t.sms_creds);this.twilloCreds=l.twilloCreds,this.msgCreds=l.msg}if(this.sms_name=t.sms_name,(l=>{try{return JSON.parse(l),!0}catch{return!1}})(t.social)){const l=JSON.parse(t.social);this.social=l}this.state=t.state,this.status=t.status,this.tax=t.tax,this.user_login=t.user_login,this.user_verify_with=t.user_verify_with,this.zip=t.zip,console.log(this)}else this.isNew=!0},n=>{console.log(n),this.isNew=!0,this.util.hide(),this.util.apiErrorHandler(n)}).catch(n=>{console.log(n),this.isNew=!0,this.util.hide(),this.util.apiErrorHandler(n)})}openCountryModel(){console.log("open moda"),this.dummyLoad=Array(10),setTimeout(()=>{this.dummyLoad=[],this.dummy=this.util.countrys,this.countries=this.dummy,this.util.countrys.forEach(n=>{const t=this.country_modal.filter(l=>l.country_code==n.country_code);n.isChecked=!(!t||!t.length)}),console.log(this.dummy)},500),this.largeModal.show()}preview_banner(n){console.log("fle",n),0!=n.length&&null!=n[0].type.match(/image\/*/)&&(n?(console.log("ok"),this.util.show(),this.api.uploadFile(n).subscribe(l=>{console.log("==>>>>>>",l.data),this.util.hide(),l&&l.data.image_name&&(this.logo=l.data.image_name)},l=>{console.log(l),this.util.hide(),this.util.apiErrorHandler(l)})):console.log("no"))}onSearchChange(n){console.log(n),this.countries=""!==n?this.dummy.filter(t=>t.country_name.toLowerCase().indexOf(n.toLowerCase())>-1):[]}changed(){this.selected=this.util.countrys.filter(n=>1==n.isChecked),console.log(this.selected)}saveCountries(){this.country_modal=this.selected,this.largeModal.hide()}createInfo(){console.log("create"),console.log(this.address),console.log(this.allowDistance),console.log(this.appDirection),console.log(this.app_color),console.log(this.app_status),console.log(this.city),console.log(this.country),console.log(this.country_modal),console.log(this.currencyCode),console.log(this.currencySide),console.log(this.currencySymbol),console.log(this.default_city_id),console.log(this.default_country_code),console.log(this.default_delivery_zip),console.log(this.delivery_charge),console.log(this.delivery_type),console.log(this.email),console.log(this.fcm_token),console.log(this.findType),console.log(this.freelancer_login),console.log(this.have_shop),console.log(this.logo),console.log(this.mobile),console.log(this.name),console.log(this.reset_pwd),console.log(this.searchResultKind),console.log(this.search_radius),console.log(this.twilloCreds),console.log(this.msgCreds),console.log(this.sms_name),console.log(this.social),console.log(this.state),console.log(this.status),console.log(this.tax),console.log(this.user_login),console.log(this.user_verify_with),console.log(this.zip);const n={twilloCreds:this.twilloCreds,msg:this.msgCreds},t={address:this.address,allowDistance:this.allowDistance,appDirection:this.appDirection,app_color:this.app_color,app_status:1,city:this.city,country:this.country,country_modal:JSON.stringify(this.country_modal),currencyCode:this.currencyCode,currencySide:this.currencySide,currencySymbol:this.currencySymbol,default_city_id:this.default_city_id,default_country_code:this.default_country_code,default_delivery_zip:this.default_delivery_zip,delivery_charge:this.delivery_charge,delivery_type:this.delivery_type,email:this.email,fcm_token:this.fcm_token,findType:this.findType,freelancer_login:this.freelancer_login,have_shop:this.have_shop,logo:this.logo,mobile:this.mobile,name:this.name,reset_pwd:this.reset_pwd,searchResultKind:this.searchResultKind,search_radius:this.search_radius,sms_creds:JSON.stringify(n),sms_name:this.sms_name,social:JSON.stringify(this.social),state:this.state,status:1,tax:this.tax,user_login:this.user_login,user_verify_with:this.user_verify_with,zip:this.zip};console.log(t),this.util.show(),this.api.post_private("v1/setttings/save",t).then(l=>{console.log(l),this.util.hide(),l&&200==l.status&&(this.getData(),window.location.reload())},l=>{console.log(l),this.util.hide(),this.util.apiErrorHandler(l)}).catch(l=>{console.log(l),this.util.hide(),this.util.apiErrorHandler(l)})}updateInfo(){if(""==this.address||null==this.address||""==this.allowDistance||null==this.allowDistance||0==this.allowDistance||""==this.country||null==this.country||""==this.currencyCode||null==this.currencyCode||""==this.currencySymbol||null==this.currencySymbol||""==this.default_city_id||null==this.default_city_id||null==this.default_country_code||null==this.default_country_code||""==this.default_delivery_zip||null==this.default_delivery_zip||""==this.delivery_charge||null==this.delivery_charge||""==this.email||null==this.email||""==this.fcm_token||null==this.fcm_token||""==this.logo||null==this.logo||""==this.mobile||null==this.mobile||""==this.name||null==this.name||null==this.search_radius||""==this.search_radius||""==this.state||null==this.state||""==this.tax||null==this.tax||""==this.zip||null==this.zip)return this.util.error(this.util.translate("All fields are required")),!1;if(!("0"!=this.sms_name||""!=this.twilloCreds.sid&&this.twilloCreds.sid&&""!=this.twilloCreds.token&&this.twilloCreds.token&&""!=this.twilloCreds.from&&this.twilloCreds.from))return this.util.error(this.util.translate("Twilio credentials missings")),!1;if(!("1"!=this.sms_name||""!=this.msgCreds.key&&this.msgCreds.key&&""!=this.msgCreds.sender&&this.msgCreds.sender))return this.util.error(this.util.translate("Msg91 credentials missings")),!1;console.log("update"),console.log(this.address),console.log(this.allowDistance),console.log(this.appDirection),console.log(this.app_color),console.log(this.app_status),console.log(this.city),console.log(this.country),console.log(this.country_modal),console.log(this.currencyCode),console.log(this.currencySide),console.log(this.currencySymbol),console.log(this.default_city_id),console.log(this.default_country_code),console.log(this.default_delivery_zip),console.log(this.delivery_charge),console.log(this.delivery_type),console.log(this.email),console.log(this.fcm_token),console.log(this.findType),console.log(this.freelancer_login),console.log(this.have_shop),console.log(this.logo),console.log(this.mobile),console.log(this.name),console.log(this.reset_pwd),console.log(this.searchResultKind),console.log(this.search_radius),console.log(this.twilloCreds),console.log(this.msgCreds),console.log(this.sms_name),console.log(this.social),console.log(this.state),console.log(this.status),console.log(this.tax),console.log(this.user_login),console.log(this.user_verify_with),console.log(this.zip);const n={twilloCreds:this.twilloCreds,msg:this.msgCreds},t={id:this.id,address:this.address,allowDistance:this.allowDistance,appDirection:this.appDirection,app_color:this.app_color,app_status:1,city:this.city,country:this.country,country_modal:JSON.stringify(this.country_modal),currencyCode:this.currencyCode,currencySide:this.currencySide,currencySymbol:this.currencySymbol,default_city_id:this.default_city_id,default_country_code:this.default_country_code,default_delivery_zip:this.default_delivery_zip,delivery_charge:this.delivery_charge,delivery_type:this.delivery_type,email:this.email,fcm_token:this.fcm_token,findType:this.findType,freelancer_login:this.freelancer_login,have_shop:this.have_shop,logo:this.logo,mobile:this.mobile,name:this.name,reset_pwd:this.reset_pwd,searchResultKind:this.searchResultKind,search_radius:this.search_radius,sms_creds:JSON.stringify(n),sms_name:this.sms_name,social:JSON.stringify(this.social),state:this.state,status:1,tax:this.tax,user_login:this.user_login,user_verify_with:this.user_verify_with,zip:this.zip};console.log(t),this.util.show(),this.api.post_private("v1/setttings/update",t).then(l=>{console.log(l),this.util.hide(),l&&200==l.status&&(this.getData(),window.location.reload())},l=>{console.log(l),this.util.hide(),this.util.apiErrorHandler(l)}).catch(l=>{console.log(l),this.util.hide(),this.util.apiErrorHandler(l)})}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(f.f),e.Y36(Z.s))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-settings"]],viewQuery:function(n,t){if(1&n&&e.Gf(y,5),2&n){let l;e.iGM(l=e.CRH())&&(t.largeModal=l.first)}},decls:345,vars:219,consts:[["type","ball-scale-multiple"],[1,"animated","fadeIn"],[1,"row"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[2,"margin","10px 0px","font-weight","bold"],[1,"col-sm-6"],[1,"form-group"],[2,"color","red"],["type","text",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","number",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","text",1,"form-control",3,"ngModel","placeholder","ngModelChange"],[1,"form-control",3,"ngModelOptions","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["value","left"],["value","right"],["value","lrt"],["value","rtl"],["value","0"],["value","1"],["value","2"],["class","row",4,"ngIf"],["type","color",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],[1,"col-sm-6",3,"click"],[2,"background","#f8f8f8","padding","10px","border-radius","5px"],[1,"col-sm-12"],["type","text","rows","3",1,"form-control",3,"ngModelOptions","ngModel","placeholder","ngModelChange"],["type","file","accept","image/*",1,"form-control","file_ip",3,"change"],[1,"image_div"],[1,"image_box"],["onError","this.src='assets/img/dummy.jpeg'",1,"img-responsive",2,"height","80px","width","80px","object-fit","cover",3,"src"],["type","button","class","btn btn-success",3,"click",4,"ngIf"],["type","button","class","btn btn btn-primary",3,"click",4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["largeModal","bs-modal"],["role","document",1,"modal-dialog","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body",2,"overflow","scroll","height","300px"],[4,"ngFor","ngForOf"],["type","text","id","name","autocomplete","off",1,"form-control","form-control-lg",3,"placeholder","input"],[2,"display","flex","flex-direction","column","justify-content","flex-start"],["class","form-check","style","display: flex; justify-content: flex-start; align-items: center;margin:5px 0px;",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn","btn-primary",3,"click"],["count","1","appearance","line"],[1,"form-check",2,"display","flex","justify-content","flex-start","align-items","center","margin","5px 0px"],["type","checkbox",1,"form-check-input",2,"margin-top","0px",3,"ngModel","id","ngModelChange","change"],[1,"form-check-label",3,"for"]],template:function(n,t){if(1&n){const l=e.EpF();e._UZ(0,"ngx-spinner",0),e.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._uU(6),e.qZA(),e.TgZ(7,"div",6)(8,"div")(9,"p",7),e._uU(10),e.qZA()(),e.TgZ(11,"div",2)(12,"div",8)(13,"div",9)(14,"label"),e._uU(15),e.TgZ(16,"span",10),e._uU(17,"*"),e.qZA()(),e.TgZ(18,"input",11),e.NdJ("ngModelChange",function(i){return t.name=i}),e.qZA()()(),e.TgZ(19,"div",8)(20,"div",9)(21,"label"),e._uU(22),e.TgZ(23,"span",10),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"input",12),e.NdJ("ngModelChange",function(i){return t.mobile=i}),e.qZA()()(),e.TgZ(26,"div",8)(27,"div",9)(28,"label"),e._uU(29),e.TgZ(30,"span",10),e._uU(31,"*"),e.qZA()(),e.TgZ(32,"input",11),e.NdJ("ngModelChange",function(i){return t.email=i}),e.qZA()()(),e.TgZ(33,"div",8)(34,"div",9)(35,"label"),e._uU(36),e.TgZ(37,"span",10),e._uU(38,"*"),e.qZA()(),e.TgZ(39,"input",13),e.NdJ("ngModelChange",function(i){return t.address=i}),e.qZA()()(),e.TgZ(40,"div",8)(41,"div",9)(42,"label"),e._uU(43),e.TgZ(44,"span",10),e._uU(45,"*"),e.qZA()(),e.TgZ(46,"input",11),e.NdJ("ngModelChange",function(i){return t.city=i}),e.qZA()()(),e.TgZ(47,"div",8)(48,"div",9)(49,"label"),e._uU(50),e.TgZ(51,"span",10),e._uU(52,"*"),e.qZA()(),e.TgZ(53,"input",11),e.NdJ("ngModelChange",function(i){return t.state=i}),e.qZA()()(),e.TgZ(54,"div",8)(55,"div",9)(56,"label"),e._uU(57),e.TgZ(58,"span",10),e._uU(59,"*"),e.qZA()(),e.TgZ(60,"input",11),e.NdJ("ngModelChange",function(i){return t.zip=i}),e.qZA()()(),e.TgZ(61,"div",8)(62,"div",9)(63,"label"),e._uU(64),e.TgZ(65,"span",10),e._uU(66,"*"),e.qZA()(),e.TgZ(67,"input",11),e.NdJ("ngModelChange",function(i){return t.country=i}),e.qZA()()(),e.TgZ(68,"div",8)(69,"div",9)(70,"label"),e._uU(71),e.TgZ(72,"span",10),e._uU(73,"*"),e.qZA()(),e.TgZ(74,"input",12),e.NdJ("ngModelChange",function(i){return t.allowDistance=i}),e.qZA()()(),e.TgZ(75,"div",8)(76,"div",9)(77,"label"),e._uU(78),e.TgZ(79,"span",10),e._uU(80,"*"),e.qZA()(),e.TgZ(81,"select",14),e.NdJ("ngModelChange",function(i){return t.default_city_id=i}),e.YNc(82,M,2,2,"option",15),e.qZA()()(),e.TgZ(83,"div",8)(84,"div",9)(85,"label"),e._uU(86),e.TgZ(87,"span",10),e._uU(88,"*"),e.qZA()(),e.TgZ(89,"input",11),e.NdJ("ngModelChange",function(i){return t.default_delivery_zip=i}),e.qZA()()(),e.TgZ(90,"div",8)(91,"div",9)(92,"label"),e._uU(93),e.TgZ(94,"span",10),e._uU(95,"*"),e.qZA()(),e.TgZ(96,"input",12),e.NdJ("ngModelChange",function(i){return t.delivery_charge=i}),e.qZA()()(),e.TgZ(97,"div",8)(98,"div",9)(99,"label"),e._uU(100),e.TgZ(101,"span",10),e._uU(102,"*"),e.qZA()(),e.TgZ(103,"input",12),e.NdJ("ngModelChange",function(i){return t.tax=i}),e.qZA()()(),e.TgZ(104,"div",8)(105,"div",9)(106,"label"),e._uU(107),e.TgZ(108,"span",10),e._uU(109,"*"),e.qZA()(),e.TgZ(110,"select",14),e.NdJ("ngModelChange",function(i){return t.delivery_type=i}),e.TgZ(111,"option",16),e._uU(112),e.qZA(),e.TgZ(113,"option",16),e._uU(114),e.qZA()()()(),e.TgZ(115,"div",8)(116,"div",9)(117,"label"),e._uU(118),e.TgZ(119,"span",10),e._uU(120,"*"),e.qZA()(),e.TgZ(121,"select",14),e.NdJ("ngModelChange",function(i){return t.have_shop=i}),e.TgZ(122,"option",16),e._uU(123),e.qZA(),e.TgZ(124,"option",16),e._uU(125),e.qZA()()()(),e.TgZ(126,"div",8)(127,"div",9)(128,"label"),e._uU(129),e.TgZ(130,"span",10),e._uU(131,"*"),e.qZA()(),e.TgZ(132,"select",14),e.NdJ("ngModelChange",function(i){return t.searchResultKind=i}),e.TgZ(133,"option",16),e._uU(134),e.qZA(),e.TgZ(135,"option",16),e._uU(136),e.qZA()()()(),e.TgZ(137,"div",8)(138,"div",9)(139,"label"),e._uU(140),e.TgZ(141,"span",10),e._uU(142,"*"),e.qZA()(),e.TgZ(143,"input",12),e.NdJ("ngModelChange",function(i){return t.search_radius=i}),e.qZA()()()(),e.TgZ(144,"div")(145,"p",7),e._uU(146),e.qZA()(),e.TgZ(147,"div",2)(148,"div",8)(149,"div",9)(150,"label"),e._uU(151),e.TgZ(152,"span",10),e._uU(153,"*"),e.qZA()(),e.TgZ(154,"input",11),e.NdJ("ngModelChange",function(i){return t.currencySymbol=i}),e.qZA()()(),e.TgZ(155,"div",8)(156,"div",9)(157,"label"),e._uU(158),e.TgZ(159,"span",10),e._uU(160,"*"),e.qZA()(),e.TgZ(161,"select",14),e.NdJ("ngModelChange",function(i){return t.currencySide=i}),e.TgZ(162,"option",17),e._uU(163),e.qZA(),e.TgZ(164,"option",18),e._uU(165),e.qZA()()()(),e.TgZ(166,"div",8)(167,"div",9)(168,"label"),e._uU(169),e.TgZ(170,"span",10),e._uU(171,"*"),e.qZA()(),e.TgZ(172,"input",11),e.NdJ("ngModelChange",function(i){return t.currencyCode=i}),e.qZA()()(),e.TgZ(173,"div",8)(174,"div",9)(175,"label"),e._uU(176),e.TgZ(177,"span",10),e._uU(178,"*"),e.qZA()(),e.TgZ(179,"select",14),e.NdJ("ngModelChange",function(i){return t.appDirection=i}),e.TgZ(180,"option",19),e._uU(181),e.qZA(),e.TgZ(182,"option",20),e._uU(183),e.qZA()()()(),e.TgZ(184,"div",8)(185,"div",9)(186,"label"),e._uU(187),e.TgZ(188,"span",10),e._uU(189,"*"),e.qZA()(),e.TgZ(190,"select",14),e.NdJ("ngModelChange",function(i){return t.sms_name=i}),e.TgZ(191,"option",21),e._uU(192),e.qZA(),e.TgZ(193,"option",22),e._uU(194),e.qZA(),e.TgZ(195,"option",23),e._uU(196),e.qZA()()()(),e.TgZ(197,"div",8),e.YNc(198,C,22,15,"div",24),e.YNc(199,T,15,10,"div",24),e.YNc(200,v,3,1,"div",24),e.qZA(),e.TgZ(201,"div",8)(202,"div",9)(203,"label"),e._uU(204),e.TgZ(205,"span",10),e._uU(206,"*"),e.qZA()(),e.TgZ(207,"select",14),e.NdJ("ngModelChange",function(i){return t.user_login=i}),e.TgZ(208,"option",16),e._uU(209),e.qZA(),e.TgZ(210,"option",16),e._uU(211),e.qZA(),e.TgZ(212,"option",16),e._uU(213),e.qZA()()()(),e.TgZ(214,"div",8)(215,"div",9)(216,"label"),e._uU(217),e.TgZ(218,"span",10),e._uU(219,"*"),e.qZA()(),e.TgZ(220,"select",14),e.NdJ("ngModelChange",function(i){return t.freelancer_login=i}),e.TgZ(221,"option",16),e._uU(222),e.qZA(),e.TgZ(223,"option",16),e._uU(224),e.qZA(),e.TgZ(225,"option",16),e._uU(226),e.qZA()()()(),e.TgZ(227,"div",8)(228,"div",9)(229,"label"),e._uU(230),e.TgZ(231,"span",10),e._uU(232,"*"),e.qZA()(),e.TgZ(233,"select",14),e.NdJ("ngModelChange",function(i){return t.user_verify_with=i}),e.TgZ(234,"option",16),e._uU(235),e.qZA(),e.TgZ(236,"option",16),e._uU(237),e.qZA()()()(),e.TgZ(238,"div",8)(239,"div",9)(240,"label"),e._uU(241),e.TgZ(242,"span",10),e._uU(243,"*"),e.qZA()(),e.TgZ(244,"input",25),e.NdJ("ngModelChange",function(i){return t.app_color=i}),e.qZA()()(),e.TgZ(245,"div",8)(246,"div",9)(247,"label"),e._uU(248),e.TgZ(249,"span",10),e._uU(250,"*"),e.qZA()(),e.TgZ(251,"select",14),e.NdJ("ngModelChange",function(i){return t.app_status=i}),e.TgZ(252,"option",22),e._uU(253),e.qZA(),e.TgZ(254,"option",21),e._uU(255),e.qZA()()()(),e.TgZ(256,"div",8)(257,"div",9)(258,"label"),e._uU(259),e.TgZ(260,"span",10),e._uU(261,"*"),e.qZA()(),e.TgZ(262,"input",12),e.NdJ("ngModelChange",function(i){return t.default_country_code=i}),e.qZA()()(),e.TgZ(263,"div",26),e.NdJ("click",function(){return t.openCountryModel()}),e.TgZ(264,"div",9)(265,"label"),e._uU(266),e.qZA(),e.TgZ(267,"div",27),e._uU(268),e.qZA()()(),e.TgZ(269,"div",28)(270,"div",9)(271,"label"),e._uU(272),e.TgZ(273,"span",10),e._uU(274,"*"),e.qZA()(),e.TgZ(275,"textarea",29),e.NdJ("ngModelChange",function(i){return t.fcm_token=i}),e.qZA()()()(),e.TgZ(276,"div",2)(277,"div",8)(278,"div",9)(279,"label"),e._uU(280),e.TgZ(281,"span",10),e._uU(282,"*"),e.qZA()(),e.TgZ(283,"input",30),e.NdJ("change",function(i){return t.preview_banner(i.target.files)}),e.qZA()()(),e.TgZ(284,"div",8)(285,"div",9)(286,"div",31)(287,"div",32),e._UZ(288,"img",33),e.qZA()()()()(),e.TgZ(289,"div")(290,"p",7),e._uU(291),e.qZA()(),e.TgZ(292,"div",2)(293,"div",8)(294,"div",9)(295,"label"),e._uU(296),e.qZA(),e.TgZ(297,"input",11),e.NdJ("ngModelChange",function(i){return t.social.facebook=i}),e.qZA()()(),e.TgZ(298,"div",8)(299,"div",9)(300,"label"),e._uU(301),e.qZA(),e.TgZ(302,"input",11),e.NdJ("ngModelChange",function(i){return t.social.twitter=i}),e.qZA()()(),e.TgZ(303,"div",8)(304,"div",9)(305,"label"),e._uU(306),e.qZA(),e.TgZ(307,"input",11),e.NdJ("ngModelChange",function(i){return t.social.instagram=i}),e.qZA()()(),e.TgZ(308,"div",8)(309,"div",9)(310,"label"),e._uU(311),e.qZA(),e.TgZ(312,"input",11),e.NdJ("ngModelChange",function(i){return t.social.playstore=i}),e.qZA()()(),e.TgZ(313,"div",8)(314,"div",9)(315,"label"),e._uU(316),e.qZA(),e.TgZ(317,"input",11),e.NdJ("ngModelChange",function(i){return t.social.appstore=i}),e.qZA()()(),e.TgZ(318,"div",28)(319,"div",9)(320,"label"),e._uU(321),e.qZA(),e.TgZ(322,"textarea",11),e.NdJ("ngModelChange",function(i){return t.social.website=i}),e.qZA()()()(),e.YNc(323,A,2,1,"button",34),e.YNc(324,S,2,1,"button",35),e.qZA()()()()(),e.TgZ(325,"div",36,37)(327,"div",38)(328,"div",39)(329,"div",40)(330,"h4",41),e._uU(331),e.qZA(),e.TgZ(332,"button",42),e.NdJ("click",function(){e.CHM(l);const i=e.MAs(326);return e.KtG(i.hide())}),e.TgZ(333,"span",43),e._uU(334,"\xd7"),e.qZA()()(),e.TgZ(335,"div",44),e.YNc(336,q,2,0,"div",45),e.TgZ(337,"input",46),e.NdJ("input",function(i){return t.onSearchChange(i.target.value)}),e.qZA(),e.TgZ(338,"div",47),e.YNc(339,U,4,5,"div",48),e.qZA()(),e.TgZ(340,"div",49)(341,"button",50),e.NdJ("click",function(){e.CHM(l);const i=e.MAs(326);return e.KtG(i.hide())}),e._uU(342),e.qZA(),e.TgZ(343,"button",51),e.NdJ("click",function(){return t.saveCountries()}),e._uU(344),e.qZA()()()()()}2&n&&(e.xp6(6),e.hij(" ",t.util.translate("Settings")," "),e.xp6(4),e.Oqu(t.util.translate("Basic Informations")),e.xp6(5),e.hij("",t.util.translate("App Name")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(185,a))("ngModel",t.name)("placeholder",t.util.translate("App Name")),e.xp6(4),e.hij("",t.util.translate("Contact No")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(186,a))("ngModel",t.mobile)("placeholder",t.util.translate("Contact No")),e.xp6(4),e.hij("",t.util.translate("Email ID")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(187,a))("ngModel",t.email)("placeholder",t.util.translate("Email ID")),e.xp6(4),e.hij("",t.util.translate("Address")," "),e.xp6(3),e.Q6J("ngModel",t.address)("placeholder",t.util.translate("Address")),e.xp6(4),e.hij("",t.util.translate("City")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(188,a))("ngModel",t.city)("placeholder",t.util.translate("City")),e.xp6(4),e.hij("",t.util.translate("State")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(189,a))("ngModel",t.state)("placeholder",t.util.translate("State")),e.xp6(4),e.hij("",t.util.translate("ZIP")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(190,a))("ngModel",t.zip)("placeholder",t.util.translate("ZIP")),e.xp6(4),e.hij("",t.util.translate("Country Name")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(191,a))("ngModel",t.country)("placeholder",t.util.translate("Country Name")),e.xp6(4),e.hij("",t.util.translate("Allow Distance")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(192,a))("ngModel",t.allowDistance)("placeholder",t.util.translate("Allow Distance")),e.xp6(4),e.hij("",t.util.translate("Default City")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(193,a))("ngModel",t.default_city_id),e.xp6(1),e.Q6J("ngForOf",t.cities),e.xp6(4),e.hij("",t.util.translate("Default ZIP")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(194,a))("ngModel",t.default_delivery_zip)("placeholder",t.util.translate("Default ZIP")),e.xp6(4),e.hij("",t.util.translate("Delivery Charge")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(195,a))("ngModel",t.delivery_charge)("placeholder",t.util.translate("Delivery Charge")),e.xp6(4),e.hij("",t.util.translate("Tax Charge")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(196,a))("ngModel",t.tax)("placeholder",t.util.translate("Tax Charge")),e.xp6(4),e.hij("",t.util.translate("Delivery Type")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(197,a))("ngModel",t.delivery_type),e.xp6(1),e.Q6J("value",0),e.xp6(1),e.Oqu(t.util.translate("Fixed")),e.xp6(1),e.Q6J("value",1),e.xp6(1),e.Oqu(t.util.translate("KM")),e.xp6(4),e.hij("",t.util.translate("Have Shop")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(198,a))("ngModel",t.have_shop),e.xp6(1),e.Q6J("value",0),e.xp6(1),e.Oqu(t.util.translate("No")),e.xp6(1),e.Q6J("value",1),e.xp6(1),e.Oqu(t.util.translate("Yes")),e.xp6(4),e.hij("",t.util.translate("Search Result Kind")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(199,a))("ngModel",t.searchResultKind),e.xp6(1),e.Q6J("value",0),e.xp6(1),e.Oqu(t.util.translate("KM")),e.xp6(1),e.Q6J("value",1),e.xp6(1),e.Oqu(t.util.translate("Miles")),e.xp6(4),e.hij("",t.util.translate("Search Radius")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(200,a))("ngModel",t.search_radius)("placeholder",t.util.translate("Search Radius")),e.xp6(3),e.Oqu(t.util.translate("App Settings")),e.xp6(5),e.hij("",t.util.translate("Currency Symbol")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(201,a))("ngModel",t.currencySymbol)("placeholder",t.util.translate("Currency Symbol")),e.xp6(4),e.hij("",t.util.translate("Currency Side")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(202,a))("ngModel",t.currencySide),e.xp6(2),e.Oqu(t.util.translate("Left")),e.xp6(2),e.Oqu(t.util.translate("Right")),e.xp6(4),e.hij("",t.util.translate("Currency Code")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(203,a))("ngModel",t.currencyCode)("placeholder",t.util.translate("Currency Code")),e.xp6(4),e.hij("",t.util.translate("App Direction")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(204,a))("ngModel",t.appDirection),e.xp6(2),e.hij("",t.util.translate("LTR")," "),e.xp6(2),e.hij(" ",t.util.translate("RTL"),""),e.xp6(4),e.hij("",t.util.translate("SMS Gateway")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(205,a))("ngModel",t.sms_name),e.xp6(2),e.Oqu(t.util.translate("Twilio")),e.xp6(2),e.Oqu(t.util.translate("MSG91")),e.xp6(2),e.Oqu(t.util.translate("Firebase")),e.xp6(2),e.Q6J("ngIf","0"==t.sms_name),e.xp6(1),e.Q6J("ngIf","1"==t.sms_name),e.xp6(1),e.Q6J("ngIf","2"==t.sms_name),e.xp6(4),e.hij("",t.util.translate("User Login")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(206,a))("ngModel",t.user_login),e.xp6(1),e.Q6J("value",0),e.xp6(1),e.Oqu(t.util.translate("Email & Password")),e.xp6(1),e.Q6J("value",1),e.xp6(1),e.Oqu(t.util.translate("Phone & Password")),e.xp6(1),e.Q6J("value",2),e.xp6(1),e.Oqu(t.util.translate("Phone & OTP")),e.xp6(4),e.hij("",t.util.translate("Salon / Freelancer Login")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(207,a))("ngModel",t.freelancer_login),e.xp6(1),e.Q6J("value",0),e.xp6(1),e.Oqu(t.util.translate("Email & Password")),e.xp6(1),e.Q6J("value",1),e.xp6(1),e.Oqu(t.util.translate("Phone & Password")),e.xp6(1),e.Q6J("value",2),e.xp6(1),e.Oqu(t.util.translate("Phone & OTP")),e.xp6(4),e.hij("",t.util.translate("User Verify With")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(208,a))("ngModel",t.user_verify_with),e.xp6(1),e.Q6J("value",0),e.xp6(1),e.Oqu(t.util.translate("Email Verifications")),e.xp6(1),e.Q6J("value",1),e.xp6(1),e.Oqu(t.util.translate("Phone Verifications")),e.xp6(4),e.hij("",t.util.translate("App Color")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(209,a))("ngModel",t.app_color)("placeholder",t.util.translate("App Color")),e.xp6(4),e.hij("",t.util.translate("App Status")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(210,a))("ngModel",t.app_status),e.xp6(2),e.Oqu(t.util.translate("Active")),e.xp6(2),e.Oqu(t.util.translate("Deactive")),e.xp6(4),e.hij("",t.util.translate("Default Country Code without +")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(211,a))("ngModel",t.default_country_code)("placeholder",t.util.translate("Default Country Code")),e.xp6(4),e.hij("",t.util.translate("Countries")," "),e.xp6(2),e.hij(" ",t.country_modal.length," "),e.xp6(4),e.hij("",t.util.translate("FCM Token")," "),e.xp6(3),e.Q6J("ngModelOptions",e.DdM(212,a))("ngModel",t.fcm_token)("placeholder",t.util.translate("FCM Token")),e.xp6(5),e.hij("",t.util.translate("Logo")," "),e.xp6(8),e.Q6J("src",t.api.imageUrl+t.logo,e.LSH),e.xp6(3),e.Oqu(t.util.translate("Social Informations")),e.xp6(5),e.Oqu(t.util.translate("Facebook URL")),e.xp6(1),e.Q6J("ngModelOptions",e.DdM(213,a))("ngModel",t.social.facebook)("placeholder",t.util.translate("Facebook URL")),e.xp6(4),e.Oqu(t.util.translate("Twitter URL")),e.xp6(1),e.Q6J("ngModelOptions",e.DdM(214,a))("ngModel",t.social.twitter)("placeholder",t.util.translate("Twitter URL")),e.xp6(4),e.Oqu(t.util.translate("Instagram URL")),e.xp6(1),e.Q6J("ngModelOptions",e.DdM(215,a))("ngModel",t.social.instagram)("placeholder",t.util.translate("Instagram URL")),e.xp6(4),e.Oqu(t.util.translate("PlayStore URL")),e.xp6(1),e.Q6J("ngModelOptions",e.DdM(216,a))("ngModel",t.social.playstore)("placeholder",t.util.translate("PlayStore URL")),e.xp6(4),e.Oqu(t.util.translate("Appstore URL")),e.xp6(1),e.Q6J("ngModelOptions",e.DdM(217,a))("ngModel",t.social.appstore)("placeholder",t.util.translate("Appstore URL")),e.xp6(4),e.Oqu(t.util.translate("Website")),e.xp6(1),e.Q6J("ngModelOptions",e.DdM(218,a))("ngModel",t.social.website)("placeholder",t.util.translate("Website")),e.xp6(1),e.Q6J("ngIf",1==t.isNew),e.xp6(1),e.Q6J("ngIf",0==t.isNew),e.xp6(7),e.Oqu(t.util.translate("Select Countries")),e.xp6(5),e.Q6J("ngForOf",t.dummyLoad),e.xp6(1),e.Q6J("placeholder",t.util.translate("Search Country")),e.xp6(2),e.Q6J("ngForOf",t.countries),e.xp6(3),e.Oqu(t.util.translate("Close")),e.xp6(2),e.hij(" ",t.util.translate("Save Changes"),""))},dependencies:[g.sg,g.O5,_.oB,u.YN,u.Kr,u.Fj,u.wV,u.Wl,u.EJ,u.JJ,u.On,c.Ro,m.xr],styles:['@charset "UTF-8";']}),s})()}];let J=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.Bz.forChild(b),h.Bz]}),s})(),w=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[g.ez,J,_.zk.forRoot(),u.u5,c.ef,m.hx.forRoot({animation:"progress-dark"})]}),s})()}}]);