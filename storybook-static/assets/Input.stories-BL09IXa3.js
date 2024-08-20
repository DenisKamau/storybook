const V=({id:a="email",name:l="email",label:r="Email",type:p="email",placeholder:f="you@example.com",disabled:b=!1,min:c=null,max:u=null,readonly:x=!1,classNames:y="",styles:E={},required:h=!1}={})=>{const n=document.createElement("div");n.className=`${y}`;const o=document.createElement("label");o.className="block text-sm font-medium leading-6 text-gray-900",o.setAttribute("for",a),o.textContent=r;const s=document.createElement("div");s.className="mt-2";const e=document.createElement("input");return e.type=p,e.name=l,e.id=a,e.className="px-2",e.placeholder=f,e.disabled=b,c&&(e.min=c),u&&(e.max=u),e.readOnly=x,h&&e.setAttribute("required",!0),Object.assign(e.style,E),s.appendChild(e),n.appendChild(o),n.appendChild(s),n},C={title:"Forms/Input",parameters:{layout:"centered"},argTypes:{label:{control:"text",defaultValue:"Email"},type:{control:"select",options:["text","email","password","number","url","tel","date","time","datetime-local","month","week","search","color","range"],defaultValue:"email"},placeholder:{control:"text",defaultValue:"you@example.com"},disabled:{control:"boolean",defaultValue:!1},min:{control:"text",defaultValue:null},max:{control:"text",defaultValue:null},readonly:{control:"boolean",defaultValue:!1},required:{control:"boolean",defaultValue:!1},classNames:{control:"text",defaultValue:""},styles:{control:"object",defaultValue:{}}}},g=a=>{const l=document.createElement("div"),r=V({...a});return l.appendChild(r),l},t=g.bind({});t.args={label:"Email",type:"email",placeholder:"you@example.com",disabled:!1,readonly:!1,required:!1,classNames:"",styles:{}};var d,m,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const input = createInput({
    ...args
  });
  container.appendChild(input);
  return container;
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,C as default};