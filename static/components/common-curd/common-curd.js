define("components/common-curd/common-curd.ts",function(t,i){"use strict";var n=this&&this.__assign||Object.assign||function(t){for(var i,n=1,e=arguments.length;e>n;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},e=t("node_modules/avalon2/dist/avalon"),o=t("vendor/ane/index.ts");i.__esModule=!0,i["default"]=e.component("common-curd",{template:"&nbsp;",defaults:{show:!1,loading:!1,list:[],$searchForm:o.createForm({autoAsyncChange:!1}),pagination:{current:1,pageSize:6,total:0},$dialogs:{main:null},search:function(){var t=this;this.$searchForm.validateFields().then(function(i){i&&t.fetch()})},fetch:function(){var t=this,i={start:this.pagination.pageSize*(this.pagination.current-1),limit:this.pagination.pageSize};this.loading=!0,this.$store.fetch(n({},this.$searchForm.record,i)).then(function(i){t.pagination.total=i.total,t.list=i.list,t.loading=!1},function(){t.loading=!1})},handleTableChange:function(t){this.pagination.current=t.current,this.fetch()},handle:{},_handle:{add:function(){this.$dialogs.main.beginCreate(this.$store.initialData()),this.show=!0},edit:function(t,i){this.$dialogs.main.beginUpdate(i),this.show=!0},del:function(t,i){this.$store.remove(i.region_id).then(function(t){"0"===t.code&&o.message.success({content:"删除成功"})})}},actions:function(t){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];this.handle[t]&&this.handle[t].apply(this,i)},handleOk:function(){var t=this;this.$dialogs.main.submit().then(function(i){var n=i[0],e=i[1];return"boolean"==typeof n?(t.show=!1,n?t.$store.update(e):t.$store.create(e)):void 0}).then(function(i){void 0!==i&&"0"===i.code&&t.fetch()})["catch"](function(t){e.log(t)})},_initMainDialog:function(){null===this.$dialogs.main&&(this.$dialogs.main=e.define({$id:this.$id+"_dialog_main",title:"新增",isEdit:!1,$form:o.createForm({record:this.$store.initialData()}),record:this.$store.initialData(),beginCreate:function(t){this.isEdit=!1,this.title="新增",this.record=t},beginUpdate:function(t){this.isEdit=!0,this.title="修改",this.record=t},submit:function(){var t=this;return this.$form.validateFields().then(function(i){return i?[t.isEdit,t.$form.record]:Promise.reject("表单验证未通过")})}}))},_disposeDialogs:function(){var t=this;Object.keys(this.$dialogs).map(function(i){var n=t.$dialogs[i];n&&delete e.vmodels[n.$id]})},onInit:function(){this.fetch(),this._initMainDialog(),this.handle=e.mix(this._handle,this.handle)},onDispose:function(){this._disposeDialogs()}}})});