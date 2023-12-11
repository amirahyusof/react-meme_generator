import React from "react";

function Header(){
    return(
        <div className="header">
            <img src={process.env.PUBLIC_URL + '/image/bird-logo.png'} alt="logo" className="logo" />
            <h2 className="title">MemeGenerator</h2>
            <h4 className="project-name">React Course - Project 3</h4>
        </div>
    )
}

export default Header