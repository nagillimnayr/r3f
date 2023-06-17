import { CameraControls } from '@react-three/drei';
import { Object3D } from 'three';
import { proxy } from 'valtio';

type ProxyState = {
  controls: CameraControls;
  target: Object3D;

  setTarget: (target: Object3D) => void;
};

export const proxyState = proxy<ProxyState>({
  controls: null,
  target: null,
  setTarget: (target: Object3D) => {
    proxyState.target = target;
    proxyState.controls.setTarget(...target.position.toArray(), true);
  },
});
