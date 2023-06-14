import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import CubeMesh from './CubeMesh';
import {
  Grid,
  OrbitControls,
  PerspectiveCamera,
  Stats,
} from '@react-three/drei';
import Body from '../sim/components/Body/Body';
import { Vector3 } from 'three';
import loadBodyPreset from '../sim/utils/loadBodyPreset';
import SolarSystem from '../sim/components/SolarSystem/SolarSystem';

const CanvasHolder = () => {
  const planet = loadBodyPreset('Earth');
  return (
    <div className="canvas-outer-box">
      <div className="canvas-inner-box">
        <Canvas gl={{ logarithmicDepthBuffer: true }}>
          <Stats />
          <ambientLight intensity={0.5} />
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls />
          {/* <CubeMesh color="red" />
          {<Body args={loadBodyPreset('Earth')} />} */}
          <SolarSystem />
          <polarGridHelper />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasHolder;
