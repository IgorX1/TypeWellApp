'use strict';
var isTestInProcess = false;
var textBox;//the textbox for the user's input
var currentIndex = 0;//the index of the current character, which we are on
var text;//the text, which user tries to type

var numOfMistakes = 0;//general number of mistakes in one test

var maximalRightSequence = 0;//maximal number of correctly typed characters in a row
var numInThisSequence = 0;

var speed = 0;
var numOfCorrect = 0;

//Called when Start Test button is clicked
function startTest() {
    /*Do not start a new test before the previous one ends*/
    if (isTestInProcess === true) return;
    isTestInProcess = true;
    numOfMistakes = 0;
    speed = 0;
    maximalRightSequence = 0;
    numOfCorrect = 0;

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
        if (secondsLeft <= 10) secondsToShow = "0" + (--secondsLeft);
        else secondsToShow = --secondsLeft;
        document.getElementById('timer').innerHTML = "0:" + secondsToShow;
        if (secondsLeft < 1) {
            showResults();
            stopTestAndSetValuesToDefault(timerId);
        }
    }, 1000
    );
}

/**
 * Function, which is invoked every time the timer stops.
 * It sets the values of all necessary variables to default values,
 * so that a new test can be ran
 */
function stopTestAndSetValuesToDefault(timerId) {
    isTestInProcess = false;
    clearInterval(timerId);
    textBox.removeEventListener('keyPress', keyboardHandler);
    document.getElementById('timer').innerHTML = "1:00";
    var letters = document.querySelectorAll('#test-text > span');
    letters.forEach(
        function (currentValue, currentIndex, listObj) {
            currentValue.style.color = 'black';
        }
    );
    currentIndex = 0;
}


function showResults() {

    //speed calculation
    calculateSpeed();
    var elem = document.getElementById('speedId');
    elem.innerText = numOfCorrect;
    elem.innerText += "digits per minuite";

    //mistakes calculation
    elem = document.getElementById('mistakesId');
    elem.innerText = numOfMistakes;

    //maximal sequence calculation
    elem = document.getElementById('maxSeqId');
    elem.innerText += maximalRightSequence;
    elem.innerText += " digits";

    //% of text typed calculation
    elem = document.getElementById('progressId');
    elem.innerText += Math.round((currentIndex / text.length) * 100);
    elem.innerText += "%";
}

/**
 * Find the total typing speed in this test
 */
function calculateSpeed() {
    speed = currentIndex / text.length;
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

/**
 * Handler for the keyPress event
 * @param {any} e event entity
 */
function keyboardHandler(e) {
    //Coping with SPACE (decline scroll effect)
    if (e.keyCode === 32) e.preventDefault();

    //Coping with SHIFT key
    if (e.keyCode !== 16) {
        var input = e.shiftKey ? String.fromCharCode(e.which) : String.fromCharCode(e.which).toLowerCase();
        var expected = text.charAt(currentIndex);
        var targetSpan = textBox.children[currentIndex];
         if (input === expected) {
             targetSpan.style.color = "green";
             numOfCorrect++;

             numInThisSequence++;
        } else {
             numOfMistakes++;
             numInThisSequence = 0;
             targetSpan.style.color = "red";
        }

        if (numInThisSequence > maximalRightSequence) {
            maximalRightSequence = numInThisSequence;
        }

        currentIndex++;
    }  
}

