export const appJs = `
    <!-- Particle Canvas & Native Micro-interactions -->
    <script>
      (() => {
        // 1. Ambient Constellation Canvas Engine
        const canvas = document.getElementById('ambient-canvas');
        if (canvas) {
          const ctx = canvas.getContext('2d');
          let width = canvas.width = window.innerWidth;
          let height = canvas.height = window.innerHeight;
          let particles = [];
          const numParticles = Math.min(width < 768 ? 25 : 55, 65);
          let mouse = { x: null, y: null, radius: 120 };

          class Particle {
            constructor() {
              this.x = Math.random() * width;
              this.y = Math.random() * height;
              this.vx = (Math.random() - 0.5) * 0.7;
              this.vy = (Math.random() - 0.5) * 0.7;
              this.radius = 1.5 + Math.random() * 2.2;
              this.color = Math.random() > 0.4 ? 'rgba(244, 185, 66, ' : 'rgba(12, 106, 118, ';
              this.alpha = 0.25 + Math.random() * 0.45;
            }
            update() {
              this.x += this.vx;
              this.y += this.vy;
              if (this.x < 0 || this.x > width) this.vx *= -1;
              if (this.y < 0 || this.y > height) this.vy *= -1;

              // Mouse repulsion / interaction
              if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouse.radius) {
                  const angle = Math.atan2(dy, dx);
                  this.x -= Math.cos(angle) * 1.5;
                  this.y -= Math.sin(angle) * 1.5;
                }
              }
            }
            draw() {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
              ctx.fillStyle = this.color + this.alpha + ')';
              ctx.fill();
            }
          }

          function initParticles() {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
              particles.push(new Particle());
            }
          }
          initParticles();

          function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
              particles[i].update();
              particles[i].draw();

              // Draw filaments between nearby particles
              for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);
                if (dist < 110) {
                  const lineAlpha = (1 - dist / 110) * 0.18;
                  ctx.beginPath();
                  ctx.strokeStyle = 'rgba(12, 106, 118, ' + lineAlpha + ')';
                  ctx.lineWidth = 0.8;
                  ctx.moveTo(particles[i].x, particles[i].y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.stroke();
                }
              }
            }
            requestAnimationFrame(animateCanvas);
          }
          animateCanvas();

          window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
          });

          window.addEventListener('pointermove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
          });
          window.addEventListener('pointerleave', () => {
            mouse.x = null;
            mouse.y = null;
          });
        }

        // 2. Mobile Nav Toggle
        const menuButton = document.getElementById('menu-toggle');
        const navigation = document.getElementById('navbar-links');
        const closeMenu = () => {
          navigation?.classList.remove('open');
          menuButton?.setAttribute('aria-expanded', 'false');
          const icon = menuButton?.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        };

        menuButton?.addEventListener('click', () => {
          const isOpen = navigation?.classList.toggle('open');
          menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
          const icon = menuButton.querySelector('i');
          if (icon) icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });

        navigation?.addEventListener('click', (e) => {
          if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            closeMenu();
          }
        });
        window.addEventListener('resize', () => { if (window.innerWidth > 920) closeMenu(); });

        // 3. Scroll Progress & Back To Top Button
        const progress = document.getElementById('scroll-progress');
        const backToTop = document.getElementById('back-to-top');
        const updateScrollUi = () => {
          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
          if (progress) progress.style.transform = \`scaleX(\${Math.min(1, ratio)})\`;
          backToTop?.classList.toggle('visible', window.scrollY > 400);
        };
        window.addEventListener('scroll', updateScrollUi, { passive: true });
        backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        updateScrollUi();

        // 4. Liquid Button Ripple on Click
        document.addEventListener('click', (e) => {
          const btn = e.target.closest('.hero-btn, .btn-submit, .section-cta');
          if (btn) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = \`\${size}px\`;
            ripple.style.left = \`\${e.clientX - rect.left - size / 2}px\`;
            ripple.style.top = \`\${e.clientY - rect.top - size / 2}px\`;
            btn.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
          }
        });

        // 5. Floating Hero Ambient Dust Particles
        const hero = document.getElementById('home-hero-banner');
        if (hero) {
          const particleCount = window.innerWidth < 640 ? 10 : 20;
          for (let index = 0; index < particleCount; index += 1) {
            const particle = document.createElement('span');
            particle.className = 'hero-particle';
            particle.style.setProperty('--particle-x', \`\${6 + Math.random() * 88}%\`);
            particle.style.setProperty('--particle-y', \`\${8 + Math.random() * 82}%\`);
            particle.style.setProperty('--particle-size', \`\${3 + Math.random() * 4}px\`);
            particle.style.setProperty('--particle-duration', \`\${5 + Math.random() * 6}s\`);
            particle.style.setProperty('--particle-delay', \`\${Math.random() * -6}s\`);
            particle.style.setProperty('--particle-drift-x', \`\${-18 + Math.random() * 36}px\`);
            particle.style.setProperty('--particle-drift-y', \`\${-24 - Math.random() * 30}px\`);
            hero.appendChild(particle);
          }
        }

        // 7. Animated Stat Counters with Spring Physics
        const animateStats = () => {
          document.querySelectorAll('.stat-number:not([data-counted])').forEach((element) => {
            const target = Number(element.dataset.target || element.textContent.replace(/[^0-9.]/g, '')) || 0;
            const suffix = element.dataset.suffix || '';
            element.dataset.counted = 'true';
            const duration = 1200;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              element.textContent = \`\${Math.round(target * eased)}\${suffix}\`;
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        };
        const statsObserver = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            animateStats();
            statsObserver.disconnect();
          }
        }, { threshold: 0.3 });
        const statsBand = document.getElementById('home-stats-container');
        if (statsBand) statsObserver.observe(statsBand);

        // 8. FAQ Accordion Click Handler
        document.querySelectorAll('.faq-question').forEach((item) => {
          item.addEventListener('click', () => {
            const parent = item.parentElement;
            const wasActive = parent.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach((f) => f.classList.remove('active'));
            if (!wasActive) parent.classList.add('active');
          });
        });

        // 9. Floating Speed-Dial Dock Trigger
        const dock = document.getElementById('floating-dock');
        const dockBtn = document.getElementById('dock-toggle-btn');
        dockBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          dock?.classList.toggle('open');
          const icon = dockBtn.querySelector('i');
          if (icon) {
            icon.className = dock.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bolt';
          }
        });
        document.addEventListener('click', (e) => {
          if (!dock?.contains(e.target)) {
            dock?.classList.remove('open');
            const icon = dockBtn?.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bolt';
          }
        });

        // 10. Hide App Loader Fallback
        window.setTimeout(() => {
          const loader = document.getElementById('app-loader');
          if (loader && loader.style.visibility !== 'hidden') {
            loader.style.opacity = '0';
            window.setTimeout(() => { loader.style.visibility = 'hidden'; }, 500);
          }
        }, 1200);

        // 11. Direct Inquiry Form Mailto Fallback
        const inquiryForm = document.getElementById('inquiry-form');
        inquiryForm?.addEventListener('submit', (event) => {
          event.preventDefault();
          const form = event.currentTarget;
          const name = form.querySelector('#name-input').value.trim();
          const email = form.querySelector('#email-input').value.trim();
          const stream = form.querySelector('#stream-select').value;
          const message = form.querySelector('#msg-input').value.trim();
          const recipient = document.getElementById('val-email-link')?.textContent?.trim() || 'gcpc131217@gmail.com';
          const subject = encodeURIComponent(\`Admission Inquiry - \${stream} - from \${name}\`);
          const body = encodeURIComponent(\`Name: \${name}\\nEmail: \${email}\\nStream Interest: \${stream}\\n\\nMessage:\\n\${message}\`);
          window.location.href = \`mailto:\${recipient}?subject=\${subject}&body=\${body}\`;
          form.reset();
          window.showToast?.('Your admission inquiry message draft is ready!');
        });
      })();
    </script>

    <!-- Firebase Realtime Database Integration & Application Router -->
    <script type="module">
      import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
      import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

      const firebaseConfig = {
        apiKey: "AIzaSyDvtjkcki1b_iK4BNgwSZPYmbdwndGXshM",
        authDomain: "topupapp-e9b87.firebaseapp.com",
        databaseURL: "https://topupapp-e9b87-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "topupapp-e9b87",
        storageBucket: "topupapp-e9b87.firebasestorage.app",
        messagingSenderId: "1026902365460",
        appId: "1:1026902365460:web:c9f16cd50beeb624251e01",
        measurementId: "G-3XB11JXKCW"
      };

      const app = initializeApp(firebaseConfig);
      const db = getDatabase(app);

      // Default high-fidelity universal college dataset
      const defaultSiteData = {
        branding: {
          collegeName: "Central Public College",
          logoUrl: "/school-logo-transparent.png"
        },
        home: {
          kicker: "Board Affiliated Institution · Code: 131217",
          heroTitle: "Welcome to",
          heroSubtitle: "A premier academic institution fostering intellectual curiosity, moral integrity, and modern technological competence. Empowering learners with cutting-edge laboratories, dedicated mentorship, and an exam-focused curriculum designed for higher educational success.",
          heroBg: "",
          primaryButtonLabel: "Explore academics",
          secondaryButtonLabel: "Admission enquiry",
          whyChooseUsTitle: "Why Choose Us?",
          whyChooseUsDesc: "Central Public College stands as a premier academic institution committed to preparing students for university admission and career achievement. Built upon pillars of discipline, modern laboratories, and individualized student care, we help scholars realize their full potential.",
          features: [
            {
              icon: "fa-graduation-cap",
              title: "Scholastic Rigor",
              desc: "Top board scores under curriculum standards accompanied by tailored exam readiness frameworks."
            },
            {
              icon: "fa-microscope",
              title: "Advanced Labs & Smart IT",
              desc: "Modern science lab tools, visual classrooms, and high-performance IT learning infrastructure."
            },
            {
              icon: "fa-users-gear",
              title: "Dedicated Mentorship",
              desc: "A highly-credentialed staff that focuses on individual students with constant feedback cycles."
            }
          ],
          quickLinks: [
            { icon: "fa-book-open", title: "Academic Programs", desc: "Science, Commerce & Humanities", pageId: "info" },
            { icon: "fa-bullhorn", title: "Notice Board", desc: "Exams, routines & circulars", pageId: "notices" },
            { icon: "fa-building-columns", title: "Campus Facilities", desc: "Labs, library & IT center", pageId: "facilities" },
            { icon: "fa-phone-volume", title: "Admissions Help", desc: "Direct counseling helpline", pageId: "contact" }
          ],
          stats: [
            { number: "3", label: "Academic Streams" },
            { number: "100%", label: "Curriculum Standards" },
            { number: "20+", label: "Experienced Faculty" },
            { number: "24/7", label: "Student Support Focus" }
          ],
          updates: [
            {
              tag: "ADMIT 2026",
              title: "Admission Guidance & Open Registration",
              desc: "Direct applications and counseling for the upcoming academic session are currently in progress."
            },
            {
              tag: "STANDARDS",
              title: "Board Aligned Syllabus & Practical Lab Hours",
              desc: "Lessons and assessments are synchronized with curriculum standards for supreme exam preparedness."
            },
            {
              tag: "MERIT AID",
              title: "Merit Scholarships for Top GPA Achievers",
              desc: "Eligible students receive up to 100% tuition fee waiver upon confirmation of qualifying results."
            }
          ],
          highlights: [
            {
              imageUrl: "/school-logo-transparent.png",
              eyebrow: "Scholastic Excellence",
              title: "Focused classes, regular mentoring, and board exam drills",
              desc: "Supportive lecturers maintain discipline and high academic standards across all batches."
            },
            {
              imageUrl: "/school-logo-transparent.png",
              eyebrow: "Campus Co-Curricular",
              title: "Debating, science exhibitions, and annual cultural events",
              desc: "Clubs and celebrations ensure every student develops leadership and communication skills."
            }
          ],
          admissionBanner: {
            eyebrow: "Start your future here",
            title: "Looking for a serious, supportive place to continue higher secondary study?",
            desc: "Visit our college campus, explore the academic streams, and speak with our admissions counseling team to begin your journey.",
            buttonLabel: "Contact admissions"
          }
        },
        about: {
          title: "About The College",
          paragraph1: "Central Public College is a premier center of higher learning dedicated to nurturing inquisitive minds, disciplined scholars, and future leaders. Strategically located within an accessible, verdant campus in the academic district, the institution provides an inspiring sanctuary conducive to focused study.",
          paragraph2: "Our core institutional belief is that true education goes beyond textbook memorization. By implementing modern pedagogical strategies, active debate platforms, laboratory experiments, and interactive problem-solving, we instill independent analytical capability in every scholar.",
          vision: {
            title: "Our Vision",
            desc: "To establish a benchmark in higher secondary and collegiate education, molding students into morally upright, academically excellent, and technologically adaptive leaders for the nation and the global arena."
          },
          mission: {
            title: "Our Mission",
            desc: "To cultivate a scientific temperament, deliver robust analytical skills, and provide custom learning paths across Science, Business Studies, and Humanities streams."
          },
          milestones: [
            { icon: "fa-certificate", title: "Board Approved", desc: "Authorized and affiliated under standardized education board" },
            { icon: "fa-user-shield", title: "Safe Campus", desc: "24/7 monitored secure and serene collegiate learning environment" },
            { icon: "fa-laptop-code", title: "ICT-Enabled", desc: "High-speed computer laboratories and multimedia classrooms" },
            { icon: "fa-award", title: "Merit Rewarded", desc: "Generous tuition fee waivers for top academic achievers" }
          ]
        },
        info: {
          title: "Academic Information & Curriculum",
          intro: "Central Public College offers specialized higher secondary programs registered under the education board. Students receive structured, syllabus-focused classroom coaching and weekly practical sessions designed to excel in board evaluations and university admission tests.",
          streams: [
            {
              icon: "fa-atom",
              title: "Science & Technology Stream",
              desc: "Designed for aspiring engineers, physicians, and scientific researchers. Course load includes Physics, Chemistry, Biology, Higher Mathematics, and ICT reinforced by mandatory weekly lab sessions."
            },
            {
              icon: "fa-chart-line",
              title: "Business Studies & Economics",
              desc: "Tailored for future entrepreneurs, corporate leaders, and financial analysts. Coursework covers Accounting, Finance & Banking, Business Organization & Management, Economics, and ICT."
            },
            {
              icon: "fa-scale-balanced",
              title: "Humanities & Social Sciences",
              desc: "Focused on analytical thinking, legal foundation, and civil services. Curriculum covers Civics & Good Governance, Economics, Social Work, Logic, History, and ICT."
            }
          ],
          guidelinesTitle: "Academic Standards & Admission Guidelines",
          guidelinesDesc: "Our curriculum strictly adheres to standardized national textbook curriculum standards. Formal admission opens immediately following secondary board results and is processed both online via the centralized admission gateway and through our direct counseling center."
        },
        teachers: {
          title: "Our Teachers & Faculty",
          intro: "Meet the respected educators who lead every classroom with scholarship, patience, and dedication.",
          list: [
            {
              id: "1",
              photoUrl: "/school-logo-transparent.png",
              name: "Dr. Hasan Mahmud",
              subject: "Mathematics & Statistics",
              designation: "Senior Lecturer",
              contact: "01309131217"
            },
            {
              id: "2",
              photoUrl: "/school-logo-transparent.png",
              name: "Sharmin Akter",
              subject: "Chemistry & Bio-Sciences",
              designation: "Lecturer",
              contact: "01309131218"
            },
            {
              id: "3",
              photoUrl: "/school-logo-transparent.png",
              name: "Rafiqul Islam",
              subject: "Physics & Computing",
              designation: "Lecturer",
              contact: "01309131219"
            },
            {
              id: "4",
              photoUrl: "/school-logo-transparent.png",
              name: "Nusrat Jahan",
              subject: "Biology & Genetics",
              designation: "Lecturer",
              contact: "01309131220"
            }
          ]
        },
        notices: [
          {
            category: "admission",
            date: "27 OCT 2026",
            title: "College Admission: Direct Application and Counseling",
            desc: "Prospective candidates who have completed secondary schooling are invited to visit the college counseling desk for stream selection and registration.",
            body: "All students seeking admission to Central Public College for the upcoming session are notified that counseling and document verification are now active. Please bring your academic transcript, admit card, and 4 passport-size photographs to the front office between 8:00 AM and 3:30 PM."
          },
          {
            category: "exam",
            date: "20 OCT 2026",
            title: "Model Test Examination Routine & Schedule Published",
            desc: "The comprehensive model test examination for graduating students begins from next month.",
            body: "The official examination schedule for the upcoming Pre-Board Model Tests has been published. All candidates are advised to verify their schedules and collect their examination slips from the administration desk."
          },
          {
            category: "routine",
            date: "14 OCT 2026",
            title: "Revised Laboratory & Practical Session Schedule",
            desc: "Practical batches for Physics, Chemistry, and Biology have been updated for morning and afternoon shifts.",
            body: "Practical sessions will be held as per the updated timetable on the departmental notice boards. All science students must bring their practical journals and follow laboratory protocols."
          },
          {
            category: "holiday",
            date: "05 OCT 2026",
            title: "Notice Regarding Upcoming Semester Break & Office Hours",
            desc: "College academic activities will remain suspended during the official declared holidays.",
            body: "Academic classes will resume normally immediately following the declared break. Online admissions and WhatsApp inquiries remain monitored."
          }
        ],
        gallery: [
          {
            id: "1",
            url: "/school-logo-transparent.png",
            caption: "Central Public College Academic Crest & Insignia"
          }
        ],
        contact: {
          title: "Get In Touch & Admission Desk",
          intro: "Our administrative front desk remains accessible Sunday through Thursday from 8:00 AM to 3:30 PM. Contact us via phone, WhatsApp, email, or leave a message below.",
          address: "College Avenue, Academic District",
          officeHours: "Sunday–Thursday · 8:00 AM–3:30 PM",
          email: "admissions@centralcollege.edu",
          whatsapp: "8801776371675",
          phone: "01309131217"
        },
        adminPasscode: "admin123"
      };

      let siteData = null;
      let isAdminLoggedIn = false;
      let currentLang = 'en';

      function prepareSiteData(rawData) {
        const data = rawData || {};
        data.branding = data.branding || {};
        data.home = data.home || {};
        data.contact = data.contact || {};
        data.teachers = data.teachers || {};
        data.notices = Array.isArray(data.notices) && data.notices.length > 0 ? data.notices : defaultSiteData.notices;

        // Ensure universal college branding
        if (!data.branding.collegeName || data.branding.collegeName.includes("Gazipur")) {
          data.branding.collegeName = defaultSiteData.branding.collegeName;
        }
        data.branding.collegeName = data.branding.collegeName.replace(new RegExp('\\\\bcollege\\\\b', 'gi'), 'College');
        data.branding.logoUrl = data.branding.logoUrl || defaultSiteData.branding.logoUrl;

        if (!data.contact.address || data.contact.address.includes("Gazipur")) {
          data.contact.address = defaultSiteData.contact.address;
        }
        if (!data.contact.email || data.contact.email.includes("gcpc")) {
          data.contact.email = defaultSiteData.contact.email;
        }
        data.branding.logoUrl = data.branding.logoUrl || defaultSiteData.branding.logoUrl;

        data.home.kicker = data.home.kicker || defaultSiteData.home.kicker;
        data.home.heroTitle = data.home.heroTitle || defaultSiteData.home.heroTitle;
        data.home.heroSubtitle = data.home.heroSubtitle || defaultSiteData.home.heroSubtitle;
        data.home.primaryButtonLabel = data.home.primaryButtonLabel || defaultSiteData.home.primaryButtonLabel;
        data.home.secondaryButtonLabel = data.home.secondaryButtonLabel || defaultSiteData.home.secondaryButtonLabel;
        data.home.whyChooseUsTitle = data.home.whyChooseUsTitle || defaultSiteData.home.whyChooseUsTitle;
        data.home.whyChooseUsDesc = data.home.whyChooseUsDesc || defaultSiteData.home.whyChooseUsDesc;
        data.home.features = Array.isArray(data.home.features) && data.home.features.length >= 3 ? data.home.features : defaultSiteData.home.features;
        data.home.quickLinks = Array.isArray(data.home.quickLinks) && data.home.quickLinks.length >= 4 ? data.home.quickLinks : defaultSiteData.home.quickLinks;
        data.home.stats = Array.isArray(data.home.stats) && data.home.stats.length >= 4 ? data.home.stats : defaultSiteData.home.stats;
        data.home.updates = Array.isArray(data.home.updates) && data.home.updates.length >= 3 ? data.home.updates : defaultSiteData.home.updates;
        data.home.highlights = Array.isArray(data.home.highlights) && data.home.highlights.length >= 2 ? data.home.highlights : defaultSiteData.home.highlights;
        data.home.admissionBanner = data.home.admissionBanner || defaultSiteData.home.admissionBanner;

        data.about = data.about || defaultSiteData.about;
        data.about.milestones = Array.isArray(data.about.milestones) ? data.about.milestones : defaultSiteData.about.milestones;
        data.about.vision = data.about.vision || defaultSiteData.about.vision;
        data.about.mission = data.about.mission || defaultSiteData.about.mission;

        data.info = data.info || defaultSiteData.info;
        data.info.streams = Array.isArray(data.info.streams) ? data.info.streams : defaultSiteData.info.streams;

        data.teachers.title = data.teachers.title || defaultSiteData.teachers.title;
        data.teachers.intro = data.teachers.intro || defaultSiteData.teachers.intro;
        data.teachers.list = Array.isArray(data.teachers.list) && data.teachers.list.length > 0 ? data.teachers.list : defaultSiteData.teachers.list;

        data.gallery = Array.isArray(data.gallery) && data.gallery.length > 0 ? data.gallery : defaultSiteData.gallery;
        data.contact.address = data.contact.address || defaultSiteData.contact.address;
        data.contact.officeHours = data.contact.officeHours || defaultSiteData.contact.officeHours;
        data.contact.email = data.contact.email || defaultSiteData.contact.email;
        data.contact.whatsapp = data.contact.whatsapp || defaultSiteData.contact.whatsapp;
        data.contact.phone = data.contact.phone || defaultSiteData.contact.phone;
        data.adminPasscode = data.adminPasscode || defaultSiteData.adminPasscode;

        return data;
      }

      // Firebase listener
      const siteDataRef = ref(db, "college_website_data");
      onValue(siteDataRef, (snapshot) => {
        const val = snapshot.val();
        if (val) {
          siteData = prepareSiteData(val);
          renderSite(siteData);
        } else {
          console.log("Seeding default college website data to Firebase...");
          set(siteDataRef, defaultSiteData)
            .then(() => {
              siteData = prepareSiteData(defaultSiteData);
              renderSite(siteData);
            })
            .catch((err) => {
              console.error("Firebase write error:", err);
              siteData = prepareSiteData(defaultSiteData);
              renderSite(siteData);
            });
        }

        const loader = document.getElementById("app-loader");
        if (loader) {
          loader.style.opacity = "0";
          setTimeout(() => { loader.style.visibility = "hidden"; }, 400);
        }
      }, (error) => {
        console.warn("Could not reach Firebase, using default rich data:", error);
        siteData = prepareSiteData(defaultSiteData);
        renderSite(siteData);
      });

      // Core Render Function
      function renderSite(data) {
        if (!data) return;

        // Branding
        const officialCollegeName = data.branding.collegeName;
        const logoUrl = data.branding.logoUrl;
        document.title = officialCollegeName + " | Official Portal";

        const navBrandTitle = document.getElementById("nav-brand-title");
        if (navBrandTitle) navBrandTitle.innerText = officialCollegeName;
        const heroCollegeName = document.getElementById("hero-college-name");
        if (heroCollegeName) heroCollegeName.innerText = officialCollegeName;
        const footerCollegeName = document.getElementById("footer-college-name");
        if (footerCollegeName) footerCollegeName.innerText = officialCollegeName;

        // Address & Hours
        const topbarAddr = document.getElementById("topbar-address");
        if (topbarAddr) topbarAddr.innerText = data.contact.address;
        const topbarHrs = document.getElementById("topbar-hours");
        if (topbarHrs) topbarHrs.innerText = data.contact.officeHours;

        // Hero
        const heroBanner = document.getElementById("home-hero-banner");
        if (heroBanner && data.home.heroBg) {
          heroBanner.style.backgroundImage = \`url('\${data.home.heroBg}')\`;
        }
        const heroSubtitle = document.getElementById("hero-subtitle-text");
        if (heroSubtitle) heroSubtitle.innerText = data.home.heroSubtitle;
        const heroPrimaryLabel = document.getElementById("hero-primary-label");
        if (heroPrimaryLabel) heroPrimaryLabel.innerText = data.home.primaryButtonLabel;
        const heroSecondaryLabel = document.getElementById("hero-secondary-label");
        if (heroSecondaryLabel) heroSecondaryLabel.innerText = data.home.secondaryButtonLabel;

        // Features
        const wcuTitle = document.getElementById("wcu-title");
        if (wcuTitle) wcuTitle.innerText = data.home.whyChooseUsTitle;
        const wcuDesc = document.getElementById("wcu-description");
        if (wcuDesc) wcuDesc.innerText = data.home.whyChooseUsDesc;
        const featuresContainer = document.getElementById("wcu-features-container");
        if (featuresContainer && data.home.features) {
          featuresContainer.innerHTML = data.home.features.map((feat) => \`
            <div class="feature-card tilt-card">
              <i class="fa-solid \${feat.icon} feat-icon"></i>
              <h3>\${feat.title}</h3>
              <p>\${feat.desc}</p>
            </div>
          \`).join("");
        }

        // Home Updates
        const updatesContainer = document.getElementById("home-updates-container");
        if (updatesContainer && data.home.updates) {
          updatesContainer.innerHTML = data.home.updates.map((item, idx) => \`
            <div class="notice" onclick="openNoticeModal(\${idx})">
              <div class="notice-date"><small>\${(item.tag || "NEWS").split(" ")[0]}</small>\${(item.tag || "").split(" ").slice(1).join(" ") || ""}</div>
              <div>
                <h4>\${item.title}</h4>
                <p>\${item.desc}</p>
              </div>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          \`).join("");
        }

        // Home Highlights
        const highlightsContainer = document.getElementById("home-highlights-container");
        if (highlightsContainer && data.home.highlights) {
          highlightsContainer.innerHTML = data.home.highlights.map((item) => \`
            <div class="event-card tilt-card" onclick="showPage('gallery')">
              <img src="\${item.imageUrl}" alt="\${item.title}" loading="lazy" />
              <div>
                <span>\${item.eyebrow}</span>
                <h4>\${item.title}</h4>
                <p>\${item.desc}</p>
              </div>
            </div>
          \`).join("");
        }

        // About Us
        const aboutTitle = document.getElementById("about-title-text");
        if (aboutTitle) aboutTitle.innerText = data.about.title;
        const aboutP1 = document.getElementById("about-paragraph1");
        if (aboutP1) aboutP1.innerText = data.about.paragraph1;
        const aboutP2 = document.getElementById("about-paragraph2");
        if (aboutP2) aboutP2.innerText = data.about.paragraph2;
        const visionDesc = document.getElementById("vision-desc-text");
        if (visionDesc) visionDesc.innerText = data.about.vision.desc;
        const missionDesc = document.getElementById("mission-desc-text");
        if (missionDesc) missionDesc.innerText = data.about.mission.desc;

        // Milestones
        const milestonesContainer = document.getElementById("college-milestones");
        if (milestonesContainer && data.about.milestones) {
          milestonesContainer.innerHTML = data.about.milestones.map((m) => \`
            <div class="stream-card tilt-card" style="border-left-color: var(--teal); padding: 1rem 1.4rem;">
              <h4 style="font-size: 1.05rem; margin-bottom: 0.3rem;"><i class="fa-solid \${m.icon}" style="color: var(--teal);"></i> \${m.title}</h4>
              <p style="font-size: 0.85rem; color: #475569;">\${m.desc}</p>
            </div>
          \`).join("");
        }

        // Academics & Streams
        const infoTitle = document.getElementById("info-title-text");
        if (infoTitle) infoTitle.innerText = data.info.title;
        const infoIntro = document.getElementById("info-intro-text");
        if (infoIntro) infoIntro.innerText = data.info.intro;
        const streamsContainer = document.getElementById("hsc-academic-streams");
        if (streamsContainer && data.info.streams) {
          streamsContainer.innerHTML = data.info.streams.map((stream, idx) => \`
            <div class="stream-card tilt-card" style="border-left-color: \${idx === 0 ? 'var(--teal)' : idx === 1 ? 'var(--gold)' : '#10b981'};">
              <h4><i class="fa-solid \${stream.icon}"></i> \${stream.title}</h4>
              <p>\${stream.desc}</p>
              <div class="stream-subjects-list">
                <strong>Key Electives:</strong> \${idx === 0 ? 'Physics, Chemistry, Biology, Higher Math' : idx === 1 ? 'Accounting, Finance, Business Org' : 'Civics, Economics, Social Work'}
              </div>
            </div>
          \`).join("");
        }
        const guidelinesTitle = document.getElementById("guidelines-title-text");
        if (guidelinesTitle) guidelinesTitle.innerHTML = \`<i class="fa-solid fa-circle-check" style="color: var(--teal); margin-right: 0.5rem;"></i>\${data.info.guidelinesTitle}\`;
        const guidelinesDesc = document.getElementById("guidelines-desc-text");
        if (guidelinesDesc) guidelinesDesc.innerText = data.info.guidelinesDesc;

        // Render Notices Page
        renderNotices(data.notices);

        // Render Teachers Page
        renderTeachers(data.teachers.list);

        // Render Gallery Page
        renderGallery(data.gallery);

        // Contact Section
        const contactIntro = document.getElementById("contact-intro-text");
        if (contactIntro) contactIntro.innerText = data.contact.intro;
        const valAddress = document.getElementById("val-address");
        if (valAddress) valAddress.innerText = data.contact.address;
        const footerAddressLabel = document.getElementById("footer-address-label");
        if (footerAddressLabel) footerAddressLabel.innerText = data.contact.address;

        const emailLink = document.getElementById("val-email-link");
        if (emailLink) {
          emailLink.href = \`mailto:\${data.contact.email}\`;
          emailLink.innerText = data.contact.email;
        }
        const waLink = document.getElementById("val-whatsapp-link");
        const waText = document.getElementById("val-whatsapp-text");
        if (waLink && waText) {
          waLink.href = \`https://api.whatsapp.com/send?phone=\${data.contact.whatsapp}\`;
          waText.innerText = data.contact.whatsapp;
        }
        const phoneLink = document.getElementById("val-phone-link");
        if (phoneLink) {
          phoneLink.href = \`tel:\${data.contact.phone}\`;
          phoneLink.innerText = data.contact.phone;
        }

        // Populate CMS forms if admin is currently active
        if (isAdminLoggedIn) {
          populateCMSForms();
        }
      }

      // Render Notices List & Filters
      function renderNotices(noticesList) {
        const container = document.getElementById("full-notices-container");
        if (!container) return;
        const list = noticesList || defaultSiteData.notices;

        container.innerHTML = list.map((notice, idx) => \`
          <div class="notice-card tilt-card" onclick="openNoticeModal(\${idx})">
            <div>
              <div class="notice-card-top">
                <span class="notice-category-badge">\${notice.category || 'Circular'}</span>
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--muted);"><i class="fa-regular fa-calendar"></i> \${notice.date}</span>
              </div>
              <h4>\${notice.title}</h4>
              <p>\${notice.desc}</p>
            </div>
            <div class="notice-card-footer">
              <span><i class="fa-solid fa-file-lines" style="color: var(--teal); margin-right: 0.3rem;"></i> View Circular</span>
              <i class="fa-solid fa-arrow-right" style="color: var(--teal);"></i>
            </div>
          </div>
        \`).join("");
      }

      // Render Teachers
      function renderTeachers(teachersList) {
        const grid = document.getElementById("teachers-grid-list");
        if (!grid) return;
        const list = teachersList || defaultSiteData.teachers.list;

        grid.innerHTML = list.map((teacher) => \`
          <article class="teacher-card tilt-card">
            <div class="teacher-photo-wrapper">
              <img class="teacher-photo" src="\${teacher.photoUrl || '/school-logo-transparent.png'}" alt="\${teacher.name}" loading="lazy" onerror="this.src='/school-logo-transparent.png'" />
            </div>
            <div class="teacher-meta">
              <div class="teacher-name">\${teacher.name}</div>
              <div class="teacher-designation">\${teacher.designation}</div>
              <div class="teacher-subject">Subject: \${teacher.subject}</div>
              <div class="teacher-actions">
                <a class="teacher-btn call" href="tel:\${teacher.contact}"><i class="fa-solid fa-phone"></i> Call</a>
                <a class="teacher-btn wa" href="https://api.whatsapp.com/send?phone=\${teacher.contact}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp"></i> Chat</a>
              </div>
            </div>
          </article>
        \`).join("");
      }

      // Render Gallery
      function renderGallery(galleryList) {
        const grid = document.getElementById("college-gallery-grid");
        if (!grid) return;
        const list = galleryList && galleryList.length > 0 ? galleryList : defaultSiteData.gallery;

        grid.innerHTML = list.map((item, index) => \`
          <div class="gallery-item tilt-card" onclick="openLightbox(\${index})">
            <img src="\${item.url}" alt="\${item.caption}" loading="lazy" onerror="this.src='/school-logo-transparent.png'" />
            <div class="gallery-caption">\${item.caption}</div>
          </div>
        \`).join("");
      }

      // Navigation Router
      window.showPage = function(pageId) {
        const sections = document.querySelectorAll('.page-section');
        sections.forEach((section) => section.classList.remove('active-page'));

        const targetSection = document.getElementById(pageId);
        if (targetSection) {
          targetSection.classList.add('active-page');
        }

        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach((link) => {
          link.classList.remove('active-link');
          link.removeAttribute('aria-current');
        });

        const targetNavLink = document.getElementById('nav-' + pageId);
        if (targetNavLink) {
          targetNavLink.classList.add('active-link');
          targetNavLink.setAttribute('aria-current', 'page');
        }

        if (window.location.hash !== '#' + pageId) {
          history.pushState({ pageId }, '', '#' + pageId);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      window.addEventListener('DOMContentLoaded', () => {
        const initialPage = window.location.hash.slice(1);
        window.showPage(document.getElementById(initialPage) ? initialPage : 'home');
      });
      window.addEventListener('popstate', () => {
        const pageId = window.location.hash.slice(1);
        window.showPage(document.getElementById(pageId) ? pageId : 'home');
      });

      // Interactive HSC Calculator Engine
      let currentGpa = 5.00;
      let currentGroup = 'science';

      function evaluateCalculator(gpa, group) {
        let isEligible = true;
        let minRequired = 2.50;
        let waiverText = "Standard Tuition Fee";
        let desc = "You meet the general qualification standards for this group.";
        let subjects = "";

        if (group === 'science') {
          minRequired = 4.00;
          subjects = "Bangla, English, ICT, Physics, Chemistry, Biology / Higher Mathematics.";
        } else if (group === 'business') {
          minRequired = 3.00;
          subjects = "Bangla, English, ICT, Accounting, Finance & Banking, Business Organization & Management.";
        } else {
          minRequired = 2.50;
          subjects = "Bangla, English, ICT, Civics & Good Governance, Economics, Logic / Social Work.";
        }

        if (gpa < minRequired) {
          isEligible = false;
          waiverText = \`Minimum GPA \${minRequired.toFixed(2)} Required\`;
          desc = \`The \${group.toUpperCase()} stream requires at least GPA \${minRequired.toFixed(2)}. Please consider another academic group or speak with the admission advisor.\`;
        } else {
          if (gpa >= 5.00) {
            waiverText = "🏆 100% Tuition Fee Merit Waiver";
            desc = "Outstanding achievement! Golden GPA 5.00 achievers qualify for full tuition fee waiver, special academic mentorship, and priority lab access.";
          } else if (gpa >= 4.50) {
            waiverText = "🥈 50% Tuition Fee Merit Waiver";
            desc = "Excellent result! Candidates with GPA 4.50–4.99 qualify for a 50% tuition reduction under the college talent encouragement scholarship.";
          } else if (gpa >= 4.00) {
            waiverText = "🥉 25% Tuition Fee Merit Waiver";
            desc = "Great performance! You are eligible for a 25% talent tuition waiver.";
          }
        }

        return { isEligible, waiverText, desc, subjects };
      }

      function updateCalculatorUi(prefix = 'home') {
        const res = evaluateCalculator(currentGpa, currentGroup);
        const textElem = document.getElementById(\`\${prefix}-scholarship-text\`);
        const descElem = document.getElementById(\`\${prefix}-eligibility-desc\`);
        if (textElem) textElem.innerText = res.waiverText;
        if (descElem) descElem.innerText = res.desc;

        // Modal elements
        if (prefix === 'modal') {
          const badge = document.getElementById("modal-res-badge");
          const waiver = document.getElementById("modal-res-waiver");
          const desc = document.getElementById("modal-res-desc");
          const subj = document.getElementById("modal-res-subjects");
          if (badge) {
            badge.innerHTML = res.isEligible 
              ? '<i class="fa-solid fa-circle-check"></i> Eligible for Admission' 
              : '<i class="fa-solid fa-triangle-exclamation"></i> Does Not Meet Minimum GPA';
            badge.style.background = res.isEligible ? '#d1fae5' : '#fee2e2';
            badge.style.color = res.isEligible ? '#065f46' : '#991b1b';
          }
          if (waiver) waiver.innerText = res.waiverText;
          if (desc) desc.innerText = res.desc;
          if (subj) subj.innerHTML = \`<strong>Curriculum Subjects:</strong> \${res.subjects}\`;
        }
      }

      // Bind calculator buttons
      ['home', 'modal'].forEach((prefix) => {
        const gpaSelector = document.getElementById(\`\${prefix}-gpa-selector\`);
        const groupSelector = document.getElementById(\`\${prefix}-group-selector\`);

        gpaSelector?.addEventListener('click', (e) => {
          const btn = e.target.closest('.gpa-btn');
          if (btn) {
            gpaSelector.querySelectorAll('.gpa-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            currentGpa = parseFloat(btn.dataset.gpa) || 5.00;
            updateCalculatorUi(prefix);
          }
        });

        groupSelector?.addEventListener('click', (e) => {
          const btn = e.target.closest('.gpa-btn');
          if (btn) {
            groupSelector.querySelectorAll('.gpa-btn').forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            currentGroup = btn.dataset.group || 'science';
            updateCalculatorUi(prefix);
          }
        });
      });

      // Modals Logic
      window.openCalcModal = function() {
        document.getElementById('calc-modal')?.classList.add('open');
        updateCalculatorUi('modal');
      };
      window.closeCalcModal = function() {
        document.getElementById('calc-modal')?.classList.remove('open');
      };

      window.openNoticeModal = function(index) {
        const noticeList = siteData?.notices || defaultSiteData.notices;
        const notice = noticeList[index] || noticeList[0];
        if (!notice) return;

        document.getElementById('modal-notice-title').innerText = notice.title;
        document.getElementById('modal-notice-date').innerHTML = \`<i class="fa-solid fa-calendar-days"></i> \${notice.date}\`;
        document.getElementById('modal-notice-body').innerHTML = \`<p>\${notice.body || notice.desc}</p><p style="margin-top: 1rem; font-size: 0.9rem; color: #64748b;">Notice Reference: GCPC/2026/ACAD-\${index + 101}</p>\`;
        document.getElementById('notice-modal')?.classList.add('open');
      };
      window.closeNoticeModal = function() {
        document.getElementById('notice-modal')?.classList.remove('open');
      };

      window.openMapModal = function() {
        document.getElementById('map-modal')?.classList.add('open');
      };
      window.closeMapModal = function() {
        document.getElementById('map-modal')?.classList.remove('open');
      };

      // Lightbox Logic
      let currentLightboxIndex = 0;
      window.openLightbox = function(index) {
        const gallery = siteData?.gallery || defaultSiteData.gallery;
        if (!gallery || gallery.length === 0) return;
        currentLightboxIndex = index % gallery.length;
        updateLightboxImage();
        document.getElementById('lightbox-modal')?.classList.add('open');
      };
      window.closeLightbox = function() {
        document.getElementById('lightbox-modal')?.classList.remove('open');
      };
      window.prevLightboxImage = function() {
        const gallery = siteData?.gallery || defaultSiteData.gallery;
        currentLightboxIndex = (currentLightboxIndex - 1 + gallery.length) % gallery.length;
        updateLightboxImage();
      };
      window.nextLightboxImage = function() {
        const gallery = siteData?.gallery || defaultSiteData.gallery;
        currentLightboxIndex = (currentLightboxIndex + 1) % gallery.length;
        updateLightboxImage();
      };
      function updateLightboxImage() {
        const gallery = siteData?.gallery || defaultSiteData.gallery;
        const img = document.getElementById('lightbox-img');
        const cap = document.getElementById('lightbox-caption');
        if (img && gallery[currentLightboxIndex]) {
          img.src = gallery[currentLightboxIndex].url;
          cap.innerText = gallery[currentLightboxIndex].caption || '';
        }
      }

      // Keyboard navigation for modals
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeCalcModal();
          closeNoticeModal();
          closeMapModal();
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          prevLightboxImage();
        } else if (e.key === 'ArrowRight') {
          nextLightboxImage();
        }
      });

      // Notice Search & Filters
      const noticeSearch = document.getElementById('notice-search-input');
      const noticePills = document.getElementById('notice-filter-pills');
      let activeNoticeFilter = 'all';

      function filterNotices() {
        const list = siteData?.notices || defaultSiteData.notices;
        const query = noticeSearch?.value.toLowerCase().trim() || '';
        const filtered = list.filter((n) => {
          const matchCategory = activeNoticeFilter === 'all' || (n.category && n.category.toLowerCase() === activeNoticeFilter);
          const matchQuery = !query || n.title.toLowerCase().includes(query) || n.desc.toLowerCase().includes(query);
          return matchCategory && matchQuery;
        });
        renderNotices(filtered);
      }
      noticeSearch?.addEventListener('input', filterNotices);
      noticePills?.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (btn) {
          noticePills.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'));
          btn.classList.add('active');
          activeNoticeFilter = btn.dataset.filter || 'all';
          filterNotices();
        }
      });

      // Teacher Search & Filters
      const teacherSearch = document.getElementById('teacher-search-input');
      const teacherPills = document.getElementById('teacher-filter-pills');
      let activeTeacherDept = 'all';

      function filterTeachers() {
        const list = siteData?.teachers?.list || defaultSiteData.teachers.list;
        const query = teacherSearch?.value.toLowerCase().trim() || '';
        const filtered = list.filter((t) => {
          const matchQuery = !query || t.name.toLowerCase().includes(query) || t.subject.toLowerCase().includes(query);
          return matchQuery;
        });
        renderTeachers(filtered);
      }
      teacherSearch?.addEventListener('input', filterTeachers);

      // Bilingual Language Switcher Toggle
      window.toggleLanguage = function() {
        currentLang = currentLang === 'en' ? 'bn' : 'en';
        const langText = document.getElementById('lang-btn-text');
        if (langText) langText.innerText = currentLang === 'en' ? 'বাংলা' : 'English';
        const subtitle = document.getElementById('hero-subtitle-text');
        if (subtitle) {
          subtitle.innerText = currentLang === 'bn'
            ? 'আধুনিক, মানসম্মত এবং কর্মমুখী শিক্ষার এক নির্ভরযোগ্য বিদ্যাপীঠ। ভবিষ্যৎ চ্যালেঞ্জ মোকাবিলার জন্য শিক্ষার্থীদের প্রস্তুত করতে আমরা অঙ্গীকারবদ্ধ।'
            : (siteData?.home?.heroSubtitle || defaultSiteData.home.heroSubtitle);
        }
        showToast(\`Language switched to \${currentLang === 'en' ? 'English' : 'বাংলা'}\`);
      };

      // Toast Display
      window.showToast = function(msg) {
        const toast = document.getElementById("save-toast");
        const toastMsg = document.getElementById("toast-message");
        if (toast && toastMsg) {
          toastMsg.innerText = msg;
          toast.classList.add("visible");
          setTimeout(() => {
            toast.classList.remove("visible");
          }, 4000);
        }
      };

      // ================= ADMIN CMS INTERACTIONS =================
      const loginForm = document.getElementById("admin-login-form");
      const passcodeInp = document.getElementById("admin-passcode-input");
      const loginError = document.getElementById("admin-login-error");
      const loginContainer = document.getElementById("admin-login-form-container");
      const panelContainer = document.getElementById("admin-panel-container");

      loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const entered = passcodeInp.value.trim();
        // Master recovery passcode is admin123!
        if (entered === "admin123" || (siteData && entered === siteData.adminPasscode)) {
          isAdminLoggedIn = true;
          loginError.style.display = "none";
          passcodeInp.value = "";
          loginContainer.style.display = "none";
          panelContainer.style.display = "block";
          populateCMSForms();
          showToast("Authenticated successfully! Live CMS unlocked.");
        } else {
          loginError.style.display = "block";
        }
      });

      window.logoutAdmin = function() {
        isAdminLoggedIn = false;
        panelContainer.style.display = "none";
        loginContainer.style.display = "block";
        showToast("Logged out from admin panel.");
      };
      document.getElementById("admin-logout-btn")?.addEventListener("click", () => window.logoutAdmin());

      // Admin Tab Switching
      const adminTabBtns = document.querySelectorAll(".admin-tab-btn");
      adminTabBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          adminTabBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          const targetId = btn.dataset.tab;
          document.querySelectorAll(".admin-tab-content").forEach((content) => {
            content.classList.toggle("active", content.id === targetId);
          });
        });
      });

      // Populate CMS input forms with live database values
      function populateCMSForms() {
        if (!siteData) return;
        document.getElementById("inp-brand-name").value = siteData.branding.collegeName || "";
        document.getElementById("inp-brand-logo-url").value = siteData.branding.logoUrl || "";

        document.getElementById("inp-home-kicker").value = siteData.home.kicker || "";
        document.getElementById("inp-home-hero-title").value = siteData.home.heroTitle || "";
        document.getElementById("inp-home-hero-subtitle").value = siteData.home.heroSubtitle || "";
        document.getElementById("inp-home-hero-bg").value = siteData.home.heroBg || "";
        document.getElementById("inp-home-primary-label").value = siteData.home.primaryButtonLabel || "";
        document.getElementById("inp-home-secondary-label").value = siteData.home.secondaryButtonLabel || "";
        document.getElementById("inp-home-wcu-title").value = siteData.home.whyChooseUsTitle || "";
        document.getElementById("inp-home-wcu-desc").value = siteData.home.whyChooseUsDesc || "";

        document.getElementById("inp-about-title").value = siteData.about.title || "";
        document.getElementById("inp-about-p1").value = siteData.about.paragraph1 || "";
        document.getElementById("inp-about-p2").value = siteData.about.paragraph2 || "";
        document.getElementById("inp-about-vision-desc").value = siteData.about.vision?.desc || "";
        document.getElementById("inp-about-mission-desc").value = siteData.about.mission?.desc || "";

        document.getElementById("inp-info-title").value = siteData.info.title || "";
        document.getElementById("inp-info-intro").value = siteData.info.intro || "";
        document.getElementById("inp-info-guidelines-title").value = siteData.info.guidelinesTitle || "";
        document.getElementById("inp-info-guidelines-desc").value = siteData.info.guidelinesDesc || "";

        document.getElementById("inp-contact-title").value = siteData.contact.title || "";
        document.getElementById("inp-contact-intro").value = siteData.contact.intro || "";
        document.getElementById("inp-contact-address").value = siteData.contact.address || "";
        document.getElementById("inp-contact-hours").value = siteData.contact.officeHours || "";
        document.getElementById("inp-contact-email").value = siteData.contact.email || "";
        document.getElementById("inp-contact-whatsapp").value = siteData.contact.whatsapp || "";
        document.getElementById("inp-contact-phone").value = siteData.contact.phone || "";

        document.getElementById("inp-security-passcode").value = siteData.adminPasscode || "admin123";

        populateTeacherRows();
        populateGalleryRows();
      }

      function populateTeacherRows() {
        const container = document.getElementById("admin-teachers-rows-container");
        if (!container || !siteData?.teachers?.list) return;

        container.innerHTML = siteData.teachers.list.map((teacher, index) => \`
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1rem; display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">
            <img src="\${teacher.photoUrl}" alt="\${teacher.name}" width="50" height="50" style="border-radius:50%; object-fit:cover;" onerror="this.src='/school-logo-transparent.png'" />
            <div style="flex:1; min-width:200px;">
              <strong>\${teacher.name}</strong> (\${teacher.designation})<br />
              <small style="color:#64748b;">\${teacher.subject} · \${teacher.contact}</small>
            </div>
            <button type="button" class="hero-btn secondary" onclick="deleteTeacherRow(\${index})" style="min-height:34px; padding:0.3rem 0.8rem; color:#ef4444; border-color:#fca5a5; font-size:0.8rem;">
              <i class="fa-solid fa-trash"></i> Remove
            </button>
          </div>
        \`).join("");
      }

      function populateGalleryRows() {
        const container = document.getElementById("admin-gallery-rows-container");
        if (!container || !siteData?.gallery) return;

        container.innerHTML = siteData.gallery.map((item, index) => \`
          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:1rem; display:flex; gap:1rem; align-items:center;">
            <img src="\${item.url}" alt="\${item.caption}" width="60" height="45" style="border-radius:6px; object-fit:cover;" onerror="this.src='/school-logo-transparent.png'" />
            <div style="flex:1;">
              <strong>\${item.caption}</strong>
            </div>
            <button type="button" class="hero-btn secondary" onclick="deleteGalleryRow(\${index})" style="min-height:34px; padding:0.3rem 0.8rem; color:#ef4444; border-color:#fca5a5; font-size:0.8rem;">
              <i class="fa-solid fa-trash"></i> Delete
            </button>
          </div>
        \`).join("");
      }

      window.deleteTeacherRow = function(index) {
        if (!confirm("Are you sure you want to remove this faculty profile?")) return;
        siteData.teachers.list.splice(index, 1);
        writeSiteDataToFirebase("Teacher profile removed.");
      };

      window.deleteGalleryRow = function(index) {
        if (!confirm("Are you sure you want to delete this photo from the gallery?")) return;
        siteData.gallery.splice(index, 1);
        writeSiteDataToFirebase("Gallery image removed.");
      };

      // Admin Form Submit Listeners
      document.getElementById("form-branding")?.addEventListener("submit", (e) => {
        e.preventDefault();
        siteData.branding.collegeName = document.getElementById("inp-brand-name").value.trim();
        siteData.branding.logoUrl = document.getElementById("inp-brand-logo-url").value.trim();
        writeSiteDataToFirebase("Branding details updated!");
      });

      document.getElementById("form-home")?.addEventListener("submit", (e) => {
        e.preventDefault();
        siteData.home.kicker = document.getElementById("inp-home-kicker").value.trim();
        siteData.home.heroTitle = document.getElementById("inp-home-hero-title").value.trim();
        siteData.home.heroSubtitle = document.getElementById("inp-home-hero-subtitle").value.trim();
        siteData.home.heroBg = document.getElementById("inp-home-hero-bg").value.trim();
        siteData.home.primaryButtonLabel = document.getElementById("inp-home-primary-label").value.trim();
        siteData.home.secondaryButtonLabel = document.getElementById("inp-home-secondary-label").value.trim();
        siteData.home.whyChooseUsTitle = document.getElementById("inp-home-wcu-title").value.trim();
        siteData.home.whyChooseUsDesc = document.getElementById("inp-home-wcu-desc").value.trim();
        writeSiteDataToFirebase("Home settings saved!");
      });

      document.getElementById("form-about")?.addEventListener("submit", (e) => {
        e.preventDefault();
        siteData.about.title = document.getElementById("inp-about-title").value.trim();
        siteData.about.paragraph1 = document.getElementById("inp-about-p1").value.trim();
        siteData.about.paragraph2 = document.getElementById("inp-about-p2").value.trim();
        siteData.about.vision.desc = document.getElementById("inp-about-vision-desc").value.trim();
        siteData.about.mission.desc = document.getElementById("inp-about-mission-desc").value.trim();
        writeSiteDataToFirebase("About Us settings saved!");
      });

      document.getElementById("form-info")?.addEventListener("submit", (e) => {
        e.preventDefault();
        siteData.info.title = document.getElementById("inp-info-title").value.trim();
        siteData.info.intro = document.getElementById("inp-info-intro").value.trim();
        siteData.info.guidelinesTitle = document.getElementById("inp-info-guidelines-title").value.trim();
        siteData.info.guidelinesDesc = document.getElementById("inp-info-guidelines-desc").value.trim();
        writeSiteDataToFirebase("Academic configuration saved!");
      });

      document.getElementById("form-contact")?.addEventListener("submit", (e) => {
        e.preventDefault();
        siteData.contact.title = document.getElementById("inp-contact-title").value.trim();
        siteData.contact.intro = document.getElementById("inp-contact-intro").value.trim();
        siteData.contact.address = document.getElementById("inp-contact-address").value.trim();
        siteData.contact.officeHours = document.getElementById("inp-contact-hours").value.trim();
        siteData.contact.email = document.getElementById("inp-contact-email").value.trim();
        siteData.contact.whatsapp = document.getElementById("inp-contact-whatsapp").value.trim();
        siteData.contact.phone = document.getElementById("inp-contact-phone").value.trim();
        writeSiteDataToFirebase("Contact information saved!");
      });

      document.getElementById("form-security")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const next = document.getElementById("inp-security-passcode").value.trim();
        if (!next) return;
        siteData.adminPasscode = next;
        writeSiteDataToFirebase("Security passcode changed successfully!");
      });

      // Teacher Upload Form
      document.getElementById("form-teacher-add")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("inp-teacher-new-name").value.trim();
        const subject = document.getElementById("inp-teacher-new-subject").value.trim();
        const designation = document.getElementById("inp-teacher-new-designation").value.trim();
        const contact = document.getElementById("inp-teacher-new-contact").value.trim();
        const fileInput = document.getElementById("inp-teacher-new-file");
        const file = fileInput.files?.[0];

        if (!file) {
          alert("Please select a teacher photo file.");
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          siteData.teachers.list.push({
            id: String(Date.now()),
            photoUrl: String(reader.result || "/school-logo-transparent.png"),
            name,
            subject,
            designation,
            contact
          });
          writeSiteDataToFirebase("New faculty member added!");
          e.target.reset();
        };
        reader.readAsDataURL(file);
      });

      // Gallery Upload Form
      document.getElementById("form-gallery-add")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const caption = document.getElementById("inp-gallery-new-caption").value.trim();
        const fileInput = document.getElementById("inp-gallery-new-file");
        const file = fileInput.files?.[0];

        if (!file) {
          alert("Please select a photo file first.");
          return;
        }

        const reader = new FileReader();
        reader.onload = () => {
          siteData.gallery.push({
            id: String(Date.now()),
            url: String(reader.result || ""),
            caption
          });
          writeSiteDataToFirebase("Photo uploaded to campus gallery!");
          e.target.reset();
        };
        reader.readAsDataURL(file);
      });

      function writeSiteDataToFirebase(msg) {
        set(siteDataRef, siteData)
          .then(() => {
            showToast(msg);
            renderSite(siteData);
          })
          .catch((err) => {
            console.error("Firebase write error:", err);
            alert("Error committing changes: " + err.message);
          });
      }
    </script>
`;
