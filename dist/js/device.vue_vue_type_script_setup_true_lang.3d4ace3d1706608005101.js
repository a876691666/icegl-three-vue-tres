import{Z as P,ai as L,aj as S,ar as N,b5 as p,a4 as A,a3 as E,al as G,o as z,c as D,J as F}from"./vendor.9472e6051706608005101.js";import{r as H,u as J}from"./device.dd75373c1706608005101.js";const O=["object"],Z=P({__name:"device",props:{threshold:{default:0},strength:{default:.972},radius:{default:.21}},async setup(_){let o,u;const t=_,{nodes:a}=([o,u]=L(()=>S("./plugins/industry4/model/modelDraco.glb",{draco:!0,decoderPath:"./draco/"})),o=await o,u(),o),v=H(a.Sketchfab_model),{camera:h,renderer:g,scene:s,sizes:f}=N();let n=null,c=null,r=null;const M=new p({color:"black"});A(()=>{if(h.value){s.value.add(v);const{finalComposer:e,effectComposer:l,bloomPass:x}=J(s.value,h.value,g.value,f.width.value,f.height.value);n=e,c=l,r=x,r.threshold=t.threshold,r.strength=t.strength,r.radius=t.radius}t.threshold&&(r.threshold=t.threshold),t.strength&&(r.strength=t.strength),t.radius&&(r.radius=t.radius)});const i={},b=e=>{(e.isMesh||e.type==="GridHelper"||e.name==="reflectorShaderMesh")&&(i[e.uuid]=e.material,e.material=M)},k=e=>{i[e.uuid]&&(e.material=i[e.uuid],delete i[e.uuid])},{onLoop:B,onAfterLoop:w}=E();let m=.03,d=a.Sketchfab_model.getObjectByName("canister_turbine_011_Nickel-Light-PBR_0"),C=d.material.clone(),y=new p({color:new G("red"),transparent:!0,opacity:1});return B(({elapsed:e})=>{a.hull_turbine&&(a.hull_turbine.rotation.x+=m,a.blades_turbine_003.rotation.x+=m),Math.floor(e)%2?d.material=C:d.material=y}),w(({elapsed:e})=>{c&&(s.value.traverse(l=>{b(l)}),c.render(e)),n&&(s.value.traverse(l=>{k(l)}),n.render(e))}),(e,l)=>(z(),D("primitive",{object:F(a).Sketchfab_model},null,8,O))}});export{Z as _};
