const body = document.querySelector('body')
const divEffect = document.querySelector('.div-effect')
const circleActive = document.querySelector('.circleActive')
const cms = document.querySelector('.cms')
const emphasis = document.getElementsByClassName("emphasis")

body.addEventListener('mousemove', getCoordinate) //adicionando o evento de mover o mouse no body e passando a função pegar coordenada que está abaixo

function getCoordinate(event) {
    let x = event.clientX
    let y = event.clientY
    divEffect.style.transform = `translate(${x}px,${y}px)`
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

emphasis[0].addEventListener('mouseover', on) 
emphasis[0].addEventListener('mouseleave', off)

function on() {
    divEffect.classList.add('circleOn')
}

function off() {
    divEffect.classList.remove('circleOn')
}