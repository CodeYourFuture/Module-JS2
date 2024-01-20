
function setAlarm() {
  const setTimeTo = document.querySelector("#alarmSet");
  const countdown = document.querySelector("#timeRemaining");
  let time = Number(setTimeTo.value);

  function titleTime(){
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    countdown.innerText = `Time remaining: ${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`

    if (time===0){
      playAlarm();
      clearInterval(intervalId);
    }

    time = time -1;    
  }
  titleTime();
  const intervalId = setInterval(titleTime,1000);
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
