exports.questionThree = () => {
  console.log("Question 3: in the function named answerThree, return a string formatted as a list of names separated by commas except for the last two names." +
    "This function will pass in an array of objects, each object containing a name, " +
    "which should be separated by an ampersand.");

  //tests
  console.log(answerThree([{
    name: "Bart"
  }, {
    name: "Lisa"
  }, {
    name: "Maggie"
  }])); //expected result:: "Bart, Lisa & Maggie"
  console.log(answerThree([{
    name: "Bart"
  }, {
    name: "Lisa"
  }])); //expected result: "Bart & Lisa"
  console.log(answerThree([{
    name: "Bart"
  }])); //expected result: "Bart"
  console.log(answerThree([])); //expected result: ""
}

const answerThree = (names) => {
  //code here
  if (names.length <= 1) {
    return names.map(e => e.name).join('');
  } else if (names.length <= 2) {
    return names.map(e => e.name).join(" & ");
  } else if (names.length > 2) {
    return names.map(e => e.name).slice(0, -1).join(", ") + " & " + names.map(e => e.name).slice(-1);
  }
}

console.log(answerThree([{
  name: "Bart"
}, {
  name: "Lisa"
}, {
  name: "Maggie"
}]));
console.log(answerThree([{
  name: "Bart"
}, {
  name: "Lisa"
}]));
console.log(answerThree([{
  name: "Bart"
}]));
console.log(answerThree([]));

console.log(answerThree([{
  name: "Bart"
}, {
  name: "Lisa"
}, {
  name: "Maggie"
}, {
  name: "Homer"
}, {
  name: "Marge"
}]));
