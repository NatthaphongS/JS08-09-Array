// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด


let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];
// expected result: [0, 1, 2, 3, 4, 5]
console.log(flattened[0][0])//0
console.log(flattened[0][1])//1

const result = flattened.reduce((acc,item)=>{
    acc.push(item[0])
    acc.push(item[1])
    return acc;
},[])
console.log(result) //[0, 1, 2, 3, 4, 5]

//or use array.flat method

/*  or loop for-of
const flatArr = flattened.reduce((acc, subArr) => {
    // Walkthrough SubArray
    // each Element of SubArray => push into Acc
    for (let num of subArr) {
        acc.push(num);
    }
    return acc;
}, []);

console.log(flatArr);
*/