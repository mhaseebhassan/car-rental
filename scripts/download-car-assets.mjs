import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const CAR_ASSETS = [
  {
    url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=75&w=1400&auto=format&fit=crop',
    dest: 'public/images/hero/car-hero.webp',
    id: 'photo-1503376780353-7e6692767b70',
    title: 'Porsche Performance Highway Perspective',
    author: 'Campbell'
  },
  {
    url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/porsche-911-gt3.webp',
    id: 'photo-1614162692292-7ac56d7f7f1e',
    title: 'Porsche 911 GT3 Shark Blue Coupe',
    author: 'Stefan Rodriguez'
  },
  {
    url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/ferrari-f8-tributo.webp',
    id: 'photo-1592198084033-aade902d1aae',
    title: 'Ferrari F8 Tributo Rosso Corsa',
    author: 'Olav Tvedt'
  },
  {
    url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/lamborghini-huracan-evo.webp',
    id: 'photo-1544829099-b9a0c07fad1a',
    title: 'Lamborghini Huracan EVO V10',
    author: 'Daniele D\'Andreti'
  },
  {
    url: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/rolls-royce-cullinan.webp',
    id: 'photo-1631295868223-63265b40d9e4',
    title: 'Rolls Royce Bespoke Luxury Exterior',
    author: 'Giorgio Trovato'
  },
  {
    url: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/mercedes-g63-amg.webp',
    id: 'photo-1520031441872-265e4ff70366',
    title: 'Mercedes-AMG G 63 V8 Biturbo',
    author: 'Dhiva Krishna'
  },
  {
    url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/bentley-continental-gt.webp',
    id: 'photo-1617814076367-b759c7d7e738',
    title: 'Bentley Continental GT Grand Tourer',
    author: 'Tyler Clemmensen'
  },
  {
    url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/range-rover-autobiography.webp',
    id: 'photo-1563720223185-11003d516935',
    title: 'Range Rover Luxury SUV Exterior',
    author: 'Adrian N'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/audi-rs6-avant.webp',
    id: 'photo-1603584173870-7f23fdae1b7a',
    title: 'Audi RS Performance Silhouette',
    author: 'Martin Katler'
  },
  {
    url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/bmw-m4-competition.webp',
    id: 'photo-1555215695-3004980ad54e',
    title: 'BMW M Competition Sport Coupe',
    author: 'Alexandre Debiève'
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/mercedes-s580-maybach.webp',
    id: 'photo-1618843479313-40f8afb4b4d8',
    title: 'Mercedes-Maybach Luxury Chauffeur Sedan',
    author: 'Maxim Hopman'
  },
  {
    url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/corvette-c8-stingray.webp',
    id: 'photo-1552519507-da3b142c6e3d',
    title: 'Chevrolet Corvette C8 Mid-Engine Coupe',
    author: 'Ed Harvey'
  },
  {
    url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=75&w=1100&auto=format&fit=crop',
    dest: 'public/images/fleet/tesla-model-s-plaid.webp',
    id: 'photo-1560958089-b8a1929cea89',
    title: 'Tesla High Performance Electric Vehicle',
    author: 'Austin Ramsey'
  }
];

function fetchBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchBuffer(res.headers.location));
      }
      const data = [];
      res.on('data', c => data.push(c));
      res.on('end', () => resolve(Buffer.concat(data)));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading and optimizing 13 car assets...');
  for (const item of CAR_ASSETS) {
    try {
      const buf = await fetchBuffer(item.url);
      const isHero = item.dest.includes('hero');
      let pipeline = sharp(buf);
      if (isHero) {
        pipeline = pipeline.resize({ width: 1500 }).webp({ quality: 78 });
      } else {
        pipeline = pipeline.resize({ width: 1000 }).webp({ quality: 75 });
      }
      const out = await pipeline.toBuffer();
      fs.writeFileSync(path.resolve(item.dest), out);
      console.log(`Saved ${item.dest}: ${(out.length / 1024).toFixed(1)} KB`);
    } catch (e) {
      console.error(`Failed ${item.dest}:`, e.message);
    }
  }
  console.log('Finished downloading car assets.');
}

run();
