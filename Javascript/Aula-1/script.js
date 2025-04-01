//string (textos)

// ""
// ''
// ``

console.log(typeof "Hello World");

//Number (Números)

//1
//2
//99999

console.log(typeof 1);

//Boolean (Lógico)
//true
//false

console.log(true);

// Object (Objeto)
// {}

//Array (Listas)
// []

//Variavéis 
//let
let idade = 20;
console.log(idade);
idade = 19;
console.log(idade);

//const
const nome = "Italo";
console.log(nome);

//Estruturas Condicionais

if (idade >= 18) {
    console.log("Maior de Idade");
} else {
    console.log("Menor de Idade");
}

//Exercícios

//1.  Receba 3 notas de um aluno e calcule a média.

const nota1 = 7;
const nota2 = 4;
const nota3 = 10;
const mediaminima = 7;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= mediaminima) {
    console.log("Media = " + media);
    console.log("Aprovado");
} else {
    console.log(media)
    console.log("Reprovado");
}

//2. Crie uma calculadora que receba 2 números e retorne a soma.

const numero1 = 9;
const numero2 = 5;

const soma = (numero1 + numero2);
console.log(soma);

//3. Faça um calculo de IMC.

const peso = prompt("Insira seu peso em quilos.");
const altura = prompt("Insira sua altura em Metros.")
const IMC = peso / (altura * altura);

if (IMC >= 30) {
    alert("Seu IMC: " + IMC)
    alert("Você está com obesidade")
    alert("D:")
} else if (IMC >= 25) {
    alert("IMC: " + IMC)
    alert("Você está com Sobrepeso")
    alert("D:")
} else if (IMC >= 18.5) {
    alert("IMC: " + IMC)
    alert("Você está com o Peso Adequado")
    alert(":D")
} else if (IMC < 18.5) {
    alert("IMC: " + IMC)
    alert("Você está Abaixo do Peso")
    alert("D:")
}