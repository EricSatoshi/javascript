function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'fotobebehomem.png')
            } else if (idade < 40){
                // jovem
                img.setAttribute('src', 'fotojovemhomem.png')
            } else{
                // idoso
                img.setAttribute('src', 'fotoidosohomem.png')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'fotobebemulher.png')
            } else if (idade < 40){
                // jovem
                img.setAttribute('src', 'fotojovemmulher.png')
            } else{
                // idoso
                img.setAttribute('src', 'fotoidosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!!!`
        res.appendChild(img)
    }
}