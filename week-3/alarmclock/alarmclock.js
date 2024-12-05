

let alarmTime = 0;
let alarmValue = null;



function setAlarm() {

  // update time

  const inputTime = Number(document.getElementById("alarmSet").value);

  alarmTime = inputTime;

  document.getElementById(
    "timeRemaining"
  ).textContent = ` Time Remaining: ${timeFormat(alarmTime)}`;



  // Start the countdown

  alarmValue = setInterval(() => {
    if (alarmTime > 0) {
      alarmTime--;
      document.getElementById(
        "timeRemaining"
      ).textContent = ` Time Remaining: ${timeFormat(alarmTime)}`;
    } else {
      clearInterval(alarmValue);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  }, 1000);
}



// Calculate the time

function timeFormat(time){
  const minutes = Math.floor(time / 60);
  const seconds =  time % 60;
return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
  2,
  "0"
)}`;
}


// Stop the alarm

function stopTheAlarm() {
  clearInterval(alarmValue);

}

// event to start and stop the countdown

document.getElementById("set").addEventListener("click", setAlarm);
document.getElementById("stop").addEventListener("click", setAlarm);













// DO NOT EDIT BELOW HERE
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
