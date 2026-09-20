import * as THREE from 'three';

const cache = new Map();

const rasterize = (url, size = 160) => {
  const entry = { status: 'pending' };
  entry.promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      const pad = size * 0.14;
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;

      entry.status = 'success';
      entry.texture = texture;
      resolve(texture);
    };
    img.onerror = (err) => {
      entry.status = 'error';
      entry.error = err;
      reject(err);
    };
    img.src = url;
  });
  return entry;
};

/**
 * Loads an image (SVG/PNG icon) and rasterizes it onto a fixed-size canvas
 * before handing it to three.js as a CanvasTexture. Feeding SVGs directly to
 * THREE.TextureLoader can produce invalid/immutable-texture WebGL errors
 * since the browser's intrinsic SVG size isn't a reliable raster size —
 * pre-drawing onto a canvas of a known pixel size avoids that entirely.
 * Suspense-compatible: throws the pending promise like `useLoader`.
 */
export const useIconTexture = (url) => {
  let entry = cache.get(url);
  if (!entry) {
    entry = rasterize(url);
    cache.set(url, entry);
  }
  if (entry.status === 'pending') throw entry.promise;
  if (entry.status === 'error') throw entry.error;
  return entry.texture;
};
