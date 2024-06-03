let alarmTime;
const remainingTime = document.querySelector("#timeRemaining");
let intervalID;

function setAlarm() {
  clearInterval(intervalID);
  let alarmInput = document.getElementById("alarmSet");
  alarmTime = alarmInput.value;
  intervalID = setInterval(updateTimeRemaining, 1000);
  updateTimeRemaining();
}

function updateTimeRemaining() {
  let minutes = Math.floor(alarmTime / 60);
  let seconds = alarmTime % 60;
  remainingTime.innerText = `Time Remaining: ${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  if (alarmTime === 0) {
    playAlarm();
    clearInterval(intervalID);
  }
  alarmTime--;
}

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
