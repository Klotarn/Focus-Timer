function startTimer(duration) {
    const timerTextElement = document.querySelector('.timerText');
    const timerElement = document.querySelector('.timer');
    let timer = duration, minutes, seconds;

    const interval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;
        timerTextElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timerElement.style.background = `conic-gradient(#f0f0f0 ${(duration - timer) / duration * 100}%, #ff0000 ${(duration - timer) / duration * 100}%)`;
        console.log(timer);
        console.log(duration);
        console.log((duration - timer) / duration);

        if (--timer < 0) {
            clearInterval(interval);
            timerTextElement.textContent = "Time's up!";
        }
    }, 1000);

}
