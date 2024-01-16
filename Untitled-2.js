alert ("Boas vindas ao nosso site");
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert ("Erro! Preencha todos os campos.");
let mensagemDeErro = "Erro! Preencha todos os campos.";
alert (mensagemDeErro);
let nome = prompt ("Qual seu nome?");
let idade = prompt ("Qual sua idade?");

if (idade < 0) {
    alert ("olá " + nome + " Aparentemente você digitou errado ou teve um erro no nosso sistema. Pois aqui consta que você tem  " + idade + " anos. O que é impossivel");  
}
else if (idade >= 18) {
    alert ("olá " + nome + " Aparentemente você ja Pode tirar habilitação! afinal você tem " + idade + " anos.");  
}
else {
    alert ("olá " + nome + " Aparentemente você não Pode tirar habilitação! afinal você tem " + idade + " anos.");  
}


