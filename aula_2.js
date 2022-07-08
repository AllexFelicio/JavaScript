function cliclou(){
    //muda o elemento HTML
    document.getElementById("agradece").innerHTML="Obrigado por clicar";
    
 //   alert("Obrigado por Clicar");
}

function redireciona(){
    //abre outra pagina na web
    window.open("https://github.com/AllexFelicio");
    //abre na mesma pagina web
    window.location.href="https://github.com/AllexFelicio";
}


function trocar(elemento){
    //document.getElementById("mouseover").innerHTML="Obrigado por passar o mouse!";
    elemento.innerHTML="Obrigado por passar o mouse!";
    //alert("Trocar Texto");

}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML="Passe o mouse aqui"; 
    elemento.innerHTML="Passe o mouse aqui";
}

//criar função
function soma(n1,n2){
    return n1+n2;
}

alert(soma(5,10));

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;  
    }else{
        validar=false;
    }
    return validar;
}

var idade=prompt("Qual sua idade?");

alert(validaIdade(idade));

