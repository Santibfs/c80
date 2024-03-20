arraysNombres = [];

function enviar(){
    var am = " ";
    for(var i=1; i<=5; i++){
        am = document.getElementById("nombre"+i).value;
        arraysNombres.push(am);
    }
 

 document.getElementById("ver_nombres").innerHTML = arraysNombres;
 document.getElementById("boton_enviar").style.display = "none";
 document.getElementById("boton_ordenar").style.display = "inline-block";

}

function ordenar(){
    arraysNombres.sort();
    document.getElementById("ver_nombres").innerHTML = arraysNombres;
    
}