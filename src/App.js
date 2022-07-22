import React from "react";
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei/';
import { Physics, useBox, usePlane } from '@react-three/cannon'

function Box() {
  const [ref,api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }))
  return (
    <mesh ref={ref} position={[1, 1, 1]} onClick={()=>{
      api.velocity.set(2,0,2)
    }}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  )
}
function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0]
  }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[0, 0]} />
      <meshLambertMaterial attach="material" color="" />
    </mesh>
  )
}
export default function App() {
  return (
    <div style={{ width: "100%", height: "100vh", background: 'black'  }}>
      <Canvas flat linear >
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 15, 10]} angle={0.3}
        />
        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
}

