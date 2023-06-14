import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import CubeMesh from './CubeMesh';
import {
  Grid,
  OrbitControls,
  PerspectiveCamera,
  SpotLight,
  Stats,
} from '@react-three/drei';
import { Vector3 } from 'three';
import Scene from './Scene';

const CanvasHolder = () => {
  return (
    <div className="canvas-outer-box">
      <div className="canvas-inner-box">
        <Canvas gl={{ logarithmicDepthBuffer: true }}>
          <Stats />
          <PerspectiveCamera makeDefault position={[0, 0, 10]}>
            <spotLight />
          </PerspectiveCamera>
          <OrbitControls />

          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasHolder;
