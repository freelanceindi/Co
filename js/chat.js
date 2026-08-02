/* =====================================
   EditHub India
   Chat System
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    initChat();

});

/* ==========================
   Initialize Chat
========================== */

function initChat(){

    const input=document.querySelector(".chat-input input");
    const sendBtn=document.querySelector(".chat-input .btn-primary");
    const messages=document.querySelector(".chat-messages");

    if(!input || !sendBtn || !messages) return;

    loadMessages(messages);

    sendBtn.addEventListener("click",sendMessage);

    input.addEventListener("keypress",e=>{

        if(e.key==="Enter"){

            e.preventDefault();

            sendMessage();

        }

    });

    function sendMessage(){

        const text=input.value.trim();

        if(text==="") return;

        addMessage(text,"sent");

        input.value="";

        saveMessages();

        showTyping();

    }

}

/* ==========================
   Add Message
========================== */

function addMessage(text,type){

    const messages=document.querySelector(".chat-messages");

    const bubble=document.createElement("div");

    bubble.className=`message ${type}`;

    bubble.innerText=text;

    messages.appendChild(bubble);

    messages.scrollTop=messages.scrollHeight;

}

/* ==========================
   Fake Reply
========================== */

function showTyping(){

    const messages=document.querySelector(".chat-messages");

    const typing=document.createElement("div");

    typing.className="typing";

    typing.innerText="Typing...";

    messages.appendChild(typing);

    messages.scrollTop=messages.scrollHeight;

    setTimeout(()=>{

        typing.remove();

        const replies=[

            "Thanks! I'll check it.",
            "Sure 👍",
            "Please share the footage.",
            "I'll send a quote shortly.",
            "Let's start tomorrow.",
            "Sounds great!",
            "Can you send more details?"

        ];

        const reply=replies[
            Math.floor(Math.random()*replies.length)
        ];

        addMessage(reply,"received");

        saveMessages();

    },1800);

}

/* ==========================
   Conversation Switch
========================== */

document.querySelectorAll(".conversation").forEach(item=>{

    item.addEventListener("click",()=>{

        document.querySelectorAll(".conversation")
        .forEach(c=>c.classList.remove("active"));

        item.classList.add("active");

        clearMessages();

        addMessage("Hello 👋","received");

        addMessage("How can I help you?","received");

        saveMessages();

    });

});

/* ==========================
   Save Chat
========================== */

function saveMessages(){

    const data=[];

    document.querySelectorAll(".chat-messages .message")
    .forEach(msg=>{

        data.push({

            text:msg.innerText,

            type:msg.classList.contains("sent")
            ?"sent"
            :"received"

        });

    });

    localStorage.setItem(

        "chatMessages",

        JSON.stringify(data)

    );

}

/* ==========================
   Load Chat
========================== */

function loadMessages(container){

    const saved=JSON.parse(

        localStorage.getItem("chatMessages")

    );

    if(!saved) return;

    container.innerHTML="";

    saved.forEach(msg=>{

        addMessage(msg.text,msg.type);

    });

}

/* ==========================
   Clear Chat
========================== */

function clearMessages(){

    document.querySelector(".chat-messages").innerHTML="";

}
