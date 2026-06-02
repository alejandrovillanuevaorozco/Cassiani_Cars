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
console.log("msdkmakdmlakmdfakdsm");
