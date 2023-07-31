 let splide = new Splide("#main-slider", {
  width: 1600,
  height: 400,
  pagination: false,
  cover: true,
  rewind: true,
  autoplay: true,
  pauseOnHover: false,
  loop: true,
});


splide.mount();

const nextSlide = () =>{
  splide.go('+1');

}

setInterval(nextSlide,3000)