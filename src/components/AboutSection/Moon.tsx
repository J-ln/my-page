"use client";
import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Gltf, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Moon = () => {
    // Usamos useLoader para cargar el modelo GLTF y sus texturas
    const { scene } = useGLTF('/models/moon.glb');

    return (
        <div className="absolute w-80 h-80 inset-0 z-0 border-2 border-white">
            <Canvas >
                {/* <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} /> */}
                <Suspense fallback={null}>
                    {/* Utilizamos primitive para renderizar el objeto gltf */}
                    <primitive object={scene} scale={0.5} position={[0, 0, 0]} />
                </Suspense>
                <OrbitControls autoRotate enableZoom={false} />
            </Canvas>
        </div>
    );
};

useGLTF.preload('/models/moon.glb');


export default Moon;