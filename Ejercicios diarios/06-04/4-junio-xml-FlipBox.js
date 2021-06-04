// variable global de la pagina.
//un array con un elemento por cada usuario (nombre y clave) del xml
//en realidad sera un array de arrays, una matriz bidimensional
let registrados = [];

function leerXML0() {
    // lee desde GitHub.
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            miFuncion(this);
        }
    };
    xhr.open("GET", "https://albapadin.github.io/CMV-publico/datos", true);
    //xhr.open("GET", "datos.xml", true);
    xhr.send();
}

function miFuncion(xml) {
    var i;
    var elemento = [];
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("elemento");
    // x = [{USR1}, {USR2},...CANDIDO] es un array de objetos usuario
    //tabla es una variable string que contiente codigo html para poder mostrar en pantalla el xml con formato tabla
    let bloque = "<section id='contenedor'>";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let url = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        let pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        let detalle = x[i].getElementsByTagName("detalle")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
      
        bloque += `<div class="subcontenedor">
                     <div class="flip-box">
                        <div class="flip-box-inner">
                            <div class="flip-box-front">
                                <div class="subsubcontenedor">
                                    <div class='divNombre'>
                                    <p class='nombre'>${nombre}</p>
                                    </div >
                                    <div class= 'divImg' >
                                        <img  src=" ${url} "/>
                                    </div>
                                    <div class='PieDeFoto'>
                                        <p>${pie}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flip-box-back">
                                    <div class='detalle'>
                                        <p>${detalle}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>`;
        // actualizo el array bidimensional con los usuarios registrados
        elemento = [nombre, url];
        registrados.push(elemento);

    }
    bloque += "</section>"
    document.getElementById("mensaje").innerHTML = bloque;

    // muestro en consola el array de usuarios registrados, pero no es necesario
    registrados.forEach((orla) => {
        orla.forEach((datos) => {
            console.log(datos);

        });
    });
}

