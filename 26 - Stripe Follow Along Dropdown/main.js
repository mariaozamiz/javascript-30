'use strict';

const nav = document.querySelector('.top');
const triggers = document.querySelectorAll('.cool > li');
const dropdownBackground = document.querySelector('.dropdownBackground');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active');
        }
    }, 150);
    dropdownBackground.classList.add('open');
    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
    };
    dropdownBackground.style.setProperty('width', `${coords.width}px`);
    dropdownBackground.style.setProperty('height', `${coords.height}px`);
    dropdownBackground.style.setProperty(
        'transform',
        `translate(${coords.left}px, ${coords.top}px`
    );
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    dropdownBackground.classList.remove('open');
}

triggers.forEach((trigger) =>
    trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
    trigger.addEventListener('mouseleave', handleLeave)
);
