$(document).ready(function(){
   
  function caracteresCorreoValido(email){
    console.log(email);
    var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        if (caract.test(email) == false){
            return false;
        }else{
            return true;
        }
    }
  
  $('#formulario').submit(    
      function(event){
        var error = 0;        
        if($('#nombre').val().trim().length < 3 ){ 
          $('#nombre').addClass("error");
          $('#errorNombre').addClass('errorValidar');
          event.preventDefault();
          error++;
        }else{
          $('#errorNombre').removeClass('errorValidar');
          $('#nombre').removeClass("error");
        }
        if( $('#nombreEmpresa').val() == "" ){
          $('#errorNombreE').addClass('errorValidar');
          $('#nombreEmpresa').addClass("error");
          event.preventDefault();
          error++;
        }else{
          $('#errorNombreE').removeClass('errorValidar');
          $('#nombreEmpresa').removeClass("error");
        }
        if( $('#email').val() == "" ){
          $('#errorCorreo').addClass('errorValidar');
          $('#email').addClass("error");
          event.preventDefault();
          error++;
        }else{
          $('#email').removeClass("error");
          $('#errorCorreo').removeClass('errorValidar');
        }
        if( caracteresCorreoValido($('#email').val() ) == false){
          $('#errorCorreo').addClass('errorValidar');
          $('#email').addClass("error");
          event.preventDefault();
          error++;
        } 
        else{
          $('#errorCorreo').removeClass('errorValidar');
          $('#email').removeClass("error");
        }
        if( $('#telefono').val().trim().length < 8 ){
          $('#errorTelefono').addClass('errorValidar');
          $('#telefono').addClass("error");
          event.preventDefault();
          error++;
        }else{
          $('#errorTelefono').removeClass('errorValidar');
          $('#telefono').removeClass("error");
        }
       
        console.log('cantidad de errores '+error);
        if(error < 1){
          
          var formularioS = $( "#formulario" ).serialize();
          event.preventDefault();
          
          $.ajax({
           method: "POST",
           url: "ruta_hacia_el_archivo_php/form.php",
           data:  formularioS 
           })
            .done(function( msg ) {
            // alert( "Data Saved: " + msg );
          });

          $( ".campos" ).hide();
          $( ".enviado" ).fadeIn();
        
        }
       
      }
      
    );
 });


 $( "#ok" ).click(function() { 
  $( ".enviado" ).hide();
  $('#formulario')[0].reset();
  $( ".campos" ).fadeIn();

});
