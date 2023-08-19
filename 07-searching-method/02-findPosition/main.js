// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets


const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

const array = [];
alphabets.forEach((item,index) => {
    // console.log(index)
    if(item=='a'){
        array.push(index)
    }
})

/* ##### use for-in ######
// for(let index in alphabets) {
//   if(alphabets[index] === 'a') resultArr.push(+index)
// }

// alphabets.forEach((char,index)=> {
//   if(char === 'a') resultArr.push(+index)
// })
*/
console.log(array)
