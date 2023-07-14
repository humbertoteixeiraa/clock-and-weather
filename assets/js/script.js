//SELECTORS
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//FUNCTIONS
function updateClock() {
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();
    
    /* Updates the digital clock time. */
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

function fixZero(time) {
    if(time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}/* Includes a '0' before the hours, minutes and seconds. */

//METHODS
setInterval(updateClock, 1000);
