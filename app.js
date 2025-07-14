//alert (" Boas vindas ao nosso site! ")

//let nome = "Lua";

//let idade = 25;

//let numeroDeVendas = 50;

//let saldoDisponivel = 1000;

//alert('Erro! Preencha todos os campos');

//let mensagemDeErro = 'Erro! Preencha todos os campos';

//alert(mensagemDeErro);

//let nomeUsuario = prompt('Digite o seu nome');

//let idadeUsuario = prompt('Digite a sua idade');

//if (idade >= 18) {
//   alert('Pode tirar a habilitação!'); 
//} else {
//    alert( " você não pode tirar habilitação " );
//}
 

/*
//Desafio aula 2-1
let diaDaSemana = prompt( "Qual o dia da semana ?")

//dia = new Array ('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado');

if ( diaDaSemana == "sabado" ) {
    alert ( "bom final, de semana! " );
} else if ( diaDaSemana == "domingo" ) {
    alert (" bom fim de semana! ");
} else {
    alert(` Boa ${diaDaSemana}-feira, tenha uma boa semana  ` )
}

//Desafio aula 2-2

let NumeroVar = prompt (" digite um numero possitivo ou negativo")
if ( NumeroVar >= 0 ){
    alert ( `O numero ${NumeroVar}  e possitivo` )
} else {
    alert ( `O numero  ${NumeroVar}  e negativo `)
}

//Desafio aula 2-3
let pontuacao = 107;
 pontuacao = prompt ( `sua pontuacao foi  ${pontuacao} digite abaixo para saber se venceu `);

if (  pontuacao >= 100 ){
    console.log( "Good JOB!, you win!!" )
    alert("Good JOB!, you win!!" )
}else {
    console.log( " tente novamente para ganhar " )
    alert( " tente novamente para ganhar " )
}

//Desafio aula 2-4

let saldo = 1000 
alert( " seu saldo e R$" + saldo )

//Desafio aula 2-5
let sNome = prompt (" Digite seu nome ")
if ( sNome == sNome ){
    alert ( "Boas vindas " + sNome )
}


*/




alert("Hello wolrd, Boas vindas ao jogo do número secreto");
let numeroSecreto = 99;
 chute = prompt("Escolha um número entre 0 a 100");

while ( chute != numeroSecreto ){

 if (chute == numeroSecreto ){

 }else{
    if (chute > numeroSecreto){
        alert (` O número secreto é menor que ${chute} `)
    } else{
        alert (` O número secreto é maior que ${chute} `)
    }
    tentativas++;
 }

}

if(tentativas > 1 ){
    alert(` ISSO ai ! você descobriu o ${numeroSecreto} com ${tentativas} tentativas  ` );
}else{
     alert(` ISSO ai ! você descobriu o ${numeroSecreto} com ${tentativas} tentativa  ` );
}







let contador = 1;

while ( contador <= 10  ){
    alert ( ` ${contador} ` )
    contador++;
}


let contMenos = 10 ;

while ( contMenos >= 0 ){
    alert( `${contMenos}  `  )
    contMenos--;
}

let contagem;
 contagem = prompt(" digitr um número para a contagem regressiva ate 0 ")

 while ( contagem > 0 )  {
    console.log(contagem + " ");
      alert(` contagem regressiva --> :${contagem}  `)
      contagem--;

      if ( contagem === 0 ) {
        alert("BOOOOM") ;
      }
 }

let regressiva;
let inicio = 0;
regressiva = prompt(" escolha um número que vamos contar até ele ")

while (inicio < regressiva ){
    console.log( inicio + " ")
    alert(`${inicio}`)
    inicio++;

    if(inicio == regressiva ) {
        alert (` ${inicio}, fim da contagem`)

    }

}






