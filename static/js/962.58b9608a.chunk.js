"use strict";(self.webpackChunksocialnetwork=self.webpackChunksocialnetwork||[]).push([[962],{4962:function(s,e,a){a.r(e),a.d(e,{default:function(){return B}});a(2791);var n,i="Messenger_messenger__2Ai5r",r="Dialogs_dialogs__WLGek",t="Dialog_dialogues_items__YHqB4",l="Dialog_dialog__S2KMw",c="Dialog_active_link__h9m7Z",o="Dialog_dialogAva__BuqhM",d=a(3504),u=a(7783),g=a(184),m=function(s){return(0,g.jsx)("div",{className:t,children:s.dialogs.map((function(s){return(0,g.jsx)("span",{children:(0,g.jsx)("div",{className:l,children:(0,g.jsxs)(d.OL,{to:"/messenger/id"+s.first+s.last,className:function(s){return s.isActive?c:l},children:[(0,g.jsx)("img",{className:o,src:null!=s.avatarUrl?s.avatarUrl:u,alt:"avatarUser"}),s.first," ",s.last]})})},s.id)}))})},_=function(s){return(0,g.jsx)("div",{className:r,children:(0,g.jsx)(m,{dialogs:s.dialogs})})},x="Messages_messages__FFZkS",j="Messages_messages_items__3Sn9S",h="Message_message__lBbwR",f=function(s){return(0,g.jsx)("div",{children:s.messages.map((function(s){return(0,g.jsx)("div",{className:h,children:(0,g.jsx)("div",{children:s.message})},s.id)}))})},v=a(5705),M="TextareaFormMessages_form__uT0y6",k="TextareaFormMessages_areatext__l0Tsr",N="TextareaFormMessages_button__6kvvM",A=function(s){return(0,g.jsx)("div",{children:(0,g.jsx)(v.J9,{initialValues:{newMessageText:""},onSubmit:function(e,a){var n,i=a.resetForm;n=e.newMessageText,s.onAddMessageClick(n),i({values:""})},children:(0,g.jsx)(v.l0,{children:(0,g.jsxs)("div",{className:M,children:[(0,g.jsx)("label",{htmlFor:"textarea"}),(0,g.jsx)(v.gN,{className:k,name:"newMessageText",id:"textarea",placeholder:"Enter your post"}),(0,g.jsx)("button",{className:N,type:"submit",children:"Submit"})]})})})})},b=function(s){return(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:x,children:(0,g.jsx)("div",{className:j,children:(0,g.jsx)(f,{messages:s.messages})})}),(0,g.jsx)(A,{onAddMessageClick:s.onAddMessageClick})]})},p=function(s){return(0,g.jsxs)("section",{className:i,children:[(0,g.jsx)(_,{dialogs:s.dialogs}),(0,g.jsx)(b,{messages:s.messages,onAddMessageClick:s.onAddMessageClick})]})},w=a(6434),C=a(8683),F=a(6871),T=function(s){return{isAuth:s.auth.isAuth}},S=a(7781),D=a(6916),P=(0,D.P1)((function(s){return s.messengerPage.messages}),(function(s){return s})),q=(0,D.P1)((function(s){return s.messengerPage.dialogs}),(function(s){return s})),y=a(2265),B=(0,S.qC)((0,w.$j)((function(s){return{messages:P(s),dialogs:q(s)}}),{addMessage:y.H}))((n=function(s){return(0,g.jsx)(p,{messages:s.messages,dialogs:s.dialogs,onAddMessageClick:function(e){s.addMessage(e)}})},(0,w.$j)(T)((function(s){return s.isAuth?(0,g.jsx)(n,(0,C.Z)({},s)):(0,g.jsx)(F.Fg,{to:"/login"})}))))}}]);
//# sourceMappingURL=962.58b9608a.chunk.js.map