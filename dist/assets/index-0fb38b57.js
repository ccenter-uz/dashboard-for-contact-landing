import{r as a,j as e,B as u,q as C}from"./index-8cf2d033.js";import{u as D,T as N}from"./index-c92049f1.js";import{F as i,u as q}from"./useMutation-576a8117.js";import{I as f,c as H,e as S,h as P,f as z,T as g,i as A}from"./actions-210159a0.js";import{I as j}from"./constants-0162285d.js";import{Q as E}from"./react-toastify.esm-886a0e0b.js";import{D as K,P as L,T as Q}from"./index-1417cac4.js";import{A as R}from"./index-6ebbe47d.js";import"./Sider-e3d14542.js";const Y=()=>{const[r]=i.useForm(),[y,n]=a.useState(null),[w,l]=a.useState(null),[k,o]=a.useState(!1),[c,x]=a.useState(null),{data:d,isPending:F}=D({queryKey:["histories"],queryFn:A,refetchOnWindowFocus:!1}),m=q({mutationFn:t=>H(t)}),I=async t=>{m.mutate(t.id),m.isSuccess&&(C.invalidateQueries({queryKey:["histories"]}),E.success(m.data,{position:"bottom-right"}))},v=async t=>{const s=new FormData;s.append("title",t.title),s.append("history_image",y);const p=await S(c.id,s);console.log(p,"res")},b=async t=>{const s=new FormData;s.append("title",t.title),s.append("history_image",y);const p=await P(s);console.log(p,"res")},T=async t=>{const s=await z(t.target.files[0]);n(t.target.files[0]),l(s)},h=()=>{a.startTransition(()=>{n(null),l(null),o(!1),x(null),r.resetFields()})},_=[{title:"Фото",dataIndex:"image_link",key:"image_link",render:t=>e.jsx(R,{src:j+""+t,size:80,shape:"square",style:{boxShadow:"0 0 10px 1px lightgrey"}})},{title:"Название",dataIndex:"title",key:"title",flex:1,align:"center"},{title:"Дата создания",dataIndex:"create_data",key:"create_data",flex:1,align:"center"},{title:"Дейтсвия",dataIndex:"action",key:"action",flex:1,align:"center",render:(t,s)=>e.jsxs("div",{className:"d-flex align-center justify-center gap-x-1",children:[e.jsx(g,{title:"Изменить",placement:"top",children:e.jsx(L,{cursor:"pointer",size:20,color:"#252525",onClick:()=>{o(!0),x(s),r.setFieldValue("title",s.title),n(s.image_link),l(j+""+s.image_link)}})}),e.jsx(g,{title:"Удалить",placement:"top",children:e.jsx(Q,{cursor:"pointer",size:20,color:"#252525",onClick:()=>I(s)})})]})}];return e.jsxs("main",{className:"history",children:[e.jsx("h1",{children:"History"}),e.jsxs("div",{className:"history-table m-t-2",children:[e.jsx("div",{className:"w-100 d-flex align-center justify-end",children:e.jsx(u,{className:"m-y-1",type:"primary",onClick:()=>o(!0),children:"Создать +"})}),e.jsx(N,{column:_,row:d==null?void 0:d.map(t=>({...t,key:t.id})),loading:F})]}),e.jsx(K,{history:{record:c,open:k,closeDrawer:h,preview:w,title:"Добавить",footer:e.jsxs("div",{className:"d-flex align-center gap-x-2",children:[e.jsx(u,{type:"primary",form:"history-form",htmlType:"submit",children:"Сохранить"}),e.jsx(u,{danger:!0,onClick:h,children:"Отмена"})]})},children:e.jsxs(i,{typeof:"form-data",onFinish:c?v:b,form:r,id:"history-form",layout:"vertical",children:[e.jsx(i.Item,{name:"title",label:"Название",children:e.jsx(f,{type:"text"})}),e.jsx(i.Item,{name:"image",label:"Картинка",children:e.jsx(f,{type:"file",onChange:T})})]})})]})};export{Y as default};