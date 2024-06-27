import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function HeaderMain(){

    return(
        <header className='header'>
            <nav className="navbar">
                <div className='logo-container'><h1 className="logo">VISIO</h1></div>
            </nav>
        </header>
    )
}


export default HeaderMain
