// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

arr =[];
do{
    let num = prompt('Enter Number');
    if(num == null|| num.trim == '' || isNaN(num)){
        break;
    }
    arr.push(num);
}while(true);

// console.log(arr);
let sumNumber=0;
arr.forEach((item) => sumNumber += +item);
console.log(`Sum of number in arr is ${sumNumber}`)