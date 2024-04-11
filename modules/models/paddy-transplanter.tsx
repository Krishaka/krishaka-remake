import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

export function PaddyTransplanter(props: any) {
  const group = useRef();
  const [scaleNum, setScaleNum] = useState<number>(0.225);
  const { scene } = useThree();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0 && window.scrollY < 2 * window.innerHeight) {
        scene.rotation.y = ((scrollY - window.innerHeight) / (2 * window.innerHeight)) * Math.PI * 2;
      }
    };
    const resizeHandler = () => {
      if (window.innerWidth < 1280) {
        setScaleNum(0.175);
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
  const { nodes, materials } = useGLTF("/models/paddy-transplanter.glb");
  return (
    <group {...props} dispose={null} ref={group} scale={scaleNum} rotation={[-Math.PI, -Math.PI * 0.5, -Math.PI]}>
      <mesh
        geometry={(nodes.paddy_transplanter as THREE.Mesh).geometry}
        material={materials.PaletteMaterial001}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/models/paddy-transplanter.glb");
