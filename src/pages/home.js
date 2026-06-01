import { navigateTo } from "../router/router";

export const landingPage = (app) => {
  app.innerHTML = `   <header class="flex flex-row justify-around w-full h-15 bg-black font-serif  text-gray-300">
        <img src="src/assets/LogoCassiani.png" alt="">
        <nav class="flex flex-row items-center text-xs gap-x-8">
            <a class="hover-underline" href="index.html" target="_blank" rel="noopener noreferrer">INICIO</a>
            <a class="hover-underline" href="pilotos.html" target="_blank" rel="noopener noreferrer">MODELOS</a>
            <a class="hover-underline" href="https://fcbayern.com/es/teams/first-team" target="_blank" rel="noopener noreferrer">SERVICIOS</a>
            <a class="hover-underline" href="pagina_2.html" target="_blank" rel="noopener noreferrer">COMPRAR</a>
        </nav>
        <div class="flex items-center">
          <button id="btn_login" value="default" class="flex flex-row gap-2 h-5 items-center font-serif uppercase text-white text-xs rounded-2xl p-2 border border-gray-300 hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            Login
          </button>
        </div>
      </header>
        <main id>
        <section class="bg-[url(assets/foto_portada.png)] bg-cover w-full h-96 flex flex-col items-end justify-center">
          <div class="fondo p-10 h-full flex flex-col items-center">
            <h1 class="font-serif text-6xl text-amber-400 text-center items-center">El Arte de<br><em class="font-italic text-gray-300">Moverse</em><br>con Clase</h1>
            <p class="font-serif text-xs text-[#8b7532] my-5">Automóviles de lujo para quienes no se conforman</p>
            <a href="#galeria" class="bg-amber-400 font-serif text-xs border border-black rounded-xs uppercase p-2 decoration-0  hover:bg-black hover:text-white hover:border hover:border-amber-400">Explorar Modelos</a>
          </div>
        </section>
      </main>`;
  document.getElementById('btn_login').addEventListener('click', () => {
    navigateTo("/login");
  });
};
