import React from "react";
import memesData from "./memeData";

function Meme(){
    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage(imageArr){
        const memeArray = memesData.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length);

        setMemeImage( memeImage => (
            memeImage = memeArray[randomIndex].url
        ))
        }

    return(
        <main className="form-content">
            <div className="form-body">
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
            
            <button type="button" id="submit" className="button-form" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeImage} className="meme-image"/>
        </main>
    )
}

export default Meme