//btn-same
let btnsame = document.getElementById('same'); // 0btiene el boton igual
btnsame.addEventListener('click', same); // evento del boton igual

function same(){ //funcion de realizar operacion
    let inputnum = document.getElementById('input-number').value; //obtiene el valor en el input
    let end = inputnum.slice(-1); //obtiene el ultimo valor de la cadena
    let star = inputnum.slice(0, 1); //obtiene el primer valor de la cadena

    //validacion de no tener el input vacio , solo con el simbolo de la operacion o que finalice la operacion con un simbolo
    if (inputnum == "" || inputnum == "-" || inputnum == "*" || inputnum == "/" || inputnum == "+" || inputnum ==".") { 
        window.alert('inserte numeros');
        location.reload();
    }else if(end =="+" || end =="-" || end =="*" || end =="/"){
        window.alert('Faltan valores');
        location.reload();
    }else if(star =="*" || star == "/"){
        window.alert('Valores escritos de forma incorrecta');
        location.reload();
    } else {
        let resultado = eval(inputnum); //funcion que calcula los numeros ingresados en el input
        document.getElementById('input-number').value=resultado; //remplaza la operacion por resultado   
    }
}

//btn-delall
let btndelall = document.getElementById('delall'); // 0btiene el boton c
btndelall.addEventListener('click', delall); // evento del boton c

function delall(){
    document.getElementById('input-number').value=""; //limpia el input
}

//btn-del
let btndel = document.getElementById('del'); // 0btiene el boton del
btndel.addEventListener('click', del); // evento del boton del

function del(){
    let inputnum1 = document.getElementById('input-number'); //selecciona el input
    inputnum1.value = inputnum1.value.slice(0, -1); //elimina el ultimo caracter investigar sobre ella
}
//Prime number
let btnprime = document.getElementById('prime');
btnprime.addEventListener('click', isprime);

function isprime(){
    let inputnum2 = document.getElementById('input-number').value; //selecciona el input
    let numpars = parseInt(inputnum2); //convierte el string en entero
    let primeis = true //valida si es verdadero es primo, si es falso no lo es
    
    /*validation var*/
    let end1 = inputnum2.slice(-1); //obtiene el ultimo valor de la cadena
    let star1 = inputnum2.slice(0, 1); //obtiene el primer valor de la cadena
    
    /*validacion de numeros de entrada */
    if (inputnum2 == "" || inputnum2 == "-" || inputnum2 == "*" || inputnum2 == "/" || inputnum2 == "+" || inputnum2 =="." || inputnum2 =="0") { 
        window.alert('inserte numeros');
        location.reload();
    }else if(end1 =="+" || end1 =="-" || end1 =="*" || end1 =="/"){
        window.alert('valor escrito de forma incorrecta');
        location.reload();
    }else if(star1=="+" || star1=="-" || star1 =="*" || star1 == "/"){
        window.alert('Valores escritos de forma incorrecta');
        location.reload();
    } else {
        for (let i=2; i < numpars/2; i++) { //divide el numero de entra entre 2
            if (numpars % i === 0) { //si el resultado de la division es 0 el numero no es primo
                primeis = false;
            }
        }
    
        if (primeis) { //envia el mensaje en pantalla de si el numero es primo o no
            window.alert('Es primo');
            location.reload();          
        }else{
            window.alert('No es primo');
            location.reload();
        }         
    }
   
}

//validation numbers
function valid(event) {
    if(event.charCode >= 48 && event.charCode <= 57){ //solo permite ingresar desde teclado numeros
      return true;
     }
     return false;
//Impide que se pegue codigo en el input
}
window.onload = function() {
    let inpprincipal = document.getElementById('input-number');
    inpprincipal.onpaste = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("esta acción está prohibida");
    }
  }

/*Conversor*/
function ocultarymostrar(){   //funcion para mostrar y ocultar el contenedor del conversor
    let contedorconversor = document.getElementById('con-conversor')
    if (contedorconversor.style.display === "none") {
        contedorconversor.style.display = "block"
    } else {
        contedorconversor.style.display = "none"
    }
}
/*Funciones de convertir */
function convertir(){
    let unidadentrada = document.getElementById('unit-ent').value;
    let unidadesalida = document.getElementById('unit-out').value;
    let inputnum3 = parseInt(document.getElementById('input-number').value);
    let result = 0;

    if (unidadentrada === "Pixel" && (unidadesalida === "Rem")) { //de pixel a rem
        result = inputnum3/16;
        window.alert(inputnum3 + " pixel equivale a " + result.toFixed(2) + " Rem");
        location.reload();
    }else if (unidadentrada === "Rem" &&(unidadesalida === "Pixel")) { //de rem a pixel
        result = inputnum3*16;
        window.alert(inputnum3 + " Rem equivale a " + result+ " Pixel");
        location.reload();
    } else if(unidadentrada === "Pixel" &&(unidadesalida === "Porcentaje")){ //de pixel a porcentaje
        result = inputnum3*6
        window.alert(inputnum3 + " Pixel equivale a " + result.toFixed(2) + " %"); 
        location.reload();
    } else if(unidadentrada === "Porcentaje" &&(unidadesalida === "Pixel")){ //de porcentaje a pixel
        result = inputnum3/6
        window.alert(inputnum3 + " % equivale a " + result.toFixed(2) + " Pixel");
        location.reload();
    }else if(unidadentrada === "Rem" &&(unidadesalida === "Porcentaje")){ //de Rem a porcentaje
        result = (inputnum3*16)*6;
        window.alert(inputnum3 + " Rem equivale a " + result.toFixed(2) + " %");
        location.reload(); 
    }else if(unidadentrada === "Porcentaje" &&(unidadesalida === "Rem")){ //de Porcentaje a rem
        result = (inputnum3/6)/16;
        window.alert(inputnum3 + " % equivale a " + result.toFixed(2) + " Rem");
        location.reload();    
    } else if(unidadentrada === "Pixel" &&(unidadesalida === "Pixel")){ //de pixel a pixel
        result = inputnum3;
        window.alert(inputnum3 + " pixel equivale a " + result + " pixel");
        location.reload();
    }else if (unidadentrada ==="Rem" &&(unidadesalida === "Rem")) { //de rem a rem
        result = inputnum3;
        window.alert(inputnum3 + " Rem equivale a " + result + " Rem");
        location.reload();
    }else if (unidadentrada ==="Porcentaje" &&(unidadesalida === "Porcentaje")) { //de rem a rem
        result = inputnum3;
        window.alert(inputnum3 + " % equivale a " + result + " %");
        location.reload();
    }
}

