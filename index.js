const body = document.querySelector('body')
const circle = document.querySelector('.circle')
//Pegando tanto o elemento body como o elemento que tem a classe circle


body.addEventListener('mousemove', getCoordinate) //adicionando o evento de mover o mouse no body e passando a função pegar coordenada que está abaixo

function getCoordinate(event) {
    let x = event.clientX
    let y = event.clientY
    //Pegando as propriedades do event, os dois primeiro é para a coordenada
    //console.log(event)

    circle.style.transform = `translate(${x - 13}px,${y -7}px)`
}