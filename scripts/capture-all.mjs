import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, '../out');
const SCREENSHOTS_DIR = path.resolve(__dirname, '../screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let cleanPath = req.url.split('?')[0].replace(/^\/+/, '');
  if (cleanPath === '') {
    cleanPath = 'index.html';
  }

  let filePath = path.join(OUT_DIR, cleanPath);

  if (fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  } else if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    if (fs.existsSync(path.join(filePath, 'index.html'))) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found: ' + req.url);
  }
});

const PORT = 3335;

server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const targets = [
    { name: 'home-desktop-1920.png', url: `http://localhost:${PORT}/`, w: 1920, h: 1080 },
    { name: 'home-mobile-390.png', url: `http://localhost:${PORT}/`, w: 390, h: 844 },
    { name: 'home-mobile-360.png', url: `http://localhost:${PORT}/`, w: 360, h: 780 },
    { name: 'home-tablet-768.png', url: `http://localhost:${PORT}/`, w: 768, h: 1024 },
    { name: 'fleet-desktop-1920.png', url: `http://localhost:${PORT}/fleet`, w: 1920, h: 1080 },
    { name: 'fleet-mobile-390.png', url: `http://localhost:${PORT}/fleet`, w: 390, h: 844 },
    { name: 'detail-desktop-1920.png', url: `http://localhost:${PORT}/fleet/ferrari-f8-tributo`, w: 1920, h: 1080 },
    { name: 'detail-mobile-390.png', url: `http://localhost:${PORT}/fleet/ferrari-f8-tributo`, w: 390, h: 844 },
    { name: 'monthly-desktop-1920.png', url: `http://localhost:${PORT}/monthly-rental`, w: 1920, h: 1080 },
    { name: 'airport-desktop-1920.png', url: `http://localhost:${PORT}/airport-delivery`, w: 1920, h: 1080 },
    { name: 'contact-desktop-1920.png', url: `http://localhost:${PORT}/contact`, w: 1920, h: 1080 }
  ];

  for (const t of targets) {
    const outFile = path.join(SCREENSHOTS_DIR, t.name);
    console.log(`Capturing ${t.name}...`);
    const cmd = `"${chromePath}" --headless=new --disable-gpu --screenshot="${outFile}" --window-size=${t.w},${t.h} --hide-scrollbars "${t.url}"`;
    try {
      execSync(cmd, { stdio: 'pipe' });
      const sizeKb = (fs.statSync(outFile).size / 1024).toFixed(1);
      console.log(`Captured ${t.name}: ${sizeKb} KB`);
    } catch (e) {
      console.error(`Error on ${t.name}:`, e.message);
    }
  }

  server.close(() => {
    console.log('Finished capturing all responsive screenshots.');
    process.exit(0);
  });
});
