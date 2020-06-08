'use strict';
const colorTable = document.getElementsByTagName('table')[0];
const paletteTable = document.getElementsByTagName('table')[1];

colorTable.addEventListener('click', colorClick);
paletteTable.addEventListener('click', colorSelection);
let color = 'red';

/**
 * @param {MouseEvent} event
 */
function colorClick(event) {
    console.log(event.type, event.target);

    if (event.target.tagName !== 'TD')
        return;

    if (event.shiftKey) {
        event.target.style.backgroundColor = 'transparent';
    } else {
        event.target.style.backgroundColor = color;
    }    
}

function colorSelection(event) {
    color = event.target.dataset.code;
}





