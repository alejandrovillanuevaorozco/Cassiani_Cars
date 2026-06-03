export function initUsers() {
  const btnAddUsers = document.getElementById("add_users");
  const usersModal = document.getElementById("users_modal");
  const form = document.getElementById("register-form");
  const usersContainer = document.getElementById("users_update");
  const btnCancel = document.getElementById("btn_cancel_form");
  const searchInput = document.getElementById("search_users");

  const URL_USERS = "http://localhost:3000/users";
  let allUsers = [];

  if (!btnAddUsers || !usersModal || !form || !usersContainer || !btnCancel) {
    return;
  }

  btnAddUsers.addEventListener("click", () => {
    usersModal.showModal();
  });

  btnCancel.addEventListener("click", (e) => {
    e.preventDefault();
    usersModal.close();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name_form")?.value.trim();
    const lastName = document.getElementById("lastname_form")?.value.trim();
    const email = document.getElementById("email_form")?.value.trim();
    const password = document.getElementById("password_form")?.value.trim();
    const role = document.querySelector('input[name="role"]:checked')?.value;

    if (!name || !lastName || !email || !password || !role) {
      alert("Completa todos los campos");
      return;
    }

    const newUser = { name, lastName, email, role, password };

    try {
      const response = await fetch(URL_USERS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });

      if (!response.ok) {
        throw new Error("No se pudo guardar el usuario");
      }

      await response.json();
      form.reset();
      usersModal.close();
      await loadUsers();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const text = searchInput.value.toLowerCase().trim();

      const filteredUsers = allUsers.filter((user) =>
        user.name.toLowerCase().includes(text) ||
        user.lastName.toLowerCase().includes(text) ||
        user.email.toLowerCase().includes(text) ||
        user.role.toLowerCase().includes(text)
      );

      renderUsers(filteredUsers);
    });
  }

  async function loadUsers() {
    try {
      const response = await fetch(URL_USERS);

      if (!response.ok) {
        throw new Error("No se pudieron cargar los usuarios");
      }

      const users = await response.json();
      allUsers = users;
      renderUsers(users);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
      usersContainer.innerHTML = `<p class="text-red-500">Error al cargar usuarios</p>`;
    }
  }

  function renderUsers(users) {
    usersContainer.innerHTML = "";

    if (!users || users.length === 0) {
      usersContainer.innerHTML = `<p class="text-gray-500">No hay usuarios</p>`;
      return;
    }

    users.forEach((user) => {
      usersContainer.innerHTML += `
        <div class="flex flex-row items-center justify-between border border-amber-300 rounded-xl p-4 m-4 bg-black shadow">
          <div>
            <h3 class="font-bold text-lg text-amber-300">${user.name} ${user.lastName}</h3>
            <p class="text-sm text-gray-300"><b>Rol:</b> ${user.role}</p>
          </div>

          <div class="flex flex-row justify-between gap-2 m-2">
            <p class="text-sm text-gray-300"><b>Email:</b> ${user.email}</p>
          </div>

          <div class="flex flex-row m-2">
            <button class="font-serif bg-amber-400 p-3 m-2 text-white rounded hover:bg-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              </button>
            <button class="font-serif bg-amber-400 p-3 m-2 text-white rounded hover:bg-amber-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>            
            </button>
          </div>
        </div>
      `;
    });
  }

  loadUsers();
}