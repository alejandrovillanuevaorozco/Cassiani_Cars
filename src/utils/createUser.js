import {endPointUsers} from "./validatiion"

export async function signUpUser(user){
    try {
        const response = await fetch (endPointUsers, {
            method: 'POST',
            headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify(user)
        });
        if(!response.ok) throw new Error('Error!')
    } catch (error) {
        
    }
}