console.log("ecmascript!!");
// string data
let myFirst = "rebecca"
let myLast = "leopold"
// console.log(myFirst + " " + myLast);

let theArray = ["January", "Feburary", "March", 100]

// console.log(theArray[3]);
for (let theIndex = 0; theIndex < theArray.length; theIndex ++){
 // console.log(theArray[theIndex]);
}
theArray.push("July");

//////
// pass the html button element into a variable
const theButton = document.querySelector("#firstButton");
theButton.addEventListener('click', clickButton);

function clickButton(){
 console.log("click!");
 theBody.style.color = "yellow";
 theBody.style.backgroundColor = "blue";
 theTxt.textContent = "you pressed the button";
}

const theBody = document.querySelector('body');
// console.log(theBody.style)
let theTxt = document.querySelector('h2');
document.addEventListener('keydown', theEvent => {
 if (theEvent.keyCode === 32){
  console.log("key 32!")
  theTxt.textContent = "you pressed space!!"
 } else if (theEvent.keyCode === 82){
   console.log("key 82")
   theTxt.textContent = "you pressed r!"
  }
})
