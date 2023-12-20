let timeRemaining = document.getElementById("timeRemaining");

function setAlarm() {
  let input = document.getElementById("alarmSet").value;

  if (input <= 0) {
    alert("Invalid number");
  }
  else if(input > 0){
    displayTime(input);
    const interval = setInterval(() => {
      if (input === 0) {
        clearInterval(interval);
        playAlarm();
      }
      displayTime(input--);
    }, 1000);
  }
  console.log(input);
}

function displayTime(num) {
 let time;
 let minutes = Math.floor(num / 60);
 let seconds = num % 60;
 
 if(num >= 0){
     
  if (minutes < 10) {
    minutesPart = `0${minutes}`;
  } else {
    minutesPart = minutes;
  }
  if (seconds < 10) {
    secondsPart = `0${seconds}`;
  } else {
    secondsPart = seconds;
  }
  time = `${minutesPart}:${secondsPart}`;
  timeRemaining.textContent = `Time Remaining: ${time}`;

  }
  else if (input < 0) {
    time = `00:00`;
    timeRemaining.textContent = `Time Remaining: ${time}`;
  }
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
