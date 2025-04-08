//Laços de Repetições para listar o ano atual até 10 anos à frente

const anoAtual = new Date().getFullYear();
const selectYear = document.getElementById("expiryYear") 

for (let ano = anoAtual; ano <= anoAtual + 10; ano++) {
    console.log(ano);
    const option = document.createElement("option");

    option.value = ano;
    option.textContent = ano;
    selectYear.appendChild(option);
};

// Laços de Repetições para listar os meses do ano

const selectMonth = document.getElementById("expiryMonth")

for (let mes = 1; mes <= 12; mes++) {
    const option = document.createElement("option");

    option.value = mes;
    option.textContent= mes;
    selectMonth.appendChild (option);
}