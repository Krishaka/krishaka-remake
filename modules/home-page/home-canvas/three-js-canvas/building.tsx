import { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useThree } from "@react-three/fiber";

interface BuildingObjProps {
  //
}

export function Building(props: BuildingObjProps | any) {
  const groupRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/building.glb");
  const { scene, camera } = useThree();
  const tl = gsap.timeline();
  console.log({ cam: camera.position, sce: scene.position });
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    tl.to(camera.position, {
      x: -1.012,
      y: -0.047,
      z: -4.39,
      scrollTrigger: {
        trigger: ".eg-sec-2",
        start: "top center",
        end: "bottom center",
        markers: true,
        scrub: true,
        immediateRender: false
      }
    })
      .to(camera.position, {
        x: -1.38,
        y: 0.26,
        z: 4.78,
        scrollTrigger: {
          trigger: ".eg-sec-3",
          start: "top center",
          end: "bottom center",
          markers: true,
          scrub: true,
          immediateRender: false
        }
      })
      .to(scene.position, {
        x: -2,
        y: 0,
        z: 3,
        scrollTrigger: {
          trigger: ".eg-sec-3",
          start: "top center",
          end: "bottom center",
          markers: true,
          scrub: true,
          immediateRender: false
        }
      });
  });

  useGLTF.preload("/models/building.glb");
  return (
    <>
      <directionalLight />
      <group
        {...props}
        dispose={null}
        position={[2, -0.75, 0.25]}
        scale={0.15}
        ref={groupRef}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh geometry={(nodes.builing1_builing_1_0 as THREE.Mesh).geometry} material={materials.builing_1} />
      </group>
    </>
  );
}
