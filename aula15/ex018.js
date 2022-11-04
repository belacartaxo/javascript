let valor = [6, 7, 3, 8, 2, 98, 8]

/*for (let c=0; c < valor.length; c++){
    console.log(`valor[${c}] = ${valor[c]}`)
}*/

for (let c in valor){ //para cada posição em valor mostre:
    console.log(`valor[${c}] = ${valor[c]}`)
}
let pos = valor.indexOf(7)
console.log(`O valor 7 está na posição ${pos}`)