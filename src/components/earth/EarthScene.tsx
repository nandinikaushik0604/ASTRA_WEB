import React from 'react'
import { Mesh } from 'three'
import { Canvas, useFrame } from '@react-three/fiber'

function RotatingEarth(){
  const ref = React.useRef<Mesh|null>(null)
  useFrame((_,delta)=>{
    if(ref.current){
      ref.current.rotation.y += delta * 0.02
    }
  })
  return (
    <mesh ref={ref} rotation={[0,0,0]}> 
      <sphereGeometry args={[2.6, 64, 64]} />
      <meshStandardMaterial color={'#464C55'} metalness={0.05} roughness={0.9} />
    </mesh>
  )
}

function OrbitalRing(){
  return (
    <mesh rotation={[Math.PI/2,0,0]}>
      <ringGeometry args={[3.2,3.3,128]} />
      <meshBasicMaterial color={'#7F8995'} opacity={0.12} transparent />
    </mesh>
  )
}

function SpacecraftMarker(){
  return (
    <mesh position={[2.8,0.6,0]}>
      <coneGeometry args={[0.05,0.18,8]} />
      <meshStandardMaterial color={'#C2C7CF'} />
    </mesh>
  )
}

export default function EarthScene(){
  return (
    <Canvas camera={{position:[0,0,8], fov:35}} style={{height:'100%',width:'100%'}}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5,5,5]} intensity={0.6} />
      <RotatingEarth />
      <OrbitalRing />
      <SpacecraftMarker />
    </Canvas>
  )
}
