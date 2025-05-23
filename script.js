
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});


const skills = [
    { name: 'HTML', level: 4, category: 'frontend' },
    { name: 'CSS', level: 4, category: 'frontend' },
    { name: 'JavaScript', level: 4, category: 'frontend' },
    { name: 'Python', level: 3, category: 'language' },
    { name: 'C', level: 3, category: 'language' },
    { name: 'Network Security', level: 2, category: 'security' },
    { name: 'Vulnerability Assessment', level: 2, category: 'security' }
];

const skillsGrid = document.getElementById('skills-grid');
const skillFilters = document.querySelectorAll('.skill-filter');

function createSkillCard(skill) {
    return `
        <div class="skill-card" data-category="${skill.category}">
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-level-fill" style="width: ${skill.level * 20}%"></div>
            </div>
        </div>
    `;
}

function filterSkills(category) {
    const cards = skillsGrid.querySelectorAll('.skill-card');
    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


skillsGrid.innerHTML = skills.map(createSkillCard).join('');


skillFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        skillFilters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        filterSkills(filter.dataset.filter);
    });
});


const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
  
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});


document.getElementById('current-year').textContent = new Date().getFullYear();
