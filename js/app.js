/* =====================================
   EditHub India
   Global App Script
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initFAQ();
    initSmoothScroll();
    initTheme();
    initToast();
    highlightNav();

});

/* ==========================
   FAQ Accordion
========================== */

function initFAQ(){

    const questions=document.querySelectorAll(".faq-question");

    questions.forEach(question=>{

        question.addEventListener("click",()=>{

            const answer=question.nextElementSibling;

            answer.classList.toggle("show");

            question.classList.toggle("active");

        });

    });

}

/* ==========================
   Smooth Scroll
========================== */

function initSmoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

}

/* ==========================
   Theme Toggle
========================== */

function initTheme(){

    const toggle=document.getElementById("themeToggle");

    if(!toggle) return;

    const savedTheme=localStorage.getItem("theme");

    if(savedTheme==="light"){

        document.body.classList.add("light-theme");

        toggle.checked=false;

    }

    toggle.addEventListener("change",()=>{

        document.body.classList.toggle("light-theme");

        localStorage.setItem(

            "theme",

            document.body.classList.contains("light-theme")

            ? "light"

            : "dark"

        );

        showToast("Theme Updated");

    });

}

/* ==========================
   Toast Notification
========================== */

function showToast(message){

    let toast=document.querySelector(".toast");

    if(!toast){

        toast=document.createElement("div");

        toast.className="toast";

        document.body.appendChild(toast);

    }

    toast.innerText=message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

function initToast(){

    window.showToast=showToast;

}

/* ==========================
   Active Navigation
========================== */

function highlightNav(){

    const current=location.pathname.split("/").pop();

    document.querySelectorAll("nav a").forEach(link=>{

        const href=link.getAttribute("href");

        if(href===current){

            link.classList.add("active");

        }

    });

}

/* ==========================
   Card Animation
========================== */

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-in");

        }

    });

});

document.querySelectorAll(".card").forEach(card=>{

    observer.observe(card);

});
