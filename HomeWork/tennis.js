const app = document.querySelector('#app');

let ballY = 90;
let ballX = 190;

let isGameOver = true;

const table = document.createElement('div');
table.className = 'table';
table.style.width = 400 + 'px';
table.style.height = 200 + 'px';
app.appendChild(table);

let y = 0;

const racquet = document.createElement('div');
racquet.className = 'racquet';
table.appendChild(racquet);

const racquet2 = document.createElement('div');
racquet2.className = 'racquet2';
table.appendChild(racquet2);

const ball = document.createElement('div');
ball.className = 'ball';
table.appendChild(ball);
ball.style.transform = `translate(${ballX}px, ${ballY}px)`;


window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 16:
            racquet.style.top = (y -= 5) + 'px';
            break;
        case 17:
            racquet.style.top = (y += 5) + 'px';
            break;
        case 38:
            racquet2.style.top = (y -= 5) + 'px';
            break;
        case 40:
            racquet2.style.top = (y += 5) + 'px';
            break;
    }
});

let isMovingLeft;
let isMovingRight;



const moveLeft = () => {
    ballY += 0;
    ballX -= 1;
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    if (ballX <= 0) {
        window.cancelAnimationFrame(isMovingLeft);
        isMovingRight = window.requestAnimationFrame(moveRight);
    }
    isMovingLeft = window.requestAnimationFrame(moveLeft);
}


const moveRight = () => {
    ballY += 0;
    ballX += 1;
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    if (ballX >= 380) {
        window.cancelAnimationFrame(isMovingRight);
        isMovingLeft = window.requestAnimationFrame(moveLeft);
    }
    isMovingRight = window.requestAnimationFrame(moveRight);
}



const start = () => {
    isGameOver = false;
    isMovingRight = window.requestAnimationFrame(moveRight);
}
start()