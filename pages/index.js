import React, { Suspense } from 'react'
import styles from '../styles/THREE.module.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

//UI
import Menu from '../components/UI/Menu'

//MODELS
import MagicGate from '../components/gltf-jsx/Magic-gate'

const Home = () => {
  return (
    <>
        <Menu />

        <div className={styles.canvas}>
            <Canvas>      
                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                <Suspense fallback={null}>
                    <MagicGate
                        position={[0,0,-3]} 
                        scale={[0.25,0.25,0.25]}
                        rotation={[Math.PI/8 , Math.PI/7, 0]}
                    />
                </Suspense>

                <OrbitControls />
            </Canvas>
        </div>
    </>
  )
}

export default Home