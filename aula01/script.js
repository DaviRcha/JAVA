//console

console.log("Hello Word!!");
console.error('Vixxe deu erro aqui');
console.warn("Sera que isso foi uma indireta?");
console.clear();

//Trabalhando com variaveis
// caxinha que pode colocar oque vc quiser mas so uma informação O termo tecnico 

let idade = 16;
console.log(idade);
idade = 17;
console.log(idade);
const nome = "Davi";
console.log(nome);

//Tipos de Variaveis
console.clear()
const num01 = 8;// tipo number
const num02 = 8.5;//tipo number decimal 
const name = "Davi_Rocha";//tipo string texto
const verdadeiro = true;//tipo booleano verdadeiro
const falso = false;//tipo booleano falso
const nulo = null;//tipo nulo sei oque da
const indefinido = undefined;//tipo indefinido nao sei oque da

//Exibindo os tipos de variaveis

console.log(typeof num01);
console.log(typeof num02);
console.log(typeof name);
console.log(typeof verdadeiro);
console.log(typeof falso);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(num01*num02)

//concatenação de variaveis
//Concatenação = juntar uma variavel com outra
console.clear();
const mes = "Junho";
const dia = 16;
console.log(mes+"/"+dia)
console.log(mes+" "+dia)
console.log(`São Paulo, ${dia} de ${mes} de 2025`)
