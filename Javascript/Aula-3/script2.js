const pesoInput = document.getElementById("peso");
const alturaInput = document.getElementById("altura");

const grauIMC = document.getElementById("grau")
const totalIMC = document.getElementById("total-imc");

const errorPeso = document.getElementById("error-peso");
const errorAltura = document.getElementById("error-altura");

let imcGlobal = 0;

function calcularIMC(event) {
    event.preventDefault();

    const peso = Number(pesoInput.value);
    const altura = Number(alturaInput.value);

    errorPeso.classList.add("hidden");
    if (peso === 0) {
        errorPeso.classList.remove("hidden");
        grauIMC.innerHTML = "Insira os valores para calcular.";
        totalIMC.innerHTML = "00.00";
        totalIMC.className = "text-purple-900 text-4xl";
    } else {
        errorPeso.classList.add("hidden");
    }

    if (altura === 0) {
        errorAltura.classList.remove("hidden");
        grauIMC.innerHTML = "Insira os valores para calcular.";
        totalIMC.innerHTML = "00.00";
        totalIMC.className = "text-purple-900 text-4xl";

        return;
    } else {
        errorAltura.classList.add("hidden");
    }


    const imc = peso / (altura * altura);

    console.log(imc);
    imcGlobal = imc;

    totalIMC.innerHTML = imc.toFixed(2);

    if (imc >= 30) {
        grauIMC.innerHTML = "Você está com obesidade."
        totalIMC.className = "text-red-500 text-4xl";
    } else if (imc >= 25) {
        grauIMC.innerHTML = "Você está acima do peso."
        totalIMC.className = "text-orange-500 text-4xl";
    } else if (imc >= 18.5) {
        grauIMC.innerHTML = "Você está com o peso ideal."
        totalIMC.className = "text-green-500 text-4xl";
    } else if (imc < 18.5) {
        grauIMC.innerHTML = "Você está abaixo do peso."
        totalIMC.className = "text-blue-500 text-4xl";
    }

    pesoInput.value = "";
    alturaInput.value = "";

    return imc;
}