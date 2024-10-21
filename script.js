// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close-modal");

// Términos y explicaciones
const termDefinitions = {
  reprehenderit: "Reprehenderit significa que algo es digno de censura o reproche.",
  quibusdam: "Quibusdam es una palabra latina usada en contextos legales.",
  eaque: "Eaque se refiere a 'y otras cosas' o 'también', utilizado en textos antiguos."
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