let inteiro = 10;
let decimal = 10.5;

console.log(inteiro);
console.log(decimal);

//Usado para somar dois números +
let a = 5;
let b = 3;
let soma = a + b;  
console.log(soma); 

//Usado para subtrair um número de outro. -
let c = 10;
let d = 7;
let subtracao = c - d;  
console.log(subtracao); 

//Usado para multiplicar dois números. *
let e = 4;
let f = 6;
let multiplicacao = e * f;  
console.log(multiplicacao); 

//Usado para exponenciar **. exponenciação (**)
const exp = 4;
const expp = 4 ** 2;
console.log(expp);


//Usado para dividir um número pelo outro. Note que a divisão de inteiros resulta em um número decimal se necessário.
let g = 15;
let h = 3;
let divisao = g / h;  
console.log(divisao); 

//Usado para obter o resto da divisão de um número pelo outro.
let i = 17;
let j = 5;
let modulo = i % j;  
console.log(modulo);


//Incremento:Quando o operador ++ é usado após a variável (por exemplo, x++), o valor original da variável é
// retornado antes de ser incrementado.
let x = 5;
console.log(x++); // (valor original é retornado antes do incremento)
console.log(x);   // (valor após incremento)

// Pré-incremento:Quando o operador ++ é usado antes da variável (por exemplo, ++x), o valor da variável é 
// incrementado antes de ser retornado.
let y = 5;
console.log(++y); // (valor é incrementado antes de ser retornado)
console.log(y);   // (valor após incremento)

//Decremento: Quando o operador -- é usado após a variável (por exemplo, x--), o valor original da variável é 
// retornado antes de ser decrementado.
let number = 5;
console.log(number--); // (valor original é retornado antes do decremento)
console.log(number);   // (valor após )

//Pré-Decremento:Quando o operador -- é usado antes da variável (por exemplo, --x), o valor da variável é 
// decrementado antes de ser retornado.
let Y = 5;
console.log(--Y); // Saída: 4 (valor é decrementado antes de ser retornado)
console.log(Y);   // Saída: 4 (valor após decremento)


//Crie duas variáveis com valores numéricos. Realize as seguintes operações:
//Some os dois números.
//Subtraia o segundo número do primeiro.
//Multiplique os dois números.
//Divida o primeiro número pelo segundo.
//Encontre o resto da divisão do primeiro número pelo segundo.


let numero1 = 10;
let numero2 = 3;

let somaa = numero1 + numero2;
console.log(somaa);

let subtracaoo = numero1 - numero2;
console.log(subtracaoo);

let multiplicacaoo = numero1 * numero2;
console.log(multiplicacaoo); 

let divisaoo = numero1 / numero2;
console.log(divisaoo); 

let restoo = numero1 % numero2;
console.log(restoo);


/*Math.abs(num) : Retorna o valor absoluto de um número, ou seja, se o valor for negativo, ele será convertido 
para positivo. Se positivo, o valor permanece o mesmo.
Exemplo: Math.abs(-3) => 3

Math.ceil(num): Arredonda o valor para cima. Dessa forma, se o valor possuir decimais, retorna o próximo número 
inteiro do valor analisado.
Exemplo: Math.ceil(4.2) => 5

Math.floor(num): Arredonda o valor para baixo, retornando a parte inteira do número.
Exemplo: Math.floor(7.9) => 7

Math.pow(base, exp): Retorna a base elevada ao expoente.
Exemplo: Math.pow(3, 2) => 9

Math.random(): Retorna um número aleatório entre 0 e 1, com várias casas decimais. O número aleatório possível 
inicia em 0 e vai até um valor inferior a 1.
Exemplo: Math.random() => 0.6501314074022906

Math.round(num): Arredonda o valor para o inteiro mais próximo. A partir de .5 na parte fracionária, o valor é 
arredondado para cima. Anterior a .5, é arredondado para baixo.
Exemplo: Math.round(2.7) => 3

Math.sqrt(num): Retorna a raiz quadrada do número (square root).
Exemplo: Math.sqrt(16) => 4
*/