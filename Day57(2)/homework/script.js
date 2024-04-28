function changeDivText(){
    let div = document.getElementById("div");
    let p = document.getElementById("p1");
    let color = document.getElementById("color").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let text = document.getElementById("text").value;


    div.style.backgroundColor = color;
    div.style.width = width + "px";
    div.style.height = height + "px";
    p.textContent = text;
}