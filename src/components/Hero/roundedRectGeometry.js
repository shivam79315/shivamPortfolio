import * as THREE from 'three';

// A rounded-rectangle shape, extruded to a fixed thickness. Unlike drei's
// RoundedBox (whose corner radius is capped by the box's smallest
// dimension), this lets the footprint have a large corner radius
// independent of how thin the slab is.
export const createRoundedRectGeometry = (width, depth, radius, thickness) => {
  const w = width / 2;
  const d = depth / 2;
  const shape = new THREE.Shape();
  shape.moveTo(-w + radius, -d);
  shape.lineTo(w - radius, -d);
  shape.quadraticCurveTo(w, -d, w, -d + radius);
  shape.lineTo(w, d - radius);
  shape.quadraticCurveTo(w, d, w - radius, d);
  shape.lineTo(-w + radius, d);
  shape.quadraticCurveTo(-w, d, -w, d - radius);
  shape.lineTo(-w, -d + radius);
  shape.quadraticCurveTo(-w, -d, -w + radius, -d);

  const geometry = new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false, curveSegments: 16 });
  geometry.translate(0, 0, -thickness / 2);
  return geometry;
};
