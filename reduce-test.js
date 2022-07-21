// define função de soma
function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

// DEFINE FUNÇÃO DE SALDO
function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	return itens.reduce(function(prev, current, index) {
        console.log("==================================");
        console.log("Rodada: ", index + 1);
        console.log("saldo anterior: ", { prev });
        console.log("saldo atual: ", { current });
        return prev - current.preco;
    }, saldo);
}

listaVazia = [];
lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;




// exibe resultado do REDUCE
console.log(somaNumeros([1, 1, 1, 3, 4, 100]));

// EXIBE RESULTAOD DE SALDO

console.log("ENVIANDO LISTA VAZIA");
console.log(calculaSaldo(saldo, listaVazia));
console.log("ENVIANDO SEM PARÂMETRO DE LISTA");
console.log(calculaSaldo(saldo));
console.log("ENVIANDO SEM QUALQUER PARÂMETRO");
console.log(calculaSaldo());

console.log("Saldo final é: ", calculaSaldo(saldo, lista));

