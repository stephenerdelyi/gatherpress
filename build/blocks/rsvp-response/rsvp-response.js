(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const t=window.React,s=window.wp.domReady;var n=e.n(s);const a=window.wp.element,r=window.wp.i18n,i=(e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t)),addEventListener(e,(e=>{n(e.detail)}),!1)}};function l(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}window.wp.data;const o=({item:e,activeItem:s=!1,count:n,onTitleClick:r,defaultLimit:i})=>{const{title:o,value:p}=e,c=!(0===n&&"attending"!==p),m=s?"span":"a",v=l("eventDetails.postId"),d=n>i;return(0,a.useEffect)((()=>{s&&((e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t));const a=new CustomEvent(e,{detail:n});dispatchEvent(a)}})({setRsvpSeeAllLink:d},v)})),c?(0,t.createElement)("div",{className:"gp-rsvp-response__navigation-item"},(0,t.createElement)(m,{className:"gp-rsvp-response__anchor","data-item":p,"data-toggle":"tab",href:"#",role:"tab","aria-controls":`#gp-rsvp-${p}`,onClick:e=>r(e,p)},o),(0,t.createElement)("span",{className:"gp-rsvp-response__count"},"(",n,")")):""},p=({items:s,activeValue:n,onTitleClick:r,defaultLimit:p})=>{var c;const m={all:0,attending:0,not_attending:0,waiting_list:0},v=null!==(c=l("eventDetails.responses"))&&void 0!==c?c:{};for(const[e,t]of Object.entries(v))m[e]=t.count;const[d,u]=(0,a.useState)(m),[g,_]=(0,a.useState)(!1),[f,E]=(0,a.useState)(!0),h=f?"span":"a";i({setRsvpCount:u},l("eventDetails.postId"));let w=0;const b=s.map(((e,s)=>{const a=e.value===n;return a&&(w=s),(0,t.createElement)(o,{key:s,item:e,count:d[e.value],activeItem:a,onTitleClick:r,defaultLimit:p})}));return(0,a.useEffect)((()=>{e.g.document.addEventListener("click",(({target:e})=>{e.closest(".gp-rsvp-response__navigation-active")||_(!1)})),e.g.document.addEventListener("keydown",(({key:e})=>{"Escape"===e&&_(!1)}))})),(0,a.useEffect)((()=>{0===d.not_attending&&0===d.waiting_list?E(!0):E(!1)}),[d]),(0,t.createElement)("div",{className:"gp-rsvp-response__navigation-wrapper"},(0,t.createElement)("div",null,(0,t.createElement)(h,{href:"#",className:"gp-rsvp-response__navigation-active",onClick:e=>(e=>{e.preventDefault(),_(!g)})(e)},s[w].title)," ",(0,t.createElement)("span",null,"(",d[n],")")),!f&&g&&(0,t.createElement)("nav",{className:"gp-rsvp-response__navigation"},b))},c=({items:e,activeValue:s,onTitleClick:n,rsvpLimit:o,setRsvpLimit:c,defaultLimit:m})=>{let v;v=!1===o?(0,r.__)("See fewer","gatherpress"):(0,r.__)("See all","gatherpress");let d=!1;const u=l("eventDetails.responses");var g;u&&u[s]&&(d=(null!==(g=l("eventDetails.responses")[s].count)&&void 0!==g?g:0)>m);const[_,f]=(0,a.useState)(d);return i({setRsvpSeeAllLink:f},l("eventDetails.postId")),(0,t.createElement)("div",{className:"gp-rsvp-response__header"},(0,t.createElement)("div",{className:"dashicons dashicons-groups"}),(0,t.createElement)(p,{items:e,activeValue:s,onTitleClick:n,defaultLimit:m}),_&&(0,t.createElement)("div",{className:"gp-rsvp-response__see-all"},(0,t.createElement)("a",{href:"#",onClick:e=>(e=>{e.preventDefault(),c(!1===o&&m)})(e)},v)))},m=({value:e,limit:s,responses:n=[]})=>{let a="";return"object"==typeof n&&void 0!==n[e]&&(n=[...n[e].responses],s&&(n=n.splice(0,s)),a=n.map(((e,s)=>{const{profile:n,name:a,photo:i,role:l}=e,{guests:o}=e;return(0,t.createElement)("div",{key:s,className:"gp-rsvp-response__item"},(0,t.createElement)("figure",{className:"gp-rsvp-response__member-avatar"},""!==n?(0,t.createElement)("a",{href:n},(0,t.createElement)("img",{alt:a,title:a,src:i})):(0,t.createElement)("img",{alt:a,title:a,src:i})),(0,t.createElement)("div",{className:"gp-rsvp-response__member-info"},(0,t.createElement)("div",{className:"gp-rsvp-response__member-name"},""!==n?(0,t.createElement)("a",{href:n,title:a},a):(0,t.createElement)("span",null,a)),(0,t.createElement)("div",{className:"gp-rsvp-response__member-role"},l),0!==o&&(0,t.createElement)("small",{className:"gp-rsvp-response__guests"},(0,r.sprintf)(/* translators: %d: Number of guests. */
(0,r._n)("+%d guest","+%d guests",o,"gatherpress"),o))))}))),(0,t.createElement)(t.Fragment,null,"attending"===e&&0===a.length&&(0,t.createElement)("div",{className:"gp-rsvp-response__no-responses"},!1===l("eventDetails.hasEventPast")?(0,r.__)("No one is attending this event yet.","gatherpress"):(0,r.__)("No one went to this event.","gatherpress")),a)},v=({items:e,activeValue:s,limit:n=!1})=>{const r=l("eventDetails.postId"),[o,p]=(0,a.useState)(l("eventDetails.responses"));i({setRsvpResponse:p},r);const c=e.map(((e,a)=>{const{value:r}=e;return r===s?(0,t.createElement)("div",{key:a,className:"gp-rsvp-response__items",id:`gp-rsvp-${r}`,role:"tabpanel","aria-labelledby":`gp-rsvp-${r}-tab`},(0,t.createElement)(m,{value:r,limit:n,responses:o})):""}));return(0,t.createElement)("div",{className:"gp-rsvp-response__content"},c)},d=({defaultStatus:e="attending"})=>{const s=l("eventDetails.hasEventPast"),n=[{title:!1===s?(0,r._x)("Attending","Responded Status","gatherpress"):(0,r._x)("Went","Responded Status","gatherpress"),value:"attending"},{title:!1===s?(0,r._x)("Waiting List","Responded Status","gatherpress"):(0,r._x)("Wait Listed","Responded Status","gatherpress"),value:"waiting_list"},{title:!1===s?(0,r._x)("Not Attending","Responded Status","gatherpress"):(0,r._x)("Didn't Go","Responded Status","gatherpress"),value:"not_attending"}],[o,p]=(0,a.useState)(e),[m,d]=(0,a.useState)(8);return i({setRsvpStatus:p},l("eventDetails.postId")),n.some((e=>e.value===o))||p(e),(0,t.createElement)("div",{className:"gp-rsvp-response"},(0,t.createElement)(c,{items:n,activeValue:o,onTitleClick:(e,t)=>{e.preventDefault(),p(t)},rsvpLimit:m,setRsvpLimit:d,defaultLimit:8}),(0,t.createElement)(v,{items:n,activeValue:o,limit:m}))};n()((()=>{const e=document.querySelectorAll('[data-gp_block_name="rsvp-response"]');for(let s=0;s<e.length;s++)(0,a.createRoot)(e[s]).render((0,t.createElement)(d,null))}))})();