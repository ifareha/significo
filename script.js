

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
            scroll : ".main",
            trigger : e,
            start : "top 50%",
            end : "top 50%",
            scrub : 2,
            onEnter : function(){
                e.style.backgroundColor = "black"
                e.style.color = "#AEDEE0"
                e.style.gap = "6vw",
                e.style.width = "34vw"
            },
            onEnterBack : function(){
                e.style.backgroundColor = "transparent"
                e.style.color = "black"
                e.style.gap = "3vw",
                e.style.width = "30vw"

            }
        })
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
function page5Animation(){
var clutter = "";
document.querySelectorAll(".page-5 .info p")
.forEach( elem =>{
    var splitedp = elem.textContent.split("");
    splitedp.forEach( e =>{
        clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter;
})

gsap.to(".page-5 .info p span",{
color: "#2544EE",
stagger : 0.5,
scrollTrigger :{
    scroll : ".main",
    trigger : ".page-5",
    start : "top top",
    end : "70% 50%",
    scrub : 2,
}
})
}
function page6Animation(){
gsap.to(".page-6 .explore-part3",{
    y : "-10%",
    scrollTrigger : {
        trigger : ".page-6",
        start : "-30% top",
        end : "5% top",
        scrub : 2,
    }
})
}
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
page5Animation(); 
page6Animation(); 
theme();
