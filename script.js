document.addEventListener('DOMContentLoaded', function () {
    // Function to create a heart element
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.getElementById('board').appendChild(heart);

        // Set random initial position
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        heart.style.left = initialX + 'px';
        heart.style.top = initialY + 'px';

        // Apply the animation
        heart.style.animation = 'floatHeart 4s infinite linear';

        // Remove the heart after the animation is complete
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    // Function to create hearts periodically
    function createHeartsPeriodically() {
        setInterval(createHeart, 1000); // Create a heart every 2 seconds
    }

    // Call the function to create hearts periodically
    createHeartsPeriodically();
});