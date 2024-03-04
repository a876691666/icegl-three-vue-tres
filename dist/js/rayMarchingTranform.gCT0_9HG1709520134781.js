import{$ as d,a4 as p,aR as w,aZ as s,a5 as T,o as m,c as M,W as e,a9 as _,aa as v,a6 as x,v as L,D as y,a7 as b,K as u,a8 as P,a as f,ab as C}from"./vendor.UXgcsyzV1709520134781.js";const D="varying vec2 vUv;\nvoid main(){\n	gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);\n	vUv=uv;\n}",H="#ifdef GL_ES\nprecision mediump float;\n#endif\n\nuniform vec2 u_resolution;\nuniform vec3 u_mouse;\nuniform float u_time;\nvarying vec2 vUv;\nfloat sphere(vec3 p,float d){\n  return(length(p*abs(sin(u_time))*2.)-d)/abs(sin(u_time))/2.;\n}\nmat2 rot2D(float angle){\n  float s=sin(angle);\n  float c=cos(angle);\n  return mat2(c,-s,s,c);\n}\nfloat map(vec3 p){\n  p.xy*=rot2D(u_time);\n  vec3 pos=vec3(sin(u_time*10.),0.,0.);\n  float spheresdf=sphere(p-pos,.5);\n  return spheresdf;\n}\n\nvoid main(){\n  vec3 ro=vec3(0.,0.,-3.);//起始位置\n  vec3 rd=normalize(vec3(vUv-.5,1.));//方向\n  float t=0.;\n  vec3 color=vec3(0.);\n  for(int i=0;i<80;i++){\n    vec3 p=ro+rd*t;\n    float d=map(p);\n    t+=d;\n    //优化效率\n    if(t>100.||d<.001){\n      break;\n    }\n    \n  }\n  color=vec3(t)*.2;\n  gl_FragColor=vec4(color,1.);\n  \n}",R=["rotation"],S={ref:"TresTubeGeometryRef",args:[1e3,1e3]},V=d({__name:"rayMarchingMaterialTranform",setup(h){const{onLoop:o,onAfterLoop:a}=p(),n={transparent:!0,depthWrite:!0,depthTest:!0,side:w,vertexShader:D,fragmentShader:H,uniforms:{u_resolution:{value:new s(window.innerWidth,window.innerHeight)},u_mouse:{value:new s(0,0)},u_time:{value:0}}},r=window.innerWidth/2,i=window.innerHeight/2;let c=0,l=0;function g(t){c=t.clientX-r,l=t.clientY-i}return document.addEventListener("mousemove",g,!1),T(()=>{}),o(({elapsed:t})=>{n.uniforms.u_time.value+=.001,n.uniforms.u_mouse.value=new s(c,l)}),a(()=>{}),(t,W)=>(m(),M("TresMesh",{ref:"MeshRef",rotation:[Math.PI/2,0,0]},[e("TresPlaneGeometry",S,null,512),e("TresShaderMaterial",_(v(n)),null,16)],8,R))}}),k={ref:"perspectiveCameraRef",position:[0,1500,0],fov:45,near:1,far:1e4},B=e("TresAmbientLight",{color:"#ffffff"},null,-1),E=e("TresDirectionalLight",{position:[100,100,0],intensity:.5,color:"#ffffff"},null,-1),G=e("TresAxesHelper",{args:[1e3],position:[0,19,0]},null,-1),U=e("TresGridHelper",{args:[6e3,100],position:[0,19,0]},null,-1),z=d({__name:"rayMarchingTranform",setup(h){const o={clearColor:"#000000",shadows:!0,alpha:!1,useLegacyLights:!0},a={autoRotate:!1,enableDamping:!0},{onLoop:n}=p();return n(({delta:r})=>{}),x(()=>{}),(r,i)=>(m(),L(u(P),b(o,{"window-size":""}),{default:y(()=>[e("TresPerspectiveCamera",k,null,512),f(u(C),_(v(a)),null,16),B,E,f(V),G,U]),_:1},16))}});export{z as default};
