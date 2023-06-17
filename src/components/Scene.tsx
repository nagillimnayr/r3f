import React, { useRef } from 'react';
import CubeMesh from './CubeMesh';
import { SphereMesh } from './SphereMesh';
import { InvertSphere } from './InvertSphere';
import { Bounds, CameraControls, PerspectiveCamera } from '@react-three/drei';
import { ZoomOnClick } from './ZoomOnClick';
import { proxyState } from '../state/ProxyState';

const Scene = () => {
  const cameraControlRef = useRef<CameraControls | null>(null);

  return (
    <>
      <CubeMesh color={'orange'} position={[5, 0, 0]} />
      <CubeMesh color={'green'} position={[-2, 3.5, -1]} />
      <SphereMesh color={'skyblue'} position={[-4, -2, 0]} />

      <PerspectiveCamera makeDefault position={[0, 0, 10]}>
        <spotLight />
      </PerspectiveCamera>
      <CameraControls
        makeDefault
        ref={(controls) => {
          cameraControlRef.current = controls;
          proxyState.controls = controls;
        }}
      />
    </>
  );
};

export default Scene;
