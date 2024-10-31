let timerInterval;
let isRunning = false;
let elapsedTime = 0; // Track elapsed time in milliseconds

document.getElementById('start-timer').addEventListener('click', function() {
    if (!isRunning) {
        isRunning = true;
        startTimer();
        document.querySelector('.outer-circle').classList.add('gradient-background'); // Add gradient class
    }
});

document.getElementById('pause-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
    document.querySelector('.outer-circle').classList.remove('gradient-background'); // Remove gradient class
});

document.getElementById('reset-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0; // Reset elapsed time
    document.querySelector('.timer-display').textContent = "00:00:00"; // Reset display
    document.querySelector('.outer-circle').classList.remove('gradient-background'); // Remove gradient class
});

document.getElementById('Laps').addEventListener('click', function() {
    if (isRunning) {
        recordLap();
    }
});

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        elapsedTime += 10; // Increment by 10 milliseconds
        updateTimerDisplay();
    }, 10); // Update every 10 milliseconds
}

// Function to update the timer display
function updateTimerDisplay() {
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10); // Two digits for milliseconds

    document.querySelector('.timer-display').textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2,'0')}`;
}

// Function to record laps
function recordLap() {
    const lapList = document.getElementById('lap-list');
    const lapItem = document.createElement('li');
    lapItem.textContent = document.querySelector('.timer-display').textContent; // Use current timer display
    lapList.appendChild(lapItem);
}
