'use strict';

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(secs) {
    // clear previous timers
    clearInterval(countdown);
    const now = Date.now();
    const then = now + secs * 1000;
    displayTimeLeft(secs);
    displayEndTime(then);
    countdown = setInterval(() => {
        const secsLeft = Math.round((then - Date.now()) / 1000);
        if (secsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secsLeft);
    }, 1000);
}

function displayTimeLeft(secs) {
    const mins = Math.floor(secs / 60);
    const remainderSecs = secs % 60;
    const display = `${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const min = end.getMinutes();
    endTime.textContent = `Be Back at ${hour}:${min < 10 ? '0' : ''}${min}`;
}

function startTimer() {
    const secs = parseInt(this.dataset.time);
    timer(secs);
}

buttons.forEach((button) => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});
