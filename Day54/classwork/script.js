function myinfo(name,lastname,age){
    const result = name + " " + lastname + " " + age;
    return result
}

console.log(myinfo("dati", "chankvetadze", 16));

function ageCheck(age){
   console.log(age > 18);
   console.log(age == 18);
   console.log(age < 18);
}

ageCheck(16)

// function changetext(){
//   name1.textContent = "dati";
//   name2.textContent = "Datuna";
//   name3,textContent = "dati";
// }

// changetext()

const p = document.getElementById("name1")

console.dir(p)

const person = {
    name: "luka",
    lastname: "chankve"
}

console.log(person)

// console.dir(document)


// davaleba 1
function multiply(num1,num2){
    const multiplied = num1 * num2;
    return multiplied
}

multiplied = multiply(5,2)
console.log(multiplied)


function sum(num1,num2){
    const sum1 = num1 + num2;
    return sum1
}

sum1 = sum(3,2)
console.log(sum1)

// davaleba 2

function greet(name){
    const hello = name.Textcontent = ""
}


// davaleba 3

function numbers(num1,num2,num3){
    const nums = (num1 + num2) * num3;
    return nums
}

nums = numbers(2,2,4)
console.log(nums)

// davaleba 4

function luwi(nums){
    const even = (nums == 2).Textcontent = "luwia"; 
    return even
}

even = luwi(2)
console.log(even)

// davaleba 5 

function samkutxedi(a,b,c){
    const sum = a + b + c
    return sum
}

sum = samkutxedi(2,3,4)
console.log(sum)

const car = {
   name: "mercedes",
   model: "S class",
   start: function start(){
    console.log("car is starting")
   },
   brake: function brake(){
    console.log("car stopped")
   }
   
}

car.start()
car.brake()

const personn = {
    name: "dati",
    lastName: "chankvetadze",
    fullname: function fullname(){
        console.log(personn.name + " " + personn.lastName)
    }

    
      
}


personn.fullname()
