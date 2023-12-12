import React from "react";
import memesData from "./memeData";

function Meme(){
    
    return(
        <main className="body-form">
            <div className="form">
            <input 
                type="text" 
                id="inputField" 
                placeholder="Top Text" 
                className="input-text"/>

            <input 
                type="text" 
                id="inputField" 
                placeholder="Bottom text" 
                className="input-text"/>
            
            <button type="button" id="submit" className="button-form">Get new meme image</button>
            </div>
        </main>
    )
}

export default Meme