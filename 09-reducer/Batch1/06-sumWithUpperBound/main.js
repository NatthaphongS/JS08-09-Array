// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str 


let str = '31 45 12 67 34 86 23 37 19 41';
const newstr = str.split(' ');
console.log(newstr)
const sumLowThan40 = newstr.reduce((acc,item)=>{
    if(item<40){
        return acc + +item;
    }
    return acc
},0)
console.log(sumLowThan40); //156