function Footer () {

    return(
        <div className="footer-wrapper">
        <div className="left-footer">
            <div className="contact-me-container">
                <h2 className="contact-me-text">Developed by vredchasing</h2>
            </div>
        </div>
        <div className="right-footer">
            <div className="contact-link-container">
                <img className="contact-link-icons" src='instagram_logo.webp'></img>
                <img className="contact-link-icons" src='x_logo.png'></img>
                <img className="contact-link-icons-email" src='email.webp'></img>
                <div className="linkedin-logo-container">
                    <h1 className="linkedin-logo">in</h1>
                </div>
                <img className="contact-link-icons-github" src='github_logo.png'></img>
            </div>
        </div>
    </div>
    )
}

export default Footer
