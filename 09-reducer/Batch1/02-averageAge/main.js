// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array



let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];
/*
let arr = [
	{ name: 'John', age: 27 },
	{ name: 'Jo', age: 21 },
	{ name: 'Jin', age: 25 },
]
*/

const getAverageAge = (array)=>{
    const sum=array.reduce((acc,item)=>acc+item.age,0)
    return (sum/array.length).toFixed(2);
}

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
