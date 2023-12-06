const menuHamburger = document.querySelector(".nav_menu")
        const navLinks = document.querySelector(".nav_items")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })