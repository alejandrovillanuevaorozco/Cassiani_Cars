import { navigateTo } from "../router/router";
export const loginSession = (app)=>{
    document.querySelector('#app').innerHTML = `
    <div class="bg-[url(src/assets/cassiani-bg-login.png)]
    bg-cover
    bg-no-repeat
    min-h-screen
    flex justify-end" >
      <div class="flex gap-5 
      w-[50vw] min-h-screen
      justify-end items-center
      bg-linear-to-r from-white-100 to-dark-gray">

        <div class="flex flex-col gap-5 mr-70">
          <div class="flex flex-col items-center">
            <h1 class="text-5xl text-bright-gold">Welcome</h1>
            <h2 class=" text-soft-white">Log in to continue</h2>
          </div>

          <form id="login-form"
            class="bg-deep-black duration-500 ease-in-out hover:-translate-y-1 
            rounded-2xl w-110 h-150 p-10 border-border-metal-gray border-2 flex flex-col justify-evenly">
            <div class="flex gap-2  flex-col">
              <label class="text-soft-white">Email</label>
              <div class="border-b-2 border-border-metal-gray border-2 rounded-md flex bg-dark-gray">
                <i class="text-metal-plate p-5 self-center fa-solid fa-user"></i>
                <input class="p-5 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="email" placeholder="Enter your email">
              </div>
            </div>
            <div class="flex gap-2  flex-col">
              <label class="text-soft-white">Password</label>
              <div class="border-b-2 border-border-metal-gray border-2 rounded-md flex bg-dark-gray">
                <i class="text-metal-plate p-5 self-center fa-solid fa-lock"></i>
                <input class="p-5 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="password" placeholder="Enter your password">
              </div>
            </div>
            <a class="text-bright-gold self-end" href="">Forgot Password?</a>
            <button id="login-btn" class="p-5 rounded-lg bg-gold cursor-pointer">Sign in</button>
            
            <div class="flex justify-center items-center gap-1">
              <span class="bg-border-metal-gray h-0.5 w-20"></span>
              <span class="text-light-gray">Or continue with</span>
              <span class="bg-border-metal-gray h-0.5 w-20"></span>
            </div>
            
            <a href="//www.google.com" 
            class="border-border-metal-gray border-2 p-3 flex justify-center gap-2 items-center">
              <i class="text-metal-plate fa-brands fa-google"></i>
              <span class="text-light-gray">Continue with Google</span>
            </a>
            <div class="flex justify-center gap-2">
              <span class="text-light-gray">Don't you have an account?</span>
              <a class="text-bright-gold" href="">Sign Up</a>
            </div>  
            
          </form>
        
        
        </div>
      </div>
    </div>
    `;
    // document.getElementById('login-form').addEventListener('submit', (e) => {
    //   e.preventDefault();
    //   navigateTo("/");
    // });
};