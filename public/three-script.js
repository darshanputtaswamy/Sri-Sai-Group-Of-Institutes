import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.151.3/three.min.js';
const container = document.querySelector('.three_bg')
console.log(THREE,container)


import bg1 from "/Indian-Belgium-Flag-3.png"

const loader = new THREE.TextureLoader(); 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight,0.1,1000)

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const geometry =  new THREE.PlaneGeometry(14,8,15,9);
const material =  new THREE.MeshBasicMaterial({ 
map: loader.load(bg1)
})
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);
camera.position.z=5

function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
}
animate()