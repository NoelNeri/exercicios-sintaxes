    function validaArray (arr, num) {
        try {
            if (!arr && !num) throw new ReferenceError("Nenhum Parâmetro foi enviado. Envie os dois parâmetros.");

            if (typeof arr !== 'object') throw new TypeError("Tipo de parâmetro lista errado. Escreva uma lista entre [] com um elemento ou mais.");

            if (typeof num !== 'number') throw new TypeError("Tipo de parâmetro número errado. Escreva o número com o tamanho da lista.");

            if (arr.length != num) throw new RangeError("Número de elementos na lista difere do número informado no parâmetro.")
        }
        catch(e) {
            if (e instanceof ReferenceError) {
                console.log('Deu erro: ', e.name);
                console.log(e.name);
                console.log(e.stack);
            } else if (e instanceof TypeError) {
                console.log('Deu erro TypeError!');
                console.log(e.stack);
                } else if (e instanceof RangeError) {
                    console.log('Deu erro RangeError!');
                    console.log(e.stack);
                    } else {
                        console.log('Deu um tipo de erro não conhecido!', e);
                    }

        }
        finally {
            console.log("Lista enviada: ", arr);
            console.log("Numero enviado: ", num);
        }
}

// Testes sem parâmetros
console.log("===============Teste com parâmetro vazio");
console.log(validaArray());

// Testes com lista vazia
console.log("===============Teste com lista vazia");
console.log(validaArray([], 0));

// // Testes com lista com palavra
console.log("===============Teste com lista com palavra");
console.log(validaArray("AMOR", 0));

// // Testes com lista com número vazio
console.log("===============Teste com número vazio");
console.log(validaArray([1, 2, 3],));

// // Testes com lista com número igual a letra
console.log("===============Teste com número igual a letra");
console.log(validaArray([1, 2, 3], "A"));

// // Testes com lista com número Divergente
console.log("===============Teste DIVERGENTE");
console.log(validaArray([1, 2, 3], 0));

// // Testes ok
console.log("===============Teste OK");
console.log(validaArray([1, 2, 3, 4, 8, 14], 6));