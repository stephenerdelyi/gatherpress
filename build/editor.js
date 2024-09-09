(()=>{"use strict";var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.domReady;var i=e.n(t);const n=window.wp.data,s=window.moment;var a=e.n(s);const r=window.wp.i18n,o=window.wp.apiFetch;var d=e.n(o);function c(e){if("object"==typeof GatherPress)return e.split(".").reduce(((e,t)=>e&&e[t]),GatherPress)}function m(e,t){if("object"!=typeof GatherPress)return;const i=e.split("."),n=i.pop();i.reduce(((e,t)=>{var i;return null!==(i=e[t])&&void 0!==i?i:e[t]={}}),GatherPress)[n]=t}window.wp.element,window.wp.date,window.ReactJSXRuntime;const T="YYYY-MM-DDTHH:mm:ss",p="YYYY-MM-DD HH:mm:ss",l=a().tz(E()).add(1,"day").set("hour",18).set("minute",0).set("second",0).format(T),u=a().tz(l,E()).add(2,"hours").format(T);function E(e=c("eventDetails.dateTime.timezone")){return a().tz.zone(e)?e:(0,r.__)("GMT","gatherpress")}const _=window.wp.blocks,g={dateTimeStart:c("eventDetails.dateTime.datetime_start")?c("eventDetails.dateTime.datetime_start"):l,dateTimeEnd:c("eventDetails.dateTime.datetime_end")?c("eventDetails.dateTime.datetime_end"):u,timezone:c("eventDetails.dateTime.timezone"),isFetching:!1},v={setDateTimeStart:e=>(m("eventDetails.dateTime.datetime_start",e),{type:"SET_DATETIME_START",dateTimeStart:e}),setDateTimeEnd:e=>(m("eventDetails.dateTime.datetime_end",e),{type:"SET_DATETIME_END",dateTimeEnd:e}),setTimezone:e=>(m("eventDetails.dateTime.timezone",e),{type:"SET_TIMEZONE",timezone:e}),saveEventDetails(){const e=(0,n.select)("core/editor").isSavingPost(),t=(0,n.select)("core/editor").isAutosavingPost();return async()=>{"gatherpress_event"===(0,n.select)("core/editor")?.getCurrentPostType()&&e&&!t&&await d()({path:c("urls.eventRestApi")+"/datetime",method:"POST",data:{post_id:c("eventDetails.postId"),datetime_start:a().tz(c("eventDetails.dateTime.datetime_start"),E()).format(p),datetime_end:a().tz(c("eventDetails.dateTime.datetime_end"),E()).format(p),timezone:c("eventDetails.dateTime.timezone"),_wpnonce:c("misc.nonce")}})}}},h=(0,n.createReduxStore)("gatherpress/datetime",{reducer:(e=g,t)=>{switch(t.type){case"SET_DATETIME_START":return{...e,dateTimeStart:t.dateTimeStart};case"SET_DATETIME_END":return{...e,dateTimeEnd:t.dateTimeEnd};case"SET_TIMEZONE":return{...e,timezone:t.timezone};case"SAVE_EVENT_DETAILS_SUCCESS":return{...e,isFetching:!1};case"SAVE_EVENT_DETAILS_FAILURE":return{...e,isFetching:!1,error:t.error};case"SET_FETCHING":return{...e,isFetching:t.isFetching};default:return e}},actions:v,selectors:{getDateTimeStart:e=>e.dateTimeStart,getDateTimeEnd:e=>e.dateTimeEnd,getTimezone:e=>e.timezone,isFetching:e=>e.isFetching}});(0,n.register)(h),i()((()=>{const e=(0,n.select)("core/edit-post");if(!e)return;const t=(0,n.dispatch)("core/edit-post");e.isEditorSidebarOpened()?(t.openGeneralSidebar("edit-post/document"),t.toggleEditorPanelOpened("gatherpress-event-settings/gatherpress-event-settings")):(t.openGeneralSidebar(),t.toggleEditorPanelOpened("gatherpress-event-settings/gatherpress-event-settings")),function(){const e="gatherpress_event_past",t=(0,n.dispatch)("core/notices");t.removeNotice(e),function(){const e=a().tz(c("eventDetails.dateTime.datetime_end"),E());return"gatherpress_event"===(0,n.select)("core/editor")?.getCurrentPostType()&&a().tz(E()).valueOf()>e.valueOf()}()&&t.createNotice("warning",(0,r.__)("This event has already passed.","gatherpress"),{id:e,isDismissible:!1})}()})),i()((()=>{Object.keys(c("misc.unregisterBlocks")).forEach((e=>{const t=c("misc.unregisterBlocks")[e];t&&void 0!==(0,_.getBlockType)(t)&&(0,_.unregisterBlockType)(t)}))}))})();