"use client";
import { Canvas } from '@react-three/fiber';
import { Mesh } from 'three';
import React, {useEffect, useRef, useState} from 'react';
import './globals.css'
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

function AnimatedBox() {
  const boxRef = useRef<Mesh | null>(null);
  const gltf = useGLTF("/assets/team-c-colored.glb");

  return <primitive ref={boxRef} object={gltf.scene} />;
}

export default function Home() {
  const [proceedHover, setProceedHover] = useState(false);
  const [proceedClick, setProceedClick] = useState(false);
  const [count, setCount] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const inter = setInterval(() => {
      setCount(prevCount => {
        const newCount = prevCount + 1 >= 3 ? 0 : prevCount + 1;
        console.log(newCount); // Now logs correctly
        return newCount;
      });
    }, 400);

    return () => clearInterval(inter);
  }, []);
  const indices = [0,1,2]

  return (
    <div id={'scene-container'}
         className="flex justify-center items-center w-full min-h-screen flex-col font-main">
      <Canvas className={''} style={{background: 'rgba(0,0,0,0.3)', width: '100%', height: '100%'}}
              camera={{position: [0, 0, 30], fov: 100}}>
        <AnimatedBox/>
        {/* Ambient light added here */}
        <ambientLight color={'#ffffff'} intensity={1.5}/>
        <OrbitControls/>
      </Canvas>
      <div className={'flex flex-col top-16 left-16 fixed'}>
        <h1 className={'text-9xl font-bold w-full text-start text-white'}>The <span
          className={'text-foreground'}>Hover</span> Hoverboard</h1>
        <motion.h1
          initial={{
            translateX: '0%'
          }}
          animate={{
            translateX: proceedHover ? '20%' : '0%'
          }}
          transition={{
            duration: 0.5,
          }}
          onClick={() => {
            setProceedClick(true)
            setTimeout(() => {
              router.push('/menu')
            }, 2000)
          }}
          onHoverStart={()=>{setProceedHover(true)}}
          onHoverEnd={()=>{setProceedHover(false)}}
          className={`text-8xl font-bold mt-4 w-full txx text-start cursor-pointer transition duration-500 ${proceedClick ? 'border-b-[2px] border-b-foreground' : ''}`}>{proceedClick ? 'Teleporting' :
          'Proceed' } {indices.map((ind, i) => (<span key={i} className={`transition duration-500 ${ind == count ? 'text-foreground' : 'text-white'}`}>&gt;</span>))}</motion.h1>
      </div>
    </div>
  );
}