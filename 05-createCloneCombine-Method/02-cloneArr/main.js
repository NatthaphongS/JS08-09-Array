// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว
const a = [1, 5, 7, 11];

function clone(array){
    return array.slice()
}

const c = clone(a);
console.log(c)
