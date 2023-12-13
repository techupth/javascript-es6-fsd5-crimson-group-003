//Exercise #4: Merging Nested Array
let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
function mergingNestedArray(arr1, arr2) {
  arr1.hobbies.push(...arr2);
  console.log(arr1);
  return arr1;
}
const newStudentProfile = mergingNestedArray(studentProfile, additionalHobbies);

console.log(newStudentProfile);
//Ans
// {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40 },
//   hobbies: [ 'Football', 'Coding', 'Painting', 'Yoga']
// }
