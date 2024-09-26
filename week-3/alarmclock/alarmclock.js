var countdownInterval;
var secondsRemaining = 0;

function setAlarm() {
  const alarmSetInput = document.getElementById("alarmSet");
  const timeRemainingElemet = document.getElementById("timeRemaining");

  const secondsInput = parseInt(alarmSetInput.value, 10);

  if (isNaN(secondsInput) || secondsInput <= 0) {
    alert("Please insert a valid positive number");
    return;
  }

  secondsRemaining = secondsInput;
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const timeRemainingElemet = document.getElementById("timeRemaining");

  if (secondsRemaining <= 0) {
    clearInterval(countdownInterval);
    playAlarm();
    timeRemainingElemet.textContent = "Time Remaining: 00:00";
  } else {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;

    timeRemainingElemet.textContent = `Time Remaining: ${padNumber(
      minutes
    )}:${padNumber(seconds)}`;
    secondsRemaining--;
  }
}

function padNumber(number) {
  return number.toString().padStart(2, "0");
}

function stopAlarm() {
  clearInterval(countdownInterval);
  pauseAlarm();
  const timeRemainingElemet = document.getElementById("timeRemaining");
  timeRemainingElemet.textContent = "Time Remaining: 00:00";
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
