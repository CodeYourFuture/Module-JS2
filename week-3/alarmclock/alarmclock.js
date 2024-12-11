let remainingTime = 0;
let isAlarmPlaying = false;

function setAlarm() {
  // Get the value from the input field
  const inputTime = document.getElementById("alarmSet").value;

  // Validate if the input is a positive integer
  if (/^\d+$/.test(inputTime) && parseInt(inputTime) >= 0) {
    remainingTime = parseInt(inputTime);
    updateTitle();

    // Start the countdown using setInterval
    countdown = setInterval(function () {
      if (remainingTime > 0) {
        remainingTime -= 1;
        updateTitle();
      } else {
        playAlarm();
        clearInterval(countdown);
        isAlarmPlaying = true;
        document.body.style.backgroundColor = "red"; // Change background color
      }
    }, 1000);
  } else {
    alert("Please enter a valid non-negative number for the alarm time.");
  }
}

function updateTitle() {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.getElementById("timeRemaining").textContent = `Time Remaining: ${formattedTime}`;
}

function playAlarm() {
  if (!isAlarmPlaying) {
    const audio = new Audio("alarmsound.mp3");
    audio.play();
  }
}

  document.getElementById("stop").addEventListener("click", function() {
    location.reload();
  });
  



// Setup event listeners
document.getElementById("set").addEventListener("click", setAlarm);

// Add event listener for "Stop Alarm" button
document.getElementById("stop").addEventListener("click", pauseAlarm);


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
