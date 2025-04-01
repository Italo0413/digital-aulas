const titulo = document.getElementById("titulo");
const paragraph = document.querySelector("p")
console.log(titulo);

function darkmode(){
    document.body.style.backgroundColor = "black";
    titulo.style.color = "white";
    paragraph.style.color = "white";
    return titulo.innerHTML = "Novo Título";
};

function lightmode(){
    document.body.style.backgroundColor = "white";
    titulo.style.color = "black";
    paragraph.style.color = "black";
    return titulo.innerHTML = "Olá, Mundo!";
}