import gsap from "gsap"


//-------------------Animation 1-------------------------
gsap.set('#leave1Svg #hand, #leave1Svg .eye, #leave1Svg .word', { transformOrigin: '50% 50%' })

gsap.to('#leave1Svg #hand', { rotate: 10, repeat: -1, yoyo: true, ease: 'sine.inOut', duration: 1 })


const leave1EyeTl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 3 })
	.to('#leave1Svg .eye', { scaleY: 0, duration: 0.15 })
	.to('#leave1Svg .eye', { scaleY: 1, duration: 0.15 }, '>')


const leave1TextTl = gsap.timeline({ repeat: -1 })
	.from('#leave1Svg .word', { opacity: 0, scale: 0, duration: 0.5, stagger: 0.2, ease: 'sine.out', })
	.to('#leave1Svg .word', { opacity: 0, duration: 1 }, '>+5')

gsap.to('#leave1Svg #leave1', { y: 10, repeat: -1, yoyo: true, duration: 2, ease: 'sine.inOut' })

//------------------------Animation 2 ----------------------------------------
gsap.set('#leave2Svg .eye, #leave2Svg .word', { transformOrigin: '50% 50%' })
gsap.set('#leave2Svg #wordLine', { strokeDashoffset: 112, strokeDasharray: 112 })

gsap.to('#leave2Svg .hands', { y: 15, duration: 2, repeat: -1, yoyo: true, ease: 'linear' })

const leave2eyeTl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2.5 })
	.to('#leave2Svg .eye', { scaleY: 0, duration: 0.15 })
	.to('#leave2Svg .eye', { scaleY: 1, duration: 0.15 }, '>')

const leave2TextTl = gsap.timeline({ repeat: -1 })
	.from('#leave2Svg .word', { opacity: 0, scale: 0, duration: 0.5, stagger: 0.2, ease: 'sine.out', })
	.to('#leave2Svg #wordLine', { strokeDashoffset: 0 })
	.to('#leave2Svg .word', { opacity: 0, duration: 1 }, '>+3')


gsap.to('#leave2Svg #leave2', { y: 5, repeat: -1, yoyo: true, duration: 2, ease: 'sine.inOut' })


//------------------------Animation 3 ----------------------------------------
gsap.set('#leave3Svg .eye, #leave3Svg #heart, #leave3Svg #leave3', { transformOrigin: '50% 50%' })

const leave3eyeTl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 3.2 })
	.to('#leave3Svg .eye', { scaleY: 0, duration: 0.15 })
	.to('#leave3Svg .eye', { scaleY: 1, duration: 0.15 }, '>')

// gsap.to('#leave3Svg #leave3', { scale: 1.1, duration: 2, repeat: -1, yoyo: true })
gsap.to('#leave3Svg #heart', { scale: 1.03, duration: 1.5, repeat: -1, yoyo: true, ease: "back.in(1.2)" })