import{r as a,g as H,m as L,b as M,c as ae,C as T,d as N,e as se,f as ie}from"./index-09831358.js";import{D as le,E as ce,R as pe,F as de,G as ge,P as me,H as ue,T as fe,J as ve}from"./actions-53774f65.js";const he=a.createContext({size:"default",shape:void 0}),B=he,ye=e=>{const{antCls:r,componentCls:o,iconCls:t,avatarBg:n,avatarColor:l,containerSize:i,containerSizeLG:s,containerSizeSM:c,textFontSize:p,textFontSizeLG:m,textFontSizeSM:h,borderRadius:d,borderRadiusLG:g,borderRadiusSM:b,lineWidth:x,lineType:P}=e,C=($,y,z)=>({width:$,height:$,lineHeight:`${$-x*2}px`,borderRadius:"50%",[`&${o}-square`]:{borderRadius:z},[`${o}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${o}-icon`]:{fontSize:y,[`> ${t}`]:{margin:0}}});return{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},M(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:l,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:n,border:`${x}px ${P} transparent`,"&-image":{background:"transparent"},[`${r}-image-img`]:{display:"block"}}),C(i,p,d)),{"&-lg":Object.assign({},C(s,m,g)),"&-sm":Object.assign({},C(c,h,b)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},xe=e=>{const{componentCls:r,groupBorderColor:o,groupOverlapping:t,groupSpace:n}=e;return{[`${r}-group`]:{display:"inline-flex",[`${r}`]:{borderColor:o},"> *:not(:first-child)":{marginInlineStart:t}},[`${r}-group-popover`]:{[`${r} + ${r}`]:{marginInlineStart:n}}}},F=H("Avatar",e=>{const{colorTextLightSolid:r,colorTextPlaceholder:o}=e,t=L(e,{avatarBg:o,avatarColor:r});return[ye(t),xe(t)]},e=>{const{controlHeight:r,controlHeightLG:o,controlHeightSM:t,fontSize:n,fontSizeLG:l,fontSizeXL:i,fontSizeHeading3:s,marginXS:c,marginXXS:p,colorBorderBg:m}=e;return{containerSize:r,containerSizeLG:o,containerSizeSM:t,textFontSize:Math.round((l+i)/2),textFontSizeLG:s,textFontSizeSM:n,groupSpace:p,groupOverlapping:-c,groupBorderColor:m}});var Se=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const be=(e,r)=>{const[o,t]=a.useState(1),[n,l]=a.useState(!1),[i,s]=a.useState(!0),c=a.useRef(null),p=a.useRef(null),m=ae(r,c),{getPrefixCls:h,avatar:d}=a.useContext(T),g=a.useContext(B),b=()=>{if(!p.current||!c.current)return;const u=p.current.offsetWidth,v=c.current.offsetWidth;if(u!==0&&v!==0){const{gap:E=4}=e;E*2<v&&t(v-E*2<u?(v-E*2)/u:1)}};a.useEffect(()=>{l(!0)},[]),a.useEffect(()=>{s(!0),t(1)},[e.src]),a.useEffect(b,[e.gap]);const x=()=>{const{onError:u}=e;(u==null?void 0:u())!==!1&&s(!1)},{prefixCls:P,shape:C,size:$="default",src:y,srcSet:z,icon:S,className:j,rootClassName:J,alt:U,draggable:Y,children:I,crossOrigin:Z}=e,R=Se(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),f=$==="default"?g==null?void 0:g.size:$,Q=Object.keys(typeof f=="object"?f||{}:{}).some(u=>["xs","sm","md","lg","xl","xxl"].includes(u)),_=le(Q),V=a.useMemo(()=>{if(typeof f!="object")return{};const u=ce.find(E=>_[E]),v=f[u];return v?{width:v,height:v,lineHeight:`${v}px`,fontSize:S?v/2:18}:{}},[_,f]),O=h("avatar",P),[K,ee]=F(O),te=N({[`${O}-lg`]:f==="large",[`${O}-sm`]:f==="small"}),A=a.isValidElement(y),re=C||(g==null?void 0:g.shape)||"circle",oe=N(O,te,d==null?void 0:d.className,`${O}-${re}`,{[`${O}-image`]:A||y&&i,[`${O}-icon`]:!!S},j,J,ee),ne=typeof f=="number"?{width:f,height:f,lineHeight:`${f}px`,fontSize:S?f/2:18}:{};let w;if(typeof y=="string"&&i)w=a.createElement("img",{src:y,draggable:Y,srcSet:z,onError:x,alt:U,crossOrigin:Z});else if(A)w=y;else if(S)w=S;else if(n||o!==1){const u=`scale(${o}) translateX(-50%)`,v={msTransform:u,WebkitTransform:u,transform:u},E=typeof f=="number"?{lineHeight:`${f}px`}:{};w=a.createElement(pe,{onResize:b},a.createElement("span",{className:`${O}-string`,ref:p,style:Object.assign(Object.assign({},E),v)},I))}else w=a.createElement("span",{className:`${O}-string`,style:{opacity:0},ref:p},I);return delete R.onError,delete R.gap,K(a.createElement("span",Object.assign({},R,{style:Object.assign(Object.assign(Object.assign(Object.assign({},ne),V),d==null?void 0:d.style),R.style),className:oe,ref:m}),w))},Ce=a.forwardRef(be),G=Ce,k=e=>e?typeof e=="function"?e():e:null,$e=e=>{const{componentCls:r,popoverColor:o,minWidth:t,fontWeightStrong:n,popoverPadding:l,boxShadowSecondary:i,colorTextHeading:s,borderRadiusLG:c,zIndexPopup:p,marginXS:m,colorBgElevated:h,popoverBg:d}=e;return[{[r]:Object.assign(Object.assign({},M(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:p,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":h,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:d,backgroundClip:"padding-box",borderRadius:c,boxShadow:i,padding:l},[`${r}-title`]:{minWidth:t,marginBottom:m,color:s,fontWeight:n},[`${r}-inner-content`]:{color:o}})},ge(e,{colorBg:"var(--antd-arrow-background-color)"}),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},Oe=e=>{const{componentCls:r}=e;return{[r]:me.map(o=>{const t=e[`${o}6`];return{[`&${r}-${o}`]:{"--antd-arrow-background-color":t,[`${r}-inner`]:{backgroundColor:t},[`${r}-arrow`]:{background:"transparent"}}}})}},Pe=e=>{const{componentCls:r,lineWidth:o,lineType:t,colorSplit:n,paddingSM:l,controlHeight:i,fontSize:s,lineHeight:c,padding:p}=e,m=i-Math.round(s*c),h=m/2,d=m/2-o,g=p;return{[r]:{[`${r}-inner`]:{padding:0},[`${r}-title`]:{margin:0,padding:`${h}px ${g}px ${d}px`,borderBottom:`${o}px ${t} ${n}`},[`${r}-inner-content`]:{padding:`${l}px ${g}px`}}}},D=H("Popover",e=>{const{colorBgElevated:r,colorText:o,wireframe:t}=e,n=L(e,{popoverPadding:12,popoverBg:r,popoverColor:o});return[$e(n),Oe(n),t&&Pe(n),de(n,"zoom-big")]},e=>({width:177,minWidth:177,zIndexPopup:e.zIndexPopupBase+30}),{deprecatedTokens:[["width","minWidth"]]});var ze=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const Ee=(e,r,o)=>{if(!(!r&&!o))return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:`${e}-title`},k(r)),a.createElement("div",{className:`${e}-inner-content`},k(o)))},we=e=>{const{hashId:r,prefixCls:o,className:t,style:n,placement:l="top",title:i,content:s,children:c}=e;return a.createElement("div",{className:N(r,o,`${o}-pure`,`${o}-placement-${l}`,t),style:n},a.createElement("div",{className:`${o}-arrow`}),a.createElement(ue,Object.assign({},e,{className:r,prefixCls:o}),c||Ee(o,i,s)))},je=e=>{const{prefixCls:r}=e,o=ze(e,["prefixCls"]),{getPrefixCls:t}=a.useContext(T),n=t("popover",r),[l,i]=D(n);return l(a.createElement(we,Object.assign({},o,{prefixCls:n,hashId:i})))},Ne=je;var Re=globalThis&&globalThis.__rest||function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]]);return o};const ke=e=>{let{title:r,content:o,prefixCls:t}=e;return a.createElement(a.Fragment,null,r&&a.createElement("div",{className:`${t}-title`},k(r)),a.createElement("div",{className:`${t}-inner-content`},k(o)))},X=a.forwardRef((e,r)=>{const{prefixCls:o,title:t,content:n,overlayClassName:l,placement:i="top",trigger:s="hover",mouseEnterDelay:c=.1,mouseLeaveDelay:p=.1,overlayStyle:m={}}=e,h=Re(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:d}=a.useContext(T),g=d("popover",o),[b,x]=D(g),P=d(),C=N(l,x);return b(a.createElement(fe,Object.assign({placement:i,trigger:s,mouseEnterDelay:c,mouseLeaveDelay:p,overlayStyle:m},h,{prefixCls:g,overlayClassName:C,ref:r,overlay:t||n?a.createElement(ke,{prefixCls:g,title:t,content:n}):null,transitionName:ve(P,"zoom-big",h.transitionName),"data-popover-inject":!0})))});X._InternalPanelDoNotUseOrYouWillBeFired=Ne;const Te=X,W=e=>{const{size:r,shape:o}=a.useContext(B),t=a.useMemo(()=>({size:e.size||r,shape:e.shape||o}),[e.size,e.shape,r,o]);return a.createElement(B.Provider,{value:t},e.children)},Be=e=>{const{getPrefixCls:r,direction:o}=a.useContext(T),{prefixCls:t,className:n,rootClassName:l,style:i,maxCount:s,maxStyle:c,size:p,shape:m,maxPopoverPlacement:h="top",maxPopoverTrigger:d="hover",children:g}=e,b=r("avatar",t),x=`${b}-group`,[P,C]=F(b),$=N(x,{[`${x}-rtl`]:o==="rtl"},n,l,C),y=se(g).map((S,j)=>ie(S,{key:`avatar-key-${j}`})),z=y.length;if(s&&s<z){const S=y.slice(0,s),j=y.slice(s,z);return S.push(a.createElement(Te,{key:"avatar-popover-key",content:j,trigger:d,placement:h,overlayClassName:`${x}-popover`},a.createElement(G,{style:c},`+${z-s}`))),P(a.createElement(W,{shape:m,size:p},a.createElement("div",{className:$,style:i},S)))}return P(a.createElement(W,{shape:m,size:p},a.createElement("div",{className:$,style:i},y)))},Ie=Be,q=G;q.Group=Ie;const We=q;export{We as A};