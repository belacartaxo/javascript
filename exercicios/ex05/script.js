//PRIMEIRO - CRIAR UM SCRIPT PARA ESCREVER OS NÚMEROS NA TELA, COM VALIDA ÇÃO DE DADOS
let valor = []
let result = document.getElementById('res')

function adicionar(){
    let locn = document.getElementById('in')
    let n = locn.value
    let res = document.getElementById('itab')
    let opt = document.createElement('option')
    //analisar os dados 
    if (maimen(n) == true && validar(n) == true && repet(n, valor) == true){//códico normal
        valor.push(Number(n))
        let p = valor.length
        opt.innerText = `Valor ${valor[p-1]} adicionado.` //procurar solução melhor que p-1
        res.appendChild(opt)
        result.innerHTML = ''
    } else { //mensagem de erro
        if (maimen(n)==false && validar(n) == true){
            window.alert('[ERRO] O valor precisa estar entre 1 e 100!')
        } else if (validar(n) == false){
            window.alert('[ERRO] Você precisa digitar algum valor!')
        }
        if (repet(n, valor) == false){
            window.alert('[ERRO] Esse valor já foi digitado!')
        }
    }
    locn.value = ''
    locn.focus() // deixa o traço de digitação do mouse em cima disso para facilitar a digitação
}

function analisar(){
    let tot = valor.length
    let maior = valor[0]
    let menor = valor[0]
    let soma = 0
    let media = 0
    if (valor.length == 0) {
        window.alert('[ERRO] Digite um valor!')
    }else{
        for (let c in valor) {
            soma += valor[c]
            if (maior < valor[c]){
                maior = valor[c]
            }
            if (menor > valor [c]){
                menor = valor [c]
            }
        }
        media = soma/tot
        
        result.innerHTML += `Ao todo temos ${tot} números cadastrados.<br><br>`
        result.innerHTML += `O maior valor informado foi ${maior}.<br><br>`
        result.innerHTML += `O menor valor informado foi ${menor}.<br><br>`
        result.innerHTML += `Somando todos os valores temos ${soma}.<br><br>`
        result.innerHTML += `A média dos valores digitados é ${media}.<br><br>`
    }
}

//Análise de dados
function maimen(num){ //ver se está entre zero e cem
    if (num>=1 && num<=100){
        return true
    } else {
        return false
    }
}

function validar(num){ //verificar se o número foi digitado
    if(num.length == 0){
        return false
    } else {
        return true
    }
}

function repet(num, val){ // falta analisar se o número já foi digitado ou não
    if (val.indexOf(Number(num)) == -1) {// se é igual a -1 significa que o número não foi encontrado
        return true
    } else {
        return false
    }
}