const {
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
} = require("./questions");

function executeQuestions() {
  questionOne();
  console.log("   ");

  questionTwo();
  console.log("   ");

  questionThree();
  console.log("   ");

  questionFour();
  console.log("   ");

  questionFive();
}

executeQuestions();