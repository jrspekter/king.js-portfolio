let btnMenu = document.getElementById('btn-menu') /* let = criar variavel - "=" = recebe */
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
}) /* <- Utilizado para realizar evento de abrir menu lateral após clicar no mesmo */

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})