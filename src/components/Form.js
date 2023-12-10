import React from "react";

function form(){
    return(
        <div className="body-form">
            <div className="form-top">
            <p>Top text</p>
            <input type="text" id="inputField" placeholder="Enter text" className="input-text"/>
            </div>

            <div className="form-bottom">
            <p>Bottom text</p>
            <input type="text" id="inputField" placeholder="Enter text" className="input-text" />
            </div>
            
            <button type="button" id="submit" className="button-form">Get new meme image</button>

        </div>
    )
}

export default form