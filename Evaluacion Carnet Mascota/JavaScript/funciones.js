function obtenerFormulario(){
    //alert("ACCION DESDE EL FORMULARIO")
    var mascota= document.getElementById("mascota").value
    var vacuna = document.getElementById("vacuna").value
    var fecha = document.getElementById("fecha").value
    var proxDosis= document.getElementById("proxDosis").value
    var errores = ""
    if(mascota.length<=1){
        errores = errores +"<p class='text-danger'>*NOMBRE ES CAMPO REQUERIDO O DEBE SER MAYOR A 1 CARACTER</p>"
    }
    if(vacuna.length==0){
        errores = errores +"<p class='text-danger'>*LA VACUNA ES  REQUERIDA</p>"
    }
    if(fecha.length==0){
        errores = errores +"<p class='text-danger'>*LA FECHA DE VACUNACION ES REQUERIDA</p>"
    }
    if(proxDosis.length==0){
        errores = errores +"<p class='text-danger'>*EL NOMBRE DE LA PROXIMA DOSIS ES REQUERIDA</p>"
    }
    if(errores != ""){
        alert(errores)
}
console.log("mascota"+mascota+"vacuna"+vacuna+"fecha"+fecha+"proxDosis"+proxDosis)
console.log("largo mascota"+mascota.length+", largo vacuna"+vacuna.length+", largo fecha"+fecha+", largo proxDosis"+proxDosis)
return false

}

function obtenerFormularioJquery(){
    var mascota = $("#mascota").val()
    var vacuna = $("#vacuna").val()
    var fecha = $("#fecha").val()
    var proxDosis = $("#proxDosis").val()
    var errores = ""
    if(mascota.length<=1){
        errores = errores +"* ¡ NOMBRE DE LA MASCOTA ES REQUERIDO !"
    }
    if(vacuna.length==0){
        errores = errores +"* ¡ LA VACUNA ES  REQUERIDA !"
    }
    if(fecha.length==0){
        errores = errores + "* ¡ LA FECHA DE VACUNACION ES REQUERIDA !"
    }
    if(proxDosis.length==0){
        errores = errores + " * ¡ LA FECHA  DE LA PROXIMA DOSIS ES REQUERIDA !"

    }
    if(errores != ""){
    
Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Por favor "+errores,
  footer: '<a href="#">Why do I have this issue?</a>'
});
        return false
  }else{
  
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Save!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not save", "", "info");
        }
      });
      return false
  }

}

