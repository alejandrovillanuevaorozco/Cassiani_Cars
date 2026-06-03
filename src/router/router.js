import { loginSession } from "../pages/login";
import { landingPage } from "../pages/home";
import { servicesSession } from "../pages/services";
import { usersSession } from "../pages/users";

const routes = {
    "/login": loginSession,
    "/services": servicesSession,
    "/users": usersSession,
    "/": landingPage
};

export const navigateTo = (path)=>{
    history.pushState({}, "", path);
    router();
};

export const router = async () => {
    const app = document.querySelector('#app');
    const path= window.location.pathname;
    const page = routes[path];

    if(!page){
        app.innerHTML = "<h1>404 Not Found</h1>";
        return;
    }
    await page(app);
};