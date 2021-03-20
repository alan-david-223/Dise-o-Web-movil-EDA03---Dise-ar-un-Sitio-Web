/*función que valida todos los campos necesarios*/
function validar()
{
	var verificar = true;
	var expRegNombre = /^[a-zA-ZÑÁáÉéÍíÓóÚú\s]+$/;
	var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

	var inputnombre = document.getElementById("inputNombre");
	var ciudad = document.getElementById("ciudad");
	var dni = document.getElementById("dni");
	var tel = document.getElementById("tel");
	var fiebre= document.getElementsByName("fiebre");
	var cabeza= document.getElementsByName("cabeza");
	var tos= document.getElementsByName("tos");
	var garganta= document.getElementsByName("garganta");
	var respirar= document.getElementsByName("respirar");
	var falla=0;
	var sintoma=0;
	var viajesi= document.getElementById("viajesi");
	var viajeno= document.getElementById("viajeno");

	
	/*validación de Nombre*/
	if (!inputNombre.value)
	{
		falla++;
		alert("Por favor, ingreso su nombre y apellido");
		inputNombre.focus();
		return false;
	}

	else if (inputNombre.length < 10 || inputNombre.length >20)
	{	falla++;
		alert("Debe ingresar entre 10 y 20 caractéres");
		// Así damos de nuevo el foco al INPUT
		//setTimeout(function () { nom_ape.focus() }, 1); 
		inputNombre.focus();
		return false;
	}

	/*Validación de DNI*/

	if ( (!dni.value) || (isNaN(dni.value)))
	{
		falla++;
		alert("Campo DNI obligatorio, solo se aceptan números");	
		dni.focus();
		return false;

	}
	else if (dni.value.length < 8 || dni.value.length >= 9 )
	{	falla++;
		alert("El DNI debe estar compuesto por 8 digitos numéricos");
		// Así damos de nuevo el foco al INPUT
		//setTimeout(function () { dni.focus() }, 1);
		dni.focus();
		return false;
	}

	/*Validación de teléfono*/
	if( !(/^\d{9}$/.test(tel.value)) ) 
	{	falla++;
		alert("Tiene que escribir un telefono de 9 digitos");
		tel.focus();
		return false;
	}
	if (ciudad.value==0)
	{	falla++;	
		alert("Tiene que escribir su ciudad")
		ciudad.focus()
		return false;
	}

	/*VALIDACION DE SÍNTOMAS*/
	if(fiebre[0].checked == true ){
		sintoma++;
	} 
	else if(fiebre[1].checked == true){
	
	}else{
		
		alert("completa el campo fiebre")
		document.form.fiebre.focus()
	}



	if(cabeza[0].checked == true){sintoma++;} 
	else if
	(cabeza[1].checked == true){
	
	}else{
		
		alert("completa el campo cabeza")
		document.form.cabeza.focus()
	}

	if(tos[0].checked == true ){sintoma++;} 
	else if(tos[1].checked == true){

	}else{
		
		alert("completa el campo tos")
		document.form.tos.focus()
	}

	if(garganta[0].checked == true ){sintoma++;}

	else if(garganta[1].checked == true){
	
	}else{
		alert("completa el campo garganta")
		document.form.garganta.focus()
	}
	if(respirar[0].checked == true )
	{sintoma++;} 
	else if( respirar[1].checked == true){
		
	}
	
	else{
		alert("completa el campo respirar")
		document.form.respirar.focus()
	}

	if(falla==0){
		alert("El formulario fue completado correactamente " + sintoma  +   " sintomas de covid fueron registrados")
		document.form.submit();
		return true;
		
	}
	else{
		return false;
	}
	
}

/*Sección que muestra/Oculta la selección de países

			/*Estado por defecto de la sección países (para que aparezca oculto desde el principio)*/
			window.onload = ocultarpaises();

			/*llama a la función mostrar cuando se clickea en el botón si*/
			document.getElementById("viajesi").onclick = function() {mostrarpaises()};

			/*función que cambia el valor de "paises" a "visible" cuando se clickea el botón "sí"*/
			function mostrarpaises() {    
				document.getElementById("paises").style.visibility = "visible";		  
			}

			/*llama a la función ocultar cuando se clickea en el botón no*/
			document.getElementById("viajeno").onclick = function() {ocultarpaises()};		

			/*función que cambia el valor de "paises" a "hidden" cuando se clickea el botón "no"*/
			function ocultarpaises() {    
					document.getElementById("paises").style.visibility = "hidden";	
			}

/*Sección que muestra/Oculta el campo dirección*/

			/*Estado por defecto de la sección países (para que aparezca oculto desde el principio)*/
			window.onload = ocultardireccion();

			/*llama a la función mostrar cuando se clickea en el botón si*/
			document.getElementById("respirarsi").onclick = function() {mostrardireccion()};

			/*llama a la función ocultar cuando se clickea en el botón no*/
			document.getElementById("respirarno").onclick = function() {ocultardireccion()};


			/*función que cambia el valor de "dirección" a "visible" cuando se clickea el botón "sí"*/
			function mostrardireccion() {    
					document.getElementById("direccion").style.visibility = "visible";		  
			}

			/*función que cambia el valor de "dirección" a "hidden" cuando se clickea el botón "no"*/
			function ocultardireccion() {    
					document.getElementById("direccion").style.visibility = "hidden";	
			}