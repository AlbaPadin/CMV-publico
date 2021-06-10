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
    xhr.open("GET", "https://albapadin.github.io/CMV-publico/baseDatos2.xml", true);
    //xhr.open("GET", "basedatos.xml", true);
    xhr.send();
}

function miFuncion(xml) {
    var i;
    var elemento = [];
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("elemento");
    // x = [{USR1}, {USR2},...CANDIDO] es un array de objetos usuario
    //tabla es una variable string que contiente codigo html para poder mostrar en pantalla el xml con formato tabla
    let bloque = "";
    for (i = 0; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let carousel = x[i].getElementsByTagName("carrousel")[0].childNodes[0].nodeValue;
        let colapseLogo = x[i].getElementsByTagName("colapseLogo")[0].childNodes[0].nodeValue;
        let colapseEquipo = x[i].getElementsByTagName("colapseEquipo")[0].childNodes[0].nodeValue;
        let colapseEscuderia = x[i].getElementsByTagName("colapseEscuderia")[0].childNodes[0].nodeValue;
        let fotoSlide1 = x[i].getElementsByTagName("fotoSlide1")[0].childNodes[0].nodeValue;
        let nombreEquipo = x[i].getElementsByTagName("nombreEquipo")[0].childNodes[0].nodeValue;
        let fotoSlide2 = x[i].getElementsByTagName("fotoSlide2")[0].childNodes[0].nodeValue;
        let textoPilotosyMonoplaza = x[i].getElementsByTagName("textoPilotosyMonoplaza")[0].childNodes[0].nodeValue;
        let fotoPiloto1 = x[i].getElementsByTagName("fotoPiloto1")[0].childNodes[0].nodeValue;
        let infoPiloto1 = x[i].getElementsByTagName("infoPiloto1")[0].childNodes[0].nodeValue;
        let fotoPiloto2 = x[i].getElementsByTagName("fotoPiloto2")[0].childNodes[0].nodeValue;
        let infoPiloto2 = x[i].getElementsByTagName("infoPiloto2")[0].childNodes[0].nodeValue;
        let fotoSlide3 = x[i].getElementsByTagName("fotoSlide3")[0].childNodes[0].nodeValue;
        let textoEscuderia = x[i].getElementsByTagName("textoEscuderia")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
      
        bloque += `<div class="responsive">
        <div class="gallery">

          <div id="${carousel}" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#${carousel}" data-slide-to="0" class="active"></li>
              <li data-target="#${carousel}" data-slide-to="1"></li>
              <li data-target="#${carousel}" data-slide-to="2"></li>
            </ol>
            <!-- diapositivas -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div>
                  <!--en esta linea empieza cada carta del carrousel-->
                  <div class="col-md">
                    <div class="card">
                      <div class="dimension_imagen"><img class="card-img-top" src="${fotoSlide1}" alt="logo">
                      </div>
                      <div class="card-body">
                        <h4 class="card-title"><a href="#${colapseLogo}" data-toggle="collapse">Mercedes AWG</a></h4>
                        <div id="${colapseLogo}" class="collapse">
                        <p>
                        ${nombreEquipo}
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div>
                  <!--en esta linea empieza cada carta del carrousel-->
                  <div class="col-md">
                    <div class="card">
                      <div class="dimension_imagen"><img class="card-img-top" src="${fotoSlide2}" alt="equipo">
                      </div>
                      <div class="card-body">
                        <h4 class="card-title"><a href="#${colapseEquipo}" data-toggle="collapse">Pilotos y Monoplaza</a>
                        </h4>
                        <div id="${colapseEquipo}" class="collapse">
                          <p>
                          ${textoPilotosyMonoplaza}
                          </p>
                          <br>
                          <button type="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#dialogo1">Ver pilotos
                          </button>
                          <br><br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- aqui empieza la card de los pilotos -->
              <div class="modal fade" id="dialogo1">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                  <div class="modal-content">

                    <!-- cabecera del diálogo -->
                    <div class="modal-header">
                      <h4 class="modal-title">Título del diálogo</h4>
                      <button type="button" class="close" data-dismiss="modal">X</button>
                    </div>

                    <!-- cuerpo del diálogo -->
                    <div class="modal-body">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col">
                            <div class="card">
                              <img class="card-img-top"
                                src="${fotoPiloto1}">
                              <div class="card-body">
                                <h4 class="card-title">Titulo de la tarjeta 1
                                </h4>
                                <p class="card-text">
                                ${infoPiloto1}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="col">
                            <div class="card">
                              <img class="card-img-top"
                                src="${fotoPiloto2}">
                              <div class="card-body">
                                <h4 class="card-title">Titulo de la tarjeta 2
                                </h4>
                                <p class="card-text">
                                ${infoPiloto2}
                                </p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    <!-- pie del diálogo -->
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>

                  </div>
                </div>
              </div>
              <!-- aqui ya termino el card de los pilotos -->
              <div class="carousel-item">
                <div>
                  <!--en esta linea empieza cada carta del carrousel-->
                  <div class="col-md">
                    <div class="card">
                      <div class="dimension_imagen"><img class="card-img-top" src="${fotoSlide3}" alt="scuderia">
                      </div>
                      <div class="card-body">
                        <h4 class="card-title"><a href="#${colapseEscuderia}" data-toggle="collapse">Equipo / Escuderia</a></h4>
                        <div id="${colapseEscuderia}" class="collapse">
                        <p>
                        ${textoEscuderia}
                        </p>
                        <br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- botones de desplazamiento a izquierda y derecha -->
            <a class="carousel-control-prev" href="#${carousel}" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#${carousel}" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


        </div>
      </div>`;
        // actualizo el array bidimensional con los usuarios registrados
        elemento = [fotoSlide1,nombreEquipo,nombreEquipo,fotoSlide2,textoPilotosyMonoplaza,fotoPiloto1,infoPiloto1,fotoPiloto2,infoPiloto2,fotoSlide3,textoEscuderia];

        registrados.push(elemento);

    }
    
    document.getElementById("mensaje").innerHTML = bloque;

    // muestro en consola el array de usuarios registrados, pero no es necesario
    
}

