//============================= Website Animation =================================

AOS.init({
    duration: 2000, // مدة التأثير (بالميلي ثانية)
    offset: 100,    // المسافة قبل ظهور العنصر
});
// ======================Loader=======================================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none"; // إخفاء الـ Loader
});

//======================== Swiper Testimonials او اللي بتخلي الاراء تتحرك يمين وشمال=====================

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 400,
        autoplay: true,
        parallax: true,


        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination:{
            el: '.swiper-pagination',
        }
    });
    })

        //========================= Form And Contact ================================
       // Login And Register 

        const container = document.getElementById('con');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });
        
        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });
        //===================== Btn Scroll الزر بتاع اللي بيطلع الصفحة لفوق ============================

        let btn = document.getElementById("btn-scroll");

        window.onscroll = function (){
            if(scrollY >= 500) {
                btn.style.display = 'block';
            }else 
            {
                btn.style.display = 'none';
            }
        }
        btn.onclick = function() {
            scroll({
                top: 0,
            });
        }


