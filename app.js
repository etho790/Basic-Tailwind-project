
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
//burger and menu are referenced by quite literally finding elements with the specified id


burger.addEventListener('click', ()=> {     //response to when clicking on the button element
    if(menu.classList.contains('hidden'))
    {
        menu.classList.remove('hidden')
    }else{
        menu.classList.add('hidden')
    }

})
