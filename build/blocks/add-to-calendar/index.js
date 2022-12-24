(()=>{"use strict";var e,r={2016:()=>{const e=window.wp.blocks,r=window.wp.element,t=window.wp.i18n,a=window.wp.blockEditor,n=window.wp.components,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"gatherpress/add-to-calendar","version":"0.1.1","title":"Add to Calendar","category":"gatherpress","icon":"calendar","example":{},"description":"An applet block to add the event to your preferred calendar.","attributes":{"blockId":{"type":"string"}},"supports":{"html":false},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScript":"file:./add-to-calendar.js","render":"file:./render.php"}');(0,e.registerBlockType)(o,{edit:()=>{const e=(0,a.useBlockProps)();return(0,r.createElement)("div",e,(0,r.createElement)(n.Flex,{justify:"normal",align:"flex-start",gap:"4"},(0,r.createElement)(n.FlexItem,{display:"flex",className:"gp-event-date__icon"},(0,r.createElement)(n.Icon,{icon:"calendar"})),(0,r.createElement)(n.FlexItem,null,(0,r.createElement)("a",{href:"#"},(0,t.__)("Add to calendar","gatherpress")))))},save:()=>null})}},t={};function a(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,a),o.exports}a.m=r,e=[],a.O=(r,t,n,o)=>{if(!t){var l=1/0;for(c=0;c<e.length;c++){for(var[t,n,o]=e[c],s=!0,i=0;i<t.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](t[i])))?t.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(c--,1);var p=n();void 0!==p&&(r=p)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,n,o]},a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={981:0,443:0};a.O.j=r=>0===e[r];var r=(r,t)=>{var n,o,[l,s,i]=t,p=0;if(l.some((r=>0!==e[r]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var c=i(a)}for(r&&r(t);p<l.length;p++)o=l[p],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},t=globalThis.webpackChunkgatherpress=globalThis.webpackChunkgatherpress||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=a.O(void 0,[443],(()=>a(2016)));n=a.O(n)})();