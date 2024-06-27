import { useEffect, useRef } from "react"

function CustomScrollTracker (){

    const card2 = useRef(null)
    const card2Height = useRef(null)
    const card2Offset = useRef(null)
    const card2Slide1Length = useRef(null)
    const card2Slide2Length = useRef(null)
    const lastScrollValue = useRef(0)
    const zeroer = useRef(null)
    const percentage = useRef(0)
    const percentage2 = useRef(null)
    const currentSlideTracker = useRef(0)

    const scrollTrackerFiller = useRef(null)

    useEffect(()=>{
        window.addEventListener('scroll', trackScroll)

        return ()=> {
            window.removeEventListener('scroll', trackScroll)
        }

    }, [])


    const trackScroll = () => {
        card2.current = document.querySelector('.home-card2')
        card2Height.current = card2.current.clientHeight
        card2Offset.current = card2.current.offsetTop
        scrollTrackerFiller.current = document.querySelector('.scroll-tracker-filler')
        card2Slide1Length.current = card2Offset.current+(card2Height.current*(1/3))
        card2Slide2Length.current = card2Offset.current+(card2Height.current*(2/3))
        zeroer.current = window.scrollY - card2Offset.current

        if (zeroer.current >= 0){
            percentage.current = (zeroer.current/card2Height.current)*100*3
        }

        if (window.scrollY >= card2Offset.current){
            if(window.scrollY > lastScrollValue.current && window.scrollY <= card2Offset.current+(card2Height.current*(1/3))){
                scrollTrackerFiller.current.style.transform = `translateX(${percentage.current}%)`
            }
        }
        console.log("hello",percentage.current)
    }
    return(
        <>
            <span className="scroll-tracker-line-wrapper"><span className="scroll-tracker-line"><h1 className="scroll-tracker-filler">.</h1></span></span>
        </>
    )

}

export default CustomScrollTracker
