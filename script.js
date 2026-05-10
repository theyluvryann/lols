const pages=document.querySelectorAll(".page");
let current=0;

function showPage(i){
pages.forEach(p=>p.classList.remove("active"));
pages[i].classList.add("active");
current=i;
typeWriter();
}

document.querySelectorAll(".next").forEach(btn=>{
btn.onclick=()=>showPage(current+1);
});

document.querySelectorAll(".prev").forEach(btn=>{
btn.onclick=()=>showPage(current-1);
});

/* TYPEWRITER */
function typeWriter(){
const el=document.querySelector(".page.active .typing");
if(!el)return;
el.textContent="";
let text=el.dataset.text;
let i=0;
let interval=setInterval(()=>{
el.textContent+=text[i];
i++;
if(i>=text.length)clearInterval(interval);
},40);
}

/* GIFT CLICK FIX */
const gift=document.getElementById("gift");
const lid=document.getElementById("lid");

gift.addEventListener("click",function(){

gift.classList.add("shake");

setTimeout(()=>{
gift.classList.remove("shake");
lid.style.transform="translateY(-60vh) rotate(30deg)";
burstHearts();

setTimeout(()=>{
showPage(1);
},3000);

},1000);

});

/* HEART BURST */
function burstHearts(){
for(let i=0;i<150;i++){
let heart=document.createElement("div");
heart.classList.add("burst");
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"vw";
document.body.appendChild(heart);
setTimeout(()=>heart.remove(),3000);
}
}

/* FINAL HEART */
const bigHeart=document.getElementById("big-heart");
bigHeart.addEventListener("click",()=>{
bigHeart.classList.add("explode");
setTimeout(()=>{
bigHeart.classList.remove("explode");
},1000);
});
