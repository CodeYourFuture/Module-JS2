function setAlarm() {
  let timeRemaining = document.querySelector('#timeRemaining')
  let alarmTimeInput = document.querySelector('#alarmSet').value
  let alarmTimeRemaining = alarmTimeInput

  timeRemaining.innerHTML = `Time Remaining: ${convertSecondsToMinutes(alarmTimeRemaining)}`;

  // Start the interval
  let intervalAlarmId = setInterval(() => {
    alarmTimeRemaining--;
    timeRemaining.innerHTML = `Time Remaining: ${convertSecondsToMinutes(alarmTimeRemaining)}`;
  }, 1000);

  // Stop the interval when it reaches 0 and plays the alarm
  setTimeout(() => {
    clearInterval(intervalAlarmId); 
    playAlarm();
    document.body.style.backgroundColor = "red";
  }, alarmTimeInput * 1000);
}

function convertSecondsToMinutes(seconds) {
  let minutes = Math.trunc(seconds / 60).toLocaleString('en-UK', { minimumIntegerDigits: 2, useGrouping: false });
  let secondsRemaining = (seconds % 60).toLocaleString('en-UK', { minimumIntegerDigits: 2, useGrouping: false });

  return `${minutes}:${secondsRemaining}`;
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
  document.body.style.backgroundColor = "initial";
  document.querySelector('#alarmSet').value = "";
}

window.onload = setup;
