let gameArea = document.getElementById("gameArea");
let scoreText = document.getElementById("score");

let score = 0;

function createHeart(){

let heart = document.createElement("div");

heart.className = "heart";
heart.innerHTML = "❤️";

heart.style.left = Math.random()*90 + "%";
heart.style.top = "-50px";

heart.onclick = function(){

// prevent double click
if(heart.classList.contains("hit")) return;

heart.classList.add("hit");

score++;
scoreText.innerText = score + " / 10";

// blast effect
heart.innerHTML = "💥";

setTimeout(()=>{
heart.remove();
},200);

if(score==5){
alert("Nice 😍 Asha you are doing great!");
}

if(score>=10){
alert("Amazing 💖 You unlocked the next surprise!");
document.getElementById("nextBox").style.display="block";
}

};

gameArea.appendChild(heart);

// auto remove if not clicked
setTimeout(()=>{
heart.remove();
},4000);

}

setInterval(createHeart,900);

function nextPage(){
window.location.href="page6.html";
}