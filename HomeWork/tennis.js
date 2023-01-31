const app = document.querySelector('#app');

let isGameOver = true;
let ballX = 190;
let ballY = 95;

const table = document.createElement('div');
table.className = 'table';
table.style.width = 400 + 'px';
table.style.height = 200 + 'px';
app.appendChild(table);

let y = 0;

const racquet = document.createElement('div');
racquet.className = 'racquet';
racquet.style.top = 10 + 'px';
table.appendChild(racquet);

const racquet2 = document.createElement('div');
racquet2.className = 'racquet2';
racquet2.style.top = 10 + 'px';
table.appendChild(racquet2);

const ball = document.createElement('div');
ball.className = 'ball';
table.appendChild(ball);
ball.style.left = ballX + 'px';
ball.style.top = ballY + 'px';



window.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 16:
            racquet.style.top = y + 'px';
            y -= 5;
            if (racquet.offsetTop <= 5) {
                racquet.style.top = y + 'px';
                y += 5;
            }
            break;
        case 17:
            racquet.style.top = y + 'px';
            y += 5;
            if (racquet.offsetTop >= 130) {
                racquet.style.top = y + 'px';
                y -= 5;
            }
            break;

        case 38:
            racquet2.style.top = y + 'px';
            y -= 5;
            if (racquet2.offsetTop <= 5) {
                racquet2.style.top = y + 'px';
                y += 5;
            }
            break;
        case 40:
            racquet2.style.top = y + 'px';
            y += 5;
            if (racquet2.offsetTop >= 130) {
                racquet2.style.top = y + 'px';
                y -= 5;
            }
            break;
    }
});



const moveLeft = () => {
    clearInterval(moveRight)
    const ball = document.querySelector('.ball');
    ball.style.left = ballX + 'px';
    ballX -= 2;
    if (ballX <= 5) {
        setInterval(moveRight,30);
    }
}

const moveRight = () => {
    clearInterval(moveLeft)
    const ball = document.querySelector('.ball');
    ball.style.left = ballX + 'px';
    ballX += 2;
    if(ballX >= 380) {
        setInterval(moveLeft,30)
    }
}


const start = () => {
    isGameOver = false;
    setInterval(moveLeft, 30);
}
start()




// const moveLeft = () => {
//         ballY += 0;
//         ballX -= 1;
//         ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
//         if (ballX <= 10) {
//             window.cancelAnimationFrame(isMovingLeft);
//             isMovingRight = window.requestAnimationFrame(moveRight);
//         }
//         isMovingLeft = window.requestAnimationFrame(moveLeft);
//     }


//     const moveRight = () => {
//         ballY += 0;
//         ballX += 1;
//         ball.style.transform = `translate(${ballX}px, ${ballY}px)`;
//         if (ballX >= 390) {
//             window.cancelAnimationFrame(isMovingRight);
//             isMovingLeft = window.requestAnimationFrame(moveLeft);
//         }
//         isMovingRight = window.requestAnimationFrame(moveRight);
//     }