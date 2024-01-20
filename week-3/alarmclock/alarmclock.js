function setAlarm() {
  const remainingTime = document.querySelector("#timeRemaining");
  const alarmInput = document.getElementById("alarmSet");
  const alarmTime = alarmInput.value;

  let minutes = Math.floor(alarmTime / 60);
  let seconds = alarmTime % 60;
  remainingTime.innerText = `Time Remaining: ${minutes.toString().padStart(
    2,
    "0"
  )}:${seconds.toString().padStart(2, "0")}`;
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
