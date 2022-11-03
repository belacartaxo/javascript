var agora = new Date()
var hora = agora.getHours()
var caixa_txt = document.getElementById('hora')
var caixa_img = document.getElementById('img')
var corpo = document.querySelector('body') 
hora = 12

caixa_txt.innerText = `Agora são ${hora} horas.`
if (hora<12){
    corpo.style.background = 'rgb(245, 216, 179)'
}else if(hora < 18){
    corpo.style.background = 'rgb(224, 145, 66)'
}else{
    corpo.style.background = 'rgb(86, 85, 94)'
}