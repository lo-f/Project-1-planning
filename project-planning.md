# Planning Materials

## GitHub Repository
> Link to your project's GitHub repository here: <br>
https://github.com/lo-f/project-1-planning.git

## Your choice of game:
> Using the [recommended games list](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/browser-based-game-project/recommended-games/) let us know what game you have selected.

### **Snake game 🐍**

## User Stories
> Add multiple user stories below following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format:

- as a user, I'd like to see a pre-game screen before beginning gameplay with instructions to press any direction key to start game play. The pre-game screen will also display the current session's high score, even before gameplay
- as a user, I'd like to start the game by pressing a directional key and having the snake move in that direction
- as a user, I'd like the snake to respond accordingly when I press a direction key on my keyboard by moving in the respective direction pressed
- as a user, I'd like the apple to move to a new position after obtaining it
- as a user I'd like to see a display of my current score and the current session's high score

## Pseudocode for the overall gameplay:
> This pseudocode does not need to go into exhaustive detail but should demonstrate that you understand some of the unique challenges you will encounter while building your game.

### CONSTANTS
- isAlive
- snakeLength
- board
- appleCount
- score
- winner

### STATE VARIABLES
> isAlive state to check if snake is still alive
>> check isAlive
    >>> - if isAlive is true, game is still active
    >>> - after 10 apples (levels) while isAlive = true, the player will win
    >>> - if isAlive is false, game is over and player lost

> snakeLength to keep track of the snake's length

> appleCount will track n apples for high score and snake length

### FUNCTIONS
- checkWin to check if snake has eaten 10 apples
> IF appleCount <10 THANDEN isAlive is true THEN winner is false
- function to update snake direction
>- if 'up' keydown THEN snake moves up
>- if 'down' keydown THEN snake moves down
>- if 'left' keydown THEN snake moves left
>- if 'right' keydown THEN snake moves right
- placeApple to updateBoard with new apple position
- updateScore to update score board
- checkAlive to check if snake has interesected with self or boarder
- checkLose to check if isAlive is false
> IF isAlive is false THEN game is over
- appleAte to check if snake has eaten an apple
- function to update snake length after eating apple
- function to check isAlive
    - if isAlive is true, game is still active
    - if isAlive is false, game is over
- nextLevel FUNCTION
>- IF isAlive is true and checkWin <10 and appleAte is true THEN render nextLevel (new apple, longer snake)
### CACHED EVENTS
- scoreBoard to display score
- hiScore to display current session highest score

### EVENT LISTENERS
> need a listener for directional press<br>
<br>

> scoreboard element listener<br>

## Anything Else You'd Like Us to Know