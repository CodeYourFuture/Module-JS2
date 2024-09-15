let time;
let userInput;

function timeFormatDisplay(userInput) {
  let minutes = Math.floor(userInput / 60);
  let seconds = userInput % 60;

  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function setAlarm() {
  userInput = parseInt(document.getElementById("alarmSet").value, 10);

  displayRemainingTime();
  timerCountdown();
  time = setInterval(timerCountdown, 1000);
  document.getElementById("alarmSet").value = "";
}

function timerCountdown() {
  if (userInput > 0) {
    userInput--;
    displayRemainingTime();
  } else {
    clearInterval(time);
    playAlarm();
    document.body.style.backgroundImage = "url(./images/background-Pic.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }
}

function displayRemainingTime() {
  let formattedTime = timeFormatDisplay(userInput); //2
  console.log(formattedTime);
  const timeRemaining = document.querySelector("#timeRemaining"); //3
  timeRemaining.textContent = `Time Remaining: ${formattedTime}`; //4
}

const stopAlarmButton = document.getElementById("stop");
stopAlarmButton.addEventListener("click", stopAlarm);
function stopAlarm() {
  pauseAlarm();
  document.body.style.backgroundImage = "url(./images/background-2.jpg)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
}

function pauseResumeAlarm() {
  if (pauseButton.textContent === "Pause Alarm") {
    pauseButton.textContent = "Resume";
    clearInterval(time);
  } else {
    pauseButton.textContent = "Pause Alarm";
    time = setInterval(timerCountdown, 1000);
    displayRemainingTime();
  }
}

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", pauseResumeAlarm);

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
