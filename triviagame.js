// SETTING  Global variables

var counter = 15;

var rightAnswers = [];

var wrongAnswers = [];

function timer() {
    counter++;
    let interval = setInterval(function () {
        counter--;
        if (counter < 0) {
            clearInterval(interval);
            return;
        }
        console.log(counter);
    }, 1000)
}

function startgame() {
    


}