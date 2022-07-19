// cria o MAP e carrega dados em seus nós

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

// faz iteração pelo MAP - É uma função? Creio que não, pois não tem a palavra "function"
const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

// lista o MAP
console.log(userRoles);

console.log("LISTANDO APENAS O ELEMENTOS QUE SEJAM ADMIN")

// aciona a iteração do map
console.log(getAdmins(userRoles));