import{_ as u}from"./pagesShow.vue_vue_type_script_setup_true_lang-0e4a5bdf.js";import{_ as d}from"./threeWater2.vue_vue_type_script_setup_true_lang-e19a6aa5.js";import{Y as _,az as h,aA as f,Z as w,ae as y,o as a,c as x,U as B,I as c,s as r,B as o,a as l,a5 as g,aC as m}from"./vendor-cd22b229.js";import"./vanilla-307d3a93.esm-b2fdc411.js";import"./_commonjsHelpers-725317a4.js";const C={position:[-1553.1671459739368,160.56147161757758,1938.3955926284068],scale:400,rotation:[-3.141592653589793,1.0149796591022564,-3.141592653589793]},k=["object"],G=_({__name:"indexBackup",async setup(p){let e,s;const{scene:n,nodes:t}=([e,s]=h(()=>f("https://a.amap.com/jsapi_demos/static/gltf-online/shanghai/scene.gltf")),e=await e,s(),e);n.renderOrder=9999,t.mesh_0.material.transparent=!1,t.mesh_0.material.depthWrite=!0,t.mesh_0.material.depthTest=!0,t.mesh_0.material.opacity=.7;const i=w({color:"#FFF",scale:1});return new y({title:"河流参数",expanded:!0}).addBinding(i,"color"),(j,v)=>(a(),x("TresGroup",C,[B("primitive",{object:c(n)},null,8,k),(a(),r(m,null,{default:o(()=>[l(d,g({"position-y":1e-4,waterGeometry:c(t).mesh_0.geometry},i),null,16,["waterGeometry"])]),_:1}))]))}}),P=_({__name:"cityRiver2",setup(p){return(e,s)=>(a(),r(u,{showAxesHelper:!1,showGridHelper:!1,showBuildings:!0},{ability:o(()=>[(a(),r(m,null,{default:o(()=>[l(G)]),_:1}))]),_:1}))}});export{P as default};
