// const myInfo = {
//     name: "dati",
//     email: "datichankvetadzee@gmail.com",
//     age: 17,
//     work: {
//        money: 10000,
//        workTime: 8
//     }
// }

// myInfo.work.money = 100000
// myInfo.work.workTime = 15

// console.log(myInfo.name)
// console.log(myInfo.email)
// console.log(myInfo.age)
// console.log(myInfo.work.money)
// console.log(myInfo.work.workTime.textContent)


const div = document.getElementById("div")
const color = document.getElementById("color");
const height = document.getElementById("height");
const width = document.getElementById("width");


function changediv(){
    div.style.backgroundColor = color.value;
    div.style.width = width.value + "px";
    div.style.height = height.value + "px";
    
}