import { getData} from "./httpMethods";
import {createUser} from "./httpMethods"
import { navigateTo } from "../router/router";
export const endPointUsers = "http://localhost:3000/users";

export async function validateLogin(emailUser, passwordUser){
    try{
        const users = await getData();
        const user = users.find(u =>{
            return u.email === emailUser && u.password === passwordUser;
        })
        if(user){
            localStorage.setItem('user', JSON.stringify(user))
            redirectByRol(user.role)
            console.log('Usuario ingresa');
            
        }else{
            alert('Sorry invalid credentials');
        }
    }catch(error){
        console.log('Cannot connect to API', error);
    }
}

function redirectByRol(role) {
    console.log(role);
    
    if(role === "customer" ){
        navigateTo("/") // donde se dirigira el customer al log in
    }// falta el admin
}

export async function signUpAccount() {

    const dataUsers= await getData();

    const nameInput = document.getElementById("name-input").value;
    const lastNameInput = document.getElementById("lastname-input").value;
    const emailInput = document.getElementById("email-input").value;
    const passwordInput = document.getElementById("password-input").value;
    const confirmPasswordInput = document.getElementById("confirm-input").value;

    // passwordInput = confirmPasswordInput;

    const existingUser = dataUsers.find( u => u.email.toLowerCase() === emailInput.toLowerCase());

    if(existingUser){
        emailWarning();
        return;
    }

    const lastUser = dataUsers[dataUsers.length - 1];
    let newId = null;

    if(!lastUser) newId = 1;
    else newId = lastUser.id + 1;

    

    const dataUser = {
        id: newId,
        name: nameInput,
        lastName: lastNameInput,
        role: "customer",
        email: emailInput,
        password: passwordInput
    }
    console.log("OBJETO ENVIADO", dataUser);
    await createUser(dataUser);
}

export function verifyMatchPassword(password, confirmPassword, button){


    const msgWarning = document.getElementById('msg-warning');
    if(confirmPassword.value === "" || password.value === ""){
        msgWarning.textContent="";
        button.disabled = true;
        return;// ???
    }
    if(password.value === confirmPassword.value){
        msgWarning.textContent = "Password matches";
        msgWarning.style.color = "green";
        button.disabled = false;
    }else{
        msgWarning.textContent = "Password does not match";            
        msgWarning.style.color = "red";
        button.disabled = true;
    }

}

function emailWarning(){
    const warning = document.getElementById('email-warning');
    warning.textContent = "The email is already registered";
    warning.style.color = "yellow";
}