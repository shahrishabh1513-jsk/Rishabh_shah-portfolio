// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== PROJECTS DATA ==========
    const projectsData = [
        {
            title: 'HyFun Foods',
            description: 'Full-stack corporate website with product listings, company info, and responsive design.',
            tags: ['JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB'],
            image: './img/1.png',
            repo: 'https://github.com/shahrishabh1513-jsk/hyfun-foods-corporate-website',
            demo: 'https://shahrishabh1513-jsk.github.io/hyfun-foods-corporate-website/',
            large: false
        },
        {
            title: 'Student Attendance',
            description: 'Attendance tracking system with analytics dashboard and export functionality.',
            tags: ['PHP', 'JavaScript', 'MySQL', 'Chart.js'],
            image: './img/2.png',
            repo: 'https://github.com/shahrishabh1513-jsk/student-attendance-system-Description-',
            demo: 'https://shahrishabh1513-jsk.github.io/student-attendance-system-Description-/',
            large: false
        },
        {
            title: 'HR Fashion',
            description: 'Fashion brand website with modern UI and product showcase.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: './img/3.png',
            repo: 'https://github.com/shahrishabh1513-jsk/HR-Atelier',
            demo: 'https://shahrishabh1513-jsk.github.io/HR-Atelier/',
            large: false
        },
        {
            title: 'Invoice Generator',
            description: 'Dynamic invoice generator with export and user-friendly interface.',
            tags: ['JavaScript', 'HTML/CSS'],
            image: './img/4.png',
            repo: 'https://github.com/shahrishabh1513-jsk/nova-invoice-generator',
            demo: 'https://shahrishabh1513-jsk.github.io/nova-invoice-generator/',
            large: false
        },
        {
            title: 'Caria',
            description: 'Modern web project with responsive design and interactive UI components.',
            tags: ['JavaScript', 'HTML/CSS'],
            image: './img/5.png',
            repo: 'https://github.com/shahrishabh1513-jsk/Caria',
            demo: 'https://shahrishabh1513-jsk.github.io/Caria/',
            large: false
        },
        {
            title: 'House Price Prediction',
            description: 'Data science project that predicts housing prices using machine learning and real-world datasets.',
            tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
            image: './img/12.png',
            repo: 'https://github.com/shahrishabh1513-jsk/house-price-prediction-ds',
            demo: 'https://github.com/shahrishabh1513-jsk/house-price-prediction-ds',
            large: false
        }
    ];
    
    // ========== TECHNICAL SKILLS ==========
    const technicalSkills = [
        "Git", "HTML", "CSS", "JAVASCRIPT", "PYTHON", "GOOGLE TOOLS",
        "PHP", "SQL", "C++", "C", "DATA STRUCTURE", "MONGODB",
        "PANDAS", "UI/UX BASICS", "GRAPHIC DESIGN", "GITHUB"
    ];
    
    // ========== CERTIFICATES DATA ==========
    const certificatesData = [
        {
            issuer: 'COURSERA',
            title: 'Android App Development',
            org: 'VANDERBILT UNIVERSITY',
            date: 'Feb 18, 2025',
            link: './pdf/(C6) Android App Development.pdf',
            image: './img/6.png',
            badge: 'coursera'
        },
        {
            issuer: 'IBM',
            title: 'IBM Full Stack Software Developer',
            org: 'IBM',
            date: 'Jan 22, 2026',
            link: './pdf/(C_Final) IBM Full Stack Software.pdf',
            image: './img/7.png',
            badge: 'ibm'
        },
        {
            issuer: 'IBM',
            title: 'IBM Generative AI Engineering',
            org: 'IBM',
            date: 'Feb 13, 2026',
            link: './pdf/(Cfinal) IBM Generative AI Engineering.pdf',
            image: './img/8.png',
            badge: 'ibm'
        },
        {
            issuer: 'GOOGLE',
            title: 'Google UX Design',
            org: 'Google',
            date: 'Jan 30, 2026',
            link: './pdf/(Cfinal) Google UX Design.pdf',
            image: './img/9.png',
            badge: 'google'
        },
        {
            issuer: 'AWS',
            title: 'AWS Cloud Security Foundations',
            org: 'Amazon Web Services',
            date: 'Feb 2026',
            link: './pdf/AWS Cloud Security Foundation.pdf',
            image: './img/10.png',
            badge: 'aws'
        },
        {
            issuer: 'GOOGLE',
            title: 'Google Workspace',
            org: 'Google',
            date: '2026',
            link: './pdf/(CFINAL) Getting started with.pdf',
            image: './img/11.png',
            badge: 'google'
        }
    ];
    
    // ========== RENDER PROJECTS ==========
    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;
        
        projectsGrid.innerHTML = projectsData.map(project => `
            <div class="project-card ${project.large ? 'large' : ''}">
                <img src="${project.image}" alt="${project.title}" class="project-image" onerror="this.src='https://placehold.co/600x400/EAEAEA/333?text=${encodeURIComponent(project.title)}'">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.repo}" target="_blank" class="project-link"><i class="fab fa-github"></i> Code</a>
                        <a href="${project.demo}" target="_blank" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> Demo</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // ========== RENDER SKILLS ==========
    function renderSkills() {
        const skillsCloud = document.getElementById('skillsCloud');
        if (!skillsCloud) return;
        
        skillsCloud.innerHTML = technicalSkills.map(skill => `
            <span class="skill-cloud-item">${skill}</span>
        `).join('');
    }
    
    // ========== RENDER CERTIFICATES ==========
    function renderCertificates() {
        const certificatesGrid = document.getElementById('certificatesGrid');
        if (!certificatesGrid) return;
        
        certificatesGrid.innerHTML = certificatesData.map(cert => `
            <div class="certificate-card" data-link="${cert.link}">
                <img src="${cert.image}" alt="${cert.title}" class="certificate-image" onerror="this.src='https://placehold.co/400x250/EAEAEA/333?text=${encodeURIComponent(cert.title)}'">
                <div class="certificate-content">
                    <span class="certificate-badge ${cert.badge}">${cert.issuer}</span>
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-org">${cert.org}</p>
                    <p class="certificate-date"><i class="fa-regular fa-calendar"></i> ${cert.date}</p>
                </div>
            </div>
        `).join('');
        
        // Add click event to certificate cards
        document.querySelectorAll('.certificate-card').forEach(card => {
            card.addEventListener('click', function() {
                const link = this.getAttribute('data-link');
                if (link && link !== '#') {
                    window.open(link, '_blank');
                } else {
                    showFloatingMessage('📄 Certificate PDF will be available soon!');
                }
            });
        });
    }
    
    // ========== FLOATING MESSAGE FUNCTION ==========
    function showFloatingMessage(message, isSuccess = false) {
        const existingToast = document.querySelector('.floating-toast');
        if(existingToast) existingToast.remove();
        
        const toast = document.createElement('div');
        toast.className = 'floating-toast';
        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 12px;">
                <i class="fa-regular ${isSuccess ? 'fa-circle-check' : 'fa-bell'}" style="font-size: 1.2rem;"></i>
                <span>${message}</span>
                <button class="toast-close" style="background: none; border: none; color: white; font-size: 1.2rem; cursor: pointer;">&times;</button>
            </div>
        `;
        toast.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #1E1E1E;
            color: ${isSuccess ? '#4CAF50' : '#F8B400'};
            padding: 1rem 1.5rem;
            border-radius: 50px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.85rem;
            font-weight: 500;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 9999;
            backdrop-filter: blur(8px);
            background: rgba(30,30,30,0.95);
            border-left: 4px solid ${isSuccess ? '#4CAF50' : '#F8B400'};
            max-width: 340px;
            animation: slideInRight 0.3s ease;
            pointer-events: auto;
        `;
        document.body.appendChild(toast);
        
        const closeBtn = toast.querySelector('.toast-close');
        closeBtn.addEventListener('click', () => toast.remove());
        
        setTimeout(() => {
            if(toast && toast.parentNode) toast.remove();
        }, 4000);
    }
    
    // Add animation style
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .floating-toast button:hover { opacity: 0.7; }
    `;
    document.head.appendChild(styleSheet);
    
    // ========== RESUME BUTTON - WORKING DOWNLOAD ==========
    const resumeBtn = document.getElementById('resumeBtn');
    if(resumeBtn) {
        resumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create a temporary anchor element to trigger download
            const downloadLink = document.createElement('a');
            downloadLink.href = './pdf/Rishabh Shah Resume.pdf';
            downloadLink.download = './pdf/Rishabh Shah Resume.pdf';
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
            
            // Trigger download
            downloadLink.click();
            
            // Show success message
            showFloatingMessage('📄 Resume download started!', true);
            
            // Clean up
            setTimeout(() => {
                document.body.removeChild(downloadLink);
            }, 100);
        });
    }
    
    // ========== SMOOTH SCROLL ==========
    const signatureLink = document.getElementById('signatureLink');
    if(signatureLink) {
        signatureLink.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.getElementById('about');
            if(aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
    
    const circleArrow = document.getElementById('circleArrow');
    if(circleArrow) {
        circleArrow.addEventListener('click', function() {
            const aboutSection = document.getElementById('about');
            if(aboutSection) aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // ========== SCROLL REVEAL FOR GIANT NUMBERS ==========
    function handleScrollNumbers() {
        const numbers = document.querySelectorAll('.giant-number');
        numbers.forEach(num => {
            const rect = num.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if(rect.top < windowHeight - 100 && rect.bottom > 0) {
                num.style.opacity = '0.06';
                num.style.transition = 'opacity 0.5s';
            } else {
                num.style.opacity = '0.02';
            }
        });
    }
    
    document.querySelectorAll('.giant-number').forEach(num => {
        num.style.transition = 'opacity 0.3s';
        num.style.opacity = '0.02';
    });
    
    window.addEventListener('scroll', handleScrollNumbers);
    handleScrollNumbers();
    
    // ========== HOVER EFFECT ON HERO IMAGE ==========
    const heroImg = document.querySelector('.hero-img');
    if(heroImg) {
        heroImg.addEventListener('mouseenter', () => heroImg.style.filter = 'grayscale(0%)');
        heroImg.addEventListener('mouseleave', () => heroImg.style.filter = 'grayscale(100%)');
    }
    
    // ========== ADD CLICK HANDLERS FOR CONTACT CARDS ==========
    const contactItems = document.querySelectorAll('.contact-horizontal-item');
    contactItems.forEach(item => {
        const link = item.querySelector('a');
        if(link) {
            item.addEventListener('click', (e) => {
                if(e.target.tagName !== 'A') {
                    window.open(link.href, '_blank');
                }
            });
        }
    });
    
    // ========== INITIALIZE ALL RENDERS ==========
    renderProjects();
    renderSkills();
    renderCertificates();
    
    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });
    
    console.log('Rishabh Shah Portfolio — Fully loaded with working features!');
});