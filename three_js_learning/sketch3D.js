// Learing This Library
// Travis Ahern
// April 27, 2019

// // drawing a cube
// // creating scene, camera, and renderer
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// var renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // creating cube
// var geometry = new THREE.BoxGeometry(1, 1, 1);
// var material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });
// var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// camera.position.z = 5;

// // renering
// function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }
// animate();


// drawing a line
// scene, camera, renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

var scene = new THREE.Scene();

// create a blue LineBasicMaterial
var material = new THREE.LineBasicMaterial({ color: 0x0000ff });

// geometry stuff
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, 10));
geometry.vertices.push(new THREE.Vector3(-10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, -10));
geometry.vertices.push(new THREE.Vector3(0, 10, 0));
geometry.vertices.push(new THREE.Vector3(10, 0, 0));
geometry.vertices.push(new THREE.Vector3(0, 0, -10));

// the line
var line = new THREE.Line(geometry, material);

function shiftLeft() {
    requestAnimationFrame(shiftLeft);
    // geometry.vertices[0].x += 10;
    // geometry.vertices[1].x += 10;
    // geometry.vertices[2].x += 10;
    // console.log(geometry.vertices[0]);

    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

    // render
    renderer.render(scene, camera);
}

scene.add(line);
shiftLeft();