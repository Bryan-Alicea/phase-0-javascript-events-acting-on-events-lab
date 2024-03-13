//March 12, 2024
const gameArea = document.getElementById('game')
//Gives the location of the dodger ID to the variable
const dodger = document.getElementById('dodger')

//Functions
function getDodgerLeft(){
    const leftDodger = dodger.style.left.replace('px', '')
    return parseInt(leftDodger, 10)
}

function getDodgerBottom(){
    const bottomDodger = dodger.style.bottom.replace('px', '')
    return parseInt(bottomDodger, 10)
}
//Handles the movement of the dodger to the left when the  left key is pressed.
function moveDodgerLeft(){
    
    const left = getDodgerLeft()

    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

//Handles movement of the dodger to the right when the right key is pressed
function moveDodgerRight(){
    const left = getDodgerLeft()
    const dodgerWidth = dodger.clientWidth
    const totalGameArea = gameArea.clientWidth
    
    if(left + dodgerWidth < totalGameArea){
        dodger.style.left = `${left +2}px`
    } else {
        dodger.style.left = `${totalGameArea - dodgerWidth}px`
    }

}

//Handles movement of the dodger going up when the up key is pressed
function moveDodgerUp(){
    const bottom = getDodgerBottom()
    const dodgerHeight = dodger.clientHeight
    
    if(bottom + dodgerHeight < gameArea.clientHeight){
        dodger.style.bottom = `${bottom + 2}px`
    } else {
        dodger.style.bottom = `${bottom}px`
    }
}

//Handles movement of the dodger when the key down is pressed
function moveDodgerDown(){
    const bottom = getDodgerBottom()

    if(bottom > 0){
        dodger.style.bottom = `${bottom - 2}px`
    }
}

//Event Listener

document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
        moveDodgerLeft()
    }
    else if(event.key === "ArrowRight"){
        moveDodgerRight()
    }
    else if(event.key === "ArrowUp"){
        moveDodgerUp()
    } 
    else if(event.key === "ArrowDown"){
        moveDodgerDown()
    }
})


