import{h as d,y as v}from"./hooks.module.B_kVw4aL.js";import{l as u}from"./preact.module.B_Hg0Uo-.js";var p=0;function a(n,r,t,_,l,c){r||(r={});var e,o,i=r;"ref"in r&&(e=r.ref,delete r.ref);var f={type:n,props:i,key:t,ref:e,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--p,__i:-1,__u:0,__source:l,__self:c};if(typeof n=="function"&&(e=n.defaultProps))for(o in e)i[o]===void 0&&(i[o]=e[o]);return u.vnode&&u.vnode(f),f}function g({messages:n}){const r=()=>n[Math.floor(Math.random()*n.length)],[t,_]=d(r());return v(()=>{const l=setInterval(()=>{_(r())},3e3);return()=>clearInterval(l)},[n]),a("div",{children:a("h3",{children:[t,"! Thank you for visiting!"]})})}export{g as default};