console.log("the potato")
// Canvas in Native
// grab the canvas from the DOM
var theCanvas = document.getElementById("myCanvas");
// set the context of the canvas
var theContxt = theCanvas.getContext("2d");
const theImage = document.querySelector("img");
theContxt.fillStyle = "yellow"
//create a rectangle 
theContxt.fillRect(10, 30, theCanvas.width, theCanvas.height);
// to draw a line
theContxt.beginPath();
for (var i = 0; i < 5; i++) {
  theContxt.arc(100 * i, 75, 50, 0, 2 * Math.PI);
}
theContxt.stroke();
//
// 
