import { Suspense, useEffect, useState } from "react"
import { Canvas, events } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from './loader/CanvasLoader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./communication_bot/scene.gltf')

  return (
    <mesh>
      <hemisphereLight /* Atmosphere light around to the object */
        intensity={0.15}
        groundColor={"black"}
      />
      <pointLight /* Light pointing to the object */
        intensity={1}
      />
      <spotLight /* Spotlight in the environment */
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        //scale={0.75} // desktop_pc
        //position={[0, -3.25, -1.5]} // desktop_pc
        //rotation={[-0.01, -0.2, -0.1]} // desktop_pc

        //scale={3.5} // robot_ball
        //position={[0, -2.9, 0]} // robot_ball
        //rotation={[-0.01, 0.65, -0.1]} // robot_ball

        //scale={25} // 90s_robot
        //position={[0, 1, 0]} // 90s_robot
        //rotation={[-0.01, 0.7, -0.1]} // 90s_robot

        //scale={isMobile ? 3.3 : 4} // robert_the_kitchenware_robot
        //position={[0, -4.2, -1]} // robert_the_kitchenware_robot
        //rotation={[0.4, 0.65, -0.1]} // robert_the_kitchenware_robot

        //scale={isMobile ? 2.9 : 3.7} // robot_playground
        //position={[0, -4.2, -0.6]} // robot_playground
        //rotation={[0.4, 1.6, -0.2]} // robot_playground

        scale={isMobile ? 0.007 : 0.008} // communication_bot
        position={[0, -2.6, 0]} // communication_bot
        rotation={[-0.1, -0.9, 0.1]} // communication_bot
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)')
    setIsMobile(mediaQuery.matches) // True if the width screen is short than 500
    const handleMediaQueryChange = (e) => { // Callback to change the isMobile state
      setIsMobile(e.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange) // Start listenning to mediaQuery and apply changes

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange) // Stop listenning to mediaQuery
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}> {/* fallback important in case the model is not rendering */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas