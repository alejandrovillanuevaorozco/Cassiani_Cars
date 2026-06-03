import { navigateTo } from "../router/router";
export const servicesSession = (app)=>{
    document.querySelector('#app').innerHTML = `
  <section class="relative h-[70vh] overflow-hidden">
    <img src="src/assets/servicios_img/banner-servicios.jpg" alt="Nuestros Servicios"
      class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
      <h1 class="font-serif text-6xl text-white mb-6">Nuestros Servicios</h1>
      <p class="text-gray-200 text-lg max-w-3xl">
        En Cassiani ofrecemos una experiencia exclusiva y personalizada,
        diseñada para brindarte lujo, confianza y excelencia en cada etapa.
      </p>
    </div>
  </section>
  <section id="servicios" class="bg-black text-white py-24 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="font-serif text-5xl text-amber-400 mb-4">Experiencia Premium Cassiani</h2>
        <p class="text-gray-300 max-w-3xl mx-auto">
          Descubre una gama de servicios exclusivos creados para ofrecer
          la máxima satisfacción y tranquilidad a nuestros clientes.
        </p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/venta-vehiculos.jpg" alt="Venta de Vehículos"
            class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">Venta de Vehículos</h3>
            <p class="text-gray-300 text-sm">
              Automóviles de lujo diseñados para ofrecer elegancia,
              tecnología avanzada y máximo rendimiento.
            </p>
          </div>
        </div>
        <div class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/financiamiento.jpg" alt="Financiamiento Premium" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">
              Financiamiento Premium
            </h3>
            <p class="text-gray-300 text-sm">
              Opciones de financiación flexibles adaptadas a las
              necesidades de cada cliente.
            </p>
          </div>
        </div>
        <div class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/mantenimiento.jpg" alt="Mantenimiento Especializado" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">
              Mantenimiento Especializado
            </h3>
            <p class="text-gray-300 text-sm">
              Técnicos certificados y tecnología avanzada para
              mantener tu vehículo en perfectas condiciones.
            </p>
          </div>
        </div>
        <div class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/repuestos.jpg" alt="Repuestos Originales" class="w-full h-56 object-cover">z
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">
              Repuestos Originales
            </h3>
            <p class="text-gray-300 text-sm">
              Piezas genuinas que garantizan la máxima calidad,
              seguridad y durabilidad.
            </p>
          </div>
        </div>
        <div class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/personalizacion.jpg" alt="Personalización Exclusiva" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">
              Personalización Exclusiva
            </h3>
            <p class="text-gray-300 text-sm">
              Configura cada detalle para crear un vehículo único
              acorde a tu estilo.
            </p>
          </div>
        </div>
        <div class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/garantia.jpg" alt="Garantía Extendida" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">
              Garantía Extendida
            </h3>
            <p class="text-gray-300 text-sm">
              Protección adicional para mantener tu inversión
              respaldada durante más tiempo.
            </p>
          </div>
        </div>
        <div class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/asistencia.jpg" alt="Asistencia 24/7" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">
              Asistencia 24/7
            </h3>
            <p class="text-gray-300 text-sm">
              Soporte permanente y atención inmediata para brindarte
              tranquilidad en cualquier momento.
            </p>
          </div>
        </div>
        <div class="bg-linear-to-b from-gray-900 to-black rounded-xl overflow-hidden border border-gray-800 hover:border-amber-400 hover:-translate-y-2 transition-all duration-500">
          <img src="src/assets/servicios_img/testdrive.jpg" alt="Test Drive Exclusivo" class="w-full h-56 object-cover">
          <div class="p-6">
            <h3 class="font-serif text-xl text-amber-400 mb-3">
              Test Drive Exclusivo
            </h3>
            <p class="text-gray-300 text-sm">
              Vive la experiencia de conducción premium antes de
              tomar tu decisión de compra.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`;
    document.getElementById('btn_login').addEventListener('click', () => {
    navigateTo("/login");
  });
    document.getElementById('btn_home').addEventListener('click', () => {
    navigateTo("/");
  });
      document.getElementById('btn_model').addEventListener('click', () => {
    navigateTo("/model");
  });
      document.getElementById('btn_services').addEventListener('click', () => {
    navigateTo("/services");
  });
      document.getElementById('btn_buy').addEventListener('click', () => {
    navigateTo("/buy");
  });
        document.getElementById('btn_users').addEventListener('click', () => {
    navigateTo("/users");
  });  
};