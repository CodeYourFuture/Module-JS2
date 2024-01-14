
let variable;                                           // decleared three variable the purpose is shown inside "function startTime()".
let timer;                   
let countDownSeconds;

function startTime() {
  timer = document.getElementById("alarmSet");                 
  countDownSeconds = parseInt(timer.value); 
  variable = setInterval(start, 1000);
  document.getElementById("timerr").innerHTML = formatTime(countDownSeconds);
}

function start() {
  countDownSeconds--;
  document.getElementById("timerr").textContent = formatTime(countDownSeconds);
  if (countDownSeconds === 0) {
    stop();
    playAlarm();
  }
}

function stop() {
  clearInterval(variable);
}

// function formate "mm:ss"
function formatTime(seconds) { 
  const minutes = Math.floor(seconds / 60);                // to convert seconds into minutes like, 120/60 = 2 minutes;
  const remainingSeconds = seconds % 60;                    // here what if we have remainder like, 75 / 60 =  1 minutes and 15 seconds
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;                 //this mean when second is < 10 add 0 like, minutes is 3 and second is 5 so the result in string "3:05"                       
}


function setAlarm() {
  stop();                                             // to stop countdown 
  startTime();                                         // to start count down when the new valu input
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
