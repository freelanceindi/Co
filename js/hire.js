const form=document.getElementById("hireForm");

if(form){

form.addEventListener("submit",e=>{

e.preventDefault();

showToast("Hire request sent successfully!");

setTimeout(()=>{

location.href="dashboard.html";

},1200);

});

}
