import React from "react";
import memesData from "./memeData";

function Meme(){

    //const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    
    function getMemeImage(){
        const memeArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length);
        const url = memeArray[randomIndex].url

    
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
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
            <img src={meme.randomImage} className="meme-image"/>
        </main>
    )
}

export default Meme