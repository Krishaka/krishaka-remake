import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { canvasContainerCss, canvasCss, canvasWrapperCss } from "@/modules/single-product-page/3d-model-wrapper/styles";
import * as THREE from "three";
import { Building } from "@/modules/products-page/building";

export default function Model() {
  return (
    <div css={canvasWrapperCss}>
      <div css={canvasContainerCss}>
        <Canvas css={canvasCss}>
          <ambientLight intensity={1} />
          <axesHelper args={[5]} />
          <OrbitControls enableZoom={false} />
          <Building position={[1, -1, 0]} />
        </Canvas>
      </div>
    </div>
  );
}
