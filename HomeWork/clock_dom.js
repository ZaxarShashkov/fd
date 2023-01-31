const app = document.querySelector('#app');

const createClock = () => {

    // Создаем циферблат 
    const clock = document.createElement('div');
    clock.className = 'clock';
    app.appendChild(clock);

    const height = clock.offsetHeight;
    const width = clock.offsetWidth;

    console.log(width)
    console.log(height)
    let deg = 30;

    // Создаем циферблат 
    for (let i = 1; i <= 12; i++) {
        const blockNumbers = document.createElement('div');
        blockNumbers.className = 'block_numbers';
        clock.appendChild(blockNumbers);
        blockNumbers.style.cssText = `transform: rotate(${deg}deg)`;
        blockNumbers.style.left = width - 215 + 'px';
        blockNumbers.style.top = height - 390+ 'px'
        blockNumbers.style.WebkitTransformOrigin = (width / 20 - 3) + 'px' + " " + (width / 2 - 10) + 'px';
        deg += 30;
    }




}

createClock();