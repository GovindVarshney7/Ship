var tl = gsap.timeline();

tl.from("#navl h2", {
    y: -80,
    rotate: "-180deg",
    duration: 1,
    ease: Expo.easeInOut
})
    .from("#navc h3", {
        y: -100,
        rotate: "-180deg",

        duration: .6,
        ease: Expo.easeOut,
        stagger: 0.1
    })
    .from("#navr h3", {
        y: -100,
        rotate: "-180deg",
        duration: .6,
        ease: Expo.easeOut,
        stagger: 0.1
    })
    .from("#sign",{
        border:"none"
    })
    .from("#think h1",{
        opacity:0,
        x:-100,
        duration: .6,
        ease: Expo.slow,
        scrolltrigger:{
            trigger:"#think h1",
            markers:true,
            scale:"1.1",
            scrub:true,
            
        }
        
    })
    .from("#w",{
        color:"skyblue",
        y:-200,
        opacity:0
    })
    .from("#img",{
        width:0,
        // rotate:"30deg",
        scale:".2"
        
    })
    .from("#what p",{
        color:"yellow",
        scale:"0"
    })
    .from("#cir",{
        bottom:-10,
        right:40,
        opacity:0,
        stagger:.3

    })
    .from(".ek",{
        y:100,
        stagger:.2,
        opacity:0
    })
    .from("#line1,#line2",{
       
        opacity:0
    })
    .from("button",{    
        rotate:"-180deg",
        opacity:0,
        x:100,
    })
    // .from("#an", {
    //     right: "100%",
    //     top: "100%",
    //     opacity: 1,
    //     duration: 4,
    //     ease: Expo.easeOut,

    // })
    .from("#ani",{
        top:"100%",
        right:"100%",
    })
    .to("#ani",{
        delay:.5,
        rotate:"15deg",
        scale:1.1,
        duration:0.1

    })
    .to("#ani", {
        rotate: "-15deg",
        scale: 1.1,
        duration: 0.1

    })
    .to("#ani", {
        rotate: "15deg",
        scale: 1.1,
        duration: 0.1

    })
    .to("#ani", {
        rotate: "-15deg",
        duration: 0.1,
        scale: 1.1,

    })
    .to("#ani", {
        rotate: "15deg",
        scale: 1.1,
        duration: 0.1,


    })
    .to("#ani", {
        rotate: "-15deg",
        scale: 1.1,
        right: "-15%",
        top: "-17%",
       
    })