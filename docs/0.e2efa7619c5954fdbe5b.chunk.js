webpackJsonp([0],{"0IaF":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("LMZF"),n=r("Un6q"),c=r("T2Au"),f=r("UHIZ"),i=r("trG3"),a=r("8jEQ"),s=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,f=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(f=(c<3?n(f):c>3?n(t,r,f):n(t,r))||f);return c>3&&f&&Object.defineProperty(t,r,f),f},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e){this.userService=e,this.$user=this.userService.userAfterLoading$}return e=s([Object(o.Component)({selector:"app-dashboard-page",template:r("FvJZ"),styles:[r("f5RK")]}),u("design:paramtypes",[a.a])],e)}(),l=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,f=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(f=(c<3?n(f):c>3?n(t,r,f):n(t,r))||f);return c>3&&f&&Object.defineProperty(t,r,f),f},d=[{path:"",component:p,canActivate:[i.a]}],h=function(){function e(){}return e=l([Object(o.NgModule)({imports:[f.b.forChild(d)],exports:[f.b]})],e)}();r.d(t,"DashboardModule",function(){return y});var b=this&&this.__decorate||function(e,t,r,o){var n,c=arguments.length,f=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(f=(c<3?n(f):c>3?n(t,r,f):n(t,r))||f);return c>3&&f&&Object.defineProperty(t,r,f),f},y=function(){function e(){}return t=e,e.forRoot=function(){return{ngModule:t,providers:[]}},e=t=b([Object(o.NgModule)({imports:[n.CommonModule,h,c.a],declarations:[p]})],e);var t}()},FvJZ:function(e,t){e.exports="<p>\n  dashboard-page works!\n</p>\n\n<pre>{{ $user | async | json }}</pre>\n"},f5RK:function(e,t,r){(e.exports=r("rP7Y")(!1)).push([e.i,"",""]),e.exports=e.exports.toString()}});