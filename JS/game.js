/* -------------------------------- CONSTANT -------------------------------- */

const canvas = document.getElementById("gameArea")
const ctx = gameArea.getContext("2d")
ctx.lineWidth = 20;

/* ----------------------------- STATE VARIABLE ----------------------------- */



/* -------------------------------- FUNCTIONS ------------------------------- */

// Draw Apple---------
function drawApple () {
    let apple_x;
    let apple_y;
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'red';
    ctx.fillRect(apple_x, apple_y, 100, 100);
    ctx.strokeRect(apple_x, apple_y, 100, 100);
}

drawApple ();



console.dir(drawApple)
/* ----------------------------- CACHED ELEMENTS ---------------------------- */



/* ----------------------------- EVENT LISTENERS ---------------------------- */
