(this["webpackJsonprisk-solve"]=this["webpackJsonprisk-solve"]||[]).push([[13],{2155:function(e,a,t){"use strict";t.r(a);var l=t(35),n=t.n(l),i=t(53),r=t(24),o=t(0),c=t.n(o),m=t(163),d=t(72),u=t(120),s=t(148),p=t(125),g=t(102),w=t(103),E=t(82),h=t(17),b=t(304),f=t(407),C=t(92),v=t(476),F=t(251),y=t(1227),S=t(1943),O=t(18),j=t(117),x=t.n(j),k=t(131),D=t(219),T=t.n(D),H=t(587),R=t(974),W=t(48),N=["complianceDetails","openDrawer","onCloseDrawer"],P=Object(f.a)((function(e){var a,t;return{root:{display:"flex"},headerRoot:(a={position:"relative",margin:"-30px -15px 0 -15px",paddingRight:15,paddingLeft:15,paddingTop:30,paddingBottom:20},Object(h.a)(a,e.breakpoints.up("sm"),{paddingTop:20}),Object(h.a)(a,e.breakpoints.up("md"),{marginLeft:-50,marginRight:-50,paddingLeft:50,paddingRight:50}),Object(h.a)(a,e.breakpoints.up("lg"),{marginLeft:-65,marginRight:-65,paddingLeft:65,paddingRight:65}),Object(h.a)(a,e.breakpoints.up("xl"),{marginLeft:-88,marginRight:-88,paddingLeft:88,paddingRight:88}),a),headerBgImg:(t={position:"absolute",left:0,top:0,width:"100%",height:"100%",minHeight:"auto",zIndex:0},Object(h.a)(t,e.breakpoints.up("sm"),{minHeight:"auto"}),Object(h.a)(t,"&:before",{content:'""',position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundColor:Object(C.a)(e.palette.primary.main,.5)}),Object(h.a)(t,"& img",{width:"100%",height:"100%"}),t),headerContent:{position:"relative",zIndex:3},titleRoot:{color:e.palette.common.white},actionSidebar:{display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 5px",width:65,borderRight:"1px solid ".concat(e.palette.divider)},contentArea:Object(h.a)({width:300},e.breakpoints.up("sm"),{width:557}),scrollbarRoot:{height:"100vh",padding:10},iconBtn:{position:"relative",color:Object(C.a)(e.palette.common.white,.7),"&:hover, &:focus, &.active":{color:Object(C.a)(e.palette.common.white,1),backgroundColor:Object(C.a)(e.palette.primary.main,.08)}},counterRoot:{color:e.palette.common.white,border:"solid 1px ".concat(e.palette.common.white),backgroundColor:e.palette.warning.main,width:20},iconView:{backgroundColor:Object(C.a)(H.a[500],.1),color:H.a[500],padding:8,borderRadius:4,"& .MuiSvgIcon-root":{display:"block"},"&.web":{backgroundColor:Object(C.a)(e.palette.warning.main,.1),color:e.palette.warning.main},"&.phone":{backgroundColor:Object(C.a)(e.palette.success.main,.15),color:e.palette.success.dark}},wordAddress:{wordBreak:"break-all",cursor:"pointer"}}})),A=Object(S.a)()((function(e){var a=e.complianceDetails,t=e.openDrawer,l=e.onCloseDrawer,n=Object(E.a)(e,N),i=Object(o.useState)("right"),m=Object(r.a)(i,1)[0],d=P(),s=Object(W.b)(null===a||void 0===a?void 0:a.active);return c.a.createElement(b.a,Object.assign({open:t,variant:"temporary",anchor:m,onClose:l},n),c.a.createElement("div",{className:Object(O.a)(d.root)},c.a.createElement(u.a,{className:d.contentArea},c.a.createElement(x.a,{className:d.scrollbarRoot},c.a.createElement(u.a,{className:d.headerRoot},c.a.createElement(u.a,{className:d.headerBgImg},c.a.createElement(k.a,{src:"/images/profile-bg-img.png"})),c.a.createElement(u.a,{className:d.headerContent},c.a.createElement(u.a,{display:"flex",alignItems:"center"},c.a.createElement(v.a,{className:d.iconBtn,onClick:l},c.a.createElement(T.a,null)),c.a.createElement(F.a,{variant:"h5",style:{color:"white"}},a.title),c.a.createElement(u.a,{flex:"1 0 auto"}),c.a.createElement(y.a,{size:"small",variant:"default",label:s.label,style:{color:"white",backgroundColor:s.color}})))),c.a.createElement(u.a,null,c.a.createElement(R.Preview,{complianceDetails:a,isView:!0}))))))})),L=t(39),I=t(192),B=t(101),U=t.n(B),z=t(1946),M=t(2053),_=t(2018),V=t(2029),q=t(2054),Y=t(2055),G=t(2083),J=t(2084),K=t(2104),Q=t(378),X=t(970),Z=t(181),$=t(27),ee=t(430),ae=c.a.forwardRef((function(e,a){return c.a.createElement(z.a,Object.assign({direction:"up",ref:a},e))}));var te=function(e){return c.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},c.a.createElement(k.a,{src:"/images/ic_download.ico",style:{width:"100px"}}),c.a.createElement("p",{style:{marginTop:"10px"}},c.a.createElement("b",null,"Download the excel file below!")),c.a.createElement(Q.a,{style:{marginTop:"20px"},variant:"outlined",color:"primary"},"Download Here"))},le=function(e){var a=e.setFile;return c.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},c.a.createElement(u.a,{width:"50%",mt:2},c.a.createElement(X.a,{useChipsForPreview:!0,showPreviewsInDropzone:!1,showPreviews:!0,filesLimit:1,onChange:function(e){return function(e){1===e.length?a(e[0]):a("")}(e)},acceptedFiles:[".csv",".xlsx",".xls"]})))},ne=function(e){var a=e.complianceList;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Z.DataGrid,{id:"uploadedCompliance",columnAutoWidth:!0,dataSource:a,showColumnLines:!0,showRowLines:!0,showBorders:!0,repaintChangesOnly:!0,allowColumnResizing:!0,rowAlternationEnabled:!0},c.a.createElement($.FilterRow,{visible:!0}),c.a.createElement($.FilterPanel,{visible:!0}),c.a.createElement($.SearchPanel,{visible:!0}),c.a.createElement($.Editing,{mode:"cell",allowUpdating:!0,allowDeleting:!0,allowAdding:!0}),c.a.createElement($.HeaderFilter,{visible:!0,allowSearch:!0}),c.a.createElement($.Column,{dataField:"id",key:"id",visible:!1}),c.a.createElement($.Column,{caption:"#",width:50,allowFiltering:!1,cellRender:function(e){return e.rowIndex+1}}),c.a.createElement($.Column,{dataField:"complianceTitle",minWidth:100,caption:"Title",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"complianceDesc",minWidth:100,caption:"Description",encodeHtml:!1,allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"authority",minWidth:100,caption:"Authority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"subsidiary",minWidth:100,caption:"Subsidiary",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement($.Lookup,{dataSource:ee.d,displayExpr:"subsidiaryName",valueExpr:"subsidiaryName"})),c.a.createElement($.Column,{dataField:"department",minWidth:100,caption:"Department",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement($.Lookup,{dataSource:ee.a,displayExpr:"deptName",valueExpr:"deptName"})),c.a.createElement($.Column,{dataField:"section",minWidth:100,caption:"Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement($.Lookup,{dataSource:ee.b,displayExpr:"sectionName",valueExpr:"sectionName"})),c.a.createElement($.Column,{dataField:"subSection",minWidth:100,caption:"Sub-Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement($.Lookup,{dataSource:ee.c,displayExpr:"subSectionName",valueExpr:"subSectionName"})),c.a.createElement($.Column,{dataField:"penalty",minWidth:100,caption:"Penalty",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"primaryOwner",minWidth:100,caption:"Primary Owner"}),c.a.createElement($.Column,{dataField:"secondaryOwner",minWidth:100,caption:"Secondary Owner",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"escalationPerson",minWidth:100,caption:"Escalation Person",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"priority",minWidth:100,caption:"Priority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"frequency",minWidth:100,caption:"Frequency",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"submissionDeadline",minWidth:100,caption:"Submission Deadline",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"complianceType",minWidth:100,caption:"Compliance Type",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"sourceDoc",minWidth:100,caption:"Source Document",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Scrolling,{rowRenderingMode:"virtual"}),c.a.createElement($.Paging,{defaultPageSize:20}),c.a.createElement($.Pager,{visible:!0,displayMode:!0,showPageSizeSelector:!1,showInfo:!0,showNavigationButtons:!0})))},ie=function(e){var a=e.openDialog,t=e.onCloseDialog,l=e.setActiveStep,n=e.activeStep,i=e.file,r=e.setFile,o=e.complianceList,m=e.breadCrumbsTitle,d=U()((function(e){return{backButton:{marginRight:e.spacing(2)},instructions:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},dialogRoot:{position:"relative"},dialogHeader:{backgroundColor:e.palette.primary.main,position:"relative"},dialogTitleRoot:{"& .MuiTypography-h6":{fontSize:16,color:e.palette.common.white}},scrollbar:{height:function(e){return"calc(100vh - ".concat(e.height,"px)")}}}}))(),s=["Download Template","Upload File","Validation & Confirmation"];return c.a.createElement(M.a,{open:a,onClose:t,scroll:"paper",fullScreen:!0,TransitionComponent:ae,className:d.dialogRoot},c.a.createElement(_.a,{className:d.dialogHeader},c.a.createElement(V.a,null,c.a.createElement(v.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"close"},c.a.createElement(T.a,null)),c.a.createElement(q.a,{className:d.dialogTitleRoot},m," Bulk Import"))),c.a.createElement(x.a,{className:d.scrollbar},c.a.createElement(Y.a,{style:{marginTop:10}},c.a.createElement(u.a,{sx:{width:"100%"}},c.a.createElement(u.a,null,c.a.createElement(G.a,{activeStep:n,alternativeLabel:!0},s.map((function(e){return c.a.createElement(J.a,{key:e},c.a.createElement(K.a,null,e))}))),c.a.createElement(u.a,null,n===s.length?c.a.createElement(u.a,{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},c.a.createElement(k.a,{src:"/images/ic_ok.svg",style:{width:"100px"}}),c.a.createElement("p",{style:{marginTop:10}},c.a.createElement("b",null,"New Records created successfully!")),c.a.createElement(u.a,{mt:10},c.a.createElement(Q.a,{onClick:t,variant:"outlined",color:"primary"},"Finish"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,0===n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(te,null)),1===n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(le,{file:i,setFile:r})),2===n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ne,{complianceList:o}))),c.a.createElement(u.a,{mt:20,display:"flex"},c.a.createElement(Q.a,{disabled:0===n,onClick:function(){l((function(e){return e-1}))},className:d.backButton},"Back"),c.a.createElement(u.a,{flex:"1 0 auto"}),c.a.createElement(Q.a,{variant:"contained",color:"primary",onClick:function(){l((function(e){return e+1}))}},n===s.length-1?"Finish":"Next")))))))))},re=t(1220),oe=t(1221),ce=t(1222),me=t(1223),de=t(177),ue=t(658),se=t(5),pe=t(2099),ge=t(2119),we=t(2081),Ee=t(2117),he=t(2118),be=t(2121),fe=t(2110),Ce=t(2082),ve=t(947),Fe=c.a.memo((function(e){var a=e.open,t=e.onClose,l=e.compliance,m=Object(L.d)(),d=Object(o.useState)({id:null,action:1,documentUrl:null,reason:"",additionalPenalty:null,penaltyNarrative:null,actionsTaken:null}),u=Object(r.a)(d,2),s=u[0],p=u[1],g=2===(null===l||void 0===l?void 0:l.obligationStatus)?1:2,w=function(){var e=Object(i.a)(n.a.mark((function e(a){var t,l,i,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.files[0],l=t.name,i=Object(ve.b)(l),e.next=5,Object(ve.a)(t);case 5:r=e.sent,p(Object(se.a)(Object(se.a)({},s),{},{documentUrl:{name:l,extension:i,data:r}}));case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),E=function(e){p(Object(se.a)(Object(se.a)({},s),{},{reason:e.target.value}))},h=function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,m(Object(I.e)(s,(function(){return t()})));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){p(Object(se.a)(Object(se.a)({},s),{},{id:null===l||void 0===l?void 0:l.id,action:g}))}),[l]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(ge.a,{open:a,onClose:t,maxWidth:"sm",fullWidth:!0},c.a.createElement(we.a,null,c.a.createElement(Ee.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement(ue.a,{color:"primary.main",variant:"h6"},"Confirmation"),c.a.createElement(he.a,{color:"primary",onClick:function(){return t()}},c.a.createElement(Ce.a,null)))),c.a.createElement(be.a,null,c.a.createElement("form",{onSubmit:h},c.a.createElement(Ee.a,null,1===g?c.a.createElement(c.a.Fragment,null,c.a.createElement(ue.a,null,"Are you sure you want to comply now?"),c.a.createElement(pe.a,{margin:"normal",fullWidth:!0,type:"file",required:null===l||void 0===l?void 0:l.hasAttachment,helperText:"Please attach supporting document",onChange:w})):c.a.createElement(c.a.Fragment,null,c.a.createElement(ue.a,null,"Are you sure you want to waive now?"),c.a.createElement(pe.a,{margin:"normal",fullWidth:!0,minRows:4,label:"Reason",type:"text",value:s.reason,onChange:E}),c.a.createElement(pe.a,{margin:"normal",fullWidth:!0,required:!0,type:"file",onChange:w}))),c.a.createElement(Ee.a,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",mt:2}},c.a.createElement(fe.a,{variant:"outlined",sx:{mr:2},type:"submit"},"Yes, Proceed"),c.a.createElement(fe.a,{variant:"contained",onClick:t},"Cancel"))))))})),ye=function(e){var a=e.complianceList,t=e.onViewCompliance,l=e.onUpdateCompliance,n=e.onDeleteCompliance,i=e.step,m=function(e){return function(e){var a=[{action:"view",label:"View",icon:c.a.createElement(re.a,null)},{action:"edit",label:"Edit",icon:c.a.createElement(oe.a,null)}];return a.push({action:"delete",label:"Delete",icon:c.a.createElement(ce.a,null)}),a}()},d=Object(o.useState)(null),u=Object(r.a)(d,2),s=u[0],p=u[1],g=Object(o.useState)(!1),w=Object(r.a)(g,2),E=w[0],h=w[1],b=Object(L.d)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(Z.DataGrid,{id:"enterprise-compliance",columnAutoWidth:!0,dataSource:a,showColumnLines:!0,showRowLines:!0,showBorders:!0,height:"75vh",wordWrapEnabled:!0,allowColumnResizing:!0,rowAlternationEnabled:!0},c.a.createElement($.FilterRow,{visible:!1}),c.a.createElement($.FilterPanel,{visible:!1}),c.a.createElement($.SearchPanel,{visible:!1}),c.a.createElement($.ColumnChooser,{enabled:!1,mode:"select"}),c.a.createElement($.HeaderFilter,{visible:!0,allowSearch:!0}),c.a.createElement($.ColumnFixing,{enabled:!0}),c.a.createElement($.Column,{fixed:!0,fixedPosition:"left",caption:"",width:100,alignment:"center",allowFiltering:!1,cellRender:function(e){var a=e.data;return e.rowIndex,c.a.createElement(de.a,{items:m(),onItemClick:function(e){return function(e,a){"view"===e.action?t(a):"edit"===e.action?l(a):"delete"===e.action&&(n(a),b(Object(I.o)()))}(e,a)},TriggerComponent:c.a.createElement(me.a,null)})}}),c.a.createElement($.Column,{fixed:!0,fixedPosition:"left",dataField:"title",width:200,caption:"Obligation Title",allowHeaderFiltering:!0,allowSearch:!0,cellRender:function(e){var a=e.data,l=e.displayValue;return c.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),t(a)}},l)},allowFiltering:!1,alignment:"left"}),c.a.createElement($.Column,{dataField:"description",width:300,encodeHtml:!1,caption:"Obligation Description",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"complianceStatus",minWidth:180,visible:2!==i,caption:"Compliance Status",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1,allowHiding:!0,cellRender:function(e){var a=e.displayValue,t=e.data,l=Object(W.d)(t.obligationStatus);return c.a.createElement(y.a,{title:"Click Here",label:c.a.createElement(ue.a,null,a),onClick:function(e){e.preventDefault(),p(t),h(!0)},variant:"outlined",style:{cursor:"pointer",borderColor:null===l||void 0===l?void 0:l.color,color:null===l||void 0===l?void 0:l.color}})}}),c.a.createElement($.Column,{dataField:"submissionDeadline",minWidth:150,caption:"Submission Deadline",allowHeaderFiltering:!0,allowSearch:!0,dataType:"date",format:"dd/MM/yyyy",allowFiltering:!0}),c.a.createElement($.Column,{dataField:"approvalStatus",minWidth:180,caption:"Approval Status",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1,allowHiding:!0}),c.a.createElement($.Column,{dataField:"authority",minWidth:100,caption:"Authority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"companyName",minWidth:200,caption:"Company",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"departmentsName",minWidth:200,caption:"Department",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"sectionsName",minWidth:100,caption:"Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"penalty",minWidth:100,caption:"Penalty",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"primaryOwnerName",minWidth:150,caption:"Primary Owner"}),c.a.createElement($.Column,{dataField:"secondaryOwnerName",minWidth:150,caption:"Secondary Owner",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"escalationOwnerName",minWidth:150,caption:"Escalation Person",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"priority",minWidth:100,caption:"Priority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"frequencyName",minWidth:100,caption:"Frequency",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Column,{dataField:"sourceDoc",minWidth:100,visible:!1,caption:"Source Document",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement($.Paging,{defaultPageSize:20}),c.a.createElement($.Pager,{visible:!0,allowedPageSizes:["all",20,50,100],showPageSizeSelector:!0,showNavigationButtons:!0})),c.a.createElement(Fe,{open:E,onClose:function(){h(!1),p(null)},compliance:s}))},Se=t(2128),Oe=t(2096),je=t(2097),xe=function(e){var a=e.compliance,t=e.handleOnClick,l=e.isSelected,n=void 0!==l&&l;return c.a.createElement(c.a.Fragment,null,c.a.createElement(Oe.a,{selected:n,onClick:function(){return t(a.id)}},c.a.createElement(je.a,{primaryTypographyProps:{variant:"subtitle2"},primary:a.title.toUpperCase()})))},ke=t(38),De=function(e){var a=e.complianceList,t=(e.activeCompliance,Object(L.e)((function(e){return e.compliance})).selectedStatutory),l=Object(L.d)(),n=function(e){l({type:ke.a.STATUTORY.GET_SELECTED,payload:e}),l(Object(I.s)(e))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(Se.a,{component:"nav","aria-label":"main compliance",sx:{width:"100%"}},Array.isArray(a)&&a.map((function(e,a){var l=!!t&&e.id===t;return c.a.createElement(xe,{key:a,compliance:e,handleOnClick:n,isSelected:l})}))))},Te=t(1964),He=t(1968),Re=t(2076),We=t(2066),Ne=[{label:d.a.DASHBOARD,link:"/"},{label:d.a.STATUTORY_COMPLIANCE.name,active:!1}],Pe=[{label:"All",value:"all"},{label:"Approved",value:"approved"},{label:"Waiting Approval",value:"pending"},{label:"Compliant",value:"compliant"},{label:"Non Compliant",value:"non_compliant"}];a.default=function(){var e=Object(o.useState)(0),a=Object(r.a)(e,2),t=a[0],l=a[1],E=Object(o.useState)(0),h=Object(r.a)(E,2),b=h[0],f=h[1],C=Object(o.useState)(""),v=Object(r.a)(C,2),F=v[0],y=v[1],S=Object(L.d)(),O=Object(L.e)((function(e){return e.compliance})),j=O.mainStatutoryComplianceData,x=O.subStatutoryComplianceData,k=(O.approvedStatutoryCompliance,O.selectedStatutory),D=(O.compliedStatutoryCompliance,Object(o.useState)(!1)),T=Object(r.a)(D,2),H=T[0],R=T[1],W=Object(o.useState)(!1),N=Object(r.a)(W,2),P=N[0],B=N[1],U=Object(o.useState)({}),z=Object(r.a)(U,2),M=z[0],_=z[1],V=Object(p.a)(),q=Object(g.g)(),Y=function(e){_(e),B(!0)},G=function(e){q.push({pathname:"statutory-compliance/update",state:e})},J=function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(Object(I.g)(a));case 2:return e.next=4,S(Object(I.o)());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),K=function(e,a){l(a)};return Object(o.useEffect)((function(){j.length>0&&!k&&(S({type:ke.a.STATUTORY.GET_SELECTED,payload:j[0].id}),S(Object(I.s)(j[0].id)))}),[j]),Object(o.useEffect)((function(){S(Object(I.r)()),S(Object(I.q)()),S(Object(I.p)())}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{heading:d.a.STATUTORY_COMPLIANCE.name,breadcrumbs:Ne},c.a.createElement(u.a,{className:V.inBuildAppCard,sx:{flexDirection:"row",display:"flex",p:5}},c.a.createElement(u.a,{sx:{flex:1,width:"100%",minWidth:"250px"}},c.a.createElement(ue.a,{variant:"h6"},"Main Compliance"),c.a.createElement(De,{complianceList:j})),c.a.createElement(u.a,{sx:{flex:2,pl:2,width:"100%",minWidth:"calc(100% - 250px)"}},function(){var e,a=(e=t,x.filter((function(a){return 0===e||(1===e?"Approved"===a.approvalStatus:2===e?"Pending Approval"===a.approvalStatus:3===e?1===a.obligationStatus||3===a.obligationStatus:4===e&&(0===a.obligationStatus||2===a.obligationStatus))})));return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement(Te.a,{visibleScrollbar:!0,TabIndicatorProps:{border:"none"},value:t,onChange:K,"aria-label":"statutory-compliance-tabs"},Pe.map((function(e,a){return c.a.createElement(He.a,Object.assign({key:a,label:e.label},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(a)))}))),c.a.createElement(u.a,{width:"100px"},c.a.createElement(w.a,{to:"statutory-compliance/create"},c.a.createElement(he.a,{title:"Add Compliance",color:"primary"},c.a.createElement(Re.a,null))),c.a.createElement(he.a,{onClick:function(){return R(!0)},title:"Bulk Upload",color:"primary"},c.a.createElement(We.a,null)))),c.a.createElement(ye,{breadCrumbsTitle:d.a.STATUTORY_COMPLIANCE.name,complianceList:a,classes:V,setOpenDialog:R,step:t,onViewCompliance:Y,onUpdateCompliance:G,onDeleteCompliance:J}))}()))),c.a.createElement(ie,{breadCrumbsTitle:d.a.STATUTORY_COMPLIANCE.name,openDialog:H,onCloseDialog:function(){R(!1),f(0)},activeStep:b,setActiveStep:f,file:F,setFile:y}),c.a.createElement(A,{complianceDetails:M,openDrawer:P,onCloseDrawer:function(){B(!1)}}),c.a.createElement(s.NotificationContainer,null))}}}]);
//# sourceMappingURL=13.dc37a86e.chunk.js.map