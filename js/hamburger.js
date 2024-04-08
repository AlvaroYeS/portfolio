const boton = document.getElementById("boton");
const botonIcon = document.getElementById("boton-icon");
const menu = document.getElementById("menu-items");
let showMenu = false;

console.log(boton);
console.log(botonIcon)
console.log(menu)

boton.addEventListener("click",botonMenu)

function botonMenu() {
    if (!showMenu) {
        botonIcon.src="images/close.png"
        menu.style.display="block"
        showMenu=true;
    } else {
        botonIcon.src="images/hamburger.png"
        menu.style.display="none"
        showMenu=false
    }
}