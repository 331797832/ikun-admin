import{J as V,I as w,r as y,c as O,u as I,U as g,ae as N,a_ as B,aa as K}from"./index-B7qKn0L6.js";const $="el",x="is-",i=(s,a,e,r,c)=>{let l=`${s}-${a}`;return e&&(l+=`-${e}`),r&&(l+=`__${r}`),c&&(l+=`--${c}`),l},C=Symbol("namespaceContextKey"),J=s=>{const a=s||(V()?w(C,y($)):y($));return O(()=>I(a)||$)},A=(s,a)=>{const e=J(a);return{namespace:e,b:(t="")=>i(e.value,s,t,"",""),e:t=>t?i(e.value,s,"",t,""):"",m:t=>t?i(e.value,s,"","",t):"",be:(t,n)=>t&&n?i(e.value,s,t,n,""):"",em:(t,n)=>t&&n?i(e.value,s,"",t,n):"",bm:(t,n)=>t&&n?i(e.value,s,t,"",n):"",bem:(t,n,o)=>t&&n&&o?i(e.value,s,t,n,o):"",is:(t,...n)=>{const o=n.length>=1?n[0]:!0;return t&&o?`${x}${t}`:""},cssVar:t=>{const n={};for(const o in t)t[o]&&(n[`--${e.value}-${o}`]=t[o]);return n},cssVarName:t=>`--${e.value}-${t}`,cssVarBlock:t=>{const n={};for(const o in t)t[o]&&(n[`--${e.value}-${s}-${o}`]=t[o]);return n},cssVarBlockName:t=>`--${e.value}-${s}-${t}`}};function b(s){for(var a=-1,e=s==null?0:s.length,r={};++a<e;){var c=s[a];r[c[0]]=c[1]}return r}const h="__epPropKey",D=s=>s,j=s=>g(s)&&!!s[h],q=(s,a)=>{if(!g(s)||j(s))return s;const{values:e,required:r,default:c,type:l,validator:v}=s,p={type:l,required:!!r,validator:e||v?d=>{let u=!1,f=[];if(e&&(f=Array.from(e),N(s,"default")&&f.push(c),u||(u=f.includes(d))),v&&(u||(u=v(d))),!u&&f.length>0){const m=[...new Set(f)].map(_=>JSON.stringify(_)).join(", ");B(`Invalid prop: validation failed${a?` for prop "${a}"`:""}. Expected one of [${m}], got value ${JSON.stringify(d)}.`)}return u}:void 0,[h]:!0};return N(s,"default")&&(p.default=c),p},F=s=>b(Object.entries(s).map(([a,e])=>[a,q(e,a)]));var G=(s,a)=>{const e=s.__vccOpts||s;for(const[r,c]of a)e[r]=c;return e};const U=(s,a)=>{if(s.install=e=>{for(const r of[s,...Object.values(a??{})])e.component(r.name,r)},a)for(const[e,r]of Object.entries(a))s[e]=r;return s},z=(s,a)=>(s.install=e=>{s._context=e._context,e.config.globalProperties[a]=s},s),H=s=>(s.install=K,s);export{G as _,H as a,F as b,U as c,D as d,$ as e,b as f,q as g,J as h,C as n,A as u,z as w};
