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

    // seccion docentes
$("#formulario_registro_foros_docente").hide();
$("#crear_foro").on("click", function() {
    $("#formulario_registro_foros_docente").show();
  $("#formulario_programar_video_docente").hide();
  $("#cartas_foros_docente").hide();
  $("#cartas_cursos_asignados_docente").hide();
  $("#cartas_asignaturas_asignados_docente").hide();
$("#cartas_crear_video_docente").hide();
  $("#cartas_ver_video_docente").hide();
});
$("#formulario_programar_video_docente").hide();
$("#programar_videoconferencias").on("click", function() {
  $("#formulario_programar_video_docente").show();
$("#formulario_registro_foros_docente").hide();
$("#cartas_foros_docente").hide();
$("#cartas_cursos_asignados_docente").hide();
$("#cartas_asignaturas_asignados_docente").hide();
$("#cartas_crear_video_docente").hide();
$("#cartas_ver_video_docente").hide();
});



$("#cartas_foros_docente").hide();
$("#mostrar_foro").on("click", function() {
    $("#cartas_foros_docente").show();
    $("#cartas_cursos_asignados_docente").hide();
    $("#cartas_asignaturas_asignados_docente").hide();
  $("#cartas_crear_video_docente").hide();
    $("#cartas_ver_video_docente").hide();
    $("#formulario_registro_foros_docente").hide();
  $("#formulario_programar_video_docente").hide();

});
$("#cartas_cursos_asignados_docente").hide();
$("#cursos_asignados_docente").on("click", function() {
    $("#cartas_cursos_asignados_docente").show();
    $("#cartas_foros_docente").hide();
    $("#cartas_asignaturas_asignados_docente").hide();
  $("#cartas_crear_video_docente").hide();
    $("#cartas_ver_video_docente").hide();
    $("#formulario_registro_foros_docente").hide();
  $("#formulario_programar_video_docente").hide();

});

$("#cartas_asignaturas_asignados_docente").hide();
$("#asignaturas_asignados_docente").on("click", function() {
    $("#cartas_asignaturas_asignados_docente").show();
    $("#cartas_foros_docente").hide();
    $("#cartas_cursos_asignados_docente").hide();
  $("#cartas_crear_video_docente").hide();
    $("#cartas_ver_video_docente").hide();
    $("#formulario_registro_foros_docente").hide();
  $("#formulario_programar_video_docente").hide();

});
$("#cartas_crear_video_docente").hide();
$("#crear_videoconferencias").on("click", function() {
  $("#cartas_crear_video_docente").show();
  $("#cartas_foros_docente").hide();
  $("#cartas_cursos_asignados_docente").hide();
  $("#cartas_asignaturas_asignados_docente").hide();
  $("#cartas_ver_video_docente").hide();
    $("#formulario_registro_foros_docente").hide();
  $("#formulario_programar_video_docente").hide();

});

$("#cartas_ver_video_docente").hide();
$("#mostrar_videoconferencias").on("click", function() {
    $("#cartas_ver_video_docente").show();
    $("#cartas_foros_docente").hide();
    $("#cartas_cursos_asignados_docente").hide();
    $("#cartas_asignaturas_asignados_docente").hide();
  $("#cartas_crear_video_docente").hide();
    $("#formulario_registro_foros_docente").hide();
  $("#formulario_programar_video_docente").hide();
  // $("#formulario_programar_video_docente").hide();

});




$("#perfil_config_docente").on("click", function() {
  $("#modal_config_docente").show();
  $("#cartas_ver_video_docente").hide();
  $("#cartas_foros_docente").hide();
  $("#cartas_cursos_asignados_docente").hide();
  $("#cartas_asignaturas_asignados_docente").hide();
$("#cartas_crear_video_docente").hide();
  $("#formulario_registro_foros_docente").hide();
$("#formulario_programar_video_docente").hide();

});



// funcionamiento del modal visualizar mi perfil, sección docente
// Get the modal
var modal = document.getElementById("modal_config_docente");

// Get the button that opens the modal
var btn = document.getElementById("perfil_config_docente");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModalPerfil_docente")[0];

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

/* script.js */

// document.addEventListener("DOMContentLoaded", function() {
//     const toggleMenuBtn = document.getElementById("toggleMenu");
//     const menu = document.getElementById("menu");

//     toggleMenuBtn.addEventListener("click", function() {
//         menu.classList.toggle("active");
//     });

//     const menuItems = document.querySelectorAll("#menu li");

//     menuItems.forEach(item => {
//         item.addEventListener("mouseover", function() {
//             const menuItemText = item.textContent.trim();
//             alert("Pasaste el cursor sobre: " + menuItemText);
//         });
//     });
// });


//
// document.addEventListener("DOMContentLoaded", function() {
//     const userIcon = document.getElementById("userIcon");
//     const dropdownContent = document.getElementById("dropdownContent");

//     userIcon.addEventListener("click", function() {
//         if (dropdownContent.style.display === "block") {
//             dropdownContent.style.display = "none";
//         } else {
//             dropdownContent.style.display = "block";
//         }
//     });

    





// sweetalert de confirmación eliminacion
// $("#btn_eliminar_usuario_confirmar").on("click", function() {
//     Swal.fire({
//         title: "Desea eliminar el usuario?",
//         text: "Confirmar la eliminación",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Eliminar!"
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: "Eliminado!",
//             text: "Usuario eliminado.",
//             icon: "success"
//           });
//         }
//       });
// });

});