(this["webpackJsonprisk-solve"]=this["webpackJsonprisk-solve"]||[]).push([[8,1],{2131:function(e,a,t){"use strict";t.r(a),t.d(a,"Preview",(function(){return ie}));var n=t(36),l=t(5),i=t(24),r=t(0),c=t.n(r),o=t(163),m=t(72),s=t(120),u=t(476),d=t(251),p=t(378),E=t(201),b=t(290),g=t(1224),h=t(588),f=t(2068),C=t(2069),w=t(2070),v=t(2071),O=t(2072),S=t(2073),y=t(148),j=t(125),F=t(1952),N=t(18),I=t(117),x=t.n(I),D=t(1960),k=t(1961),A=t(1213),L=t(1953),H=t(155),P=t(1212),T=t(87),R=t(107),W=t(182),B=(t(1228),t(1963)),M=t(141),z=t.n(M),_=(t(430),t(102)),U=t(103),G=t(39),V=t(192),Y=(t(536),t(408)),q=t(183),J=t(185),K=t(241),Q=t(203),X=t(131),Z=t(167),$=[{label:m.a.DASHBOARD,link:"/"}],ee=function(e){var a=Object(j.a)(),t=e.handleOnSave,n=e.showForm,l=e.handleOnCancel,i=e.isEditable,r=e.setIsEditable;return c.a.createElement(s.a,{className:a.inBuildAppHeader},c.a.createElement(s.a,{className:a.inBuildAppHeaderSidebar},c.a.createElement(u.a,{style:{color:"white"},onClick:function(e){history.back()}},c.a.createElement(F.a,null)),c.a.createElement(d.a,{className:a.inBuildAppHeaderTitle,component:"div",variant:"h1"},"Compliance")),c.a.createElement(s.a,{className:a.inBuildAppHeaderContent},n&&c.a.createElement(s.a,{ml:"auto",display:"flex",alignItems:"center"},i?c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{ml:1},c.a.createElement(p.a,{variant:"contained",style:{backgroundColor:"green",color:"white"},size:"small",onClick:t},"Save"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{ml:1},c.a.createElement(p.a,{variant:"contained",style:{backgroundColor:"green",color:"white"},size:"small",onClick:function(){return r(!0)}},"Edit"))),c.a.createElement(s.a,{ml:1},c.a.createElement(p.a,{variant:"contained",style:{backgroundColor:"darkred",color:"white"},size:"small",onClick:l},"Close")))))},ae=["1. Compliance Details","2. Finish"],te=function(e){var a=Object(j.a)(),t=e.activeStep,n=e.handleNext,l=e.handlePrev,i=e.setActiveStep;return c.a.createElement(s.a,{className:a.inBuildAppSidebar},c.a.createElement(x.a,{className:a.perfectScrollbarContactSidebar},c.a.createElement(s.a,{display:"flex",justifyItems:"center",justifyContent:"center",mt:2},c.a.createElement(u.a,{color:"primary",onClick:l,disabled:0===t},c.a.createElement(D.a,null)),c.a.createElement(s.a,{m:1}),c.a.createElement(u.a,{color:"primary",onClick:n,disabled:t===ae.length-1},c.a.createElement(k.a,null))),c.a.createElement(s.a,{mt:5},c.a.createElement(P.a,{component:"nav",className:a.appNav},c.a.createElement(H.a,{data:ae,renderRow:function(e,n){return c.a.createElement(ne,{key:n,index:n,activeStep:t,item:e,classes:a,setActiveStep:i})}})))))},ne=function(e){var a=e.index,t=e.item,n=e.classes,l=e.activeStep,i=e.setActiveStep,o=Object(r.useRef)(null);return c.a.createElement(c.a.Fragment,null,c.a.createElement(A.a,{ref:o,button:!0,title:t,onClick:function(e){return i(a)},className:Object(N.a)(n.appNavItem,n.appTaskNavItem,{active:a===l,completed:l>a})},c.a.createElement(L.a,{primary:t,className:"Cmt-nav-text"})))},le=function(e){var a,t,n,o,m=Object(G.d)(),u=Object(G.e)((function(e){return e.subsidiaries})),d=u.subsidiaries,f=u.currentSubsidiary,C=Object(G.e)((function(e){return e.departments})).departments,w=Object(G.e)((function(e){return e.sections})).sections,v=Object(G.e)((function(e){return e.subSections})).subSections,O=Object(G.e)((function(e){return e.utils})),S=O.currencies,y=O.caseTypes,j=e.classes,F=e.activeStep,N=e.handleNext,I=e.handleOnSave,D=(e.handleReset,e.isUpdate,e.handlePrev),k=e.complianceDetails,A=e.setComplianceDetails,L=Object(r.useState)(new Date),H=Object(i.a)(L,2),P=H[0],M=H[1],_=Object(r.useState)(["KES","USD","EUR"]),U=Object(i.a)(_,2),V=(U[0],U[1],{id:"",name:""});return Object(r.useEffect)((function(){A(Object(l.a)(Object(l.a)({},k),{},{dateofNextHearing:z()(P).format("YYYY-MM-DD")}))}),[P]),Object(r.useEffect)((function(){!function(e,a){var t=""!==e?parseFloat(e):0,n=""!==a?parseFloat(a):0;A(Object(l.a)(Object(l.a)({},k),{},{totalFees:t+n}))}(k.fees,k.fine)}),[k.fees,k.fine]),Object(r.useEffect)((function(){A(Object(l.a)(Object(l.a)({},k),{},{companyId:f,departmentsId:null,departmentsName:"",sectionsId:null,sectionsName:"",subSectionsId:null,subSectionsName:""}))}),[f]),Object(r.useEffect)((function(){m(Object(q.c)()),m(Object(J.c)()),m(Object(Q.c)()),m(Object(K.c)()),m(Object(Z.b)()),m(Object(Z.d)())}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{className:j.inBuildAppMainContent,minHeight:400},c.a.createElement(x.a,{className:j.perfectScrollbarContactCon},c.a.createElement(s.a,{p:5,display:"flex"},0===F&&c.a.createElement(s.a,{width:"100%"},c.a.createElement(T.a,null,c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(R.a,{fullWidth:!0,required:!0,variant:"outlined",label:"Case Title",value:k.title,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{title:e.target.value}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(R.a,{fullWidth:!0,multiline:!0,minRows:4,variant:"outlined",label:"Case Details",value:k.details,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{details:e.target.value}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(W.a,{fullWidth:!0,required:!0,data:y,label:"Case Type",valueKey:"name",variant:"outlined",labelKey:"name",value:k.caseType,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{caseType:e.target.value}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"Judgement",multiline:!0,minRows:5,value:k.judgement,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{judgement:e.target.value}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(Y.a,{fullWidth:!0,options:d,value:null!==(a=null===d||void 0===d?void 0:d.find((function(e){return e.id===k.companyId})))&&void 0!==a?a:V,getOptionLabel:function(e){return e.name},onChange:function(e,a){A(null!==a?Object(l.a)(Object(l.a)({},k),{},{companyId:a.id,companyName:a.name,departmentsId:null,departmentsName:"",sectionsId:null,sectionsName:"",subSectionsId:null,subSectionsName:""}):Object(l.a)(Object(l.a)({},k),{},{companyId:null,companyName:"",departmentsId:null,departmentsName:"",sectionsId:null,sectionsName:"",subSectionsId:null,subSectionsName:""}))},renderOption:function(e,a){a.selected;return c.a.createElement("span",{key:e.id},e.name)},renderInput:function(e){return c.a.createElement(b.a,Object.assign({required:!0,fullWidth:!0},e,{size:"small",variant:"outlined",label:"Subsidiary"}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(Y.a,{fullWidth:!0,options:C.filter((function(e){return e.companyId==k.companyId})),value:null!==(t=C.find((function(e){return e.id===k.departmentsId})))&&void 0!==t?t:V,getOptionLabel:function(e){return e.name},onChange:function(e,a){A(null!==a?Object(l.a)(Object(l.a)({},k),{},{departmentsId:a.id,departmentsName:a.name,sectionsId:null,sectionsName:"",subSectionsId:null,subSectionsName:""}):Object(l.a)(Object(l.a)({},k),{},{departmentsId:null,departmentsName:"",sectionsId:null,sectionsName:"",subSectionsId:null,subSectionsName:""}))},renderOption:function(e,a){a.selected;return c.a.createElement("span",{key:e.id},e.name)},renderInput:function(e){return c.a.createElement(b.a,Object.assign({helperText:null===k.companyId?"Select Subsidiary":"",fullWidth:!0},e,{size:"small",variant:"outlined",label:"Department"}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(Y.a,{fullWidth:!0,options:w.filter((function(e){return e.departmentsId==k.departmentsId})),value:null!==(n=w.find((function(e){return e.id===k.sectionsId})))&&void 0!==n?n:V,getOptionLabel:function(e){return e.name},onChange:function(e,a){A(null!==a?Object(l.a)(Object(l.a)({},k),{},{sectionsId:a.id,sectionsName:a.name,subSectionsId:null,subSectionsName:""}):Object(l.a)(Object(l.a)({},k),{},{sectionsId:null,sectionsName:"",subSectionsId:null,subSectionsName:""}))},renderOption:function(e,a){a.selected;return c.a.createElement("span",{key:e.id},e.name)},renderInput:function(e){return c.a.createElement(b.a,Object.assign({helperText:null===k.departmentsId?"Select Department":"",fullWidth:!0},e,{size:"small",variant:"outlined",label:"Section"}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(Y.a,{fullWidth:!0,options:v.filter((function(e){return e.sectionsId==k.sectionsId})),value:null!==(o=v.find((function(e){return e.id===k.sectionsId})))&&void 0!==o?o:V,getOptionLabel:function(e){return e.name},onChange:function(e,a){A(null!==a?Object(l.a)(Object(l.a)({},k),{},{subSectionsId:a.id,subSectionsName:a.name}):Object(l.a)(Object(l.a)({},k),{},{subSectionsId:null,subSectionsName:""}))},renderOption:function(e,a){a.selected;return c.a.createElement("span",{key:e.id},e.name)},renderInput:function(e){return c.a.createElement(b.a,Object.assign({helperText:null===k.sectionsId?"Select Section":"",fullWidth:!0},e,{size:"small",variant:"outlined",label:"Sub-Section"}))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(b.a,{fullWidth:!0,label:"Fees",type:"number",variant:"outlined",value:k.fees,onChange:function(e){A(Object(l.a)(Object(l.a)({},k),{},{fees:e.target.value}))},InputProps:{startAdornment:c.a.createElement(g.a,{position:"start"},c.a.createElement(b.a,{select:!0,style:{width:"90px"},label:"",value:k.penaltyCurrency,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{penaltyCurrency:e.target.value}))},InputProps:{disableUnderline:!0}},S.map((function(e){return c.a.createElement(h.a,{key:e.id,value:e.name},e.name)}))))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(b.a,{fullWidth:!0,label:"Fines",type:"number",variant:"outlined",value:k.fine,onChange:function(e){A(Object(l.a)(Object(l.a)({},k),{},{fine:e.target.value}))},InputProps:{startAdornment:c.a.createElement(g.a,{position:"start"},c.a.createElement(b.a,{select:!0,style:{width:"90px"},label:"",value:k.penaltyCurrency,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{penaltyCurrency:e.target.value}))},InputProps:{disableUnderline:!0}},S.map((function(e){return c.a.createElement(h.a,{key:e,value:e.name},e.name)}))))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(b.a,{fullWidth:!0,label:"Total Fees & Fines",type:"number",variant:"outlined",value:k.totalFees,onChange:function(e){A(Object(l.a)(Object(l.a)({},k),{},{totalFees:e.target.value}))},disabled:!0,InputProps:{startAdornment:c.a.createElement(g.a,{position:"start"},c.a.createElement(b.a,{select:!0,disabled:!0,style:{width:"90px"},label:"",value:k.penaltyCurrency,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{penaltyCurrency:e.target.value}))},InputProps:{disableUnderline:!0}},S.map((function(e){return c.a.createElement(h.a,{key:e,value:e.name},e.name)}))))}})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(B.a,{autoOk:!0,fullWidth:!0,clearable:!0,inputVariant:"outlined",label:"Date of Next Hearing",onChange:function(e){M(e)},value:""!==k.dateofNextHearing?k.dateofNextHearing:P,format:"DD-MM-yyyy",animateYearScrolling:!0})),c.a.createElement(E.a,{item:!0,md:12,xs:12},c.a.createElement(R.a,{fullWidth:!0,variant:"outlined",label:"Management Comments",multiline:!0,minRows:5,value:k.managementComments,onChange:function(e){return A(Object(l.a)(Object(l.a)({},k),{},{managementComments:e.target.value}))}})))),1===F&&c.a.createElement(s.a,{width:"100%"},c.a.createElement(ie,{complianceDetails:k}))),c.a.createElement(s.a,{display:"flex",m:3,pb:3},F===ae.length-1&&c.a.createElement(p.a,{onClick:D,variant:"contained",color:"primary",size:"small"},"Prev"),c.a.createElement(s.a,{flex:"1 0 auto"}),F!==ae.length-1&&c.a.createElement(p.a,{onClick:N,variant:"contained",color:"primary",size:"small"},"Continue"),F===ae.length-1&&c.a.createElement(p.a,{onClick:I,variant:"contained",color:"primary",size:"small"},"Save")))))},ie=function(e){var a,t=e.complianceDetails,n=e.isView,l=Object(j.a)();return c.a.createElement(f.a,{className:l.inBuildAppCard},c.a.createElement(C.a,{size:"small","aria-label":"a dense table"},!n&&c.a.createElement(w.a,{className:l.tableHeader},c.a.createElement(v.a,null,c.a.createElement(O.a,{className:l.tableHeaderCell},"Field Name"),c.a.createElement(O.a,{className:l.tableHeaderCell},"Input Value"))),c.a.createElement(S.a,null,c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Case Title")),c.a.createElement(O.a,null,""!==t.title?t.title:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Case Details")),c.a.createElement(O.a,null,""!==t.details?(a=t.details,c.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}})):"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Case Type")),c.a.createElement(O.a,null,""!==t.caseType?t.caseType:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Judgement")),c.a.createElement(O.a,null,""!==t.judgement?t.judgement:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Company")),c.a.createElement(O.a,null,""!==t.companyName?t.companyName:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Department")),c.a.createElement(O.a,null,""!==t.departmentsName?t.departmentsName:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Section")),c.a.createElement(O.a,null,""!==t.sectionsName?t.sectionsName:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Sub Section")),c.a.createElement(O.a,null,""!==t.subSectionsName?t.subSectionsName:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Fees in ",t.penaltyCurrency)),c.a.createElement(O.a,null,""!==t.fees?t.fees:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Fines in ",t.penaltyCurrency)),c.a.createElement(O.a,null,""!==t.fine?t.fine:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Total Fees & Fines in ",t.penaltyCurrency)),c.a.createElement(O.a,null,""!==t.totalFees?t.totalFees:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Date of Next Hearing")),c.a.createElement(O.a,null,""!==t.dateofNextHearing?t.dateofNextHearing:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Management Comments")),c.a.createElement(O.a,null,""!==t.managementComments?t.managementComments:"Not Set")),c.a.createElement(v.a,null,c.a.createElement(O.a,null,c.a.createElement("b",null,"Case File Attachment")),c.a.createElement(O.a,null,""!==t.caseFileAttachment?t.caseFileAttachment:"Not Uploaded")))))},re=function(e){var a=e.classes,t=e.handleReset,n=e.isUpdate;return c.a.createElement(s.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},c.a.createElement(X.a,{src:"/images/ic_ok.svg",style:{width:"50px"}}),c.a.createElement("p",{className:a.instructions,style:{marginTop:"10px"}},c.a.createElement("b",null,"Compliance was ",n?"updated":"created"," successfully!")),c.a.createElement(s.a,{mt:10},c.a.createElement(U.a,{to:"/compliance/legal-compliance"},c.a.createElement(p.a,{color:"primary",variant:"contained"},"Back to Compliance Dashboard")),!n&&c.a.createElement(p.a,{onClick:t,className:a.button},"Create New Compliance")))};a.default=function(){var e=Object(j.a)(),a=Object(G.d)(),t=Object(r.useState)(0),u=Object(i.a)(t,2),d=u[0],p=u[1],E={title:"",details:"",judgement:"",companyId:"",departmentsId:null,departmentsName:null,sectionsId:null,sectionsName:null,subSectionsId:null,subSectionsName:null,fine:0,fees:0,totalFees:0,penaltyCurrency:"KES",managementComments:"",active:!0,dateofNextHearing:z()(new Date).format("YYYY-MM-DD"),caseType:"",caseFileAttachment:""},b=Object(r.useState)(E),g=Object(i.a)(b,2),h=g[0],f=g[1],C=Object(r.useState)($),w=Object(i.a)(C,2),v=w[0],O=w[1],S=Object(r.useState)(!1),F=Object(i.a)(S,2),I=F[0],x=F[1],D=Object(_.h)(),k=function(){p(d+1)},A=function(){p(d-1)},L=function(){f(E),x(!1),p(0)};return Object(r.useEffect)((function(){void 0!==D.state?(O([].concat(Object(n.a)(v),[{label:m.a.LEGAL_COMPLIANCE.name,link:"/compliance/".concat(m.a.LEGAL_COMPLIANCE.url)},{label:m.a.UPDATE_LEGAL_COMPLIANCE,isActive:!0}])),f(D.state),x(!0)):(O([].concat(Object(n.a)(v),[{label:m.a.LEGAL_COMPLIANCE.name,link:"/compliance/".concat(m.a.LEGAL_COMPLIANCE.url)},{label:m.a.CREATE_LEGAL_COMPLIANCE,isActive:!0}])),f(E),x(!1))}),[D]),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{heading:I?m.a.UPDATE_LEGAL_COMPLIANCE:m.a.CREATE_LEGAL_COMPLIANCE,breadcrumbs:v},c.a.createElement(s.a,{className:e.inBuildAppCard},c.a.createElement(ee,null),d===ae.length?c.a.createElement(s.a,{className:Object(N.a)(e.inBuildAppContainer),minHeight:400},c.a.createElement(s.a,{width:"100%",m:5},c.a.createElement(re,{classes:e,handleReset:L,isUpdate:I}))):c.a.createElement(s.a,{className:Object(N.a)(e.inBuildAppContainer)},c.a.createElement(te,{activeStep:d,handleNext:k,handlePrev:A,setActiveStep:p}),c.a.createElement(le,{classes:e,isUpdate:I,activeStep:d,handleNext:k,handlePrev:A,handleReset:L,complianceDetails:h,setComplianceDetails:f,handleOnSave:function(e){e.preventDefault();var t=Object(l.a)(Object(l.a)({},h),{},{fees:parseFloat(h.fees),fine:parseFloat(h.fine)});a(I?Object(V.u)(t,(function(){return k()})):Object(V.b)(t,(function(){return k()})))}})))),c.a.createElement(y.NotificationContainer,null))}},2158:function(e,a,t){"use strict";t.r(a);var n=t(24),l=t(0),i=t.n(l),r=t(163),c=t(72),o=t(120),m=t(148),s=t(125),u=t(102),d=t(82),p=t(17),E=t(304),b=t(407),g=t(92),h=t(476),f=t(251),C=t(1227),w=t(1943),v=t(18),O=t(117),S=t.n(O),y=t(131),j=t(219),F=t.n(j),N=t(587),I=t(2131),x=t(48),D=["complianceDetails","openDrawer","onCloseDrawer","isLegalCompliance"],k=Object(b.a)((function(e){var a,t;return{root:{display:"flex"},headerRoot:(a={position:"relative",margin:"-30px -15px 0 -15px",paddingRight:15,paddingLeft:15,paddingTop:30,paddingBottom:20},Object(p.a)(a,e.breakpoints.up("sm"),{paddingTop:20}),Object(p.a)(a,e.breakpoints.up("md"),{marginLeft:-50,marginRight:-50,paddingLeft:50,paddingRight:50}),Object(p.a)(a,e.breakpoints.up("lg"),{marginLeft:-65,marginRight:-65,paddingLeft:65,paddingRight:65}),Object(p.a)(a,e.breakpoints.up("xl"),{marginLeft:-88,marginRight:-88,paddingLeft:88,paddingRight:88}),a),headerBgImg:(t={position:"absolute",left:0,top:0,width:"100%",height:"100%",minHeight:"auto",zIndex:0},Object(p.a)(t,e.breakpoints.up("sm"),{minHeight:"auto"}),Object(p.a)(t,"&:before",{content:'""',position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundColor:Object(g.a)(e.palette.primary.main,.5)}),Object(p.a)(t,"& img",{width:"100%",height:"100%"}),t),headerContent:{position:"relative",zIndex:3},titleRoot:{color:e.palette.common.white},actionSidebar:{display:"flex",flexDirection:"column",alignItems:"center",padding:"24px 5px",width:65,borderRight:"1px solid ".concat(e.palette.divider)},contentArea:Object(p.a)({width:300},e.breakpoints.up("sm"),{width:557}),scrollbarRoot:{height:"100vh",padding:10},iconBtn:{position:"relative",color:Object(g.a)(e.palette.common.white,.7),"&:hover, &:focus, &.active":{color:Object(g.a)(e.palette.common.white,1),backgroundColor:Object(g.a)(e.palette.primary.main,.08)}},counterRoot:{color:e.palette.common.white,border:"solid 1px ".concat(e.palette.common.white),backgroundColor:e.palette.warning.main,width:20},iconView:{backgroundColor:Object(g.a)(N.a[500],.1),color:N.a[500],padding:8,borderRadius:4,"& .MuiSvgIcon-root":{display:"block"},"&.web":{backgroundColor:Object(g.a)(e.palette.warning.main,.1),color:e.palette.warning.main},"&.phone":{backgroundColor:Object(g.a)(e.palette.success.main,.15),color:e.palette.success.dark}},wordAddress:{wordBreak:"break-all",cursor:"pointer"}}})),A=Object(w.a)()((function(e){var a=e.complianceDetails,t=e.openDrawer,r=e.onCloseDrawer,c=e.isLegalCompliance,m=Object(d.a)(e,D),s=Object(l.useState)("right"),u=Object(n.a)(s,1)[0],p=k(),b=Object(x.b)(a.active);return i.a.createElement(E.a,Object.assign({open:t,variant:"temporary",anchor:u,onClose:r},m),i.a.createElement("div",{className:Object(v.a)(p.root)},i.a.createElement(o.a,{className:p.contentArea},i.a.createElement(S.a,{className:p.scrollbarRoot},i.a.createElement(o.a,{className:p.headerRoot},i.a.createElement(o.a,{className:p.headerBgImg},i.a.createElement(y.a,{src:"/images/profile-bg-img.png"})),i.a.createElement(o.a,{className:p.headerContent},i.a.createElement(o.a,{display:"flex",alignItems:"center"},i.a.createElement(h.a,{className:p.iconBtn,onClick:r},i.a.createElement(F.a,null)),i.a.createElement(f.a,{variant:"h5",style:{color:"white"}},a.title),i.a.createElement(o.a,{flex:"1 0 auto"}),i.a.createElement(C.a,{size:"small",variant:"default",label:b.label,style:{color:"white",backgroundColor:b.color}})))),i.a.createElement(o.a,null,i.a.createElement(I.Preview,{complianceDetails:a,isView:!0,isLegalCompliance:c}))))))})),L=t(39),H=t(192),P=t(101),T=t.n(P),R=t(1946),W=t(2053),B=t(2018),M=t(2029),z=t(2054),_=t(2055),U=t(2083),G=t(2084),V=t(2104),Y=t(378),q=t(970),J=t(181),K=t(27),Q=t(430),X=i.a.forwardRef((function(e,a){return i.a.createElement(R.a,Object.assign({direction:"up",ref:a},e))}));var Z=function(e){return i.a.createElement(o.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},i.a.createElement(y.a,{src:"/images/ic_download.ico",style:{width:"100px"}}),i.a.createElement("p",{style:{marginTop:"10px"}},i.a.createElement("b",null,"Download the excel file below!")),i.a.createElement(Y.a,{style:{marginTop:"20px"},variant:"outlined",color:"primary"},"Download Here"))},$=function(e){var a=e.setFile;return i.a.createElement(o.a,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},i.a.createElement(o.a,{width:"50%",mt:2},i.a.createElement(q.a,{useChipsForPreview:!0,showPreviewsInDropzone:!1,showPreviews:!0,filesLimit:1,onChange:function(e){return function(e){1===e.length?a(e[0]):a("")}(e)},acceptedFiles:[".csv",".xlsx",".xls"]})))},ee=function(e){var a=e.complianceList;return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.DataGrid,{id:"uploadedCompliance",columnAutoWidth:!0,dataSource:a,showColumnLines:!0,showRowLines:!0,showBorders:!0,repaintChangesOnly:!0,allowColumnResizing:!0,rowAlternationEnabled:!0},i.a.createElement(K.FilterRow,{visible:!0}),i.a.createElement(K.FilterPanel,{visible:!0}),i.a.createElement(K.SearchPanel,{visible:!0}),i.a.createElement(K.Editing,{mode:"cell",allowUpdating:!0,allowDeleting:!0,allowAdding:!0}),i.a.createElement(K.HeaderFilter,{visible:!0,allowSearch:!0}),i.a.createElement(K.Column,{dataField:"id",key:"id",visible:!1}),i.a.createElement(K.Column,{caption:"#",width:50,allowFiltering:!1,cellRender:function(e){return e.rowIndex+1}}),i.a.createElement(K.Column,{dataField:"complianceTitle",minWidth:100,caption:"Title",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"complianceDesc",minWidth:100,caption:"Description",encodeHtml:!1,allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"authority",minWidth:100,caption:"Authority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"subsidiary",minWidth:100,caption:"Subsidiary",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},i.a.createElement(K.Lookup,{dataSource:Q.d,displayExpr:"subsidiaryName",valueExpr:"subsidiaryName"})),i.a.createElement(K.Column,{dataField:"department",minWidth:100,caption:"Department",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},i.a.createElement(K.Lookup,{dataSource:Q.a,displayExpr:"deptName",valueExpr:"deptName"})),i.a.createElement(K.Column,{dataField:"section",minWidth:100,caption:"Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},i.a.createElement(K.Lookup,{dataSource:Q.b,displayExpr:"sectionName",valueExpr:"sectionName"})),i.a.createElement(K.Column,{dataField:"subSection",minWidth:100,caption:"Sub-Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1},i.a.createElement(K.Lookup,{dataSource:Q.c,displayExpr:"subSectionName",valueExpr:"subSectionName"})),i.a.createElement(K.Column,{dataField:"penalty",minWidth:100,caption:"Penalty",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"primaryOwner",minWidth:100,caption:"Primary Owner"}),i.a.createElement(K.Column,{dataField:"secondaryOwner",minWidth:100,caption:"Secondary Owner",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"escalationPerson",minWidth:100,caption:"Escalation Person",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"priority",minWidth:100,caption:"Priority",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"frequency",minWidth:100,caption:"Frequency",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"submissionDeadline",minWidth:100,caption:"Submission Deadline",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"complianceType",minWidth:100,caption:"Compliance Type",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"sourceDoc",minWidth:100,caption:"Source Document",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Scrolling,{rowRenderingMode:"virtual"}),i.a.createElement(K.Paging,{defaultPageSize:20}),i.a.createElement(K.Pager,{visible:!0,displayMode:!0,showPageSizeSelector:!1,showInfo:!0,showNavigationButtons:!0})))},ae=function(e){var a=e.openDialog,t=e.onCloseDialog,n=e.setActiveStep,l=e.activeStep,r=e.file,c=e.setFile,m=e.complianceList,s=e.breadCrumbsTitle,u=T()((function(e){return{backButton:{marginRight:e.spacing(2)},instructions:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},dialogRoot:{position:"relative"},dialogHeader:{backgroundColor:e.palette.primary.main,position:"relative"},dialogTitleRoot:{"& .MuiTypography-h6":{fontSize:16,color:e.palette.common.white}},scrollbar:{height:function(e){return"calc(100vh - ".concat(e.height,"px)")}}}}))(),d=["Download Template","Upload File","Validation & Confirmation"];return i.a.createElement(W.a,{open:a,onClose:t,scroll:"paper",fullScreen:!0,TransitionComponent:X,className:u.dialogRoot},i.a.createElement(B.a,{className:u.dialogHeader},i.a.createElement(M.a,null,i.a.createElement(h.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"close"},i.a.createElement(F.a,null)),i.a.createElement(z.a,{className:u.dialogTitleRoot},s," Bulk Import"))),i.a.createElement(S.a,{className:u.scrollbar},i.a.createElement(_.a,{style:{marginTop:10}},i.a.createElement(o.a,{sx:{width:"100%"}},i.a.createElement(o.a,null,i.a.createElement(U.a,{activeStep:l,alternativeLabel:!0},d.map((function(e){return i.a.createElement(G.a,{key:e},i.a.createElement(V.a,null,e))}))),i.a.createElement(o.a,null,l===d.length?i.a.createElement(o.a,{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},i.a.createElement(y.a,{src:"/images/ic_ok.svg",style:{width:"100px"}}),i.a.createElement("p",{style:{marginTop:10}},i.a.createElement("b",null,"New Records created successfully!")),i.a.createElement(o.a,{mt:10},i.a.createElement(Y.a,{onClick:t,variant:"outlined",color:"primary"},"Finish"))):i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,null,0===l&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,null)),1===l&&i.a.createElement(i.a.Fragment,null,i.a.createElement($,{file:r,setFile:c})),2===l&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,{complianceList:m}))),i.a.createElement(o.a,{mt:20,display:"flex"},i.a.createElement(Y.a,{disabled:0===l,onClick:function(){n((function(e){return e-1}))},className:u.backButton},"Back"),i.a.createElement(o.a,{flex:"1 0 auto"}),i.a.createElement(Y.a,{variant:"contained",color:"primary",onClick:function(){n((function(e){return e+1}))}},l===d.length-1?"Finish":"Next")))))))))},te=t(103),ne=t(2066),le=t(159),ie=t(1220),re=t(1221),ce=t(1222),oe=t(1223),me=t(1954),se=t(177),ue=function(e){var a=Object(le.a)(),t=e.breadCrumbsTitle,n=e.complianceList,l=e.setOpenDialog,r=e.onViewCompliance,c=e.onUpdateCompliance,o=e.onDeleteCompliance,m=function(e){return function(e){var a=[{action:"view",label:"View",icon:i.a.createElement(ie.a,null)},{action:"edit",label:"Edit",icon:i.a.createElement(re.a,null)}];return a.push({action:"delete",label:"Delete",icon:i.a.createElement(ce.a,null)}),a}()};return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.DataGrid,{id:"legal-compliance",columnAutoWidth:!0,dataSource:n,showColumnLines:!0,showRowLines:!0,showBorders:!0,allowColumnResizing:!0,rowAlternationEnabled:!0},i.a.createElement(K.FilterRow,{visible:!0}),i.a.createElement(K.StateStoring,{enabled:!1,type:"localStorage",storageKey:"legal-compliance"}),i.a.createElement(K.FilterPanel,{visible:!0}),i.a.createElement(K.SearchPanel,{visible:!0}),i.a.createElement(K.ColumnChooser,{enabled:!0,mode:"select"}),i.a.createElement(K.HeaderFilter,{visible:!0,allowSearch:!0}),i.a.createElement(K.Column,{caption:"Action",width:120,alignment:"center",allowFiltering:!1,cellRender:function(e){var a=e.data;return e.rowIndex,i.a.createElement(se.a,{items:m(),onItemClick:function(e){return function(e,a){"view"===e.action?r(a):"edit"===e.action?c(a):"delete"===e.action&&o(a)}(e,a)},TriggerComponent:i.a.createElement(oe.a,null)})}}),i.a.createElement(K.Column,{dataField:"title",width:150,caption:"Case Title",allowHeaderFiltering:!0,allowSearch:!0,cellRender:function(e){var a=e.data,t=e.displayValue;return i.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),r(a)}},t)},allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"details",width:200,encodeHtml:!1,caption:"Case Details",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"caseType",width:120,caption:"Case Type",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"active",minWidth:100,caption:"Case Status",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1,allowHiding:!0,cellRender:function(e){var a=e.displayValue,t=Object(x.b)(a);return i.a.createElement(C.a,{style:{color:t.color,borderColor:t.color},size:"small",variant:"outlined",label:t.label})}}),i.a.createElement(K.Column,{dataField:"judgement",width:200,caption:"Judgement",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"companyName",minWidth:100,caption:"Company",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"departmentsName",minWidth:100,caption:"Department",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"sectionsName",minWidth:100,caption:"Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"subSectionsName",minWidth:100,caption:"Sub-Section",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"totalFees",minWidth:100,caption:"Total Fines & Fees",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"dateofNextHearing",minWidth:100,caption:"Date of Next Hearing",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"managementComments",minWidth:100,caption:"Management Comments",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Column,{dataField:"caseFileAttachment",minWidth:100,caption:"Case File Attachment",allowHeaderFiltering:!0,allowSearch:!0,allowFiltering:!1}),i.a.createElement(K.Scrolling,{rowRenderingMode:"virtual"}),i.a.createElement(K.Paging,{defaultPageSize:20}),i.a.createElement(K.Pager,{visible:!0,allowedPageSizes:["all",10,20,50,100],displayMode:!0,showPageSizeSelector:!1,showInfo:!0,showNavigationButtons:!0}),i.a.createElement(K.Toolbar,null,i.a.createElement(K.Item,{location:"before"},i.a.createElement(te.a,{to:"legal-compliance/create"},i.a.createElement(Y.a,{variant:"contained",size:"small",className:a.btn,color:"primary",style:{marginBottom:"10px"}},i.a.createElement(me.a,null)," Create ",t))),i.a.createElement(K.Item,{location:"before"},i.a.createElement(Y.a,{variant:"contained",size:"small",className:a.btn,onClick:function(e){return l(!0)},color:"primary",style:{marginBottom:"10px"}},i.a.createElement(ne.a,null)," Import ",t)),i.a.createElement(K.Item,{location:"after",name:"columnChooserButton"}),i.a.createElement(K.Item,{location:"after",name:"searchPanel"}))))},de=[{label:c.a.DASHBOARD,link:"/"},{label:c.a.LEGAL_COMPLIANCE.name,active:!1}];a.default=function(){var e=Object(l.useState)(0),a=Object(n.a)(e,2),t=a[0],d=a[1],p=Object(l.useState)(""),E=Object(n.a)(p,2),b=E[0],g=E[1],h=Object(L.d)(),f=Object(L.e)((function(e){return e.compliance})).legalComplianceData,C=Object(l.useState)(!1),w=Object(n.a)(C,2),v=w[0],O=w[1],S=Object(l.useState)(!1),y=Object(n.a)(S,2),j=y[0],F=y[1],N=Object(l.useState)({}),I=Object(n.a)(N,2),x=I[0],D=I[1],k=Object(s.a)(),P=Object(u.g)();return Object(l.useEffect)((function(){h(Object(H.n)())}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{heading:c.a.LEGAL_COMPLIANCE.name,breadcrumbs:de},i.a.createElement(o.a,{className:k.inBuildAppCard},i.a.createElement(o.a,{padding:5},i.a.createElement(ue,{breadCrumbsTitle:c.a.LEGAL_COMPLIANCE.name,complianceList:f,classes:k,setOpenDialog:O,onViewCompliance:function(e){D(e),F(!0)},onUpdateCompliance:function(e){P.push({pathname:"legal-compliance/update",state:e})},onDeleteCompliance:function(e){}})))),i.a.createElement(ae,{breadCrumbsTitle:c.a.LEGAL_COMPLIANCE.name,openDialog:v,onCloseDialog:function(){O(!1),d(0)},activeStep:t,setActiveStep:d,file:b,setFile:g}),i.a.createElement(A,{complianceDetails:x,openDrawer:j,onCloseDrawer:function(){F(!1)}}),i.a.createElement(m.NotificationContainer,null))}}}]);
//# sourceMappingURL=8.36c56c59.chunk.js.map