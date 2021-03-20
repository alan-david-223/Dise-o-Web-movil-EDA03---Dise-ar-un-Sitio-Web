/*
La funcion validar() verifica que se cumplan los requisitos necesarios para cada campo del formulario.

La funcion countChars() verifica que la consulta no se exceda del límite de caracteres definido.
Al mismo tiempo realiza un conteo de los caracteres ingresados e informa la cantidad de caracteres restantes en tiempo real.
*/

function validar(){
    var error=0;
    var mensajesError='';
    var emailVal=/^(.+\@.+\..+)$/;
    var telVal =/^\d{4}\-\d{4}$/;
    
    
	if(document.getElementById('nombre').value==''){
		error++;
		mensajesError+="<p>El campo nombre es obligatorio</p>";
	}
	if(document.getElementById("apellido").value.length==0){
		error++;
		mensajesError+="<p>El campo apellido es obligatorio</p>";
	}
	if(emailVal.test(document.getElementById("email").value)==false){
		error++;
		mensajesError+="<p>El email ingresado no es válido</p>";
    }
    if(document.getElementById("tel").value.length!=0 && telVal.test(document.getElementById("tel").value)==false){
        error++;
		mensajesError+="<p>El teléfono ingresado no es válido</p>";
    }

	if(error==0){
		return true;
	}else{
		document.getElementById("mensaje").innerHTML=mensajesError;
		return false;
    }
    
    
}
function countChars(){
    var maxLength = 1000;
    var strLength = document.getElementById("in-consulta").value.length;
    var charRemain = (maxLength - strLength);
    
    if(charRemain < 0){
        document.getElementById("caracteresRestantes").innerHTML = '<p style="color: red;">Usted ha excedido el limite de '+maxLength+' caracteres</p>';
    }else{
        document.getElementById("caracteresRestantes").innerHTML = charRemain+' caracteres restantes';
    }
}