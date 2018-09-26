'use strict';
var isTestInProcess = false;//indicates whether the test is in process
var isFirstTest = true;//indicates whether there were tests in the current session
var textBox;//the textbox for the user's input
var currentIndex = 0;//the index of the current character, which we are on
var text;//the text, which user tries to type
var numOfMistakes = 0;//general number of mistakes in one test
var maximalRightSequence = 0;//maximal number of correctly typed characters in a row
var numInThisSequence = 0;//used to find var maximalRightSequence
var speed = 0;//user's speed of typing
var numOfCorrect = 0;//number of correctly typed characters
var timerId;//The ID of the main timer, which is used for tests

var carretColor = "orange";//color of the carret

//Called when Start Test button is clicked
function startTest() {
    /*Do not start a new test before the previous one ends*/
    if (isTestInProcess === true) return;
    isTestInProcess = true;
    if (!isFirstTest) {
        changeDispalyPropertiesAfterTestFinishes("1", "none");
    }

    makeTextVisible();
    isFirstTest = false;
    initStatsValues();
    changeStopBtnStatus(true);

    //TODO:add stop btn activity
    initTextBox('test-text');
    initTextString('text');
    timerOnGoing();
}

function makeTextVisible() {
    var elem = document.getElementById('test-text');
    elem.style.opacity = 1;
    elem = document.getElementById('rules');
    elem.style.display = "none";
}

/**
 * The function responsible gor finishing the test. Used as an onclick of stop btn 
 * and when the text is fully typed before the time is gone
 */
function finishTest() {
    showResults();
    stopTestAndSetValuesToDefault();
}

//Responsible for timing
function timerOnGoing() {
    var secondsLeft = 60;
    var secondsToShow = secondsLeft;
    timerId = setInterval(function () {
        if (secondsLeft <= 10) secondsToShow = "0" + (--secondsLeft);
        else secondsToShow = --secondsLeft;
        document.getElementById('timer').innerHTML = "0:" + secondsToShow;
        if (secondsLeft < 1) {
            showResults();
            stopTestAndSetValuesToDefault();
        }
    }, 1000
    );
}

/**
 * Function, which is invoked every time the timer stops.
 * It sets the values of all necessary variables to default values,
 * so that a new test can be ran
 */
function stopTestAndSetValuesToDefault() {
    isTestInProcess = false;
    clearInterval(timerId);
    textBox.removeEventListener('keyPress', keyboardHandler);
    document.getElementById('timer').innerHTML = "1:00";
    changeStopBtnStatus(false);
    textBox.children[currentIndex].style.borderBottom = "none"
    var letters = document.querySelectorAll('#test-text > span');
    letters.forEach(
        function (currentValue, currentIndex, listObj) {
            currentValue.style.color = 'black';
        }
    );
    currentIndex = 0;
}

/**
 * Show the results after the test in finished
 */
function showResults() {

    //speed calculation
    calculateSpeed();
    var elem = document.getElementById('speedId');
    elem.innerText = numOfCorrect;
    elem.innerText += " digits per minuite";

    //mistakes calculation
    elem = document.getElementById('mistakesId');
    elem.innerText = numOfMistakes;

    //maximal sequence calculation
    elem = document.getElementById('maxSeqId');
    elem.innerText = maximalRightSequence;
    elem.innerText += " digits";

    //% of text typed calculation
    elem = document.getElementById('progressId');
    elem.innerText = Math.round((currentIndex / text.length) * 100);
    elem.innerText += "%";

    changeDispalyPropertiesAfterTestFinishes("0", "block");
}

/**
 * Find the total typing speed in this test
 */
function calculateSpeed() {
    speed = currentIndex / text.length;
}

/**
 * Enable/disable stop button
 * @param {Boolean} isEnabled
 */
function changeStopBtnStatus(isEnabled) {
    var btn = document.getElementById('stop-btn');
    btn.disabled = !isEnabled;
}

/**
 * Function is responsible for hiding text for typing and showing block woth the results instead
 * @param {String} opacity the target opacity of the typing text
 * @param {String} displayValue the display property value for the results block
 */
function changeDispalyPropertiesAfterTestFinishes(opacity, displayValue) {
    var elem = document.getElementById('test-text');
    elem.style.opacity = opacity;
    elem = document.getElementById('resblock');
    elem.style.display = displayValue;
}

//Find the input text box
function initTextBox(id) {
    textBox = document.getElementById(id);
    textBox.focus();
    textBox.addEventListener('keydown', keyboardHandler);
    textBox.children[currentIndex].style.borderBottom = "2px solid " + carretColor
}

function initTextString(id) {
    text = document.getElementById(id).value;
}

/**
 * Initialize stats variables to default values
 * in order to be able to count statistics for an upcoming test
 */
function initStatsValues() {
    numOfMistakes = 0;
    numInThisSequence = 0;
    speed = 0;
    maximalRightSequence = 0;
    numOfCorrect = 0;
}

/**
 * Handler for the keyPress event
 * @param {Event} e event entity
 */
function keyboardHandler(e) {
    //Move the cursor
    textBox.children[currentIndex].style.borderBottom = "none"
    textBox.children[currentIndex + 1].style.borderBottom = "2px solid " + carretColor

    //Coping with SPACE (decline scroll effect)
    if (e.keyCode === 32) e.preventDefault();

    //Coping with SHIFT key
    if (e.keyCode !== 16) {
        var input;

        //TODO: add support of othe symbols with code>180 i.e. {,/,<,>},+,=...
        switch (e.keyCode) {
            case 190:
                input = '.'
                break;
            case 188:
                input = ','
                break;
            case 186:
                input = ';'
                break;
            default:
                input = e.shiftKey ? String.fromCharCode(e.which) : String.fromCharCode(e.which).toLowerCase();
                break;
        }
        
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

        //Stop the test when the user input all the text
        if (currentIndex === text.length-1) {
            finishTest();
        }
    }  
}

