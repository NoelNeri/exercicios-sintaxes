//  Criação de uma matriz. Notem que há elementos repetidos
const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];


// Cria função que gera um SET a partir de um ARRAY
function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}


// LISTA O set
console.log("LISTA A MATRIZ INICIAL");
console.log(arr);
console.log("lista o resultado da função com o objeto set criado, sem repetição")
console.log(uniqueElements(arr));



// final