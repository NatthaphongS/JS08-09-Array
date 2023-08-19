// จงสร้าง object โดยมี key เป็น id ของ product และ value เป็น product name

const products = [
  { id: 1, name: 'Crystal' },
  { id: 4, name: 'Namthip' },
  { id: 5, name: 'Nestle' }
];
// console.log(products[1].id)
// { 1: { name: 'Crystal' }, 4: { name: 'Namthip' }, 5: { name: 'Nestle' } };
const newObj={};
function createObj (acc,obj){
    // obj={ id: 1, name: 'Crystal' }

    acc[obj.id]={}
    acc[obj.id].name=obj.name
    return acc;
}

console.log(products.reduce(createObj,newObj));

