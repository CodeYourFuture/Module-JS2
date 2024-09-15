let countdown;
let remaining;
const display = document.getElementById("timeRemaining");

function setAlarm() {
  const inputValue = Number(document.getElementById("alarmSet").value);
  remaining = inputValue;
  update();

  countdown = setInterval(() => {
    if (remaining > 0) {
      remaining--;
      update();
    } else {
      playAlarm();
      clearInterval(countdown);
    }
  }, 1000);
}

function update() {
  const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
  const seconds = String(remaining % 60).padStart(2, "0");
  display.innerText = `Time Remaining: ${minutes}:${seconds}`;
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
  clearInterval(countdown);
  audio.pause();
}

window.onload = setup;
