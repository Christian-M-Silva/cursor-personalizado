const body = document.querySelector('body')
const divEffect = document.querySelector('.div-effect')
const circleActive = document.querySelector('.circleActive')
const cms = document.querySelector('.cms')
const emphasis = document.getElementsByClassName("emphasis")

body.addEventListener('mousemove', getCoordinate) //adicionando o evento de mover o mouse no body e passando a função pegar coordenada que está abaixo

function getCoordinate(event) {
    let x = event.clientX
    let y = event.clientY
    divEffect.style.transform = `translate(${x + 5}px,${y - 60}px)`
    //Pegando as propriedades do event, os dois primeiro é para a coordenada e ai os valores que eu pego eu uso como coordenadas do mouse
}

cms.addEventListener('mouseover', active) 
cms.addEventListener('mouseleave', disabled)//adicionando o evento de passar o mouse por cima do cms que é meu link do git e passando a função active e abaixo o evento tirar o mouse de cima com a função disabled

function active() {
    divEffect.classList.toggle('circle')
    divEffect.classList.toggle('circleActive')
    //Aqui quando passo o mouse por cima e ativa essa função eu retiro a classe circle e adiciono a circleActive
}
function disabled() {
    divEffect.classList.toggle('circle')
    divEffect.classList.toggle('circleActive')
    //Aqui quando eu tiro o mouse por cima e ativa essa função eu retiro a classe circleActive e adiciono a circle.
}

console.log(emphasis)

emphasis[0].addEventListener('mouseover', batmanOn) 
emphasis[0].addEventListener('mouseleave', batmanOff)
emphasis[1].addEventListener('mouseover', mattOn) 
emphasis[1].addEventListener('mouseleave', mattOff)
emphasis[2].addEventListener('mouseover', robertOn) 
emphasis[2].addEventListener('mouseleave', robertOff)
emphasis[3].addEventListener('mouseover', homemOn) 
emphasis[3].addEventListener('mouseleave', homemOff)
emphasis[4].addEventListener('mouseover', gothamOn) 
emphasis[4].addEventListener('mouseleave', gothamOff)
emphasis[5].addEventListener('mouseover', pinguimOn) 
emphasis[5].addEventListener('mouseleave', pinguimOff)
emphasis[6].addEventListener('mouseover', colinOn) 
emphasis[6].addEventListener('mouseleave', colinOff)
emphasis[7].addEventListener('mouseover', carmineOn) 
emphasis[7].addEventListener('mouseleave', carmineOff)
emphasis[8].addEventListener('mouseover', johnOn) 
emphasis[8].addEventListener('mouseleave', johnOff)
emphasis[9].addEventListener('mouseover', bruceOn) 
emphasis[9].addEventListener('mouseleave', bruceOff)
emphasis[10].addEventListener('mouseover', selinaOn) 
emphasis[10].addEventListener('mouseleave', selinaOff)
emphasis[11].addEventListener('mouseover', zoeOn) 
emphasis[11].addEventListener('mouseleave', zoeOff)
emphasis[12].addEventListener('mouseover', mulherOn) 
emphasis[12].addEventListener('mouseleave', mulherOff)
emphasis[13].addEventListener('mouseover', jimOn) 
emphasis[13].addEventListener('mouseleave', jimOff)
emphasis[14].addEventListener('mouseover', jeffreyOn) 
emphasis[14].addEventListener('mouseleave', jeffreyOff)
emphasis[15].addEventListener('mouseover', alfredOn) 
emphasis[15].addEventListener('mouseleave', alfredOff)
emphasis[16].addEventListener('mouseover', andyOn) 
emphasis[16].addEventListener('mouseleave', andyOff)
emphasis[17].addEventListener('mouseover', charadaOn) 
emphasis[17].addEventListener('mouseleave', charadaOff)
emphasis[18].addEventListener('mouseover', paulOn) 
emphasis[18].addEventListener('mouseleave', paulOff)
emphasis[19].addEventListener('mouseover', cavaleirOn) 
emphasis[19].addEventListener('mouseleave', cavaleirooff)



function batmanOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('batman')
}

function batmanOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('batman')
}

function mattOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('matt')
}

function mattOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('matt')
}

function robertOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('robert')
}

function robertOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('robert')
}

function homemOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('homem')
}

function homemOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('homem')
}

function gothamOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('gotham')
}

function gothamOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('gotham')
}

function pinguimOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('pinguim')
}

function pinguimOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('pinguim')
}

function colinOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('colin')
}

function colinOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('colin')
}

function carmineOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('carmine')
}

function carmineOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('carmine')
}

function johnOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('john')
}

function johnOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('john')
}

function bruceOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('bruce')
}

function bruceOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('bruce')
}

function selinaOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('selina')
}

function selinaOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('selina')
}

function zoeOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('zoe')
}

function zoeOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('zoe')
}

function mulherOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('mulher')
}

function mulherOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('mulher')
}

function jimOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('jim')
}

function jimOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('jim')
}

function jeffreyOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('jeffrey')
}

function jeffreyOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('jeffrey')
}

function alfredOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('alfred')
}

function alfredOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('alfred')
}

function andyOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('andy')
}

function andyOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('andy')
}

function charadaOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('charada')
}

function charadaOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('charada')
}

function paulOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('paul')
}

function paulOff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('paul')
}

function cavaleirOn() {
    divEffect.classList.add('circleOn')
    divEffect.classList.add('cavaleiro')
}

function cavaleirooff() {
    divEffect.classList.remove('circleOn')
    divEffect.classList.remove('cavaleiro')
}