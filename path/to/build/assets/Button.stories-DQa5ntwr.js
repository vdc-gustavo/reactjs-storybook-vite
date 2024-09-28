import{r as b}from"./index-DJO9vBfz.js";var x={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=b,E=Symbol.for("react.element"),O=Symbol.for("react.fragment"),P=Object.prototype.hasOwnProperty,R=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function g(t,r,i){var e,n={},c=null,p=null;i!==void 0&&(c=""+i),r.key!==void 0&&(c=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)P.call(r,e)&&!j.hasOwnProperty(e)&&(n[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)n[e]===void 0&&(n[e]=r[e]);return{$$typeof:E,type:t,key:c,ref:p,props:n,_owner:R.current}}a.Fragment=O;a.jsx=g;a.jsxs=g;x.exports=a;var m=x.exports;const S=()=>m.jsx(m.Fragment,{children:m.jsx("button",{children:"Clique aqui!"})}),B=S;S.__docgenInfo={description:"",methods:[],displayName:"Button"};const k={component:B},o={name:"Primary",args:{label:"Button"}},s={args:{...o.args,label:"Secondary"}};var u,l,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    label: "Button"
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var _,y,f;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    label: "Secondary"
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const w=["Primary","Secondary"];export{o as Primary,s as Secondary,w as __namedExportsOrder,k as default};
