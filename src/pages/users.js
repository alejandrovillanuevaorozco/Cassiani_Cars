import { initUsers } from "../utils/btn_save_users";

export const usersSession = (app) => {
  app.innerHTML = `
    <div class="bg-black">
      <div class="flex flex-col bg-black border border-gray-300 rounded-l mx-[10%] p-4">
        <div class="flex flex-row w-full justify-between items-center gap-4">
          <p class="font-serif text-gray-300 text-2xl">Users:</p>
          <input
            type="search"
            id="search_users"
            placeholder="Buscar usuario..."
            class="w-[80%] rounded-lg border border-gray-400 text-gray-400 p-2"
          />
          <button id="add_users" class="font-serif bg-emerald-700 p-3 m-2 text-white rounded hover:bg-emerald-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
          </button>
        </div>

        <div id="users_update"></div>
      </div>

      <dialog id="users_modal" class="rounded-xl p-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-black/40">
        <form id="register-form" class="bg-deep-black duration-500 ease-in-out hover:-translate-y-1 rounded-2xl w-110 h-170 p-10 border-border-metal-gray border-2 flex flex-col justify-evenly">
          <div class="flex flex-col items-center">
            <h1 class="font-serif text-5xl text-bright-gold">Create New User</h1>
          </div>

          <div>
            <label name="name" class="text-soft-white">Name</label>
            <div class="flex">
              <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-user"></i>
              <input id="name_form" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="text" placeholder="Enter your name">
            </div>
          </div>

          <div>
            <label class="text-soft-white">Last Name</label>
            <div class="flex">
              <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-user"></i>
              <input id="lastname_form" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="text" placeholder="Enter your last name">
            </div>
          </div>

          <div>
            <label class="text-soft-white">Email</label>
            <div class="flex">
              <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-at"></i>
              <input id="email_form" type="email" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" placeholder="Enter your email">
            </div>
          </div>

          <div>
            <label class="text-soft-white">Password</label>
            <div class="flex">
              <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-key"></i>
              <input id="password_form" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="password">
            </div>
          </div>

          <div class="flex flex-col rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none">
            <p class="font-serif text-soft-white text-sm text-center my-2 flex flex-col">Role</p>
            <div id="options_role_form" class="flex flex-row justify-around">
              <label class="flex items-center gap-2">
                <span class="text-metal-plate font-serif">Client</span>
                <input id="rol_client" type="radio" name="role" value="client" class="w-4 h-4">
              </label>
              <label class="flex items-center gap-2">
                <span class="text-metal-plate font-serif">Admin</span>
                <input type="radio" name="role" value="Admin" class="w-4 h-4">
              </label>
            </div>
          </div>

          <div class="flex justify-center gap-3">
            <button id="btn_cancel_form" type="button" class="w-30 font-serif rounded-sm text-gold border-2 border-gold cursor-pointer hover:bg-red-600 bg-deep-black">Cancel</button>
            <button id="btn_save_form" type="submit" class="w-30 font-serif rounded-sm bg-gold cursor-pointer hover:bg-bright-gold">Save user</button>
          </div>
        </form>
      </dialog>
    </div>
  `;
  initUsers();
};