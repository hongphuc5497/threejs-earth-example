const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 60);
camera.position.set(6, 0, 0);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

const worldTexture = new THREE.TextureLoader().load('../images/small-world.jpeg');
const worldMaterial = new THREE.MeshBasicMaterial({
  map: worldTexture
})
const worldGeometry = new THREE.SphereGeometry(1, 40, 40);
const world = new THREE.Mesh(worldGeometry, worldMaterial);
scene.add(world)

const cloudTexture = new THREE.TextureLoader().load('../images/small-world-clouds.png');
const cloudMaterial = new THREE.MeshBasicMaterial({
  map: cloudTexture,
  transparent: true,
})
const cloudGeometry = new THREE.SphereGeometry(1.01, 40, 40);
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(clouds)

function animate() {
  requestAnimationFrame(animate);

  world.rotation.y += 0.0005;
  clouds.rotation.y -= 0.001

  renderer.render(scene, camera);
}
animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
})
