const myInfo = {
    name: "Dati",
    gmail: "Datichankvetadze@gmail.com",
    work: {
        money: 0,
        time: 24
    },
    home: {
        adress: "saburtalo"
    }
}


myInfo.work.money = 10000;
myInfo.work.time = 12;
myInfo.home.adress = "vake"

console.log(myInfo)
console.log(myInfo.work.money);
console.log(myInfo.work.time);
console.log(myInfo.home.adress)