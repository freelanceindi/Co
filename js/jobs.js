document.querySelectorAll(".btn-primary").forEach(button=>{

button.addEventListener("click",(e)=>{

e.preventDefault();

showToast("Application Submitted Successfully!");

});

});
