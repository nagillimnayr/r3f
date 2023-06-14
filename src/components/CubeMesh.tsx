import { Edges, Trail } from '@react-three/drei';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { ColorRepresentation, Mesh } from 'three';

const CubeMesh = (props: { color: ColorRepresentation }) => {
  const meshRef = useRef<Mesh>(null!);
  const [isSelected, setSelected] = useState<boolean>(false);
  const [isHovered, setHovered] = useState<boolean>(false);

  useFrame(({ clock }, delta) => {
    const timeStamp = clock.elapsedTime;

    const sint = Math.sin(timeStamp);
    const cost = Math.cos(timeStamp);
    const tant = Math.tan(timeStamp);
    // Rotate
    meshRef.current.rotation.x += delta * sint;
    meshRef.current.rotation.y += delta * cost;
    meshRef.current.rotation.z += delta;

    // Position
    // meshRef.current.position.x = 3.5 * (-2 * sint);
    // meshRef.current.position.y = 3.5 * cost;
  });
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    isSelected
      ? meshRef.current.scale.set(2, 2, 2)
      : meshRef.current.scale.set(1, 1, 1);
    setSelected(!isSelected);
  };
  const handlePointerOver = () => {
    setHovered(true);
  };
  const handlePointerOut = () => {
    setHovered(false);
  };
  return (
    <mesh
      ref={meshRef}
      visible
      onClick={handleClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxBufferGeometry />
      <meshStandardMaterial color={isHovered ? 'hotpink' : props.color} />
      <Trail target={meshRef} length={4} decay={0.1} width={1}></Trail>
      <Edges scale={1.05} threshold={15} color={'white'} />
    </mesh>
  );
};
export default CubeMesh;
