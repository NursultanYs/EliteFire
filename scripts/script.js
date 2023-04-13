'use strict';
const burger=document.querySelector('.header__hamburger'),
      nav=document.querySelector('.header__menu'),
      body=document.querySelector('body'),
      menuButtons=nav.querySelectorAll('a');


function openCloseBurger(){
    burger.classList.toggle('hamburger_active');
    nav.classList.toggle('active');
    if(body.classList.contains('overflow')){
        body.classList.remove('overflow')
    }else{
        body.classList.add('overflow');
    }
}

burger.addEventListener('click',()=>{
    openCloseBurger();
})

menuButtons.forEach((e)=>{
    e.addEventListener('click',()=>{
        openCloseBurger();
    })
})


nav.addEventListener('click', event => {
    if (event.target === nav) {
        openCloseBurger();
    }
})


//SliderFIrst

const next=document.querySelector('.menu__next__first'),
      prev=document.querySelector('.menu__prev__first'),
      sliderWrapper=document.querySelector('.menu__slider__wrapper__first'),
      slidesField=document.querySelector('.menu__slider__inner__first'),
      width=window.getComputedStyle(sliderWrapper).width;

const nextSecond=document.querySelector('.menu__next__second'),
      prevSecond=document.querySelector('.menu__prev__second'),
      sliderWrapperSecond=document.querySelector('.menu__slider__wrapper__second'),
      slidesFieldSecond=document.querySelector('.menu__slider__inner__second'),
      widthSecond=window.getComputedStyle(sliderWrapperSecond).width;

const nextThird=document.querySelector('.menu__next__third'),
      prevThird=document.querySelector('.menu__prev__third'),
      sliderWrapperThird=document.querySelector('.menu__slider__wrapper__third'),
      slidesFieldThird=document.querySelector('.menu__slider__inner__third'),
      widthThird=window.getComputedStyle(sliderWrapperThird).width;




function slider(nextBtn,prevBtn,sliderWrap,slidesFiel,widthh,offsett){

    slidesFiel.style.width=100*4+"%";
    slidesFiel.style.display='flex';
    slidesFiel.style.transition="0.5s all";
    
    sliderWrap.style.overflow='hidden';

    let slideIndex=1;

    if(prevBtn.classList.contains('create__prev')){
        dots.forEach(dot=>{
            dot.addEventListener('click', e=>{
                const slideTo=e.target.getAttribute('data-slide');
        
                slideIndex=slideTo;
                offsett= +widthh.slice(0,widthh.length-2)*(slideTo-1);
                
                slidesFiel.style.transform=`translateX(-${offsett}px)`;

                navigationDots.forEach(dot=>{
                    dot.classList.remove('active-panel');
                })
                navigationDots[slideIndex-1].classList.add('active-panel');
            })
        })
    }
    
    nextBtn.addEventListener('click',()=>{
        if(offsett == +widthh.slice(0,widthh.length-2)*3){
            offsett=0;
        }else{
            offsett += +widthh.slice(0,widthh.length-2);
        }
    
        slidesFiel.style.transform=`translateX(-${offsett}px)`;

        if(nextBtn.classList.contains('create__next')){
            if(slideIndex==4){
                slideIndex=1;
            }else{
                slideIndex++;
            }
            navigationDots.forEach(dot=>{
                dot.classList.remove('active-panel');
            })
            navigationDots[slideIndex-1].classList.add('active-panel');
        }
    });
    
    prevBtn.addEventListener('click',()=>{
        if(offsett==0){
            offsett = +widthh.slice(0,widthh.length-2)*3
        }else{
            offsett-= +widthh.slice(0,widthh.length-2);
        }
    
        slidesFiel.style.transform=`translateX(-${offsett}px)`;

        if(prevBtn.classList.contains('create__prev')){
            if(slideIndex==1){
                slideIndex=4;
            }else{
                slideIndex--;
            }
            navigationDots.forEach(dot=>{
                dot.classList.remove('active-panel');
            })
            navigationDots[slideIndex-1].classList.add('active-panel');
        }
    });


    
    console.log(1);
    console.log(2);
}

slider(next,prev,sliderWrapper,slidesField,width,0);
slider(nextSecond,prevSecond,sliderWrapperSecond,slidesFieldSecond,widthSecond,0);
slider(nextThird,prevThird,sliderWrapperThird,slidesFieldThird,widthThird,0);



//SliderCreate


const nextCreate=document.querySelector('.create__next'),
      prevCreate=document.querySelector('.create__prev'),
      sliderWrapperCreate=document.querySelector('.create__panel__wrapper'),
      slidesFieldCreate=document.querySelector('.create__panel__inner'),
      widthCreate=window.getComputedStyle(sliderWrapperCreate).width,
      dots=document.querySelectorAll('.create__panel__btn');

const navigationDots=[]
dots.forEach(dot=>{
    navigationDots.push(dot);
})
navigationDots[0].classList.add('active-panel');


slider(nextCreate,prevCreate,sliderWrapperCreate,slidesFieldCreate,widthCreate,0);
