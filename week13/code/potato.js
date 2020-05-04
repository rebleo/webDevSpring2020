console.log("hello JS");
// getting started w/ jQuery
var theBody;
var theButton = $("#mySecondButton").on("click", myFunction);
let status;
let theLat, theLong, theURL;

function myFunction() {
  console.log("button click!");
   $("h3").append("<p> you pushed the button!");

}
// console.log(navigator.geolocation)

