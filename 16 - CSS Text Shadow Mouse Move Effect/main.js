'use strict';

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const width = hero.offsetWidth;
const height = hero.offsetHeight;
const walk = 200;

function moveShadow(e) {
    let x = e.offsetX;
    let y = e.offsetY;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 purple, ${yWalk}px ${xWalk}px 0 pink, ${
        yWalk * -1
    }px ${xWalk}px 0 navy, ${xWalk * -1}px ${yWalk}px 0 blue`;
}

hero.addEventListener('mousemove', moveShadow);
