// function hello(texto) {
//     console.log(texto);
// }

// // hello("Bom dia!")
// // hello("Boa noite!")

// function saudacao(horario) {
//     if (horario < 12) {
//         return "Bom dia!";
//     } else if (horario < 18) {
//         return "Boa tarde";
//     } else {
//         return "Boa noite";
//     };
// };

// console.log(saudacao(8))

// // Calculadora com javascript
// // const promptValor1 = prompt("Digite o valor 1:");
// // const promptValor2 = prompt("Digite o valor 2:");

// // console.log(Number(promptValor1));
// // Number()
// // parseInt()
// // parseFloat()
// function soma(n1, n2) {
//     return Number(n1) + Number(n2);
// }

// // console.log(soma(promptValor1, promptValor2))


// // Verificar se o número é ímpar ou par
// // const valor1 = Number(prompt("Digite um número:"));

// function verificarParOuImpar(numero) {
//     if (numero % 2 === 0) {
//         return `O resultado foi par e o número foi: ${numero}`;
//     } else {
//         return `O resultado foi ímpar e o número foi: ${numero}`;
//     }
// }

// // console.log(verificarParOuImpar(valor1));

// // Crie uma funcao que verifica se um número é maior que o outro
// // const valor1 = Number(prompt("Digite o valor 1:"));
// // const valor2 = Number(prompt("Digite o valor 2:"));

// function verificaNumeroMaior(numero1, numero2) {
//     if (numero1 > numero2) {
//         return numero1
//     } else if (numero2 > numero1) {
//         return numero2
//     } else {
//         return "Os dois numero sao iguais"
//     }
// }

// // console.log(verificaNumeroMaior(valor1, valor2))

// // Escopo local

// function exibeNome() {
//     const nome = "Gabriel";

//     console.log(nome)
// }

// exibeNome()

// // Escopo global

// const sobrenome = "Angelo"

// function exibeSobrenome() {
//     console.log(sobrenome);
// }

// console.log(sobrenome);

// exibeSobrenome()



const titulo = document.getElementById("titulo")

console.log(titulo)

function trocarOTitulo() {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    return titulo.innerHTML = "Novo título";
}