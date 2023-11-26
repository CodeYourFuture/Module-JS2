//When you click the `Set Alarm` button the counter at the top of the screen should change to the number you entered in the `input` field.
// For example, if the`input` field says `10` then the title should say`Time Remaining: 00:10`.
let intervalCount = 0;
function setAlarm() {
  let timeInput = document.getElementById("alarmSet").value;
  document.getElementById("timeRemaining").innerText =
    "Time Remaining: " + formatTime(timeInput);
  setTimeout(playAlarm, timeInput * 1000);

  const interval = setInterval(() => {
    document.getElementById("timeRemaining").innerText =
      "Time Remaining: " + formatTime(timeInput > 0 ? timeInput-- : "0");
    // timeInput < 1 ?? clearInterval(timeInput);
  }, 1000);

  console.log("interval", interval);

  // clearInterval(interval);
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  if (minutes < 10 && remainingSeconds < 10) {
    return "0" + minutes + ":0" + remainingSeconds;
  } else if (minutes < 10) {
    return "0" + minutes + ":" + remainingSeconds;
  } else if (remainingSeconds < 10) {
    return minutes + ":0" + remainingSeconds;
  } else {
    return minutes + ":" + remainingSeconds;
  }
}

// Write an onchange function to get the value of the input
let timeInput = document.getElementById("alarmSet");

const value = timeInput.addEventListener("keydown", (event) => {
  console.log(event.target.value);
  return event.target.value;

  // result.textContent = `You like ${event.target.value}`;
});
let stopButton = document.getElementById("stop");

stopButton.addEventListener("click", () => {
  document.getElementById("timeRemaining").innerText = "Time Remaining: 00:00";
});
// timeInput.addEventListener("change", handleChange);
// write a setinterval function on the value above

// write an onclick event listener on the button that calls the set interval above
// let remainingSecondsId = document.getElementById("#timeRemaining").value;
// let countDownAlarm = 0;
// function countDown() {
//   document.getElementById("#set").addEventListener("click", () => {
//     setInterval(function () {
//       countDown += 1;
//       remainingSecondsId.textContent = countDown;
//     }, 1000);
//   });
// }
// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmSound.mp3");

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
