module.exports=function(e){function t(r){if(s[r])return s[r].exports;var n=s[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,r){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=require("auth0-extension-express-tools@1.1.5")},function(e,t,s){"use strict";e.exports=s(7).config()},function(e,t,s){"use strict";var r=s(10),n=s(8),o=s(0),i=s(4),a=s(1),c=s(6),p=s(3);e.exports=function(e){a.setProvider(e);var t=r();return t.use(n.json()),t.use(n.urlencoded({extended:!1})),t.use("/meta",function(e,t){t.status(200).send(c)}),t.use(o.routes.dashboardAdmins({secret:a("EXTENSION_SECRET"),audience:"urn:user-import-export-extension",rta:a("AUTH0_RTA").replace("https://",""),domain:a("AUTH0_DOMAIN"),baseUrl:a("WT_URL"),clientName:"User Import / Export Extension",urlPrefix:"",sessionStorageKey:"user-import-export-extension:apiToken",scopes:"create:users read:users read:connections create:passwords_checking_job"})),t.get("*",p()),t.use(o.middlewares.errorHandler(i.error.bind(i))),t}},function(e,t,s){"use strict";var r=s(9),n=s(1),o=s(0).urlHelpers;e.exports=function(){var e='\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n      <title>User Import / Export Dashboard</title>\n      <meta charset="UTF-8" />\n      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n      <link rel="shortcut icon" href="https://cdn.auth0.com/styleguide/2.0.1/lib/logos/img/favicon.png">\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styles/zocial.min.css">\n      <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/manage/v0.3.973/css/index.min.css">\n      <link rel="stylesheet" type="text/css" href="https://cdn.auth0.com/styleguide/3.8.4/index.css">\n      <% if (assets.version) { %>\n        <link rel="stylesheet" type="text/css" href="//cdn.auth0.com/extensions/auth0-user-import-export/assets/auth0-user-import-export.ui.<%= assets.version %>.css">\n      <% } %>\n    </head>\n    <body>\n      <div id="app"></div>\n      <script type="text/javascript">window.config = <%- JSON.stringify(config) %>;<\/script>\n      <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.973/components/ZeroClipboard/ZeroClipboard.js"><\/script>\n      <script type="text/javascript" src="//cdn.auth0.com/manage/v0.3.973/js/bundle.js"><\/script>\n      <% if (assets.app) { %><script type="text/javascript" src="<%= assets.app %>"><\/script><% } %>\n      <% if (assets.version) { %>\n      <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-user-import-export/assets/auth0-user-import-export.ui.vendors.<%= assets.version %>.js"><\/script>\n      <script type="text/javascript" src="//cdn.auth0.com/extensions/auth0-user-import-export/assets/auth0-user-import-export.ui.<%= assets.version %>.js"><\/script>\n      <% } %>\n    </body>\n    </html>\n  ';return function(t,s){var i={HOSTING_ENV:n("HOSTING_ENV"),CLIENT_VERSION:"2.3.0",AUTH0_DOMAIN:n("AUTH0_DOMAIN"),BASE_URL:o.getBaseUrl(t),BASE_PATH:o.getBasePath(t)};0!==i.BASE_PATH.indexOf("/")&&(i.BASE_PATH="/"+i.BASE_PATH);return s.send(r.render(e,{config:i,assets:{version:"2.3.0"}}))}}},function(e,t,s){"use strict";var r=s(11);r.emitErrs=!0;var n=new r.Logger({transports:[new r.transports.Console({timestamp:!0,level:"debug",handleExceptions:!0,json:!1,colorize:!0})],exitOnError:!1});e.exports=n,e.exports.stream={write:function(e){n.info(e.replace(/\n$/,""))}}},function(e,t,s){"use strict";var r=s(0),n=s(2);e.exports=r.createServer(function(e){return console.log("Starting User Import/Export Extension - Version:",e("CLIENT_VERSION")),n(e)})},function(e,t){e.exports={title:"User Import / Export",name:"auth0-user-import-export",version:"2.3.0",author:"auth0",useHashName:!1,description:"This extension allows you to import/export users from/to your account.",type:"application",logoUrl:"https://cdn.rawgit.com/auth0/auth0-user-import-export-extension/master/assets/logo.svg",initialUrlPath:"/login",docsUrl:"https://auth0.com/docs/extensions/user-import-export",repository:"https://github.com/auth0/auth0-user-import-export-extension",keywords:["auth0","extension"],auth0:{scopes:"create:users read:users read:connections create:passwords_checking_job"}}},function(e,t){e.exports=require("auth0-extension-tools@1.3.1")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("ejs")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("winston")}]);