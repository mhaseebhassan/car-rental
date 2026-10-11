import http from 'http';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PORT = 3334;
const OUT_DIR = path.resolve('out');
const SCREENSHOTS_DIR = path.resolve('screenshots');

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
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  
  let cleanPath = reqPath;
  let filePath = path.join(OUT_DIR, cleanPath);

  // Check .html first to avoid directory collision
  if (fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  } else if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory() && fs.existsSync(path.join(filePath, 'index.html'))) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(PORT, async () => {
  console.log(`Static server running at http://localhost:${PORT}`);
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  const viewports = [
    { name: 'desktop-1920', width: 1920, height: 1080 },
    { name: 'laptop-1280', width: 1280, height: 900 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'mobile-360', width: 360, height: 780 }
  ];

  const routes = [
    { path: '', filePrefix: 'home' },
    { path: 'fleet', filePrefix: 'fleet' },
    { path: 'fleet/ferrari-f8-tributo', filePrefix: 'fleet-detail' },
    { path: 'monthly-rental', filePrefix: 'monthly-rental' },
    { path: 'airport-delivery', filePrefix: 'airport-delivery' },
    { path: 'contact', filePrefix: 'contact' }
  ];

  for (const vp of viewports) {
    for (const r of routes) {
      if (vp.name.startsWith('mobile') && (r.filePrefix === 'home' || r.filePrefix === 'fleet' || r.filePrefix === 'fleet-detail')) {
        const outFile = path.join(SCREENSHOTS_DIR, `${r.filePrefix}-${vp.name}.png`);
        const url = `http://localhost:${PORT}/${r.path}`;
        const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${outFile}" --window-size=${vp.width},${vp.height} --hide-scrollbars --virtual-time-budget=2000 "${url}"`;
        try {
          execSync(cmd, { stdio: 'pipe' });
          console.log(`Saved screenshot: ${path.basename(outFile)}`);
        } catch (err) {
          console.error(`Error capturing ${url}:`, err.message);
        }
      } else if (vp.name === 'desktop-1920' || vp.name === 'tablet-768') {
        const outFile = path.join(SCREENSHOTS_DIR, `${r.filePrefix}-${vp.name}.png`);
        const url = `http://localhost:${PORT}/${r.path}`;
        const cmd = `"${chromePath}" --headless --disable-gpu --screenshot="${outFile}" --window-size=${vp.width},${vp.height} --hide-scrollbars --virtual-time-budget=2000 "${url}"`;
        try {
          execSync(cmd, { stdio: 'pipe' });
          console.log(`Saved screenshot: ${path.basename(outFile)}`);
        } catch (err) {
          console.error(`Error capturing ${url}:`, err.message);
        }
      }
    }
  }

  server.close(() => {
    console.log('All visual screenshots captured and server closed.');
    process.exit(0);
  });
});
