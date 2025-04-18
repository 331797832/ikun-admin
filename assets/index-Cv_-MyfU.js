import{b as le,_ as ee,u as D,d as de,a as re,c as Ie}from"./base-BJiYoXGy.js";import{i as ge,k as xt,E as Q,c as V,l as Se,m as Mt,r as Pe,n as Ct,t as be,b as He,o as Ue,p as ze,q as Ee,s as $t,v as St,w as kt,f as Ke,U as Ye,x as Ge,g as Et,h as It,j as wt}from"./el-col-rwzHaZ_z.js";import{E as Tt,z as Ae,r as k,G as Ze,d as $,o as ye,k as T,b as _,j as Y,u as f,g as U,H as Me,I as fe,J as _e,f as z,a as F,w as h,i as ie,t as me,K as Nt,q as Pt,L as Je,c as E,n as Ce,M as Ot,T as Qe,N as Bt,O as et,y as we,P as te,Q as Ve,R as X,p as ve,e as Te,v as Fe,F as oe,S as tt,U as Lt,V as Rt,W as zt,X as $e,Y as At,D as De,Z as Vt,m as c,$ as Ft,a0 as Dt,a1 as Wt,a2 as jt,h as pe,_ as he,a3 as We,a4 as je,A as qt,a5 as Ht}from"./index-B7qKn0L6.js";/* empty css                  */import{t as ke,E as nt,C as Ut}from"./index-e0VVxpIH.js";import{E as Kt,c as ce,a as Gt}from"./index-DzdST_4B.js";import{f as at}from"./vnode-B3fxJuYj.js";const xe=Tt("useLayOutSettingStore",()=>{const e=Ae(),t=k(!1),a=k(!0),n=k([]);return{fold:t,isrefash:a,routertabs:n,setroutertabs:l=>{const i=r=>{r.forEach(p=>{if(p.path===l){if(n.value.some(u=>u.path===l))return;n.value.push(p)}p.children&&i(p.children)})};i(Ze)},romoveroutertabs:l=>{n.value.length!==1&&(n.value=n.value.filter(i=>i.path!==l),e.push(n.value[n.value.length-1].path))}}}),st=Symbol("breadcrumbKey"),Xt=le({separator:{type:String,default:"/"},separatorIcon:{type:ge}}),Yt=$({name:"ElBreadcrumb"}),Zt=$({...Yt,props:Xt,setup(e){const t=e,{t:a}=xt(),n=D("breadcrumb"),s=k();return Me(st,t),ye(()=>{const o=s.value.querySelectorAll(`.${n.e("item")}`);o.length&&o[o.length-1].setAttribute("aria-current","page")}),(o,l)=>(_(),T("div",{ref_key:"breadcrumb",ref:s,class:U(f(n).b()),"aria-label":f(a)("el.breadcrumb.label"),role:"navigation"},[Y(o.$slots,"default")],10,["aria-label"]))}});var Jt=ee(Zt,[["__file","breadcrumb.vue"]]);const Qt=le({to:{type:de([String,Object]),default:""},replace:Boolean}),en=$({name:"ElBreadcrumbItem"}),tn=$({...en,props:Qt,setup(e){const t=e,a=_e(),n=fe(st,void 0),s=D("breadcrumb"),o=a.appContext.config.globalProperties.$router,l=k(),i=()=>{!t.to||!o||(t.replace?o.replace(t.to):o.push(t.to))};return(r,p)=>{var u,b;return _(),T("span",{class:U(f(s).e("item"))},[z("span",{ref_key:"link",ref:l,class:U([f(s).e("inner"),f(s).is("link",!!r.to)]),role:"link",onClick:i},[Y(r.$slots,"default")],2),(u=f(n))!=null&&u.separatorIcon?(_(),F(f(Q),{key:0,class:U(f(s).e("separator"))},{default:h(()=>[(_(),F(ie(f(n).separatorIcon)))]),_:1},8,["class"])):(_(),T("span",{key:1,class:U(f(s).e("separator")),role:"presentation"},me((b=f(n))==null?void 0:b.separator),3))],2)}}});var ot=ee(tn,[["__file","breadcrumb-item.vue"]]);const nn=Ie(Jt,{BreadcrumbItem:ot}),an=re(ot),sn=(e,t,a)=>at(e.subTree).filter(o=>{var l;return Pt(o)&&((l=o.type)==null?void 0:l.name)===t&&!!o.component}).map(o=>o.component.uid).map(o=>a[o]).filter(o=>!!o),on=(e,t)=>{const a={},n=Nt([]);return{children:n,addChild:l=>{a[l.uid]=l,n.value=sn(e,t,a)},removeChild:l=>{delete a[l],n.value=n.value.filter(i=>i.uid!==l)}}},ln=$({name:"ElContainer"}),rn=$({...ln,props:{direction:{type:String}},setup(e){const t=e,a=Je(),n=D("container"),s=E(()=>t.direction==="vertical"?!0:t.direction==="horizontal"?!1:a&&a.default?a.default().some(l=>{const i=l.type.name;return i==="ElHeader"||i==="ElFooter"}):!1);return(o,l)=>(_(),T("section",{class:U([f(n).b(),f(n).is("vertical",f(s))])},[Y(o.$slots,"default")],2))}});var un=ee(rn,[["__file","container.vue"]]);const cn=$({name:"ElAside"}),dn=$({...cn,props:{width:{type:String,default:null}},setup(e){const t=e,a=D("aside"),n=E(()=>t.width?a.cssVarBlock({width:t.width}):{});return(s,o)=>(_(),T("aside",{class:U(f(a).b()),style:Ce(f(n))},[Y(s.$slots,"default")],6))}});var lt=ee(dn,[["__file","aside.vue"]]);const fn=$({name:"ElFooter"}),pn=$({...fn,props:{height:{type:String,default:null}},setup(e){const t=e,a=D("footer"),n=E(()=>t.height?a.cssVarBlock({height:t.height}):{});return(s,o)=>(_(),T("footer",{class:U(f(a).b()),style:Ce(f(n))},[Y(s.$slots,"default")],6))}});var rt=ee(pn,[["__file","footer.vue"]]);const mn=$({name:"ElHeader"}),vn=$({...mn,props:{height:{type:String,default:null}},setup(e){const t=e,a=D("header"),n=E(()=>t.height?a.cssVarBlock({height:t.height}):{});return(s,o)=>(_(),T("header",{class:U(f(a).b()),style:Ce(f(n))},[Y(s.$slots,"default")],6))}});var ut=ee(vn,[["__file","header.vue"]]);const bn=$({name:"ElMain"}),_n=$({...bn,setup(e){const t=D("main");return(a,n)=>(_(),T("main",{class:U(f(t).b())},[Y(a.$slots,"default")],2))}});var ct=ee(_n,[["__file","main.vue"]]);const hn=Ie(un,{Aside:lt,Footer:rt,Header:ut,Main:ct}),gn=re(lt);re(rt);const yn=re(ut),xn=re(ct);let Mn=class{constructor(t,a){this.parent=t,this.domNode=a,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(t){t===this.subMenuItems.length?t=0:t<0&&(t=this.subMenuItems.length-1),this.subMenuItems[t].focus(),this.subIndex=t}addListeners(){const t=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,a=>{a.addEventListener("keydown",n=>{let s=!1;switch(n.code){case V.down:{this.gotoSubIndex(this.subIndex+1),s=!0;break}case V.up:{this.gotoSubIndex(this.subIndex-1),s=!0;break}case V.tab:{ke(t,"mouseleave");break}case V.enter:case V.numpadEnter:case V.space:{s=!0,n.currentTarget.click();break}}return s&&(n.preventDefault(),n.stopPropagation()),!1})})}},Cn=class{constructor(t,a){this.domNode=t,this.submenu=null,this.submenu=null,this.init(a)}init(t){this.domNode.setAttribute("tabindex","0");const a=this.domNode.querySelector(`.${t}-menu`);a&&(this.submenu=new Mn(this,a)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",t=>{let a=!1;switch(t.code){case V.down:{ke(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),a=!0;break}case V.up:{ke(t.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),a=!0;break}case V.tab:{ke(t.currentTarget,"mouseleave");break}case V.enter:case V.numpadEnter:case V.space:{a=!0,t.currentTarget.click();break}}a&&t.preventDefault()})}},$n=class{constructor(t,a){this.domNode=t,this.init(a)}init(t){const a=this.domNode.childNodes;Array.from(a).forEach(n=>{n.nodeType===1&&new Cn(n,t)})}};const Sn=$({name:"ElMenuCollapseTransition"}),kn=$({...Sn,setup(e){const t=D("menu"),a={onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,s){Se(n,`${t.namespace.value}-opacity-transition`),n.style.opacity="1",s()},onAfterEnter(n){Pe(n,`${t.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),Mt(n,t.m("collapse"))?(Pe(n,t.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),Se(n,t.m("collapse"))):(Se(n,t.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),Pe(n,t.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){Se(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}};return(n,s)=>(_(),F(Qe,Ot({mode:"out-in"},f(a)),{default:h(()=>[Y(n.$slots,"default")]),_:3},16))}});var En=ee(kn,[["__file","menu-collapse-transition.vue"]]);function it(e,t){const a=E(()=>{let s=e.parent;const o=[t.value];for(;s.type.name!=="ElMenu";)s.props.index&&o.unshift(s.props.index),s=s.parent;return o});return{parentMenu:E(()=>{let s=e.parent;for(;s&&!["ElMenu","ElSubMenu"].includes(s.type.name);)s=s.parent;return s}),indexPath:a}}function In(e){return E(()=>{const a=e.backgroundColor;return a?new Ct(a).shade(20).toString():""})}const dt=(e,t)=>{const a=D("menu");return E(()=>a.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":In(e).value||"","active-color":e.activeTextColor||"",level:`${t}`}))},wn=le({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:ge},expandOpenIcon:{type:ge},collapseCloseIcon:{type:ge},collapseOpenIcon:{type:ge}}),Oe="ElSubMenu";var qe=$({name:Oe,props:wn,setup(e,{slots:t,expose:a}){const n=_e(),{indexPath:s,parentMenu:o}=it(n,E(()=>e.index)),l=D("menu"),i=D("sub-menu"),r=fe("rootMenu");r||be(Oe,"can not inject root menu");const p=fe(`subMenu:${o.value.uid}`);p||be(Oe,"can not inject sub menu");const u=k({}),b=k({});let v;const y=k(!1),I=k(),P=k(),G=E(()=>S.value==="horizontal"&&A.value?"bottom-start":"right-start"),C=E(()=>S.value==="horizontal"&&A.value||S.value==="vertical"&&!r.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?R.value?e.expandOpenIcon:e.expandCloseIcon:Bt:e.collapseCloseIcon&&e.collapseOpenIcon?R.value?e.collapseOpenIcon:e.collapseCloseIcon:et),A=E(()=>p.level===0),W=E(()=>{const g=e.teleported;return g===void 0?A.value:g}),Z=E(()=>r.props.collapse?`${l.namespace.value}-zoom-in-left`:`${l.namespace.value}-zoom-in-top`),j=E(()=>S.value==="horizontal"&&A.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),R=E(()=>r.openedMenus.includes(e.index)),ne=E(()=>[...Object.values(u.value),...Object.values(b.value)].some(({active:g})=>g)),S=E(()=>r.props.mode),N=E(()=>r.props.persistent),x=we({index:e.index,indexPath:s,active:ne}),q=dt(r.props,p.level+1),L=E(()=>{var g;return(g=e.popperOffset)!=null?g:r.props.popperOffset}),H=E(()=>{var g;return(g=e.popperClass)!=null?g:r.props.popperClass}),ue=E(()=>{var g;return(g=e.showTimeout)!=null?g:r.props.showTimeout}),d=E(()=>{var g;return(g=e.hideTimeout)!=null?g:r.props.hideTimeout}),m=()=>{var g,K,w;return(w=(K=(g=P.value)==null?void 0:g.popperRef)==null?void 0:K.popperInstanceRef)==null?void 0:w.destroy()},M=g=>{g||m()},O=()=>{r.props.menuTrigger==="hover"&&r.props.mode==="horizontal"||r.props.collapse&&r.props.mode==="vertical"||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:s.value,active:ne.value})},B=(g,K=ue.value)=>{var w;if(g.type!=="focus"){if(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||e.disabled){p.mouseInChild.value=!0;return}p.mouseInChild.value=!0,v==null||v(),{stop:v}=He(()=>{r.openMenu(e.index,s.value)},K),W.value&&((w=o.value.vnode.el)==null||w.dispatchEvent(new MouseEvent("mouseenter")))}},J=(g=!1)=>{var K;if(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"){p.mouseInChild.value=!1;return}v==null||v(),p.mouseInChild.value=!1,{stop:v}=He(()=>!y.value&&r.closeMenu(e.index,s.value),d.value),W.value&&g&&((K=p.handleMouseleave)==null||K.call(p,!0))};te(()=>r.props.collapse,g=>M(!!g));{const g=w=>{b.value[w.index]=w},K=w=>{delete b.value[w.index]};Me(`subMenu:${n.uid}`,{addSubMenu:g,removeSubMenu:K,handleMouseleave:J,mouseInChild:y,level:p.level+1})}return a({opened:R}),ye(()=>{r.addSubMenu(x),p.addSubMenu(x)}),Ve(()=>{p.removeSubMenu(x),r.removeSubMenu(x)}),()=>{var g;const K=[(g=t.title)==null?void 0:g.call(t),X(Q,{class:i.e("icon-arrow"),style:{transform:R.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&r.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>ve(C.value)?X(n.appContext.components[C.value]):X(C.value)})],w=r.isMenuPopup?X(nt,{ref:P,visible:R.value,effect:"light",pure:!0,offset:L.value,showArrow:!1,persistent:N.value,popperClass:H.value,placement:G.value,teleported:W.value,fallbackPlacements:j.value,transition:Z.value,gpuAcceleration:!1},{content:()=>{var ae;return X("div",{class:[l.m(S.value),l.m("popup-container"),H.value],onMouseenter:se=>B(se,100),onMouseleave:()=>J(!0),onFocus:se=>B(se,100)},[X("ul",{class:[l.b(),l.m("popup"),l.m(`popup-${G.value}`)],style:q.value},[(ae=t.default)==null?void 0:ae.call(t)])])},default:()=>X("div",{class:i.e("title"),onClick:O},K)}):X(oe,{},[X("div",{class:i.e("title"),ref:I,onClick:O},K),X(Kt,{},{default:()=>{var ae;return Te(X("ul",{role:"menu",class:[l.b(),l.m("inline")],style:q.value},[(ae=t.default)==null?void 0:ae.call(t)]),[[Fe,R.value]])}})]);return X("li",{class:[i.b(),i.is("active",ne.value),i.is("opened",R.value),i.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:R.value,onMouseenter:B,onMouseleave:()=>J(),onFocus:B},[w])}}});const Tn=le({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:de(Array),default:()=>ze([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:ge,default:()=>zt},popperEffect:{type:de(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},persistent:{type:Boolean,default:!0}}),Be=e=>tt(e)&&e.every(t=>ve(t)),Nn={close:(e,t)=>ve(e)&&Be(t),open:(e,t)=>ve(e)&&Be(t),select:(e,t,a,n)=>ve(e)&&Be(t)&&Lt(a)&&(n===void 0||n instanceof Promise)};var Pn=$({name:"ElMenu",props:Tn,emits:Nn,setup(e,{emit:t,slots:a,expose:n}){const s=_e(),o=s.appContext.config.globalProperties.$router,l=k(),i=D("menu"),r=D("sub-menu"),p=k(-1),u=k(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),b=k(e.defaultActive),v=k({}),y=k({}),I=E(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),P=()=>{const d=b.value&&v.value[b.value];if(!d||e.mode==="horizontal"||e.collapse)return;d.indexPath.forEach(M=>{const O=y.value[M];O&&G(M,O.indexPath)})},G=(d,m)=>{u.value.includes(d)||(e.uniqueOpened&&(u.value=u.value.filter(M=>m.includes(M))),u.value.push(d),t("open",d,m))},C=d=>{const m=u.value.indexOf(d);m!==-1&&u.value.splice(m,1)},A=(d,m)=>{C(d),t("close",d,m)},W=({index:d,indexPath:m})=>{u.value.includes(d)?A(d,m):G(d,m)},Z=d=>{(e.mode==="horizontal"||e.collapse)&&(u.value=[]);const{index:m,indexPath:M}=d;if(!(Ue(m)||Ue(M)))if(e.router&&o){const O=d.route||m,B=o.push(O).then(J=>(J||(b.value=m),J));t("select",m,M,{index:m,indexPath:M,route:O},B)}else b.value=m,t("select",m,M,{index:m,indexPath:M})},j=d=>{var m;const M=v.value,O=M[d]||b.value&&M[b.value]||M[e.defaultActive];b.value=(m=O==null?void 0:O.index)!=null?m:d},R=d=>{const m=getComputedStyle(d),M=Number.parseInt(m.marginLeft,10),O=Number.parseInt(m.marginRight,10);return d.offsetWidth+M+O||0},ne=()=>{var d,m;if(!l.value)return-1;const M=Array.from((m=(d=l.value)==null?void 0:d.childNodes)!=null?m:[]).filter(se=>se.nodeName!=="#text"||se.nodeValue),O=64,B=getComputedStyle(l.value),J=Number.parseInt(B.paddingLeft,10),g=Number.parseInt(B.paddingRight,10),K=l.value.clientWidth-J-g;let w=0,ae=0;return M.forEach((se,yt)=>{se.nodeName!=="#comment"&&(w+=R(se),w<=K-O&&(ae=yt+1))}),ae===M.length?-1:ae},S=d=>y.value[d].indexPath,N=(d,m=33.34)=>{let M;return()=>{M&&clearTimeout(M),M=setTimeout(()=>{d()},m)}};let x=!0;const q=()=>{if(p.value===ne())return;const d=()=>{p.value=-1,$e(()=>{p.value=ne()})};x?d():N(d)(),x=!1};te(()=>e.defaultActive,d=>{v.value[d]||(b.value=""),j(d)}),te(()=>e.collapse,d=>{d&&(u.value=[])}),te(v.value,P);let L;Rt(()=>{e.mode==="horizontal"&&e.ellipsis?L=Ee(l,q).stop:L==null||L()});const H=k(!1);{const d=B=>{y.value[B.index]=B},m=B=>{delete y.value[B.index]};Me("rootMenu",we({props:e,openedMenus:u,items:v,subMenus:y,activeIndex:b,isMenuPopup:I,addMenuItem:B=>{v.value[B.index]=B},removeMenuItem:B=>{delete v.value[B.index]},addSubMenu:d,removeSubMenu:m,openMenu:G,closeMenu:A,handleMenuItemClick:Z,handleSubMenuClick:W})),Me(`subMenu:${s.uid}`,{addSubMenu:d,removeSubMenu:m,mouseInChild:H,level:0})}ye(()=>{e.mode==="horizontal"&&new $n(s.vnode.el,i.namespace.value)}),n({open:m=>{const{indexPath:M}=y.value[m];M.forEach(O=>G(O,M))},close:C,handleResize:q});const ue=dt(e,0);return()=>{var d,m;let M=(m=(d=a.default)==null?void 0:d.call(a))!=null?m:[];const O=[];if(e.mode==="horizontal"&&l.value){const g=at(M),K=p.value===-1?g:g.slice(0,p.value),w=p.value===-1?[]:g.slice(p.value);w!=null&&w.length&&e.ellipsis&&(M=K,O.push(X(qe,{index:"sub-menu-more",class:r.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>X(Q,{class:r.e("icon-more")},{default:()=>X(e.ellipsisIcon)}),default:()=>w})))}const B=e.closeOnClickOutside?[[Ut,()=>{u.value.length&&(H.value||(u.value.forEach(g=>t("close",g,S(g))),u.value=[]))}]]:[],J=Te(X("ul",{key:String(e.collapse),role:"menubar",ref:l,style:ue.value,class:{[i.b()]:!0,[i.m(e.mode)]:!0,[i.m("collapse")]:e.collapse}},[...M,...O]),B);return e.collapseTransition&&e.mode==="vertical"?X(En,()=>J):J}}});const On=le({index:{type:de([String,null]),default:null},route:{type:de([String,Object])},disabled:Boolean}),Bn={click:e=>ve(e.index)&&tt(e.indexPath)},Re="ElMenuItem",Ln=$({name:Re}),Rn=$({...Ln,props:On,emits:Bn,setup(e,{expose:t,emit:a}){const n=e,s=_e(),o=fe("rootMenu"),l=D("menu"),i=D("menu-item");o||be(Re,"can not inject root menu");const{parentMenu:r,indexPath:p}=it(s,At(n,"index")),u=fe(`subMenu:${r.value.uid}`);u||be(Re,"can not inject sub menu");const b=E(()=>n.index===o.activeIndex),v=we({index:n.index,indexPath:p,active:b}),y=()=>{n.disabled||(o.handleMenuItemClick({index:n.index,indexPath:p.value,route:n.route}),a("click",v))};return ye(()=>{u.addSubMenu(v),o.addMenuItem(v)}),Ve(()=>{u.removeSubMenu(v),o.removeMenuItem(v)}),t({parentMenu:r,rootMenu:o,active:b,nsMenu:l,nsMenuItem:i,handleClick:y}),(I,P)=>(_(),T("li",{class:U([f(i).b(),f(i).is("active",f(b)),f(i).is("disabled",I.disabled)]),role:"menuitem",tabindex:"-1",onClick:y},[f(r).type.name==="ElMenu"&&f(o).props.collapse&&I.$slots.title?(_(),F(f(nt),{key:0,effect:f(o).props.popperEffect,placement:"right","fallback-placements":["left"],persistent:f(o).props.persistent},{content:h(()=>[Y(I.$slots,"title")]),default:h(()=>[z("div",{class:U(f(l).be("tooltip","trigger"))},[Y(I.$slots,"default")],2)]),_:3},8,["effect","persistent"])):(_(),T(oe,{key:1},[Y(I.$slots,"default"),Y(I.$slots,"title")],64))],2))}});var ft=ee(Rn,[["__file","menu-item.vue"]]);const zn={title:String},An=$({name:"ElMenuItemGroup"}),Vn=$({...An,props:zn,setup(e){const t=D("menu-item-group");return(a,n)=>(_(),T("li",{class:U(f(t).b())},[z("div",{class:U(f(t).e("title"))},[a.$slots.title?Y(a.$slots,"title",{key:1}):(_(),T(oe,{key:0},[De(me(a.title),1)],64))],2),z("ul",null,[Y(a.$slots,"default")])],2))}});var pt=ee(Vn,[["__file","menu-item-group.vue"]]);const mt=Ie(Pn,{MenuItem:ft,MenuItemGroup:pt,SubMenu:qe}),vt=re(ft);re(pt);const bt=re(qe),Ne=Symbol("tabsRootContextKey"),Fn=le({tabs:{type:de(Array),default:()=>ze([])}}),_t="ElTabBar",Dn=$({name:_t}),Wn=$({...Dn,props:Fn,setup(e,{expose:t}){const a=e,n=_e(),s=fe(Ne);s||be(_t,"<el-tabs><el-tab-bar /></el-tabs>");const o=D("tabs"),l=k(),i=k(),r=()=>{let y=0,I=0;const P=["top","bottom"].includes(s.props.tabPosition)?"width":"height",G=P==="width"?"x":"y",C=G==="x"?"left":"top";return a.tabs.every(A=>{var W,Z;const j=(Z=(W=n.parent)==null?void 0:W.refs)==null?void 0:Z[`tab-${A.uid}`];if(!j)return!1;if(!A.active)return!0;y=j[`offset${ce(C)}`],I=j[`client${ce(P)}`];const R=window.getComputedStyle(j);return P==="width"&&(I-=Number.parseFloat(R.paddingLeft)+Number.parseFloat(R.paddingRight),y+=Number.parseFloat(R.paddingLeft)),!1}),{[P]:`${I}px`,transform:`translate${ce(G)}(${y}px)`}},p=()=>i.value=r(),u=[],b=()=>{var y;u.forEach(P=>P.stop()),u.length=0;const I=(y=n.parent)==null?void 0:y.refs;if(I){for(const P in I)if(P.startsWith("tab-")){const G=I[P];G&&u.push(Ee(G,p))}}};te(()=>a.tabs,async()=>{await $e(),p(),b()},{immediate:!0});const v=Ee(l,()=>p());return Ve(()=>{u.forEach(y=>y.stop()),u.length=0,v.stop()}),t({ref:l,update:p}),(y,I)=>(_(),T("div",{ref_key:"barRef",ref:l,class:U([f(o).e("active-bar"),f(o).is(f(s).props.tabPosition)]),style:Ce(i.value)},null,6))}});var jn=ee(Wn,[["__file","tab-bar.vue"]]);const qn=le({panes:{type:de(Array),default:()=>ze([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),Hn={tabClick:(e,t,a)=>a instanceof Event,tabRemove:(e,t)=>t instanceof Event},Xe="ElTabNav",Un=$({name:Xe,props:qn,emits:Hn,setup(e,{expose:t,emit:a}){const n=fe(Ne);n||be(Xe,"<el-tabs><tab-nav /></el-tabs>");const s=D("tabs"),o=$t(),l=St(),i=k(),r=k(),p=k(),u=k(),b=k(!1),v=k(0),y=k(!1),I=k(!0),P=E(()=>["top","bottom"].includes(n.props.tabPosition)?"width":"height"),G=E(()=>({transform:`translate${P.value==="width"?"X":"Y"}(-${v.value}px)`})),C=()=>{if(!i.value)return;const S=i.value[`offset${ce(P.value)}`],N=v.value;if(!N)return;const x=N>S?N-S:0;v.value=x},A=()=>{if(!i.value||!r.value)return;const S=r.value[`offset${ce(P.value)}`],N=i.value[`offset${ce(P.value)}`],x=v.value;if(S-x<=N)return;const q=S-x>N*2?x+N:S-N;v.value=q},W=async()=>{const S=r.value;if(!b.value||!p.value||!i.value||!S)return;await $e();const N=p.value.querySelector(".is-active");if(!N)return;const x=i.value,q=["top","bottom"].includes(n.props.tabPosition),L=N.getBoundingClientRect(),H=x.getBoundingClientRect(),ue=q?S.offsetWidth-H.width:S.offsetHeight-H.height,d=v.value;let m=d;q?(L.left<H.left&&(m=d-(H.left-L.left)),L.right>H.right&&(m=d+L.right-H.right)):(L.top<H.top&&(m=d-(H.top-L.top)),L.bottom>H.bottom&&(m=d+(L.bottom-H.bottom))),m=Math.max(m,0),v.value=Math.min(m,ue)},Z=()=>{var S;if(!r.value||!i.value)return;e.stretch&&((S=u.value)==null||S.update());const N=r.value[`offset${ce(P.value)}`],x=i.value[`offset${ce(P.value)}`],q=v.value;x<N?(b.value=b.value||{},b.value.prev=q,b.value.next=q+x<N,N-q<x&&(v.value=N-x)):(b.value=!1,q>0&&(v.value=0))},j=S=>{let N=0;switch(S.code){case V.left:case V.up:N=-1;break;case V.right:case V.down:N=1;break;default:return}const x=Array.from(S.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)"));let L=x.indexOf(S.target)+N;L<0?L=x.length-1:L>=x.length&&(L=0),x[L].focus({preventScroll:!0}),x[L].click(),R()},R=()=>{I.value&&(y.value=!0)},ne=()=>y.value=!1;return te(o,S=>{S==="hidden"?I.value=!1:S==="visible"&&setTimeout(()=>I.value=!0,50)}),te(l,S=>{S?setTimeout(()=>I.value=!0,50):I.value=!1}),Ee(p,Z),ye(()=>setTimeout(()=>W(),0)),Vt(()=>Z()),t({scrollToActiveTab:W,removeFocus:ne}),()=>{const S=b.value?[c("span",{class:[s.e("nav-prev"),s.is("disabled",!b.value.prev)],onClick:C},[c(Q,null,{default:()=>[c(Ft,null,null)]})]),c("span",{class:[s.e("nav-next"),s.is("disabled",!b.value.next)],onClick:A},[c(Q,null,{default:()=>[c(et,null,null)]})])]:null,N=e.panes.map((x,q)=>{var L,H,ue,d;const m=x.uid,M=x.props.disabled,O=(H=(L=x.props.name)!=null?L:x.index)!=null?H:`${q}`,B=!M&&(x.isClosable||e.editable);x.index=`${q}`;const J=B?c(Q,{class:"is-icon-close",onClick:w=>a("tabRemove",x,w)},{default:()=>[c(Dt,null,null)]}):null,g=((d=(ue=x.slots).label)==null?void 0:d.call(ue))||x.props.label,K=!M&&x.active?0:-1;return c("div",{ref:`tab-${m}`,class:[s.e("item"),s.is(n.props.tabPosition),s.is("active",x.active),s.is("disabled",M),s.is("closable",B),s.is("focus",y.value)],id:`tab-${O}`,key:`tab-${m}`,"aria-controls":`pane-${O}`,role:"tab","aria-selected":x.active,tabindex:K,onFocus:()=>R(),onBlur:()=>ne(),onClick:w=>{ne(),a("tabClick",x,O,w)},onKeydown:w=>{B&&(w.code===V.delete||w.code===V.backspace)&&a("tabRemove",x,w)}},[g,J])});return c("div",{ref:p,class:[s.e("nav-wrap"),s.is("scrollable",!!b.value),s.is(n.props.tabPosition)]},[S,c("div",{class:s.e("nav-scroll"),ref:i},[c("div",{class:[s.e("nav"),s.is(n.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(n.props.tabPosition))],ref:r,style:G.value,role:"tablist",onKeydown:j},[e.type?null:c(jn,{ref:u,tabs:[...e.panes]},null),N])])])}}}),Kn=le({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:de(Function),default:()=>!0},stretch:Boolean}),Le=e=>ve(e)||kt(e),Gn={[Ye]:e=>Le(e),tabClick:(e,t)=>t instanceof Event,tabChange:e=>Le(e),edit:(e,t)=>["remove","add"].includes(t),tabRemove:e=>Le(e),tabAdd:()=>!0},Xn=$({name:"ElTabs",props:Kn,emits:Gn,setup(e,{emit:t,slots:a,expose:n}){var s;const o=D("tabs"),l=E(()=>["left","right"].includes(e.tabPosition)),{children:i,addChild:r,removeChild:p}=on(_e(),"ElTabPane"),u=k(),b=k((s=e.modelValue)!=null?s:"0"),v=async(C,A=!1)=>{var W,Z;if(!(b.value===C||Ke(C)))try{let j;if(e.beforeLeave){const R=e.beforeLeave(C,b.value);j=R instanceof Promise?await R:R}else j=!0;j!==!1&&(b.value=C,A&&(t(Ye,C),t("tabChange",C)),(Z=(W=u.value)==null?void 0:W.removeFocus)==null||Z.call(W))}catch{}},y=(C,A,W)=>{C.props.disabled||(v(A,!0),t("tabClick",C,W))},I=(C,A)=>{C.props.disabled||Ke(C.props.name)||(A.stopPropagation(),t("edit",C.props.name,"remove"),t("tabRemove",C.props.name))},P=()=>{t("edit",void 0,"add"),t("tabAdd")};te(()=>e.modelValue,C=>v(C)),te(b,async()=>{var C;await $e(),(C=u.value)==null||C.scrollToActiveTab()}),Me(Ne,{props:e,currentName:b,registerPane:C=>{i.value.push(C)},sortPane:r,unregisterPane:p}),n({currentName:b});const G=({render:C})=>C();return()=>{const C=a["add-icon"],A=e.editable||e.addable?c("div",{class:[o.e("new-tab"),l.value&&o.e("new-tab-vertical")],tabindex:"0",onClick:P,onKeydown:j=>{[V.enter,V.numpadEnter].includes(j.code)&&P()}},[C?Y(a,"add-icon"):c(Q,{class:o.is("icon-plus")},{default:()=>[c(Wt,null,null)]})]):null,W=c("div",{class:[o.e("header"),l.value&&o.e("header-vertical"),o.is(e.tabPosition)]},[c(G,{render:()=>{const j=i.value.some(R=>R.slots.label);return c(Un,{ref:u,currentName:b.value,editable:e.editable,type:e.type,panes:i.value,stretch:e.stretch,onTabClick:y,onTabRemove:I},{$stable:!j})}},null),A]),Z=c("div",{class:o.e("content")},[Y(a,"default")]);return c("div",{class:[o.b(),o.m(e.tabPosition),{[o.m("card")]:e.type==="card",[o.m("border-card")]:e.type==="border-card"}]},[Z,W])}}});var Yn=Xn;const Zn=le({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),ht="ElTabPane",Jn=$({name:ht}),Qn=$({...Jn,props:Zn,setup(e){const t=e,a=_e(),n=Je(),s=fe(Ne);s||be(ht,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=D("tab-pane"),l=k(),i=E(()=>t.closable||s.props.closable),r=Ge(()=>{var y;return s.currentName.value===((y=t.name)!=null?y:l.value)}),p=k(r.value),u=E(()=>{var y;return(y=t.name)!=null?y:l.value}),b=Ge(()=>!t.lazy||p.value||r.value);te(r,y=>{y&&(p.value=!0)});const v=we({uid:a.uid,slots:n,props:t,paneName:u,active:r,index:l,isClosable:i});return s.registerPane(v),ye(()=>{s.sortPane(v)}),jt(()=>{s.unregisterPane(v.uid)}),(y,I)=>f(b)?Te((_(),T("div",{key:0,id:`pane-${f(u)}`,class:U(f(o).b()),role:"tabpanel","aria-hidden":!f(r),"aria-labelledby":`tab-${f(u)}`},[Y(y.$slots,"default")],10,["id","aria-hidden","aria-labelledby"])),[[Fe,f(r)]]):pe("v-if",!0)}});var gt=ee(Qn,[["__file","tab-pane.vue"]]);const ea=Ie(Yn,{TabPane:gt}),ta=re(gt),na={},aa={class:"flex"},sa={class:"mx-1"};function oa(e,t){const a=Q,n=an,s=nn;return _(),F(s,{"separator-icon":"ArrowRight"},{default:h(()=>[(_(!0),T(oe,null,We(e.$route.matched,(o,l)=>Te((_(),F(n,{to:o.path,key:l},{default:h(()=>[z("div",aa,[z("div",sa,[c(a,null,{default:h(()=>[(_(),F(ie(o.meta.icon)))]),_:2},1024)]),z("div",null,[z("span",null,me(o.meta.title),1)])])]),_:2},1032,["to"])),[[Fe,o.meta.title]])),128))]),_:1})}const la=he(na,[["render",oa]]),ra="/ikun-admin/assets/avator-0hUqVhpF.gif",ua={};function ca(e,t){const a=je("User"),n=Q,s=vt,o=bt,l=mt;return _(),F(l,{class:"items-center el-menu-demo",mode:"horizontal","collapse-transition":!0,ellipsis:!1,router:""},{default:h(()=>[t[5]||(t[5]=z("div",{class:"w-[30px] h-[30px]"},[z("img",{src:ra,alt:"",srcset:""})],-1)),c(o,{index:"2"},{title:h(()=>t[0]||(t[0]=[De(" admin")])),default:h(()=>[c(s,{index:"/user/profile"},{default:h(()=>[c(n,null,{default:h(()=>[c(a)]),_:1}),t[1]||(t[1]=z("span",null,"基本资料",-1))]),_:1}),c(s,{index:"/user/avatar"},{default:h(()=>[c(n,null,{default:h(()=>[c(a)]),_:1}),t[2]||(t[2]=z("span",null,"更换头像",-1))]),_:1}),c(s,{index:"/user/password"},{default:h(()=>[c(n,null,{default:h(()=>[c(a)]),_:1}),t[3]||(t[3]=z("span",null,"重置密码",-1))]),_:1}),c(s,null,{default:h(()=>[c(n,null,{default:h(()=>[c(a)]),_:1}),t[4]||(t[4]=z("span",null,"退出登陆",-1))]),_:1})]),_:1})]),_:1})}const ia=he(ua,[["render",ca]]),da=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},fa=e=>{e?(document.body.classList.add("dark"),document.documentElement.classList.add("dark")):(document.body.classList.remove("dark"),document.documentElement.classList.remove("dark"))},pa=$({__name:"index",setup(e){const t=k(!1),a=xe(),n=()=>{a.fold=!a.fold},s=()=>{console.log("刷新页面"),a.isrefash=!a.isrefash,$e(()=>{a.isrefash=!a.isrefash})};return(o,l)=>{const i=Q,r=la,p=It,u=wt,b=Gt,v=Et;return _(),T("div",null,[c(v,{style:{overflow:"hidden"}},{default:h(()=>[c(p,{span:16,xs:15,class:"flex items-center"},{default:h(()=>[c(i,{size:"40",class:"togglea-aside",onClick:n},{default:h(()=>[(_(),F(ie(f(a).fold?"Fold":"Expand")))]),_:1}),c(r,{class:"hidden-xs-only ml-5"})]),_:1}),c(p,{span:4,class:"flex items-center hidden-xs-only"},{default:h(()=>[l[3]||(l[3]=z("div",{class:"flex-grow"},null,-1)),z("div",null,[c(u,{circle:"",icon:"Refresh",onClick:s}),c(u,{class:"mr-2",circle:"",icon:"FullScreen",onClick:f(da)},null,8,["onClick"]),c(b,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=y=>t.value=y),"active-text":"洁白","inactive-text":"暗黑",onClick:l[1]||(l[1]=y=>f(fa)(t.value))},{default:h(()=>l[2]||(l[2]=[De("黑色")])),_:1},8,["modelValue"])])]),_:1}),c(p,{span:4,class:"flex items-center"},{default:h(()=>[l[4]||(l[4]=z("div",{class:"flex-grow"},null,-1)),c(ia)]),_:1})]),_:1})])}}}),ma=he(pa,[["__scopeId","data-v-318a3dbf"]]),va=["xlink:href","fill"],ba=$({__name:"index",props:{name:{type:String,default:""},color:{type:String,default:"white"},w:{type:String,default:"16px"},h:{type:String,default:"16px"}},setup(e){return(t,a)=>(_(),T("svg",{style:Ce({width:e.w,height:e.h})},[z("use",{"xlink:href":`#icon-${e.name}`,fill:e.color},null,8,va)],4))}}),_a={name:"Menu"},ha=$({..._a,props:{menuList:{type:Array,default:()=>[]}},setup(e){const t=xe(),a=Ae(),n=s=>{t.setroutertabs(s),a.push(s)};return(s,o)=>{const l=Q,i=vt,r=je("Menu",!0),p=bt;return _(!0),T(oe,null,We(e.menuList,u=>(_(),T(oe,{key:u.path},[u.children?pe("",!0):(_(),T(oe,{key:0},[u.meta.hidden?pe("",!0):(_(),F(i,{key:0,index:u.path,onClick:b=>n(u.path)},{title:h(()=>[z("span",null,me(u.meta.title),1)]),default:h(()=>[c(l,null,{default:h(()=>[(_(),F(ie(u.meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)),u.children&&u.children.length==1?(_(),T(oe,{key:1},[u.children[0].meta.hidden?pe("",!0):(_(),F(i,{key:0,index:u.children[0].path,onClick:b=>n(u.path)},{title:h(()=>[z("span",null,me(u.children[0].meta.title),1)]),default:h(()=>[c(l,null,{default:h(()=>[(_(),F(ie(u.children[0].meta.icon)))]),_:2},1024)]),_:2},1032,["index","onClick"]))],64)):pe("",!0),u.children&&u.children.length>1?(_(),F(p,{key:2,index:u.path},{title:h(()=>[c(l,null,{default:h(()=>[(_(),F(ie(u.meta.icon)))]),_:2},1024),z("span",null,me(u.meta.title),1)]),default:h(()=>[c(r,{menuList:u.children},null,8,["menuList"])]),_:2},1032,["index"])):pe("",!0)],64))),128)}}}),ga={key:0,class:"logo"},ya={key:1,class:"logo"},xa=$({__name:"index",setup(e){const t=xe();return(a,n)=>{const s=mt,o=gn;return _(),T("div",null,[c(o,{class:U(["aside-container",{fold:f(t).fold}]),width:"auto"},{default:h(()=>[f(t).fold?(_(),T("div",ya,"E")):(_(),T("div",ga,[c(ba,{name:"element",style:{width:"40%",height:"100px"}})])),c(s,{class:U(["aside-menu",{fold:f(t).fold}]),"default-active":a.$route.path,"show-timeout":20,collapse:f(t).fold},{default:h(()=>[c(ha,{"menu-list":f(Ze)},null,8,["menu-list"])]),_:1},8,["default-active","class","collapse"])]),_:1},8,["class"])])}}}),Ma=he(xa,[["__scopeId","data-v-379e051d"]]),Ca={class:"tabs-container"},$a={class:"custom-tabs-label"},Sa=$({__name:"routeTabs",setup(e){const t=xe(),a=Ae(),n=qt(),s=k(""),o=i=>{t.setroutertabs(i.name),a.push(i.props.name)},l=i=>{t.romoveroutertabs(i)};return te(()=>n.path,i=>{t.setroutertabs(i),s.value=i},{immediate:!0}),(i,r)=>{const p=Q,u=ta,b=ea;return _(),T("div",Ca,[c(b,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=v=>s.value=v),type:"card",onTabClick:o,onTabRemove:l,class:"route-tabs",closable:""},{default:h(()=>[(_(!0),T(oe,null,We(f(t).routertabs,v=>(_(),F(u,{key:v.path,lazy:"",label:v.meta.title,name:v.path},{label:h(()=>[z("span",$a,[c(p,null,{default:h(()=>[(_(),F(ie(v.meta.icon)))]),_:2},1024),z("span",null,me(v.meta.title),1)])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])])}}}),ka=he(Sa,[["__scopeId","data-v-c6854883"]]),Ea=$({__name:"index",setup(e){const t=xe();return(a,n)=>{const s=je("router-view");return _(),F(s,null,{default:h(({Component:o,route:l})=>[c(Qe,{name:"fade",mode:"out-in"},{default:h(()=>[(_(),F(Ht,null,[f(t).isrefash?(_(),F(ie(o),{key:l.path})):pe("",!0)],1024))]),_:2},1024)]),_:1})}}}),Ia=he(Ea,[["__scopeId","data-v-c0c54bad"]]),wa={class:"commonlayout"},Ta=$({__name:"index",setup(e){const t=xe();return(a,n)=>{const s=yn,o=xn,l=hn;return _(),T("div",wa,[c(l,{class:"h-screen"},{default:h(()=>[c(Ma),c(l,{class:U(["left-container",{fold:f(t).fold}])},{default:h(()=>[c(s,{class:"overflow-hidden k_header"},{default:h(()=>[c(ma)]),_:1}),c(ka),c(o,{class:"routeview-bg"},{default:h(()=>[c(Ia)]),_:1})]),_:1},8,["class"])]),_:1})])}}}),Da=he(Ta,[["__scopeId","data-v-777ae045"]]);export{Da as default};
