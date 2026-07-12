# Gazipur Central Public College Website

This is a normal local website project. It does not require a ChatGPT sign-in.

## Open the website locally

1. Install [Node.js](https://nodejs.org/) if it is not already installed.
2. Open PowerShell in this folder.
3. Run `npm install` once.
4. Run `npm run dev` whenever you want to work on the site.
5. Open `http://localhost:3000/` in your browser.

Keep the PowerShell window open while viewing the website. Press `Ctrl+C` in that window to stop it.

## Modify the website

- Main page, styles, content, and interactions: `index.html`
- Social preview artwork: `public/og.png`
- Build settings: `vite.config.ts`

Most public content can also be updated through the website's Admin section.

## Create a production copy

Run `npm run build`. The finished static files will be generated in the `dist` folder.
