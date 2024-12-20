//menu toggle functionality

const menu_t=document.querySelector('.menu-toggle');
const nav_l=document.querySelector('.nav-links');

menu_t.addEventListener('click',()=>{
    nav_l.classList.toggle('open');
});
//slider

const slides=document.querySelectorAll('.slide');
const prebtn=document.querySelector('.prev');
const nextbtn=document.querySelector('.next');
let currentslide=0;
function showslide(index){

    slides.forEach(sl=>sl.classList.remove('active'));
    slides[index].classList.add('active');
}
prebtn.addEventListener('click',()=>{
    currentslide=(currentslide -1 +slides.length)%slides.length;

    showslide(currentslide)

});
nextbtn.addEventListener('click',()=>{
    currentslide=(currentslide +1 )%slides.length;
    
    showslide(currentslide);

});