(this["webpackJsonprisk-solve"]=this["webpackJsonprisk-solve"]||[]).push([[11],{2160:function(e,a,t){"use strict";t.r(a);var l=t(35),n=t.n(l),i=t(53),r=t(24),o=t(0),c=t.n(o),m=t(163),s=t(72),u=t(120),p=t(148),d=t(125),E=t(102),g=t(103),w=t(1078),b=t(39),h=t(192),f=t(101),F=t.n(f),C=t(1946),S=t(2053),v=t(2018),y=t(2029),x=t(2054),O=t(2055),j=t(2083),D=t(2084),N=t(2104),k=t(378),P=t(476),T=t(219),R=t.n(T),H=t(117),W=t.n(H),A=t(131),I=t(970),L=t(181),B=t(27),M=t(430),_=c.a.forwardRef((function(e,a){return c.a.createElement(C.a,Object.assign({direction:"up",ref:a},e))}));var z=function(e){return c.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},c.a.createElement(A.a,{src:"/images/ic_download.ico",style:{width:"100px"}}),c.a.createElement("p",{style:{marginTop:"10px"}},c.a.createElement("b",null,"Download the excel file below!")),c.a.createElement(k.a,{style:{marginTop:"20px"},variant:"outlined",color:"primary"},"Download Here"))},U=function(e){var a=e.setFile;return c.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},c.a.createElement(u.a,{width:"50%",mt:2},c.a.createElement(I.a,{useChipsForPreview:!0,showPreviewsInDropzone:!1,showPreviews:!0,filesLimit:1,onChange:function(e){return function(e){1===e.length?a(e[0]):a("")}(e)},acceptedFiles:[".csv",".xlsx",".xls"]})))},q=function(e){var a=e.complianceList;return c.a.createElement(c.a.Fragment,null,c.a.createElement(L.DataGrid,{id:"uploadedCompliance",columnAutoWidth:!0,dataSource:a,showColumnLines:!0,showRowLines:!0,showBorders:!0,repaintChangesOnly:!0,allowColumnResizing:!0,rowAlternationEnabled:!0},c.a.createElement(B.FilterRow,{visible:!0}),c.a.createElement(B.FilterPanel,{visible:!0}),c.a.createElement(B.SearchPanel,{visible:!0}),c.a.createElement(B.Editing,{mode:"cell",allowUpdating:!0,allowDeleting:!0,allowAdding:!0}),c.a.createElement(B.HeaderFilter,{visible:!0,allowSearch:!0}),c.a.createElement(B.Column,{dataField:"id",key:"id",visible:!1}),c.a.createElement(B.Column,{caption:"#",width:50,allowFiltering:!1,cellRender:function(e){return e.rowIndex+1}}),c.a.createElement(B.Column,{dataField:"complianceTitle",minWidth:100,caption:"Title",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"complianceDesc",minWidth:100,caption:"Description",encodeHtml:!1,allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"authority",minWidth:100,caption:"Authority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"subsidiary",minWidth:100,caption:"Subsidiary",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement(B.Lookup,{dataSource:M.d,displayExpr:"subsidiaryName",valueExpr:"subsidiaryName"})),c.a.createElement(B.Column,{dataField:"department",minWidth:100,caption:"Department",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement(B.Lookup,{dataSource:M.a,displayExpr:"deptName",valueExpr:"deptName"})),c.a.createElement(B.Column,{dataField:"section",minWidth:100,caption:"Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement(B.Lookup,{dataSource:M.b,displayExpr:"sectionName",valueExpr:"sectionName"})),c.a.createElement(B.Column,{dataField:"subSection",minWidth:100,caption:"Sub-Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},c.a.createElement(B.Lookup,{dataSource:M.c,displayExpr:"subSectionName",valueExpr:"subSectionName"})),c.a.createElement(B.Column,{dataField:"penalty",minWidth:100,caption:"Penalty",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"primaryOwner",minWidth:100,caption:"Primary Owner"}),c.a.createElement(B.Column,{dataField:"secondaryOwner",minWidth:100,caption:"Secondary Owner",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"escalationPerson",minWidth:100,caption:"Escalation Person",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"priority",minWidth:100,caption:"Priority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"frequency",minWidth:100,caption:"Frequency",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"submissionDeadline",minWidth:100,caption:"Submission Deadline",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"complianceType",minWidth:100,caption:"Compliance Type",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Column,{dataField:"sourceDoc",minWidth:100,caption:"Source Document",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),c.a.createElement(B.Scrolling,{rowRenderingMode:"virtual"}),c.a.createElement(B.Paging,{defaultPageSize:20}),c.a.createElement(B.Pager,{visible:!0,displayMode:!0,showPageSizeSelector:!1,showInfo:!0,showNavigationButtons:!0})))},G=function(e){var a=e.openDialog,t=e.onCloseDialog,l=e.setActiveStep,n=e.activeStep,i=e.file,r=e.setFile,o=e.complianceList,m=e.breadCrumbsTitle,s=F()((function(e){return{backButton:{marginRight:e.spacing(2)},instructions:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},dialogRoot:{position:"relative"},dialogHeader:{backgroundColor:e.palette.primary.main,position:"relative"},dialogTitleRoot:{"& .MuiTypography-h6":{fontSize:16,color:e.palette.common.white}},scrollbar:{height:function(e){return"calc(100vh - ".concat(e.height,"px)")}}}}))(),p=["Download Template","Upload File","Validation & Confirmation"];return c.a.createElement(S.a,{open:a,onClose:t,scroll:"paper",fullScreen:!0,TransitionComponent:_,className:s.dialogRoot},c.a.createElement(v.a,{className:s.dialogHeader},c.a.createElement(y.a,null,c.a.createElement(P.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"close"},c.a.createElement(R.a,null)),c.a.createElement(x.a,{className:s.dialogTitleRoot},m," Bulk Import"))),c.a.createElement(W.a,{className:s.scrollbar},c.a.createElement(O.a,{style:{marginTop:10}},c.a.createElement(u.a,{sx:{width:"100%"}},c.a.createElement(u.a,null,c.a.createElement(j.a,{activeStep:n,alternativeLabel:!0},p.map((function(e){return c.a.createElement(D.a,{key:e},c.a.createElement(N.a,null,e))}))),c.a.createElement(u.a,null,n===p.length?c.a.createElement(u.a,{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},c.a.createElement(A.a,{src:"/images/ic_ok.svg",style:{width:"100px"}}),c.a.createElement("p",{style:{marginTop:10}},c.a.createElement("b",null,"New Records created successfully!")),c.a.createElement(u.a,{mt:10},c.a.createElement(k.a,{onClick:t,variant:"outlined",color:"primary"},"Finish"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,0===n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(z,null)),1===n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{file:i,setFile:r})),2===n&&c.a.createElement(c.a.Fragment,null,c.a.createElement(q,{complianceList:o}))),c.a.createElement(u.a,{mt:20,display:"flex"},c.a.createElement(k.a,{disabled:0===n,onClick:function(){l((function(e){return e-1}))},className:s.backButton},"Back"),c.a.createElement(u.a,{flex:"1 0 auto"}),c.a.createElement(k.a,{variant:"contained",color:"primary",onClick:function(){l((function(e){return e+1}))}},n===p.length-1?"Finish":"Next")))))))))},J=t(1150),V=t(1149),K=t(1964),Q=t(1968),X=t(2118),Y=t(658),Z=t(2076),$=t(2066),ee=t(38),ae=[{label:s.a.DASHBOARD,link:"/"},{label:s.a.ENTERPRISE_COMPLIANCE.name,active:!1}],te=[{label:"All",value:"all"},{label:"Approved",value:"approved"},{label:"Waiting Approval",value:"pending"},{label:"Compliant",value:"compliant"},{label:"Non Compliant",value:"non_compliant"}];a.default=function(){var e=Object(o.useState)(0),a=Object(r.a)(e,2),t=a[0],l=a[1],f=Object(o.useState)(0),F=Object(r.a)(f,2),C=F[0],S=F[1],v=Object(o.useState)(""),y=Object(r.a)(v,2),x=y[0],O=y[1],j=Object(b.d)(),D=Object(b.e)((function(e){return e.compliance})),N=D.mainEnterpriseComplianceData,k=D.subEnterpriseComplianceData,P=(D.approvedEnterpriseCompliance,D.selectedEnterprise),T=(D.compliedEnterpriseCompliance,Object(o.useState)(!1)),R=Object(r.a)(T,2),H=R[0],W=R[1],A=Object(o.useState)(!1),I=Object(r.a)(A,2),L=I[0],B=I[1],M=Object(o.useState)({}),_=Object(r.a)(M,2),z=_[0],U=_[1],q=Object(d.a)(),le=Object(E.g)(),ne=function(e){U(e),B(!0)},ie=function(e){le.push({pathname:"enterprise-compliance/update",state:e})},re=function(){var e=Object(i.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(Object(h.f)(a));case 2:return e.next=4,j(Object(h.i)());case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),oe=function(e,a){l(a)};return Object(o.useEffect)((function(){!function(){var e;N.length>0&&!P&&(j({type:ee.a.ENTERPRISE.GET_SELECTED,payload:null===(e=N[0])||void 0===e?void 0:e.id}),j(Object(h.m)(N[0])))}()}),[N]),Object(o.useEffect)((function(){j(Object(h.l)()),j(Object(h.k)()),j(Object(h.j)())}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{heading:s.a.ENTERPRISE_COMPLIANCE.name,breadcrumbs:ae},c.a.createElement(u.a,{className:q.inBuildAppCard,sx:{flexDirection:"row",display:"flex",p:5}},c.a.createElement(u.a,{sx:{flex:1,width:"100%",minWidth:"250px"}},c.a.createElement(Y.a,{variant:"h6"},"Main Compliance"),c.a.createElement(V.a,{complianceList:N})),c.a.createElement(u.a,{sx:{flex:2,pl:2,width:"100%",minWidth:"calc(100% - 250px)"}},function(){var e,a=(e=t,k.filter((function(a){return 0===e||(1===e?"Approved"===a.approvalStatus:2===e?"Pending Approval"===a.approvalStatus:3===e?1===a.obligationStatus||3===a.obligationStatus:4===e&&(0===a.obligationStatus||2===a.obligationStatus))})));return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"}},c.a.createElement(K.a,{visibleScrollbar:!0,TabIndicatorProps:{border:"none"},value:t,onChange:oe,"aria-label":"enterprise-compliance-tabs"},te.map((function(e,a){return c.a.createElement(Q.a,Object.assign({key:a,label:e.label},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(a)))}))),c.a.createElement(u.a,{width:"100px"},c.a.createElement(g.a,{to:"enterprise-compliance/create"},c.a.createElement(X.a,{title:"Add Compliance",color:"primary"},c.a.createElement(Z.a,null))),c.a.createElement(X.a,{onClick:function(){return W(!0)},title:"Bulk Upload",color:"primary"},c.a.createElement($.a,null)))),c.a.createElement(J.a,{breadCrumbsTitle:s.a.ENTERPRISE_COMPLIANCE.name,complianceList:a,classes:q,setOpenDialog:W,step:t,onViewCompliance:ne,onUpdateCompliance:ie,onDeleteCompliance:re}))}()))),c.a.createElement(G,{breadCrumbsTitle:s.a.ENTERPRISE_COMPLIANCE.name,openDialog:H,onCloseDialog:function(){W(!1),S(0)},activeStep:C,setActiveStep:S,file:x,setFile:O}),c.a.createElement(w.a,{complianceDetails:z,openDrawer:L,onCloseDrawer:function(){B(!1)}}),c.a.createElement(p.NotificationContainer,null))}}}]);
//# sourceMappingURL=11.e8cae795.chunk.js.map