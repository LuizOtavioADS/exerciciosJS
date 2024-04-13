
function carregar(){
    //obtendo o elemento HTML mensagem, que ficará posicionado em cima da imagem do dia
    const msg = document.getElementById('msg')
    //inserindo uma imagem na div, dependendo do horário
    const img = document.getElementById('imagem')

    const data = new Date()
    const hora = data.getHours()
    
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'assets/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if( hora >= 12 && hora < 18){
        img.src = 'assets/tarde.png'
    }else{
        img.src = 'assets/noite.png'
    }

}

