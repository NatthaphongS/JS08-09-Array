// จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่

function isArray(input) {
  return Array.isArray(input);
}

const a = [5, 9, 3, 4, 2];
const b = 597;
const c = "natthaphong";
const d = { name: "hong", age: 50 };
console.log(isArray(a));
console.log(isArray(b));
console.log(isArray(c));
console.log(isArray(d));
