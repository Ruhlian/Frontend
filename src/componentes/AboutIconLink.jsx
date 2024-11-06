import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

const AboutconLInk = () => {
    return(
        <div className="about-link">
            <Link to="/About">
            <FaQuestion size={30}/>
            </Link>
        </div>
    )
}

export default AboutconLInk