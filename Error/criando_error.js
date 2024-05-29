function validaArray (arr, num) { // função recebe array e número
    try {
        if (!arr && !num) throw new ReferenceError ("Enive os parâmetros"); // verifica se os parâmetros foram enviados, caso não tenha, envia a mensagem de erro
    if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo object");
    // lança esse erro "typeError" caso o array não seja do tipo object
    if (typeof num !== 'number') throw new TypeError("Num precisa ser do tipo number");
    // lança o erro "typeError"caso o número não seja do tipo number
    if (arr.length !== num) throw new RangeError ("Tamanho inválido!");
    // lança o erro "RangeError" se o tamanho do array for diferente do nº enviado como parâmetro
    return arr;
    }
    catch(e) {  // filtra as chamadas do catch para cada tipo de erro utilizando o operador Instanceof
        if (e instanceof ReferenceError) {
            console.log ("Este é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log ("Este é um TypeError!")
            console.log(e.message) 
        } else if (e instanceof RangeError) {
            console.log ("Este é um RangeError!")
            console.log(e.message)
        } else {
            console.log("Tipo de erro não esperado:" + e);
        }
 
       }
    }
    console.log(validaArray (5,5));