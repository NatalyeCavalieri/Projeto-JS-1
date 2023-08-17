/*
solicitar ao usuário que ele insira dois números
- [/ ]  A soma dos dois números;
- [/ ]  A subtração dos dois números;
- [/ ]  A multiplicação dos dois números;
- [/ ]  A divisão dos dois números;
- [/ ]  O resto da divisão dos dois números;

- [/ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;

criar uma condição, em que se o resto da divisão (Operador %) da variável sum, 
dividido por 2 ser == 0, é porque o número é par, caso contrário, o número é ímpar.

- [/ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/


alert("Caro, usuário! Insira dois números a seguir")
let numberOne = prompt("Primeiro número:")
let numberTwo = prompt ("Segundo número:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restdiv = numberOne % numberTwo

alert("A soma dos dois números é: " + sum)
alert("A subtração dos dois números é: " + sub)
alert("A multiplicação dos dois números é: " + mult)
alert("A divisão dos dois números é: " + div.toFixed(2))
alert("O resto da divisão dos dois números é: " + restdiv)


if(restdiv /2 ==0){
  alert("A soma dos dois números é par: " + sum)
}else{
  alert("A soma dos dois números é impar: " + sum)
}

if(numberOne == numberTwo){
  alert("Os numeros inseridos são iguais")
}else{
  alert("Os números inseridos são diferentes")
}
