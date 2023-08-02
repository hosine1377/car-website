

//  Initialize Swiper SLIDER IN HEADER 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 25000,
      disableOnInteraction: true,
    },
    speed:900,
    parallax: true,
});



// FEACHER SLIDER 
var swiper = new Swiper(".mycar", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// COMMENT SLIDER 
var swiper = new Swiper(".mycomment", {
  // direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoplay: {
      delay: 2000,
      reverseDirection: true,
      disableOnInteraction: false,
  },
  },
});
// SCROLL TOP BTN START
const scrollBtn = document.querySelector(".scrollbtn")


window.addEventListener("scroll",()=> {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  }
  );
  scrollBtn.addEventListener("click", ()=>{
    if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 50000);
          scrollWindow();
        }, 10);
      }
  });

// SCROLL TOP BTN END





window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();
function reveal() {
    var reveals = document.querySelector(".reveal");
      var windowHeight = window.innerHeight;
      var elementTop = reveals.getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        // reveals.classList.add("active");
        // VALUE DISPLY START 
          let valueDisplys = document.querySelectorAll(".num");
          let interval = 5000;


          valueDisplys.forEach(valueDisply =>{
            let startValue = 0;
            let endValue = parseInt(valueDisply.getAttribute("data-val"));
            let duration = Math.floor(interval /endValue)
              let counter = setInterval(() => {
              startValue += 1 ;
              valueDisply.textContent = startValue ;
              if (startValue == endValue){
                clearInterval(counter)
              }
            },duration);
  
 
})
      } 
  }














