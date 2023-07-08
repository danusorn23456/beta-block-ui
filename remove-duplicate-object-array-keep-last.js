let objArr = [{ name: "robot", version: 1 }, { name: "robot", version: 2 }, { name: "human", version: 1 }]
let uniqName = []
let nonDupObjArr = objArr.filter((o, index) => objArr.findLastIndex(co => co.name === o.name) === index)
console.log(nonDupObjArr)
