"use client"
import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/Addons.js";
import bg1 from "/Indian-Belgium-Flag-3.png"



const ThreeScene = ({cubes, aspectRatio}:any) => {
    const containerRef = useRef(null);
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader(); 

    useEffect(() => {
        const container:any = containerRef.current;
        const camera = new THREE.PerspectiveCamera(70, (window.innerWidth / 2) / window.innerHeight, 0.1, 1000);
        const renderer:any = new THREE.WebGLRenderer( { alpha: true });
        if(container){
            
         
        
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor( 0x000000, 0 );
            container.appendChild(renderer.domElement);

            const geometry =  new THREE.PlaneGeometry(14,8,15,9);
            const material =  new THREE.MeshBasicMaterial({ 
            map: loader.load('/Indian-Belgium-Flag-3.png')
            })
            const mesh = new THREE.Mesh(geometry,material);
            scene.add(mesh);
            camera.position.z=5

            const count = geometry.attributes.position.count;
            const clock = new THREE.Clock()


            const animate = () => {
                const time = clock.getElapsedTime();
                for (let i=0; i< count;i++){
                    const x = geometry.attributes.position.getX(i)
                    const y = geometry.attributes.position.getY(i)

                    const anim1 = 0.25 * Math.sin(x * time * 0.7)
                    geometry.attributes.position.setZ(i,anim1)
                    geometry.computeVertexNormals();
                    geometry.attributes.position.needsUpdate = true;
                }

                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
    
            animate();
        }

        function onWindowResize() {
            const newWidth = window.innerWidth / 2;
            const newHeight = window.innerHeight;
        
            renderer.setSize(newWidth / newHeight)
          
            camera.aspect = newWidth / newHeight
            camera.updateProjectionMatrix();
        }
        
        window.addEventListener("resize", onWindowResize, false)
        
        return () => {
            container.removeChild(renderer.domElement)
        };
        
    }, [cubes, aspectRatio]);

    return <div ref={containerRef}></div>
}



export default ThreeScene