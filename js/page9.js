// =======================
// Typed Message
// =======================
const message = `Asha ❤️  

You completed all the puzzles,  
answered the questions,  
and reached the final surprise.

I made this little journey just for you.

Because you are not just a friend.

You are someone very special.

Your smile makes everything better.

Thank you for always being there.

💖 Happy Surprise Day 💖`;

let i = 0;
function typeMessage() {
    if(i < message.length) {
        document.getElementById('typedMessage').innerHTML += message.charAt(i);
        i++;
        setTimeout(typeMessage, 50);
    }
}
window.onload = typeMessage;

// =======================
// Music
// =======================
function playMusic() {
    const music = document.getElementById('music');
    music.paused ? music.play() : music.pause();
}

// =======================
// Celebrate
// =======================
function celebrate() {
    alert("🎉 Hurray! Let's celebrate Asha! 🎉");
}

// =======================
// Restart
// =======================
function restart() {
    window.location.href ="index.html";
}

// =======================
// Drifting Hanging Photos (3D Overlap + Sway)
// =======================
const sections = document.querySelectorAll('.album-section .photo-container');

sections.forEach(container => {
    const photos = container.querySelectorAll('.photo');
    photos.forEach(photo => {
        // Random starting position
        photo.dataset.x = Math.random() * (container.offsetWidth - photo.offsetWidth);
        photo.dataset.y = Math.random() * (container.offsetHeight - photo.offsetHeight);

        // Random speed and direction
        photo.dataset.dx = (Math.random() - 0.5) * 0.5; // horizontal
        photo.dataset.dy = (Math.random() - 0.5) * 0.3; // vertical

        // Random z-index for overlap effect
        photo.style.zIndex = Math.floor(Math.random() * 10) + 1;

        // Apply initial transform
        photo.style.transform = `translate(${photo.dataset.x}px, ${photo.dataset.y}px) rotate(${Math.random()*6-3}deg)`;
    });
});

function animatePhotos() {
    sections.forEach(container => {
        const photos = container.querySelectorAll('.photo');
        photos.forEach(photo => {
            let x = parseFloat(photo.dataset.x);
            let y = parseFloat(photo.dataset.y);
            let dx = parseFloat(photo.dataset.dx);
            let dy = parseFloat(photo.dataset.dy);

            // Update position
            x += dx;
            y += dy;

            // Bounce inside container
            if(x < 0 || x > container.offsetWidth - photo.offsetWidth) photo.dataset.dx = -dx;
            if(y < 0 || y > container.offsetHeight - photo.offsetHeight) photo.dataset.dy = -dy;

            photo.dataset.x = x;
            photo.dataset.y = y;

            // Apply sway + 3D rotation effect
            const sway = Math.sin(Date.now()/1000 + x) * 3; // sway ±3deg
            const rotateX = Math.sin(Date.now()/2000 + y) * 2; // slight 3D tilt
            const rotateY = Math.cos(Date.now()/2000 + x) * 2;
            photo.style.transform = `translate(${x}px, ${y}px) rotate(${sway}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });

    requestAnimationFrame(animatePhotos);
}

animatePhotos();