

let countdown;

function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");

  let timeInSeconds = parseInt(input.value, 10);

  if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
    alert("Please enter a valid positive number for the alarm time.");
    return;
  }

  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;

  countdown = setInterval(() => {
    seconds--;

    if (seconds < 0) {
      if (minutes === 0) {
        clearInterval(countdown);
        playAlarm();
        document.body.style.backgroundColor = "red"; // This was just optional, background color will change
        // Flash background color (optional)
        setTimeout(() => {
          document.body.style.backgroundColor = "";
        }, 500);
      } else {
        seconds = 59;
        minutes--;
      }
    }

    heading.innerText = `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countdown);
    pauseAlarm();
    heading.innerText = "Time Remaining: 00:00";
    document.body.style.backgroundColor = ""; // this is to reset background color
  });
}

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    clearInterval(countdown); // Clear the previous countdown interval
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(countdown);
    pauseAlarm();
    document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
    document.body.style.backgroundColor = ""; // Reset background color
  });
}

// Rest of the code remains unchanged

// DO NOT EDIT BELOW HERE
var audio = new Audio("alarmsound.mp3");

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
