import React from 'react';
import Platform from './Platform';
import Laptop from './Laptop';
// import InfoPanels from './InfoPanels';
// import { Plant, Mug, Books } from './Desk';

// Single multiplier controlling the laptop's overall size — since `scale`
// applies to the laptop's root group, every part (base, keyboard, trackpad,
// screen, and its text) grows together in proportion. Tune this one number
// instead of touching individual component dimensions.
const LAPTOP_SIZE = 2.6;

const Workspace = () => {
  return (
    <group>
      <Platform />
      <Laptop position={[0, -0.35, -0.05]} rotation={[0, 0, 0]} scale={LAPTOP_SIZE} />
      {/* <InfoPanels /> */}
      {/* <Plant position={[0.85, -0.35, -0.1]} /> */}
      {/* <Mug position={[-0.62, -0.31, 0.2]} /> */}
      {/* <Books position={[-0.85, -0.35, -0.25]} /> */}
    </group>
  );
};

export default Workspace;
