const menuHamburger = document.querySelector(".nav_menu")
        const navLinks = document.querySelector(".nav_items")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })

        $("#inpt_search").on('focus', function () {
                $(this).parent('label').addClass('active');
        });
        
        $("#inpt_search").on('blur', function () {
                if($(this).val().length == 0)
                        $(this).parent('label').removeClass('active');
        });