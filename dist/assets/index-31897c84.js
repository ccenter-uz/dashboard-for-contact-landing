import{F as m,r as n,j as e,B as d,T as C,I,q as u,g as h,h as f,i as b}from"./index-f1df9dd1.js";import{u as D}from"./useQuery-c68bb92b.js";import{u as N}from"./useMutation-25ca7f63.js";import{v as K,w as S,x as Q,f as z,y as A}from"./actions-694c9e21.js";import{D as E,T as L}from"./index-73ef1b5c.js";import{A as P}from"./index-1545cbfb.js";const W=()=>{const[p]=m.useForm(),[y,r]=n.useState(null),[g,i]=n.useState(null),[j,l]=n.useState(!1),[o,x]=n.useState(null),{data:c,isPending:w}=D({queryKey:["team"],queryFn:A,refetchOnWindowFocus:!1}),_=N({mutationFn:a=>K(a)}),v=async a=>{_.mutate(a.id),u.invalidateQueries({queryKey:["team"]})},T=async()=>{const a=new FormData;a.append("image",y);const t=await S(o.id,a);u.invalidateQueries({queryKey:["team"]}),s(),console.log(t,"res")},k=async()=>{const a=new FormData;a.append("image",y);const t=await Q(a);u.invalidateQueries({queryKey:["team"]}),s(),console.log(t,"res")},F=async a=>{const t=await z(a.target.files[0]);r(a.target.files[0]),i(t)},s=()=>{r(null),i(null),l(!1),x(null),p.resetFields()},q=[{title:"Фото",dataIndex:"our_team_image_link",key:"our_team_image_link",render:a=>e.jsx(P,{src:h+""+a,size:80,shape:"square",style:{boxShadow:"0 0 10px 1px lightgrey"}})},{title:"Дата создания",dataIndex:"create_data",key:"create_data",flex:1,align:"center"},{title:"Дейтсвия",dataIndex:"action",key:"action",flex:1,align:"center",render:(a,t)=>e.jsxs("div",{className:"d-flex align-center justify-center gap-x-1",children:[e.jsx(f,{title:"Изменить",placement:"top",children:e.jsx(b,{cursor:"pointer",size:20,color:"#252525",onClick:()=>{l(!0),x(t),r(t.our_team_image_link),i(h+""+t.our_team_image_link)}})}),e.jsx(f,{title:"Удалить",placement:"top",children:e.jsx(L,{cursor:"pointer",size:20,color:"#252525",onClick:()=>v(t)})})]})}];return e.jsxs("main",{className:"team",children:[e.jsx("h1",{children:"Team"}),e.jsxs("div",{className:"history-table m-t-2",children:[e.jsx("div",{className:"w-100 d-flex align-center justify-end",children:e.jsx(d,{className:"m-y-1",type:"primary",onClick:()=>l(!0),children:"Создать +"})}),e.jsx(C,{loading:w,column:q,row:c==null?void 0:c.map(a=>({...a,key:a.id}))})]}),e.jsx(E,{history:{record:o,open:j,closeDrawer:s,preview:g,title:"Добавить",footer:e.jsxs("div",{className:"d-flex align-center gap-x-2",children:[e.jsx(d,{type:"primary",form:"history-form",htmlType:"submit",children:"Сохранить"}),e.jsx(d,{danger:!0,onClick:s,children:"Отмена"})]})},children:e.jsx(m,{typeof:"form-data",onFinish:o?T:k,form:p,id:"history-form",layout:"vertical",children:e.jsx(m.Item,{name:"image",label:e.jsxs("p",{children:["Картинка ",e.jsx("span",{style:{color:"red"},children:"(413 X 237 пикс)"})]}),children:e.jsx(I,{type:"file",onChange:F})})})})]})};export{W as default};
