import"./assets/styles-DibwPHUW.js";const o={email:"",message:""},n="feedback-form-state",r=document.querySelector(".feedback-form"),l=r.querySelector("textarea"),s=r.querySelector("input[type='email']");r.addEventListener("submit",i);l.addEventListener("input",m);s.addEventListener("input",u);c();function i(e){e.preventDefault();const t=s.value.trim(),a=l.value.trim();if(t===""||a===""){alert("Fill please all fields");return}console.log("Submit data:",{email:t,message:a}),e.currentTarget.reset(),localStorage.removeItem(n)}function m(e){const t=e.target.value;o.message=t,localStorage.setItem(n,JSON.stringify(o))}function u(e){o.email=e.target.value,localStorage.setItem(n,JSON.stringify(o))}function c(){const e=localStorage.getItem(n);if(e){const{email:t,message:a}=JSON.parse(e);s.value=t||"",l.value=a||""}}
//# sourceMappingURL=2-form.js.map