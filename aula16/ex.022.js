function fatorial(n){
    var f = 1
    for(let c = n; c>1; c--){
        f *= c
    }
    return f
}
let x = 4
fat = fatorial(x)
console.log(`!${x} = ${fat}`)
