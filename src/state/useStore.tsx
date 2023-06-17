import { Object3D } from 'three';
import { create } from 'zustand';

type StateObject = {
  count: number;
  selected: Object3D;
};
