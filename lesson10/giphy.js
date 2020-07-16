'use strict';

const API_KEY = MY_API_KEY;
const endpoint = 'https://api.giphy.com/v1/gifs/search';
let cache = {};


let func = throttle(search, 500);
document.getElementById('search').addEventListener('input', function (e) {
  func(e.target.value);
});

async function search(query) {
  if (!cache.hasOwnProperty(query)) {
    let response = await fetch(`${endpoint}?q=${query}&key=${API_KEY}`);

    if (response.ok) {
      let result = await response.json();
      cache[query] = result.data;
    } else {
      throw new Error('invalid response');
    }
  }

  showResult(cache[query], '#result');
}

function showResult(data, target) {

  let resultTarget = document.querySelector(target);
  resultTarget.innerHTML = '';

  for (let key in data) {
    resultTarget.append(data[key].url);
  }
}

function throttle(f, t) {

  let lastCall = null;

  return function (args) {
    let previousCall = lastCall;
    lastCall = Date.now();
    if (previousCall === null
        || (lastCall - previousCall) > t) {
      f(args);
    }
  }
}
