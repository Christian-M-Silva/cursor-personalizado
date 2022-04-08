const body = document.querySelector('body')
const circle = document.querySelector('.circle')
//Pegando tanto o elemento body como o elemento que tem a classe circle


body.addEventListener('mousemove', getCoordinate) //adicionando o evento de mover o mouse no body e passando a função pegar coordenada que está abaixo

function getCoordinate(event) {
    let x = event.clientX
    let y = event.clientY
    let screenY = event.screenY
    let screenX = event.screenX     //Antes de continuar ver a possibilidade de em vez de usar o if para isso ver as propriedades do onscroll para quando ele for ativado desabilitar o movimento da bolinha
    
    //Pegando as propriedades do event, os dois primeiro é para coordenada e os dois últimos para impedir que a bolinha ultrapasse a tela e assim não crie um scroll

    //console.log(event)

    if (screenY <= 694 && screenX <= 1336) {
        circle.style.transform = `translate(${x - 25}px,${y -20}px)`
    } 
    //condição que vai filtrar se a bolinha está dentro das coordenadas para não criar scroll sendo positivo ele vai passar para o circulo a coordenada do mouse e assim vai passar para o estilo do circle o translate com que contem as coordenadas do mouse ajustadas.



}