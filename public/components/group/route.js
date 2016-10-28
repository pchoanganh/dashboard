"use strict";angular.module(window.APP.modules.group,["ui.router","oc.lazyLoad","checklist-model"]).config(["$stateProvider","$ocLazyLoadProvider",function(a,b){a.state("groups",{url:"/groups?query&sort&page&limit&filter",templateUrl:"/components/group/views/index.html",resolve:{resources:["$ocLazyLoad",function(a){return a.load(["/components/group/controller.js","/apis/group.js"])}]},auth:{requiresLogin:!0,allows:{group:["get","post","put","delete"]}}}).state("groupCreate",{url:"/groups/create",templateUrl:"/components/group/views/details.html",resolve:{resources:["$ocLazyLoad",function(a){return a.load(["/components/group/controller.js","/apis/group.js","/apis/user.js","/apis/setting.js"])}]},auth:{requiresLogin:!0,allows:{setting:["post"]}}}).state("groupDetails",{url:"/groups/:groupId",templateUrl:"/components/group/views/details.html",resolve:{resources:["$ocLazyLoad",function(a){return a.load(["/components/group/controller.js","/apis/group.js","/apis/user.js","/apis/setting.js"])}]},auth:{requiresLogin:!0,allows:{setting:["get","put"]}}})}]);