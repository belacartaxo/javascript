function tabuada () {
    var res = document.getElementById('seltab')
    var n = document.getElementById('in').value

    if(n.length == 0) {
        window.alert ('[ERRO] Você precisa digitar um número!')
    }else{
        n = Number(n)
        res.innerHTML= '' //faz com que a área fique limpa para receber novas informações
        for (c = 1; c <= 10; c++){
            var item = document.createElement('option') //cria uma variável item que contem a tag option do html
            item.text = `${n} x ${c} = ${n*c}`//diz que o item vai receber esse texto (.txt)
            item.value = `tab${c}` //porque os options precisam ter um valor para outras linguagens
            res.appendChild(item)//dis que a variável res, que recebeu o elemnto select vai ser parent de cada option
        }
    }
}