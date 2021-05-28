const axios = require("axios");


const answerFive = () => { //Answer without async await function
  const url = "https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees";
  //Work out the date 50 years ago today.
  const today = new Date().toISOString().slice(0, 10).split("-"); // returns todays date as YYYY-MM-DD (in array)
  const combinedDate = Number(today[0] - 50 + today.slice(1, 3).join("")); // formats date as a number eg 20210528
  //code here
  axios.get(url)
    .then(response => {
      const employeeDob = response.data.map(e => Number(e.dateOfBirth.split("-").join(""))); //get the employees date of birth formatted to a number
      const over50Index = [] // variable to store indexes that meet below condition
      employeeDob.forEach((e, i) => {
        if (e <= combinedDate) {
          over50Index.push(i);
        }
      });
      const over50Array = response.data.filter((el, i) => over50Index.some(j => i === j));
      console.log(over50Array);
    })


}

const answerFiveAsync = async () => { //answer with Async Await
  try {
    const url = "https://europe-west2-dpduk-t-insight-l1.cloudfunctions.net/employees";
    const response = await axios.get(url);

    const today = new Date().toISOString().slice(0, 10).split("-"); // returns todays date as YYYY-MM-DD (in array)
    const combinedDate = Number(today[0] - 50 + today.slice(1, 3).join("")); // formats date as a number eg 20210528

    const employeeDob = response.data.map(e => Number(e.dateOfBirth.split("-").join(""))); //get the employees date of birth formatted to a number
    const over50Index = [] // variable to store indexes that meet below condition
    employeeDob.forEach((e, i) => { // for each to loop through employeeDob and check condition, pushing the index to variable each time it's met
      if (e <= combinedDate) {
        over50Index.push(i);
      }
    });
    const over50Array = response.data.filter((el, i) => over50Index.some(j => i === j));//filtering the original response by the calculated index
    console.log(over50Array);
  } catch (err) {
    console.log(err);
  }
}

answerFiveAsync();