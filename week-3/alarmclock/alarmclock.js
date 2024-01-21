

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

    // stop();
  } else if (spanTime.textContent != "00:00") {
    const currentSeconds =
      parseInt(spanTime.textContent.slice(3), 10) +
      parseInt(spanTime.textContent.slice(0, 2)) * 60;

    spanTime.textContent = timeFormat(currentSeconds - 1);
    // pauseAlarm();
  }
}, 1000);



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
