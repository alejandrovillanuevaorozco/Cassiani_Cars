import {endPointUsers} from "./helpers"

export async function createUser(user){
    try {
        const response = await fetch (endPointUsers, {
            method: 'POST',
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        });
        if(!response.ok) throw new Error('Error!')
        return await response;
    }catch (error) {
        console.log(error); 
    }
}

export async function getData() {
    try {
        const response = await fetch(endPointUsers);
        const users = await response.json();
        if(!response.ok) throw new Error('Somethig jus happened')
        return users;
    } catch (error) {
        console.log(error);
        
    }
        
}