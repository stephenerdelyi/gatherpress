(()=>{"use strict";var e,t={5448:()=>{const e=window.wp.blocks,t=window.wp.blockEditor,s=window.wp.components,a=window.wp.i18n,r=window.wp.element,n=window.wp.data,o=[["gatherpress/modal-manager",{},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"}},[["core/button",{text:(0,a.__)("Edit RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["gatherpress/modal",{className:"gatherpress-rsvp-modal",metadata:{name:(0,a.__)("RSVP Modal","gatherpress")}},[["gatherpress/modal-content",{className:"gatherpress-rsvp-modal-content"},[["core/heading",{level:3,content:(0,a.__)("Update your RSVP","gatherpress")}],["core/paragraph",{content:(0,a.__)("To set or change your attending status, simply click the <strong>Not Attending</strong> button below.","gatherpress")}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"}},[["core/button",{text:(0,a.__)("Not Attending","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,a.__)("Close","gatherpress"),tagName:"button",className:"gatherpress--close-modal"}]]]]]]]]]];function l(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}const p=[["gatherpress/modal-manager",{},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"},metadata:{name:(0,a.__)("RSVP Buttons","gatherpress")}},[["core/button",{text:(0,a.__)("RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["gatherpress/modal",{className:"gatherpress--is-rsvp-modal",metadata:{name:(0,a.__)("RSVP Modal","gatherpress")}},[["gatherpress/modal-content",{},[["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,a.__)("<strong>RSVP to this event</strong>","gatherpress")}],["core/paragraph",{content:(0,a.__)("To set or change your attending status, simply click the <strong>Attend</strong> button below.","gatherpress")}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"},style:{spacing:{margin:{bottom:"0"},padding:{bottom:"0"}}}},[["core/button",{text:(0,a.__)("Attend","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,a.__)("Close","gatherpress"),tagName:"button",className:"is-style-outline gatherpress--close-modal"}]]]]]]],["gatherpress/modal",{className:"gatherpress--is-login-modal",metadata:{name:(0,a.__)("Login Modal","gatherpress")}},[["gatherpress/modal-content",{},[["core/paragraph",{style:{spacing:{margin:{top:"0"},padding:{top:"0"}}},content:(0,a.__)("<strong>Login Required</strong>","gatherpress")}],["core/paragraph",{content:(0,a.sprintf)(/* translators: %s: Login URL. */ /* translators: %s: Login URL. */
(0,a.__)('This action requires an account. Please <a href="%s">Login</a> to RSVP to this event.',"gatherpress"),l("urls.loginUrl")),className:"gatherpress--has-login-url"}],["core/paragraph",{content:(0,a.sprintf)(/* translators: %s: Registration URL. */ /* translators: %s: Registration URL. */
(0,a.__)('Don\'t have an account? <a href="%s">Register here</a> to create one.',"gatherpress"),l("urls.registrationUrl")),className:"gatherpress--has-registration-url"}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"},style:{spacing:{margin:{bottom:"0"},padding:{bottom:"0"}}}},[["core/button",{text:(0,a.__)("Close","gatherpress"),tagName:"button",className:"gatherpress--close-modal"}]]]]]]]]]],i=[["gatherpress/modal-manager",{},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"}},[["core/button",{text:(0,a.__)("Edit RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["gatherpress/modal",{className:"gatherpress-rsvp-modal"},[["gatherpress/modal-content",{className:"gatherpress-rsvp-modal-content"},[["core/heading",{level:3,content:(0,a.__)("Update your RSVP","gatherpress")}],["core/paragraph",{content:(0,a.__)("To set or change your attending status, simply click the <strong>Attending</strong> button below.","gatherpress")}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"}},[["core/button",{text:(0,a.__)("Attending","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,a.__)("Close","gatherpress"),tagName:"button",className:"gatherpress--close-modal"}]]]]]]]]]],g={no_status:p,attending:o,waiting_list:[["gatherpress/modal-manager",{},[["core/buttons",{align:"center",layout:{type:"flex",justifyContent:"center"}},[["core/button",{text:(0,a.__)("Edit RSVP","gatherpress"),tagName:"button",className:"gatherpress--open-modal"}]]],["gatherpress/modal",{className:"gatherpress-rsvp-modal"},[["gatherpress/modal-content",{className:"gatherpress-rsvp-modal-content"},[["core/heading",{level:3,content:(0,a.__)("Update your RSVP","gatherpress")}],["core/paragraph",{content:(0,a.__)("To set or change your attending status, simply click the <strong>Not Attending</strong> button below.","gatherpress")}],["core/buttons",{align:"left",layout:{type:"flex",justifyContent:"flex-start"}},[["core/button",{text:(0,a.__)("Attending","gatherpress"),tagName:"button",className:"gatherpress--update-rsvp"}],["core/button",{text:(0,a.__)("Close","gatherpress"),tagName:"button",className:"gatherpress--close-modal"}]]]]]]]]]],not_attending:i},c=window.ReactJSXRuntime;function u(t){return t.map((([t,s,a])=>(0,e.createBlock)(t,s,u(a||[]))))}const h=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gatherpress/rsvp-v2","version":"2.0.0","title":"RSVP V2","category":"gatherpress","icon":"insert","example":{},"description":"Enables members to easily confirm their attendance for an event.","attributes":{"serializedInnerBlocks":{"type":"string","default":"[]"},"selectedStatus":{"type":"string","default":"no_status"}},"supports":{"html":false,"interactivity":true},"textdomain":"gatherpress","editorScript":"file:./index.js","style":"file:./style-index.css","viewScriptModule":"file:./view.js"}');(0,e.registerBlockType)(h,{edit:({attributes:o,setAttributes:l,clientId:p})=>{const{serializedInnerBlocks:i="{}",selectedStatus:h}=o,d=(0,t.useBlockProps)(),{replaceInnerBlocks:m}=(0,n.useDispatch)(t.store),_=(0,n.useSelect)((e=>e(t.store).getBlocks(p)),[p]),b=(0,r.useCallback)(((t,s,a)=>{const r=JSON.parse(i||"{}"),n=(0,e.serialize)(a),o={...r,[t]:n};delete o[s],l({serializedInnerBlocks:JSON.stringify(o)})}),[i,l]),f=(0,r.useCallback)((t=>{const s=JSON.parse(i||"{}")[t];s&&s.length>0&&m(p,(0,e.parse)(s,{}))}),[p,m,i]);return(0,r.useEffect)((()=>{(()=>{const t=JSON.parse(i||"{}"),s=Object.keys(g).reduce(((s,a)=>{if(t[a])return s[a]=t[a],s;if(a!==h){const t=u(g[a]);s[a]=(0,e.serialize)(t)}return s}),{...t});l({serializedInnerBlocks:JSON.stringify(s)})})()}),[i,l,h]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.InspectorControls,{children:(0,c.jsx)(s.PanelBody,{children:(0,c.jsx)(s.SelectControl,{label:(0,a.__)("RSVP Status","gatherpress"),value:h,options:[{label:(0,a.__)("No Status (User has not responded)","gatherpress"),value:"no_status"},{label:(0,a.__)("Attending (User is confirmed)","gatherpress"),value:"attending"},{label:(0,a.__)("Waiting List (Pending confirmation)","gatherpress"),value:"waiting_list"},{label:(0,a.__)("Not Attending (User declined)","gatherpress"),value:"not_attending"}],onChange:e=>{f(e),l({selectedStatus:e}),b(h,e,_)}})})}),(0,c.jsx)("div",{...d,children:(0,c.jsx)(t.InnerBlocks,{template:g[h]})})]})},save:()=>(0,c.jsx)("div",{...t.useBlockProps.save(),children:(0,c.jsx)(t.InnerBlocks.Content,{})})})}},s={};function a(e){var r=s[e];if(void 0!==r)return r.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,s,r,n)=>{if(!s){var o=1/0;for(g=0;g<e.length;g++){s=e[g][0],r=e[g][1],n=e[g][2];for(var l=!0,p=0;p<s.length;p++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](s[p])))?s.splice(p--,1):(l=!1,n<o&&(o=n));if(l){e.splice(g--,1);var i=r();void 0!==i&&(t=i)}}return t}n=n||0;for(var g=e.length;g>0&&e[g-1][2]>n;g--)e[g]=e[g-1];e[g]=[s,r,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={345:0,525:0};a.O.j=t=>0===e[t];var t=(t,s)=>{var r,n,o=s[0],l=s[1],p=s[2],i=0;if(o.some((t=>0!==e[t]))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(p)var g=p(a)}for(t&&t(s);i<o.length;i++)n=o[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(g)},s=self.webpackChunkgatherpress=self.webpackChunkgatherpress||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))})();var r=a.O(void 0,[525],(()=>a(5448)));r=a.O(r)})();