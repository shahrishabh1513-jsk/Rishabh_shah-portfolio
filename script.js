// Initialize AOS with enhanced settings
AOS.init({
  duration: 1000,
  once: false,
  offset: 80,
  easing: 'ease-in-out-quart',
  mirror: true,
  delay: 0,
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  throttleDelay: 99,
  debounceDelay: 50
});

// Toast notification
function showToast(msg) {
  const toast = document.createElement('div');
  toast.innerText = msg;
  toast.style.position = 'fixed';
  toast.style.bottom = '80px';
  toast.style.left = '30px';
  toast.style.background = 'linear-gradient(135deg, #6EAC4D, #63B9DD)';
  toast.style.color = 'white';
  toast.style.padding = '1rem 2rem';
  toast.style.borderRadius = '50px';
  toast.style.fontWeight = '500';
  toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
  toast.style.zIndex = '9999';
  toast.style.opacity = '0';
  toast.style.transition = 'all 0.3s ease';
  toast.style.fontSize = '0.95rem';
  toast.style.transform = 'translateY(20px)';
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 20);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    if (mobileMenuBtn) {
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    }
  });
});

// ===== PROJECTS DATA =====
const projectsData = [
  {
    title: 'HyFun Foods',
    description: 'Full‑stack corporate website with product listings, company info, and responsive design.',
    tags: ['JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB'],
    image: './img/1.png',
    repo: 'https://github.com/shahrishabh1513-jsk/hyfun-foods-corporate-website',
    demo: '#',
    large: true
  },
  {
    title: 'SecurePass Pro',
    description: 'Password generator with strength meter and custom options for strong passwords.',
    tags: ['JavaScript', 'HTML/CSS', 'LocalStorage'],
    image: './img/2.png',
    repo: 'https://github.com/shahrishabh1513-jsk/securepass-pro-password-generator',
    demo: '#',
    large: false
  },
  {
    title: 'Student Attendance',
    description: 'Attendance tracking with analytics dashboard and export functionality.',
    tags: ['PHP', 'JavaScript', 'MySQL', 'Chart.js'],
    image: './img/3.png',
    repo: 'https://github.com/shahrishabh1513-jsk/student-attendance-system-Description-',
    demo: '#',
    large: false
  },
  {
    title: 'Apple ScrollMotion',
    description: 'Recreation of Apple’s scroll‑driven animations using modern tools.',
    tags: ['Next.js', 'Framer Motion', 'GSAP', 'Tailwind'],
    image: './img/5.png',
    repo: 'https://github.com/shahrishabh1513-jsk/Apple-ScrollMotion-Experience',
    demo: '#',
    large: false
  }
];

// ===== SKILLS DATA =====
const skillsData = [
  { name: 'Git', icon: 'fa-brands fa-git-alt', level: 85 },
  { name: 'MongoDB', icon: 'fa-brands fa-envira', level: 75 },
  { name: 'SQL', icon: 'fa-solid fa-database', level: 80 },
  { name: 'Python', icon: 'fa-brands fa-python', level: 85 },
  { name: 'Data Structures', icon: 'fa-solid fa-diagram-project', level: 80 },
  { name: 'C++', icon: 'fa-solid fa-code', level: 75 },
  { name: 'HTML5', icon: 'fa-brands fa-html5', level: 95 },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', level: 90 },
  { name: 'JavaScript', icon: 'fa-brands fa-js', level: 88 },
  { name: 'Node.js', icon: 'fa-brands fa-node', level: 82 },
  { name: 'Pandas', icon: 'fa-solid fa-table', level: 70 },
  { name: 'Google Tools', icon: 'fa-brands fa-google', level: 75 },
  { name: 'UI/UX Basics', icon: 'fa-solid fa-paint-brush', level: 78 },
  { name: 'PHP', icon: 'fa-brands fa-php', level: 72 },
  { name: 'React', icon: 'fa-brands fa-react', level: 65 },
  { name: 'Express.js', icon: 'fa-solid fa-server', level: 70 }
];

// ===== CERTIFICATES DATA =====
const certificatesData = [
  {
    issuer: 'COURSERA',
    title: 'Android App Development',
    org: 'VANDERBILT UNIVERSITY',
    date: 'Feb 18, 2025',
    link: './pdf/(C6) Android App Development.pdf',
    image: './img/7.jpg',
    badge: 'coursera'
  },
  {
    issuer: 'IBM',
    title: 'IBM Full Stack Software Developer',
    org: 'IBM',
    date: 'Jan 22, 2026',
    link: './pdf/(C_Final) IBM Full Stack Software.pdf',
    image: './img/1.jpg',
    badge: 'ibm'
  },
  {
    issuer: 'IBM',
    title: 'IBM Generative AI Engineering',
    org: 'IBM',
    date: 'Feb 13, 2026',
    link: './pdf/(Cfinal) IBM Generative AI Engineering.pdf',
    image: './img/2.jpg',
    badge: 'ibm'
  },
  {
    issuer: 'GOOGLE',
    title: 'Google UX Design',
    org: 'Google',
    date: 'Jan 30, 2026',
    link: './pdf/(Cfinal) Google UX Design.pdf',
    image: './img/4.jpg',
    badge: 'google'
  },
  {
    issuer: 'AWS',
    title: 'AWS Cloud Security Foundations',
    org: 'Amazon Web Services',
    date: 'Feb 2026',
    link: './pdf/AWS Cloud Security Foundation.pdf',
    image: './img/AWS Cloud Security Foundation_page-0001.jpg',
    badge: 'aws'
  }
];

