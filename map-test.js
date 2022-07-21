// declaração de constantes
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

const array = [1, 2, 3, 4, 5];

// Criando a função de tabela de preços
function mapArray(fruta) {
	return array.map(function (item) {
		return item * this.price;
	}, fruta);
}


console.log("=================== TESTE COM THIS ==== TABELA DE PREÇO =====");

console.log("O preço da maçã é ", mapArray(apple));

console.log("O preço da laranja é ", mapArray(orange));

console.log("=================== TESTE SEM THIS ==== DOBRANDO VALORES DA MATRIZ =====");

// Exibindo o método MAP para o array
console.log(array.map((item) => item * 2), "--> Valor original multiplicado por 2");

console.log(array, "---> Valor original");