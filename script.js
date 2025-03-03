let header = document.querySelector("header");        // scroll header started here //
window.addEventListener("scroll", function(){
  if(window.scrollY >= 105){
    header.classList.add("sticky");
    header.style.backgroundColor="white";
  }
  else{
    header.classList.remove("sticky");
    header.style.backgroundColor="transparent";
  }
})

let nav = document.querySelectorAll(".main_menu_anchor");
let logo = document.getElementById("logo_head");

window.addEventListener("scroll", function() {
  if (window.scrollY >= 105) {
    nav.forEach(anchor => anchor.classList.add("nav-black"));  
    logo.src = "images/header-logo-2.png";  
  } else {
    nav.forEach(anchor => anchor.classList.remove("nav-black"));
    logo.src = "images/header-logo-1.png";
  }
});
// scroll header end here //

// banner skider js //

$('.banner_slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// section 4 slider //

$('.sec_4_slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$('.sec_5').slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 1.7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 1
      }
    },
  ]
});

// section 9 slider //

$('.section_9_main').slick({
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});


$('.slider_12').slick({
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});





// header drawer js //
let navigation = document.querySelector(".head_right");
let bar = document.querySelector(".bar");
let closs_menu = document.querySelector(".cross");

bar.addEventListener("click", function(){
    console.log("serch open click");  

    navigation.classList.toggle("block");     // for input block
  });




  function selecTed() {
    let options = document.querySelector(".alloption");
    let options_2 = document.querySelector(".alloption_2");
    let options_3 = document.querySelector(".alloption_3");
    options.classList.toggle("mystyle");
    options_2.classList.remove("mystyle");
    options_3.classList.remove("mystyle");
  }
  function selecTed_2() {
    let options = document.querySelector(".alloption");
    let options_2 = document.querySelector(".alloption_2");
    let options_3 = document.querySelector(".alloption_3");
    options.classList.remove("mystyle");
    options_2.classList.toggle("mystyle");
    options_3.classList.remove("mystyle");
  }
  function selecTed_3() {
    let options = document.querySelector(".alloption");
    let options_2 = document.querySelector(".alloption_2");
    let options_3 = document.querySelector(".alloption_3");
    options.classList.remove("mystyle");
    options_2.classList.remove("mystyle");
    options_3.classList.toggle("mystyle");
  }
  
  function hindiLang() {
    let submit_1 = document.querySelector(".submit_1");
    let options = document.querySelector(".alloption");
    submit_1.innerHTML = "Choose Car Type";
    options.classList.remove("mystyle");
  
  }
  function engLang() {
    let submit_1 = document.querySelector(".submit_1");
    let options = document.querySelector(".alloption");
    submit_1.innerHTML = "All";
    options.classList.remove("mystyle");
  }
  function germanLang() {
    let submit_1 = document.querySelector(".submit_1");
    let options = document.querySelector(".alloption");
    submit_1.innerHTML = "Luxury Car";
    options.classList.remove("mystyle");
  }
  
  
  


// header end here //

let popup_btn = document.querySelectorAll(".popup_btn");
let pop_close = document.querySelector(".pop_close");
let popup_main = document.querySelector(".popup_main");

popup_btn.forEach((item) => {
  item.addEventListener("click", function(){
     console.log("bvhdfkh");
     popup_main.classList.add("popup_block");
    });
});

pop_close.addEventListener("click", function(){
  popup_main.classList.remove("popup_block");   // for remove input block
});

// popup end here //


