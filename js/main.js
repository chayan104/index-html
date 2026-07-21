const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");

const nav = document.querySelector(".nav-links");

// Create overlay
const overlay = document.createElement("div");
overlay.className = "nav-overlay";
document.body.appendChild(overlay);

function openMenu(){

    nav.classList.add("active");

    overlay.classList.add("active");

    document.body.classList.add("menu-open");

    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
}

function closeMenu(){

    nav.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
}

menuBtn.addEventListener("click",()=>{

    nav.classList.contains("active")
        ? closeMenu()
        : openMenu();

});

overlay.addEventListener("click",closeMenu);

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",closeMenu);

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeMenu();

    }

});




//brands slider

$('.product-slider').slick({

    slidesToShow:4,
    slidesToScroll:1,

    infinite:true,

    autoplay:true,
    autoplaySpeed:2500,

    speed:600,

    arrows:true,
    dots:true,

    responsive:[

        {
            breakpoint:992,
            settings:{
                slidesToShow:3
            }
        },

        {
            breakpoint:768,
            settings:{
                slidesToShow:2
            }
        },

        {
            breakpoint:576,
            settings:{
                slidesToShow:1
            }
        }

    ]

});


// categories slider

$('.categories-slider').slick({

    slidesToShow:4,
    slidesToScroll:1,

    infinite:true,

    autoplay:true,
    autoplaySpeed:2500,

    speed:600,

    arrows:true,
    dots:true,

    responsive:[

        {
            breakpoint:992,
            settings:{
                slidesToShow:3
            }
        },

        {
            breakpoint:768,
            settings:{
                slidesToShow:2
            }
        },

        {
            breakpoint:576,
            settings:{
                slidesToShow:1
            }
        }

    ]

});



//stores slider
$('.stores-slider').slick({

    slidesToShow:2,
    slidesToScroll:1,

    infinite:true,

    autoplay:true,
    autoplaySpeed:2500,

    speed:600,

    arrows:true,
    dots:true,

    responsive:[

        {
            breakpoint:1699,
            settings:{
                slidesToShow:2
            }
        },

        {
            breakpoint:992,
            settings:{
                slidesToShow:1
            }
        },

        {
            breakpoint:576,
            settings:{
                slidesToShow:1
            }
        }

    ]

});
