var intervals = [];

function startTimer() {
    const frequency = 50; // How many times per second the timer updates
    const duration = document.querySelector('#timeInput').valueAsNumber / (1000 / frequency); // Convert milliseconds to seconds
    const timerTextElement = document.querySelector('.timerText');
    const timerElement = document.querySelector('.timer');
    let timer = duration, minutes, seconds;

    const interval = setInterval(() => {
        minutes = Math.floor(timer / (60 * frequency));
        seconds = Math.floor(timer % (60 * frequency) / frequency);
        timerTextElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timerElement.style.background = `conic-gradient(#f0f0f0 ${(duration - timer) / duration * 100}%, #ff0000 ${(duration - timer) / duration * 100}%)`;

        if (--timer < 0) {
            clearInterval(interval);
            timerTextElement.textContent = "Time's up!";
        }
    }, 1000 / frequency);

    intervals.push(interval);
}

function stopTimer() {
    intervals.forEach(interval => clearInterval(interval));
    intervals = [];
}
