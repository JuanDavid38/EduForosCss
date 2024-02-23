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

// seccion de estudiantes

$("#cursos_asignados_cards").hide();
$("#cursos_videoconferencias_cards").hide();
$("#estudiante_cards_foros").hide();

$("#ver_curso_estudiante").on("click", function() {
    $("#cursos_asignados_cards").show();
    $("#cursos_videoconferencias_cards").hide();
    $("#estudiante_cards_foros").hide();

});
$("#ver_videoconferencia_estudiante").on("click", function() {
    $("#cursos_videoconferencias_cards").show();
    $("#cursos_asignados_cards").hide();
    $("#estudiante_cards_foros").hide();

});
$("#ver_foros_estudiante").on("click", function() {
  $("#estudiante_cards_foros").show();
  $("#cursos_videoconferencias_cards").hide();
  $("#cursos_asignados_cards").hide();

});

// funcionamiento del modal visualizar mi perfil, sección docente
// Get the modal
var modal = document.getElementById("modal_perfil_alumno");

// Get the button that opens the modal
var btn = document.getElementById("btn_visualizar_miPerfil");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalPerfil_alumno")[0];

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

// funcionamiento del modal visualizar cursos, sección estudiante
// Get the modal
var modal = document.getElementById("modalVerInfoForos_estudiante");

// Get the button that opens the modal
var btn = document.getElementById("buttonVerInfoForos_estudiante");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalEstudianteforo")[0];

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
