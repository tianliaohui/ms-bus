define("components/common-sidebar/common-sidebar",function(e,n){"use strict";function s(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(n[s]=e[s]);return n.default=e,n}function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0}),n.name=void 0;var t=e("node_modules/avalon2/dist/avalon"),u=o(t),i=e("services/menuService"),a=s(i),c=e("services/storeService");e("node_modules/ane/dist/ane"),u.default.effect("collapse",{enter:function(e,n){$(e).slideDown(200,n)},leave:function(e,n){$(e).slideUp(200,n)}});var l=n.name="common-sidebar";u.default.component(l,{template:'\n<ms-menu :widget="{menu:@menu,openKeys:@openKeys,selectedKeys:@selectedKeys,onClick:@handleMenuClick,onOpenChange:@handleOpenChange}"></ms-menu>\n',defaults:{menu:[],selectedKeys:["dashboard"],openKeys:[],handleMenuClick:function(e){u.default.history.setHash(e.uri)},handleOpenChange:function(e){this.openKeys=e.slice(-1)},onInit:function(){var e=this;a.menu.then(function(n){e.menu=n}),c.menu.selectedKeys$.subscribe(function(n){e.selectedKeys=n}),c.menu.openKeys$.subscribe(function(n){e.openKeys=n})}}})});