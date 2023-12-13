let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here

function additionalStudentInformation(obj1,obj2){
  let newObject = {
    ...obj1,
    scores:{
    ...obj1.scores,
    ...obj2},
  };
    return newObject
}
 const newStudentProfile = additionalStudentInformation(
   studentProfile,
   studentScores
 );

console.log(newStudentProfile);
