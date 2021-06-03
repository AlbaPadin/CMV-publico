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
    // <ol class="carousel-indicators">
	// 	    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
	// 	    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
	// 	    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
	// 	  </ol>
    let bloque="<div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'><ol class='carousel-indicators'>"
    for (i = 0; i < x.length; i++) {
        bloque+="<li data-target='#carouselExampleIndicators' data-slide-to='"+i+"' class='active'></li>"
    }
    bloque+="</ol>"
    //bloque+="<li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li><li data-target='#carouselExampleIndicators' data-slide-to='1'></li><li data-target='#carouselExampleIndicators' data-slide-to='2'></li></ol>"
    bloque+="<div class='carousel-inner'>"//bloque de imagenes que mostraremos en pantalla
    
    
    let nombre1 = x[0].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
    let url1 = x[0].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
    let pie1 = x[0].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        
    bloque += "<div class=\"carousel-item active\"><img class=\"d-block w-100\" src='" + url1 + 
    "'alt=\"First slide\"'/><div class='carousel-caption d-none d-md-block'><h5>"+nombre1+"</h5><p>"+pie1+"</p></div></div>";
    //bloque += "<div><img class=\"imgOrla\" src='" + foto + "' /></div>";

    
    
    
    for (i = 1; i < x.length; i++) {
        // leo las etiquetas que me interesan del objeto
        let nombre = x[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue;
        let url = x[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue;
        let pie = x[i].getElementsByTagName("pie")[0].childNodes[0].nodeValue;
        // actualizo la tabla de visualización
        

        
            // <div class="carousel-item active">
		    //   <img class="d-block w-100" src="mercedes.png" alt="First slide"/>
		    //   <div class="carousel-caption d-none d-md-block">
			//     {/* <h5><b>Mercedes</b></h5>
			//     <p><b>W12</b></p> */}
			//   </div>
            //   </div>
           // if (i=0){
               
            bloque += "<div class=\"carousel-item \"><img class=\"d-block w-100\" src='" + url + 
                "'alt=\"First slide\"'/><div class='carousel-caption d-none d-md-block'><h5>"+nombre+"</h5><p>"+pie+"</p></div></div>";
        
            //}else {
                // bloque += "<div class=\"carousel-item\"><img class=\"d-block w-100\" src='" + url + 
                // "'alt=\"First slide\"'/><div class='carousel-caption d-none d-md-block'><h5>"+nombre+"</h5></div>";
                //bloque += "<div><img class=\"imgOrla\" src='" + foto + "' /></div>";
            //}
        //     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
		//     <span class="sr-only">Previous</span>
		//   </a>
		//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
		//     <span class="sr-only">Next</span>
		//   </a>
        elemento = [nombre, url];
        registrados.push(elemento);
    }
                bloque += "</div>"
                bloque+="<a class='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></a>"
                bloque+="<a class='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></a>"
        // actualizo el array bidimensional con los usuarios registrados
        

    
    
    bloque += "</div>"
    document.getElementById("mensaje").innerHTML = bloque;

    // muestro en consola el array de usuarios registrados, pero no es necesario
    registrados.forEach((orla) => {
        orla.forEach((datos) => {
            console.log(datos);

        });
    });
}


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
    let nombre = $("#nom").val();
    let url=null;
  
    for (let i = 0; i < registrados.length; i++) {
        if (nombre == registrados[i][0]) {
            url=registrados[i][1]           
        }
    }
    if (url==null){
        alert(`Ese mobre de usuario no existe. Por favor intentelo de neuvo`);
    }
    document.getElementById("claveSolicidada").innerHTML = (`La url de ` + nombre + ` es ` + url);

}
