function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'pelamanhãcerto.png'
        window.document.body.style.background = 'rgb(192, 163, 82)'
    } else if (hora >= 12 && hora < 18){
        img.src = 'pelatardecert.png'
        window.document.body.style.background = 'rgb(73, 34, 118)'
    } else{
        img.src = 'pelanoitecerto.png'
        window.document.body.style.background = 'rgb(79, 52, 52)'
    }
}
