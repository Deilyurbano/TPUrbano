function enviarDatos(){
    let nombreApellido = document.getElementById("nombre-y-apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let msj = document.getElementById("msj").value;
    
    if(nombreApellido==""){
        alert("El campo nombre es obligatorio")
        document.getElementById("nombre-y-apellido").focus();
    }else{
        if (email==""){
            alert("El campo Correo electronico es obligatorio");
            document.getElementById("email").focus();
        }else{
            if(telefono==""){
                alert("El campo Telefono es obligatorio");
                document.getElementById("telefono").focus(); 
            }else{
                if(msj==""){
                    alert("El campo mensaje esta vacio. ¿Desea enviar el formulario de todas formas?");
                    document.getElementById("msj").focus();
      
                }else{
                    document.getElementById("nombre-y-apellido").value="";
                    document.getElementById("email").value="";
                    document.getElementById("telefono").value="";
                    document.getElementById("msj").value="";
                    document.getElementById("nombre-y-apellido").focus();
                    alert("Su informacion fue enviada con exito")
                }

            }
            

        }
    }

}
