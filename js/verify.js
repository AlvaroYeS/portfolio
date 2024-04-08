const Formulario = document.querySelector(".formulario");
console.log(Formulario);

const n = 1;
console.log(1+2+"1")

const Enlaces = document.querySelectorAll(".navegacion_enlace")
console.log(Enlaces)

const datos={
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre=document.querySelector("#nombre")
const email=document.querySelector("#email")
const mensaje=document.querySelector("#mensaje")


function leerTexto(e) {
    datos[e.target.id]=e.target.value;
    console.log(datos)
}

nombre.addEventListener('input', leerTexto)

email.addEventListener('input', leerTexto)

mensaje.addEventListener('input', leerTexto)

Formulario.addEventListener('submit', function(e){
        e.preventDefault();
        const {nombre,email,mensaje}=datos
        
        if (nombre==="" || email==="" || mensaje==="") {
            mostrarError("Los campos no pueden estar vacios")
            return
        }

        mostrarCorrecto("Datos enviado correctamente")
    }
)

function mostrarError(texto){
    const alerta=document.createElement("p")
    alerta.textContent=texto
    alerta.classList.add("error")
    Formulario.appendChild(alerta)
    aparecer(alerta)
}

function mostrarCorrecto(texto){
    const alerta=document.createElement("p")
    alerta.textContent=texto
    alerta.classList.add("verde")
    Formulario.appendChild(alerta)
    aparecer(alerta);
}

function aparecer( elemento) {
    var aparecerEfecto = setInterval(function () {
        
        if (!elemento.style.opacity) {
                 elemento.style.opacity = 1;
            }
        
        if (elemento.style.opacity > 0) {
             elemento.style.opacity -= 0.01;
            } else {
                clearInterval(aparecerEfecto);
        }
    
    }, 50);

    setTimeout(() => {
         elemento.remove();
    }, 5000);
}