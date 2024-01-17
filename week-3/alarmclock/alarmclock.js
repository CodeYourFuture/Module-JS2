let intervalId;
let bgIntervalId;

function setAlarm() {
  clearInterval(intervalId);
  clearInterval(bgIntervalId);
  setBackground("none");
  document.getElementById("alarmSet").classList.remove("invalidInput");

  let alarmSet = document.getElementById("alarmSet").value;

  if (alarmSet > 3599) {
    document.getElementById("alarmSet").classList.add("invalidInput");
    return;
  }

  setTime(alarmSet);

  intervalId = setInterval(function () {
    alarmSet = alarmSet - 1;
    setTime(alarmSet);
    if (alarmSet == 0) {
      setBackground("red", "white");
      playAlarm();
      clearInterval(intervalId);
    }
  }, 1000);
}

function setBackground(color1, color2) {
  let i = 0;

  bgIntervalId = setInterval(function () {
    if (i % 2 == 0) {
      document.body.style.background = color1;
    } else {
      document.body.style.background = color2;
    }
    i++;
  }, 500);
}

function setTime(time) {
  document.getElementById("time").innerText = toTime(time);
}

function toTime(seconds) {
  var date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().slice(14, 19);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(bgIntervalId);
    setBackground("none");
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
