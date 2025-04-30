import React from "react";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skillsSection">
                <h1 className="header">Skills</h1>
                <div className="skills">
                    <div className="skill">
                        <img src="/assets/editing.jpg" alt="About" className="skillsImg" />
                        <h2>Editing</h2>
                    </div>
                    <div className="skill">
                        <img src="/assets/digitalart.jpg" alt="About" className="skillsImg" />
                        <h2>Digital Art</h2>
                    </div>
                    <div className="skill">
                        <img src="/assets/designing.jpg" alt="About" className="skillsImg" />
                        <h2>Designing</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;