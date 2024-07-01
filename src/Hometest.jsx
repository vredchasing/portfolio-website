import { useEffect, useRef, useState } from "react";
import CustomScrollTracker from "./Components/CustomScrollTracker";
import CustomScrollTracker2 from "./Components/CustomScrollTracker2";

function Hometest() {
    const [isMobile, setIsMobile] = useState(null);

    const lastScrollPosition = useRef(0);
    const currentSlide = useRef(1);
    const horizontalSection = useRef([]);
    const snapDistance = useRef(10);
    const scrollSectionHeight = useRef(null);
    const scrollDistance1 = useRef(null);
    const scrollDistance2 = useRef(null);
    const scrollDistance3 = useRef(null);
    
    const card4 = useRef(null);
    const card4Section = useRef(null);
    const card4Scroller = useRef(null);
    const card4OffsetTop = useRef(null);
    const card4Height = useRef(null);
    const card4Slide1 = useRef(null);
    const card4Text1Container = useRef(null);
    const card4Text2Container = useRef(null);
    const card4Text = useRef(null);
    const card4Text2 = useRef(null);
    const card4TextP1 = useRef(null);
    const card4TextP2 = useRef(null);
    const card4TextP3 = useRef(null);

    useEffect(() => {
        const matchMediaResult = window.matchMedia("(max-width: 790px)");

        const handleResize = () => {
            setIsMobile(matchMediaResult.matches);
        };
        matchMediaResult.addEventListener("change", handleResize);

        handleResize();

        return () => {
            matchMediaResult.removeEventListener("change", handleResize);
        };
    }, []);


    useEffect(()=>{
        horizontalSection.current = Array.from(document.querySelectorAll(".horizontal-section"));

        const handleScroll = () => {

                horizontalSection.current.forEach((section) => {
                    transform(section);
                });

            //if (isMobile === false) {
            //  horizontalSection.current.forEach((section) => {
            //        transform(section);
            //    });
            //}
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

        function transform(section) {
            const sectionOffsetTop = section.parentElement.offsetTop;
            const horizontalScroll = section.querySelector(".horizontal-scroll");

            scrollSectionHeight.current = section.parentElement.clientHeight;
            scrollDistance1.current = sectionOffsetTop;

            let scrollPercentage = ((window.scrollY - sectionOffsetTop) / window.innerHeight) * 100;

            if (scrollPercentage >= 0 && window.scrollY <= sectionOffsetTop + scrollSectionHeight.current) {
                if (currentSlide.current === 1 && window.scrollY >= sectionOffsetTop + scrollSectionHeight.current * (1 / 3)) {
                    horizontalScroll.style.animation = "slide-100 0.3s linear forwards";
                    currentSlide.current = 2;
                } else if (currentSlide.current === 2 && window.scrollY >= sectionOffsetTop + scrollSectionHeight.current * (2 / 3)) {
                    horizontalScroll.style.animation = "slide-200 0.3s linear forwards";
                    currentSlide.current = 3;
                } else if (currentSlide.current === 2 && window.scrollY <= sectionOffsetTop + scrollSectionHeight.current * (1 / 3)) {
                    horizontalScroll.style.animation = "slide-0 0.3s linear forwards";
                    currentSlide.current = 1;
                } else if (currentSlide.current === 3 && window.scrollY < sectionOffsetTop + scrollSectionHeight.current * (2 / 3)) {
                    horizontalScroll.style.animation = "slide-100From3 0.3s linear forwards";
                    currentSlide.current = 2;
                }
            }

            lastScrollPosition.current = window.scrollY;
        }
    }, [isMobile])

    useEffect(() => {
        card4Section.current = Array.from(document.querySelectorAll(".card4-scroller-wrapper"));

        const handleScrollSec2 = () => {
            if (isMobile === false) {
                card4Section.current.forEach((section) => {
                    animation(section);
                });
            }
        };

        window.addEventListener("scroll", handleScrollSec2);

        return () => {
            window.removeEventListener("scroll", handleScrollSec2);
        };

        function animation(section) {
            card4.current = document.querySelector(".home-card4");
            card4Scroller.current = section.querySelector(".card4-scroller");
            card4Slide1.current = section.querySelector(".card4-slide1");
            card4OffsetTop.current = section.parentElement.offsetTop;
            card4Height.current = section.parentElement.clientHeight;
            card4Text1Container.current = section.querySelector(".card4-text-container");
            card4Text2Container.current = section.querySelector(".card4-text-container2");
            card4Text.current = section.querySelector(".card4-text");
            card4TextP1.current = section.querySelector(".card4-text-animated-container");
            card4TextP2.current = section.querySelector(".card4-text-animated-container2");
            card4TextP3.current = section.querySelector(".card4-text-animated-container3");


            if (window.scrollY >= card4OffsetTop.current && window.scrollY <= card4OffsetTop.current + card4Height.current) {
                if (window.scrollY >= card4OffsetTop.current + card4Height.current * (4 / 7)) {
                    card4Slide1.current.style.animation = "dim 0.4s ease-out forwards";
                    card4Scroller.current.style.animation = "slide-100 0.5s ease-in forwards";
                }
            }
            if (window.scrollY > card4OffsetTop.current + card4Height.current) {
                card4.current.style.height = "100vh";
                card4.current.style.position = "relative";
                card4Section.current.style.height = "100vh";
                card4Section.current.style.position = "relative";
            }
        }
    }, [isMobile]);

    return(
        <div className="home-wrapper">
            <div className="home-card1">
                <video autoPlay muted className="homevideocontainer">
                    <source className="homevideo" src="home1video.mp4"></source>
                </video>
                <div className="homevideotextcontainer">
                    <h1 className="homevideotext">FULFILL THE VISION</h1>
                    <div className="home1-infinite-scroll-wrapper">
                        <div className="home1-infinite-scroll">
                            <div className="home1-infinite-scroll-content-container">
                                <div className="home1-infinite-scroll-content">
                                    <h3 className="home1-infinite-scroll-text">STRIVE FOR EXCELLENCE.</h3>
                                    <h3 className="home1-infinite-scroll-text">BE HUMBLE.</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>
                                    <h3 className="home1-infinite-scroll-text">HARDWORK IS THE FUEL FOR SUCCESS</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>

                                    <h3 className="home1-infinite-scroll-text">STRIVE FOR EXCELLENCE.</h3>
                                    <h3 className="home1-infinite-scroll-text">BE HUMBLE.</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>
                                    <h3 className="home1-infinite-scroll-text">HARDWORK IS THE FUEL FOR SUCCESS</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>
                                    <h3 className="home1-infinite-scroll-text">PHILIPPIANS 4:13</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <h3 className="homevideotextsmall">A CREATIVE VENTURE</h3>
                    </div>
                </div>
            </div>

            <div className="home-card2">
                <div className="horizontal-section">
                    <div className="horizontal-scroll">
                        <div className="horizontal-scroll-card-slide1">
                            <div className="homecard2textcontainer">
                                <h1 className="homecard2text">WHO AM I?</h1>
                            </div>
                            <div className="custom-scroller-wrapper"><CustomScrollTracker></CustomScrollTracker></div>
                        </div>

                        <div className="horizontal-scroll-card-slide2">
                            <div className="about-me-container">
                                <div className="card2-slide2-left">
                                    <div className="card2-slide2-p-container">
                                        <p className="about-me-p">
                                            Hi, my name is vredchasing. I'm a 19 year old, self-taught fullstack developer with
                                            a passion for programning and creative web design.
                                        </p>
                                    </div>
                                    <div className="custom-scroller2-notmobile-wrapper"><CustomScrollTracker2></CustomScrollTracker2></div>
                                </div>
                                <div className="card2-slide2-right">
                                    <div className="card2-slide2-img-container">
                                        <img src="mt_everest2.webp" className="homehorizontalgallery"></img>
                                    </div>
                                    <p className="slide2-img-caption">
                                        I was born in Nepal, home of Mt. Everest
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="horizontal-scroll-card-slide3">
                            <div>
                                <p className="about-me-p">I'm a Christian, and many of my values and what defines me as a person is based on my beliefs.</p>
                                <p className="about-me-p">I have a wide range of hobbies ranging from soccer to PC gaming, to chess.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-card3">
                <div className="card3-text-container">
                    <h1 className="home-card3-text"> SKILLS.</h1>
                    <img className='sniper_scope_img' src="sniper_scope.png"></img>
                </div>
                <div className="infinite-scroll-wrapper">
                    <div className="learn-more-btn-container">
                        <button className="learn-more-btn">Learn More.</button>
                    </div>
                    <div className="infinite-scroller">
                        <div className="infinite-scroller-contents-container">
                            <div className="infinite-scroller-contents">
                                <img className='infinite-scroller-img-html' src='html_logo.svg'></img>
                                <img className='infinite-scroller-img-css' src='css_logo.png'></img>
                                <img className='infinite-scroller-img' src='javascript_logo.png'></img>
                                <img className='infinite-scroller-img-python' src='python_logo.png'></img>
                                <img className='infinite-scroller-img' src='react_logo.png'></img>
                                <img className='infinite-scroller-img-node' src='node_logo.png'></img>
                                <div className="infinite-scroller-expresslogo">Express</div>
                                <img className='infinite-scroller-img-mongo' src='mongo_db.png'></img>
                                <img className="infinite-scroller-img-git" src='git_logo.png'></img>
                            </div>
                            <div className="infinite-scroller-contents">
                                <img className='infinite-scroller-img-html' src='html_logo.svg'></img>
                                <img className='infinite-scroller-img-css' src='css_logo.png'></img>
                                <img className='infinite-scroller-img' src='javascript_logo.png'></img>
                                <img className='infinite-scroller-img-python' src='python_logo.png'></img>
                                <img className='infinite-scroller-img' src='react_logo.png'></img>
                                <img className='infinite-scroller-img-node' src='node_logo.png'></img>
                                <div className="infinite-scroller-expresslogo">Express</div>
                                <img className='infinite-scroller-img-mongo' src='mongo_db.png'></img>
                                <img className="infinite-scroller-img-git" src='git_logo.png'></img>
                            </div>
                            <div className="infinite-scroller-contents">
                                <img className='infinite-scroller-img-html' src='html_logo.svg'></img>
                                <img className='infinite-scroller-img-css' src='css_logo.png'></img>
                                <img className='infinite-scroller-img' src='javascript_logo.png'></img>
                                <img className='infinite-scroller-img-python' src='python_logo.png'></img>
                                <img className='infinite-scroller-img' src='react_logo.png'></img>
                                <img className='infinite-scroller-img-node' src='node_logo.png'></img>
                                <div className="infinite-scroller-expresslogo">Express</div>
                                <img className='infinite-scroller-img-mongo' src='mongo_db.png'></img>
                                <img className="infinite-scroller-img-git" src='git_logo.png'></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="home-card4">
                <div className="card4-scroller-wrapper">
                    <div className="card4-scroller">
                        <div className="card4-slide1"> 

                            <div className="card4-text-container">
                                <h1 className="card4-text">EXPERIENCE.</h1>
                                <img className="neurons-img" src='neurons.gif'></img>
                            </div>  

                            <div className="card4-text-container2">
                                <div className="card4-text-animated-container">
                                    <p className="card4-text-animated">
                                        I have been learning and coding obsessively for 6 months. And in all honesty,
                                        my experience does not go beyond the time I've spent 
                                        learning, and the projects I've worked on.
                                    </p>
                                </div>
                                <div className="card4-text-animated-container2">
                                    <p className="card4-text-animated2">
                                        However, I think I possess a real PASSION for programing and learning each and every day. I think I have enough knowledge for success as a junior level software engineer.
                                    </p>
                                </div >
                                <div className="card4-text-animated-container3">
                                    <p className="card4-text-animated3">
                                        If it helps with your confidence in me, I am considered "highly gifted" by school's and the states I've lived
                                        in for consistently scoring in the 98-99% on standarized state tests, and have many academic achievements
                                        such as the President's Award for Educational Excellence and being a top scorer
                                        in Math Olympiad competitions in my state when I was younger.
                                    </p>
                                </div>
                            </div>

                        </div>
            
                        <div className="card4-infinite-scroll-wrapper">
                            <div className="card4-infinite-scroller">
                                <div className="infinite-scroll-top">
                                    <div className="card4-text2-wrapper">
                                        <h1 className="card4-text2">QUALITIES.</h1>
                                    </div>
                                    <div className="infinite-scroll-cluster-wrapper">
                                        <div className="infinite-scroll-cluster">
                                            <div>
                                                <h1 className="infinite-scroll-text">ADAPTIVE</h1>
                                            </div>
                                            <img className='infinite-scroll-img' src="frog.webp"></img>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text-small">CURIOUS</h1>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <div>
                                                <h1 className="infinite-scroll-text">AMBITIOUS</h1>
                                            </div>
                                            <img className='infinite-scroll-img' src="micheal_jordan.jpg"></img>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text">CREATIVE</h1>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text-small">POSITIVE</h1>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text-small2">DETERMINED</h1>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <div>
                                                <h1 className="infinite-scroll-text">ADAPTIVE</h1>
                                            </div>
                                            <img className='infinite-scroll-img' src="frog.webp"></img>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text-small">CURIOUS</h1>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <div className="infinite-scroll-text+img-wrapper">
                                                <h1 className="infinite-scroll-text">AMBITIOUS</h1>
                                            </div>
                                            <img className='infinite-scroll-img' src="micheal_jordan.jpg"></img>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text">CREATIVE</h1>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text-small">POSITIVE</h1>
                                        </div>
                                        <div className="infinite-scroll-cluster">
                                            <h1 className="infinite-scroll-text-small2">DETERMINED</h1>
                                        </div>
                                    </div>

                                </div>
                                <div className="infinite-scroll-bottom">
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-card5">
                <div className="card5-text-container">
                    <h1 className="card5-text">PROJECTS.</h1>
                </div>
                <div className="projects-wrapper">
                    <div className="project-container">                 
                        <div className="project">
                            <h1 className="project-text">Project 1.</h1>
                        </div>
                    </div>
                    <div className="project-container"> 
                        <div className="project">
                            <h1 className="project-text">Project 2.</h1>
                        </div>
                    </div>
                    <div className="project-container"> 
                        <div className="project">
                            <h1 className="project-text">Project 3.</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hometest
