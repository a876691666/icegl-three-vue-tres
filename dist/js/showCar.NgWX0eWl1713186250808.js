import{a1 as b,l as v,o as p,x as f,E as i,a as o,L as e,b1 as C,Y as n,c as g,H as P,G as S,bq as $,b3 as M,ag as h,a9 as x,aD as L,aE as k,az as m,a6 as T,a2 as d,a4 as I,r as B,a8 as w,ac as G,aa as R,ab as z}from"./vendor.3BxC2K2I1713186250808.js";import"./OimoPhysicsBuffer.b5DejoFC1713186250808.js";import{_ as E}from"./reflectorShaderMesh.vue_vue_type_script_setup_true_lang.LTjjojXA1713186250808.js";import{_ as c}from"./index.vue_vue_type_script_setup_true_lang.rDLCRjiZ1713186250808.js";import"./PackedMipMapGenerator.MfR89DYw1713186250808.js";/* empty css                                                                                 */import{_ as F}from"./randomLoading.vue_vue_type_script_setup_true_lang.oD8s2VxU1713186250808.js";import{b as j,_ as A,a as V}from"./depth.vue_vue_type_script_setup_true_lang.jR1rWp7u1713186250808.js";import{_ as q}from"./component.vue_vue_type_script_setup_true_lang.Fyx5cu151713186250808.js";import"./ReflectorMaterial.IlJ-4uU_1713186250808.js";import"./dither.glsl.y2WXw1t-1713186250808.js";import"./Reflector.fWY39lN91713186250808.js";import"./starLoading.FgCIcTkR1713186250808.js";import"./bubbleLoading.vd4x2lVL1713186250808.js";import"./vanilla.qe137qzE1713186250808.js";import"./_commonjsHelpers.5-cIlDoe1713186250808.js";const H={rotation:[0,.5,0]},N={scale:[100,100,100]},D=n("TresSphereGeometry",{args:[1,64,64]},null,-1),O=b({__name:"envLightForCar",setup(y){const a=[2,0,2,0,2,0,2,0],s=v(null),{onBeforeLoop:u}=x();return u(({delta:l})=>{s.value&&(s.value.position.z+=l*10)>20&&(s.value.position.z=-60)}),(l,t)=>(p(),f(h,null,{default:i(()=>[o(e(q),{blur:1,background:"",far:1e4},{default:i(()=>[o(e(c),{intensity:.75,"rotation-x":Math.PI/2,position:[0,5,-9],scale:[10,10,1]},null,8,["rotation-x"]),o(e(c),{intensity:4,"rotation-y":Math.PI/2,position:[-5,1,-1],scale:[20,.1,1]},null,8,["rotation-y"]),o(e(c),{"rotation-y":Math.PI/2,position:[-5,-1,-1],scale:[20,.5,1]},null,8,["rotation-y"]),o(e(c),{"rotation-y":-Math.PI/2,position:[10,1,0],scale:[20,11,1]},null,8,["rotation-y"]),o(e(C),{speed:5,floatFactor:2,rotationFactor:2},{default:i(()=>[o(e(c),{form:"ring",color:"red",intensity:1,scale:10,position:[-15,4,-18]})]),_:1}),n("TresGroup",H,[n("TresGroup",{ref_key:"group",ref:s},[(p(),g(S,null,P(a,(r,_)=>o(e(c),{key:r,form:"circle",intensity:2,rotation:[Math.PI/2,0,0],position:[_,4,r*4],scale:[3,1,1]},null,8,["rotation","position"])),64))],512)]),n("TresMesh",N,[D,o(e(j),{side:$},{default:i(()=>[o(e(A),{color:"#444",alpha:1,mode:"normal"}),o(e(V),{colorA:"blue",colorB:"black",alpha:.5,mode:"normal",near:0,far:300,origin:new M(100,100,100)},null,8,["origin"])]),_:1},8,["side"])])]),_:1})]),_:1}))}}),Y={ref:"contactShadowsRef"},J=["object","rotation"],K={__name:"carModel",async setup(y){let a,s;const{scene:u,nodes:l,materials:t}=([a,s]=L(()=>k("https://opensource-1314935952.cos.ap-nanjing.myqcloud.com/model/industry4/911-transformed.glb",{draco:!0,decoderPath:"./draco/"})),a=await a,s(),a);return Object.values(l).forEach(r=>{r.isMesh&&(r.receiveShadow=r.castShadow=!0)}),t.rubber.color=new m("#222"),t.rubber.roughness=.6,t.rubber.roughnessMap=null,t.rubber.normalScale=[4,4],t.window.color=new m("black"),t.window.roughness=0,t.window.clearcoat=.1,t.coat.envMapIntensity=4,t.coat.roughness=.5,t.coat.metalness=1,t.paint.envMapIntensity=2,t.paint.roughness=.45,t.paint.metalness=.8,t.paint.color=new m("#555"),(r,_)=>(p(),g("TresGroup",Y,[n("primitive",{object:e(u),scale:1.6,position:[-.5,-.18,0],rotation:[0,Math.PI/5,0]},null,8,J)],512))}},Q=n("TresPerspectiveCamera",{position:[5,1,15],fov:30,near:1,far:1e3},null,-1),U=n("TresAmbientLight",{intensity:.5},null,-1),W=["angle"],fo=b({__name:"showCar",setup(y){const a=v(null);T(()=>{a.value&&(a.value.shadow.bias=-1e-4)});const s=d({reflectivity:.1,mirror:.92,mixStrength:36,showGridHelper:!1}),u=d({clearColor:"#111111",shadows:!0,alpha:!1,antialias:!0,pixelRatio:window.devicePixelRatio,outputColorSpace:I,useLegacyLights:!0,physicallyCorrectLights:!0}),l=d({autoRotate:!0});return(t,r)=>{const _=B("TresCanvas");return p(),g(S,null,[o(e(F)),o(_,w(u,{"window-size":""}),{default:i(()=>[Q,o(e(G),R(z(l)),null,16),U,n("TresSpotLight",{ref_key:"spotLight",ref:a,position:[0,10,0],angle:Math.PI/4,distance:20,penumbra:.1,castShadow:"",intensity:60,decay:1.5,focus:.5},null,8,W),(p(),f(h,null,{default:i(()=>[o(K)]),_:1})),(p(),f(h,null,{default:i(()=>[o(e(E),w(s,{position:[0,-1.17,0]}),null,16)]),_:1})),o(O)]),_:1},16)],64)}}});export{fo as default};
