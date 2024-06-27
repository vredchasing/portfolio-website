import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HeaderMain(){

    return(
        <header className='header'>
            <nav className="navbar">
                <div className='logo-container'><h1 className="logo">VISIO</h1></div>
                <div className="middleheader">
                    <h2 className="middle-header-links">HOME</h2>
                    <h2 className="middle-header-links">PROJECTS</h2>
                    <h2 className="middle-header-links">CONTACT US</h2>
                </div>
                <div className='navlinks-container'>
                </div>
            </nav>
        </header>
    )
}


export default HeaderMain
