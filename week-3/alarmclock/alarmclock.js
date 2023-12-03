const timeRemaining = document.querySelector('#timeRemaining');
const circularProgressBar = document.querySelector("#circularProgressBar");
let time;
let input;
let timeOut;
let multiplierFactor;
function setAlarm() {
 
  input = parseInt(document.querySelector('#alarmSet').value, 10);
  multiplierFactor= 360 / input;
  if (document.getElementById('alarmSet').value === "") {
    alert("Add value to set alarm please!")
  } else {
    displayTime();
    time = setInterval(countdown, 1000);
    document.getElementById('alarmSet').value = "";
  }
}

function countdown() {
  if (input > 0) {
    input--;
    displayTime();
    setInfoCircularProgressBar(input);
  } else {
    clearInterval(time);
    playAlarm();
    timeOut = window.setTimeout(function () {
      document.body.classList.toggle('red');
    }, 1000);
  }
}

function displayTime() {
  let minutes = Math.floor(input / 60);
  let seconds = input % 60;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  const formattedTime = `${minutes}:${seconds}`;
  timeRemaining.textContent = formattedTime;
}
function setInfoCircularProgressBar(value){
  circularProgressBar.style.background = `conic-gradient(var(--blue) ${value * multiplierFactor}deg, var(--purple) 0deg)`;

}



const pauseBtn = document.querySelector('#pause');

pauseBtn.addEventListener('click', () => {

  if (pauseBtn.textContent === "Restart") {
    pauseBtn.textContent = "Pause";
    time = setInterval(countdown, 1000);
  } else {
    pauseBtn.textContent = "Restart";
    if (clearInterval(time)) {
      displayTime();
    }
  }

});

document.getElementById("stop").addEventListener("click", () => {
  document.body.classList.remove('red');
});


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
} [

]

window.onload = setup;
