
const sales = [
  {
    id: 1,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Sun',
    discount: 0.2,
    type: 'Cash'
  },
  {
    id: 2,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '01-01-2021',
    customer: 'Tle',
    type: 'Credit'
  },
  {
    id: 3,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 4,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '01-01-2021',
    customer: 'Jit',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 5,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '01-01-2021',
    customer: 'Palm',
    type: 'Cash'
  },
  {
    id: 6,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '01-01-2021',
    customer: 'Top',
    type: 'Credit'
  },
  {
    id: 7,
    product: {
      id: 4,
      name: 'Oppo',
      model: 'A15',
      unitPrice: 4299
    },
    saleDate: '02-01-2021',
    customer: 'Sun',
    type: 'Credit'
  },
  {
    id: 8,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '02-01-2021',
    customer: 'Snap',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 9,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 10,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '02-01-2021',
    customer: 'Ham',
    discount: 0.25,
    type: 'Credit'
  },
  {
    id: 11,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Tle',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 12,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '02-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 13,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '02-01-2021',
    customer: 'Boss',
    type: 'Cash'
  },
  {
    id: 14,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '02-01-2021',
    customer: 'Sila',
    type: 'Airpay'
  },
  {
    id: 15,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '02-01-2021',
    customer: 'Top',
    type: 'Cash'
  },
  {
    id: 16,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 17,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '03-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 18,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 36900
    },
    saleDate: '03-01-2021',
    customer: 'Sine',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 19,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '03-01-2021',
    customer: 'Note',
    type: 'Credit'
  },
  {
    id: 20,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '03-01-2021',
    customer: 'Micky',
    type: 'Credit'
  },
  {
    id: 21,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 22,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '04-01-2021',
    customer: 'Bank',
    type: 'Cash'
  },
  {
    id: 23,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '04-01-2021',
    customer: 'Leo',
    type: 'Cash'
  },
  {
    id: 24,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '04-01-2021',
    customer: 'Game',
    type: 'Cash'
  },
  {
    id: 25,
    product: {
      id: 6,
      name: 'Samsung',
      model: 'A31',
      unitPrice: 7999
    },
    saleDate: '04-01-2021',
    customer: 'U',
    discount: 0.3,
    type: 'Airpay'
  },
  {
    id: 26,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '05-01-2021',
    customer: 'Boy',
    type: 'Credit'
  },
  {
    id: 27,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 28,
    product: {
      id: 12,
      name: 'Vivo',
      model: 'V20',
      unitPrice: 10999
    },
    saleDate: '05-01-2021',
    customer: 'Boom',
    type: 'True Wallet'
  },
  {
    id: 29,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '05-01-2021',
    customer: 'Am',
    type: 'Cash'
  },
  {
    id: 30,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '06-01-2021',
    customer: 'Um',
    type: 'True Wallet'
  },
  {
    id: 31,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '06-01-2021',
    customer: 'Win',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 32,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '06-01-2021',
    customer: 'Cin',
    type: 'Cash'
  },
  {
    id: 33,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Palm',
    discount: 0.1,
    type: 'Credit'
  },
  {
    id: 34,
    product: {
      id: 5,
      name: 'iPhone',
      model: '11 Pro',
      unitPrice: 36900
    },
    saleDate: '07-01-2021',
    customer: 'Dom',
    discount: 0.15,
    type: 'Credit'
  },
  {
    id: 35,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '07-01-2021',
    customer: 'Sern',
    type: 'True Wallet'
  },
  {
    id: 36,
    product: {
      id: 13,
      name: 'iPhone',
      model: 'SE2000',
      unitPrice: 14900
    },
    saleDate: '07-01-2021',
    customer: 'Beer',
    type: 'Cash'
  },
  {
    id: 37,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Game',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 38,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Sun',
    discount: 0.25,
    type: 'Airpay'
  },
  {
    id: 39,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '07-01-2021',
    customer: 'Tom',
    type: 'Cash'
  },
  {
    id: 40,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '08-01-2021',
    customer: 'Ham',
    type: 'Cash'
  },
  {
    id: 41,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '08-01-2021',
    customer: 'Dom',
    type: 'Credit'
  },
  {
    id: 42,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Cin',
    type: 'True Wallet'
  },
  {
    id: 43,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '08-01-2021',
    customer: 'Tle',
    type: 'Cash'
  },
  {
    id: 44,
    product: {
      id: 7,
      name: 'Oppo',
      model: 'Reno5',
      unitPrice: 19990
    },
    saleDate: '09-01-2021',
    customer: 'U',
    type: 'Cash'
  },
  {
    id: 45,
    product: {
      id: 11,
      name: 'Vivo',
      model: 'X50 Pro',
      unitPrice: 19999
    },
    saleDate: '09-01-2021',
    customer: 'Am',
    discount: 0.35,
    type: 'Airpay'
  },
  {
    id: 46,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '10-01-2021',
    customer: 'Sern',
    type: 'Cash'
  },
  {
    id: 47,
    product: {
      id: 1,
      name: 'iPhone',
      model: '12 Pro',
      unitPrice: 48900
    },
    saleDate: '10-01-2021',
    customer: 'Game',
    discount: 0.3,
    type: 'Credit'
  },
  {
    id: 48,
    product: {
      id: 9,
      name: 'Samsung',
      model: 'A42',
      unitPrice: 11990
    },
    saleDate: '10-01-2021',
    customer: 'Jit',
    type: 'Cash'
  },
  {
    id: 49,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '10-01-2021',
    customer: 'Snap',
    type: 'True Wallet'
  },
  {
    id: 50,
    product: {
      id: 2,
      name: 'iPhone',
      model: '12',
      unitPrice: 32900
    },
    saleDate: '10-01-2021',
    customer: 'Micky',
    type: 'Cash'
  },
  {
    id: 51,
    product: {
      id: 3,
      name: 'Samsung',
      model: 'S21',
      unitPrice: 27900
    },
    saleDate: '11-01-2021',
    customer: 'Boss',
    discount: 0.2,
    type: 'Credit'
  },
  {
    id: 52,
    product: {
      id: 8,
      name: 'Xiaomi',
      model: 'Redmi 9C',
      unitPrice: 3399
    },
    saleDate: '11-01-2021',
    customer: 'Leo',
    discount: 0.05,
    type: 'Credit'
  },
  {
    id: 53,
    product: {
      id: 10,
      name: 'Vivo',
      model: 'V20 Pro',
      unitPrice: 14999
    },
    saleDate: '11-01-2021',
    customer: 'Sine',
    discount: 0.15,
    type: 'True Wallet'
  },
  {
    id: 54,
    product: {
      id: 14,
      name: 'iPhone',
      model: '12 Mini',
      unitPrice: 25900
    },
    saleDate: '07-01-2021',
    customer: 'Um',
    discount: 0.1,
    type: 'Cash'
  }
];

