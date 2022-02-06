// store the correct answers here
const CORRECT_ANSWERS = {
    question1: 'a',
    question2: 'b',
    question3: 'a'
};

// collect data from the form
var dataForm = document.querySelector('#quiz-form');

var score = 0; // initial score of the test
var totalScore = 6;

// button action to be performed after data is submitted
dataForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents default action

    // console.log("btn-data submitted");
    // creates an new instance from the form variable that stores the user data
    var userData = new FormData(dataForm);

    // call the function that compares user data to correct ans
    compareResult(userData);
    // console.log(typeof userData); // check datatype of useranswers(obj)
});

// compare the data with correct answers
function compareResult(userData) {

    // console.log(userAnswers.length); //typeof useranswers; object;
    // for loop with if statement
    for(let answer of userData) {
        // console.log(answer);
        let question = answer[0];
        let userAnswer = answer[1];
        if(userAnswer === CORRECT_ANSWERS[question] ){
            // console.log('correct');
            score+=2;
        } else {
            console.log(score);
        };
    };
    // console.log(`current score is ${score}`) //log the current score

    // display score to user
    let userScore = document.querySelector('.score'); 
    userScore.textContent = score;
    
};

