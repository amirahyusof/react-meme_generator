import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./components/header";
import Meme from "./components/Meme";


const display = document.getElementById('root');

function Main(){
    return(
        <div>
            <Header />
            <Meme />
        </div>
    )
}

ReactDOM.render(<Main />, display)