import './style.css'
import { router } from './router/router';

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('popstate', router);

window.addEventListener('popstate', (event)=>{
    console.log('User has has changed page in history');
    
    if(event.state){
        console.log('Restored State', event,state); 
    }
});
// Toggle del menú de usuario
document.addEventListener('DOMContentLoaded', () => {
  const btnUsers = document.getElementById('btn_users');
  const usersMenu = document.getElementById('users_menu');

  // Abrir/cerrar al hacer click en el botón
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
      const { navigateTo } = window.__router || {};
      history.pushState({}, '', item.dataset.route);
      window.dispatchEvent(new PopStateEvent('popstate'));
      usersMenu.classList.add('hidden');
    });
  });
});
