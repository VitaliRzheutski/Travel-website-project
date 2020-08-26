//1
// const hikeExp = document.querySelector(".hike-exp");

// window.addEventListener("scroll",scrollReveal);

// function scrollReveal(){
//     const hikePos = hikeExp.getBoundingClientRect().top;
//     const windowHeight = window.innerHeight;
//     console.log(windowHeight);
//     if(hikePos < windowHeight / 1.5){
//         hikeExp.style.color = "red";
//     }  
// }


//2
// const slide = document.querySelector('.slide');
// let options = {
//     threshold:1.0
// };
// let observer = new IntersectionObserver(slideAnim,options);

// function slideAnim(entries){
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             slide.style.background = "white";
//         }
//     });

// }


// observer.observe(slide);





// const controller = new ScrollMagic.Controller();

// const exploreScene = new ScrollMagic.Scene({
//     triggerElement:'.hike-exp',
//     triggerHook:0.5
// })
// .addIndicators({colorStart:"white",colorTrigger:"white"})
// .setClassToggle('.hike-exp','active')
// .addTo(controller);