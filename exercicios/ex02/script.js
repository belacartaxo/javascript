function verificar(){
    var ano = document.getElementById('iano').value;
    var sexo = document.querySelector("input[name='sexo']:checked").value;
    var img = document.createElement('img') //vai criar uma tag img
    var res = document.getElementById('res');
    var agora = new Date();
    var atano = agora.getFullYear();
    var idade = atano-ano

    if (ano < 1870 || ano > atano){
        window.alert('[ERRO] Verifique se os dados estão corretos!')
    } else {
        img.setAttribute('id', 'img') //para criar um id = 'img' para a imagem dentro da variável img
        if(sexo == 'mulher'){
            if (idade >=0 && idade <=12){ //criança
                img.setAttribute('src', 'imagens/mcriança.png') // vai alterar o src para que aparecça a imagem desejada
            } else if (idade <= 18){ //adolescente
                img.setAttribute('src', 'imagens/madolescente.png')
            } else if (idade <= 30){ //jovem
                img.setAttribute('src', 'imagens/mjovem.png')
            } else if (idade < 60){ //adulto
                img.setAttribute('src', 'imagens/madulta.png')
            } else{ //idoso
                img.setAttribute('src', 'imagens/midosa.png')
            }
        } else {
            if (idade >=0 && idade <=12){ //criança
                img.setAttribute('src', 'imagens/hcriança.png')
            } else if (idade <= 18){ //adolescente
                img.setAttribute('src', 'imagens/hadolescente.png')
            } else if (idade <= 30){ //jovem
                img.setAttribute('src', 'imagens/hjovem.png')
            } else if (idade < 60){ //adulto
                img.setAttribute('src', 'imagens/hadulto.png')
            } else{ //idoso
                img.setAttribute('src', 'imagens/hidoso.png')
            }
        }
        res.style.textAlign = 'center'
        img.style.padding = '10px'
        res.innerText = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img) //diz que a variável img que nos criamos com a foto será uma filha da variável foto, que contem o elemento da div com o id foto
    }
}