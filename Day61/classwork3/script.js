// 1
// function wheater(day){
//     if(day == "sun" || day == "rain"){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(playOnSide("rain"))

// // 2

// function  wheater2(day){
//     if(day == "warm" || day == "cold"){
//         return "შეგიაძლია ჭამო ნაყინი"
//     }else{
//         return  "შენ ვერ შეჭამ ნაყინს"
//     }
// }

// console.log(wheater2("warm"))

// 3

function boolean(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if(num1 > 18 && num2 > 18){
        alert("ორივე რიცხვი მეტია 18-ზე")
    }else if(num1 > 18 || num2 > 18){
        alert("ერთ-ერთი რიცხვი მეტია 18-ზე")
    }else{
        alert("არცერთი არ არის 18-ზე მეტი")
    }

    return 
}