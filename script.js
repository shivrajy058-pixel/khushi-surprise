function showSection(id){

document.querySelectorAll("section").forEach(section=>{
section.classList.add("hidden");
});

document.getElementById(id).classList.remove("hidden");

}

function awesomeAnswer(){

document.getElementById("awesomeResult").innerHTML =
"Of course 😂";

setTimeout(()=>{
showSection("continueSection");
},500);

}

const noBtn=document.getElementById("noBtn");

if(noBtn){

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*300-150;
const y=Math.random()*200-100;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

});

}

function openGift(){

document.getElementById("giftBox").innerHTML="💖";

document.getElementById("giftText").innerHTML=
"You unlocked the surprise ✨";

setTimeout(()=>{
showSection("messageSection");
},700);

}

const boxes=document.querySelectorAll(".box");

const winner=Math.floor(Math.random()*6);

boxes.forEach((box,index)=>{

box.addEventListener("click",()=>{

if(index===winner){

box.innerHTML="🎁";

document.getElementById("gameResult").innerHTML=
"You Found The Gift 🎉";

setTimeout(()=>{

showSection("finalSection");

startTyping();

},800);

}else{

box.innerHTML="❌";

}

});

});

const message=`Dear Khushi ❤️

This website was made for one reason...

To make you smile 😊

I hope you enjoyed every little surprise.

Thank you for spending a few minutes here.

You are truly awesome ✨

Have a beautiful day 💖`;

function startTyping(){

const target=
document.getElementById("typewriter");

target.innerHTML="";

let i=0;

function type(){

if(i<message.length){

target.innerHTML+=message.charAt(i);

i++;

setTimeout(type,20);

}

}

type();

}
