import{d as j,c as C,a as A,n as L,o as E,p as U,b as X,_ as R,r as w,w as G,e as S,f as H,g as J,h as I,i as O,j as Q,k as Y,l as Z,u as ee,m as x,q as $,s as T,B as te,t as D,v as le}from"./index-99f81bf2.js";const ne=i=>(U("data-v-595870e0"),i=i(),X(),i),oe={class:"container-hp"},ae=ne(()=>A("div",{class:"border"},null,-1)),se=j({__name:"HealthPointBar",props:{hp:{},max:{},side:{}},setup(i){const v=i;return(t,e)=>(E(),C("div",oe,[A("div",{style:L({"background-color":`${t.hp/t.max>.2?"#2add9c":"#dc3023"}`,width:`${(t.hp<t.max?t.hp/t.max:1)*35}rem`,height:"2rem",float:`${v.side}`})},null,4),ae]))}});const re=R(se,[["__scopeId","data-v-595870e0"]]),ue=(i,v,t)=>{const e=t[0].length;for(let a=0;a<e;a++)a!==v&&t[i][a]!==null&&(t[i][a][2]!=="frozen"?t[i][a]=null:t[i][a][2]="normal");return t},ie=(i,v,t)=>{const e=t.length;for(let a=0;a<e;a++)a!==i&&t[a][v]!==null&&(t[a][v][2]!=="frozen"?t[a][v]=null:t[a][v][2]="normal");return t},ce=(i,v,t)=>{const e=t.length,a=t[0].length;for(let g=0;g<e;g++)for(let p=0;p<a;p++){let o=Math.abs(i-g),_=+Math.abs(v-p);o<=1&&_<=1&&!(o===0&&_===0)&&t[g][p]!==null&&(t[g][p][2]!=="frozen"?t[g][p]=null:t[g][p][2]="normal")}return t},fe=(i,v,t,e)=>(e+=t[i][v][0],e);let ve=0;const me=()=>ve+=1,ge=4096;function pe(){const i=H(),v=H(),t=w(0),e=w(ge),a=w([-1,-1]),g=w(4),p=w(4),o=w(Array.from({length:g.value}).map(()=>Array.from({length:p.value}).map(()=>null))),_=w(!1),h=w(!1);G(_,()=>{_.value===!0&&v.trigger()});const k=l=>{const n=l.length,u=l[0].length;for(let c=0;c<n;c++)for(let f=0;f<u;f++)if(l[c][f]===null||c<n-1&&l[c][f]&&l[c+1][f]&&l[c][f][0]===l[c+1][f][0]||f<u-1&&l[c][f]&&l[c][f+1]&&l[c][f][0]===l[c][f+1][0])return!1;return!0},d=(l,n)=>{const u=Math.random()<.9?2:4,c=Math.floor(Math.random()*g.value),f=Math.floor(Math.random()*p.value);return l[c][f]!==null?d(l,n):l[c][f]=[u,me(),n],k(l)&&(h.value=!0),l},y=()=>{t.value=0,h.value=!1,_.value=!1;let l=Array.from({length:g.value}).map(()=>Array.from({length:p.value}).map(()=>null));l=d(l,"normal"),l=d(l,"normal"),o.value=l},M=l=>{let n=J(o.value);const u=Z(l);n=I(n,u);const c=n.length,f=n[0].length;for(let m=0;m<f;m++){const r=[];for(let s=0;s<c;s++)n[s][m]!==null&&(r.push(n[s][m]),n[s][m]=null);let z=0;const b=r.length;for(let s=0;s<b;s++){if(s<b-1&&r[s][0]===r[s+1][0]&&r[s][2]!=="frozen"&&r[s+1][2]!=="frozen"){const B=r[s][0]*2,K=r[s+1][1];let P="normal";r[s][2]!=="normal"&&r[s+1][2]==="normal"&&(P=r[s][2]),r[s][2]==="normal"&&r[s+1][2]!=="normal"&&(P=r[s+1][2]),P!=="normal"&&(a.value=[z,m],a.value=O(a.value,4,4-u)),n[z][m]=[B,K,P],s++,t.value+=B}else n[z][m]=r[s];z++}}n=I(n,4-u),Q(n,o.value)||(n=d(n,"normal")),o.value=n,i.trigger(l)},W=()=>M("up"),q=()=>M("down"),N=()=>M("left"),V=()=>M("right"),F=S(()=>{let l=0,n=0,u=0;const c=o.value.length,f=o.value[0].length;for(let m=0;m<c;m++)for(let r=0;r<f;r++)o.value[m][r]!==null&&o.value[m][r][0]>l&&(l=o.value[m][r][0],n=m,u=r);return[l,n,u]});return{board:o,score:t,hp:e,trigger_pos:a,isStuck:h,hasWon:_,biggestTile:F,initialize:y,setRandomTile:d,deleteTile:(l,n)=>{o.value[l][n]=null},setTileProp:(l,n,u)=>{o.value[l][n]!==null&&(o.value[l][n][2]=u)},triggerTileProp:l=>{Y(l.length===2);const n=l[0],u=l[1];if(o.value[n][u]===null)return;switch(o.value[n][u][2]){case"row":o.value=ue(n,u,o.value);break;case"column":o.value=ie(n,u,o.value);break;case"bomb":o.value=ce(n,u,o.value);break;case"heal":e.value=fe(n,u,o.value,e.value);break;default:return}o.value[n][u][2]="normal"},move:M,up:W,down:q,left:N,right:V,onWon:v.on,onMove:i.on}}const _e={class:"container-game"},he={style:{position:"absolute",top:"220px",right:"240px","font-family":"'consolas'","font-size":"40px"}},de=j({__name:"DuelGame",emits:["up","down","left","right","update:seed"],setup(i,{emit:v}){const t=v,e=pe();e.initialize();const a=w(1024),g=a.value,p=ee(S(()=>a.value),{duration:100}),o=S(()=>!(e.isStuck.value||_.value)),_=S(()=>e.trigger_pos.value[0]!==-1&&e.trigger_pos.value[1]!==-1);return G(_,()=>{_.value===!0&&setTimeout(()=>{e.triggerTileProp(e.trigger_pos.value),e.trigger_pos.value=[-1,-1]},300)}),x(["ArrowUp","w"],()=>{o.value&&(e.up(),t("up"))}),x(["ArrowDown","s"],()=>{o.value&&(e.down(),t("down"))}),x(["ArrowLeft","a"],()=>{o.value&&(e.left(),t("left"))}),x(["ArrowRight","d"],()=>{o.value&&(e.right(),t("right"))}),x("Enter",()=>{const h=e.biggestTile.value[0],k=e.biggestTile.value[1],d=e.biggestTile.value[2];h<64||h>a.value||(e.deleteTile(k,d),a.value-=h,e.isStuck.value===!0&&(e.isStuck.value=!1))}),x(" ",()=>{const h=e.biggestTile.value[0],k=e.biggestTile.value[1],d=e.biggestTile.value[2];if(h<64)return;let y="normal";switch(Math.floor(Math.random()*4)){case 0:y="row";break;case 1:y="column";break;case 2:y="bomb";break;case 3:y="heal";break}e.setTileProp(k,d,y)}),x("f",()=>{e.board.value=e.setRandomTile(e.board.value,"frozen")}),(h,k)=>(E(),C("div",_e,[$(te,{board:T(e).board.value,score:T(e).score.value},null,8,["board","score"]),A("button",{onClick:k[0]||(k[0]=d=>{T(e).initialize(),a.value=1024,T(le)("new_game")}),class:"new-game",id:"new_game"},"重玩一局"),$(re,{hp:T(p),max:T(g),side:"left",style:{position:"absolute",top:"260px",right:"50px"}},null,8,["hp","max"]),A("p",he,D(T(p).toFixed(0))+" / "+D(T(g)),1)]))}});const xe=R(de,[["__scopeId","data-v-3afdbaa6"]]);export{xe as default};