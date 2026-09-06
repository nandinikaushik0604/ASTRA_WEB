import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

function RotatingEarth(){
  const ref = React.useRef<Mesh|null>(null)
  useFrame((state,delta)=>{
    if(ref.current){
      ref.current.rotation.y += delta * 0.05
    }
  })
  return (
    <mesh ref={ref} rotation={[0,0,0]}>
      <sphereGeometry args={[2.6, 64, 64]} />
      <meshStandardMaterial color={'#464C55'} metalness={0.1} roughness={0.8} />
    </mesh>
  )
}

export default function EarthScene(){
  return (
    <Canvas camera={{position:[0,0,8], fov:35}} style={{height:'100%',width:'100%'}}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5,5,5]} intensity={0.6} />
      <RotatingEarth />
    </Canvas>
  )
}
