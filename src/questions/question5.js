const axios = require("axios");

exports.questionFive = () => {
  console.log("Question 5: Work are organising a seminar for those who are planning their retirement. In the function answerFive, " +
    "make a HTTP GET request using axios with the url listed below " +
    "and return a filtered array of employees where their age is equal or greater than 50. (Hint: axios is a promised based library, consider how to handle this so the data is returned. " +
    "Also consider creating a function that calculates an employees age by passing in a given date of birth. )");
  console.log("axios docs can be found here: https://github.com/axios/axios, guide can be found here: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/");
  console.log(answerFive());
}

const answerFive = () => {
  const url = "https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees";

  //code here

}