// ให้คำนวนผลรวม salaries ใน object โดยใช้ Object.keys , Object.value และ Object.entries
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const eachSalary = Object.values(salaries);
const sumSalary = eachSalary.reduce((acc, item) => acc + item, 0);
console.log(sumSalary);
