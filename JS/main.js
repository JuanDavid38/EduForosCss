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

$("#formulario_crear_foro").hide();
    // seccion docentes
$("#crear_foro").on("click", function() {
    $("#formulario_crear_foro").show();
    $("#").show();
    $("#").hide();
});

$("#card-container").hide();
$("#mostrar_foro").on("click", function() {
    $("#card-container").show();
    $("#").show();
    $("#").hide();
});
$("#card-container_cursos").hide();
$("#cursos_asignados_docente").on("click", function() {
    $("#card-container_cursos").show();
    $("#").show();
    $("#").hide();
});

$("#card-container_asignaturas").hide();
$("#asignaturas_asignados_docente").on("click", function() {
    $("#card-container_asignaturas").show();
    $("#").show();
    $("#").hide();
});
$("#crear_videoconferencias").on("click", function() {
    $("#").show();
    $("#").show();
    $("#").hide();
});
$("#programar_videoconferencias").on("click", function() {
    $("#").hide();
    $("#").show();
    $("#").hide();
});
$("#card-container_videoconferencias").hide();
$("#mostrar_videoconferencias").on("click", function() {
    $("#card-container_videoconferencias").show();
    $("#").show();
    $("#").hide();
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

});