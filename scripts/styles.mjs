export const styles = `
      :root {
        --ink: #062630;
        --deep: #041b22;
        --teal: #0c6a76;
        --teal-light: #128896;
        --teal-soft: #e3f6f3;
        --gold: #f4b942;
        --gold-light: #fcd779;
        --gold-soft: #fef7e6;
        --cream: #f6f8f7;
        --paper: #ffffff;
        --muted: #5e7278;
        --line: rgba(6, 38, 48, 0.10);
        --line-strong: rgba(6, 38, 48, 0.18);
        --shadow-sm: 0 4px 14px rgba(4, 27, 34, 0.05);
        --shadow-md: 0 12px 35px rgba(4, 27, 34, 0.08);
        --shadow-lg: 0 24px 65px rgba(4, 27, 34, 0.13);
        --radius-sm: 10px;
        --radius-md: 16px;
        --radius-lg: 24px;
        --radius-xl: 32px;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
        font-size: 16px;
      }

      body {
        font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background:
          radial-gradient(circle at 8% 12%, rgba(244,185,66,.12), transparent 28rem),
          radial-gradient(circle at 92% 38%, rgba(12,106,118,.10), transparent 32rem),
          radial-gradient(circle at 50% 85%, rgba(16,185,129,.06), transparent 30rem),
          var(--cream);
        color: var(--ink);
        line-height: 1.6;
        overflow-x: hidden;
        min-height: 100vh;
      }

      h1, h2, h3, h4, .logo, .stat-number, .eyebrow, .brand-name {
        font-family: 'Manrope', sans-serif;
        font-weight: 800;
        letter-spacing: -0.03em;
      }

      .bn-text {
        font-family: 'Noto Sans Bengali', sans-serif;
      }

      :focus-visible {
        outline: 3px solid var(--gold);
        outline-offset: 3px;
      }

      /* Custom High-Performance Scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #e9eeed;
      }
      ::-webkit-scrollbar-thumb {
        background: #9ab4b9;
        border-radius: 999px;
        border: 2px solid #e9eeed;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--teal);
      }

      /* Progress Bar at top */
      .scroll-progress {
        position: fixed;
        inset: 0 0 auto;
        z-index: 10002;
        height: 3.5px;
        background: linear-gradient(90deg, var(--teal), var(--gold), #10b981);
        transform: scaleX(0);
        transform-origin: left;
        pointer-events: none;
        box-shadow: 0 0 10px rgba(244,185,66,0.6);
      }

      /* Ambient Interactive Canvas */
      #ambient-canvas {
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        opacity: 0.65;
      }

      /* Loader */
      #app-loader {
        position: fixed;
        inset: 0;
        background-color: var(--deep);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        color: #ffffff;
        transition: opacity 0.5s ease, visibility 0.5s;
      }

      .loader-logo {
        width: 72px;
        height: 72px;
        margin-bottom: 1.5rem;
        filter: drop-shadow(0 0 20px rgba(244,185,66,0.5));
        animation: pulseCrest 2s ease-in-out infinite alternate;
      }

      @keyframes pulseCrest {
        from { transform: scale(0.95); opacity: 0.85; }
        to { transform: scale(1.08); opacity: 1; }
      }

      .spinner {
        width: 48px;
        height: 48px;
        border: 3px solid rgba(255, 255, 255, 0.15);
        border-top-color: var(--gold);
        border-radius: 50%;
        animation: spin 0.85s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      /* Top Announcement Marquee Ticker */
      .ticker-bar {
        background: linear-gradient(90deg, #04181f 0%, #082d38 50%, #04181f 100%);
        color: rgba(255,255,255,0.92);
        font-size: 0.82rem;
        padding: 0.45rem 1rem;
        border-bottom: 1px solid rgba(244,185,66,0.22);
        display: flex;
        align-items: center;
        overflow: hidden;
        position: relative;
        z-index: 1001;
      }

      .ticker-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        background: var(--gold);
        color: var(--deep);
        font-weight: 800;
        font-size: 0.72rem;
        padding: 0.2rem 0.65rem;
        border-radius: 999px;
        margin-right: 1rem;
        flex-shrink: 0;
        box-shadow: 0 0 12px rgba(244,185,66,0.5);
      }

      .ticker-badge i {
        animation: bounceIcon 1.2s infinite;
      }

      @keyframes bounceIcon {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-2px); }
      }

      .ticker-content {
        display: inline-block;
        white-space: nowrap;
        animation: marquee 35s linear infinite;
      }

      .ticker-content:hover {
        animation-play-state: paused;
      }

      .ticker-item {
        display: inline-flex;
        align-items: center;
        margin-right: 2.5rem;
        color: rgba(255,255,255,0.88);
      }

      .ticker-item i {
        color: var(--gold);
        margin-right: 0.5rem;
      }

      .ticker-item a {
        color: var(--gold-light);
        text-decoration: underline;
        margin-left: 0.4rem;
        font-weight: 700;
        cursor: pointer;
      }

      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }

      /* Secondary School Topbar */
      .school-topbar {
        background: var(--deep);
        color: rgba(255,255,255,.78);
        font-size: .8rem;
        letter-spacing: .01em;
        border-bottom: 1px solid rgba(255,255,255,0.06);
        position: relative;
        z-index: 1000;
      }

      .topbar-inner {
        max-width: 1280px;
        margin: auto;
        padding: .5rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
      }

      .topbar-left, .topbar-right {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        flex-wrap: wrap;
      }

      .topbar-item {
        display: flex;
        align-items: center;
        gap: .45rem;
        color: rgba(255,255,255,0.85);
        text-decoration: none;
        transition: color 0.2s;
      }

      .topbar-item:hover {
        color: var(--gold);
      }

      .topbar-item i {
        color: var(--gold);
        font-size: 0.85rem;
      }

      .eiin-badge {
        background: rgba(244,185,66,0.14);
        color: var(--gold);
        border: 1px solid rgba(244,185,66,0.3);
        padding: 0.15rem 0.55rem;
        border-radius: 6px;
        font-weight: 700;
        font-size: 0.74rem;
      }

      /* Language Toggle Button */
      .lang-switch-btn {
        background: rgba(255,255,255,0.12);
        color: #ffffff;
        border: 1px solid rgba(255,255,255,0.22);
        padding: 0.25rem 0.7rem;
        border-radius: 999px;
        font-size: 0.76rem;
        font-weight: 700;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        transition: all 0.25s;
      }

      .lang-switch-btn:hover {
        background: var(--gold);
        color: var(--deep);
        border-color: var(--gold);
      }

      /* Header & Sticky Nav */
      header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(6, 38, 48, 0.08);
        box-shadow: 0 10px 30px rgba(6, 38, 48, 0.05);
        transition: all 0.3s ease;
      }

      .nav-container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0.75rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1.5rem;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        text-decoration: none;
        color: var(--ink);
        cursor: pointer;
        transition: transform 0.25s;
        flex-shrink: 0;
      }

      .logo:hover {
        transform: translateY(-1px);
      }

      .logo-img-wrapper {
        position: relative;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #ffffff;
        display: grid;
        place-items: center;
        box-shadow: 0 6px 18px rgba(6,38,48,0.12);
        border: 2px solid var(--gold);
      }

      .logo img {
        width: 40px;
        height: 40px;
        object-fit: contain;
      }

      .brand-text-block {
        display: flex;
        flex-direction: column;
      }

      .brand-title {
        font-size: 1.15rem;
        font-weight: 800;
        color: var(--ink);
        letter-spacing: -0.02em;
        line-height: 1.15;
      }

      .brand-subtitle {
        font-size: 0.72rem;
        color: var(--teal);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
      }

      nav {
        display: flex;
        gap: 0.3rem;
        align-items: center;
      }

      .nav-link {
        border: 0;
        background: transparent;
        color: #2e4952;
        text-decoration: none;
        font-weight: 700;
        padding: 0.6rem 0.85rem;
        border-radius: 10px;
        transition: all 0.22s cubic-bezier(0.2, 0.8, 0.2, 1);
        cursor: pointer;
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        position: relative;
      }

      .nav-link:hover {
        color: var(--teal);
        background: var(--teal-soft);
        transform: translateY(-1px);
      }

      .nav-link.active-link {
        color: var(--teal);
        background: var(--teal-soft);
      }

      .nav-link.active-link::after {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        width: 18px;
        height: 3px;
        border-radius: 3px;
        background: var(--gold);
      }

      #nav-calc-btn {
        background: var(--gold);
        color: var(--deep);
        font-weight: 800;
        box-shadow: 0 4px 14px rgba(244,185,66,0.35);
      }

      #nav-calc-btn:hover {
        background: var(--gold-light);
        transform: translateY(-2px);
      }

      #nav-admin {
        background: var(--ink);
        color: #ffffff;
        font-weight: 700;
        margin-left: 0.3rem;
      }

      #nav-admin:hover {
        background: var(--gold);
        color: var(--deep);
      }

      .menu-toggle {
        display: none;
        width: 44px;
        height: 44px;
        border: 0;
        border-radius: 12px;
        background: var(--teal-soft);
        color: var(--ink);
        cursor: pointer;
        font-size: 1.1rem;
        place-items: center;
        transition: background 0.2s;
      }

      .menu-toggle:hover {
        background: var(--gold);
        color: var(--deep);
      }

      /* Main Layout */
      main {
        position: relative;
        z-index: 10;
        min-height: 80vh;
      }

      .page-section {
        display: none;
        max-width: 1280px;
        margin: 2rem auto 4rem;
        padding: 0 1.5rem;
      }

      .page-section.active-page {
        display: block;
        animation: pageReveal 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      @keyframes pageReveal {
        from {
          opacity: 0;
          transform: translateY(22px) scale(0.995);
        }
        to {
          opacity: 1;
          transform: none;
        }
      }

      /* Staggered card entrance */
      .stagger-in {
        opacity: 0;
        transform: translateY(20px);
        animation: staggerIn 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      }

      @keyframes staggerIn {
        to {
          opacity: 1;
          transform: none;
        }
      }

      /* Clean Modern Card Base (Stable Elevation, No Tilt) */
      .tilt-card {
        transition: transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease;
        position: relative;
      }

      .tilt-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 36px rgba(6,38,48,0.09);
      }

      /* Content Box Container */
      .content-box {
        background: var(--paper);
        border-radius: var(--radius-xl);
        padding: clamp(1.8rem, 4.5vw, 3.5rem);
        box-shadow: var(--shadow-md);
        border: 1px solid var(--line);
        margin-bottom: 2.2rem;
        position: relative;
        overflow: hidden;
      }

      .content-box h2 {
        font-size: clamp(1.75rem, 3.2vw, 2.45rem);
        color: var(--ink);
        margin-bottom: 1.2rem;
        position: relative;
        display: inline-block;
      }

      .content-box h2::after {
        content: '';
        display: block;
        width: 55px;
        height: 4.5px;
        background: var(--gold);
        border-radius: 999px;
        margin-top: 0.5rem;
      }

      /* Hero Section */
      .hero {
        position: relative;
        min-height: 580px;
        height: min(680px, 72vh);
        border-radius: var(--radius-xl);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 3.5rem;
        background: #062833;
        background-size: cover;
        background-position: center;
        box-shadow: 0 30px 80px rgba(4, 27, 34, 0.28);
        isolation: isolate;
      }

      .hero::before {
        content: '';
        position: absolute;
        inset: -20%;
        z-index: -1;
        background:
          radial-gradient(circle at 20% 30%, rgba(244,185,66,.25), transparent 28%),
          radial-gradient(circle at 80% 70%, rgba(18,136,150,.30), transparent 32%),
          radial-gradient(circle at 50% 50%, rgba(16,185,129,.15), transparent 40%);
        filter: blur(25px);
        animation: heroGlow 14s ease-in-out infinite alternate;
        pointer-events: none;
      }

      @keyframes heroGlow {
        from { transform: translate3d(-3%, -2%, 0) scale(1); opacity: 0.75; }
        to { transform: translate3d(3%, 3%, 0) scale(1.12); opacity: 1; }
      }

      .hero::after {
        content: '';
        position: absolute;
        inset: auto -8% -35% auto;
        width: 460px;
        aspect-ratio: 1;
        border: 1px solid rgba(255,255,255,.18);
        border-radius: 50%;
        box-shadow: 0 0 0 65px rgba(255,255,255,.03), 0 0 0 130px rgba(255,255,255,.02);
        animation: orbit 12s ease-in-out infinite alternate;
        pointer-events: none;
      }

      @keyframes orbit {
        to { transform: translate(-30px,-20px) scale(1.06); }
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(4,27,34,0.95) 0%, rgba(6,40,51,0.85) 55%, rgba(6,40,51,0.55) 100%);
        backdrop-filter: blur(2px);
      }

      .hero-content {
        position: relative;
        z-index: 10;
        text-align: center;
        color: #ffffff;
        max-width: 960px;
        padding: clamp(2rem, 5vw, 4.5rem);
        margin: 0 auto;
        transform: translate3d(var(--hero-shift-x, 0px), var(--hero-shift-y, 0px), 0);
        transition: transform 0.2s ease-out;
      }

      .hero-kicker {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        color: var(--gold);
        font-size: 0.82rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        padding: 0.55rem 1.1rem;
        border: 1px solid rgba(244,185,66,0.4);
        background: rgba(244,185,66,0.12);
        backdrop-filter: blur(8px);
        border-radius: 999px;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 20px rgba(244,185,66,0.22);
        animation: pulseBadge 3s infinite;
      }

      @keyframes pulseBadge {
        0%, 100% { box-shadow: 0 0 0 0 rgba(244,185,66, 0.4); }
        50% { box-shadow: 0 0 0 10px rgba(244,185,66, 0); }
      }

      .hero-content h1 {
        font-size: clamp(2.2rem, 5.2vw, 4.2rem);
        line-height: 1.15;
        letter-spacing: -0.04em;
        margin-bottom: 1.25rem;
        text-wrap: balance;
      }

      .hero-content h1 .welcome-line {
        display: block;
        font-size: 0.52em;
        font-weight: 600;
        color: rgba(255,255,255,0.85);
        letter-spacing: 0.04em;
        text-transform: uppercase;
        margin-bottom: 0.4rem;
      }

      .hero-content h1 strong {
        display: block;
        font-weight: 800;
        background: linear-gradient(135deg, #ffffff 40%, var(--gold) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 10px 30px rgba(0,0,0,0.3);
      }

      .hero-content p {
        margin: 0 auto 2rem;
        max-width: 720px;
        font-size: clamp(1rem, 1.8vw, 1.22rem);
        color: rgba(255,255,255,0.86);
        line-height: 1.7;
      }

      .hero-actions {
        display: flex;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .hero-btn, .section-cta {
        min-height: 52px;
        padding: 0.95rem 1.6rem;
        border-radius: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        border: 1px solid transparent;
        font-weight: 800;
        font-size: 0.94rem;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        position: relative;
        overflow: hidden;
      }

      .hero-btn:hover, .section-cta:hover {
        transform: translateY(-3px);
      }

      .hero-btn.primary {
        background: var(--gold);
        color: var(--deep);
        box-shadow: 0 12px 28px rgba(244,185,66,0.35);
      }

      .hero-btn.primary:hover {
        background: #ffcf56;
        box-shadow: 0 16px 36px rgba(244,185,66,0.5);
      }

      .hero-btn.secondary {
        color: #ffffff;
        border-color: rgba(255,255,255,0.35);
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(12px);
      }

      .hero-btn.secondary:hover {
        background: #ffffff;
        color: var(--deep);
        border-color: #ffffff;
      }

      .hero-btn.calc {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        color: #ffffff;
        box-shadow: 0 12px 28px rgba(16,185,129,0.32);
      }

      .hero-btn.calc:hover {
        background: #34d399;
        color: var(--deep);
      }

      /* Liquid ripple element */
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: rippleAnim 0.6s linear;
        pointer-events: none;
      }

      @keyframes rippleAnim {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }

      /* Floating Hero Particles */
      .hero-particle {
        position: absolute;
        z-index: 1;
        width: var(--particle-size, 5px);
        height: var(--particle-size, 5px);
        left: var(--particle-x);
        top: var(--particle-y);
        border-radius: 50%;
        background: var(--gold);
        box-shadow: 0 0 18px rgba(244,185,66,.8);
        opacity: .55;
        pointer-events: none;
        animation: particleFloat var(--particle-duration, 7s) ease-in-out infinite alternate;
        animation-delay: var(--particle-delay, 0s);
      }

      @keyframes particleFloat {
        to { transform: translate3d(var(--particle-drift-x), var(--particle-drift-y), 0) scale(1.7); opacity: .15; }
      }

      /* Quick Access Floating Pill Bar */
      .quick-access {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 0.9rem;
        width: min(94%, 1120px);
        margin: -4.5rem auto 2.8rem;
        position: relative;
        z-index: 20;
        background: rgba(255,255,255,0.96);
        border: 1px solid rgba(255,255,255,0.9);
        backdrop-filter: blur(20px);
        padding: 1.1rem;
        border-radius: var(--radius-lg);
        box-shadow: 0 25px 60px rgba(4,27,34,0.14);
      }

      .quick-link {
        border: 0;
        background: transparent;
        text-align: left;
        padding: 0.95rem;
        border-radius: var(--radius-md);
        color: var(--ink);
        display: flex;
        gap: 0.9rem;
        align-items: center;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .quick-link:hover {
        background: var(--teal-soft);
        transform: translateY(-3px);
      }

      .quick-link i {
        width: 46px;
        height: 46px;
        display: grid;
        place-items: center;
        background: var(--ink);
        color: var(--gold);
        border-radius: 14px;
        flex-shrink: 0;
        font-size: 1.15rem;
        transition: all 0.3s;
      }

      .quick-link:hover i {
        background: var(--teal);
        transform: scale(1.08) rotate(-6deg);
        box-shadow: 0 6px 18px rgba(12,106,118,0.3);
      }

      .quick-link strong {
        display: block;
        font-family: Manrope;
        font-size: 0.92rem;
        color: var(--ink);
      }

      .quick-link small {
        color: var(--muted);
        font-size: 0.76rem;
      }

      /* Stats Band */
      .stats-band {
        background: linear-gradient(135deg, #041b22 0%, #07313e 100%);
        color: white;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        border-radius: var(--radius-xl);
        overflow: hidden;
        margin-bottom: 2.8rem;
        box-shadow: 0 20px 55px rgba(4,27,34,0.18);
        border: 1px solid rgba(255,255,255,0.08);
      }

      .stat {
        padding: 2.2rem 1.5rem;
        text-align: center;
        position: relative;
        transition: background 0.3s, transform 0.3s;
      }

      .stat + .stat::before {
        content: '';
        position: absolute;
        left: 0;
        top: 20%;
        bottom: 20%;
        width: 1px;
        background: rgba(255,255,255,.14);
      }

      .stat:hover {
        background: rgba(255,255,255,0.05);
        transform: translateY(-2px);
      }

      .stat-icon {
        color: var(--gold);
        font-size: 1.4rem;
        margin-bottom: 0.6rem;
        display: inline-block;
      }

      .stat-number {
        display: block;
        color: var(--gold);
        font-size: clamp(2rem, 3.4vw, 3rem);
        font-weight: 800;
        letter-spacing: -0.05em;
        font-variant-numeric: tabular-nums;
        line-height: 1.1;
      }

      .stat-label {
        color: rgba(255,255,255,0.78);
        font-size: 0.86rem;
        margin-top: 0.4rem;
        font-weight: 500;
      }

      /* Features Grid */
      .features-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.4rem;
      }

      .feature-card {
        background: linear-gradient(145deg, #ffffff, #f4faf8);
        border: 1px solid rgba(6,38,48,0.08);
        border-radius: var(--radius-lg);
        padding: 2rem 1.8rem;
        position: relative;
        overflow: hidden;
      }

      .feature-card::after {
        content: '';
        position: absolute;
        width: 110px;
        height: 110px;
        border-radius: 50%;
        right: -40px;
        top: -40px;
        background: rgba(244,185,66,0.15);
        transition: transform 0.4s;
      }

      .feature-card:hover::after {
        transform: scale(1.4);
      }

      .feature-card i.feat-icon {
        width: 56px;
        height: 56px;
        display: grid;
        place-items: center;
        background: var(--ink);
        color: var(--gold);
        border-radius: 16px;
        font-size: 1.4rem;
        margin-bottom: 1.2rem;
        transition: transform 0.3s, background 0.3s;
      }

      .feature-card:hover i.feat-icon {
        background: var(--teal);
        transform: rotate(-6deg) scale(1.05);
      }

      .feature-card h3 {
        color: var(--ink);
        font-size: 1.25rem;
        margin-bottom: 0.6rem;
      }

      .feature-card p {
        color: var(--muted);
        font-size: 0.92rem;
        line-height: 1.6;
      }

      /* School Grid (News & Events) */
      .school-grid {
        display: grid;
        grid-template-columns: 1.1fr 0.9fr;
        gap: 1.5rem;
        margin: 2.5rem 0;
      }

      .news-panel, .events-panel {
        background: var(--paper);
        border-radius: var(--radius-xl);
        padding: clamp(1.6rem, 3.2vw, 2.4rem);
        border: 1px solid var(--line);
        box-shadow: var(--shadow-sm);
      }

      .mini-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.4rem;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid var(--line);
      }

      .mini-title h3 {
        font-size: 1.3rem;
        color: var(--ink);
      }

      .eyebrow {
        color: var(--teal);
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        font-weight: 800;
        display: block;
        margin-bottom: 0.2rem;
      }

      .text-link {
        border: 0;
        background: none;
        color: var(--teal);
        font-weight: 800;
        font-size: 0.88rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.35rem;
        transition: color 0.2s;
      }

      .text-link:hover {
        color: var(--ink);
      }

      /* Notice List Item */
      .notice {
        display: grid;
        grid-template-columns: 68px 1fr auto;
        gap: 1.1rem;
        align-items: center;
        padding: 1.05rem 0;
        border-top: 1px solid var(--line);
        cursor: pointer;
        transition: background 0.2s, transform 0.2s;
      }

      .notice:first-of-type {
        border-top: 0;
      }

      .notice:hover {
        background: var(--teal-soft);
        border-radius: 12px;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        transform: translateX(4px);
      }

      .notice-date {
        background: var(--teal-soft);
        color: var(--teal);
        border-radius: 12px;
        text-align: center;
        padding: 0.55rem 0.3rem;
        font-weight: 800;
        font-size: 0.95rem;
        line-height: 1.15;
      }

      .notice-date small {
        display: block;
        font-size: 0.65rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .notice h4 {
        font-size: 0.96rem;
        margin-bottom: 0.25rem;
        color: var(--ink);
      }

      .notice p {
        color: var(--muted);
        font-size: 0.82rem;
      }

      .notice > i {
        color: #9cb1b5;
        transition: transform 0.2s, color 0.2s;
      }

      .notice:hover > i {
        transform: translateX(3px);
        color: var(--teal);
      }

      /* Event Highlights */
      .event-card {
        display: grid;
        grid-template-columns: 110px 1fr;
        gap: 1.1rem;
        padding: 1rem;
        background: #f5f9f8;
        border-radius: var(--radius-md);
        margin-top: 0.9rem;
        transition: transform 0.25s, background 0.25s, box-shadow 0.25s;
        border: 1px solid rgba(6,38,48,0.05);
      }

      .event-card:hover {
        transform: translateX(6px);
        background: var(--teal-soft);
        box-shadow: var(--shadow-sm);
      }

      .event-card img {
        width: 100%;
        height: 95px;
        object-fit: cover;
        border-radius: 12px;
      }

      .event-card span {
        color: var(--teal);
        font-weight: 800;
        font-size: 0.72rem;
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }

      .event-card h4 {
        font-size: 0.95rem;
        margin: 0.3rem 0;
        color: var(--ink);
      }

      .event-card p {
        color: var(--muted);
        font-size: 0.78rem;
      }

      /* Admission Banner */
      .admission-banner {
        margin: 3rem 0 1rem;
        padding: clamp(2.4rem, 5vw, 4.2rem);
        border-radius: var(--radius-xl);
        background: linear-gradient(135deg, var(--gold) 0%, #f7c963 100%);
        color: var(--deep);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2.5rem;
        position: relative;
        overflow: hidden;
        box-shadow: 0 25px 65px rgba(244,185,66,0.35);
      }

      .admission-banner::after {
        content: '';
        position: absolute;
        width: 320px;
        height: 320px;
        border: 50px solid rgba(255,255,255,0.22);
        border-radius: 50%;
        right: -80px;
        top: -120px;
        pointer-events: none;
      }

      .admission-banner::before {
        content: '';
        position: absolute;
        width: 160px;
        height: 160px;
        left: 45%;
        bottom: -80px;
        border: 24px solid rgba(4,27,34,0.08);
        border-radius: 50%;
        animation: orbit 8s ease-in-out infinite alternate-reverse;
        pointer-events: none;
      }

      .admission-banner > * {
        position: relative;
        z-index: 1;
      }

      .admission-banner h2 {
        font-size: clamp(1.8rem, 3.8vw, 3rem);
        letter-spacing: -0.04em;
        line-height: 1.15;
        max-width: 680px;
      }

      .admission-banner p {
        margin-top: 0.8rem;
        max-width: 620px;
        opacity: 0.85;
        font-size: 1.05rem;
      }

      .admission-banner .section-cta {
        background: var(--deep);
        color: #ffffff;
        font-size: 1rem;
        padding: 1.1rem 2rem;
        border-radius: 16px;
      }

      .admission-banner .section-cta:hover {
        background: #000000;
        box-shadow: 0 12px 30px rgba(0,0,0,0.3);
      }

      /* Interactive Calculator Widget on Home */
      .calc-widget {
        background: #ffffff;
        border-radius: var(--radius-xl);
        padding: 2.2rem;
        border: 1px solid var(--line);
        box-shadow: var(--shadow-md);
        margin: 2.5rem 0;
      }

      .calc-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .calc-header h3 {
        font-size: 1.45rem;
        display: flex;
        align-items: center;
        gap: 0.6rem;
      }

      .calc-header h3 i {
        color: #10b981;
      }

      .calc-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }

      .calc-controls {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }

      .calc-control-group label {
        display: block;
        font-weight: 700;
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
        color: var(--ink);
      }

      .calc-gpa-buttons {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .gpa-btn {
        background: #f1f5f4;
        border: 1px solid var(--line);
        padding: 0.55rem 0.95rem;
        border-radius: 10px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 0.88rem;
      }

      .gpa-btn:hover {
        background: var(--teal-soft);
        color: var(--teal);
      }

      .gpa-btn.active {
        background: var(--teal);
        color: #ffffff;
        border-color: var(--teal);
        box-shadow: 0 4px 12px rgba(12,106,118,0.25);
      }

      .calc-result-box {
        background: linear-gradient(145deg, #f7fbfa, #edf5f3);
        border: 1px solid var(--line-strong);
        border-radius: var(--radius-lg);
        padding: 1.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .result-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.35rem 0.85rem;
        border-radius: 999px;
        font-weight: 800;
        font-size: 0.82rem;
        background: #d1fae5;
        color: #065f46;
        margin-bottom: 0.8rem;
        width: fit-content;
      }

      .scholarship-highlight {
        font-size: 1.35rem;
        font-weight: 800;
        color: var(--teal);
        margin: 0.5rem 0;
      }

      /* Facilities Grid */
      .facilities-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.4rem;
        margin-top: 1.5rem;
      }

      .facility-card {
        background: #ffffff;
        border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        padding: 1.8rem;
        position: relative;
        overflow: hidden;
        transition: transform 0.25s, box-shadow 0.25s;
      }

      .facility-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
      }

      .facility-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        background: var(--teal-soft);
        color: var(--teal);
        display: grid;
        place-items: center;
        font-size: 1.35rem;
        margin-bottom: 1.1rem;
      }

      .facility-card h3 {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: var(--ink);
      }

      .facility-card p {
        color: var(--muted);
        font-size: 0.88rem;
        line-height: 1.6;
      }

      .facility-tags {
        display: flex;
        gap: 0.4rem;
        flex-wrap: wrap;
        margin-top: 1rem;
      }

      .facility-tag {
        font-size: 0.72rem;
        font-weight: 700;
        padding: 0.2rem 0.55rem;
        background: #eef4f3;
        color: var(--teal);
        border-radius: 6px;
      }

      /* Notice Board Filters & Search */
      .notice-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 1.8rem;
        background: #ffffff;
        padding: 1.2rem;
        border-radius: var(--radius-lg);
        border: 1px solid var(--line);
      }

      .filter-pills {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }

      .filter-pill {
        border: 1px solid var(--line);
        background: #ffffff;
        color: var(--ink);
        padding: 0.5rem 1rem;
        border-radius: 999px;
        font-weight: 700;
        font-size: 0.82rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .filter-pill:hover {
        background: var(--teal-soft);
        color: var(--teal);
      }

      .filter-pill.active {
        background: var(--teal);
        color: #ffffff;
        border-color: var(--teal);
      }

      .search-box-wrapper {
        position: relative;
        min-width: 260px;
      }

      .search-box-wrapper i {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--muted);
      }

      .search-input {
        width: 100%;
        padding: 0.65rem 1rem 0.65rem 2.6rem;
        border-radius: 999px;
        border: 1px solid var(--line-strong);
        font-size: 0.88rem;
        outline: none;
        transition: border-color 0.2s;
      }

      .search-input:focus {
        border-color: var(--teal);
        box-shadow: 0 0 0 3px rgba(12,106,118,0.12);
      }

      .notices-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 1.25rem;
      }

      .notice-card {
        background: #ffffff;
        border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        padding: 1.6rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: all 0.25s;
        cursor: pointer;
      }

      .notice-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-md);
        border-color: var(--teal);
      }

      .notice-card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;
      }

      .notice-category-badge {
        font-size: 0.74rem;
        font-weight: 800;
        text-transform: uppercase;
        padding: 0.2rem 0.65rem;
        border-radius: 6px;
        background: var(--teal-soft);
        color: var(--teal);
      }

      .notice-card h4 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        color: var(--ink);
      }

      .notice-card p {
        color: var(--muted);
        font-size: 0.86rem;
        line-height: 1.55;
        margin-bottom: 1.2rem;
      }

      .notice-card-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.8rem;
        color: var(--muted);
        padding-top: 0.8rem;
        border-top: 1px solid var(--line);
      }

      /* Teachers Section */
      .teachers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 320px));
        justify-content: center;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .teacher-card {
        background: #ffffff;
        border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        overflow: hidden;
        box-shadow: var(--shadow-sm);
        transition: all 0.25s;
      }

      .teacher-card:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-md);
      }

      .teacher-photo-wrapper {
        position: relative;
        height: 320px;
        background: #eaf0ef;
        overflow: hidden;
      }

      .teacher-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s ease;
      }

      .teacher-card:hover .teacher-photo {
        transform: scale(1.04);
      }

      .teacher-meta {
        padding: 1.4rem;
        display: grid;
        gap: 0.35rem;
      }

      .teacher-name {
        font-family: Manrope;
        font-size: 1.15rem;
        font-weight: 800;
        color: var(--ink);
      }

      .teacher-designation {
        color: var(--teal);
        font-size: 0.82rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .teacher-subject {
        color: var(--muted);
        font-size: 0.88rem;
      }

      .teacher-actions {
        display: flex;
        gap: 0.6rem;
        margin-top: 0.8rem;
      }

      .teacher-btn {
        flex: 1;
        padding: 0.55rem;
        border-radius: 8px;
        text-align: center;
        text-decoration: none;
        font-size: 0.82rem;
        font-weight: 700;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        transition: all 0.2s;
      }

      .teacher-btn.call {
        background: var(--teal-soft);
        color: var(--teal);
      }

      .teacher-btn.call:hover {
        background: var(--teal);
        color: #ffffff;
      }

      .teacher-btn.wa {
        background: #e6f9ed;
        color: #16a34a;
      }

      .teacher-btn.wa:hover {
        background: #16a34a;
        color: #ffffff;
      }

      /* Gallery Section */
      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.25rem;
        margin-top: 1.5rem;
      }

      .gallery-item {
        position: relative;
        border-radius: var(--radius-lg);
        overflow: hidden;
        height: 270px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
      }

      .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .gallery-item:hover img {
        transform: scale(1.08);
      }

      .gallery-caption {
        position: absolute;
        inset: auto 0 0 0;
        padding: 2.5rem 1.2rem 1.2rem;
        background: linear-gradient(180deg, transparent 0%, rgba(4,27,34,0.92) 100%);
        color: #ffffff;
        font-weight: 700;
        font-size: 0.94rem;
        transform: translateY(10px);
        opacity: 0.9;
        transition: all 0.3s ease;
      }

      .gallery-item:hover .gallery-caption {
        transform: none;
        opacity: 1;
      }

      /* Contact Us Page Layout */
      .contact-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
      }

      .contact-info-list {
        list-style: none;
        display: grid;
        gap: 1.4rem;
      }

      .contact-info-list li {
        display: flex;
        align-items: flex-start;
        gap: 1.1rem;
        background: #f7faf9;
        padding: 1.2rem;
        border-radius: var(--radius-md);
        border: 1px solid var(--line);
      }

      .contact-info-list li i {
        width: 44px;
        height: 44px;
        background: var(--ink);
        color: var(--gold);
        border-radius: 12px;
        display: grid;
        place-items: center;
        font-size: 1.15rem;
        flex-shrink: 0;
      }

      .contact-label {
        font-size: 0.78rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--muted);
        font-weight: 800;
        display: block;
        margin-bottom: 0.25rem;
      }

      .contact-value {
        font-size: 1.05rem;
        font-weight: 700;
        color: var(--ink);
      }

      .contact-value a {
        color: var(--ink);
        text-decoration: none;
        transition: color 0.2s;
      }

      .contact-value a:hover {
        color: var(--teal);
      }

      .contact-form-box {
        background: #ffffff;
        border: 1px solid var(--line);
        border-radius: var(--radius-xl);
        padding: 2.2rem;
        box-shadow: var(--shadow-sm);
      }

      .contact-form-title {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        font-size: 1.3rem;
        font-weight: 800;
        margin-bottom: 1.4rem;
        color: var(--ink);
      }

      .contact-form-title i {
        color: var(--teal);
      }

      .form-group {
        margin-bottom: 1.15rem;
      }

      .form-group label {
        display: block;
        font-weight: 700;
        font-size: 0.88rem;
        margin-bottom: 0.4rem;
        color: var(--ink);
      }

      .form-control {
        width: 100%;
        padding: 0.85rem 1rem;
        border-radius: var(--radius-md);
        border: 1px solid var(--line-strong);
        background: #ffffff;
        font-size: 0.94rem;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
      }

      .form-control:focus {
        border-color: var(--teal);
        box-shadow: 0 0 0 4px rgba(12,106,118,0.12);
      }

      .btn-submit {
        width: 100%;
        padding: 0.95rem;
        border-radius: var(--radius-md);
        border: 0;
        background: var(--ink);
        color: #ffffff;
        font-weight: 800;
        font-size: 0.95rem;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        transition: all 0.25s;
      }

      .btn-submit:hover {
        background: var(--teal);
        transform: translateY(-2px);
      }

      /* Stream Cards on Academic Page */
      .academic-streams-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.4rem;
        margin: 2rem 0;
      }

      .stream-card {
        background: #ffffff;
        border: 1px solid var(--line);
        border-left: 5px solid var(--teal);
        border-radius: var(--radius-lg);
        padding: 1.8rem;
        transition: all 0.25s;
      }

      .stream-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
      }

      .stream-card h4 {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-size: 1.25rem;
        margin-bottom: 0.8rem;
        color: var(--ink);
      }

      .stream-card p {
        color: var(--muted);
        font-size: 0.9rem;
        line-height: 1.6;
      }

      .stream-subjects-list {
        margin-top: 1rem;
        padding-top: 0.8rem;
        border-top: 1px solid var(--line);
        font-size: 0.82rem;
        color: var(--ink);
      }

      /* FAQ Accordion */
      .faq-accordion {
        margin-top: 2rem;
        display: grid;
        gap: 0.8rem;
      }

      .faq-item {
        background: #ffffff;
        border: 1px solid var(--line);
        border-radius: var(--radius-md);
        overflow: hidden;
        transition: border-color 0.2s;
      }

      .faq-question {
        padding: 1.15rem 1.4rem;
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        user-select: none;
      }

      .faq-question i {
        color: var(--teal);
        transition: transform 0.3s;
      }

      .faq-item.active .faq-question i {
        transform: rotate(180deg);
      }

      .faq-answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), padding 0.35s;
        padding: 0 1.4rem;
        color: var(--muted);
        font-size: 0.92rem;
        line-height: 1.65;
      }

      .faq-item.active .faq-answer {
        max-height: 300px;
        padding-bottom: 1.2rem;
      }

      /* Floating Speed-Dial Dock */
      .floating-dock {
        position: fixed;
        bottom: 1.8rem;
        right: 1.8rem;
        z-index: 9990;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 0.75rem;
      }

      .dock-main-btn {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--teal) 0%, #06404d 100%);
        color: var(--gold);
        border: 2px solid var(--gold);
        box-shadow: 0 12px 35px rgba(4,27,34,0.35);
        cursor: pointer;
        display: grid;
        place-items: center;
        font-size: 1.45rem;
        transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .dock-main-btn:hover {
        transform: scale(1.08) rotate(15deg);
        box-shadow: 0 16px 40px rgba(4,27,34,0.45);
      }

      .dock-menu {
        display: flex;
        flex-direction: column-reverse;
        gap: 0.6rem;
        opacity: 0;
        visibility: hidden;
        transform: translateY(15px) scale(0.95);
        transition: all 0.28s cubic-bezier(0.2, 0.8, 0.2, 1);
        pointer-events: none;
      }

      .floating-dock.open .dock-menu {
        opacity: 1;
        visibility: visible;
        transform: none;
        pointer-events: auto;
      }

      .dock-item {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #ffffff;
        color: var(--ink);
        border: 1px solid var(--line);
        box-shadow: var(--shadow-md);
        display: grid;
        place-items: center;
        text-decoration: none;
        cursor: pointer;
        font-size: 1.1rem;
        transition: all 0.2s;
        position: relative;
      }

      .dock-item:hover {
        transform: scale(1.12);
        background: var(--gold);
        color: var(--deep);
      }

      .dock-item::before {
        content: attr(data-tooltip);
        position: absolute;
        right: 56px;
        background: var(--deep);
        color: #ffffff;
        padding: 0.3rem 0.7rem;
        border-radius: 6px;
        font-size: 0.76rem;
        font-weight: 700;
        white-space: nowrap;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
      }

      .dock-item:hover::before {
        opacity: 1;
      }

      /* Modals */
      .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(4, 27, 34, 0.75);
        backdrop-filter: blur(8px);
        z-index: 10005;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }

      .modal-backdrop.open {
        opacity: 1;
        visibility: visible;
      }

      .modal-window {
        background: #ffffff;
        width: min(94%, 640px);
        max-height: 90vh;
        overflow-y: auto;
        border-radius: var(--radius-xl);
        padding: clamp(1.6rem, 3.5vw, 2.4rem);
        position: relative;
        box-shadow: 0 35px 80px rgba(0,0,0,0.4);
        transform: translateY(25px) scale(0.97);
        transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      .modal-backdrop.open .modal-window {
        transform: none;
      }

      .modal-close-btn {
        position: absolute;
        top: 1.2rem;
        right: 1.2rem;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 0;
        background: #eef3f2;
        color: var(--ink);
        cursor: pointer;
        display: grid;
        place-items: center;
        font-size: 1rem;
        transition: all 0.2s;
      }

      .modal-close-btn:hover {
        background: #ef4444;
        color: #ffffff;
      }

      /* Lightbox Modal */
      #lightbox-modal .modal-window {
        max-width: 900px;
        padding: 1.5rem;
        background: #061e25;
        color: #ffffff;
        text-align: center;
      }

      .lightbox-image-wrap {
        width: 100%;
        max-height: 65vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lightbox-image-wrap img {
        max-width: 100%;
        max-height: 65vh;
        object-fit: contain;
        border-radius: 12px;
        transition: transform 0.25s;
      }

      .lightbox-controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        gap: 1rem;
      }

      /* Admin CMS Workspace */
      .admin-tab-nav {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        border-bottom: 1px solid var(--line);
        padding-bottom: 0.8rem;
        margin-bottom: 1.8rem;
      }

      .admin-tab-btn {
        padding: 0.65rem 1.1rem;
        border-radius: 10px;
        border: 1px solid var(--line);
        background: #ffffff;
        font-weight: 700;
        font-size: 0.86rem;
        cursor: pointer;
        transition: all 0.2s;
      }

      .admin-tab-btn.active {
        background: var(--ink);
        color: #ffffff;
        border-color: var(--ink);
      }

      .admin-tab-content {
        display: none;
      }

      .admin-tab-content.active {
        display: block;
        animation: pageReveal 0.4s ease;
      }

      /* Toast Notifications */
      #save-toast {
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(120px);
        background: var(--deep);
        color: #ffffff;
        padding: 0.95rem 1.6rem;
        border-radius: 999px;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        box-shadow: 0 15px 45px rgba(0,0,0,0.3);
        z-index: 10009;
        font-weight: 700;
        font-size: 0.92rem;
        border: 1px solid rgba(244,185,66,0.35);
        transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      #save-toast.visible {
        transform: translateX(-50%) translateY(0);
      }

      #save-toast i {
        color: var(--gold);
        font-size: 1.15rem;
      }

      /* Footer */
      footer {
        background: var(--deep);
        color: rgba(255,255,255,0.85);
        padding: 4rem 1.5rem 3rem;
        margin-top: 5rem;
        border-top: 1px solid rgba(255,255,255,0.08);
        position: relative;
        z-index: 10;
      }

      .footer-inner {
        max-width: 1280px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 2.5rem;
      }

      .footer-col h4 {
        color: #ffffff;
        font-size: 1.1rem;
        margin-bottom: 1.2rem;
        position: relative;
      }

      .footer-col h4::after {
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        background: var(--gold);
        margin-top: 0.4rem;
        border-radius: 2px;
      }

      .footer-col ul {
        list-style: none;
        display: grid;
        gap: 0.6rem;
      }

      .footer-col a {
        color: rgba(255,255,255,0.7);
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.2s;
      }

      .footer-col a:hover {
        color: var(--gold);
      }

      .footer-bottom {
        max-width: 1280px;
        margin: 3rem auto 0;
        padding-top: 2rem;
        border-top: 1px solid rgba(255,255,255,0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        font-size: 0.84rem;
        color: rgba(255,255,255,0.6);
      }

      /* Back to top button */
      .back-to-top {
        position: fixed;
        right: 1.5rem;
        bottom: 6.5rem;
        z-index: 998;
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border: 1px solid rgba(255,255,255,.25);
        border-radius: 50%;
        background: var(--deep);
        color: #fff;
        box-shadow: 0 10px 24px rgba(7,43,54,.22);
        opacity: 0;
        visibility: hidden;
        transform: translateY(10px);
        transition: all 0.25s ease;
        cursor: pointer;
      }

      .back-to-top.visible {
        opacity: 1;
        visibility: visible;
        transform: none;
      }

      /* Media Queries */
      @media (max-width: 1024px) {
        .features-grid, .academic-streams-container, .facilities-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .footer-inner {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (max-width: 920px) {
        .school-topbar { display: none; }
        .menu-toggle { display: grid; }
        nav {
          position: absolute;
          top: 72px;
          left: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(25px);
          padding: 1.2rem;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--line);
          display: grid;
          gap: 0.5rem;
          transform: translateY(-15px) scale(0.97);
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        nav.open {
          transform: none;
          opacity: 1;
          visibility: visible;
        }
        .nav-link { width: 100%; padding: 0.75rem 1rem; }
        .quick-access { grid-template-columns: repeat(2, 1fr); margin-top: -3rem; }
        .school-grid, .contact-layout, .calc-body { grid-template-columns: 1fr; }
      }

      @media (max-width: 640px) {
        .nav-container { padding: 0.65rem 1rem; }
        .brand-title { font-size: 0.98rem; }
        .hero { min-height: 520px; height: auto; padding: 3rem 1rem; border-radius: var(--radius-lg); }
        .hero-content h1 { font-size: clamp(1.9rem, 8vw, 2.6rem); }
        .quick-access { grid-template-columns: 1fr; padding: 0.8rem; }
        .stats-band { grid-template-columns: 1fr 1fr; }
        .features-grid, .facilities-grid, .academic-streams-container { grid-template-columns: 1fr; }
        .footer-inner { grid-template-columns: 1fr; }
        .floating-dock { bottom: 1.2rem; right: 1.2rem; }
      }
`;
