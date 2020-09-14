'use strict';

const spacingRange = document.getElementById('spacing');
const blurRange = document.getElementById('blur');
const colorBox = document.getElementById('base');

function handleSpacing(ev) {
    console.log('leo el spacing');
    const newSpacing = spacingRange.value;
    console.log(newSpacing);
}

function handleBlur(ev) {
    console.log('leo el blur');
    const newBlur = blurRange.value;
    console.log(newBlur);
}

function handleColor(ev) {
    console.log('leo el color');
}

function changeColor(ev) {
    console.log('cambio el color');
    const newColor = colorBox.value;
    console.log(newColor);
}

console.log(document.styleSheets);

spacingRange.addEventListener('change', handleSpacing);
blurRange.addEventListener('change', handleBlur);
colorBox.addEventListener('click', handleColor);
colorBox.addEventListener('input', changeColor);
