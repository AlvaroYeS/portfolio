const requestURL = "./json/proyectos.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

const mydiv = document.getElementById("proyectos");
console.log(mydiv)
const section = document.querySelector("section");

console.log(section)

request.onload = function () {
    const proyectos = request.response;
    showProjects(proyectos);
};

function showProjects(jsonObj) {
    const proyectos = jsonObj["proyectos"]
    
    for (let i = 0; i < proyectos.length; i++) {
        const Otherdiv = document.createElement("div")
        mydiv.append(Otherdiv)
        
        const myh1 = document.createElement("h1");
        myh1.textContent = proyectos[i].nombre;
        Otherdiv.append(myh1)

        const myA = document.createElement("a");
        myA.textContent = "ENLACE A PROYECTO";
        myA.href = proyectos[i].enlace;
        Otherdiv.append(myA)

        const myBr = document.createElement("br")
        Otherdiv.append(myBr)
        
        const myImg = document.createElement("img");
        myImg.src = proyectos[i].imagen;
        Otherdiv.append(myImg)

        Otherdiv.append(myBr)

        const myP = document.createElement("p");
        myP.textContent = "Proyecto creado por " + jsonObj.creador + " en " + proyectos[i].fechaCreacion
        Otherdiv.append(myP)
    }
}