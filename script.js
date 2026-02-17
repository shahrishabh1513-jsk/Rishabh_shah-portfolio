AOS.init({ 
  duration: 900, 
  once: false 
});

function showToast(msg) {
  const t = document.createElement('div');
  t.innerText = msg;
  t.style.position = 'fixed'; 
  t.style.bottom = '20px'; 
  t.style.right = '20px';
  t.style.background = '#0B2A4A'; 
  t.style.color = 'white'; 
  t.style.padding = '1rem 2rem';
  t.style.borderRadius = '60px'; 
  t.style.fontWeight = '500'; 
  t.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
  t.style.zIndex = '9999'; 
  t.style.opacity = '0'; 
  t.style.transition = 'opacity 0.2s';
  document.body.appendChild(t);
  
  setTimeout(() => t.style.opacity = '1', 20);
  setTimeout(() => { 
    t.style.opacity = '0'; 
    setTimeout(() => t.remove(), 300); 
  }, 2500);
}

// Theme Toggle Functionality - FIXED: Starts with light theme
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');

// Only apply dark mode if explicitly saved as dark
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
} else {
  // Ensure light theme is default (remove dark-mode if somehow present)
  document.body.classList.remove('dark-mode');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
  // Save light theme as default preference
  localStorage.setItem('theme', 'light');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Update icon based on current mode
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
    showToast('🌙 Dark mode enabled');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
    showToast('☀️ Light mode enabled');
  }
});

const projectsData = [
  { 
    title: 'HyFun Foods', 
    explanation: 'A full‑stack corporate website for HyFun Foods, featuring product listings, company info, and responsive design. Built with modern UI principles.',
    tags: ['JavaScript', 'HTML/CSS', 'LocalStorage', 'Node.js'],
    img: './img/1.png', 
    repo: 'https://github.com/shahrishabh1513-jsk/hyfun-foods-corporate-website', 
    demo: '#' 
  },
  { 
    title: 'SecurePass Pro', 
    explanation: 'Password generator with strength meter and copy‑to‑clipboard. Allows custom length and character types to help users create strong passwords.',
    tags: ['JavaScript', 'HTML/CSS', 'LocalStorage'],
    img: './img/2.png', 
    repo: 'https://github.com/shahrishabh1513-jsk/securepass-pro-password-generator', 
    demo: '#' 
  },
  { 
    title: 'Student Attendance', 
    explanation: 'Attendance tracking system with analytics dashboard, date‑wise records, and export functionality. Designed for classroom use.',
    tags: ['Html/Css/Javascript', 'SMS', 'LocalStorage', 'PHP'],
    img: './img/3.png', 
    repo: 'https://github.com/shahrishabh1513-jsk/student-attendance-system-Description-', 
    demo: '#' 
  },
  { 
    title: 'HyFun Hub', 
    explanation: 'Community dashboard for HyFun employees: announcements, event calendar, and internal communication.',
    tags: ['Html/Css', 'JavaScript', 'Product'],
    img: './img/4.png', 
    repo: 'https://github.com/shahrishabh1513-jsk/HyFun-Hub', 
    demo: '#' 
  },
  { 
    title: 'Apple ScrollMotion', 
    explanation: 'Recreation of Apple’s scroll‑driven animations using Framer Motion and Next.js. Smooth transitions and parallax effects.',
    tags: ['Next.js', 'Framer Motion', 'GSAP'],
    img: './img/5.png', 
    repo: 'https://github.com/shahrishabh1513-jsk/Apple-ScrollMotion-Experience', 
    demo: '#' 
  },
  { 
    title: 'House Price Analysis', 
    explanation: 'Data science project: predict house prices using regression models. Includes data cleaning, EDA, and feature importance.',
    tags: ['Python', 'Pandas', 'Data Analysis'],
    img: './img/6.png', 
    repo: 'https://github.com/shahrishabh1513-jsk/house-price-prediction-ds', 
    demo: '#' 
  }
];

const projCont = document.getElementById('projectsModernContainer');
if(projCont) {
  projectsData.forEach(p => {
    const card = document.createElement('div'); 
    card.className = 'project-card-ss';
    const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    card.innerHTML = `
      <img class="project-ss-img" src="${p.img}" alt="${p.title}">
      <div class="project-ss-title">${p.title}</div>
      <div class="project-explanation">${p.explanation}</div>
      <div class="project-tags">${tagsHtml}</div>
      <div class="project-actions">
        <a href="${p.repo}" class="btn-small" target="_blank"><i class="fab fa-github"></i> View Code</a>
        <a href="${p.demo}" class="btn-small btn-light" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
      </div>`;
    projCont.appendChild(card);
  });
}

