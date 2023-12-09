import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./components/header";


const display = document.getElementById('root');

function Main(){
    return(
        <div>
            <Header />
        </div>
    )
}

ReactDOM.render(<Main />, display)