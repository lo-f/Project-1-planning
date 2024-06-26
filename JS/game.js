/* -------------------------------- CONSTANT -------------------------------- */

const canvas = document.getElementById("gameArea")
const ctx = gameArea.getContext("2d");
let dx = 10;
let dy = 0;
let changingDirection = false;
let isAlive = false;

/* ----------------------------- STATE VARIABLE ----------------------------- */



/* -------------------------------- FUNCTIONS ------------------------------- */

// Apple Randomizer
function  randomApple (min, max) {
    return Math.round((Math.random() * ((max-min)+min) / 10) * 10); 
}

// Draw Apple---------
function drawApple () {
    // let apple_x= 590
    // let apple_y=390
    apple_x = randomApple(0, 59.1)*10;
    apple_y = randomApple(0, 39.1)*10;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    ctx.fillRect(apple_x, apple_y , 10, 10);
    ctx.strokeRect(apple_x, apple_y, 10, 10);
    // ctx.fillRect(0, 0 , 10, 10);
    // ctx.strokeRect(0, 0, 10, 10);
    console.log(apple_x, apple_y);
}
// drawApple ();

// Clear Snake ------------------
function clearGameArea () {
    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'green';
    ctx.fillRect(0, 0, 600, 400);
    ctx.strokeRect(0, 0, 600, 400);
}


// Draw Snake------------
let snake = [
    {x:300, y:200},
    {x:290, y:200},
    {x:280, y:200},
    {x:270, y:200},
    {x:260, y:200},
    {x:250, y:200},
    {x:240, y:200},
]

function drawSnake() {
    snake.forEach(drawSnakeBody);
}

function drawSnakeBody (snakeBody) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.fillRect(snakeBody.x, snakeBody.y, 10, 10);
    ctx.strokeRect(snakeBody.x, snakeBody.y, 10, 10);
    // ctx.fillRect(300, 200, 1, -100);
    // ctx.strokeRect(300, 200, 1, 1);
}
drawSnake()

// WINNING AND LOSING--------------------------------------
function checkIntersect () {
    for (let i = 1; i < snake.length; i++) {
        const selfIntersect =
        snake[0].x === snake[i].x && 
        snake[0].y === snake[i].y
        if (selfIntersect) {
            return true
        }
    };

    if ((snake[0].x > canvas.width)
        || (snake[0].x < 0)
        || (snake[0].y > canvas.height - 10)
        || (snake[0].y < 0)
        || (snake[0].x > canvas.width - 10)) {
       return
    }
}




/* ----------------------------- CACHED ELEMENTS ---------------------------- */



/* ----------------------------- EVENT LISTENERS ---------------------------- */

// Direction inputs
document.addEventListener("keydown", changeDirection);
function changeDirection (e) {
    const keypressed = e.keyCode;
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;
    const goLeft = dx === (-10);
    const goUp = dy === (-10);
    const goRight = dx === (10);
    const goDown = dy === (10);
    if (changingDirection) return;
    changingDirection = true;
    if (keypressed === left && !goRight) {
        dx = (-10);
        dy = 0;
    };
    if (keypressed === up && !goDown) {
        dx = 0;
        dy = (-10);
    };
    if (keypressed === right && !goLeft) {
        dx = 10;
        dy = 0;
    };
    if (keypressed === down && !goUp) {
        dx = 0;
        dy = 10;
    };
    
    // console.log(e)
}


// Snake Movement --------------------------

function snakeMovement () {
    const snakeHead = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(snakeHead);
    snake.pop();
}



function init () {
    setTimeout(function onMilli() {
        // drawApple();
        lost = false;
        isAlive = true;
        changingDirection = false;
        clearGameArea();
        snakeMovement();
        drawSnake();
        checkIntersect();
        init();
    }, 100)
}


init();


// snakeMovement()
// drawSnake()

// snakeMovement();
// // drawSnake();;