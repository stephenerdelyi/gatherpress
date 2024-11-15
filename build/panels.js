(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.i18n,s=window.wp.domReady;var n=e.n(s);const r=window.wp.data,a=window.wp.components,i=window.wp.plugins,o=window.wp.editor,l=window.moment;var c=e.n(l);const u=window.wp.element;function d(){(0,r.dispatch)("core/editor")?.editPost({meta:{_non_existing_meta:!0}})}function m(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function g(e,t){if("object"!=typeof GatherPress)return;const s=e.split("."),n=s.pop();s.reduce(((e,t)=>{var s;return null!==(s=e[t])&&void 0!==s?s:e[t]={}}),GatherPress)[n]=t}const p=window.wp.date,h=window.ReactJSXRuntime,_="YYYY-MM-DD HH:mm:ss",v=c().tz(S()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(_),x=(c().tz(v,S()).add(2,"hours").format(_),[{label:(0,t.__)("1 hour","gatherpress"),value:1},{label:(0,t.__)("1.5 hours","gatherpress"),value:1.5},{label:(0,t.__)("2 hours","gatherpress"),value:2},{label:(0,t.__)("3 hours","gatherpress"),value:3},{label:(0,t.__)("Set an end time…","gatherpress"),value:!1}]);function j(e){return c().tz(function(){let e=m("eventDetails.dateTime.datetime_start");return e=""!==e?c().tz(e,S()).format(_):v,g("eventDetails.dateTime.datetime_start",e),e}(),S()).add(e,"hours").format(_)}function f(){return w(m("settings.dateFormat"))+" "+w(m("settings.timeFormat"))}function S(e=m("eventDetails.dateTime.timezone")){return c().tz.zone(e)?e:(0,t.__)("GMT","gatherpress")}function b(e=""){const t=/^([+-])(\d{2}):(00|15|30|45)$/,s=e.replace(t,"$1");return s!==e?"UTC"+s+parseInt(e.replace(t,"$2")).toString()+e.replace(t,"$3").replace("00","").replace("15",".25").replace("30",".5").replace("45",".75"):e}function D(e,t=null,s=null){!function(e,t=null){const s=c().tz(m("eventDetails.dateTime.datetime_end"),S()).valueOf(),n=c().tz(e,S()).valueOf();n>=s&&P(c().tz(n,S()).add(2,"hours").format(_),t)}(e,s),g("eventDetails.dateTime.datetime_start",e),"function"==typeof t&&t(e),d()}function P(e,t=null,s=null){!function(e,t=null){const s=c().tz(m("eventDetails.dateTime.datetime_start"),S()).valueOf(),n=c().tz(e,S()).valueOf();n<=s&&D(c().tz(n,S()).subtract(2,"hours").format(_),t)}(e,s),g("eventDetails.dateTime.datetime_end",e),null!==t&&t(e),d()}function w(e){const t={d:"DD",D:"ddd",j:"D",l:"dddd",N:"E",S:"o",w:"e",z:"DDD",W:"W",F:"MMMM",m:"MM",M:"MMM",n:"M",t:"",L:"",o:"YYYY",Y:"YYYY",y:"YY",a:"a",A:"A",B:"",g:"h",G:"H",h:"hh",H:"HH",i:"mm",s:"ss",u:"SSS",e:"zz",I:"",O:"",P:"",T:"",Z:"",c:"",r:"",U:"X"};return String(e).split("").map(((e,s,n)=>{const r=n[s-1];return e in t&&"\\"!==r?t[e]:e})).join("")}function C(){const e=c().tz(m("eventDetails.dateTime.datetime_end"),S());return"gatherpress_event"===(0,r.select)("core/editor")?.getCurrentPostType()&&c().tz(S()).valueOf()>e.valueOf()}function T(){const e="gatherpress_event_past",s=(0,r.dispatch)("core/notices");s.removeNotice(e),C()&&s.createNotice("warning",(0,t.__)("This event has already passed.","gatherpress"),{id:e,isDismissible:!1})}const E=()=>{const{editPost:e,unlockPostSaving:s}=(0,r.useDispatch)("core/editor"),n=(0,r.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_enable_anonymous_rsvp),[]);n&&(i=m("settings.enableAnonymousRsvp"));const[o,l]=(0,u.useState)(i),c=(0,u.useCallback)((t=>{const n={gatherpress_enable_anonymous_rsvp:Number(t)};l(t),e({meta:n}),s()}),[e,s]);return(0,u.useEffect)((()=>{n&&0!==i&&c(i)}),[n,i,c]),(0,h.jsx)(a.CheckboxControl,{label:(0,t.__)("Enable Anonymous RSVP","gatherpress"),checked:o,onChange:e=>{c(e)}})},y=()=>(0,h.jsx)("section",{children:(0,h.jsx)(E,{})}),N=()=>{const{editPost:e,unlockPostSaving:s}=(0,r.useDispatch)("core/editor"),n=(0,r.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_enable_initial_decline),[]);n&&(i=m("settings.enableInitialDecline"));const[o,l]=(0,u.useState)(i),c=(0,u.useCallback)((t=>{const n={gatherpress_enable_initial_decline:Number(t)};l(t),e({meta:n}),s()}),[e,s]);return(0,u.useEffect)((()=>{n&&0!==i&&c(i)}),[n,i,c]),(0,h.jsx)(a.CheckboxControl,{label:(0,t.__)('Enable Immediate "Not Attending" Option for Attendees',"gatherpress"),checked:o,onChange:e=>{c(e)}})},k=()=>(0,h.jsx)("section",{children:(0,h.jsx)(N,{})}),z=()=>{const{dateTimeStart:e,duration:s}=(0,r.useSelect)((e=>({dateTimeStart:e("gatherpress/datetime").getDateTimeStart(),duration:e("gatherpress/datetime").getDuration()})),[]),{setDateTimeStart:n,setDateTimeEnd:i}=(0,r.useDispatch)("gatherpress/datetime"),o=(0,p.getSettings)(),l=/a(?!\\)/i.test(o.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,u.useEffect)((()=>{n(c().tz(e,S()).format(_)),s&&i(j(s)),T()}),[e,s,n,i]),(0,h.jsx)(a.PanelRow,{children:(0,h.jsxs)(a.Flex,{direction:"column",gap:"1",children:[(0,h.jsx)(a.FlexItem,{children:(0,h.jsx)("h3",{style:{marginBottom:0},children:(0,h.jsx)("label",{htmlFor:"gatherpress-datetime-start",children:(0,t.__)("Date & time start","gatherpress")})})}),(0,h.jsx)(a.FlexItem,{children:(0,h.jsx)(a.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:t,onToggle:s})=>(0,h.jsx)(a.Button,{id:"gatherpress-datetime-start",onClick:s,"aria-expanded":t,isLink:!0,children:c().tz(e,S()).format(f())}),renderContent:()=>(0,h.jsx)(a.DateTimePicker,{currentDate:e,onChange:e=>{D(e,n,i)},is12Hour:l})})})]})})},O=()=>{const{dateTimeEnd:e}=(0,r.useSelect)((e=>({dateTimeEnd:e("gatherpress/datetime").getDateTimeEnd()})),[]),{setDateTimeEnd:s,setDateTimeStart:n}=(0,r.useDispatch)("gatherpress/datetime"),i=(0,p.getSettings)(),o=/a(?!\\)/i.test(i.formats.time.toLowerCase().replace(/\\\\/g,"").split("").reverse().join(""));return(0,u.useEffect)((()=>{s(c().tz(e,S()).format(_)),T()})),(0,h.jsx)(a.PanelRow,{children:(0,h.jsxs)(a.Flex,{direction:"column",gap:"1",children:[(0,h.jsx)(a.FlexItem,{children:(0,h.jsx)("h3",{style:{marginBottom:0},children:(0,h.jsx)("label",{htmlFor:"gatherpress-datetime-end",children:(0,t.__)("Date & time end","gatherpress")})})}),(0,h.jsx)(a.FlexItem,{children:(0,h.jsx)(a.Dropdown,{popoverProps:{placement:"bottom-end"},renderToggle:({isOpen:t,onToggle:s})=>(0,h.jsx)(a.Button,{id:"gatherpress-datetime-end",onClick:s,"aria-expanded":t,isLink:!0,children:c().tz(e,S()).format(f())}),renderContent:()=>(0,h.jsx)(a.DateTimePicker,{currentDate:e,onChange:e=>P(e,s,n),is12Hour:o})})})]})})},A=()=>{const{timezone:e}=(0,r.useSelect)((e=>({timezone:e("gatherpress/datetime").getTimezone()})),[]),{setTimezone:s}=(0,r.useDispatch)("gatherpress/datetime"),n=m("misc.timezoneChoices");return(0,u.useEffect)((()=>{s(m("eventDetails.dateTime.timezone"))}),[s]),(0,h.jsx)(a.PanelRow,{children:(0,h.jsx)(a.SelectControl,{label:(0,t.__)("Time Zone","gatherpress"),value:b(e),onChange:e=>{e=function(e=""){const t=/^UTC([+-])(\d+)(.\d+)?$/,s=e.replace(t,"$1");if(s!==e){const n=e.replace(t,"$2").padStart(2,"0");let r=e.replace(t,"$3");return""===r&&(r=":00"),r=r.replace(".25",":15").replace(".5",":30").replace(".75",":45"),s+n+r}return e}(e),s(e),d()},__nexthasnomarginbottom:!0,children:Object.keys(n).map((e=>(0,h.jsx)("optgroup",{label:e,children:Object.keys(n[e]).map((t=>(0,h.jsx)("option",{value:t,children:n[e][t]},t)))},e)))})})},F=()=>{const{duration:e}=(0,r.useSelect)((e=>({duration:e("gatherpress/datetime").getDuration()})),[]),s=(0,r.useDispatch)(),{setDateTimeEnd:n,setDuration:i}=s("gatherpress/datetime");return(0,h.jsx)(a.SelectControl,{label:(0,t.__)("Duration","gatherpress"),value:!!x.some((t=>t.value===e))&&e,options:x,onChange:e=>{(e="false"!==e&&parseFloat(e))&&n(j(e)),i(e)},__nexthasnomarginbottom:!0})},L=()=>{const e=(0,r.useDispatch)("core/editor").editPost;let t=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta")?.gatherpress_datetime));try{t=t?JSON.parse(t):{}}catch(e){t={}}const{dateTimeStart:s,dateTimeEnd:n,duration:a,timezone:i}=(0,r.useSelect)((e=>({dateTimeStart:e("gatherpress/datetime").getDateTimeStart(),dateTimeEnd:e("gatherpress/datetime").getDateTimeEnd(),duration:e("gatherpress/datetime").getDuration(),timezone:e("gatherpress/datetime").getTimezone()})),[]),{setDuration:o}=(0,r.useDispatch)("gatherpress/datetime");return(0,u.useEffect)((()=>{const r=JSON.stringify({...t,dateTimeStart:c().tz(s,i).format(_),dateTimeEnd:c().tz(n,i).format(_),timezone:i});e({meta:{gatherpress_datetime:r}})}),[s,n,i,t,e,o,a]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("section",{children:(0,h.jsx)(z,{})}),(0,h.jsx)("section",{children:a?(0,h.jsx)(F,{}):(0,h.jsx)(O,{})}),(0,h.jsx)("section",{children:(0,h.jsx)(A,{})})]})},M=()=>(0,h.jsx)(L,{}),R=()=>{const{editPost:e,unlockPostSaving:s}=(0,r.useDispatch)("core/editor"),n=(0,r.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_max_guest_limit),[]);n&&(i=m("settings.maxGuestLimit")),!1===i&&(i=0);const[o,l]=(0,u.useState)(i),c=(0,u.useCallback)((t=>{const n={gatherpress_max_guest_limit:Number(t)};l(t),e({meta:n}),s()}),[e,s]);return(0,u.useEffect)((()=>{n&&0!==i&&c(i)}),[n,i,c]),(0,h.jsx)(a.__experimentalNumberControl,{label:(0,t.__)("Maximum Number of Guests","gatherpress"),value:o,min:0,max:5,onChange:e=>{c(e)}})},Y=()=>(0,h.jsx)("section",{children:(0,h.jsx)(R,{})}),I=()=>{const{editPost:e,unlockPostSaving:s}=(0,r.useDispatch)("core/editor"),n=(0,r.useSelect)((e=>e("core/editor").isCleanNewPost()),[]);let i=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_max_attendance_limit),[]);n&&(i=m("settings.maxAttendanceLimit")),!1===i&&(i=0);const[o,l]=(0,u.useState)(i),c=(0,u.useCallback)((t=>{const n={gatherpress_max_attendance_limit:Number(t)};l(t),e({meta:n}),s()}),[e,s]);return(0,u.useEffect)((()=>{n&&0!==i&&c(i)}),[n,i,c]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.__experimentalNumberControl,{label:(0,t.__)("Maximum Attendance Limit","gatherpress"),value:o,min:0,onChange:e=>{c(e)}}),(0,h.jsx)("p",{className:"description",children:(0,t.__)("A value of 0 indicates no limit.","gatherpress")})]})},V=()=>(0,h.jsx)("section",{children:(0,h.jsx)(I,{})}),$=(e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t));const r=new CustomEvent(e,{detail:n});dispatchEvent(r)}},G=(e,t="")=>{for(const[s,n]of Object.entries(e)){let e=s;t&&(e+="_"+String(t)),addEventListener(e,(e=>{n(e.detail)}),!1)}},H=()=>"publish"===(0,r.select)("core/editor").getEditedPostAttribute("status")&&!C()&&(0,h.jsxs)("section",{children:[(0,h.jsx)("h3",{style:{marginBottom:"0.5rem"},children:(0,t.__)("Send an event update","gatherpress")}),(0,h.jsx)(a.Button,{variant:"secondary",onClick:()=>$({setOpen:!0}),children:(0,t.__)("Compose Message","gatherpress")})]}),B=()=>{const{editPost:e,unlockPostSaving:s}=(0,r.useDispatch)("core/editor"),n=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_online_event_link)),[i,o]=(0,u.useState)(n);return G({setOnlineEventLink:o},m("eventDetails.postId")),(0,h.jsx)(a.TextControl,{label:(0,t.__)("Online event link","gatherpress"),value:i,placeholder:(0,t.__)("Add link to online event","gatherpress"),onChange:t=>{(t=>{e({meta:{gatherpress_online_event_link:t}}),o(t),$({setOnlineEventLink:t},m("eventDetails.postId")),s()})(t)}})},J=()=>(0,h.jsx)("section",{children:(0,h.jsx)(B,{})}),W=()=>{const[e,s]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[o,l]=(0,u.useState)(""),[c,d]=(0,u.useState)(""),[m,g]=(0,u.useState)(!1),[p,_]=(0,u.useState)(""),[v,x]=(0,u.useState)(""),[j,f]=(0,u.useState)(""),S=(0,r.useDispatch)("core/editor").editPost,{unlockPostSaving:b}=(0,r.useDispatch)("core/editor"),D=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("_gatherpress_venue"))),P=(0,r.useSelect)((e=>e("core").getEntityRecord("taxonomy","_gatherpress_venue",D))),w=P?.slug.replace(/^_/,""),[C,T]=(0,u.useState)(""),E=D+":"+C,y=(0,r.useSelect)((e=>e("core").getEntityRecords("postType","gatherpress_venue",{per_page:1,slug:C}))),{updateVenueLatitude:N,updateVenueLongitude:k}=(0,r.useDispatch)("gatherpress/venue");(0,u.useEffect)((()=>{var e,n,r,a,o,c;let u={};if(C&&Array.isArray(y)){var m;const e=null!==(m=y[0]?.meta?.gatherpress_venue_information)&&void 0!==m?m:"{}";var g;e&&(u=JSON.parse(e),u.name=null!==(g=y[0]?.title.rendered)&&void 0!==g?g:"")}const p=null!==(e=u?.name)&&void 0!==e?e:(0,t.__)("No venue selected.","gatherpress"),h=null!==(n=u?.fullAddress)&&void 0!==n?n:"",_=null!==(r=u?.phoneNumber)&&void 0!==r?r:"",v=null!==(a=u?.website)&&void 0!==a?a:"",x=null!==(o=u?.latitude)&&void 0!==o?o:"0",j=null!==(c=u?.longitude)&&void 0!==c?c:"0";w&&T(w),f(E?String(E):""),s(p),i(h),l(_),d(v),N(x),k(j),$({setName:p,setFullAddress:h,setPhoneNumber:_,setWebsite:v,setLatitude:x,setLongitude:j,setIsOnlineEventTerm:"online-event"===C})}),[C,y,w,E,N,k]);let z=(0,r.useSelect)((e=>e("core").getEntityRecords("taxonomy","_gatherpress_venue",{per_page:-1,context:"view"})),[]);return z?(z=z.map((e=>({label:e.name,value:e.id+":"+e.slug.replace(/^_/,"")}))),z.unshift({value:":",label:(0,t.__)("Choose a venue","gatherpress")})):z=[],(0,h.jsx)(a.PanelRow,{children:(0,h.jsx)(a.SelectControl,{label:(0,t.__)("Venue Selector","gatherpress"),value:j,onChange:e=>{(e=>{f(e);const t=""!==(e=e.split(":"))[0]?[e[0]]:[];S({_gatherpress_venue:t}),T(e[1]),b()})(e)},options:z})})},U=()=>(0,h.jsx)("section",{children:(0,h.jsx)(W,{})}),{Fill:X,Slot:Z}=(0,a.createSlotFill)("EventPluginDocumentSettings"),q=({children:e,className:t})=>(0,h.jsx)(X,{children:(0,h.jsx)(a.PanelRow,{className:t,children:e})});q.Slot=Z,(0,i.registerPlugin)("gatherpress-event-settings",{render:()=>"gatherpress_event"===(0,r.select)("core/editor")?.getCurrentPostType()&&(0,h.jsxs)(o.PluginDocumentSettingPanel,{name:"gatherpress-event-settings",title:(0,t.__)("Event settings","gatherpress"),className:"gatherpress-event-settings",children:[(0,h.jsx)(q.Slot,{}),(0,h.jsxs)(a.__experimentalVStack,{spacing:4,children:[(0,h.jsx)(M,{}),(0,h.jsx)(U,{}),(0,h.jsx)(J,{}),(0,h.jsx)(Y,{}),(0,h.jsx)(V,{}),(0,h.jsx)(y,{}),(0,h.jsx)(k,{}),(0,h.jsx)(H,{})]})]})}),n()((()=>{const e=(0,r.select)("core/edit-post"),t=(0,r.dispatch)("core/editor");e&&t&&(e.isEditorPanelOpened("gatherpress-event-settings/gatherpress-event-settings")||t.toggleEditorPanelOpened("gatherpress-event-settings/gatherpress-event-settings"))}));const K=window.wp.compose,Q=()=>{var e,s,n;const i=(0,r.useDispatch)("core/editor").editPost,o=e=>{const t=JSON.stringify({...m,...e});i({meta:{gatherpress_venue_information:t}})},{updateVenueLatitude:l,updateVenueLongitude:c}=(0,r.useDispatch)("gatherpress/venue"),{mapCustomLatLong:d}=(0,r.useSelect)((e=>({mapCustomLatLong:e("gatherpress/venue").getMapCustomLatLong()})),[]);let m=(0,r.useSelect)((e=>e("core/editor").getEditedPostAttribute("meta").gatherpress_venue_information));m=m?JSON.parse(m):{};const[g,p]=(0,u.useState)(null!==(e=m.fullAddress)&&void 0!==e?e:""),[_,v]=(0,u.useState)(null!==(s=m.phoneNumber)&&void 0!==s?s:""),[x,j]=(0,u.useState)(null!==(n=m.website)&&void 0!==n?n:"");G({setFullAddress:p,setPhoneNumber:v,setWebsite:j});const f=(0,u.useRef)(o),S=(0,u.useCallback)((()=>{let e=null,s=null;fetch(`https://nominatim.openstreetmap.org/search?q=${g}&format=geojson`).then((e=>{if(!e.ok)throw new Error((0,t.sprintf)(/* translators: %s: Error message */ /* translators: %s: Error message */
(0,t.__)("Network response was not ok %s","gatherpress"),e.statusText));return e.json()})).then((t=>{t.features.length>0&&(e=t.features[0].geometry.coordinates[1],s=t.features[0].geometry.coordinates[0]),d||(l(e),c(s),f.current({latitude:e,longitude:s}))}))}),[g,d,l,c]),b=(0,K.useDebounce)(S,300);return(0,u.useEffect)((()=>{f.current=o}),[o]),(0,u.useEffect)((()=>{b()}),[g,b]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.TextControl,{label:(0,t.__)("Full Address","gatherpress"),value:g,onChange:e=>{$({setFullAddress:e}),o({fullAddress:e})}}),(0,h.jsx)(a.TextControl,{label:(0,t.__)("Phone Number","gatherpress"),value:_,onChange:e=>{$({setPhoneNumber:e}),o({phoneNumber:e})}}),(0,h.jsx)(a.TextControl,{label:(0,t.__)("Website","gatherpress"),value:x,type:"url",onChange:e=>{$({setWebsite:e}),o({website:e})}})]})},ee=()=>(0,h.jsx)("section",{children:(0,h.jsx)(Q,{})}),{Fill:te,Slot:se}=(0,a.createSlotFill)("VenuePluginDocumentSettings"),ne=({children:e,className:t})=>(0,h.jsx)(te,{children:(0,h.jsx)(a.PanelRow,{className:t,children:e})});ne.Slot=se,(0,i.registerPlugin)("gatherpress-venue-settings",{render:()=>"gatherpress_venue"===(0,r.select)("core/editor")?.getCurrentPostType()&&(0,h.jsxs)(o.PluginDocumentSettingPanel,{name:"gatherpress-venue-settings",title:(0,t.__)("Venue settings","gatherpress"),className:"gatherpress-venue-settings",children:[(0,h.jsx)(ne.Slot,{}),(0,h.jsx)(a.__experimentalVStack,{spacing:6,children:(0,h.jsx)(ee,{})})]})}),(0,i.registerPlugin)("gatherpress-venue-settings-at-events",{render:function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(a.Fill,{name:"EventPluginDocumentSettings",children:(0,h.jsx)(ne.Slot,{})})})}}),n()((()=>{const e=(0,r.select)("core/edit-post"),t=(0,r.dispatch)("core/editor");e&&t&&(e.isEditorPanelOpened("gatherpress-venue-settings/gatherpress-venue-settings")||t.toggleEditorPanelOpened("gatherpress-venue-settings/gatherpress-venue-settings"))}))})();