
import { navigateTo } from "../router/router";
export const endPointUsers = "http://localhost:3000/users";

export async function validateLogin(emailUser, passwordUser){
    try{
        const response = await fetch(endPointUsers);
        const users = await response.json();

        
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