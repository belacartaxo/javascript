function contar(){
    var ini = Number(document.getElementById('iini').value)
    var fim = Number(document.getElementById('ifim').value)
    var passo = Number(document.getElementById('ipas').value)
    var res = document.getElementById('res')
    if (ini.length == 0 || fim.length == 0 || passo.length == 0){
        res.innerHTML = 'Impossível contar, dcoloque os valores corretamente'
    }else{
        ini = Number(ini)
        fim = Number(fim)
        passo = Number(passo)
        res.innerHTML = `Contando...<br>`
        if (passo>0){
            if(ini<fim){
                while (ini <= fim){
                    res.innerHTML += `${ini} \u{1F449} `
                    ini += passo
                }
            } else {
                while (ini>= fim){
                    res.innerHTML += `${ini} \u{1F449} `
                    ini -= passo
                }
            }
        }else{
            if(ini<fim){
                while (ini <= fim){
                    res.innerHTML += `${ini} \u{1F449} `
                    ini -= passo
                }
            } else {
                while (ini>= fim){
                    res.innerHTML += `${ini} \u{1F449} `
                    ini += passo
                }
            }
        }
        res.innerHTML += '\u{1F3F4}'
    }
}