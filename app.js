
const gridImages = document.querySelectorAll('.grid-img-animate')


const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn')

const navTl = gsap.timeline()
menuBtn.addEventListener('click', () => {
    navTl.to('.menu', {
        right: 0,
        duration: 0.25
    })

        .to('.menu', {
            height: '100vh'
        })


        .to('.menu li', {
            opacity: 1,
            stagger: 0.2,
            duration: 0.25
        })

        .play()
})


cancelBtn.addEventListener('click', () => {
    navTl.reverse()
})


gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.from('.logo', {
    y: '-20px',
    opacity: 0,
    duration: 0.5
})

    .from('li[role="menuitem"]', {
        y: '-20px',
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

    .from('h1', {
        y: '-20px',
        opacity: 0,
        duration: 0.5,
        stagger: 0.4
    })

    .from('#arrowDown', {
        y: '-20px',
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true

    })




// const splitTypes = document.querySelectorAll('h2')


// splitTypes.forEach((char, i) => {
//     const text = new SplitType(char, { types: 'chars' })

//     gsap.from(text.chars, {
//         scrollTrigger: {
//             Trigger: char,
//         },
//         duration: 1,
//         y: 20,
//         opacity: 0

//     })
// })


gridImages.forEach((gridImage) => {
    gsap.from(gridImage, {
        scrollTrigger: {
            trigger: gridImage,
            scrub: 1,
            start: 'top 80%'
        },
        scale: 1.5,
        transformOrigin: 'center'
    })
})





const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
