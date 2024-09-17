// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

const scores = [
    { score: 90, subject: 'HTML', weight: 0.2 },
    { score: 95, subject: 'CSS', weight: 0.3 },
    { score: 85, subject: 'JavaScript', weight: 0.5 }
];

function avgScore(array) {
    const sumScore = array.reduce((acc, item) => acc + (item.score * item.weight), 0)
    const sumWeight = array.reduce((acc, item) => acc + item.weight, 0)
    return (sumScore / sumWeight).toFixed(2);
}

console.log(avgScore(scores)) //89.00

//หรือ
const initial = { sum: 0, total: 0};
const summarizeObj = scores.reduce((acc,cur)=>{
    acc.sum += cur.score*cur.weight;
    acc.total += cur.weight;
    return acc;
},initial);
console.log(initial.sum/initial.total); //89