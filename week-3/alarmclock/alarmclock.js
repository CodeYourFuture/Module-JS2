function setAlarm() {
}

const remainingTime = document.querySelector('#timeRemaining');
const input = document.querySelector('#alarmSet');
const btnSet = document.querySelector('#set');
const btnStop = document.querySelector('#stop');


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
}

window.onload = setup;
