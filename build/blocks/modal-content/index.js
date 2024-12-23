(()=>{"use strict";var e,t={3774:()=>{const e=window.wp.blocks,t=window.wp.blockEditor,r=window.wp.components,s=window.ReactJSXRuntime,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gatherpress/modal-content","version":"1.0.0","title":"Modal Content","parent":["gatherpress/modal"],"category":"gatherpress","icon":"external","example":{},"description":"Enables members to easily confirm their attendance for an event.","attributes":{"style":{"type":"object","default":{"spacing":{"padding":"20px"},"dimensions":{"maxWidth":"400px"}}},"backgroundColor":{"type":"string","default":"white"},"textColor":{"type":"string","default":"contrast"}},"supports":{"html":false,"color":{"gradients":true,"__experimentalDefaultControls":{"background":true,"text":true}},"dimensions":{"width":true},"spacing":{"padding":true},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}}},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css"}');(0,e.registerBlockType)(n,{edit:({attributes:e,setAttributes:n})=>{const{style:o={}}=e,{dimensions:i={},color:a={}}=o,l=parseInt(i.maxWidth||"400px",10),d=(0,t.useBlockProps)({style:{...a,...i}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.InspectorControls,{children:(0,s.jsx)(r.PanelBody,{title:"Width Settings",children:(0,s.jsx)(r.RangeControl,{label:"Max Width",value:l,onChange:e=>n({style:{...o,dimensions:{...i,maxWidth:`${e}px`}}}),min:300,max:900})})}),(0,s.jsx)("div",{...d,children:(0,s.jsx)(t.InnerBlocks,{template:[["core/paragraph",{}]]})})]})},save:({attributes:e})=>{const{style:r}=e,n=t.useBlockProps.save({style:r?.dimensions});return(0,s.jsx)("div",{...n,children:(0,s.jsx)(t.InnerBlocks.Content,{})})}})}},r={};function s(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,s),o.exports}s.m=t,e=[],s.O=(t,r,n,o)=>{if(!r){var i=1/0;for(p=0;p<e.length;p++){r=e[p][0],n=e[p][1],o=e[p][2];for(var a=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(a=!1,o<i&&(i=o));if(a){e.splice(p--,1);var d=n();void 0!==d&&(t=d)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[r,n,o]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={422:0,82:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,i=r[0],a=r[1],l=r[2],d=0;if(i.some((t=>0!==e[t]))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(l)var p=l(s)}for(t&&t(r);d<i.length;d++)o=i[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(p)},r=self.webpackChunkgatherpress=self.webpackChunkgatherpress||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=s.O(void 0,[82],(()=>s(3774)));n=s.O(n)})();