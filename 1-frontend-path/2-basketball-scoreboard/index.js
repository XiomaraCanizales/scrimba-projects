let homeScoreTxt = document.getElementById("home-score")
let homeScore = 0

let guestScoreTxt = document.getElementById("guest-score")
let guestScore = 0

// Home Points
function add1ptnH() {
    homeScore += 1
    homeScoreTxt.textContent = homeScore
}

function add2ptnH() {
    homeScore += 2
    homeScoreTxt.textContent = homeScore
}

function add3ptnH() {
    homeScore += 3
    homeScoreTxt.textContent = homeScore
}

// Guest Points
function add1ptnG() {
    guestScore += 1
    guestScoreTxt.textContent = guestScore
}

function add2ptnG() {
    guestScore += 2
    guestScoreTxt.textContent = guestScore
}

function add3ptnG() {
    guestScore += 3
    guestScoreTxt.textContent = guestScore
}

// Reset Game
function reset() {
    homeScore = 0
    guestScore = 0

    homeScoreTxt.textContent = homeScore
    guestScoreTxt.textContent = guestScore
}