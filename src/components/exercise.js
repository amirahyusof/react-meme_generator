import React from "react";

function App(){
    function handleClick(){
        console.log("I was clicked")
    }

    function handleMouseOver(){
        console.log("Image over")
    }
    return(
        <div className="container">
            <img 
            onMouseOver={handleMouseOver} 
            src="https://static.vecteezy.com/system/resources/previews/019/926/669/non_2x/headphone-coffee-and-phone-on-wood-background-and-texture-with-space-free-photo.jpg" 
            className="exercise-image" />
            <button 
            onClick={handleClick} 
            className="exercise-button">Click me</button>
        </div>
    )
}

export default App