// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close-modal");

// Términos y explicaciones
const termDefinitions = {
  reprehenderit: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nunc quam. Suspendisse ac ipsum hendrerit, aliquam metus ut, ullamcorper arcu. Fusce maximus dui a semper mollis. Mauris quis est ut metus fermentum dignissim. Pellentesque efficitur dui vitae orci faucibus aliquam. Duis sapien ligula, rutrum eget sapien quis, varius efficitur ipsum. Mauris non nunc hendrerit, cursus odio vel, aliquet leo. Praesent convallis imperdiet eleifend. Etiam ut molestie augue, ac venenatis ex. Phasellus id cursus leo. Mauris sagittis, ex non vulputate fermentum, nisl ex mollis sapien, at interdum magna neque et dolor.Vivamus dignissim quis tellus nec feugiat. Donec aliquam malesuada massa, non rhoncus lectus hendrerit eu. Nulla ut tellus tellus. Donec ullamcorper est in feugiat dictum. Suspendisse sit amet lectus et tortor blandit congue eu eu arcu. Donec ultrices lorem a ullamcorper interdum. Nunc suscipit ante ac odio aliquam, in congue lorem scelerisque.",
  quibusdam: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nunc quam. Suspendisse ac ipsum hendrerit, aliquam metus ut, ullamcorper arcu. Fusce maximus dui a semper mollis. Mauris quis est ut metus fermentum dignissim. Pellentesque efficitur dui vitae orci faucibus aliquam. Duis sapien ligula, rutrum eget sapien quis, varius efficitur ipsum. Mauris non nunc hendrerit, cursus odio vel, aliquet leo. Praesent convallis imperdiet eleifend. Etiam ut molestie augue, ac venenatis ex. Phasellus id cursus leo. Mauris sagittis, ex non vulputate fermentum, nisl ex mollis sapien, at interdum magna neque et dolor.Vivamus dignissim quis tellus nec feugiat. Donec aliquam malesuada massa, non rhoncus lectus hendrerit eu. Nulla ut tellus tellus. Donec ullamcorper est in feugiat dictum. Suspendisse sit amet lectus et tortor blandit congue eu eu arcu. Donec ultrices lorem a ullamcorper interdum. Nunc suscipit ante ac odio aliquam, in congue lorem scelerisque.",
  eaque: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nunc quam. Suspendisse ac ipsum hendrerit, aliquam metus ut, ullamcorper arcu. Fusce maximus dui a semper mollis. Mauris quis est ut metus fermentum dignissim. Pellentesque efficitur dui vitae orci faucibus aliquam. Duis sapien ligula, rutrum eget sapien quis, varius efficitur ipsum. Mauris non nunc hendrerit, cursus odio vel, aliquet leo. Praesent convallis imperdiet eleifend. Etiam ut molestie augue, ac venenatis ex. Phasellus id cursus leo. Mauris sagittis, ex non vulputate fermentum, nisl ex mollis sapien, at interdum magna neque et dolor.Vivamus dignissim quis tellus nec feugiat. Donec aliquam malesuada massa, non rhoncus lectus hendrerit eu. Nulla ut tellus tellus. Donec ullamcorper est in feugiat dictum. Suspendisse sit amet lectus et tortor blandit congue eu eu arcu. Donec ultrices lorem a ullamcorper interdum. Nunc suscipit ante ac odio aliquam, in congue lorem scelerisque.",
};

// Función para abrir el modal con el contenido adecuado
function openModal(term) {
  modal.style.display = "block"; // Muestra el modal
  modalTitle.textContent = term; // Actualiza el título del modal
  modalBody.textContent = termDefinitions[term]; // Actualiza el contenido con la definición
}

// Función para cerrar el modal
closeModal.onclick = function() {
  modal.style.display = "none";
};

// Cerrar el modal si se hace clic fuera del contenido
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Añadir evento a cada palabra con <span class="term">
document.querySelectorAll(".term").forEach(span => {
  span.addEventListener("click", function() {
    const term = this.getAttribute("data-term"); // Obtiene el término del atributo data-term
    openModal(term); // Abre el modal con el contenido correcto
  });
});