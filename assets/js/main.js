const nowShowing = [
    {
        name: 'Godzilla vs Kong',
        img: "../img/movie pictures/n-1-kong.png"
    }
]

const test = document.querySelector('#test')
console.log(test)
test.innerHTML = '<img width= 50px height = 50px src="./assets/img/movie pictures/n-1-kong.png" alt="">'
        /* Carousel slide */

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');

carouselSlide.style.transition = "transform 0.9s ease-in-out";


var counter = 0;
//var size =  carouselImages.clientWidth;
var size =  1554;

nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.9s ease-in-out";
    counter ++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.9s ease-in-out";
    counter --;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    console.log(movies)
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});


        /*Emded youtube*/

var watchTrailerBtn = document.querySelector('.current-hover i');
var btn = document.querySelector('.current-trailer');
var closeTrailer = document.querySelector('.current-trailer i');


watchTrailerBtn.addEventListener('click',(e) =>{
    btn.style.display = 'block';
});

closeTrailer.addEventListener('click',() =>{
    btn.style.display = 'none';
});






// single movie

var watchBtn = document.querySelector('.watch_btn');
//console.log(watchBtn);
// watchBtn.addEventListener('click',() =>{
//     btn.style.display = 'block';
// });

