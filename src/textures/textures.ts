import { TextureLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';

export const textureLoader = new TextureLoader();
export const exrLoader = new EXRLoader();

export const starmapTexture = exrLoader.load('starmap_2020_4k.exr');
export const sunTexture = textureLoader.load('2k_sun.jpg');
