// Laços de Repetição

// FOR

for (let i = 1; i <= 10; i = i + 1) {
    console.log(i);
}

// WHILE

let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

// DO...WHILE

let b = 1;

do {
    console.log(b);
    b++;
} while (b<=3);


// Exercício 1
// Printar do ano atual até 30 anos atrás. FOR

const anoAtual = new Date().getFullYear();

for (let ano = anoAtual; ano >= anoAtual - 110; ano--) {
    console.log(ano);
}