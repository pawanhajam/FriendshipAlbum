let pieces = document.querySelectorAll(".piece")
let successBox = document.getElementById("successBox")

let clickCount = 0

pieces.forEach(piece => {

piece.onclick = function(){

piece.style.opacity="0"

clickCount++

if(clickCount == 4){

setTimeout(()=>{
document.getElementById("puzzleBoard").style.display="none"
successBox.style.display="block"
alert("Memory unlocked 💖")
},500)

}

}

})

function nextPage(){

window.location.href="page7.html"

}