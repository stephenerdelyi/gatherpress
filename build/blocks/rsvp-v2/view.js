import*as t from"@wordpress/interactivity";var e={d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);const s=(n={getContext:()=>t.getContext,getElement:()=>t.getElement,store:()=>t.store},r={},e.d(r,n),r);var n,r;function o(t){if("object"==typeof GatherPress)return t.split(".").reduce(((t,e)=>t&&t[e]),GatherPress)}const{state:a,actions:i}=(0,s.store)("gatherpress/rsvp",{actions:{rsvpOpenModal(){const t=document.querySelector(".gatherpress-rsvp-modal");t&&t.classList.add("gatherpress--is-visible")},rsvpCloseModal(){const t=document.querySelector(".gatherpress-rsvp-modal");t&&t.classList.remove("gatherpress--is-visible")},rsvpChangeStatus(){var t,e;let s=null!==(t=null!==(e=a.rsvpStatus)&&void 0!==e?e:o("eventDetails.currentUser.status"))&&void 0!==t?t:"no_status";s="not_attending"===s||"no_status"===s?"attending":"not_attending",fetch(o("urls.eventApiUrl")+"/rsvp",{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":o("misc.nonce")},body:JSON.stringify({post_id:o("eventDetails.postId"),status:s,guests:0,anonymous:0})}).then((t=>t.json())).then((t=>{t.success&&(a.activePostId=t.event_id,a.rsvpResponseStatus=t.status,a.rsvpStatus=t.status)})).catch((()=>{}))}},callbacks:{renderRsvpBlock(){var t,n;const r=(0,s.getElement)(),c=JSON.parse(r.ref.getAttribute("data-serialized-inner-blocks")),l=o("eventDetails.currentUser.status");if(!c||!c[null!==(t=a.rsvpStatus)&&void 0!==t?t:l])return;const p=(0,s.getContext)();fetch(o("urls.eventApiUrl")+"/rsvp-render",{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":o("misc.nonce")},body:JSON.stringify({status:a.rsvpStatus,post_id:p.postId,block_data:c[null!==(n=a.rsvpStatus)&&void 0!==n?n:l]})}).then((t=>t.json())).then((t=>{t.success&&(r.ref.innerHTML=e.g.wp.dom.safeHTML(t.content),r.ref.querySelectorAll("[data-wp-interactive]").forEach((t=>{const e=t.getAttribute("data-wp-on--click");if(e&&e.startsWith("actions.")){const s=e.replace("actions.",""),n=i[s];"function"==typeof n&&t.addEventListener("click",(()=>n()))}})))})).catch((()=>{}))}}});