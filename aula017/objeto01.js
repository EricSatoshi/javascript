let amigo = {nome: 'José',
    sexo: 'M',
    peso: 87,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(4)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`)