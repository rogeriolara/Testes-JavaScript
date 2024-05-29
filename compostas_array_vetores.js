let valores = [1, 6, 8, 4, 6, 2]

/* for (let pos=0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
} 

enquanto pos for menor que valores.length, faz pos++ adicionando +1

*/

for (let pos in valores) { // para cada posição dentro de valores, mostra o valores pos //
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}