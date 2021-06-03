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
    xhr.open("GET", "https://carlosboniniklison.github.io/publico/ejercicios/xml/registrados2.xml", true);
    //xhr.open("GET", "registrados2.xml", true);
    xhr.send();
}

function miFuncion(xml) {
    var i;
    var usrNom;
    var usrPsw;
    var usuario = [];
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("usuario");
    // x = [{USR1}, {USR2},...CANDIDO] es un array de objetos usuario
    //tabla es una variable string que contiente codigo html para poder mostrar en pantalla el xml con formato tabla
    let tabla = "<table><tr><th>Empleado</th><th>Clave</th></tr>";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let usrNom = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let usrPsw = x[i].getElementsByTagName("clave")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        tabla += "<tr><td>" + usrNom + "</td><td>" + usrPsw + "</td></tr>";
        // actualizo el array bidimensional con los usuarios registrados
        usuario = [usrNom, usrPsw];
        registrados.push(usuario);

    }
    tabla += "</table>"
    document.getElementById("mensaje").innerHTML = tabla;

    // muestro en consola el array de usuarios registrados, pero no es necesario
    registrados.forEach((usuario) => {
        usuario.forEach((datos) => {
            console.log(datos);

        });
    });
}
//   // nombre del primer usuario
//   let indiceCampoNombre=0;
//   let indiceCampoClave=1;
//   // obtengo el nombre del primer usuario
//   let nomUsr1 = registrados[0][indiceCampoNombre];
//   // clave del usuario 3
//   let claUsr3 = registrados[2][indiceCampoClave];


function MayoramenorUsuario() {
    let nombres = [];

    for (let i = 0; i < registrados.length; i++) {
        registrados.sort();
        nombres[i] = registrados[i][0];
    }
    document.getElementById("mensaje2").innerHTML = (`El array de mayor a menor es: ` + nombres);
    //document.write("El array de mayor a menor es: "+ nombres);      
}
function MenoramayorUsuario() {
    let nombres = [];

    for (let i = 0; i < registrados.length; i++) {
        registrados.sort();
        registrados.reverse();
        nombres[i] = registrados[i][0];
    }
    document.getElementById("mensaje2").innerHTML = (`El array de mayor a menor es: ` + nombres);
    //document.write("El array de mayor a menor es: "+ nombres);      
}
let claves = [];
function MayoramenorClave() {
    let claves = [];

    for (let i = 0; i < registrados.length; i++) {
        registrados.sort();
        claves[i] = registrados[i][1];
    }
    document.getElementById("mensaje2").innerHTML = (`El array de mayor a menor es: ` + claves);
    //document.write("El array de mayor a menor es: "+ nombres);      
}
function MenoramayorClave() {
    let claves = [];

    for (let i = 0; i < registrados.length; i++) {
        registrados.sort();
        registrados.reverse();
        claves[i] = registrados[i][1];
    }
    document.getElementById("mensaje2").innerHTML = (`El array de mayor a menor es: ` + claves);
    //document.write("El array de mayor a menor es: "+ nombres);      
}

function mostrarClave() {
    // obtenemos el usuario del campo input y validamos que exista en el Array, 
    // si no mostramos un alert y no hacemos nada,
    // si existe actualizamos el elemento del html con id=claveSolicitada
    let nombreUsuario = $("#nom").val();
    let clave=null;

  
    for (let i = 0; i < registrados.length; i++) {
        if (nombreUsuario == registrados[i][0]) {
            clave=registrados[i][1]           
        }
     
    }

    if (clave==null){
        alert(`Ese mobre de usuario no existe. Por favor intentelo de neuvo`);
    }

    document.getElementById("claveSolicidada").innerHTML = (`La clave de ` + nombreUsuario + ` es ` + clave);

}
