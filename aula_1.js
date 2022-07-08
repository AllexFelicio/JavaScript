//declara variavel
var nome = "Alex Sander";
var idade = 22;
var frase="Japão é o melhor time do mundo"
//mostra um pop-up na pagina
alert( name+ " tem "+idade+" anos ");

console.log(nome);
console.log(idade);

//Troca palavra por outra
console.log(frase.replace("Japão","Brasil"));

//troca a palavra e deixa tudo em maiusculo
console.log(frase.replace("Japão","Brasil").toUpperCase());

//-----------------Array e Dicionario------------------------

var lista = ["maça","pera","laranja"];
//mostra todos os itens do array
console.log(lista);

//mostra o item do indice indicado
console.log(lista[0]);

//adiciona itens no array
lista.push("uva");

//remove itens no array
lista.pop();

//ver a quantidade de elementos da lista ou tamanho
console.log(lista.length);

//mostra a lista ao contrario
console.log(lista.reverse());

//mudar de array para string
console.log(lista.toString());

//dicionario 
var fruta={
    nome:"maça",
    cor:"vermelho"
}
console.log(fruta.nome);

//lista de dicionario
var frutas = [{nome:"Banana",cor:"amarelo"},
{nome:"uva",cor:"roxo"},
{nome:"morango",cor:"vermelho"}]
console.log(frutas[1].nome);

//--------------------------Data e estrutura de repetição/condição-----------------------

//pegar data atual
var d= new Date();
//mostra todas as informações
alert(d);
//mostra o mes
alert(d.getMonth()+1);
//mostra os minustos
alert(d.getMinutes());


//estrutura de repetição
var count =0;
while(count<=5){
    console.log(count);
    count++;
}
var count;

for(count=0; count<=5; count++){
        console.log(count);
        
}

//estrutura de condição
var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
