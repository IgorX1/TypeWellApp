'use strict';
var isTestInProcess = false;

//Called when Start Test button is clicked
function startTest() {

    if (isTestInProcess === true)
        return;
    isTestInProcess = true;
    //TODO:add stop btn activity
    var textBox = initTextBox('test-text');
    textBox.focus();
    textBox.addEventListener('keydown', keyboardHandler);
    timerOnGoing();
}

//Responsible for timing
function timerOnGoing() {
    var secondsLeft = 60;
    var secondsToShow = secondsLeft;
    var timerId = setInterval(function () {
        if (secondsLeft <= 10) secondsToShow = "0" + (--secondsLeft)
        else secondsToShow = --secondsLeft;
        document.getElementById('timer').innerHTML = "0:" + secondsToShow;
        if (secondsLeft < 1) {
            isTestInProcess = false;
            clearInterval(timerId);
            document.getElementById('timer').innerHTML = "1:00";
        }
    }, 1000
    )
}

//Find text box and make sure that it is empty
function initTextBox(id) {
    var textbox = document.getElementById(id);
    if (textbox.innerHTML != "")
        textbox.innerHTML = "";
    return textbox;
}

function keyboardHandler(e) {
    document.getElementById('test-text').innerHTML += String.fromCharCode(e.which);
}

