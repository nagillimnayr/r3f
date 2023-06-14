import { Sphere, meshBounds } from '@react-three/drei';
import React from 'react';
import { ColorRepresentation, Color, MeshStandardMaterial } from 'three';

type SphereProps = {
  color: ColorRepresentation;
  position: [number, number, number];
};
export const SphereMesh = (props: SphereProps) => {
  return (
    <>
      <>
        <Sphere position={props.position}>
          <meshStandardMaterial color={props.color} />
        </Sphere>
      </>
    </>
  );
};
