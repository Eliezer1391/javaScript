let startButton = document.getElementById('start'); 
let stopButton = document.getElementById('stop'); 
let resetButton = document.getElementById('reset'); 
  
let hours = 00; 
let minutes = 00; 
let seconds = 00; 
let miliseconds = 00; 

startButton.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopButton.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetButton.addEventListener('click', function () { 
    timer = false; 
    hours = 0; 
    minutes = 0; 
    seconds = 0; 
    miliseconds = 0; 
    document.getElementById('timeHours').innerHTML = "00"; 
    document.getElementById('timeMinutes').innerHTML = "00"; 
    document.getElementById('timeSeconds').innerHTML = "00"; 
    document.getElementById('timeMiliseconds').innerHTML = "00"; 
}); 

function stopWatch() {
    if (timer) {
        miliseconds++;

        if(miliseconds == 100){
            seconds++;
            miliseconds = 0;
        }

        if (seconds == 60){
            minutes++;
            seconds = 0;
        }

        if (minutes == 60){
            hours++;
            minutes = 0;
            seconds = 0;
        }

        let hourString = hours; 
        let minuteString = minutes; 
        let secondString = seconds; 
        let milisecondString = miliseconds; 
  
        if (hours < 10) { 
            hourString = "0" + hourString; 
        } 
  
        if (minutes < 10) { 
            minuteString = "0" + minuteString; 
        } 
  
        if (seconds < 10) { 
            secondString = "0" + secondString; 
        } 
  
        if (miliseconds < 10) { 
            milisecondString = "0" + milisecondString; 
        } 
  
        document.getElementById('timeHours').innerHTML = hourString; 
        document.getElementById('timeMinutes').innerHTML = minuteString; 
        document.getElementById('timeSeconds').innerHTML = secondString; 
        document.getElementById('timeMiliseconds').innerHTML = milisecondString; 
        setTimeout(stopWatch, 10); 
    } 
}