// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const array1 = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const result1 =array1.map(ele=>ele*2)
console.log(result1)

const array2 = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const result2 =array2.map(ele=>String(ele))
console.log(result2)

const array3 = [1, '1', 2, {}];
// result: ["number", "string", "number", "object"]
const result3 =array3.map(ele=>typeof(ele))
console.log(result3)

const array4 = ['apple', 'banana', 'orange'];
// result: ["APPLE", "BANANA", "ORANGE"]
const result4 =array4.map(ele=>ele.toUpperCase())
console.log(result4)


const array5 = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const result5 =array5.map(ele => ele%2 == 0 ? 'even' : 'odd')
console.log(result5)

const array6 = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const result6 =array6.map(ele => ele < 0 ? -ele : ele)
console.log(result6)


const array7 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const result7 =array7.map(ele=>ele.toFixed(2))
console.log(result7)

const array8 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const result8 =array8.map(ele=>{
    const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return month[ele];
})
console.log(result8)

const array9 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
const result9 =array9.map((ele)=>Math.sqrt(Math.sqrt(ele)))
console.log(result9)

const array10 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: ["apple", "banana", "watermelon"]
const result10 =array10.map(ele=>ele.name)
console.log(result10)

const array11 = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]
const result11 =array11.map(ele=>ele.age)
console.log(result11)


const array12 = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const result12 =array12.map(ele=>`${ele.name} ${ele.surname}`)
console.log(result12)

const array13 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const result13 =array13.map(ele=>`name: ${ele.name}, birth: ${ele.birth}, age: ${2021-ele.birth.slice(0,4)}`)
console.log(result13)

const array14 = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const result14 =array14.map(ele=>`<tr><td>${ele.name}</td><td>${ele.birth.substring(8)} ${month[Number(ele.birth.substring(5,7))-1].toLowerCase()} ${ele.birth.substring(0,4)}</td></tr>`)
console.log(result14)