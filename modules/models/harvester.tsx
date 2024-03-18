import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Harvester(props: any) {
  const group = useRef();
  const scaleRef = useRef<number>(2.5);
  const posiRef = useRef<number[]>([1.85, -1.25, 0]);
  const { scene } = useThree();
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0 && window.scrollY < 2 * window.innerHeight) {
        scene.rotation.y = ((scrollY - window.innerHeight) / (2 * window.innerHeight)) * Math.PI * 2;
      }
    };
    const resizeHandler = () => {
      if (window.innerWidth < 1280) {
        scaleRef.current = 1.5;
        console.log("first++");

        posiRef.current = [1.25, -0.75, 0];
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
      scale={scaleRef.current}
      position={posiRef.current}
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
