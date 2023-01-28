let cubes = [];
let nextCubeId = 0;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const gui = new dat.GUI();

const controls = {
  addCube: function () {
    const cube = createCube();
    cubes.push(cube);
    scene.add(cube.mesh);
  },
};

gui.add(controls, "addCube").name("Add Cube");

function createCube() {
  const cube = {
    id: nextCubeId++,
    mesh: new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xffa500 })
    ),
    rotationX: 0.01,
    rotationY: 0.01,
    color: "#ffa500",
  };
  cube.mesh.position.x = (Math.random() - 0.5) * 10;
  cube.mesh.position.y = (Math.random() - 0.5) * 10;
  cube.mesh.position.z = (Math.random() - 0.5) * 10;

  const cubeFolder = gui.addFolder(`Cube ${cube.id}`);
  cubeFolder.add(cube, "rotationX", 0, 0.1).name("X Rotation");
  cubeFolder.add(cube, "rotationY", 0, 0.1).name("Y Rotation");
  cubeFolder.addColor(cube, "color").onChange(function (color) {
    cube.mesh.material.color = new THREE.Color(color);
  });

  return cube;
}

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cubes.forEach((cube) => {
    cube.mesh.rotation.x += cube.rotationX;
    cube.mesh.rotation.y += cube.rotationY;
  });

  renderer.render(scene, camera);
}

animate();