// 1. จำนวน transaction(ธุรกรรม) ทั้งหมด
let result1 = sales.length
console.log(result1) //54

// 2. จำนวนลูกค้าที่แตกต่างกัน มีใครบ้าง แต่ละคนซื้อไปยอดรวมกันเท่าไหร่ กี่เครื่อง
/* Expect result
result=[
  {name: 'Sun', sumPay: 86099, countProduct: 3},
  {name: 'Tle', sumPay: 109700, countProduct: 3},
  {name: 'Beer', sumPay: 51800, countProduct: 2},
  ........
]
*/
let result2 = sales.reduce((acc = [], obj) => {
  //  obj is 
  //  id: 54,
  //   product: {
  //     id: 14,
  //     name: 'iPhone',
  //     model: '12 Mini',
  //     unitPrice: 25900
  //   },
  //   saleDate: '07-01-2021',
  //   customer: 'Um',
  //   discount: 0.1,
  //   type: 'Cash'
  let newCustomer = true;
  let countIndex = -1;
  for (let accObj of acc) {
    countIndex++;
    if (accObj.name == obj.customer) {
      newCustomer = false;
      break;
    }
  }
  // New customer
  if (newCustomer) {
    const addObj = {};
    addObj.name = obj.customer;
    addObj.sumPay = obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    addObj.countProduct = 1;
    acc.push(addObj);
    return acc;
  } else {
    acc[countIndex].countProduct++;
    acc[countIndex].sumPay += obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    return acc;
  }

}, [])
console.log(result2)
// จำนวนลูกค้า =26 คน อื่นๆดูใน console

