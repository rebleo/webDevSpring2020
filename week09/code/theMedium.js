console.log("the message!");



const theButton = document.querySelector("#firstButton");
let theTxt = document.querySelector('h2');
let theBody = document.querySelector('body');
// console.log(theTxt)

theButton.addEventListener('click', isClicked);
// isClicked();
function isClicked() {
 console.log("clicked!");
 theTxt.style.backgroundColor = "blue";
 theTxt.textContent = "you turned me blue!"
 theBody.style.backgroundColor = "yellow";
}
