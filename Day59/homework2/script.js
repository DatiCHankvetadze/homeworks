function make_p(){
    const p = document.getElementById("p1");
    const text = document.getElementById("text");
    const color = document.getElementById("color");
    const background_color = document.getElementById("background");
    const body = document.getElementById("body");

    p.textContent = text.value;
    body.style.backgroundColor = background_color.value;
    p.style.color = color.value;

}