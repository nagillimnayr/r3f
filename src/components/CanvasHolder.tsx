import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import CubeMesh from './CubeMesh';
import { VRButton, XR } from '@react-three/xr';
import {
  CameraControls,
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
    <div className="min-w-96 min-h-fit w-[1200px] flex flex-col justify-start items-center mt-20 border-2 border-red-500">
      <div className="min-w-full h-[800px] border-2 border-blue-500">
        <Canvas gl={{ logarithmicDepthBuffer: true }}>
          <XR>
            <Stats />

            <Scene />
          </XR>
        </Canvas>
      </div>
      <div className="relative flex flex-col place-items-center w-36 h-24 border-2 bg-slate-500 border-green-400">
        <VRButton />
      </div>
    </div>
  );
};

export default CanvasHolder;
