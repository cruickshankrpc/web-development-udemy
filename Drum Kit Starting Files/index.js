// Detecting Button Press
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  // handleClick is passed as a function to be called later (once button is clicked)
  // this is why there are no () after it:
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // 'this' is the identity of the button that triggered the event listener
    // returns button object that you clicked
    // console.log(this)
    const buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML)
  });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  buttonAnimation(e.key)
});

function makeSound(key) {
  // keyword: switch, argument: what you want to switch on
  switch (key) {
    // depending on the case, do something
    case "w":
      // CONSTRUCTOR FUNCTION: capitalised first letter, has properties
      // create variable, then new Audio object
      const tom1 = new Audio("sounds/tom-1.mp3");
      // call play METHOD on your variable
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
  }
}

function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed")
  setTimeout(function() {
    activeButton.classList.remove("pressed")
  }, 100)

}