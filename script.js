
// const AddTime = document.getElementById('add-time');

document.getElementById('btn').addEventListener('click', startNewTimer);
document.getElementById('add-timer').addEventListener('click', addNewTimer);


function addNewTimer() {
    const timerContainer = document.getElementById('timersContainer');
    if (!timerContainer) {
        console.error("Container element not found!");
        return;
    }
    
    // Rest of your code using totalTimeInSeconds

}

let timers = [];

function startNewTimer() {
    const hours = parseInt(document.getElementById('hours').value || 0);
    const minutes = parseInt(document.getElementById('minutes').value || 0);
    const seconds = parseInt(document.getElementById('seconds').value || 0);

    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    const timerElement = document.createElement('div');
    timerElement.classList.add('timer');
    timerElement.textContest = totalTimeInSeconds;

    document.getElementById('timersContainer').appendChild(timerElement);
    if (isNaN(totalTimeInSeconds) || totalTimeInSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    const timer = {
        totalTime: totalTimeInSeconds,
        timeLeft: totalTimeInSeconds,
        intervalId: setInterval(() => {
            updateTimer(timer);
        }, 1000)
    };

    timers.push(timer);
}

function updateTimer(timer) {
    timer.timeLeft--;

    if (timer.timeLeft <= 0) {
        clearInterval(timer.intervalId);
        handleTimerEnd(timer);
        removeTimer(timer);
    }

    // Update the display for the timer showing time left
    updateTimerDisplay(timer);
}
function removeTimer(timer) {
    const index = timers.indexOf(timer);
    if(index != -1){
        timers.splice(index, 1);
    }
}

function handleTimerEnd(timer) {
    // Change the display to match the end timer design
    // Play audio alert
    const audio = new Audio('alert_sound.mp3');
    audio.play();
}

function updateTimerDisplay(timer) {
    // Update the timer display in the UI
    const timerElement = document.querySelector('.timer');

    const hours = Math.floor(timer.timer.timeLeft/3600);
    const minutes = Math.floor((timer.timeLeft % 3600) /60);
    const seconds = timer.timerLeft % 60;

    timerElement.textContent = `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
}

function addNewTimer() {
    // Add UI elements for a new timer in the Active Timers Display Section
    const timerContainer = document.getElementById('timersContainer');
    if (!timerContainer) {
        console.error("Container element not found!");
        return;
    }

    const hours = parseInt(document.getElementById('hours').value || 0);
    const minutes = parseInt(document.getElementById('minutes').value || 0);
    const seconds = parseInt(document.getElementById('seconds').value || 0);

    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;


    const newTimerElement = document.createElement('div');
    newTimerElement.classList.add('timer');

    const newTimerDisplay = document.createElement('div');
    newTimerDisplay.classList.add('timer-display');
    newTimerDisplay.textContent = '00:00:000';

    const stopButton = document.createElement('button');
    stopButton.classList.add('stop-timer');
    stopButton.textContent = 'Stop Timer';
    stopButton.addEventListener('click', () => {
        // Handle stop timer functionality
        // For instance, clearInterval(timer.intervalId)
        // And remove timer from timers array
    })
    newTimerElement.appendChild(newTimerDisplay);
    newTimerElement.appendChild(stopButton);

    timerContainer.appendChild(newTimerElement);
     // Add this new timer to your timers array or manage it accordingly
    // For instance, timers.push({ totalTime: totalTimeInSeconds, timeLeft: totalTimeInSeconds, intervalId: ... });
    // const totalTimeInSeconds = totalTimeInSeconds;
    const newTimer = {
        totalTime: totalTimeInSeconds,
        timeLeft: totalTimeInSeconds,
        intervalId: setInterval(() => {
            updateTimer(newTimer);
        }, 1000)
    };

    timers.push(newTimer); // Add new timer object to the timers array
}
