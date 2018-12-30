


            // --- cleaning console --- //
console.clear();

// --- threeJS --- //
var renderer, scene, camera, distance, projector;

var container = document.getElementById('container');
var mouse = new THREE.Vector2();
var distance = 400;

// -- basic initialization -- //
function init() {
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x140b33, 1); //0x140b33
    container.appendChild(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.2, 25000);
    camera.position.set(100, 100, 2000);
    scene.add(camera);


    // if(camera.position.z > 10000){
    //           var controls = controls = new THREE.OrbitControls(camera);

    // }

 //var controls = controls = new THREE.OrbitControls(camera);



    light = new THREE.PointLight(0xffffff, 1, 4000);
    light.position.set(50, 0, 0);
    light_two = new THREE.PointLight(0xffffff, 1, 4000);
    light_two.position.set(-100, 800, 800);
    lightAmbient = new THREE.AmbientLight(0x404040);
    scene.add(light, light_two, lightAmbient);

    var geometry = new THREE.BoxGeometry( 100, 100, 100 );
var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(100, 200,1000);
//scene.add( cube );



    createSpheres();

    createDiamond();

    createSpace();

    createPika();

   createAlien();

   createTeapot1();

   createTeapot2();

   createRabbit();

   createDino();

   createArma();




    renderer.render(scene, camera);

    document.addEventListener('mousemove', onMouseMove, false);
    document.addEventListener('mousedown', onDocumentMouseDown, false);
    window.addEventListener('resize', onWindowResize, false);
}

// -- diamonds -- //
function createDiamond() {
    
    diamondsGroup = new THREE.Object3D();
    

    var loader = new THREE.JSONLoader();
    loader.load('https://raw.githubusercontent.com/PavelLaptev/test-rep/master/threejs-post/diamond.json', function(geometry) {
        for (var i = 0; i < 50; i++) {
            var material = new THREE.MeshPhongMaterial({
                color: Math.random() * 0xff00000 - 0xff00000,
                shading: THREE.FlatShading
            });
            var diamond = new THREE.Mesh(geometry, material);
            diamond.position.x = Math.random() * -distance * 6;
            diamond.position.y = Math.random() * -distance * 2;
            diamond.position.z = Math.random() * distance * 3;
            diamond.rotation.y = Math.random() * 2 * Math.PI;
            diamond.scale.x = diamond.scale.y = diamond.scale.z = Math.random() * 50 + 10;

            
            diamondsGroup.add(diamond);
        };
        diamondsGroup.position.x = 1400;
        scene.add(diamondsGroup);
    });
};

// -- spheres -- //
function createSpheres() {
    
    spheres = new THREE.Object3D();

    for (var i = 0; i < 60; i++) {
        var sphere = new THREE.SphereGeometry(4, Math.random() * 12, Math.random() * 12);
        var material = new THREE.MeshPhongMaterial({
            color: Math.random() * 0xff00000 - 0xff00000,
            shading: THREE.FlatShading,
        });

        var particle = new THREE.Mesh(sphere, material);
        particle.position.x = Math.random() * distance * 10;
        particle.position.y = Math.random() * -distance * 6;
        particle.position.z = Math.random() * distance * 4;
        particle.rotation.y = Math.random() * 2 * Math.PI;
        particle.scale.x = particle.scale.y = particle.scale.z = Math.random() * 12 + 5;
        spheres.add(particle);
    };

    spheres.position.y = 500;
    spheres.position.x = -2000;
    spheres.position.z = -100;
    spheres.rotation.y = Math.PI * 600;

    scene.add(spheres);
};

// -- dots on the back -- //
function createSpace() {
    
    dots = new THREE.Object3D();

    for (var i = 0; i < 420; i++) {
        var circleGeometry = new THREE.SphereGeometry(2, Math.random() * 5, Math.random() * 5);
        var material = new THREE.MeshBasicMaterial({
            color: Math.random() * 0xff00000 - 0xff00000,
            shading: THREE.FlatShading,
        })
        var circle = new THREE.Mesh(circleGeometry, material);
        material.side = THREE.DoubleSide;

        circle.position.x = Math.random() * -distance * 50;
        circle.position.y = Math.random() * -distance * 8;
        circle.position.z = Math.random() * distance * 5;
        circle.rotation.y = Math.random() * 2 * Math.PI;
        circle.scale.x = circle.scale.y = circle.scale.z = Math.random() * 6 + 5;
        dots.add(circle);
    }

    dots.position.x = 7000;
    dots.position.y = 1500;
    dots.position.z = -2000;
    dots.rotation.y = Math.PI * 600;
    dots.rotation.z = Math.PI * 500;

    scene.add(dots);
};

