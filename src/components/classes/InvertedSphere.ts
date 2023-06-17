import {
  BackSide,
  DoubleSide,
  Mesh,
  MeshStandardMaterial,
  SphereGeometry,
} from 'three';
import { starmapTexture, sunTexture } from '../../textures/textures';

export class InvertedSphere extends Mesh {
  constructor() {
    super();
    this.geometry = new SphereGeometry(100);
    this.geometry.scale(1, 1, 1);
    this.material = new MeshStandardMaterial({
      map: starmapTexture,
      side: DoubleSide,
    });
  }
}
