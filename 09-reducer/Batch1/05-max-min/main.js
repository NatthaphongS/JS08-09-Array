// จงหาค่ามากสุดและน้อยสุดใน arr


let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
let max = arr.reduce((acc,item)=> item>acc ? item:acc)
let min = arr.reduce((acc,item)=> item<acc ? item:acc)

console.log(max)
console.log(min)
