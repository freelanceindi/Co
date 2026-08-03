const form = document.getElementById("withdrawForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const amount=document.getElementById("amount").value;

if(amount==="" || amount<=0){

showToast("Enter a valid amount");

return;

}

showToast("Withdrawal request submitted");

form.reset();

});

}
