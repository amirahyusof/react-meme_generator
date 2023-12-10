import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Header from "./components/header";
import Form from "./components/Form";


const display = document.getElementById('root');

function Main(){
    return(
        <div>
            <Header />
            <Form />
        </div>
    )
}

ReactDOM.render(<Main />, display)