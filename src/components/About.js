import React from "react";
import blogData from "../data/blog";
// https://via.placeholder.com/215
function About(props) {
    return (
        <aside>
            {props.image ? <img src={props.image} alt="blog logo"/> :  <img src="https://via.placeholder.com/215" alt="blog logo"/>}
            <p>{props.about}</p>
        </aside>
    )
}

export default About