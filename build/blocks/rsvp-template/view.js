import*as t from"@wordpress/interactivity";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const r=(n={getContext:()=>t.getContext,getElement:()=>t.getElement,store:()=>t.store},o={},e.d(o,n),o);var n,o;function s(t){if("object"==typeof GatherPress)return t.split(".").reduce(((t,e)=>t&&t[e]),GatherPress)}const{state:a}=(0,r.store)("gatherpress",{callbacks:{renderBlocks(){const t=(0,r.getContext)();if(!a.rsvpResponseStatus||t.postId!==a.activePostId)return;const e=(0,r.getElement)();fetch(s("urls.eventApiUrl")+"/rsvp-status-html",{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":s("misc.nonce")},body:JSON.stringify({status:a.rsvpResponseStatus,post_id:t.postId,block_data:e.attributes["data-blocks"]})}).then((t=>t.json())).then((t=>{if(t.success){const r=e.ref.parentElement;Array.from(r.children).forEach((t=>{t!==e.ref&&t.hasAttribute("data-id")&&t.remove()})),e.ref.insertAdjacentHTML("beforebegin",function(t){const{body:e}=document.implementation.createHTMLDocument("");e.innerHTML=t;const r=e.getElementsByTagName("*");let n=r.length;for(;n--;){const t=r[n];if("SCRIPT"===t.tagName)t.parentNode&&t.parentNode.removeChild(t);else{let e=t.attributes.length;for(;e--;){const{name:r}=t.attributes[e];r.startsWith("on")&&t.removeAttribute(r)}}}return e.innerHTML}(t.content))}})).catch((()=>{}))}}});