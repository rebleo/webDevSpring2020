console.log("yellow!");



function setup(){
 console.log("p5!");
 createCanvas(windowWidth,windowHeight);
 
}

function draw(){
 background(100,100,100);
 for (let i =0; i < 40; i++){
  ellipse(10 * i,100,100,100);
 }

}