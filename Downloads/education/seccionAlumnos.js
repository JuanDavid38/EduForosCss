document.addEventListener("DOMContentLoaded", function() {


// seccion de estudiantes

$("#cursos_asignados_cards").hide();
$("#cursos_videoconferencias_cards").hide();

$("#ver_curso_estudiante").on("click", function() {
    $("#cursos_asignados_cards").show();
    $("#cursos_videoconferencias_cards").hide();

});
$("#ver_videoconferencia_estudiante").on("click", function() {
    $("#cursos_videoconferencias_cards").show();
    $("#cursos_asignados_cards").hide();

});
});
