(()=>{"use strict";var e,s={2630:()=>{const e=window.wp.blocks,s=window.wp.blockEditor,t=window.wp.data;window.wp.i18n;const o=window.wp.element,n=[["core/group",{style:{border:{radius:"10px",width:"1px"},spacing:{padding:{top:"var:preset|spacing|20",bottom:"var:preset|spacing|20"}}}},[["core/avatar",{isLink:!0,align:"center"}],["core/comment-author-name",{textAlign:"center",style:{spacing:{margin:{top:"0",bottom:"0"}}},fontSize:"medium"}]]]],r=window.ReactJSXRuntime,c=({response:e,blocks:t,blockProps:o,activeRsvpId:c,setActiveRsvpId:p,firstRsvpId:l})=>{const{children:d,...a}=(0,s.useInnerBlocksProps)({},{template:n});return(0,r.jsxs)("div",{...a,children:[e.commentId===(c||l)?d:null,(0,r.jsx)(i,{blocks:t,commentId:e.commentId,setActiveRsvpId:p,isHidden:e.commentId===(c||l)})]})},i=(0,o.memo)((({blocks:e,commentId:t,setActiveRsvpId:o,isHidden:n})=>{const c=(0,s.__experimentalUseBlockPreview)({blocks:e}),i=()=>{o(t)},p={display:n?"none":void 0};return(0,r.jsx)("div",{...c,tabIndex:0,role:"button",style:p,onClick:i,onKeyPress:i})})),p=({responses:e,blocks:t,blockProps:o,activeRsvpId:n,setActiveRsvpId:i,firstRsvpId:p})=>(0,r.jsx)(r.Fragment,{children:e&&e.map((({commentId:e,...l},d)=>{console.log(e);const a=parseInt(e,10);return(0,r.jsx)(s.BlockContextProvider,{value:{commentId:a<0?null:a},children:(0,r.jsx)(c,{response:{commentId:a,...l},blockProps:o,blocks:t,activeRsvpId:n,setActiveRsvpId:i,firstRsvpId:p})},a||d)}))});(0,e.registerBlockType)("gatherpress/rsvp-template",{edit:({clientId:e,context:{postId:n}})=>{var c;const i=(0,s.useBlockProps)(),l=function(){if("object"==typeof GatherPress)return"eventDetails.responses".split(".").reduce(((e,s)=>e&&e[s]),GatherPress)}(),[d,a]=(0,o.useState)(null!==(c=parseInt(l.attending.responses[0]?.commentId,10))&&void 0!==c?c:null),{blocks:v}=(0,t.useSelect)((t=>{const{getBlocks:o}=t(s.store);return{blocks:o(e)}}),[e]);let m=[{commentId:-1}];return l.attending.responses.length&&(m=l.attending.responses),(0,r.jsx)(p,{responses:m,blockProps:i,blocks:v,activeRsvpId:d,setActiveRsvpId:a,firstRsvpId:m[0]?.commentId})},save:()=>(0,r.jsx)(s.InnerBlocks.Content,{})})}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var r=t[e]={exports:{}};return s[e](r,r.exports,o),r.exports}o.m=s,e=[],o.O=(s,t,n,r)=>{if(!t){var c=1/0;for(d=0;d<e.length;d++){t=e[d][0],n=e[d][1],r=e[d][2];for(var i=!0,p=0;p<t.length;p++)(!1&r||c>=r)&&Object.keys(o.O).every((e=>o.O[e](t[p])))?t.splice(p--,1):(i=!1,r<c&&(c=r));if(i){e.splice(d--,1);var l=n();void 0!==l&&(s=l)}}return s}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,n,r]},o.o=(e,s)=>Object.prototype.hasOwnProperty.call(e,s),(()=>{var e={687:0,967:0};o.O.j=s=>0===e[s];var s=(s,t)=>{var n,r,c=t[0],i=t[1],p=t[2],l=0;if(c.some((s=>0!==e[s]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(p)var d=p(o)}for(s&&s(t);l<c.length;l++)r=c[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},t=self.webpackChunkgatherpress=self.webpackChunkgatherpress||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})();var n=o.O(void 0,[967],(()=>o(2630)));n=o.O(n)})();