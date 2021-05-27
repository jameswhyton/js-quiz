exports.questionOne = () => {
  console.log("Question 1: In the function named answerOne, return a reversed string of the value passed into the function. ");

  //tests below
  console.log(answerOne("I am hungry!")); //expected result: !yrgnuh ma I
  console.log(answerOne("reward!")); //expected result: drawer
  console.log(answerOne("Ramen")); //nemaR
  console.log(answerOne("robot")); //tobor
}

const answerOne = (val) => {
  //code here
  return val.split("").reverse().join("");
}

console.log(answerOne("I am hungry!"));
console.log(answerOne("reward!"));
console.log(answerOne("Ramen"));
console.log(answerOne("robot"));

console.log(answerOne("!notyhW semaJ si eman ruoY"));