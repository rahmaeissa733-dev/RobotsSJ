
/* =========================
   🚀 Global Robot Project JS
   (يعمل على كل الصفحات)
========================= */

/* 🌙 Dark Mode تلقائي */
function toggleDarkMode(){
document.body.classList.toggle("dark-mode");
}

/* =========================
   ✨ تأثير ظهور عند التحميل
========================= */
window.addEventListener("load",()=>{
document.body.style.opacity="1";
document.body.style.transition="1s";
});

/* =========================
   📜 Scroll Animation بسيط
========================= */
window.addEventListener("scroll",()=>{
let cards=document.querySelectorAll("main, .card, section");

cards.forEach(el=>{
let pos=el.getBoundingClientRect().top;
if(pos < window.innerHeight - 100){
el.style.transform="translateY(0)";
el.style.opacity="1";
}
});
});

/* =========================
   🤖 رسائل تفاعلية عامة
========================= */
function robotMessage(){
let msgs=[
"🤖 أنا روبوت أتعلم باستمرار!",
"🧠 الذكاء الاصطناعي يجعلني أذكى!",
"⚙️ أقوم بتحليل البيانات الآن...",
"🚀 المستقبل مليء بالروبوتات!"
];

alert(msgs[Math.floor(Math.random()*msgs.length)]);
}

/* =========================
   📊 تحسين عرض الصفحات
========================= */
document.addEventListener("DOMContentLoaded",()=>{

// جعل العناصر تظهر تدريجي
document.querySelectorAll("main, .card").forEach(el=>{
el.style.opacity="0";
el.style.transform="translateY(20px)";
el.style.transition="0.6s";
});

setTimeout(()=>{
document.querySelectorAll("main, .card").forEach(el=>{
el.style.opacity="1";
el.style.transform="translateY(0)";
});
},300);

});

/* =========================
   🎮 تأثيرات أزرار عامة
========================= */
document.addEventListener("click",(e)=>{
if(e.target.tagName==="BUTTON"){
e.target.style.transform="scale(0.95)";
setTimeout(()=>{
e.target.style.transform="scale(1)";
},150);
}
});

/* =========================
   🧠 Console رسالة احترافية
========================= */
console.log("🤖 Robot Project Loaded Successfully!");
console.log("🧠 All systems working...");