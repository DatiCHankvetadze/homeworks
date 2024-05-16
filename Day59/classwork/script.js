console.log(typeof (2 + "dati")); 
console.log(Number("110") + 10); 
console.log(parseFloat("110") + 10); 
console.log("15" - 5);
console.log("10" / 2)


// int
console.log("15" / 5)
// str
console.log("10" + 5)
// int
console.log("20" - 10)
// int
console.log("10" * 2)




function oper(){

    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const p = document.getElementById("p1")
    const operaiton = document.getElementById("operation").value;


    if(operaiton == 1){
        result = num1 + num2
    } else if(operaiton == 2){
        result = num1 - num2
    } else if(operaiton == 3){
        result = num1 / num2
    } else if(operaiton == 4){
        result = num1 * num2
    }

    p.textContent = result
}