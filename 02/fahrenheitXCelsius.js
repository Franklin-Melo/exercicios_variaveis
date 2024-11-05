const fahrenheit = 73;
const celsius = (fahrenheit - 32) * 5/9;
console.log(`Celsisus: `+ celsius);
//Exemplo com o Número 22.77777777
//Para aproximar Zero casa decimal ele apoxima o 22 para o 23
console.log(`Celsisus Com To Fixed Com 0: ` + celsius.toFixed(0))
//Para aproximar uma casa decimal ele apoxima o 22.7 para o 22.8
console.log(`Celsisus Com To Fixed Com 1: ` + celsius.toFixed(1))
//Para aproximar Duas casa decimal ele apoxima o 22.77 para o 22.78
console.log(`Celsisus Com To Fixed Com 2: ` + celsius.toFixed(2))