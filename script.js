// Smooth scroll for anchor links (safeguard for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements we want to animate
const animatedElements = document.querySelectorAll('.project-card, .pricing-card, .stat-item, .section-header');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Class to add for visible state
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    </style>
`);

// Logo letter cursor interaction
const logoLetters = document.querySelectorAll('.logo span');
const logo = document.querySelector('.logo');

if (logo && logoLetters.length > 0) {
    logo.addEventListener('mousemove', (e) => {
        const logoRect = logo.getBoundingClientRect();

        logoLetters.forEach((letter) => {
            const letterRect = letter.getBoundingClientRect();
            const letterCenterX = letterRect.left + letterRect.width / 2;
            const letterCenterY = letterRect.top + letterRect.height / 2;

            // Calculate distance from cursor to letter center
            const deltaX = e.clientX - letterCenterX;
            const deltaY = e.clientY - letterCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Repulsion effect - letters move away from cursor
            const maxDistance = 100; // Maximum distance for effect
            const strength = 20; // Strength of repulsion

            if (distance < maxDistance) {
                const force = (1 - distance / maxDistance) * strength;
                const angle = Math.atan2(deltaY, deltaX);
                const pushX = -Math.cos(angle) * force;
                const pushY = -Math.sin(angle) * force;

                letter.style.transform = `translate(${pushX}px, ${pushY}px) rotate(${pushX * 0.5}deg)`;
            } else {
                letter.style.transform = '';
            }
        });
    });

    logo.addEventListener('mouseleave', () => {
        logoLetters.forEach((letter) => {
            letter.style.transform = '';
        });
    });
}

console.log("Kareem Portfolio Loaded");
