import{d as T,o as v,c as d,i as g,F as B,p as F,j as U,a as k,b as w,g as H,r as J,n as E,s as K,v as S,x as Q,h as X,w as Y,y as Z,t as ee,q as te,k as h}from"./index-180c3724.js";const se="/2048/assets/bomb-white-2ce930b9.svg",oe="/2048/assets/ice-cube-white-1df9e990.svg",re="/2048/assets/health-white-364c128f.svg",M=t=>(F("data-v-75fe4e85"),t=t(),U(),t),ne={key:0,class:"arrow-left",style:{top:"3.375rem",left:"0.5rem"}},le={key:1,class:"arrow-right",style:{top:"3.375rem",right:"0.5rem"}},ae={key:2,class:"arrow-up",style:{top:"0.5rem",left:"3.375rem"}},ce={key:3,class:"arrow-down",style:{bottom:"0.5rem",left:"3.375rem"}},ue={key:4,class:"container-prop"},ie=M(()=>k("img",{src:se,class:"bomb",style:{top:"0rem",left:"1rem"}},null,-1)),_e=[ie],fe={key:5,class:"container-prop"},ve=M(()=>k("img",{src:oe,class:"ice-cube",style:{top:"0.5rem",left:"0.5rem",transform:"rotate(-2deg)"}},null,-1)),de=[ve],me={key:6,class:"container-prop"},he=M(()=>k("img",{src:re,class:"health",style:{top:"2px",left:"-1px"}},null,-1)),pe=[he],ge=T({__name:"PropOnTile",props:{status:{}},setup(t){const e=t;return(r,o)=>(v(),d(B,null,[e.status==="row"?(v(),d("div",ne)):g("",!0),e.status==="row"?(v(),d("div",le)):g("",!0),e.status==="column"?(v(),d("div",ae)):g("",!0),e.status==="column"?(v(),d("div",ce)):g("",!0),e.status==="bomb"?(v(),d("div",ue,_e)):g("",!0),e.status==="frozen"?(v(),d("div",fe,de)):g("",!0),e.status==="heal"?(v(),d("div",me,pe)):g("",!0)],64))}});const N=(t,e)=>{const r=t.__vccOpts||t;for(const[o,n]of e)r[o]=n;return r},we=N(ge,[["__scopeId","data-v-75fe4e85"]]),ye=T({__name:"Tile",props:{value:{},status:{},row:{},col:{}},setup(t){const e=t,r=w(()=>`${1+9*e.row}rem`),o=w(()=>`${1+9*e.col}rem`),n=w(()=>e.value?Math.log2(e.value):0),_=w(()=>{if(e.status==="frozen")return"#70f3ff";if(!e.value)return"transparent";const p={2:"#ffb035",4:"#ff8936",8:"#ff7000",16:"#ff4e20",32:"#db5a6b",64:"#cb3a56",128:"#dc3023",256:"#ba0400",512:"#b65f47",1024:"#a24d15",2048:"#8b3400",4096:"#6b1400",8192:"#677e44",16384:"#575e33",32768:"#473e22",65536:"#371e11"};return e.value in p?p[e.value]:"transparent"}),a=w(()=>e.status==="frozen"||e.status==="bomb"||e.status==="heal"?"black":"white"),i=w(()=>e.status==="bomb"||e.status==="heal"?"white":"transparent");return(p,O)=>e.value?(v(),d("div",{key:0,style:E({"background-color":_.value,color:a.value,"box-shadow":`0 0 0.625rem 0rem ${_.value}`,top:r.value,left:o.value,"z-index":n.value}),class:"tile"},[H(we,{status:e.status},null,8,["status"]),k("p",{class:"tile-number",style:E({"text-shadow":`
                    0.0625rem 0.0625rem 0.25rem ${i.value},
                    -0.0625rem 0.0625rem 0.25rem ${i.value},
                    -0.0625rem -0.0625rem 0.25rem ${i.value},
                    0.0625rem -0.0625rem 0.25rem ${i.value}
                `})},[J(p.$slots,"default",{},void 0,!0)],4)],4)):g("",!0)}});const be=N(ye,[["__scopeId","data-v-2f2b0580"]]),ke={class:"container-board"},Ie={class:"background"},$e={style:{position:"absolute"}},xe=T({__name:"Board",props:{board:{},score:{}},setup(t){const e=t,r=w(()=>e.board.flat());return(o,n)=>{const _=K("auto-animate");return v(),d("div",ke,[k("div",Ie,[(v(),d(B,null,S(16,a=>k("div",{key:a,class:"grid-cell"})),64))]),Q((v(),d("div",$e,[(v(!0),d(B,null,S(r.value,(a,i)=>(v(),X(be,{key:a?a[1]:`null-${i}`,value:a?a[0]:0,status:a&&a.length===3?a[2]:"normal",row:(i-i%4)/4,col:i%4},{default:Y(()=>[Z(ee(a?a[0]:0),1)]),_:2},1032,["value","status","row","col"]))),128))])),[[_,{duration:100}]])])}}});const Ee=N(xe,[["__scopeId","data-v-e50db9fa"]]),Se=t=>{var e;(e=document.getElementById(t))==null||e.blur()};function C(t,e){if(!Array.isArray(t)||!Array.isArray(e))return t===e;if(t.length!==e.length)return!1;for(let r=0,o=t.length;r<o;r++)if(!C(t[r],e[r]))return!1;return!0}function L(t){const e=t.length,r=new Array(e);for(let o=0;o<e;o++)Array.isArray(t[o])?r[o]=L(t[o]):r[o]=t[o];return r}function j(t,e){const r=()=>{const o=t.length,n=t[0].length;let _=[];for(let a=0;a<n;a++){_[a]=[];for(let i=0;i<o;i++)_[a][i]=t[o-i-1][a]}t=_};for(let o=0;o<e;o++)r();return t}function je(t,e,r){te(t.length===2);const o=()=>{let n=t[1],_=e-t[0]-1;t=[n,_]};for(let n=0;n<r;n++)o();return t}let Ae=0;const Be=()=>Ae+=1,Te=2048,Me=65536,Ne=t=>{switch(t){case"up":return 0;case"down":return 2;case"left":return 1;case"right":return 3}};function Ce(){const t=h(0),e=h(0),r=h(4),o=h(4),n=h(Array.from({length:r.value}).map(()=>Array.from({length:o.value}).map(()=>null))),_=h(!1),a=h(!0),i=h(!1),p=h(!1),O=s=>{const c=s.length,m=s[0].length;for(let l=0;l<c;l++)for(let u=0;u<m;u++)if(s[l][u]===null||l<c-1&&s[l][u]&&s[l+1][u]&&s[l][u][0]===s[l+1][u][0]||u<m-1&&s[l][u]&&s[l][u+1]&&s[l][u][0]===s[l][u+1][0])return!1;return!0},$=s=>{const c=Math.random()<.9?2:4,m=Math.floor(Math.random()*r.value),l=Math.floor(Math.random()*o.value);return s[m][l]!==null?$(s):s[m][l]=[c,Be()],O(s)&&(i.value=!0),s},V=()=>{t.value=0,i.value=!1,_.value=!1,a.value=!0;let s=Array.from({length:r.value}).map(()=>Array.from({length:o.value}).map(()=>null));s=$(s),s=$(s),n.value=s},I=s=>{let c=L(n.value);const m=Ne(s);c=j(c,m);const l=c.length,u=c[0].length;for(let y=0;y<u;y++){const b=[];for(let f=0;f<l;f++)c[f][y]!==null&&(b.push(c[f][y]),c[f][y]=null);let A=0;const z=b.length;for(let f=0;f<z;f++){if(f<z-1&&b[f][0]===b[f+1][0]){const x=b[f][0]*2,q=b[f+1][1];c[A][y]=[x,q],f++,t.value+=x,e.value=t.value>e.value?t.value:e.value,x===Te&&!_.value&&(_.value=!0),x===Me&&!p.value&&(p.value=!0)}else c[A][y]=b[f];A++}}c=j(c,4-m),C(c,n.value)||(c=$(c)),n.value=c},D=()=>I("up"),G=()=>I("down"),P=()=>I("left"),R=()=>I("right"),W=w(()=>{let s=0;const c=n.value.length,m=n.value[0].length;for(let l=0;l<c;l++)for(let u=0;u<m;u++)n.value[l][u]!==null&&(s=n.value[l][u][0]>s?n.value[l][u][0]:s);return s});return{board:n,score:t,highScore:e,isGameOver:i,hasWon:_,firstWon:a,reachedLimit:p,biggestTileNumber:W,initialize:V,test:()=>{n.value=[[[2,1],[4,2],[8,3],[16,4]],[[32,5],[64,6],[128,7],[256,8]],[[512,9],[1024,10],[2048,11],[4096,12]],[[8192,13],[16384,14],[32768,15],[65536,16]]]},move:I,up:D,down:G,left:P,right:R}}export{Ee as B,N as _,je as a,Se as b,Ne as c,L as d,C as i,j as r,Ce as u};
