import { useEffect, useRef } from "react"

function CustomScrollTracker2 (){

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

    const scrollTrackerFiller2 = useRef(null)


    const trackScroll = () => {
        card2.current = document.querySelector('.home-card2')
        card2Height.current = card2.current.clientHeight
        card2Offset.current = card2.current.offsetTop
        scrollTrackerFiller2.current = document.querySelector('.scroll-tracker-filler2')
        card2Slide1Length.current = card2Offset.current+(card2Height.current*(1/3))
        card2Slide2Length.current = card2Offset.current+(card2Height.current*(2/3))
        zeroer.current = window.scrollY-card2Offset.current-card2Height.current*(1/3)

        if (zeroer.current >= 0){
            percentage.current = (zeroer.current/card2Height.current)*100*3
        }
        else{
            percentage.current=0
        }

        if(window.scrollY >= card2Offset.current){
            scrollTrackerFiller2.current.style.transform = `translateX(${percentage.current}%)`
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', trackScroll)

        return ()=> {
            window.removeEventListener('scroll', trackScroll)
        }

    }, [])

    return(
        <>
            <span className="scroll-tracker-line-wrapper2"><span className="scroll-tracker-line2"><h1 className="scroll-tracker-filler2">.</h1></span></span>
        </>
    )
}

export default CustomScrollTracker2
import { useEffect, useRef } from "react"

function CustomScrollTracker2 (){

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

    const scrollTrackerFiller2 = useRef(null)


    const trackScroll = () => {
        card2.current = document.querySelector('.home-card2')
        card2Height.current = card2.current.clientHeight
        card2Offset.current = card2.current.offsetTop
        scrollTrackerFiller2.current = document.querySelector('.scroll-tracker-filler2')
        card2Slide1Length.current = card2Offset.current+(card2Height.current*(1/3))
        card2Slide2Length.current = card2Offset.current+(card2Height.current*(2/3))
        zeroer.current = window.scrollY-card2Offset.current-card2Height.current*(1/3)

        if (zeroer.current >= 0){
            percentage.current = (zeroer.current/card2Height.current)*100*3
        }
        else{
            percentage.current=0
        }

        if(window.scrollY >= card2Offset.current){
            scrollTrackerFiller2.current.style.transform = `translateX(${percentage.current}%)`
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', trackScroll)

        return ()=> {
            window.removeEventListener('scroll', trackScroll)
        }

    }, [])

    return(
        <>
            <span className="scroll-tracker-line-wrapper2"><span className="scroll-tracker-line2"><h1 className="scroll-tracker-filler2">.</h1></span></span>
        </>
    )
}

export default CustomScrollTracker2
