/*Diseñar un sitio web que permita generar lo siguiente (html y JavaScript Avanzado):
1. Crear un arreglo de objetos, con el nombre inmueble, y la siguiente información: idinmueble,
dirección, teléfono, precio y estado (disponible o no). Además, ingresar 10 inmuebles en este arreglo.

*/
// let inmuebles = [
//     { nombre: "Apartartamento", idInmueble: "1", direccion:"calle3", telefono: "5781", precio: "20000", estado:"disponible"},
//     { nombre: "Casa", idInmueble: "2", direccion:"calle2", telefono: "5785", precio: "20000", estado:"disponible"},
//     { nombre: "Finca", idInmueble: "3", direccion:"calle4", telefono: "5786", precio: "30000", estado:"disponible"},
//     { nombre: "Apartartamento", idInmueble: "4", direccion:"calle3", telefono: "5781", precio: "20000", estado:"disponible"},
//     { nombre: "Casa", idInmueble: "5", direccion:"calle34", telefono: "5781", precio: "20000", estado:"disponible"},
//     { nombre: "Finca", idInmueble: "6", direccion:"calle21", telefono: "5783", precio: "40000", estado:"disponible"},
//     { nombre: "Apartaestudio", idInmueble: "7", direccion:"calle30", telefono: "5784", precio: "15000", estado:"disponible"},
//     { nombre: "Apartartamento", idInmueble: "8", direccion:"calle12", telefono: "57832", precio: "20000", estado:"disponible"},
//     { nombre: "Finca", idInmueble: "9", direccion:"calle6", telefono: "5781", precio: "30000", estado:"disponible"},
//     { nombre: "Apartartamento", idInmueble: "10", direccion:"calle8", telefono: "57812", precio: "40000", estado:"disponible"},
// ]

/*2. Crear un archivo html, con un formulario que contenga los mismos datos del arreglo generado en el
numeral 1, teniendo en cuenta lo siguiente:
a. idinmueble
i. Se debe mostrar, al lado de este elemento, un mensaje indicando que solo se aceptan
números, al poner el punto de inserción en este dato
*/
let nombre = document.getElementById("nombre").value
let telefono = document.getElementById("telefono")
let estado = document.getElementById("estado")
let idInmueble = document.getElementById("idInmueble")
let soloNumeros = document.getElementById("soloNumeros")
let direccion = document.getElementById("direccion")
let direccionObligatoria = document.getElementById("direccionObligatoria")
let precio = document.getElementById("precio")
let rangoPrecio = document.getElementById("rangoPrecio")
let bEnviar = document.getElementById("enviar")
let bBuscar = document.getElementById("buscar")
let bLimpiar = document.getElementById("limpiar")
let analizando = document.getElementById("analizando")






idInmueble.addEventListener("focus", clickBox=()=>{
  soloNumeros.innerHTML="Solo se aceptan numeros" })
idInmueble.addEventListener("blur", clickBox=()=>{
  soloNumeros.innerHTML="" })


// let clickBox=()=>{
//     soloNumeros.innerHTML="Solo se aceptan numeros"
    
// }


// let template = `<table class="table">
//         <thead>
//             <tr>
//                 <th scope="col">#</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <th scope="row">1</th>
//                 <td>Mark</td>
//             </tr>
//         </tbody>
//     </table>
// `

// let htmlData = ``

// for(i of inmuebles){

// }

/*b. Dirección:
i. Se debe mostrar, al lado de este elemento, un mensaje indicando que la dirección es
obligatoria, al poner el punto de inserción en este elemento*/



direccion.onfocus =()=>{
  direccionObligatoria.innerHTML="La direccion es obligatoria" }

direccion.onblur =()=>{
  direccionObligatoria.innerHTML="" }

/*c. Precio:
i. Se debe mostrar, al lado de este elemento, un mensaje indicando que el precio debe
estar entre 100 millones y 500 millones, al poner el punto de inserción en este
elemento*/


precio.onfocus =()=>{
  rangoPrecio.innerHTML="El precio debe estar entre 100 millones y 500 millones" }

precio.onblur =()=>{
  rangoPrecio.innerHTML="" }

/*d. Botón Enviar:
i. Debe invocar una promesa con proceso asíncrono simulado – con todos los
parámetros del inmueble - que permita validar que todos los datos se hayan
ingresado correctamente.*/

let inmuebles = []

let guardarDatos = () => {

    analizando.innerHTML = "Analizando datos"

    let inmueble = {}

    inmueble.nombre = nombre
    inmueble.idInmueble= idInmueble.value
    inmueble.direccion = direccion.value
    inmueble.precio = precio.value
    inmueble.estado = estado.value
    inmueble.telefono = telefono.value

    setTimeout(() => {
        if (!inmueble.idInmueble == "" && !inmueble.direccion == "" ) {
            if ((inmueble.precio >= 100000000 && inmueble.precio <= 500000000)) {
                inmuebles.push(inmueble)
                console.log(inmuebles)
                limpiar()
                analizando.innerHTML = ""
                
            }
            else{
                rangoPrecio.innerHTML="El precio debe estar entre 100 millones y 500 millones" 
                analizando.innerHTML = ""
            }

        
        
        }
        else
        {
            direccionObligatoria.innerHTML="La direccion es obligatoria"
            analizando.innerHTML = ""
            
        }
        
    }, 2000);
    

    

}




let limpiar = () =>{
    nombre  = ""
    idInmueble.value = ""
    direccion.value = ""
    precio.value = ""
    estado.value = ""
    telefono.value = ""
}

bLimpiar.addEventListener("click",limpiar)

let buscarInmueble = (id) =>{
    for(i of inmuebles){
        if (id == i.idInmueble) {

            document.getElementById("nombre")  = i.nombre
            document.getElementById("idInmueble").value =i.idInmueble
            document.getElementById("direccion").value = i.direccion
            document.getElementById("precio").value = i.precio
            document.getElementById("estado").value = i.estado
            document.getElementById("telefono").value = i.telefono


            
        }

    }
}

bBuscar.addEventListener("click",buscarInmueble(idInmueble.value))

// let validarDatos = () =>{

//     if (inmueble.) {
        
//     }

// }


bEnviar.addEventListener("click",guardarDatos)



/*e. Botón Buscar Inmueble:
i. Que permita ingresar el idinmueble – a través del control del idinmueble y lo muestre
en el formulario, generado en el numeral 2, solo si está disponible.
f. Botón Listar Inmuebles:
i. Que permita invocar un callback - asíncrono - para listar el arreglo de inmuebles, solo
si están disponibles y el precio esté entre 200 millones y 300 millones.*/










/* */


    /*
    return new Promise ((resolve,reject =>{

        
    let inmueble = {}

    inmueble.nombre = nombre
    inmueble.idInmueble= idInmueble.value
    inmueble.direccion = direccion.value
    inmueble.precio = precio.value
    inmueble.estado = estado.value
    inmueble.telefono = telefono.value

    setTimeout(() => {
        if (!inmueble.idInmueble == "" && !inmueble.direccion == "" ) {
            if ((inmueble.precio >= 100000000 && inmueble.precio <= 500000000)) {
                resolve(inmueble)
                
            }
            else{
                rangoPrecio.innerHTML="El precio debe estar entre 100 millones y 500 millones" 
            }

        
        
        }
        else
        {
            reject("La direccion es obligatoria")
            
        }
        
    }, 2000);

    


    }))


    guardarDatos()
    .then((inmueble)=>{
        inmuebles.push(inmueble)
                
        limpiar()
        analizando.innerHTML = ""
    })
    .catch((e)=>{
        direccionObligatoria.innerHTML(e)

    })
*/