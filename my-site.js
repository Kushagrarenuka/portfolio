console.log("JS loaded successfully");

document.addEventListener('DOMContentLoaded', function () {

    // ===== AOS scroll animations =====
    if (typeof AOS !== 'undefined') {
        AOS.init({
            offset: 100,
            delay: 1,
            duration: 2000,
        });
    }

    // ===== Typed.js typing animation =====
    if (typeof Typed !== 'undefined') {
        new Typed('.multiple-text', {
            strings: ['AI/ML Engineer!', 'Data Scientist!', 'LLM Engineer!', 'ML Engineer!'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    // ===== Mobile nav toggle (vanilla JS, no jQuery needed) =====
    const navToggle = document.getElementById('navtoggle');
    const navBar = document.querySelector('.nav-bar');
    if (navToggle && navBar) {
        const toggleMenu = () => {
            navToggle.classList.toggle('fa-xmark');
            navBar.classList.toggle('show');
        };
        navToggle.addEventListener('click', toggleMenu);
        navBar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    }

    // ===== Contact form (Formspree AJAX) =====
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const form = e.target;
            const submitBtn = form.querySelector('input[type="submit"]');
            const originalValue = submitBtn.value;
            submitBtn.value = 'Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    form.reset();
                    document.getElementById('thanks-modal').classList.add('show');
                } else {
                    alert('Oops! Something went wrong. Please try again.');
                }
            } catch (error) {
                alert('Oops! Something went wrong. Please try again.');
            } finally {
                submitBtn.value = originalValue;
                submitBtn.disabled = false;
            }
        });
    }

    // ===== Thank-you modal close handlers =====
    const modal = document.getElementById('thanks-modal');
    const closeBtn = document.getElementById('thanks-close-btn');
    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.remove('show'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.remove('show');
        });
    }

});

// ===== Crisp Chat widget =====
window.$crisp = [];
window.CRISP_WEBSITE_ID = "cddce4c9-9d38-4d66-9c12-1736b5a3d005";
(function () {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();