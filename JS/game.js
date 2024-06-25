/* -------------------------------- CONSTANT -------------------------------- */

const canvas = document.getElementById("gameArea")
const ctx = gameArea.getContext("2d");
ctx.lineWidth = 10;

/* ----------------------------- STATE VARIABLE ----------------------------- */



/* -------------------------------- FUNCTIONS ------------------------------- */

// Draw Apple---------
function drawApple () {
    let apple_x;
    let apple_y;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    // ctx.fillRect(apple_x, apple_y , 10, 10);
    // ctx.strokeRect(apple_x, apple_y, 10, 10);
    ctx.fillRect(0, 0 , 10, 10);
    ctx.strokeRect(0, 0, 10, 10);
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

function drawSnake() {
    snake.forEach(drawSnakeBody);
}

function drawSnakeBody (snakeBody) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'black';
    ctx.fillRect(snakeBody.x, snakeBody.y, 5, 5);
    ctx.strokeRect(snakeBody.x, snakeBody.y, 5, 5);
    // ctx.fillRect(300, 200, 1, -100);
    // ctx.strokeRect(300, 200, 1, 1);
}

drawSnake()


/* ----------------------------- CACHED ELEMENTS ---------------------------- */



/* ----------------------------- EVENT LISTENERS ---------------------------- */
