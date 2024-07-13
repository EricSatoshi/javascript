let valores = [4, 2, 5, 7, 10]
console.log(valores)
for(var pos = 0; pos < valores.length; pos++){
    console.log(`O valor na posição ${pos}, é de ${valores[pos]}`)
}

let pis = valores.indexOf(2)
console.log(`O 2 está no posição ${pis}`)