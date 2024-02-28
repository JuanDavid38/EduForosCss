document.addEventListener("DOMContentLoaded", function () {
  const userIcon = document.getElementById("userIcon");
  const dropdownContent = document.getElementById("dropdownContent");

  userIcon.addEventListener("click", function () {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
  // seccion de administradores}

  // ver docente
  $("#cont_card_docentes").hide();
  $("#Mostrar_docentes").on("click", function () {
    $("#cont_card_docentes").show();
    // todos los formularios ocultos
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();

    // ocultar cartas
    $("#cont_card_administradores").hide();
    $("#cont_card_Curso").hide();
    $("#cont_card_Asignatura").hide();

  });



  $("#cont_card_administradores").hide();
  $("#Mostrar_administradores").on("click", function () {
    $("#cont_card_administradores").show();
    $("#cont_card_administradores").show();
    // todos los formularios ocultos
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();

    // ocultar cartas
    $("#cont_card_docentes").hide();
    $("#cont_card_Curso").hide();
    $("#cont_card_Asignatura").hide();

  });

  $("#cont_card_Curso").hide();
  $("#Mostrar_cursos").on("click", function () {
    $("#cont_card_Curso").show();
    // todos los formularios ocultos
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();

    // ocultar cartas
    $("#cont_card_docentes").hide();
    $("#cont_card_administradores").hide();
 $("#cont_card_Asignatura").hide();

  });

  $("#cont_card_Asignatura").hide();
  $("#Mostrar_asignaturas").on("click", function () {
    $("#cont_card_Asignatura").show();
    // todos los formularios ocultos
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();

    // ocultar cartas
    $("#cont_card_docentes").hide();
    $("#cont_card_administradores").hide();
 $("#cont_card_Asignatura").hide();
    
  });
  // formularios administrador

  $("#formulario_crear_curso").hide();
  $("#registrar_cursos").on("click", function () {
    $("#formulario_crear_curso").show();
    $("#formulario_crear_Asignatura").hide();
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_Asignatura").hide();
    $("#formulario_visualizar_docente").hide();

    // ocultar cartas
    $("#cont_card_docentes").hide();
    $("#cont_card_administradores").hide();
    $("#cont_card_Curso").hide();
    $("#cont_card_administradores").hide();


  });
  $("#formulario_registro_usuarios").hide();
  $("#Registrar_usuarios").on("click", function () {
    $("#formulario_registro_usuarios").show();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();
    $("#formulario_visualizar_docente").hide();

    // ocultar cartas
    $("#cont_card_docentes").hide();
    $("#cont_card_administradores").hide();
    $("#cont_card_Curso").hide();
    $("#cont_card_administradores").hide();


  });

  $("#formulario_crear_Asignatura").hide();
  $("#Registrar_Asignaturas").on("click", function () {
    $("#formulario_crear_Asignatura").show();
    $("#formulario_crear_curso").hide();
    $("#formulario_registro_usuarios").hide();
    $("#formulario_visualizar_docente").hide();


    // ocultar cartas
    $("#cont_card_docentes").hide();
    $("#cont_card_administradores").hide();
    $("#cont_card_Curso").hide();
    $("#cont_card_administradores").hide();


  });
  // sweetalert de confirmación eliminacion
  $("#btn_eliminar_usuario_confirmar").on("click", function () {
    Swal.fire({
      title: "Desea eliminar el usuario?",
      text: "Confirmar la eliminación",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado.",
          icon: "success"
        });
      }
    });
  });










  // funcionamiento del modal mi perfil, sección administrador
  // Get the modal
  var modal = document.getElementById("modal_perfil_administrador");

// Get the button that opens the modal
var btn = document.getElementById("btn_perfil_administrador");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalPerfil_administrador")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



       // funcionamiento del modal visualizar DOCENTE, sección administrador
  // Get the modal
//   var modal = document.getElementById("modalVisualizarDocente");

// var btn = document.getElementById("buttonVisualizarDocente");

// var span = document.getElementsByClassName("closeProfesor")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// }

// span.onclick = function () {
//   modal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// funcionamiento del modal visualizar administrador, sección administrador
  // Get the modal
//   var modal = document.getElementById("modalVisualizarAdministrador");

// var btn = document.getElementById("buttonVisualizarAdministrador");

// var span = document.getElementsByClassName("closeAdmin")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// }

// span.onclick = function () {
//   modal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


       // funcionamiento del modal visualizar curso, sección administrador
  // Get the modal
//   var modal = document.getElementById("modalVisualizarCurso");

// var btn = document.getElementById("buttonVisualizarCurso");

// var span = document.getElementsByClassName("closeCurso")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// }

// span.onclick = function () {
//   modal.style.display = "none";
// }

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


});
