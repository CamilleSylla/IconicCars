// Variabales

let container;
let camera;
let renderer;
let scene;
let car;


function init() {

    container = document.querySelector('.scene');

    //add scene

    scene = new THREE.Scene();

    const fov = 40;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 1;
    const far = 5000;
    //Camera
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1.2,8.5);

    //light
    const ambient = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambient);

    const light = new THREE.DirectionalLight(0xffffff, 2)
    light.position.set(-25, 25, 2);
    light.castShadow = true;
    scene.add(light);
    const light2 = new THREE.DirectionalLight(0xffffff, 2)
    light2.position.set(25, 25, 2);
    light2.castShadow = true;
    scene.add(light2);


    //Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    container.appendChild(renderer.domElement);


    //Model
    let loader = new THREE.GLTFLoader();
    loader.load("./Car/scene.gltf", function (gltf) {
        const root = gltf.scene;
        scene.add(root);
        root.rotation.y = 0.6
        car = gltf.scene.children[0];
        animate();
    })
};



function animate() {
    renderer.render(scene, camera);
    car.rotation.z += 0.005
    requestAnimationFrame(animate);

}

init();
