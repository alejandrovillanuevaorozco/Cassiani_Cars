import { header, initHeaderevents } from "../components/header";
import { navigateTo } from "../router/router";

export const landingPage = (app) => {
  app.innerHTML = `
  ${header()}
        <main id>
        <section class="bg-[url(src/assets/home_img/foto_portada.png)] bg-cover w-full h-130 flex flex-col items-end justify-center">
          <div class="fondo p-10 h-full flex flex-col items-center">
            <h1 class="font-serif text-6xl text-amber-400 text-center items-center">El Arte de<br><em class="font-italic text-gray-300">Moverse</em><br>con Clase</h1>
            <p class="font-serif text-xs text-[#8b7532] my-5">Automóviles de lujo para quienes no se conforman</p>
            <a href="/model" class="bg-amber-400 font-serif text-xs border border-black rounded-xs uppercase p-2 decoration-0  hover:bg-black hover:text-white hover:border hover:border-amber-400">Explorar Modelos</a>
          </div>
        </section>
      </main>`;
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
  initHeaderevents()
};
