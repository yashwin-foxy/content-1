// Define variables
const timers = [];

// Function to update timer display
function updateTimers() {
    // Update timers display logic
}

// Function to start a new timer
function startNewTimer(hours, minutes, seconds) {
    // Calculate total seconds and create a new timer object
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const timer = {
        totalSeconds,
        intervalId: setInterval(() => {
            timer.totalSeconds--;
            if (timer.totalSeconds <= 0) {
                clearInterval(timer.intervalId);
                // Handle timer end logic (change display, play alert, etc.)
            }
            updateTimers();
        }, 1000)
    };
    timers.push(timer);
    updateTimers();
}

// Function to stop a timer
function stopTimer(index) {
    clearInterval(timers[index].intervalId);
    timers.splice(index, 1);
    updateTimers();
}

// Event listener for 'Start New Timer' button
document.getElementById('TEXT_103_106').addEventListener('click', () => {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    // Validate input and start new timer
    if (hours > 0 || minutes > 0 || seconds > 0) {
        startNewTimer(hours, minutes, seconds);
    } else {
        // Handle invalid input (show error message, etc.)
    }
});

// Event delegation for 'Stop Timer' buttons
document.querySelector('.active-timers-display-section').addEventListener('click', (event) => {
    if (event.target.classList.contains('stop-timer-btn')) {
        const index = parseInt(event.target.dataset.index);
        stopTimer(index);
    }
});
