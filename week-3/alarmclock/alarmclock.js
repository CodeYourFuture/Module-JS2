const timeRemaining = document.querySelector('#timeRemaining');
let time;
let input; 

function setAlarm() {   
  input = parseInt(document.getElementById('alarmSet').value, 10); 
  
  if (isNaN(input) || input <= 0) {  
    alert("Add a valid value to set the alarm, please!"); 
  } else {
    displayTime(input);  
    time = setInterval(countdown, 1000); 
    
    document.getElementById('alarmSet').disabled = true; 
  }
}

function countdown() { 
  if (input > 0) { 
    input--; 
    displayTime(input); 
  } else { 
    clearInterval(time); 
    playAlarm(); 
    document.getElementById('alarmSet').disabled = false; 
  }
}

function displayTime(seconds) { 
  const minutes = Math.floor(seconds / 60); 
  const remainingSeconds = seconds % 60; 
  const formattedMinutes = String(minutes).padStart(2, '0'); 
  
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  timeRemaining.textContent = `Time Remaining: ${formattedMinutes}:${formattedSeconds}`;
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
