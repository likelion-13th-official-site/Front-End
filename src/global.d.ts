declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg?react' {
  import { FC, SVGProps } from 'react';
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

import { Object3DNode } from '@react-three/fiber';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      // 필요한 다른 Three.js 요소들도 여기에 추가
    }
  }
}
