'use strict';

const endpoint =
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let results = [];
let searchResults = [];

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => (results = data));

const inputField = document.querySelector('.search');
inputField.addEventListener('keyup', findResults);

function findResults() {
    const search = inputField.value;
    searchResults = results.filter((place) => {
        return place.city.includes(search) || place.state.includes(search);
    });
    console.log(searchResults);
    showResults();
}

function showResults() {
    const resultsList = document.querySelector('.suggestions');
    resultsList.innerHTML = '';
    for (const place of searchResults) {
        const newLi = document.createElement('li');
        resultsList.appendChild(newLi);
        newLi.innerHTML = `${place.city}, ${place.state}`;
    }
}
