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

    /* Updates the analog clock time. */
    let sDeg = ((360/60) * second) - 90;
    let mDeg = ((360/60) * minute) - 90;
    let hDeg = ((360/12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

/* Includes a '0' before the hours, minutes and seconds. */
function fixZero(time) {
    if(time < 10) {
        return '0' + time;
    } else {
        return time;
    }
}

//METHODS
setInterval(updateClock, 1000);
updateClock();