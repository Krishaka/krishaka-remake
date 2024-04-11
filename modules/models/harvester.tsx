import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Harvester(props: any) {
  const group = useRef();
  const [scaleNum, setScaleNum] = useState<number>(2.5);
  const [posNum, setPosNum] = useState<number[]>([0.75, -0.5, 0]);
  const { scene } = useThree();
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0 && window.scrollY < 2 * window.innerHeight) {
        scene.rotation.y = -Math.PI + ((scrollY - window.innerHeight) / (2 * window.innerHeight)) * Math.PI * 2;
      }
    };
    const resizeHandler = () => {
      if (window.innerWidth < 1280) {
        setScaleNum(1.8);
        setPosNum([0.5, 0, 0]);
      }
    };
    resizeHandler();
    addEventListener("scroll", scrollHandler);
    addEventListener("resize", resizeHandler);
    return () => {
      removeEventListener("scroll", scrollHandler);
      removeEventListener("scroll", resizeHandler);
    };
  }, [scene]);
  const { nodes, materials } = useGLTF("/models/harvester.glb");
  return (
    <group
      {...props}
      dispose={null}
      ref={group}
      scale={scaleNum}
      position={posNum}
      rotation={[-Math.PI, -Math.PI * 0.5, -Math.PI]}
    >
      <mesh
        geometry={(nodes.Harvestor001 as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0, 0.216]}
      />
    </group>
  );
}

useGLTF.preload("/models/harvester.glb");
