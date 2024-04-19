function changetext(){
    let p = document.getElementById("p1");
    let text = document.getElementById("text").value;
    let color = document.getElementById("color").value;

    p.textContent = text;
    p.style.color = color;green
}