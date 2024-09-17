// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
// - execute deleteTask(1)


const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

function deleteTask(id){
    let index =tasks.findIndex((obj) => {
        if (obj.id == id) {
            return true;
        }
    })
    console.log(index)
    // delete tasks[index]
    tasks.splice(index,1)
}

deleteTask(2);
console.log(tasks)