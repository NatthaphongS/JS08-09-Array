// จงนับชื่อที่ปรากฏใน names


let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

// ARRAY => OBJ

const initObj={}

function reduceFn(acc,name,index,arr){
    // acc === {'Jack'}
    // -ยังไม่มีชื่อใน obj => เพิ่มเพิ่มชื่อเป็น key และ value เป็น 1
    // -มีชื่อใน obj อยู๋แล้ว => update Value เพิ่มขึ้น1

    // acc['Jack']===acc.[name]
    // if (!acc[name]){
    //     // !undefine = true
    //     acc[name] =1;
    // }else{
    //     acc[name]++;
    // }
    // return acc;

    if (!acc[name]) acc[name] = 0;
    acc[name]++;
    return acc;
}

const r = names.reduce(reduceFn,initObj);
console.log(r)
