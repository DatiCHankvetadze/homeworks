const carInfo = {
    brand: "mercedes",
    model: "GLC",
    year: 2020,
    color: "black",
    engine: 6.5,
    fullInfo:  function fullInfo(){
         const flInfo = "car brand is " + carInfo.brand + " " + "model is " + carInfo.model + " " + "year is " + carInfo.year + " " + "car color is " + carInfo.color + " " + "engine " + carInfo.engine;
         return flInfo
    }
}

console.log(carInfo)
console.log(carInfo.fullInfo())