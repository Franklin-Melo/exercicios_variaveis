const meuDinheiro = 80.00;
const valorDoTenis = 129.99;
const descontoEmDinheiro = valorDoTenis - meuDinheiro;
console.log(`Desconto Em Reais: ` + descontoEmDinheiro);

const cupom = descontoEmDinheiro * 100 /valorDoTenis;
console.log("Cupom de desconto: " + cupom + "%");
//Outras formas de visualização
console.log(`Cupom de desconto: ${cupom}%`);
console.log(`Cupom de desconto:  ${cupom.toFixed(2)}`);



                                                                                                                                                                                                                                                                                                                                                                                                                                                           