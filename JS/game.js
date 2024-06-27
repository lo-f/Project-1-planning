/* -------------------------------- CONSTANT -------------------------------- */

const canvas = document.getElementById("gameArea")
const ctx = gameArea.getContext("2d");
let dx = 10;
let dy = 0;
let changingDirection = false;
let snake = [
    {x:300, y:200},
    {x:290, y:200},
    {x:280, y:200},
    {x:270, y:200},
    {x:260, y:200},
    {x:250, y:200},
    {x:240, y:200},
]
let score = 0;
let hiscore = 0;
let gameRunning = false;

/* ----------------------------- STATE VARIABLE ----------------------------- */



/* -------------------------------- FUNCTIONS ------------------------------- */

// Apple Randomizer
function randomApple (min, max) {
    return Math.round((Math.random() * ((max-min)+min) / 10) * 10); 
}

// Make Apple---------
function makeApple () {
    apple_x = randomApple(0, (canvas.width - 10)/10)*10;
    apple_y = randomApple(0, (canvas.height - 10)/10)*10;
    snake.forEach((eatingApple) => {
        const ateApple = eatingApple.x === apple_x && eatingApple.y === apple_y;
        if (ateApple) 
            {makeApple();}
    });
    console.log(apple_x, apple_y);
}
makeApple();
// let apple_x= 590
// let apple_y=390
// ctx.fillRect(0, 0 , 10, 10);
// ctx.strokeRect(0, 0, 10, 10);


function drawApple (){
ctx.fillStyle = `rgb(219, 33, 0)`;
ctx.strokeStyle = `rgb(219, 33, 0)`;
ctx.fillRect(apple_x, apple_y , 10, 10);
ctx.strokeRect(apple_x, apple_y, 10, 10);
};

// Clear Snake ------------------
function clearGameArea () {
    ctx.fillStyle = `rgb(106, 134, 45)`;
    ctx.strokeStyle = `rgb(106, 134, 45)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    // console.log('cleared')
}


function drawSnake() {
    snake.forEach(drawSnakeBody);
}

function drawSnakeBody (snakeBody) {
    ctx.fillStyle = `rgb(149, 220, 1)`;
    ctx.strokeStyle = `rgb(0, 60, 0)`;
    ctx.fillRect(snakeBody.x, snakeBody.y, 10, 10);
    ctx.strokeRect(snakeBody.x, snakeBody.y, 10, 10);
    // ctx.fillRect(300, 200, 1, -100);
    // ctx.strokeRect(300, 200, 1, 1);
}
// drawSnake()

// WINNING AND LOSING--------------------------------------
function displayGameOver () {
    ctx.font = `60px Coiny` ;
    ctx.textAlign = 'center'
    ctx.fillStyle = `rgb(245, 90, 62)`;
    ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2);
}

function updateHiScore () {
    if (score > hiscore) 
        {
            hiscore = score;
            hiScoreEl.textContent = `high score: ${hiscore}`;
        }
    return updateHiScore;
}

function checkIntersect () {
    for (let i = 1; i < snake.length; i++) {
        const selfIntersect =
        snake[0].x === snake[i].x && 
        snake[0].y === snake[i].y
        if (selfIntersect) {
            displayGameOver();
            return true;
            gameRunning === false;
            console.log(gameRunning)
        }
    };

    if ((snake[0].x > canvas.width)
        || (snake[0].x < 0)
        || (snake[0].y > canvas.height - 10)
        || (snake[0].y < 0)
        || (snake[0].x > canvas.width - 10)) {
            displayGameOver();
        // console.log('lost');
        return true;
        gameRunning === false;
    }
    updateHiScore();
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
// Scoreboard --------------------
const hiScoreEl = document.querySelector('#hiscore');
const scoreboardEl = document.querySelector('#scoreboard');

// Snake Movement --------------------------
function snakeMovement () {
    const snakeHead = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(snakeHead);
    const ateApple = snake[0].x === apple_x && snake[0].y === apple_y;
    const updateScore = () => {
    if (ateApple) {
        score += 7
        scoreboardEl.textContent = `score: ${score}`
    }
}
    if (ateApple) {
        makeApple();
        updateScore();
        console.log(score)
    } else {
    snake.pop();}
}



function preGame () {
    clearGameArea();
    drawSnake();
}
preGame();

function init () {
    if (checkIntersect()) return;
    changingDirection = false;
    setTimeout(function onMilli() {
        clearGameArea();
        drawApple();
        snakeMovement();
        drawSnake();
        init();
    }, 75)
}
// init();

function newGame () {
    dx = 10;
    dy = 0;
    snake = [
    {x:300, y:200},
    {x:290, y:200},
    {x:280, y:200},
    {x:270, y:200},
    {x:260, y:200},
    {x:250, y:200},
    {x:240, y:200},
];
    score = 0;
    scoreboardEl.textContent = 'score: ' + score;
    makeApple();
    init();
}


// Start Game Function
const newGameEl = document.getElementById('newGame');
newGameEl.addEventListener('click', newGame);





// snakeMovement()
// drawSnake()

// snakeMovement();
// // drawSnake();;