// ===== RENDER PROJECTS =====
const projectsContainer = document.getElementById('projectsContainer');
if (projectsContainer) {
  projectsContainer.innerHTML = '';
  projectsContainer.className = 'projects-showcase';
  
  projectsData.forEach((p, index) => {
    const card = document.createElement('div');
    card.className = `project-card-modern ${p.large ? 'large' : ''}`;
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 100);
    card.setAttribute('data-aos-duration', '800');
    
    const tagsHtml = p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
    
    card.innerHTML = `
      <div class="project-media">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="project-overlay">
          <a href="${p.repo}" target="_blank" title="View Code"><i class="fab fa-github"></i></a>
          <a href="${p.demo}" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
      <div class="project-info">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tech">
          ${tagsHtml}
        </div>
        <div class="project-links">
          <a href="${p.repo}" target="_blank" class="project-link github"><i class="fab fa-github"></i> Code</a>
          <a href="${p.demo}" target="_blank" class="project-link demo"><i class="fas fa-external-link-alt"></i> Demo</a>
        </div>
      </div>
    `;
    projectsContainer.appendChild(card);
  });
}

// ===== RENDER SKILLS =====
const skillsContainer = document.getElementById('skillsContainer');
if (skillsContainer) {
  skillsContainer.innerHTML = '';
  skillsContainer.className = 'skills-grid-center';
  
  skillsData.forEach((skill, index) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-aos', 'zoom-in');
    card.setAttribute('data-aos-delay', index * 50);
    card.setAttribute('data-aos-duration', '600');
    
    card.innerHTML = `
      <div class="skill-icon">
        <i class="${skill.icon}"></i>
      </div>
      <div class="skill-name">${skill.name}</div>
      <div class="skill-level">
        <div class="skill-progress" style="width: 0%"></div>
      </div>
    `;
    skillsContainer.appendChild(card);
  });
  
  // Animate skill bars after they're in view
  setTimeout(() => {
    document.querySelectorAll('.skill-card').forEach((card, index) => {
      setTimeout(() => {
        const progressBar = card.querySelector('.skill-progress');
        const level = skillsData[index].level;
        progressBar.style.width = level + '%';
      }, index * 100);
    });
  }, 500);
}

// ===== RENDER CERTIFICATES =====
const certContainer = document.getElementById('certificatesContainer');
if (certContainer) {
  certContainer.innerHTML = '';
  certContainer.className = 'certificates-grid';
  
  certificatesData.forEach((c, index) => {
    const cert = document.createElement('div');
    cert.className = 'cert-card-modern';
    cert.setAttribute('data-aos', 'fade-up');
    cert.setAttribute('data-aos-delay', index * 100);
    cert.setAttribute('data-aos-duration', '800');
    
    cert.innerHTML = `
      <div class="cert-card-media">
        <img src="${c.image}" alt="${c.title}" loading="lazy">
        <span class="cert-card-badge ${c.badge}">${c.issuer}</span>
      </div>
      <div class="cert-card-content">
        <h3 class="cert-card-title">${c.title}</h3>
        <div class="cert-card-org">${c.org}</div>
        <div class="cert-card-date">${c.date}</div>
        <a href="${c.link}" class="cert-card-link" target="_blank">
          View Certificate <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    `;
    certContainer.appendChild(cert);
  });
}

// ===== CERTIFICATE SCROLL BUTTONS =====
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');
const certGrid = document.getElementById('certificatesContainer');

if (certPrev && certNext && certGrid) {
  certPrev.addEventListener('click', () => {
    certGrid.scrollBy({ left: -350, behavior: 'smooth' });
  });

  certNext.addEventListener('click', () => {
    certGrid.scrollBy({ left: 350, behavior: 'smooth' });
  });
}

// ===== CONTACT FORM =====
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  const recipient = 'shahrishu1515@gmail.com';
  
  const body = `Name: ${name}%0A%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;
  
  window.location.href = mailto;
  showToast('📨 Opening email client...');
  this.reset();
});

// ===== ACTIVE NAVIGATION ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const scrollY = window.scrollY + 150;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);

// ===== SMOOTH SCROLL FOR NAVIGATION =====
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== HOME CONTACT BUTTON =====
document.getElementById('contactHomeBtn')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ===== DOWNLOAD CV TOAST =====
document.getElementById('downloadNavCv')?.addEventListener('click', () => {
  showToast('📄 Downloading CV...');
});

// ===== HANDLE ALL HASH LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// ===== PARALLAX EFFECT ON MOUSE MOVE =====
document.addEventListener('mousemove', (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  
  const bgElements = document.querySelectorAll('.animated-bg::before, .animated-bg::after');
  if (bgElements.length) {
    // Apply subtle parallax effect
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
      heroSection.style.backgroundPosition = `${moveX}px ${moveY}px`;
    }
  }
});

// ===== LAZY LOAD IMAGES =====
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.add('loaded');
      observer.unobserve(img);
    }
  });
}, { threshold: 0.1 });

images.forEach(img => imageObserver.observe(img));

// ===== SCROLL REVEAL ADDITIONAL EFFECTS =====
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroSection = document.querySelector('.hero-section');
  
  if (heroSection) {
    heroSection.style.opacity = 1 - scrollPosition / 800;
  }
});