define("services/ajaxService.ts",function(e,r){function t(e){var r={dataType:"json",cache:!0,jsonp:"callback"};return e.data=a(e.data),e.url=/^\w+:\/\//.test(e.url)?e.url:c.serviceUrl+e.url,c.serviceUrl&&(r.dataType="jsonp",e.data.jsonp_param_name="callback"),$.ajax(o({},r,e)).then(s)}function a(e){var r=e||{};return(r.start||r.limit)&&(r.page={start:r.start||0,limit:r.limit||15},delete r.start,delete r.limit),{params:JSON.stringify(r)}}function s(e){var r={};return e.rows?(r=e,r.code="0",r.list=e.rows,delete r.rows):e.error?(r.code="1",r.message=e.message||e.error):(r.code="0",r.data=e),r}var n="undefined"!=typeof n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},o=this&&this.__assign||Object.assign||function(e){for(var r,t=1,a=arguments.length;a>t;t++){r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i=e("node_modules/jquery/dist/jquery");n.$=n.jQuery=i;var d=e("vendor/ane/index.ts"),c=e("services/configService.ts");$(document).ajaxComplete(function(e,r,t){if(200===r.status){if("json"===t.dataType&&void 0!==r.responseJSON){var a=r.responseJSON;"20"===a.code||"21"===a.code?prompt("Session已经失效，请重新登录")&&(n.location.href="/login.html"):a.error&&d.notification.error({message:a.error.message})}}else void 0===r.status||d.notification.error({message:"请求错误，请联系管理员"})}),r.__esModule=!0,r["default"]=t});