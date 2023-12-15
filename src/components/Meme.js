import React from "react";
import memesData from "./memeData";

function Meme(){
    
    function getMemeImage(imageArr){
        const memeArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        const memeUrl= memeArray[randomIndex].url 

        return memeUrl;
        }


    
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
            
            <button type="button" id="submit" className="button-form">Get a new meme image</button>
            </div>
        </main>
    )
}

export default Meme