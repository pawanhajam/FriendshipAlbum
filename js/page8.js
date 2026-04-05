function checkAnswer(){

let q1 = document.querySelector('input[name="q1"]:checked')
let q2 = document.querySelector('input[name="q2"]:checked')
let q3 = document.querySelector('input[name="q3"]:checked')

if(!q1 || !q2 || !q3){

alert("Please answer all questions 😊")
return

}

/* correct answers */

if(q1.value=="pizza" && q2.value=="black" && q3.value=="rohan"){

alert("Perfect 😍 You know your best friend very well!")

document.getElementById("secretBox").style.display="block"

}

else{

alert("Oops 😅 Try again!")

}

}

function nextPage(){

window.location.href="page9.html"

}