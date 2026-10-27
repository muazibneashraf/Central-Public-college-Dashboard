import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { styles } from './styles.mjs';
import { markup } from './markup.mjs';
import { appJs } from './app-js.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const targetFile = path.join(rootDir, 'index.html');

console.log('Assembling enhanced index.html at:', targetFile);

const finalHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Central Public College — A premier higher secondary academic institution fostering excellence, integrity, and leadership." />
    <meta name="theme-color" content="#041b22" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Central Public College" />
    <meta property="og:description" content="Excellence, Integrity, Leadership — explore HSC Science, Business Studies and Humanities curriculum at Central Public College." />
    <meta property="og:image" content="/og.png" />
    <title>Central Public College | Official Portal</title>
    <link rel="icon" href="/school-logo-transparent.png" />
    <link rel="apple-touch-icon" href="/school-logo-transparent.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Manrope:wght@500;600;700;800&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
${styles}
    </style>
  </head>
  <body>
    <!-- Top Progress Line -->
    <div class="scroll-progress" id="scroll-progress"></div>

    <!-- Ambient Interactive Canvas Background -->
    <canvas id="ambient-canvas"></canvas>

    <!-- App Initial Loader -->
    <div id="app-loader">
      <img src="/school-logo-transparent.png" alt="Loading College Portal..." class="loader-logo" />
      <div class="spinner"></div>
      <p style="margin-top: 1rem; font-weight: 700; letter-spacing: 0.05em; font-size: 0.95rem; color: #f4b942;">CENTRAL PUBLIC COLLEGE</p>
    </div>

${markup}

${appJs}
  </body>
</html>
`;

fs.writeFileSync(targetFile, finalHtml, 'utf-8');
console.log('Successfully wrote upgraded index.html (' + finalHtml.length + ' bytes)');
