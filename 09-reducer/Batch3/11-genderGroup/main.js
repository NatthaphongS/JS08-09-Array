// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน


const persons = [
  { name: 'John', sex: 'M' },
  { name: 'Jody', sex: 'M' },
  { name: 'Susan', sex: 'F' },
  { name: 'Kate', sex: 'F' },
  { name: 'Sid', sex: 'M' }
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
result={ M: [], F: []};
// console.log(result.m[0])
function genderClassification(array){
    // แยกชาย
    const male =array.reduce((acc,obj)=>{
        if(obj.sex=='M') acc.push(obj.name)
        return acc;
    },[])
    // แยกหญิง
    const female =array.reduce((acc,obj)=>{
        if(obj.sex=='F') acc.push(obj.name)
        return acc;
    },[])
    result.M =male;
    result.F =female;
}
genderClassification(persons)
console.log(result)