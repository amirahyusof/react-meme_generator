import React from "react";

function Meme(){

    //const [memeImage, setMemeImage] = React.useState("")
    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    React.useEffect(() => {
        function getMemes(){
            const res = await  fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])
    
    function getMemeImage(){
        const randomIndex = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomIndex].url

    
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url
        }))
    }

    function handleInput(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name]: value
        }))
    }


    return(
        <main className="form-content">
            <div className="form-body">
            <input 
                type="text" 
                id="inputField" 
                placeholder="Top Text" 
                className="input-text"
                name="topText"
                value={meme.topText}
                onChange={handleInput}
            />

            <input 
                type="text" 
                id="inputField" 
                placeholder="Bottom text" 
                className="input-text"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleInput}
            />
            
            <button 
                 type="button" 
                 id="submit" 
                 className="button-form" 
                 onClick={getMemeImage}>
                    Get a new meme image
            </button>
            </div>
            <img src={meme.randomImage} className="meme-image"/>
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </main>
    )
}

export default Meme