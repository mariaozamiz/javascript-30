'use strict';

const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    const speedBarY = e.pageY - this.offsetTop;
    const percent = speedBarY / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const speedBarHeight = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = speedBarHeight;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
