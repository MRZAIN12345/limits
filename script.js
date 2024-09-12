gsap.registerPlugin(ScrollTrigger);
gsap.to('#sasa',{
    scrollTrigger: {
        trigger: "#sasa",
        start: "top center",
        end: "20vh center",
        scrub: 3,
        //toggleActions: "play pause resume reset",
//        markers: true
      },
      display:"block",
      opacity:1,
      y:-100,
    });

gsap.registerPlugin(ScrollTrigger);

gsap.to(".container", {
    x: () => -(document.querySelector(".container").scrollWidth - window.innerWidth),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".container").scrollWidth,
    }
});
gsap.from('.l',{
     opacity:0,
     duration:2,
     stagger:{
        from:"start",
        each:0.5,
     },
})
gsap.from(".s1a",{
    delay:0.5,
    fontSize:"0px",
    opacity:0,
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})
gsap.from(".s2a",{
    delay:1,
    opacity:0,
    fontSize:"0px",
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})
gsap.from(".s3a",{
    delay:1.5,
    opacity:0,
    fontSize:"0px",
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})
gsap.from(".s4a",{
    delay:2,
    opacity:0,
    fontSize:"0px",
    duration:0.5,
    stagger:{
        each:0.1,
        from:"start",
    }
})

let b= document.querySelectorAll('.l');
let a=document.getElementById('loader');
 window.addEventListener('load',()=>{
    setInterval(()=>{
     a.style.opacity="0"; 
    },4000)
});
let c=document.getElementById('v1');
window.addEventListener('load',()=>{
  setInterval(()=>{
    c.style.opacity="1";
  },4000)
});
 

window.addEventListener('load',()=>{
  const load=document.getElementById('loader');
  setTimeout(()=>{
  load.style.display="none";
  },4000)
});


// window.addEventListener('load',()=>{
setInterval(()=>{
    gsap.to('.l',{
     rotateX:90,
})
},3500)
//});
 let cur = document.getElementById("cur");
 let x = 0, y = 0; // Target positions
 let targetX = 0, targetY = 0; // Current positions

 document.addEventListener("mousemove", function(e) {
   targetX = e.pageX;
   targetY = e.pageY;
 });

 function update() {
   x += (targetX - x) * 0.1; // Smooth factor (0.1 can be adjusted)
   y += (targetY - y) * 0.1; // Smooth factor (0.1 can be adjusted)

   cur.style.left = x + -140 + "px";
   cur.style.top = y +  -140 + "px";

   requestAnimationFrame(update);
 }

 update();
 gsap.from('.carh',{
    scrollTrigger:{
      trigger:".carh",
      start:"top top",
      end: "+=100 bottom",
     ToggleAction:" play pause resume reset",
      pin:true,
        // markers:true,
    },
    opacity:0,
    color:"black",
    duration:1, 
})
document.getElementById('paudio').addEventListener('click',()=> {
    const messageScreen = document.getElementById('messagescreen')
    const introAudio = document.getElementById('audio');
    introAudio.play();
    gsap.to(messageScreen,{
      opacity:0,
      duration:1,
      
    });
  
      });

  document.getElementById('saudio').addEventListener('click', ()=>{
    const introAudio = document.getElementById('audio');
      introAudio.muted=true;
      const messageScreen = document.getElementById('messagescreen')
          messageScreen.style.display = 'none';
        }
      );
      let timeout;
let startScroll = false;

function smoothScroll() {
  if (startScroll) {
    let start = window.scrollY;
    let end = start + 300; // Scroll 100px down
    let duration = 2000; // Duration of scrolling in milliseconds
    let startTime = performance.now();
    
    function scroll() {
      let elapsed = performance.now() - startTime;
      let progress = Math.min(elapsed / duration, 1); // Progress from 0 to 1
      window.scrollTo(0, start + (end - start) * easeInOutQuad(progress));
      
      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    }
    
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }
    
    scroll();
  }
}

function startAutoScroll() {
  clearTimeout(timeout);
  startScroll = false; // Reset scroll flag

  timeout = setTimeout(() => {
    startScroll = true; // Set scroll flag
    smoothScroll();
  },3000);
}

// Detect user activity
window.addEventListener('mousemove', startAutoScroll);
window.addEventListener('keydown', startAutoScroll);
window.addEventListener('scroll', startAutoScroll);

// Start auto-scroll on page load
startAutoScroll();

      