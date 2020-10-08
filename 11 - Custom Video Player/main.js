'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeRange = document.querySelector(`input[name='volume']`);
const playbackRate = document.querySelector(`input[name='playbackRate']`);
const rewindButton = document.querySelector(`button[data-skip='-10']`);
const forwardButton = document.querySelector(`button[data-skip='25']`);

function progressHandler() {
    console.log('change en progress');
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

function skipHandler() {
    video.currentTime += parseInt(this.dataset.skip);
}

video.addEventListener('click', playHandler);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
playButton.addEventListener('click', playHandler);
volumeRange.addEventListener('change', volumeHandler);
playbackRate.addEventListener('change', playbackHandler);
rewindButton.addEventListener('click', skipHandler);
forwardButton.addEventListener('click', skipHandler);
