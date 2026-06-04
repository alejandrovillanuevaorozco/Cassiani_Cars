export function header() {
    return ` <header class="flex flex-row justify-around w-full h-15 bg-black font-serif  text-gray-300 relative">
    <img src="src/assets/logos_img/LogoCassiani.png" alt="">
    <nav class="flex flex-row items-center text-xs gap-x-8">
        <a id="btn_home" class="hover-underline hover:cursor-pointer" >INICIO</a>
        <a id="btn_model" class="hover-underline hover:cursor-pointer" >MODELOS</a>
        <a id="btn_services" class="hover-underline hover:cursor-pointer" >SERVICIOS</a>
        <a id="btn_buy" class="hover-underline hover:cursor-pointer" >COMPRAR</a>
    </nav>
    <div class="flex items-center relative">
      <button id="btn_login" value="default" class="flex flex-row gap-2 h-5 items-center font-serif uppercase text-white text-xs rounded-2xl p-2 border border-gray-300 hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        Login
      </button>
      <div class="relative">
        <button id="btn_users" value="default" aria-expanded="false" class="flex flex-row gap-2 h-5 items-center font-serif uppercase text-white text-xs rounded-2xl p-2 border border-gray-300 hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
        </button>
        <div id="users_menu" class="hidden absolute right-0 top-full mt-1 w-40 bg-black border border-gray-600 rounded-md shadow-lg z-50">
          <a class="menu-item block px-4 py-2 text-xs text-gray-300 hover:bg-gray-800 cursor-pointer" data-route="/users">Gestionar usuarios</a>
          <a class="menu-item block px-4 py-2 text-xs text-gray-300 hover:bg-gray-800 cursor-pointer" data-route="/login">Cerrar sesión</a>
        </div>
      </div>
    </div>
  </header>`
}

export function initHeaderevents() {
  const btnLogin = document.getElementById('btn_login');
  const btnHome = document.getElementById('btn_home');
  const btnModel = document.getElementById('btn_model');
  const btnServices = document.getElementById('btn_services');
  const btnUsers = document.getElementById('btn_users');
  const usersMenu = document.getElementById('users_menu');

  // Navegación principal
  if (btnHome) {
    btnHome.addEventListener('click', () => {
      history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }
  if (btnModel) {
    btnModel.addEventListener('click', () => {
      history.pushState({}, '', '/model');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }
  if (btnServices) {
    btnServices.addEventListener('click', () => {
      history.pushState({}, '', '/services');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }
  if (btnLogin) {
    btnLogin.addEventListener('click', () => {
      history.pushState({}, '', '/login');
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  }

  // Toggle menú de usuario
  if (btnUsers && usersMenu) {
    btnUsers.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !usersMenu.classList.contains('hidden');
      usersMenu.classList.toggle('hidden');
      btnUsers.setAttribute('aria-expanded', String(!isOpen));
    });

    // Cerrar al hacer click fuera
    document.addEventListener('click', () => {
      if (!usersMenu.classList.contains('hidden')) {
        usersMenu.classList.add('hidden');
        btnUsers.setAttribute('aria-expanded', 'false');
      }
    });

    // Navegar con los items del menú
    document.querySelectorAll('.menu-item[data-route]').forEach(item => {
      item.addEventListener('click', () => {
        history.pushState({}, '', item.dataset.route);
        window.dispatchEvent(new PopStateEvent('popstate'));
        usersMenu.classList.add('hidden');
      });
    });
  }
}

