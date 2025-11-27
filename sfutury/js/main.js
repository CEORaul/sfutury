document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // Score Counter Animation
    const scoreElement = document.getElementById('score-value');
    if (scoreElement) {
        const scores = [410, 615, 720];
        let currentIndex = 0;

        const animateScore = () => {
            if (currentIndex >= scores.length) return; // Stop after last score

            const targetScore = scores[currentIndex];
            let currentDisplay = parseInt(scoreElement.innerText);

            // Simple interpolation for smooth effect
            const duration = 1000; // 1 second per transition
            const startTime = performance.now();
            const startScore = currentDisplay;

            const step = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Ease out quart
                const ease = 1 - Math.pow(1 - progress, 4);

                scoreElement.innerText = Math.floor(startScore + (targetScore - startScore) * ease);

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    currentIndex++;
                    if (currentIndex < scores.length) {
                        setTimeout(animateScore, 500); // Pause between steps
                    }
                }
            };

            requestAnimationFrame(step);
        };

        // Start animation after a slight delay
        setTimeout(animateScore, 1000);
    }
});
