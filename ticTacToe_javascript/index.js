
let player = "X";
let isFinish = false;

let one = "";
let two = "";
let three = "";
let four = "";
let five = "";
let six = "";
let seven = "";
let eight = "";
let nine = "";

/* Reset game */
resetGame();

/* Click card */
function clickCard(slot) {

    /* Check if finish */
    if (isFinish) {
        return
    }

    if (slot == 1 && one == "") {
        one = player;
    }
    if (slot == 2 && two == "") {
        two = player;
    }
    if (slot == 3 && three == "") {
        three = player;
    }
    if (slot == 4 && four == "") {
        four = player;
    }
    if (slot == 5 && five == "") {
        five = player;
    }
    if (slot == 6 && six == "") {
        six = player;
    }
    if (slot == 7 && seven == "") {
        seven = player;
    }
    if (slot == 8 && eight == "") {
        eight = player;
    }
    if (slot == 9 && nine == "") {
        nine = player;
    }

    /* Add text */
    document.getElementById(slot).innerHTML = player;

    /* Add color */
    if (player == "X") {
        document.getElementById(slot).classList.add("bg-primary");
    } else {
        document.getElementById(slot).classList.add("bg-danger");
    }

    /* Has winner */
    if (hasWinner(player)) {
        document.getElementById("message").innerHTML = "Winner: " + player;
        document.querySelector(".btn").style.display = "block";
        isFinish = true;
        return
    }

    /* Is draw */
    if (isDraw()) {
        document.getElementById("message").innerHTML = "No Winner";
        document.querySelector(".btn").style.display = "block";
        isFinish = true;
        return
    }

    /* Switch player */
    if (player == "X") {
        player = "O";
    } else {
        player = "X";
    }

    /* Display current player */
    document.getElementById("message").innerHTML = "Current Player: " + player;
}

/* Has winner */
function hasWinner(player) {

    /* Horizontal (1, 2, 3) */
    /* Horizontal (4, 5, 6) */
    /* Horizontal (7, 8, 9) */
    if (
        (player == one && player == two && player == three) ||
        (player == four && player == five && player == six) ||
        (player == seven && player == eight && player == nine)
    ) {
        return true;
    }

    /* Vertical (1, 4, 7) */
    /* Vertical (2, 5, 8) */
    /* Vertical (3, 6, 9) */
    if (
        (player == one && player == four && player == seven) ||
        (player == two && player == five && player == eight) ||
        (player == three && player == six && player == nine)
    ) {
        return true;
    }

    /* Diagonal (1, 5, 9) */
    /* Diagonal (3, 5, 7) */
    if (
        (player == one && player == five && player == nine) ||
        (player == three && player == five && player == seven)
    ) {
        return true;
    }


}

/* Is draw */
function isDraw() {
    if (one != "" && two != "" && three != "" && four != "" && five != "" && six != "" && seven != "" && eight != "" && nine != "") {
        return true;
    }
    return false;
}

/* Reset game */
function resetGame() {
    player = "X";
    isFinish = false;

    one = "";
    two = "";
    three = "";
    four = "";
    five = "";
    six = "";
    seven = "";
    eight = "";
    nine = "";

    /* Display current player */
    document.getElementById("message").innerHTML = "Current Player: " + player;

    /* Hide button */
    document.querySelector(".btn").style.display = "none";

    document.getElementById(1).innerHTML = "";
    document.getElementById(2).innerHTML = "";
    document.getElementById(3).innerHTML = "";
    document.getElementById(4).innerHTML = "";
    document.getElementById(5).innerHTML = "";
    document.getElementById(6).innerHTML = "";
    document.getElementById(7).innerHTML = "";
    document.getElementById(8).innerHTML = "";
    document.getElementById(9).innerHTML = "";

    document.getElementById(1).classList.remove("bg-primary");
    document.getElementById(2).classList.remove("bg-primary");
    document.getElementById(3).classList.remove("bg-primary");
    document.getElementById(4).classList.remove("bg-primary");
    document.getElementById(5).classList.remove("bg-primary");
    document.getElementById(6).classList.remove("bg-primary");
    document.getElementById(7).classList.remove("bg-primary");
    document.getElementById(8).classList.remove("bg-primary");
    document.getElementById(9).classList.remove("bg-primary");

    document.getElementById(1).classList.remove("bg-danger");
    document.getElementById(2).classList.remove("bg-danger");
    document.getElementById(3).classList.remove("bg-danger");
    document.getElementById(4).classList.remove("bg-danger");
    document.getElementById(5).classList.remove("bg-danger");
    document.getElementById(6).classList.remove("bg-danger");
    document.getElementById(7).classList.remove("bg-danger");
    document.getElementById(8).classList.remove("bg-danger");
    document.getElementById(9).classList.remove("bg-danger");
}