const skills = ["Git","MongoDB","SQL","Python","Data Structures","C++","HTML","CSS","JavaScript","Node.js","Pandas","Google Tools","UI/UX Basics","PHP"];
const chipCont = document.getElementById('skillsChipContainer');
if(chipCont) {
  skills.forEach(s => { 
    const sp = document.createElement('span'); 
    sp.className='skill-chip'; 
    sp.innerText=s; 
    chipCont.appendChild(sp); 
  });
}

const certs = [
  { 
    issuer: 'COURSERA', 
    title: 'Android App Development', 
    date: 'Feb 18, 2025', 
    org: 'VANDERBILT UNIVERSITY', 
    link: './pdf/(C6) Android App Development.pdf',
    image: './img/7.jpg'
  },
  { 
    issuer: 'IBM', 
    title: 'IBM Full Stack Software Developer', 
    date: 'Jan 22, 2026', 
    org: 'IBM', 
    link: './pdf/(C_Final) IBM Full Stack Software.pdf',
    image: './img/1.jpg'
  },
  { 
    issuer: 'IBM', 
    title: 'IBM Generative AI Engineering', 
    date: 'Feb 13, 2026', 
    org: 'IBM', 
    link: './pdf/(Cfinal) IBM Generative AI Engineering.pdf',
    image: './img/2.jpg'
  },
  { 
    issuer: 'SKILLSHARE', 
    title: 'Canva Design Essentials', 
    date: 'Jan 20, 2026', 
    org: 'Skillshare', 
    link: './pdf/(CFILNAL) Canva Design Essentials.pdf',
    image: './img/5.jpg'
  },
  { 
    issuer: 'GOOGLE', 
    title: 'Google Data Analysis with Python', 
    date: 'Feb 6, 2026', 
    org: 'Google', 
    link: './pdf/(Cfinal) Google Data Analysis with.pdf',
    image: './img/6.jpg'
  },
  { 
    issuer: 'GOOGLE', 
    title: 'Google UX Design', 
    date: 'Jan 30, 2026', 
    org: 'Google', 
    link: './pdf/(Cfinal) Google UX Design.pdf',
    image: './img/4.jpg'
  },
  { 
    issuer: 'GOOGLE', 
    title: 'Getting started with Google Workspace', 
    date: 'Jan 18, 2026', 
    org: 'Google', 
    link: './pdf/(CFINAL) Getting started with.pdf',
    image: './img/3.jpg'
  },
  { 
    issuer: 'COURSERA', 
    title: 'Python for Everybody', 
    date: 'Dec 2025', 
    org: 'University of Michigan', 
    link: './pdf/(c1) Programming for Everybody (Getting Started with.pdf',
    image: './img/8.jpg'
  }
];

const certContainer = document.getElementById('certScrollContainer');
if(certContainer) {
  certs.forEach((c) => {
    const cert = document.createElement('div'); 
    cert.className = 'cert-card-ss';
    cert.innerHTML = `
      <div class="cert-img">
        <img src="${c.image}" alt="${c.title}" loading="lazy">
      </div>
      <div class="cert-issuer">${c.issuer}</div>
      <div class="cert-title">${c.title}</div>
      <div style="font-weight:500; color:#2b5876;">${c.org}</div>
      <div class="cert-date">${c.date}</div>
      <a href="${c.link}" class="cert-view-btn" target="_blank">View Certificate</a>`;
    certContainer.appendChild(cert);
  });
}

document.getElementById('certScrollLeft')?.addEventListener('click', () => {
  document.getElementById('certScrollContainer').scrollBy({ left: -340, behavior: 'smooth' });
});

document.getElementById('certScrollRight')?.addEventListener('click', () => {
  document.getElementById('certScrollContainer').scrollBy({ left: 340, behavior: 'smooth' });
});

document.getElementById('emailSendForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('senderName').value;
  const senderEmail = document.getElementById('senderEmail').value;
  const subject = document.getElementById('emailSubject').value;
  const message = document.getElementById('emailMessage').value;
  const yourEmail = 'shahrishu1515@gmail.com';
  const emailBody = `Name: ${name}%0A%0AEmail: ${senderEmail}%0A%0AMessage:%0A${message}`;
  const mailtoLink = `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${emailBody}`;
  
  window.location.href = mailtoLink;
  showToast('📨 Opening your email client...');
  this.reset();
});

const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  const scrollPosition = window.scrollY + 150;

  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if(targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

document.getElementById('contactMeHome')?.addEventListener('click', (e) => { 
  e.preventDefault(); 
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); 
});

// Fixed resume download functionality
document.getElementById('downloadCvHome')?.addEventListener('click', function(e) {
  // The 'download' attribute in HTML will handle the actual download
  // This just shows the toast notification
  showToast('📄 Downloading CV...');
});

document.getElementById('learnMoreAbout')?.addEventListener('click', (e) => { 
  e.preventDefault(); 
  showToast('✨ Rishabh · full‑stack dev'); 
});

// Handle hash links smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});