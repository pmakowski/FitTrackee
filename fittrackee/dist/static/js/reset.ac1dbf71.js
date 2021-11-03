(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["reset"],{"0395":function(t,e,r){"use strict";r("caad");var n=r("7a23"),c=Object(n["withScopeId"])("data-v-36baa80f");Object(n["pushScopeId"])("data-v-36baa80f");var o={id:"user-auth-form"},a={id:"user-form"},i={class:"form-items"},s={key:1};Object(n["popScopeId"])();var l=c((function(t,e,r,l,u,d){var p=Object(n["resolveComponent"])("AlertMessage"),f=Object(n["resolveComponent"])("router-link"),h=Object(n["resolveComponent"])("ErrorMessage");return Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[Object(n["createVNode"])("div",a,[Object(n["createVNode"])("div",{class:["form-box",{disabled:t.registration_disabled}]},[t.registration_disabled?(Object(n["openBlock"])(),Object(n["createBlock"])(p,{key:0,message:"user.REGISTER_DISABLED"})):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])("form",{onSubmit:e[5]||(e[5]=Object(n["withModifiers"])((function(e){return t.onSubmit(t.action)}),["prevent"]))},[Object(n["createVNode"])("div",i,["register"===t.action?Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])("input",{key:0,id:"username",disabled:t.registration_disabled,required:"","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.formData.username=e}),placeholder:t.$t("user.USERNAME")},null,8,["disabled","placeholder"])),[[n["vModelText"],t.formData.username]]):Object(n["createCommentVNode"])("",!0),"reset"!==t.action?Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])("input",{key:1,id:"email",disabled:t.registration_disabled,required:"",type:"email","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.formData.email=e}),placeholder:"reset-request"===t.action?t.$t("user.ENTER_EMAIL"):t.$t("user.EMAIL")},null,8,["disabled","placeholder"])),[[n["vModelText"],t.formData.email]]):Object(n["createCommentVNode"])("",!0),"reset-request"!==t.action?Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])("input",{key:2,id:"password",disabled:t.registration_disabled,required:"",type:"password","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.formData.password=e}),placeholder:"reset"===t.action?t.$t("user.ENTER_PASSWORD"):t.$t("user.PASSWORD")},null,8,["disabled","placeholder"])),[[n["vModelText"],t.formData.password]]):Object(n["createCommentVNode"])("",!0),["register","reset"].includes(t.action)?Object(n["withDirectives"])((Object(n["openBlock"])(),Object(n["createBlock"])("input",{key:3,id:"confirm-password",disabled:t.registration_disabled,type:"password",required:"","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.formData.password_conf=e}),placeholder:"reset"===t.action?t.$t("user.ENTER_PASSWORD_CONFIRMATION"):t.$t("user.PASSWORD_CONFIRM")},null,8,["disabled","placeholder"])),[[n["vModelText"],t.formData.password_conf]]):Object(n["createCommentVNode"])("",!0)]),Object(n["createVNode"])("button",{type:"submit",disabled:t.registration_disabled},Object(n["toDisplayString"])(t.$t(t.buttonText)),9,["disabled"])],32),"login"===t.action?(Object(n["openBlock"])(),Object(n["createBlock"])("div",s,[Object(n["createVNode"])(f,{class:"password-forgotten",to:"/password-reset/request"},{default:c((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.$t("user.PASSWORD_FORGOTTEN")),1)]})),_:1})])):Object(n["createCommentVNode"])("",!0),t.errorMessages?(Object(n["openBlock"])(),Object(n["createBlock"])(h,{key:2,message:t.errorMessages},null,8,["message"])):Object(n["createCommentVNode"])("",!0)],2)])])})),u=r("1da1"),d=(r("96cf"),r("6c02")),p=r("dad5"),f=r("2906"),h=Object(n["defineComponent"])({name:"UserAuthForm",props:{action:{type:String,required:!0},token:{type:String,default:""}},setup:function(t){var e=Object(n["reactive"])({username:"",email:"",password:"",password_conf:""}),r=Object(d["c"])(),c=Object(f["a"])(),o=Object(n["computed"])((function(){return l(t.action)})),a=Object(n["computed"])((function(){return c.getters[p["b"].GETTERS.ERROR_MESSAGES]})),i=Object(n["computed"])((function(){return c.getters[p["b"].GETTERS.APP_CONFIG]})),s=Object(n["computed"])((function(){return"register"===t.action&&!i.value.is_registration_enabled}));function l(e){switch(e){case"reset-request":case"reset":return"buttons.SUBMIT";default:return"buttons.".concat(t.action.toUpperCase())}}function h(n){switch(n){case"reset":return t.token?c.dispatch(p["a"].ACTIONS.RESET_USER_PASSWORD,{password:e.password,password_conf:e.password_conf,token:t.token}):c.commit(p["b"].MUTATIONS.SET_ERROR_MESSAGES,"user.INVALID_TOKEN");case"reset-request":return c.dispatch(p["a"].ACTIONS.SEND_PASSWORD_RESET_REQUEST,{email:e.email});default:c.dispatch(p["a"].ACTIONS.LOGIN_OR_REGISTER,{actionType:n,formData:e,redirectUrl:r.query.from})}}function b(){e.username="",e.email="",e.password="",e.password_conf=""}return Object(n["watch"])((function(){return r.path}),Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:c.commit(p["b"].MUTATIONS.EMPTY_ERROR_MESSAGES),b();case 2:case"end":return t.stop()}}),t)})))),{appConfig:i,buttonText:o,errorMessages:a,formData:e,registration_disabled:s,onSubmit:h}}});r("7eb4");h.render=l,h.__scopeId="data-v-36baa80f";e["a"]=h},"0951":function(t,e,r){"use strict";r("57de")},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r("d3b7");function n(t,e,r,n,c,o,a){try{var i=t[o](a),s=i.value}catch(l){return void r(l)}i.done?e(s):Promise.resolve(s).then(n,c)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(c,o){var a=t.apply(e,r);function i(t){n(a,c,o,i,s,"next",t)}function s(t){n(a,c,o,i,s,"throw",t)}i(void 0)}))}}},2403:function(t,e,r){"use strict";r("8e46")},"2c2e":function(t,e,r){},"2ca0":function(t,e,r){"use strict";var n=r("23e7"),c=r("06cf").f,o=r("50c4"),a=r("5a34"),i=r("1d80"),s=r("ab13"),l=r("c430"),u="".startsWith,d=Math.min,p=s("startsWith"),f=!l&&!p&&!!function(){var t=c(String.prototype,"startsWith");return t&&!t.writable}();n({target:"String",proto:!0,forced:!f&&!p},{startsWith:function(t){var e=String(i(this));a(t);var r=o(d(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return u?u.call(e,n,r):e.slice(r,r+n.length)===n}})},"364c":function(t,e,r){"use strict";r.r(e);r("2ca0");var n=r("7a23"),c=Object(n["withScopeId"])("data-v-6df8e1fa");Object(n["pushScopeId"])("data-v-6df8e1fa");var o={id:"password-reset",class:"view"},a={class:"container"};Object(n["popScopeId"])();var i=c((function(t,e,r,c,i,s){var l=Object(n["resolveComponent"])("PasswordResetRequest"),u=Object(n["resolveComponent"])("PasswordEmailSent");return Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[Object(n["createVNode"])("div",a,[t.action.startsWith("reset")?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,action:t.action,token:t.token},null,8,["action","token"])):(Object(n["openBlock"])(),Object(n["createBlock"])(u,{key:1,action:t.action},null,8,["action"]))])])})),s=r("6c02"),l=Object(n["withScopeId"])("data-v-382847b5");Object(n["pushScopeId"])("data-v-382847b5");var u={id:"password-action-done",class:"center-card center-card with-margin"},d={class:"password-message"},p={key:0};Object(n["popScopeId"])();var f=l((function(t,e,r,c,o,a){var i=Object(n["resolveComponent"])("EmailSent"),s=Object(n["resolveComponent"])("Password"),f=Object(n["resolveComponent"])("router-link"),h=Object(n["resolveComponent"])("i18n-t");return Object(n["openBlock"])(),Object(n["createBlock"])("div",u,["request-sent"===t.action?(Object(n["openBlock"])(),Object(n["createBlock"])(i,{key:0})):(Object(n["openBlock"])(),Object(n["createBlock"])(s,{key:1})),Object(n["createVNode"])("div",d,["request-sent"===t.action?(Object(n["openBlock"])(),Object(n["createBlock"])("span",p,Object(n["toDisplayString"])(t.$t("user.PASSWORD_SENT_EMAIL_TEXT")),1)):(Object(n["openBlock"])(),Object(n["createBlock"])(h,{key:1,keypath:"user.PASSWORD_UPDATED"},{default:l((function(){return[Object(n["createVNode"])(f,{to:"/login"},{default:l((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.$t("common.HERE")),1)]})),_:1})]})),_:1}))])])})),h={version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 345.834 345.834",style:{"enable-background":"new 0 0 345.834 345.834"},"xml:space":"preserve"},b=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M339.798,260.429c0.13-0.026,0.257-0.061,0.385-0.094c0.109-0.028,0.219-0.051,0.326-0.084\n\t\tc0.125-0.038,0.247-0.085,0.369-0.129c0.108-0.039,0.217-0.074,0.324-0.119c0.115-0.048,0.226-0.104,0.338-0.157\n\t\tc0.109-0.052,0.22-0.1,0.327-0.158c0.107-0.057,0.208-0.122,0.312-0.184c0.107-0.064,0.215-0.124,0.319-0.194\n\t\tc0.111-0.074,0.214-0.156,0.321-0.236c0.09-0.067,0.182-0.13,0.27-0.202c0.162-0.133,0.316-0.275,0.466-0.421\n\t\tc0.027-0.026,0.056-0.048,0.083-0.075c0.028-0.028,0.052-0.059,0.079-0.088c0.144-0.148,0.284-0.3,0.416-0.46\n\t\tc0.077-0.094,0.144-0.192,0.216-0.289c0.074-0.1,0.152-0.197,0.221-0.301c0.074-0.111,0.139-0.226,0.207-0.34\n\t\tc0.057-0.096,0.118-0.19,0.171-0.289c0.062-0.115,0.114-0.234,0.169-0.351c0.049-0.104,0.101-0.207,0.146-0.314\n\t\tc0.048-0.115,0.086-0.232,0.128-0.349c0.041-0.114,0.085-0.227,0.12-0.343c0.036-0.118,0.062-0.238,0.092-0.358\n\t\tc0.029-0.118,0.063-0.234,0.086-0.353c0.028-0.141,0.045-0.283,0.065-0.425c0.014-0.1,0.033-0.199,0.043-0.3\n\t\tc0.025-0.249,0.038-0.498,0.038-0.748V92.76c0-4.143-3.357-7.5-7.5-7.5h-236.25c-0.066,0-0.13,0.008-0.196,0.01\n\t\tc-0.143,0.004-0.285,0.01-0.427,0.022c-0.113,0.009-0.225,0.022-0.337,0.037c-0.128,0.016-0.255,0.035-0.382,0.058\n\t\tc-0.119,0.021-0.237,0.046-0.354,0.073c-0.119,0.028-0.238,0.058-0.356,0.092c-0.117,0.033-0.232,0.069-0.346,0.107\n\t\tc-0.117,0.04-0.234,0.082-0.349,0.128c-0.109,0.043-0.216,0.087-0.322,0.135c-0.118,0.053-0.235,0.11-0.351,0.169\n\t\tc-0.099,0.051-0.196,0.103-0.292,0.158c-0.116,0.066-0.23,0.136-0.343,0.208c-0.093,0.06-0.184,0.122-0.274,0.185\n\t\tc-0.106,0.075-0.211,0.153-0.314,0.235c-0.094,0.075-0.186,0.152-0.277,0.231c-0.09,0.079-0.179,0.158-0.266,0.242\n\t\tc-0.099,0.095-0.194,0.194-0.288,0.294c-0.047,0.05-0.097,0.094-0.142,0.145c-0.027,0.03-0.048,0.063-0.074,0.093\n\t\tc-0.094,0.109-0.182,0.223-0.27,0.338c-0.064,0.084-0.13,0.168-0.19,0.254c-0.078,0.112-0.15,0.227-0.222,0.343\n\t\tc-0.059,0.095-0.12,0.189-0.174,0.286c-0.063,0.112-0.118,0.227-0.175,0.342c-0.052,0.105-0.106,0.21-0.153,0.317\n\t\tc-0.049,0.113-0.092,0.23-0.135,0.345c-0.043,0.113-0.087,0.225-0.124,0.339c-0.037,0.115-0.067,0.232-0.099,0.349\n\t\tc-0.032,0.12-0.066,0.239-0.093,0.36c-0.025,0.113-0.042,0.228-0.062,0.342c-0.022,0.13-0.044,0.26-0.06,0.39\n\t\tc-0.013,0.108-0.019,0.218-0.027,0.328c-0.01,0.14-0.019,0.28-0.021,0.421c-0.001,0.041-0.006,0.081-0.006,0.122v46.252\n\t\tc0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-29.595l66.681,59.037c-0.348,0.245-0.683,0.516-0.995,0.827l-65.687,65.687v-49.288\n\t\tc0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v9.164h-38.75c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h38.75v43.231\n\t\tc0,4.143,3.357,7.5,7.5,7.5h236.25c0.247,0,0.494-0.013,0.74-0.037c0.115-0.011,0.226-0.033,0.339-0.049\n\t\tC339.542,260.469,339.67,260.454,339.798,260.429z M330.834,234.967l-65.688-65.687c-0.042-0.042-0.087-0.077-0.13-0.117\n\t\tl49.383-41.897c3.158-2.68,3.546-7.412,0.866-10.571c-2.678-3.157-7.41-3.547-10.571-0.866l-84.381,71.59l-98.444-87.158h208.965\n\t\tV234.967z M185.878,179.888c0.535-0.535,0.969-1.131,1.308-1.765l28.051,24.835c1.418,1.255,3.194,1.885,4.972,1.885\n\t\tc1.726,0,3.451-0.593,4.853-1.781l28.587-24.254c0.26,0.38,0.553,0.743,0.89,1.08l65.687,65.687H120.191L185.878,179.888z"}),Object(n["createVNode"])("path",{d:"M7.5,170.676h126.667c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H7.5c-4.143,0-7.5,3.357-7.5,7.5\n\t\tS3.357,170.676,7.5,170.676z"}),Object(n["createVNode"])("path",{d:"M20.625,129.345H77.5c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H20.625c-4.143,0-7.5,3.357-7.5,7.5\n\t\tS16.482,129.345,20.625,129.345z"}),Object(n["createVNode"])("path",{d:"M62.5,226.51h-55c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h55c4.143,0,7.5-3.357,7.5-7.5S66.643,226.51,62.5,226.51z"})],-1);function v(t,e,r,c,o,a){return Object(n["openBlock"])(),Object(n["createBlock"])("svg",h,[b])}var O={name:"EmailSent"};O.render=v;var m=O,j={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512.001 512.001",style:{"enable-background":"new 0 0 512.001 512.001"},"xml:space":"preserve"},g=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M468.683,287.265h-69.07c-4.147,0-7.508,3.361-7.508,7.508c0,4.147,3.361,7.508,7.508,7.508h69.07\n\t\t\tc4.147,0,7.508-3.361,7.508-7.508C476.191,290.626,472.83,287.265,468.683,287.265z"})])],-1),w=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M105.012,268.377L85.781,256l19.231-12.376c3.487-2.243,4.495-6.888,2.251-10.376c-2.244-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.471,11.243v-20.776c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.775l-17.47-11.243\n\t\t\tc-3.486-2.245-8.132-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L58.034,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.47-11.243v20.775\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.471,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.885-1.216,6.32-3.446C109.507,275.266,108.499,270.62,105.012,268.377z"})])],-1),y=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M194.441,268.377L175.21,256l19.231-12.376c3.487-2.244,4.495-6.889,2.25-10.376c-2.245-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.47,11.243v-20.775c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.776l-17.471-11.243\n\t\t\tc-3.487-2.245-8.133-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L147.463,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.471-11.243v20.776\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.47,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.885-1.216,6.32-3.446C198.936,275.266,197.928,270.62,194.441,268.377z"})])],-1),S=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M283.871,268.377L264.64,256l19.231-12.376c3.487-2.243,4.495-6.888,2.251-10.376c-2.245-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.471,11.243v-20.775c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.775l-17.471-11.243\n\t\t\tc-3.486-2.245-8.134-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L236.892,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.471-11.243v20.775\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.471,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.886-1.216,6.32-3.446C288.366,275.266,287.358,270.62,283.871,268.377z"})])],-1),k=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M373.3,268.377L354.069,256l19.231-12.376c3.487-2.244,4.495-6.889,2.25-10.376c-2.244-3.486-6.888-4.497-10.376-2.25\n\t\t\tl-17.471,11.243v-20.776c0-4.147-3.361-7.508-7.508-7.508c-4.147,0-7.508,3.361-7.508,7.508v20.775l-17.47-11.243\n\t\t\tc-3.486-2.245-8.132-1.238-10.376,2.25c-2.245,3.487-1.237,8.133,2.25,10.376L326.322,256l-19.231,12.376\n\t\t\tc-3.487,2.244-4.495,6.889-2.25,10.376c1.435,2.23,3.852,3.446,6.32,3.446c1.391,0,2.799-0.386,4.056-1.196l17.47-11.243v20.776\n\t\t\tc0,4.147,3.361,7.508,7.508,7.508c4.147,0,7.508-3.361,7.508-7.508V269.76l17.471,11.243c1.257,0.809,2.664,1.196,4.056,1.196\n\t\t\tc2.467,0,4.885-1.216,6.32-3.446C377.795,275.266,376.787,270.62,373.3,268.377z"})])],-1),E=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M271.792,330.359H15.016V181.642h93.1c4.147,0,7.508-3.361,7.508-7.508c0-4.147-3.361-7.508-7.508-7.508H12.513\n\t\t\tC5.613,166.626,0,172.24,0,179.14v153.722c0,6.9,5.613,12.513,12.513,12.513h259.278c4.147,0,7.508-3.361,7.508-7.508\n\t\t\tC279.299,333.72,275.939,330.359,271.792,330.359z"})])],-1),N=Object(n["createVNode"])("g",null,[Object(n["createVNode"])("g",null,[Object(n["createVNode"])("path",{d:"M499.487,166.626H162.174c-4.147,0-7.508,3.361-7.508,7.508c0,4.147,3.361,7.508,7.508,7.508h334.811v148.716H323.848\n\t\t\tc-4.147,0-7.508,3.361-7.508,7.508c0,4.147,3.361,7.508,7.508,7.508h175.64c6.9,0,12.513-5.613,12.513-12.513V179.14\n\t\t\tC512.001,172.24,506.387,166.626,499.487,166.626z"})])],-1);function _(t,e,r,c,o,a){return Object(n["openBlock"])(),Object(n["createBlock"])("svg",j,[g,w,y,S,k,E,N])}var V={name:"Password"};V.render=_;var x=V,R=Object(n["defineComponent"])({name:"PasswordActionDone",components:{EmailSent:m,Password:x},props:{action:{type:String,required:!0}}});r("f4fd");R.render=f,R.__scopeId="data-v-382847b5";var T=R,L=Object(n["withScopeId"])("data-v-feed61ac");Object(n["pushScopeId"])("data-v-feed61ac");var B={id:"password-reset-request",class:"center-card with-margin"};Object(n["popScopeId"])();var C=L((function(t,e,r,c,o,a){var i=Object(n["resolveComponent"])("UserAuthForm"),s=Object(n["resolveComponent"])("Card");return Object(n["openBlock"])(),Object(n["createBlock"])("div",B,[Object(n["createVNode"])(s,null,{title:L((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.$t("user.RESET_PASSWORD")),1)]})),content:L((function(){return[Object(n["createVNode"])(i,{action:t.action,token:t.token},null,8,["action","token"])]})),_:1})])})),I=r("0395"),M=Object(n["defineComponent"])({name:"PasswordResetForm",components:{UserAuthForm:I["a"]},props:{action:{type:String,required:!0},token:{type:String,default:""}}});r("0951");M.render=C,M.__scopeId="data-v-feed61ac";var D=M,A=Object(n["defineComponent"])({name:"PasswordResetView",components:{PasswordEmailSent:T,PasswordResetRequest:D},props:{action:{type:String,required:!0}},setup:function(t){var e=Object(s["c"])(),r=Object(s["d"])(),c=Object(n["computed"])((function(){return e.query.token}));return Object(n["onBeforeMount"])((function(){"reset"!==t.action||c.value||r.push("/")})),{token:c}}});r("2403");A.render=i,A.__scopeId="data-v-6df8e1fa";e["default"]=A},"57de":function(t,e,r){},"7eb4":function(t,e,r){"use strict";r("2c2e")},"8e46":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,c="function"===typeof Symbol?Symbol:{},o=c.iterator||"@@iterator",a=c.asyncIterator||"@@asyncIterator",i=c.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(L){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var c=e&&e.prototype instanceof v?e:v,o=Object.create(c.prototype),a=new x(n||[]);return o._invoke=E(t,r,a),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var d="suspendedStart",p="suspendedYield",f="executing",h="completed",b={};function v(){}function O(){}function m(){}var j={};s(j,o,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(R([])));w&&w!==r&&n.call(w,o)&&(j=w);var y=m.prototype=v.prototype=Object.create(j);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(c,o,a,i){var s=u(t[c],t,o);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,i)}),(function(t){r("throw",t,a,i)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,i)}))}i(s.arg)}var c;function o(t,n){function o(){return new e((function(e,c){r(t,n,e,c)}))}return c=c?c.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=d;return function(c,o){if(n===f)throw new Error("Generator is already running");if(n===h){if("throw"===c)throw o;return T()}r.method=c,r.arg=o;while(1){var a=r.delegate;if(a){var i=N(a,r);if(i){if(i===b)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?h:p,s.arg===b)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function N(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,N(t,r),"throw"===r.method))return b;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var c=u(n,t.iterator,r.arg);if("throw"===c.type)return r.method="throw",r.arg=c.arg,r.delegate=null,b;var o=c.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function V(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function R(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var c=-1,a=function r(){while(++c<t.length)if(n.call(t,c))return r.value=t[c],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return O.prototype=m,s(y,"constructor",m),s(m,"constructor",O),O.displayName=s(m,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},S(k.prototype),s(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,c,o){void 0===o&&(o=Promise);var a=new k(l(e,r,n,c),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(y),s(y,i,"Generator"),s(y,o,(function(){return this})),s(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(V),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function c(n,c){return i.type="throw",i.arg=t,r.next=n,c&&(r.method="next",r.arg=e),!!c}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return c("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return c(a.catchLoc,!0);if(this.prev<a.finallyLoc)return c(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return c(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return c(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.tryLoc<=this.prev&&n.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var o=c;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),V(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var c=n.arg;V(r)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=n}catch(c){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},b3b85:function(t,e,r){},f4fd:function(t,e,r){"use strict";r("b3b85")}}]);
//# sourceMappingURL=reset.ac1dbf71.js.map