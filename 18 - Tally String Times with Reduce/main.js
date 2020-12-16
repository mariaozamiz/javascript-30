'use strict';

const timeNodes = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodes
    .map((node) => node.dataset.time)
    .map((timeCode) => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return mins * 60 + secs;
    });

const totalSeconds = seconds.reduce((total, seconds) => total + seconds);

let secondsLeft = totalSeconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`Total video time is ${hours}:${mins}:${secondsLeft}`);