// 3. ยอดขายทั้งหมด (หลังหัก discount)
let totalSale = result2.reduce((acc, obj) => acc + obj.sumPay, 0)
console.log(totalSale) //1389707

// 4. สินค้าที่ถูกขายมี่กี่ยี่ห้อ แต่ละยี่ห้อขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
/* Expect result
result=[
  {brand: banana,countProduct: 5,sumSale: 500000},
  {brand: banana,countProduct: 5,sumSale: 500000},
  {brand: banana,countProduct: 5,sumSale: 500000},
  .......
]
*/
let result4 = sales.reduce((acc = [], obj) => {
  //  obj is 
  //  id: 54,
  //   product: {
  //     id: 14,
  //     name: 'iPhone',
  //     model: '12 Mini',
  //     unitPrice: 25900
  //   },
  //   saleDate: '07-01-2021',
  //   customer: 'Um',
  //   discount: 0.1,
  //   type: 'Cash'
  let newBrand = true;
  let countIndex = -1;
  for (let accObj of acc) {
    countIndex++;
    if (accObj.brand == obj.product.name) {
      newBrand = false;
      break;
    }
  }
  // New customer
  if (newBrand) {
    const addObj = {};
    addObj.brand = obj.product.name;
    addObj.sumSale = obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    addObj.countProduct = 1;
    acc.push(addObj);
    return acc;
  } else {
    acc[countIndex].countProduct++;
    acc[countIndex].sumSale += obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    return acc;
  }

}, [])
console.log(result4)
// จำนวนยี่ห้อ =5 คน อื่นๆดูใน console

// 5. สินค้าที่ถูกขายมีกี่รุ่นในแต่ละยี่ห้อ แต่ละรุ่นขายไปกี่เครื่อง และ ยอดรวมเท่าไหร่
/* Expect result
result={
  iphone: [{model: 12,countProduct: 5,sumSale: 500000},{model: 13,countProduct: 5,sumSale: 500000}],
  samsung: [{model: 12,countProduct: 5,sumSale: 500000},{model: 13,countProduct: 5,sumSale: 500000}],
  oppo: [{model: 12,countProduct: 5,sumSale: 500000},{model: 13,countProduct: 5,sumSale: 500000}],
  .......
}
*/
// Try to sort model
/*
const iPhone = sales.reduce((acc = [], obj) => {
  // obj =
  // {
  //   id: 54,
  //   product: {
  //     id: 14,
  //     name: 'iPhone',
  //     model: '12 Mini',
  //     unitPrice: 25900
  //   },
  //   saleDate: '07-01-2021',
  //   customer: 'Um',
  //   discount: 0.1,
  //   type: 'Cash'
  // }
  if (obj.product.name == 'iPhone') {
    // newModelCheck
    let newModel = true;
    let countIndex = -1;
    for (let accObj of acc) {
      countIndex++;
      if (accObj.model == obj.product.model) {
        newModel = false;
        break;
      }
    }
    if(newModel){
      newObj = {}
      newObj.model =obj.product.model;
      newObj.countProduct=1;
      newObj.sumSale=obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
      acc.push(newObj)
    }else{
      acc[countIndex].countProduct++;
      acc[countIndex].sumSale += obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    }
    return acc;
  }
  return acc;
}, [])
*/

