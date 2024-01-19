let countdown;
let timeRemaining;
let isAlarmPlaying = false;

function setAlarm() {
  // Clear any existing countdown
  clearInterval(countdown);

  // Get the input value for the countdown timer
  const inputTime = parseInt(document.getElementById("alarmSet").value, 10);

  // Validate input
  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please enter number");
    return;
  }

  timeRemaining = inputTime;

  // Update the heading
  updateHeading();

  // Start the countdown
  countdown = setInterval(() => {
    timeRemaining--;

    if (timeRemaining >= 0) {
      updateHeading();
    } else {
      // Countdown reached zero, play alarm
      playAlarm();
      clearInterval(countdown);
    }
  }, 1000);
}

function updateHeading() {
  const minutes = Math.floor(timeRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeRemaining % 60).toString().padStart(2, "0");

  document.getElementById(
    "timeRemaining"
  ).innerText = `Time Remaining: ${minutes}:${seconds}`;
}

function playAlarm() {
  if (!isAlarmPlaying) {
    isAlarmPlaying = true;
    const audio = new Audio("alarmsound.mp3");
    audio.play();
  }
}

function pauseAlarm() {
  clearInterval(countdown);
  isAlarmPlaying = false;
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
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
