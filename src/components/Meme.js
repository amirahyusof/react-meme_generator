import React from "react";

function Meme(){
    return(
        <main className="body-form">
            <form className="form">
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
            </form>
        </main>
    )
}

export default Meme