function createPika(){

    var textureLoader = new THREE.TextureLoader();

var pikaMaping = textureLoader.load('models/pikachu.png');
pikaMaping.wrapS = pikaMaping.wrapT = THREE.RepeatWrapping;
var pika = new THREE.MeshPhongMaterial({ map: pikaMaping });

var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/pikachu.obj',
    // called when resource is loaded
    function ( object ) {

        object.position.set(100, 200,1000);

         object.traverse(function(node) {

                if (node.name === 'DrawCall_7'){
                        node.material = pika;
                    }else if (node.name === 'DrawCall_8'){
                        node.material = pika;
                    }else if (node.name === 'DrawCall_9'){
                        node.material = pika;
                    }else if (node.name === 'DrawCall_13'){
                        node.material = pika;
                    }else if (node.name === 'DrawCall_14'){
                        node.material = pika;
                    }else if (node.name === 'DrawCall_21'){
                        node.material = pika;
                    }else if (node.name === 'DrawCall_34'){
                        node.material = pika;
                    }
            });

         object.rotation.y = 0.7;
          object.rotation.z = 0.7;


        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);


};

function createAlien() {

    var material = new THREE.MeshPhongMaterial({
            color: 0x33FF33,
            shading: THREE.FlatShading,
        });

 // instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/Space_Invader.obj',
    // called when resource is loaded
    function ( object ) {

        object.position.set(500, 200,1000);

        object.traverse(function(node) {

               
                        node.material = material;
                   
            });

        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

};

function createTeapot1(){


      var texture = new THREE.TextureLoader().load( 'models/marble.jpg' );

      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

// immediately use the texture for material creation
var material = new THREE.MeshBasicMaterial( { map: texture } );

    // instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/teapot1.obj',
    // called when resource is loaded
    function ( object ) {

        object.position.set(-100, 200,1000);

        object.rotation.y = 0.7;
        object.rotation.x = 0.8;
        object.scale.set(2,2,2);

         object.traverse(function(node) {

               
                        node.material = material;
                   
            });

        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

};

function createTeapot2(){

    var texture = new THREE.TextureLoader().load( 'models/checker.png' );

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

// immediately use the texture for material creation
var material = new THREE.MeshBasicMaterial( { map: texture } );

    

    // instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/teapot1.obj',
    // called when resource is loaded
    function ( object ) {

        object.position.set(-100, 100,1500);

        object.rotation.y = 0.3;
        object.rotation.x = 0.9;
        object.rotation.z = 2.2;
        object.scale.set(2,2,2);

         object.traverse(function(node) {

               
                        node.material = material;
                   
            });

        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

};

function createRabbit(){

var material = new THREE.MeshPhongMaterial({
            color: 0xffD8E6,
            shading: THREE.FlatShading,
        });

    // instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/bunny.obj',
    // called when resource is loaded
    function ( object ) {

        object.position.set(250, 100,1500);

         object.rotation.y = 0.3;
        // object.rotation.x = 0.9;
        // object.rotation.z = 2.2;
        object.scale.set(20,20,20);

         object.traverse(function(node) {

               
                        node.material = material;
                   
            }); 

        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

};

function createDino(){

var material = new THREE.MeshPhongMaterial({
            color: 0xFF00FF,
            shading: THREE.FlatShading,
        });

    // instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/tyra.obj',
    // called when resource is loaded
    function ( object ) {

        object.position.set(-100, 100,1500);

        //  object.rotation.y = 1.3;
        //  object.rotation.x = 1.9;
        // object.rotation.z = 0.5;
        object.scale.set(200,200,200);

         object.traverse(function(node) {

               
                        node.material = material;
                   
            }); 

        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

};

function createArma(){

var material = new THREE.MeshPhongMaterial({
            color: 0xFFFF00,
            shading: THREE.FlatShading,
        });

    // instantiate a loader
var loader = new THREE.OBJLoader();

// load a resource
loader.load(
    // resource URL
    'models/armadillo.obj',
    // called when resource is loaded
    function ( object ) {

        object.position.set(170, 80,1700);

         object.rotation.y = 0.3;
         object.rotation.x = 0.9;
        // object.rotation.z = 2.2;
        object.scale.set(20,20,20);

         object.traverse(function(node) {

               
                        node.material = material;
                   
            }); 

        scene.add( object );

    },
    // called when loading is in progresses
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);

};


// -- events -- //
function onMouseMove(event) {
    //mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    //mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    mouseX = event.clientX - window.innerWidth / 2;
    mouseY = event.clientY - window.innerHeight / 2;
    camera.position.x += (mouseX - camera.position.x) * 0.01;
    camera.position.y += (mouseY - camera.position.y) * 0.01;
    camera.lookAt(scene.position);
};

function onDocumentMouseDown(event) {

    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
};

// ---- //
function animate() {
    requestAnimationFrame(animate);



    render();
};

// -- render all -- //
function render() {

    var timer = 0.00001 * Date.now();

    for (var i = 0, l = diamondsGroup.children.length; i < l; i++) {
        var object = diamondsGroup.children[i];
        object.position.y = 500 * Math.cos(timer + i);
        object.rotation.y += Math.PI / 500;
    }

    for (var i = 0, l = spheres.children.length; i < l; i++) {
        var object = spheres.children[i];
        object.rotation.y += Math.PI / 60;
        if (i < 20) {
            object.rotation.y -= Math.PI / 40;
        }
    }

    

    renderer.render(scene, camera);
};

// -- run functions -- //
init();
animate();

