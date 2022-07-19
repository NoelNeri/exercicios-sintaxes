
// Criando uma matriz de Alunos com nome, nota e turma
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Milena',
		nota: 3,
		turma: '2C',
	},
];

// Criando a função alunosAprovados que criar uma matris a partir da "alunos" só com alunos com notas superiores à 5

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome, nota);
		}
	}

	return aprovados;
}

// aciona a função alunosAprovados

console.log('=============>>>>>> ALUNOS COM MEDIA MAIOR OU IGUAL A 5');
console.log(alunosAprovados(alunos, 5));

console.log('=============>>>>>> ALUNOS COM MEDIA MAIOR OU IGUAL A 6');
console.log(alunosAprovados(alunos, 6));

console.log('=============>>>>>> ALUNOS COM MEDIA MAIOR OU IGUAL A 7');
console.log(alunosAprovados(alunos, 7));


console.log('FIM DO PROGRAMA');