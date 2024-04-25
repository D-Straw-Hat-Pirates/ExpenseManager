var tl = gsap.timeline({scrollTrigger:{
    trigger:".part1",
    start:"50% 50%",
    end:"150% 50%",
    // markers:true,
    pin:true,
    scrub:true,
}})

tl.to(".top-content",{
    rotateX:"105deg",
    opacity:0,
    duration:1.5,
},'main')

tl.to(".btm-content",{
    rotateX:"-105deg",
    opacity:0,
    duration:1.5,
},'main')

tl.to(".mid-content",{
    opacity:100,
},'main')

tl.to(".mid-img",{
    height:"100vh",
    width:"100vw",
    duration:5,
},'main')

