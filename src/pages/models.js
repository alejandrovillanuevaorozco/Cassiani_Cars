import { navigateTo } from "../router/router";
import { createModal, openModal, setupModalEvents } from "../components/modal";
import { header, initHeaderevents } from "../components/header";

export const models = (app) => {
    document.querySelector('#app').innerHTML = `
    ${header()}
    <div>
    <section class="relative h-[40vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center opacity-40" style="background-image: url('https://unsplash.com');">
        </div>
        <div class="relative text-center z-10 px-4">
        <h2 class="text-4xl md:text-5xl font-black text-white uppercase tracking-wide mb-2">Autos Cassiani</h2>
        <p class="text-gray-300 max-w-md mx-auto text-sm md:text-base">Poder, elegancia y tecnología del futuro
            en un solo lugar.</p>
        </div>
    </section>


    <h1 class="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mt-12 mb-10 tracking-tight">
        Modelos Disponibles
    </h1>


    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto px-4">


        <div
        class="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div>
            <img src="src/img/supragr.jpg" alt="Toyota Supra" class="w-full h-44 object-cover rounded-xl mb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Cassiani
            Toyota</span>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Supra GR</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">Deportivo legendario con un rendimiento y
            control alucinante.</p>
        </div>
        <div>
            <div class="text-2xl font-black text-emerald-600 mb-4">$55,000</div>
            <button
            class="comprarProducto block text-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm">Comprar</button>
        </div>
        </div>


        <div
        class="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div>
            <img src="src/img/mustangt.jpg" alt="Ford Mustang" class="w-full h-44 object-cover rounded-xl mb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Cassiani
            Ford</span>
            <h3 class="text-xl font-bold text-slate-900 mb-2"> Mustang GT</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">Puro músculo americano con el rugido clásico
            de un motor V8.</p>
        </div>
        <div>
            <div class="text-2xl font-black text-emerald-600 mb-4">$49,500</div>
            <button
            class="comprarProducto block text-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm">Comprar</button>
        </div>
        </div>


        <div
        class="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div>
            <img src="src/img/bmw.webp" alt="BMW" class="w-full h-44 object-cover rounded-xl mb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Cassiani
            BMW</span>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Serie 3 M</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">Elegancia alemana combinada con una
            conducción deportiva impecable.</p>
        </div>
        <div>
            <div class="text-2xl font-black text-emerald-600 mb-4">$45,000</div>
            <button
            class="comprarProducto block text-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm">Comprar</button>
        </div>
        </div>


        <div
        class="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div>
            <img src="src/img/cassianiferrari.jpg" alt="Ferrari" class="w-full h-44 object-cover rounded-xl mb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Cassiani
            Ferrari</span>
            <h3 class="text-xl font-bold text-slate-900 mb-2">F8 Tributo</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">Superdeportivo italiano de eseño, diseñado
            para la máxima velocidad.</p>
        </div>
        <div>
            <div class="text-2xl font-black text-emerald-600 mb-4">$280,000</div>
            <button
            class="comprarProducto block text-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm">Comprar</button>
        </div>
        </div>


        <div
        class="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div>
            <img src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=500" alt="Tesla"
            class="w-full h-44 object-cover rounded-xl mb-4">
            <span class="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Cassiani
            Tesla</span>
            <h3 class="text-xl font-bold text-slate-900 mb-2">Model S</h3>
            <p class="text-sm text-slate-600 leading-relaxed mb-4">100% eléctrico con la tecnología de piloto
            automático más avanzada.</p>
        </div>
        <div>
            <div class="text-2xl font-black text-emerald-600 mb-4">$89,900</div>
            <button
            class="comprarProducto block text-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-colors duration-200 shadow-sm">Comprar</button>
        </div>
        </div>

    </div>
    </div>`
    createModal();
    setupModalEvents();

    document
        .querySelectorAll(".comprarProducto")
        .forEach((button) => {

            button.addEventListener("click", () => {
                console.log("entra");

                openModal();

            });

        });
initHeaderevents()
};


