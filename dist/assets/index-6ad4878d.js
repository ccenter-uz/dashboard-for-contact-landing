import{r as t,j as e,B as c,q as I}from"./index-8cf2d033.js";import{u as T,T as C}from"./index-c92049f1.js";import{F as d,u as D}from"./useMutation-576a8117.js";import{I as N,d as q,u as H,a as S,f as A,T as y,b as P}from"./actions-210159a0.js";import{I as f}from"./constants-0162285d.js";import{Q as z}from"./react-toastify.esm-886a0e0b.js";import{D as E,P as K,T as L}from"./index-1417cac4.js";import{A as Q}from"./index-6ebbe47d.js";import"./Sider-e3d14542.js";const X=()=>{const[m]=d.useForm(),[u,r]=t.useState(null),[g,n]=t.useState(null),[j,i]=t.useState(!1),[o,p]=t.useState(null),{data:l,isPending:w}=T({queryKey:["headers"],queryFn:P,refetchOnWindowFocus:!1}),h=D({mutationFn:s=>q(s)}),k=async s=>{await h.mutateAsync(s.id),h.isSuccess&&(z.success("Удалено",{position:"bottom-right"}),I.invalidateQueries({queryKey:["headers"]}))},_=async()=>{const s=new FormData;s.append("header_image",u);const a=await H(o.id,s);console.log(a,"res")},F=async()=>{const s=new FormData;s.append("header_image",u);const a=await S(s);console.log(a,"res")},v=async s=>{const a=await A(s.target.files[0]);r(s.target.files[0]),n(a)},x=()=>{t.startTransition(()=>{r(null),n(null),i(!1),p(null),m.resetFields()})},b=[{title:"Фото",dataIndex:"haeder_image_link",key:"haeder_image_link",render:s=>e.jsx(Q,{src:f+""+s,size:80,shape:"square",style:{boxShadow:"0 0 10px 1px lightgrey"}})},{title:"Дата создания",dataIndex:"create_data",key:"create_data",flex:1,align:"center"},{title:"Дейтсвия",dataIndex:"action",key:"action",flex:1,align:"center",render:(s,a)=>e.jsxs("div",{className:"d-flex align-center justify-center gap-x-1",children:[e.jsx(y,{title:"Изменить",placement:"top",children:e.jsx(K,{cursor:"pointer",size:20,color:"#252525",onClick:()=>{i(!0),p(a),r(a.image_link),n(f+""+a.haeder_image_link)}})}),e.jsx(y,{title:"Удалить",placement:"top",children:e.jsx(L,{cursor:"pointer",size:20,color:"#252525",onClick:()=>k(a)})})]})}];return e.jsxs("main",{className:"headers",children:[e.jsx("h1",{children:"Headers"}),e.jsxs("div",{className:"headers-table m-t-2",children:[e.jsx("div",{className:"w-100 d-flex align-center justify-end",children:e.jsx(c,{className:"m-y-1",type:"primary",onClick:()=>i(!0),children:"Создать +"})}),e.jsx(C,{loading:w,column:b,row:l==null?void 0:l.map(s=>({...s,key:s.id}))})]}),e.jsx(E,{history:{record:o,open:j,closeDrawer:x,preview:g,title:"Добавить",footer:e.jsxs("div",{className:"d-flex align-center gap-x-2",children:[e.jsx(c,{type:"primary",form:"history-form",htmlType:"submit",children:"Сохранить"}),e.jsx(c,{danger:!0,onClick:x,children:"Отмена"})]})},children:e.jsx(d,{typeof:"form-data",onFinish:o?_:F,form:m,id:"history-form",layout:"vertical",children:e.jsx(d.Item,{name:"image",label:"Картинка",children:e.jsx(N,{type:"file",onChange:v})})})})]})};export{X as default};
