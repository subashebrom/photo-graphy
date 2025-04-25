let mobile_icon = document.getElementById('mobile_icon');
let mobile_menu = document.getElementById('mobile_menu');

mobile_icon.addEventListener('click', ()=>{
    mobile_menu.classList.toggle('hidden');
})