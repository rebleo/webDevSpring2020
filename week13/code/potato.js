console.log("hello JS");
// getting started w/ jQuery
var theButton = $("#myButton").on("click", myFunction);
let status;
let theLat, theLong
let theURL = "https://www.google.com/maps/@"

function myFunction() {
  console.log("button click!");
   $("h3").append("<p> yr location:" + theLat +" Latitude" + theLong + " Longitude");
  //  window.open(theURL)
}
// console.log(navigator.geolocation)

if ("geolocation" in navigator) {
  console.log("connected!")
} else {
  console.log("not connected");
}

navigator.geolocation.getCurrentPosition(function(position){
  console.log(position.coords.latitude, position.coords.longitude)
  theLat = position.coords.latitude;
  theLong = position.coords.longitude;
  theURL = theURL + theLong + "," + theLat
  // console.log(theURL)

})

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  // return;
}

// LIST cameras + mics

navigator.mediaDevices.enumerateDevices().then(function(devices){
  devices.forEach(function(device){
    console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
  });
}).catch(function(err) {
  conssole.log(err.name + ": " + err.message);
});

var constraints = {
  audio: false,
  video: {
    width: 720,
    height: 360
  }
}

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
  var theVideo = document.querySelector('video');
  theVideo.srcObject = mediaStream;
  theVideo.onloadedmetadata = function(e){
    theVideo.play();
  };
}).catch(function(err){
  console.log(err.name + ": " + err.message);
})