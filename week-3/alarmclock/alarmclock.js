// var myvar;
// var timer = document.getElementById("alarmSet");
// var countDown;
// function startTime() {
//   myVar = setInterval(start, 4000);
//   document.getElementById("timer").innerHTML = timer.value;
//   countDown = timer.value;
// }
// function start() {
//   countDown--;
//   document.getElementById("timer").innerHTML = countDown;
//   if (countDown == -1) {
//     stop();
//     document.getElementById("timer").innerHTML = "0";
//   }
//   playAlarm();
// }
// startTime();
// setAlarm();
// DO NOT EDIT BELOW HERE

function setAlarm() {
  const inputTime = document.getElementById("alarmSet");
  const spanTime = document.querySelector("span");
  const inputValue = inputTime.value;
  spanTime.textContent = timeFormat(inputValue);
}

function timeFormat(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSec = seconds % 60;
  const formattedMin = String(minutes).padStart(2, "0");
  const formattedSec = String(remainingSec).padStart(2, "0");
  return `${formattedMin}:${formattedSec}`;
}

setAlarm();

setInterval(() => {
  const spanTime = document.querySelector("span");
  if (spanTime.textContent === "00:00") {
    // playAlarm();

    stop();
  } else if (spanTime.textContent != "00:00") {
    const currentSeconds =
      parseInt(spanTime.textContent.slice(3), 10) +
      parseInt(spanTime.textContent.slice(0, 2)) * 60;

    spanTime.textContent = timeFormat(currentSeconds - 1);
    pauseAlarm();
  }
}, 1000);

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
