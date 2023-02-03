const app = document.querySelector('#app');
const date = new Date();
console.log(date);

// Создаем циферблат 
const clock = document.createElement('div');
clock.className = 'clock';
app.appendChild(clock);

const height = clock.offsetHeight;
const width = clock.offsetWidth;
const center = clock.offsetHeight / 2;

const hoursArrow = document.createElement('div');
hoursArrow.className = 'hours_arrow';
hoursArrow.style.top = 100 + 'px';
hoursArrow.style.left = center + 'px';
clock.appendChild(hoursArrow);

const minutesArrow = document.createElement('div');
minutesArrow.className = 'minutes_arrow';
minutesArrow.style.top = 85 + 'px';
minutesArrow.style.left = center + 'px';
clock.appendChild(minutesArrow);

const secondsArrow = document.createElement('div');
secondsArrow.className = 'seconds_arrow';
secondsArrow.style.top = 70 + 'px';
secondsArrow.style.left = 200 + 'px';
clock.appendChild(secondsArrow);

let deg = 30;

// Создаем циферблат 
for (let i = 1; i <= 12; i++) {
    const blockNumbers = document.createElement('div');
    const numbers = document.createElement('p')
    blockNumbers.appendChild(numbers);
    numbers.className = 'number';
    numbers.textContent = i;
    blockNumbers.className = 'block_numbers';
    clock.appendChild(blockNumbers);
    blockNumbers.style.cssText = `transform: rotate(${deg}deg)`;
    blockNumbers.style.left = width - 215 + 'px';
    blockNumbers.style.top = height - 410 + 'px';
    blockNumbers.style.WebkitTransformOrigin = (width / 20 - 7) + 'px' + " " + (width / 2 + 10) + 'px';
    deg += 30;
}

let secondsDeg = 6 * date.getSeconds();
let minutesDeg = 6 * (date.getMinutes() + (1 / 60) * date.getSeconds());
console.log(secondsDeg)
console.log(minutesDeg)

const startClock = () => {
    secondsArrow.style.transform = `rotate(${secondsDeg += 6}deg)`;
    minutesArrow.style.transform = `rotate(${minutesDeg += 6 / 60}deg)`
}
setInterval(startClock, 1000);

