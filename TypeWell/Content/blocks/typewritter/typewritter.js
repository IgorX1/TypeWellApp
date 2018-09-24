'use strict';
var isTestInProcess = false;
var textBox;//the textbox for the user's input
var currentIndex = 0;//the index of the current character, which we are on
var text;//the text, which user tries to type

//Called when Start Test button is clicked
function startTest() {
    /*Do not start a new test before the previous one ends*/
    if (isTestInProcess === true) return;
    isTestInProcess = true;

    //TODO:add stop btn activity
    initTextBox('test-text');
    initTextString('text');
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
            textBox.removeEventListener('keyPress', keyboardHandler);
            document.getElementById('timer').innerHTML = "1:00";
        }
    }, 1000
    )
}

//Find the input text box
function initTextBox(id) {
    textBox = document.getElementById(id);
    textBox.focus();
    textBox.addEventListener('keydown', keyboardHandler);
}

function initTextString(id) {
    text = document.getElementById(id).value;
}

function keyboardHandler(e) {
    //Coping with SPACE (decline scroll effect)
    if (e.keyCode == 32) e.preventDefault();

    //Coping with SHIFT key
    if (e.keyCode != 16) {
        var input = e.shiftKey ? String.fromCharCode(e.which) : String.fromCharCode(e.which).toLowerCase();
        var expected = text.charAt(currentIndex);
        var targetSpan = textBox.children[currentIndex];
        if (input === expected) {
            targetSpan.style.color = "green";
        } else {
            targetSpan.style.color = "red";
        }
        currentIndex++;
    }  
}

