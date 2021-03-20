//Codigo js necesario para mostrar los popups correctamente

$(document).ready(function() {
    
    //Activa el popup correspondiente al presionar el boton de la primera opcion
    $('#op1').click(function(){
        $('#popupOp1').show();
    });

    //Activa el popup correspondiente al presionar el boton de la de la segunda opcion
    $('#op2').click(function(){
        $('#popupOp2').show();
    });

    //Activa el popup correspondiente al presionar el boton de la de la tercera opcion
    $('#op3').click(function(){
        $('#popupOp3').show();
    });

    //Oculta los mensajes al presionar el boton para cerrar
    $('.close').click(function(){
        $('#popupOp1').hide();
        $('#popupOp2').hide();
        $('#popupOp3').hide();
    });


});