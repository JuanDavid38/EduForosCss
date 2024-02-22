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

});










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


// document.addEventListener("DOMContentLoaded", function() {
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");
//     const carouselInner = document.querySelector(".carousel-inner");
//     const carouselItems = document.querySelectorAll(".carousel-item");

//     let currentIndex = 0;
//     let intervalId;

//     // Función para avanzar al siguiente slide
//     function nextSlide() {
//         currentIndex++;
//         if (currentIndex >= carouselItems.length) {
//             currentIndex = 0;
//         }
//         updateCarousel();
//     }
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

    
    // // Función para actualizar el carrusel
    // function updateCarousel() {
    //     const itemWidth = carouselItems[currentIndex].clientWidth;
    //     carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
    // }

    // // Botón para avanzar al siguiente slide
    // nextBtn.addEventListener("click", function() {
    //     nextSlide();
    //     clearInterval(intervalId); // Detener el intervalo cuando se hace clic manualmente
    // });

    // // Botón para retroceder al slide anterior
    // prevBtn.addEventListener("click", function() {
    //     currentIndex--;
    //     if (currentIndex < 0) {
    //         currentIndex = carouselItems.length - 1;
    //     }
    //     updateCarousel();
    //     clearInterval(intervalId); // Detener el intervalo cuando se hace clic manualmente
    // });

    // // Iniciar el carrusel automáticamente cada 3 segundos
    // intervalId = setInterval(nextSlide, 3000);
 // Array de objetos que representan las cartas
//  const cardsData = [
//     {
//         imageUrl: "https://via.placeholder.com/300",
//         title: "Card 1",
//         description: "Description for Card 1."
//     },
//     {
//         imageUrl: "https://via.placeholder.com/300",
//         title: "Card 2",
//         description: "Description for Card 2."
//     },
//     {
//         imageUrl: "https://via.placeholder.com/300",
//         title: "Card 3",
//         description: "Description for Card 3."
//     },
//     {
//         imageUrl: "https://via.placeholder.com/300",
//         title: "Card 4",
//         description: "Description for Card 3."
//     },
//     {
//         imageUrl: "https://via.placeholder.com/300",
//         title: "Card 5",
//         description: "Description for Card 3."
//     },
//     {
//         imageUrl: "https://via.placeholder.com/300",
//         title: "Card 6",
//         description: "Description for Card 3."
//     }
// ];

// // Selecciona el contenedor de las cartas
// const cardContainer = document.getElementById('card-container');


// // Genera el HTML de las cartas dinámicamente
// for (let i = 0; i < cardsData.length; i++) {
//     const cardData = cardsData[i];
//     const cardHtml = `
//         <div class="card">
//             <img src="${cardData.imageUrl}" alt="${cardData.title}">
//             <h2>${cardData.title}</h2>
//             <p>${cardData.description}</p>
//         </div>
//     `;
//     // Agrega el HTML de la carta al contenedor
//     cardContainer.innerHTML += cardHtml;
// // }







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