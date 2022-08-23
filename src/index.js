const btn = document.querySelector("#burger-btn");
const menu = document.querySelector("#mobile-menu");
const list = document.querySelector("#list")
// console.log(btn,menu)
btn.addEventListener("click",()=>{
    menu.classList.toggle("max-h-64")
    list.classList.toggle("hidden")
    // menu.classList.remove("translate-y-0")
    // menu.classList.add("translate-y-5")
})




// Getting hamburguer menu in small screens 
// const menu = document.getElementById("menu");
// const ulMenu = document.getElementById("ulMenu");

// function menuToggle() {
//     menu.classList.toggle('h-32')
// }

// // Browser resize listener
// window.addEventListener("resize", menuResize);

// // Rezise menu if user changing the width with responsive menu opened
// function menuResize() {
//     // first get the size from the window
//     const window_size = window.innerWidth || document.body.clientWidth;
//     if (window_size > 640){
//         menu.classList.remove('h-32');
//     }
// }
