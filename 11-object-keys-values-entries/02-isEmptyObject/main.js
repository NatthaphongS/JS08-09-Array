// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่

const arr = {};
const checkEmptyObj = (obj) => {
  for (let key of Object.keys(obj)) {
    return false;
  }
  return true;
};
console.log(checkEmptyObj(arr));
