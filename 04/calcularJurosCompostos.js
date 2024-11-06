const capital = 1000;
const periodo = 5;
const taxa = 12.5/100;
const montante = capital*(1+taxa)**periodo;
console.log(montante.toFixed(0));