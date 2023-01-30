const app = document.querySelector('#app');
let isMovingLeft;
let isMovingBot;

let ballY = 90;
let ballX = 190;




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
})



// transform: translate

const moveLeft = () => {
    const ball = document.querySelector('.ball')
    window.cancelAnimationFrame(moveDown);
    isMovingLeft = true;
    ballY += 0.2;
    ballX -= 0.2;
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    if (ballY >= 180) {
        window.requestAnimationFrame(moveUp);
    }
    window.requestAnimationFrame(moveLeft);
}
window.requestAnimationFrame(moveLeft);

const moveUp = () => {
    window.cancelAnimationFrame(moveLeft)
    ballY -= 0.2;
    ballX -= 0.5;
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    if (ballX <= 0) {
        window.requestAnimationFrame(moveRight)
    }
    window.requestAnimationFrame(moveUp);
}

const moveRight = () => {
    window.cancelAnimationFrame(moveUp);
    ballY -= 0.2;
    ballX += 0.2;
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    if (ballY <= 0) {
        window.requestAnimationFrame(moveDown)
    }
    window.requestAnimationFrame(moveRight);
}

const moveDown = () => {
    window.cancelAnimationFrame(moveRight);
    ballY += 0.2;
    ballX += 0.2;
    ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
    if(ballX >= 400) {
        window.requestAnimationFrame(moveLeft);
    }
    window.requestAnimationFrame(moveDown)
}