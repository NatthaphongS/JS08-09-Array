// จงเรียงข้อมูลใน arr โดยเรียงตามค่า element ยกกำลัง 2 จากน้อยไปหามาก

const arr = [-3, 2, 0, -7, 4, 6];
newArr = arr.map((item) => item ** 2);
newArr.sort((a, b) => a - b);
console.log(newArr);
