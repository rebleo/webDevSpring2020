console.log("yellow!");

let theImage;

function preload(){
 theImage = loadImage("globe.png");
}

function setup(){
 console.log("p5!");
 createCanvas(windowWidth,windowHeight);
 
}

function draw(){
 background(100,50,100);
 for (let i =0; i < 40; i++){
  ellipse(10 * i,100,100,100);
 }
 image(theImage, 100,100,100,100);
}