const axios = require("axios");

exports.questionFive = () => {
  console.log("Question 5: Work are organising a seminar for those who are planning their retirement. In the function answerFive, " +
    "make a HTTP GET request using axios with the url listed below and return a filtered array of employees where their age is equal or greater than 50." +
    "(Hint: axios is a promised based library, consider how to handle this so the data is returned. ");
  console.log("axios docs can be found here: https://github.com/axios/axios, guide can be found here: https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/");
  console.log(answerFive());
}

const answerFive = async () => { //answer with Async Await
  try {
    const url = "https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees";
    const response = await axios.get(url);

    const today = new Date().toISOString().slice(0, 10).split("-"); // returns todays date as YYYY-MM-DD (in array)
    const combinedDate = today[0] - 50 + today.slice(1, 3).join(""); // formats date as a number eg 20210528

    console.log(response.data.filter((el, i) => el.dateOfBirth <= combinedDate));
  } catch (err) {
    console.log(err);
  }
}

answerFive();