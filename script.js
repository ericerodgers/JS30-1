//the solution:

function playSound(e) { 
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if(!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);


//My ugly "not dry" attempt to get the app to work by clicking on the buttons 
//as well as responding to the keydown event


function playSound1() { 
  const audio1 = document.getElementById(this.classList[1]);
  const key1 = document.getElementsByClassName(this.classList[1]);
  if(!audio1) return;
  audio1.currentTime = 0;
  audio1.play();
  key1[0].classList.add("playing");
}

function playSound(e) { 
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
if (e.propertyName !== "transform") return;
this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

const buttons = document.querySelectorAll(".key");
buttons.forEach(button => button.addEventListener("click", playSound1));

window.addEventListener("keydown", playSound);
