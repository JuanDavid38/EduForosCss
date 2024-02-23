document.addEventListener("DOMContentLoaded", function() {
  const userIcon = document.getElementById("userIcon");
    const dropdownContent = document.getElementById("dropdownContent");

    userIcon.addEventListener("click", function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
// seccion de administradores}
// listado y visualización de datos
$("#cont_card").hide();
$("#Mostrar_docentes").on("click", function() {
    $("#listado_docentes").show();
    $("#cont_card").show();
    // todos los formularios ocultos
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();
    
    // $("#").hide();
});
$("#listado_administradores").hide();
$("#Mostrar_administradores").on("click", function() {
    $("#listado_administradores").show();
    // $("#").show();
    $("#cont_card").show();
    // todos los formularios ocultos
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();
    // $("#").hide();
});
$("#listado_cursos").hide();
$("#Mostrar_cursos").on("click", function() {
    $("#listado_cursos").show();
    $("#cont_card").show();
        // todos los formularios ocultos
        $("#formulario_registro_usuarios").hide();
        $("#formulario_crear_curso").hide();
        $("#formulario_crear_Asignatura").hide();
    // $("#").show();
    // $("#").hide();
});


$("#listado_asignaturas").hide();
$("#Mostrar_asignaturas").on("click", function() {
    $("#listado_asignaturas").show();
    // $("#").show();
    $("#cont_card").show();
        // todos los formularios ocultos
        $("#formulario_registro_usuarios").hide();
        $("#formulario_crear_curso").hide();
        $("#formulario_crear_Asignatura").hide();
    // $("#").hide();
});

// formularios administrador

$("#formulario_crear_curso").hide();
$("#registrar_cursos").on("click", function() {
    $("#formulario_crear_curso").show();
    $("#formulario_crear_Asignatura").hide();
    $("#formulario_registro_usuarios").hide();
    $("#formulario_crear_Asignatura").hide();

    // se oculta las cartas
    $("#cont_card").hide();
});
$("#formulario_registro_usuarios").hide();
$("#Registrar_usuarios").on("click", function() {
    $("#formulario_registro_usuarios").show();
    $("#formulario_crear_curso").hide();
    $("#formulario_crear_Asignatura").hide();

    // se oculta las cartas
    $("#cont_card").hide();
});

$("#formulario_crear_Asignatura").hide();
$("#Registrar_Asignaturas").on("click", function() {
    $("#formulario_crear_Asignatura").show();
    $("#formulario_crear_curso").hide();
    $("#formulario_registro_usuarios").hide();

    // se oculta las cartas
    $("#cont_card").hide();
    // $("#").hide();
});
// sweetalert de confirmación eliminacion
$("#btn_eliminar_usuario_confirmar").on("click", function() {
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

// funcionamiento del modal visualizar, sección administrador
// Get the modal
var modal = document.getElementById("modalVisualizar");

// Get the button that opens the modal
var btn = document.getElementById("buttonVisualizar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// funcionamiento del modal editar, sección administrador
// Get the modal
var modal = document.getElementById("modalEditar");

// Get the button that opens the modal
var btn = document.getElementById("buttonEditar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalEdit")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// funcionamiento del modal mi perfil, sección administrador
// Get the modal
var modal = document.getElementById("modal_perfil_administrador");

// Get the button that opens the modal
var btn = document.getElementById("btn_perfil_administrador");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalPerfil_administrador")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});
