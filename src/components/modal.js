let modalElement = null;

export function createModal() {

  document.body.insertAdjacentHTML(
    "beforeend",
    `
  <div
    id="purchaseModal"
    class="fixed inset-0 bg-black/80 hidden items-center justify-center z-50"
  >
    <div
      class="w-[90%] max-w-lg bg-dark-gray border border-border-metal-gray rounded-xl p-8"
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-soft-white">
          Solicitar asesoría
        </h2>

        <button
          id="closeModal"
          class="text-light-gray hover:text-soft-white text-xl"
        >
          ✕
        </button>
      </div>

      <p
        id="selectedCar"
        class="text-gold mb-6"
      >
      </p>

      <form id="purchaseForm" class="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          required
          class="w-full bg-deep-black border border-border-metal-gray rounded-lg px-4 py-3 text-soft-white"
        >

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          class="w-full bg-deep-black border border-border-metal-gray rounded-lg px-4 py-3 text-soft-white"
        >

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          required
          class="w-full bg-deep-black border border-border-metal-gray rounded-lg px-4 py-3 text-soft-white"
        >

        <textarea
          name="message"
          rows="4"
          placeholder="Mensaje para el asesor"
          class="w-full bg-deep-black border border-border-metal-gray rounded-lg px-4 py-3 text-soft-white"
        ></textarea>

        <button
          type="submit"
          class="w-full bg-gold hover:bg-bright-gold text-deep-black font-bold py-3 rounded-lg transition-colors"
        >
          Enviar solicitud
        </button>

      </form>
    </div>
  </div>
`
  );

  modalElement =
    document.getElementById("purchaseModal");

}

export function openModal() {
  
  modalElement.classList.remove("hidden");
  modalElement.classList.add("flex");

}

export function closeModal() {

  modalElement.classList.remove("flex");
  modalElement.classList.add("hidden");

}

export function setupModalEvents() {

  document
    .getElementById("closeModal")
    .addEventListener("click", closeModal);

  modalElement.addEventListener("click", (event) => {

    if (event.target === modalElement) {
      closeModal();
    }

  });

}
