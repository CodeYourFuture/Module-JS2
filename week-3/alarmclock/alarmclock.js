const timeRemaining = document.querySelector('#timeRemaining');
let time;
let input;
let timeOut;

function setAlarm() {
  input = parseInt(document.querySelector('#alarmSet').value, 10);
  displayTime();
  time = setInterval(interval, 1000);
}

function interval() {
  if (input > 0) {
    input--;
    displayTime();
  } else {
    clearInterval(time);
    playAlarm();
    timeOut = window.setTimeout(function () {
      document.body.classList.toggle('red');
    }, 100);
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
  timeRemaining.textContent = "Time Remaining: " + formattedTime;
}


const pauseBtn = document.querySelector('#pause');

pauseBtn.addEventListener('click', () => {

  if (clearInterval(time)) {
    displayTime();
  }
  if (pauseBtn.textContent === "Restart") {
    pauseBtn.textContent = "Pause";
  } else {
    pauseBtn.textContent = "Restart";
  }

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
