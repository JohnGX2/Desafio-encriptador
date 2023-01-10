function mostrar(objeto){
    document.querySelector(objeto).style.display="show";
    document.querySelector(objeto).style.display="inherit";
}

function ocultar(objeto){
    document.querySelector(objeto).style.display="none";
}

function encriptar(){
    var texto = document.getElementById("texto").value.toLowerCase(); //pasa el texto a minusculas
    var texto = texto.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").normalize(); //elimina las acentuaciones excepto la ñ
    var texto = texto.replace(/e/mgi,"enter");
    var texto = texto.replace(/i/mgi,"imes");
    var texto = texto.replace(/a/mgi,"ai");
    var texto = texto.replace(/o/mgi,"ober");
    var texto = texto.replace(/u/mgi,"ufat");
    document.querySelector("#textareaResultado").value = texto;
    ocultar(".dibujo")
    ocultar(".mensajes")
    mostrar("#textareaResultado")
    mostrar("#botonCopiar")
     
}

function desencriptar(){ 
    var texto = document.getElementById("texto").value.toLowerCase();
    var texto = texto.replace(/enter/mgi,"e");
    var texto = texto.replace(/imes/mgi,"i");
    var texto = texto.replace(/ai/mgi,"a");
    var texto = texto.replace(/ober/mgi,"o");
    var texto = texto.replace(/ufat/mgi,"u");
    document.querySelector("#textareaResultado").value = texto
    ocultar(".dibujo")
    ocultar(".mensajes")
    mostrar("#textareaResultado")
    mostrar("#botonCopiar")
}

function copiar(){
    var resultado = document.querySelector("#textareaResultado")
    resultado.select()
    document.execCommand("copy")
    var texto = document.getElementById("texto")
    texto.value = resultado.value   
}