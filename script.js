// Smooth Scroll på interna länkar 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Fade-in Animation när man scrollar
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));

document.addEventListener("mousemove", e => {
    const x = `${e.clientX}px`;
    const y = `${e.clientY}px`;
    document.body.style.setProperty('--x', x);
    document.body.style.setProperty('--y', y);
});


