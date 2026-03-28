// Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 50) {
                if (currentScroll > lastScroll) {
                    // Scrolling Down
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    // Scrolling Up
                    navbar.style.transform = 'translateY(0)';
                }
            }
            lastScroll = currentScroll;
            ticking = false;
        });
        ticking = true;
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: Stop observing once visible to run only once
            observer.unobserve(entry.target);

            // Count Up Animation trigger
            const counters = entry.target.querySelectorAll('.count-up');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const inc = target / 40; // speed

                const updateCount = () => {
                    count += inc;
                    if (count < target) {
                        counter.innerText = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.anim-fade-up, .anim-stagger, .anim-slide-right, .anim-scale').forEach(el => {
    observer.observe(el);
});

// Accordion Logic
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('i');

    content.classList.toggle('open');
    if (content.classList.contains('open')) {
        icon.style.transform = 'rotate(45deg)';
        icon.style.color = '#3B82F6'; // Primary color
    } else {
        icon.style.transform = 'rotate(0deg)';
        icon.style.color = '#94A3B8'; // Secondary color
    }
}

// Desktop Phase Dropdown Toggle (generic for all phases)
function togglePhaseDropdown(headerRow) {
    const dropdownRow = headerRow.nextElementSibling;
    if (!dropdownRow || !dropdownRow.classList.contains('phase-dropdown-content')) return;
    const dropdownInner = dropdownRow.querySelector('.phase-dropdown-inner');
    const chevron = headerRow.querySelector('.phase-chevron');
    if (!dropdownInner) return;

    const isOpen = dropdownRow.style.display !== 'none';
    if (isOpen) {
        dropdownInner.style.maxHeight = '0';
        dropdownInner.style.opacity = '0';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
        setTimeout(() => { dropdownRow.style.display = 'none'; }, 300);
    } else {
        dropdownRow.style.display = '';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
        dropdownInner.offsetHeight;
        dropdownInner.style.maxHeight = '200px';
        dropdownInner.style.opacity = '1';
    }
    lucide.createIcons();
}

// Mobile Phase Dropdown Toggle (generic for all phases)
function toggleMobilePhaseDropdown(trigger) {
    const dropdown = trigger.nextElementSibling;
    const chevron = trigger.querySelector('.phase-mobile-chevron');
    if (!dropdown) return;

    const isOpen = dropdown.style.maxHeight !== '0px';
    if (isOpen) {
        dropdown.style.maxHeight = '0px';
        dropdown.style.opacity = '0';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
    } else {
        dropdown.style.maxHeight = '200px';
        dropdown.style.opacity = '1';
        if (chevron) chevron.style.transform = 'rotate(180deg)';
    }
    lucide.createIcons();
}

// Cookie Banner
function initCookieBanner() {
    const consent = localStorage.getItem('zappy_cookie_consent');
    if (!consent) {
        setTimeout(() => {
            const banner = document.getElementById('cookie-banner');
            if (banner) {
                banner.classList.remove('translate-y-full');
                banner.classList.add('translate-y-0');
                lucide.createIcons();
            }
        }, 1500);
    }
}

function acceptCookies() {
    localStorage.setItem('zappy_cookie_consent', 'accepted');
    hideCookieBanner();
}

function rejectCookies() {
    localStorage.setItem('zappy_cookie_consent', 'rejected');
    hideCookieBanner();
}

function hideCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.classList.remove('translate-y-0');
        banner.classList.add('translate-y-full');
    }
}

document.addEventListener('DOMContentLoaded', initCookieBanner);

// Smooth Scroll to Section with Offset
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const navHeight = document.getElementById('navbar').offsetHeight || 80;
    const sectionTop = section.offsetTop - navHeight;

    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });
}


// Pricing Toggle Logic
function togglePricing(type) {
    const bg = document.getElementById('pricing-toggle-bg');
    const btnNew = document.getElementById('btn-pricing-new');
    const btnExisting = document.getElementById('btn-pricing-existing');
    const contentNew = document.getElementById('pricing-new-web');
    const contentExisting = document.getElementById('pricing-existing-web');

    if (!btnNew || !btnExisting) return; // Safety check

    if (type === 'new') {
        // Update Toggle Switch
        if (bg) bg.style.transform = 'translateX(0)';

        // Update Text Colors
        btnNew.classList.remove('text-gray-400');
        btnNew.classList.add('text-white');
        btnExisting.classList.remove('text-white');
        btnExisting.classList.add('text-gray-400');

        // Show New Web Content
        if (contentNew) contentNew.classList.remove('hidden');
        if (contentExisting) contentExisting.classList.add('hidden');

        // Refresh icons just in case
        setTimeout(() => lucide.createIcons(), 50);
    } else {
        // Update Toggle Switch
        if (bg) bg.style.transform = 'translateX(100%)';

        // Update Text Colors
        btnNew.classList.remove('text-white');
        btnNew.classList.add('text-gray-400');
        btnExisting.classList.remove('text-gray-400');
        btnExisting.classList.add('text-white');

        // Show Existing Web Content
        if (contentNew) contentNew.classList.add('hidden');
        if (contentExisting) contentExisting.classList.remove('hidden');

        // Refresh icons just in case
        setTimeout(() => lucide.createIcons(), 50);
    }
}

// Ensure pricing toggle buttons work everywhere (CSP-safe, no inline onclick)
document.addEventListener('DOMContentLoaded', function () {
    const btnNew = document.getElementById('btn-pricing-new');
    const btnExisting = document.getElementById('btn-pricing-existing');
    let touchHandled = false; // Prevents double-firing from touchend + click

    function handleToggle(type, e) {
        if (e.type === 'touchend') {
            e.preventDefault();
            touchHandled = true;
            togglePricing(type);
            setTimeout(function () { touchHandled = false; }, 300);
        } else if (e.type === 'click' && !touchHandled) {
            e.preventDefault();
            togglePricing(type);
        }
    }

    if (btnNew) {
        btnNew.addEventListener('click', function (e) { handleToggle('new', e); });
        btnNew.addEventListener('touchend', function (e) { handleToggle('new', e); }, { passive: false });
    }
    if (btnExisting) {
        btnExisting.addEventListener('click', function (e) { handleToggle('existing', e); });
        btnExisting.addEventListener('touchend', function (e) { handleToggle('existing', e); }, { passive: false });
    }
});


