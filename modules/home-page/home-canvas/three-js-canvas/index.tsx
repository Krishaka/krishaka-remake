import { Building } from "@/modules/home-page/home-canvas/three-js-canvas/building";
import { Earth } from "@/modules/home-page/home-canvas/three-js-canvas/earth";
import { Depodder } from "@/modules/home-page/home-canvas/three-js-canvas/depodder";
import { canvasCss } from "@/modules/home-page/home-canvas/three-js-canvas/styles";
import { Environment, OrbitControls, TransformControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ThreeJsCanvas() {
  return (
    <Canvas css={canvasCss} camera={{ position: [2.779009224666344, -0.0971565443575556, -4.155438404682214] }}>
      <ambientLight intensity={1} />
      <OrbitControls />
      <TransformControls />
      <axesHelper args={[5]} />
      <Environment preset="night" />
      <Depodder />
    </Canvas>
  );
}
