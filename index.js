const body = document.querySelector('body')
const circle = document.querySelector('.circle')
const cms = document.querySelector('.cms')
//Pegando tanto o elemento body como o elemento que tem a classe circle e cms

body.addEventListener('mousemove', getCoordinate) //adicionando o evento de mover o mouse no body e passando a função pegar coordenada que está abaixo

//cms.addEventListener('mouseover', getHover)
//cms.addEventListener('mouseout', dropHover) adicionei esses dois eventos

function getCoordinate(event) {
    let x = event.clientX
    let y = event.clientY
    //Pegando as propriedades do event, os dois primeiro é para a coordenada
    //console.log(event)

    circle.style.transform = `translate(${x - 13}px,${y -7}px)`
}

/*function getHover(event) {
    console.log(event)
    if (event.isTrusted == true) {
        circle.style.width = "50px"
    } Nesse caso eu tentei pegar uma propriedade de quando o mouse passa por cima e assim para identificar quando o mouse está hover e poder aumentar a bolinha (circle)
 }*/

 /*function dropHover(event) {
    if (event.isTrusted == true) {
        circle.style.width = "30px"
    } Nesse caso eu tentei pegar uma propriedade de quando o mouse sai de cima do elemento para fazer ele voltar ao normal
 }*/

 