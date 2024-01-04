var Ce=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var W=(e,t,r)=>(Ce(e,t,"read from private field"),r?r.call(e):t.get(e)),ie=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},le=(e,t,r,n)=>(Ce(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);var ae=(e,t,r)=>(Ce(e,t,"access private method"),r);import{r as s,A as Ie,g as Pe,m as Qe,C as me,d as U,b as Ue,p as Q,k as dt,s as mt,D as pt,v as gt,V as ht,x as bt,S as yt,y as We,c as $t,z as xt,E as Ot,n as vt,F as Ct,L as wt,e as St,G as jt,H as Et,I as It,f as Pt,J as Ft,K as Mt,M as De,Q as _t,R as Je,T as Nt}from"./index-8cf2d033.js";import{G as Rt,H as Tt,A as ye,J as Lt,K as Ze,M as Fe,O as Ve,Q as Wt,S as ke,U as ne,V as Dt,W as Me,X as Vt,T as Ht,Y as et,Z as At,_ as zt,$ as qt,a0 as Gt,a1 as Bt,a2 as Xt,a3 as Kt}from"./actions-210159a0.js";var tt={};Object.defineProperty(tt,"__esModule",{value:!0});var Yt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"},Qt=tt.default=Yt;function Ut(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){Ut(e,o,r[o])})}return e}function Zt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function kt(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zt(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var er=function(e,t){return s.createElement(Ie,kt(Jt({},e),{ref:t,icon:Qt}))};const tr=s.forwardRef(er);var rt={};Object.defineProperty(rt,"__esModule",{value:!0});var rr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"},nr=rt.default=rr;function or(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){or(e,o,r[o])})}return e}function ir(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function lr(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ir(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var ar=function(e,t){return s.createElement(Ie,lr(sr({},e),{ref:t,icon:nr}))};const cr=s.forwardRef(ar),He=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Ae=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",we=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Ae(r.overflowY,t)||Ae(r.overflowX,t)||(n=>{const o=(i=>{if(!i.ownerDocument||!i.ownerDocument.defaultView)return null;try{return i.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!o&&(o.clientHeight<n.scrollHeight||o.clientWidth<n.scrollWidth)})(e)}return!1},he=(e,t,r,n,o,i,a,c)=>i<e&&a>t||i>e&&a<t?0:i<=e&&c<=r||a>=t&&c>=r?i-e-n:a>t&&c<r||i<e&&c>r?a-t+o:0,ur=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},ze=(e,t)=>{var r,n,o,i;if(typeof document>"u")return[];const{scrollMode:a,block:c,inline:u,boundary:d,skipOverflowHiddenElements:m}=t,w=typeof d=="function"?d:T=>T!==d;if(!He(e))throw new TypeError("Invalid target");const N=document.scrollingElement||document.documentElement,j=[];let y=e;for(;He(y)&&w(y);){if(y=ur(y),y===N){j.push(y);break}y!=null&&y===document.body&&we(y)&&!we(document.documentElement)||y!=null&&we(y,m)&&j.push(y)}const S=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,I=(i=(o=window.visualViewport)==null?void 0:o.height)!=null?i:innerHeight,{scrollX:x,scrollY:l}=window,{height:O,width:v,top:$,right:C,bottom:p,left:g}=e.getBoundingClientRect();let f=c==="start"||c==="nearest"?$:c==="end"?p:$+O/2,h=u==="center"?g+v/2:u==="end"?C:g;const A=[];for(let T=0;T<j.length;T++){const b=j[T],{height:P,width:z,top:G,right:F,bottom:M,left:q}=b.getBoundingClientRect();if(a==="if-needed"&&$>=0&&g>=0&&p<=I&&C<=S&&$>=G&&p<=M&&g>=q&&C<=F)return A;const R=getComputedStyle(b),Y=parseInt(R.borderLeftWidth,10),V=parseInt(R.borderTopWidth,10),H=parseInt(R.borderRightWidth,10),E=parseInt(R.borderBottomWidth,10);let L=0,_=0;const B="offsetWidth"in b?b.offsetWidth-b.clientWidth-Y-H:0,K="offsetHeight"in b?b.offsetHeight-b.clientHeight-V-E:0,ee="offsetWidth"in b?b.offsetWidth===0?0:z/b.offsetWidth:0,oe="offsetHeight"in b?b.offsetHeight===0?0:P/b.offsetHeight:0;if(N===b)L=c==="start"?f:c==="end"?f-I:c==="nearest"?he(l,l+I,I,V,E,l+f,l+f+O,O):f-I/2,_=u==="start"?h:u==="center"?h-S/2:u==="end"?h-S:he(x,x+S,S,Y,H,x+h,x+h+v,v),L=Math.max(0,L+l),_=Math.max(0,_+x);else{L=c==="start"?f-G-V:c==="end"?f-M+E+K:c==="nearest"?he(G,M,P,V,E+K,f,f+O,O):f-(G+P/2)+K/2,_=u==="start"?h-q-Y:u==="center"?h-(q+z/2)+B/2:u==="end"?h-F+H+B:he(q,F,z,Y,H+B,h,h+v,v);const{scrollLeft:te,scrollTop:D}=b;L=Math.max(0,Math.min(D+L/oe,b.scrollHeight-P/oe+K)),_=Math.max(0,Math.min(te+_/ee,b.scrollWidth-z/ee+B)),f+=D-L,h+=te-_}A.push({el:b,top:L,left:_})}return A},fr=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function dr(e,t){if(!e.isConnected||!(n=>{let o=n;for(;o&&o.parentNode;){if(o.parentNode===document)return!0;o=o.parentNode instanceof ShadowRoot?o.parentNode.host:o.parentNode}return!1})(e))return;if((n=>typeof n=="object"&&typeof n.behavior=="function")(t))return t.behavior(ze(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:n,top:o,left:i}of ze(e,fr(t)))n.scroll({top:o,left:i,behavior:r})}const mr=s.createContext({}),nt=mr,pr=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},gr=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},hr=(e,t)=>{const{componentCls:r,gridColumns:n}=e,o={};for(let i=n;i>=0;i--)i===0?(o[`${r}${t}-${i}`]={display:"none"},o[`${r}-push-${i}`]={insetInlineStart:"auto"},o[`${r}-pull-${i}`]={insetInlineEnd:"auto"},o[`${r}${t}-push-${i}`]={insetInlineStart:"auto"},o[`${r}${t}-pull-${i}`]={insetInlineEnd:"auto"},o[`${r}${t}-offset-${i}`]={marginInlineStart:0},o[`${r}${t}-order-${i}`]={order:0}):(o[`${r}${t}-${i}`]={display:"block",flex:`0 0 ${i/n*100}%`,maxWidth:`${i/n*100}%`},o[`${r}${t}-push-${i}`]={insetInlineStart:`${i/n*100}%`},o[`${r}${t}-pull-${i}`]={insetInlineEnd:`${i/n*100}%`},o[`${r}${t}-offset-${i}`]={marginInlineStart:`${i/n*100}%`},o[`${r}${t}-order-${i}`]={order:i});return o},je=(e,t)=>hr(e,t),br=(e,t,r)=>({[`@media (min-width: ${t}px)`]:Object.assign({},je(e,r))}),yr=Pe("Grid",e=>[pr(e)]),$r=Pe("Grid",e=>{const t=Qe(e,{gridColumns:24}),r={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[gr(t),je(t,""),je(t,"-xs"),Object.keys(r).map(n=>br(t,r[n],n)).reduce((n,o)=>Object.assign(Object.assign({},n),o),{})]});var xr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function Or(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const vr=["xs","sm","md","lg","xl","xxl"],Cr=s.forwardRef((e,t)=>{const{getPrefixCls:r,direction:n}=s.useContext(me),{gutter:o,wrap:i,supportFlexGap:a}=s.useContext(nt),{prefixCls:c,span:u,order:d,offset:m,push:w,pull:N,className:j,children:y,flex:S,style:I}=e,x=xr(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),l=r("col",c),[O,v]=$r(l);let $={};vr.forEach(g=>{let f={};const h=e[g];typeof h=="number"?f.span=h:typeof h=="object"&&(f=h||{}),delete x[g],$=Object.assign(Object.assign({},$),{[`${l}-${g}-${f.span}`]:f.span!==void 0,[`${l}-${g}-order-${f.order}`]:f.order||f.order===0,[`${l}-${g}-offset-${f.offset}`]:f.offset||f.offset===0,[`${l}-${g}-push-${f.push}`]:f.push||f.push===0,[`${l}-${g}-pull-${f.pull}`]:f.pull||f.pull===0,[`${l}-${g}-flex-${f.flex}`]:f.flex||f.flex==="auto",[`${l}-rtl`]:n==="rtl"})});const C=U(l,{[`${l}-${u}`]:u!==void 0,[`${l}-order-${d}`]:d,[`${l}-offset-${m}`]:m,[`${l}-push-${w}`]:w,[`${l}-pull-${N}`]:N},j,$,v),p={};if(o&&o[0]>0){const g=o[0]/2;p.paddingLeft=g,p.paddingRight=g}if(o&&o[1]>0&&!a){const g=o[1]/2;p.paddingTop=g,p.paddingBottom=g}return S&&(p.flex=Or(S),i===!1&&!p.minWidth&&(p.minWidth=0)),O(s.createElement("div",Object.assign({},x,{style:Object.assign(Object.assign({},p),I),className:C,ref:t}),y))}),ot=Cr;var wr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function qe(e,t){const[r,n]=s.useState(typeof e=="string"?e:""),o=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let i=0;i<ye.length;i++){const a=ye[i];if(!t[a])continue;const c=e[a];if(c!==void 0){n(c);return}}};return s.useEffect(()=>{o()},[JSON.stringify(e),t]),r}const Sr=s.forwardRef((e,t)=>{const{prefixCls:r,justify:n,align:o,className:i,style:a,children:c,gutter:u=0,wrap:d}=e,m=wr(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:w,direction:N}=s.useContext(me),[j,y]=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[S,I]=s.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),x=qe(o,S),l=qe(n,S),O=Rt(),v=s.useRef(u),$=Tt();s.useEffect(()=>{const M=$.subscribe(q=>{I(q);const R=v.current||0;(!Array.isArray(R)&&typeof R=="object"||Array.isArray(R)&&(typeof R[0]=="object"||typeof R[1]=="object"))&&y(q)});return()=>$.unsubscribe(M)},[]);const C=()=>{const M=[void 0,void 0];return(Array.isArray(u)?u:[u,void 0]).forEach((R,Y)=>{if(typeof R=="object")for(let V=0;V<ye.length;V++){const H=ye[V];if(j[H]&&R[H]!==void 0){M[Y]=R[H];break}}else M[Y]=R}),M},p=w("row",r),[g,f]=yr(p),h=C(),A=U(p,{[`${p}-no-wrap`]:d===!1,[`${p}-${l}`]:l,[`${p}-${x}`]:x,[`${p}-rtl`]:N==="rtl"},i,f),T={},b=h[0]!=null&&h[0]>0?h[0]/-2:void 0,P=h[1]!=null&&h[1]>0?h[1]/-2:void 0;b&&(T.marginLeft=b,T.marginRight=b),O?[,T.rowGap]=h:P&&(T.marginTop=P,T.marginBottom=P);const[z,G]=h,F=s.useMemo(()=>({gutter:[z,G],wrap:d,supportFlexGap:O}),[z,G,d,O]);return g(s.createElement(nt.Provider,{value:F},s.createElement("div",Object.assign({},m,{className:A,style:Object.assign(Object.assign({},T),a),ref:t}),c)))}),jr=Sr;function $e(e){const[t,r]=s.useState(e);return s.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const Er=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},Ir=Er,Pr=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`},label:{fontSize:e.fontSize},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${e.controlOutlineWidth}px ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Ge=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},Fr=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},Ue(e)),Pr(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Ge(e,e.controlHeightSM)),"&-large":Object.assign({},Ge(e,e.controlHeightLG))})}},Mr=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:o}=e;return{[t]:Object.assign(Object.assign({},Ue(e)),{marginBottom:e.marginLG,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${o}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{display:"inline-block",flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:`${e.lineHeight} - 0.25em`,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:e.controlHeight,color:e.colorTextHeading,fontSize:e.fontSize,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:e.colorError,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:e.marginXXS/2,marginInlineEnd:e.marginXS},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{display:"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:Ze,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},_r=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label.${n}-col-24 + ${r}-control`]:{minWidth:"unset"}}}},Nr=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},"&-with-help":{marginBottom:e.marginLG},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},ce=e=>({padding:`0 0 ${e.paddingXS}px`,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Rr=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${r} ${r}-label`]:ce(e),[t]:{[r]:{flexWrap:"wrap",[`${r}-label,
          ${r}-control`]:{flex:"0 0 100%",maxWidth:"100%"}}}}},Tr=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-vertical`]:{[r]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]:ce(e),[`@media (max-width: ${e.screenXSMax}px)`]:[Rr(e),{[t]:{[`.${n}-col-xs-24${r}-label`]:ce(e)}}],[`@media (max-width: ${e.screenSMMax}px)`]:{[t]:{[`.${n}-col-sm-24${r}-label`]:ce(e)}},[`@media (max-width: ${e.screenMDMax}px)`]:{[t]:{[`.${n}-col-md-24${r}-label`]:ce(e)}},[`@media (max-width: ${e.screenLGMax}px)`]:{[t]:{[`.${n}-col-lg-24${r}-label`]:ce(e)}}}},_e=Pe("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=Qe(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:r});return[Fr(n),Mr(n),Ir(n),_r(n),Nr(n),Tr(n),Lt(n),Ze]}),Be=[];function Se(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}const Lr=e=>{let{help:t,helpStatus:r,errors:n=Be,warnings:o=Be,className:i,fieldId:a,onVisibleChanged:c}=e;const{prefixCls:u}=s.useContext(Fe),d=`${u}-item-explain`,[,m]=_e(u),w=s.useMemo(()=>Ve(u),[u]),N=$e(n),j=$e(o),y=s.useMemo(()=>t!=null?[Se(t,"help",r)]:[].concat(Q(N.map((I,x)=>Se(I,"error","error",x))),Q(j.map((I,x)=>Se(I,"warning","warning",x)))),[t,r,N,j]),S={};return a&&(S.id=`${a}_help`),s.createElement(dt,{motionDeadline:w.motionDeadline,motionName:`${u}-show-help`,visible:!!y.length,onVisibleChanged:c},I=>{const{className:x,style:l}=I;return s.createElement("div",Object.assign({},S,{className:U(d,x,i,m),style:l,role:"alert"}),s.createElement(mt,Object.assign({keys:y},Ve(u),{motionName:`${u}-show-help-item`,component:!1}),O=>{const{key:v,error:$,errorStatus:C,className:p,style:g}=O;return s.createElement("div",{key:v,className:U(p,{[`${d}-${C}`]:C}),style:g},$)}))})},st=Lr,Wr=["parentNode"],Dr="form_item";function fe(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function it(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:Wr.includes(r)?`${Dr}_${r}`:r}function Xe(e){return fe(e).join("_")}function lt(e){const[t]=Wt(),r=s.useRef({}),n=s.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>i=>{const a=Xe(o);i?r.current[a]=i:delete r.current[a]}},scrollToField:function(o){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=fe(o),c=it(a,n.__INTERNAL__.name),u=c?document.getElementById(c):null;u&&dr(u,Object.assign({scrollMode:"if-needed",block:"nearest"},i))},getFieldInstance:o=>{const i=Xe(o);return r.current[i]}}),[e,t]);return[n]}var Vr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Hr=(e,t)=>{const r=s.useContext(pt),{getPrefixCls:n,direction:o,form:i}=s.useContext(me),{prefixCls:a,className:c,rootClassName:u,size:d,disabled:m=r,form:w,colon:N,labelAlign:j,labelWrap:y,labelCol:S,wrapperCol:I,hideRequiredMark:x,layout:l="horizontal",scrollToFirstError:O,requiredMark:v,onFinishFailed:$,name:C,style:p}=e,g=Vr(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style"]),f=gt(d),h=s.useContext(ht),A=s.useMemo(()=>v!==void 0?v:i&&i.requiredMark!==void 0?i.requiredMark:!x,[x,v,i]),T=N??(i==null?void 0:i.colon),b=n("form",a),[P,z]=_e(b),G=U(b,`${b}-${l}`,{[`${b}-hide-required-mark`]:A===!1,[`${b}-rtl`]:o==="rtl",[`${b}-${f}`]:f},z,i==null?void 0:i.className,c,u),[F]=lt(w),{__INTERNAL__:M}=F;M.name=C;const q=s.useMemo(()=>({name:C,labelAlign:j,labelCol:S,labelWrap:y,wrapperCol:I,vertical:l==="vertical",colon:T,requiredMark:A,itemRef:M.itemRef,form:F}),[C,j,S,I,l,T,A,F]);s.useImperativeHandle(t,()=>F);const R=(V,H)=>{if(V){let E={block:"nearest"};typeof V=="object"&&(E=V),F.scrollToField(H,E)}},Y=V=>{if($==null||$(V),V.errorFields.length){const H=V.errorFields[0].name;if(O!==void 0){R(O,H);return}i&&i.scrollToFirstError!==void 0&&R(i.scrollToFirstError,H)}};return P(s.createElement(bt,{disabled:m},s.createElement(yt,{size:f},s.createElement(ke,Object.assign({},{validateMessages:h}),s.createElement(ne.Provider,{value:q},s.createElement(Dt,Object.assign({id:C},g,{name:C,onFinishFailed:Y,form:F,style:Object.assign(Object.assign({},i==null?void 0:i.style),p),className:G})))))))},Ar=s.forwardRef(Hr),zr=Ar,at=()=>{const{status:e,errors:t=[],warnings:r=[]}=s.useContext(Me);return{status:e,errors:t,warnings:r}};at.Context=Me;const qr=at;function Gr(e){const[t,r]=s.useState(e),n=s.useRef(null),o=s.useRef([]),i=s.useRef(!1);s.useEffect(()=>(i.current=!1,()=>{i.current=!0,We.cancel(n.current),n.current=null}),[]);function a(c){i.current||(n.current===null&&(o.current=[],n.current=We(()=>{n.current=null,r(u=>{let d=u;return o.current.forEach(m=>{d=m(d)}),d})})),o.current.push(c))}return[t,a]}function Br(){const{itemRef:e}=s.useContext(ne),t=s.useRef({});function r(n,o){const i=o&&typeof o=="object"&&o.ref,a=n.join("_");return(t.current.name!==a||t.current.originRef!==i)&&(t.current.name=a,t.current.originRef=i,t.current.ref=$t(e(n),i)),t.current.ref}return r}const Xr=e=>{const{prefixCls:t,status:r,wrapperCol:n,children:o,errors:i,warnings:a,_internalItemRender:c,extra:u,help:d,fieldId:m,marginBottom:w,onErrorVisibleChanged:N}=e,j=`${t}-item`,y=s.useContext(ne),S=n||y.wrapperCol||{},I=U(`${j}-control`,S.className),x=s.useMemo(()=>Object.assign({},y),[y]);delete x.labelCol,delete x.wrapperCol;const l=s.createElement("div",{className:`${j}-control-input`},s.createElement("div",{className:`${j}-control-input-content`},o)),O=s.useMemo(()=>({prefixCls:t,status:r}),[t,r]),v=w!==null||i.length||a.length?s.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},s.createElement(Fe.Provider,{value:O},s.createElement(st,{fieldId:m,errors:i,warnings:a,help:d,helpStatus:r,className:`${j}-explain-connected`,onVisibleChanged:N})),!!w&&s.createElement("div",{style:{width:0,height:w}})):null,$={};m&&($.id=`${m}_extra`);const C=u?s.createElement("div",Object.assign({},$,{className:`${j}-extra`}),u):null,p=c&&c.mark==="pro_table_render"&&c.render?c.render(e,{input:l,errorList:v,extra:C}):s.createElement(s.Fragment,null,l,v,C);return s.createElement(ne.Provider,{value:x},s.createElement(ot,Object.assign({},S,{className:I}),p))},Kr=Xr;var ct={};Object.defineProperty(ct,"__esModule",{value:!0});var Yr={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"},Qr=ct.default=Yr;function Ur(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){Ur(e,o,r[o])})}return e}function Zr(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function kr(e,t){return t=t??{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Zr(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}var en=function(e,t){return s.createElement(Ie,kr(Jr({},e),{ref:t,icon:Qr}))};const tn=s.forwardRef(en);var rn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function nn(e){return e?typeof e=="object"&&!s.isValidElement(e)?e:{title:e}:null}const on=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:o,labelAlign:i,colon:a,required:c,requiredMark:u,tooltip:d}=e;var m;const[w]=Vt("Form"),{vertical:N,labelAlign:j,labelCol:y,labelWrap:S,colon:I}=s.useContext(ne);if(!r)return null;const x=o||y||{},l=i||j,O=`${t}-item-label`,v=U(O,l==="left"&&`${O}-left`,x.className,{[`${O}-wrap`]:!!S});let $=r;const C=a===!0||I!==!1&&a!==!1;C&&!N&&typeof r=="string"&&r.trim()!==""&&($=r.replace(/[:|：]\s*$/,""));const g=nn(d);if(g){const{icon:h=s.createElement(tn,null)}=g,A=rn(g,["icon"]),T=s.createElement(Ht,Object.assign({},A),s.cloneElement(h,{className:`${t}-item-tooltip`,title:""}));$=s.createElement(s.Fragment,null,$,T)}u==="optional"&&!c&&($=s.createElement(s.Fragment,null,$,s.createElement("span",{className:`${t}-item-optional`,title:""},(w==null?void 0:w.optional)||((m=xt.Form)===null||m===void 0?void 0:m.optional))));const f=U({[`${t}-item-required`]:c,[`${t}-item-required-mark-optional`]:u==="optional",[`${t}-item-no-colon`]:!C});return s.createElement(ot,Object.assign({},x,{className:v}),s.createElement("label",{htmlFor:n,className:f,title:typeof r=="string"?r:""},$))},sn=on;var ln=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const an={success:tr,warning:cr,error:At,validating:wt};function cn(e){const{prefixCls:t,className:r,rootClassName:n,style:o,help:i,errors:a,warnings:c,validateStatus:u,meta:d,hasFeedback:m,hidden:w,children:N,fieldId:j,required:y,isRequired:S,onSubItemMetaChange:I}=e,x=ln(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),l=`${t}-item`,{requiredMark:O}=s.useContext(ne),v=s.useRef(null),$=$e(a),C=$e(c),p=i!=null,g=!!(p||a.length||c.length),f=!!v.current&&Ot(v.current),[h,A]=s.useState(null);vt(()=>{if(g&&v.current){const F=getComputedStyle(v.current);A(parseInt(F.marginBottom,10))}},[g,f]);const T=F=>{F||A(null)},P=function(){let F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,M="";const q=F?$:d.errors,R=F?C:d.warnings;return u!==void 0?M=u:d.validating?M="validating":q.length?M="error":R.length?M="warning":(d.touched||m&&d.validated)&&(M="success"),M}(),z=s.useMemo(()=>{let F;if(m){const M=P&&an[P];F=M?s.createElement("span",{className:U(`${l}-feedback-icon`,`${l}-feedback-icon-${P}`)},s.createElement(M,null)):null}return{status:P,errors:a,warnings:c,hasFeedback:m,feedbackIcon:F,isFormItemInput:!0}},[P,m]),G=U(l,r,n,{[`${l}-with-help`]:p||$.length||C.length,[`${l}-has-feedback`]:P&&m,[`${l}-has-success`]:P==="success",[`${l}-has-warning`]:P==="warning",[`${l}-has-error`]:P==="error",[`${l}-is-validating`]:P==="validating",[`${l}-hidden`]:w});return s.createElement("div",{className:G,style:o,ref:v},s.createElement(jr,Object.assign({className:`${l}-row`},Ct(x,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),s.createElement(sn,Object.assign({htmlFor:j},e,{requiredMark:O,required:y??S,prefixCls:t})),s.createElement(Kr,Object.assign({},e,d,{errors:$,warnings:C,prefixCls:t,status:P,help:i,marginBottom:h,onErrorVisibleChanged:T}),s.createElement(et.Provider,{value:I},s.createElement(Me.Provider,{value:z},N)))),!!h&&s.createElement("div",{className:`${l}-margin-offset`,style:{marginBottom:-h}}))}function un(e){if(typeof e=="function")return e;const t=St(e);return t.length<=1?t[0]:t}const fn="__SPLIT__",dn=s.memo(e=>{let{children:t}=e;return t},(e,t)=>e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function mn(e){return e!=null}function Ke(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function pn(e){const{name:t,noStyle:r,className:n,dependencies:o,prefixCls:i,shouldUpdate:a,rules:c,children:u,required:d,label:m,messageVariables:w,trigger:N="onChange",validateTrigger:j,hidden:y,help:S}=e,{getPrefixCls:I}=s.useContext(me),{name:x}=s.useContext(ne),l=un(u),O=typeof l=="function",v=s.useContext(et),{validateTrigger:$}=s.useContext(zt),C=j!==void 0?j:$,p=mn(t),g=I("form",i),[f,h]=_e(g),A=s.useContext(qt),T=s.useRef(),[b,P]=Gr({}),[z,G]=jt(()=>Ke()),F=E=>{const L=A==null?void 0:A.getKey(E.name);if(G(E.destroy?Ke():E,!0),r&&S!==!1&&v){let _=E.name;if(E.destroy)_=T.current||_;else if(L!==void 0){const[B,K]=L;_=[B].concat(Q(K)),T.current=_}v(E,_)}},M=(E,L)=>{P(_=>{const B=Object.assign({},_),ee=[].concat(Q(E.name.slice(0,-1)),Q(L)).join(fn);return E.destroy?delete B[ee]:B[ee]=E,B})},[q,R]=s.useMemo(()=>{const E=Q(z.errors),L=Q(z.warnings);return Object.values(b).forEach(_=>{E.push.apply(E,Q(_.errors||[])),L.push.apply(L,Q(_.warnings||[]))}),[E,L]},[b,z.errors,z.warnings]),Y=Br();function V(E,L,_){return r&&!y?E:s.createElement(cn,Object.assign({key:"row"},e,{className:U(n,h),prefixCls:g,fieldId:L,isRequired:_,errors:q,warnings:R,meta:z,onSubItemMetaChange:M}),E)}if(!p&&!O&&!o)return f(V(l));let H={};return typeof m=="string"?H.label=m:t&&(H.label=String(t)),w&&(H=Object.assign(Object.assign({},H),w)),f(s.createElement(Gt,Object.assign({},e,{messageVariables:H,trigger:N,validateTrigger:C,onMetaChange:F}),(E,L,_)=>{const B=fe(t).length&&L?L.name:[],K=it(B,x),ee=d!==void 0?d:!!(c&&c.some(D=>{if(D&&typeof D=="object"&&D.required&&!D.warningOnly)return!0;if(typeof D=="function"){const pe=D(_);return pe&&pe.required&&!pe.warningOnly}return!1})),oe=Object.assign({},E);let te=null;if(Array.isArray(l)&&p)te=l;else if(!(O&&(!(a||o)||p))){if(!(o&&!O&&!p))if(Et(l)){const D=Object.assign(Object.assign({},l.props),oe);if(D.id||(D.id=K),S||q.length>0||R.length>0||e.extra){const se=[];(S||q.length>0)&&se.push(`${K}_help`),e.extra&&se.push(`${K}_extra`),D["aria-describedby"]=se.join(" ")}q.length>0&&(D["aria-invalid"]="true"),ee&&(D["aria-required"]="true"),It(l)&&(D.ref=Y(B,l)),new Set([].concat(Q(fe(N)),Q(fe(C)))).forEach(se=>{D[se]=function(){for(var Ne,Re,xe,Te,Oe,Le=arguments.length,ve=new Array(Le),ge=0;ge<Le;ge++)ve[ge]=arguments[ge];(xe=oe[se])===null||xe===void 0||(Ne=xe).call.apply(Ne,[oe].concat(ve)),(Oe=(Te=l.props)[se])===null||Oe===void 0||(Re=Oe).call.apply(Re,[Te].concat(ve))}});const ft=[D["aria-required"],D["aria-invalid"],D["aria-describedby"]];te=s.createElement(dn,{value:oe[e.valuePropName||"value"],update:l,childProps:ft},Pt(l,D))}else O&&(a||o)&&!p?te=l(_):te=l}return V(te,K,ee)}))}const ut=pn;ut.useStatus=qr;const gn=ut;var hn=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const bn=e=>{var{prefixCls:t,children:r}=e,n=hn(e,["prefixCls","children"]);const{getPrefixCls:o}=s.useContext(me),i=o("form",t),a=s.useMemo(()=>({prefixCls:i,status:"error"}),[i]);return s.createElement(Bt,Object.assign({},n),(c,u,d)=>s.createElement(Fe.Provider,{value:a},r(c.map(m=>Object.assign(Object.assign({},m),{fieldKey:m.key})),u,{errors:d.errors,warnings:d.warnings})))},yn=bn;function $n(){const{form:e}=s.useContext(ne);return e}const k=zr;k.Item=gn;k.List=yn;k.ErrorList=st;k.useForm=lt;k.useFormInstance=$n;k.useWatch=Xt;k.Provider=ke;k.create=()=>{};const Sn=k;var re,J,X,Z,ue,be,de,Ee,Ye,xn=(Ye=class extends Ft{constructor(t,r){super();ie(this,ue);ie(this,de);ie(this,re,void 0);ie(this,J,void 0);ie(this,X,void 0);ie(this,Z,void 0);le(this,J,void 0),le(this,re,t),this.setOptions(r),this.bindMethods(),ae(this,ue,be).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=W(this,re).defaultMutationOptions(t),Mt(r,this.options)||W(this,re).getMutationCache().notify({type:"observerOptionsUpdated",mutation:W(this,X),observer:this}),(n=W(this,X))==null||n.setOptions(this.options),r!=null&&r.mutationKey&&this.options.mutationKey&&De(r.mutationKey)!==De(this.options.mutationKey)&&this.reset()}onUnsubscribe(){var t;this.hasListeners()||(t=W(this,X))==null||t.removeObserver(this)}onMutationUpdate(t){ae(this,ue,be).call(this),ae(this,de,Ee).call(this,t)}getCurrentResult(){return W(this,J)}reset(){var t;(t=W(this,X))==null||t.removeObserver(this),le(this,X,void 0),ae(this,ue,be).call(this),ae(this,de,Ee).call(this)}mutate(t,r){var n;return le(this,Z,r),(n=W(this,X))==null||n.removeObserver(this),le(this,X,W(this,re).getMutationCache().build(W(this,re),this.options)),W(this,X).addObserver(this),W(this,X).execute(t)}},re=new WeakMap,J=new WeakMap,X=new WeakMap,Z=new WeakMap,ue=new WeakSet,be=function(){var r;const t=((r=W(this,X))==null?void 0:r.state)??_t();le(this,J,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},de=new WeakSet,Ee=function(t){Je.batch(()=>{var r,n,o,i,a,c,u,d;if(W(this,Z)&&this.hasListeners()){const m=W(this,J).variables,w=W(this,J).context;(t==null?void 0:t.type)==="success"?((n=(r=W(this,Z)).onSuccess)==null||n.call(r,t.data,m,w),(i=(o=W(this,Z)).onSettled)==null||i.call(o,t.data,null,m,w)):(t==null?void 0:t.type)==="error"&&((c=(a=W(this,Z)).onError)==null||c.call(a,t.error,m,w),(d=(u=W(this,Z)).onSettled)==null||d.call(u,void 0,t.error,m,w))}this.listeners.forEach(m=>{m(W(this,J))})})},Ye);function jn(e,t){const r=Nt(t),[n]=s.useState(()=>new xn(r,e));s.useEffect(()=>{n.setOptions(e)},[n,e]);const o=s.useSyncExternalStore(s.useCallback(a=>n.subscribe(Je.batchCalls(a)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),i=s.useCallback((a,c)=>{n.mutate(a,c).catch(On)},[n]);if(o.error&&Kt(n.options.throwOnError,[o.error]))throw o.error;return{...o,mutate:i,mutateAsync:o.mutate}}function On(){}export{ot as C,Sn as F,jr as R,jn as u};
