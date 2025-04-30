import React from "react";

const Hero = () => {
    return (
        <section className="heroSection">
            <div className="heroContent">
                <h1 className="introText">John Oliver <span className="highlight">Liwanag</span></h1>
                <p className="description">IT student with a passion for design and development.
                </p>
                <a href="#about" className="moreBtn">More About Me</a>
            </div>
            <img src="/assets/icon.png" alt="Image of Me" className="heroImg" />

        </section>
    )
}

export default Hero;