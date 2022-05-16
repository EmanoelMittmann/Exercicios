

export default class Superhero{
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
}

export function printHeroName(hero){
    console.log(`Superhero name is: ${hero.name}`);
}

export function printHeroPower(hero){
    console.log(`Superhero power is: ${hero.power}`);
}

// /*map */
// const numeros= [1,2,5,7,19];

// // for(let i = 0; i < numeros.length; i++){
// //     novoArrayMap.push(numeros[i] * 2)
// // }
// const novoArrayMap = numeros.map(numero => numero *2);

// console.log(novoArrayMap)

// // const nomes = ['Aryton','Teshima', 'Teste', 'Fulano de tal'];

// // const nomesMinusculos = nomes.map(nome =>nome.toLowerCase())

// // console.log(nomesMinusculos)
// // console.log(nomes)
 
// let mult2 = []

// /*filter  */
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] % 2 === 0){
//         mult2.push(numeros[i]);
//     }
// }

// const numerosFiltrados = numeros.filter(numero => numero % 2 === 0);

// console.log('numerosFiltrados', numerosFiltrados);

// /*map and filter */

// const arrayMapFilter = numeros
//  .filter(numero => numero % 2 === 0)
//  .map(numero => numero * 2);

//  console.log(arrayMapFilter)

//  /*reduce */

//  let soma = 0;

//  for(let i = 0;i<numeros.length; i++){
//     soma+=numeros[i];
//  }

//  console.log(soma);

//  const somareduce = numeros.reduce(function(valorAcumulador, valorArray){
//     return valorAcumulador + valorArray;
// },0)

// /* const somareduce = numeros.reduce((valorAcumulador,
//  valorArray) => valorAcumulador + valorArray, 0)*/

// console.log(somareduce);


// const pessoas = [
//     {
//         nome :"Joao",
//         idade:27
//     },
//     {
//         nome:"Thiago",
//         idade:15
//     },
//     {
//         nome:"Maria",
//         idade:23
//     },
//     {
//         nome:"Joana",
//         idade:21
//     },
//     {
//         nome:"Lucas",
//         idade:32
//     }
// ]

// const pessoasAgrupadas = pessoas.reduce(function(valorAcumulador, valorArray){
//     const propMaiorouMenor = valorArray.idade >= 18 ?
//     'maiores' : 'menores';

//     valorAcumulador[propMaiorouMenor].push(valorArray);

//     return valorAcumulador;
// },{maiores:[] ,menores:[]})

// console.log(pessoasAgrupadas)