const montante = 90.000;
const  capital = 60.000;
const numeroDeMeses = 24;
const taxaDeJuros = (montante/capital)**(1/numeroDeMeses) -1
// Exibindo o resultado
console.log("O valor da taxa em decimal é:", taxaDeJuros);
console.log("O valor da taxa em porcentagem é:", taxaDeJuros*100 + "%");
  