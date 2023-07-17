/* CLOCK */

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
setInterval(updateClock, 1);
updateClock();





/* WEATHER */

//SELECTORS
document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#searchInput').value;

    if(input !== '') {
        showWarning('Loading ...')

        /* Storing the API URL in a variable */
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=225247e0d43270b6830bc9eaac63fa73&units=metric&lang=pt_br`;

        /* Making the request with the fetch() function and storing the result in the variable */
        let results = await fetch(url);

        /* Converting the result to JSON format */
        let json = await results.json();

        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                
            })

        } else {
            showWarning('Location not found!')
        }

        console.log(json.main.temp);
    }
})

//FUNCTIONS
function showInfo(json) {

}

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
}

//METHODS
