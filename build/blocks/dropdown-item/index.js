(()=>{"use strict";var e,t={7761:()=>{const e=window.wp.blocks,t=JSON.parse('{"UU":"gatherpress/dropdown-item"}'),r=window.wp.i18n,o=window.wp.blockEditor,s=window.wp.components,a=window.wp.data,i=window.ReactJSXRuntime;(0,e.registerBlockType)(t.UU,{edit:({attributes:t,setAttributes:n,clientId:l,insertBlocksAfter:d})=>{const{text:p,url:c}=t,h=(0,o.useBlockProps)(),v=!c||"#"===c;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.InspectorControls,{children:(0,i.jsx)(s.PanelBody,{title:(0,r.__)("Dropdown Item Settings","gatherpress"),children:(0,i.jsx)("p",{children:(0,r.__)('This item behaves like a button if the link is empty or set to "#".',"gatherpress")})})}),(0,i.jsx)(o.RichText,{...h,tagName:"a",href:v?void 0:c,role:v?"button":void 0,tabIndex:v?0:void 0,"aria-pressed":v?"false":void 0,value:p,onChange:e=>{n({text:e}),(0,a.dispatch)("core/block-editor").updateBlockAttributes(l,{metadata:{name:e||(0,r.__)("Dropdown Item","gatherpress")}})},placeholder:(0,r.__)("Item Text…","gatherpress"),allowedFormats:["core/bold","core/italic"],onSplit:(t,r)=>{const o=(0,e.createBlock)("gatherpress/dropdown-item",{text:r});d([o]),n({text:t})},onKeyDown:t=>{if("Enter"===t.key){t.preventDefault();const r=(0,e.createBlock)("gatherpress/dropdown-item",{text:""});d([r])}},onClick:e=>{v&&e.preventDefault()}})]})},save:({attributes:e})=>{const t=o.useBlockProps.save(),{text:r,url:s,isButton:a,itemHoverTextColor:n,itemHoverBgColor:l}=e;return(0,i.jsx)(o.RichText.Content,{...t,tagName:a?"button":"a",href:a?void 0:s,value:r,"data-hover-text-color":n||void 0,"data-hover-bg-color":l||void 0})}})}},r={};function o(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,o),a.exports}o.m=t,e=[],o.O=(t,r,s,a)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){for(var[r,s,a]=e[p],n=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(n=!1,a<i&&(i=a));if(n){e.splice(p--,1);var d=s();void 0!==d&&(t=d)}}return t}a=a||0;for(var p=e.length;p>0&&e[p-1][2]>a;p--)e[p]=e[p-1];e[p]=[r,s,a]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={3096:0,4e3:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var s,a,[i,n,l]=r,d=0;if(i.some((t=>0!==e[t]))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(l)var p=l(o)}for(t&&t(r);d<i.length;d++)a=i[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(p)},r=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=o.O(void 0,[4e3],(()=>o(7761)));s=o.O(s)})();