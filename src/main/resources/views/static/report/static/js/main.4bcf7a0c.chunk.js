(this.webpackJsonpLamisPlus=this.webpackJsonpLamisPlus||[]).push([[0],{483:function(e,t,a){},484:function(e,t,a){},575:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(19),c=a.n(r),o=a(38),l=a(75),s=(a(206),a(483),a(484),a(485),a(10)),d=a(628),b=a(629),j=a(634),u=a(633),O=a(630),h=a(392),f=(a(302),a(207),a(631)),p=(a(486),a(14)),m=a(21),x=a(103),g=a.n(x),v=a(611),y=a(612),S=a(613),w=a(610),C=new URLSearchParams(window.location.search).get("jwt"),R="/api/v1/",P=a(632),A=a(236),N=a.n(A),_=a(635),I=a(171),T=a(5),B=Object(h.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),D=function(e){B();var t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1],c=Object(i.useState)([]),o=Object(s.a)(c,2),d=o[0],b=o[1],j=Object(i.useState)({organisationUnitId:""}),u=Object(s.a)(j,2),O=u[0],h=u[1];Object(i.useEffect)((function(){f()}),[]);var f=function(){g.a.get("".concat(R,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){b(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(w.a,{children:Object(T.jsxs)(v.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"PATIENT LINE LIST"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-4",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"organisationUnitId",id:"organisationUnitId",onChange:function(e){h(Object(m.a)(Object(m.a)({},O),{},Object(p.a)({},e.target.name,e.target.value)))},style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),d.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(P.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),r(!0),g.a.post("".concat(R,"reporting/patient-line-list?facilityId=").concat(O.organisationUnitId),O.organisationUnitId,{headers:{Authorization:"Bearer ".concat(C)},responseType:"blob"}).then((function(e){r(!1);var t=e.data,a=new Blob([t],{type:"application/octet-stream"});N.a.saveAs(a,"".concat("Patient Line List",".xlsx"))})).catch((function(e){if(r(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";l.b.error(t)}else l.b.error("Something went wrong. Please try again...")}))},disabled:""===O.organisationUnitId})})}),n&&Object(T.jsxs)(_.a,{icon:!0,children:[Object(T.jsx)(I.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(_.a.Content,{children:[Object(T.jsx)(_.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})]})})]})})})},k=a(308),L=a.n(k),E=a(440),F=a.n(E),U=a(450),z=a.n(U),V=a(441),H=a.n(V),M=a(448),W=a.n(M),G=a(319),J=a.n(G),K=a(318),X=a.n(K),q=a(442),Y=a.n(q),Z=a(443),Q=a.n(Z),$=a(445),ee=a.n($),te=a(446),ae=a.n(te),ie=a(447),ne=a.n(ie),re=a(451),ce=a.n(re),oe=a(444),le=a.n(oe),se=a(449),de=a.n(se),be=a(452),je=a.n(be),ue={Add:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(F.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),Check:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(H.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),Clear:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(X.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),Delete:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(Y.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),DetailPanel:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(J.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),Edit:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(Q.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),Export:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(le.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),Filter:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(ee.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),FirstPage:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(ae.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),LastPage:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(ne.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),NextPage:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(J.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),PreviousPage:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(W.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),ResetSearch:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(X.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),Search:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(de.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),SortArrow:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(z.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),ThirdStateCheck:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(ce.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))})),ViewColumn:Object(i.forwardRef)((function(e,t){return Object(T.jsx)(je.a,Object(m.a)(Object(m.a)({},e),{},{ref:t}))}))},Oe=Object(h.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),he=function(e){Oe();var t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1],c=Object(i.useState)(!1),o=Object(s.a)(c,2),d=o[0],b=o[1],j=Object(i.useState)([]),u=Object(s.a)(j,2),O=u[0],h=u[1],f=Object(i.useState)([]),x=Object(s.a)(f,2),A=x[0],N=x[1],B=Object(i.useState)(""),D=Object(s.a)(B,2),k=D[0],E=D[1],F=Object(i.useState)(!1),U=Object(s.a)(F,2),z=U[0],V=U[1],H=Object(i.useState)({facilityId:"",startDate:"",endDate:"",type:""}),M=Object(s.a)(H,2),W=M[0],G=M[1],J=function(e){G(Object(m.a)(Object(m.a)({},W),{},Object(p.a)({},e.target.name,e.target.value)))};Object(i.useEffect)((function(){K()}),[]);var K=function(){g.a.get("".concat(R,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){N(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(w.a,{children:Object(T.jsxs)(v.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"APPOINTMENT REPORT"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Start Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"startDate",id:"startDate",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"End Date*"}),Object(T.jsx)("input",{type:"date",className:"form-control",name:"endDate",id:"endDate",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"}})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"facilityId",id:"facilityId",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),A.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("div",{className:"form-group  col-md-6",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Type*"}),Object(T.jsxs)("select",{className:"form-control",name:"type",id:"type",onChange:J,style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"miss-refill",children:"Missed Refill Appointment"}),Object(T.jsx)("option",{value:"miss-clinic",children:"Missed Clinic Appointment "}),Object(T.jsx)("option",{value:"clinic-appointment",children:"Scheduled Clinic Visit(Clinic Appointment)"}),Object(T.jsx)("option",{value:"refill-appointment",children:"Scheduled Refill Visit(Refill Appointment)"})]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(P.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),r(!0),g.a.get("".concat(R,"reporting/").concat(W.type,"?facilityId=").concat(W.facilityId,"&startDate=").concat(W.startDate,"&endDate=").concat(W.endDate," "),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){r(!1),b(!0),"miss-refill"===W.type?E("Missed Refill Appointment  -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):"miss-clinic"===W.type?E("Missed Clinic Appointment   -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):"clinic-appointment"===W.type?E("Clinic Appointment   -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):"refill-appointment"===W.type?E("Refill Appointment   -  From :".concat(W.startDate,"  - To: ").concat(W.endDate)):E(""),h(e.data),e.data.length<=0?V(!0):V(!1)})).catch((function(e){if(r(!1),b(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";l.b.error(t)}else l.b.error("Something went wrong. Please try again...")}))},disabled:""===W.facilityId||""===W.startDate||""===W.endDate||""===W.type})})})]})}),Object(T.jsx)("br",{}),n&&Object(T.jsxs)(_.a,{icon:!0,children:[Object(T.jsx)(I.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(_.a.Content,{children:[Object(T.jsx)(_.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]}),z&&Object(T.jsx)(_.a,{info:!0,children:Object(T.jsx)(_.a.Content,{children:Object(T.jsx)("b",{children:"No Record Found"})})}),d&&Object(T.jsx)(L.a,{icons:ue,title:k,columns:[{title:"Name",field:"name"},{title:"Hospital Num",field:"hospitalNum"},{title:"Patient Id",field:"patientId"},{title:"DOB",field:"dateBirth"},{title:"Age",field:"age"},{title:"phone",field:"phone"},{title:"Art Start Date",field:"artStartDate"},{title:"Date Of LastVisit",field:"dateOfLastVisit"},{title:"Date Of NextVisit",field:"dateOfNextVisit"},{title:"Current Status",field:"currentStatus"},{title:"Case Manager",field:"caseManager"},{title:"Facility Name",field:"facilityName"},{title:"lga",field:"lga"},{title:"Lga Of Residence",field:"lgaOfResidence"},{title:"state",field:"state"},{title:"State Of Residence",field:"stateOfResidence"}],isLoading:n,data:O.map((function(e){return{name:e.name,hospitalNum:e.hospitalNum,patientId:e.patientId,dateBirth:e.dateBirth,age:e.age,phone:e.phone,artStartDate:e.artStartDate,dateOfLastVisit:e.dateOfLastVisit,dateOfNextVisit:e.dateOfNextVisit,currentStatus:e.currentStatus,caseManager:e.caseManager,facilityName:e.facilityName,lga:e.lga,lgaOfResidence:e.lgaOfResidence,state:e.state,stateOfResidence:e.stateOfResidence}})),options:{headerStyle:{backgroundColor:"#014d88",color:"#fff"},searchFieldStyle:{width:"100%",margingLeft:"250px"},filtering:!1,exportButton:!0,searchFieldAlignment:"left",pageSizeOptions:[10,20,100,500,1e3,2e3,3e3],pageSize:10,debounceInterval:400}})]})})})},fe=Object(h.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:300},button:{margin:e.spacing(1)},root:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.default},inline:{display:"inline"},error:{color:"#f85032",fontSize:"12.8px"}}})),pe=function(e){fe();var t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=a[0],r=a[1],c=Object(i.useState)([]),o=Object(s.a)(c,2),d=o[0],b=o[1],j=Object(i.useState)({organisationUnitId:""}),u=Object(s.a)(j,2),O=u[0],h=u[1];Object(i.useEffect)((function(){f()}),[]);var f=function(){g.a.get("".concat(R,"account"),{headers:{Authorization:"Bearer ".concat(C)}}).then((function(e){b(e.data.applicationUserOrganisationUnits)})).catch((function(e){}))};return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(w.a,{children:Object(T.jsxs)(v.a,{children:[Object(T.jsx)("h2",{style:{color:"#000"},children:"RADET REPORT"}),Object(T.jsx)("br",{}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("div",{className:"form-group  col-md-4",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Facility*"}),Object(T.jsxs)("select",{className:"form-control",name:"organisationUnitId",id:"organisationUnitId",onChange:function(e){h(Object(m.a)(Object(m.a)({},O),{},Object(p.a)({},e.target.name,e.target.value)))},style:{border:"1px solid #014D88",borderRadius:"0.2rem"},children:[Object(T.jsx)("option",{value:""}),d.map((function(e){return Object(T.jsx)("option",{value:e.organisationUnitId,children:e.organisationUnitName},e.id)}))]})]})}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"row",children:Object(T.jsx)("div",{className:"form-group mb-3 col-md-6",children:Object(T.jsx)(P.a,{type:"submit",content:"Generate Report",icon:"right arrow",labelPosition:"right",style:{backgroundColor:"#014d88",color:"#fff"},onClick:function(e){e.preventDefault(),r(!0),g.a.get("".concat(R,"reporting/radet?facilityId=").concat(O.organisationUnitId),O.organisationUnitId,{headers:{Authorization:"Bearer ".concat(C)},responseType:"blob"}).then((function(e){r(!1);var t=e.data,a=new Blob([t],{type:"application/octet-stream"});N.a.saveAs(a,"".concat("Patient Line List",".xlsx"))})).catch((function(e){if(r(!1),e.response&&e.response.data){var t=e.response.data.apierror&&""!==e.response.data.apierror.message?e.response.data.apierror.message:"Something went wrong, please try again";l.b.error(t)}else l.b.error("Something went wrong. Please try again...")}))},disabled:""===O.organisationUnitId})})}),n&&Object(T.jsxs)(_.a,{icon:!0,children:[Object(T.jsx)(I.a,{name:"circle notched",loading:!0}),Object(T.jsxs)(_.a.Content,{children:[Object(T.jsx)(_.a.Header,{children:"Just one second"}),"We are fetching that content for you."]})]})]})})]})})})},me=Object(h.a)((function(e){return{error:{color:"#f85032",fontSize:"12.8px"},success:{color:"#4BB543 ",fontSize:"11px"}}})),xe=function(e){me();var t=Object(i.useState)(!1),a=Object(s.a)(t,2),n=(a[0],a[1],Object(i.useState)("basic")),r=Object(s.a)(n,2),c=r[0],o=r[1],d=Object(i.useState)([]),b=Object(s.a)(d,2),j=b[0],u=b[1],O=function(e){o(e)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(l.a,{autoClose:3e3,hideProgressBar:!0}),Object(T.jsx)("form",{children:Object(T.jsxs)("div",{className:"row",children:[Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"col-md-3 col-sm-3 col-lg-3 float-start",children:Object(T.jsxs)(f.a,{size:"small",vertical:!0,style:{backgroundColor:"#014D88"},children:[Object(T.jsx)(f.a.Item,{name:"inbox",active:"radet"===c,onClick:function(){return O("radet")},style:{backgroundColor:"radet"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:" RADET REPORT"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"prep"===c,onClick:function(){return O("prep")},style:{backgroundColor:"prep"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"PREP CONVERTER"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"art"===c,onClick:function(){return O("art")},style:{backgroundColor:"art"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"ART SUMMARY REPORT"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"appointment"===c,onClick:function(){return O("appointment")},style:{backgroundColor:"appointment"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"APPOINTMENT REPORT"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"line-list"===c,onClick:function(){return O("line-list")},style:{backgroundColor:"line-list"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"PATIENT LINE LIST"})}),Object(T.jsx)(f.a.Item,{name:"spam",active:"devolve"===c,onClick:function(){return O("devolve")},style:{backgroundColor:"devolve"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"DEVOLVE REPORT"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"gap"===c,onClick:function(){return O("gap")},style:{backgroundColor:"gap"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"GAP ANALYZER"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"biometric"===c,onClick:function(){return O("biometric")},style:{backgroundColor:"biometric"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"BIOMETRIC REPORT"})}),Object(T.jsx)(f.a.Item,{name:"inbox",active:"ict"===c,onClick:function(){return O("ict")},style:{backgroundColor:"ict"===c?"#000":""},children:Object(T.jsx)("span",{style:{color:"#fff"},children:"ICT TRACKING"})})]})}),Object(T.jsxs)("div",{className:"col-md-9 col-sm-9 col-lg-9 float-start",style:{backgroundColor:"#fff"},children:["line-list"===c&&Object(T.jsx)(D,{handleItemClick:O,setCompleted:u,completed:j}),"appointment"===c&&Object(T.jsx)(he,{handleItemClick:O,setCompleted:u,completed:j}),"radet"===c&&Object(T.jsx)(pe,{handleItemClick:O,setCompleted:u,completed:j})]})]})})]})},ge=a(623),ve=a(624),ye=a(625),Se=a(626),we=a(627),Ce=Object(h.a)((function(e){return{card:{margin:e.spacing(20),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},cardBottom:{marginBottom:20},Select:{height:45,width:350},button:{margin:e.spacing(1)},root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"},error:{color:"#f85032",fontSize:"12.8px"}}})),Re=function(e){Ce();var t=Object(i.useState)(!1),a=Object(s.a)(t,2);a[0],a[1];return Object(T.jsx)("div",{children:Object(T.jsx)(ge.a,{children:Object(T.jsx)(v.a,{children:Object(T.jsxs)(ve.a,{style:{marginTop:"20px"},children:[Object(T.jsx)(ye.a,{md:"3",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Data Category "}),Object(T.jsxs)(Se.a,{type:"select",name:"category",id:"category",children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"indicator",children:" Indicator "})]})]})}),Object(T.jsx)(ye.a,{md:"3",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Chart Type "}),Object(T.jsxs)(Se.a,{type:"select",name:"chart_type",id:"chart_type",children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"column",children:" Pie Chart"}),Object(T.jsx)("option",{value:"column",children:" Bar Chart"}),Object(T.jsx)("option",{value:"column",children:" Column Chart "}),Object(T.jsx)("option",{value:"column",children:" Line Chart"}),Object(T.jsx)("option",{value:"column",children:" Area Chart "})]})]})}),Object(T.jsx)(ye.a,{md:"3",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Gender "}),Object(T.jsxs)(Se.a,{type:"select",name:"gender",id:"gender",children:[Object(T.jsx)("option",{value:"",children:"All"}),Object(T.jsx)("option",{value:"Male",children:"Male "}),Object(T.jsx)("option",{value:"Female",children:" Female "})]})]})}),Object(T.jsx)(ye.a,{md:"3",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{for:"exampleSelect",children:"Age Disaggregation"}),Object(T.jsx)(Se.a,{type:"text",name:"age_disaggregation",id:"age_disaggregation"}),Object(T.jsx)(we.a,{})]})}),Object(T.jsx)(ye.a,{md:"3",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Data Element "}),Object(T.jsxs)(Se.a,{type:"select",name:"data_element",id:"data_element",children:[Object(T.jsx)("option",{value:""}),Object(T.jsx)("option",{value:"TX_CURR",children:"TX_CURR "}),Object(T.jsx)("option",{value:"TX_NEW",children:"TX_NEW "}),Object(T.jsx)("option",{value:"PVLS_D",children:"PVLS_D "}),Object(T.jsx)("option",{value:"PVLS_N",children:"PVLS_N "}),Object(T.jsx)("option",{value:"HTS_POS",children:"HTS_POS "}),Object(T.jsx)("option",{value:"HTS",children:"HTS "})]})]})}),Object(T.jsx)(ye.a,{md:"3",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"Start Date "}),Object(T.jsx)(Se.a,{type:"date",name:"data_element",id:"data_element"})]})}),Object(T.jsx)(ye.a,{md:"3",children:Object(T.jsxs)(y.a,{children:[Object(T.jsx)(S.a,{children:"End Date "}),Object(T.jsx)(Se.a,{type:"date",name:"data_element",id:"data_element"})]})}),Object(T.jsx)(ye.a,{style:{marginTop:"20px"},children:Object(T.jsxs)(P.a,{icon:!0,labelPosition:"right",color:"blue",children:["Generate Chart Report",Object(T.jsx)(I.a,{name:"right arrow"})]})})]})})})})},Pe={borderRadius:"2px",fontSize:14},Ae=function(){var e=Object(i.useState)("home"),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(T.jsxs)(i.Fragment,{children:[Object(T.jsx)("div",{className:"row page-titles mx-0",style:{marginTop:"3px",marginBottom:"10px"},children:Object(T.jsx)("ol",{className:"breadcrumb",children:Object(T.jsx)("li",{className:"breadcrumb-item active",children:Object(T.jsx)("h4",{children:"REPORT"})})})}),Object(T.jsx)(d.a,{children:Object(T.jsx)(b.a,{xl:12,children:Object(T.jsx)(j.a,{style:Pe,children:Object(T.jsx)(j.a.Body,{children:Object(T.jsx)("div",{className:"custom-tab-1",children:Object(T.jsxs)(u.a,{id:"controlled-tab-example",activeKey:a,onSelect:function(e){return n(e)},className:"mb-3",children:[Object(T.jsx)(O.a,{eventKey:"home",title:"GENERAL REPORT",children:Object(T.jsx)(xe,{})}),Object(T.jsx)(O.a,{eventKey:"checked-in",title:"REPORT VISUALISATION GENERATOR",children:Object(T.jsx)(Re,{})})]})})})})})})]})};function Ne(){return Object(T.jsx)(o.a,{children:Object(T.jsxs)("div",{children:[Object(T.jsx)(l.a,{}),Object(T.jsx)(o.d,{children:Object(T.jsx)(o.b,{path:"/",children:Object(T.jsx)(Ae,{})})})]})})}var _e=a(314),Ie=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,803)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))},Te=a(457),Be="ltr",De=[{typography:"poppins",version:"light",layout:"vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:Be},{typography:"poppins",version:"light",layout:"vertical",primary:"color_5",headerBg:"color_5",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",direction:Be},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_11",headerBg:"color_1",sidebarBg:"color_11",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_11",direction:Be},{typography:"poppins",version:"dark",layout:"vertical",headerBg:"color_3",navheaderBg:"color_3",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_1",direction:Be},{typography:"poppins",version:"light",layout:"vertical",navheaderBg:"color_15",headerBg:"color_1",sidebarStyle:"full",sidebarBg:"color_1",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"wide",primary:"color_15",direction:Be},{typography:"poppins",version:"light",layout:"horizontal",navheaderBg:"color_1",headerBg:"color_1",sidebarBg:"color_9",sidebarStyle:"modern",sidebarPosition:"static",headerPosition:"fixed",containerLayout:"wide",primary:"color_9",direction:Be}],ke=Object(i.createContext)(),Le=function(e){var t=Object(i.useState)({value:"full",label:"Full"}),a=Object(s.a)(t,2),n=a[0],r=a[1],c=Object(i.useState)({value:"fixed",label:"Fixed"}),o=Object(s.a)(c,2),l=o[0],d=o[1],b=Object(i.useState)({value:"fixed",label:"Fixed"}),j=Object(s.a)(b,2),u=j[0],O=j[1],h=Object(i.useState)({value:"vertical",label:"Vertical"}),f=Object(s.a)(h,2),p=f[0],m=f[1],x=Object(i.useState)({value:"ltr",label:"LTR"}),g=Object(s.a)(x,2),v=g[0],y=g[1],S=Object(i.useState)("color_1"),w=Object(s.a)(S,2),C=w[0],R=w[1],P=Object(i.useState)("color_1"),A=Object(s.a)(P,2),N=A[0],_=A[1],I=Object(i.useState)("color_1"),B=Object(s.a)(I,2),D=B[0],k=B[1],L=Object(i.useState)("color_1"),E=Object(s.a)(L,2),F=E[0],U=E[1],z=Object(i.useState)(!1),V=Object(s.a)(z,2),H=V[0],M=V[1],W=Object(i.useState)(!1),G=Object(s.a)(W,2),J=G[0],K=G[1],X=Object(i.useState)({value:"light",label:"Light"}),q=Object(s.a)(X,2),Y=q[0],Z=q[1],Q=Object(i.useState)({value:"wide-boxed",label:"Wide Boxed"}),$=Object(s.a)(Q,2),ee=$[0],te=$[1],ae=document.querySelector("body"),ie=Object(i.useState)(0),ne=Object(s.a)(ie,2),re=ne[0],ce=ne[1],oe=Object(i.useState)(0),le=Object(s.a)(oe,2),se=le[0],de=le[1],be=function(e){R(e),ae.setAttribute("data-primary",e)},je=function(e){_(e),ae.setAttribute("data-nav-headerbg",e)},ue=function(e){k(e),ae.setAttribute("data-headerbg",e)},Oe=function(e){U(e),ae.setAttribute("data-sibebarbg",e)},he=function(e){d(e),ae.setAttribute("data-sidebar-position",e.value)},fe=function(e){y(e),ae.setAttribute("direction",e.value);var t=document.querySelector("html");t.setAttribute("dir",e.value),t.className=e.value},pe=function(e){"horizontal"===e.value&&"overlay"===n.value?(m(e),ae.setAttribute("data-layout",e.value),r({value:"full",label:"Full"}),ae.setAttribute("data-sidebar-style","full")):(m(e),ae.setAttribute("data-layout",e.value))},me=function(e){"horizontal"===p.value&&"overlay"===e.value?alert("Sorry! Overlay is not possible in Horizontal layout."):(r(e),M("icon-hover"===e.value?"_i-hover":""),ae.setAttribute("data-sidebar-style",e.value))},xe=function(e){O(e),ae.setAttribute("data-header-position",e.value)},ge=function(e){ae.setAttribute("data-theme-version",e.value),Z(e)},ve=function(e){te(e),ae.setAttribute("data-container",e.value),"boxed"===e.value&&me({value:"overlay",label:"Overlay"})};return Object(i.useEffect)((function(){var e=document.querySelector("body");e.setAttribute("data-typography","poppins"),e.setAttribute("data-theme-version","light"),e.setAttribute("data-layout","vertical"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-nav-headerbg","color_1"),e.setAttribute("data-headerbg","color_1"),e.setAttribute("data-sidebar-style","overlay"),e.setAttribute("data-sibebarbg","color_1"),e.setAttribute("data-primary","color_1"),e.setAttribute("data-sidebar-position","fixed"),e.setAttribute("data-header-position","fixed"),e.setAttribute("data-container","wide"),e.setAttribute("direction","ltr");var t=function(){ce(window.innerWidth),de(window.innerHeight),window.innerWidth>=768&&window.innerWidth<1024?e.setAttribute("data-sidebar-style","mini"):window.innerWidth<=768?e.setAttribute("data-sidebar-style","overlay"):e.setAttribute("data-sidebar-style","full")};return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),Object(T.jsx)(ke.Provider,{value:{body:ae,sideBarOption:[{value:"compact",label:"Compact"},{value:"full",label:"Full"},{value:"mini",label:"Mini"},{value:"modern",label:"Modern"},{value:"overlay",label:"Overlay"},{value:"icon-hover",label:"Icon-hover"}],layoutOption:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],backgroundOption:[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],sidebarposition:l,headerPositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],containerPosition:[{value:"wide-boxed",label:"Wide Boxed"},{value:"boxed",label:"Boxed"},{value:"wide",label:"Wide"}],directionPosition:[{value:"ltr",label:"LTR"},{value:"rtl",label:"RTL"}],fontFamily:[{value:"poppins",label:"Poppins"},{value:"roboto",label:"Roboto"},{value:"cairo",label:"Cairo"},{value:"opensans",label:"Open Sans"},{value:"HelveticaNeue",label:"HelveticaNeue"}],primaryColor:C,navigationHader:N,windowWidth:re,windowHeight:se,changePrimaryColor:be,changeNavigationHader:je,changeSideBarStyle:me,sideBarStyle:n,changeSideBarPostion:he,sidebarpositions:[{value:"fixed",label:"Fixed"},{value:"static",label:"Static"}],changeHeaderPostion:xe,headerposition:u,changeSideBarLayout:pe,sidebarLayout:p,changeDirectionLayout:fe,changeContainerPosition:ve,direction:v,colors:["color_1","color_2","color_3","color_4","color_5","color_6","color_7","color_8","color_9","color_10","color_11","color_12","color_13","color_14","color_15"],haderColor:D,chnageHaderColor:ue,chnageSidebarColor:Oe,sidebarColor:F,iconHover:H,menuToggle:J,openMenuToggle:function(){"overly"===n.value?K(!0):K(!1)},changeBackground:ge,background:Y,containerPosition_:ee,setDemoTheme:function(e,t){var a={},i=De[e];ae.setAttribute("data-typography",i.typography),a.value=i.version,ge(a),a.value=i.layout,pe(a),be(i.primary),je(i.navheaderBg),ue(i.headerBg),a.value=i.sidebarStyle,me(a),Oe(i.sidebarBg),a.value=i.sidebarPosition,he(a),a.value=i.headerPosition,xe(a),a.value=i.containerLayout,ve(a),a.value=t,fe(a)}},children:e.children})};c.a.render(Object(T.jsx)(n.a.StrictMode,{children:Object(T.jsx)(Te.a,{children:Object(T.jsx)(_e.a,{basename:"/",children:Object(T.jsx)(Le,{children:Object(T.jsx)(Ne,{})})})})}),document.getElementById("root")),Ie()}},[[575,1,2]]]);
//# sourceMappingURL=main.4bcf7a0c.chunk.js.map