console.log("ES");
const theButton = $("#myButton").on("click", myFunction);
//
function myFunction() {
  console.log("click");
  $("h3").append("<p>🌲<p>yr a hero!");
}
$("#target").click(function() {
  console.log("click yellow!");
  $("#other").text("Now the text is changed to this!");
  $("div").css("background-color", "red");
})
