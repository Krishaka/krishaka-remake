import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Depodder(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/depodder.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Circle" position={[-0.007, 0.984, 0.132]} scale={[1, 1, 1.715]} />
        <group name="Circle001" />
        {/* <group name="Empty" position={[-0.007, 0.654, 0.719]} /> */}
        <group name="Depodder" position={[0, 0.385, 0.328]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.001}>
          <mesh name="Depodder_1" geometry={nodes.Depodder_1.geometry} material={materials["Material.008"]} />
          <mesh name="Depodder_2" geometry={nodes.Depodder_2.geometry} material={materials.Material} />
          <mesh name="Depodder_3" geometry={nodes.Depodder_3.geometry} material={materials["Material.008"]} />
        </group>
        <mesh
          name="Depodder001"
          geometry={nodes.Depodder001.geometry}
          material={materials["Material.008"]}
          position={[-0.007, 0.984, 1.308]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.001}
        />
        <mesh
          name="Circle002"
          geometry={nodes.Circle002.geometry}
          material={nodes.Circle002.material}
          position={[-0.007, 0.984, 1.308]}
        />
        <group name="BezierCurve017" position={[0, 1.2, 0]}>
          <mesh name="BezierCurve002" geometry={nodes.BezierCurve002.geometry} material={materials["Material.003"]} />
          <mesh
            name="BezierCurve002_1"
            geometry={nodes.BezierCurve002_1.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            name="BezierCurve002_2"
            geometry={nodes.BezierCurve002_2.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            name="BezierCurve002_3"
            geometry={nodes.BezierCurve002_3.geometry}
            material={materials["Material.006"]}
          />
        </group>
        <mesh
          name="leaf"
          geometry={nodes.leaf.geometry}
          material={materials["Material.004"]}
          position={[0, 0.807, 1.038]}
          rotation={[-0.314, -0.284, 0.278]}
          scale={1.169}
        />
        <mesh
          name="leaf001"
          geometry={nodes.leaf001.geometry}
          material={materials["Material.004"]}
          position={[0, 0.807, 0.859]}
          rotation={[-0.314, -0.284, 0.278]}
          scale={1.169}
        />
        <mesh
          name="leaf002"
          geometry={nodes.leaf002.geometry}
          material={materials["Material.004"]}
          position={[0, 0.811, 0.504]}
          rotation={[-0.314, -0.284, 0.278]}
          scale={1.169}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/depodder.glb");
