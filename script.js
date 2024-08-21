// console.log("hello world");


import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

//Create a Three.JS Scene
const canvas=document.getElementsByClassName("canvas-div");

const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z=1;
// camera.position.x=300;
// camera.position.y=200;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


// create a variable 
var object;
var controls;

//load glTF model

const loader = new GLTFLoader();

loader.load(`model/demo/3d.gltf`,function(gltf) {
    object = gltf.scene;
    object.scale.set(11.2,8,10);
    // object.position.y=-1.5;
    object.rotation.x=0.3;
    scene.add(object);
},function (xhr){console.log(xhr.loaded / xhr.total * 100)},
function (error) {
    console.error(error);
});


const render= new THREE.WebGLRenderer({alpha:true,});//here alpha meaning background transparant
render.setSize(675,450);//first width and height
render.shadowMap.enabled=true;
render.shadowMap.type = THREE.PCFSoftShadowMap;

// add renderer in div element
canvas[0].appendChild(render.domElement);

controls = new OrbitControls(camera, render.domElement);
controls.enableZoom=false;

const light = new THREE.DirectionalLight(0xffffff,1);
light.position.set(5,15,20);
light.castShadow=true;

scene.add(light);
 const light2= new THREE.AmbientLight(0xffffff,1);
 light2.position.set(5,15,20);

 scene.add(light2);

// create a funtion that can render the scene on the screen fps

function animate(){
    requestAnimationFrame(animate);
    // controls.update();
    render.render(scene,camera);
}


animate();

document.onmousemove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}


document.addEventListener("resize", function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    render.setSize( window.innerWidth, window.innerHeight );
});


// here cursor animation is used

const cursor=document.querySelector("#cursor");

const uperdiv= document.querySelector(".uperdiv");
const rightdiv= document.querySelector(".right-part");
const model= document.querySelector("canvas");
document.addEventListener('mousemove', function(e) {
    // gsap.to(cursor,{
    //     x:e.clientX,
    //     y:e.clientY,
    //     duration:0.6,
    //     ease: "back.out"
    // })

    uperdiv.style.zIndex="10";
    cursor.style.zIndex="9";

    if(e.target.className=="links" || e.target.className=="uperdiv"){
        gsap.to(cursor, {
            scale: 4,
            color:"white",
            backgroundColor:'#424874',
            duration: 0.5,
            x:e.clientX,
            y:e.clientY,
            ease: "elastic.out",
        });
        if(e.target.className=="uperdiv"){
            cursor.innerHTML="click move";
            gsap.to(cursor,{
                backgroundColor:'#424874',
            });
        }
    }
    else{
        // console.log("ddd")
        cursor.innerHTML="";
        gsap.to(cursor,{
            scale:1,
            x:e.clientX,
            y:e.clientY,
            duration:0.6,
        })
    }
});


// hover effect


// rightdiv.addEventListener("mouseenter", function() {
    // cursor.innerHTML="click move";
    // gsap.to(cursor, {
    //     scale: 4,
    //     color:"black",
    //     backgroundColor:'#b5b8cd60',
    //     duration: 0.5,
    //     ease: "elastic.out"
    // });

    // uperdiv.style.zIndex="10";
    // cursor.style.zIndex="9";
    
// })

// rightdiv.addEventListener("mouseover", function() {
//     cursor.innerHTML="click move";
//     gsap.to(cursor, {
//         scale: 4,
//         color:"black",
//         backgroundColor:'#b5b8cd60',
//         duration: 0.5,
//         ease: "elastic.out"
//     });
// })

// rightdiv.addEventListener("mousemove", function(e) {
//     cursor.innerHTML="click move";
//     gsap.to(cursor, {
//         scale: 4,
//         x:e.clientX,
//         y:e.clientY,
//         duration:0.6,
//         ease: "back.out",
//         color:"black",
//         backgroundColor:'#b5b8cd60',
//         duration: 0.5,
//         ease: "elastic.out"
//     });
// })

// rightdiv.addEventListener("mouseleave", function() {
//     // cursor.innerHTML="";
//     gsap.to(cursor, {
//         scale: 1,
//         backgroundColor:'#424874',
//         duration: 0.5,
//         ease: "elastic.out"
//     });
// })

// rightdiv.addEventListener("click", function() {
//     // cursor.innerHTML="click move";
//     cursor.style.display="none";
//     gsap.to(cursor, {
//         display:"none",
//         scale:0
//     });
// })



uperdiv.addEventListener("click", function(){
    uperdiv.style.zIndex="-1";
    cursor.style.zIndex="-2";
});



var typed = new Typed('#title', {
    strings: ['Enhance your Style.','Precision in Every Frame.','Elevate Your Looks.'],
    typeSpeed: 100,
    showCursor: true,
    cursorChar: '|',
    backDelay: 1000,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    autoInsertCss: true,
    loop: true,
    loopCount: Infinity,
  });