const marks_height1 = 1.69,
  johns_height1 = 1.95;
const marks_weight1 = 78,
  johns_weight1 = 92;

const marks_height2 = 1.88,
  johns_height2 = 1.76;
const marks_weight2 = 95,
  johns_weight2 = 85;

function CalculateBMI(mass, height) {
  return mass / height ** 2;
}

let marks_bmi = CalculateBMI(marks_weight1, marks_height1);
let johns_bmi = CalculateBMI(johns_weight1, johns_height1);

let markHigherBMI = marks_bmi > johns_bmi;
console.log(markHigherBMI);

marks_bmi = CalculateBMI(marks_weight2, marks_height2);
johns_bmi = CalculateBMI(johns_weight2, johns_height2);

markHigherBMI = marks_bmi > johns_bmi;

console.log(markHigherBMI);
