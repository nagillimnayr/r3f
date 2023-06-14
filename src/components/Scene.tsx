import React from 'react';
import CubeMesh from './CubeMesh';
import { SphereMesh } from './SphereMesh';

const Scene = () => {
  return (
    <>
      <CubeMesh color={'orange'} position={[4, 0, 0]} />
      <SphereMesh color={'skyblue'} position={[-4, 0, 0]} />
    </>
  );
};

export default Scene;
