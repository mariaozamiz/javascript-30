'use strict';

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const playButton = document.querySelector('.player__button');
const volumeRange = document.querySelector(`input[name='volume']`);
const playbackRate = document.querySelector(`input[name='playbackRate']`);
const rewind10Button = document.querySelector(`button[data-skip='-10']`);
const forward25Button = document.querySelector(`button[data-skip='25']`);

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
    console.log('change en volume');
}

function playbackHandler() {
    console.log('change en playback');
}

function rewind10Handler() {
    console.log('click en rewind');
}

function forward25Handler() {
    console.log('click en forward');
}

video.addEventListener('click', playHandler);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
playButton.addEventListener('click', playHandler);
volumeRange.addEventListener('change', volumeHandler);
playbackRate.addEventListener('change', playbackHandler);
rewind10Button.addEventListener('click', rewind10Handler);
forward25Button.addEventListener('click', forward25Handler);
