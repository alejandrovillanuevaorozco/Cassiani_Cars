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
      </main>
      <section class="bg-[#111111] px-6 py-20 md:px-10 lg:px-16">
  <div class="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
    
    <div>
      <p class="mb-4 text-sm uppercase tracking-[0.25em] text-[#c9a96e]">
        Nuestra Filosofía
      </p>

      <h2 class="mb-6 font-serif text-4xl leading-tight text-white md:text-5xl">
        Cada detalle,<br>una declaración.
      </h2>

      <p class="max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">
        En Cassiani, el lujo no es una opción —
        es el punto de partida. Cada vehículo nace de la obsesión
        por la perfección: materiales seleccionados a mano, motores
        diseñados para emocionar y líneas que desafían el tiempo.
        <br><br>
        No fabricamos autos. Creamos experiencias que transforman
        cada trayecto en un momento memorable.
      </p>

      <div class="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div>
          <div class="text-3xl font-light text-[#c9a96e] md:text-4xl">12</div>
          <div class="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Modelos Exclusivos
          </div>
        </div>

        <div>
          <div class="text-3xl font-light text-[#c9a96e] md:text-4xl">48</div>
          <div class="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Países con Presencia
          </div>
        </div>

        <div>
          <div class="text-3xl font-light text-[#c9a96e] md:text-4xl">99%</div>
          <div class="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Satisfacción de Clientes
          </div>
        </div>

        <div>
          <div class="text-3xl font-light text-[#c9a96e] md:text-4xl">∞</div>
          <div class="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Posibilidades de Personalización
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="overflow-hidden rounded-[28px] border border-[#c9a96e]/30 bg-linear-to-br from-[#1a1a1a] to-[#0d0d0d] p-8 shadow-2xl">
        <div class="flex min-h-[420px] items-center justify-center rounded-[22px] border border-[#c9a96e]/20 bg-black/40">
          <!-- Reemplaza este bloque por tu imagen -->
          <div class="flex h-full w-full items-center justify-center">
              <img src="src/assets/servicios_img/banner-servicios.jpg" alt="Cassiani" class="h-full min-h-[420px] w-full rounded-[22px] object-cover"/>
              <path d="M10 40 L15 25 L35 18 L55 15 L80 16 L100 22 L110 32 L112 40 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <circle cx="30" cy="42" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <circle cx="88" cy="42" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <path d="M38 40 L80 40" stroke="currentColor" stroke-width="1" opacity="0.5"/>
            </svg>
          </div>
        </div>
      </div>

      <div class="absolute -bottom-5 -right-5 h-24 w-24 rounded-2xl border border-[#c9a96e]/30 bg-[#c9a96e]/10 backdrop-blur-sm"></div>
    </div>

  </div>
</section>
<section id="galeria" class="bg-[#0d0d0d] px-6 py-20 md:px-10 lg:px-16">
  <div class="mx-auto max-w-7xl">
    
    <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="mb-3 text-sm uppercase tracking-[0.25em] text-[#c9a96e]">
          Colección 2025
        </p>
        <h2 class="font-serif text-4xl text-white md:text-5xl">
          Nuestros Modelos
        </h2>
      </div>

      <a
        href="pilotos.html"
        class="inline-flex w-fit items-center border-b border-[#c9a96e] pb-1 text-sm uppercase tracking-[0.2em] text-[#c9a96e] transition hover:text-white hover:border-white"
      >
        Ver todos
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      
      <!-- Card 1 grande -->
      <div class="group relative overflow-hidden rounded-[28px] border border-[#c9a96e]/20 bg-[#151515] md:col-span-2 md:row-span-2">
        <div class="flex min-h-[420px] items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#0b0b0b] p-8">
          <div class="text-center">
            <svg
              width="100"
              height="50"
              viewBox="0 0 120 60"
              fill="none"
              class="mx-auto mb-4 opacity-20 text-[#c9a96e]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 40 L15 25 L35 18 L55 15 L80 16 L100 22 L110 32 L112 40 Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <circle cx="30" cy="42" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <circle cx="88" cy="42" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/>
            </svg>
          </div>
        </div>

        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
        <img
  src="src/assets/model_img/gran_turing.jpeg"
  alt="Cassiani Vetro"
  class="h-full min-h-[420px] w-full object-cover"
/>
          <div class="font-serif text-2xl text-white">Cassiani Vetro</div>
          <div class="mt-1 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Gran Tourismo · 2025
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="group relative overflow-hidden rounded-[24px] border border-[#c9a96e]/20 bg-[#151515]">
        <img
  src="src/assets/model_img/nebulaGT.jpg"
  alt="Cassiani Vetro"
  class="h-[220px] w-full object-cover md:h-full"
/>
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
          <div class="font-serif text-xl text-white">Nebula GT</div>
          <div class="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Sport · 2025
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="group relative overflow-hidden rounded-[24px] border border-[#c9a96e]/20 bg-[#151515]">
        <img
  src="src/assets/model_img/aurore_coupé.jpg"
  alt="Cassiani Vetro"
  class="h-[220px] w-full object-cover md:h-full"
/>
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
          <div class="font-serif text-xl text-white">Aurore Coupé</div>
          <div class="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Coupé · 2025
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="group relative overflow-hidden rounded-[24px] border border-[#c9a96e]/20 bg-[#151515]">
 <img
  src="src/assets/model_img/Cima_SUV.jpg"
  alt="Cassiani Vetro"
  class="h-[220px] w-full object-cover md:h-full"
/>
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
          <div class="font-serif text-xl text-white">Serata</div>
          <div class="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Sedán · 2025
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="group relative overflow-hidden rounded-[24px] border border-[#c9a96e]/20 bg-[#151515]">
 <img
  src="src/assets/model_img/Zephyr_S.jpg"
  alt="Cassiani Vetro"
  class="h-[220px] w-full object-cover md:h-full"
/>
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
          <div class="font-serif text-xl text-white">Zephyr S</div>
          <div class="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            Eléctrico · 2025
          </div>
        </div>
      </div>

      <!-- Card 6 -->
      <div class="group relative overflow-hidden rounded-[24px] border border-[#c9a96e]/20 bg-[#151515]">
 <img
  src="src/assets/model_img/Luxury.jpg"
  alt="Cassiani Vetro"
  class="h-[220px] w-full object-cover md:h-full"
/>
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5">
          <div class="font-serif text-xl text-white">Cima SUV</div>
          <div class="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">
            SUV Luxury · 2025
          </div>
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
  initHeaderevents()
};
