(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0d88320"],{a434:function(e,t,a){"use strict";var r=a("23e7"),l=a("23cb"),n=a("a691"),o=a("50c4"),i=a("7b0b"),s=a("65f0"),u=a("8418"),c=a("1dde"),f=a("ae40"),p=c("splice"),d=f("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,g=Math.min,b=9007199254740991,v="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!d},{splice:function(e,t){var a,r,c,f,p,d,h=i(this),_=o(h.length),w=l(e,_),x=arguments.length;if(0===x?a=r=0:1===x?(a=0,r=_-w):(a=x-2,r=g(m(n(t),0),_-w)),_+a-r>b)throw TypeError(v);for(c=s(h,r),f=0;f<r;f++)p=w+f,p in h&&u(c,f,h[p]);if(c.length=r,a<r){for(f=w;f<_-r;f++)p=f+r,d=f+a,p in h?h[d]=h[p]:delete h[d];for(f=_;f>_-r+a;f--)delete h[f-1]}else if(a>r)for(f=_-r;f>w;f--)p=f+r-1,d=f+a-1,p in h?h[d]=h[p]:delete h[d];for(f=0;f<a;f++)h[f+w]=arguments[f+2];return h.length=_-r+a,c}})},dba0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",[a("el-select",{staticStyle:{"padding-right":"10px"},attrs:{filterable:"",clearable:"",placeholder:"请选择分类"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"}},[e._v("搜索")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{"margin-top":"20px"},attrs:{id:"exportExcel",data:e.list,"element-loading-text":"Loading","default-sort":{prop:"pid"},border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index)+" ")]}}])}),a("el-table-column",{attrs:{label:"ID",align:"center",prop:"pid",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.pid)+" ")]}}])}),a("el-table-column",{attrs:{label:"名称",align:"center",prop:"pname",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.pname)+" ")]}}])}),a("el-table-column",{attrs:{label:"数量",align:"center",prop:"number",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.number)+" ")]}}])}),a("el-table-column",{attrs:{label:"计量单位",align:"center",prop:"spec",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.spec)+" ")]}}])}),a("el-table-column",{attrs:{label:"类别",align:"center",prop:"tname",formatter:e.formatter,filters:[{text:"固定资产",value:"固定资产"},{text:"易耗品",value:"易耗品"}],"filter-method":e.filterHandler},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.tname)+" ")]}}])}),a("el-table-column",{attrs:{label:"分类",align:"center",prop:"t2name",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.t2name)+" ")]}}])}),a("el-table-column",{attrs:{label:"归属",align:"center",prop:"sname",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.sname)+" ")]}}])}),a("el-table-column",{attrs:{label:"备注",align:"center",prop:"remark",formatter:e.formatter},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.remark)+" ")]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),e.deleteRow(t.$index,e.list)}}},[e._v(" 移除 ")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"20px","text-align":"center"},attrs:{"current-page":e.page,"page-sizes":[2,5,10,20],"page-size":e.limit,layout:"prev, pager, next , jumper , -> , total, sizes ",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.getLists}})],1)},l=[],n=a("1da1"),o=(a("a434"),a("96cf"),{filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:[],listLoading:!0,page:1,limit:2,total:0,input3:"",select:"",options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"}],value:""}},mounted:function(){this.getLists()},methods:{getLists:function(){var e=arguments,t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,l,n,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:1,t.page=r,t.listLoading=!0,l=t.page,n=t.limit,a.next=6,t.$API.table.getListpage(l,n);case 6:o=a.sent,2e4==o.code&&(t.list=o.data.records,t.total=o.data.total),t.listLoading=!1;case 9:case"end":return a.stop()}}),a)})))()},handleSizeChange:function(e){this.limit=e,this.getLists()},formatter:function(e,t){return e.pname},clearFilter:function(){this.$refs.filterTable.clearFilter()},filterHandler:function(e,t,a){var r=a["property"];return t[r]===e},deleteRow:function(e,t){t.splice(e,1)}}}),i=o,s=a("2877"),u=Object(s["a"])(i,r,l,!1,null,null,null);t["default"]=u.exports}}]);