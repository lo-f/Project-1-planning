/* -------------------------------- CONSTANT -------------------------------- */

const canvas = document.getElementById("gameArea")
const ctx = gameArea.getContext("2d");

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
drawApple ();

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

let snakeHead = snake[0];

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

/* ----------------------------- CACHED ELEMENTS ---------------------------- */



/* ----------------------------- EVENT LISTENERS ---------------------------- */





// Snake Movement --------------------------

function snakeMovement () {
    const snakeHead = {x: snake[0].x, y: snake[0].y}
}

// snakeMovement();
// // drawSnake();;