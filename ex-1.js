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

// Start coding here


function additionalStudentInformation(obj1,obj2){
  let newObject = {
     ...obj1,
     ...obj2,
   };
   return newObject
 }
const newStudentProfile = additionalStudentInformation(studentProfile,additionalProperties);

console.log(newStudentProfile);
