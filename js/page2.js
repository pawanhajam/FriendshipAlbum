let questions = [

{
question:"Tumhari best friend ka favourite colour kya hai?",
options:["Black","Pink","Blue","White"],
answer:"Black"
},

{
question:"Best friend ko sabse zyada kya pasand hai?",
options:["Food","Shopping","Travel","Sleep"],
answer:"Travel"
},

{
question:"Best friend ka favourite time kya hai?",
options:["Morning","Night","Afternoon","Evening"],
answer:"Night"
},

{
question:"Best friend ko tumhare saath kya karna pasand hai?",
options:["Talking","Watching reels","Shopping","Sleeping"],
answer:"Talking"
}

];

let current = 0;

function loadQuestion(){

let q = questions[current];

document.getElementById("question").innerText = q.question;

document.getElementById("progress").innerText =
"Question " + (current+1) + " / " + questions.length;

let optionsHTML = "";

q.options.forEach(option => {

optionsHTML += `<button class="option" onclick="checkAnswer('${option}')">${option}</button>`;

});

document.getElementById("options").innerHTML = optionsHTML;

}

function checkAnswer(selected){

if(selected === questions[current].answer){

current++;

if(current < questions.length){

loadQuestion();

}

else{

alert("Perfect! Tum sach me best friend ho 💖");

window.location.href = "page3.html";

}

}
else{

alert("Oops! Galat answer 😅 Try again");

}

}

loadQuestion();