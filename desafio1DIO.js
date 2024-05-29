let lines = gets().split('\n');
var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {


	if (i % 2 ===  0  ) 
          print(`${i}^2 = ${ i * i  }`);
}

/* QUESTÃO
 Leia um valor inteiro N. Apresente o quadrado de cada um dos valores 
 pares, de 1 até N, inclusive N, se for o caso.
 ENTRADA
 A entrada contém um valor inteiro N (5 < N < 2000).
 SAÍDA
 Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme 
 o exemplo abaixo.
*/