function startTest() {
    timerOnGoing();
}

function timerOnGoing() {
    var secondsLeft = 60;
    var secondsToShow = secondsLeft;
    var timerId = setInterval(function () {
        if (secondsLeft <= 10) secondsToShow = "0" + (--secondsLeft)
        else secondsToShow = --secondsLeft;
        document.getElementById('timer').innerHTML = "0:" + secondsToShow;
        if (secondsLeft < 1) {
            clearInterval(timerId);
            document.getElementById('timer').innerHTML = "1:00";
        }
    }, 1000
    )
}

