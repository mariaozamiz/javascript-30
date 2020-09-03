'use strict';

function handleKeys(ev) {
    playSound(ev);
    HighlightDiv(ev);
}

function playSound(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function HighlightDiv(ev) {
    const key = document.querySelector(`div[data-key="${ev.keyCode}"]`);
    key.classList.add('playing');
    const keys = document.querySelectorAll('.key');
    keys.forEach((key) =>
        key.addEventListener('transitionend', removeTransition)
    );
}

function removeTransition(ev) {
    if (ev.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', handleKeys);
