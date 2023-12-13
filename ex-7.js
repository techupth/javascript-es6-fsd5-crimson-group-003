//Exercise #7: Optional Chaining
const employee1 = {
  name: "John",
  age: 20,
  // scores:{
  //       english:50,
  // },
};
const result1 = employee1.scores?.english;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
    // english:50,
  },
};
const result2 = employee2.scores.english ?? "English score is not defined";
console.log(result1);
console.log(result2);
