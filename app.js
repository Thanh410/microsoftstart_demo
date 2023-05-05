
// swiper

var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    loop: true,
    navigation: {
        nextEl: ".swiper-btn-prev",
        prevEl: ".swiper-btn-next",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
  });

  //Show navbar 
  var btnNav = document.querySelector('.header__navBtn');
  var navBar = document.querySelector('.header__nav');
  var heightHeader = navBar.clientHeight;
  
    // function showNav(){
    //   navBar.classList.add('show');
    // }
    // function closeNav(){
    //   navBar.classList.remove('show');

    // }
    // btnNav.addEventListener('click',showNav);


    btnNav.onclick = function(){
      var isClose = navBar.style.display === "block";
      if(isClose){
        navBar.style.display = "none";
      }
      else{
        navBar.style.display = "block";
      }
    }
    // Tu dong dong mo Menu
    var menuItems = document.querySelectorAll('.header__nav-list li a[href*="#"]');
    menuItems.forEach(menuItem => {
      menuItem.onclick = function(){
        console.log('dong');
        
      }
    })
  // btnNav.onclick =function(){ 
  //   const isClose = navBar.classList.add('show');
  //   console.log(typeof isClose)
  //   if(isClose)
  //   {
      
      
  //   }
  //   else{
  //     console.log('mo')
  //   }
  // }
  

  // Active navbar
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tabs = $$('.header__nav-link');
  
  tabs.forEach((tab,index) => {
    tab.onclick = function(){
      $('.header__nav-link.active').classList.remove('active');
      this.classList.add("active");
    }
  })


  // Onsrcoll 
  
  window.onscroll = function(){
    var backTop = document.querySelector('.swiper__back-top');

    const ItemsId = ['News','Features','Platforms','Download'];
    
    
    
    if(window.scrollY >= 200){
      backTop.style.display = 'block';
      
    }
    else{
      backTop.style.display = 'none';
      
    }
  }

