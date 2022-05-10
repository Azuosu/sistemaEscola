const prompt = require("prompt-sync")({sigint: true})
const fs = require("fs")
//chamada de promp e de file server
var numeroDeAlunos = receberNumeroDeAlunos()

for (var contador = 0; contador < numeroDeAlunos; index++) {
    var aluno = {nome : "", idade : 0, notaPrimeiroBimestre: 0.00, notaSegundoBimestre: 0.00,   notaTerceiroBimestre: 0.00, notaQuartoBimestre: 0.00}
    aluno.nome = prompt("insira o nome do aluno: ")
    aluno.idade = receberIdadeDosAlunos()
}



function receberIdadeDosAlunos(){
    var idadeProvisoria = parseInt(prompt("insira a idade do aluno: "))
    if (verificarNumero(idadeProvisoria)){
        return idadeProvisoria
    }
    else 
    {
        console.log("Numero invalido")
        receberIdadeDosAlunos()
    }
}

function receberNumeroDeAlunos(){
    var numeroDeAlunosLocal = parseInt(prompt("Quantos alunos vão ser registrados? "))
    if (verificarNumero(numeroDeAlunosLocal)){
        return numeroDeAlunosLocal
    }
    else
    {
        console.log("Numero inválio")
        receberNumeroDeAlunos()
    }   
}

function verificarNumero(numeroQueVaiSerVerificado){
    if(typeof(numeroQueVairSerVerificado) == 'number' && numeroQueVaiSerVerificado > 0)
    {
        return true
    }
    return false
}