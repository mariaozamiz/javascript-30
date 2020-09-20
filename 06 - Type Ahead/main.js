'use strict';

const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let results = [];

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => (results = data));

const inputField = document.querySelector('.search');
inputField.addEventListener('keyup', handleKeyUp);

function handleKeyUp() {
    const search = inputField.value;
    //const searchResults = results.find((text) => includes(search));
    console.log(results);
}
