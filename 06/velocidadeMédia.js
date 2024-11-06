const distanciaPercorridaEmMetros = 500;

const tempoEmSegundos = 10;

const velocidadeMedia = distanciaPercorridaEmMetros/tempoEmSegundos;

/*Para converter de metros por segundo (m/s) para quilômetros por hora (km/h), você pode multiplicar a velocidade por 3,6. Isso ocorre porque:
1 m/s=3,6 km/h
*/

console.log(`Velocidade Média: ${velocidadeMedia}m/s`);

console.log(`Velocidade Média: ${velocidadeMedia*3.6}Km/h `)