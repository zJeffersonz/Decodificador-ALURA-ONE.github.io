var textoDigitado = document.querySelector("#area-texto"); 
var textoGravado = document.querySelector("#texto-saida");

function criptografar(){
    var texto = textoDigitado.value; 
    
    var resultadoCrip = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai")
    .replace(/o/g, "ober").replace(/u/g, "ufat");
    
    document.getElementById("texto-saida").innerHTML ='<textarea  id="resultado" >'+ resultadoCrip +'</textarea>' +
     '<button id="bt-copiar" onclick="copiar()">Copiar</button>';
   
};
function descriptografar(){
    var texto = textoDigitado.value;

    var resultadoDesc = texto.replace(/ENTER/g, "E").replace(/IMES/g, "E").replace(/AI/g, "A").replace(/OBER/g, "O").replace(/UFAT/g, "U");

    document.getElementById("texto-saida").innerHTML = '<textarea  id="resultado">'+ resultadoDesc +'</textarea>' +
     '<button id="bt-copiar" onclick="copiar()">Copiar</button>';
};

function copiar() {
    var textoCopiado = document.getElementById('resultado');
  
    textoCopiado.select();
    document.execCommand('copy');
    alert("Texto copiado.");
} 
