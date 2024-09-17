// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

// function filterRange(arr,a,b){
//     newArr = arr.filter(ele=ele>=a&&ell<=b)
//     return newArr
// }
const nums=[1,2,3,4,5,6,7,8,9,10]
const filterRange = (arr,a,b) => arr.filter(ele=>ele>=a&&ele<=b);
console.log(filterRange(nums,4,8))