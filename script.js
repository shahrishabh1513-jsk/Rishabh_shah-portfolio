document.addEventListener('DOMContentLoaded', function () {

    //  PROJECTS DATA 
    const projectsData = [
        {
            title: 'HyFun Foods',
            description: 'Full-stack corporate website with product listings, company info, and responsive design.',
            longDescription: 'A complete corporate website built for HyFun Foods, featuring dynamic product listings, company information pages, and a fully responsive layout that works seamlessly across devices. Focused on clean navigation and a professional presentation of the brand.',
            tags: ['JavaScript', 'HTML/CSS', 'Node.js', 'MongoDB'],
            image: './img/1.png',
            screenshots: ['./img/PP1/1.png', './img/PP1/2.png', './img/PP1/3.png', './img/PP1/4.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/hyfun-foods-corporate-website',
            demo: 'https://shahrishabh1513-jsk.github.io/hyfun-foods-corporate-website/',
            report: './pdf/hyfun-foods-report.pdf'
        },
        {
            title: 'Student Attendance',
            description: 'Attendance tracking system with analytics dashboard and export functionality.',
            longDescription: 'An attendance tracking system built for educational use, with a live analytics dashboard, attendance history, and one-click export functionality. Designed to make daily attendance management fast and error-free for teachers.',
            tags: ['PHP', 'JavaScript', 'MySQL', 'Chart.js'],
            image: './img/2.png',
            screenshots: ['./img/PP2/1.png', './img/PP2/2.png', './img/PP2/3.png', './img/PP2/4.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/student-attendance-system-Description-',
            demo: 'https://shahrishabh1513-jsk.github.io/student-attendance-system-Description-/',
            report: './pdf/student-attendance-report.pdf'
        },
        {
            title: 'HR Fashion',
            description: 'Fashion brand website with modern UI and product showcase.',
            longDescription: 'A modern fashion brand website with a bold visual identity, animated product showcase sections, and a shopping-friendly layout built entirely with vanilla HTML, CSS and JavaScript.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: './img/3.png',
            screenshots: ['./img/PP3/1.png', './img/PP3/2.png', './img/PP3/3.png', './img/PP3/4.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/HR-Atelier',
            demo: 'https://shahrishabh1513-jsk.github.io/HR-Atelier/',
            report: './pdf/hr-fashion-report.pdf'
        },
        {
            title: 'Invoice Generator',
            description: 'Dynamic invoice generator with export and user-friendly interface.',
            longDescription: 'A dynamic invoice generation tool that lets users create, preview, and export professional invoices in just a few clicks, with a clean and user-friendly interface built for speed.',
            tags: ['JavaScript', 'HTML/CSS'],
            image: './img/4.png',
            screenshots: ['./img/PP4/1.png', './img/PP4/2.png', './img/PP4/3.png', './img/PP4/4.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/nova-invoice-generator',
            demo: 'https://shahrishabh1513-jsk.github.io/nova-invoice-generator/',
            report: './pdf/invoice-generator-report.pdf'
        },
        {
            title: 'Caria',
            description: 'Modern web project with responsive design and interactive UI components.',
            longDescription: 'A modern, responsive web project exploring interactive UI components, smooth transitions, and a component-driven approach to front-end development.',
            tags: ['JavaScript', 'HTML/CSS'],
            image: './img/5.png',
            screenshots: ['./img/PP5/1.png', './img/PP5/2.png', './img/PP5/3.png','./img/PP5/4.png', './img/PP5/5.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/Caria',
            demo: 'https://shahrishabh1513-jsk.github.io/Caria/',
            report: './pdf/caria-report.pdf'
        },
        {
            title: 'House Price Prediction',
            description: 'Data science project that predicts housing prices using machine learning and real-world datasets.',
            longDescription: 'A data science project focused on predicting housing prices using regression models trained on real-world datasets. Involved data cleaning, feature engineering, and model evaluation using Pandas, NumPy, and Scikit-learn.',
            tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
            image: './img/12.png',
            screenshots: ['./img/PP6/1.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/house-price-prediction-ds',
            demo: 'https://github.com/shahrishabh1513-jsk/house-price-prediction-ds',
            report: './pdf/house-price-prediction-report.pdf'
        },
        {
            title: 'RT-RoyalBNB',
            description: 'Luxury hotel and resort booking website featuring elegant UI, responsive design, and seamless user experience.',
            longDescription: 'A luxury hotel and resort booking experience with an elegant visual language, smooth booking flow, and fully responsive design tailored for hospitality brands.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: './img/13.jpg',
            screenshots: ['img/PP7/1.jpg', './img/PP7/2.png', './img/PP7/3.png','./img/PP7/4.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/RT-RoyalBNB',
            demo: 'https://shahrishabh1513-jsk.github.io/RT-RoyalBNB/',
            report: './pdf/rt-royalbnb-report.pdf'
        },
        {
            title: 'RT-GroceryHub',
            description: 'Modern grocery shopping website with product categories, responsive layout, and user-friendly navigation.',
            longDescription: 'A modern online grocery shopping experience with organized product categories, a responsive layout, and intuitive navigation designed for quick and easy browsing.',
            tags: ['HTML', 'CSS', 'JavaScript'],
            image: './img/14.jpg',
            screenshots: ['img/PP8/1.jpg', './img/PP8/2.png', './img/PP8/3.png','./img/PP8/4.png'],
            repo: 'https://github.com/shahrishabh1513-jsk/RT-Groceryhub',
            demo: 'https://shahrishabh1513-jsk.github.io/RT-Groceryhub/',
            report: './pdf/rt-groceryhub-report.pdf'
        },
        {
            title: 'Indian Used Car Price Predictor',
            description: 'Machine learning project that predicts used car prices in India using data analysis, feature engineering, and predictive modeling.',
            longDescription: 'A machine learning project that predicts the resale value of used cars in the Indian market, combining exploratory data analysis, feature engineering, and predictive modeling for reliable price estimates.',
            tags: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
            image: './img/15.jpg',
            screenshots: ['img/PP9/1.jpg'],
            repo: 'https://github.com/shahrishabh1513-jsk/Indian-Used-Car-Price-Prediction',
            demo: 'https://github.com/shahrishabh1513-jsk/Indian-Used-Car-Price-Prediction',
            report: './pdf/indian-used-car-price-predictor-report.pdf'
        }
    ];

    //  TECHNICAL SKILLS 
    const technicalSkills = [
        { name: 'Git', icon: 'fa-brands fa-git-alt' },
        { name: 'HTML', icon: 'fa-brands fa-html5' },
        { name: 'CSS', icon: 'fa-brands fa-css3-alt' },
        { name: 'JAVASCRIPT', icon: 'fa-brands fa-js' },
        { name: 'PYTHON', icon: 'fa-brands fa-python' },
        { name: 'GOOGLE TOOLS', icon: 'fa-brands fa-google' },
        { name: 'PHP', icon: 'fa-brands fa-php' },
        { name: 'SQL', icon: 'fa-solid fa-database' },
        { name: 'C++', icon: 'fa-solid fa-code' },
        { name: 'C', icon: 'fa-solid fa-code' },
        { name: 'DATA STRUCTURE', icon: 'fa-solid fa-sitemap' },
        { name: 'MONGODB', icon: 'fa-solid fa-leaf' },
        { name: 'PANDAS', icon: 'fa-solid fa-table' },
        { name: 'UI/UX BASICS', icon: 'fa-solid fa-pen-ruler' },
        { name: 'GRAPHIC DESIGN', icon: 'fa-solid fa-palette' },
        { name: 'GITHUB', icon: 'fa-brands fa-github' }
    ];

    //  CERTIFICATES DATA 
    const certificatesData = [
        {
            issuer: 'COURSERA',
            title: 'Android App Development',
            org: 'VANDERBILT UNIVERSITY',
            date: 'Feb 18, 2025',
            link: './pdf/(C6) Android App Development.pdf',
            image: 'img/CA1/(C6) Android App Development.jpg',
            badge: 'coursera',
            fileIcon: 'fa-regular fa-file-lines'
        },
        {
            issuer: 'IBM',
            title: 'IBM Full Stack Software Developer',
            org: 'IBM',
            date: 'Jan 22, 2026',
            link: './pdf/(C_Final) IBM Full Stack Software.pdf',
            image: 'img/CA2/(C_Final) IBM Full Stack Software.jpg',
            badge: 'ibm',
            fileIcon: 'fa-regular fa-file-lines'
        },
        {
            issuer: 'IBM',
            title: 'IBM Generative AI Engineering',
            org: 'IBM',
            date: 'Feb 13, 2026',
            link: './pdf/(Cfinal) IBM Generative AI Engineering.pdf',
            image: 'img/CA3/(Cfinal) IBM Generative AI Engineering.jpg',
            badge: 'ibm',
            fileIcon: 'fa-regular fa-file-lines'
        },
        {
            issuer: 'GOOGLE',
            title: 'Google UX Design',
            org: 'Google',
            date: 'Jan 30, 2026',
            link: './pdf/(Cfinal) Google UX Design.pdf',
            image: 'img/CA4/(Cfinal) Google UX Design.jpg',
            badge: 'google',
            fileIcon: 'fa-regular fa-file-lines'
        },
        {
            issuer: 'AWS',
            title: 'AWS Cloud Security Foundations',
            org: 'Amazon Web Services',
            date: 'Feb 2026',
            link: './pdf/AWS Cloud Security Foundation.pdf',
            image: 'img/CA5/AWS Cloud Security Foundation.jpg',
            badge: 'aws',
            fileIcon: 'fa-regular fa-file-lines'
        },
        {
            issuer: 'GOOGLE',
            title: 'Google Workspace',
            org: 'Google',
            date: 'Jan 2026',
            link: './pdf/(CFINAL) Getting started with.pdf',
            image: 'img/CA6/(CFINAL) Getting started with.jpg',
            badge: 'google',
            fileIcon: 'fa-regular fa-file-lines'
        },
        {
            issuer: 'CANVA',
            title: 'Canva Design Essentials',
            org: 'Skillshares',
            date: 'Jan 2026',
            link: './pdf/AWS Cloud Security Foundation.pdf',
            image: 'img/CA5/AWS Cloud Security Foundation.jpg',
            badge: 'canva',
            fileIcon: 'fa-regular fa-file-lines'
        }
    ];

    const badgeColors = {
        coursera: '#2A73FF',
        ibm: '#052FAD',
        google: '#0F9D58',
        aws: '#FF9900',
        canva: '#ff0073'
    };

    //  RENDER PROJECTS (Finder folder tiles) 
    function renderProjects() {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = projectsData.map((project, index) => `
            <div class="finder-tile" data-open-project="${index}" tabindex="0" role="button" aria-label="Open ${project.title} project">
                <div class="finder-tile-icon"><i class="fa-solid fa-folder"></i></div>
                <div class="finder-tile-label">${project.title}</div>
            </div>
        `).join('');

        const countEl = document.getElementById('finderProjectCount');
        if (countEl) countEl.textContent = `${projectsData.length} items`;

        observeRevealTargets('.finder-tile');
    }

    document.addEventListener('click', function (e) {
        const trigger = e.target.closest('[data-open-project]');
        if (trigger) {
            e.preventDefault();
            openProjectModal(parseInt(trigger.getAttribute('data-open-project'), 10));
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focused = document.activeElement;
            if (focused && focused.hasAttribute('data-open-project')) {
                e.preventDefault();
                openProjectModal(parseInt(focused.getAttribute('data-open-project'), 10));
            }
            if (focused && focused.hasAttribute('data-open-cert')) {
                e.preventDefault();
                openCertModal(parseInt(focused.getAttribute('data-open-cert'), 10));
            }
        }
    });

    //  PROJECT MODAL 
    const projectModal = document.getElementById('projectModal');
    const projectModalOverlay = document.getElementById('projectModalOverlay');
    const projectModalBody = document.getElementById('projectModalBody');
    const modalAddressBar = document.getElementById('modalAddressBar');

    function openProjectModal(index) {
        const project = projectsData[index];
        if (!project) return;

        const fakeUrl = project.demo && project.demo.startsWith('http')
            ? project.demo.replace(/^https?:\/\//, '')
            : `${project.title.toLowerCase().replace(/\s+/g, '-')}.dev`;
        modalAddressBar.textContent = fakeUrl;

        projectModalBody.innerHTML = `
            <h2 class="modal-project-title">${project.title}</h2>
            <p class="modal-project-desc">${project.longDescription || project.description}</p>
            <div class="modal-tags">
                ${project.tags.map(tag => `<span class="modal-tag">${tag}</span>`).join('')}
            </div>
            <div class="modal-btn-row">
                <a href="${project.demo}" target="_blank" class="modal-btn modal-btn-live"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Project</a>
                <a href="${project.repo}" target="_blank" class="modal-btn modal-btn-code"><i class="fab fa-github"></i> Project Code</a>
                ${project.report ? `<a href="${project.report}" target="_blank" class="modal-btn modal-btn-report"><i class="fa-solid fa-file-pdf"></i> View Project Report</a>` : ''}
            </div>
            <div class="modal-screens-label">Screenshots</div>
            <div class="modal-screens">
                ${(project.screenshots && project.screenshots.length ? project.screenshots : [project.image, project.image, project.image])
                .map((src, i) => `<img src="${src}" alt="${project.title} screenshot ${i + 1}" onerror="this.src='https://placehold.co/500x320/1E1E1E/F8B400?text=${encodeURIComponent(project.title + ' — Screen ' + (i + 1))}'">`)
                .join('')}
            </div>
        `;

        openModal(projectModalOverlay, projectModal);
    }

    document.getElementById('projectModalClose').addEventListener('click', () => closeModal(projectModalOverlay, projectModal));
    document.getElementById('projectModalMinimize').addEventListener('click', () => minimizeModal(projectModalOverlay, projectModal));
    document.getElementById('projectModalMaximize').addEventListener('click', () => toggleMaximize(projectModal));
    projectModalOverlay.addEventListener('click', (e) => {
        if (e.target === projectModalOverlay) closeModal(projectModalOverlay, projectModal);
    });

    //  RENDER SKILLS 
    function renderSkills() {
        const skillsCloud = document.getElementById('skillsCloud');
        if (!skillsCloud) return;

        skillsCloud.innerHTML = technicalSkills.map(skill => `
            <span class="skill-cloud-item"><i class="${skill.icon}"></i>${skill.name}</span>
        `).join('');

        observeRevealTargets('.skill-cloud-item');
    }

    //  RENDER CERTIFICATES (Finder file tiles) 
    function renderCertificates() {
        const certificatesGrid = document.getElementById('certificatesGrid');
        if (!certificatesGrid) return;

        certificatesGrid.innerHTML = certificatesData.map((cert, index) => `
            <div class="finder-tile" data-open-cert="${index}" tabindex="0" role="button" aria-label="Open ${cert.title} certificate">
                <div class="finder-tile-icon">
                    <i class="${cert.fileIcon || 'fa-regular fa-file-lines'}"></i>
                    <span class="badge-dot" style="background:${badgeColors[cert.badge] || '#999'};">${cert.issuer.charAt(0)}</span>
                </div>
                <div class="finder-tile-label">${cert.title}</div>
            </div>
        `).join('');

        const countEl = document.getElementById('finderCertCount');
        if (countEl) countEl.textContent = `${certificatesData.length} items`;

        document.querySelectorAll('[data-open-cert]').forEach(tile => {
            tile.addEventListener('click', function () {
                openCertModal(parseInt(this.getAttribute('data-open-cert'), 10));
            });
        });

        observeRevealTargets('.finder-tile');
    }

    //  CERTIFICATE MODAL 
    const certModal = document.getElementById('certModal');
    const certModalOverlay = document.getElementById('certModalOverlay');
    const certModalBody = document.getElementById('certModalBody');
    const certModalAddressBar = document.getElementById('certModalAddressBar');

    function openCertModal(index) {
        const cert = certificatesData[index];
        if (!cert) return;

        certModalAddressBar.textContent = `${cert.issuer.toLowerCase()}-certificate.pdf`;

        certModalBody.innerHTML = `
            <span class="certificate-badge ${cert.badge}">${cert.issuer}</span>
            <h2 class="modal-cert-title">${cert.title}</h2>
            <p class="modal-cert-org">${cert.org}</p>
            <p class="modal-cert-date"><i class="fa-regular fa-calendar"></i> ${cert.date}</p>
            <img src="${cert.image}" alt="${cert.title}" class="modal-cert-image" onerror="this.src='https://placehold.co/700x480/EAEAEA/333?text=${encodeURIComponent(cert.title)}'">
            <div class="modal-btn-row" style="justify-content:center;">
                <a href="${cert.link}" target="_blank" class="modal-btn modal-btn-live"><i class="fa-solid fa-file-pdf"></i> View Full Certificate</a>
            </div>
        `;

        openModal(certModalOverlay, certModal);
    }

    document.getElementById('certModalClose').addEventListener('click', () => closeModal(certModalOverlay, certModal));
    document.getElementById('certModalMinimize').addEventListener('click', () => minimizeModal(certModalOverlay, certModal));
    document.getElementById('certModalMaximize').addEventListener('click', () => toggleMaximize(certModal));
    certModalOverlay.addEventListener('click', (e) => {
        if (e.target === certModalOverlay) closeModal(certModalOverlay, certModal);
    });

    //  SHARED MODAL HELPERS (close / minimize / maximize) 
    function openModal(overlay, modalEl) {
        modalEl.classList.remove('minimizing', 'maximized');
        overlay.classList.add('active');
        document.body.classList.add('modal-open');
    }

    function closeModal(overlay, modalEl) {
        overlay.classList.remove('active');
        modalEl.classList.remove('minimizing', 'maximized');
        document.body.classList.remove('modal-open');
    }

    function minimizeModal(overlay, modalEl) {
        modalEl.classList.add('minimizing');
        setTimeout(() => {
            overlay.classList.remove('active');
            modalEl.classList.remove('minimizing');
            document.body.classList.remove('modal-open');
        }, 320);
    }

    function toggleMaximize(modalEl) {
        modalEl.classList.toggle('maximized');
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(projectModalOverlay, projectModal);
            closeModal(certModalOverlay, certModal);
        }
    });

    //  FLOATING MESSAGE FUNCTION 
    function showFloatingMessage(message, isSuccess = false) {
        const existingToast = document.querySelector('.floating-toast');
        if (existingToast) existingToast.remove();

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
            if (toast && toast.parentNode) toast.remove();
        }, 4000);
    }

    // RESUME BUTTON - WORKING DOWNLOAD 
    const resumeBtn = document.getElementById('resumeBtn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', function (e) {
            e.preventDefault();

            const downloadLink = document.createElement('a');
            downloadLink.href = './pdf/Rishabh Shah Resume.pdf';
            downloadLink.download = './pdf/Rishabh Shah Resume.pdf';
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
            downloadLink.click();

            showFloatingMessage('📄 Resume download started!', true);

            setTimeout(() => {
                document.body.removeChild(downloadLink);
            }, 100);
        });
    }

    //  FLOATING NAV: scroll style + mobile toggle + scroll-spy 
    const floatingNav = document.getElementById('floatingNav');
    const navLinks = document.getElementById('navLinks');
    const navToggle = document.getElementById('navToggle');
    const navOverlay = document.getElementById('navOverlay');
    const navLinkEls = document.querySelectorAll('.nav-link');
    const sections = ['home', 'about', 'projects', 'skills', 'certificates', 'contact']
        .map(id => document.getElementById(id))
        .filter(Boolean);

    function toggleNav(forceClose) {
        const shouldOpen = forceClose === undefined ? !navLinks.classList.contains('open') : !forceClose;
        navLinks.classList.toggle('open', shouldOpen);
        navOverlay.classList.toggle('active', shouldOpen);
    }

    if (navToggle) navToggle.addEventListener('click', () => toggleNav());
    if (navOverlay) navOverlay.addEventListener('click', () => toggleNav(true));

    navLinkEls.forEach(link => {
        link.addEventListener('click', () => toggleNav(true));
    });

    function handleNavScroll() {
        if (window.scrollY > 40) {
            floatingNav.classList.add('scrolled');
        } else {
            floatingNav.classList.remove('scrolled');
        }

        let currentId = sections[0] ? sections[0].id : 'home';
        const scrollPos = window.scrollY + 160;
        sections.forEach(section => {
            if (section.offsetTop <= scrollPos) {
                currentId = section.id;
            }
        });

        navLinkEls.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-section') === currentId);
        });
    }

    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();

    //  MAGNETIC TILT EFFECT ON ABOUT PHOTO CARD 
    const aboutPhotoCard = document.getElementById('aboutPhotoCard');
    if (aboutPhotoCard) {
        aboutPhotoCard.addEventListener('mousemove', (e) => {
            const rect = aboutPhotoCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            aboutPhotoCard.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        aboutPhotoCard.addEventListener('mouseleave', () => {
            aboutPhotoCard.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    }

    //  GENERIC SCROLL-REVEAL OBSERVER 
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    function observeRevealTargets(selector) {
        document.querySelectorAll(selector).forEach(el => revealObserver.observe(el));
    }

    observeRevealTargets('.reveal-up, .reveal-left, .reveal-right');

    //  ANIMATED STAT COUNTERS (About section) 
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 1200;
            const stepTime = Math.max(Math.floor(duration / target), 20);

            const timer = setInterval(() => {
                current += 1;
                el.textContent = current + suffix;
                if (current >= target) {
                    el.textContent = target + suffix;
                    clearInterval(timer);
                }
            }, stepTime);

            counterObserver.unobserve(el);
        });
    }, { threshold: 0.4 });

    statNumbers.forEach(el => counterObserver.observe(el));

    //  ADD CLICK HANDLERS FOR CONTACT CARDS 
    const contactItems = document.querySelectorAll('.contact-horizontal-item');
    contactItems.forEach(item => {
        const link = item.querySelector('a');
        if (link) {
            item.addEventListener('click', (e) => {
                if (e.target.tagName !== 'A') {
                    window.open(link.href, '_blank');
                }
            });
        }
    });

    // INITIALIZE ALL RENDERS 
    renderProjects();
    renderSkills();
    renderCertificates();

    // Page load animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    console.log('Rishabh Shah Portfolio — Finder-style projects & certificates, centered hero, bento about!');
});