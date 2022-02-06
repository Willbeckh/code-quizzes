// store the correct answers here
const CORRECT_ANSWERS = {
    javascript: 'scripting'
}

// collect data from the form
let dataForm = document.querySelector('#quiz-form');


// code action to be performed after data is submitted
dataForm.addEventListener('submit', function(event) {
    // prevent default action
    event.preventDefault();

    console.log("btn-data submitted");
    // creates an new instance from the form variable that store the user data
    var userData = new FormData(dataForm);
    // call the function that compares user data to coreect ans
    compareResult(userData);
});

// compare the data with correct answers
function compareResult(userData) {
    // this is where we contrast the dat enterd.
    let quiz1 = userData.get('javascript');

    if(quiz1 === CORRECT_ANSWERS.javascript) {
        alert("correct answer.");
    } else {
        alert("oooliskia wapi.!")
    }
};