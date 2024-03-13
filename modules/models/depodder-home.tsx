import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function DepodderHome(props: any) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/depodder-v1.glb");
  // const { actions } = useAnimations(animations, group);
  const { scene, camera } = useThree();
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    tl.to(scene.rotation, {
      y: Math.PI * 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-canvas-section-2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
        markers: true
      }
    }).to(scene.position, {
      x: 3.5,
      z: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".home-canvas-section-4",
        start: "top center",
        end: "bottom center",
        scrub: 0.5,
        immediateRender: false,
        markers: true
      }
    });
    return () => {
      ScrollTrigger.killAll();
    };
  });
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={3}
      position={[2.05, -1.75, 0]}
      rotation={[-Math.PI, -Math.PI * 0.5, -Math.PI]}
    >
      <group name="Scene">
        <group name="Empty" position={[-0.007, 0.654, 0.719]} />
        <group name="Depodder" position={[0, 0.385, 0.328]} rotation={[Math.PI, 0, Math.PI]} scale={0.001}>
          <mesh
            name="Depodder_1"
            geometry={(nodes.Depodder_1 as THREE.Mesh).geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Depodder_2"
            geometry={(nodes.Depodder_2 as THREE.Mesh).geometry}
            material={materials["Material.001"]}
          />
        </group>
        <mesh
          name="Depodder001"
          geometry={(nodes.Depodder001 as THREE.Mesh).geometry}
          material={materials["Material.008"]}
          position={[-0.007, 0.984, 1.308]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={0.001}
        />
        <mesh
          name="Circle002"
          geometry={(nodes.Circle002 as THREE.Mesh).geometry}
          material={(nodes.Circle002 as THREE.Mesh).material}
          position={[-0.007, 0.984, 1.308]}
        />
        <group name="BezierCurve017" position={[0, 1.2, 0]}>
          <mesh
            name="BezierCurve002"
            geometry={(nodes.BezierCurve002 as THREE.Mesh).geometry}
            material={materials["Material.003"]}
          />
          <mesh
            name="BezierCurve002_1"
            geometry={(nodes.BezierCurve002_1 as THREE.Mesh).geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="BezierCurve002_2"
            geometry={(nodes.BezierCurve002_2 as THREE.Mesh).geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="BezierCurve002_3"
            geometry={(nodes.BezierCurve002_3 as THREE.Mesh).geometry}
            material={materials["Material.006"]}
          />
        </group>
        <mesh
          name="leaf"
          geometry={(nodes.leaf as THREE.Mesh).geometry}
          material={materials["Material.004"]}
          position={[0, 0.807, 1.038]}
          rotation={[-0.314, -0.284, 0.278]}
          scale={1.169}
        />
        <mesh
          name="leaf001"
          geometry={(nodes.leaf001 as THREE.Mesh).geometry}
          material={materials["Material.004"]}
          position={[0, 0.807, 0.859]}
          rotation={[-0.314, -0.284, 0.278]}
          scale={1.169}
        />
        <mesh
          name="leaf002"
          geometry={(nodes.leaf002 as THREE.Mesh).geometry}
          material={materials["Material.004"]}
          position={[0, 0.811, 0.504]}
          rotation={[-0.314, -0.284, 0.278]}
          scale={1.169}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/depodder-v1.glb");
