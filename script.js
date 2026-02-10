document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const heartsContainer = document.querySelector('.hearts');

    // Function to create falling hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        const gridSize = 20; // Pixel art grid size
        const maxColumns = Math.floor(window.innerWidth / gridSize);
        const column = Math.floor(Math.random() * maxColumns);
        heart.style.left = column * gridSize + 'px';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Create hearts every 300ms
    setInterval(createHeart, 300);

    // Envelope click event
    envelope.addEventListener('click', function() {
        envelope.classList.toggle('open');
    });
});
