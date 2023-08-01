// Your code here
const blackArea = document.getElementById("game");
const dodger = document.getElementById('dodger');

function getDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    return parseInt(leftNumbers, 10);
}

function moveDodgerLeft() {
    const left = getDodgerLeft();

    if (left > 0) {
        dodger.style.left = `${left - 2}px`;
    }
}

function moveDodgerRight() {
    const left = getDodgerLeft();
    const dodgerWidth = dodger.clientWidth;
    const blackAreaRightBoundary = blackArea.clientWidth;

    if (left + dodgerWidth < blackAreaRightBoundary) {
        dodger.style.left = `${left + 2}px`;
    } else {
        dodger.style.left = `${blackAreaRightBoundary - dodgerWidth}px`;
    }
}

function getDodgerBottom() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    return parseInt(bottomNumbers, 10);
}

function moveDodgerUp() {
    const bottom = getDodgerBottom();
    const dodgerHeight = dodger.clientHeight;

    if (bottom + dodgerHeight < blackArea.clientHeight) {
        dodger.style.bottom = `${bottom + 2}px`;
    } else {
        dodger.style.bottom = `${bottom}px`;
    }
}

function moveDodgerDown() {
    const bottom = getDodgerBottom();

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 2}px`;
    }
}


document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
    else if (event.key === "ArrowUp") {
        moveDodgerUp();
    }
    else if (event.key === "ArrowDown") {
        moveDodgerDown();
    }
});



