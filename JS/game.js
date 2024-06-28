/* -------------------------------- CONSTANT -------------------------------- */

const canvas = document.getElementById("gameArea");
const ctx = gameArea.getContext("2d");
let dx = 10;
let dy = 0;
let changingDirection = false;
let snakeParts = [
    {x:200, y:100},
    {x:190, y:100},
    {x:180, y:100},
    {x:170, y:100},
    {x:160, y:100},
    {x:150, y:100},
    {x:140, y:100},
];
let score = 0;
let hiscore = 0;
let gameRunning = false;
let tickSpeed = 60;

/* -------------------------------- FUNCTIONS ------------------------------- */

// Apple Randomizer
function randomApple (min, max) {
    return Math.round((Math.random() * ((max-min)+min) / 10) * 10); 
};

// Make Apple---------
function makeApple () {
    apple_x = randomApple(0, (canvas.width - 10)/10)*10;
    apple_y = randomApple(0, (canvas.height - 10)/10)*10;
    snakeParts.forEach((eatingApple) => {
        const ateApple = eatingApple.x === apple_x && eatingApple.y === apple_y;
        if (ateApple) 
            {makeApple();}
    });
};

function drawApple (){
ctx.fillStyle = `rgb(219, 33, 0)`;
ctx.strokeStyle = `rgb(219, 33, 0)`;
ctx.fillRect(apple_x, apple_y , 10, 10);
ctx.strokeRect(apple_x, apple_y, 10, 10);
};

// Clear Snake ------------------
function clearGameArea () {
    ctx.fillStyle = `rgb(73, 99, 33)`;
    ctx.strokeStyle = `rgb(106, 134, 45)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() {
    snakeParts.forEach(drawSnakeBody);
}

function drawSnakeBody (snakeBody) {
    ctx.fillStyle = `rgb(149, 220, 1)`;
    ctx.strokeStyle = `rgb(0, 60, 0)`;
    ctx.fillRect(snakeBody.x, snakeBody.y, 10, 10);
    ctx.strokeRect(snakeBody.x, snakeBody.y, 10, 10);
}
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
    for (let i = 1; i < snakeParts.length; i++) {
        const selfIntersect =
        snakeParts[0].x === snakeParts[i].x && 
        snakeParts[0].y === snakeParts[i].y
        if (selfIntersect) {
            displayGameOver();
            return true;
            gameRunning === false;
            console.log(gameRunning)
        }
    };

    if ((snakeParts[0].x > canvas.width)
        || (snakeParts[0].x < 0)
        || (snakeParts[0].y > canvas.height - 10)
        || (snakeParts[0].y < 0)
        || (snakeParts[0].x > canvas.width - 10)) {
            displayGameOver();
        // console.log('lost');
        return true;
        gameRunning === false;
    }
    updateHiScore();
}

/* ----------------------------- EVENT LISTENERS ---------------------------- */

// Direction inputs ---------
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
};

// Scoreboard --------------------
const hiScoreEl = document.querySelector('#hiscore');
const scoreboardEl = document.querySelector('#scoreboard');

function increaseSpeed () {
    if (score % 5 === 0) {
       (tickSpeed = tickSpeed * (0.93));
    };
}

// Snake Movement --------------------------
function snakeMovement () {
    const snakeHead = {x: snakeParts[0].x + dx, y: snakeParts[0].y + dy};
    snakeParts.unshift(snakeHead);
    const ateApple = snakeParts[0].x === apple_x && snakeParts[0].y === apple_y;
    const updateScore = () => {
    if (ateApple) {
        score += 7
        scoreboardEl.textContent = `score: ${score}`
    }
}
    if (ateApple) {
        makeApple();
        updateScore();
        increaseSpeed();
         } else {
    snakeParts.pop();}
}

// MAIN FUNCTIONS ----------------------------
function preGame () {
    clearGameArea();
    makeApple();
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
    }, tickSpeed)
}

function newGame () {
    dx = 10;
    dy = 0;
    snakeParts = [
        {x:200, y:100},
        {x:190, y:100},
        {x:180, y:100},
        {x:170, y:100},
        {x:160, y:100},
        {x:150, y:100},
        {x:140, y:100},
    ];
    score = 0;
    scoreboardEl.textContent = 'score: ' + score;
    makeApple();
    init();
}

// Start Game Function
const newGameEl = document.getElementById('newGame');
newGameEl.addEventListener('click', newGame);