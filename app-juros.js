// Importação Readline-sync
import inputDados from 'readline-sync';

// titulo da aplicação
console.log(`Aplicação de Juros:\n`);

// declaração de variaveis
let valorOriginal = inputDados.question(`Informe o valor devido: `);
let diasVencidos = inputDados.question(`Informe quantos dias se passaram após o vencimento: `);

let juros;
let taxaJuros;

// utilizando condicionais
if (diasVencidos >= 15) {
    juros = 0.1;
    taxaJuros = 10;
} else {
    juros = 0.05;
    taxaJuros = 5;

}

// Finalizando
let valorTotal = Number(valorOriginal) + (Number(valorOriginal) * juros);

console.log(`\nValor original da dívida: R$${valorOriginal}`);
console.log(`Dias Atrasados: ${diasVencidos}`);
console.log(`Taxa de Juros: ${taxaJuros}%`);
console.log(`Valor com Juros: R$${valorTotal}`);
