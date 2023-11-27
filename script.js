const password_input = document.getElementById('password-input');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', ()=>{
    const type = password_input.getAttribute("type") === "password" ? "text" : "password";
    password_input.setAttribute("type", type);

    toggle.classList.toggle("fa-eye-slash");
    toggle.classList.toggle("fa-eye");
})