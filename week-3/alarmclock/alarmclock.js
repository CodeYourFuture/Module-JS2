

const timeRemaining=document.getElementById("timeRemaining");
let seconds;
let timeHolder=0;
let timerBoolean=false; // is used for pause and resume button
let updaterInterval;
const setButton=document.getElementById('set');
let flashingInterval;

function displayTimer(duration){
    const remainedMinutes=Math.floor(duration/60);
    const remainedSeconds=duration%60;
    timeRemaining.innerText=`Time Remaining: ${String(remainedMinutes).padStart(2,'0')}:${String(remainedSeconds).padStart(2,'0')}`;
  }
  
function updateTimer(){
    updaterInterval=setInterval(() => {
      
      displayTimer(seconds);
      seconds--;
      
      if(seconds<0){
      playAlarm();
      clearInterval(updaterInterval);
      colorChanger();
      
      }
      
    }, 1000);
    
  }

const alarmImage=document.getElementById('alarm-image');
function colorChanger(){
        let isRed=true;
        flashingInterval=setInterval(function(){
            if(isRed){
            alarmImage.src='./idea1.png';
            
            }
            else{
              alarmImage.src='./idea.png';
            }

            isRed=!isRed;

        },500)
      }


function setAlarm() {
  const inputValue = document.getElementById("alarmSet");
  
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



const resetButton=document.getElementById('reset');
resetButton.addEventListener('click',function(){
  setButton.disabled=false;
  clearInterval(updaterInterval);
  displayTimer(0);
  pauseAlarm();
  clearInterval(flashingInterval);
  alarmImage.src='idea.png';
})






// DO NOT EDIT BELOW HERE
//////////////////////////////////////////////////////////////////////////

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    clearInterval(flashingInterval);
    alarmImage.src='idea.png';
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
  
}

window.onload = setup;


