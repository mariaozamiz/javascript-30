'use strict';

const spacingRange = document.getElementById('spacing');
const blurRange = document.getElementById('blur');
const colorBox = document.getElementById('base');

function handleSpacing() {
    const newSpacing = spacingRange.value;
    document.documentElement.style.setProperty(`--spacing`, `${newSpacing}px`);
}

function handleBlur() {
    const newBlur = blurRange.value;
    document.documentElement.style.setProperty(`--blur`, `${newBlur}px`);
}

function changeColor() {
    const newColor = colorBox.value;
    document.documentElement.style.setProperty(`--base`, newColor);
}

spacingRange.addEventListener('change', handleSpacing);
blurRange.addEventListener('change', handleBlur);
colorBox.addEventListener('input', changeColor);
