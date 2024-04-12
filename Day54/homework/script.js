function switchname(){
    const name1 = document.getElementById("name1");
    const name2 = document.getElementById("name2");
    const name3 = document.getElementById("name3");
}

function switchtext(){
    name1.textContent = name2.textContent;
    name2.textContent = name3.textContent;
    name3.textContent = name1.textContent;
}