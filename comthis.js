
// Criando uma matriz com objetos
const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

const animal = {
    nome: 'Fifi',
    idade: 3,
    raca: 'pequenes',
};

// Criando a função calculaIdade de qualquer objeto
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

// aciona a função calculaIdade com call e apply ao que parece só tem diferença no parâmetro de indice
console.log('=============>>>>>> objeto pessoa1');
console.log(calculaIdade.apply(pessoa1, [13]));

console.log('=============>>>>>> objeto pessoa3');
console.log(calculaIdade.call(pessoa3, 40));

console.log('=============>>>>>> objeto pessoa2');
console.log(calculaIdade.apply(pessoa2, [24]));

console.log('=============>>>>>> objeto animal');
console.log(calculaIdade.call(animal, 8));