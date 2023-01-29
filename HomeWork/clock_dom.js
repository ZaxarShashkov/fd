const app = document.querySelector('#app');

const createClock = () => {

    // Создаем циферблат 
    const clock = document.createElement('div');
    clock.className = 'clock';
    app.appendChild(clock);

    const height = clock.offsetHeight;
    console.log(height)

    // Создаем циферблат 
    for (let i = 1; i <= 12; i++) {
        const blockNumbers = document.createElement('div');
        blockNumbers.className = 'block_numbers';
        clock.appendChild(blockNumbers);
        blockNumbers.style.left = height/2 - 25 + 'px';
    }


    

}

createClock();