import React from "react";

const Contact = () => {
    return (
        <section className="contactSection" id="contact">
            <div className="text">
                <h1>Contact</h1>
                <p>Feel free to reach out!</p>
            </div>

            <ul className="links">
                <li className="link">
                    <img className="icons" src="/assets/mail.png" alt="Email"/>
                    <a href="mailto:oliveralvarezliwanag@gmail.com">oliveralvarezliwanag@gmail.com</a>
                </li>
                <li className="link">
                    <img className="icons" src="/assets/call.png" alt="Phone"/>
                    <a href="tel:09605116853">09605116853</a>
                </li>
                <li className="link">
                    <a href="https://www.facebook.com/o.oliverliwanag/">
                        <img className="socials" src="/assets/facebook.png" alt="facebook" />
                    </a>
                    <a href="https://www.facebook.com/o.oliverliwanag/">
                        <img className="socials" src="/assets/instagram.png" alt="facebook" />
                    </a>
                    <a href="https://github.com/oliverliwanag">
                        <img className="socials" src="/assets/github.png" alt="facebook" />
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Contact;