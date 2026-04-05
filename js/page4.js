// Show message on photo click
const cards = document.querySelectorAll('.photo-card');
const messageText = document.getElementById('messageText');

cards.forEach(card => {
    card.addEventListener('click', () => {
        messageText.textContent = card.dataset.message;
        triggerConfetti();
    });
});

// Go to next surprise
function goToNext() {
    window.location.href = "page5.html";
}

// Simple confetti effect
function triggerConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for(let i=0; i<50; i++){
        let div = document.createElement('div');
        div.style.position = "absolute";
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.background = `hsl(${Math.random()*360},100%,50%)`;
        div.style.left = Math.random()*100 + "%";
        div.style.top = "0px";
        div.style.borderRadius = "50%";
        div.style.pointerEvents = "none";
        div.style.zIndex = "10";
        div.style.animation = `fall 2s linear forwards`;
        confettiContainer.appendChild(div);
    }
}

// Add keyframes dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% {transform: translateY(0px);}
    100% {transform: translateY(500px) rotate(360deg); opacity: 0;}
}`;
document.head.appendChild(style);