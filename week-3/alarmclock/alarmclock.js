function setAlarm() {
  const input = document.getElementById("alarmSet");
  const heading = document.getElementById("timeRemaining");
  let time = Number(input.value);

  function updateHeading() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    heading.innerText = `Time Remaining: ${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (time === 0) {
      playAlarm();
      clearInterval(intervalId);
    }
    time = time - 1;
  }
  updateHeading();
  const intervalId = setInterval(updateHeading, 1000);
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
