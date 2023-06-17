import { Object3DNode, extend } from '@react-three/fiber';
import { InvertedSphere } from './classes/InvertedSphere';
import React from 'react';

extend({ InvertedSphere });
declare module '@react-three/fiber' {
  interface ThreeElements {
    invertedSphere: Object3DNode<InvertedSphere, typeof InvertedSphere>;
  }
}

export const InvertSphere = () => {
  return (
    <>
      <invertedSphere />
    </>
  );
};
