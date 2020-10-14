'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progressBar = document.querySelector('.progress');
const progressBarFilled = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeRange = document.querySelector(`input[name='volume']`);
const playbackRate = document.querySelector(`input[name='playbackRate']`);
const skipButton = document.querySelectorAll(`button[data-skip]`);
let mousedown;

function progressUpdate() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBarFilled.style.flexBasis = `${percent}%`;
}

function progressBarHandler(ev) {
    const progressTime =
        (ev.offsetX / progressBar.offsetWidth) * video.duration;
    video.currentTime = progressTime;
}

function playHandler() {
    video.paused ? video.play() : video.pause();

    //const method = video.paused? 'play' : 'pause';
    // video[method]();
}

function togglePlayButton() {
    playButton.innerHTML === '►'
        ? (playButton.innerHTML = '❚❚')
        : (playButton.innerHTML = '►');
}

function volumeHandler() {
    video.volume = this.value;
}

function playbackHandler() {
    video.playbackRate = this.value;
}

function skipHandler(ev) {
    video.currentTime += parseInt(this.dataset.skip);
}

video.addEventListener('click', playHandler);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
video.addEventListener('timeupdate', progressUpdate);

progressBar.addEventListener('click', progressBarHandler);
progressBar.addEventListener(
    'mousemove',
    (e) => mousedown && progressBarHandler(e)
);
progressBar.addEventListener('mousedown', () => (mousedown = true));
progressBar.addEventListener('mouseup', () => (mousedown = false));
playButton.addEventListener('click', playHandler);
volumeRange.addEventListener('change', volumeHandler);
playbackRate.addEventListener('change', playbackHandler);
skipButton.forEach((button) => button.addEventListener('click', skipHandler));
