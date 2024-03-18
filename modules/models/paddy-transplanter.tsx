import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function PaddyTransplanter(props: any) {
  const group = useRef();
  const scaleRef = useRef<number>(0.225);
  const posiRef = useRef<number[]>([1.25, -0.75, 1.25]);
  const { scene } = useThree();

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0 && window.scrollY < 2 * window.innerHeight) {
        scene.rotation.y = ((scrollY - window.innerHeight) / (2 * window.innerHeight)) * Math.PI * 2;
      }
    };
    const resizeHandler = () => {
      if (window.innerWidth < 768) {
        scaleRef.current = 0.15;
        posiRef.current = [1, -0.5, 1];
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
    <group
      {...props}
      dispose={null}
      ref={group}
      scale={scaleRef.current}
      position={posiRef.current}
      rotation={[-Math.PI, -Math.PI * 0.5, -Math.PI]}
    >
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
