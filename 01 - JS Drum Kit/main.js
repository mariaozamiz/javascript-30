'use strict';

const keyDivs = document.querySelectorAll('.key');
const soundElements = document.querySelectorAll('audio');

function handleClick(ev) {
    popUp();
    playSound();
}

function popUp() {
    event.currentTarget.classList.add('playing');
}

function playSound() {
    console.log(event.currentTarget.dataset.key);
}

for (const key of keyDivs) {
    key.addEventListener('click', handleClick);
}
