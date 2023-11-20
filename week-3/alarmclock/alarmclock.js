const timeRemaining = document.querySelector('#timeRemaining');
let time;
let input;

function setAlarm() {
  input = parseInt(document.querySelector('#alarmSet').value, 10);
  displayTime();
  time = setInterval(interval, 1000);
}

function interval() {
  if (input > 0) {
    input--;
    displayTime();
  } else {
    clearInterval(time);
    playAlarm();
    document.querySelector('.centre').style.background = 'red';
  }
}

function displayTime() {
  const minutes = Math.floor(input / 60);
  const seconds = input % 60;
  const formattedTime = `${minutes}:${seconds}`;
  timeRemaining.textContent ="Time Remaining:" +formattedTime;
}

function stopAlarm() {
  clearInterval(time);
  timeRemaining.textContent = "Time Remaining:00:00";
  pauseAlarm();
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
