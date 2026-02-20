const darkModeBtn = document.querySelector('.btn');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

const logInBtn = document.querySelector('.log');
logInBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

const loginModal = document.getElementById('login-modal');
const loginCloseBtn = document.getElementById('login-close-btn');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const signupLink = document.getElementById('signup-link');

const signupModal = document.getElementById('signup-modal');
const signupCloseBtn = document.getElementById('signup-close-btn');
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');
const loginLink = document.getElementById('login-link');

loginCloseBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

signupCloseBtn.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        loginMessage.textContent = 'Login successful! (Demo only)';
        loginMessage.style.color = 'green';
        setTimeout(() => {
            loginModal.style.display = 'none';
            loginMessage.textContent = '';
            loginForm.reset();
        }, 1500);
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        signupMessage.textContent = 'Passwords do not match!';
        signupMessage.style.color = 'red';
        return;
    }
    
    if (username && email && password) {
        signupMessage.textContent = 'Account created successfully! (Demo only)';
        signupMessage.style.color = 'green';
        setTimeout(() => {
            signupModal.style.display = 'none';
            signupMessage.textContent = '';
            signupForm.reset();
            loginModal.style.display = 'block';
        }, 1500);
    }
});

const modal = document.getElementById('portfolio-modal');
const closeBtn = document.getElementById('portfolio-close-btn');
const modalName = document.getElementById('modal-name');
const modalRole = document.getElementById('modal-role');
const modalBio = document.getElementById('modal-bio');
const modalPortfolio = document.getElementById('modal-portfolio');

const infoModal = document.getElementById('info-modal');
const infoCloseBtn = document.getElementById('info-close-btn');
const infoModalTitle = document.getElementById('info-modal-title');
const infoModalContent = document.getElementById('info-modal-content');

const courseAnimation = document.getElementById('course-animation');

function showPortfolio(memberElement) {
    const name = memberElement.querySelector('h2').textContent;
    const role = memberElement.querySelector('p strong').nextSibling.textContent.trim();
    const bio = memberElement.querySelectorAll('p')[1].textContent.replace('Short bio: ', '');

    modalName.textContent = name;
    modalRole.textContent = `Role: ${role}`;
    modalBio.textContent = bio;

    const portfolioItems = [
        'Project 1: Developed a responsive web app using HTML/CSS/JS.',
        'Project 2: Led a team in designing user interfaces for mobile apps.',
        'Skills: Proficient in frontend technologies, UI/UX best practices.',
        'Achievements: Contributed to open-source projects and won design awards.'
    ];
    modalPortfolio.innerHTML = portfolioItems.map(item => `<li>${item}</li>`).join('');

    modal.style.display = 'block';
}

function showInfoModal(title, content) {
    infoModalTitle.textContent = title;
    infoModalContent.innerHTML = content;
    infoModal.style.display = 'block';
}

const portfolioLinks = document.querySelectorAll('.member a[href="#"]');
portfolioLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const memberElement = link.closest('.member');
        showPortfolio(memberElement);
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

infoCloseBtn.addEventListener('click', () => {
    infoModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
    if (e.target === infoModal) {
        infoModal.style.display = 'none';
    }
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#home') {
            e.preventDefault();
            window.location.reload();
        } else if (href === '#about') {
            e.preventDefault();
            const aboutContent = `
                <p>Welcome to our group portfolio! We are a team of passionate developers and designers from ICCT Colleges.</p>
                <p>Our mission is to create innovative web solutions and collaborate on exciting projects.</p>
                <ul>
                    <li>Activity for CPPROG3</li>
                    <li>Specializing in full-stack development</li>
                    <li>Committed to excellence and continuous learning</li>
                </ul>
            `;
            showInfoModal('About Us', aboutContent);
        } else if (href === '#course') {
            e.preventDefault();
            courseAnimation.classList.remove('hidden');
            setTimeout(() => {
                courseAnimation.classList.add('show');
            }, 10);
            setTimeout(() => {
                courseAnimation.classList.remove('show');
                setTimeout(() => {
                    courseAnimation.classList.add('hidden');
                }, 1000);
            }, 3000);
        } else if (href === '#school') {
            e.preventDefault();
            window.open('https://icct.edu.ph/', '_blank');
        } else if (href === '#contact') {
            e.preventDefault();
            window.open('https://chrisphilipandangel.my.canva.site/itconsultants?fbclid=IwY2xjawP_WkhleHRuA2FlbQIxMABicmlkETFjM2RjangxU3hienhlU0N5c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpdBDOg1h8lxScX6SDn-aMB3C5QIvZNXqgwYuyTzS49IVnFhnH5OZv2nFuKj_aem_VbTzMhM9kBuyNuvKWVuLmw', '_blank');
        } else if (href === '#signin') {
            e.preventDefault();
            loginModal.style.display = 'block';
        }
    });
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const btn = document.querySelector('.btn');
    const log = document.querySelector('.log');
    if (window.scrollY > 100) { 
        nav.classList.add('sticky-nav');
        btn.classList.add('sticky-nav');
        log.classList.add('sticky-nav');
    } else {
        nav.classList.remove('sticky-nav');
        btn.classList.remove('sticky-nav');
        log.classList.remove('sticky-nav');
    }
});
