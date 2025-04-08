// Objetos em JavaScript

// function ligarCarro() {

//     console.log("Carro Ligado");
// }

const carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2020, 
    cor: "Preto",
    corInterior: "Bege",
    cambio: "Automático",
    premium: true,
    preco: 120000,
    precoRevenda: 1000,
    ligar: ()=> {
        console.log("Carro Ligado");
    },
    cliente: {
        nome: "Italo",
        idade: "19",
        dataCompra: "05/04/2005",
    }
};

console.log(carro);

console.log(carro.cliente.nome);

// Acessando o preço do carro

console.log(carro.preco);

console.log(carro["cor"]);

// Vamos criar uma mensagem avisando que o carro está pronto para retirada.

const mensagem = "Olá, " + carro.cliente.nome + ". Seu carro: " + carro.marca + ' ' +  carro.modelo + " já está pronto para retirada.";  

const mensagemDois = `Olá, ${carro.cliente.nome}! Seu carro: ${carro.marca} ${carro.modelo} já está pronto para retirada.`


console.log(mensagem)
console.log(mensagemDois)

//Ligar o Carro

carro.ligar()

// Criando Livro emprestado 

const livro = {
    nome: "Ordem Paranormal",
    autor: "Rafael Lange",
    editora: "Jambo Editora",
    estilo: "RPG, Ficção",
    ano: 2022, 
    emprestado: ()=> {
        console.log("Livro Emprestado");
    },
    disponivel: false,
    cliente: {
        nome: "Carlos",
        idade: 19,
        dataEmprestado: "04/04/2025",
        dataDevolucao: "14/04/2025",
    }
}

livro.emprestado();

