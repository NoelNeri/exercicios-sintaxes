function filtraNum(arr, tipo) {
	if (!arr || !arr.length) return "Parametro vazio";

    filteredArr = [];
    if (tipo == "par") {
	    filteredArr = arr.filter((item) => item % 2 === 0);}
    else {
        filteredArr = arr.filter((item) => item % 2 !== 0);}
    
	return filteredArr;
}

console.log(filtraNum([1, 2, 3, 4]), " - impares");

console.log(filtraNum([1, 2, 3, 4], "par"), " - pares");