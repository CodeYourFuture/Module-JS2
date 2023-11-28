

const timeRemaining=document.getElementById("timeRemaining");
let seconds;
let timeHolder=0;
let timerBoolean=false; // is used for pause and resume button
let updaterInterval;
const setButton=document.getElementById('set');

function displayTimer(duration){
    const remainedMinutes=Math.floor(duration/60);
    const remainedSeconds=duration%60;
    timeRemaining.innerText=`Time remianing: ${String(remainedMinutes).padStart(2,'0')}:${String(remainedSeconds).padStart(2,'0')}`;
  }
  
function updateTimer(){
    updaterInterval=setInterval(() => {
      
      displayTimer(seconds);
      seconds--;
      timeHolder=seconds;
      if(seconds<0){
      playAlarm();
      clearInterval(updaterInterval);
    }
      
    }, 1000);
    
  }


function setAlarm() {
  const inputValue = document.getElementById("alarmSet");
  

  clearInterval(updaterInterval);
  
  if (inputValue.value !== '') {
      seconds = parseInt(inputValue.value, 10);
      displayTimer(seconds);
      updateTimer();
      setButton.disabled = true;
      inputValue.value = '';
  }
  
}


  
  const pauseButton=document.getElementById("Pause" );
  pauseButton.addEventListener('click',function(){
    if(timerBoolean===false){
      clearInterval(updaterInterval);
      timerBoolean=true;
    }
    else{
      updateTimer();
      timerBoolean=false;
    }
  })


function backgroundChanger(){

}

// DO NOT EDIT BELOW HERE
//////////////////////////////////////////////////////////////////////////

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


