import{F as m,r as n,j as e,B as p,T as b,I as D,q as u,g as h,h as f,i as N}from"./index-f1df9dd1.js";import{u as T}from"./useQuery-c68bb92b.js";import{u as _}from"./useMutation-25ca7f63.js";import{j as K,k as S,l as Q,f as z,m as A}from"./actions-694c9e21.js";import{D as E,T as L}from"./index-73ef1b5c.js";import{A as R}from"./index-1545cbfb.js";const W=()=>{const[r]=m.useForm(),[x,i]=n.useState(null),[g,l]=n.useState(null),[j,o]=n.useState(!1),[c,y]=n.useState(null),{data:d,isPending:w}=T({queryKey:["partners"],queryFn:A,refetchOnWindowFocus:!1}),k=_({mutationFn:t=>K(t)}),v=async t=>{k.mutate(t.id),u.invalidateQueries({queryKey:["partners"]})},F=async t=>{const a=new FormData;a.append("camment",t.comment),a.append("image",x);const I=await S(c.id,a);u.invalidateQueries({queryKey:["partners"]}),s(),console.log(I,"res")},P=async()=>{const t=new FormData;t.append("image",x);const a=await Q(t);u.invalidateQueries({queryKey:["partners"]}),s(),console.log(a,"res")},q=async t=>{const a=await z(t.target.files[0]);i(t.target.files[0]),l(a)},s=()=>{i(null),l(null),o(!1),y(null),r.resetFields()},C=[{title:"Фото",dataIndex:"image_link",key:"image_link",render:t=>e.jsx(R,{src:h+""+t,size:80,shape:"square",style:{boxShadow:"0 0 10px 1px lightgrey"}})},{title:"Дата создания",dataIndex:"create_data",key:"create_data",flex:1,align:"center"},{title:"Дейтсвия",dataIndex:"action",key:"action",flex:1,align:"center",render:(t,a)=>e.jsxs("div",{className:"d-flex align-center justify-center gap-x-1",children:[e.jsx(f,{title:"Изменить",placement:"top",children:e.jsx(N,{cursor:"pointer",size:20,color:"#252525",onClick:()=>{o(!0),y(a),r.setFieldValue("comment",a.camment),i(a.image_link),l(h+""+a.image_link)}})}),e.jsx(f,{title:"Удалить",placement:"top",children:e.jsx(L,{cursor:"pointer",size:20,color:"#252525",onClick:()=>v(a)})})]})}];return e.jsxs("main",{className:"partners",children:[e.jsx("h1",{children:"Partners"}),e.jsxs("div",{className:"partners-table m-t-2",children:[e.jsx("div",{className:"w-100 d-flex align-center justify-end",children:e.jsx(p,{className:"m-y-1",type:"primary",onClick:()=>o(!0),children:"Создать +"})}),e.jsx(b,{loading:w,column:C,row:d==null?void 0:d.map(t=>({...t,key:t.id}))})]}),e.jsx(E,{history:{record:c,open:j,closeDrawer:s,preview:g,title:"Добавить",footer:e.jsxs("div",{className:"d-flex align-center gap-x-2",children:[e.jsx(p,{type:"primary",form:"history-form",htmlType:"submit",children:"Сохранить"}),e.jsx(p,{danger:!0,onClick:s,children:"Отмена"})]})},children:e.jsx(m,{typeof:"form-data",onFinish:c?F:P,form:r,id:"history-form",layout:"vertical",children:e.jsx(m.Item,{name:"image",label:e.jsxs("p",{children:["Картинка ",e.jsx("span",{style:{color:"red"},children:"(220 X 80 пикс)"})]}),children:e.jsx(D,{type:"file",onChange:q})})})})]})};export{W as default};