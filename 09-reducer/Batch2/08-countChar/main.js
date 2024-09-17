// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str


let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
str=str.toLowerCase().split('')
console.log(str)// ['i', ' ', 'l', 'i', 'v', 'e', ' ', 'i', 'n', ' ', 't', 'h', 'a', 'i', 'l', 'a', 'n', 'd']
const result= {};
function countChar (acc,char){
    if(char == ' '){
        return acc;
    }else if(!acc[char]){
        acc[char]=1;
    }else{
        acc[char]+=1;
    }
    return acc
}
console.log(str.reduce(countChar,result))