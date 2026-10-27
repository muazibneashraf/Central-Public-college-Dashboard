export const markup = `
    <!-- Top Announcement Live Marquee Ticker -->
    <div class="ticker-bar" id="live-ticker-bar">
      <div class="ticker-badge"><i class="fa-solid fa-bullhorn"></i> ANNOUNCEMENT</div>
      <div class="ticker-content" id="ticker-content-track">
        <span class="ticker-item"><i class="fa-solid fa-graduation-cap"></i> <strong>Admissions Open:</strong> Online registration and academic counseling ongoing. <a onclick="showPage('info')">Explore Streams & Requirements</a></span>
        <span class="ticker-item"><i class="fa-solid fa-award"></i> <strong>Merit Scholarships:</strong> Up to 100% tuition waiver for outstanding academic achievers. <a onclick="openCalcModal()">Calculate Fee Waiver</a></span>
        <span class="ticker-item"><i class="fa-solid fa-microscope"></i> <strong>Modern Campus:</strong> State-of-the-art science laboratories and high-speed digital computing center.</span>
        <span class="ticker-item"><i class="fa-solid fa-phone-volume"></i> <strong>Admissions Help Desk:</strong> Direct telephone & WhatsApp counseling available.</span>
      </div>
    </div>

    <!-- Secondary School Topbar -->
    <div class="school-topbar">
      <div class="topbar-inner">
        <div class="topbar-left">
          <span class="topbar-item" id="topbar-address-wrap"><i class="fa-solid fa-location-dot"></i> <span id="topbar-address">College Avenue, Academic District</span></span>
          <span class="topbar-item"><i class="fa-solid fa-clock"></i> <span id="topbar-hours">Sun–Thu · 8:00 AM–3:30 PM</span></span>
          <span class="eiin-badge"><i class="fa-solid fa-shield-halved"></i> Board Affiliated Institution · Code: 131217</span>
        </div>
        <div class="topbar-right">
          <a class="topbar-item" href="tel:01309131217" id="topbar-phone"><i class="fa-solid fa-phone"></i> 01309-131217</a>
          <a class="topbar-item" href="https://api.whatsapp.com/send?phone=8801776371675" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp" style="color:#25d366;"></i> WhatsApp Desk</a>
          <button class="lang-switch-btn" type="button" onclick="toggleLanguage()"><i class="fa-solid fa-globe"></i> <span id="lang-btn-text">বাংলা</span></button>
        </div>
      </div>
    </div>

    <!-- Header & Navigation -->
    <header id="site-header">
      <div class="nav-container">
        <a class="logo" id="branding-logo" href="#home" onclick="showPage('home'); return false;">
          <div class="logo-img-wrapper">
            <img src="/school-logo-transparent.png" alt="Central Public College crest" width="40" height="40" />
          </div>
          <div class="brand-text-block">
            <span class="brand-title" id="nav-brand-title">Central Public College</span>
            <span class="brand-subtitle">Excellence · Integrity · Leadership</span>
          </div>
        </a>

        <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation menu">
          <i class="fa-solid fa-bars"></i>
        </button>

        <nav id="navbar-links">
          <button class="nav-link active-link" type="button" onclick="showPage('home')" id="nav-home" aria-current="page"><i class="fa-solid fa-house"></i> Home</button>
          <button class="nav-link" type="button" onclick="showPage('about')" id="nav-about"><i class="fa-solid fa-landmark"></i> About</button>
          <button class="nav-link" type="button" onclick="showPage('info')" id="nav-info"><i class="fa-solid fa-book-open"></i> Academics</button>
          <button class="nav-link" type="button" onclick="showPage('notices')" id="nav-notices"><i class="fa-solid fa-bullhorn"></i> Notices</button>
          <button class="nav-link" type="button" onclick="showPage('teachers')" id="nav-teachers"><i class="fa-solid fa-chalkboard-user"></i> Faculty</button>
          <button class="nav-link" type="button" onclick="showPage('facilities')" id="nav-facilities"><i class="fa-solid fa-building-columns"></i> Facilities</button>
          <button class="nav-link" type="button" onclick="showPage('gallery')" id="nav-gallery"><i class="fa-solid fa-images"></i> Gallery</button>
          <button class="nav-link" type="button" onclick="showPage('contact')" id="nav-contact"><i class="fa-solid fa-envelope"></i> Contact</button>
          <button class="nav-link" type="button" onclick="openCalcModal()" id="nav-calc-btn"><i class="fa-solid fa-calculator"></i> Eligibility</button>
          <button class="nav-link" type="button" onclick="showPage('admin')" id="nav-admin"><i class="fa-solid fa-lock"></i> Admin</button>
        </nav>
      </div>
    </header>

    <!-- Main Content Area -->
    <main id="main-content-area">

      <!-- ================= 1. HOME SECTION ================= -->
      <div class="page-section active-page" id="home">
        
        <!-- Hero Section -->
        <div class="hero tilt-card" id="home-hero-banner">
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <div class="hero-kicker" id="hero-kicker-tag">
              <i class="fa-solid fa-award"></i> Board Accredited Higher Secondary College · Code: 131217
            </div>
            <h1 id="hero-title-text">
              <span class="welcome-line">Welcome to</span>
              <strong id="hero-college-name">Central Public College</strong>
            </h1>
            <p id="hero-subtitle-text">
              A premier institution fostering intellectual curiosity, moral integrity, and modern technological competence. Empowering learners with cutting-edge laboratories, dedicated mentorship, and an exam-focused curriculum designed for higher educational success.
            </p>
            <div class="hero-actions">
              <button class="hero-btn primary" type="button" onclick="showPage('info')">
                <span id="hero-primary-label">Explore academics</span> <i class="fa-solid fa-arrow-right"></i>
              </button>
              <button class="hero-btn calc" type="button" onclick="openCalcModal()">
                <i class="fa-solid fa-calculator"></i> <span>Check Eligibility & Fees</span>
              </button>
              <button class="hero-btn secondary" type="button" onclick="showPage('contact')">
                <i class="fa-regular fa-comments"></i> <span id="hero-secondary-label">Admission enquiry</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Quick Access Dock -->
        <div class="quick-access" id="home-quick-links-container">
          <button class="quick-link tilt-card" type="button" onclick="showPage('info')">
            <i class="fa-solid fa-book-open"></i>
            <span><strong>Academic Programs</strong><small>Science, Commerce & Humanities</small></span>
          </button>
          <button class="quick-link tilt-card" type="button" onclick="showPage('notices')">
            <i class="fa-solid fa-bullhorn"></i>
            <span><strong>Notice Board</strong><small>Exams, routines & circulars</small></span>
          </button>
          <button class="quick-link tilt-card" type="button" onclick="showPage('facilities')">
            <i class="fa-solid fa-building-columns"></i>
            <span><strong>Campus Facilities</strong><small>Labs, library & IT center</small></span>
          </button>
          <button class="quick-link tilt-card" type="button" onclick="showPage('contact')">
            <i class="fa-solid fa-phone-volume"></i>
            <span><strong>Admissions Help</strong><small>Direct counseling helpline</small></span>
          </button>
        </div>

        <!-- Live Stats Band -->
        <div class="stats-band" id="home-stats-container">
          <div class="stat">
            <i class="fa-solid fa-layer-group stat-icon"></i>
            <span class="stat-number" data-target="3">3</span>
            <div class="stat-label">Academic Streams</div>
          </div>
          <div class="stat">
            <i class="fa-solid fa-circle-check stat-icon"></i>
            <span class="stat-number" data-target="100" data-suffix="%">100%</span>
            <div class="stat-label">Curriculum Standards</div>
          </div>
          <div class="stat">
            <i class="fa-solid fa-chalkboard-user stat-icon"></i>
            <span class="stat-number" data-target="20" data-suffix="+">20+</span>
            <div class="stat-label">Experienced Faculty</div>
          </div>
          <div class="stat">
            <i class="fa-solid fa-shield-heart stat-icon"></i>
            <span class="stat-number" data-target="24" data-suffix="/7">24/7</span>
            <div class="stat-label">Student Support Mindset</div>
          </div>
        </div>

        <!-- Why Choose Us Showcase -->
        <div class="content-box">
          <h2 id="wcu-title">Why Choose Us?</h2>
          <p id="wcu-description" style="color: #475569; font-size: 1.05rem; margin-bottom: 2rem;">
            Central Public College stands as a premier academic institution committed to preparing students for university admission and career achievement. Built upon pillars of discipline, modern laboratories, and individualized student care, we help scholars realize their full potential.
          </p>
          <div class="features-grid" id="wcu-features-container"></div>
        </div>

        <!-- Interactive Admission Eligibility & Fee Calculator Widget on Home -->
        <div class="calc-widget tilt-card">
          <div class="calc-header">
            <div>
              <span class="eyebrow"><i class="fa-solid fa-bolt"></i> Interactive Advisor</span>
              <h3><i class="fa-solid fa-calculator"></i> Admission & Scholarship Calculator</h3>
            </div>
            <button class="hero-btn primary" type="button" onclick="openCalcModal()" style="min-height: 40px; padding: 0.6rem 1.2rem; font-size: 0.85rem;">
              <i class="fa-solid fa-up-right-from-square"></i> Full Screen Calculator
            </button>
          </div>
          <div class="calc-body">
            <div class="calc-controls">
              <div class="calc-control-group">
                <label>1. Select Your SSC Result / GPA:</label>
                <div class="calc-gpa-buttons" id="home-gpa-selector">
                  <button type="button" class="gpa-btn active" data-gpa="5.00">GPA 5.00 (Golden)</button>
                  <button type="button" class="gpa-btn" data-gpa="4.80">GPA 4.50 - 4.99</button>
                  <button type="button" class="gpa-btn" data-gpa="4.20">GPA 4.00 - 4.49</button>
                  <button type="button" class="gpa-btn" data-gpa="3.50">GPA 3.50 - 3.99</button>
                  <button type="button" class="gpa-btn" data-gpa="3.00">GPA 3.00 - 3.49</button>
                  <button type="button" class="gpa-btn" data-gpa="2.50">GPA 2.50 - 2.99</button>
                </div>
              </div>
              <div class="calc-control-group">
                <label>2. Choose Academic Stream:</label>
                <div class="calc-gpa-buttons" id="home-group-selector">
                  <button type="button" class="gpa-btn active" data-group="science">Science</button>
                  <button type="button" class="gpa-btn" data-group="business">Business Studies</button>
                  <button type="button" class="gpa-btn" data-group="humanities">Humanities</button>
                </div>
              </div>
            </div>

            <div class="calc-result-box" id="home-calc-result">
              <div>
                <div class="result-badge"><i class="fa-solid fa-circle-check"></i> Eligible for Admission</div>
                <div class="scholarship-highlight" id="home-scholarship-text">🏆 100% Tuition Fee Merit Waiver</div>
                <p id="home-eligibility-desc" style="font-size: 0.9rem; color: #475569; margin: 0.5rem 0 1rem;">
                  Congratulations! Golden GPA 5.00 achievers qualify for full merit scholarship privileges, free textbook guidance, and specialized college coaching.
                </p>
                <div style="font-size: 0.85rem; font-weight: 700; color: var(--ink);">
                  Recommended Subjects: Physics, Chemistry, Biology / Higher Math, ICT, Core Language Courses
                </div>
              </div>
              <button class="hero-btn primary" type="button" onclick="showPage('contact')" style="margin-top: 1rem; width: 100%; justify-content: center;">
                <i class="fa-solid fa-file-pen"></i> Apply for Next Batch
              </button>
            </div>
          </div>
        </div>

        <!-- School Grid: Latest Notices & Campus Highlights -->
        <div class="school-grid">
          <div class="news-panel tilt-card">
            <div class="mini-title">
              <div>
                <span class="eyebrow">College Circulars</span>
                <h3>Latest Updates & Notices</h3>
              </div>
              <button class="text-link" type="button" onclick="showPage('notices')">All Notices <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div id="home-updates-container"></div>
          </div>

          <div class="events-panel tilt-card">
            <div class="mini-title">
              <div>
                <span class="eyebrow">Campus Life</span>
                <h3>Student Activities in Motion</h3>
              </div>
              <button class="text-link" type="button" onclick="showPage('gallery')">View gallery <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div id="home-highlights-container"></div>
          </div>
        </div>

        <!-- Admission Banner -->
        <div class="admission-banner tilt-card">
          <div>
            <span class="eyebrow" id="home-admission-eyebrow" style="color: rgba(4,35,44,.75);">Start your future here</span>
            <h2 id="home-admission-title">Looking for a serious, supportive place to continue higher secondary study?</h2>
            <p id="home-admission-desc">Visit our college campus, explore the academic streams, and speak with our admissions counseling team to begin your journey.</p>
          </div>
          <button class="hero-btn section-cta" type="button" onclick="showPage('contact')" id="home-admission-button">
            <span>Contact admissions</span> <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>

      </div>

      <!-- ================= 2. ABOUT US SECTION ================= -->
      <div class="page-section" id="about">
        <div class="content-box">
          <h2 id="about-title-text">About The College</h2>
          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2.5rem; align-items: start; margin-top: 1.5rem;">
            <div>
              <p id="about-paragraph1" style="color: #334155; font-size: 1.05rem; margin-bottom: 1.2rem; line-height: 1.7;"></p>
              <p id="about-paragraph2" style="color: #334155; font-size: 1.05rem; margin-bottom: 1.8rem; line-height: 1.7;"></p>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-top: 1.5rem;">
                <div class="stream-card tilt-card" style="border-left-color: var(--gold);">
                  <h4 id="vision-title-text"><i class="fa-solid fa-eye" style="color: var(--gold);"></i> Our Vision</h4>
                  <p id="vision-desc-text"></p>
                </div>
                <div class="stream-card tilt-card" style="border-left-color: var(--teal);">
                  <h4 id="mission-title-text"><i class="fa-solid fa-rocket" style="color: var(--teal);"></i> Our Mission</h4>
                  <p id="mission-desc-text"></p>
                </div>
              </div>
            </div>

            <div style="display: grid; gap: 1rem;">
              <div class="calc-widget" style="margin: 0; padding: 1.8rem;">
                <span class="eyebrow"><i class="fa-solid fa-quote-left"></i> Leadership Message</span>
                <h3 style="font-size: 1.15rem; margin: 0.5rem 0 0.8rem; color: var(--ink);">Principal's Academic Commitment</h3>
                <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; font-style: italic;">
                  "We foster an atmosphere of scholastic discipline, intellectual vigor, and moral uprightness. Every learner is guided individually to excel in standardized evaluations and cultivate lifelong competence."
                </p>
                <div style="margin-top: 1rem; font-weight: 800; font-size: 0.9rem; color: var(--teal);">
                  — Principal & Faculty Board
                </div>
              </div>

              <div class="about-badge-list" id="college-milestones" style="display: grid; gap: 0.8rem;">
                <!-- Dynamically populated milestones -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= 3. ACADEMIC INFO SECTION ================= -->
      <div class="page-section" id="info">
        <div class="content-box">
          <h2 id="info-title-text">Academic Information & Curriculum</h2>
          <p id="info-intro-text" style="color: #475569; font-size: 1.05rem; margin-bottom: 2rem; max-width: 900px; line-height: 1.7;"></p>
          
          <div class="academic-streams-container" id="hsc-academic-streams"></div>

          <!-- Board Curriculum Standards note -->
          <div class="calc-widget" style="border-left: 5px solid var(--teal); margin: 2.5rem 0;">
            <h3 id="guidelines-title-text" style="font-size: 1.25rem; margin-bottom: 0.6rem; color: var(--ink);">
              <i class="fa-solid fa-circle-check" style="color: var(--teal); margin-right: 0.5rem;"></i>Academic Standards & Guidelines
            </h3>
            <p id="guidelines-desc-text" style="color: #475569; line-height: 1.65;"></p>
          </div>

          <!-- FAQ Accordion -->
          <div style="margin-top: 3.5rem;">
            <span class="eyebrow">Common Inquiries</span>
            <h2>Frequently Asked Questions (FAQ)</h2>
            <div class="faq-accordion" id="academics-faq-list">
              <div class="faq-item">
                <div class="faq-question">What are the eligibility criteria for college admission? <i class="fa-solid fa-chevron-down"></i></div>
                <div class="faq-answer">Students must have completed their secondary certificate from a recognized board. The Science stream requires a minimum GPA of 4.00, Business Studies requires minimum GPA 3.00, and Humanities requires minimum GPA 2.50.</div>
              </div>
              <div class="faq-item">
                <div class="faq-question">What accreditation and code does the college hold? <i class="fa-solid fa-chevron-down"></i></div>
                <div class="faq-answer">The college is fully authorized by the designated secondary & higher secondary education board with institutional accreditation code 131217.</div>
              </div>
              <div class="faq-item">
                <div class="faq-question">Are merit scholarships or tuition fee waivers available? <i class="fa-solid fa-chevron-down"></i></div>
                <div class="faq-answer">Yes! Candidates with Golden GPA 5.00 receive up to a 100% tuition fee merit waiver. Students with GPA 5.00 receive a 50% waiver, and GPA 4.50-4.99 receive a 25% waiver.</div>
              </div>
              <div class="faq-item">
                <div class="faq-question">What are daily college class hours and attendance policy? <i class="fa-solid fa-chevron-down"></i></div>
                <div class="faq-answer">Regular classes operate Sunday through Thursday from 8:00 AM to 1:30 PM. A minimum 85% attendance rate is mandatory for board exam clearance. Science laboratory practicals are conducted in dedicated afternoon cohorts.</div>
              </div>
              <div class="faq-item">
                <div class="faq-question">How does online admission work? <i class="fa-solid fa-chevron-down"></i></div>
                <div class="faq-answer">Candidates can apply via the central online admission gateway or visit the college front counseling desk for direct guidance and document verification.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= 4. NOTICE BOARD SECTION ================= -->
      <div class="page-section" id="notices">
        <div class="content-box">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem;">
            <div>
              <span class="eyebrow">Institutional Circulars</span>
              <h2 style="margin-bottom: 0;">Notice Board & Circulars</h2>
            </div>
            <p style="color: var(--muted); font-size: 0.95rem;">Download, read, and verify official college circulars</p>
          </div>

          <!-- Controls: Filters & Real-Time Search -->
          <div class="notice-controls">
            <div class="filter-pills" id="notice-filter-pills">
              <button class="filter-pill active" type="button" data-filter="all">All Circulars</button>
              <button class="filter-pill" type="button" data-filter="admission">Admissions</button>
              <button class="filter-pill" type="button" data-filter="exam">Examinations</button>
              <button class="filter-pill" type="button" data-filter="routine">Routines</button>
              <button class="filter-pill" type="button" data-filter="holiday">Holidays</button>
            </div>
            <div class="search-box-wrapper">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" class="search-input" id="notice-search-input" placeholder="Search notices by keyword..." />
            </div>
          </div>

          <!-- Notices Grid -->
          <div class="notices-grid" id="full-notices-container"></div>
        </div>
      </div>

      <!-- ================= 5. TEACHERS SECTION ================= -->
      <div class="page-section" id="teachers">
        <div class="content-box">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <span class="eyebrow">Distinguished Educators</span>
              <h2 id="teachers-title-text" style="margin-bottom: 0;">Faculty & Mentors</h2>
            </div>
            <div class="search-box-wrapper">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" class="search-input" id="teacher-search-input" placeholder="Search faculty by name or subject..." />
            </div>
          </div>
          <p id="teachers-intro-text" style="color: #475569; font-size: 1.05rem; margin-bottom: 1.5rem;">
            Meet our experienced educators who guide students with scholarship, patience, and modern pedagogical discipline.
          </p>

          <!-- Department Filters -->
          <div class="filter-pills" id="teacher-filter-pills" style="margin-bottom: 2rem;">
            <button class="filter-pill active" type="button" data-dept="all">All Faculty</button>
            <button class="filter-pill" type="button" data-dept="science">Science</button>
            <button class="filter-pill" type="button" data-dept="business">Business Studies</button>
            <button class="filter-pill" type="button" data-dept="humanities">Humanities</button>
            <button class="filter-pill" type="button" data-dept="language">Language & ICT</button>
          </div>

          <div class="teachers-grid" id="teachers-grid-list"></div>
        </div>
      </div>

      <!-- ================= 6. CAMPUS FACILITIES SECTION ================= -->
      <div class="page-section" id="facilities">
        <div class="content-box">
          <span class="eyebrow">Modern Learning Environment</span>
          <h2>Campus Infrastructure & Facilities</h2>
          <p style="color: #475569; font-size: 1.05rem; margin-bottom: 2rem; max-width: 880px;">
            The college provides an inspiring, safe, and technologically enriched campus environment designed for high scholastic achievement, research, and student wellness.
          </p>

          <div class="facilities-grid">
            <div class="facility-card tilt-card">
              <div class="facility-icon"><i class="fa-solid fa-flask-vial"></i></div>
              <h3>Science Laboratories</h3>
              <p>Fully equipped Physics, Chemistry, and Biology laboratories equipped with digital microscopes, analytical balances, and safety apparatus for intensive practical research.</p>
              <div class="facility-tags">
                <span class="facility-tag">Physics Lab</span>
                <span class="facility-tag">Chemistry Lab</span>
                <span class="facility-tag">Biology Lab</span>
              </div>
            </div>

            <div class="facility-card tilt-card">
              <div class="facility-icon"><i class="fa-solid fa-laptop-code"></i></div>
              <h3>Computer & Digital Lab</h3>
              <p>High-speed broadband network with multi-core PC workstations, coding environments, and digital skills software for practicals and creative technology projects.</p>
              <div class="facility-tags">
                <span class="facility-tag">Gigabit LAN</span>
                <span class="facility-tag">Digital Skills</span>
                <span class="facility-tag">Individual Stations</span>
              </div>
            </div>

            <div class="facility-card tilt-card">
              <div class="facility-icon"><i class="fa-solid fa-book-bookmark"></i></div>
              <h3>Central Library & Archives</h3>
              <p>Over 5,000 reference texts, curriculum textbooks, academic journals, and a serene, air-cooled reading environment for uninterrupted research.</p>
              <div class="facility-tags">
                <span class="facility-tag">Quiet Reading Zone</span>
                <span class="facility-tag">Reference Collection</span>
              </div>
            </div>

            <div class="facility-card tilt-card">
              <div class="facility-icon"><i class="fa-solid fa-chalkboard"></i></div>
              <h3>Smart Interactive Classrooms</h3>
              <p>Classrooms equipped with ceiling-mounted visual projectors, smart interactive screens, and comfortable ergonomic seating arrangements.</p>
              <div class="facility-tags">
                <span class="facility-tag">AV Projection</span>
                <span class="facility-tag">CCTV Monitored</span>
              </div>
            </div>

            <div class="facility-card tilt-card">
              <div class="facility-icon"><i class="fa-solid fa-people-roof"></i></div>
              <h3>Auditorium & Seminar Hall</h3>
              <p>Dedicated indoor venue for debate competitions, science exhibitions, career guidance seminars, and cultural festivals seating 300+ attendees.</p>
              <div class="facility-tags">
                <span class="facility-tag">Debate Platform</span>
                <span class="facility-tag">Seminars</span>
              </div>
            </div>

            <div class="facility-card tilt-card">
              <div class="facility-icon"><i class="fa-solid fa-futbol"></i></div>
              <h3>Athletic Grounds & Wellness</h3>
              <p>Spacious open campus grounds for football, cricket, badminton, and indoor table tennis encouraging physical fitness, teamwork, and sportsmanship.</p>
              <div class="facility-tags">
                <span class="facility-tag">Outdoor Sports</span>
                <span class="facility-tag">Badminton Courts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= 7. GALLERY SECTION ================= -->
      <div class="page-section" id="gallery">
        <div class="content-box">
          <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <span class="eyebrow">Visual Tour</span>
              <h2 id="gallery-header-title" style="margin-bottom: 0;">Campus Photo Gallery</h2>
            </div>
            <div class="filter-pills" id="gallery-filter-pills">
              <button class="filter-pill active" type="button" data-filter="all">All Photos</button>
              <button class="filter-pill" type="button" data-filter="campus">Campus Life</button>
              <button class="filter-pill" type="button" data-filter="labs">Labs & Research</button>
              <button class="filter-pill" type="button" data-filter="events">Events & Co-Curricular</button>
            </div>
          </div>
          <p id="gallery-header-desc" style="color: #475569; font-size: 1.05rem; margin-bottom: 2rem;">
            Explore student activities, classroom sessions, laboratory practicals, and campus facilities. Click any image to view in full resolution.
          </p>

          <div class="gallery-grid" id="college-gallery-grid"></div>
        </div>
      </div>

      <!-- ================= 8. CONTACT US SECTION ================= -->
      <div class="page-section" id="contact">
        <div class="content-box">
          <span class="eyebrow">Connect With Us</span>
          <h2 id="contact-title-text">Contact Information & Admission Desk</h2>
          
          <div class="contact-layout">
            <div>
              <p id="contact-intro-text" style="color: #475569; font-size: 1.05rem; margin-bottom: 2rem; line-height: 1.65;"></p>
              
              <ul class="contact-info-list" id="contact-list-details">
                <li id="contact-addr">
                  <i class="fa-solid fa-location-dot"></i>
                  <div>
                    <span class="contact-label">Campus Location</span>
                    <div class="contact-value" id="val-address">College Avenue, Academic District</div>
                    <button type="button" onclick="openMapModal()" style="border: 0; background: none; color: var(--teal); font-weight: 700; font-size: 0.85rem; cursor: pointer; margin-top: 0.3rem; display: inline-flex; align-items: center; gap: 0.3rem;">
                      <i class="fa-solid fa-map-location-dot"></i> View Transit & Campus Map
                    </button>
                  </div>
                </li>
                
                <li id="contact-mail">
                  <i class="fa-solid fa-envelope"></i>
                  <div>
                    <span class="contact-label">Official Email</span>
                    <div class="contact-value">
                      <a href="mailto:admissions@centralcollege.edu" id="val-email-link">admissions@centralcollege.edu</a>
                    </div>
                  </div>
                </li>
                
                <li id="contact-phone">
                  <i class="fa-solid fa-phone"></i>
                  <div>
                    <span class="contact-label">Admissions Hotline & WhatsApp</span>
                    <div class="contact-value" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.3rem;">
                      <div>
                        <a href="https://api.whatsapp.com/send?phone=8801776371675" id="val-whatsapp-link" target="_blank" rel="noopener noreferrer">
                          <i class="fa-brands fa-whatsapp" style="color: #25d366; font-size: 1.2rem; margin-right: 4px;"></i>
                          <span id="val-whatsapp-text">8801776371675</span>
                        </a>
                        <span style="color: #64748b; font-size: 0.85rem; font-weight: 400; margin-left: 6px;">(Click for WhatsApp)</span>
                      </div>
                      <div>
                        <a href="tel:01309131217" id="val-phone-link">01309-131217</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="contact-form-box" id="contact-form-container">
              <div class="contact-form-title">
                <i class="fa-solid fa-paper-plane"></i>
                <span>Direct Inquiry Desk</span>
              </div>
              <form class="contact-form" id="inquiry-form">
                <div class="form-group">
                  <label for="name-input">Full Name</label>
                  <input type="text" id="name-input" class="form-control" placeholder="E.g., Anisur Rahman" required />
                </div>
                <div class="form-group">
                  <label for="email-input">Email Address</label>
                  <input type="email" id="email-input" class="form-control" placeholder="E.g., student@example.com" required />
                </div>
                <div class="form-group">
                  <label for="stream-select">Interested Academic Stream</label>
                  <select id="stream-select" class="form-control">
                    <option value="Science">Science Stream</option>
                    <option value="Business Studies">Business Studies Stream</option>
                    <option value="Humanities">Humanities Stream</option>
                    <option value="General Inquiry">General Admission Inquiry</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="msg-input">Inquiry Message</label>
                  <textarea id="msg-input" class="form-control" rows="4" placeholder="How can our admissions team assist you?" style="resize: vertical;" required></textarea>
                </div>
                <button type="submit" class="btn-submit" id="msg-submit-button">
                  <span>Send Direct Inquiry</span>
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- ================= 9. ADMIN PANEL SECTION ================= -->
      <div class="page-section" id="admin">
        <div class="content-box">
          <span class="eyebrow">Authorized Access</span>
          <h2>Admin Control Center</h2>
          
          <!-- Passcode Verification Box -->
          <div id="admin-login-form-container">
            <p style="color: #475569; font-size: 1.05rem; margin-bottom: 1.5rem; text-align: center;">
              This administrative control panel allows you to dynamically edit text content, milestones, streams, contacts, teachers, and images stored in Firebase.
            </p>
            <div class="contact-form-box" style="max-width: 480px; margin: 0 auto;">
              <div class="contact-form-title">
                <i class="fa-solid fa-lock"></i>
                <span>Security Verification</span>
              </div>
              <form id="admin-login-form">
                <div class="form-group" style="margin-bottom: 1.2rem;">
                  <label for="admin-passcode-input">Administrative Passcode</label>
                  <input type="password" id="admin-passcode-input" class="form-control" placeholder="Enter administrative passcode" required />
                  
                  <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 0.65rem 0.85rem; margin-top: 0.8rem; font-size: 0.84rem; color: #475569;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                      <span><i class="fa-solid fa-key" style="color: var(--teal); margin-right: 0.4rem;"></i><strong>Passcode Hint:</strong> Default master passcode is <code>admin123</code></span>
                      <button type="button" onclick="document.getElementById('admin-passcode-input').value='admin123'; showToast('Default passcode admin123 filled!');" style="border:0; background: var(--teal); color: #fff; padding: 0.2rem 0.6rem; border-radius: 6px; font-size: 0.76rem; font-weight: 700; cursor: pointer;">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> Auto Fill
                      </button>
                    </div>
                  </div>

                  <p id="admin-login-error" style="color: #ef4444; font-size: 0.85rem; margin-top: 8px; display: none; font-weight: 600;">
                    <i class="fa-solid fa-triangle-exclamation"></i> Invalid passcode. Try entering <code>admin123</code>.
                  </p>
                </div>
                <button type="submit" class="btn-submit" style="width: 100%; justify-content: center; height: 48px;">
                  <i class="fa-solid fa-unlock"></i>
                  <span>Authenticate Session</span>
                </button>
              </form>
            </div>
          </div>

          <!-- Logged In Admin Dashboard -->
          <div id="admin-panel-container" style="display: none;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div style="font-weight: 800; font-size: 1.15rem; color: var(--ink);">
                <i class="fa-solid fa-shield-halved" style="color: #10b981; margin-right: 0.5rem;"></i> Active Admin CMS Session
              </div>
              <button id="admin-logout-btn" type="button" class="hero-btn secondary" style="min-height: 40px; padding: 0.5rem 1.2rem; color: #ef4444; border-color: #fca5a5;">
                <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
              </button>
            </div>

            <div class="admin-tab-nav">
              <button class="admin-tab-btn active" data-tab="tab-branding"><i class="fa-solid fa-brush"></i> Branding</button>
              <button class="admin-tab-btn" data-tab="tab-home"><i class="fa-solid fa-house"></i> Home Content</button>
              <button class="admin-tab-btn" data-tab="tab-about"><i class="fa-solid fa-landmark"></i> About Us</button>
              <button class="admin-tab-btn" data-tab="tab-academics"><i class="fa-solid fa-book"></i> Academics</button>
              <button class="admin-tab-btn" data-tab="tab-teachers"><i class="fa-solid fa-users"></i> Faculty</button>
              <button class="admin-tab-btn" data-tab="tab-gallery"><i class="fa-solid fa-images"></i> Gallery</button>
              <button class="admin-tab-btn" data-tab="tab-contact"><i class="fa-solid fa-phone"></i> Contacts</button>
              <button class="admin-tab-btn" data-tab="tab-security"><i class="fa-solid fa-key"></i> Passcode</button>
            </div>

            <!-- Tab 1: Branding -->
            <div class="admin-tab-content active" id="tab-branding">
              <form id="form-branding" class="contact-form-box" style="margin-bottom: 2rem;">
                <h3>College Branding Configuration</h3>
                <div class="form-group" style="margin-top: 1rem;">
                  <label for="inp-brand-name">Official Institution Name</label>
                  <input type="text" id="inp-brand-name" class="form-control" required />
                </div>
                <div class="form-group">
                  <label for="inp-brand-logo-url">Logo Image URL</label>
                  <input type="text" id="inp-brand-logo-url" class="form-control" required />
                </div>
                <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem;">Save Branding</button>
              </form>
            </div>

            <!-- Tab 2: Home Content -->
            <div class="admin-tab-content" id="tab-home">
              <form id="form-home" class="contact-form-box">
                <h3>Hero Banner Content</h3>
                <div class="form-group" style="margin-top: 1rem;">
                  <label for="inp-home-kicker">Kicker Tag</label>
                  <input type="text" id="inp-home-kicker" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-home-hero-title">Welcome Title Prefix</label>
                  <input type="text" id="inp-home-hero-title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-home-hero-subtitle">Subtitle / Statement</label>
                  <textarea id="inp-home-hero-subtitle" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="inp-home-hero-bg">Hero Background Image URL (Leave blank for default emerald gradient)</label>
                  <input type="text" id="inp-home-hero-bg" class="form-control" />
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label for="inp-home-primary-label">Primary Button Text</label>
                    <input type="text" id="inp-home-primary-label" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="inp-home-secondary-label">Secondary Button Text</label>
                    <input type="text" id="inp-home-secondary-label" class="form-control" />
                  </div>
                </div>

                <h3 style="margin-top: 2rem;">Why Choose Us Section</h3>
                <div class="form-group" style="margin-top: 1rem;">
                  <label for="inp-home-wcu-title">Section Title</label>
                  <input type="text" id="inp-home-wcu-title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-home-wcu-desc">Section Description</label>
                  <textarea id="inp-home-wcu-desc" class="form-control" rows="3"></textarea>
                </div>

                <!-- Hidden inputs for existing feature cards to keep backward compatibility -->
                <input type="hidden" id="inp-home-f1-icon" value="fa-graduation-cap" />
                <input type="hidden" id="inp-home-f1-title" value="Scholastic Rigor" />
                <input type="hidden" id="inp-home-f1-desc" value="Top board scores under curriculum standards accompanied by tailored exam readiness frameworks." />
                <input type="hidden" id="inp-home-f2-icon" value="fa-microscope" />
                <input type="hidden" id="inp-home-f2-title" value="Advanced Labs" />
                <input type="hidden" id="inp-home-f2-desc" value="Modern science lab tools, visual classrooms, and high-performance IT learning infrastructure." />
                <input type="hidden" id="inp-home-f3-icon" value="fa-users-gear" />
                <input type="hidden" id="inp-home-f3-title" value="Skilled Mentorship" />
                <input type="hidden" id="inp-home-f3-desc" value="A highly-credentialed staff that focuses on individual students with constant feedback cycles." />

                <input type="hidden" id="inp-home-ql1-title" value="Academic Programs" />
                <input type="hidden" id="inp-home-ql1-desc" value="Explore streams and curriculum" />
                <input type="hidden" id="inp-home-ql2-title" value="Campus Gallery" />
                <input type="hidden" id="inp-home-ql2-desc" value="See events and student life" />
                <input type="hidden" id="inp-home-ql3-title" value="Admissions Help" />
                <input type="hidden" id="inp-home-ql3-desc" value="Reach the office instantly" />
                <input type="hidden" id="inp-home-ql4-title" value="About the College" />
                <input type="hidden" id="inp-home-ql4-desc" value="Mission, vision and milestones" />

                <input type="hidden" id="inp-home-st1-number" value="3" />
                <input type="hidden" id="inp-home-st1-label" value="Academic streams offered" />
                <input type="hidden" id="inp-home-st2-number" value="24/7" />
                <input type="hidden" id="inp-home-st2-label" value="Student support mindset" />
                <input type="hidden" id="inp-home-st3-number" value="100%" />
                <input type="hidden" id="inp-home-st3-label" value="Curriculum standards focus" />
                <input type="hidden" id="inp-home-st4-number" value="Safe" />
                <input type="hidden" id="inp-home-st4-label" value="Campus and learning environment" />

                <input type="hidden" id="inp-home-up1-tag" value="ADMIT 2026" />
                <input type="hidden" id="inp-home-up1-title" value="Admission guidance available from the college office" />
                <input type="hidden" id="inp-home-up1-desc" value="Ask about forms, academic groups, and required documents before visiting." />
                <input type="hidden" id="inp-home-up2-tag" value="STANDARDS" />
                <input type="hidden" id="inp-home-up2-title" value="Curriculum stays aligned with standardized board expectations" />
                <input type="hidden" id="inp-home-up2-desc" value="Lessons, assessments, and student support are organized around exam success." />
                <input type="hidden" id="inp-home-up3-tag" value="SUPPORT FAST" />
                <input type="hidden" id="inp-home-up3-title" value="Direct communication through phone, WhatsApp, and email" />
                <input type="hidden" id="inp-home-up3-desc" value="Families can reach the administration quickly for routine help or urgent questions." />

                <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem; margin-top: 1.5rem;">Save Home Settings</button>
              </form>
            </div>

            <!-- Tab 3: About Us -->
            <div class="admin-tab-content" id="tab-about">
              <form id="form-about" class="contact-form-box">
                <h3>About Section Configuration</h3>
                <div class="form-group" style="margin-top: 1rem;">
                  <label for="inp-about-title">Section Title</label>
                  <input type="text" id="inp-about-title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-about-p1">Paragraph 1 (History & Campus)</label>
                  <textarea id="inp-about-p1" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="inp-about-p2">Paragraph 2 (Methodology)</label>
                  <textarea id="inp-about-p2" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="inp-about-vision-desc">Vision Description</label>
                  <textarea id="inp-about-vision-desc" class="form-control" rows="2"></textarea>
                </div>
                <div class="form-group">
                  <label for="inp-about-mission-desc">Mission Description</label>
                  <textarea id="inp-about-mission-desc" class="form-control" rows="2"></textarea>
                </div>
                <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem;">Save About Settings</button>
              </form>
            </div>

            <!-- Tab 4: Academics -->
            <div class="admin-tab-content" id="tab-academics">
              <form id="form-info" class="contact-form-box">
                <h3>Academics Configuration</h3>
                <div class="form-group" style="margin-top: 1rem;">
                  <label for="inp-info-title">Title</label>
                  <input type="text" id="inp-info-title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-info-intro">Intro Text</label>
                  <textarea id="inp-info-intro" class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label for="inp-info-guidelines-title">Guidelines Title</label>
                  <input type="text" id="inp-info-guidelines-title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-info-guidelines-desc">Guidelines Description</label>
                  <textarea id="inp-info-guidelines-desc" class="form-control" rows="3"></textarea>
                </div>
                <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem;">Save Academic Settings</button>
              </form>
            </div>

            <!-- Tab 5: Faculty Manager -->
            <div class="admin-tab-content" id="tab-teachers">
              <div class="contact-form-box" style="margin-bottom: 2rem;">
                <h3>Add New Faculty Profile</h3>
                <form id="form-teacher-add" style="margin-top: 1rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label for="inp-teacher-new-name">Full Name</label>
                    <input type="text" id="inp-teacher-new-name" class="form-control" placeholder="e.g. Dr. A. Rahman" required />
                  </div>
                  <div class="form-group">
                    <label for="inp-teacher-new-subject">Subject</label>
                    <input type="text" id="inp-teacher-new-subject" class="form-control" placeholder="e.g. Mathematics" required />
                  </div>
                  <div class="form-group">
                    <label for="inp-teacher-new-designation">Designation</label>
                    <input type="text" id="inp-teacher-new-designation" class="form-control" placeholder="e.g. Senior Lecturer" required />
                  </div>
                  <div class="form-group">
                    <label for="inp-teacher-new-contact">Contact Phone</label>
                    <input type="text" id="inp-teacher-new-contact" class="form-control" placeholder="e.g. 01309131217" required />
                  </div>
                  <div class="form-group" style="grid-column: 1 / -1;">
                    <label for="inp-teacher-new-file">Photo File (Upload from device)</label>
                    <input type="file" id="inp-teacher-new-file" accept="image/*" class="form-control" required />
                    <span id="teacher-file-name" style="font-size: 0.8rem; color: #64748b;">No file selected</span>
                  </div>
                  <div style="grid-column: 1 / -1;">
                    <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem;">Add Faculty Member</button>
                  </div>
                </form>
              </div>

              <div class="contact-form-box">
                <h3>Existing Faculty Members</h3>
                <div id="admin-teachers-rows-container" style="display: grid; gap: 1rem; margin-top: 1rem;"></div>
              </div>
            </div>

            <!-- Tab 6: Photo Gallery Manager -->
            <div class="admin-tab-content" id="tab-gallery">
              <div class="contact-form-box" style="margin-bottom: 2rem;">
                <h3>Upload Image to Campus Gallery</h3>
                <form id="form-gallery-add" style="margin-top: 1rem;">
                  <div class="form-group">
                    <label for="inp-gallery-new-caption">Photo Caption / Description</label>
                    <input type="text" id="inp-gallery-new-caption" class="form-control" placeholder="e.g. Annual Academic & Tech Fair" required />
                  </div>
                  <div class="form-group">
                    <label for="inp-gallery-new-file">Select Image File</label>
                    <input type="file" id="inp-gallery-new-file" accept="image/*" class="form-control" required />
                    <span id="gallery-file-name" style="font-size: 0.8rem; color: #64748b;">No file selected</span>
                  </div>
                  <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem;">Upload to Gallery</button>
                </form>
              </div>

              <div class="contact-form-box">
                <h3>Existing Gallery Images</h3>
                <div id="admin-gallery-rows-container" style="display: grid; gap: 1rem; margin-top: 1rem;"></div>
              </div>
            </div>

            <!-- Tab 7: Contact Information -->
            <div class="admin-tab-content" id="tab-contact">
              <form id="form-contact" class="contact-form-box">
                <h3>Front Desk & Contact Configuration</h3>
                <div class="form-group" style="margin-top: 1rem;">
                  <label for="inp-contact-title">Section Title</label>
                  <input type="text" id="inp-contact-title" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-contact-intro">Intro Text</label>
                  <textarea id="inp-contact-intro" class="form-control" rows="2"></textarea>
                </div>
                <div class="form-group">
                  <label for="inp-contact-address">Physical Campus Address</label>
                  <input type="text" id="inp-contact-address" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-contact-hours">Office Hours</label>
                  <input type="text" id="inp-contact-hours" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="inp-contact-email">Email Address</label>
                  <input type="email" id="inp-contact-email" class="form-control" />
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                  <div class="form-group">
                    <label for="inp-contact-whatsapp">WhatsApp Phone Number</label>
                    <input type="text" id="inp-contact-whatsapp" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="inp-contact-phone">Regular Phone Helpline</label>
                    <input type="text" id="inp-contact-phone" class="form-control" />
                  </div>
                </div>
                <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem;">Save Contact Information</button>
              </form>
            </div>

            <!-- Tab 8: Security Passcode -->
            <div class="admin-tab-content" id="tab-security">
              <form id="form-security" class="contact-form-box" style="max-width: 500px;">
                <h3>Change Administrative Passcode</h3>
                <div class="form-group" style="margin-top: 1rem;">
                  <label for="inp-security-passcode">Current / New Passcode</label>
                  <input type="text" id="inp-security-passcode" class="form-control" required />
                  <p style="font-size: 0.8rem; color: #64748b; margin-top: 4px;">Note: <code>admin123</code> is also always accepted as a master recovery passcode.</p>
                </div>
                <button type="submit" class="btn-submit" style="width: auto; padding: 0.75rem 2rem;">Update Security Passcode</button>
              </form>
            </div>

          </div>
        </div>
      </div>

    </main>

    <!-- Floating Speed-Dial Action Dock -->
    <div class="floating-dock" id="floating-dock">
      <button class="dock-main-btn" type="button" id="dock-toggle-btn" aria-label="Quick Actions">
        <i class="fa-solid fa-bolt"></i>
      </button>
      <div class="dock-menu">
        <a class="dock-item" href="https://api.whatsapp.com/send?phone=8801776371675" target="_blank" rel="noopener noreferrer" data-tooltip="WhatsApp Desk" style="color: #16a34a;">
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <a class="dock-item" href="tel:01309131217" data-tooltip="Call Office" style="color: var(--teal);">
          <i class="fa-solid fa-phone"></i>
        </a>
        <button class="dock-item" type="button" onclick="openCalcModal()" data-tooltip="Eligibility Calc" style="color: #f59e0b;">
          <i class="fa-solid fa-calculator"></i>
        </button>
        <button class="dock-item" type="button" onclick="openMapModal()" data-tooltip="Campus Map" style="color: #ef4444;">
          <i class="fa-solid fa-map-location-dot"></i>
        </button>
        <button class="dock-item" type="button" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" data-tooltip="Back to Top">
          <i class="fa-solid fa-arrow-up"></i>
        </button>
      </div>
    </div>

    <!-- Back to top button -->
    <button class="back-to-top" id="back-to-top" type="button" aria-label="Back to top">
      <i class="fa-solid fa-arrow-up"></i>
    </button>

    <!-- Save Dynamic Toast -->
    <div id="save-toast">
      <i class="fa-solid fa-cloud-arrow-up"></i>
      <span id="toast-message">Database changes saved successfully!</span>
    </div>

    <!-- Modal 1: Admission Eligibility & Fee Calculator Modal -->
    <div class="modal-backdrop" id="calc-modal">
      <div class="modal-window">
        <button class="modal-close-btn" type="button" onclick="closeCalcModal()"><i class="fa-solid fa-xmark"></i></button>
        <span class="eyebrow"><i class="fa-solid fa-graduation-cap"></i> Admission Advisor</span>
        <h2 style="font-size: 1.6rem; margin-top: 0.3rem;">Admission & Scholarship Calculator</h2>
        <p style="color: var(--muted); font-size: 0.92rem; margin-bottom: 1.5rem;">
          Enter your qualifying secondary scores to evaluate stream eligibility, merit scholarship waiver percentage, and recommended curriculum subject combinations.
        </p>

        <div style="display: grid; gap: 1.2rem;">
          <div class="form-group">
            <label style="font-weight: 700;">Select your Secondary Result / GPA:</label>
            <div class="calc-gpa-buttons" id="modal-gpa-selector">
              <button type="button" class="gpa-btn active" data-gpa="5.00">GPA 5.00 (Golden)</button>
              <button type="button" class="gpa-btn" data-gpa="4.80">GPA 4.50 - 4.99</button>
              <button type="button" class="gpa-btn" data-gpa="4.20">GPA 4.00 - 4.49</button>
              <button type="button" class="gpa-btn" data-gpa="3.50">GPA 3.50 - 3.99</button>
              <button type="button" class="gpa-btn" data-gpa="3.00">GPA 3.00 - 3.49</button>
              <button type="button" class="gpa-btn" data-gpa="2.50">GPA 2.50 - 2.99</button>
            </div>
          </div>

          <div class="form-group">
            <label style="font-weight: 700;">Preferred Academic Stream:</label>
            <div class="calc-gpa-buttons" id="modal-group-selector">
              <button type="button" class="gpa-btn active" data-group="science">Science</button>
              <button type="button" class="gpa-btn" data-group="business">Business Studies</button>
              <button type="button" class="gpa-btn" data-group="humanities">Humanities</button>
            </div>
          </div>

          <div class="calc-result-box" id="modal-calc-result" style="margin-top: 0.5rem;">
            <div class="result-badge" id="modal-res-badge"><i class="fa-solid fa-circle-check"></i> Eligible for Admission</div>
            <div class="scholarship-highlight" id="modal-res-waiver">🏆 100% Tuition Fee Merit Waiver</div>
            <p id="modal-res-desc" style="font-size: 0.92rem; color: #475569; margin: 0.5rem 0 1rem; line-height: 1.6;">
              Full merit scholarship privileges apply! Regular academic counseling, special model test materials, and priority lab stations included.
            </p>
            <div id="modal-res-subjects" style="background: #ffffff; padding: 1rem; border-radius: 10px; border: 1px solid var(--line); font-size: 0.86rem;">
              <strong>Compulsory & Optional Subjects:</strong> Core Languages, Digital Skills & ICT, Stream Electives, and Advanced Options.
            </div>
          </div>

          <div style="display: flex; gap: 0.8rem; margin-top: 1rem;">
            <button class="hero-btn primary" type="button" onclick="window.print()" style="flex: 1; justify-content: center;">
              <i class="fa-solid fa-print"></i> Print Summary
            </button>
            <button class="hero-btn secondary" type="button" onclick="showPage('contact'); closeCalcModal();" style="flex: 1; justify-content: center; background: var(--ink); color: #fff;">
              <i class="fa-solid fa-file-signature"></i> Contact Office
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 2: Official Notice Reader Modal -->
    <div class="modal-backdrop" id="notice-modal">
      <div class="modal-window">
        <button class="modal-close-btn" type="button" onclick="closeNoticeModal()"><i class="fa-solid fa-xmark"></i></button>
        <div style="border-bottom: 2px solid var(--gold); padding-bottom: 1rem; margin-bottom: 1.2rem;">
          <div style="font-size: 0.8rem; font-weight: 800; color: var(--teal); letter-spacing: 0.05em; text-transform: uppercase;">
            Central Public College · Official Circular
          </div>
          <h2 id="modal-notice-title" style="font-size: 1.45rem; margin-top: 0.4rem; color: var(--ink);"></h2>
          <div style="font-size: 0.82rem; color: var(--muted); margin-top: 0.4rem;">
            <span id="modal-notice-date"><i class="fa-solid fa-calendar-days"></i> Date</span> ·
            <span id="modal-notice-ref"><i class="fa-solid fa-hashtag"></i> Ref: CPC/CIR/2026</span>
          </div>
        </div>
        <div id="modal-notice-body" style="font-size: 0.96rem; line-height: 1.75; color: #334155; margin-bottom: 2rem;"></div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--line); padding-top: 1rem;">
          <div style="font-size: 0.84rem; font-weight: 700; color: var(--teal);">
            <i class="fa-solid fa-signature"></i> Office of the Principal & Academic Council
          </div>
          <button class="hero-btn primary" type="button" onclick="window.print()" style="min-height: 38px; padding: 0.5rem 1.2rem; font-size: 0.84rem;">
            <i class="fa-solid fa-print"></i> Print Notice
          </button>
        </div>
      </div>
    </div>

    <!-- Modal 3: Campus Location & Transit Map Modal -->
    <div class="modal-backdrop" id="map-modal">
      <div class="modal-window">
        <button class="modal-close-btn" type="button" onclick="closeMapModal()"><i class="fa-solid fa-xmark"></i></button>
        <span class="eyebrow"><i class="fa-solid fa-location-dot"></i> How to Reach Us</span>
        <h2 style="font-size: 1.5rem; margin-top: 0.3rem;">Campus Location & Transit Guide</h2>
        <p style="color: var(--muted); font-size: 0.94rem; margin-bottom: 1.2rem;">
          Conveniently situated along College Avenue in the Academic District, accessible via all major commuter corridors.
        </p>

        <div style="border-radius: 14px; overflow: hidden; border: 1px solid var(--line); margin-bottom: 1.2rem; background: #eef4f3; height: 260px; display: grid; place-items: center; text-align: center; padding: 1.5rem;">
          <div>
            <i class="fa-solid fa-map-location-dot" style="font-size: 3rem; color: var(--teal); margin-bottom: 0.8rem;"></i>
            <h4 style="font-size: 1.15rem; color: var(--ink);">College Avenue, Central Academic District</h4>
            <p style="font-size: 0.88rem; color: var(--muted); margin-top: 0.4rem;">
              Close to Central Transit Junction linking major metropolitan transport lines.
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="hero-btn primary" style="margin-top: 1rem; min-height: 40px; padding: 0.6rem 1.4rem; font-size: 0.85rem;">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Open in Maps
            </a>
          </div>
        </div>

        <div style="background: #f8fafc; border-radius: 12px; padding: 1rem; font-size: 0.88rem; color: #475569; line-height: 1.6;">
          <strong>Transit Directions:</strong><br />
          • From <strong>Central Transit Station:</strong> Take local shuttle/transit directly along College Avenue (approx. 8 minutes).<br />
          • Dedicated campus parking and student transport drop-off bays available at North Gate.
        </div>
      </div>
    </div>

    <!-- Modal 4: Fullscreen Lightbox Modal -->
    <div class="modal-backdrop" id="lightbox-modal">
      <div class="modal-window">
        <button class="modal-close-btn" type="button" onclick="closeLightbox()"><i class="fa-solid fa-xmark"></i></button>
        <div class="lightbox-image-wrap">
          <img id="lightbox-img" src="" alt="Enlarged campus photograph" />
        </div>
        <div class="lightbox-controls">
          <button type="button" onclick="prevLightboxImage()" class="hero-btn secondary" style="min-height: 38px; padding: 0.4rem 1rem;">
            <i class="fa-solid fa-arrow-left"></i> Previous
          </button>
          <div id="lightbox-caption" style="font-weight: 700; font-size: 0.95rem; color: var(--gold);"></div>
          <button type="button" onclick="nextLightboxImage()" class="hero-btn secondary" style="min-height: 38px; padding: 0.4rem 1rem;">
            Next <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer id="app-footer-area">
      <div class="footer-inner">
        <div class="footer-col">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
            <img src="/school-logo-transparent.png" alt="Logo" width="44" height="44" style="background:#fff; border-radius: 50%; padding: 2px;" />
            <div>
              <div style="font-weight: 800; font-size: 1.15rem; color: #fff;" id="footer-college-name">Central Public College</div>
              <div style="font-size: 0.76rem; color: var(--gold);">Board Affiliated Higher Secondary College · Code: 131217</div>
            </div>
          </div>
          <p style="font-size: 0.9rem; line-height: 1.65; color: rgba(255,255,255,0.7); max-width: 360px;">
            A premier academic institution dedicated to preparing secondary and higher secondary candidates through disciplined tutoring, modern laboratories, and moral guidance.
          </p>
        </div>

        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onclick="showPage('home'); return false;">Home</a></li>
            <li><a href="#about" onclick="showPage('about'); return false;">About the College</a></li>
            <li><a href="#info" onclick="showPage('info'); return false;">Curriculum & Streams</a></li>
            <li><a href="#notices" onclick="showPage('notices'); return false;">Notice Board</a></li>
            <li><a href="#teachers" onclick="showPage('teachers'); return false;">Faculty Directory</a></li>
            <li><a href="#facilities" onclick="showPage('facilities'); return false;">Campus Facilities</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Academic Streams</h4>
          <ul>
            <li><a href="#info" onclick="showPage('info'); return false;">Science & Tech Stream</a></li>
            <li><a href="#info" onclick="showPage('info'); return false;">Business Studies</a></li>
            <li><a href="#info" onclick="showPage('info'); return false;">Humanities & Social Sciences</a></li>
            <li><a href="#" onclick="openCalcModal(); return false;">Fee Waiver Calculator</a></li>
            <li><a href="#gallery" onclick="showPage('gallery'); return false;">Photo Gallery</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Front Desk</h4>
          <ul>
            <li><i class="fa-solid fa-location-dot" style="color:var(--gold); margin-right: 0.4rem;"></i> <span id="footer-address-label">College Avenue, Academic District</span></li>
            <li><i class="fa-solid fa-phone" style="color:var(--gold); margin-right: 0.4rem;"></i> <a href="tel:01309131217">01309-131217</a></li>
            <li><i class="fa-brands fa-whatsapp" style="color:#25d366; margin-right: 0.4rem;"></i> <a href="https://api.whatsapp.com/send?phone=8801776371675" target="_blank" rel="noopener noreferrer">WhatsApp Help Desk</a></li>
            <li><i class="fa-solid fa-envelope" style="color:var(--gold); margin-right: 0.4rem;"></i> <a href="mailto:admissions@centralcollege.edu">admissions@centralcollege.edu</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © <span id="footer-year">2026</span> Central Public College. All Rights Reserved.
        </div>
        <div style="display: flex; gap: 1.5rem; align-items: center;">
          <a href="#contact" onclick="showPage('contact'); return false;" style="color: rgba(255,255,255,0.7); text-decoration: none;">Admissions</a>
          <a href="#admin" onclick="showPage('admin'); return false;" style="color: var(--gold); text-decoration: none; font-weight: 700;">
            <i class="fa-solid fa-lock" style="font-size: 0.75rem;"></i> Admin Panel Portal
          </a>
        </div>
      </div>
    </footer>
`;
