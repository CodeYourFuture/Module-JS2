function setAlarm() {
  const timeElement = document.getElementById("timeRemaining");

      // Get the current time and parse it into minutes and seconds
      let currentTime = timeElement.textContent.split(":");
      let minutes = currentTime[0];
      let seconds = currentTime[1];

      // Update seconds (for example, increase by 10 seconds)
       seconds += 5;

      // Ensure that seconds don't exceed 59
      if (seconds >= 60) {
        seconds = 0;
        minutes += 1;
      }

      // Format minutes and seconds to two digits
      let formattedMinutes = String(minutes).padStart(2, "0");
      let formattedSeconds = String(seconds).padStart(2, "0");

      // Update the time in the h1 element
      timeElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

    // Add event listener to the button
    const btn = document.getElementById("set");
    btn.addEventListener("click", setAlarm);

  



// // DO NOT EDIT BELOW HERE

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



