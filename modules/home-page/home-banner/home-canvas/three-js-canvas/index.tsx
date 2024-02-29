import { Depodder } from "@/modules/home-page/home-banner/home-canvas/three-js-canvas/depodder";
import { canvasCss } from "@/modules/home-page/home-banner/home-canvas/three-js-canvas/styles";
import { Environment, OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ThreeJsCanvas() {
  return (
    <Canvas css={canvasCss}>
      <ambientLight intensity={1} />
      {/* <OrbitControls /> */}
      <TransformControls />
      <axesHelper args={[5]} />
      <Environment preset="city" />
      <Depodder />
    </Canvas>
  );
}
