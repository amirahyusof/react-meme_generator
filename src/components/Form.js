import React from "react";

function form(){
    return(
        <div className="body">
            <div className="form">
            <p>Top text</p>
            <input type="text" id="inputField" placeholder="Enter top text" />
            
            <p>Bottom text</p>
            <input type="text" id="inputField" placeholder="Enter bottom text" />
            </div>
            
            <button type="button" id="submit" className="button">Get new meme image</button>

        </div>
    )
}

export default form