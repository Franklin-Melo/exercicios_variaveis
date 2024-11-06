const populacaoInfectada =1000;
const transmitirParaPessoas = 4;
const tempo = 100;

const pessoasInfectadas = populacaoInfectada*(transmitirParaPessoas **(tempo/7));
console.log(pessoasInfectadas.toFixed(2));