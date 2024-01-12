var myVar;
var timer = document.getElementById("alarmSet");
var countDownSeconds;
startTime();

function startTime() {
  myVar = setInterval(start, 1000);
  document.getElementById("timer").innerHTML = timer.value;
  countDownSeconds = timer.value;
}

function start() {
  countDownSeconds--;
  document.getElementById("timer").innerHTML = countDownSeconds;
  if (countDownSeconds == -1) {
    stop();
    document.getElementById("timer").innerHTML = "0";
  } else if (countDownSeconds === 0) {
    playAlarm();
  }
}

function stop() {
  clearInterval(myVar);
}
<<<<<<< HEAD
=======

//function setAlarm() { }
>>>>>>> 070220da50bda0ad47d79beb7df9a4ed4957e288

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
