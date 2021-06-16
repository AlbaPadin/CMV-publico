// variable global de la pagina.
//un array con un elemento por cada usuario (nombre y clave) del xml
//en realidad sera un array de arrays, una matriz bidimensional
let registrados2 = [];


function leerXML1() {
  // lee desde GitHub.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      miFuncion2(this);
    }
  };
  xhr.open("GET", "https://albapadin.github.io/CMV-publico/baseDatosClasificacion2.xml", true);
  //xhr.open("GET", "baseDatos2.xml", true);
  xhr.send();
}

function miFuncion2(xml) {
  var i;
  var elemento = [];
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.getElementsByTagName("elemento");
  // x = [{USR1}, {USR2},...CANDIDO] es un array de objetos usuario
  //tabla es una variable string que contiente codigo html para poder mostrar en pantalla el xml con formato tabla

  let bloque2 = "";
  bloque2 += `<div class="table-responsive">
    
      <table class="table table-striped">
    
   
        <thead>
        <tr class="headerTabla">
        <th >#</th>
        <th>Piloto</th>
        <th>País </th>
        <th>Coche</th>
        <th style="text-align: center;">Puntos </th>
      </tr>
        </thead><tbody>`
  for (i = 0; i < x.length; i++) {
    let id = x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
    let num = x[i].getElementsByTagName("num")[0].childNodes[0].nodeValue;
    let nombrePiloto = x[i].getElementsByTagName("nombrePiloto")[0].childNodes[0].nodeValue;
    let nacion = x[i].getElementsByTagName("nacion")[0].childNodes[0].nodeValue;
    let coche = x[i].getElementsByTagName("coche")[0].childNodes[0].nodeValue;
    let puntos = x[i].getElementsByTagName("puntos")[0].childNodes[0].nodeValue;

    bloque2 +=

      `<tr >
            <th scope="row" class="${id}">${num}</th>
            <td class="${id}" >${nombrePiloto}</td>
            <td class="${id}"  >${nacion}</td>
            <td class="${id}">${coche} </td>
            <td class="${id}" style="text-align: center;">${puntos}</td>
          </tr>
        `



    // actualizo el array bidimensional con los usuarios registrados
    elemento = [id, num, nombrePiloto, nacion, coche, puntos];

    registrados2.push(elemento);

  }
  bloque2 += `</tbody>
    <!--Table body-->
  </table>
  <!--Table-->
</div>`
  document.getElementById("mensaje3").innerHTML = bloque2;

  // muestro en consola el array de usuarios registrados, pero no es necesario

}

