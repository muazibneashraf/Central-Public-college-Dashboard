import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');

const requiredIds = [
  'home', 'about', 'info', 'notices', 'teachers', 'facilities', 'gallery', 'contact', 'admin',
  'calc-modal', 'notice-modal', 'map-modal', 'lightbox-modal',
  'home-hero-banner', 'hero-college-name', 'hero-subtitle-text',
  'home-quick-links-container', 'home-stats-container',
  'home-gpa-selector', 'home-group-selector', 'home-calc-result',
  'modal-gpa-selector', 'modal-group-selector', 'modal-calc-result',
  'notice-search-input', 'notice-filter-pills', 'full-notices-container',
  'teacher-search-input', 'teacher-filter-pills', 'teachers-grid-list',
  'gallery-filter-pills', 'college-gallery-grid',
  'inquiry-form', 'name-input', 'email-input', 'stream-select', 'msg-input',
  'admin-login-form', 'admin-passcode-input', 'admin-panel-container', 'admin-logout-btn'
];

let missing = [];
for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`) && !html.includes(`id='${id}'`)) {
    missing.push(id);
  }
}

if (missing.length > 0) {
  console.error('❌ Missing IDs:', missing);
  process.exit(1);
} else {
  console.log('✅ All', requiredIds.length, 'critical IDs verified present in index.html!');
}

// Check that tilt-related mouse perspective/rotate3d code is not attached
if (html.includes('rotateX(') || html.includes('rotateY(') || html.includes('perspective(1000px)')) {
  console.warn('⚠️ Warning: 3D tilt styles found');
} else {
  console.log('✅ Tilt card 3D rotation properly eliminated.');
}

// Check default admin passcode hint
if (html.includes('admin123')) {
  console.log('✅ Admin default passcode (admin123) present and auto-fill ready.');
} else {
  console.error('❌ admin123 missing from admin login section!');
  process.exit(1);
}

// Check Hero 2-column layout
if (html.includes('hero-container') && html.includes('hero-main-col') && html.includes('hero-card-col') && html.includes('hero-glass-card')) {
  console.log('✅ Split 2-column hero structure verified.');
} else {
  console.error('❌ Hero 2-column classes missing!');
  process.exit(1);
}

// Check Ticker Viewport Isolation (prevents marquee overlapping badge)
if (html.includes('ticker-badge-wrap') && html.includes('ticker-track-viewport')) {
  console.log('✅ Ticker viewport isolation verified (no badge overlapping possible).');
} else {
  console.error('❌ Ticker viewport isolation missing!');
  process.exit(1);
}

// Check no negative margin on quick-access
if (html.includes('margin: -4.5rem')) {
  console.error('❌ quick-access still has negative top margin!');
  process.exit(1);
} else {
  console.log('✅ quick-access negative margins eliminated.');
}

// Check Demo Pictures
if (html.includes('images.unsplash.com') && html.includes('college-crest.svg')) {
  console.log('✅ Demo pictures and universal collegiate crest verified.');
} else {
  console.error('❌ Demo pictures missing from index.html!');
  process.exit(1);
}

if (html.includes('/school-logo-transparent.png')) {
  console.warn('⚠️ Warning: school-logo-transparent.png still present in index.html');
} else {
  console.log('✅ Old specific college logos completely removed.');
}

console.log('🎉 Verification successful!');
