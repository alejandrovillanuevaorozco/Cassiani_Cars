import { navigateTo } from "../router/router";
import { validateLogin, signUpAccount, verifyMatchPassword } from "../utils/helpers";
export const loginSession = (app) => {
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
          <div id="titleLogin" class="flex flex-col items-center">
            <h1 class="font-serif text-5xl text-bright-gold">Welcome</h1>
            <h2 class=" text-soft-white">Log in to continue</h2>
          </div>

          <form id="login-form"
            class="bg-deep-black duration-500 ease-in-out hover:-translate-y-1 
            rounded-2xl w-110 h-150 p-10 border-border-metal-gray border-2 flex flex-col justify-evenly">
            <div class="flex gap-2  flex-col">
              <label class="text-soft-white">Email</label>
              <div class="border-b-2 border-border-metal-gray border-2 rounded-md flex bg-dark-gray">
                <i class="text-metal-plate p-5 self-center fa-solid fa-user"></i>
                <input id="emaillogin-input" class="p-5 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="email" placeholder="Enter your email">
              </div>
            </div>
            <div class="flex gap-2  flex-col">
              <label class="text-soft-white">Password</label>
              <div class="border-b-2 border-border-metal-gray border-2 rounded-md flex bg-dark-gray">
                <i class="text-metal-plate p-5 self-center fa-solid fa-lock"></i>
                <input id="passwordLogin-input" class="p-5 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="password" placeholder="Enter your password">
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
              <a class="text-bright-gold" id="signup-btn" href="">Sign Up</a>
            </div>  
          </form>


         <form id="register-form" 
         class="bg-deep-black duration-500 ease-in-out hover:-translate-y-1 rounded-2xl hidden
         w-110 h-170 p-10 border-border-metal-gray border-2 flex flex-col justify-evenly">
            <div class="flex flex-col items-center">
                <h1 class="font-serif text-5xl text-bright-gold text-center">Create Your Account</h1>
                <h2 class=" text-soft-white">Join the Cassiani experience</h2>
            </div>
            <div >
                <label name="name" class="text-soft-white">Name</label>
                <div class="flex">
                    <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-user"></i>
                    <input id="name-input" class="rounded-md border-2 border-border-metal-gray  p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="name" placeholder="Enter your name">
                </div>
            </div>
            <div>
                <label class="text-soft-white">last Name</label>
                <div class="flex">
                    <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-user"></i>
                    <input id="lastname-input" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none"
                        type="name" placeholder="Enter your last name">
                </div>
            </div>
            <div>
                <label class="text-soft-white">Email</label>
                <div class="flex">
                    <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-at"></i>
                    <input id="email-input" type="email" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" placeholder="Enter your email">
                </div>
            </div>
            <span id="email-warning"></span>
            <div>
                <label class="text-soft-white">Password</label>
                <div class="flex">
                    <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-key"></i>
                    <input id="password-input" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="password">
                </div>
            </div>
            <div>
                <label class="text-soft-white">Confirm Password</label>
                    <div class="flex">
                        <i class="self-center mx-3 text-2xl text-metal-plate fa-solid fa-key"></i>
                        <input id="confirm-input" class="rounded-md border-2 border-border-metal-gray p-2 bg-dark-gray w-full text-metal-plate pl-4 focus:outline-none" type="password">
                    </div>
            </div>
              <span id="msg-warning"></span>
            <div class="flex gap-3">
                <button id="cancel-btn" class="w-full font-serif rounded-sm text-gold border-2 border-gold cursor-pointer bg-deep-black">Cancel</button>
                <button id="create-account-btn" class="w-full font-serif rounded-sm bg-gold cursor-pointer">Create Account</button>
            </div>
            <div class="flex justify-center gap-2">
                <span class="text-light-gray">Already have an account?</span>
                <a id="signin-btn" class="text-bright-gold" href="">Sign In</a>
            </div>
        </form>
        
        </div>
      </div>
    </div>
    `;

  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('emaillogin-input').value;
    const passwordInput = document.getElementById('passwordLogin-input').value;

    validateLogin(emailInput, passwordInput);
    navigateTo("/");

  });
  const signUpForm = document.getElementById('register-form');
  const signUpButton = document.getElementById('signup-btn');
  const confirmPasswordInput = document.getElementById('confirm-input');
  const createAccButton = document.getElementById('create-account-btn');
  const passwordInput = document.getElementById('password-input');
  signUpButton.addEventListener('click',  (e) => {
    e.preventDefault();
    toggleHidden(signUpForm, loginForm, document.getElementById('titleLogin'));

  });

  verifyMatchPassword(passwordInput, confirmPasswordInput, createAccButton);
  passwordInput.addEventListener('input', ()=>{
    verifyMatchPassword(passwordInput, confirmPasswordInput, createAccButton);
  });
  confirmPasswordInput.addEventListener('input', ()=>{
    verifyMatchPassword(passwordInput, confirmPasswordInput, createAccButton);
  });

  

  signUpForm.addEventListener('submit', (e)=>{
    
    e.preventDefault();
    signUpAccount();
    
    signUpForm.reset();
    
    toggleHidden(signUpForm, loginForm, document.getElementById('titleLogin'));
    
    });

    document.getElementById('signin-btn').addEventListener('click', (e)=>{
      e.preventDefault();
      toggleHidden(signUpForm, loginForm, document.getElementById('titleLogin'));
      signUpForm.reset();

    });
    document.getElementById('cancel-btn').addEventListener('click', (e)=>{
      e.preventDefault();
      toggleHidden(signUpForm, loginForm, document.getElementById('titleLogin'));
      signUpForm.reset();

  });
};

function toggleHidden(e1, e2, e3){
  return e1.classList.toggle('hidden'), e2.classList.toggle('hidden'), e3.classList.toggle('hidden') 
}