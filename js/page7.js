let emojis = ["❤️","😍","💖","😘","❤️","😍","💖","😘"]

emojis.sort(()=>0.5-Math.random())

let board = document.getElementById("gameBoard")

let firstCard = null
let secondCard = null
let lock = false
let match = 0

emojis.forEach(emoji=>{

let card = document.createElement("div")

card.classList.add("card")

card.dataset.emoji = emoji

card.innerHTML = "?"

card.onclick = function(){

if(lock) return

if(card.innerHTML != "?") return

card.innerHTML = emoji
card.classList.add("open")

if(!firstCard){

firstCard = card

}else{

secondCard = card
lock = true

if(firstCard.dataset.emoji == secondCard.dataset.emoji){

match++

firstCard = null
secondCard = null
lock = false

if(match == 4){

document.getElementById("winBox").style.display="block"

}

}else{

setTimeout(()=>{

firstCard.innerHTML="?"
secondCard.innerHTML="?"

firstCard.classList.remove("open")
secondCard.classList.remove("open")

firstCard=null
secondCard=null
lock=false

},800)

}

}

}

board.appendChild(card)

})

function nextPage(){

window.location.href="page8.html"

}