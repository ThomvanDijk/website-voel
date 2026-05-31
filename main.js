document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
 
    function toggleMenu() {
        navLinks.classList.toggle('is-open');
        navToggle.classList.toggle('is-open');
    }

    window.addEventListener('scroll', () => {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
    });

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
            });
        });

        document.addEventListener('click', (e) => {
            const isClickInsideMenu = navLinks.contains(e.target);
            const isClickToggle = navToggle && navToggle.contains(e.target);

            if (!isClickInsideMenu && !isClickToggle) {
                navLinks.classList.remove('is-open');
            }
        });
    }
});