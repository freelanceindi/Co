/* =====================================
   EditHub India
   Authentication
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    login();

    register();

});

/* ==============================
   LOGIN
============================== */

function login(){

    const form=document.getElementById("loginForm");

    if(!form) return;

    form.addEventListener("submit",function(e){

        e.preventDefault();

        const email=document.getElementById("email").value.trim();

        const password=document.getElementById("password").value.trim();

        if(email==="" || password===""){

            showToast("Please fill all fields");

            return;

        }

        localStorage.setItem("isLoggedIn","true");

        localStorage.setItem("userEmail",email);

        showToast("Login Successful");

        setTimeout(()=>{

            window.location.href="index.html";

        },1200);

    });

}

/* ==============================
   REGISTER
============================== */

function register(){

    const form=document.getElementById("registerForm");

    if(!form) return;

    form.addEventListener("submit",function(e){

        e.preventDefault();

        const name=document.getElementById("name").value.trim();

        const email=document.getElementById("email").value.trim();

        const password=document.getElementById("password").value;

        const confirm=document.getElementById("confirmPassword").value;

        if(name===""||email===""||password===""){

            showToast("Please fill all fields");

            return;

        }

        if(password.length<8){

            showToast("Password must be at least 8 characters");

            return;

        }

        if(password!==confirm){

            showToast("Passwords do not match");

            return;

        }

        localStorage.setItem("isLoggedIn","true");

        localStorage.setItem("userName",name);

        localStorage.setItem("userEmail",email);

        showToast("Account Created");

        setTimeout(()=>{

            window.location.href="profile.html";

        },1200);

    });

}

/* ==============================
   LOGOUT
============================== */

function logout(){

    localStorage.removeItem("isLoggedIn");

    localStorage.removeItem("userName");

    localStorage.removeItem("userEmail");

    showToast("Logged Out");

    setTimeout(()=>{

        location.href="login.html";

    },1000);

}

/* ==============================
   CHECK LOGIN
============================== */

function isLoggedIn(){

    return localStorage.getItem("isLoggedIn")==="true";

}

/* ==============================
   Protect Pages
============================== */

const protectedPages=[

"profile.html",

"messages.html",

"saved.html",

"settings.html",

"notifications.html"

];

const page=window.location.pathname.split("/").pop();

if(protectedPages.includes(page) && !isLoggedIn()){

    location.href="login.html";

}

/* ==============================
   Password Strength
============================== */

const passwordInput=document.getElementById("password");

if(passwordInput){

    passwordInput.addEventListener("input",()=>{

        const value=passwordInput.value;

        let strength="Weak";

        if(value.length>=8) strength="Medium";

        if(value.length>=12) strength="Strong";

        console.log("Password:",strength);

    });

}
