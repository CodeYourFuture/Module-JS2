
let alarmTime = 0;

//Every one second the title should count down by one.

function setAlarm() {

const alarmTime = document.getElementById("alarmSet").value;

document.getElementById("timeRemaining").textContent = ` Time Remaining: ${alarmTime}`;





}


document.getElementById("set").addEventListener("click", setAlarm);

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
