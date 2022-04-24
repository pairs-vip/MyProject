(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab306"],{"13e3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",[r("el-select",{staticStyle:{"padding-right":"10px"},attrs:{filterable:"",clearable:"",placeholder:"请选择分类"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),r("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")]),r("el-button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新增职位")])],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{"margin-top":"20px"},attrs:{id:"exportExcel",data:e.list,"element-loading-text":"Loading","default-sort":{prop:"pid"},border:"",fit:"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"ID",align:"center",prop:"pid",formatter:e.formatter,width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.rid)+" ")]}}])}),r("el-table-column",{attrs:{label:"名称",align:"center",prop:"t2name",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.rname)+" ")]}}])}),r("el-table-column",{attrs:{label:"职能",align:"center",prop:"t2name",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.power)+" ")]}}])}),r("el-table-column",{attrs:{label:"详细",align:"center",prop:"t2name",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.description)+" ")]}}])}),r("el-table-column",{attrs:{label:"操作",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(r){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),r("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":e.page,"page-sizes":[5,10,20],"page-size":e.limit,layout:"prev, pager, next , jumper , -> , total, sizes ",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.getLists}}),r("el-dialog",{attrs:{title:this.form.rid?"编辑":"添加",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},close:function(t){return e.closeDialogForm()}}},[r("el-form",{ref:"rulepForm",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{label:"名称","label-width":e.formLabelWidth,prop:"rname"}},[r("el-input",{model:{value:e.form.rname,callback:function(t){e.$set(e.form,"rname",t)},expression:"form.rname"}})],1),r("el-form-item",{attrs:{label:"职能","label-width":e.formLabelWidth,prop:"power"}},[r("el-input",{model:{value:e.form.power,callback:function(t){e.$set(e.form,"power",t)},expression:"form.power"}})],1),r("el-form-item",{attrs:{label:"详细","label-width":e.formLabelWidth,prop:"description"}},[r("el-input",{model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.resetForm()}}},[e._v("重置")]),r("el-button",{on:{click:function(t){return e.closeDialogForm()}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addTable()}}},[e._v("确 定")])],1)],1)],1)},i=[],a=r("5530"),o=r("1da1"),l=(r("96cf"),r("b0c0"),{filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:[],options:[],options2:[],listLoading:!0,page:1,limit:9,total:10,input3:"",select:"",value:"",user:{},form:{rid:null,rname:"",power:"",description:""},reform:{rid:null,rname:"",power:"",description:""},rules:{power:[{required:!0,message:"请输入职能",trigger:"blur"}],description:[{required:!0,message:"请输入详情",trigger:"blur"}],rname:[{required:!0,message:"请输入职位名称",trigger:"blur"}]},dialogFormVisible:!1,formLabelWidth:"100px"}},mounted:function(){this.getLists()},methods:{handleClick:function(e,t){this.activeName=e.name},getLists:function(){var e=arguments,t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.length>0&&void 0!==e[0]?e[0]:1,t.page=n,t.listLoading=!0,t.page,t.limit,t.user,r.next=6,t.$API.system.getRole();case 6:i=r.sent,console.log(i),2e4==i.code&&(t.list=i.data,t.total=i.data.total),t.listLoading=!1;case 10:case"end":return r.stop()}}),r)})))()},handleSizeChange:function(e){this.limit=e,this.getLists()},addTable:function(){var e=this;this.$refs.rulepForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=15;break}if(n=null,null==e.form.rid){t.next=8;break}return t.next=5,e.$API.system.updateRole(e.form);case 5:n=t.sent,t.next=11;break;case 8:return t.next=10,e.$API.system.addRole(e.form);case 10:n=t.sent;case 11:2e4==n.code&&(e.$message({type:"success",message:e.form.rid?"修改成功":"添加成功"}),e.getLists(e.form.rid?e.page:1)),e.dialogFormVisible=!1,t.next=16;break;case 15:console.log("submit error!");case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},closeDialogForm:function(){this.form=Object(a["a"])({},this.reform),this.dialogFormVisible=!1},formatter:function(e,t){return e.t2name},clearFilter:function(){this.$refs.filterTable.clearFilter()},filterHandler:function(e,t,r){var n=r["property"];return t[n]===e},handleEdit:function(e,t){this.dialogFormVisible=!0,this.form=Object(a["a"])({},t)},handleDelete:function(e,t){var r=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.$API.system.deleteRole(t.rid);case 2:n=e.sent,2e4==n.code&&(r.$message({type:"success",message:"删除成功"}),r.getLists(r.list.length>1?r.page:r.page-1));case 4:case"end":return e.stop()}}),e)})))).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},resetForm:function(){this.form=Object(a["a"])({},this.reform)}}}),s=l,c=r("2877"),u=Object(c["a"])(s,n,i,!1,null,null,null);t["default"]=u.exports}}]);