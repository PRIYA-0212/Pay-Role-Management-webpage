var inputBill = document.getElementById("bill");
var cashGiven = document.getElementById("cash");
var checkBtn = document.getElementById("btn");
var errMsg = document.getElementById("error");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var notes = [2000, 500, 100, 20, 10, 5, 1];

function errorHandle(error) {
    errMsg.style.display = "block";
    errMsg.innerText = error;
}

function hideMessage() {
    errMsg.style.display = "none";
}

function clickHandler() {
    hideMessage();
    var billValue = parseFloat(inputBill.value);
    var cashValue = parseFloat(cashGiven.value);
    if (isNaN(billValue) || isNaN(cashValue)) {
        errorHandle("Please enter valid numeric values");
    } else if (billValue <= 0) {
        errorHandle("Please enter a positive bill amount");
    } else {
        var remaining = cashValue - billValue;
        if (remaining < 0) {
            errorHandle("Insufficient cash provided");
        } else {
            noOfNotes.forEach(cell => cell.innerText = '');
            for (var i = 0; i < notes.length; i++) {
                var count = Math.trunc(remaining / notes[i]);
                remaining %= notes[i];
                noOfNotes[i].innerText = count;
            }
        }
    }
}

checkBtn.addEventListener("click", clickHandler);