//######### Make it to function ###########
function sortModel(model){
  const summary=sales.reduce((acc = [], obj) => {
    if (obj.product.name == model) {
      // newModelCheck
      let newModel = true;
      let countIndex = -1;
      for (let accObj of acc) {
        countIndex++;
        if (accObj.model == obj.product.model) {
          newModel = false;
          break;
        }
      }
      if(newModel){
        newObj = {}
        newObj.model =obj.product.model;
        newObj.countProduct=1;
        newObj.sumSale=obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
        acc.push(newObj)
      }else{
        acc[countIndex].countProduct++;
        acc[countIndex].sumSale += obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
      }
      return acc;
    }
    return acc;
  }, [])
  return summary;
}
const iPhone=sortModel('iPhone')
const Samsung=sortModel('Samsung')
const Oppo=sortModel('Oppo')
const Xiaomi=sortModel('Xiaomi')
const Vivo=sortModel('Vivo')


const result5 = {iPhone,Samsung,Oppo,Xiaomi,Vivo}
console.log(result5) // look in console

// 6. หายอดรวมของการจ่ายแต่ละประเภท (Cash, Credit, ...)
let result6 = sales.reduce((acc = [], obj) => {
  //  obj is 
  //  id: 54,
  //   product: {
  //     id: 14,
  //     name: 'iPhone',
  //     model: '12 Mini',
  //     unitPrice: 25900
  //   },
  //   saleDate: '07-01-2021',
  //   customer: 'Um',
  //   discount: 0.1,
  //   type: 'Cash'
  let newType = true;
  let countIndex = -1;
  for (let accObj of acc) {
    countIndex++;
    if (accObj.type == obj.type) {
      newType = false;
      break;
    }
  }
  // New type
  if (newType) {
    const addObj = {};
    addObj.type = obj.type;
    addObj.totalPayment = obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    acc.push(addObj);
    return acc;
  } else {
    acc[countIndex].totalPayment += obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    return acc;
  }

}, [])
console.log(result6)

// 7. หายอดรวมในแต่ละวัน
let result7 = sales.reduce((acc = [], obj) => {
  //  obj is 
  //  id: 54,
  //   product: {
  //     id: 14,
  //     name: 'iPhone',
  //     model: '12 Mini',
  //     unitPrice: 25900
  //   },
  //   saleDate: '07-01-2021',
  //   customer: 'Um',
  //   discount: 0.1,
  //   type: 'Cash'
  let newDate = true;
  let countIndex = -1;
  for (let accObj of acc) {
    countIndex++;
    if (accObj.saleDate == obj.saleDate) {
      newDate = false;
      break;
    }
  }
  // New type
  if (newDate) {
    const addObj = {};
    addObj.saleDate = obj.saleDate;
    addObj.totalPayment = obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    acc.push(addObj);
    return acc;
  } else {
    acc[countIndex].totalPayment += obj.product.unitPrice * (1 - (obj.discount || 0)).toFixed(0);
    return acc;
  }

}, [])
console.log(result7)

// 8. เรียงยอดขายของแต่ละรุ่นจากมากไปน้อย
const allModelDetail=[].concat(iPhone,Samsung,Oppo,Xiaomi,Vivo)
// เรียงจากมากไปน้อย
const sortModelFn= (a,b) => -(a.sumSale-b.sumSale) //ใส่ - เพราะให้มันเรียงจากมากไปน้อย
allModelDetail.sort(sortModelFn);
console.log(allModelDetail)


// 9. เรียงลูกค้าที่ซื้อ มากที่สุดจากมากไปน้อย
const sortCustomerFn= (a,b) => -(a.sumPay-b.sumPay) //ใส่ - เพราะให้มันเรียงจากมากไปน้อย
result2.sort(sortCustomerFn);
console.log(result2)
