

function page1Animtion(){
    gsap.set(".textContainer",{scale : 7});
    var tl = gsap.timeline({
        scrollTrigger:{
            scroll : ".main",
            trigger : ".page-1",
            start : "top top",
            end : "bottom top",
            scrub : 2,
            pin : true,
        }
    });
tl.to(".videocontainer",{
    "--clip" : "0%",
    ease : "power2",
},'a')
.to(".textContainer",{
    scale : 1,
    ease : "power2",
},'a')
.to(".lft",{
    x : "-5%",
    stagger : 0.03,
    ease : "power4",
},'b')
.to(".ryt",{
    x : "5%",
    stagger : 0.03,
    ease : "power4",
},'b')

}

function page2Animation(){
    document.querySelectorAll(".page-2 .child")
    .forEach( e =>{
        ScrollTrigger.create({
            scroll: ".main",
            trigger: e,
            start: "top 50%",
            end: "top 50%",
            scrub: 2,
            onEnter: function() {
                e.style.backgroundColor = "black";
                e.style.color = "#AEDEE0";
                e.style.gap = "6vw";
                
                // Check screen width for responsiveness
                if (window.innerWidth <= 768) { // Adjust 768 to your mobile breakpoint
                    e.style.width = "100%"; // Full width on mobile
                } else {
                    e.style.width = "34vw";
                }
            },
            onEnterBack: function() {
                e.style.backgroundColor = "transparent";
                e.style.color = "black";
                e.style.gap = "3vw";
                
                // Check screen width for responsiveness
                if (window.innerWidth <= 768) {
                    e.style.width = "100%";
                } else {
                    e.style.width = "30vw";
                }
            }
        });
        
    })
}

function page3Animation(){
gsap.to(".page-3 .silde",{
    x : "-300%",
    ease : "power3",
    scrollTrigger : {
        scroll : ".main",
        trigger : ".page-3",
        start : "top top",
        end : "bottom top",
        scrub : 2,
        pin : true,
    }
})
gsap.to(".page-3 .silde img",{
   opacity:0,
    scrollTrigger : {
        scroll : ".main",
        trigger : ".container",
        start : "bottom bottom",
      
        scrub : 2,
       
    }
})
}
function paraPage(){
    var clutter = "";
    var clutter2 = "";
    document.querySelector(".left-para p").textContent.split("").forEach(function(e){
        if(e == ""){clutter += `<span>&nbsp;</span>`;}
        clutter += `<span>${e}</span>`
    });
    document.querySelector(".left-para p").innerHTML = clutter;
    
    gsap.set(".left-para span",{opacity:.2});
    gsap.to(".left-para span",{
        scrollTrigger:{
    trigger:".left-para",
    start: "top 60%",
    end: "bottom 90%",
    scrub: 1
        },
        color:"blue",
        opacity:1,
        ease: "power4",
        stagger:.1
    })
    
    document.querySelector(".right-para p").textContent.split("").forEach(function(e){
        if(e == ""){clutter2 += `<span>&nbsp;</span>`;}
        clutter2 += `<span>${e}</span>`
    });
    document.querySelector(".right-para p").innerHTML = clutter2;
    
    gsap.set(".right-para span",{opacity:.2});
    gsap.to(".right-para span",{
        scrollTrigger:{
    trigger:".right-para",
    start: "top 60%",
    end: "bottom 90%",
    scrub: 1
        },
        color:"blue",
        opacity:1,
        ease: "power4",
        stagger:.1
    })
    }
    
    
    
    function capsulesPage(){
        var tl2 = gsap.timeline({
            scrollTrigger: {
                trigger:".capsule2",
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: 1
                    }
        })
     tl2
     .to(".capsule1",{
        y:0,
        duration:1,
        ease: "power4",
     }, 'c')
     .to(".capsule2", {
        y:0,
        duration:1,
        ease: "power4", 
    }, 'c')
    }
function page4Animation(){
    var dp  = document.querySelector(".page-4 .profile")
document.querySelectorAll(".page-4 .content").forEach( elem =>{
    elem.addEventListener("mousemove",function(e){
dp.style.display = "block";
dp.style.background = `url(${elem.getAttribute("data-image")})`;
dp.style.backgroundSize = "cover";
dp.style.backgroundPosition = "center";
gsap.to(dp,{
        x : gsap.utils.mapRange(0,window.innerWidth,-200,200,e.x),
        y : (e.y - 250)
})

    })
    elem.addEventListener("mouseleave",function(){
        dp.style.display = "none";

    });
})
}
// function page5Animation(){
// var clutter = "";
// document.querySelectorAll(".page-5 .info p")
// .forEach( elem =>{
//     var splitedp = elem.textContent.split("");
//     splitedp.forEach( e =>{
//         clutter += `<span>${e}</span>`
//     })
//     elem.innerHTML = clutter;
// })

// gsap.to(".page-5 .info p span",{
// color: "#2544EE",
// stagger : 0.5,
// scrollTrigger :{
//     scroll : ".main",
//     trigger : ".page-5",
//     start : "top top",
//     end : "70% 50%",
//     scrub : 2,
// }
// })
// }
// function page6Animation(){
// gsap.to(".page-6 .explore-part3",{
//     y : "-10%",
//     scrollTrigger : {
//         trigger : ".page-6",
//         start : "-30% top",
//         end : "5% top",
//         scrub : 2,
//     }
// })
// }
function theme(){
    document.querySelectorAll(".section")
    .forEach( elem =>{
        ScrollTrigger.create({
            scroll : ".main",
            trigger : elem,
            start : "top 50%",
            end : "bottom 50%",
            scrub : 2,
            onEnter : function(){
             document.body.setAttribute("theme",elem.dataset.color);
            },
            onEnterBack : function(){
                document.body.setAttribute("theme",elem.dataset.color);
            }
        })
    })
    }
page1Animtion();
page2Animation();
page3Animation();
page4Animation();
// page5Animation(); 
// page6Animation(); 
theme();
paraPage();
capsulesPage();