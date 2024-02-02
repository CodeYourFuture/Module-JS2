let countdown;
let timeRemaining;
let isAlarmPlaying = false;
let isPaused = false;

function setAlarm() {
  clearInterval(countdown);

  const inputTime = parseInt(document.getElementById("alarmSet").value, 10);

  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please enter a valid number");
    return;
  }

  timeRemaining = inputTime;

  updateHeading();

  countdown = setInterval(() => {
    if (!isPaused) {
      timeRemaining--;

      if (timeRemaining >= 0) {
        updateHeading();
      } else {
        playAlarm();
        clearInterval(countdown);
      }
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

function pauseResumeAlarm() {
  if (isPaused) {
    // Resume countdown
    isPaused = false;
    document.getElementById("pause").innerText = "Pause";
    setAlarm();
  } else {
    // Pause countdown
    isPaused = true;
    document.getElementById("pause").innerText = "Resume";
    clearInterval(countdown);
  }
}

function stopAlarm() {
  clearInterval(countdown);
  isAlarmPlaying = false;
  isPaused = false;
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
  document.getElementById("pause").innerText = "Pause";
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
  document.getElementById("pause").addEventListener("click", () => {
    pauseResumeAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
