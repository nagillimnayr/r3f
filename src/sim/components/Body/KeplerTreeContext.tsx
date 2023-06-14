import { createContext } from 'react';
import KeplerBody from '../../Classes/KeplerBody';

type childRefFn = (body: KeplerBody) => void;
const KeplerTreeContext = createContext<childRefFn>((body: KeplerBody) => {
  return;
});

export default KeplerTreeContext;
