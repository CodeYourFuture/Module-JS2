function setAlarm() {
  let timeRemaining = document.querySelector('#timeRemaining')
  let alarmTimeInput = document.querySelector('#alarmSet').value
  let alarmTimeRemaining = alarmTimeInput

  timeRemaining.innerHTML = `Time Remaining: ${convertSecondsToMinutes(alarmTimeRemaining)}`;
  console.log(convertSecondsToMinutes(alarmTimeRemaining));

  let intervalAlarmId = setInterval(() => {
    alarmTimeRemaining--;
    console.log(convertSecondsToMinutes(alarmTimeRemaining));
    timeRemaining.innerHTML = `Time Remaining: ${convertSecondsToMinutes(alarmTimeRemaining)}`;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalAlarmId); // Stop the interval
    playAlarm()
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
}

window.onload = setup;
