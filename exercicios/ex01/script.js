function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var txt = document.getElementById('hora')
    var img = document.getElementById('img')

    txt.innerText = `Agora são ${hora} horas.`
    if (hora<12){
        img.src = 'imagens/dia.png'
        document.body.style.background = '#fdc18c'
    }else if(hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#fe9c03'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#12203b'
    }
}




