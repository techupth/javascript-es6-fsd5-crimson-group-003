//Exercise #1 : Merging object
let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let additionalProperties = {
  photo: "https://placedog.net/500",
  hobbies: ["Football", "Coding"],
};
console.log(typeof(studentProfile));
console.log(typeof additionalProperties);
 function additionalStudentInformation(obj1,obj2){
  let newObject = {
     ...obj1,
     ...obj2,
   };
   return newObject
 }
 const newStudentProfile = additionalStudentInformation(studentProfile,additionalProperties);
 console.log(newStudentProfile);

 //Ans Output
 // {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40 },
//   photo: 'https://placedog.net/500',
//   hobbies: [ 'Football', 'Coding' ]
// }

 