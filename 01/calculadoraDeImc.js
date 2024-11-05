
const peso = 76;
const altura = 1.79;
const imc = peso/altura **2;

console.log(`IMC: ` + imc);
console.log(`IMC Com To Fixed: ` + imc.toFixed(1));

const imcMath = peso /Math.pow(altura, 2);
console.log(`IMC com Math: ` + imcMath);
const mathArredondado = Math.round(imcMath *10)/10;
console.log(`IMC com Math arendondado: `+ mathArredondado);