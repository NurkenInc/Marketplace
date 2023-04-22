import * as THREE from 'three'
import React, { useState, useRef } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader } from '@react-three/fiber'
// import { Environment, OrbitControls } from '@react-three/drei'

const Scene = (props : ThreeElements['mesh']) => {
  const obj = useLoader(OBJLoader, '/logo.obj')

  console.log(obj)
  return <primitive object={obj} scale={0.4} />
}

const Logotype = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  )
}

export default Logotype