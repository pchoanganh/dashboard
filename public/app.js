"use strict";angular.module(window.APP.modules.main,[window.APP.modules.auth,window.APP.modules.home,window.APP.modules.setting,window.APP.modules.group,window.APP.modules.user,"ui.router","oc.lazyLoad","ngResource","ui.bootstrap","ngCookies","ngAlertify","ngProgress"]).constant("APP",window.APP).config(["$httpProvider","$compileProvider","$urlRouterProvider",function(a,b,c){a.interceptors.push("httpResponseError"),b.debugInfoEnabled(!1),c.otherwise("/")}]).run(["APP","$rootScope","alertify","connection","pageTitle","progressbar","language","setting","user","auth",function(a,b,c,d,e,f,g,h,i,j){c.logPosition("bottom right").maxLogItems(3),b.APP=a,b.CONNECTION=new d,b.PAGETITLE=new e,b.PROGRESSBAR=new f,b.LANGUAGE=new g,b.SETTING=new h,b.USER=new i,b.AUTH=new j,b.$on("$stateChangeSuccess",function(a,b,c,d,e){var f=["login","signup","forgot-password","reset-password","page-successful"];-1!==f.indexOf(b.name)?$("body").addClass("page-auth layout-full page-dark"):$("body").removeClass("page-auth layout-full page-dark")})}]);